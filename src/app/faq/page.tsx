import Navbar from "@/components/sections/navbar";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function FaqPage() {
  return (
    <main className="flex flex-col items-center bg-[#fcfcfc]">
      <Navbar />
      <Faq />
      <Footer />
    </main>
  );
}
