import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import PlayerBar, { PlayerBarHandle } from "@/components/PlayerBar";
import AboutSection from "@/components/AboutSection";
import ProgrammingSection from "@/components/ProgrammingSection";
import VideoSection from "@/components/VideoSection";
import ChatSection from "@/components/ChatSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const playerRef = useRef<PlayerBarHandle>(null);

  const handlePlayClick = () => {
    playerRef.current?.toggle();
  };
  return (
    <div className="min-h-screen bg-background">
      <HeroSection onPlayClick={handlePlayClick} />
      <AboutSection />
      <ProgrammingSection />
      <VideoSection />
      <ChatSection />
      <ContactSection />
      <PlayerBar ref={playerRef} />
    </div>
  );
};

export default Index;
