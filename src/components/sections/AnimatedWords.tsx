
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedWordsProps {
  words: string[];
  duration?: number; // How long each word stays visible (ms)
  className?: string;
}

export function AnimatedWords({ words, duration = 2000, className = "" }: AnimatedWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearTimeout(timeout);
  }, [index, words.length, duration]);

  return (
    <span className={className} style={{ display: "inline-block" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
          style={{ display: "inline-block", minWidth: 70 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
