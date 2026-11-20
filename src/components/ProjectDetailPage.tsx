import React from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Briefcase, ExternalLink, Layers } from "lucide-react";
import { PortfolioItem } from "../types";
import { PORTFOLIO } from "../data";
import { buildEnrichedProjectDetails } from "../utils/portfolioDetail";
import { AnimatedWords, FadeInWriting } from "./MotionPrimitives";

interface ProjectDetailPageProps {
  item: PortfolioItem;
  onBack: () => void;
  onSelectProject: (projectId: string) => void;
  onNavigate: (pageId: string) => void;
}

export default function ProjectDetailPage({
  item,
  onBack,
  onSelectProject,
  onNavigate,
}: ProjectDetailPageProps) {
  const details = buildEnrichedProjectDetails(PORTFOLIO, item.id);
  const overviewParagraphs = details?.overviewParagraphs || [item.longDescription || item.description];
  const otherProjects = details?.relatedProjects || [];

  return (
    <div id="project-detail-page" className="w-full bg-white">
      {/* Dark Brand Navy Split Hero matching ActionDetailPage & Portfolio */}
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
          <FadeInWriting mode="mount" delay={0.04} className="mb-8">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono font-bold text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
            </button>
          </FadeInWriting>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <FadeInWriting mode="mount" delay={0.08}>
                <p className="text-slate-200 text-base sm:text-lg font-sans font-normal tracking-normal mb-2">
                  {item.category} <span aria-hidden="true">·</span> Year {item.year}
                </p>
              </FadeInWriting>

              <h1 className="font-sans text-3xl sm:text-5xl lg:text-[3.1rem] font-extrabold uppercase tracking-tight leading-[1.06] text-white mb-5 text-balance">
                <AnimatedWords text={item.title} mode="mount" delayOffset={0.1} stagger={0.04} />
              </h1>

              <FadeInWriting mode="mount" delay={0.22}>
                <p className="max-w-xl text-slate-300 text-base sm:text-[1.15rem] font-sans leading-relaxed mb-6">
                  {item.description}
                </p>
              </FadeInWriting>

              <FadeInWriting mode="mount" delay={0.28}>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-300 mb-8">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#f80d05]" /> {item.client}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#f80d05]" /> {item.year}
                  </span>
                </div>
              </FadeInWriting>

              <FadeInWriting mode="mount" delay={0.34} className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/254728606684?text=${encodeURIComponent(
                    `Hi Okello, I reviewed the "${item.title}" project details on your portfolio and would like to discuss a similar engagement.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded bg-[#f80d05] hover:bg-[#d40b04] text-white font-sans font-bold tracking-wider text-xs uppercase shadow-md transition-colors cursor-pointer inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  Discuss This Scope <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className="px-5 py-3.5 rounded bg-white/5 border border-white/30 hover:border-[#f80d05] hover:bg-white/10 text-white font-sans font-bold tracking-wider text-xs uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Request Custom Proposal
                </button>
              </FadeInWriting>
            </div>

            {item.image && (
              <FadeInWriting mode="mount" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[460px] lg:max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#071426]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeInWriting>
            )}
          </div>
        </div>
      </section>

      {/* Thorough Editorial Content Section on Plain White Background */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Primary Narrative & Structured Deliverables */}
            <div className="lg:col-span-8 space-y-12">
              <FadeInWriting mode="view" delay={0.05}>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C1E36] tracking-tight">
                  Project Blueprint &amp; Detailed Overview
                </h2>
                <div className="h-1 w-16 bg-[#f80d05] mt-3 mb-6" />

                <div className="space-y-5 text-slate-700 font-sans text-base sm:text-[1.15rem] leading-relaxed">
                  {overviewParagraphs.map((paragraph, idx) => (
                    <React.Fragment key={idx}>
                      <FadeInWriting mode="view" delay={0.06 * (idx + 1)}>
                        <p>{paragraph}</p>
                      </FadeInWriting>
                    </React.Fragment>
                  ))}
                </div>
              </FadeInWriting>

              {item.deliverables && item.deliverables.length > 0 && (
                <FadeInWriting mode="view" delay={0.08}>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C1E36] tracking-tight mb-6">
                    Strategic Deliverables &amp; Key Components
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {item.deliverables.map((del, idx) => (
                      <div key={idx} className="pt-4 border-t border-slate-200">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#f80d05] shrink-0 mt-1" />
                          <p className="text-base text-[#0C1E36] font-semibold leading-relaxed">
                            {del}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeInWriting>
              )}

              {item.techStack && item.techStack.length > 0 && (
                <FadeInWriting mode="view" delay={0.1}>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C1E36] tracking-tight mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#f80d05]" /> Engineering Architecture &amp; Tools
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-4">
                    Core technical environment powering reliability, responsiveness, and maintainable delivery:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded bg-slate-100 border border-slate-200 text-[#0C1E36] font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </FadeInWriting>
              )}

              {item.metrics && (
                <FadeInWriting mode="view" delay={0.12}>
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1E36] text-white">
                    <span className="block text-[11px] font-mono uppercase tracking-widest text-[#f80d05] font-bold mb-2">
                      Verified Impact &amp; Outcome
                    </span>
                    <p className="font-serif text-lg sm:text-xl leading-relaxed text-white">
                      “{item.metrics}”
                    </p>
                    <span className="block text-xs font-mono text-slate-300 mt-3">
                      — {item.client} ({item.year})
                    </span>
                  </div>
                </FadeInWriting>
              )}
            </div>

            {/* Right Sidebar Metadata & Portfolio Switcher */}
            <aside className="lg:col-span-4 space-y-8">
              <FadeInWriting mode="view" delay={0.08} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70">
                <h3 className="font-serif font-bold text-lg text-[#0C1E36] mb-4">
                  Engagement Profile
                </h3>
                <dl className="space-y-4 text-sm font-sans">
                  <div className="pb-3 border-b border-slate-200/80">
                    <dt className="font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                      Category
                    </dt>
                    <dd className="text-[#0C1E36] font-semibold">{item.category}</dd>
                  </div>
                  <div className="pb-3 border-b border-slate-200/80">
                    <dt className="font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                      Client / Partner
                    </dt>
                    <dd className="text-[#0C1E36] font-semibold">{item.client}</dd>
                  </div>
                  <div className="pb-3 border-b border-slate-200/80">
                    <dt className="font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                      Delivery Timeline
                    </dt>
                    <dd className="text-[#0C1E36] font-semibold">Year {item.year}</dd>
                  </div>
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                      Consultancy Lead
                    </dt>
                    <dd className="text-slate-700 font-medium">
                      Okello Odhiambo · House Ventures
                    </dd>
                  </div>
                </dl>
              </FadeInWriting>

              <FadeInWriting mode="view" delay={0.14} className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="font-serif font-bold text-lg text-[#0C1E36] mb-4">
                  More From Our Portfolio
                </h3>
                <div className="divide-y divide-slate-100">
                  {otherProjects.map((project) => (
                    <button
                      type="button"
                      key={project.id}
                      onClick={() => onSelectProject(project.id)}
                      className="w-full py-3 first:pt-0 last:pb-0 text-left group flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <div>
                        <span className="block text-[11px] font-mono text-[#f80d05] font-bold">
                          {project.category} · {project.year}
                        </span>
                        <span className="block text-sm font-bold text-[#0C1E36] group-hover:text-[#f80d05] transition-colors">
                          {project.title}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#f80d05] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </FadeInWriting>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
