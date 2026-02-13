"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const selector = href.startsWith("#") ? href : `#${href}`;

    // Cerramos el menu mobile primero así el overlay no bloquea el scrolling en mobile
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    // Mobile First Navbar
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Name */}
          <motion.div className="shrink-0" whileHover={{ scale: 1.05 }}>
            <h1 className="text-xl font-bold text-white">
              Jomar<span className="text-indigo-400">.dev</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 md:ml-0 lg:ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white px-3 md:px-0 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-4 text-white border-indigo-400 hover:bg-indigo-500 font-semibold cursor-pointer "
                >
                  <Download className="mr-2 md:mr-0 lg:mr-2 h-4 w-4" />
                  <span className="inline md:hidden lg:inline">
                    Descargar CV
                  </span>
                </Button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-gray-700 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.div
                className="px-3 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-white border-indigo-400 hover:bg-indigo-500 cursor-pointer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
