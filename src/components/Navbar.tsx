import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "@/assets/logo2.png";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#protocols" },
  { name: "Tracks", href: "#tracks" },
  { name: "Prizes", href: "#prizes" },
  { name: "Timeline", href: "#timeline" },
  { name: "Team", href: "#team" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Handle Active Section Highlighting & Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Close Mobile Menu on Scroll
  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener("scroll", closeMenuOnScroll);
    }

    return () => {
      window.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    // 1. Close the menu immediately
    setIsMobileMenuOpen(false);

    // 2. Define the scroll logic
    const scrollToTarget = () => {
      if (href === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // 3. execute navigation or scroll with a delay to let the menu close
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for page transition
      setTimeout(scrollToTarget, 100);
    } else {
      // On mobile, waiting for the menu to close (300ms) often fixes scroll issues
      setTimeout(scrollToTarget, 300);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            // --- SEO UPDATE: Added Aria Label ---
            aria-label="Hack The Spring Homepage"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={logo}
              alt="Hack The Spring Official Logo"
              className="h-7 sm:h-7 lg:h-12 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`group px-4 py-2 font-barlow text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-[#C1EAFF]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative inline-block">
                    {link.name}
                    <span 
                      className={`
                        absolute left-0 -bottom-1.5 h-[2px] bg-gold-gradient transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `} 
                    />
                  </span>
                </motion.a>
              );
            })}

            {/* Swag */}
            <Link to="/swag">
              <motion.span
                className="px-4 py-2 rounded-lg font-barlow text-sm text-primary hover:bg-primary/10 flex items-center gap-1 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={14} />
                Swag
              </motion.span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            // --- SEO UPDATE: Added Aria Label for Accessibility ---
           aria-label="Toggle Navigation Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[calc(100%)] left-4 right-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl bg-black/90 overflow-hidden"
          >
            <div className="p-2 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`px-4 py-2.5 rounded-xl font-barlow text-sm ${
                    activeSection === link.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-[#C1EAFF] hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <Link to="/swag" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.span className="px-4 py-2.5 rounded-xl font-barlow text-sm text-primary hover:bg-primary/10 flex items-center gap-2">
                  <Sparkles size={16} />
                  Swag
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}