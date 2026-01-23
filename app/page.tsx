import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ChallengeSection from "./components/ChallengeSection";
import SolutionSection from "./components/SolutionSection";
import AboutTeamSection from "./components/AboutTeamSection";
import TeamOrganizationSection from "./components/TeamOrganizationSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col" data-node-id="138:3">
      <Navbar />
      <div className="flex flex-col md:overflow-hidden lg:overflow-hidden">
        <HeroSection />
      </div>
      <AboutSection />
      <ChallengeSection />
      <SolutionSection />
      <AboutTeamSection />
      <TeamOrganizationSection />
      <Footer />

    </div>
  );
}
