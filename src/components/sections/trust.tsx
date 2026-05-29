import FadeIn from "@/components/shared/fade-in";

const LOGOS = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

// Duplicate for seamless infinite loop
const TRACK = [...LOGOS, ...LOGOS];

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

      {/* Slider wrapper — relative so overlays position against it */}
      <FadeIn delay={1} className="relative w-full max-w-[960px]">
        {/* Overflow clip on inner div so overlays sit outside clip context */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee w-max">
            {TRACK.map((logo, i) => (
              <div
                key={`${logo.id}-${i}`}
                className="shrink-0 rounded-[28px] bg-[#d9d9d9]"
                style={{ width: 160, height: 128 }}
              />
            ))}
          </div>
        </div>

        {/* Left fade — ease curve to avoid hard edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24"
          style={{ background: "linear-gradient(to right, rgba(252,252,252,1) 0%, rgba(252,252,252,0.95) 10%, rgba(252,252,252,0.8) 25%, rgba(252,252,252,0.5) 50%, rgba(252,252,252,0.15) 75%, rgba(252,252,252,0) 100%)" }}
        />
        {/* Right fade — ease curve to avoid hard edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          style={{ background: "linear-gradient(to left, rgba(252,252,252,1) 0%, rgba(252,252,252,0.95) 10%, rgba(252,252,252,0.8) 25%, rgba(252,252,252,0.5) 50%, rgba(252,252,252,0.15) 75%, rgba(252,252,252,0) 100%)" }}
        />
      </FadeIn>

    </section>
  );
}
