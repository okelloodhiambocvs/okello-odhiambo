import React from "react";
import { User, ShieldCheck, Mail, Globe, BrainCircuit, Code, Terminal, Clock, Award, Linkedin, Github, Twitter } from "lucide-react";
import devPortrait from "../assets/images/okello_dev_portrait_1780137295134.png";
import okelloPortrait from "../assets/images/okello_portrait_1780137026187.png";

export default function About() {
  const corporateAchievements = [
    { metric: "1,000+", label: "Executive Documents Drafted" },
    { metric: "95%+", label: "Direct Referral Rate" },
    { metric: "KEWOTA", label: "Board C-Level Partner" },
    { metric: "25+", label: "Major Grants Secured" }
  ];

  const devHighlights = [
    { title: "Zone01 Go & Full-Stack Labs", detail: "Solving daily Go progress tasks, internal projects & checkpoints" },
    { title: "Kasify Web App Project", detail: "Connecting certified plumbers, electricians & builders in Kenya via M-Pesa" },
    { title: "TypeScript & Node.js Stack", detail: "Building secure, real-time verified web systems and APIs" }
  ];



  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Visual background accents */}
      <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-red-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[25rem] h-[25rem] bg-rose-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-xs tracking-[0.25em] text-[#f80d05] block uppercase mb-3 font-bold">
            Core Dual Identity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1E36] tracking-tight leading-tight">
            The Intersection of Elite Copywriting &amp; Software Systems
          </h2>
          <div className="h-1 w-20 bg-[#f80d05] mt-6" />
        </div>

        {/* Narrative Split Layout: Developer Zone01 FIRST, Executive Consultant SECOND */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* LEFT / FIRST: SOFTWARE ENGINEER (ZONE01) */}
          <div className="lg:col-span-6 p-8 rounded-2xl glass-panel relative group hover:border-[#f80d05]/30 transition-all duration-300 border border-slate-200 shadow-sm bg-gradient-to-b from-white to-red-50/20">
            <div className="absolute top-4 right-4 text-red-400/30 group-hover:text-[#f80d05]/50 transition-colors">
              <Terminal className="w-16 h-16 stroke-[1]" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="relative shrink-0 select-none">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-red-200 shadow-md">
                  <img
                    src={devPortrait}
                    alt="Okello Odhiambo - Full-Stack Software Engineer at Zone01"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 p-1 bg-[#f80d05] rounded-lg text-white border border-white shadow-xs">
                  <Code className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-red-100 text-red-800 border border-red-200 font-bold mb-1">
                  Primary Capability
                </span>
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

            <div className="space-y-4 text-slate-650 font-sans text-sm tracking-wide leading-relaxed">
              <p>
                Presently developing as a full-stack software engineer at <strong className="text-[#0C1E36]">Developer Zone Zero One (Zone01 Kisumu)</strong>, my primary technical specialization centers on <strong className="text-[#f80d05]">Go (Golang)</strong> alongside modern web architectures.
              </p>
              <p>
                At Zone01, we are given several internal software projects and Go language challenges that enable us to solve basic daily progress milestones. We undergo rigorous checkpoints that allow instructors and peers to evaluate our language mastery and trajectory as software engineers.
              </p>
              <p>
                On personal projects, we are currently building <strong className="text-[#0C1E36]">Kasify</strong>—a high-impact web application designed to connect formally certified plumbers, electricians, and builders across Kenya. Kasify is securely backed with real-time M-Pesa verification and engineered using <strong className="text-[#f80d05]">TypeScript and Node.js</strong> in the JavaScript ecosystem.
              </p>
              <p className="border-l-2 border-[#f80d05] pl-4 py-1 italic bg-red-50 text-slate-750 font-mono text-[11px] leading-tight">
                $ go run main.go --zone01-checkpoints --project=Kasify-TypeScript-MPesa
              </p>
              <p>
                Besides that, this immersive environment exposes me directly to real-world experience of how a software developer works every day: practicing agile sprints, Git-based collaboration, strict code reviews, and practical engineering problem solving.
              </p>
            </div>

            {/* Development timeline markers */}
            <div className="space-y-3 mt-8 pt-8 border-t border-slate-100">
              {devHighlights.map((hl, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-[#f80d05] mt-2" />
                  <div>
                    <span className="block text-xs font-bold text-[#0C1E36]">{hl.title}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{hl.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT / SECOND: EXECUTIVE BRAND CONSULTANT */}
          <div className="lg:col-span-6 p-8 rounded-2xl glass-panel relative group hover:border-[#0C1E36]/20 transition-all duration-300 border border-slate-200 shadow-sm">
            <div className="absolute top-4 right-4 text-red-400/30 group-hover:text-[#f80d05]/50 transition-colors">
              <Award className="w-16 h-16 stroke-[1]" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="relative shrink-0 select-none">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-red-100 shadow-md">
                  <img
                    src={okelloPortrait}
                    alt="Okello Odhiambo - Executive Brand Consultant"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 p-1 bg-[#f80d05] rounded-lg text-white border border-white shadow-xs">
                  <User className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-100 text-slate-700 border border-slate-200 font-bold mb-1">
                  Strategic Consulting
                </span>
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

            <div className="space-y-4 text-slate-650 font-sans text-sm tracking-wide leading-relaxed">
              <p>
                Following my software engineering focus, I am also the founder of <strong className="text-[#0C1E36]">House Ventures Consultancy</strong>, established in 2021. For over half a decade, I have formulated high-converting strategic career narratives for executive leaders and ambitious professionals.
              </p>
              <p>
                I act as an elite CV writer, cover letter architect, business proposal strategist, and grant writer. My methodology reconstructs candidate portfolios to satisfy digital ATS algorithms while presenting compelling C-suite storytelling that commands human review.
              </p>
              <p className="border-l-2 border-[#f80d05] pl-4 py-1 italic bg-red-50 text-slate-750 font-medium">
                "We design high-converting career assets that position candidates for board-level callbacks and global growth."
              </p>
              <p>
                Trusted by elite Kenyan entities including <span className="text-[#f80d05] font-bold">KEWOTA, ENA Coach Foundation, Wamae &amp; Allen Advocates, Okullo Foundation</span>, and <span className="text-[#f80d05] font-bold">Chuny Onagi TV</span>.
              </p>
            </div>

            {/* Achievement counters inside slide */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
              {corporateAchievements.map((ach, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                  <span className="block font-serif text-xl font-bold text-[#f80d05]">{ach.metric}</span>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-0.5 font-bold">{ach.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Narrative Roadmap Timeline */}
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <h4 className="font-serif text-lg font-bold text-[#0C1E36] mb-8 text-center sm:text-left">
            The Strategic Journey: Delivering Value Over Time
          </h4>
          <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8 max-w-5xl">
            {/* Timeline Item 1 */}
            <div className="relative">
              <span className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-white border-2 border-[#f80d05] flex items-center justify-center font-mono text-xs font-bold text-[#0C1E36] shadow-sm">
                21
              </span>
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-red-50 text-[#f80d05] border border-red-200 mb-1 font-bold">
                  Foundation Year
                </span>
                <span className="block text-sm font-bold text-[#0C1E36]">Launched House Ventures Consultancy</span>
                <p className="text-xs text-slate-500 mt-1">
                  Began structuring highly competitive, custom-engineered executive portfolios for corporate directors and mid-tier managers striving for international roles.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <span className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center font-mono text-xs font-bold text-[#0C1E36] shadow-sm">
                23
              </span>
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-rose-50 text-rose-700 border border-rose-250 mb-1 font-bold">
                  C-Suite Alignment
                </span>
                <span className="block text-sm font-bold text-[#0C1E36]">Strategic Partnerships (KEWOTA &amp; ENA Coach)</span>
                <p className="text-xs text-slate-500 mt-1">
                  Retained to restructure key grant proposals and modern board-room CV databases, securing regional educational assets and boosting organizational visibility.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <span className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-white border-2 border-[#f80d05] flex items-center justify-center font-mono text-xs font-bold text-[#f80d05] shadow-md">
                25
              </span>
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-250 mb-1 font-bold">
                  Digital Integration
                </span>
                <span className="block text-sm font-bold text-[#0C1E36]">Full-Stack Integration Labs at Zone01 Kisumu</span>
                <p className="text-xs text-slate-500 mt-1">
                  Began full-stack software development tracking, using Golang core backend models to merge technical application logic with elite copywriting.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
