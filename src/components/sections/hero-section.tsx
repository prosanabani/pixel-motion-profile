
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSphere } from "@/components/3d/animated-sphere";
import { Link } from "react-router-dom";
import { AnimatedWords } from "./AnimatedWords";

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

// Blinking bar animation via Tailwind CSS inline
const blinkingBarStyle = {
  width: "3px",
  height: "2.1rem",
  borderRadius: "4px",
  marginRight: "0.8rem",
  background: "linear-gradient(180deg, #9b87f5, #8b5cf6, #1EAEDB)",
  animation: "blinker 1s steps(1, end) infinite",
};

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
            Hello, I'm
          </motion.h2>
          
          <motion.h1
            custom={1}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-gradient">Mohammed Youssef</span>
            <span className="block mt-2">
              I make your website{" "}
              <AnimatedWords
                words={["fast", "modern", "cute", "smooth", "animated"]}
                className="text-accent font-extrabold"
                duration={1650}
              />
            </span>
          </motion.h1>
          
          <motion.div
            custom={2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            className="flex items-center text-lg text-muted-foreground max-w-lg"
          >
            <span
              style={blinkingBarStyle as React.CSSProperties}
              className="animate-blink"
            />
            <span>
              I create intuitive and performant web experiences using cutting-edge technologies. Focused on delivering clean, maintainable, and efficient code.
            </span>
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
                  View My Work
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
                  Contact Me
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
      {/* CSS for blinking animation */}
      <style>
        {`
          @keyframes blinker {
            50% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}

