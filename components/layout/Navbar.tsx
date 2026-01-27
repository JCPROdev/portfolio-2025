"use client";

import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  const navigationItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    // Mobile First Navbar
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Name */}
          <h1 className="text-xl font-bold text-white">
            Jomar<span className="text-indigo-400">.dev</span>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 md:ml-0 lg:ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  className="text-gray-300 px-3 md:px-0 lg:px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-4 text-white border-indigo-400 font-semibold"
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
          <button
            className="md:hidden p-2 text-white hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 " />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
