import { PortfolioItem, ServiceItem, TestimonialItem, BlogItem } from "./types";

export const SERVICES: ServiceItem[] = [
  // 1. Web & Technology Systems
  {
    id: "srv_web_dev",
    title: "Website Development & Web Portals",
    category: "tech",
    description: "Custom responsive websites, e-commerce portals, and interactive web applications engineered for speed, SEO, and conversions.",
    price: "Project Based Quote",
    features: [
      "Modern React / TypeScript / Vite responsive UI",
      "Fast page loading speeds & SEO optimization",
      "Custom domain & SSL certificate integration",
      "Mobile-first layouts & content management"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20am%20interested%20in%20Website%20Development."
  },
  {
    id: "srv_personal_portfolio",
    title: "Personal Portfolio Development",
    category: "tech",
    description: "Bespoke digital portfolio websites crafted for executives, consultants, software engineers, and creators to showcase skills and convert high-value clients.",
    price: "KES 5,000 - 25,000",
    features: [
      "Tailored personal branding & layout design",
      "Interactive case studies & project showcases",
      "Direct CV download & WhatsApp inquiry booking",
      "Fast cloud hosting deployment"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20Personal%20Portfolio%20Website%20developed."
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
    id: "srv_golang",
    title: "High-Performance Golang Microservices & APIs",
    category: "tech",
    description: "Custom compiled backend microservices and RESTful API endpoints built under Google-standard syntax structure for blistering API response speeds.",
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

  // 2. Proposals & Strategic Writing
  {
    id: "srv_business_proposal",
    title: "Business Proposal Writing",
    category: "consultancy",
    description: "Persuasive, data-backed commercial business proposals engineered to win high-stakes client bids, partnership tenders, and commercial contracts.",
    price: "Custom Quote",
    features: [
      "Executive summary & problem-solution alignment",
      "Financial projections & commercial pricing matrices",
      "Scope of work & SLA contract frameworks",
      "Print-ready PDF & editable formats"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20Business%20Proposal%20written."
  },
  {
    id: "srv_grant_proposal",
    title: "Grant Proposal Writing",
    category: "consultancy",
    description: "Comprehensive, compliant grant applications and donor proposals curated specifically for non-profits, NGOs, research teams, and social enterprises.",
    price: "Custom Quote",
    features: [
      "Donor alignment & logical framework (Logframe) modeling",
      "Budget breakdown & long-term sustainability plans",
      "Socioeconomic impact narrative framing",
      "Compliance review against donor guidelines"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20Grant%20Proposal%20written."
  },
  {
    id: "srv_project_proposal",
    title: "Project Proposal Writing",
    category: "consultancy",
    description: "Structured technical and academic project proposals detailing project scope, work breakdown structure (WBS), execution timelines, and resource allocation.",
    price: "Custom Quote",
    features: [
      "Methodology & execution roadmap (Gantt charts)",
      "Risk assessment & mitigation matrices",
      "Milestone mapping & resource budgeting",
      "Institutional & stakeholder compliance review"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20Project%20Proposal%20written."
  },
  {
    id: "srv_prop",
    title: "Corporate Proposals & Tender Bids",
    category: "consultancy",
    description: "High-yield business pitches, joint-venture proposals, and formal tender bids curated for commercial operations and institutional contractors.",
    price: "Custom Quote",
    features: [
      "Comprehensive research synthesis & RFP compliance",
      "Financial overview & commercial bid structuring",
      "Corporate stakeholder alignment & executive summary",
      "Unlimited revisions up to formal submission"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20Corporate%20Proposal%20or%20Tender%20Bid%20written."
  },

  // 3. Career & Executive Consultancy
  {
    id: "srv_cv",
    title: "Executive ATS-Optimized CV Writing",
    category: "consultancy",
    description: "Premium CV curation engineered to pass digital applicant tracking systems (ATS) and secure strategic interviews with decision makers.",
    price: "KES 1,250 - 15,000",
    features: [
      "ATS formatting compliance & keyword density review",
      "Executive role metrics & leadership impact highlights",
      "Tailored executive branding narrative",
      "Editable Word & print-ready PDF formats"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20would%20like%20to%20order%20the%20Executive%20ATS-Optimized%20CV%20Writing%20Service."
  },
  {
    id: "srv_cl",
    title: "Bespoke Cover Letter Writing",
    category: "consultancy",
    description: "Highly persuasive candidate narratives engineered to connect deeply with recruitment partners and executive decision makers.",
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
    id: "srv_prof",
    title: "Premium Company Profile Strategist",
    category: "consultancy",
    description: "Transform your company's credentials into a cohesive luxury prospectus deck that converts prospective investors and enterprise partners.",
    price: "KES 6,500+",
    features: [
      "Sophisticated layout structure & custom branding",
      "Executive brand copywriting & value proposition",
      "Core value, vision, and mission refinement",
      "High-res print-ready PDF & digital formats"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20Company%20Profile%20designed."
  },
  {
    id: "srv_link",
    title: "LinkedIn Profile Optimization",
    category: "consultancy",
    description: "Full search engine optimization (SEO) of your LinkedIn profile to trigger recruiter search algorithms and position you as an industry leader.",
    price: "KES 2,500 - 8,000",
    features: [
      "Keyword-loaded headline formulas",
      "Storytelling 'About' profile summary",
      "Experience description optimization",
      "Skills taxonomy and social proof checklist"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20would%20like%20LinkedIn%20Profile%20Optimization."
  },

  // 4. Creative Design & Presentations
  {
    id: "srv_powerpoint",
    title: "PowerPoint Presentation Development",
    category: "design",
    description: "Executive pitch decks, board meeting presentations, and corporate slide decks designed to captivate audiences and pitch with confidence.",
    price: "KES 3,500+",
    features: [
      "Custom visual slides, diagrams, & infographics",
      "Financial data visualization & chart formatting",
      "Corporate brand theme & typography alignment",
      "Editable PPTX & master slide templates"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20a%20PowerPoint%20Pitch%20Deck%20developed."
  },
  {
    id: "srv_logo_design",
    title: "Logo Design & Brand Identity",
    category: "design",
    description: "Memorable, modern vector logo design and visual brand identity packages that establish instant corporate credibility.",
    price: "KES 2,500 - 10,000",
    features: [
      "Multiple vector logo concepts & revisions",
      "Full brand style guide (color palettes & typography)",
      "High-res PNG, SVG, PDF & print source files",
      "Social media avatar & favicon kit"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20Logo%20Design%20and%20Brand%20Identity."
  },
  {
    id: "srv_posters_design",
    title: "Posters & Graphic Design",
    category: "design",
    description: "High-impact event posters, promotional flyers, marketing banners, and social media graphics tailored for digital and print campaigns.",
    price: "KES 1,500 - 5,000",
    features: [
      "High-resolution print & web graphics",
      "Eye-catching typography & visual compositions",
      "Optimized for LinkedIn, WhatsApp & Instagram",
      "Fast 24-48 hour turnaround delivery"
    ],
    ctaUrl: "https://wa.me/254728606684?text=Hi%20Okello,%20I%20need%20Posters%20and%20Graphic%20Design."
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "port_tech_kazify",
    title: "Kazify — Kenya Skilled Trades Marketplace",
    category: "Tech Projects",
    client: "Kazify Kenya (Active Project)",
    year: "2026",
    description: "A Kenya-first skilled trades marketplace connecting customers with verified fundis for on-demand services, real-time bookings, secure payments, and trusted job matching.",
    metrics: "Presently In Active Development — Real-time fundi bookings, M-Pesa escrow payments & verified artisan matching.",
    techStack: ["TypeScript", "React", "Node.js", "Express", "M-Pesa API", "Tailwind CSS"],
    deliverables: [
      "Verified fundi profile & service dispatch",
      "Real-time booking & job status tracking",
      "Integrated M-Pesa mobile money escrow"
    ],
    longDescription: "Presently in active engineering, Kazify is a Kenya-first marketplace platform connecting customers with verified trade professionals (plumbers, electricians, carpenters, builders) for on-demand services. Features background verification, real-time job bookings, secure M-Pesa escrow payments, and trusted artisan matching.",
    image: "/src/assets/images/kasify_app_mockup_1786530066973.jpg"
  },
  {
    id: "port_tech_shambaloop",
    title: "ShambaLoop — Agricultural Asset-Sharing Marketplace",
    category: "Tech Projects",
    client: "ShambaLoop Kenya (Active Project)",
    year: "2026",
    description: "Kenya's trusted agricultural asset-sharing marketplace matching verified land lease options, livestock partnerships, and crop opportunities.",
    metrics: "Presently In Active Development — Verified land lease matching, agricultural asset sharing & investor escrow.",
    techStack: ["TypeScript", "React", "Node.js", "Express", "Tailwind CSS", "M-Pesa API"],
    deliverables: [
      "Verified agricultural land lease & asset directory",
      "Livestock partnership & crop opportunity matching",
      "Secure escrow transaction & contract verification"
    ],
    longDescription: "Presently in active engineering, ShambaLoop is Kenya's trusted ecosystem trust marketplace for agricultural assets. The platform connects landowners, farmers, and ag-investors by matching verified arable land lease listings, livestock co-investment partnerships, and seasonal crop production opportunities with transparent digital contracts.",
    image: "/src/assets/images/shambaloop_agri_marketplace_1786537578591.jpg"
  },
  {
    id: "port_tech_ahzuriah",
    title: "Ahzuriah Constructions — Static Marketing Website",
    category: "Tech Projects",
    client: "Ahzuriah Constructions",
    year: "2025",
    description: "Official static marketing website for Ahzuriah Constructions, designed to showcase heavy civil engineering projects, equipment fleets, and corporate tendering profile.",
    metrics: "Fast-loading static marketing site & commercial civil engineering showcase.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    deliverables: [
      "Civil engineering & equipment fleet showcase",
      "Contact & tender bid request form",
      "Mobile-optimized responsive marketing layout"
    ],
    longDescription: "Designed and developed a sleek, fast-loading static marketing website for Ahzuriah Constructions. Showcases civil infrastructure projects, heavy machinery capabilities, and corporate contact options for commercial tender bids.",
    image: "/src/assets/images/ahzuriah_construction_website_1786537590301.jpg"
  },
  {
    id: "port_tech_hueri",
    title: "HUERI Limited — Static Marketing Website",
    category: "Tech Projects",
    client: "HUERI Limited (Kisumu, Kenya)",
    year: "2025",
    description: "Official static marketing website for Hope Urban Environmental and Research Investment Limited (HUERI), an environmental and sustainability consultancy in Kisumu.",
    metrics: "Clean corporate marketing site & environmental research portfolio showcase.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    deliverables: [
      "Environmental impact assessment (EIA) service overview",
      "Research publication & consultancy showcase",
      "Direct consultation inquiry form"
    ],
    longDescription: "Built the official static marketing website for HUERI (Hope Urban Environmental and Research Investment Limited) based in Kisumu, Kenya. Highlights core consultancy offerings in environmental impact assessments (EIA), social sustainability studies, and urban research.",
    image: "/src/assets/images/hueri_environmental_website_1786537603372.jpg"
  },
  {
    id: "port_tech_amor",
    title: "Amor Valuers Limited — Static Marketing Website",
    category: "Tech Projects",
    client: "Amor Valuers Limited",
    year: "2025",
    description: "Corporate static marketing website for a professionally registered valuation and real estate consultancy firm providing independent property and asset valuation services.",
    metrics: "Trustworthy marketing website & asset valuation service showcase.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    deliverables: [
      "Property valuation service breakdown",
      "Registered appraiser credentials showcase",
      "Client advisory contact & inquiry interface"
    ],
    longDescription: "Engineered a clean, trustworthy static marketing website for Amor Valuers Limited. Highlights registered appraiser credentials, valuation methodologies across commercial, residential, and agricultural properties, and client consultation inquiry channels.",
    image: "/src/assets/images/amor_valuers_website_1786537616090.jpg"
  },
  {
    id: "port_tech_niara",
    title: "Niara Constructions — Static Marketing Website",
    category: "Tech Projects",
    client: "Niara Constructions",
    year: "2025",
    description: "Static marketing website for Niara Constructions, a dynamic general construction company specializing in modern, high-quality, sustainable residential and commercial projects.",
    metrics: "Modern static marketing website & sustainable construction portfolio.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    deliverables: [
      "Residential & commercial project showcase",
      "Sustainable building practices breakdown",
      "Client quote request & contact section"
    ],
    longDescription: "Developed an engaging static marketing website for Niara Constructions highlighting their modern, eco-friendly, and cost-effective residential and commercial construction capabilities across Kenya.",
    image: "/src/assets/images/niara_construction_website_1786537629236.jpg"
  },
  {
    id: "port_tech_shecycle",
    title: "SheCycle Innovation Enterprise — Static Marketing Website",
    category: "Tech Projects",
    client: "SheCycle Innovation Enterprise (Kisumu, Kenya)",
    year: "2025",
    description: "Static marketing website for a women-led artisan enterprise in Kisumu, transforming reclaimed glass, plastics, and textiles into handcrafted products celebrating African heritage.",
    metrics: "Eco-sustainability marketing site & artisan product showcase.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    deliverables: [
      "Eco-artisan product showcase catalog",
      "Brand story & African cultural heritage narrative",
      "Direct WhatsApp order & inquiry integration"
    ],
    longDescription: "Designed a vibrant static marketing website for SheCycle Innovation Enterprise in Kisumu, Kenya. Celebrates African creativity and environmental sustainability by presenting upcycled artisan products and direct order channels.",
    image: "/src/assets/images/shecycle_artisan_website_1786537643453.jpg"
  },
  {
    id: "port_cv_wamae",
    title: "Executive Legal Partner CV Curation",
    category: "CVs",
    client: "Wamae and Allen Advocates",
    year: "2023 - 2026",
    description: "Curation of high-impact ATS-optimized legal CVs and executive partner profiles for senior advocates, managing partners, and legal associates.",
    metrics: "100% ATS pass rate & executive shortlisting for regulatory & judicial appointments.",
    deliverables: [
      "Executive legal resume structuring & litigation metrics",
      "Partnership achievements & regulatory advocacy highlights",
      "Tailored executive cover letter & judicial application briefs"
    ],
    longDescription: "Re-engineered executive resumes for managing partners and legal associates at Wamae and Allen Advocates. Optimized career metrics focused on commercial litigation victories, regulatory compliance leadership, and corporate governance.",
    image: "/src/assets/images/wamae_legal_executive_cv_1786537660974.jpg"
  },
  {
    id: "port_cv_kewota",
    title: "Board Leadership & Educator CV Transformation",
    category: "CVs",
    client: "KEWOTA (Kenya Women Teachers Association)",
    year: "2023 - 2026",
    description: "Curated highly optimized board-level resumes and leadership CVs for executive delegates and educator members aligning with pan-African developmental projects.",
    metrics: "42% Increase in callback frequency from global educational agencies & donor boards.",
    deliverables: [
      "Modular, single-page executive profiles & leadership summaries",
      "Action-verb metrics & policy advocacy integration",
      "Bespoke cover letters for international grant & education boards"
    ],
    longDescription: "Re-engineered standard resumes into high-impact, narrative-driven leadership assets for KEWOTA executives and teachers. Optimized career metrics focused on regional educational impact, project delivery totals, and legislative advocacy achievements.",
    image: "/src/assets/images/kewota_executive_cv_1786530107984.jpg"
  },
  {
    id: "port_cv_1000",
    title: "1,000+ Individual Client ATS CV Transformations",
    category: "CVs",
    client: "1,000+ Individual Executives, Engineers & Professionals",
    year: "2021 - 2026",
    description: "Transformed over 1,000+ individual resumes and CVs for clients across Kenya, East Africa, Middle East, Europe, and North America.",
    metrics: "Over 1,000+ individual clients served with 85%+ interview callback rate within 30 days.",
    deliverables: [
      "ATS keyword frequency optimization & formatting compliance",
      "Quantifiable achievement metrics & leadership framing",
      "Editable Word & PDF formats with LinkedIn bio alignment"
    ],
    longDescription: "Delivered high-yielding resume transformations for over 1,000 individual professionals spanning software engineering, project management, healthcare, finance, and corporate management. Each CV is engineered to pass digital ATS algorithms and capture human recruiter attention.",
    image: "/src/assets/images/ats_resume_transformations_1786537673063.jpg"
  },
  {
    id: "port_prof_kewota",
    title: "KEWOTA Corporate Prospectus & Profile",
    category: "Company Profiles",
    client: "KEWOTA (Kenya Women Teachers Association)",
    year: "2024 - 2026",
    description: "Authored and designed the comprehensive corporate profile and strategic prospectus for KEWOTA, highlighting teacher advocacy, economic empowerment, and national programs.",
    metrics: "Official institutional profile utilized for donor partnerships & government agency proposals.",
    deliverables: [
      "Executive storytelling & institutional impact narrative",
      "Brand identity alignment & regional program roadmap",
      "High-resolution print & digital prospectus layouts"
    ],
    longDescription: "Structured an institutional corporate profile and strategic prospectus for KEWOTA (Kenya Women Teachers Association). Clearly outlines organization mission, member welfare initiatives, technology literacy drives, and strategic partnership frameworks.",
    image: "/src/assets/images/kewota_company_profile_1786537685205.jpg"
  },
  {
    id: "port_prof_hueri",
    title: "HUERI Limited Environmental Consultancy Profile",
    category: "Company Profiles",
    client: "HUERI Limited (Kisumu, Kenya)",
    year: "2025",
    description: "Crafted the official corporate profile and consulting prospectus for Hope Urban Environmental and Research Investment Limited (HUERI).",
    metrics: "Elevated commercial bidding credentials for environmental impact assessments (EIA) & social research.",
    deliverables: [
      "EIA service capability statement & research showcase",
      "Corporate mission, vision, and sustainability values",
      "Professional layout formatted for donor & tender submissions"
    ],
    longDescription: "Designed the corporate profile for HUERI Limited, based in Kisumu, Kenya. Highlights core capabilities in environmental audits, social impact studies, urban planning research, and sustainable development consultancies.",
    image: "/src/assets/images/hueri_company_profile_1786537697612.jpg"
  },
  {
    id: "port_prof_amor",
    title: "Amor Valuers Real Estate & Valuation Profile",
    category: "Company Profiles",
    client: "Amor Valuers Limited",
    year: "2025",
    description: "Structured the corporate capability profile and valuation prospectus for Amor Valuers Limited, detailing registered property appraisal methodologies.",
    metrics: "Official appraisal prospectus for banking, corporate, and real estate developer clients.",
    deliverables: [
      "Property & asset valuation methodology breakdown",
      "Registered appraiser regulatory credentials",
      "Corporate layout for financial institution proposals"
    ],
    longDescription: "Authored and formatted the official corporate profile for Amor Valuers Limited. Highlights professional registration credentials, valuation methodologies across commercial, residential, and agricultural assets, and client advisory services.",
    image: "/src/assets/images/amor_valuers_profile_1786537712798.jpg"
  },
  {
    id: "port_prof_constructions",
    title: "Ahzuriah & Niara Constructions Profiles",
    category: "Company Profiles",
    client: "Ahzuriah Constructions & Niara Constructions",
    year: "2025",
    description: "Curation of official company profiles and capability statements for civil engineering and sustainable general construction companies.",
    metrics: "Formally submitted for civil engineering tenders, government RFPs & joint venture bids.",
    deliverables: [
      "Construction equipment fleet & project history catalog",
      "Safety, quality control & environmental policy documentation",
      "Print-ready PDF & digital tender profile"
    ],
    longDescription: "Developed corporate profiles for major construction clients including Ahzuriah Constructions and Niara Constructions, showcasing civil infrastructure capabilities, modern sustainable building technologies, and equipment fleets.",
    image: "/src/assets/images/constructions_company_profile_1786537725660.jpg"
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
    image: "/src/assets/images/drip_lounge_prospectus_1786530119903.jpg"
  },
  {
    id: "port_prop_enacoach",
    title: "ENA Coach Foundation Concept Note & Grant Proposal",
    category: "Proposals",
    client: "ENA Coach Foundation",
    year: "2023 - 2025",
    description: "Strategic concept note and community development grant proposal seeking transport-subsidized technology literacy and educational outreach.",
    metrics: "KES 4.2M Funding & strategic CSR expansion approved.",
    deliverables: [
      "Concept note & community impact narrative",
      "Resource allocation & budget framework",
      "CSR partner value alignment matrix"
    ],
    longDescription: "Authored the comprehensive concept note and CSR grant proposal for ENA Coach Foundation. Synthesized direct socioeconomic arguments focusing on transit accessibility and technology education in western Kenya, formatting precise allocation grids and outcomes mapping with ironclad structural integrity.",
    image: "/src/assets/images/enacoach_grant_proposal_1786530134121.jpg"
  },
  {
    id: "port_prop_echofiber",
    title: "EchoFiber Estate Wi-Fi Technical Infrastructure Proposal",
    category: "Proposals",
    client: "EchoFiber Networking / Sony Sugar Company",
    year: "2024",
    description: "Technical proposal for EchoFiber Networking submitted to Sony Sugar Company for the supply, deployment, and coverage of Wi-Fi across the Sony Sugar estate.",
    metrics: "Enterprise network architecture & estate-wide fiber/wireless coverage proposal.",
    deliverables: [
      "Technical network topology & estate coverage plan",
      "BOQ cost breakdown & SLA maintenance framework",
      "Bandwidth distribution & access control architecture"
    ],
    longDescription: "Engineered a comprehensive technical proposal for EchoFiber Networking targeting Sony Sugar Company. Outlined end-to-end estate Wi-Fi connectivity, fiber-backhaul integration, equipment specifications, and commercial SLA terms across the Sony Sugar residential and administrative estate.",
    image: "/src/assets/images/echofiber_wifi_proposal_1786537741357.jpg"
  },
  {
    id: "port_prop_kulan",
    title: "Kulan Innovation Training Institute Marketing Proposal",
    category: "Proposals",
    client: "Kulan Innovation Training Institute",
    year: "2025",
    description: "Strategic marketing and student acquisition proposal designed for Kulan Innovation Training Institute to expand TVET and digital skills enrollment.",
    metrics: "Comprehensive multi-channel marketing roadmap & digital campaign strategy.",
    deliverables: [
      "Student acquisition & brand positioning roadmap",
      "Digital & institutional marketing strategy",
      "Campaign budget & conversion tracking framework"
    ],
    longDescription: "Developed a growth-oriented marketing proposal for Kulan Innovation Training Institute. Structured targeted campaign funnels, local community outreach initiatives, and digital ad strategies to boost institutional awareness and TVET course enrollment.",
    image: "/src/assets/images/kulan_marketing_proposal_1786537754878.jpg"
  },
  {
    id: "port_prop_kewota_housing",
    title: "KEWOTA Affordable Housing Proposal to Government of Kenya",
    category: "Proposals",
    client: "Kenya Women Teachers Association (KEWOTA) / Government of Kenya",
    year: "2024 - 2025",
    description: "High-stakes Affordable Housing proposal submitted on behalf of KEWOTA to the Government of Kenya for female teacher housing development projects.",
    metrics: "Strategic policy alignment with Kenya's Bottom-Up Economic Transformation Agenda (BETA).",
    deliverables: [
      "Inter-institutional policy proposal & PPP framework",
      "Member financing & mortgage structure model",
      "Land acquisition & project delivery roadmap"
    ],
    longDescription: "Authored a major public-private partnership (PPP) proposal for the Kenya Women Teachers Association (KEWOTA) presented to the Government of Kenya. Formatted financial models, land allocation plans, and low-interest mortgage structures for female teachers nationwide.",
    image: "/src/assets/images/kewota_housing_proposal_1786537767653.jpg"
  },
  {
    id: "port_prop_cocktaillab",
    title: "Cocktail Lab Marketing Proposal (Berlin Launch)",
    category: "Proposals",
    client: "Cocktail Lab (International Brand Launch)",
    year: "2025",
    description: "Strategic international marketing proposal for Cocktail Lab targeting its brand launch, influencer activation, and luxury venue positioning in Berlin, Germany.",
    metrics: "European brand rollout strategy & Berlin launch activation.",
    deliverables: [
      "Berlin market launch & venue activation strategy",
      "Influencer partnership & experiential event plan",
      "Go-to-market budget & PR campaign timeline"
    ],
    longDescription: "Created an international marketing proposal for Cocktail Lab's flagship European debut in Berlin. Crafted experiential nightlife marketing concepts, luxury beverage positioning, and influencer media strategies targeting Berlin's vibrant hospitality scene.",
    image: "/src/assets/images/cocktaillab_berlin_proposal_1786537782813.jpg"
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
