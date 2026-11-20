import React from "react";
import { Upload, Sparkles, FileText, Download, AlertCircle, RefreshCw, Info, Tag, RotateCcw } from "lucide-react";
import { generateCvPdf } from "../../utils/generateCvPdf";

interface AtsInputPanelProps {
  resumeText: string;
  setResumeText: (val: string) => void;
  jobDescription: string;
  setJobDescription: (val: string) => void;
  targetKeywords: string;
  setTargetKeywords: (val: string) => void;
  parsingFile: boolean;
  analyzing: boolean;
  errorText: string;
  isDragOver: boolean;
  backendStatus: "checking" | "online" | "offline";
  engineMode: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  pasteSampleResume: () => void;
  applyKeywordPreset: (keywords: string, jdHint?: string) => void;
  clearInputs: () => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDragLeave: () => void;
  handleDrop: (e: React.DragEvent) => void;
  executeAnalysis: () => void;
}

const KEYWORD_PRESETS = [
  {
    label: "Full-Stack Tech",
    keywords: "Golang (Go), TypeScript, React, Node.js, PostgreSQL, REST APIs, Docker, CI/CD, Git & GitHub",
    jdHint: "Full-Stack Software Engineer building scalable Go and TypeScript web applications, React dashboards, REST APIs, PostgreSQL databases, and Docker CI/CD pipelines.",
  },
  {
    label: "Executive & Grants",
    keywords: "Executive Branding, ATS Optimization, Grant Writing, Business Proposals, Stakeholder Alignment, Project Management",
    jdHint: "Executive Consultant & Communications Lead authoring grant proposals, institutional company profiles, and stakeholder briefings.",
  },
  {
    label: "Product & Agile Lead",
    keywords: "Project Management, Agile / Scrum, System Design, Data Analytics & KPIs, Leadership & Mentorship, M-Pesa API",
    jdHint: "Technical Project Manager leading cross-functional software engineering sprints, stakeholder reviews, KPI tracking, and fintech integrations.",
  },
];

export default function AtsInputPanel({
  resumeText,
  setResumeText,
  jobDescription,
  setJobDescription,
  targetKeywords,
  setTargetKeywords,
  parsingFile,
  analyzing,
  errorText,
  isDragOver,
  backendStatus,
  engineMode,
  fileInputRef,
  pasteSampleResume,
  applyKeywordPreset,
  clearInputs,
  handleFileUpload,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  executeAnalysis,
}: AtsInputPanelProps) {
  const parsedKeywordTags = targetKeywords
    .split(/[,\n;|]+/)
    .map((k) => k.trim())
    .filter((k) => k.length >= 2);

  return (
    <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-serif text-xl font-bold text-[#0C1E36] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#f80d05]" /> Executive Profile Inputs
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 mt-1">
              <span
                className={`w-2 h-2 rounded-full ${
                  backendStatus === "online"
                    ? "bg-emerald-500"
                    : backendStatus === "offline"
                      ? "bg-[#f80d05]"
                      : "bg-amber-400"
                }`}
              />
              {backendStatus === "online"
                ? engineMode === "gemini-4-hydrogen"
                  ? "Backend Ready · Gemini AI & Keyword Engine"
                  : "Backend Ready · Live ATS Keyword Engine"
                : backendStatus === "offline"
                  ? "Backend Unreachable"
                  : "Connecting to ATS Server..."}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={generateCvPdf}
              className="px-3 py-1.5 rounded bg-[#f80d05]/10 hover:bg-[#f80d05]/15 border border-[#f80d05]/30 text-[#f80d05] font-mono text-xs font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1.5 transition-colors"
              title="Download Official CV in PDF format"
            >
              <Download className="w-3.5 h-3.5 text-[#f80d05]" /> Official CV (PDF)
            </button>
            <button
              type="button"
              onClick={pasteSampleResume}
              className="px-3 py-1.5 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0C1E36] font-mono text-xs font-bold uppercase tracking-wide cursor-pointer transition-colors"
            >
              Load Sample
            </button>
            {(resumeText || jobDescription || targetKeywords) && (
              <button
                type="button"
                onClick={clearInputs}
                className="px-2.5 py-1.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 font-mono text-xs font-bold uppercase cursor-pointer flex items-center gap-1 transition-colors"
                title="Clear all inputs"
              >
                <RotateCcw className="w-3 h-3" /> Clear
              </button>
            )}
          </div>
        </div>

        {/* 1. Resume/CV Drag & Drop Textarea */}
        <div className="relative">
          <label
            htmlFor="ats-resume-input"
            className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-2 font-bold flex justify-between items-center"
          >
            <span>1. Paste Your Resumé/CV or Upload File *</span>
            {parsingFile && (
              <span className="text-[#f80d05] animate-pulse text-xs flex items-center gap-1 font-bold lowercase">
                <RefreshCw className="w-3.5 h-3.5 animate-spin duration-1000" /> extracting document text...
              </span>
            )}
          </label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative rounded-xl border border-dashed transition-all duration-300 overflow-hidden ${
              isDragOver
                ? "border-[#f80d05] bg-[#f80d05]/5 scale-[0.99]"
                : "border-slate-300 bg-slate-50"
            }`}
          >
            <textarea
              id="ats-resume-input"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              disabled={parsingFile}
              placeholder="Paste your CV/resume text or drop a .txt, .md, or .pdf document here..."
              className="w-full h-44 p-4 bg-transparent text-slate-700 text-sm tracking-wide leading-relaxed focus:outline-none focus:ring-0 placeholder:text-slate-400 resize-y font-sans font-normal"
            />

            {!resumeText && !parsingFile && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                <Upload className="w-8 h-8 text-slate-400 mb-2" />
                <span className="block text-sm text-slate-500 font-sans">
                  Drag &amp; drop PDF or TXT files here, or paste your CV text
                </span>
              </div>
            )}

            {parsingFile && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/95 p-4 text-center z-10">
                <RefreshCw className="w-8 h-8 text-[#f80d05] animate-spin mb-2" />
                <span className="block text-sm text-[#f80d05] font-sans font-bold">
                  Reading CV Document...
                </span>
                <span className="block text-xs text-slate-500 font-mono mt-1">
                  Extracting sections, titles, and keywords on backend
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-2 px-1">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={parsingFile}
              className={`text-xs font-mono font-bold cursor-pointer flex items-center gap-1 ${
                parsingFile ? "text-slate-400 cursor-not-allowed" : "text-[#f80d05] hover:text-[#d40b04]"
              }`}
            >
              + Upload Resumé PDF or Text
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt,.md"
              onChange={handleFileUpload}
              className="hidden"
            />
            <span className="text-xs font-mono text-slate-500 font-medium">
              {resumeText.trim() ? `${resumeText.trim().split(/\s+/).length} words · ` : ""}
              {resumeText.length} chars
            </span>
          </div>
        </div>

        {/* 2. Target ATS Keywords Input + Presets */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label
              htmlFor="ats-keywords-input"
              className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold flex items-center gap-1.5"
            >
              <Tag className="w-3.5 h-3.5 text-[#f80d05]" /> 2. Priority Target Keywords (Comma-Separated)
            </label>
            <span className="text-xs font-mono text-slate-500">
              {parsedKeywordTags.length} tracked
            </span>
          </div>
          <input
            id="ats-keywords-input"
            type="text"
            value={targetKeywords}
            onChange={(e) => setTargetKeywords(e.target.value)}
            placeholder="e.g. Golang, TypeScript, React, Docker, PostgreSQL, Grant Writing, Agile"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#f80d05] text-slate-700 text-sm tracking-wide placeholder:text-slate-400 font-sans"
          />
          <div className="flex flex-wrap items-center gap-2 mt-2.5">
            <span className="text-xs font-mono text-slate-500 font-semibold">Quick keyword packs:</span>
            {KEYWORD_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => applyKeywordPreset(preset.keywords, preset.jdHint)}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-[#f80d05] hover:text-white text-[#0C1E36] text-xs font-mono font-bold transition-colors cursor-pointer"
              >
                + {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Job description parameters input */}
        <div>
          <label
            htmlFor="ats-jd-input"
            className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-2 font-bold"
          >
            3. Targeted Job Description (Optional)
          </label>
          <textarea
            id="ats-jd-input"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste target job listing or role requirements to automatically extract missing industry keywords..."
            className="w-full h-24 p-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#f80d05] text-slate-700 text-sm tracking-wide leading-relaxed placeholder:text-slate-400 resize-none font-sans"
          />
        </div>

        {errorText && (
          <div
            role="alert"
            className="p-4 rounded-xl bg-[#f80d05]/10 border border-[#f80d05]/30 text-[#0C1E36] text-sm flex items-start gap-2.5 font-sans font-medium"
          >
            <AlertCircle className="w-5 h-5 text-[#f80d05] shrink-0 mt-0.5" />
            <span>{errorText}</span>
          </div>
        )}
      </div>

      {/* Compute Actions Footer */}
      <div className="pt-8 border-t border-slate-100 mt-8">
        <button
          type="button"
          onClick={executeAnalysis}
          disabled={analyzing || parsingFile}
          className={`w-full py-4 rounded font-mono font-bold text-xs sm:text-sm uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
            analyzing || parsingFile
              ? "bg-slate-200 border border-slate-300 text-slate-500 cursor-not-allowed"
              : "bg-[#f80d05] hover:bg-[#d40b04] text-white shadow-sm"
          }`}
        >
          {analyzing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-white" /> Computing ATS Keyword Audit...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-white" /> Run Strategic ATS Assessment
            </>
          )}
        </button>
        <div className="flex justify-center items-center gap-1.5 mt-3">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs font-mono tracking-wide text-slate-500 font-medium">
            Powered by House Ventures ATS Keyword Engine &amp; Gemini AI Schema
          </span>
        </div>
      </div>
    </div>
  );
}
