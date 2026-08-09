import React, { useState } from "react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";
import { MessageSquare, Coffee, ShieldAlert } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "consultancy" | "tech">("all");

  const filteredServices = SERVICES.filter(srv => {
    if (activeTab === "all") return true;
    return srv.category === activeTab;
  });

  return (
    <section id="services" className="py-24 relative bg-slate-50">
      {/* Decorative radial gradients */}
      <div className="absolute top-[30%] left-[5%] w-[25rem] h-[25rem] bg-red-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[60%] right-[5%] w-[30rem] h-[30rem] bg-rose-105/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-[#f80d05] uppercase inline-block mb-3 font-bold">
            Premium Custom Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1E36] tracking-tight">
            Consultancy &amp; Construction Frameworks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
            Choose from professional strategic document copywriting or modern compiled backend software systems. All deliveries are direct, high-yielding, and client-approved.
          </p>

          {/* Filtering Categories Tabs */}
          <div className="inline-flex p-1.5 rounded-lg bg-white border border-slate-200 mt-10 shadow-sm">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded text-xs uppercase font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#0C1E36] text-white font-bold"
                  : "text-slate-600 hover:text-[#0C1E36] hover:bg-slate-50"
              }`}
            >
              All Services ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveTab("consultancy")}
              className={`px-5 py-2.5 rounded text-xs uppercase font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === "consultancy"
                  ? "bg-[#0C1E36] text-white font-bold"
                  : "text-slate-600 hover:text-[#0C1E36] hover:bg-slate-50"
              }`}
            >
              Strategic Writing
            </button>
            <button
              onClick={() => setActiveTab("tech")}
              className={`px-5 py-2.5 rounded text-xs uppercase font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === "tech"
                  ? "bg-[#0C1E36] text-white font-bold"
                  : "text-slate-600 hover:text-[#0C1E36] hover:bg-slate-50"
              }`}
            >
              Backend &amp; Tech Systems
            </button>
          </div>
        </div>

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
            <p className="text-slate-600 text-xs sm:text-sm">
              Schedule a preliminary 15-minute diagnostic evaluation directly on WhatsApp or submit our quick contact matrix. We'll outline your career positioning path at zero immediate cost.
            </p>
          </div>

          <a
            href={`https://wa.me/254728606684?text=${encodeURIComponent("Hi Okello, I would like to book a 15-minute introductory diagnostics chat.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 rounded text-white font-mono font-bold text-xs uppercase transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 shadow-sm"
          >
            Direct WhatsApp Chat <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
