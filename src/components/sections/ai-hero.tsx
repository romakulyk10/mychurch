import FadeIn from "@/components/shared/fade-in";

export default function AiHero() {
  return (
    <section className="bg-white w-full flex flex-col items-center gap-12 md:gap-16 pt-12 md:pt-20 pb-16 md:pb-[104px] relative overflow-hidden">
      <FadeIn className="w-full max-w-[600px] px-5 md:px-0 flex flex-col items-center gap-5 text-center">
        <h1 className="font-semibold text-black text-[36px] sm:text-[44px] md:text-[53px] leading-[1.12] tracking-[-1px] md:tracking-[-1.59px]">
          ШІ-помічник для вашої церкви
        </h1>
        <p className="text-base font-normal text-black/80 leading-[1.5] max-w-[447px]">
          Система самостійно аналізує активність, нагадує про людей і підказує де потрібна ваша увага. Без ручної роботи.
        </p>
      </FadeIn>

      <FadeIn
        delay={2}
        className="relative w-full max-w-[960px] mx-5 md:mx-8 aspect-[960/592] rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#f8f8f8]"
      />

      <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none bg-gradient-to-t from-[#fcfcfc] to-transparent" />
    </section>
  );
}
