import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col" data-node-id="138:3">
      <div className="min-h-screen md:h-screen flex flex-col md:overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
      <AboutSection />
    </div>
  );
}
