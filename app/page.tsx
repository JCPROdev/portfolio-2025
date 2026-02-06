import HeroSection from "@/features/hero/HeroSection";
import AboutSection from "@/features/profile/AboutSection";
import SkillsSection from "@/features/career/SkillsSection";
import ExperienceSection from "@/features/career/ExperienceSection";
import EducationSection from "@/features/career/EducationSection";
import ProjectsSection from "@/features/projects/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </main>
  );
}
