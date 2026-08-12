import React from "react";
import { MessageSquare, Briefcase, ChevronDown, CheckCircle2, Terminal } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Background Animated Gradient Layer */}
      <div className="absolute inset-0 z-0 bg-slate-50/40" />

      {/* High-Quality Sharp Brand Photo Collage of Okello Odhiambo */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-[0.38] sm:opacity-[0.48] transition-opacity duration-1000 overflow-hidden">
        <img
          src="/src/assets/images/okello_brand_bg_1780136809302.png"
          alt="Okello Odhiambo - Executive Consultant & Engineer Collage"
          className="w-full h-full object-cover object-center scale-[1.01]"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays to blend beautifully with the slate-50 background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/60 to-slate-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#f8fafc_95%)]" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-red-100/25 blur-3xl mix-blend-multiply animate-pulse duration-10000 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] rounded-full bg-rose-50/35 blur-3xl mix-blend-multiply animate-pulse pointer-events-none" />

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 z-0 opacity-[0.04] bg-[linear-gradient(to_right,#f80d05_1px,transparent_1px),linear-gradient(to_bottom,#f80d05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Cinematic Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C1E36] tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Engineering Scalable Software &amp; <span className="text-[#f80d05] font-sans tracking-normal transition-colors">Strategic Communication</span>
        </h1>

        {/* Dynamic Descriptive Subheadline */}
        <p className="max-w-2xl text-slate-600 text-sm sm:text-base md:text-lg tracking-wide font-sans font-normal leading-relaxed mb-10">
          Full-Stack Software Developer | Golang &amp; React Architect | Executive Communication Strategist | Founder of{' '}
          <span className="text-[#0C1E36] font-bold border-b-2 border-[#f80d05] pb-0.5 hover:text-[#f80d05] transition-colors">
            House Ventures Consultancy
          </span>
          . Building high-performance backend microservices, modern web applications, and C-Suite career assets.
        </p>

        {/* Action Blocks & Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={() => onNavigate("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded bg-[#0C1E36] hover:bg-[#f80d05] text-white font-sans font-bold tracking-wider text-xs uppercase shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Hire Developer / Consultant
          </button>

          <button
            onClick={() => onNavigate("portfolio")}
            className="w-full sm:w-auto px-8 py-4 rounded bg-white border-2 border-[#0C1E36] hover:border-[#f80d05] text-[#0C1E36] hover:text-[#f80d05] font-sans font-bold tracking-wider text-xs uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#f80d05]" /> Software &amp; Case Studies
          </button>

          <a
            href="https://wa.me/254728606684?text=Hi%20Okello,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20discuss%20a%20software%20development%20or%20consultancy%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-sans font-bold tracking-wider text-xs uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 leading-none" /> WhatsApp Chat
          </a>
        </div>

        {/* Micro stats banner for credibility proof */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 px-6 py-8 rounded-xl glass-panel glow-subtle max-w-4xl w-full border border-slate-200">
          <div>
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#0C1E36]">Zone01</span>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#f80d05] mt-1 font-bold">Golang Software Labs</span>
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#0C1E36]">1,000+</span>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#f80d05] mt-1 font-bold">Executive Documents</span>
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#0C1E36]">Sub-12ms</span>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#f80d05] mt-1 font-bold">API Latency Speed</span>
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#0C1E36]">5+ Years</span>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#f80d05] mt-1 font-bold">Founding Authority</span>
          </div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 cursor-pointer hover:text-[#f80d05] transition-colors animate-bounce" onClick={() => onNavigate("about")}>
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </div>
    </section>
  );
}
