import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/Screenshot_2026-02-04-22-22-57-99_a23b203fd3aafc6dcb84e438dda6_1770217270598.jpg";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Social", href: "#social" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/5 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center space-x-3 group">
          <img 
            src={logoImg} 
            alt="Logo" 
            className="w-10 h-10 rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors"
          />
          <span className="font-display font-bold text-lg md:text-xl tracking-wider text-white group-hover:text-primary transition-colors">
            GAME NA DAN
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full box-shadow-neon" />
            </a>
          ))}
          
          <a
            href="https://discord.com/invite/XmxuAKHpz3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-sm bg-primary/20 border border-primary/50 text-primary-foreground font-semibold hover:bg-primary hover:text-white hover:box-shadow-neon transition-all duration-300 text-sm"
          >
            Join Discord
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://discord.com/invite/XmxuAKHpz3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-3 rounded bg-primary/20 border border-primary/50 text-primary-foreground font-bold hover:bg-primary transition-colors"
              >
                Join Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
