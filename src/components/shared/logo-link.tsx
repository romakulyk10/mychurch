"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useRef, useState } from "react";

interface LogoLinkProps {
  size?: "sm" | "md";
}

export default function LogoLink({ size = "md" }: LogoLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const iconSize = size === "sm" ? "w-10 h-10" : "w-10 h-10";
  const textSize = size === "sm" ? "text-[18px] tracking-[-0.36px]" : "text-[20px] tracking-[-0.4px]";

  function handleClick() {
    if (timerRef.current) return;
    setFading(true);

    timerRef.current = setTimeout(() => {
      setFading(false);
      timerRef.current = null;
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
    }, 350);
  }

  return (
    <>
      {fading && (
        <div className="fixed inset-0 z-[9999] bg-white pointer-events-none animate-fade-in-out" style={{ willChange: "opacity" }} />
      )}

      <button onClick={handleClick} className="flex items-center gap-4">
        <div className={`relative ${iconSize} rounded-[12px] shrink-0 overflow-hidden shadow-[inset_0px_1px_0px_1px_#8cc2ff,inset_0px_-1px_0px_0px_#005fc6]`}>
          <Image src="/logo.png" alt="My Church logo" fill className="object-cover" />
        </div>
        <span className={`font-semibold ${textSize} text-black leading-[1.3] whitespace-nowrap`}>
          My Church
        </span>
      </button>
    </>
  );
}
