import React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedWords, FadeInWriting } from "./MotionPrimitives";

interface PageHeroProps {
  kicker: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  visual?: React.ReactNode;
  scrollTargetId?: string;
  scrollLabel?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  kicker,
  titlePrefix,
  titleHighlight,
  description,
  visual,
  scrollTargetId,
  scrollLabel = "Scroll down to content",
  children,
}: PageHeroProps) {
  const handleScrollDown = () => {
    if (!scrollTargetId) return;
    const el = document.getElementById(scrollTargetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlightTokens = titleHighlight.trim().split(/\s+/).filter(Boolean);

  return (
    <section className="relative bg-[#0C1E36] text-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 74% 48%, rgba(36, 69, 112, 0.78) 0%, rgba(12, 30, 54, 0.96) 54%, #071426 100%)",
        }}
      />
      <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#f80d05]/[0.07] blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 sm:pt-12 lg:pt-14 pb-10 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* LEFT COLUMN */}
          <div className={`${visual ? "lg:col-span-7" : "lg:col-span-12"} flex flex-col justify-between`}>
            <div>
              <FadeInWriting mode="mount" delay={0.04}>
                <p className="text-slate-200 text-lg sm:text-xl md:text-2xl font-sans font-normal tracking-normal mb-2">
                  {kicker}
                </p>
              </FadeInWriting>
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold uppercase tracking-tight leading-[1.03] text-white mb-6 max-w-4xl text-balance">
                <AnimatedWords
                  text={`${titlePrefix} ${titleHighlight}`}
                  highlightWords={highlightTokens}
                  mode="mount"
                  delayOffset={0.1}
                  stagger={0.05}
                />
              </h1>
              <FadeInWriting mode="mount" delay={0.22}>
                <p className="max-w-xl text-slate-300 text-base sm:text-[1.15rem] tracking-wide font-sans font-normal leading-relaxed">
                  {description}
                </p>
              </FadeInWriting>
              {children && (
                <FadeInWriting mode="mount" delay={0.3} className="mt-8">
                  {children}
                </FadeInWriting>
              )}
            </div>

            {scrollTargetId && (
              <div className="pt-8">
                <button
                  type="button"
                  onClick={handleScrollDown}
                  aria-label={scrollLabel}
                  className="w-11 h-11 rounded-full border border-white/35 hover:border-[#f80d05] hover:bg-[#f80d05]/15 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Backgroundless Creative Icon Illustration */}
          {visual && (
            <FadeInWriting mode="mount" delay={0.16} className="lg:col-span-5 flex justify-center lg:justify-end">
              {visual}
            </FadeInWriting>
          )}
        </div>
      </div>
    </section>
  );
}
