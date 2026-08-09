import React from "react";
import { Building2 } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="space-y-8">
      {/* Executive Summary Card */}
      <div className="p-5 rounded-xl bg-slate-900/80 border border-red-500/20 text-slate-200 space-y-2">
        <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-4 h-4 text-[#f80d05]" /> Service Provider Identity &amp; Statutory Authority
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-medium">
          These Terms and Conditions constitute a legally binding agreement between you (the &quot;Client&quot;, &quot;User&quot;, or &quot;Subscriber&quot;) and <strong>House Ventures Consultancy</strong> (&quot;Developer Zone01&quot;, &quot;Okello Odhiambo&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;), a consultancy and software development enterprise registered and operated in accordance with the laws of the <strong>Republic of Kenya</strong> (Nairobi &amp; Kisumu). By engaging our software engineering services, requesting executive CV rewrites, using our AI ATS CV Grader, or submitting inquiries, you explicitly assent to these Terms.
        </p>
      </div>

      {/* Section 1: Scope of Engagement */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">01.</span> Scope of Consultancy &amp; Engineering Services
        </h4>
        <p className="text-slate-300">
          House Ventures Consultancy offers professional services structured into two primary operational branches:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            <strong>Software Engineering &amp; System Architecture:</strong> Custom web applications, enterprise software solutions, API integrations, cloud infrastructure deployment, database design, and algorithmic development.
          </li>
          <li>
            <strong>Executive Career Branding &amp; C-Suite Documentation:</strong> C-suite resume/CV restructuring, board profile drafting, cover letter engineering, LinkedIn personal brand optimization, and automated ATS (Applicant Tracking System) diagnostic analysis.
          </li>
        </ul>
      </section>

      {/* Section 2: Governing Law & Jurisdiction */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">02.</span> Statutory Governing Law &amp; Legal Framework
        </h4>
        <p className="text-slate-300">
          This Agreement and all non-contractual obligations arising out of or in connection with it shall be governed by and construed in accordance with the statutory laws of the <strong>Republic of Kenya</strong>, including but not limited to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="font-mono text-xs text-red-400 font-bold block">Law of Contract Act (Cap 23)</span>
            <span className="text-[11px] text-slate-400 block">Governs the enforceability of digital and written agreements entered into in Kenya.</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="font-mono text-xs text-red-400 font-bold block">Consumer Protection Act, 2012</span>
            <span className="text-[11px] text-slate-400 block">Ensures fair trade, quality standards, transparent pricing, and consumer rights protection.</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="font-mono text-xs text-red-400 font-bold block">Computer Misuse &amp; Cybercrimes Act, 2018</span>
            <span className="text-[11px] text-slate-400 block">Regulates secure electronic transactions, authorization, and digital system safety.</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="font-mono text-xs text-red-400 font-bold block">Copyright Act (Cap 130)</span>
            <span className="text-[11px] text-slate-400 block">Defines intellectual property protections, software code ownership, and fair use guidelines.</span>
          </div>
        </div>
      </section>

      {/* Section 3: Intellectual Property & Code Ownership */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">03.</span> Intellectual Property &amp; Proprietary Rights
        </h4>
        <p className="text-slate-300">
          <strong>Custom Deliverables:</strong> Upon receipt of 100% full cleared payment for bespoke software development or executive CV assets, full intellectual property rights, copyrights, and source code ownership for custom client work products transfer to the Client.
        </p>
        <p className="text-slate-300">
          <strong>Pre-existing Code &amp; Frameworks:</strong> House Ventures Consultancy retains sole intellectual property rights over pre-existing proprietary modules, algorithms, ATS parsing heuristics, reusable software frameworks, and brand trade secrets (&quot;House Ventures Assets&quot;). Clients are granted a non-exclusive, perpetual, royalty-free license to utilize embedded frameworks solely as built into their final deliverable.
        </p>
      </section>

      {/* Section 4: Payment Terms & Remittance */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">04.</span> Payment Terms, Mobilization Deposits &amp; Refunds
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            <strong>Mobilization Deposit:</strong> Custom software projects require a standard 50% upfront mobilization deposit prior to sprint kick-off. Career consultancy services (CV rewrites, executive branding) require full or milestone pre-payment.
          </li>
          <li>
            <strong>Payment Channels:</strong> All financial transactions are processed via officially authorized channels including Safaricom M-Pesa Business Till/Paybill, Direct KCB/Equity Bank Transfers, or verified International Wire Transfer.
          </li>
          <li>
            <strong>Revision Windows:</strong> Executive CV rewrites include up to two (2) complimentary rounds of revisions within 14 business days of initial draft delivery. Software projects follow agreed milestone acceptance sign-offs.
          </li>
          <li>
            <strong>Refund Policy:</strong> Due to the custom, intellectual-labor nature of consultancy and software engineering, deposits are non-refundable once work has commenced or source code has been committed.
          </li>
        </ul>
      </section>

      {/* Section 5: Limitation of Liability */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">05.</span> Warranties &amp; Limitation of Liability
        </h4>
        <p className="text-slate-300">
          <strong>No Guarantee of Third-Party Hiring:</strong> While our AI ATS CV Grader and C-suite documentation services strictly optimize applications to pass automated algorithms and executive standards, House Ventures Consultancy does not guarantee job offers or interview callbacks, which remain at the sole discretion of third-party hiring committees.
        </p>
        <p className="text-slate-300">
          <strong>Cap on Monetary Liability:</strong> To the maximum extent permitted by Kenyan law, House Ventures Consultancy&apos;s total aggregate liability for any claims arising from services shall not exceed the total fees paid by the Client to Us for the specific engagement giving rise to the claim.
        </p>
      </section>

      {/* Section 6: Dispute Resolution & Arbitration */}
      <section className="space-y-3">
        <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-red-400 font-mono text-xs">06.</span> Dispute Resolution &amp; NCIA Arbitration
        </h4>
        <p className="text-slate-300">
          In the event of any controversy, claim, or dispute arising out of or relating to this Agreement, the parties shall first attempt in good faith to resolve the matter through amicable bilateral negotiation within thirty (30) days.
        </p>
        <p className="text-slate-300">
          If unresolved, the dispute shall be referred to and finally resolved by arbitration administered by the <strong>Nairobi Centre for International Arbitration (NCIA)</strong> in accordance with the NCIA Arbitration Rules. The seat of arbitration shall be Nairobi, Kenya, and the proceedings shall be conducted in the English language.
        </p>
      </section>
    </div>
  );
}
