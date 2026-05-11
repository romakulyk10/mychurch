import FadeIn from "@/components/shared/fade-in";

export default function AboutHero() {
  return (
    <section className="bg-white w-full flex flex-col items-center gap-10 md:gap-16 pt-12 md:pt-20 pb-0 relative overflow-hidden">
      {/* Tilted image frame */}
      <FadeIn className="relative flex items-center justify-center rounded-[24px] md:rounded-[40px] shadow-[0px_2.3px_8.7px_0px_rgba(0,0,0,0.04),0px_10px_16px_0px_rgba(0,0,0,0.04)] shrink-0 overflow-hidden w-full max-w-[744px] mx-5 md:mx-8 aspect-[744/432] rotate-1">
        <div className="bg-[#d9d9d9] border-4 md:border-8 border-white rounded-[24px] md:rounded-[40px] w-full h-full" />
      </FadeIn>

      {/* Text content */}
      <FadeIn delay={1} className="flex flex-col gap-5 w-full max-w-[600px] px-5 md:px-0 pb-12 md:pb-20">
        <h1 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
          Ми будуємо інструмент для тих, хто будує церкву
        </h1>
        <p className="text-base font-normal text-black/80 leading-[1.5] max-w-[447px]">
          MyChurch народився з реального болю — коли пастори витрачають години на таблиці замість людей
        </p>
      </FadeIn>

      <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none bg-gradient-to-t from-[#fcfcfc] to-transparent" />
    </section>
  );
}
