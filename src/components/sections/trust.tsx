import Image from "next/image";
import FadeIn from "@/components/shared/fade-in";

const LOGOS = [
  { id: 1, src: null, alt: "Церква партнер 1" },
  { id: 2, src: null, alt: "Церква партнер 2" },
  { id: 3, src: "/new-life-logo.png", alt: "New Life Church" },
  { id: 4, src: null, alt: "Церква партнер 4" },
  { id: 5, src: null, alt: "Церква партнер 5" },
  { id: 6, src: null, alt: "Церква партнер 6" },
];

export default function Trust() {
  return (
    <section className="w-full flex flex-col items-center pb-16 md:pb-20">

      <FadeIn className="w-full max-w-[600px] px-5 md:px-0 flex flex-col gap-5 mb-10 md:mb-14">
        <h2 className="font-semibold text-black leading-[1.2] text-[28px] md:text-[36px] tracking-[-0.84px] md:tracking-[-1.08px]">
          Нам довіряють
        </h2>
        <p className="font-normal text-black/80 leading-[1.5] text-[16px]">
          Церкви амбасадори, які вирішили що порядок важливіший за звичний хаос.
        </p>
      </FadeIn>

      {/* Logos — horizontal scroll on mobile, fixed row on desktop */}
      <FadeIn delay={1} className="relative w-full overflow-x-auto md:overflow-hidden">
        <div className="flex gap-4 md:gap-6 items-center px-5 md:justify-center min-w-max md:min-w-0">
          {LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="shrink-0 rounded-[28px] md:rounded-[40px] overflow-hidden flex items-center justify-center bg-[#d9d9d9] w-32 h-24 md:w-40 md:h-32"
            >
              {logo.src && (
                <div className="relative w-[60px] h-[60px] md:w-[73px] md:h-[73px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

    </section>
  );
}
