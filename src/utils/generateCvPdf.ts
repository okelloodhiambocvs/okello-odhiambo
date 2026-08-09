import jsPDF from "jspdf";

export function generateCvPdf(): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210
  const margin = 15;
  const contentWidth = pageWidth - margin * 2; // 180
  let y = 16;

  // Colors
  const primaryNavy = [12, 30, 54]; // #0C1E36
  const accentRed = [248, 13, 5]; // #f80d05
  const darkGray = [50, 50, 50];
  const mutedGray = [100, 100, 100];
  const lineGray = [220, 225, 230];

  // Helper functions
  const addHeader = (title: string) => {
    if (y > 265) {
      doc.addPage();
      y = 18;
    }
    doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.rect(margin, y, 3.5, 6, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text(title.toUpperCase(), margin + 6, y + 4.8);

    doc.setDrawColor(lineGray[0], lineGray[1], lineGray[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, y + 7.5, margin + contentWidth, y + 7.5);

    y += 12;
  };

  const checkPageOverflow = (needed: number) => {
    if (y + needed > 275) {
      doc.addPage();
      y = 18;
    }
  };

  // --- TOP HEADER ---
  doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.rect(0, 0, pageWidth, 28, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text("BRAYAN OKELLO ODHIAMBO", margin, 12);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(248, 13, 5); // red #f80d05
  doc.text("FULL-STACK SOFTWARE DEVELOPER & EXECUTIVE CONSULTANT", margin, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(220, 235, 250);
  doc.text(
    "Mobile: +254 728 606 684 / +254 786 692 381 | Email: okelloodhiambocvs@gmail.com | Kisumu & Nairobi, Kenya",
    margin,
    23.5
  );

  y = 35;

  // --- PROFESSIONAL PROFILE ---
  addHeader("Professional Profile");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

  const profileText =
    "Results-Driven Full-Stack Software Developer and Executive Communication Consultant combining software engineering expertise with product leadership, digital strategy, and business communication. Currently developing scalable full-stack web applications and Go microservices at Developer Zone Zero One (Zone01 Kisumu). Founder of House Ventures Consultancy with 5+ years of experience delivering over 1,000+ ATS-optimized executive CVs, grant proposals, and strategic digital campaigns across East Africa. Proven leader managing Agile engineering teams, integrating real-time payment solutions (M-Pesa API), and optimizing high-performance backend systems.";

  const splitProfile = doc.splitTextToSize(profileText, contentWidth);
  doc.text(splitProfile, margin, y);
  y += splitProfile.length * 4.2 + 4;

  // --- CORE SKILLS ---
  addHeader("Core Technical & Consulting Competencies");

  checkPageOverflow(25);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text("Technical Engineering:", margin, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.text(
    "Go (Golang), JavaScript (ES6+), TypeScript, React, Node.js, Express, MySQL, PostgreSQL, REST APIs, gRPC, Docker, Git/GitHub, M-Pesa API.",
    margin + 36,
    y
  );
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text("Executive Consulting:", margin, y);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.text(
    "Executive CV Writing & ATS Optimization, C-Suite Brand Strategy, Grant Proposal Writing, Donor Compliance, Digital Marketing & SEO.",
    margin + 36,
    y
  );
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text("Methodologies & Leadership:", margin, y);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.text(
    "Agile/Scrum Project Management, Product Development, Stakeholder Communication, Code Reviews, Microservices Architecture.",
    margin + 46,
    y
  );
  y += 8;

  // --- PROFESSIONAL EXPERIENCE ---
  addHeader("Professional Experience");

  // Job 1
  checkPageOverflow(30);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text("Junior Full-Stack Developer", margin, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("March 2026 – Present", margin + contentWidth, y, { align: "right" });

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(mutedGray[0], mutedGray[1], mutedGray[2]);
  doc.text("Developer Zone Zero One (Zone01 Kisumu) | Kisumu, Kenya", margin, y);
  y += 5;

  const job1Bullets = [
    "Developing scalable full-stack web applications using Go (Golang), JavaScript, TypeScript, React, Node.js, and relational databases (MySQL/PostgreSQL) with Git version control.",
    "Engineered Kasify, a Kenyan service marketplace web platform connecting certified plumbers, electricians, and builders with real-time M-Pesa escrow verification.",
    "Led an 8-member multidisciplinary engineering team as Project Manager for the Ujuzi360 Learning Management System, coordinating Agile sprints and delivery.",
    "Solving daily Go progress tasks and internal software checkpoints at Zone01, refining backend concurrency, peer code reviews, and microservice architectures."
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

  job1Bullets.forEach((bullet) => {
    checkPageOverflow(10);
    doc.text("•", margin + 2, y);
    const split = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(split, margin + 6, y);
    y += split.length * 3.8 + 1.5;
  });

  y += 3;

  // Job 2
  checkPageOverflow(30);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text("Founder & Executive Consultant", margin, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("January 2024 – Present (Est. 2021)", margin + contentWidth, y, { align: "right" });

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(mutedGray[0], mutedGray[1], mutedGray[2]);
  doc.text("House Ventures Consultancy | Kisumu & Nairobi, Kenya", margin, y);
  y += 5;

  const job2Bullets = [
    "Formulated integrated digital communication strategies for client organizations, generating +1,500 additional social media followers while strengthening brand visibility.",
    "Authored over 1,000+ ATS-optimized executive CVs, cover letters, and corporate grant proposals for organizations including KEWOTA, CHEMA Initiative, Infomax Media, and Wamae & Allen Advocates.",
    "Advising client entities on donor compliance, branding standards, and executive communication strategy to strengthen funding readiness and public trust.",
    "Conducting stakeholder consultations and developing customer-focused digital solutions aligned with corporate transformation objectives."
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

  job2Bullets.forEach((bullet) => {
    checkPageOverflow(10);
    doc.text("•", margin + 2, y);
    const split = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(split, margin + 6, y);
    y += split.length * 3.8 + 1.5;
  });

  y += 4;

  // --- KEY SOFTWARE PROJECTS ---
  addHeader("Featured Software Projects");

  const projects = [
    {
      name: "Kasify — Certified Artisans & Builders Platform",
      tech: "TypeScript, Node.js, Express, M-Pesa API, React",
      desc: "Connects certified plumbers, electricians, and builders across Kenya with instant M-Pesa escrow verification."
    },
    {
      name: "High-Throughput Golang Microservice API Engine",
      tech: "Go (Golang), Fiber, PostgreSQL, Docker, Redis",
      desc: "Architected compiled REST API microservices delivering sub-12ms response speeds under 10,000 concurrent requests."
    },
    {
      name: "Full-Stack AI ATS Parser & Scoring Engine",
      tech: "TypeScript, React, Gemini AI, Tailwind CSS",
      desc: "Interactive web scanner analyzing resume text formatting and keyword density against industry job listings."
    }
  ];

  projects.forEach((p) => {
    checkPageOverflow(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text(p.name, margin + 2, y);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
    doc.text(`[${p.tech}]`, margin + contentWidth, y, { align: "right" });

    y += 4;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const split = doc.splitTextToSize(p.desc, contentWidth - 4);
    doc.text(split, margin + 4, y);
    y += split.length * 3.8 + 2;
  });

  y += 3;

  // --- EDUCATION & CERTIFICATIONS ---
  addHeader("Education & Professional Certifications");

  checkPageOverflow(25);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text("Bachelor of Arts in Communication & Media Technology with IT", margin, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("Maseno University (2015)", margin + contentWidth, y, { align: "right" });

  y += 4;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(mutedGray[0], mutedGray[1], mutedGray[2]);
  doc.text("Second Class Honours (Upper Division)", margin, y);
  y += 6;

  const certs = [
    "Advanced Social Media Strategy — HubSpot Academy (2021)",
    "Fundamentals of Digital Marketing — Grow with Google Africa (2018)",
    "Brand Activation Certification — Safaricom Activ8 Academy (2016)"
  ];

  certs.forEach((c) => {
    checkPageOverflow(6);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(`•  ${c}`, margin + 2, y);
    y += 4.2;
  });

  // Footer page numbering on all pages
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Brayan Okello Odhiambo — Official CV | Page ${i} of ${pageCount}`,
      margin,
      288
    );
    doc.text(
      "Verified via House Ventures & Zone01 Kisumu",
      pageWidth - margin,
      288,
      { align: "right" }
    );
  }

  // Trigger Save
  doc.save("Brayan_Okello_Odhiambo_FullStack_Executive_CV.pdf");
}
