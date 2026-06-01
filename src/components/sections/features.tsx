import Image from "next/image";
import FadeIn from "@/components/shared/fade-in";

const BLOCKS = [
  {
    image: "/feature-member-profile.webp",
    imageLeft: true,
    title: "Кожна людина має свою повну історію.",
    text: "Профіль, відвідуваність, статус і зв'язки з сім'єю та групою. Нічого не загубиться і не забудеться навіть через роки.",
  },
  {
    image: "/feature-analytics.webp",
    imageLeft: false,
    title: "Аналітика показує де потрібна увага.",
    text: "Ви бачите реальну картину активності церкви і приймаєте рішення на основі цифр а не відчуттів. Щотижня нова точка зору на те що відбувається.",
  },
  {
    image: "/feature-groups.webp",
    imageLeft: true,
    title: "Групи і служіння живуть незалежно від лідера",
    text: "Склад, ролі і відвідуваність зберігаються в системі і не йдуть разом з людиною яка пішла. Наступний лідер бачить все з першого дня",
  },
];

export default function Features() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20">

      <FadeIn className="w-full max-w-[600px] px-5 md:px-0 flex flex-col gap-5 mb-10 md:mb-14">
        <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
          Вся церква в одній системі
        </h2>
        <p className="text-base font-normal text-black/80 leading-[1.5]">
          MyChurch збирає людей, групи, служіння та події в єдиному просторі.
          Ви бачите повну картину без зайвих інструментів і ручної роботи.
        </p>
      </FadeIn>

      {/* Desktop: side-by-side */}
      <div className="hidden md:flex w-full max-w-[780px] flex-col gap-16">
        {BLOCKS.map((block, i) => (
          <FadeIn
            key={block.title}
            delay={(i % 2 === 0 ? 0 : 1) as 0 | 1}
            className={`flex items-start gap-8 ${block.imageLeft ? "" : "flex-row-reverse"}`}
          >
            <div className="shrink-0 w-[382px] h-[309px] relative rounded-2xl overflow-hidden">
              <Image
                src={block.image}
                alt={block.title}
                fill
                sizes="(max-width: 768px) 100vw, 382px"
                quality={100}
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className={[
              "flex flex-col gap-2.5 pt-14",
              block.imageLeft ? "pr-[90px]" : "pl-[90px]",
            ].join(" ")}>
              <h3 className="font-semibold text-black text-[18px] leading-[1.36] tracking-[-0.18px]">
                {block.title}
              </h3>
              <p className="text-base font-normal text-black/80 leading-[1.4]">
                {block.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mobile: stacked cards */}
      <div className="flex md:hidden w-full flex-col gap-10 px-5">
        {BLOCKS.map((block, i) => (
          <FadeIn key={block.title} delay={(i % 3) as 0 | 1 | 2} className="flex flex-col gap-5">
            <div className="relative w-full aspect-[382/309] rounded-2xl overflow-hidden">
              <Image
                src={block.image}
                alt={block.title}
                fill
                sizes="(max-width: 768px) 100vw, 382px"
                quality={100}
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black text-[17px] leading-[1.36] tracking-[-0.17px]">
                {block.title}
              </h3>
              <p className="text-[15px] font-normal text-black/80 leading-[1.5]">
                {block.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

    </section>
  );
}
