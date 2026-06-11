"use client";

import { motion } from "framer-motion";

export default function AnimatedDiagram() {
  // Array of bars with different animation keyframes to make it look dynamic
  const bars = [
    { height: ["30%", "70%", "40%", "85%", "30%"] },
    { height: ["50%", "30%", "80%", "50%", "50%"] },
    { height: ["20%", "90%", "60%", "40%", "20%"] },
    { height: ["80%", "40%", "95%", "60%", "80%"] },
    { height: ["40%", "85%", "30%", "70%", "40%"] },
  ];

  return (
    <div className="w-full h-full relative flex items-end justify-center gap-2 md:gap-4 px-6 pb-8 pt-12 overflow-hidden">
      {/* Decorative background grid lines */}
      <div className="absolute inset-x-8 inset-y-12 flex flex-col justify-between opacity-10 pointer-events-none">
         <div className="w-full border-b-2 border-dashed border-[var(--color-purple-800)]" />
         <div className="w-full border-b-2 border-dashed border-[var(--color-purple-800)]" />
         <div className="w-full border-b-2 border-dashed border-[var(--color-purple-800)]" />
         <div className="w-full border-b-2 border-dashed border-[var(--color-purple-800)]" />
      </div>

      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className="w-10 md:w-14 bg-gradient-to-t from-[var(--color-purple-700)] to-[var(--color-purple-400)] rounded-t-2xl shadow-[0_4px_12px_rgba(107,33,168,0.3)] relative z-10 border border-white/20 border-b-0"
          animate={{ 
            height: bar.height,
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.4, // Stagger effect for a wave motion
          }}
        />
      ))}
    </div>
  );
}
