import React, { useState, useEffect } from "react";
import { X, ShieldCheck, Scale, Globe, Calendar } from "lucide-react";
import TermsOfService from "./legal/TermsOfService";
import PrivacyPolicy from "./legal/PrivacyPolicy";

interface LegalModalsProps {
  activeModal: "terms" | "privacy" | null;
  onClose: () => void;
}

export default function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  const [currentTab, setCurrentTab] = useState<"terms" | "privacy">(activeModal || "terms");

  useEffect(() => {
    if (activeModal) {
      setCurrentTab(activeModal);
    }
  }, [activeModal]);

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-[#0C1E36] border border-red-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col relative text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#f80d05] via-red-500 to-[#0C1E36]" />

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4 bg-[#08182D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
              {currentTab === "terms" ? (
                <Scale className="w-5 h-5 text-[#f80d05]" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-[#f80d05]" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-400 font-bold">
                  House Ventures Consultancy Legal Framework
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-semibold">
                  Rev. 2026.1
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentTab === "terms" ? "Terms & Conditions of Service" : "Privacy Policy & Data Protection"}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-[#f80d05] text-slate-300 hover:text-white transition-all border border-slate-700 hover:border-red-500 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Switches */}
        <div className="px-6 py-3 bg-[#091C34] border-b border-slate-800/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentTab("terms")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                currentTab === "terms"
                  ? "bg-[#f80d05] text-white shadow-sm"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50"
              }`}
            >
              <Scale className="w-3.5 h-3.5" /> Terms &amp; Conditions
            </button>
            <button
              onClick={() => setCurrentTab("privacy")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                currentTab === "privacy"
                  ? "bg-[#f80d05] text-white shadow-sm"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Privacy Policy
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <Globe className="w-3 h-3 text-red-400" /> Kenya &amp; Global Compliance
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Calendar className="w-3 h-3 text-red-400" /> Last Updated: August 2026
            </span>
          </div>
        </div>

        {/* Modal Scrollable Content Container */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-xs sm:text-sm text-slate-200 leading-relaxed scrollbar max-h-[60vh] bg-[#07172A]">
          {currentTab === "terms" ? <TermsOfService /> : <PrivacyPolicy />}
        </div>

        {/* Modal Footer / Acceptance controls */}
        <div className="p-4 sm:p-6 bg-[#08182D] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
            <span>Enforced under Kenya Data Protection Act 2019 &amp; GDPR</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#f80d05] hover:bg-red-600 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center shadow-sm"
            >
              Acknowledge &amp; Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
