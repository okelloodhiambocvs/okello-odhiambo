import React, { useState, useRef, useEffect } from "react";
import { AtsResult } from "../types";
import { useRenderDiagnostics } from "../hooks/useRenderDiagnostics";
import AtsInputPanel from "./ats/AtsInputPanel";
import AtsResultPanel from "./ats/AtsResultPanel";
import PageHero from "./PageHero";
import { AtsHeroVisual } from "./HeroEmblems";

const getFeedbackItemConfig = (item: string) => {
  const lowercase = item.toLowerCase();
  if (
    lowercase.includes("warning") ||
    lowercase.includes("action required") ||
    lowercase.includes("no clear") ||
    lowercase.includes("passive") ||
    lowercase.includes("too brief") ||
    lowercase.includes("low numeric")
  ) {
    return {
      badgeText: "IMPROVE",
      badgeClass: "bg-[#f80d05]/10 text-[#f80d05] border-[#f80d05]/25",
      iconClass: "bg-[#f80d05]",
      rowClass: "border-[#f80d05]/20 bg-[#f80d05]/[0.03] hover:bg-[#f80d05]/[0.06]",
    };
  }
  if (
    lowercase.includes("good job") ||
    lowercase.includes("strong") ||
    lowercase.includes("optimal") ||
    lowercase.includes("clear use") ||
    lowercase.includes("verified") ||
    lowercase.includes("well-calibrated")
  ) {
    return {
      badgeText: "STRENGTH",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconClass: "bg-emerald-600",
      rowClass: "border-emerald-200 bg-emerald-50/20 hover:bg-emerald-50/40",
    };
  }
  return {
    badgeText: "RECOMMENDED",
    badgeClass: "bg-[#f80d05]/10 text-[#f80d05] border-[#f80d05]/20",
    iconClass: "bg-[#f80d05]",
    rowClass: "border-slate-200 bg-slate-50/40 hover:bg-slate-50/80",
  };
};

export default function AtsBuilder() {
  useRenderDiagnostics("AtsBuilder");
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [targetKeywords, setTargetKeywords] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [parsingFile, setParsingFile] = useState(false);
  const [result, setResult] = useState<AtsResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [backendStatus, setBackendStatus] = useState<"checking" | "online" | "offline">("checking");
  const [engineMode, setEngineMode] = useState<string>("keyword-engine");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/health")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("Health check failed"))))
      .then((data) => {
        if (!active) return;
        setBackendStatus("online");
        if (data?.atsEngine?.mode) {
          setEngineMode(data.atsEngine.mode);
        }
      })
      .catch(() => {
        if (!active) return;
        setBackendStatus("offline");
      });
    return () => {
      active = false;
    };
  }, []);

  const pasteSampleResume = () => {
    setErrorText("");
    setResumeText(`BRAYAN OKELLO ODHIAMBO
Mobile: +254 728 606 684 | +254 786 692 381 | Email: okelloodhiambocvs@gmail.com
Address: P.O. Box 1178, Kisumu, Kenya | Nairobi, Kenya

PROFESSIONAL PROFILE
Results-Driven Full-Stack Developer and Executive Communication Consultant combining software engineering expertise with product leadership, digital strategy, and business communication. Currently developing scalable web applications and Go microservices at Developer Zone Zero One (Zone01 Kisumu). Founder of House Ventures Consultancy with 5+ years of experience delivering over 1,000+ ATS-optimized executive CVs, grant proposals, and strategic digital campaigns across East Africa.

CORE COMPETENCIES
• Technical Competencies: Full-Stack Web Development (JavaScript, Go, React, TypeScript, Node.js, Express), MySQL & PostgreSQL Database Management, REST APIs & gRPC, Docker, Git/GitHub, M-Pesa API Integration.
• Professional & Consulting Competencies: Executive CV Writing & ATS Optimization, C-Suite Brand Strategy, Grant & Proposal Writing, Digital Marketing, Donor Compliance, Agile Project Management, Product Development.

PROFESSIONAL EXPERIENCE
Junior Full-Stack Developer | Zone01 Kisumu (March 2026 – Present)
• Developing scalable full-stack web applications using Go (Golang), JavaScript, TypeScript, React, Node.js, and relational databases (MySQL/PostgreSQL) with Git version control.
• Building Ni-Wera, a Kenyan service marketplace connecting certified plumbers, electricians, and builders with real-time M-Pesa escrow verification.
• Leading an 8-member multidisciplinary team as Project Manager for the Ujuzi360 Learning Management System, coordinating Agile delivery and sprint milestones.
• Solving daily Go progress tasks, internal projects, and checkpoints at Zone01 Kisumu to master language concurrency and microservices.

Founder & Executive Consultant | House Ventures Consultancy (January 2024 – Present / Est. 2021)
• Formulated over 1,000+ ATS-optimized executive CVs, cover letters, and corporate grant proposals for organizations including KEWOTA, ENA Coach Foundation, Wamae & Allen Advocates, CHEMA Initiative, and Infomax Media.
• Developing integrated digital communication strategies for client organizations, generating +1,500 additional social media followers while strengthening brand visibility and funding readiness.
• Advising organizations on donor compliance, branding standards, and executive messaging.

EDUCATION & CERTIFICATIONS
• Bachelor of Arts in Communication and Media Technology with Information Technology — Maseno University (Second Class Honours)
• Advanced Social Media Strategy — HubSpot Academy (2021)
• Fundamentals of Digital Marketing — Grow with Google Africa (2018)
• Brand Activation Certification — Safaricom Activ8 Academy (2016)`);

    setJobDescription(`SENIOR FULL-STACK SOFTWARE ENGINEER & EXECUTIVE CONSULTANT
Target Scope: Advanced web applications, TypeScript, Node.js, Go (Golang) microservices, React dashboards, REST APIs, Docker containerization, Kubernetes, CI/CD, M-Pesa payment gateways, and database management (PostgreSQL/MySQL). Requires expertise in ATS optimization, executive branding, corporate proposals, agile project leadership, and stakeholder alignment.`);

    setTargetKeywords(
      "Golang (Go), TypeScript, React, Node.js, PostgreSQL, Docker, Kubernetes, CI/CD, M-Pesa API, Microservices, Agile / Scrum, Executive Branding, Grant Writing"
    );
  };

  const applyKeywordPreset = (keywords: string, jdHint?: string) => {
    setTargetKeywords(keywords);
    if (!jobDescription.trim() && jdHint) {
      setJobDescription(jdHint);
    }
  };

  const clearInputs = () => {
    setResumeText("");
    setJobDescription("");
    setTargetKeywords("");
    setResult(null);
    setErrorText("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    readTextFromFile(file);
    e.target.value = "";
  };

  const readTextFromFile = (file: File) => {
    setErrorText("");

    if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
      setParsingFile(true);
      const reader = new FileReader();

      reader.onload = async (e) => {
        try {
          const resultUrl = e.target?.result as string;
          const base64Data = resultUrl.split(",")[1];

          const response = await fetch("/api/ats/parse-file", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fileDataBase64: base64Data,
              mimeType: "application/pdf",
              fileName: file.name,
            }),
          });

          const data = await response.json().catch(() => ({}));
          if (!response.ok) {
            throw new Error(data.error || "Failed to parse PDF file on server.");
          }

          setResumeText(data.text || "");
        } catch (err: any) {
          console.error(err);
          setErrorText(err.message || "An error occurred while uploading and parsing your PDF resume.");
        } finally {
          setParsingFile(false);
        }
      };

      reader.onerror = () => {
        setErrorText("Failed to read the selected PDF file.");
        setParsingFile(false);
      };

      reader.readAsDataURL(file);
      return;
    }

    if (
      file.type === "text/plain" ||
      file.type === "text/markdown" ||
      file.name.toLowerCase().endsWith(".txt") ||
      file.name.toLowerCase().endsWith(".md")
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = (e.target?.result as string) || "";
        setResumeText(text);
      };
      reader.onerror = () => {
        setErrorText("Failed to read text file.");
      };
      reader.readAsText(file);
      return;
    }

    setErrorText("Unsupported document format. Please upload a plain text (.txt, .md) or Adobe PDF (.pdf) file.");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      readTextFromFile(file);
    }
  };

  const executeAnalysis = async () => {
    if (resumeText.trim().length < 20) {
      setErrorText("Please paste or upload at least 20 characters of your Resume/CV contents first.");
      return;
    }

    setErrorText("");
    setAnalyzing(true);

    try {
      const response = await fetch("/api/ats/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resumeText,
          jobDescription,
          targetKeywords,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || `ATS analysis failed (HTTP ${response.status}).`);
      }

      setResult(data as AtsResult);
      setBackendStatus("online");
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || "Unable to reach the ATS analysis backend. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const copyToClipboard = () => {
    if (!result?.optimizedSummary) return;
    navigator.clipboard.writeText(result.optimizedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadOptimizedText = () => {
    if (!result) return;
    const element = document.createElement("a");
    const fileContent = `======================================================
OKELLO ODHIAMBO'S SYSTEMIC ATS RESUME AUDIT
======================================================
ATS SCORING RATIO: ${result.score}/100
KEYWORD MATCH RATE: ${result.keywordMatchRate}%
ENGINE: ${result.engine || "keyword-engine"}

-- TARGET KEYWORDS TRACKED (${result.targetKeywordsUsed?.length || 0}):
${(result.targetKeywordsUsed || []).join(", ")}

-- MATCHING KEYWORDS DETECTED:
${result.matchingKeywords.map((k) => `+ ${k}`).join("\n")}

-- MISSING TARGET KEYWORDS TO INJECT:
${result.missingKeywords.map((k) => `- ${k}`).join("\n")}

======================================================
RE-ARCHITECTED EXECUTIVE SUMMARY:
======================================================
${result.optimizedSummary}

======================================================
FORMAT & STRUCTURE SUGGESTIONS:
======================================================
${result.formatFeedback.map((f) => `* ${f}`).join("\n")}

======================================================
PHRASING & METRIC RECOMMENDATIONS:
======================================================
${result.contentFeedback.map((c) => `* ${c}`).join("\n")}
`;
    const file = new Blob([fileContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Okello_ATS_CV_Optimization_Blueprint.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div id="ats-scanner" className="w-full bg-slate-50">
      <PageHero
        kicker="House Ventures Intelligence &"
        titlePrefix="Advanced ATS CV"
        titleHighlight="Audit & Optimizer"
        description="Test your CV against real Applicant Tracking System keyword taxonomies in real time. Paste your CV, supply target job keywords, and let our backend scoring engine measure your match ratio instantly."
        visual={<AtsHeroVisual />}
        scrollTargetId="ats-workspace"
        scrollLabel="Scroll down to AI CV Grader workspace"
      />

      <section id="ats-workspace" className="py-16 sm:py-20 relative overflow-hidden bg-slate-50">
        <div className="absolute top-[20%] left-[-15%] w-[40rem] h-[40rem] bg-[#f80d05]/[0.04] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-15%] w-[35rem] h-[35rem] bg-[#f80d05]/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <AtsInputPanel
              resumeText={resumeText}
              setResumeText={setResumeText}
              jobDescription={jobDescription}
              setJobDescription={setJobDescription}
              targetKeywords={targetKeywords}
              setTargetKeywords={setTargetKeywords}
              parsingFile={parsingFile}
              analyzing={analyzing}
              errorText={errorText}
              isDragOver={isDragOver}
              backendStatus={backendStatus}
              engineMode={engineMode}
              fileInputRef={fileInputRef}
              pasteSampleResume={pasteSampleResume}
              applyKeywordPreset={applyKeywordPreset}
              clearInputs={clearInputs}
              handleFileUpload={handleFileUpload}
              handleDragOver={handleDragOver}
              handleDragLeave={handleDragLeave}
              handleDrop={handleDrop}
              executeAnalysis={executeAnalysis}
            />

            <AtsResultPanel
              result={result}
              analyzing={analyzing}
              copied={copied}
              pasteSampleResume={pasteSampleResume}
              downloadOptimizedText={downloadOptimizedText}
              copyToClipboard={copyToClipboard}
              getFeedbackItemConfig={getFeedbackItemConfig}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
