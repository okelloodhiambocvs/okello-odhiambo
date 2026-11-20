import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { basename, join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));
const galleryManifest = readFileSync(join(root, "src", "userImages.ts"), "utf8");
const aboutComponent = readFileSync(join(root, "src", "components", "About.tsx"), "utf8");
const heroComponent = readFileSync(join(root, "src", "components", "Hero.tsx"), "utf8");
const portfolioComponent = readFileSync(join(root, "src", "components", "Portfolio.tsx"), "utf8");
const servicesComponent = readFileSync(join(root, "src", "components", "Services.tsx"), "utf8");
const atsComponent = readFileSync(join(root, "src", "components", "AtsBuilder.tsx"), "utf8");
const contactComponent = readFileSync(join(root, "src", "components", "ContactForm.tsx"), "utf8");
const founderGalleryComponent = readFileSync(join(root, "src", "components", "FounderGallery.tsx"), "utf8");
const portfolioData = readFileSync(join(root, "src", "data.ts"), "utf8");
const galleryFiles = [...galleryManifest.matchAll(/filename: "([^"]+)"/g)].map((match) => match[1]);
const galleryAssetImports = [...galleryManifest.matchAll(/from "\.\/assets\/images\/user\/([^"]+)"/g)].map((match) => match[1]);

test("every gallery entry has a deployment-safe bundled image asset", () => {
  assert.equal(galleryFiles.length, 6, "The gallery should contain the six approved images");
  assert.equal(new Set(galleryFiles).size, galleryFiles.length, "Gallery filenames must be unique");
  assert.equal(galleryAssetImports.length, galleryFiles.length, "Each gallery card needs a bundled image import");

  for (const filename of galleryAssetImports) {
    assert.ok(
      existsSync(join(root, "src", "assets", "images", "user", basename(filename))),
      `Missing bundled gallery image: ${filename}`,
    );
  }
});

test("the approved event and services cards remain in the gallery", () => {
  for (const title of [
    "Media & Thought Leadership",
    "Build From Here Conference",
    "Tech Hub Sprint",
    "House Ventures Writing Services",
  ]) {
    assert.match(galleryManifest, new RegExp(`title: "${title}"`));
  }

  for (const removedTitle of [
    "Professional Desk Portrait",
    "Executive Consultant Portrait",
    "Professional Portrait Series",
    "Engineering Workspace",
    "Developer Portrait",
    "Strategic Advisory",
  ]) {
    assert.doesNotMatch(galleryManifest, new RegExp(`title: "${removedTitle}"`));
  }
});

test("the two Intersection profile cards use the supplied communication and tech images", () => {
  assert.match(aboutComponent, /Thoughtful_Professional_Portrait_84cd5f48\.png/);
  assert.match(aboutComponent, /c08lP_2a24af41\.jpg/);
  assert.ok(existsSync(join(root, "public", "assets", "aistudio", "Thoughtful_Professional_Portrait_84cd5f48.png")));
  assert.ok(existsSync(join(root, "public", "assets", "aistudio", "c08lP_2a24af41.jpg")));
});

test("the landing page hero uses the attached studio cutout portrait and omits the redundant proof bar", () => {
  assert.match(heroComponent, /WhatsApp_Image_2026-11-09_at_12\.59\.17_AM-removebg-preview_df34d606\.png/);
  assert.match(heroComponent, /bg-\[#0C1E36\]/);
  assert.doesNotMatch(heroComponent, /Golang Software Labs/);
  assert.doesNotMatch(heroComponent, /Founding Authority/);
  assert.ok(existsSync(join(root, "public", "assets", "aistudio", "WhatsApp_Image_2026-11-09_at_12.59.17_AM-removebg-preview_df34d606.png")));
});

test("the About Full-Stack card removes cryptic go run commands and redundant bullets while gallery uses brand blue", () => {
  assert.doesNotMatch(aboutComponent, /go run main\.go/);
  assert.doesNotMatch(aboutComponent, /Zone01 Go & Full-Stack Labs/);
  assert.doesNotMatch(aboutComponent, /Ni-Wera Web App Project/);
  assert.doesNotMatch(aboutComponent, /Ujuzi360 LMS Project Management/);
  assert.match(founderGalleryComponent, /bg-\[#0C1E36\]/);
});

test("the portfolio, services, AI CV grader, and contact heroes match the split layout with dedicated visuals", () => {
  assert.match(portfolioComponent, /Thoughtful_Professional_Portrait-removebg-preview_b0c510da\.png/);
  assert.match(portfolioComponent, /bg-\[#0C1E36\]/);
  assert.ok(existsSync(join(root, "public", "assets", "aistudio", "Thoughtful_Professional_Portrait-removebg-preview_b0c510da.png")));
  assert.match(servicesComponent, /ServicesHeroVisual/);
  assert.match(atsComponent, /AtsHeroVisual/);
  assert.match(contactComponent, /ContactHeroVisual/);
});

test("the portfolio names Ni-Wera and includes the active Ujuzi360 LMS project", () => {
  assert.match(portfolioData, /title: "Ni-Wera — Kenya Skilled Trades Marketplace"/);
  assert.match(portfolioData, /title: "Ujuzi360 — Learning Management System"/);
  assert.match(portfolioData, /"Spring Boot", "Java", "React"/);
  assert.match(portfolioData, /Project Manager, leading a team of eight developers/);
});
