import React from "react";
import { Lock, CheckCircle2, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="space-y-8">
      {/* Executive Compliance Banner */}
      <div className="p-5 rounded-xl bg-slate-900/80 border border-red-500/20 text-slate-200 space-y-2">
        <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Lock className="w-4 h-4 text-[#f80d05]" /> Comprehensive Privacy &amp; Data Protection Mandate
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-medium">
          House Ventures Consultancy (&quot;Okello Odhiambo&quot;) is committed to enforcing high-tier privacy safeguards. This Policy details our data governance practices structured strictly under the <strong>Kenya Data Protection Act, 2019 (DPA)</strong>, enforced by the <strong>Office of the Data Protection Commissioner (ODPC)</strong>, alongside international data privacy standards including the <strong>European Union General Data Protection Regulation (EU GDPR)</strong> and international human rights conventions.
        </p>
      </div>

      {/* Section 1: Constitutional & Human Rights Basis */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">01.</span> Constitutional Right to Privacy &amp; Human Rights Protections
        </h4>
        <p className="text-slate-300">
          Our data processing frameworks respect fundamental individual freedoms grounded in global human rights law and national constitutions:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="font-mono text-xs text-red-400 font-bold block">Constitution of Kenya 2010</span>
            <span className="text-[11px] text-slate-400 block">Article 31 guarantees the fundamental right to personal privacy and protection against unlawful information search.</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="font-mono text-xs text-red-400 font-bold block">UDHR Article 12 (UN)</span>
            <span className="text-[11px] text-slate-400 block">Universal Declaration of Human Rights prohibiting arbitrary interference with personal privacy, home, or correspondence.</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="font-mono text-xs text-red-400 font-bold block">African Charter (Article 9)</span>
            <span className="text-[11px] text-slate-400 block">African Charter on Human and Peoples&apos; Rights guaranteeing information protection and personal dignity.</span>
          </div>
        </div>
      </section>

      {/* Section 2: Data Collected */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">02.</span> Categories of Data We Collect
        </h4>
        <p className="text-slate-300">
          We collect only necessary, minimal personal data required to fulfill specified operational purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            <strong>Direct Contact Identifiers:</strong> Name, professional email address, WhatsApp telephone number (+254...), and postal location submitted via inquiry forms or consultation bookings.
          </li>
          <li>
            <strong>Career &amp; Professional Documents:</strong> Curricula Vitae, executive profile summaries, employment histories, and job descriptions uploaded or pasted into our AI ATS CV Grader tool.
          </li>
          <li>
            <strong>System Technical Metadata:</strong> IP address, browser type, operating system parameters, diagnostic performance metrics (e.g., render timing logs), and device telemetry for cyber threat defense.
          </li>
          <li>
            <strong>Financial Transaction Data:</strong> Payment verification reference codes (e.g., Safaricom M-Pesa transaction IDs or bank wire confirmations) required for auditing. We do not store raw credit card credentials.
          </li>
        </ul>
      </section>

      {/* Section 3: Legal Basis for Processing */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">03.</span> Lawful Basis for Data Processing
        </h4>
        <p className="text-slate-300">
          Under Section 30 of the Kenya Data Protection Act 2019 and Article 6 of the EU GDPR, our processing operations rely on the following lawful bases:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-[#f80d05] shrink-0 mt-0.5" />
            <span><strong>Contractual Necessity:</strong> Processing required to perform software engineering contracts or deliver requested CV revamps.</span>
          </div>
          <div className="flex items-start gap-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-[#f80d05] shrink-0 mt-0.5" />
            <span><strong>Explicit Consent:</strong> Provided when you voluntarily upload a resume to the interactive AI ATS Grader or contact us via WhatsApp/Email.</span>
          </div>
          <div className="flex items-start gap-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-[#f80d05] shrink-0 mt-0.5" />
            <span><strong>Legal Compliance:</strong> Retaining financial receipts and tax documentation as mandated by the Kenya Revenue Authority (KRA).</span>
          </div>
          <div className="flex items-start gap-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-[#f80d05] shrink-0 mt-0.5" />
            <span><strong>Legitimate Interest:</strong> System debugging, fraud prevention, and network security monitoring under the Computer Misuse and Cybercrimes Act 2018.</span>
          </div>
        </div>
      </section>

      {/* Section 4: Data Subject Rights */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">04.</span> Your Statutory Data Subject Rights
        </h4>
        <p className="text-slate-300">
          As a Data Subject under Part IV of the Kenya Data Protection Act 2019 and Chapter III of GDPR, you hold the following enforceable rights:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <strong className="text-red-400 font-mono text-xs block mb-1">Right to Access &amp; Portability</strong>
            <span className="text-[11px] text-slate-300">Request a copy of all personal data held regarding you in a structured, machine-readable format.</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <strong className="text-red-400 font-mono text-xs block mb-1">Right to Erasure (&quot;Right to be Forgotten&quot;)</strong>
            <span className="text-[11px] text-slate-300">Request permanent deletion of your CV documents, contact history, or ATS scan records from our active servers.</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <strong className="text-red-400 font-mono text-xs block mb-1">Right to Rectification</strong>
            <span className="text-[11px] text-slate-300">Request immediate correction of inaccurate, incomplete, or outdated personal information.</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <strong className="text-red-400 font-mono text-xs block mb-1">Right to Object &amp; Restrict</strong>
            <span className="text-[11px] text-slate-300">Object to processing for marketing or request temporary restriction during dispute reviews.</span>
          </div>
        </div>
      </section>

      {/* Section 5: Third-Party Integrations & AI Engine Safety */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">05.</span> Third-Party Sub-processors &amp; AI Data Isolation
        </h4>
        <p className="text-slate-300">
          <strong>Zero Sale of Data:</strong> We NEVER sell, rent, trade, or monetize client personal data or resume records to recruiters, advertisers, or data brokers.
        </p>
        <p className="text-slate-300">
          <strong>AI Model Processing:</strong> Resume analysis processed via Google Gemini API operates under enterprise backend isolation (`/api/*`). Inputs are transmitted over encrypted TLS channels solely for real-time diagnostic evaluation and are not retained for training public AI foundation models.
        </p>
      </section>

      {/* Section 6: Security Safeguards & Retention */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">06.</span> Technical Security Controls &amp; Data Retention
        </h4>
        <p className="text-slate-300">
          We enforce end-to-end encryption (TLS 1.3 in transit, AES-256 at rest), strict principle-of-least-privilege access controls, and regular vulnerability scanning. Inactive candidate resume files submitted for one-off ATS grading are purged after 30 days unless an active consulting engagement is ongoing.
        </p>
      </section>

      {/* Section 7: Data Protection Contact & ODPC Escalation */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">07.</span> Data Protection Officer &amp; Regulatory Recourse
        </h4>
        <p className="text-slate-300">
          For privacy requests, data deletion requests, or statutory inquiries under the Kenya Data Protection Act 2019, contact our designated Data Protection desk:
        </p>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs">
          <div className="flex items-center gap-2 text-white font-bold">
            <Mail className="w-4 h-4 text-[#f80d05]" /> okelloodhiambocvs@gmail.com
          </div>
          <p className="text-slate-400 text-[11px] font-sans">
            House Ventures Consultancy, P.O. Box 1178, Kisumu / Nairobi, Kenya. Direct Phone/WhatsApp: +254 728 606 684
          </p>
        </div>
        <p className="text-slate-400 text-xs">
          If you believe your privacy rights have been infringed, you have the statutory right under Section 56 of the DPA to lodge a formal complaint with the <strong>Office of the Data Protection Commissioner (ODPC) Kenya</strong> (www.odpc.go.ke).
        </p>
      </section>
    </div>
  );
}
