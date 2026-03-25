import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ContactSection from "@/components/ContactSection";
import AIChatbot from "@/components/AIChatbot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ArchitectureSection />
      <ContactSection />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
