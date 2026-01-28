import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ChallengeSection from "./components/ChallengeSection";
import SolutionSection from "./components/SolutionSection";
import ReachSection from "./components/ReachSection";
import AboutTeamSection from "./components/AboutTeamSection";
import TeamOrganizationSection from "./components/TeamOrganizationSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col" data-node-id="138:3">
      <Navbar />
      <div id="home" className="flex flex-col md:overflow-hidden lg:overflow-hidden scroll-mt-[100px]">
        <HeroSection />
      </div>
      <section id="about" className="scroll-mt-[100px]">
        <AboutSection />
      </section>
      <section id="challenge" className="scroll-mt-[100px]">
        <ChallengeSection />
      </section>
      <section id="solution" className="scroll-mt-[100px]">
        <SolutionSection />
      </section>
      <section id="reach" className="scroll-mt-[100px]">
        <ReachSection />
      </section>
      <section id="team" className="scroll-mt-[100px]">
        <AboutTeamSection />
      </section>
      <TeamOrganizationSection />
      <footer id="contact" className="scroll-mt-[100px]">
        <Footer />
      </footer>

    </div>
  );
}
