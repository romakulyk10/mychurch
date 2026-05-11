import Navbar from "@/components/sections/navbar";
import AboutHero from "@/components/sections/about-hero";
import AboutStory from "@/components/sections/about-story";
import AboutMission from "@/components/sections/about-mission";
import AboutAmbassadors from "@/components/sections/about-ambassadors";
import Cta from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center bg-[#fcfcfc]">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutAmbassadors />
      <Cta />
      <Footer />
    </main>
  );
}
