import { Router, Request, Response } from "express";
import { getGeminiAI } from "../services/gemini";
import { sanitizeInput } from "../utils/sanitize";
import { generateHighQualityMockATS } from "../utils/atsMock";

const router = Router();

// POST /api/ats/parse-file
router.post("/parse-file", async (req: Request, res: Response) => {
  try {
    const { fileDataBase64, mimeType } = req.body;
    
    if (!fileDataBase64 || typeof fileDataBase64 !== "string") {
      return res.status(400).json({ error: "Missing valid base64 file string payload." });
    }

    const ai = getGeminiAI();

    if (!ai) {
      console.warn("GEMINI_API_KEY is not defined. Falling back to native PDF decoder mock mode.");
      return res.json({
        text: `[DECODED PDF DOCUMENT CONTENT]
BRAYAN OKELLO ODHIAMBO
Mobile: +254 728 606 684 | Email: okelloodhiambocvs@gmail.com
Address: P.O. Box 1178, Kisumu, Kenya | Nairobi, Kenya

PROFESSIONAL PROFILE
Results-Driven Full-Stack Developer and Executive Communication Consultant combining software engineering expertise with product leadership, digital strategy, and business communication. Developer Zone Zero One (Zone01 Kisumu) software architect. Founder of House Ventures Consultancy with 5+ years of experience delivering over 1,000+ ATS-optimized executive CVs.

TECHNICAL SKILLS:
Languages: Golang (Go), TypeScript, JavaScript, SQL, HTML5, CSS3, C/C++
Frameworks & Databases: React, Node.js, Express, PostgreSQL, MySQL, Redis, REST APIs, gRPC, M-Pesa API
Tools: Git, GitHub, Docker, Linux, Postman, Figma, CI/CD pipelines

PROFESSIONAL EXPERIENCE:
Junior Full-Stack Developer | Zone01 Kisumu (March 2026 - Present)
- Architecting microservices and web apps in Go, JavaScript, TypeScript, and React.
- Engineered Kasify service marketplace with M-Pesa escrow verification.
- Leading 8-member multidisciplinary team as Project Manager for Ujuzi360 LMS.

Founder & Lead Strategist | House Ventures Consultancy (2024 - Present)
- Formulated 1,000+ ATS CVs, cover letters, and grant proposals for high-impact clients.
- Boosted client funding readiness and social reach by +1,500 qualified metrics.`,
        demoMode: true
      });
    }

    const prompt = `Extract all text content from this resume document accurately and cleanly. Preserve all names, dates, job titles, technical skills, companies, bullet points, and education details. Output plain text without commentary.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                data: fileDataBase64,
                mimeType: mimeType || "application/pdf"
              }
            },
            { text: prompt }
          ]
        }
      ]
    });

    const parsedText = response.text || "";
    res.json({ text: parsedText, demoMode: false });
  } catch (error: any) {
    console.error("Error parsing file with Gemini:", error);
    res.status(500).json({ error: "Failed to parse document content on server." });
  }
});

// POST /api/ats/analyze
router.post("/analyze", async (req: Request, res: Response) => {
  try {
    const rawResumeText = req.body?.resumeText;
    const rawJobDescription = req.body?.jobDescription;

    const resumeText = sanitizeInput(rawResumeText, 40000);
    const jobDescription = sanitizeInput(rawJobDescription, 10000);

    if (!resumeText) {
      return res.status(400).json({ error: "Resume text payload is required for ATS assessment." });
    }

    const ai = getGeminiAI();

    if (!ai) {
      console.warn("GEMINI_API_KEY is missing. Operating in fallback mode.");
      const mockResult = generateHighQualityMockATS(resumeText, jobDescription);
      return res.json({ ...mockResult, demoMode: true });
    }

    const prompt = `You are a high-tier Applicant Tracking System (ATS) audit algorithm and elite C-suite CV copywriting strategist.
Evaluate the candidate's Resume/CV text against the optional target Job Description provided below.

Resume Text:
"""
${resumeText}
"""

Target Job Description (or default target if blank):
"""
${jobDescription || "Software Engineering, Executive Leadership, Full-Stack Web Development, Go / TypeScript / React, Project Management, Strategic Communications, ATS CV Copywriting, Grant Proposals"}
"""

Return a strictly valid JSON object conforming exactly to this structure (no markdown formatting wrappers outside JSON, no backticks, just raw JSON or standard json block):
{
  "score": <number between 0 and 100 representing overall ATS parsing match ratio>,
  "matchingKeywords": [<array of top matched skills/keywords found in resume>],
  "missingKeywords": [<array of key missing target skills/keywords that should be added>],
  "formatFeedback": [<array of 3 to 4 specific feedback strings regarding formatting, bullet points, chronology, layout>],
  "contentFeedback": [<array of 3 to 4 specific feedback strings regarding action verbs, quantitative metrics, copywriting improvements>],
  "optimizedSummary": "<a 3 to 4 sentence re-architected executive profile summary incorporating top missing keywords and punchy active verbs>"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json"
      }
    });

    const responseText = response.text || "{}";

    try {
      const parsedData = JSON.parse(responseText);
      res.json({ ...parsedData, demoMode: false });
    } catch (parseErr) {
      console.error("JSON parse error from Gemini output:", parseErr, "Raw output:", responseText);
      const cleaned = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
      try {
        const retryParse = JSON.parse(cleaned);
        return res.json({ ...retryParse, demoMode: false });
      } catch (e) {
        console.warn("Failed second attempt to parse Gemini ATS JSON. Returning mock fallback.");
        const fallback = generateHighQualityMockATS(resumeText, jobDescription);
        return res.json({ ...fallback, demoMode: true });
      }
    }
  } catch (error: any) {
    console.error("Error running ATS analysis via Gemini API:", error);
    const mockResult = generateHighQualityMockATS(req.body?.resumeText || "", req.body?.jobDescription || "");
    return res.json({ ...mockResult, demoMode: true });
  }
});

export default router;
