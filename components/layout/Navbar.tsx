"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleMobileMenu, setMobileMenuOpen } from "@/store/uiSlice";
import { motion, AnimatePresence } from "framer-motion";
import { PiListBold, PiXBold, PiSparkleFill } from "react-icons/pi";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Program", href: "#program" },
  { name: "Bergabung", href: "#bergabung" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector((state: RootState) => state.ui.mobileMenuOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    dispatch(setMobileMenuOpen(false));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white/90 backdrop-blur-xl border-black/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#111111] tracking-tight">
                Mahreen<span className="text-gray-400">.</span>ID
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 font-medium hover:text-[#111111] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#bergabung"
              className="group relative px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden transition-all hover:-translate-y-0.5 active:scale-95 shadow-[0_4px_20px_rgba(75,0,130,0.25)] hover:shadow-[0_8px_25px_rgba(75,0,130,0.4)] flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4B0082] to-fuchsia-700 transition-transform duration-500 group-hover:scale-110"></div>
              {/* Bulat-bulat samar (Faint dots/circles) */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_1px,_transparent_1px)] bg-[size:8px_8px]"></div>
              <div className="absolute top-[-50%] left-[-10%] w-[40%] h-[200%] bg-white/10 blur-[8px] rotate-12 group-hover:translate-x-[300%] transition-transform duration-700 ease-out"></div>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300"></div>
              <span className="relative z-10 tracking-wide">Daftar Sekarang</span>
              <PiSparkleFill className="relative z-10 text-yellow-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => dispatch(toggleMobileMenu())} 
              className="p-2 text-gray-600 hover:text-[#4B0082] transition-colors"
            >
              {mobileMenuOpen ? <PiXBold size={24} /> : <PiListBold size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-[rgba(107,33,168,0.1)]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-[var(--color-text-primary)] font-medium text-lg block py-2 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#bergabung"
                onClick={handleLinkClick}
                className="mt-2 relative overflow-hidden flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4B0082] to-fuchsia-700 shadow-lg shadow-[#4B0082]/20 hover:shadow-[#4B0082]/40 transition-all rounded-full active:scale-95 group"
              >
                {/* Bulat-bulat samar */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_1px,_transparent_1px)] bg-[size:8px_8px] pointer-events-none"></div>
                <span className="relative z-10 tracking-wide">Daftar Sekarang</span> 
                <PiSparkleFill className="relative z-10 text-yellow-300 text-lg group-active:rotate-12 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
