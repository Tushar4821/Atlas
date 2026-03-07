import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import worldMap from "../assets/map.webp";

function Footer() {
  return (
    <footer className="relative bg-[#1C1C1C] text-gray-300 overflow-hidden">
      
      {/* World Map Background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url(${worldMap})`
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Geo<span className="text-blue-500">Verse</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-sm">
            Explore the world with detailed country information,
            culture, geography and global insights — all in one place.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/country" className="hover:text-blue-400 transition">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Connect With Us
          </h3>
          <div className="flex space-x-6 text-xl">
            <a href="#" className="hover:text-blue-400 transition transform hover:-translate-y-1">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-400 transition transform hover:-translate-y-1">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-blue-400 transition transform hover:-translate-y-1">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-gray-700 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} 
        <span className="text-white"> GeoVerse</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;