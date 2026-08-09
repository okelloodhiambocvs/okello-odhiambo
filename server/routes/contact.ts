import { Router, Request, Response } from "express";
import { sanitizeInput } from "../utils/sanitize";

const router = Router();

// In-memory submissions store for secure inquiry logging
const contactSubmissions: Array<{
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
  ip: string;
}> = [];

// POST /api/contact
router.post("/", (req: Request, res: Response) => {
  try {
    const name = sanitizeInput(req.body?.name, 100);
    const email = sanitizeInput(req.body?.email, 100);
    const phone = sanitizeInput(req.body?.phone, 50);
    const service = sanitizeInput(req.body?.service, 100);
    const message = sanitizeInput(req.body?.message, 5000);

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Required fields missing. Please provide a valid Name, Email, and Message."
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email address format."
      });
    }

    const submission = {
      id: `SUB-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name,
      email,
      phone: phone || "Not provided",
      service: service || "General Inquiry",
      message,
      timestamp: new Date().toISOString(),
      ip: (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "127.0.0.1"
    };

    contactSubmissions.unshift(submission);
    if (contactSubmissions.length > 200) {
      contactSubmissions.pop();
    }

    console.log(`[SECURE CONTACT INQUIRY RECEIVED] ID: ${submission.id} From: ${name} (${email}) Service: ${service}`);

    res.json({
      success: true,
      message: "Inquiry transmitted securely. Okello Odhiambo will review and respond within 12-24 hours.",
      submissionId: submission.id
    });
  } catch (error: any) {
    console.error("Error processing contact form submission:", error);
    res.status(500).json({ error: "Server error handling contact submission." });
  }
});

// GET /api/contact/submissions
router.get("/submissions", (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET || "okello-admin-2026"}`) {
    return res.status(401).json({ error: "Unauthorized access to inquiry records." });
  }
  res.json({ submissions: contactSubmissions });
});

export default router;
