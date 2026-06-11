"use client";

import { motion } from "framer-motion";

export default function CircularDiagram() {
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
      {/* Outer Dashed Ring rotating slowly clockwise */}
      <motion.svg
        className="absolute inset-0 w-full h-full text-[var(--color-purple-600)] opacity-40"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      </motion.svg>

      {/* Middle Ring with animated stroke path rotating counter-clockwise */}
      <motion.svg
        className="absolute w-[80%] h-[80%] text-[var(--color-purple-800)] opacity-80"
        viewBox="0 0 100 100"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {/* Complex segmented ring */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="80 30 20 40 10 20" />
      </motion.svg>

      {/* Center Glowing Core */}
      <motion.div
        className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[var(--color-lavender-200)] to-white rounded-full shadow-[0_0_30px_rgba(107,33,168,0.8)] flex items-center justify-center border border-white/50 backdrop-blur-md"
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="w-4 h-4 bg-[var(--color-purple-600)] rounded-full animate-pulse" />
      </motion.div>
    </div>
  );
}
