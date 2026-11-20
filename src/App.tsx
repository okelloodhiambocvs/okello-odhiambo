import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRenderDiagnostics } from "./hooks/useRenderDiagnostics";
import BrandHeader from "./components/BrandHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import SpotlightBanner from "./components/SpotlightBanner";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import AtsBuilder from "./components/AtsBuilder";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import BrandFooter from "./components/BrandFooter";
import ActionDetailPage from "./components/ActionDetailPage";
import { USER_ATTACHED_IMAGES } from "./userImages";

export type PageId = "about" | "services" | "portfolio" | "ats-scanner" | "contact";

export default function App() {
  // Simple diagnostic hook to monitor and log App component re-render performance
  useRenderDiagnostics("App");

  const [currentPage, setCurrentPage] = useState<PageId>("about");
  const [selectedActionId, setSelectedActionId] = useState<string | null>(null);

  const navigateToPage = (pageId: string) => {
    setSelectedActionId(null);
    const validPages: PageId[] = ["about", "services", "portfolio", "ats-scanner", "contact"];
    if (validPages.includes(pageId as PageId)) {
      setCurrentPage(pageId as PageId);
    } else {
      setCurrentPage("about");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const openActionDetail = (actionId: string) => {
    setCurrentPage("about");
    setSelectedActionId(actionId);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedActionId]);

  const selectedActionItem = selectedActionId
    ? USER_ATTACHED_IMAGES.find((item) => item.id === selectedActionId) || null
    : null;

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 16,
      scale: 0.995,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1], // Custom smooth ease-out
      },
    },
    exit: {
      opacity: 0,
      y: -12,
      scale: 0.995,
      transition: {
        duration: 0.22,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden text-[#0C1E36] font-sans selection:bg-[#f80d05]/20 selection:text-[#0C1E36]">
      {/* Floating direct quick WhatsApp contact bubble indicator - Always Visible */}
      <a
        href="https://wa.me/254728606684?text=Hi%20Okello,%20I%20am%20interested%20in%20your%20expert%20copywriting%20and%20tech%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 p-3.5 bg-[#f80d05] hover:bg-[#d40b04] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group flex items-center gap-2"
        title="Chat on WhatsApp"
        id="whatsapp-floater"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap text-xs font-mono uppercase tracking-wider font-semibold">
          Let&apos;s Chat
        </span>
        <svg
          className="w-5 h-5 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.022-.015-.022-.015-.502-.257-.044-.022-.095-.044-.14-.066l-.504-.251c-.134-.066-.279-.118-.431-.118a.654.654 0 00-.472.2l-.744.912a.382.382 0 01-.482.09c-.431-.22-.862-.515-1.258-.87a7.712 7.712 0 01-1.39-1.637.382.382 0 01.077-.478l.608-.608c.08-.073.133-.163.155-.262a.66.66 0 00-.083-.431c-.04-.083-.095-.148-.152-.224l-.578-.797a.64.64 0 00-.51-.257c-.15 0-.295.053-.404.148l-.515.429a1.861 1.861 0 00-.518 1.48c.11 1.157.65 2.27 1.402 3.197.804.992 1.83 1.764 2.97 2.26.444.19.923.313 1.404.316.033 0 .066 0 .1-.003.541-.018 1.055-.224 1.458-.574l.412-.361a.634.634 0 00.198-.444.623.623 0 00-.188-.456l-1.077-.962zm1.748-8.243A10.12 10.12 0 0012 3.013c-.021 0-.041 0-.062.001A10.155 10.155 0 001.76 13.167c.003 1.933.548 3.823 1.583 5.485l-1.684 4.31c-.083.21-.013.447.172.58a.541.541 0 00.316.101h.063l4.475-1.127a10.155 10.155 0 005.313 1.474h.021a10.155 10.155 0 0010.194-10.154 10.106 10.106 0 00-2.974-7.297zm-7.22 14.805h-.016a8.552 8.552 0 01-4.437-1.246c-.15-.098-.337-.123-.505-.07l-2.433.613.687-1.758a.54.54 0 00-.036-.453A8.528 8.528 0 012.83 13.17c0-4.708 3.86-8.536 8.607-8.537h.016c4.747 0 8.607 3.83 8.607 8.538a8.52 8.52 0 01-8.583 8.514z" />
        </svg>
      </a>

      {/* Header operations bar */}
      <BrandHeader currentPage={currentPage} onNavigate={navigateToPage} />

      {/* Main 5-Page View Controller with Framer Motion Page Transitions */}
      <main className="pt-16 min-h-[calc(100vh-64px)]">
        <AnimatePresence mode="wait">
          {/* PAGE 1: About & Engineering (or dedicated Okello in Action story page) */}
          {currentPage === "about" && selectedActionItem && (
            <motion.div
              key={`action-${selectedActionItem.id}`}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <ActionDetailPage
                item={selectedActionItem}
                onBack={() => setSelectedActionId(null)}
                onSelectAction={openActionDetail}
                onNavigate={navigateToPage}
              />
            </motion.div>
          )}

          {currentPage === "about" && !selectedActionItem && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <Hero onNavigate={navigateToPage} />
              <div id="about-story">
                <About onSelectAction={openActionDetail} />
              </div>
              <SpotlightBanner onNavigate={navigateToPage} />
              <Testimonials />
            </motion.div>
          )}

          {/* PAGE 2: Core Offerings */}
          {currentPage === "services" && (
            <motion.div
              key="services"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <Services />
            </motion.div>
          )}

          {/* PAGE 3: Portfolio & Case Studies */}
          {currentPage === "portfolio" && (
            <motion.div
              key="portfolio"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <Portfolio onNavigate={navigateToPage} />
            </motion.div>
          )}

          {/* PAGE 4: AI CV Grader */}
          {currentPage === "ats-scanner" && (
            <motion.div
              key="ats-scanner"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <AtsBuilder />
            </motion.div>
          )}

          {/* PAGE 5: Contact Inquiry */}
          {currentPage === "contact" && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <ContactForm />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* System Footer brand signature */}
      <BrandFooter onNavigate={navigateToPage} />
    </div>
  );
}

