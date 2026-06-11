"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, hoverCard } from "@/lib/motionVariants";
import { PiTargetDuotone, PiCodeDuotone, PiGlobeHemisphereWestDuotone, PiUsersThreeDuotone } from "react-icons/pi";
import DataDiagram from "@/components/ui/DataDiagram";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="program" className="relative py-24 md:py-32 bg-[#FAFAFA] overflow-hidden">
      {/* Static Lightweight Background Orbs */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(240, 171, 252, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 90% 60%, rgba(199, 210, 254, 0.08) 0%, transparent 40%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center md:text-left"
        >
          <span className="inline-block bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_4px_20px_rgba(75,0,130,0.08)] border border-white/60">
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              — Tentang Program
            </span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#4B0082] max-w-2xl leading-[1.2] tracking-tight">
            Mengapa Berkarya Bersama Mahreen Indonesia?
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
            Kami percaya setiap pemuda Indonesia memiliki potensi kreativitas tanpa batas. Kami hadirkan platform untuk mengubah idemu menjadi karya digital.
          </p>
        </motion.div>

        <motion.div 
          ref={cardsRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative z-10 will-change-transform"
        >
          {/* Main Mission Box (Span 8) */}
          <motion.div variants={hoverCard} initial="rest" whileHover="hover" className="lg:col-span-8 bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-md flex items-center justify-center text-fuchsia-600 border border-fuchsia-500/30 shadow-[0_4px_20px_rgba(217,70,239,0.15)]">
                <PiTargetDuotone size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#4B0082]">Misi Kami</h3>
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl font-light">
              Mahreen Indonesia hadir untuk menjadi wadah bagi generasi muda mengekspresikan ide, belajar inovasi digital, 
              serta menciptakan karya nyata. Bersama ekosistem yang kolaboratif, kamu akan dibimbing memadukan 
              kreativitas dan teknologi untuk memecahkan masalah.
            </p>
          </motion.div>

          {/* Interactive CSS Orb Box (Span 4) */}
          <motion.div variants={hoverCard} initial="rest" whileHover="hover" className="lg:col-span-4 h-72 lg:h-auto bg-[#fafafa] rounded-3xl border border-gray-200 relative overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
              <div 
                className="w-48 h-48 rounded-full opacity-50"
                style={{
                  background: 'radial-gradient(circle, rgba(232,121,249,0.4) 0%, rgba(99,102,241,0.2) 50%, transparent 70%)'
                }}
              />
            </div>
            
            <div className="relative z-10 pointer-events-none w-full h-full flex items-center justify-center">
              <DataDiagram />
            </div>

            <div className="absolute top-6 left-6 pointer-events-none z-20">
              <span className="bg-white/60 backdrop-blur-lg text-indigo-700 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/80 shadow-[0_4px_20px_rgba(67,56,202,0.15)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Data Visual
              </span>
            </div>
          </motion.div>

          {/* Small Feature Box 1 (Span 4) */}
          <motion.div variants={hoverCard} initial="rest" whileHover="hover" className="lg:col-span-4 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center text-cyan-600 mb-6 shadow-[0_4px_20px_rgba(6,182,212,0.15)]">
              <PiCodeDuotone size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#4B0082] mb-2">Desain & Teknologi Modern</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Manfaatkan teknologi web dan alat desain modern untuk mengubah ide abstrakmu menjadi aplikasi atau karya digital interaktif.
            </p>
          </motion.div>

          {/* Small Feature Box 2 (Span 4) */}
          <motion.div variants={hoverCard} initial="rest" whileHover="hover" className="lg:col-span-4 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-6 shadow-[0_4px_20px_rgba(16,185,129,0.15)]">
              <PiGlobeHemisphereWestDuotone size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#4B0082] mb-2">Dampak Nyata</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Ciptakan solusi digital yang memberikan manfaat langsung bagi masyarakat dan ekosistem digital Indonesia.
            </p>
          </motion.div>

          {/* Stats Box (Span 4) */}
          <motion.div variants={hoverCard} initial="rest" whileHover="hover" className="lg:col-span-4 bg-[#4B0082] rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-[#E6E6FA]/10">
              <PiUsersThreeDuotone size={180} />
            </div>
            <div className="relative z-10">
              <div className="text-6xl font-light mb-2 tracking-tighter">100<span className="text-[#E6E6FA]">+</span></div>
              <p className="text-[#E6E6FA] font-medium text-sm">Alumni & Inovator Muda</p>
              
              <div className="mt-8 flex gap-6">
                <div>
                  <div className="text-2xl font-semibold">12</div>
                  <div className="text-[10px] text-[#E6E6FA]/70 uppercase tracking-[0.2em] mt-1">Mitra</div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <div className="text-2xl font-semibold">3</div>
                  <div className="text-[10px] text-[#E6E6FA]/70 uppercase tracking-[0.2em] mt-1">Program</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Quote Box (Span 12) */}
          <motion.div variants={hoverCard} initial="rest" whileHover="hover" className="lg:col-span-12 bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-16 text-center border border-[#4B0082]/10 shadow-[0_8px_30px_rgba(75,0,130,0.04)] flex flex-col items-center justify-center">
            <p className="text-xl md:text-3xl lg:text-4xl text-[#4B0082] font-medium tracking-tight max-w-4xl leading-snug">
              "Mari ubah setiap ide-ide gilamu menjadi karya nyata yang memberikan dampak positif bagi sekitarmu."
            </p>
            <p className="mt-8 text-[#4B0082]/60 font-bold tracking-[0.2em] uppercase text-xs">
              — Tim Mahreen Indonesia
            </p>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
