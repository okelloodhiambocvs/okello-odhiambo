import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { generateCvPdf } from "../utils/generateCvPdf";

interface BrandHeaderProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
}

export default function BrandHeader({ currentPage, onNavigate }: BrandHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About Us", id: "about" },
    { label: "Our Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "AI CV Grader", id: "ats-scanner" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0C1E36]/98 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-slate-950/25"
          : "bg-[#0C1E36] border-b border-white/10 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        <BrandLogo variant="header" onClick={() => handleNavClick("about")} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs tracking-[0.12em] uppercase font-sans transition-colors cursor-pointer whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                  isActive
                    ? "text-white font-bold border-[#f80d05]"
                    : "font-semibold text-slate-300 hover:text-white border-transparent hover:border-white/30"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={generateCvPdf}
            className="px-3.5 py-2 rounded text-xs tracking-wider uppercase font-mono font-bold border border-white/25 bg-white/5 text-white hover:border-[#f80d05] hover:bg-[#f80d05] transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0"
            title="Download Official CV (PDF)"
          >
            <Download className="w-3.5 h-3.5" /> Download CV
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="px-4 py-2 rounded text-xs tracking-wider uppercase font-mono font-bold bg-white text-[#0C1E36] hover:bg-[#f80d05] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm whitespace-nowrap shrink-0"
          >
            Hire Developer <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-[#0C1E36] border-b border-white/15 px-6 py-6 flex flex-col gap-5 shadow-2xl">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm tracking-widest uppercase font-semibold py-2.5 border-b border-white/10 flex items-center justify-between cursor-pointer ${
                    isActive ? "text-[#f80d05] font-bold" : "text-slate-200 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#f80d05]" />}
                </button>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                generateCvPdf();
              }}
              className="w-full text-center py-3 bg-white/10 border border-white/20 text-white font-mono font-bold uppercase tracking-widest text-xs rounded hover:bg-[#f80d05] hover:border-[#f80d05] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download Official CV (PDF)
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="w-full text-center py-3 bg-[#f80d05] text-white font-mono font-bold uppercase tracking-widest text-xs rounded hover:bg-[#d40b04] transition-colors shadow-lg cursor-pointer"
            >
              Direct Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
