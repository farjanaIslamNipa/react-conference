import ConferenceSection from "@/components/home/ConferenceSection";
import HeroSection from "@/components/home/HeroSection";

const HomePage = () => {
  return (
    <div>
      <div className="absolute top-[80%] md:top-0 left-0 h-[150px] w-[150px] rounded-full bg-[#2286BE] md:bg-[#7C3EFF] blur-[150px]"></div>
      <div className="absolute top-0 right-0 h-[150px] w-[150px] rounded-full bg-[#BE229C] blur-[160px] z-10"></div>
      <HeroSection />
      <main>
        <ConferenceSection />
      </main>
    </div>
  );
};

export default HomePage;
