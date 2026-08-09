import React, { useState } from "react";
import { BLOGS } from "../data";
import { BlogItem } from "../types";
import { Search, Calendar, Clock, BookOpen, ChevronRight, X, ArrowUpRight, Share2, Sparkles } from "lucide-react";

export default function Insights() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "ATS Optimization" | "Software Engineering" | "Business Strategy">("all");
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  const categories: Array<"all" | "ATS Optimization" | "Software Engineering" | "Business Strategy"> = [
    "all", "ATS Optimization", "Software Engineering", "Business Strategy"
  ];

  const filteredBlogs = BLOGS.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="insights" className="py-24 relative bg-[#0C1E36] border-t border-[#f80d05]/20 text-white">
      {/* Design lighting coordinates */}
      <div className="absolute top-[30%] left-[-10%] w-[30rem] h-[30rem] bg-red-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.25em] text-red-400 block uppercase mb-3 font-bold">
              Strategic Insights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              The Tech-Executive Field Log
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-4 leading-relaxed font-sans font-medium">
              SEO-architected columns merging candidate positioning mechanics, proposal formulas, and technical Golang infrastructure audits.
            </p>
          </div>

          {/* Search bar inside header */}
          <div className="w-full lg:max-w-xs relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search guides, code, or formats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#081D35] border border-red-400/20 rounded-xl py-3 pl-11 pr-4 text-xs font-sans text-slate-200 focus:outline-none focus:border-[#f80d05] focus:ring-0 placeholder:text-slate-500 transition-colors font-medium"
            />
          </div>
        </div>

        {/* Blog category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-red-400/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-red-500/10 text-red-400 border border-red-400/45"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat === "all" ? "All Columns" : cat}
            </button>
          ))}
        </div>

        {/* Blog items matrix */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 rounded-xl border border-red-400/15 bg-red-950/20">
            <span className="text-xs font-mono text-slate-400">No matching columns found. Try a different search query.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="rounded-2xl bg-[#081D35] border border-[#f80d05]/15 p-6 flex flex-col justify-between hover:border-red-400 hover:bg-[#0E2D4F] transition-all duration-300 cursor-pointer group shadow-md"
              >
                <div>
                  {/* Article meta info */}
                  <div className="flex items-center justify-between gap-4 mb-4 text-[10px] font-mono text-slate-300">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-900/30 font-bold">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>

                  {/* Headline & Body */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-red-300 transition-colors line-clamp-2 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans font-medium line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Tags lists */}
                <div className="pt-4 border-t border-[#f80d05]/15 mt-auto flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {blog.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-mono text-slate-400 font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono text-red-400 group-hover:text-white font-bold transition-colors flex items-center gap-0.5 leading-none shrink-0 cursor-pointer">
                    Read Column <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Blog detailed full column modal popup */}
        {selectedBlog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="w-full max-w-2xl bg-[#091E36] border border-red-400/30 rounded-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 text-white">
              
              {/* Colored layout top anchor */}
              <div className="h-1.5 w-full bg-[#f80d05]" />

              {/* Close pin */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800/40 border border-slate-850 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Close columns dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable contents panel */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-red-400 px-2.5 py-1 bg-red-950 rounded border border-red-500/20">
                    {selectedBlog.category}
                  </span>
                  <span className="text-slate-300 text-xs font-mono flex items-center gap-1.5 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-red-400" /> Published: {selectedBlog.date}
                  </span>
                  <span className="text-slate-300 text-xs font-mono flex items-center gap-1 font-bold">
                    <Clock className="w-3.5 h-3.5" /> {selectedBlog.readTime}
                  </span>
                </div>

                {/* Headline title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6">
                  {selectedBlog.title}
                </h3>

                {/* Styled article body */}
                <div className="space-y-4 mb-8 text-slate-100 font-sans text-xs sm:text-sm leading-relaxed max-h-[22rem] overflow-y-auto pr-2 scrollbar select-text border-t border-b border-red-950/50 py-4 font-medium bg-[#07192F] p-4 rounded-xl border border-red-400/10">
                  {selectedBlog.content.split("\n\n").map((block, bIdx) => {
                    // Primitive header parse tags
                    if (block.startsWith("### ")) {
                      return (
                        <h4 key={bIdx} className="font-serif text-base sm:text-lg font-bold text-white pt-4">
                          {block.substring(4)}
                        </h4>
                      );
                    }
                    if (block.startsWith("## ")) {
                      return (
                        <h4 key={bIdx} className="font-serif text-lg font-bold text-red-400 pt-4">
                          {block.substring(3)}
                        </h4>
                      );
                    }
                    if (block.startsWith("```")) {
                      const codeText = block.replace(/```[a-z]*/, "").replace(/```$/, "").trim();
                      return (
                        <pre key={bIdx} className="p-4 rounded-xl bg-slate-950/75 border border-red-400/10 text-[11px] font-mono leading-relaxed text-indigo-300 overflow-x-auto whitespace-pre">
                          <code>{codeText}</code>
                        </pre>
                      );
                    }
                    return (
                      <p key={bIdx} className="font-sans font-medium tracking-wide">
                        {block}
                      </p>
                    );
                  })}
                </div>

                {/* Footer and sharing details links */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex gap-1">
                    {selectedBlog.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-400 font-bold">
                        #{tag} &bull;
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedBlog(null)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded bg-slate-800/40 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors uppercase cursor-pointer font-bold"
                    >
                      Close Column
                    </button>
                    <a
                      href={`https://wa.me/254728606684?text=${encodeURIComponent(`Hi Okello, I just read your column "${selectedBlog.title}" on your website and would like to collaborate.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#f80d05] hover:bg-red-600 rounded text-white text-xs font-mono font-bold tracking-wider transition-colors uppercase flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Discuss This Field <ArrowUpRight className="w-3.5 h-3.5 text-red-100" />
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
