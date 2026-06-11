"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, hoverButton } from "@/lib/motionVariants";
import SplitText from "@/components/ui/SplitText";
import ShapeGrid from "@/components/ui/ShapeGrid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { PiRocketLaunchFill, PiSparkleFill } from "react-icons/pi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on the text container
      gsap.to(textRef.current, {
        y: 150,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="beranda" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Lightweight Ambient Mesh Gradient (Zero Performance Cost) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(216, 180, 226, 0.25) 0%, transparent 40%),
            radial-gradient(circle at 90% 30%, rgba(240, 171, 252, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(199, 210, 254, 0.25) 0%, transparent 50%)
          `
        }}
      />

      {/* Dynamic Background Grid (Mildly Optimized) */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid
          speed={0.3} 
          squareSize={60}
          direction='diagonal'
          borderColor='rgba(75,0,130,0.04)' /* Soft purple instead of dirty grey */
          hoverFillColor='rgba(107,33,168,0.6)'
          shape='hexagon'
          hoverTrailAmount={4}
        />
      </div>

      <div ref={textRef} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center text-center will-change-transform">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-block py-1.5 px-5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(75,0,130,0.08)]">
              <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent text-xs font-bold tracking-[0.2em] uppercase">
                ✨ Internship Batch 1
              </span>
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#111111] tracking-tight leading-[1.1] mb-6 drop-shadow-sm px-4 sm:px-0">
            Kembangkan Potensimu.<br />
            <span className="text-[#4B0082]">Berkarya Lewat Kreativitas & Teknologi.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-10 px-6 sm:px-0">
            Wadah bagi generasi muda Indonesia untuk mengekspresikan ide, belajar inovasi digital, dan menciptakan karya nyata yang berdampak bagi negeri.
          </p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-6 sm:px-0">
            {/* Primary Button */}
            <motion.a
              href="#bergabung"
              variants={hoverButton}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="group relative px-9 py-4 text-base font-bold text-white rounded-full overflow-hidden shadow-[0_8px_30px_rgba(75,0,130,0.25)] hover:shadow-[0_12px_40px_rgba(75,0,130,0.4)] transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4B0082] to-fuchsia-700 transition-transform duration-500 group-hover:scale-110"></div>
              {/* Bulat-bulat samar (Faint dots/circles) */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300"></div>
              <span className="relative z-10 tracking-wide">Gabung Sekarang</span>
              <PiRocketLaunchFill className="relative z-10 text-yellow-300 text-lg group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="#program"
              variants={hoverButton}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="group relative overflow-hidden px-9 py-4 text-base font-bold text-[#4B0082] bg-white/50 backdrop-blur-xl border border-gray-200 hover:border-fuchsia-300 hover:bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(75,0,130,0.1)] transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              {/* Bulat bulat samar ungu */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#4B0082_1px,_transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
              
              <span className="relative z-10 tracking-wide">Pelajari Program</span>
              <PiSparkleFill className="relative z-10 text-fuchsia-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator Moved Below Grid */}
          <motion.div 
            variants={fadeInUp} 
            className="mt-16 flex flex-col items-center justify-center opacity-70 cursor-pointer hover:opacity-100 transition-opacity" 
            onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div 
              className="w-6 h-10 border-2 border-[var(--color-purple-600)] rounded-full flex justify-center p-1"
            >
              <motion.div 
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-2 bg-[var(--color-purple-800)] rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
