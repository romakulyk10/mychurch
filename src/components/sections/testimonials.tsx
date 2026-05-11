"use client";

import { useState, useRef, useEffect } from "react";
import FadeIn from "@/components/shared/fade-in";

const TESTIMONIALS = [
  { name: "Олена К.", color: "#5b8af0", initial: "О", text: "Ми нарешті перестали губити людей між Telegram і таблицями. MyChurch дала нам одне місце для всього — пастор і лідери груп бачать повну картину." },
  { name: "Іван М.", color: "#f07b5b", initial: "І", text: "Передача служіння стала легкою. Коли наш лідер пішов, новий одразу побачив всю базу, ролі і відвідуваність. Нічого не загубилось." },
  { name: "Марія Г.", color: "#5bbff0", initial: "М", text: "Раніше явка в групах взагалі не відстежувалась. Зараз за два кліки бачимо хто пропустив три тижні поспіль і одразу телефонуємо." },
  { name: "Андрій С.", color: "#8b5bf0", initial: "А", text: "Аналітика по церкві — це те, про що я навіть не мріяв. Тепер на нараді ради просто відкриваю дашборд і всі рішення ухвалюються на основі цифр." },
  { name: "Тетяна Л.", color: "#f05b8b", initial: "Т", text: "Ми перенесли всю базу з Google Sheets за один день. Підтримка допомогла з імпортом, і вже наступного тижня вся команда працювала в системі." },
  { name: "Василь П.", color: "#f0c45b", initial: "В", text: "Нарешті пастор бачить повну картину по кожній людині. Хто в якій групі, як давно не був на служінні, з якою родиною пов'язаний." },
  { name: "Наталя Р.", color: "#5bf0a0", initial: "Н", text: "Ми ведемо три малі групи і тепер кожен лідер бачить свій список і відмічає явку сам. Більше не потрібно зводити все вручну." },
  { name: "Сергій Д.", color: "#f05b5b", initial: "С", text: "Підключили Telegram-бот і тепер нагадування про служіння йдуть автоматично. Люди перестали запитувати «коли наступна зустріч»." },
  { name: "Юлія В.", color: "#a05bf0", initial: "Ю", text: "Раніше новий учасник потрапляв до нас і потім просто губився. Зараз є картка, є статус, є відповідальна людина — нічого не провалюється." },
  { name: "Петро Н.", color: "#5bf0d8", initial: "П", text: "Звіти за місяць роблю за 5 хвилин. Раніше це займало вечір і кілька таблиць. Тепер просто відкриваю аналітику і роздруковую." },
  { name: "Оксана Т.", color: "#f0825b", initial: "О", text: "Особливо зручно що всі служіння зберігаються окремо. Хор, молитовна група, молодь — кожна зі своїм складом і своєю явкою." },
  { name: "Дмитро К.", color: "#5b7ef0", initial: "Д", text: "Ми церква на 200 людей і раніше все трималось на одній людині з таблицею. MyChurch розподілив відповідальність між командою." },
  { name: "Христина Б.", color: "#f05bb8", initial: "Х", text: "Дуже зручно шукати людину за ім'ям або групою. Більше не потрібно гортати довгий список у чаті або шукати в кількох місцях." },
  { name: "Роман Є.", color: "#8ef05b", initial: "Р", text: "Після переходу на MyChurch лідери груп стали більш залученими. Система сама нагадує кому зателефонувати якщо людина пропала." },
  { name: "Аліна Ш.", color: "#f0d05b", initial: "А", text: "Ми маленька церква але і нам потрібна система. MyChurch не перевантажений функціями і дуже легко навчити будь-кого з команди." },
  { name: "Богдан Ф.", color: "#5bcaf0", initial: "Б", text: "Імпорт зі старих таблиць пройшов без проблем. За тиждень вся база була в системі і команда вже повноцінно працювала з нею." },
];

export default function Testimonials() {
  const [active, setActive] = useState(7);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const avatarRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const scrollToActive = (idx: number) => {
    const container = listRef.current;
    const el = avatarRefs.current[idx];
    if (!container || !el) return;
    const center = container.offsetWidth / 2;
    const elCenter = el.offsetLeft + el.offsetWidth / 2;
    container.scrollTo({ left: elCenter - center, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToActive(active);
  }, [active]);

  const handleScroll = () => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = listRef.current;
      if (!el) return;
      setShowLeft(el.scrollLeft > 4);
      setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    });
  };

  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20">
      <div className="w-full max-w-[600px] px-5 md:px-0 flex flex-col gap-10 md:gap-14">

        <FadeIn className="flex flex-col gap-5">
          <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
            Що кажуть користувачі
          </h2>
          <p className="text-base font-normal text-black/80 leading-[1.5]">
            Перші користувачі вже працюють з MyChurch і діляться своїм досвідом.
          </p>
        </FadeIn>

        <FadeIn delay={1} className="flex flex-col gap-6">

          {/* Картка відгуку */}
          <div className="relative">
            <div
              className="relative overflow-hidden bg-white rounded-2xl px-6 pt-6 pb-[41px]"
              style={{
                border: "1px solid rgba(0,0,0,0.12)",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.15), 0 3px 2px 0 rgba(0,0,0,0.06)",
              }}
            >
              <span className="absolute top-6 right-6 text-[#007aff] text-[80px] leading-none select-none [font-family:var(--font-caveat)]">
                &#x201C;
              </span>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-[52px] h-[52px] rounded-full shrink-0 flex items-center justify-center text-white font-semibold text-[17px]"
                  style={{ backgroundColor: TESTIMONIALS[active].color }}
                >
                  {TESTIMONIALS[active].initial}
                </div>
                <span className="font-semibold text-black text-[18px] leading-[1.36] tracking-[-0.18px]">
                  {TESTIMONIALS[active].name}
                </span>
              </div>
              <p className="text-base text-black/80 leading-[1.6] tracking-[-0.16px]">
                {TESTIMONIALS[active].text}
              </p>
            </div>
            <div
              className="absolute bottom-[-9px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"
              style={{ borderRight: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
            />
          </div>

          {/* Avatar scroll strip */}
          <div className="relative overflow-hidden">
            <div className={`absolute left-0 top-0 h-full w-8 z-10 pointer-events-none bg-gradient-to-r from-[#fcfcfc] to-transparent transition-opacity duration-150 ${showLeft ? "opacity-100" : "opacity-0"}`} />
            <div className={`absolute right-0 top-0 h-full w-8 z-10 pointer-events-none bg-gradient-to-l from-[#fcfcfc] to-transparent transition-opacity duration-150 ${showRight ? "opacity-100" : "opacity-0"}`} />
            <div
              ref={listRef}
              onScroll={handleScroll}
              className="flex gap-2 items-center overflow-x-auto py-2"
              style={{ scrollbarWidth: "none", paddingLeft: "50%", paddingRight: "50%" }}
            >
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  ref={(el) => { avatarRefs.current[i] = el; }}
                  onClick={() => setActive(i)}
                  className={[
                    "rounded-full shrink-0 flex items-center justify-center text-white font-semibold transition-all duration-200",
                    i === active
                      ? "w-[48px] h-[48px] md:w-[52px] md:h-[52px] text-[16px] md:text-[17px] border-[1.5px] border-[#d8d8dc]"
                      : "w-9 h-9 md:w-10 md:h-10 text-[13px] md:text-[14px] border-[1.5px] border-[#d8d8dc] opacity-60",
                  ].join(" ")}
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </button>
              ))}
            </div>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
