import Navbar from "@/components/darkneo/Navbar";
import HeroSection from "@/components/darkneo/HeroSection";
import JourneySection from "@/components/darkneo/JourneySection";
import FooterBanner from "@/components/darkneo/FooterBanner";
import StickyChat from "@/components/darkneo/StickyChat";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden dot-grid min-h-screen">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <FooterBanner />
      <StickyChat />
    </main>
  );
}
