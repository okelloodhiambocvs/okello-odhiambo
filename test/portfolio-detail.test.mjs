import assert from "node:assert/strict";
import test from "node:test";
import {
  buildEnrichedProjectDetails,
  buildProjectOverviewParagraphs,
  findProjectById,
} from "../src/utils/portfolioDetail";

const SAMPLE_PROJECTS = [
  {
    id: "port_tech_ni_wera",
    title: "Ni-Wera — Kenya Skilled Trades Marketplace",
    category: "Tech Projects",
    client: "Ni-Wera Kenya (Active Project)",
    year: "2026",
    description: "Kenya-first skilled trades marketplace.",
    metrics: "Real-time fundi bookings and M-Pesa escrow.",
    techStack: ["TypeScript", "React"],
    deliverables: ["Fundi verification", "Booking flow"],
    longDescription: "Ni-Wera connects customers with verified trade professionals for on-demand services.",
  },
  {
    id: "port_tech_ujuzi360",
    title: "Ujuzi360 — Learning Management System",
    category: "Tech Projects",
    client: "Internal Project",
    year: "2026",
    description: "In-progress Learning Management System.",
    techStack: ["Spring Boot", "Java", "React"],
    deliverables: ["Course management", "Role-based dashboards"],
  },
  {
    id: "port_cv_wamae",
    title: "Executive Legal Partner CV Curation",
    category: "CVs",
    client: "Wamae and Allen Advocates",
    year: "2025",
    description: "Legal CV curation.",
  },
];

test("findProjectById locates Ni-Wera and Ujuzi360 accurately and handles unknown IDs", () => {
  const niWera = findProjectById(SAMPLE_PROJECTS, "port_tech_ni_wera");
  assert.ok(niWera);
  assert.match(niWera.title, /Ni-Wera/);

  const ujuzi = findProjectById(SAMPLE_PROJECTS, "port_tech_ujuzi360");
  assert.ok(ujuzi);
  assert.match(ujuzi.title, /Ujuzi360/);

  assert.equal(findProjectById(SAMPLE_PROJECTS, "non_existent_id"), null);
});

test("buildProjectOverviewParagraphs produces multi-paragraph domain context and preserves metrics", () => {
  const niWera = findProjectById(SAMPLE_PROJECTS, "port_tech_ni_wera");
  assert.ok(niWera);

  const paragraphs = buildProjectOverviewParagraphs(niWera);
  assert.ok(paragraphs.length >= 3);
  assert.ok(paragraphs.some((p) => /verified trade professionals/i.test(p)));
  assert.ok(paragraphs.some((p) => /Measured Scope & Outcome/i.test(p)));
});

test("buildEnrichedProjectDetails returns related projects excluding active item", () => {
  const enriched = buildEnrichedProjectDetails(SAMPLE_PROJECTS, "port_tech_ni_wera");
  assert.ok(enriched);
  assert.equal(enriched.item.id, "port_tech_ni_wera");
  assert.equal(enriched.relatedProjects.length, 2);
  assert.equal(enriched.relatedProjects[0].id, "port_tech_ujuzi360");
  assert.ok(enriched.relatedProjects.every((p) => p.id !== "port_tech_ni_wera"));
  assert.equal(buildEnrichedProjectDetails(SAMPLE_PROJECTS, "missing_id"), null);
});
