import { PortfolioItem } from "../types";

export interface EnrichedProjectDetails {
  item: PortfolioItem;
  overviewParagraphs: string[];
  relatedProjects: PortfolioItem[];
}

export function findProjectById(items: PortfolioItem[], projectId: string): PortfolioItem | null {
  return items.find((item) => item.id === projectId) || null;
}

export function buildProjectOverviewParagraphs(item: PortfolioItem): string[] {
  const paragraphs: string[] = [];

  if (item.longDescription && item.longDescription.trim()) {
    paragraphs.push(item.longDescription.trim());
  } else if (item.description && item.description.trim()) {
    paragraphs.push(item.description.trim());
  }

  if (item.category === "Tech Projects") {
    paragraphs.push(
      `Engineered in collaboration with ${item.client} (${item.year}), this build prioritizes clean system architecture, resilient data integrity, fast responsive interfaces, and dependable production performance tailored to East African and global operational realities.`
    );
  } else if (item.category === "CVs") {
    paragraphs.push(
      `Developed for ${item.client} (${item.year}), every document underwent structured keyword calibration, ATS parser verification, and executive narrative reframing to highlight quantifiable impact and leadership authority.`
    );
  } else if (item.category === "Company Profiles") {
    paragraphs.push(
      `Authored and structured for ${item.client} (${item.year}), this corporate prospectus translates institutional history, compliance credentials, and service capabilities into an authoritative dossier ready for boardrooms, tenders, and investor reviews.`
    );
  } else {
    paragraphs.push(
      `Prepared for ${item.client} (${item.year}), this engagement combined rigorous institutional research, donor/stakeholder alignment, financial modeling, and clear persuasive writing to withstand formal evaluation panels.`
    );
  }

  if (item.metrics) {
    paragraphs.push(`Measured Scope & Outcome: ${item.metrics}`);
  }

  return paragraphs;
}

export function buildEnrichedProjectDetails(
  items: PortfolioItem[],
  projectId: string
): EnrichedProjectDetails | null {
  const item = findProjectById(items, projectId);
  if (!item) return null;

  const sameCategory = items.filter(
    (entry) => entry.id !== item.id && entry.category === item.category
  );
  const otherCategory = items.filter(
    (entry) => entry.id !== item.id && entry.category !== item.category
  );

  return {
    item,
    overviewParagraphs: buildProjectOverviewParagraphs(item),
    relatedProjects: [...sameCategory, ...otherCategory].slice(0, 5),
  };
}
