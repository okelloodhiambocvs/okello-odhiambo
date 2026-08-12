import React, { useState } from "react";
import { Send, MapPin, Mail, CheckCircle, AlertTriangle, RefreshCw, PhoneCall, Building2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const servicesList = [
    "CV Writing (ATS Optimized)",
    "Bespoke Cover Letter",
    "Business Proposal",
    "Grant Writing Assistance",
    "Company Profile Prospectus",
    "LinkedIn SEO Optimization",
    "Golang Backend Core API",
    "Modern Web Application Development",
    "Custom Developer Consultations"
  ];

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMsg("Please fill in all requested fields (Name, Email, Message).");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Form transmission failed.");
      }

      setSuccessMsg(data.message || "Message transmission completed successfully!");
      setName("");
      setEmail("");
      setService("");
      setMessage("");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-205">
      {/* Design gradients overlay background */}
      <div className="absolute top-[40%] right-[10%] w-[35rem] h-[35rem] bg-red-50/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[25rem] h-[25rem] bg-rose-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl animate-in fade-in">
          <span className="font-mono text-xs tracking-[0.25em] text-[#f80d05] block uppercase mb-3 font-bold">
            Service Acquisition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1E36] tracking-tight">
            Initiate Corporate Consultations
          </h2>
          <div className="h-1 w-20 bg-[#f80d05] mt-6" />
        </div>

        {/* Contact Split layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          {/* LEFT COLUMN: INTERACTIVE FORM CHANNEL */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <form onSubmit={handleSendMessage} className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0C1E36] mb-4">
                Structured Inquiry Proposal
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* User Name input */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#0C1E36] mb-2 font-bold">
                    Corporate/Candidate Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs font-sans text-slate-700 focus:outline-none focus:border-[#f80d05] focus:ring-0 placeholder:text-slate-400 transition-colors font-medium"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#0C1E36] mb-2 font-bold">
                    Direct Email Endpoint *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs font-sans text-slate-700 focus:outline-none focus:border-[#f80d05] focus:ring-0 placeholder:text-slate-400 transition-colors font-medium"
                  />
                </div>
              </div>

              {/* Service list drop parameters */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#0C1E36] mb-2 font-bold">
                  Target Service Category
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs font-sans text-slate-700 focus:outline-none focus:border-[#f80d05] focus:ring-0 transition-colors font-medium"
                >
                  <option value="" className="text-slate-400">Choose Service Category...</option>
                  {servicesList.map((item, idx) => (
                    <option key={idx} value={item} className="bg-white text-slate-750">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message box */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#0C1E36] mb-2 font-bold">
                  Project Outline / Transition goals (minimum 10 characters) *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your target goals, executive background, timeline limits, or software specs..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs font-sans text-slate-700 focus:outline-none focus:border-[#f80d05] focus:ring-0 placeholder:text-slate-400 transition-colors resize-none font-medium"
                />
              </div>

              {successMsg && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-250 text-emerald-800 text-xs flex items-start gap-2.5 font-sans font-semibold">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5 font-sans font-semibold">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded bg-[#0C1E36] hover:bg-[#f80d05] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-red-400" /> Sending Proposal Packet...
                  </>
                ) : (
                  <>
                    Transmit Inquiry <Send className="w-3.5 h-3.5 text-red-400" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: CORPORATE HEADQUARTERS & DIRECT CHANNELS */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#f80d05] font-bold block mb-2">
                  Direct Response Hub
                </span>
                <h4 className="font-serif font-bold text-[#0C1E36] text-2xl mb-4">
                  Corporate Headquarters
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Direct channels for executive consultations, custom software contracts, ATS profile rewrites, and corporate proposals.
                </p>

                <div className="space-y-4 text-xs text-slate-700 font-sans leading-relaxed font-semibold">
                  <div className="flex gap-3 items-start p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <MapPin className="w-5 h-5 text-[#f80d05] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-[10px] uppercase text-[#f80d05] font-bold">Physical Location</div>
                      <div className="text-slate-800">Varsity Plaza, Business Incubation Centre, Bank Street</div>
                      <div className="text-slate-500 text-[11px]">Kisumu, Kenya</div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Building2 className="w-5 h-5 text-[#f80d05] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-[10px] uppercase text-[#f80d05] font-bold">Postal Address</div>
                      <div className="text-slate-800">P.O. Box 1178-40100 Kisumu Kenya</div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Mail className="w-5 h-5 text-[#f80d05] shrink-0" />
                    <a href="mailto:okelloodhiambocvs@gmail.com" className="hover:text-[#f80d05] transition-colors">
                      okelloodhiambocvs@gmail.com
                    </a>
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <PhoneCall className="w-5 h-5 text-emerald-600 shrink-0 animate-pulse" />
                    <a href="https://wa.me/254728606684" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">
                      +254 728 606 684
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 text-[10px] font-mono text-slate-500 leading-relaxed flex items-center gap-2 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Active communication channel for priority software &amp; brand consultations.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
