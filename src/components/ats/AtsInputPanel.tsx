import React from "react";
import { Upload, Sparkles, FileText, Download, AlertCircle, RefreshCw, Info } from "lucide-react";
import { generateCvPdf } from "../../utils/generateCvPdf";

interface AtsInputPanelProps {
  resumeText: string;
  setResumeText: (val: string) => void;
  jobDescription: string;
  setJobDescription: (val: string) => void;
  parsingFile: boolean;
  analyzing: boolean;
  errorText: string;
  isDragOver: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  pasteSampleResume: () => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDragLeave: () => void;
  handleDrop: (e: React.DragEvent) => void;
  executeAnalysis: () => void;
}

export default function AtsInputPanel({
  resumeText,
  setResumeText,
  jobDescription,
  setJobDescription,
  parsingFile,
  analyzing,
  errorText,
  isDragOver,
  fileInputRef,
  pasteSampleResume,
  handleFileUpload,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  executeAnalysis,
}: AtsInputPanelProps) {
  return (
    <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-[#0C1E36] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#f80d05]" /> Executive Profile Inputs
          </span>

          <div className="flex gap-2">
            <button
              onClick={generateCvPdf}
              className="px-2.5 py-1 rounded bg-red-50 hover:bg-red-100 border border-red-200 text-[#f80d05] font-mono text-[10px] font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1"
              title="Download Official CV in PDF format"
            >
              <Download className="w-3 h-3 text-[#f80d05]" /> Download Official CV (PDF)
            </button>
            <button
              onClick={pasteSampleResume}
              className="px-2.5 py-1 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0C1E36] font-mono text-[10px] font-bold uppercase tracking-wide cursor-pointer"
            >
              Load Sample Profile
            </button>
          </div>
        </div>

        {/* Drag and Drop Zone text field */}
        <div className="relative">
          <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2 font-bold flex justify-between items-center">
            <span>1. Paste Your Resumé/CV or Upload File</span>
            {parsingFile && (
              <span className="text-[#f80d05] animate-pulse text-[10px] flex items-center gap-1 font-bold lowercase">
                <RefreshCw className="w-3 h-3 animate-spin duration-1000" /> decrypting resume via AI...
              </span>
            )}
          </label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative rounded-xl border border-dashed transition-all duration-300 overflow-hidden ${
              isDragOver
                ? "border-[#f80d05] bg-red-50/50 scale-[0.99]"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              disabled={parsingFile}
              placeholder="Enter raw professional background or upload your resume/CV document (PDF, TXT)..."
              className="w-full h-48 p-4 bg-transparent text-slate-700 text-xs tracking-wide focus:outline-none focus:ring-0 placeholder:text-slate-400 resize-none font-mono font-medium"
            />

            {/* Drag and drop overlay banner */}
            {!resumeText && !parsingFile && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                <Upload className="w-8 h-8 text-slate-400 mb-2" />
                <span className="block text-xs text-slate-500 font-sans">
                  Drag &amp; drop standard PDF or TXT files here, or copy/paste content
                </span>
              </div>
            )}

            {parsingFile && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/90 p-4 text-center z-10">
                <RefreshCw className="w-8 h-8 text-[#f80d05] animate-spin mb-2" />
                <span className="block text-xs text-[#f80d05] font-sans font-bold">
                  AI Reading CV Document...
                </span>
                <span className="block text-[10px] text-slate-500 font-mono mt-1">
                  Decrypting layout boundaries and extracting text
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-2 px-1">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={parsingFile}
              className={`text-[10px] font-mono font-bold cursor-pointer flex items-center gap-1 ${
                parsingFile ? "text-slate-400 cursor-not-allowed" : "text-[#f80d05] hover:text-red-700"
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
            <span className="text-[10px] font-mono text-slate-500 font-medium">
              Characters: {resumeText.length}
            </span>
          </div>
        </div>

        {/* Job description parameters input */}
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-505 mb-2 font-bold">
            2. Targeted Career/Job Parameters (Optional)
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste target job listing, desired executive level, or competency criteria to scan against..."
            className="w-full h-24 p-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#f80d05]/40 text-slate-700 text-xs tracking-wide placeholder:text-slate-400 resize-none font-mono"
          />
        </div>

        {errorText && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorText}</span>
          </div>
        )}
      </div>

      {/* Compute Actions Footer */}
      <div className="pt-8 border-t border-slate-100 mt-8">
        <button
          onClick={executeAnalysis}
          disabled={analyzing}
          className={`w-full py-4 rounded font-mono font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
            analyzing
              ? "bg-slate-100 border border-slate-200 text-slate-400"
              : "bg-[#0C1E36] hover:bg-[#f80d05] text-white shadow-sm"
          }`}
        >
          {analyzing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-[#0C1E36]" /> Computing Parser Vector Algorithms...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-red-300" /> Run Strategic ATS Assessment
            </>
          )}
        </button>
        <div className="flex justify-center items-center gap-1.5 mt-3">
          <Info className="w-3 h-3 text-slate-400" />
          <span className="text-[9px] font-mono tracking-wide text-slate-404 font-semibold">
            Powered by Gemini-3.5-Flash Core parsing schemas
          </span>
        </div>
      </div>
    </div>
  );
}
