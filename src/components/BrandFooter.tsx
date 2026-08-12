import React, { useState } from "react";
import { Github, Linkedin, MessageSquare, ArrowUp, Twitter, Download, FileText, Scale, ShieldCheck, HelpCircle } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { generateCvPdf } from "../utils/generateCvPdf";
import LegalModals from "./LegalModals";
import FaqModal from "./FaqModal";

interface BrandFooterProps {
  onNavigate?: (pageId: string) => void;
}

export default function BrandFooter({ onNavigate }: BrandFooterProps) {
  const [legalModal, setLegalModal] = useState<"terms" | "privacy" | null>(null);
  const [faqModalOpen, setFaqModalOpen] = useState<boolean>(false);

  const handleNav = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C1E36] border-t border-[#f80d05] px-6 py-16 relative text-white">
      {/* Legal Policy & FAQ Modals Overlay */}
      <LegalModals activeModal={legalModal} onClose={() => setLegalModal(null)} />
      <FaqModal isOpen={faqModalOpen} onClose={() => setFaqModalOpen(false)} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
        
        {/* Monogram Brand Column */}
        <div className="md:col-span-4 space-y-4">
          <BrandLogo variant="footer" onClick={scrollUp} />

          <p className="text-slate-300 text-xs leading-relaxed max-w-xs font-sans font-medium">
            Full-Stack Software Engineering and Executive Communication Consultancy based in Nairobi &amp; Kisumu, Kenya. Building high-performance systems and C-Suite career assets.
          </p>
        </div>

        {/* Quick Navigate Links */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-400 font-bold">
            System Operations Navigation
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs font-sans font-semibold">
            <button onClick={() => handleNav("about")} className="text-left text-slate-200 hover:text-red-400 hover:underline transition-colors cursor-pointer">About &amp; Developer Bio</button>
            <button onClick={() => handleNav("services")} className="text-left text-slate-200 hover:text-red-400 hover:underline transition-colors cursor-pointer">Core Services</button>
            <button onClick={() => handleNav("portfolio")} className="text-left text-slate-200 hover:text-red-400 hover:underline transition-colors cursor-pointer">Software &amp; Case Studies</button>
            <button onClick={() => handleNav("ats-scanner")} className="text-left text-slate-200 hover:text-red-400 hover:underline transition-colors cursor-pointer">AI ATS Grader</button>
            <button onClick={() => handleNav("contact")} className="text-left text-slate-200 hover:text-red-400 hover:underline transition-colors cursor-pointer">Inquiry Port</button>
          </div>
        </div>

        {/* Contact detail block */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-400 font-bold">
            Direct Core Endpoints
          </h4>
          <p className="text-xs text-slate-200 font-mono">
            Postal Address: <span className="text-slate-300 font-sans font-medium">1178-40100 Kisumu Kenya</span>
          </p>
          <p className="text-xs text-slate-200 font-mono">
            Location: <span className="text-slate-300 font-sans font-medium">Varsity Plaza, Business Incubation Centre, Bank Street</span>
          </p>
          <p className="text-xs text-slate-200 font-mono">
            WhatsApp: <a href="https://wa.me/254728606684" target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold hover:underline">+254 728 606 684</a>
          </p>
          <p className="text-xs text-slate-200 font-mono">
            Email: <a href="mailto:okelloodhiambocvs@gmail.com" className="text-red-400 font-bold hover:underline">okelloodhiambocvs@gmail.com</a>
          </p>
          
          {/* Direct Download Official CV PDF Button */}
          <div className="pt-1">
            <button
              onClick={generateCvPdf}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#f80d05] hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow-md"
              title="Download Official CV as PDF Document"
            >
              <Download className="w-3.5 h-3.5 text-white" /> Download Official CV (PDF)
            </button>
          </div>

          {/* Social Links Icons */}
          <div className="flex gap-2.5 pt-2">
            <button
              onClick={generateCvPdf}
              className="p-2 rounded bg-red-500/20 hover:bg-[#f80d05] text-red-300 hover:text-white border border-red-500/40 transition-all cursor-pointer"
              aria-label="Download Official CV PDF"
              title="Download Official CV PDF"
            >
              <FileText className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/254728606684"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-800/40 hover:bg-[#f80d05] hover:text-white border border-slate-700/50 text-slate-300 transition-all cursor-pointer"
              aria-label="Contact directly on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/okelloodhiambocvs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-800/40 hover:bg-[#f80d05] hover:text-white border border-slate-700/50 text-slate-300 transition-all cursor-pointer"
              aria-label="View Software Portfolio on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/okello-odhiambo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-800/40 hover:bg-[#f80d05] hover:text-white border border-slate-700/50 text-slate-300 transition-all cursor-pointer"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/OkelloOdhiambo0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-800/40 hover:bg-[#f80d05] hover:text-white border border-slate-700/50 text-slate-300 transition-all cursor-pointer"
              aria-label="Follow on X"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Links and Back to Top scroll button */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-[10px] font-mono tracking-wide text-slate-400 text-center sm:text-left font-semibold">
          &copy; {currentYear} House Ventures Consultancy &amp; Personal Tech Brand. All rights reserved. Registered since 2021 in Kenya.
        </div>

        {/* Bottom Right Legal Links & Top Button */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
          <button
            onClick={() => setLegalModal("terms")}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-red-400 border border-slate-800 hover:border-red-500/40 font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
            title="Read Terms & Conditions of Service"
          >
            <Scale className="w-3.5 h-3.5 text-red-400" /> Terms &amp; Conditions
          </button>

          <button
            onClick={() => setLegalModal("privacy")}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-red-400 border border-slate-800 hover:border-red-500/40 font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
            title="Read Privacy Policy & Data Protection"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-red-400" /> Privacy Policy
          </button>

          <button
            onClick={() => setFaqModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-red-400 border border-slate-800 hover:border-red-500/40 font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
            title="View Frequently Asked Questions"
          >
            <HelpCircle className="w-3.5 h-3.5 text-red-400" /> FAQs
          </button>

          <button
            onClick={scrollUp}
            className="p-2.5 bg-slate-800/40 hover:bg-[#f80d05] rounded-md border border-slate-700 hover:border-red-500 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 uppercase tracking-wide font-mono text-[9px] font-bold cursor-pointer"
            title="Scroll to Top"
          >
            Top of Site <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

