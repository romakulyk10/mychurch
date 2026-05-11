import Link from "next/link";
import FadeIn from "@/components/shared/fade-in";

export default function Hero() {
  return (
    <section className="bg-white w-full flex flex-col items-center pt-12 md:pt-20 pb-16 md:pb-[104px] gap-16 md:gap-28 relative overflow-hidden">

      <div className="flex flex-col items-center gap-8 w-full max-w-[600px] px-5 md:px-0 text-center">
        <FadeIn className="flex flex-col gap-5 items-center w-full">
          <h1 className="font-semibold text-black leading-[1.12] w-full text-[36px] sm:text-[44px] md:text-[53px] tracking-[-1px] md:tracking-[-1.59px]">
            Більше не губіть людей
            <br />
            групи та служіння
          </h1>
          <p className="text-base font-normal text-black/80 leading-[1.5] max-w-[447px]">
            MyChurch — система, яка допомагає церкві вести облік людей, сімей,
            малих груп, служінь і відвідуваності в одному місці. Без таблиць.
            Без хаосу.
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <Link
            href="#try"
            className="btn-primary relative flex items-center justify-center h-12 w-[271px] rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#007aff] rounded-full" />
            <span className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_1px_#8cc2ff]" />
            <span className="absolute inset-0 rounded-full border border-[#005fc6]" />
            <span className="relative text-white font-semibold text-base tracking-[-0.32px] leading-[1.4] whitespace-nowrap">
              Спробувати безкоштовно
            </span>
          </Link>
        </FadeIn>
      </div>

      <FadeIn
        delay={2}
        className="relative shrink-0 overflow-hidden rounded-[24px] md:rounded-[40px] bg-[#f8f8f8] w-full max-w-[960px] mx-5 md:mx-8 aspect-[960/592] border-[8px] md:border-[12px] border-black/[0.08] shadow-[inset_0px_0px_40px_0px_rgba(255,255,255,0.8),inset_0px_0px_60px_0px_rgba(255,255,255,0.4),inset_0px_2px_2px_0px_rgba(0,0,0,0.4)]"
      >
        <div className="w-full h-full bg-[#f8f8f8]" />
      </FadeIn>

      <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none bg-gradient-to-t from-[#fcfcfc] to-transparent" />
    </section>
  );
}
