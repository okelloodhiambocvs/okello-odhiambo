import React, { useState } from "react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";
import { MessageSquare, Coffee, ShieldAlert } from "lucide-react";
import ServiceCard from "./ServiceCard";
import PageHero from "./PageHero";
import { ServicesHeroVisual } from "./HeroEmblems";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "tech" | "consultancy" | "design">("all");

  const filteredServices = SERVICES.filter(srv => {
    if (activeTab === "all") return true;
    return srv.category === activeTab;
  });

  return (
    <div id="services" className="w-full bg-slate-50">
      <PageHero
        kicker="Software Engineering &"
        titlePrefix="Our"
        titleHighlight="Services"
        description="From custom website development and grant proposals to executive PowerPoint pitch decks and logo identity packages. All deliveries are direct, high-yielding, and client-approved."
        visual={<ServicesHeroVisual />}
        scrollTargetId="services-catalog"
        scrollLabel="Scroll down to Our Services offerings"
      >
        <div className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-lg text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "all"
                ? "bg-[#f80d05] text-white font-bold shadow-sm"
                : "text-slate-200 hover:text-white hover:bg-white/10"
            }`}
          >
            All Offerings ({SERVICES.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tech")}
            className={`px-4 py-2 rounded-lg text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "tech"
                ? "bg-[#f80d05] text-white font-bold shadow-sm"
                : "text-slate-200 hover:text-white hover:bg-white/10"
            }`}
          >
            Web &amp; Software Dev
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("consultancy")}
            className={`px-4 py-2 rounded-lg text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "consultancy"
                ? "bg-[#f80d05] text-white font-bold shadow-sm"
                : "text-slate-200 hover:text-white hover:bg-white/10"
            }`}
          >
            Proposals &amp; Writing
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("design")}
            className={`px-4 py-2 rounded-lg text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "design"
                ? "bg-[#f80d05] text-white font-bold shadow-sm"
                : "text-slate-200 hover:text-white hover:bg-white/10"
            }`}
          >
            Graphics &amp; PowerPoint
          </button>
        </div>
      </PageHero>

      <section id="services-catalog" className="py-16 sm:py-20 relative bg-slate-50">
        {/* Decorative radial gradients */}
        <div className="absolute top-[30%] left-[5%] w-[25rem] h-[25rem] bg-[#f80d05]/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[60%] right-[5%] w-[30rem] h-[30rem] bg-[#f80d05]/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Global Consultation Alert */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-slate-200 shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 p-4 opacity-[0.04]">
            <Coffee className="w-48 h-48 stroke-[1] text-[#0C1E36]" />
          </div>
          
          <div className="max-w-2xl space-y-2 text-center md:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#0C1E36]">
              Unsure which corporate framework matches your transition threshold?
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Schedule a preliminary 15-minute diagnostic evaluation directly on WhatsApp or submit our quick contact matrix. We'll outline your career positioning path at zero immediate cost.
            </p>
          </div>

          <a
            href={`https://wa.me/254728606684?text=${encodeURIComponent("Hi Okello, I would like to book a 15-minute introductory diagnostics chat.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#f80d05] hover:bg-[#d40b04] rounded text-white font-mono font-bold text-xs uppercase transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 shadow-sm"
          >
            Direct WhatsApp Chat <MessageSquare className="w-4 h-4" />
          </a>
        </div>
        </div>
      </section>
    </div>
  );
}
