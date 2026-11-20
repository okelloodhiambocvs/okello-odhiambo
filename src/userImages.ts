export interface ActionHighlight {
  title: string;
  detail: string;
}

export interface AttachedUserImage {
  id: string;
  filename: string;
  userPath: string;
  fallbackAsset: string;
  title: string;
  category: "Leadership & Ecosystem" | "Software Engineering" | "Executive Branding" | "Media & Podcast";
  tag: string;
  context: string;
  description: string;
  location: string;
  timeframe: string;
  role: string;
  overviewParagraphs: string[];
  keyHighlights: ActionHighlight[];
  themes: string[];
  takeaway: string;
  ctaLabel: string;
  ctaTarget: "services" | "portfolio" | "ats-scanner" | "contact";
}

import buildFromHere from "./assets/images/user/gallery-build-from-here.jpg";
import collaborativeLab from "./assets/images/user/gallery-collaborative-lab.jpg";
import developerBootcamp from "./assets/images/user/gallery-developer-bootcamp.jpg";
import houseVenturesWriting from "./assets/images/user/gallery-house-ventures-writing.png";
import mediaPodcast from "./assets/images/user/gallery-media-podcast.jpg";
import techHubSprint from "./assets/images/user/gallery-tech-hub-sprint.jpg";

const suppliedImages: Record<string, string> = {
  "662546653_906604609036614_4587264447012714908_n.jpg": mediaPodcast,
  "670356360_914681931562215_3529270803198657421_n.jpg": buildFromHere,
  "715419344_962213336809074_1185791128368661368_n.jpg": collaborativeLab,
  "717154606_962213273475747_1463907587735742022_n.jpg": techHubSprint,
  "728639560_977517195278688_7903458639153260496_n.jpg": developerBootcamp,
  "Instagram Post (1).png": houseVenturesWriting,
};

const suppliedImage = (filename: string) => suppliedImages[filename];

// Every gallery source is an unchanged file supplied by Okello. The fallback uses
// the same file so an unrelated built-in image can never appear in this gallery.
export const USER_ATTACHED_IMAGES: AttachedUserImage[] = [
  {
    id: "podcast-studio",
    filename: "662546653_906604609036614_4587264447012714908_n.jpg",
    userPath: suppliedImage("662546653_906604609036614_4587264447012714908_n.jpg"),
    fallbackAsset: suppliedImage("662546653_906604609036614_4587264447012714908_n.jpg"),
    title: "Media & Thought Leadership",
    category: "Media & Podcast",
    tag: "Studio Podcast",
    context: "Live interview and podcast broadcast",
    description:
      "A studio conversation on digital skills, career growth, and practical software solutions for the community.",
    location: "Kisumu Studio Broadcast, Kenya",
    timeframe: "2026 Media Feature",
    role: "Featured Guest — Software Developer & Executive Brand Strategist",
    overviewParagraphs: [
      "During this live studio broadcast, Okello Odhiambo shared practical insights at the intersection of modern software engineering and executive career positioning across East Africa.",
      "The conversation explored how young technologists and mid-career professionals can pair verifiable technical projects—such as Go backend systems and TypeScript marketplaces—with structured, ATS-compliant personal branding so decision-makers recognize their value immediately.",
      "Listeners also gained candid advice on breaking into structured coding fellowships like Zone01 Kisumu, navigating M-Pesa-enabled civic commerce platforms like Ni-Wera, and positioning startups and NGOs for institutional funding through House Ventures Consultancy."
    ],
    keyHighlights: [
      {
        title: "Bridging Skills & Opportunity",
        detail: "Broken down why strong engineering work still needs clear storytelling and structured CV/LinkedIn positioning to win interviews and contracts."
      },
      {
        title: "Building Local Solutions First",
        detail: "Discussed designing Kenyan-first digital platforms like Ni-Wera to bring verified trust and M-Pesa security to everyday skilled trades."
      },
      {
        title: "Career Resilience in 2026",
        detail: "Outlined actionable steps for graduates and executives transitioning into high-demand roles across technology, NGOs, and corporate leadership."
      },
      {
        title: "Community Q&A",
        detail: "Addressed live audience questions on ATS screening algorithms, GitHub portfolio discipline, and writing persuasive grant proposals."
      }
    ],
    themes: ["Career Positioning", "Zone01 Engineering", "Digital Economy", "Executive Storytelling"],
    takeaway:
      "Technical competence builds the product; strategic communication ensures the world understands why it matters.",
    ctaLabel: "Book Speaking or Consultation",
    ctaTarget: "contact"
  },
  {
    id: "build-from-here",
    filename: "670356360_914681931562215_3529270803198657421_n.jpg",
    userPath: suppliedImage("670356360_914681931562215_3529270803198657421_n.jpg"),
    fallbackAsset: suppliedImage("670356360_914681931562215_3529270803198657421_n.jpg"),
    title: "Build From Here Conference",
    category: "Leadership & Ecosystem",
    tag: "Technology Conference",
    context: "Build From Here 2026",
    description:
      "A gathering of LakeHub, Zone01, Google, and local innovators focused on technology talent and opportunity.",
    location: "Kisumu Innovation Ecosystem, Kenya",
    timeframe: "Build From Here 2026",
    role: "Developer Representative & Ecosystem Contributor",
    overviewParagraphs: [
      "The Build From Here 2026 conference convened software engineers, community builders, Google ecosystem partners, LakeHub leaders, and Zone01 Kisumu talent to accelerate regional product engineering from the Lakeside region to global markets.",
      "Representing Zone01 Kisumu alongside fellow builders, Okello engaged with founders and ecosystem mentors on how regional engineering hubs produce world-class backend systems without engineers needing to leave their communities first.",
      "Sessions examined scalable architecture standards, collaborative open-source culture, and how local startups can pair disciplined engineering delivery with investor-ready business proposals and company profiles."
    ],
    keyHighlights: [
      {
        title: "Cross-Hub Collaboration",
        detail: "Strengthened partnerships between Zone01 Kisumu developers, LakeHub innovators, and Google developer advocates."
      },
      {
        title: "Regional Product Showcase",
        detail: "Shared insights from building Ni-Wera and managing multidisciplinary teams on projects like the Ujuzi360 Learning Management System."
      },
      {
        title: "Talent Pipeline Mentorship",
        detail: "Connected aspiring Kisumu developers with structured peer-learning pathways and real-world software engineering standards."
      },
      {
        title: "Startup Readiness",
        detail: "Advised early founders on translating technical prototypes into credible grant applications and corporate partnership decks."
      }
    ],
    themes: ["Zone01 Kisumu", "LakeHub", "Google Ecosystem", "Regional Tech Leadership"],
    takeaway:
      "World-class software and institutional ventures can be built right here in Kisumu and scale across Africa.",
    ctaLabel: "Explore Case Studies",
    ctaTarget: "portfolio"
  },
  {
    id: "collaborative-lab",
    filename: "715419344_962213336809074_1185791128368661368_n.jpg",
    userPath: suppliedImage("715419344_962213336809074_1185791128368661368_n.jpg"),
    fallbackAsset: suppliedImage("715419344_962213336809074_1185791128368661368_n.jpg"),
    title: "Collaborative Tech Lab",
    category: "Software Engineering",
    tag: "Workshop",
    context: "Hands-on collaborative session",
    description:
      "Explaining and working through ideas with fellow technologists.",
    location: "Developer Zone01 Campus, Kisumu",
    timeframe: "Engineering Peer Lab",
    role: "Full-Stack Developer & Peer Facilitator",
    overviewParagraphs: [
      "Software engineering at Zone01 Kisumu thrives on zero-teacher peer collaboration—every milestone is earned through deep problem solving, whiteboarding trade-offs, and defending architectural decisions with fellow developers.",
      "In this collaborative tech lab session, Okello worked directly alongside fellow software engineers to dissect algorithm design, concurrency patterns in Go (Golang), and clean API contracts for full-stack TypeScript web applications.",
      "Walking through bugs and system flows out loud sharpens both engineering precision and technical communication—a core strength Okello brings to agile product teams and client architecture reviews."
    ],
    keyHighlights: [
      {
        title: "Systems Problem Solving",
        detail: "Deconstructed backend logic, data structures, and error-handling flows alongside peer engineers."
      },
      {
        title: "Go & TypeScript Architecture",
        detail: "Compared strongly typed API schema validation between Go services and React/Node.js frontends."
      },
      {
        title: "Peer Code Review Culture",
        detail: "Practiced constructive audit checkpoints covering edge cases, code clarity, and maintainable modular structure."
      },
      {
        title: "Knowledge Transfer",
        detail: "Helped unblock fellow cohort members on terminal workflows, Git branching discipline, and debugging."
      }
    ],
    themes: ["Go (Golang)", "Peer Programming", "Code Reviews", "System Architecture"],
    takeaway:
      "Explaining an architecture clearly to another engineer is the fastest way to verify that the design holds together.",
    ctaLabel: "Discuss Software Engineering",
    ctaTarget: "services"
  },
  {
    id: "tech-hub-sprint",
    filename: "717154606_962213273475747_1463907587735742022_n.jpg",
    userPath: suppliedImage("717154606_962213273475747_1463907587735742022_n.jpg"),
    fallbackAsset: suppliedImage("717154606_962213273475747_1463907587735742022_n.jpg"),
    title: "Tech Hub Sprint",
    category: "Software Engineering",
    tag: "Team Session",
    context: "Live collaborative engineering session",
    description:
      "A practical peer-learning session where developers shared ideas and worked through engineering challenges together.",
    location: "Kisumu Tech Hub",
    timeframe: "Agile Delivery Sprint",
    role: "Technical Collaborator & Project Lead",
    overviewParagraphs: [
      "Shipping reliable software requires disciplined sprint coordination—breaking ambitious product roadmaps into clear tickets, unblocking backend and frontend dependencies, and shipping tested increments consistently.",
      "Captured during an intense collaborative build sprint, this session brought developers together to align database schemas, UI state transitions, and payment workflow validations before integration checkpoints.",
      "Whether leading an 8-developer team on the Ujuzi360 LMS or shipping custom client web portals, Okello brings calm structure and clear sprint ownership to every engineering room."
    ],
    keyHighlights: [
      {
        title: "Agile Sprint Coordination",
        detail: "Scoped deliverables into prioritized sprint tasks with realistic timelines and clear acceptance criteria."
      },
      {
        title: "Frontend–Backend Alignment",
        detail: "Synced REST API contracts and typed payloads across database models and React user interfaces."
      },
      {
        title: "Rapid Unblocking",
        detail: "Paired live with team contributors to diagnose edge-case regressions and merge-conflict resolutions."
      },
      {
        title: "Production Discipline",
        detail: "Enforced clean Git history, automated verification checks, and repeatable deployment readiness."
      }
    ],
    themes: ["Agile Delivery", "Team Leadership", "Full-Stack Sprints", "REST APIs"],
    takeaway:
      "Great engineering teams move fast not by rushing, but by keeping every contributor aligned on what ships next.",
    ctaLabel: "View Software Case Studies",
    ctaTarget: "portfolio"
  },
  {
    id: "developer-bootcamp",
    filename: "728639560_977517195278688_7903458639153260496_n.jpg",
    userPath: suppliedImage("728639560_977517195278688_7903458639153260496_n.jpg"),
    fallbackAsset: suppliedImage("728639560_977517195278688_7903458639153260496_n.jpg"),
    title: "Developer Bootcamp",
    category: "Leadership & Ecosystem",
    tag: "Community Event",
    context: "Kisumu developer bootcamp",
    description:
      "Supporting hands-on learning with the developer community.",
    location: "Kisumu Developer Community, Kenya",
    timeframe: "Community Bootcamp",
    role: "Mentor & Community Builder",
    overviewParagraphs: [
      "Giving back to the local technology ecosystem is central to Okello Odhiambo's mission. During the Kisumu Developer Bootcamp, emerging programmers gathered for hands-on workshops covering modern web foundations, version control, and real-world software careers.",
      "Beyond syntax, participants received practical mentorship on building a credible developer portfolio, writing readable documentation, and framing technical projects for both local businesses and remote employers.",
      "Combining Zone01 engineering rigor with House Ventures career strategy, Okello equipped attendees with both code confidence and a clearer roadmap into the software industry."
    ],
    keyHighlights: [
      {
        title: "Hands-On Mentorship",
        detail: "Guided participants through practical Git, terminal, and web development exercises live in-person."
      },
      {
        title: "Career & Portfolio Readiness",
        detail: "Shared concrete frameworks for turning class assignments into real-world case studies hiring managers value."
      },
      {
        title: "Inclusive Tech Growth",
        detail: "Encouraged peer-to-peer study groups across Kisumu so learners stay accountable long after the bootcamp."
      },
      {
        title: "Industry Pathways",
        detail: "Demystified technical interviews, freelance client scoping, and collaborative engineering workflows."
      }
    ],
    themes: ["Developer Mentorship", "Kisumu Tech Community", "Web Foundations", "Career Strategy"],
    takeaway:
      "A strong ecosystem rises fastest when builders share what they learn openly with the next cohort.",
    ctaLabel: "Connect With Okello",
    ctaTarget: "contact"
  },
  {
    id: "writing-services",
    filename: "Instagram Post (1).png",
    userPath: suppliedImage("Instagram Post (1).png"),
    fallbackAsset: suppliedImage("Instagram Post (1).png"),
    title: "House Ventures Writing Services",
    category: "Executive Branding",
    tag: "Services",
    context: "Official House Ventures service information",
    description:
      "An overview of CV writing, cover letters, LinkedIn optimisation, company profiles, and business proposal support.",
    location: "House Ventures Consultancy — Kisumu & Nairobi",
    timeframe: "Established 2021 — Active Practice",
    role: "Founder & Principal Executive Strategist",
    overviewParagraphs: [
      "Founded in 2021, House Ventures Consultancy serves executives, institutions, NGOs, and ambitious professionals across Kenya and internationally with high-converting career and corporate documentation.",
      "Every engagement combines algorithmic ATS screening precision with persuasive human storytelling—reconstructing CVs, bespoke cover letters, and LinkedIn profiles so candidates stand out in competitive shortlists while empowering organizations with bankable business proposals, grant applications, and company profiles.",
      "Trusted by organizations including KEWOTA, Wamae & Allen Advocates, ENA Coach Foundation, and regional SMEs, House Ventures has delivered more than 1,000+ executive documents and 25+ major grants secured."
    ],
    keyHighlights: [
      {
        title: "ATS-Optimized Executive CVs & Cover Letters",
        detail: "Keyword-calibrated, achievement-led career documents tailored to board-level, NGO, legal, and technology roles."
      },
      {
        title: "LinkedIn & Personal Brand Optimization",
        detail: "Search-indexed executive headlines, narrative summaries, and visibility strategy for recruiter discovery."
      },
      {
        title: "Company Profiles & Capability Decks",
        detail: "Investor- and tender-ready corporate prospectuses built for construction, real estate, logistics, and consultancy firms."
      },
      {
        title: "Grant & Business Proposals",
        detail: "Donor-compliant concept notes, logical frameworks, and commercial tenders structured for funding approval."
      }
    ],
    themes: ["ATS CVs", "Grant Writing", "Company Profiles", "LinkedIn Optimization"],
    takeaway:
      "Opportunity favors prepared professionals and institutions whose documentation proves their impact before they ever step into the room.",
    ctaLabel: "Run Free AI CV Grader",
    ctaTarget: "ats-scanner"
  }
];
