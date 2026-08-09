import React, { useState, useRef } from "react";
import { AtsResult } from "../types";
import { useRenderDiagnostics } from "../hooks/useRenderDiagnostics";
import AtsInputPanel from "./ats/AtsInputPanel";
import AtsResultPanel from "./ats/AtsResultPanel";

const getFeedbackItemConfig = (item: string) => {
  const lowercase = item.toLowerCase();
  if (
    lowercase.includes("warning") || 
    lowercase.includes("action required") || 
    lowercase.includes("no clear") || 
    lowercase.includes("passive") ||
    lowercase.includes("too brief")
  ) {
    return {
      badgeText: "IMPROVE",
      badgeClass: "bg-rose-50 text-rose-700 border-rose-100",
      iconClass: "bg-rose-500",
      rowClass: "border-rose-100 bg-rose-50/10 hover:bg-rose-50/20"
    };
  }
  if (
    lowercase.includes("good job") || 
    lowercase.includes("strong") || 
    lowercase.includes("optimal") || 
    lowercase.includes("clear use")
  ) {
    return {
      badgeText: "STRENGTH",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
      iconClass: "bg-emerald-500",
      rowClass: "border-emerald-100 bg-emerald-50/10 hover:bg-emerald-50/20"
    };
  }
  return {
    badgeText: "RECOMMENDED",
    badgeClass: "bg-red-50 text-[#f80d05] border-red-100",
    iconClass: "bg-[#f80d05]",
    rowClass: "border-slate-150 bg-slate-50/30 hover:bg-slate-50/65"
  };
};

export default function AtsBuilder() {
  useRenderDiagnostics("AtsBuilder");
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [parsingFile, setParsingFile] = useState(false);
  const [result, setResult] = useState<AtsResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const pasteSampleResume = () => {
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
• Building Kasify, a Kenyan service marketplace connecting certified plumbers, electricians, and builders with real-time M-Pesa escrow verification.
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
Target Scope: Advanced web applications, TypeScript, Node.js, Go (Golang) microservices, React dashboards, REST APIs, M-Pesa payment gateways, and database management (PostgreSQL/MySQL). Requires expertise in ATS resume parsing, executive branding, corporate proposals, agile project leadership, and stakeholder communication.`);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    readTextFromFile(file);
  };

  const readTextFromFile = (file: File) => {
    setErrorText("");
    
    if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
      setParsingFile(true);
      setErrorText("");
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
              mimeType: "application/pdf"
            })
          });
          
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || "Failed to parse PDF file on server.");
          }
          
          const data = await response.json();
          setResumeText(data.text);
          if (data.demoMode) {
            setErrorText("Note: Ran in CV Parsing Demonstration Mode. To parse your real PDF file, configure GEMINI_API_KEY in secrets.");
          }
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

    if (file.type === "text/plain" || file.name.endsWith(".txt") || file.name.endsWith(".md")) {
      setErrorText("");
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setResumeText(text);
      };
      reader.onerror = () => {
        setErrorText("Failed to read text file.");
      };
      reader.readAsText(file);
      return;
    }

    setErrorText("Unsupported document format. Please upload a plain text (.txt, .md) or standard Adobe PDF (.pdf) file.");
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
    if (!resumeText.trim()) {
      setErrorText("Please paste or upload your current Resume/CV contents first.");
      return;
    }
    
    setErrorText("");
    setAnalyzing(true);
    setResult(null);

    try {
      const response = await fetch("/api/ats/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, jobDescription })
      });

      if (!response.ok) {
        throw new Error("Analysis failed. Server returned an error code.");
      }

      const data: AtsResult = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || "An unexpected error occurred. Please try again.");
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

-- MATCHING KEYWORDS DETECTED:
${result.matchingKeywords.map(k => `+ ${k}`).join("\n")}

-- MISSING TARGET KEYWORDS TO INJECT:
${result.missingKeywords.map(k => `- ${k}`).join("\n")}

======================================================
RE-ARCHITECTED SYSTEMIC SUMMARY PREPARATION:
======================================================
${result.optimizedSummary}

======================================================
FORMAT STRUCTURE suggestions:
======================================================
${result.formatFeedback.map(f => `* ${f}`).join("\n")}

======================================================
PHRASING CONTENT CRITIQUES:
======================================================
${result.contentFeedback.map(c => `* ${c}`).join("\n")}
`;
    const file = new Blob([fileContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Okello_ATS_CV_Optimization_Blueprint.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="ats-scanner" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="absolute top-[20%] left-[-15%] w-[40rem] h-[40rem] bg-red-500/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[35rem] h-[35rem] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-[#f80d05] block uppercase mb-3 font-bold">
            Interactive AI Module
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1E36] tracking-tight leading-tight">
            Advanced ATS CV Audit &amp; Optimizer
          </h2>
          <p className="text-slate-650 text-sm mt-4 leading-relaxed font-sans max-w-2xl">
            Test our parsing parameters in real-time. Paste your operational CV data alongside your targeted job parameters below, and let our custom cognitive service calculate your conversion metric instantly.
          </p>
          <div className="h-1 w-20 bg-[#f80d05] mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <AtsInputPanel
            resumeText={resumeText}
            setResumeText={setResumeText}
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            parsingFile={parsingFile}
            analyzing={analyzing}
            errorText={errorText}
            isDragOver={isDragOver}
            fileInputRef={fileInputRef}
            pasteSampleResume={pasteSampleResume}
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
  );
}
