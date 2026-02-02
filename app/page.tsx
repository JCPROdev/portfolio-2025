import HeroSection from "@/features/hero/HeroSection";
import AboutSection from "@/features/profile/AboutSection";
import SkillsSection from "@/features/career/SkillsSection";
import ExperienceSection from "@/features/career/ExperienceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
