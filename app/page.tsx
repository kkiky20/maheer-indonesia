import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import MethodologySection from "@/components/sections/MethodologySection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <MethodologySection />
      <CtaSection />
      <Footer />
    </main>
  );
}
