"use client";

import { motion } from "framer-motion";

export default function DataDiagram() {
  // Heights for the background bar charts
  const bars = [35, 65, 40, 85, 55, 75, 45];

  return (
    <div className="relative w-11/12 md:w-3/4 h-3/5 flex items-end justify-center">
      {/* Semi-transparent animated Bar Charts */}
      <div className="absolute inset-0 flex items-end justify-between px-2 md:px-6 opacity-40">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-4 md:w-6 bg-gradient-to-t from-[var(--color-purple-900)] to-white/60 rounded-t-sm"
            animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.6}%`, `${h}%`] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* Smooth Spline Line Chart overlapping the bars */}
      <svg 
        className="absolute inset-0 w-full h-full overflow-visible drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" 
        viewBox="0 0 200 100" 
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 5 85 C 30 85, 45 35, 75 45 S 120 15, 150 30 S 180 70, 195 60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
        />
        
        {/* Node 1 */}
        <motion.circle 
          cx="75" cy="45" r="4" 
          fill="var(--color-purple-700)" 
          stroke="white" 
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.4, 0.8, 0.8] }} 
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }} 
        />
        
        {/* Node 2 */}
        <motion.circle 
          cx="150" cy="30" r="4" 
          fill="var(--color-purple-700)" 
          stroke="white" 
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 0], scale: [0.8, 0.8, 1.5, 0.8] }} 
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }} 
        />
      </svg>
    </div>
  );
}
