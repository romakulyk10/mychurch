"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/shared/fade-in";

const ambassadors = [
  {
    id: "nove-zhyttia",
    name: "Нове Життя",
    description: "Одна з перших церков, яка приєдналась до MyChurch. Понад 500 членів, кілька малих груп та активне служіння молоді.",
    website: "#",
    websiteLabel: 'Перейти до сайту "Нове життя"',
    logoColor: "#052e2a",
    logoInitials: "НЖ",
  },
  {
    id: "svitlo",
    name: "Церква Світло",
    description: "Активна громада з Харкова. Використовує MyChurch для обліку відвідуваності та координації малих груп.",
    website: "#",
    websiteLabel: 'Перейти до сайту "Церква Світло"',
    logoColor: "#1a3a6b",
    logoInitials: "СВ",
  },
  {
    id: "zhyvyi",
    name: "Живий Бог",
    description: "Церква з Дніпра з розгалуженою мережею домашніх груп. Автоматизували комунікацію через платформу.",
    website: "#",
    websiteLabel: 'Перейти до сайту "Живий Бог"',
    logoColor: "#5c2a00",
    logoInitials: "ЖБ",
  },
  {
    id: "blagodat",
    name: "Благодать",
    description: "Одеська церква, яка за місяць перейшла від таблиць до повноцінної системи управління громадою.",
    website: "#",
    websiteLabel: 'Перейти до сайту "Благодать"',
    logoColor: "#2a1a5c",
    logoInitials: "БЛ",
  },
  {
    id: "slovo",
    name: "Слово Істини",
    description: "Церква з Львова. Активно використовує модуль аналітики для відстеження зростання громади.",
    website: "#",
    websiteLabel: 'Перейти до сайту "Слово Істини"',
    logoColor: "#3a1a00",
    logoInitials: "СІ",
  },
  {
    id: "nadia",
    name: "Надія",
    description: "Запорізька церква, яка завдяки MyChurch скоротила час адміністрування вдвічі.",
    website: "#",
    websiteLabel: 'Перейти до сайту "Надія"',
    logoColor: "#003a2a",
    logoInitials: "НД",
  },
];

export default function AboutAmbassadors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shift, setShift] = useState(0);
  const active = ambassadors[activeIndex];

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const bounds = useRef({ min: 0, max: 0 });
  const drag = useRef({ on: false, startX: 0, startShift: 0, moved: false });

  // Recalculate scroll bounds when active changes (no centering — starts from left)
  useEffect(() => {
    const container = containerRef.current;
    const lastEl = logoRefs.current[ambassadors.length - 1];
    if (!container || !lastEl) return;

    const cw = container.offsetWidth;
    const trackEnd = lastEl.offsetLeft + lastEl.offsetWidth;

    bounds.current = {
      max: 0,
      min: Math.min(0, cw - trackEnd),
    };

    // Clamp current shift in case bounds changed
    setShift((s) => Math.min(bounds.current.max, Math.max(bounds.current.min, s)));
  }, [activeIndex]);

  const clamp = (v: number) => Math.min(bounds.current.max, Math.max(bounds.current.min, v));

  const onPointerDown = (e: React.PointerEvent) => {
    const w = wrapperRef.current;
    if (!w) return;
    drag.current = { on: true, startX: e.clientX, startShift: shift, moved: false };
    w.style.transition = "none";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.on) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 3) drag.current.moved = true;
    setShift(clamp(drag.current.startShift + delta));
  };

  const onPointerUp = () => {
    drag.current.on = false;
    // Reset moved after click fires so onClick still sees the drag state
    if (drag.current.moved) setTimeout(() => { drag.current.moved = false; }, 0);
  };

  const handleLogoClick = (idx: number) => {
    if (drag.current.moved) return;
    setActiveIndex(idx);
  };

  function prev() { setActiveIndex((i) => (i - 1 + ambassadors.length) % ambassadors.length); }
  function next() { setActiveIndex((i) => (i + 1) % ambassadors.length); }

  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20 bg-[#fcfcfc]">

      {/* Header */}
      <FadeIn className="w-full max-w-[600px] px-5 md:px-0 flex flex-col gap-5 mb-10 md:mb-14">
        <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
          Наші амбасадори
        </h2>
        <p className="text-base font-normal text-black/80 leading-[1.5]">
          Церкви, які вже будують своє служіння разом з MyChurch
        </p>
      </FadeIn>

      {/* Logo strip — закоментовано, повернути коли буде більше церков
      <FadeIn delay={1} className="relative w-full mb-10 md:mb-14">
        <div
          ref={containerRef}
          className="relative overflow-hidden w-full max-w-[600px] mx-auto px-5 md:px-0"
        >
          <div
            ref={wrapperRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="relative flex gap-4 items-center h-[74px] select-none"
            style={{
              transform: `translateX(${shift}px)`,
              cursor: "grab",
              willChange: "transform",
            }}
          >
            {ambassadors.map((amb, i) => {
              const isActive = i === activeIndex;
              const isHovered = hoveredIndex === i;
              return (
                <button
                  key={amb.id}
                  ref={(el) => { logoRefs.current[i] = el; }}
                  onClick={() => handleLogoClick(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="shrink-0 rounded-[14px] transition-all duration-300"
                  style={{
                    width:  isActive ? 72 : 64,
                    height: isActive ? 72 : 64,
                    backgroundColor: isActive || isHovered ? amb.logoColor : "#D9D9D9",
                  }}
                  aria-label={amb.name}
                />
              );
            })}
          </div>

          {shift < -2 && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[72px] w-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, rgba(252,252,252,1) 0%, rgba(252,252,252,0.8) 30%, rgba(252,252,252,0) 100%)" }}
            />
          )}
          {shift > bounds.current.min + 2 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[72px] w-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, rgba(252,252,252,1) 0%, rgba(252,252,252,0.8) 30%, rgba(252,252,252,0) 100%)" }}
            />
          )}
        </div>
      </FadeIn>
      */}

      {/* Church card */}
      <FadeIn delay={1} className="w-full max-w-[600px] px-5 md:px-0 relative">

        {/* Arrows — закоментовано, повернути коли буде більше церков
        <button
          onClick={prev}
          className="absolute left-0 md:-left-[60px] top-[155px] md:top-[175px] -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.15),0px_3px_2px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_4px_4px_0px_rgba(0,0,0,0.08)] transition-shadow"
          aria-label="Попередній"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 3L7 12L17 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        */}

        <div className="flex flex-col gap-5 md:gap-6">
          <div className="w-full h-[260px] md:h-[360px] rounded-[16px] bg-[#d9d9d9]" />
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black text-[17px] md:text-[18px] leading-[1.36] tracking-[-0.18px]">
                {active.name}
              </h3>
              <p className="text-[15px] md:text-base font-normal text-black/80 leading-[1.4]">
                {active.description}
              </p>
            </div>
            <Link
              href={active.website}
              className="flex items-center gap-2 font-semibold text-[16px] md:text-[18px] leading-[1.36] tracking-[-0.18px] hover:opacity-80 transition-opacity"
              style={{ color: active.logoColor }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 12.5306L13.2806 15.5306C13.1399 15.6714 12.949 15.7504 12.75 15.7504C12.551 15.7504 12.3601 15.6714 12.2194 15.5306C12.0786 15.3899 11.9996 15.199 11.9996 15C11.9996 14.801 12.0786 14.6101 12.2194 14.4694L13.9397 12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H13.9397L12.2194 9.53063C12.0786 9.38989 11.9996 9.19902 11.9996 9C11.9996 8.80098 12.0786 8.61011 12.2194 8.46937C12.3601 8.32864 12.551 8.24958 12.75 8.24958C12.949 8.24958 13.1399 8.32864 13.2806 8.46937L16.2806 11.4694C16.3504 11.539 16.4057 11.6217 16.4434 11.7128C16.4812 11.8038 16.5006 11.9014 16.5006 12C16.5006 12.0986 16.4812 12.1962 16.4434 12.2872C16.4057 12.3783 16.3504 12.461 16.2806 12.5306Z" fill={active.logoColor}/>
              </svg>
              {active.websiteLabel}
            </Link>
          </div>
        </div>

        {/* Стрілка "Наступний" — закоментовано, повернути коли буде більше церков
        <button
          onClick={next}
          className="absolute right-0 md:-right-[60px] top-[155px] md:top-[175px] -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.15),0px_3px_2px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_4px_4px_0px_rgba(0,0,0,0.08)] transition-shadow"
          aria-label="Наступний"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 3L17 12L7 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        */}
      </FadeIn>

    </section>
  );
}
