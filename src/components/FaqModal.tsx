import React, { useState } from "react";
import { X, HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FaqItem {
  id: string;
  category: "General" | "ATS & CV Services" | "Software Engineering" | "Pricing & Payments" | "Data & Privacy";
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq_1",
    category: "General",
    question: "Who is Okello Odhiambo and what is House Ventures Consultancy / Developer Zone01?",
    answer: "Okello Odhiambo Brayan is a Full-Stack Software Developer (specializing in Golang backend microservices, React, and TypeScript) and an Executive Career Branding Consultant based in Nairobi and Kisumu, Kenya. He is the Founder of House Ventures Consultancy (established 2021) and a software engineer at Developer Zone01 Kisumu. Over 1,000+ executives and organizations across East Africa have utilized his career branding and software engineering services."
  },
  {
    id: "faq_2",
    category: "ATS & CV Services",
    question: "How does the AI ATS CV Grader work and is it free to test?",
    answer: "Our interactive AI ATS Scanner allows you to upload your resume (PDF or plain text) or paste it alongside a target job description. The backend engine (powered by Google Gemini AI API) parses key hard skills, quantifies achievement metrics, detects missing industry keywords, scores your document from 0 to 100 for ATS filter compliance, and drafts a custom executive summary proposal. The live diagnostic is 100% free to test."
  },
  {
    id: "faq_3",
    category: "Software Engineering",
    question: "What technology stack do you use for full-stack software development?",
    answer: "We specialize in building resilient, high-throughput web systems and APIs. Our primary backend stack centers on Go (Golang), gRPC, Node.js, Express, PostgreSQL, MySQL, Redis, and Docker containerization. On the frontend, we build fluid React applications using TypeScript and Tailwind CSS. We also integrate Safaricom M-Pesa APIs for automated mobile money transactions."
  },
  {
    id: "faq_4",
    category: "Pricing & Payments",
    question: "What is the turnaround time and cost for an Executive CV Rewrite?",
    answer: "Standard executive CV and cover letter rewrites take 24 to 48 hours. Express 12-hour turnaround is available upon request for urgent board applications or job deadlines. Rates depend on career level (Mid-Level, C-Suite, Board Member) and are transparently communicated before work begins. We include two rounds of complimentary revisions within 14 days."
  },
  {
    id: "faq_5",
    category: "Pricing & Payments",
    question: "Which payment methods are accepted in Kenya and internationally?",
    answer: "We accept Safaricom M-Pesa (Business Paybill/Till), direct bank wire transfers (KCB / Equity Bank), and international card/wire transfers. All transactions are backed by official tax receipts and legal service terms under Kenyan law."
  },
  {
    id: "faq_6",
    category: "Software Engineering",
    question: "What are Kasify and Ujuzi360?",
    answer: "Kasify is an innovative Kenyan service marketplace web app connecting verified artisans, plumbers, and builders with clients featuring automated M-Pesa escrow verification. Ujuzi360 is a comprehensive learning management platform developed at Zone01 Kisumu, led by Okello Odhiambo as Project Manager with an 8-member engineering team."
  },
  {
    id: "faq_7",
    category: "Data & Privacy",
    question: "Is my resume data and uploaded document safe and confidential?",
    answer: "Yes, 100%. We operate strictly in accordance with the Kenya Data Protection Act 2019 (DPA) enforced by the ODPC, as well as GDPR principles. Uploaded resumes and contact submissions are never sold, rented, or shared with third-party recruiters or data brokers."
  },
  {
    id: "faq_8",
    category: "General",
    question: "How can I download Okello Odhiambo's official executive CV?",
    answer: "You can download the verified, ATS-compliant PDF curriculum vitae of Okello Odhiambo directly from any page on this site by clicking the 'Download Official CV (PDF)' button located in the hero banner, navigation bar, ATS tool, or footer."
  },
  {
    id: "faq_9",
    category: "ATS & CV Services",
    question: "What makes House Ventures ATS rewrites better than online templates?",
    answer: "Generic online generators use multi-column tables, graphics, and unformatted text that choke actual ATS systems like Workday, Taleo, or Greenhouse. House Ventures combines expert human strategic copywriting with single-column ATS parser layout rules, ensuring your CV passes both automated machine filters and executive hiring committees."
  },
  {
    id: "faq_10",
    category: "General",
    question: "How do I start a project or schedule a consultation?",
    answer: "You can send an immediate direct message on WhatsApp (+254 728 606 684), submit the online contact matrix, or email okelloodhiambocvs@gmail.com. We respond to all inquiries within 1 to 2 hours."
  }
];

export default function FaqModal({ isOpen, onClose }: FaqModalProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ faq_1: true, faq_2: true });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = ["All", "General", "ATS & CV Services", "Software Engineering", "Pricing & Payments", "Data & Privacy"];

  const filteredFaqs = FAQ_DATA.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-[#0C1E36] border border-red-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col relative text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#f80d05] via-red-500 to-[#0C1E36]" />

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4 bg-[#08182D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-[#f80d05]" />
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-400 font-bold block">
                House Ventures Knowledge Base
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                Frequently Asked Questions (FAQs)
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-[#f80d05] text-slate-300 hover:text-white transition-all border border-slate-700 hover:border-red-500 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 sm:p-6 bg-[#091C34] border-b border-slate-800/80 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. Golang, ATS CV, M-Pesa, turnaround times, privacy)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-red-500 focus:outline-none text-xs text-white placeholder:text-slate-400 font-sans"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer font-semibold ${
                  selectedCategory === cat
                    ? "bg-[#f80d05] text-white"
                    : "bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Questions List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 max-h-[55vh] bg-[#07172A] scrollbar">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-400 font-mono text-xs">
              No matching questions found for &quot;{searchQuery}&quot;. Feel free to send us a direct message!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div 
                  key={faq.id}
                  className="rounded-xl border border-slate-800/90 bg-slate-900/60 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 font-bold shrink-0 mt-0.5">
                        {faq.category}
                      </span>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-slate-100 leading-snug">
                        {faq.question}
                      </h4>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-red-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-[#08182D]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#08182D] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-red-400 shrink-0" />
            <span>Have a custom question not listed here?</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/254728606684?text=${encodeURIComponent("Hi Okello, I have a question regarding your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" /> Ask on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
