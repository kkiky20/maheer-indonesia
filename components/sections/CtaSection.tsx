"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, hoverButton } from "@/lib/motionVariants";

export default function CtaSection() {
  return (
    <section id="bergabung" className="relative py-24 md:py-32 bg-[#4B0082] overflow-hidden">
      
      {/* Background Samar (Faint White Waves) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-end">
        {/* Wave 1 */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[70%] opacity-[0.03] text-white fill-current">
          <path d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,170.7C672,149,768,107,864,117.3C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        {/* Wave 2 */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[40%] opacity-[0.06] text-white fill-current">
          <path d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,240C840,235,960,181,1080,165.3C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent text-xs font-bold tracking-[0.2em] uppercase">
                ✦ Siap Bergabung?
              </span>
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8 leading-[1.1] tracking-tight"
          >
            Jadilah Bagian dari <br className="hidden md:block"/> Inovator Indonesia
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
          >
            Daftarkan dirimu sekarang sebelum kuota habis. Batas pengumpulan tugas: 1x24 jam setelah soal diterima.
          </motion.p>

          <motion.div variants={scaleIn} className="flex flex-col sm:flex-row justify-center gap-4 mb-20 w-full sm:w-auto">
            <motion.a
              href="#"
              variants={hoverButton}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-3.5 text-base font-semibold text-[#4B0082] bg-white hover:bg-[#E6E6FA] rounded-full transition-colors w-full sm:w-auto text-center shadow-xl shadow-black/20"
            >
              Daftar Sekarang
            </motion.a>
            <motion.a
              href="#program"
              variants={hoverButton}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-3.5 text-base font-semibold text-white bg-transparent border border-white/30 hover:bg-white/10 rounded-full transition-colors w-full sm:w-auto text-center"
            >
              Pelajari Lebih Lanjut
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-10 border-t border-white/10 max-w-lg mx-auto">
            <p className="text-[#E6E6FA]/80 font-light text-lg">
              "Kreativitas adalah kunci perubahan nyata"
            </p>
            <p className="text-[#E6E6FA]/50 text-xs mt-3 uppercase tracking-widest font-semibold">— Tim Mahreen Indonesia</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
