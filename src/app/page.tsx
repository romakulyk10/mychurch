import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Trust from "@/components/sections/trust";
import Problems from "@/components/sections/problems";
import Features from "@/components/sections/features";
import Workflow from "@/components/sections/workflow";
import Integrations from "@/components/sections/integrations";
import Testimonials from "@/components/sections/testimonials";
import Cta from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#fcfcfc]">
      <Navbar />
      <Hero />
      <Trust />
      <Problems />
      <Features />
      <Workflow />
      <Integrations />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}
