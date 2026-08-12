import jsPDF from "jspdf";

export function generateCvPdf(): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182mm
  let y = 16;

  // Color Palette
  const primaryNavy = [12, 30, 54];   // #0C1E36
  const accentRed = [248, 13, 5];     // #f80d05
  const darkGray = [45, 45, 45];
  const mutedGray = [100, 100, 100];
  const lineGray = [220, 225, 230];

  // Helper function to check page overflow and add a new page if necessary
  const checkPageOverflow = (neededHeight: number) => {
    if (y + neededHeight > 275) {
      doc.addPage();
      y = 16;
    }
  };

  // Helper function to render styled section headers
  const addHeader = (title: string) => {
    checkPageOverflow(14);
    doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.rect(margin, y, 3.5, 5.5, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text(title.toUpperCase(), margin + 5.5, y + 4.2);

    doc.setDrawColor(lineGray[0], lineGray[1], lineGray[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, y + 6.8, margin + contentWidth, y + 6.8);

    y += 11;
  };

  // --- TOP HEADER BANNER ---
  doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.rect(0, 0, pageWidth, 28, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(17);
  doc.setTextColor(255, 255, 255);
  doc.text("BRAYAN OKELLO ODHIAMBO", margin, 11.5);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("FULL-STACK SOFTWARE DEVELOPER & EXECUTIVE CONSULTANT", margin, 17.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  doc.setTextColor(220, 235, 250);
  doc.text(
    "Mobile: +254 728 606 684 / +254 786 692 381 | Email: okelloodhiambocvs@gmail.com | Kisumu & Nairobi, Kenya",
    margin,
    23
  );

  y = 34;

  // --- PROFESSIONAL PROFILE ---
  addHeader("Professional Profile");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.2);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

  const profileText =
    "Versatile Full-Stack Software Developer and Executive Communication Consultant bridging technical engineering with product strategy, C-suite brand positioning, and high-stakes business proposals. Currently building scalable web applications and Go microservices at Developer Zone Zero One (Zone01 Kisumu). Founder of House Ventures Consultancy with a 5+ year track record delivering over 1,000+ ATS-optimized executive CVs, institutional company profiles, PPP proposals, and corporate prospectuses across East Africa, the Middle East, Europe, and North America. Expert in managing Agile engineering sprints, real-time payment integration (M-Pesa API), and technical documentation.";

  const splitProfile = doc.splitTextToSize(profileText, contentWidth);
  doc.text(splitProfile, margin, y);
  y += splitProfile.length * 3.8 + 3.5;

  // --- CORE COMPETENCIES ---
  addHeader("Core Technical & Consulting Competencies");

  const competencyList = [
    { label: "Software Engineering:", val: "Go (Golang), JavaScript (ES6+), TypeScript, React, Node.js, Express, MySQL, PostgreSQL, REST/gRPC APIs, Docker, Git/GitHub, M-Pesa Escrow API." },
    { label: "Executive Consulting:", val: "ATS Resume Curation, C-Suite Brand Strategy, Corporate Prospectuses, Grant Writing, PPP Proposals, Tender Documentation, Digital Marketing." },
    { label: "Methodologies & Leadership:", val: "Agile/Scrum Project Management, Technical Sprint Leadership, Code Reviews, Public-Private Partnerships, Client Relationship Management." }
  ];

  competencyList.forEach((item) => {
    checkPageOverflow(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.2);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text(item.label, margin, y);

    const labelWidth = doc.getTextWidth(item.label) + 2;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

    const splitVal = doc.splitTextToSize(item.val, contentWidth - labelWidth);
    doc.text(splitVal, margin + labelWidth, y);
    y += Math.max(splitVal.length * 3.6, 4.5);
  });

  y += 2;

  // --- PROFESSIONAL EXPERIENCE ---
  addHeader("Professional Experience & Leadership");

  // Job 1
  checkPageOverflow(28);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text("Junior Full-Stack Developer", margin, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.2);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("March 2026 – Present", margin + contentWidth, y, { align: "right" });

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(mutedGray[0], mutedGray[1], mutedGray[2]);
  doc.text("Developer Zone Zero One (Zone01 Kisumu) | Kisumu, Kenya", margin, y);
  y += 4.5;

  const job1Bullets = [
    "Developing full-stack web applications and microservices using Go (Golang), TypeScript, React, Node.js, and relational databases (MySQL/PostgreSQL).",
    "Architecting Kazify, a Kenyan skilled trades marketplace app connecting certified plumbers, electricians, and builders with real-time M-Pesa escrow verification.",
    "Engineering ShambaLoop, an agricultural ecosystem trust marketplace for land leasing, livestock co-investment, and crop contracts.",
    "Serving as Project Manager for the Ujuzi360 Learning Management System, leading an 8-member engineering team through Agile sprint planning and delivery."
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

  job1Bullets.forEach((bullet) => {
    checkPageOverflow(9);
    doc.text("•", margin + 2, y);
    const split = doc.splitTextToSize(bullet, contentWidth - 5);
    doc.text(split, margin + 5, y);
    y += split.length * 3.5 + 1.2;
  });

  y += 3;

  // Job 2
  checkPageOverflow(28);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text("Founder & Executive Consultant", margin, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.2);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("January 2024 – Present (Est. 2021)", margin + contentWidth, y, { align: "right" });

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(mutedGray[0], mutedGray[1], mutedGray[2]);
  doc.text("House Ventures Consultancy | Kisumu & Nairobi, Kenya", margin, y);
  y += 4.5;

  const job2Bullets = [
    "Delivered over 1,000+ ATS-optimized executive CVs and partner profiles for clients across Kenya, East Africa, Middle East, Europe, and North America with an 85%+ interview callback rate.",
    "Authored corporate profiles and strategic prospectuses for institutions including KEWOTA, HUERI Limited (Kisumu), Amor Valuers, Ahzuriah Constructions, Niara Constructions, and Drip Lounge.",
    "Engineered high-stakes technical & commercial proposals including the EchoFiber Estate Wi-Fi Proposal for Sony Sugar Company, KEWOTA Affordable Housing PPP Proposal for the Government of Kenya, ENA Coach Foundation Concept Note, Kulan Innovation Institute Marketing Plan, and Cocktail Lab Berlin Launch Strategy.",
    "Designed and deployed fast, responsive static marketing websites for corporate engineering, valuation, and environmental clients."
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

  job2Bullets.forEach((bullet) => {
    checkPageOverflow(9);
    doc.text("•", margin + 2, y);
    const split = doc.splitTextToSize(bullet, contentWidth - 5);
    doc.text(split, margin + 5, y);
    y += split.length * 3.5 + 1.2;
  });

  y += 3;

  // --- SOFTWARE & WEB PROJECTS HANDLED ---
  addHeader("Software & Web Engineering Projects");

  const techProjects = [
    {
      title: "Kazify — Certified Artisans & Builders Platform (Active Web App)",
      stack: "TypeScript, React, Node.js, Express, M-Pesa Escrow API",
      desc: "Connects certified plumbers, electricians, and builders across Kenya with real-time job dispatch and M-Pesa mobile money escrow verification."
    },
    {
      title: "ShambaLoop — Agricultural Trust Marketplace (Active Web App)",
      stack: "React, TypeScript, Node.js, Express, Mobile Escrow",
      desc: "Connects landowners, farmers, and ag-investors with arable land lease listings, livestock co-investments, and verified crop production contracts."
    },
    {
      title: "High-Throughput Golang Microservice API Engine",
      stack: "Go (Golang), Fiber, PostgreSQL, Docker, Redis",
      desc: "Architected compiled REST API microservices delivering sub-12ms response times under 10,000 concurrent requests."
    },
    {
      title: "Full-Stack AI ATS Parser & Diagnostic Engine",
      stack: "TypeScript, React, Gemini AI, Tailwind CSS",
      desc: "Interactive resume analyzer checking ATS keyword frequency density and formatting compliance against target job descriptions."
    },
    {
      title: "Corporate Static Marketing Websites Series",
      stack: "HTML5, CSS3, JavaScript, React, Tailwind CSS",
      desc: "Built high-performance static marketing websites for Ahzuriah Constructions, HUERI Limited, Amor Valuers, Niara Constructions, and SheCycle Enterprise."
    }
  ];

  techProjects.forEach((p) => {
    checkPageOverflow(11);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.2);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text(p.title, margin + 2, y);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
    doc.text(`[${p.stack}]`, margin + contentWidth, y, { align: "right" });

    y += 3.8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const split = doc.splitTextToSize(p.desc, contentWidth - 4);
    doc.text(split, margin + 4, y);
    y += split.length * 3.5 + 1.8;
  });

  y += 2;

  // --- HIGH-STAKES PROPOSALS HANDLED ---
  addHeader("Selected High-Stakes Proposals & Concept Notes");

  const proposals = [
    {
      client: "Sony Sugar Company / EchoFiber Networking",
      title: "EchoFiber Estate Wi-Fi Technical Infrastructure Proposal",
      detail: "Technical proposal for estate-wide Wi-Fi supply, fiber-backhaul integration, equipment BOQ, and SLA maintenance across Sony Sugar estate."
    },
    {
      client: "Kenya Women Teachers Association / Government of Kenya",
      title: "KEWOTA Affordable Housing PPP Proposal",
      detail: "Public-Private Partnership (PPP) proposal presented to the Government of Kenya detailing low-interest mortgage structures and land acquisition for female teachers."
    },
    {
      client: "ENA Coach Foundation",
      title: "Concept Note & Community Grant Proposal (KES 4.2M)",
      detail: "Strategic CSR concept note and grant proposal for transport-subsidized tech literacy hubs and educational outreach in Western Kenya."
    },
    {
      client: "Kulan Innovation Training Institute",
      title: "Marketing & Student Acquisition Proposal",
      detail: "Multi-channel marketing strategy and enrollment acquisition roadmap for TVET courses and digital skills training."
    },
    {
      client: "Cocktail Lab (International Launch)",
      title: "Berlin Launch Marketing & Venue Activation Proposal",
      detail: "European market debut marketing proposal covering nightlife venue positioning, influencer activation, and launch event strategy in Berlin, Germany."
    }
  ];

  proposals.forEach((pr) => {
    checkPageOverflow(11);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.2);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text(pr.title, margin + 2, y);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(mutedGray[0], mutedGray[1], mutedGray[2]);
    doc.text(`Client: ${pr.client}`, margin + contentWidth, y, { align: "right" });

    y += 3.8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const split = doc.splitTextToSize(pr.detail, contentWidth - 4);
    doc.text(split, margin + 4, y);
    y += split.length * 3.5 + 1.8;
  });

  y += 2;

  // --- COMPANY PROFILES & CV CURATION HANDLED ---
  addHeader("Corporate Profiles & Executive CV Curation");

  const profilesAndCvs = [
    {
      name: "KEWOTA Corporate Prospectus & Profile",
      desc: "Authored official institutional prospectus detailing teacher welfare initiatives, technology literacy drives, and national donor partnership frameworks."
    },
    {
      name: "HUERI Limited Environmental Consultancy Profile",
      desc: "Designed corporate capability statement for Hope Urban Environmental & Research Investment Ltd in Kisumu, highlighting EIA audits and urban research."
    },
    {
      name: "Amor Valuers Real Estate & Valuation Profile",
      desc: "Structured registered property appraisal prospectus detailing commercial, residential, and agricultural asset valuation methodologies for banking clients."
    },
    {
      name: "Ahzuriah & Niara Constructions Corporate Profiles",
      desc: "Curation of civil engineering tender profiles, equipment fleet catalogs, safety policies, and joint venture credentials."
    },
    {
      name: "Wamae & Allen Advocates Legal Partner CVs",
      desc: "Executive legal resumes for managing partners and legal associates focused on commercial litigation victories and regulatory compliance leadership."
    },
    {
      name: "1,000+ Individual Client ATS CV Transformations",
      desc: "Delivered over 1,000 individual resume transformations for software engineers, project managers, medical staff, and corporate executives across East Africa and globally."
    }
  ];

  profilesAndCvs.forEach((item) => {
    checkPageOverflow(10);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.2);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text(`• ${item.name}:`, margin + 2, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const split = doc.splitTextToSize(item.desc, contentWidth - 6);
    doc.text(split, margin + 6, y + 3.6);
    y += split.length * 3.5 + 4.5;
  });

  y += 2;

  // --- EDUCATION & CERTIFICATIONS ---
  addHeader("Education & Professional Certifications");

  checkPageOverflow(22);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.8);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text("Bachelor of Arts in Communication & Media Technology with IT", margin, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.2);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("Maseno University (2015)", margin + contentWidth, y, { align: "right" });

  y += 3.8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  doc.setTextColor(mutedGray[0], mutedGray[1], mutedGray[2]);
  doc.text("Second Class Honours (Upper Division)", margin, y);
  y += 5.5;

  const certs = [
    "Advanced Social Media Strategy — HubSpot Academy (2021)",
    "Fundamentals of Digital Marketing — Grow with Google Africa (2018)",
    "Brand Activation Certification — Safaricom Activ8 Academy (2016)"
  ];

  certs.forEach((c) => {
    checkPageOverflow(5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(`•  ${c}`, margin + 2, y);
    y += 3.8;
  });

  // Footer page numbering on all generated pages
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.2);
    doc.setTextColor(140, 140, 140);
    doc.text(
      `Brayan Okello Odhiambo — Consolidated Executive CV | Page ${i} of ${pageCount}`,
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

  // Trigger File Download
  doc.save("Brayan_Okello_Odhiambo_FullStack_Executive_CV.pdf");
}
