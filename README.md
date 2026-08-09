# Okello Odhiambo — Personal Portfolio & Executive Digital Platform

> A production-ready personal portfolio and professional digital platform for **Okello Odhiambo**, combining full-stack software development, executive consulting, professional document services, portfolio presentation, ATS-assisted CV generation, contact management, and secure API functionality.

**Live Website:** https://okello-odhiambo.vercel.app/
**Repository:** https://github.com/okelloodhiambocvs/okello-odhiambo

---

## Table of Contents

* [Overview](#overview)
* [Purpose](#purpose)
* [Key Features](#key-features)
* [Technology Stack](#technology-stack)
* [Application Architecture](#application-architecture)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Environment Configuration](#environment-configuration)
* [Available Scripts](#available-scripts)
* [Development](#development)
* [Production Build](#production-build)
* [Production Server](#production-server)
* [API Endpoints](#api-endpoints)
* [Security](#security)
* [ATS Functionality](#ats-functionality)
* [CV PDF Generation](#cv-pdf-generation)
* [Contact Functionality](#contact-functionality)
* [Portfolio & Content Architecture](#portfolio--content-architecture)
* [Testing & Validation](#testing--validation)
* [Deployment](#deployment)
* [Deployment Verification](#deployment-verification)
* [Performance Considerations](#performance-considerations)
* [Environment & Secrets](#environment--secrets)
* [Troubleshooting](#troubleshooting)
* [Future Improvements](#future-improvements)
* [Contributing](#contributing)
* [Author & Maintainer](#author--maintainer)
* [License](#license)

---

# Overview

This repository contains the source code for the personal portfolio and professional digital platform of **Okello Odhiambo**.

The application is designed to function as more than a conventional static portfolio. It combines a modern frontend experience with a Node.js/Express backend to provide interactive professional services, document-oriented functionality, contact handling, ATS-related tooling, security controls, and downloadable CV generation.

The platform presents Okello Odhiambo's professional profile, services, portfolio, insights, testimonials, contact channels, and selected digital tools through a unified web application.

The application is currently deployed as a production website at:

**https://okello-odhiambo.vercel.app/**

---

# Purpose

The project serves several objectives:

1. Present a professional digital identity and portfolio.
2. Showcase software development and digital project capabilities.
3. Present executive and professional consulting services.
4. Provide an interactive ATS-oriented CV/document tool.
5. Allow visitors to interact with professional services and contact functionality.
6. Generate professional CV documents in PDF format.
7. Provide a secure backend API for application functionality.
8. Demonstrate practical full-stack development capabilities.
9. Provide a foundation that can be extended into additional professional digital services.

The project is therefore structured as a **professional digital platform rather than a simple brochure website**.

---

# Key Features

## Professional Portfolio

The application provides dedicated sections for:

* Professional introduction
* About/profile information
* Services
* Portfolio/projects
* Professional insights
* Testimonials
* Contact
* Frequently asked questions
* Legal information

---

## Full-Stack Architecture

The application combines:

* React
* TypeScript
* Vite
* Express
* Node.js
* Server-side API routes
* Security middleware
* Client-side application components
* Server-side utilities

This allows the portfolio to support interactive functionality instead of relying exclusively on static frontend rendering.

---

## ATS Builder

The platform includes an ATS-oriented document workflow that supports professional CV-related functionality.

The ATS functionality includes dedicated UI components for:

* ATS input
* ATS result presentation
* Document processing
* Professional CV generation

The relevant components are located under:

```text
src/components/ats/
```

---

## CV PDF Generation

The application includes functionality for generating downloadable CV documents.

The implementation is located at:

```text
src/utils/generateCvPdf.ts
```

The project uses `jsPDF` as part of its document-generation workflow.

---

## Contact System

The application includes a dedicated contact form and backend contact route.

Frontend:

```text
src/components/ContactForm.tsx
```

Backend:

```text
server/routes/contact.ts
```

---

## Portfolio Presentation

The portfolio section provides a structured presentation of professional projects and work.

Implementation:

```text
src/components/Portfolio.tsx
```

Supporting portfolio and professional data are maintained through:

```text
src/data.ts
```

---

## Security Controls

The Express server includes dedicated security middleware.

Implementation:

```text
server/middleware/security.ts
```

The backend applies security-related HTTP headers and request-rate limiting.

The server also uses:

* JSON request size limits
* URL-encoded request limits
* Security headers
* Rate limiting
* Input sanitisation utilities
* Centralised error handling

---

# Technology Stack

## Frontend

| Technology   | Purpose                                    |
| ------------ | ------------------------------------------ |
| React        | User interface                             |
| TypeScript   | Type-safe application development          |
| Vite         | Development server and production bundling |
| Tailwind CSS | Styling                                    |
| Lucide React | Interface icons                            |
| Motion       | UI animation                               |
| jsPDF        | PDF generation                             |

---

## Backend

| Technology | Purpose                          |
| ---------- | -------------------------------- |
| Node.js    | JavaScript runtime               |
| Express    | Backend HTTP server              |
| TypeScript | Server-side type safety          |
| tsx        | TypeScript development execution |
| esbuild    | Production server bundling       |
| dotenv     | Environment configuration        |

---

## AI / Intelligent Functionality

The project includes Google's Generative AI SDK:

```text
@google/genai
```

The server-side integration is located at:

```text
server/services/gemini.ts
```

AI-related functionality should be configured through environment variables rather than committing credentials to the repository.

---

# Application Architecture

At a high level, the application follows this architecture:

```text
                         ┌──────────────────────────┐
                         │        Visitor           │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │     React Frontend       │
                         │                          │
                         │  App / Components / UI   │
                         └────────────┬─────────────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    │                 │                 │
                    ▼                 ▼                 ▼
             Portfolio UI       ATS Builder       Contact Form
                    │                 │                 │
                    └─────────────────┼─────────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │      Express Server      │
                         │                          │
                         │ Security Middleware      │
                         │ Rate Limiting            │
                         │ API Routes               │
                         └────────────┬─────────────┘
                                      │
                         ┌────────────┼────────────┐
                         │            │            │
                         ▼            ▼            ▼
                    ATS Route   Contact Route   AI Service
```

---

# Project Structure

```text
okello-odhiambo/
│
├── .env.example
├── .gitignore
├── README.md
├── bun.lock
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── server.ts
├── tsconfig.json
├── vite.config.ts
│
├── server/
│   ├── middleware/
│   │   └── security.ts
│   │
│   ├── routes/
│   │   ├── ats.ts
│   │   └── contact.ts
│   │
│   ├── services/
│   │   └── gemini.ts
│   │
│   └── utils/
│       ├── atsMock.ts
│       └── sanitize.ts
│
└── src/
    ├── App.tsx
    ├── data.ts
    ├── index.css
    ├── main.tsx
    ├── types.ts
    │
    ├── assets/
    │   └── images/
    │
    ├── components/
    │   ├── About.tsx
    │   ├── AtsBuilder.tsx
    │   ├── BrandFooter.tsx
    │   ├── BrandHeader.tsx
    │   ├── BrandLogo.tsx
    │   ├── ContactForm.tsx
    │   ├── FaqModal.tsx
    │   ├── Hero.tsx
    │   ├── Insights.tsx
    │   ├── LegalModals.tsx
    │   ├── Portfolio.tsx
    │   ├── ServiceCard.tsx
    │   ├── Services.tsx
    │   └── Testimonials.tsx
    │
    ├── components/
    │   ├── ats/
    │   │   ├── AtsInputPanel.tsx
    │   │   └── AtsResultPanel.tsx
    │   │
    │   └── legal/
    │       ├── PrivacyPolicy.tsx
    │       └── TermsOfService.tsx
    │
    ├── hooks/
    │   └── useRenderDiagnostics.ts
    │
    └── utils/
        └── generateCvPdf.ts
```

---

# Getting Started

## Prerequisites

The project can be developed using Node.js and npm.

Recommended environment:

```text
Node.js 24+
npm 11+
```

Verify your installation:

```bash
node --version
npm --version
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/okelloodhiambocvs/okello-odhiambo.git
```

Enter the project directory:

```bash
cd okello-odhiambo
```

Install dependencies:

```bash
npm install
```

The repository also contains a `bun.lock` file, but npm is currently supported through the committed `package-lock.json`.

---

# Environment Configuration

Create a local environment file from the example:

```bash
cp .env.example .env
```

On Windows PowerShell, you can use:

```powershell
Copy-Item .env.example .env
```

Never commit `.env` to Git.

The repository's `.gitignore` explicitly excludes environment files while allowing `.env.example` to remain version controlled.

---

# Available Scripts

The current `package.json` provides the following scripts:

```json
{
  "scripts": {
    "dev": "tsx server.ts",
    "build": "vite build && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs",
    "start": "node dist/server.cjs",
    "clean": "rm -rf dist",
    "lint": "tsc --noEmit"
  }
}
```

---

# Development

Start the development server:

```bash
npm run dev
```

The application runs on:

```text
http://localhost:3000
```

The Express server creates a Vite development middleware instance when running outside production mode.

---

# TypeScript Validation

Run:

```bash
npm run lint
```

This executes:

```text
tsc --noEmit
```

The command validates TypeScript without generating compiled files.

A successful execution produces no TypeScript errors.

---

# Production Build

Build the frontend and production backend bundle:

```bash
npm run build
```

The build process performs two major operations:

### Frontend

Vite builds the React application into:

```text
dist/
```

### Backend

esbuild bundles the Express server into:

```text
dist/server.cjs
```

The resulting production server can then be started with:

```bash
npm start
```

---

# Production Server

Start the production server:

```bash
npm start
```

The server listens on:

```text
http://0.0.0.0:3000
```

For local browser access:

```text
http://localhost:3000
```

---

# API Endpoints

## Health Check

```http
GET /api/health
```

Example:

```bash
curl http://localhost:3000/api/health
```

Successful response:

```json
{
  "status": "ok",
  "timestamp": "2026-08-09T12:16:33.991Z",
  "service": "House Ventures Consultancy / Developer Zone01 API",
  "environment": "production"
}
```

> The service field above reflects the current implementation in the backend and may be updated independently of the portfolio branding.

---

## ATS API

ATS-related endpoints are mounted under:

```text
/api/ats
```

Implementation:

```text
server/routes/ats.ts
```

---

## Contact API

Contact-related endpoints are mounted under:

```text
/api/contact
```

Implementation:

```text
server/routes/contact.ts
```

---

# Security

Security is implemented at the Express middleware layer.

The server applies:

* `X-Content-Type-Options`
* `X-Frame-Options`
* `X-XSS-Protection`
* `Strict-Transport-Security`
* `Referrer-Policy`
* Request-rate limiting
* JSON body size restrictions
* URL-encoded body size restrictions
* Input sanitisation
* Centralised error handling

Security middleware:

```text
server/middleware/security.ts
```

Input sanitisation:

```text
server/utils/sanitize.ts
```

---

# ATS Functionality

The ATS Builder is one of the platform's interactive professional features.

The application separates the ATS interface into:

```text
src/components/ats/AtsInputPanel.tsx
src/components/ats/AtsResultPanel.tsx
```

The main ATS workflow is exposed through:

```text
src/components/AtsBuilder.tsx
```

The server-side ATS route is:

```text
server/routes/ats.ts
```

The project also contains:

```text
server/utils/atsMock.ts
```

which provides supporting/mock ATS functionality where applicable.

---

# CV PDF Generation

Professional CV documents can be generated through the frontend utility:

```text
src/utils/generateCvPdf.ts
```

The project uses `jsPDF` for PDF generation.

This allows the portfolio to function as an interactive professional-document platform rather than only displaying static profile information.

---

# Contact Functionality

The contact workflow consists of a frontend form and backend API route.

Frontend:

```text
src/components/ContactForm.tsx
```

Backend:

```text
server/routes/contact.ts
```

The separation between UI and server-side processing allows the contact functionality to evolve independently from the presentation layer.

---

# Portfolio & Content Architecture

Professional content is maintained through reusable React components and centralised data structures.

Important files include:

```text
src/data.ts
src/types.ts
src/components/Portfolio.tsx
src/components/Services.tsx
src/components/Testimonials.tsx
src/components/Insights.tsx
```

This structure makes it possible to update professional content without restructuring the entire application.

---

# Testing & Validation

The application was validated locally before the production repository replacement.

## Dependency Installation

```bash
npm install
```

Result:

```text
237 packages added
0 vulnerabilities found
```

---

## TypeScript Validation

```bash
npm run lint
```

Result:

```text
TypeScript validation passed.
```

---

## Production Build

```bash
npm run build
```

Result:

```text
Vite production build completed successfully.
esbuild production server bundle completed successfully.
```

---

## Development Server

```bash
npm run dev
```

Result:

```text
[SECURE SERVER READY] Listening on http://0.0.0.0:3000
```

---

## Local Frontend Test

```bash
Invoke-WebRequest http://localhost:3000/ -UseBasicParsing
```

Result:

```text
HTTP 200 OK
```

---

## API Health Test

```bash
Invoke-WebRequest http://localhost:3000/api/health -UseBasicParsing
```

Result:

```text
HTTP 200 OK
```

---

## Production Server Test

The production server was also started successfully using:

```bash
npm start
```

and validated through the production `/api/health` endpoint.

---

## Browser Validation

The production application was opened directly in a browser and confirmed to render and function correctly during local validation.

---

# Deployment

The production application is deployed through Vercel.

Live application:

**https://okello-odhiambo.vercel.app/**

The deployment source is the GitHub repository:

```text
okelloodhiambocvs/okello-odhiambo
```

The production branch is:

```text
main
```

---

# Deployment Verification

The Git repository was intentionally replaced with the new portfolio implementation rather than merged with the previous project history.

The final production portfolio commit is:

```text
4ac02032c55dbbe056cbf83a6276eb56fd7d3724
```

The remote GitHub `main` branch was verified to point to the same commit:

```text
4ac02032c55dbbe056cbf83a6276eb56fd7d3724
```

This confirms that the deployed repository's `main` branch contains the tested portfolio implementation.

---

# Performance Considerations

The production build currently reports a JavaScript chunk above Vite's default 500 KB warning threshold.

This is a **build warning rather than a build failure**.

Potential future optimisations include:

* Dynamic imports
* Route-level code splitting
* Component-level lazy loading
* Rollup manual chunk configuration
* Reduction of unnecessary client-side dependencies
* Optimisation of large JavaScript modules
* Image compression and responsive image delivery

The application currently builds successfully despite the chunk-size warning.

---

# Environment & Secrets

Sensitive credentials must never be committed to Git.

The project uses:

```text
.env
```

for local environment configuration.

The example configuration is stored as:

```text
.env.example
```

The `.gitignore` prevents environment files from being committed while allowing the example configuration to remain available to developers.

### Never commit:

```text
.env
.env.local
.env.production
API keys
JWT secrets
private keys
passwords
access tokens
```

When deploying to Vercel, production environment variables should be configured through the Vercel project environment settings rather than committed to the repository.

---

# Troubleshooting

## Port 3000 Already in Use

If you see:

```text
EADDRINUSE: address already in use 0.0.0.0:3000
```

another process is already running on port `3000`.

On Windows PowerShell, identify the process:

```powershell
Get-NetTCPConnection -LocalPort 3000
```

You can then identify the associated process:

```powershell
Get-Process -Id <PID>
```

Stop the process if appropriate:

```powershell
Stop-Process -Id <PID>
```

Then restart:

```bash
npm start
```

---

## TypeScript Errors

Run:

```bash
npm run lint
```

Review the reported file and line number.

Do not bypass TypeScript errors with unnecessary `any` types or compiler suppression unless there is a documented reason.

---

## Build Errors

Run:

```bash
npm install
npm run lint
npm run build
```

If the issue persists, inspect:

```text
package.json
vite.config.ts
tsconfig.json
```

---

## Vercel Deployment Problems

If the local application works but deployment fails:

1. Confirm the Vercel project is connected to the correct GitHub repository.
2. Confirm the production branch is `main`.
3. Confirm environment variables are configured in Vercel.
4. Review the deployment build logs.
5. Run the production build locally.
6. Confirm the deployed commit corresponds to the expected GitHub commit.

---

# Future Improvements

Potential improvements include:

## Performance

* Code splitting
* Lazy-loaded sections
* Smaller JavaScript chunks
* Image optimisation
* Improved caching strategy

## Testing

* Unit tests
* API integration tests
* End-to-end browser tests
* Accessibility testing
* Automated deployment smoke tests

## Backend

* Persistent contact-message storage
* Structured logging
* Improved API validation
* More comprehensive API error responses
* Production monitoring

## ATS Platform

* More advanced resume parsing
* Job-description keyword extraction
* ATS scoring improvements
* Export templates
* CV version management
* Automated recommendations

## Professional Platform

* Content management capabilities
* Blog/insights publishing
* Analytics
* Client enquiry management
* Additional professional document tools

---

# Contributing

This is primarily a personal professional portfolio project.

Development changes should follow a controlled workflow:

```text
1. Create a feature branch
2. Implement the change
3. Run TypeScript validation
4. Run the production build
5. Test the relevant functionality locally
6. Review the Git diff
7. Commit the changes
8. Push the feature branch
9. Review the deployment
10. Merge into main
```

Recommended validation:

```bash
npm run lint
npm run build
```

---

# Author & Maintainer

**Okello Odhiambo**

Full-Stack Software Developer & Executive Consultant

Kenya

Portfolio:

https://okello-odhiambo.vercel.app/

GitHub:

https://github.com/okelloodhiambocvs

---

# License

Unless otherwise stated, the source code, branding, professional content, imagery, documents, and other original materials contained in this repository are proprietary to the project owner.

Third-party libraries remain subject to their respective licenses.

Before reusing project assets, branding, professional content, photographs, or generated documents, obtain appropriate permission from the project owner.

---

# Project Status

**Status:** Production

**Frontend:** React + TypeScript + Vite

**Backend:** Node.js + Express

**Deployment:** Vercel

**Primary Branch:** `main`

**Production Commit:** `4ac02032c55dbbe056cbf83a6276eb56fd7d3724`

**Live Application:** https://okello-odhiambo.vercel.app/

---

## Final Validation

The application has been locally validated through:

* Dependency installation
* TypeScript compilation
* Production build
* Development server startup
* Production server startup
* Frontend HTTP request
* API health request
* Browser rendering
* Git staging audit
* Clean Git working tree
* GitHub repository replacement
* Remote commit verification

The repository's `main` branch now represents the new portfolio implementation rather than the previous project.
