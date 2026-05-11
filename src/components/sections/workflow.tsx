import FadeIn from "@/components/shared/fade-in";

const STEPS = [
  {
    title: "Відкрили систему",
    text: "Дашборд одразу показує стан церкви, нових людей, активність груп, найближчі події.",
  },
  {
    title: "Перевірили людей",
    text: "Побачили хто не з'являвся, оновив статуси і переніс контакти в потрібну групу.",
  },
  {
    title: "Оновили дані",
    text: "Додали нового учасника, відмітили явку на групі, зафіксував зміну в служінні.",
  },
  {
    title: "Проаналізували ріст",
    text: "Переглянули динаміку за місяць і зрозуміли де потрібна увага.",
  },
];

export default function Workflow() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20">
      <div className="w-full max-w-[600px] px-5 md:px-0 flex flex-col gap-10 md:gap-14">

        <FadeIn className="flex flex-col gap-5">
          <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
            Як виглядає робота щодня
          </h2>
          <p className="text-base font-normal text-black/80 leading-[1.5]">
            Жодних таблиць і перемикань між чатами. Ось як виглядає типовий день з MyChurch
          </p>
        </FadeIn>

        <div className="flex flex-col">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <FadeIn key={step.title} delay={(i % 3) as 0 | 1 | 2 | 3} className="flex gap-4">

                <div className="flex flex-col items-center shrink-0">
                  {/* Circle with 1.5px stroke */}
                  <div className="shrink-0 relative w-9 h-9">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <circle cx="18" cy="18" r="17.25" fill="#007aff" stroke="#005fc6" strokeWidth="1.5" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-[17px] leading-none">
                      {i + 1}
                    </span>
                  </div>
                  {/* Dashed line: dash 4, gap 2, 1.5px wide */}
                  {!isLast && (
                    <div
                      className="flex-1 min-h-[56px] md:min-h-[68px] w-[1.5px]"
                      style={{
                        backgroundImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 4px, transparent 4px, transparent 6px)",
                      }}
                    />
                  )}
                </div>

                <div className={["flex flex-col gap-2", isLast ? "pb-0" : "pb-8 md:pb-11"].join(" ")}>
                  <h3 className="font-semibold text-black text-[17px] md:text-[18px] leading-[1.36] tracking-[-0.18px]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] md:text-base font-normal text-black/80 leading-[1.5] tracking-[-0.16px]">
                    {step.text}
                  </p>
                </div>

              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
