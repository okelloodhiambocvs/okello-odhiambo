import type { AtsResult, AtsSectionAudit } from "../../src/types";

interface SkillDef {
  name: string;
  aliases: string[];
}

const SKILL_ONTOLOGY: SkillDef[] = [
  { name: "Golang (Go)", aliases: ["golang", "go language", "go"] },
  { name: "TypeScript", aliases: ["typescript"] },
  { name: "JavaScript", aliases: ["javascript", "es6"] },
  { name: "React", aliases: ["react", "reactjs", "react.js"] },
  { name: "Node.js", aliases: ["node.js", "nodejs"] },
  { name: "Express", aliases: ["express", "express.js"] },
  { name: "Spring Boot", aliases: ["spring boot", "springboot"] },
  { name: "Java", aliases: ["java"] },
  { name: "Python", aliases: ["python", "django", "fastapi"] },
  { name: "SQL", aliases: ["sql"] },
  { name: "PostgreSQL", aliases: ["postgresql", "postgres"] },
  { name: "MySQL", aliases: ["mysql"] },
  { name: "Redis", aliases: ["redis"] },
  { name: "REST APIs", aliases: ["rest api", "rest apis", "restful"] },
  { name: "gRPC", aliases: ["grpc"] },
  { name: "Microservices", aliases: ["microservice", "microservices"] },
  { name: "Docker", aliases: ["docker", "containerization"] },
  { name: "Kubernetes", aliases: ["kubernetes", "k8s"] },
  { name: "CI/CD", aliases: ["ci/cd", "continuous integration", "github actions"] },
  { name: "Git & GitHub", aliases: ["git", "github"] },
  { name: "Tailwind CSS", aliases: ["tailwind", "tailwind css"] },
  { name: "HTML5 & CSS3", aliases: ["html", "html5", "css", "css3"] },
  { name: "M-Pesa API", aliases: ["m-pesa", "mpesa", "payment gateway", "escrow"] },
  { name: "System Design", aliases: ["system design", "systems architecture", "software architecture"] },
  { name: "Cloud Architecture", aliases: ["cloud architecture", "aws", "gcp", "azure"] },
  { name: "Security & Auth", aliases: ["oauth", "jwt", "rbac", "cybersecurity"] },
  { name: "ATS Optimization", aliases: ["ats", "applicant tracking system", "ats optimization"] },
  { name: "CV Writing", aliases: ["cv writing", "resume writing", "curriculum vitae"] },
  { name: "Executive Branding", aliases: ["executive branding", "brand strategy", "c-suite", "executive profile"] },
  { name: "Copywriting", aliases: ["copywriting", "editorial", "business communication"] },
  { name: "Grant Writing", aliases: ["grant writing", "grant proposal", "donor compliance"] },
  { name: "Business Proposals", aliases: ["business proposal", "proposal writing", "rfp"] },
  { name: "Company Profiles", aliases: ["company profile", "prospectus", "pitch deck"] },
  { name: "Digital Marketing & SEO", aliases: ["seo", "digital marketing", "content strategy", "social media"] },
  { name: "Project Management", aliases: ["project management", "project manager", "sprint"] },
  { name: "Agile / Scrum", aliases: ["agile", "scrum", "kanban"] },
  { name: "Leadership & Mentorship", aliases: ["leadership", "mentorship", "team lead"] },
  { name: "Stakeholder Alignment", aliases: ["stakeholder", "client relations", "client relationship"] },
  { name: "Data Analytics & KPIs", aliases: ["analytics", "kpi", "kpis", "metrics"] },
  { name: "Risk & Operations", aliases: ["risk management", "operations", "budget"] },
];

const STOP_WORDS = new Set([
  "the", "and", "for", "with", "from", "that", "this", "into", "over", "under", "your",
  "you", "our", "are", "was", "were", "will", "have", "has", "had", "can", "all", "any",
  "per", "via", "more", "than", "their", "they", "them", "what", "when", "where", "which",
  "while", "about", "across", "using", "based", "strong", "skills", "experience", "role",
  "work", "working", "team", "target", "scope", "required", "requires", "desired",
  "level", "criteria", "scan", "against", "years", "plus", "high", "well", "such", "also",
  "looking", "seeking", "hiring", "ideal", "candidate", "candidates", "applicant", "applicants",
  "requirements", "responsibilities", "qualifications", "preferred", "minimum", "position",
  "opportunity", "company", "organization", "join", "apply", "including", "ensure", "manage",
  "build", "develop", "maintain", "support", "ability", "proven", "excellent", "good",
  "senior", "junior", "lead", "mid", "full", "part", "time", "remote", "hybrid", "onsite",
]);

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function containsKeyword(text: string, term: string): boolean {
  const cleanTerm = term.trim().toLowerCase();
  if (!cleanTerm) return false;
  const normalizedText = text.toLowerCase();

  // For terms ending or starting with non-word characters like C++, C#, CI/CD, Node.js
  const escaped = escapeRegex(cleanTerm);
  const startBoundary = /^[a-z0-9]/i.test(cleanTerm) ? "(?:^|[^a-z0-9+])" : "";
  const endBoundary = /[a-z0-9]$/i.test(cleanTerm) ? "(?:$|[^a-z0-9+])" : "";
  const regex = new RegExp(`${startBoundary}${escaped}${endBoundary}`, "i");
  return regex.test(normalizedText);
}

export function parseTargetKeywords(input?: string | string[]): string[] {
  const rawList = Array.isArray(input)
    ? input
    : typeof input === "string"
      ? input.split(/[,\n;|]+/)
      : [];

  const seen = new Set<string>();
  const result: string[] = [];

  for (const raw of rawList) {
    const cleaned = raw.trim().replace(/\s+/g, " ");
    if (cleaned.length < 2) continue;
    const key = cleaned.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result.push(cleaned);
    }
  }
  return result.slice(0, 20);
}

export function extractJobKeywords(
  cvText: string,
  jobDescription: string,
  explicitKeywords?: string | string[]
): string[] {
  const custom = parseTargetKeywords(explicitKeywords);
  const seen = new Set<string>(custom.map((k) => k.toLowerCase()));
  const collected: string[] = [...custom];

  if (jobDescription.trim()) {
    // 1. Match normalized ontology terms mentioned in the job description
    for (const def of SKILL_ONTOLOGY) {
      if (def.aliases.some((alias) => containsKeyword(jobDescription, alias))) {
        const lower = def.name.toLowerCase();
        if (!seen.has(lower)) {
          seen.add(lower);
          collected.push(def.name);
        }
      }
    }

    // 2. Dynamically extract explicit multi-word phrases, technical terms, or capitalized tokens from the user's JD
    const dynamicMatches = jobDescription.match(
      /\b(?:[A-Z][a-zA-Z0-9+#./-]{1,20}(?:\s+[A-Z][a-zA-Z0-9+#./-]{1,20}){0,2}|[a-z]+(?:-[a-z]+)+)\b/g
    ) || [];

    for (const rawToken of dynamicMatches) {
      const token = rawToken.trim();
      const lower = token.toLowerCase();
      if (token.length < 2 || STOP_WORDS.has(lower) || seen.has(lower)) continue;
      // Avoid duplicating if already represented by an ontology alias
      const alreadyCoveredByOntology = collected.some((existing) =>
        existing.toLowerCase().includes(lower) || lower.includes(existing.toLowerCase())
      );
      if (alreadyCoveredByOntology) continue;
      seen.add(lower);
      collected.push(token);
      if (collected.length >= 16) break;
    }

    // 3. Fallback single meaningful keywords if JD was short/lowercase
    if (collected.length < 6) {
      const words = jobDescription
        .toLowerCase()
        .split(/[^a-z0-9+#./-]+/)
        .map((w) => w.trim())
        .filter((w) => w.length >= 4 && !STOP_WORDS.has(w));
      for (const word of words) {
        if (!seen.has(word)) {
          seen.add(word);
          collected.push(word.charAt(0).toUpperCase() + word.slice(1));
          if (collected.length >= 12) break;
        }
      }
    }
  }

  // If neither JD nor explicit keywords were supplied, benchmark against domain defaults
  if (collected.length === 0) {
    const isTechResume =
      containsKeyword(cvText, "golang") ||
      containsKeyword(cvText, "typescript") ||
      containsKeyword(cvText, "react") ||
      containsKeyword(cvText, "software") ||
      containsKeyword(cvText, "developer");

    return isTechResume
      ? [
          "Golang (Go)",
          "TypeScript",
          "React",
          "Node.js",
          "PostgreSQL",
          "REST APIs",
          "Docker",
          "Microservices",
          "Git & GitHub",
          "System Design",
        ]
      : [
          "Executive Branding",
          "ATS Optimization",
          "Grant Writing",
          "Business Proposals",
          "Project Management",
          "Stakeholder Alignment",
          "Data Analytics & KPIs",
          "Leadership & Mentorship",
        ];
  }

  return collected.slice(0, 18);
}

function matchesTargetKeyword(cvText: string, keyword: string): boolean {
  const ontologyEntry = SKILL_ONTOLOGY.find(
    (entry) =>
      entry.name.toLowerCase() === keyword.toLowerCase() ||
      entry.aliases.some((alias) => alias.toLowerCase() === keyword.toLowerCase())
  );

  if (ontologyEntry) {
    return (
      containsKeyword(cvText, ontologyEntry.name) ||
      ontologyEntry.aliases.some((alias) => containsKeyword(cvText, alias))
    );
  }

  return containsKeyword(cvText, keyword);
}

export function auditResumeSections(cvText: string): AtsSectionAudit {
  const hasEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(cvText);
  const hasPhone = /(?:\+?\d[\d\s()-]{6,}\d)/.test(cvText);
  const hasContactInfo = hasEmail || hasPhone;

  const hasSummary = /\b(summary|profile|objective|about)\b/i.test(cvText);
  const hasExperience = /\b(experience|employment|career history|work history|projects)\b/i.test(cvText);
  const hasSkills = /\b(skills|competencies|technologies|tech stack|capabilities)\b/i.test(cvText);
  const hasEducation = /\b(education|degree|university|certification|certifications|diploma|bachelor|master)\b/i.test(cvText);
  const hasBulletStructure = /(?:^|\n)\s*(?:[-•*]|\d+\.)\s+/m.test(cvText) || cvText.includes("•") || cvText.includes("- ");

  const metricMatches = cvText.match(/(?:\b\d+(?:\.\d+)?%|\b\d{1,3}(?:,\d{3})*\+|\b(?:KES|USD|EUR)\s*\d+|\$\s*\d+|\b\d+\s*(?:million|billion|years?|clients?|projects?|developers?|members?)\b)/gi) || [];
  const words = cvText.trim().split(/\s+/).filter(Boolean);

  return {
    hasContactInfo,
    hasSummary,
    hasExperience,
    hasSkills,
    hasEducation,
    hasBulletStructure,
    quantifiedMetricsCount: metricMatches.length,
    wordCount: words.length,
  };
}

export function generateHighQualityMockATS(
  cvText: string,
  jd: string,
  explicitKeywords?: string | string[]
): AtsResult {
  const targetKeywords = extractJobKeywords(cvText, jd, explicitKeywords);
  const matchingKeywords: string[] = [];
  const missingKeywords: string[] = [];

  for (const kw of targetKeywords) {
    if (matchesTargetKeyword(cvText, kw)) {
      matchingKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  }

  const sectionAudit = auditResumeSections(cvText);
  const keywordMatchRate =
    targetKeywords.length > 0
      ? Math.round((matchingKeywords.length / targetKeywords.length) * 100)
      : 0;

  // Transparent ATS scoring breakdown (100 points total)
  const keywordScore = Math.round((keywordMatchRate / 100) * 45);
  const metricsScore = Math.min(20, sectionAudit.quantifiedMetricsCount * 4);
  const structureChecks = [
    sectionAudit.hasContactInfo,
    sectionAudit.hasSummary,
    sectionAudit.hasExperience,
    sectionAudit.hasSkills,
    sectionAudit.hasEducation,
    sectionAudit.hasBulletStructure,
  ];
  const structureScore = Math.round((structureChecks.filter(Boolean).length / structureChecks.length) * 20);

  const hasPassive = /\b(responsible for|duties included|helped to|assisted in|tasked with)\b/i.test(cvText);
  let voiceAndLengthScore = 15;
  if (hasPassive) voiceAndLengthScore -= 5;
  if (sectionAudit.wordCount < 60) {
    voiceAndLengthScore -= 9;
  } else if (sectionAudit.wordCount < 120) {
    voiceAndLengthScore -= 4;
  } else if (sectionAudit.wordCount > 1400) {
    voiceAndLengthScore -= 3;
  }

  const finalScore = Math.min(
    98,
    Math.max(18, keywordScore + metricsScore + structureScore + Math.max(0, voiceAndLengthScore))
  );

  const formatFeedback: string[] = [];
  const contentFeedback: string[] = [];

  if (sectionAudit.wordCount < 90) {
    formatFeedback.push("CV text appears too brief (" + sectionAudit.wordCount + " words). Expand project impact and technical responsibilities for stronger parser indexing.");
  } else {
    formatFeedback.push(`Document volume (${sectionAudit.wordCount} words) is well-calibrated for automated ATS ingestion and recruiter scannability.`);
  }

  if (sectionAudit.hasBulletStructure) {
    formatFeedback.push("Clear use of bullet lists identified. Standard single-hyphen or circular bullets remain optimal for parser ingestion.");
  } else {
    formatFeedback.push("Warning: No clear bullet list markers detected. Structure role achievements as bullet blocks so ATS parsers separate individual accomplishments.");
  }

  if (!sectionAudit.hasContactInfo) {
    formatFeedback.push("Action required: Add a plain-text email address and phone number at the top rather than embedding contact details inside images or PDF headers.");
  } else {
    formatFeedback.push("Contact endpoints verified cleanly in plain text; maintain a single-column layout to prevent column-merge parsing errors.");
  }

  if (!sectionAudit.hasSkills || !sectionAudit.hasEducation) {
    const missingSections = [!sectionAudit.hasSkills ? "Core Skills" : "", !sectionAudit.hasEducation ? "Education / Certifications" : ""]
      .filter(Boolean)
      .join(" and ");
    formatFeedback.push(`Recommended: Include an explicit ${missingSections} section header so automated taxonomies categorize credentials reliably.`);
  }

  if (hasPassive) {
    contentFeedback.push("Identified passive phrases such as 'responsible for' or 'duties included'. Replace with decisive action verbs ('Spearheaded', 'Engineered', 'Architected').");
  } else {
    contentFeedback.push("Strong active phrasing detected. Keep opening bullet statements with measurable action verbs tied directly to business outcomes.");
  }

  if (sectionAudit.quantifiedMetricsCount >= 3) {
    contentFeedback.push(`Strong metric density detected (${sectionAudit.quantifiedMetricsCount} quantified signals). Back up every senior claim with concrete scale, currency, or percentage gains.`);
  } else {
    contentFeedback.push("Action required: Low numeric impact density. Quantify milestones with concrete figures (e.g. 'reduced API latency by 35%' or 'delivered 25+ institutional proposals').");
  }

  if (missingKeywords.length > 0) {
    contentFeedback.push(
      `Integrate missing high-priority target keywords naturally across your summary and recent role bullets: ${missingKeywords.slice(0, 5).join(", ")}.`
    );
  } else {
    contentFeedback.push(`Optimal keyword alignment achieved across all ${targetKeywords.length} tracked competencies.`);
  }

  const isTechProfile =
    matchingKeywords.some((k) => /go|typescript|react|node|sql|api|docker|java|python/i.test(k)) ||
    containsKeyword(cvText, "developer") ||
    containsKeyword(cvText, "engineer");

  const highlightedHits = matchingKeywords.slice(0, 4).join(", ") || (isTechProfile ? "full-stack systems and API architecture" : "executive communications and proposal strategy");
  const recommendedGaps = missingKeywords.slice(0, 3).join(", ");

  const optimizedSummary = isTechProfile
    ? `Results-driven Full-Stack Software Engineer & Systems Architect with proven capability delivering scalable web applications, resilient APIs, and production software workflows. Core strengths span ${highlightedHits}${recommendedGaps ? `, alongside active expansion into ${recommendedGaps}` : ""}. Combines disciplined backend concurrency and clean frontend architecture with structured stakeholder communication to turn complex technical requirements into reliable commercial platforms.`
    : `Strategic Executive Communication & Operations Leader with a verified track record delivering high-converting career narratives, institutional grant proposals, and board-ready documentation. Specialized in ${highlightedHits}${recommendedGaps ? `, reinforced by targeted integration of ${recommendedGaps}` : ""}. Translates organizational capabilities into measurable growth, donor confidence, and structured team execution.`;

  return {
    score: finalScore,
    keywordMatchRate,
    targetKeywordsUsed: targetKeywords,
    matchingKeywords,
    missingKeywords,
    formatFeedback,
    contentFeedback,
    optimizedSummary,
    sectionAudit,
  };
}

export function extractReadableTextFromPdfBuffer(buffer: Buffer): string {
  const raw = buffer.toString("latin1");
  const chunks: string[] = [];

  // Extract string literals inside PDF text operators like (Hello World) Tj / TJ
  const literalRegex = /\(([^()\\]{2,200}(?:\\.[^()\\]{0,200})*)\)/g;
  let match: RegExpExecArray | null;
  while ((match = literalRegex.exec(raw)) !== null) {
    const cleaned = match[1]
      .replace(/\\n/g, "\n")
      .replace(/\\r/g, " ")
      .replace(/\\t/g, " ")
      .replace(/\\([()\\])/g, "$1")
      .replace(/[^\x20-\x7E\n]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (cleaned.length >= 2 && /[a-zA-Z]{2,}/.test(cleaned)) {
      chunks.push(cleaned);
    }
  }

  return chunks.join(" ").replace(/\s+/g, " ").trim();
}
