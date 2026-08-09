import React from "react";
import { HelpCircle, Sparkles, Copy, Check, Download, ArrowUpRight } from "lucide-react";
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
    <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 rounded-2xl border border-slate-200 bg-white shadow-sm relative min-h-[40rem] overflow-hidden">
      {!result && !analyzing && (
        <div className="text-center max-w-sm space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <HelpCircle className="w-8 h-8 text-[#f80d05] opacity-60" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#0C1E36]">
            Ready for Career Diagnostic
          </h3>
          <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
            Add professional contents and target parameters. Our system will analyze section layout formats, keyword overlaps, phrasing density, and generate a re-architected summary instantly.
          </p>
          <button
            onClick={pasteSampleResume}
            className="px-4 py-2 border border-[#0C1E36]/20 bg-slate-50 hover:bg-slate-100 rounded text-xs text-[#0C1E36] transition-all font-mono font-bold cursor-pointer"
          >
            Quick Experience Demo
          </button>
        </div>
      )}

      {/* Mock loading parameters during compute */}
      {analyzing && (
        <div className="text-center space-y-4">
          <div className="relative w-24 h-24 mx-auto mb-6">
            {/* Glowing spinner ring */}
            <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
            <div className="absolute inset-0 rounded-full border-4 border-[#f80d05] border-t-transparent animate-spin" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-[#f80d05] block uppercase font-bold">
            Cognitive Analysis Vector
          </span>
          <h3 className="font-serif text-xl font-bold text-[#0C1E36] animate-pulse">
            Re-Structuring Career Profiles...
          </h3>
          <div className="space-y-1 max-w-xs mx-auto">
            <span className="block text-[10px] text-slate-500 font-mono font-medium">
              Evaluating text layout density
            </span>
            <span className="block text-[10px] text-slate-500 font-mono font-medium">
              Searching for soft/tech competency anchors
            </span>
            <span className="block text-[10px] text-slate-500 font-mono font-medium">
              Formulating elite copywriting alternatives
            </span>
          </div>
        </div>
      )}

      {/* COMPLETE RENDER RESULT OUTLINE */}
      {result && !analyzing && (
        <div className="w-full h-full flex flex-col justify-between text-slate-600">
          {/* Header score display */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4 animate-in fade-in">
              {/* Circle Score chart */}
              <div className="relative w-23 h-23 flex items-center justify-center rounded-full bg-slate-50 border border-slate-150 shadow-md shrink-0">
                <div className="absolute inset-2 rounded-full border border-dashed border-slate-200" />
                <div className="text-center">
                  <span className="block text-2xl font-mono font-bold text-[#f80d05] leading-none">
                    {result.score}
                  </span>
                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider block mt-1 font-bold">
                    ATS Rating
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[#0C1E36] text-lg">
                  Parsing Analysis Completed
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Overall score: {result.score}/100. Let&apos;s look at key areas of improvement.
                </p>
                {result.demoMode && (
                  <span className="inline-block mt-1.5 text-[9px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-250 font-bold">
                    Secure Native Evaluation Fallback Mode active
                  </span>
                )}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex sm:flex-col gap-2 shrink-0">
              <button
                onClick={downloadOptimizedText}
                className="flex-1 sm:flex-none px-3.5 py-2 hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono uppercase tracking-wide text-[#0C1E36] hover:text-[#f80d05] font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#f80d05]" /> Save Blueprint
              </button>
            </div>
          </div>

          {/* Main Results Accordions / Blocks */}
          <div className="space-y-6 overflow-y-auto max-h-[24rem] pr-2 mb-8 text-xs font-medium">
            {/* Keywords Split Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Matching Keywords */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-150 text-[#0C1E36]">
                <span className="block text-[9px] font-mono uppercase text-emerald-700 tracking-wider mb-2 font-bold">
                  ✓ Correct Keyword Hits
                </span>
                {result.matchingKeywords.length === 0 ? (
                  <span className="text-slate-500 italic block">No strong hits.</span>
                ) : (
                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {result.matchingKeywords.map((kw, i) => (
                      <span key={i} className="text-[9px] font-mono font-bold text-emerald-800 px-1.5 py-0.5 rounded bg-emerald-100/50 border border-emerald-200">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Missing targets */}
              <div className="p-4 rounded-xl bg-red-50 border border-red-150 text-[#0C1E36]">
                <span className="block text-[9px] font-mono uppercase text-[#f80d05] tracking-wider mb-2 font-bold">
                  ⚠ Missing Operational Anchors
                </span>
                {result.missingKeywords.length === 0 ? (
                  <span className="text-slate-500 italic block">None identified.</span>
                ) : (
                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {result.missingKeywords.map((kw, i) => (
                      <span key={i} className="text-[9px] font-mono font-bold text-[#f80d05] px-1.5 py-0.5 rounded bg-red-100/50 border border-red-200">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Re-architected Executive Summary Copier */}
            <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 relative">
              <div className="flex items-center justify-between mb-3 leading-none">
                <span className="font-mono text-[9px] uppercase text-[#f80d05] tracking-widest font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#f80d05]" /> Executive Profile Summary Proposal
                </span>

                <button
                  onClick={copyToClipboard}
                  className="p-1 px-2.5 rounded bg-white hover:bg-slate-50 border border-slate-200 text-[10px] font-mono text-[#0C1E36] font-bold hover:text-[#f80d05] transition-colors cursor-pointer flex items-center gap-1"
                  title="Copy text content to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-[#f80d05]" /> Copy
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded text-[11px] font-sans leading-relaxed text-slate-750 whitespace-pre-wrap select-text font-normal">
                {result.optimizedSummary}
              </div>
            </div>

            {/* Critical Formatting Improvements */}
            <div>
              <span className="font-mono tracking-widest text-[9px] uppercase text-slate-500 block mb-2.5 font-bold">
                Structural Formats Critique
              </span>
              <div className="space-y-2">
                {result.formatFeedback.map((fb, idx) => {
                  const config = getFeedbackItemConfig(fb);
                  return (
                    <div key={idx} className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-200 ${config.rowClass}`}>
                      <div className="flex gap-2.5 items-start">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${config.iconClass}`} />
                        <span className="text-xs text-slate-700 leading-relaxed font-sans">{fb}</span>
                      </div>
                      <span className={`self-start sm:self-center px-2 py-0.5 rounded text-[8px] font-mono font-extrabold uppercase border tracking-widest shrink-0 ${config.badgeClass}`}>
                        {config.badgeText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Copy Phrasing Improvements */}
            <div>
              <span className="font-mono tracking-widest text-[9px] uppercase text-slate-500 block mb-2.5 font-bold">
                Copywriting &amp; Metric Recommendations
              </span>
              <div className="space-y-2">
                {result.contentFeedback.map((fb, idx) => {
                  const config = getFeedbackItemConfig(fb);
                  return (
                    <div key={idx} className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-200 ${config.rowClass}`}>
                      <div className="flex gap-2.5 items-start">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${config.iconClass}`} />
                        <span className="text-xs text-slate-700 leading-relaxed font-sans">{fb}</span>
                      </div>
                      <span className={`self-start sm:self-center px-2 py-0.5 rounded text-[8px] font-mono font-extrabold uppercase border tracking-widest shrink-0 ${config.badgeClass}`}>
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
            <span className="text-[10px] text-slate-500 font-sans font-medium text-center sm:text-left">
              Professional manual implementation offers starting at 100% success rate guarantees.
            </span>
            
            <a
              href="https://wa.me/254728606684?text=Hi%20Okello,%20I%20just%20ran%20my%20resume%20through%20your%20AI%20ATS%20CV%20Grader%20and%20would%20like%20to%20order%20an%20expert%20rewrite."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 bg-[#0C1E36] hover:bg-[#f80d05] text-white rounded font-mono font-bold uppercase text-[10px] tracking-wider transition-colors flex items-center justify-center gap-1 text-center cursor-pointer shadow-sm"
            >
              Get Manual Premium Revamp <ArrowUpRight className="w-3.5 h-3.5 text-red-300" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
