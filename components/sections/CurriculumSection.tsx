"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motionVariants";
import { PiMapPinLineDuotone, PiCodeBlockDuotone, PiKanbanDuotone, PiRocketLaunchDuotone, PiCertificateDuotone } from "react-icons/pi";

const curriculumPhases = [
  {
    id: "01",
    title: "Eksplorasi Ide & Kreativitas",
    duration: "Bulan 1",
    icon: <PiKanbanDuotone size={32} />,
    description: "Temukan masalah di sekitarmu dan rancang solusi kreatif yang out-of-the-box.",
    topics: ["Brainstorming Inovasi", "Design Thinking", "Riset Pengguna", "Pembuatan Wireframe"]
  },
  {
    id: "02",
    title: "Penguasaan Alat Digital",
    duration: "Bulan 2-3",
    icon: <PiCodeBlockDuotone size={32} />,
    description: "Pelajari teknologi web modern yang mudah dipahami untuk mewujudkan idemu menjadi nyata.",
    topics: ["Dasar Pemrograman Web", "Membuat Tampilan Estetik", "Logika Interaktif", "Pengenalan AI Tools"]
  },
  {
    id: "03",
    title: "Kolaborasi Pembuatan Karya",
    duration: "Bulan 4-5",
    icon: <PiRocketLaunchDuotone size={32} />,
    description: "Bekerja sama dengan teman-teman dari berbagai latar belakang untuk merakit karyamu.",
    topics: ["Kerja Tim (Agile)", "Pemecahan Masalah Bersama", "Pengembangan Produk", "Uji Coba Karya"]
  },
  {
    id: "04",
    title: "Pameran & Dampak Nyata",
    duration: "Bulan 6",
    icon: <PiCertificateDuotone size={32} />,
    description: "Luncurkan karyamu ke publik dan jadilah inspirasi bagi generasi muda lainnya.",
    topics: ["Presentasi Ide (Pitching)", "Peluncuran Karya", "Evaluasi Dampak", "Selebrasi Kelulusan"]
  }
];

export default function CurriculumSection() {
  return (
    <section id="kurikulum" className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-20 text-center"
        >
          <span className="inline-block bg-[#F8F4FF] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-[#E6E6FA] text-[#4B0082]">
            — Tahapan Berkarya
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] max-w-3xl mx-auto leading-[1.2] tracking-tight">
            Perjalanan Mengubah Ide Menjadi Karya Nyata
          </h2>
          <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Tidak perlu takut jika kamu pemula. Kami menyusun langkah-langkah yang menyenangkan dan suportif untuk memandu kreativitasmu.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-[#4B0082]/20 to-transparent transform -translate-x-1/2"></div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-12 lg:gap-0"
          >
            {curriculumPhases.map((phase, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={phase.id} 
                  variants={fadeInUp}
                  className={`relative flex flex-col lg:flex-row items-center justify-between ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-[#F8F4FF] rounded-full items-center justify-center shadow-[0_0_20px_rgba(75,0,130,0.1)] z-10">
                    <div className="w-3 h-3 bg-[#4B0082] rounded-full"></div>
                  </div>

                  {/* Empty space for alternate side */}
                  <div className="hidden lg:block lg:w-5/12"></div>

                  {/* Content Card */}
                  <div className="w-full lg:w-5/12 group">
                    <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(75,0,130,0.06)] hover:border-[#E6E6FA] transition-all duration-300 relative overflow-hidden">
                      {/* Subtle background glow */}
                      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-fuchsia-500/5 blur-[50px] rounded-full group-hover:bg-fuchsia-500/10 transition-colors pointer-events-none"></div>
                      
                      <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#F8F4FF] flex items-center justify-center text-[#4B0082] group-hover:scale-110 transition-transform duration-300">
                          {phase.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-fuchsia-600 tracking-wider mb-1">{phase.duration}</div>
                          <div className="text-2xl font-bold text-[#111111]">{phase.title}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-8 relative z-10 font-light">
                        {phase.description}
                      </p>
                      
                      <div className="space-y-3 relative z-10">
                        {phase.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4B0082]"></div>
                            <span className="text-sm font-medium text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
