import ConferenceSection from "@/components/home/ConferenceSection";
import HeroSection from "@/components/home/HeroSection";
import SponsorSection from "@/components/home/SponsorSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <main>
        <ConferenceSection />
        <SponsorSection />
      </main>
    </div>
  );
};

export default HomePage;
