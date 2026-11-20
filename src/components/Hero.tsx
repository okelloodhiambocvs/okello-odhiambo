import React from "react";
import { MessageSquare, Briefcase, ChevronDown } from "lucide-react";
import { SafeImage } from "./FounderGallery";

const HERO_PORTRAIT_SRC =
  "/assets/aistudio/WhatsApp_Image_2026-11-09_at_12.59.17_AM-removebg-preview_df34d606.png";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const scrollToStory = () => {
    const storyEl = document.getElementById("about-story");
    if (storyEl) {
      storyEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Dark Brand Navy Split Hero — matches reference composition with studio cutout on right */}
      <section className="relative bg-[#0C1E36] text-white overflow-hidden">
        {/* Atmospheric studio backdrop gradients in brand navy + subtle crimson depth */}
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
                {/* Intro Kicker */}
                <p className="text-slate-200 text-lg sm:text-xl md:text-2xl font-sans font-normal tracking-normal mb-2">
                  Engineering Scalable Software &amp;
                </p>

                {/* Primary Display Headline */}
                <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold uppercase tracking-tight leading-[1.03] text-white mb-6 text-balance">
                  Strategic <span className="text-[#f80d05]">Communication</span>
                </h1>

                {/* Dynamic Descriptive Subheadline */}
                <p className="max-w-xl text-slate-300 text-base sm:text-[1.15rem] tracking-wide font-sans font-normal leading-relaxed mb-8">
                  Full-Stack Software Developer | Golang &amp; React Architect | Executive Communication Strategist | Founder of{" "}
                  <span className="text-white font-semibold border-b-2 border-[#f80d05] pb-0.5">
                    House Ventures Consultancy
                  </span>
                  . Building high-performance backend microservices, modern web applications, and C-Suite career assets.
                </p>

                {/* Action Blocks & Call To Actions */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mb-10">
                  <button
                    type="button"
                    onClick={() => onNavigate("contact")}
                    className="w-full sm:w-auto px-5 py-3.5 rounded bg-[#f80d05] hover:bg-[#d40b04] text-white font-sans font-bold tracking-wider text-xs uppercase shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Hire Developer / Consultant
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate("portfolio")}
                    className="w-full sm:w-auto px-5 py-3.5 rounded bg-white/5 border border-white/30 hover:border-[#f80d05] hover:bg-white/10 text-white font-sans font-bold tracking-wider text-xs uppercase transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-[#f80d05]" /> Software &amp; Case Studies
                  </button>

                  <a
                    href="https://wa.me/254728606684?text=Hi%20Okello,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20discuss%20a%20software%20development%20or%20consultancy%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto px-4 py-3.5 rounded border border-[#f80d05]/45 bg-[#f80d05]/10 hover:bg-[#f80d05] text-white font-sans font-bold tracking-wider text-xs uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <MessageSquare className="w-4 h-4 text-[#f80d05] group-hover:text-white" /> WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Circular Down Scroll Control */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={scrollToStory}
                  aria-label="Scroll down to About Us section"
                  className="w-11 h-11 rounded-full border border-white/35 hover:border-[#f80d05] hover:bg-[#f80d05]/15 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Transparent Cutout Portrait of Okello Odhiambo */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end self-end">
              <div className="relative w-full max-w-[440px] lg:max-w-[520px] h-[420px] sm:h-[500px] lg:h-[600px] flex items-end justify-center">
                <SafeImage
                  primarySrc={HERO_PORTRAIT_SRC}
                  fallbackSrc={HERO_PORTRAIT_SRC}
                  alt="Okello Odhiambo — Full-Stack Software Developer and Executive Consultant"
                  className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)] [mask-image:linear-gradient(to_top,transparent_0%,black_10%,black_100%)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
