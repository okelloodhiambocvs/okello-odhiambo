import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { basename, join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));
const galleryManifest = readFileSync(join(root, "src", "userImages.ts"), "utf8");
const aboutComponent = readFileSync(join(root, "src", "components", "About.tsx"), "utf8");
const heroComponent = readFileSync(join(root, "src", "components", "Hero.tsx"), "utf8");
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
  assert.match(aboutComponent, /profile-communication\.png/);
  assert.match(aboutComponent, /profile-technology\.png/);
  assert.ok(existsSync(join(root, "src", "assets", "images", "user", "profile-communication.png")));
  assert.ok(existsSync(join(root, "src", "assets", "images", "user", "profile-technology.png")));
});

test("the landing page uses the supplied softly blurred couch photo", () => {
  assert.match(heroComponent, /hero-consultant-couch\.jpg/);
  assert.match(heroComponent, /blur-\[1\.5px\]/);
  assert.ok(existsSync(join(root, "src", "assets", "images", "user", "hero-consultant-couch.jpg")));
});
