import React from "react";
import { motion } from "motion/react";

interface AnimatedWordsProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  delayOffset?: number;
  stagger?: number;
  mode?: "mount" | "view";
}

export function AnimatedWords({
  text,
  className = "",
  highlightWords = [],
  highlightClassName = "text-[#f80d05]",
  delayOffset = 0,
  stagger = 0.045,
  mode = "mount",
}: AnimatedWordsProps) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const highlightSet = new Set(highlightWords.map((w) => w.toLowerCase()));

  return (
    <span className={className}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9&-]/g, "").toLowerCase();
        const isHighlighted = highlightSet.has(cleanWord);
        const motionProps =
          mode === "view"
            ? {
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: false, amount: 0.15 },
              }
            : {
                initial: { opacity: 0, y: 14 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -8 },
              };

        return (
          <React.Fragment key={`${word}-${idx}`}>
            <motion.span
              {...motionProps}
              transition={{
                duration: 0.42,
                delay: delayOffset + idx * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${isHighlighted ? highlightClassName : ""}`}
            >
              {word}
            </motion.span>
            {idx < words.length - 1 ? " " : ""}
          </React.Fragment>
        );
      })}
    </span>
  );
}

interface FadeInWritingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  mode?: "mount" | "view";
}

export function FadeInWriting({
  children,
  className = "",
  delay = 0.1,
  duration = 0.5,
  yOffset = 14,
  mode = "view",
}: FadeInWritingProps) {
  if (mode === "mount") {
    return (
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
