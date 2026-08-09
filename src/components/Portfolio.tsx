import React, { useState } from "react";
import { PORTFOLIO } from "../data";
import { PortfolioItem } from "../types";
import { Layers, FileSpreadsheet, Eye, X, BookOpen, ExternalLink, Calendar, Users, Cpu, FileCheck } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "CVs" | "Proposals" | "Company Profiles" | "Tech Projects">("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories: Array<"all" | "CVs" | "Proposals" | "Company Profiles" | "Tech Projects"> = [
    "all", "CVs", "Proposals", "Company Profiles", "Tech Projects"
  ];

  const filteredPortfolio = PORTFOLIO.filter(item => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="portfolio" className="py-24 relative bg-white border-t border-slate-200">
      {/* Decorative gradient effects */}
      <div className="absolute top-[40%] right-[10%] w-[25rem] h-[25rem] bg-red-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.25em] text-[#f80d05] block uppercase mb-3 font-bold">
              Elite Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1E36] tracking-tight">
              Selected High-Stakes Deliverables
            </h2>
            <div className="h-1 w-20 bg-[#f80d05] mt-6" />
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wide transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-[#0C1E36] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 border border-slate-200 hover:border-slate-350 hover:text-[#0C1E36]"
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
              
              {/* Modal Gradient Header bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#f80d05] to-[#0C1E36]" />

              {/* Close Button Pin */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 border border-slate-100 text-slate-500 hover:text-[#0C1E36] transition-all cursor-pointer"
                aria-label="Close case study details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="p-8">
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
                      className="w-full sm:w-auto px-5 py-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-650 font-bold hover:text-slate-900 text-xs font-mono transition-all uppercase tracking-wider cursor-pointer"
                    >
                      Close Window
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
  );
}
