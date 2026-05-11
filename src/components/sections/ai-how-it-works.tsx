import FadeIn from "@/components/shared/fade-in";

const steps = [
  {
    title: "Ставите запитання",
    text: "Просто напишіть ШІ-помічнику в чаті — він розуміє контекст вашої церкви і дає конкретні відповіді.",
  },
  {
    title: "Отримуєте аналіз",
    text: "Система сама аналізує дані: активність членів, відвідуваність, динаміку груп і пропонує що зробити.",
  },
];

export default function AiHowItWorks() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20 bg-[#fcfcfc]">
      <div className="w-full max-w-[600px] px-5 md:px-0 flex flex-col gap-10 md:gap-14">
        <FadeIn className="flex flex-col gap-5">
          <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
            Як це працює
          </h2>
          <p className="text-base font-normal text-black/80 leading-[1.5]">
            Не стартап заради стартапу — а продукт, який виріс з розуміння як живе церква зсередини
          </p>
        </FadeIn>

        <FadeIn delay={1} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-6 md:gap-y-10">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col gap-5 md:gap-6">
              <div className="bg-[#d9d9d9] rounded-[16px] w-full aspect-square" />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-black text-[17px] md:text-[18px] leading-[1.36] tracking-[-0.18px]">
                  {step.title}
                </h3>
                <p className="text-[15px] md:text-base font-normal text-black/80 leading-[1.4]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
