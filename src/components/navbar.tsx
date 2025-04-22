
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

// Replace with anchor links.
const navItems = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll handler for anchor links.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = path.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Desktop Navigation */}
        <div className="w-full flex items-center justify-center md:justify-center md:w-auto">
          <ul className="hidden md:flex space-x-12 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={cn(
                    "relative py-2 px-1 transition-colors text-lg hover:text-primary focus:text-primary",
                  )}
                  onClick={(e) => handleNavClick(e, item.path)}
                  tabIndex={0}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full ml-4 hidden md:inline-flex"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-full ml-4 md:hidden flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="transition-transform" />
            ) : (
              <Menu size={24} className="transition-transform" />
            )}
          </Button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden transition-all duration-300 ease-in-out flex",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="absolute top-6 right-7">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-full md:hidden"
            aria-label="Close menu"
          >
            <X size={28} />
          </Button>
        </div>
        <ul className="flex flex-col space-y-10 text-center w-full items-center pt-20">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="font-medium text-2xl"
                onClick={(e) => handleNavClick(e, item.path)}
                tabIndex={0}
              >
                {item.name}
              </a>
            </li>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full mt-4"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </ul>
      </div>
    </motion.nav>
  );
}
