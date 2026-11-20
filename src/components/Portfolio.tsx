import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO } from "../data";
import { ArrowLeft, ArrowRight, ChevronDown, Sparkles, Maximize2 } from "lucide-react";
import { SafeImage } from "./FounderGallery";
import { AnimatedWords, FadeInWriting } from "./MotionPrimitives";

const PORTFOLIO_HERO_PORTRAIT_SRC =
  "/assets/aistudio/WhatsApp_Image_2026-11-09_at_12.59.17_AM-removebg-preview_df34d606.png";

interface PortfolioProps {
  onNavigate?: (pageId: string) => void;
  onSelectProject?: (projectId: string) => void;
}

export default function Portfolio({ onNavigate, onSelectProject }: PortfolioProps) {
  const [filter, setFilter] = useState<"all" | "CVs" | "Proposals" | "Company Profiles" | "Tech Projects">("all");

  const categories: Array<"all" | "CVs" | "Proposals" | "Company Profiles" | "Tech Projects"> = [
    "all", "CVs", "Proposals", "Company Profiles", "Tech Projects"
  ];

  const filteredPortfolio = PORTFOLIO.filter((item) => {
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
                <FadeInWriting mode="mount" delay={0.05}>
                  <p className="text-slate-200 text-lg sm:text-xl md:text-2xl font-sans font-normal tracking-normal mb-2">
                    Proven Systems &amp;
                  </p>
                </FadeInWriting>

                <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold uppercase tracking-tight leading-[1.03] text-white mb-6 text-balance">
                  <AnimatedWords
                    text="Selected High-Stakes Deliverables"
                    highlightWords={["Deliverables"]}
                    mode="mount"
                    delayOffset={0.1}
                    stagger={0.05}
                  />
                </h1>

                <FadeInWriting mode="mount" delay={0.25}>
                  <p className="max-w-xl text-slate-300 text-base sm:text-[1.15rem] tracking-wide font-sans font-normal leading-relaxed mb-8">
                    Production Golang and TypeScript platforms, corporate profiles, grant proposals, and executive career transformations delivered across East Africa via{" "}
                    <span className="text-white font-semibold border-b-2 border-[#f80d05] pb-0.5">
                      Zone01 &amp; House Ventures Consultancy
                    </span>
                    .
                  </p>
                </FadeInWriting>

                {/* Primary Hero Actions matching landing page */}
                <FadeInWriting mode="mount" delay={0.34} className="flex flex-wrap sm:flex-nowrap items-center gap-3 mb-10">
                  <button
                    type="button"
                    onClick={() => (onNavigate ? onNavigate("contact") : scrollToDeliverables())}
                    className="w-full sm:w-auto px-5 py-3.5 rounded bg-[#f80d05] hover:bg-[#d40b04] text-white font-sans font-bold tracking-wider text-xs uppercase shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
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
                </FadeInWriting>
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
            <FadeInWriting mode="mount" delay={0.18} className="lg:col-span-5 relative flex justify-center lg:justify-end self-end">
              <div className="relative w-full max-w-[440px] lg:max-w-[510px] h-[400px] sm:h-[480px] lg:h-[560px] flex items-end justify-center">
                <SafeImage
                  primarySrc={PORTFOLIO_HERO_PORTRAIT_SRC}
                  fallbackSrc={PORTFOLIO_HERO_PORTRAIT_SRC}
                  alt="Okello Odhiambo — Software Developer and Executive Portfolio Architect"
                  className="h-full w-auto max-w-full object-contain object-bottom [mask-image:linear-gradient(to_top,transparent_0%,black_12%,black_100%)]"
                />
              </div>
            </FadeInWriting>
          </div>
        </div>
      </section>

      {/* Full-Width Portfolio Proof Bar matching About Us landing page */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <FadeInWriting mode="view" delay={0.05} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-2 md:pt-0 md:pr-6">
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
          </FadeInWriting>
        </div>
      </section>

      {/* Plain White Background Portfolio Deliverables — Writings Sit Directly on Plain White (like Okello in Action) */}
      <section id="portfolio-deliverables" className="py-16 sm:py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Editorial Section Header & Category Filter Controls */}
          <FadeInWriting mode="view" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#0C1E36] tracking-tight mb-4">
                <AnimatedWords text="Verified Work & Case Studies" mode="view" stagger={0.04} />
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
          </FadeInWriting>

          {/* Clean Borderless Writings Directly on Plain White Background */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
              {filteredPortfolio.map((item, idx) => (
                <motion.button
                  type="button"
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    duration: 0.42,
                    delay: Math.min((idx % 3) * 0.08, 0.24),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => onSelectProject?.(item.id)}
                  className="group relative text-left flex flex-col w-full bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f80d05]"
                >
                  {/* Clean Full-Bleed Image Cover */}
                  {item.image && (
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-xs font-mono flex items-center gap-1.5 font-bold">
                          <Maximize2 className="w-3.5 h-3.5" /> Read Full Case Study
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Typography Directly on Plain White Background */}
                  <div className="pt-4 flex-1 flex flex-col justify-between w-full">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#f80d05]">
                          {item.category}
                        </span>
                        <span className="text-xs font-mono text-slate-500 font-semibold">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-xl text-[#0C1E36] group-hover:text-[#f80d05] transition-colors leading-snug mb-1.5">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-500 font-mono mb-2.5 line-clamp-1">
                        {item.client}
                      </p>

                      <p className="text-base text-slate-600 font-sans line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 font-semibold">
                        Expand Overview
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#f80d05] group-hover:translate-x-0.5 transition-transform font-bold">
                        Review Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
