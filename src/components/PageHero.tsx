import React from "react";

interface PageHeroProps {
  kicker: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  children?: React.ReactNode;
}

export default function PageHero({
  kicker,
  titlePrefix,
  titleHighlight,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#0C1E36] text-white overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 75% 35%, rgba(30, 58, 95, 0.72) 0%, rgba(12, 30, 54, 0.96) 55%, #071426 100%)",
        }}
      />
      <div className="absolute -bottom-24 -left-24 w-[24rem] h-[24rem] rounded-full bg-[#f80d05]/[0.08] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 sm:py-16">
        <p className="text-slate-200 text-base sm:text-lg md:text-xl font-sans font-normal tracking-normal mb-2">
          {kicker}
        </p>
        <h1 className="font-sans text-3xl sm:text-5xl md:text-[3.5rem] font-extrabold uppercase tracking-tight leading-[1.05] text-white mb-5 max-w-4xl text-balance">
          {titlePrefix}{" "}
          <span className="text-[#f80d05]">{titleHighlight}</span>
        </h1>
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base tracking-wide font-sans font-normal leading-relaxed">
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
