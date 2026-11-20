import React from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Calendar, Briefcase } from "lucide-react";
import { AttachedUserImage, USER_ATTACHED_IMAGES } from "../userImages";
import { SafeImage } from "./FounderGallery";

interface ActionDetailPageProps {
  item: AttachedUserImage;
  onBack: () => void;
  onSelectAction: (actionId: string) => void;
  onNavigate: (pageId: string) => void;
}

export default function ActionDetailPage({
  item,
  onBack,
  onSelectAction,
  onNavigate,
}: ActionDetailPageProps) {
  const otherStories = USER_ATTACHED_IMAGES.filter((entry) => entry.id !== item.id);

  return (
    <div id="action-detail-page" className="w-full bg-white">
      {/* Dark Brand Navy Split Hero matching About Us & Portfolio */}
      <section className="relative bg-[#0C1E36] text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 74% 48%, rgba(36, 69, 112, 0.78) 0%, rgba(12, 30, 54, 0.96) 54%, #071426 100%)",
          }}
        />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#f80d05]/[0.07] blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 sm:pt-12 lg:pt-14 pb-12 lg:pb-16">
          <div className="mb-8">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono font-bold text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Okello in Action
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-slate-200 text-base sm:text-lg font-sans font-normal tracking-normal mb-2">
                {item.category} <span aria-hidden="true">·</span> {item.timeframe}
              </p>

              <h1 className="font-sans text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold uppercase tracking-tight leading-[1.05] text-white mb-5 text-balance">
                {item.title}
              </h1>

              <p className="max-w-xl text-slate-300 text-sm sm:text-base font-sans leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-300 mb-8">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#f80d05]" /> {item.role}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#f80d05]" /> {item.location}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate(item.ctaTarget)}
                  className="px-5 py-3.5 rounded bg-[#f80d05] hover:bg-red-600 text-white font-sans font-bold tracking-wider text-xs uppercase shadow-md transition-colors cursor-pointer inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  {item.ctaLabel} <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onBack}
                  className="px-5 py-3.5 rounded bg-white/5 border border-white/30 hover:border-[#f80d05] hover:bg-white/10 text-white font-sans font-bold tracking-wider text-xs uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Return to About Us
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[460px] lg:max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#071426]">
                <SafeImage
                  primarySrc={item.userPath}
                  fallbackSrc={item.fallbackAsset}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thorough Editorial Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Primary Narrative & Structured Highlights */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C1E36] tracking-tight">
                  In-Depth Overview &amp; Field Context
                </h2>
                <div className="h-1 w-16 bg-[#f80d05] mt-3 mb-6" />

                <div className="space-y-5 text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
                  {item.overviewParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C1E36] tracking-tight mb-6">
                  Key Highlights &amp; Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {item.keyHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl border border-slate-200 bg-slate-50/60"
                    >
                      <div className="flex items-start gap-2.5 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-[#f80d05] shrink-0 mt-1" />
                        <h4 className="font-serif font-bold text-base text-[#0C1E36]">
                          {hl.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                        {hl.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1E36] text-white">
                <span className="block text-[11px] font-mono uppercase tracking-widest text-[#f80d05] font-bold mb-2">
                  Core Principle
                </span>
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-white">
                  “{item.takeaway}”
                </p>
                <span className="block text-xs font-mono text-slate-300 mt-3">
                  — Okello Odhiambo
                </span>
              </div>
            </div>

            {/* Right Sidebar Metadata & Story Switcher */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70">
                <h3 className="font-serif font-bold text-lg text-[#0C1E36] mb-4">
                  Session Profile
                </h3>
                <dl className="space-y-4 text-xs font-sans">
                  <div className="pb-3 border-b border-slate-200/80">
                    <dt className="font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                      Category
                    </dt>
                    <dd className="text-[#0C1E36] font-semibold">{item.category} · {item.tag}</dd>
                  </div>
                  <div className="pb-3 border-b border-slate-200/80">
                    <dt className="font-mono uppercase tracking-wider text-slate-500 font-bold mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#f80d05]" /> Timeframe
                    </dt>
                    <dd className="text-[#0C1E36] font-semibold">{item.timeframe}</dd>
                  </div>
                  <div className="pb-3 border-b border-slate-200/80">
                    <dt className="font-mono uppercase tracking-wider text-slate-500 font-bold mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#f80d05]" /> Location
                    </dt>
                    <dd className="text-[#0C1E36] font-semibold">{item.location}</dd>
                  </div>
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                      Focus Areas
                    </dt>
                    <dd className="text-slate-700 font-medium leading-relaxed">
                      {item.themes.join(" · ")}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="font-serif font-bold text-lg text-[#0C1E36] mb-4">
                  More From Okello in Action
                </h3>
                <div className="divide-y divide-slate-100">
                  {otherStories.map((story) => (
                    <button
                      type="button"
                      key={story.id}
                      onClick={() => onSelectAction(story.id)}
                      className="w-full py-3 first:pt-0 last:pb-0 text-left group flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <div>
                        <span className="block text-[11px] font-mono text-[#f80d05] font-bold">
                          {story.category}
                        </span>
                        <span className="block text-sm font-bold text-[#0C1E36] group-hover:text-[#f80d05] transition-colors">
                          {story.title}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#f80d05] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
