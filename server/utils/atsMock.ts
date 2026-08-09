export function generateHighQualityMockATS(cvText: string, jd: string) {
  const matched: string[] = [];
  const missing: string[] = [];
  
  const cleanCv = cvText.toLowerCase();
  const cleanJd = jd.toLowerCase();

  const skillKeywords = [
    { name: "Golang", term: "golang" },
    { name: "Go Language", term: "go language" },
    { name: "gRPC", term: "grpc" },
    { name: "Microservices", term: "microservice" },
    { name: "PostgreSQL", term: "postgresql" },
    { name: "MySQL", term: "mysql" },
    { name: "Docker", term: "docker" },
    { name: "Redis", term: "redis" },
    { name: "Kubernetes", term: "kubernetes" },
    { name: "REST APIs", term: "rest api" },
    { name: "API Gateways", term: "api gateway" },
    { name: "System Design", term: "system design" },
    { name: "Cloud Architecture", term: "cloud architecture" },
    { name: "React", term: "react" },
    { name: "TypeScript", term: "typescript" },
    { name: "JavaScript", term: "javascript" },
    { name: "HTML & CSS", term: "html" },
    { name: "Tailwind CSS", term: "tailwind" },
    { name: "Git & GitHub", term: "git" },
    { name: "ATS Optimization", term: "ats" },
    { name: "CV Writing", term: "cv writing" },
    { name: "Copywriting", term: "copywriting" },
    { name: "Grant Writing", term: "grant" },
    { name: "Proposal Writing", term: "proposal" },
    { name: "Company Profiles", term: "company profile" },
    { name: "Project Management", term: "project management" },
    { name: "CEO / Executive", term: "executive" },
    { name: "Strategic Branding", term: "brand" },
    { name: "Content Strategy", term: "content strategy" },
    { name: "SEO Taxonomy", term: "seo" },
    { name: "Business Growth", term: "business" },
    { name: "Stakeholder Alignment", term: "stakeholder" },
    { name: "Operations", term: "operation" },
    { name: "Data Structures", term: "data structure" },
    { name: "Key Performance Indicators (KPIs)", term: "kpi" },
    { name: "Resource Budgeting & Finance", term: "budget" },
    { name: "Leadership & Mentorship", term: "leadership" },
    { name: "Client Relationship Management", term: "client" },
    { name: "Data Analytics", term: "analytics" },
    { name: "Agile / Scrum Methodologies", term: "agile" },
    { name: "Continuous Integration (CI/CD)", term: "ci/cd" },
    { name: "Risk Management", term: "risk" },
    { name: "Change Management & Evolution", term: "change management" }
  ];

  skillKeywords.forEach(item => {
    const cvHas = cleanCv.includes(item.term);
    const jdHas = cleanJd.includes(item.term);

    if (cvHas && jdHas) {
      matched.push(item.name);
    } else if (jdHas && !cvHas) {
      missing.push(item.name);
    } else if (!jdHas && cvHas) {
      matched.push(item.name);
    }
  });

  const uniqueMatched = Array.from(new Set(matched)).slice(0, 8);
  const uniqueMissing = Array.from(new Set(missing)).slice(0, 8);

  if (uniqueMissing.length === 0) {
    if (cleanCv.includes("golang") || cleanCv.includes("developer") || cleanCv.includes("javascript")) {
      uniqueMissing.push("gRPC Architecture", "Redis Caching", "Docker Containerization", "PostgreSQL Queries");
    } else {
      uniqueMissing.push("ATS Taxonomy", "SEO Keyword Curation", "Metric Quantification", "Executive Value Pitch");
    }
  }

  if (uniqueMatched.length === 0) {
    if (cleanCv.includes("golang") || cleanCv.includes("developer")) {
      uniqueMatched.push("Software Development", "API Design", "Database Management", "HTML/CSS");
    } else {
      uniqueMatched.push("Professional Writing", "Client Relations", "CV Copywriting", "Strategic Editing");
    }
  }

  let scoreBase = 65;
  const hasMetrics = /([0-9]+%|[0-9]+\+|\bKES\b|\bUSD\b|\bshillings\b|\bmillion\b)/i.test(cvText);
  if (hasMetrics) scoreBase += 12;

  const hasPassive = /responsible for|duties included|helped to|assisted in/i.test(cvText);
  if (hasPassive) scoreBase -= 8;

  const wordCount = cvText.split(/\s+/).length;
  if (wordCount < 80) {
    scoreBase -= 15;
  } else if (wordCount > 150 && wordCount < 400) {
    scoreBase += 8;
  }

  scoreBase += uniqueMatched.length * 2 - uniqueMissing.length;
  const finalScore = Math.min(Math.max(scoreBase, 35), 96);

  const formatFeedback: string[] = [];
  const contentFeedback: string[] = [];

  if (wordCount < 100) {
    formatFeedback.push("CV text appears too brief. Introduce complete descriptions to enrich search-engine readability.");
  } else {
    formatFeedback.push("Verify that your career chronology strictly flows backward (newest experiences on top).");
  }
  
  if (cvText.includes("-") || cvText.includes("•") || cvText.includes("*")) {
    formatFeedback.push("Clear use of bullet lists identified. Standard single hyphen or circular bullets are optimal for parser ingestion.");
  } else {
    formatFeedback.push("Warning: No clear list markers found. Structure your experiences as list blocks to allow dynamic indexing.");
  }

  formatFeedback.push("Keep layouts strictly single-column. Multiple vertical text blocks can cause core content parsing mergers.");
  formatFeedback.push("Ensure your name, phone, and email endpoints are listed as standard text blocks rather than locked in headers or tables.");

  if (hasPassive) {
    contentFeedback.push("Identified passive phrases like 'responsible for'. Replace with decisive action verbs ('Spearheaded', 'Engineered', 'Authored').");
  } else {
    contentFeedback.push("Good job using active verbs. Continually refine to ensure every achievement begins with a dynamic performance indicator.");
  }

  if (hasMetrics) {
    contentFeedback.push("Strong metric density detected. Continue backing up qualitative statements with raw quantitative percentages or currency milestones.");
  } else {
    contentFeedback.push("Action Required: Your CV is missing clear numeric results. Quantify your milestones (e.g. 'boosted turnaround speed by 35%' or 'authored 500+ documents').");
  }

  contentFeedback.push(`Integrate high-yield keywords from the target role directly into your skills category: ${uniqueMissing.slice(0, 3).join(", ").toLowerCase()}.`);

  let optimizedSummary = "";
  if (cleanCv.includes("golang") || cleanCv.includes("developer") || cleanCv.includes("api") || cleanCv.includes("backend")) {
    optimizedSummary = `A highly skilled and analytical **Senior Software Engineer & Systems Architect** with a validated history of engineering high-throughput backend services and clean web architectures. Expert in crafting high-concurrency microservices utilizing **Golang**, ${uniqueMatched.slice(0, Math.min(3, uniqueMatched.length)).join(", ") || "gRPC, Docker"}, and PostgreSQL database optimization. Possesses strong technical writing skills to translate complex system parameters into clear corporate proposals. Focused on building low-latency API layers, containerized deployments, and robust real-time logic.`;
  } else {
    optimizedSummary = `An elite, highly competent **Professional Writer, CV Strategist, & Content Architect** with an established record of authoring over 500+ customized professional proposals, executive resumes, and corporate prospectuses. Highly skilled in **ATS keyword optimization**, SEO content strategy, and narrative branding designed to bypass automated filters and captivate chief decision-makers. Translates complex organizational capabilities into polished, high-converting premium company profiles that accelerate investor and client securement.`;
  }

  return {
    score: finalScore,
    matchingKeywords: uniqueMatched,
    missingKeywords: uniqueMissing,
    formatFeedback,
    contentFeedback,
    optimizedSummary
  };
}
