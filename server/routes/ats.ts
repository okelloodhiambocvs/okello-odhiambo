import { Router, Request, Response } from "express";
import { Type } from "@google/genai";
import { getGeminiAI } from "../services/gemini";
import { sanitizeInput } from "../utils/sanitize";
import {
  extractReadableTextFromPdfBuffer,
  generateHighQualityMockATS,
  parseTargetKeywords,
} from "../utils/atsMock";

const router = Router();
const GEMINI_ATS_MODEL = "gemini-4-hydrogen";
const GEMINI_FALLBACK_MODEL = "gemini-3.1-flash-lite";

function parseCleanGeminiMessage(rawMessage: string): string {
  const trimmed = (rawMessage || "").trim();
  if (trimmed.startsWith("{")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed?.error?.message) return String(parsed.error.message);
      if (parsed?.message) return String(parsed.message);
    } catch {
      // fall through to raw message
    }
  }
  return trimmed || "Gemini service request failed.";
}

function isTransientAiError(error: any): boolean {
  const statusCode =
    typeof error?.status === "number"
      ? error.status
      : typeof error?.statusCode === "number"
        ? error.statusCode
        : 0;
  const rawMessage = typeof error?.message === "string" ? error.message.toUpperCase() : "";
  return (
    statusCode === 429 ||
    statusCode === 500 ||
    statusCode === 502 ||
    statusCode === 503 ||
    statusCode === 504 ||
    rawMessage.includes("UNAVAILABLE") ||
    rawMessage.includes("HIGH DEMAND") ||
    rawMessage.includes("RESOURCE_EXHAUSTED") ||
    rawMessage.includes("TIMEOUT") ||
    rawMessage.includes("ECONNRESET")
  );
}

function extractGeminiErrorDetails(error: any): { status: number; message: string } {
  const statusCode =
    typeof error?.status === "number"
      ? error.status
      : typeof error?.statusCode === "number"
        ? error.statusCode
        : 502;

  const cleanMessage = parseCleanGeminiMessage(typeof error?.message === "string" ? error.message : "");

  if (statusCode === 400 || cleanMessage.includes("API_KEY_INVALID")) {
    return {
      status: 400,
      message: "Invalid Gemini API key configuration. Please verify GEMINI_API_KEY in Settings > Secrets.",
    };
  }
  if (statusCode === 403 || cleanMessage.includes("PERMISSION_DENIED")) {
    return {
      status: 403,
      message: "Gemini API permission denied. Please verify your GEMINI_API_KEY access in Settings > Secrets.",
    };
  }
  if (statusCode === 429 || cleanMessage.includes("RESOURCE_EXHAUSTED")) {
    return {
      status: 429,
      message: "Gemini API quota exceeded. Please wait briefly or verify billing tier in Settings > Secrets.",
    };
  }
  if (statusCode === 404 || cleanMessage.includes("NOT_FOUND")) {
    return {
      status: 404,
      message: `Requested Gemini model (${GEMINI_ATS_MODEL}) was not found or is unavailable for this key.`,
    };
  }

  return {
    status: statusCode >= 400 && statusCode < 600 ? statusCode : 502,
    message: cleanMessage,
  };
}

// POST /api/ats/parse-file
router.post("/parse-file", async (req: Request, res: Response) => {
  try {
    const { fileDataBase64, mimeType, fileName } = req.body || {};

    if (!fileDataBase64 || typeof fileDataBase64 !== "string") {
      return res.status(400).json({ error: "Missing valid base64 file string payload." });
    }

    if (fileDataBase64.length > 20 * 1024 * 1024) {
      return res.status(413).json({ error: "Uploaded document exceeds the 15MB limit." });
    }

    const normalizedMime = typeof mimeType === "string" && mimeType.trim() ? mimeType.trim() : "application/pdf";

    // Plain text / markdown payload decoded directly on server too
    if (normalizedMime === "text/plain" || normalizedMime === "text/markdown") {
      const decodedText = sanitizeInput(Buffer.from(fileDataBase64, "base64").toString("utf8"), 40000);
      if (!decodedText) {
        return res.status(422).json({ error: "No readable text found in uploaded document." });
      }
      return res.json({
        text: decodedText,
        demoMode: false,
        engine: "plain-text-decoder",
      });
    }

    const ai = getGeminiAI();

    if (!ai) {
      const extractedText = sanitizeInput(
        extractReadableTextFromPdfBuffer(Buffer.from(fileDataBase64, "base64")),
        40000
      );

      if (extractedText.length >= 60) {
        return res.json({
          text: extractedText,
          demoMode: true,
          engine: "pdf-stream-parser",
        });
      }

      return res.status(422).json({
        error: `Could not extract selectable text from "${sanitizeInput(fileName || "PDF", 80)}" without an active AI document parser. Please paste your CV text directly, upload a .txt/.md file, or configure GEMINI_API_KEY in Settings > Secrets.`,
      });
    }

    const prompt =
      "Extract all text content from this resume/CV document accurately and cleanly. Preserve names, contact info, job titles, dates, technical skills, bullet achievements, and education details as clean plain text with no commentary.";

    let parsedText = "";
    let usedModel = GEMINI_ATS_MODEL;
    let lastError: any = null;

    for (const modelName of [GEMINI_ATS_MODEL, GEMINI_FALLBACK_MODEL]) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: {
            parts: [
              {
                inlineData: {
                  data: fileDataBase64,
                  mimeType: normalizedMime,
                },
              },
              { text: prompt },
            ],
          },
        });
        parsedText = sanitizeInput(response.text || "", 40000);
        usedModel = modelName;
        lastError = null;
        break;
      } catch (err: any) {
        lastError = err;
        if (!isTransientAiError(err)) {
          throw err;
        }
      }
    }

    if (lastError) {
      const extractedText = sanitizeInput(
        extractReadableTextFromPdfBuffer(Buffer.from(fileDataBase64, "base64")),
        40000
      );
      if (extractedText.length >= 60) {
        return res.json({
          text: extractedText,
          demoMode: false,
          engine: "pdf-stream-parser",
        });
      }
      throw lastError;
    }

    if (!parsedText) {
      return res.status(422).json({ error: "Gemini returned empty text for this document." });
    }

    return res.json({
      text: parsedText,
      demoMode: false,
      engine: usedModel,
    });
  } catch (error: any) {
    console.error("Error parsing file with Gemini:", error);
    const { status, message } = extractGeminiErrorDetails(error);
    return res.status(status).json({ error: message });
  }
});

// POST /api/ats/analyze
router.post("/analyze", async (req: Request, res: Response) => {
  try {
    const resumeText = sanitizeInput(req.body?.resumeText, 40000);
    const jobDescription = sanitizeInput(req.body?.jobDescription, 12000);
    const rawTargetKeywords = req.body?.targetKeywords;
    const sanitizedKeywordString = Array.isArray(rawTargetKeywords)
      ? rawTargetKeywords.map((k) => sanitizeInput(k, 80)).filter(Boolean)
      : sanitizeInput(rawTargetKeywords, 2000);

    if (!resumeText || resumeText.length < 20) {
      return res.status(400).json({
        error: "Please provide at least 20 characters of resume/CV content before running ATS keyword analysis.",
      });
    }

    const explicitKeywords = parseTargetKeywords(sanitizedKeywordString);
    const deterministicBaseline = generateHighQualityMockATS(
      resumeText,
      jobDescription,
      explicitKeywords
    );

    const ai = getGeminiAI();

    if (!ai) {
      return res.json({
        ...deterministicBaseline,
        engine: "keyword-engine",
        analyzedAt: new Date().toISOString(),
        demoMode: true,
      });
    }

    const targetKeywordsBlock =
      explicitKeywords.length > 0
        ? explicitKeywords.join(", ")
        : deterministicBaseline.targetKeywordsUsed.join(", ");

    const prompt = `You are a senior Applicant Tracking System (ATS) parser and executive CV strategist.
Analyze the candidate's CV strictly against the target job description and required ATS keywords.

Resume / CV Content:
"""
${resumeText}
"""

Target Job Description:
"""
${jobDescription || "Evaluate against domain-appropriate senior software engineering or executive consultancy standards."}
"""

Priority Target Keywords to Audit:
"""
${targetKeywordsBlock}
"""

Instructions:
1. Check every priority target keyword and important job-description keyword against the CV. List accurately matched keywords in "matchingKeywords" and missing high-impact keywords in "missingKeywords".
2. Calculate "score" (0-100) and "keywordMatchRate" (0-100) honestly based on keyword coverage, quantified metrics, structure, and active phrasing.
3. Provide 3-4 actionable "formatFeedback" bullets (prefix strong points with "Strong:" or "Clear use:" and issues with "Warning:" or "Action required:") and 3-4 "contentFeedback" bullets.
4. Write a concise 3-4 sentence plain-text "optimizedSummary" (no markdown asterisks) weaving in top matched strengths and critical missing keywords cleanly.`;

    let responseText = "";
    let usedModel = GEMINI_ATS_MODEL;
    let lastError: any = null;

    for (const modelName of [GEMINI_ATS_MODEL, GEMINI_FALLBACK_MODEL]) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "Overall ATS compatibility score from 0 to 100." },
                keywordMatchRate: { type: Type.INTEGER, description: "Percentage of target keywords matched (0 to 100)." },
                matchingKeywords: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Target keywords present in the resume.",
                },
                missingKeywords: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Important target keywords missing from the resume.",
                },
                formatFeedback: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "3 to 4 formatting and parser structure checks.",
                },
                contentFeedback: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "3 to 4 phrasing, action-verb, and metric recommendations.",
                },
                optimizedSummary: {
                  type: Type.STRING,
                  description: "Plain-text 3-4 sentence executive profile summary integrating priority keywords.",
                },
              },
              required: [
                "score",
                "keywordMatchRate",
                "matchingKeywords",
                "missingKeywords",
                "formatFeedback",
                "contentFeedback",
                "optimizedSummary",
              ],
            },
          },
        });

        responseText = (response.text || "").replace(/```json/gi, "").replace(/```/g, "").trim();
        usedModel = modelName;
        lastError = null;
        break;
      } catch (err: any) {
        lastError = err;
        if (!isTransientAiError(err)) {
          throw err;
        }
      }
    }

    if (lastError) {
      console.warn("Gemini AI transiently unavailable, serving deterministic ATS keyword engine:", lastError?.message || lastError);
      return res.json({
        ...deterministicBaseline,
        engine: "keyword-engine",
        analyzedAt: new Date().toISOString(),
        demoMode: false,
      });
    }

    if (!responseText) {
      return res.json({
        ...deterministicBaseline,
        engine: "keyword-engine",
        analyzedAt: new Date().toISOString(),
        demoMode: false,
      });
    }

    let parsedData: any;
    try {
      parsedData = JSON.parse(responseText);
    } catch (parseErr) {
      console.error("JSON parse error from Gemini output:", parseErr, "Raw output:", responseText);
      return res.json({
        ...deterministicBaseline,
        engine: "keyword-engine",
        analyzedAt: new Date().toISOString(),
        demoMode: false,
      });
    }

    const normalizedScore =
      typeof parsedData.score === "number"
        ? Math.min(100, Math.max(0, Math.round(parsedData.score)))
        : deterministicBaseline.score;

    const matchingKeywords = Array.isArray(parsedData.matchingKeywords)
      ? parsedData.matchingKeywords.map(String).filter(Boolean)
      : deterministicBaseline.matchingKeywords;

    const missingKeywords = Array.isArray(parsedData.missingKeywords)
      ? parsedData.missingKeywords.map(String).filter(Boolean)
      : deterministicBaseline.missingKeywords;

    const totalTracked = matchingKeywords.length + missingKeywords.length;
    const keywordMatchRate =
      typeof parsedData.keywordMatchRate === "number"
        ? Math.min(100, Math.max(0, Math.round(parsedData.keywordMatchRate)))
        : totalTracked > 0
          ? Math.round((matchingKeywords.length / totalTracked) * 100)
          : deterministicBaseline.keywordMatchRate;

    return res.json({
      score: normalizedScore,
      keywordMatchRate,
      targetKeywordsUsed:
        explicitKeywords.length > 0
          ? explicitKeywords
          : Array.from(new Set([...matchingKeywords, ...missingKeywords])),
      matchingKeywords,
      missingKeywords,
      formatFeedback: Array.isArray(parsedData.formatFeedback)
        ? parsedData.formatFeedback.map(String).filter(Boolean)
        : deterministicBaseline.formatFeedback,
      contentFeedback: Array.isArray(parsedData.contentFeedback)
        ? parsedData.contentFeedback.map(String).filter(Boolean)
        : deterministicBaseline.contentFeedback,
      optimizedSummary:
        typeof parsedData.optimizedSummary === "string" && parsedData.optimizedSummary.trim()
          ? parsedData.optimizedSummary.trim()
          : deterministicBaseline.optimizedSummary,
      sectionAudit: deterministicBaseline.sectionAudit,
      engine: usedModel,
      analyzedAt: new Date().toISOString(),
      demoMode: false,
    });
  } catch (error: any) {
    console.error("Error running ATS analysis via Gemini API:", error);
    const { status, message } = extractGeminiErrorDetails(error);
    return res.status(status).json({ error: message });
  }
});

export default router;
