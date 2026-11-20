import React, { useState, useEffect } from "react";
import { PORTFOLIO } from "../data";
import { PortfolioItem } from "../types";
import { Eye, X, ExternalLink, Calendar, Users, ArrowLeft, ChevronDown, Sparkles } from "lucide-react";
import { SafeImage } from "./FounderGallery";

const PORTFOLIO_HERO_PORTRAIT_SRC =
  "/assets/aistudio/Thoughtful_Professional_Portrait-removebg-preview_b0c510da.png";

interface PortfolioProps {
  onNavigate?: (pageId: string) => void;
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [filter, setFilter] = useState<"all" | "CVs" | "Proposals" | "Company Profiles" | "Tech Projects">("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Close modal when pressing Escape and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  const categories: Array<"all" | "CVs" | "Proposals" | "Company Profiles" | "Tech Projects"> = [
    "all", "CVs", "Proposals", "Company Profiles", "Tech Projects"
  ];

  const filteredPortfolio = PORTFOLIO.filter(item => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const scrollToDeliverables = () => {
    const el = document.getElementById("portfolio-deliverables");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="portfolio" className="w-full bg-white">
      {/* Dark Brand Navy Split Hero — matches About Us landing page composition */}
      <section className="relative bg-[#0C1E36] text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 74% 48%, rgba(36, 69, 112, 0.78) 0%, rgba(12, 30, 54, 0.96) 54%, #071426 100%)",
          }}
        />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#f80d05]/[0.07] blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 sm:pt-12 lg:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
            {/* LEFT COLUMN: Editorial Headline, Subheadline, CTAs, Circular Scroll Down */}
            <div className="lg:col-span-7 pb-10 lg:pb-16 flex flex-col justify-between">
              <div>
                <p className="text-slate-200 text-lg sm:text-xl md:text-2xl font-sans font-normal tracking-normal mb-2">
                  Proven Systems &amp;
                </p>

                <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold uppercase tracking-tight leading-[1.03] text-white mb-6 text-balance">
                  Selected <span className="whitespace-nowrap">High-Stakes</span>{" "}
                  <span className="text-[#f80d05]">Deliverables</span>
                </h1>

                <p className="max-w-xl text-slate-300 text-sm sm:text-base tracking-wide font-sans font-normal leading-relaxed mb-8">
                  Production Golang and TypeScript platforms, corporate profiles, grant proposals, and executive career transformations delivered across East Africa via{" "}
                  <span className="text-white font-semibold border-b-2 border-[#f80d05] pb-0.5">
                    Zone01 &amp; House Ventures Consultancy
                  </span>
                  .
                </p>

                {/* Primary Hero Actions matching landing page */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mb-10">
                  <button
                    type="button"
                    onClick={() => (onNavigate ? onNavigate("contact") : scrollToDeliverables())}
                    className="w-full sm:w-auto px-5 py-3.5 rounded bg-[#f80d05] hover:bg-red-600 text-white font-sans font-bold tracking-wider text-xs uppercase shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Commission a Project
                  </button>

                  {onNavigate && (
                    <button
                      type="button"
                      onClick={() => onNavigate("ats-scanner")}
                      className="w-full sm:w-auto px-5 py-3.5 rounded bg-white/5 border border-white/30 hover:border-[#f80d05] hover:bg-white/10 text-white font-sans font-bold tracking-wider text-xs uppercase transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#f80d05]" /> AI CV Grader
                    </button>
                  )}

                  {onNavigate && (
                    <button
                      type="button"
                      onClick={() => onNavigate("about")}
                      className="w-full sm:w-auto px-4 py-3.5 rounded border border-white/25 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-sans font-bold tracking-wider text-xs uppercase transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> About Us
                    </button>
                  )}
                </div>
              </div>

              {/* Circular Down Scroll Control */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={scrollToDeliverables}
                  aria-label="Scroll down to Portfolio deliverables"
                  className="w-11 h-11 rounded-full border border-white/35 hover:border-[#f80d05] hover:bg-[#f80d05]/15 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Attached Transparent Cutout Portrait of Okello Odhiambo */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end self-end">
              <div className="relative w-full max-w-[440px] lg:max-w-[510px] h-[400px] sm:h-[480px] lg:h-[560px] flex items-end justify-center">
                <SafeImage
                  primarySrc={PORTFOLIO_HERO_PORTRAIT_SRC}
                  fallbackSrc={PORTFOLIO_HERO_PORTRAIT_SRC}
                  alt="Okello Odhiambo — Software Developer and Executive Portfolio Architect"
                  className="h-full w-auto max-w-full object-contain object-bottom [mask-image:linear-gradient(to_top,transparent_0%,black_12%,black_100%)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Portfolio Proof Bar matching About Us landing page */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-2 md:pt-0 md:pr-6">
              <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-[#0C1E36] tabular-nums">
                {PORTFOLIO.length}+
              </span>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#f80d05] mt-1 font-bold">
                Verified Case Studies
              </span>
            </div>
            <div className="pt-2 md:pt-0 md:px-6">
              <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-[#0C1E36] tabular-nums">
                Ni-Wera
              </span>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#f80d05] mt-1 font-bold">
                M-Pesa Production App
              </span>
            </div>
            <div className="pt-4 md:pt-0 md:px-6">
              <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-[#0C1E36] tabular-nums">
                Ujuzi360
              </span>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#f80d05] mt-1 font-bold">
                8-Dev LMS Architecture
              </span>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-[#0C1E36] tabular-nums">
                KEWOTA &amp; ENA
              </span>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#f80d05] mt-1 font-bold">
                Institutional Grants &amp; CVs
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio-deliverables" className="py-16 sm:py-20 relative bg-white">
        {/* Decorative gradient effects */}
        <div className="absolute top-[40%] right-[10%] w-[25rem] h-[25rem] bg-red-50/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Editorial Section Header & Category Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#0C1E36] tracking-tight mb-4">
                Verified Work &amp; Case Studies
              </h2>
              <div className="w-16 h-1 bg-[#f80d05]" />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wide transition-colors cursor-pointer whitespace-nowrap ${
                    filter === cat
                      ? "bg-[#f80d05] text-white shadow-sm"
                      : "bg-slate-100 text-[#0C1E36] border border-slate-200 hover:border-[#0C1E36] hover:bg-slate-200/70"
                  }`}
                >
                  {cat === "all" ? "All Projects" : cat}
                </button>
              ))}
            </div>
          </div>

        {/* Portfolio Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPortfolio.map((item) => {
            const isTech = item.category === "Tech Projects";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-[#f80d05] hover:bg-slate-50/50 cursor-pointer group transition-all duration-300 shadow-sm hover:shadow"
              >
                <div>
                  {/* Aspect Ratio Balanced Image Cover */}
                  {item.image && (
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-5 border border-slate-150 relative select-none">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Category Pin and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-[#f80d05] px-2.5 py-1 rounded bg-red-50 border border-red-100 whitespace-nowrap">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.year}
                    </span>
                  </div>

                  {/* Narrative Details */}
                  <div className="mb-6">
                    <h3 className="font-serif text-slate-900 group-hover:text-[#f80d05] text-xl sm:text-2xl font-bold transition-colors mb-2">
                      {item.title}
                    </h3>
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                      Client: {item.client}
                    </span>
                    <p className="text-slate-600 text-xs sm:text-sm tracking-wide leading-relaxed line-clamp-3 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Direct High Impact Metrics Block */}
                  {item.metrics && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 mb-6">
                      <span className="block text-[8px] tracking-[0.2em] font-mono text-[#f80d05] uppercase mb-1 font-bold">
                        Conversion Impact Accomplished 
                      </span>
                      <span className="font-sans font-semibold text-slate-755 text-xs block leading-relaxed">
                        {item.metrics}
                      </span>
                    </div>
                  )}

                  {/* Interactive Card Action Call */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {isTech && item.techStack
                        ? item.techStack.slice(0, 3).map((stack, idx) => (
                            <span key={idx} className="text-[9px] font-mono text-indigo-700 font-bold px-2 py-0.5 rounded bg-indigo-50 border border-indigo-150">
                              {stack}
                            </span>
                          ))
                        : item.deliverables?.slice(0, 2).map((del, idx) => (
                            <span key={idx} className="text-[9px] font-mono text-emerald-700 font-bold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-150">
                              {del}
                            </span>
                          ))}
                    </div>

                    <span className="flex items-center gap-1 text-slate-500 group-hover:text-[#f80d05] text-xs font-mono font-bold transition-colors">
                      Review Details <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Study Detailed Modal Popup */}
        {selectedItem && (
          <div 
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-150 my-auto max-h-[92vh] flex flex-col"
            >
              
              {/* Modal Gradient Header bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#f80d05] to-[#0C1E36] shrink-0" />

              {/* Sticky Top Bar with Close and Back Controls */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100 bg-white/95 backdrop-blur-xs shrink-0">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#0C1E36] hover:text-white text-slate-700 font-bold text-xs font-mono transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#0C1E36] transition-all cursor-pointer"
                  aria-label="Close case study details"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#f80d05] px-3 py-1 bg-red-50 rounded border border-red-100">
                    {selectedItem.category}
                  </span>
                  <span className="text-slate-500 text-xs font-mono flex items-center gap-1 font-semibold">
                    <Calendar className="w-3 h-3" /> Year {selectedItem.year}
                  </span>
                  <span className="text-slate-500 text-xs font-mono flex items-center gap-1 font-semibold">
                    <Users className="w-3.5 h-3.5" /> {selectedItem.client}
                  </span>
                </div>

                {/* Cinematic Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C1E36] mb-6">
                  {selectedItem.title}
                </h3>

                {selectedItem.image && (
                  <div className="w-full h-56 rounded-xl overflow-hidden mb-6 border border-slate-200 select-none shadow-sm">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {/* Long Description Narrative */}
                <div className="space-y-4 mb-8 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed max-h-[16rem] overflow-y-auto pr-2">
                  <p className="font-bold text-[#0C1E36]">Project Blueprint Overview:</p>
                  <p>{selectedItem.longDescription || selectedItem.description}</p>

                  {/* Quantitative success callout panel */}
                  {selectedItem.metrics && (
                    <div className="p-4 rounded-xl border border-red-100 bg-red-50 shadow-sm">
                      <span className="block text-[9px] font-mono tracking-widest text-[#f80d05] uppercase font-bold mb-1">
                        Quantified Success Metric
                      </span>
                      <p className="text-xs text-[#0C1E36] font-bold italic">
                        "{selectedItem.metrics}"
                      </p>
                    </div>
                  )}

                  {/* Complete deliverables checklist */}
                  {selectedItem.deliverables && (
                    <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                      <p className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">
                        Strategic Assets Delivered:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedItem.deliverables.map((del, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f80d05]" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stacks details (if tech of choice) */}
                  {selectedItem.techStack && (
                    <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                      <p className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">
                        Core Code Implementation Stack:
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {selectedItem.techStack.map((tech, idx) => (
                          <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 border border-indigo-150 text-indigo-700 font-bold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Action buttons */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="block text-[8px] font-mono tracking-wider text-slate-400 uppercase">
                      Direct Consult Resource Link
                    </span>
                    <span className="text-[11px] font-mono uppercase text-slate-600 font-bold">
                      House Ventures Consultancy
                    </span>
                  </div>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded bg-slate-100 hover:bg-[#0C1E36] hover:text-white text-slate-700 font-bold text-xs font-mono transition-all uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
                    </button>
                    <a
                      href={`https://wa.me/254728606684?text=${encodeURIComponent(`Hi Okello, I saw your case study "${selectedItem.title}" on your website and would like to discuss a similar project.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#0C1E36] hover:bg-[#f80d05] text-white text-xs font-mono font-bold tracking-wider transition-all uppercase flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      Discuss This Scope <ExternalLink className="w-3.5 h-3.5 text-red-200" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
        </div>
      </section>
    </div>
  );
}
