import React from "react";
import { User, ShieldCheck, Mail, Globe, BrainCircuit, Code, Terminal, Clock, Award, Linkedin, Github, Twitter } from "lucide-react";
import FounderGallery, { SafeImage } from "./FounderGallery";

const technologyPortrait = "/assets/aistudio/c08lP_2a24af41.jpg";
const communicationPortrait = "/assets/aistudio/Thoughtful_Professional_Portrait_84cd5f48.png";

interface AboutProps {
  onSelectAction?: (actionId: string) => void;
}

export default function About({ onSelectAction }: AboutProps) {
  const corporateAchievements = [
    { metric: "1,000+", label: "Executive Documents Drafted" },
    { metric: "95%+", label: "Direct Referral Rate" },
    { metric: "KEWOTA", label: "Board C-Level Partner" },
    { metric: "25+", label: "Major Grants Secured" }
  ];

  const engineeringCapabilities = [
    { metric: "Go (Golang)", label: "Concurrent Backend Microservices" },
    { metric: "TypeScript & React", label: "Modern Full-Stack Web Apps" },
    { metric: "M-Pesa & REST APIs", label: "Real-Time Verified Transactions" },
    { metric: "Agile & Git", label: "Peer Code Reviews & CI Sprints" }
  ];

  return (
    <>
      <section id="about" className="py-20 sm:py-24 relative overflow-hidden bg-white">
        {/* Visual background accents */}
        <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-[#f80d05]/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[25rem] h-[25rem] bg-[#f80d05]/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16 max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1E36] tracking-tight leading-tight">
              The Intersection of Elite Copywriting &amp; Software Systems
            </h2>
            <div className="h-1 w-20 bg-[#f80d05] mt-6" />
          </div>

          {/* Narrative Split Layout: Developer Zone01 FIRST, Executive Consultant SECOND */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* LEFT / FIRST: SOFTWARE ENGINEER (ZONE01) */}
            <div className="lg:col-span-6 p-8 rounded-2xl glass-panel relative group hover:border-[#f80d05]/30 transition-all duration-300 border border-slate-200 shadow-sm bg-gradient-to-b from-white to-[#f80d05]/[0.03] flex flex-col justify-between">
              <div>
                <div className="absolute top-4 right-4 text-[#f80d05]/25 group-hover:text-[#f80d05]/50 transition-colors">
                  <Terminal className="w-16 h-16 stroke-[1]" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="relative shrink-0 select-none">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#f80d05]/30 shadow-md bg-white flex items-center justify-center">
                      <SafeImage
                        primarySrc={technologyPortrait}
                        fallbackSrc={technologyPortrait}
                        alt="Okello Odhiambo - Full-Stack Software Engineer at Zone01"
                        className="w-full h-full object-cover object-[22%_20%]"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 p-1 bg-[#f80d05] rounded-lg text-white border border-white shadow-xs">
                      <Code className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C1E36] leading-tight">
                      Full-Stack Software Engineer
                    </h3>
                    <span className="text-xs font-mono text-[#f80d05] uppercase tracking-widest font-bold block mt-0.5">
                      Developer @ Developer Zone Zero One (Zone01)
                    </span>
                    <div className="flex gap-2.5 mt-2">
                      <a
                        href="https://github.com/okelloodhiambocvs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#0C1E36] font-mono font-bold hover:text-[#f80d05] transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" /> Code Repo
                      </a>
                      <span className="text-slate-300 select-none text-xs">•</span>
                      <a
                        href="https://www.linkedin.com/in/okello-odhiambo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#f80d05] font-mono font-bold hover:text-[#0C1E36] transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" /> Developer Bio
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 font-sans text-base tracking-wide leading-relaxed">
                  <p>
                    Presently developing as a full-stack software engineer at <strong className="text-[#0C1E36]">Developer Zone Zero One (Zone01 Kisumu)</strong>, my primary technical specialization centers on <strong className="text-[#f80d05]">Go (Golang)</strong> alongside modern web architectures.
                  </p>
                  <p>
                    At Zone01, we solve rigorous internal software projects and Go systems challenges daily, undergoing structured peer and instructor checkpoints to verify production readiness and clean engineering craft.
                  </p>
                  <p>
                    In client and personal product builds, I engineer platforms like <strong className="text-[#0C1E36]">Ni-Wera</strong>—connecting certified plumbers, electricians, and builders across Kenya with real-time M-Pesa payment verification in <strong className="text-[#f80d05]">TypeScript and Node.js</strong>—while practicing agile sprints, Git collaboration, and strict code reviews.
                  </p>
                </div>
              </div>

              {/* Symmetrical Engineering Capabilities Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                {engineeringCapabilities.map((cap, idx) => (
                  <div key={idx} className="p-3 bg-white border border-slate-100 rounded-lg">
                    <span className="block font-serif text-lg sm:text-xl font-bold text-[#0C1E36]">{cap.metric}</span>
                    <span className="block text-[11px] uppercase font-mono tracking-wider text-slate-500 mt-0.5 font-bold">{cap.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT / SECOND: EXECUTIVE BRAND CONSULTANT */}
            <div className="lg:col-span-6 p-8 rounded-2xl glass-panel relative group hover:border-[#f80d05]/30 transition-all duration-300 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="absolute top-4 right-4 text-[#f80d05]/25 group-hover:text-[#f80d05]/50 transition-colors">
                  <Award className="w-16 h-16 stroke-[1]" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="relative shrink-0 select-none">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#f80d05]/30 shadow-md bg-white flex items-center justify-center">
                      <SafeImage
                        primarySrc={communicationPortrait}
                        fallbackSrc={communicationPortrait}
                        alt="Okello Odhiambo - Executive Brand Consultant"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 p-1 bg-[#f80d05] rounded-lg text-white border border-white shadow-xs">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C1E36] leading-tight">
                      Executive Branding Consultant
                    </h3>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold block mt-0.5">
                      Founder, House Ventures Consultancy
                    </span>
                    <div className="flex gap-2.5 mt-2">
                      <a
                        href="https://www.linkedin.com/in/okello-odhiambo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#f80d05] font-mono font-bold hover:text-[#0C1E36] transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" /> CV Bio
                      </a>
                      <span className="text-slate-300 select-none text-xs">•</span>
                      <a
                        href="https://x.com/OkelloOdhiambo0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-slate-500 font-mono font-bold hover:text-[#0C1E36] transition-colors"
                      >
                        <Twitter className="w-3.5 h-3.5" /> Brand Feed
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 font-sans text-base tracking-wide leading-relaxed">
                  <p>
                    Following my software engineering focus, I am also the founder of <strong className="text-[#0C1E36]">House Ventures Consultancy</strong>, established in 2021. For over half a decade, I have formulated high-converting strategic career narratives for executive leaders and ambitious professionals.
                  </p>
                  <p>
                    I act as an elite CV writer, cover letter architect, business proposal strategist, and grant writer. My methodology reconstructs candidate portfolios to satisfy digital ATS algorithms while presenting compelling C-suite storytelling that commands human review.
                  </p>
                  <p>
                    Trusted by elite Kenyan entities including <span className="text-[#f80d05] font-bold">KEWOTA, ENA Coach Foundation, Wamae &amp; Allen Advocates, Okullo Foundation</span>, and <span className="text-[#f80d05] font-bold">Chuny Onagi TV</span>.
                  </p>
                </div>
              </div>

              {/* Achievement counters inside slide */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                {corporateAchievements.map((ach, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <span className="block font-serif text-xl font-bold text-[#f80d05]">{ach.metric}</span>
                    <span className="block text-[11px] uppercase font-mono tracking-wider text-slate-500 mt-0.5 font-bold">{ach.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Moments & Field Leadership Gallery on Brand Navy Section */}
      <FounderGallery onSelectAction={onSelectAction} />
    </>
  );
}
