import { PiInstagramLogoDuotone, PiGithubLogoDuotone } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-[#2D004E] text-white py-12 px-6 border-t border-[#E6E6FA]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="text-xl font-bold tracking-tight mb-2">Mahreen<span className="text-gray-500">.</span>ID</div>
          <p className="text-gray-500 text-sm">Berkarya Untuk Indonesia.</p>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com/mahreenindonesia" target="_blank" className="p-2 text-gray-500 hover:text-white transition-colors">
            <PiInstagramLogoDuotone size={24} />
          </a>
          <a href="#" className="p-2 text-gray-500 hover:text-white transition-colors">
            <PiGithubLogoDuotone size={24} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#E6E6FA]/10 text-center text-[#E6E6FA]/50 text-xs tracking-wider">
        © 2026 Mahreen Indonesia · All rights reserved.
      </div>
    </footer>
  );
}
