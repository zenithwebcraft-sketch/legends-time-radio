import HeroSection from "@/components/HeroSection";
import PlayerBar from "@/components/PlayerBar";
import AboutSection from "@/components/AboutSection";
import ProgrammingSection from "@/components/ProgrammingSection";
import VideoSection from "@/components/VideoSection";
import ChatSection from "@/components/ChatSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProgrammingSection />
      <VideoSection />
      <ChatSection />
      <ContactSection />
      <PlayerBar />
    </div>
  );
};

export default Index;
