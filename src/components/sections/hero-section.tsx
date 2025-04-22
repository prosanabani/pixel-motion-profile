
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSphere } from "@/components/3d/animated-sphere";
import { Link } from "react-router-dom";
import { i18n } from "@lingui/core";
import { t, Trans } from "@lingui/macro";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

const words = ["fast", "modern", "cute", "smooth", "animated"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Word animation
    const wordInterval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setWordVisible(true);
      }, 500); // Wait for fade out before changing word
    }, 2000); // Total time per word

    // Cursor blink animation
    const cursorInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === "1" ? "0" : "1";
      }
    }, 530);

    return () => {
      clearInterval(wordInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-grid">
      <div className="absolute inset-0 z-0 hero-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
      </div>
      
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-24">
        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <motion.h2
            custom={0}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="text-lg font-medium text-primary"
          >
            <Trans id="Hello, I'm">Hello, I'm</Trans>
          </motion.h2>
          
          <motion.h1
            custom={1}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-gradient">
              <Trans id="Mohammed Youssef">Mohammed Youssef</Trans>
            </span>
            <div className="flex items-center mt-2 h-12">
              <Trans id="I make your website">I make your website</Trans>
              <motion.div 
                className="ml-2 inline-block"
                animate={{ opacity: wordVisible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-accent">
                  {words[currentWordIndex]}
                </span>
              </motion.div>
            </div>
          </motion.h1>
          
          <motion.div
            custom={2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="text-lg text-muted-foreground max-w-lg relative pl-6"
          >
            <div 
              ref={cursorRef}
              className="absolute left-0 top-0 bottom-0 w-1 bg-accent transition-opacity"
              style={{ opacity: 1 }}
            />
            <Trans id="I create intuitive and performant web experiences using cutting-edge technologies. Focused on delivering clean, maintainable, and efficient code.">
              I create intuitive and performant web experiences using cutting-edge technologies. Focused on delivering clean, maintainable, and efficient code.
            </Trans>
          </motion.div>
          
          <motion.div
            custom={3}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 group"
              >
                <Link to="/projects">
                  <Trans id="View My Work">View My Work</Trans>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="animated-border"
              >
                <Link to="/contact">
                  <Trans id="Contact Me">Contact Me</Trans>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* 3D Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden relative"
        >
          <AnimatedSphere className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}
