import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { generateCvPdf } from "../utils/generateCvPdf";

export default function BrandHeader() {
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
    { label: "About & Engineering", id: "about" },
    { label: "Core Offerings", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "AI CV Grader", id: "ats-scanner" },
    { label: "Contact", id: "contact" }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#0C1E36]/10 py-3 shadow-md shadow-[#0C1E36]/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Redesigned Brand Logo */}
        <BrandLogo variant="header" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs tracking-wider uppercase font-sans font-semibold text-[#0C1E36]/80 hover:text-[#f80d05] transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={generateCvPdf}
            className="px-3.5 py-2.5 rounded text-xs tracking-wider uppercase font-mono font-bold border-2 border-[#f80d05] bg-red-50 text-[#f80d05] hover:bg-[#f80d05] hover:text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            title="Download Official CV (PDF)"
          >
            <Download className="w-3.5 h-3.5" /> Download CV
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2.5 rounded text-xs tracking-wider uppercase font-mono font-bold border-2 border-[#0C1E36] bg-[#0C1E36] text-white hover:bg-[#f80d05] hover:border-[#f80d05] transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            Hire Developer <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 rounded bg-slate-100 text-[#0C1E36] hover:bg-slate-200 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white border-b border-slate-200 px-6 py-8 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm tracking-widest uppercase font-semibold text-[#0C1E36] hover:text-[#f80d05] py-2 border-b border-slate-100"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={generateCvPdf}
              className="w-full text-center py-3 bg-[#f80d05] text-white font-mono font-bold uppercase tracking-widest text-xs rounded hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Official CV (PDF)
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full text-center py-3 bg-[#0C1E36] text-white font-mono font-bold uppercase tracking-widest text-xs rounded hover:bg-[#f80d05] transition-colors shadow-lg"
            >
              Direct Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
