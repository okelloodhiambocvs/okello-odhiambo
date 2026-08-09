import { PortfolioItem, ServiceItem, TestimonialItem, BlogItem } from "./types";

export const SERVICES: ServiceItem[] = [
  // Tech services
  {
    id: "srv_golang",
    title: "High-Performance Golang Microservices & APIs",
    category: "tech",
    description: "Custom compiled backend architectures built under Google-standard syntax structure for blistering API response speeds.",
    price: "Custom Architecture Quote",
    features: [
      "RESTful & gRPC interfaces with Gin or Fiber",
      "Strict relational data layers via GORM / sqlx",
      "Sub-12ms response speeds & minimal CPU footprints",
      "Enterprise Dockerized deployments"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20am%20interested%20in%20Golang%20Backend%20API%20development."
  },
  {
    id: "srv_web",
    title: "Full-Stack Web Systems & SPA Dashboards",
    category: "tech",
    description: "Hyper-responsive single-page applications and web systems optimized for high interactivity and instantaneous navigation.",
    price: "Project Based Pricing",
    features: [
      "Modern React / TypeScript / Vite engineering",
      "Tailwind CSS responsive design systems",
      "State management & backend integration",
      "Complete mobile-first compliance"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20Modern%20Web%20Application%20or%20dashboard."
  },
  {
    id: "srv_mvp",
    title: "SaaS Launch MVP & System Architecture",
    category: "tech",
    description: "Rapid iteration cycles taking tech products from raw schema models to live cloud production in weeks.",
    price: "Strategic Cohort Quote",
    features: [
      "Clean separation of backend and interface",
      "Scalable relational databases (PostgreSQL/MySQL)",
      "Ready-to-deploy Docker & CI/CD pipelines",
      "Comprehensive code review & security auditing"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20SaaS%20MVP%20built."
  },
  // Writing & Consultancy services
  {
    id: "srv_cv",
    title: "Executive ATS-Optimized CV Writing",
    category: "consultancy",
    description: "Premium cv curation engineered to pass sophisticated digital applicant scanners and secure strategic human review.",
    price: "KES 1,250 - 15,000",
    features: [
      "ATS formatting compliance review",
      "Executive role keyword optimization",
      "Tailored branding narrative",
      "Editable document layouts"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20would%20like%20to%20order%20the%20Executive%20ATS-Optimized%20CV%20Writing%20Service."
  },
  {
    id: "srv_cl",
    title: "Bespoke Cover Letter Writing",
    category: "consultancy",
    description: "Highly persuasive candidate narratives engineered to connect deeply with recruitment partners and decision makers.",
    price: "KES 850 - 2,500",
    features: [
      "Custom company pain-point targeting",
      "Aggressive value metrics highlight",
      "Executive tone and vocabulary",
      "Direct call-to-action hooks"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20would%20like%20to%20order%20a%20Bespoke%20Cover%20Letter."
  },
  {
    id: "srv_prop",
    title: "Corporate Proposals & Grant Writing",
    category: "consultancy",
    description: "High-yield business pitches and grant applications curated specifically for non-profits and commercial operations.",
    price: "Custom Quote",
    features: [
      "Comprehensive research synthesis",
      "Financial overview & layout strategies",
      "Corporate stakeholder alignment",
      "Unlimited revisions up to submission"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20Business%20Proposal%20or%20Grant%20written."
  },
  {
    id: "srv_prof",
    title: "Premium Company Profile Strategist",
    category: "consultancy",
    description: "Transform your company's credentials into a cohesive luxury prospectus that converts prospective investors.",
    price: "KES 6,500+",
    features: [
      "Sophisticated layout structure",
      "Executive brand copywriting",
      "Core value and vision refinement",
      "Client testimonial layouts"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20Company%20Profile%20designed."
  },
  {
    id: "srv_link",
    title: "LinkedIn Profile Optimization",
    category: "consultancy",
    description: "Full search engine optimization (SEO) of your LinkedIn bio to trigger search algorithms for recruiters.",
    price: "KES 2,500 - 8,000",
    features: [
      "Keyword-loaded headline formulas",
      "Storytelling 'About' profile summary",
      "Experience description optimization",
      "Skills taxonomy and social proof checklist"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20would%20like%20LinkedIn%20Profile%20Optimization."
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "port_tech_kasify",
    title: "Kasify — Certified Artisans & Builders Platform",
    category: "Tech Projects",
    client: "Kasify Kenya & Personal Development",
    year: "2026",
    description: "Web application connecting formally certified plumbers, electricians, and builders across Kenya, backed by real-time M-Pesa verification.",
    metrics: "Secure M-Pesa zero-trust authentication & verified contractor matching.",
    techStack: ["TypeScript", "Node.js", "React", "Express", "M-Pesa API", "Tailwind CSS"],
    deliverables: [
      "Real-time M-Pesa STK Push payment & artisan verification",
      "Interactive map search for certified plumbers & electricians",
      "Contractor rating & job dispatch management dashboard"
    ],
    longDescription: "Engineered in TypeScript and Node.js, Kasify bridges the trust gap between Kenyan homeowners/developers and skilled trade professionals. Includes automated credentials check and instant mobile money escrow verification.",
    image: "/src/assets/images/system_nodes_diagram_1780137856057.png"
  },
  {
    id: "port_tech_go_rest",
    title: "High-Throughput Golang Backend API Engine",
    category: "Tech Projects",
    client: "Ahzuriah Construction & Tech Systems",
    year: "2025",
    description: "Constructed high-throughput REST databases, concurrency channels, and web engineering backend microservices.",
    metrics: "Sub-12ms response latency under 10,000 concurrent API requests.",
    techStack: ["Golang", "Fiber", "PostgreSQL", "Docker", "gRPC", "Redis"],
    deliverables: [
      "Strict data sanitization middleware",
      "Redis cached routing paths",
      "Automated migration execution in Docker Compose"
    ],
    longDescription: "A bulletproof modular backend structure built strictly with Golang at Zone01. Implemented secure routing, database connection pools, optimized table queries, and customized token verification engines.",
    image: "/src/assets/images/system_nodes_diagram_1780137856057.png"
  },
  {
    id: "port_tech_ats_engine",
    title: "Full-Stack AI ATS Parser & Scoring Engine",
    category: "Tech Projects",
    client: "House Ventures Tech Division",
    year: "2026",
    description: "Engineered an intelligent document analysis and keyword scoring web platform powered by Gemini AI and TypeScript.",
    metrics: "100% automated parsing with sub-2 second full analysis times.",
    techStack: ["TypeScript", "React", "Node.js", "Gemini AI", "Tailwind CSS"],
    deliverables: [
      "Interactive resume upload & live scoring",
      "Keyword frequency breakdown matrix",
      "Actionable diagnostic optimization advice"
    ],
    longDescription: "A modern full-stack web application combining AI text processing with intuitive UI controls. Analyzes resume content against industry job keywords and outputs detailed formatting recommendations.",
    image: "/src/assets/images/executive_cv_mockup_1780137789479.png"
  },
  {
    id: "port_cv_kewota",
    title: "Board Leadership CV Modernization",
    category: "CVs",
    client: "Wamae and Allen Advocates & KEWOTA",
    year: "2023",
    description: "Curated highly optimized board-level resumes for executive members aligning with pan-African developmental projects.",
    metrics: "42% Increase in callback frequency from global educational agencies.",
    deliverables: [
      "Modular, single-page executive profiles",
      "Action-verb metrics integration",
      "Bespoke cover letters for international grant boards"
    ],
    longDescription: "Re-engineered standard resumes into high-impact, narrative-driven leadership assets for directors. Optimized career metrics focused on regional developmental impact, project delivery totals, and legislative advocacy achievements.",
    image: "/src/assets/images/executive_cv_mockup_1780137789479.png"
  },
  {
    id: "port_prof_drip",
    title: "Brand Premium Prospectus & Profile",
    category: "Company Profiles",
    client: "Drip Lounge",
    year: "2024",
    description: "Designed a sleek corporate identity portfolio used to secure strategic space leasing and investment capital.",
    metrics: "Successfully secured location approval inside premium Nairobi malls.",
    deliverables: [
      "Executive storytelling layout",
      "Visual style assets system",
      "Slogan creation and value positioning"
    ],
    longDescription: "Structured an immersive luxury corporate prospectus. Refined deep customer personas and formatted financial and luxury lifestyle metrics cleanly to construct a high-converting corporate asset.",
    image: "/src/assets/images/brand_prospectus_mockup_1780137812098.png"
  },
  {
    id: "port_prop_enacoach",
    title: "Strategic Corporate Social Grant Proposal",
    category: "Proposals",
    client: "ENA Coach Foundation",
    year: "2023",
    description: "Authored a high-yield regional education grant proposition seeking transport-subsidized tech literacy equipment.",
    metrics: "KES 4.2M Funding successfully approved for development hubs.",
    deliverables: [
      "Grant proposal narrative alignment",
      "Budget structures development",
      "Sponsor value matrix modeling"
    ],
    longDescription: "Synthesized direct socioeconomic arguments focusing on transit accessibility and technology education in western Kenya. Formatted precise allocation grids and outcomes mapping with ironclad structural integrity.",
    image: "/src/assets/images/grant_proposal_mockup_1780137835205.png"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t_1",
    name: "Madam Benta Opande",
    role: "CEO KEWOTA",
    company: "",
    content: "Okello possesses a rare skill. He understands recruitment algorithms as deeply as he understands human psychology. The ATS CV he curated for our executive program delegates completely transformed our application success rate. Invaluable partner.",
    rating: 5
  },
  {
    id: "t_2",
    name: "Julius Allan Obara",
    role: "Managing Partner",
    company: "Wamae and Allen Advocates",
    content: "House Ventures is our prime consultant for high-stakes proposal writing. When we needed a complex regulatory brief translated into a compelling corporate proposal, Okello drafted an asset that won over the panel within weeks.",
    rating: 5
  },
  {
    id: "t_3",
    name: "Robert Owuor",
    role: "CEO",
    company: "",
    content: "As a software developer who has excellent communication chops, Okello built an incredibly clean, optimized dashboard tool for our media tracking. He bridges the gap between high-level English copywriting and modular code architecture perfectly.",
    rating: 5
  }
];

export const BLOGS: BlogItem[] = [
  {
    id: "b_1",
    title: "Cracking the Kenyan ATS Sandbox: 2026 Core Requirements",
    excerpt: "Discover the exact parsing algorithms used by modern recruitment systems in East Africa and how to bypass visual roadblocks.",
    content: `Many job applicants in East Africa assume their qualifications aren't sufficient when, in truth, their resume never reached a human recruiter. Modern recruiters receive upwards of 500 applicants per posting and rely on Applicant Tracking Systems (ATS) to filter out 75% of them before human eyes even scan the header.

### 1. The Death of Multi-Columns and Custom Icons
While colorful templates look pretty, standard ATS scanners read resumes from left to right, top to bottom. If your contact info is placed in a beautiful sidebar next to your work history, the scanner may merge 'Kenya Women Teachers Association' with your telephone number—corrupting the data. Keep columns single, clean, and sequential.

### 2. Standardized Section Headers Are Non-Negotiable
Avoid artsy titles like "Where I've Been" or "My Professional Odyssey." Use strict terms like "Professional Experience," "Education," and "Technical Skills." Scanners search for these precise trigger tags to index your narrative.

### 3. The Power of Metric-Driven Copywriting
An ATS matches keywords, but human recruiters match metrics. Instead of writing "Responsible for writing company profiles," use "Curated 15+ company profiles that drove a 28% increase in strategic investment capital." This shows direct results-oriented impact.`,
    category: "ATS Optimization",
    date: "May 24, 2026",
    readTime: "5 min",
    tags: ["ATS Resume", "Kenyan Careers", "Executive Brand"]
  },
  {
    id: "b_2",
    title: "Why Golang is the Sovereign King of Scalable Backends",
    excerpt: "An architectural review of Go's concurrency models, low overhead structure, and speed metrics for enterprise web applications.",
    content: `As systems demand lower computation overhead and immediate response speeds, Golang (Go) has ascended as the prime language for backend microservices. Developed at Google to answer server scalability bottlenecks, Go leverages compiled efficiency rather than interpreted runtime layers.

### 1. Simple concurrency model with Goroutines
Unlike Node's event loops or Java's heavy operating-system-level threads, a Goroutine utilizes dynamic thread slicing. It consumes only 2KB of initial memory. You can run hundreds of thousands of Goroutines simultaneously without collapsing system memory pools.

### 2. Compile-Time Strength and Minimal Dependencies
Go compiles directly to a single machine-native binary. This removes the need for virtual machines or bloated dynamic interpreter runtimes on the production server. This makes Dockerizing Go backends exceptionally clean, yielding container sizes under 15MB.

\\\`\\\`\\\`go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/api/v1/ping", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprint(w, "{\\"status\\":\\"healthy\\"}")
    })
    http.ListenAndServe(":8080", nil)
}
\\\`\\\`\\\`

This elegant simplicity guarantees bulletproof API endpoints, sub-millisecond route calculations, and outstanding memory efficiency.`,
    category: "Software Engineering",
    date: "April 18, 2026",
    readTime: "6 min",
    tags: ["Golang", "Apis", "System Design"]
  },
  {
    id: "b_3",
    title: "How to Build a Highly Converting Company Profile Prospectus",
    excerpt: "Turn dry, standard factual listings into a premium luxury story that excites and wins global investment partners.",
    content: `Your Company Profile is not a ledger of assets; it is your ultimate strategic business representative. When presented to corporate boards, trust funds, or developmental grant teams, it must look, read, and feel like a custom-branded investment prospectus.

### 1. Lead with the Narrative Voice
Begin with the founder's conviction statement. Why did this venture originate? What regional challenge does it solve? For instance, when drafting profiles for entities like Infomax Media or Okullo Foundation, we frame their vision within macroeconomic progress—giving potential investors immediate context.

### 2. Separate Credentials From Operations
Group your capabilities into hyper-specific service pillars. Do not combine product sales with strategic consultation under a generic heading. Visually isolate them to demonstrate depth and strategic execution capacity.

### 3. Display Trust Elements Aggressively
Your profile must show social proof on every second page. Place logo rosters (e.g. KEWOTA, Wamae & Allen, ENA Coach), qualitative testimonials, and clear historical project counts right next to core services of focus.`,
    category: "Business Strategy",
    date: "Jan 12, 2026",
    readTime: "4 min",
    tags: ["Company Profile", "Luxury Design", "Copywriting"]
  }
];
