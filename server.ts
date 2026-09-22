import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { setSecurityHeaders, rateLimiter } from "./server/middleware/security";
import atsRouter from "./server/routes/ats";
import contactRouter from "./server/routes/contact";
import userImagesRouter from "./server/routes/userImages";

async function startServer() {
  const app = express();
  const PORT = 3000;
  // `npm start` runs the bundled dist/server.cjs file. Treat that entrypoint as
  // production even when NODE_ENV was not supplied by the host environment.
  const isProduction = process.env.NODE_ENV === "production" || path.basename(process.argv[1] || "") === "server.cjs";

  // Security Hardening: Hide server footprint
  app.disable("x-powered-by");

  // Global Middleware
  app.use(express.json({ limit: "25mb" }));
  app.use(express.urlencoded({ extended: true, limit: "25mb" }));
  app.use(setSecurityHeaders);
  app.use(rateLimiter);

  // Serve user images directory statically
  const publicUserImages = path.join(process.cwd(), "public", "images");
  app.use("/images", express.static(publicUserImages));

  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "House Ventures Consultancy / Developer Zone01 API",
      environment: process.env.NODE_ENV || "development"
    });
  });

  // Mount API Sub-routers
  app.use("/api/ats", atsRouter);
  app.use("/api/contact", contactRouter);
  app.use("/api/user-images", userImagesRouter);

  // Serve Frontend with Vite (Dev) or Static Assets (Prod)
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Global Express Error Handler
  app.use((err: any, req: Request, res: Response, _next: express.NextFunction) => {
    console.error("[SERVER UNHANDLED EXCEPTION]", err);
    res.status(500).json({ error: "An unexpected internal server error occurred." });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SECURE SERVER READY] Listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
