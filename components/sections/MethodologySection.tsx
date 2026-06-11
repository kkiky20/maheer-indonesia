"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motionVariants";
import { PiGithubLogoDuotone, PiTerminalWindowDuotone, PiChatsTeardropDuotone, PiGitMergeDuotone, PiCpuDuotone } from "react-icons/pi";

const stackList = [
  "Ideation", "Figma", "UI/UX Design", "Web Tech", 
  "HTML & CSS", "JavaScript", "React", "AI Tools", 
  "Notion", "Trello", "Problem Solving", "Canva"
];

export default function MethodologySection() {
  return (
    <section id="metodologi" className="relative py-24 md:py-32 bg-[#FAFAFA] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-2xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-300/10 via-transparent to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-2xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#4B0082]/10 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-gray-200 text-[#4B0082] shadow-sm">
              — Cara Kami Mendukungmu
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-6">
              Lingkungan Belajar yang Menyenangkan
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
              Kami menyediakan ekosistem yang suportif bagi pemuda Indonesia untuk belajar, berkolaborasi, dan menciptakan karya digital inovatif tanpa tekanan.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#4B0082] text-white flex items-center justify-center shadow-lg shadow-[#4B0082]/20">
                  <PiChatsTeardropDuotone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-2">Mentorship Interaktif</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Belajar langsung dari praktisi yang tidak hanya mengajar, tapi juga membimbing dan memantik kreativitasmu setiap saat.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-fuchsia-600 text-white flex items-center justify-center shadow-lg shadow-fuchsia-600/20">
                  <PiGitMergeDuotone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-2">Kolaborasi Tim</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Temukan teman satu frekuensi. Berkumpul dan bertukar ide dengan inovator muda dari berbagai daerah di Indonesia.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
                  <PiTerminalWindowDuotone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-2">Praktik Langsung</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Bukan sekadar teori atau tugas di atas kertas. Kamu akan langsung terjun merancang dan meluncurkan karya nyata.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Tech Stack Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            {/* Tech Stack Bento Box */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[#E6E6FA]/40 pointer-events-none">
                <PiCpuDuotone size={200} className="rotate-12" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <PiGithubLogoDuotone size={28} className="text-[#4B0082]" />
                  <h3 className="text-2xl font-bold text-[#111111]">Ecosystem Stack</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {stackList.map((tech, i) => (
                    <motion.span 
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-[#FAFAFA] border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl cursor-default hover:bg-[#F8F4FF] hover:border-[#4B0082]/30 hover:text-[#4B0082] transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-10 p-5 bg-[#111111] rounded-2xl font-mono text-xs sm:text-sm text-gray-300 shadow-inner overflow-hidden">
                  <div className="flex gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p><span className="text-fuchsia-400">~/pemuda-kreatif</span>$ npx mulai-berkarya</p>
                  <p className="text-green-400 mt-1">Mengumpulkan ide-ide brilian...</p>
                  <p className="text-green-400">Merancang desain UI/UX yang estetik...</p>
                  <p className="mt-2 text-gray-400">Menulis baris kode pertama...</p>
                  <p className="mt-4"><span className="text-fuchsia-400">~/pemuda-kreatif</span>$ npm run luncurkan-karya</p>
                  <p className="mt-1 text-white">🚀 Siap untuk mengubah dunia!</p>
                  <p className="text-green-400 font-bold mt-1">✓ Karya berhasil dipublikasikan</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
