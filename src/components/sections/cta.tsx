"use client";

import Link from "next/link";
import FadeIn from "@/components/shared/fade-in";
import { useDemoModal } from "@/context/demo-modal-context";

export default function Cta() {
  const { open } = useDemoModal();
  return (
    <section className="w-full flex flex-col items-center py-20 md:py-[120px] bg-[#fcfcfc]">
      <FadeIn className="flex flex-col items-center gap-10 md:gap-16 w-full max-w-[600px] px-5 md:px-0 text-center">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
            Епоха таблиць і чатів добігає кінця
          </h2>
          <p className="text-base font-normal text-black/80 leading-[1.5]">
            Перші 15 церков підключаються безкоштовно до травня.
            <br className="hidden sm:block" />
            Налаштування займає до 14 днів
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-center justify-center w-full sm:w-auto">
          <button
            onClick={open}
            className="btn-primary group relative flex items-center justify-center h-12 w-full sm:w-auto px-9 rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#007aff] group-hover:bg-[#2F93FF] transition-colors duration-150 rounded-full" />
            <span className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_1px_#8cc2ff]" />
            <span className="absolute inset-0 rounded-full border border-[#005fc6]" />
            <span className="relative text-white font-semibold text-base tracking-[-0.32px] leading-[1.4] whitespace-nowrap">
              Замовити демо
            </span>
          </button>

          <Link
            href="https://t.me/"
            className="btn-secondary relative flex items-center justify-center h-12 w-full sm:w-auto px-9 rounded-full overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.15),0px_3px_2px_0px_rgba(0,0,0,0.06)]"
          >
            <span className="btn-secondary-bg absolute inset-0 bg-white rounded-full transition-colors duration-150" />
            <span className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_0px_white]" />
            <span className="relative text-black/80 font-medium text-base tracking-[-0.32px] leading-[1.4] whitespace-nowrap">
              Написати в телеграм
            </span>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
