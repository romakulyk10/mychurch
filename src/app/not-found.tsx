import Link from "next/link";
import ReloadButton from "@/components/shared/reload-button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fcfcfc] gap-10 px-4">
      <div className="flex flex-col items-center gap-5 text-center">
        <p className="text-sm font-medium text-black/40 uppercase tracking-widest">
          404
        </p>
        <h1 className="font-semibold text-black text-[36px] leading-[1.2] tracking-[-1.08px]">
          Сторінку не знайдено
        </h1>
        <p className="text-base text-black/70 leading-[1.5]">
          Можливо, її було переміщено або вона ніколи не існувала.
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Link
          href="/"
          className="relative flex items-center justify-center h-12 px-9 rounded-full overflow-hidden"
        >
          <span className="absolute inset-0 bg-black rounded-full" />
          <span className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.12)]" />
          <span className="absolute inset-0 rounded-full border border-black/80" />
          <span className="relative text-white font-semibold text-base tracking-[-0.32px] leading-[1.4] whitespace-nowrap">
            Повернутись на головну
          </span>
        </Link>

        <ReloadButton className="relative flex items-center justify-center h-12 px-9 rounded-full overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.15),0px_3px_2px_0px_rgba(0,0,0,0.06)]" />
      </div>
    </main>
  );
}
