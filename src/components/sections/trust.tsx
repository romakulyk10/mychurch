"use client";

import { useEffect, useRef } from "react";
import FadeIn from "@/components/shared/fade-in";

const CARD_W = 160;
const GAP    = 24;
const STEP   = CARD_W + GAP; // 184px per slot
const N      = 7;            // cards in DOM — fills 960px + one buffer card on each side
const SPEED  = 0.7;          // px per rAF frame ≈ 42px/s @ 60fps

export default function Trust() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const pos   = cards.map((_, i) => i * STEP);

    cards.forEach((c, i) => {
      c.style.willChange  = "transform";
      c.style.transform   = `translateX(${pos[i]}px)`;
    });

    const tick = () => {
      // Move all cards left
      for (let i = 0; i < pos.length; i++) pos[i] -= SPEED;

      // Recycle any card whose right edge left the visible area
      const maxPos    = Math.max(...pos);
      let recycleSlot = 1;
      for (let i = 0; i < pos.length; i++) {
        if (pos[i] + CARD_W < 0) {
          pos[i] = maxPos + STEP * recycleSlot++;
        }
      }

      for (let i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${pos[i]}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    // Pause when tab is hidden to avoid drift
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current);
      else rafRef.current = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

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

      <FadeIn delay={1} className="relative w-full max-w-[960px]">

        {/* Clip container — cards positioned absolute inside */}
        <div ref={trackRef} className="relative h-[128px] overflow-hidden">
          {Array.from({ length: N }, (_, i) => (
            <div
              key={i}
              className="absolute top-0 left-0 rounded-[28px] bg-[#d9d9d9]"
              style={{ width: CARD_W, height: 128 }}
            />
          ))}
        </div>

        {/* Left fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24"
          style={{ background: "linear-gradient(to right, rgba(252,252,252,1) 0%, rgba(252,252,252,0.95) 10%, rgba(252,252,252,0.8) 25%, rgba(252,252,252,0.5) 50%, rgba(252,252,252,0.15) 75%, rgba(252,252,252,0) 100%)" }}
        />
        {/* Right fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          style={{ background: "linear-gradient(to left, rgba(252,252,252,1) 0%, rgba(252,252,252,0.95) 10%, rgba(252,252,252,0.8) 25%, rgba(252,252,252,0.5) 50%, rgba(252,252,252,0.15) 75%, rgba(252,252,252,0) 100%)" }}
        />

      </FadeIn>

    </section>
  );
}
