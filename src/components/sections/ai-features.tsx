import FadeIn from "@/components/shared/fade-in";

const features = [
  {
    title: "Кожна людина має свою повну історію.",
    text: "Профіль, відвідуваність, статус і зв'язки з сім'єю та групою. Нічого не загубиться і не забудеться навіть через роки.",
    imageLeft: true,
  },
  {
    title: "Аналітика показує де потрібна увага.",
    text: "Ви бачите реальну картину активності церкви і приймаєте рішення на основі цифр а не відчуттів. Щотижня нова точка зору на те що відбувається.",
    imageLeft: false,
  },
  {
    title: "Групи і служіння живуть незалежно від лідера",
    text: "Склад, ролі і відвідуваність зберігаються в системі і не йдуть разом з людиною яка пішла. Наступний лідер бачить все з першого дня",
    imageLeft: true,
  },
];

export default function AiFeatures() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20 bg-[#fcfcfc]">
      <FadeIn className="w-full max-w-[600px] px-5 md:px-0 flex flex-col gap-5 mb-10 md:mb-14">
        <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
          Особливості штучного інтелекту
        </h2>
        <p className="text-base font-normal text-black/80 leading-[1.5]">
          MyChurch збирає людей, групи, служіння та події в єдиному просторі. Ви бачите повну картину без зайвих інструментів і ручної роботи.
        </p>
      </FadeIn>

      {/* Desktop: side-by-side */}
      <div className="hidden md:flex w-full max-w-[780px] flex-col gap-16">
        {features.map((feature, i) => (
          <FadeIn key={i} className={`flex gap-8 items-start ${feature.imageLeft ? "" : "flex-row-reverse"}`}>
            <div className="flex items-center justify-center shrink-0 w-[371px] h-[294px]">
              <div className={feature.imageLeft ? "-rotate-1" : "rotate-1"}>
                <div className="bg-[#d9d9d9] rounded-[16px] w-[366px] h-[288px]" />
              </div>
            </div>
            <div className={`flex flex-col gap-[10px] pt-14 ${feature.imageLeft ? "pr-[90px]" : "pl-[90px]"}`}>
              <h3 className="font-semibold text-black text-[18px] leading-[1.36] tracking-[-0.18px]">
                {feature.title}
              </h3>
              <p className="text-base font-normal text-black/80 leading-[1.4]">
                {feature.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mobile: stacked */}
      <div className="flex md:hidden w-full flex-col gap-10 px-5">
        {features.map((feature, i) => (
          <FadeIn key={i} delay={(i % 3) as 0 | 1 | 2} className="flex flex-col gap-5">
            <div className="relative w-full aspect-[366/288] rounded-2xl overflow-hidden bg-[#d9d9d9]" />
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black text-[17px] leading-[1.36] tracking-[-0.17px]">
                {feature.title}
              </h3>
              <p className="text-[15px] font-normal text-black/80 leading-[1.5]">
                {feature.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
