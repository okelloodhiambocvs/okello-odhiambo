import React from "react";
import { ArrowRight } from "lucide-react";
import { SafeImage } from "./FounderGallery";
import { AnimatedWords, FadeInWriting } from "./MotionPrimitives";

const SPOTLIGHT_PORTRAIT_SRC =
  "/assets/aistudio/WhatsApp_Image_2026-11-09_at_12.59.17_AM-removebg-preview_df34d606.png";

interface SpotlightBannerProps {
  onNavigate: (pageId: string) => void;
}

export default function SpotlightBanner({ onNavigate }: SpotlightBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-[#dbe6f3] to-[#c7d8ec] border-t border-slate-200">
      {/* Subtle atmospheric sky/cloud depth matching reference lower feature band */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.92) 0%, transparent 55%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.85) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left & Center Bold Poster Typography */}
          <div className="lg:col-span-7 pb-14 sm:pb-20 text-center lg:text-left">
            <FadeInWriting mode="view" delay={0.05} className="-rotate-2 origin-left inline-block">
              <span className="block font-sans text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.92] text-[#f80d05]">
                <AnimatedWords text="OKELLO ODHIAMBO" mode="view" stagger={0.06} />
              </span>
              <span className="block font-sans text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.02] text-[#0C1E36] mt-1">
                <AnimatedWords text="BUILDS SYSTEMS & CAREERS" mode="view" delayOffset={0.12} stagger={0.04} />
              </span>
            </FadeInWriting>

            <FadeInWriting mode="view" delay={0.16}>
              <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-[#0C1E36]/85 text-base sm:text-[1.15rem] font-sans leading-relaxed">
                From production Golang microservices and M-Pesa marketplaces at Zone01 Kisumu to board-ready ATS resumes and institutional grants at House Ventures Consultancy.
              </p>
            </FadeInWriting>

            <FadeInWriting mode="view" delay={0.24} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => onNavigate("portfolio")}
                className="px-7 py-3.5 rounded bg-[#f80d05] hover:bg-[#d40b04] text-white font-sans font-bold uppercase tracking-wider text-xs shadow-md transition-colors cursor-pointer inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                Explore Case Studies <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate("ats-scanner")}
                className="px-6 py-3.5 rounded bg-[#0C1E36] hover:bg-[#132c4f] text-white font-sans font-bold uppercase tracking-wider text-xs shadow-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Launch AI CV Grader
              </button>
            </FadeInWriting>
          </div>

          {/* Right Transparent Cutout Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
            <div className="relative w-full max-w-[400px] lg:max-w-[460px] h-[380px] sm:h-[450px] lg:h-[480px] flex items-end justify-center">
              <SafeImage
                primarySrc={SPOTLIGHT_PORTRAIT_SRC}
                fallbackSrc={SPOTLIGHT_PORTRAIT_SRC}
                alt="Okello Odhiambo — Executive Consultant and Software Developer"
                className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_14px_28px_rgba(12,30,54,0.28)]"
              />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#c7d8ec] via-[#c7d8ec]/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
