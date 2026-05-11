import FadeIn from "@/components/shared/fade-in";

export default function AboutMission() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20 bg-[#fcfcfc]">
      <FadeIn className="w-full max-w-[600px] px-5 md:px-0 flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-14">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
            Наша місія
          </h2>
          <p className="text-base font-normal text-black/80 leading-[1.5]">
            Ми віримо що пастори і лідери мають займатись людьми а не адміністративною рутиною
          </p>
        </div>
        <div className="shrink-0 w-[80px] h-[80px] md:w-[104px] md:h-[104px] rounded-[16px] bg-[#d9d9d9]" />
      </FadeIn>
    </section>
  );
}
