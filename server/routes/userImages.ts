import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const ALLOWED_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

// POST /api/user-images/upload
router.post("/upload", async (req: Request, res: Response) => {
  try {
    const { filename, base64Data } = req.body;

    if (!filename || typeof filename !== "string") {
      return res.status(400).json({ error: "Invalid filename provided." });
    }

    if (!base64Data || typeof base64Data !== "string") {
      return res.status(400).json({ error: "Missing image base64 data." });
    }

    const cleanName = path.basename(filename).replace(/[^a-zA-Z0-9._\- ()]/g, "");
    const ext = path.extname(cleanName).toLowerCase();

    if (!ALLOWED_EXTS.includes(ext)) {
      return res.status(400).json({ error: "Only .jpg, .jpeg, .png, and .webp images are supported." });
    }

    // Decode base64 buffer
    const pureBase64 = base64Data.includes("base64,")
      ? base64Data.split("base64,")[1]
      : base64Data;

    const buffer = Buffer.from(pureBase64, "base64");

    // Write to public/images/user
    const publicDir = path.join(process.cwd(), "public", "images", "user");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    const publicFilePath = path.join(publicDir, cleanName);
    fs.writeFileSync(publicFilePath, buffer);

    // Also write to dist if dist exists in production
    const distDir = path.join(process.cwd(), "dist", "images", "user");
    if (fs.existsSync(path.join(process.cwd(), "dist"))) {
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }
      fs.writeFileSync(path.join(distDir, cleanName), buffer);
    }

    return res.json({
      success: true,
      filename: cleanName,
      url: `/images/user/${cleanName}`
    });
  } catch (error: any) {
    console.error("Error uploading user image:", error);
    return res.status(500).json({ error: "Failed to store image on server." });
  }
});

// GET /api/user-images/list
router.get("/list", (req: Request, res: Response) => {
  try {
    const publicDir = path.join(process.cwd(), "public", "images", "user");
    if (!fs.existsSync(publicDir)) {
      return res.json({ images: [] });
    }
    const files = fs.readdirSync(publicDir);
    return res.json({ images: files });
  } catch (err: any) {
    return res.json({ images: [] });
  }
});

export default router;
