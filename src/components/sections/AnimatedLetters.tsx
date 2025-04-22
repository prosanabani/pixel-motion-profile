
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedLettersProps {
  words: string[];
  duration?: number; // How long each word stays visible
  className?: string;
}

export function AnimatedLetters({ words, duration = 1700, className = "" }: AnimatedLettersProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const word = words[wordIndex]?.split("") ?? [];

  // Advance word after duration
  useEffect(() => {
    const timeout = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearTimeout(timeout);
  }, [wordIndex, words.length, duration]);

  // Per-letter framer-motion variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
    exit: {},
  };

  const letter = {
    hidden: { opacity: 0, filter: "blur(4px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.32, ease: "easeOut" }
    },
    exit: { opacity: 0, filter: "blur(4px)", y: -12, transition: { duration: 0.25 } }
  };

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[wordIndex]}
          className="inline-block"
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ minWidth: 80 }}
        >
          {word.map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              className="inline-block"
              style={{ willChange: "opacity, filter, transform" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
