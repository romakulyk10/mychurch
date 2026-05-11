import Navbar from "@/components/sections/navbar";
import AiHero from "@/components/sections/ai-hero";
import AiHowItWorks from "@/components/sections/ai-how-it-works";
import AiFeatures from "@/components/sections/ai-features";
import Cta from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function AiPage() {
  return (
    <main className="flex flex-col items-center bg-[#fcfcfc]">
      <Navbar />
      <AiHero />
      <AiHowItWorks />
      <AiFeatures />
      <Cta />
      <Footer />
    </main>
  );
}
