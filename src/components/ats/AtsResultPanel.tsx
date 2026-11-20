import React from "react";
import { HelpCircle, Sparkles, Copy, Check, Download, ArrowUpRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { AtsResult } from "../../types";

interface AtsResultPanelProps {
  result: AtsResult | null;
  analyzing: boolean;
  copied: boolean;
  pasteSampleResume: () => void;
  downloadOptimizedText: () => void;
  copyToClipboard: () => void;
  getFeedbackItemConfig: (item: string) => {
    badgeText: string;
    badgeClass: string;
    iconClass: string;
    rowClass: string;
  };
}

export default function AtsResultPanel({
  result,
  analyzing,
  copied,
  pasteSampleResume,
  downloadOptimizedText,
  copyToClipboard,
  getFeedbackItemConfig,
}: AtsResultPanelProps) {
  return (
    <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm relative min-h-[42rem] overflow-hidden">
      {!result && !analyzing && (
        <div className="text-center max-w-md space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#f80d05]/10 border border-[#f80d05]/20 flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-[#f80d05]" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C1E36]">
            Ready for Career Diagnostic
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Paste your CV, add target role keywords, and optionally include a job description. Our backend analyzer checks keyword hits, missing terms, section structure, and measurable impact instantly.
          </p>
          <button
            type="button"
            onClick={pasteSampleResume}
            className="px-5 py-2.5 border border-[#0C1E36]/25 bg-slate-50 hover:bg-[#f80d05] hover:text-white hover:border-[#f80d05] rounded text-xs sm:text-sm text-[#0C1E36] transition-all font-mono font-bold cursor-pointer"
          >
            Quick Experience Demo
          </button>
        </div>
      )}

      {/* Loading State */}
      {analyzing && (
        <div className="text-center space-y-4">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
            <div className="absolute inset-0 rounded-full border-4 border-[#f80d05] border-t-transparent animate-spin" />
          </div>
          <span className="text-xs font-mono tracking-widest text-[#f80d05] block uppercase font-bold">
            Cognitive Analysis Vector
          </span>
          <h3 className="font-serif text-xl font-bold text-[#0C1E36] animate-pulse">
            Auditing Keywords &amp; Structure...
          </h3>
          <div className="space-y-1.5 max-w-xs mx-auto">
            <span className="block text-xs text-slate-500 font-mono font-medium">
              Matching target keywords &amp; ontology aliases
            </span>
            <span className="block text-xs text-slate-500 font-mono font-medium">
              Verifying section structure &amp; metric density
            </span>
            <span className="block text-xs text-slate-500 font-mono font-medium">
              Generating ATS executive summary blueprint
            </span>
          </div>
        </div>
      )}

      {/* Analysis Result View */}
      {result && !analyzing && (
        <div className="w-full h-full flex flex-col justify-between text-slate-600">
          {/* Header Score Display */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-slate-50 border-2 border-[#f80d05]/25 shadow-sm shrink-0">
                <div className="text-center">
                  <span className="block text-2xl font-mono font-extrabold text-[#f80d05] leading-none">
                    {result.score}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mt-1 font-bold">
                    ATS Score
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[#0C1E36] text-xl">
                  ATS Audit Complete
                </h4>
                <p className="text-sm text-slate-600 mt-1 font-sans">
                  Overall Score: <strong className="text-[#0C1E36]">{result.score}/100</strong> · Keyword Match:{" "}
                  <strong className="text-[#f80d05]">{result.keywordMatchRate ?? 0}%</strong>
                </p>
                <span className="inline-block mt-1.5 text-[11px] font-mono text-[#0C1E36] bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200 font-bold">
                  Engine:{" "}
                  {result.engine === "gemini-4-hydrogen"
                    ? "Gemini 4 AI Parser"
                    : result.engine === "gemini-3.1-flash-lite"
                      ? "Gemini Flash Lite AI Parser"
                      : "Deterministic Keyword ATS Engine"}
                </span>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2 shrink-0">
              <button
                type="button"
                onClick={downloadOptimizedText}
                className="flex-1 sm:flex-none px-4 py-2.5 hover:bg-slate-50 border border-slate-200 rounded text-xs font-mono uppercase tracking-wide text-[#0C1E36] hover:text-[#f80d05] hover:border-[#f80d05]/40 font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4 text-[#f80d05]" /> Save Blueprint
              </button>
            </div>
          </div>

          {/* Section Diagnostics Strip */}
          {result.sectionAudit && (
            <div className="mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#0C1E36]">
                  Parser Section Checks
                </span>
                <span className="text-xs font-mono font-bold text-[#f80d05]">
                  {result.sectionAudit.quantifiedMetricsCount} Metrics · {result.sectionAudit.wordCount} Words
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: "Contact", ok: result.sectionAudit.hasContactInfo },
                  { label: "Summary", ok: result.sectionAudit.hasSummary },
                  { label: "Experience", ok: result.sectionAudit.hasExperience },
                  { label: "Skills", ok: result.sectionAudit.hasSkills },
                  { label: "Education", ok: result.sectionAudit.hasEducation },
                  { label: "Bullets", ok: result.sectionAudit.hasBulletStructure },
                ].map((chk) => (
                  <span
                    key={chk.label}
                    className={`inline-flex items-center gap-1 text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                      chk.ok
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-[#f80d05]/10 text-[#f80d05] border-[#f80d05]/25"
                    }`}
                  >
                    {chk.ok ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                    {chk.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Main Results Scroll Region */}
          <div className="space-y-6 overflow-y-auto max-h-[25rem] pr-2 mb-8 text-sm font-medium">
            {/* Keywords Split Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-[#0C1E36]">
                <span className="block text-xs font-mono uppercase text-emerald-800 tracking-wider mb-2 font-bold">
                  ✓ Matched Keywords ({result.matchingKeywords.length})
                </span>
                {result.matchingKeywords.length === 0 ? (
                  <span className="text-slate-600 text-sm italic block">No target keyword matches detected yet.</span>
                ) : (
                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {result.matchingKeywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-bold text-emerald-800 px-2 py-0.5 rounded bg-white border border-emerald-200"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 rounded-xl bg-[#f80d05]/[0.05] border border-[#f80d05]/25 text-[#0C1E36]">
                <span className="block text-xs font-mono uppercase text-[#f80d05] tracking-wider mb-2 font-bold">
                  ⚠ Missing Keywords ({result.missingKeywords.length})
                </span>
                {result.missingKeywords.length === 0 ? (
                  <span className="text-slate-600 text-sm italic block">All tracked target keywords are present.</span>
                ) : (
                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {result.missingKeywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-bold text-[#f80d05] px-2 py-0.5 rounded bg-white border border-[#f80d05]/30"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Re-architected Executive Summary */}
            <div className="p-4 rounded-xl bg-[#f80d05]/[0.04] border border-[#f80d05]/20 relative">
              <div className="flex items-center justify-between mb-3 leading-none">
                <span className="font-mono text-xs uppercase text-[#f80d05] tracking-wider font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#f80d05]" /> Recommended Executive Summary
                </span>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 rounded bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono text-[#0C1E36] font-bold hover:text-[#f80d05] transition-colors cursor-pointer flex items-center gap-1"
                  title="Copy summary text to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#f80d05]" /> Copy
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg text-sm font-sans leading-relaxed text-slate-700 whitespace-pre-wrap select-text font-normal">
                {result.optimizedSummary}
              </div>
            </div>

            {/* Structural Formats Critique */}
            <div>
              <span className="font-mono tracking-wider text-xs uppercase text-slate-600 block mb-2.5 font-bold">
                Structural Format Checks
              </span>
              <div className="space-y-2.5">
                {result.formatFeedback.map((fb, idx) => {
                  const config = getFeedbackItemConfig(fb);
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-200 ${config.rowClass}`}
                    >
                      <div className="flex gap-2.5 items-start">
                        <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${config.iconClass}`} />
                        <span className="text-sm text-slate-700 leading-relaxed font-sans font-normal">{fb}</span>
                      </div>
                      <span
                        className={`self-start sm:self-center px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase border tracking-wider shrink-0 ${config.badgeClass}`}
                      >
                        {config.badgeText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Copywriting & Metric Recommendations */}
            <div>
              <span className="font-mono tracking-wider text-xs uppercase text-slate-600 block mb-2.5 font-bold">
                Copywriting &amp; Metric Recommendations
              </span>
              <div className="space-y-2.5">
                {result.contentFeedback.map((fb, idx) => {
                  const config = getFeedbackItemConfig(fb);
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-200 ${config.rowClass}`}
                    >
                      <div className="flex gap-2.5 items-start">
                        <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${config.iconClass}`} />
                        <span className="text-sm text-slate-700 leading-relaxed font-sans font-normal">{fb}</span>
                      </div>
                      <span
                        className={`self-start sm:self-center px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase border tracking-wider shrink-0 ${config.badgeClass}`}
                      >
                        {config.badgeText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-slate-600 font-sans font-medium text-center sm:text-left">
              Need an expert manual ATS rewrite tailored to C-suite or tech hiring panels?
            </span>

            <a
              href="https://wa.me/254728606684?text=Hi%20Okello,%20I%20just%20ran%20my%20resume%20through%20your%20AI%20ATS%20CV%20Grader%20and%20would%20like%20to%20order%20an%20expert%20rewrite."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 bg-[#f80d05] hover:bg-[#d40b04] text-white rounded font-mono font-bold uppercase text-xs tracking-wider transition-colors flex items-center justify-center gap-1.5 text-center cursor-pointer shadow-sm whitespace-nowrap shrink-0"
            >
              Get Manual Revamp <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
