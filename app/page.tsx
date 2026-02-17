import HeroSection from "@/features/hero/HeroSection";
import AboutSection from "@/features/profile/AboutSection";
import SkillsSection from "@/features/career/SkillsSection";
import ExperienceSection from "@/features/career/ExperienceSection";
import EducationSection from "@/features/career/EducationSection";
import ProjectsSection from "@/features/projects/ProjectsSection";
import ContactSection from "@/features/contact/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
