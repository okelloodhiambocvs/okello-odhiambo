import assert from "node:assert/strict";
import test from "node:test";
import {
  auditResumeSections,
  containsKeyword,
  extractJobKeywords,
  extractReadableTextFromPdfBuffer,
  generateHighQualityMockATS,
  parseTargetKeywords,
} from "../server/utils/atsMock";

test("word-boundary keyword matching avoids false substring hits while matching tech symbols", () => {
  assert.equal(containsKeyword("I built good Google tools", "Go"), false);
  assert.equal(containsKeyword("Built APIs in Go and React", "Go"), true);
  assert.equal(containsKeyword("Experience with M-Pesa escrow & CI/CD", "M-Pesa"), true);
  assert.equal(containsKeyword("Managed statistics reports", "ATS"), false);
  assert.equal(containsKeyword("Delivered ATS compliant resumes", "ATS"), true);
});

test("parseTargetKeywords parses comma/newline lists and deduplicates cleanly", () => {
  const parsed = parseTargetKeywords("Golang, TypeScript\nReact; golang , CI/CD, a");
  assert.deepEqual(parsed, ["Golang", "TypeScript", "React", "CI/CD"]);
});

test("extractJobKeywords merges explicit keywords with dynamic job description terms", () => {
  const jd = "Seeking a Senior Java & Spring Boot Architect with Kubernetes orchestration and Financial Compliance experience.";
  const keywords = extractJobKeywords("", jd, "Spring Boot, M-Pesa API");
  assert.ok(keywords.includes("Spring Boot"));
  assert.ok(keywords.includes("M-Pesa API"));
  assert.ok(keywords.some((k) => /kubernetes/i.test(k)));
  assert.ok(keywords.some((k) => /java/i.test(k)));
});

test("generateHighQualityMockATS accurately splits matched vs missing target keywords and computes score", () => {
  const strongCv = `
    JANE DOE | jane@example.com | +254712345678
    SUMMARY
    Senior Full-Stack Engineer specializing in Golang, TypeScript, React, PostgreSQL, and Docker.
    EXPERIENCE
    - Engineered microservices reducing latency by 42% across 15+ production services.
    - Delivered 25+ enterprise API integrations with M-Pesa verification.
    SKILLS
    Go, TypeScript, React, PostgreSQL, Docker
    EDUCATION
    BSc Computer Science
  `;

  const result = generateHighQualityMockATS(
    strongCv,
    "Looking for Golang, TypeScript, React, PostgreSQL, Docker, Kubernetes, GraphQL",
    "Golang (Go), TypeScript, React, PostgreSQL, Docker, Kubernetes, GraphQL"
  );

  assert.ok(result.matchingKeywords.includes("Golang (Go)"));
  assert.ok(result.matchingKeywords.includes("TypeScript"));
  assert.ok(result.missingKeywords.includes("Kubernetes"));
  assert.ok(result.missingKeywords.includes("GraphQL"));
  assert.equal(result.keywordMatchRate, 71); // 5 of 7
  assert.ok(result.score >= 70 && result.score <= 98);
  assert.equal(result.sectionAudit?.hasContactInfo, true);
  assert.equal(result.sectionAudit?.hasExperience, true);
  assert.ok((result.sectionAudit?.quantifiedMetricsCount || 0) >= 2);
});

test("auditResumeSections detects missing resume structure and metrics on weak drafts", () => {
  const weakCv = "I was responsible for office tasks and assisted in filing.";
  const audit = auditResumeSections(weakCv);
  assert.equal(audit.hasContactInfo, false);
  assert.equal(audit.hasBulletStructure, false);
  assert.equal(audit.quantifiedMetricsCount, 0);

  const result = generateHighQualityMockATS(weakCv, "Agile, Scrum, Budgeting", "Agile, Scrum, Budgeting");
  assert.equal(result.keywordMatchRate, 0);
  assert.ok(result.score < 50);
  assert.ok(result.contentFeedback.some((item) => /passive/i.test(item)));
});

test("extractReadableTextFromPdfBuffer extracts text literals cleanly", () => {
  const fakePdf = Buffer.from(
    "%PDF-1.4\n1 0 obj\n<< /Type /Page >>\nBT (JOHN KAMAU Senior Go Developer) Tj (Email: john@example.com) Tj ET",
    "latin1"
  );
  const extracted = extractReadableTextFromPdfBuffer(fakePdf);
  assert.match(extracted, /JOHN KAMAU Senior Go Developer/);
  assert.match(extracted, /john@example.com/);
});
