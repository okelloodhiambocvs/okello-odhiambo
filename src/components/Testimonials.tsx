import React, { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, ChevronLeft, ChevronRight, Bookmark, Building, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  const trustPartners = [
    { name: "KEWOTA", desc: "Digital Empowerment Association Partner" },
    { name: "Wamae and Allen Advocates", desc: "Corporate Legal Linkage Specialist" },
    { name: "ENA Coach Foundation", desc: "Regional Transit Support" },
    { name: "Okullo Foundation", desc: "Youth STEM Development" },
    { name: "Chuny Onagi TV", desc: "Digital media strategy" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      {/* Accent glow behind active elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-50/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-[#f80d05] block uppercase mb-3 font-bold">
            Social Proof &amp; Credentials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1E36] tracking-tight">
            Corporate &amp; Academic Endorsements
          </h2>
          <div className="h-1 w-16 bg-[#f80d05] mx-auto mt-6" />
        </div>

        {/* Testimonial Active Display Slide block */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between min-h-[22rem] shadow-sm">
            {/* Massive watermark Quote icon */}
            <div className="absolute top-6 right-8 text-red-500/10 pointer-events-none">
              <Quote className="w-24 h-24 stroke-[1]" />
            </div>

            {/* Testimonials narrative text content */}
            <div>
              {/* Star review scale indicator */}
              <div className="flex gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 text-[#f80d05] fill-[#f80d05]" />
                ))}
              </div>

              <blockquote className="text-slate-650 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed font-sans mb-8">
                "{current.content}"
              </blockquote>
            </div>

            {/* Testimonials user details & sliding arrows controls */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-50 border border-red-100">
                  <Bookmark className="w-5 h-5 text-[#f80d05]" />
                </div>
                <div>
                  <span className="block font-serif text-base font-bold text-[#0C1E36]">{current.name}</span>
                  <span className="block text-xs text-slate-500 font-mono mt-0.5 font-bold">
                    {current.company ? (
                      <>
                        {current.role} at <strong className="text-[#f80d05] font-bold">{current.company}</strong>
                      </>
                    ) : (
                      current.role
                    )}
                  </span>
                </div>
              </div>

              {/* Navigation icons inside panel */}
              <div className="flex gap-2.5">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 hover:border-slate-350 text-slate-500 hover:text-[#0C1E36] transition-all cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 hover:border-slate-350 text-slate-500 hover:text-[#0C1E36] transition-all cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Trust Badges / Partner Grid Display */}
        <div className="pt-12 border-t border-slate-100">
          <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase mb-6 text-center font-bold">
            Delivering Results Across Premier Regional Institutions
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {trustPartners.map((pt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:bg-white hover:border-[#f80d05] shadow-sm transition-all duration-300"
              >
                <Building className="w-5 h-5 text-[#f80d05]/60 mx-auto mb-2" />
                <span className="block font-serif text-xs font-bold text-slate-700">{pt.name}</span>
                <span className="block text-[8px] font-mono text-slate-505 mt-1 uppercase tracking-wide leading-snug font-bold">
                  {pt.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
