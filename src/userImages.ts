import okelloPortrait from "./assets/images/okello_portrait_1780137026187.png";
import devPortrait from "./assets/images/okello_dev_portrait_1780137295134.png";
import brandBg from "./assets/images/okello_brand_bg_1780136809302.png";
import atsTransformationsImage from "./assets/images/ats_resume_transformations_1786537673063.jpg";
import brandProspectusImage from "./assets/images/brand_prospectus_mockup_1780137812098.png";

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
}

export const USER_ATTACHED_IMAGES: AttachedUserImage[] = [
  {
    id: "img_conference",
    filename: "670356360_914681931562215_3529270803198657421_n.jpg",
    userPath: "/images/user/670356360_914681931562215_3529270803198657421_n.jpg",
    fallbackAsset: brandBg,
    title: "Build From Here 2026 Conference",
    category: "Leadership & Ecosystem",
    tag: "Global Tech Summit",
    context: "LakeHub & Zone01 Kisumu in partnership with Google, Segal Family Foundation & 01 Talent",
    description: "Collaborating with African technology leaders, Google ecosystem partners, and fellow Zone01 engineers on digital innovation."
  },
  {
    id: "img_podcast_studio",
    filename: "662546653_906604609036614_4587264447012714908_n.jpg",
    userPath: "/images/user/662546653_906604609036614_4587264447012714908_n.jpg",
    fallbackAsset: okelloPortrait,
    title: "Media & Thought Leadership",
    category: "Media & Podcast",
    tag: "Studio Podcast",
    context: "Live interview on software engineering, Golang architecture, and tech talent incubation",
    description: "Discussing the intersection of high-performance backend development and strategic C-suite career positioning."
  },
  {
    id: "img_zone01_sprint",
    filename: "717154606_962213273475747_1463907587735742022_n (1).jpg",
    userPath: "/images/user/717154606_962213273475747_1463907587735742022_n (1).jpg",
    fallbackAsset: devPortrait,
    title: "Tech Hub Sprint & Collaborative Labs",
    category: "Software Engineering",
    tag: "Zone01 Kisumu",
    context: "Live software engineering workshop, peer review session, and Golang project checkpoint",
    description: "Engaging in rapid problem-solving, architectural design discussions, and collaborative agile programming."
  },
  {
    id: "img_dev_headshot",
    filename: "332104654_1341326833333209_1155535297741357910_n-removebg-preview.png",
    userPath: "/images/user/332104654_1341326833333209_1155535297741357910_n-removebg-preview.png",
    fallbackAsset: devPortrait,
    title: "Full-Stack Software Engineer Portrait",
    category: "Software Engineering",
    tag: "Technical Identity",
    context: "Developer Zone Zero One (Zone01 Kisumu) software architect",
    description: "Specialized in Golang microservices, modern React web applications, and real-time M-Pesa verified payment integrations."
  },
  {
    id: "img_consultant_portrait",
    filename: "GITS-28-removebg-preview.png",
    userPath: "/images/user/GITS-28-removebg-preview.png",
    fallbackAsset: okelloPortrait,
    title: "Executive Consultant & Founder Portrait",
    category: "Executive Branding",
    tag: "House Ventures Lead",
    context: "Founder, House Ventures Consultancy (Established 2021)",
    description: "Guiding 1,000+ executives, advocates, and institutions with ATS-optimized career profiles and high-stakes grant proposals."
  },
  {
    id: "img_writing_poster",
    filename: "Instagram Post (1).png",
    userPath: "/images/user/Instagram Post (1).png",
    fallbackAsset: brandProspectusImage,
    title: "House Ventures Writing Services Suite",
    category: "Executive Branding",
    tag: "Official Commercial Poster",
    context: "Lipa na M-Pesa Bank Paybill 542542 | Account 606684 | +254 728 606 684",
    description: "Complete overview of bespoke writing services: Resume/CV Writing, Cover Letters, LinkedIn Optimization, and Company Profiles."
  },
  {
    id: "img_leather_advisory",
    filename: "WhatsApp Image 2023-03-13 at 13.48.15.jpg",
    userPath: "/images/user/WhatsApp Image 2023-03-13 at 13.48.15.jpg",
    fallbackAsset: okelloPortrait,
    title: "Strategic Advisory & Consulting Presence",
    category: "Executive Branding",
    tag: "Founding Partner",
    context: "Bespoke executive consulting and high-level stakeholder engagement",
    description: "Representing trusted strategic excellence across corporate contracts, donor evaluations, and board advisory."
  }
];
