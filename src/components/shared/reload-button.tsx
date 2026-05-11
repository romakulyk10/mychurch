"use client";

export default function ReloadButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => window.location.reload()}
      className={className}
    >
      <span className="absolute inset-0 bg-white rounded-full" />
      <span className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_0px_white]" />
      <span className="relative text-black/80 font-medium text-base tracking-[-0.32px] leading-[1.4] whitespace-nowrap">
        Оновити сторінку
      </span>
    </button>
  );
}
