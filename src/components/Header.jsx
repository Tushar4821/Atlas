import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="w-full fixed top-0 left-0 z-50 bg-[#1C1C1C] backdrop-blur-sm border-b border-zinc-800">
  
  <div className="max-w-7xl mx-auto flex items-center justify-between px-10 md:px-24 h-24">
    
   
    <span className="text-white text-xl font-bold tracking-wide ">
      GeoVerse
    </span>

        
        <nav className="hidden md:flex items-center gap-12 text-gray-300 font-medium">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/country" className="hover:text-white transition">Country</a>
            <a href="/quiz" className="hover:text-white transition">Quiz</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-10 py-6 space-y-4 text-gray-300">
          <a href="/" className="block hover:text-white transition">Home</a>
          <a href="/about" className="block hover:text-white transition">About</a>
          <a href="/country" className="block hover:text-white transition">Country</a>
          <a href="/quiz" className="block hover:text-white transition">Quiz</a>
          <a href="/contact" className="block hover:text-white transition">Contact</a>
          
        </div>
      )}
    </header>
  );
}

export default Header;