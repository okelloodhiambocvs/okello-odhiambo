export interface PortfolioItem {
  id: string;
  title: string;
  category: "CVs" | "Proposals" | "Company Profiles" | "Tech Projects";
  client: string;
  year: string;
  description: string;
  deliverables?: string[];
  techStack?: string[];
  metrics?: string;
  longDescription?: string;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "consultancy" | "tech" | "design";
  description: string;
  price: string;
  features: string[];
  ctaUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface AtsResult {
  score: number;
  matchingKeywords: string[];
  missingKeywords: string[];
  formatFeedback: string[];
  contentFeedback: string[];
  optimizedSummary: string;
  demoMode?: boolean;
  isFallback?: boolean;
  errorMessage?: string;
}
