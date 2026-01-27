"use client";

import { Menu, X, Download } from "lucide-react";

function Navbar() {
  return (
    // Mobile First Navbar
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Name */}
          <h1 className="text-xl font-bold text-white">
            Jomar<span className="text-indigo-400">.dev</span>
          </h1>

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
