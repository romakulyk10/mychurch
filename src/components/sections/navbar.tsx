"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import LogoLink from "@/components/shared/logo-link";
import { useDemoModal } from "@/context/demo-modal-context";

const NAV_LINKS = [
  { label: "Продукт", href: "/#product", match: "/" },
  { label: "ШІ-помічник", href: "/ai", match: "/ai" },
  { label: "Питання", href: "/faq", match: "/faq" },
  { label: "Про нас", href: "/about", match: "/about" },
  { label: "Контакти", href: "/#contacts", match: null },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { open: openModal } = useDemoModal();

  return (
    <>
      <header
        className="bg-white w-full h-16 md:h-20 flex items-center justify-between px-5 md:px-16 py-4 md:py-5 sticky top-0 z-50 border-b border-black/[0.06]"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <div className="min-w-0 md:min-w-[160px]">
          <LogoLink size="md" />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 shrink-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={
                link.href === "/#contacts"
                  ? (e) => {
                      e.preventDefault();
                      document
                        .getElementById("contacts")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  : undefined
              }
              className={cn(
                "px-4 py-2 rounded-full text-[16px] leading-[1.2] tracking-[-0.16px] transition-colors whitespace-nowrap",
                link.match && pathname === link.match
                  ? "bg-black/[0.06] text-black"
                  : "text-black/70 hover:bg-black/[0.04]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex min-w-[160px] justify-end">
          <button
            onClick={openModal}
            className="btn-primary group relative flex items-center justify-center h-10 px-6 rounded-full overflow-hidden shrink-0"
          >
            <span className="absolute inset-0 bg-[#007aff] group-hover:bg-[#2F93FF] transition-colors duration-150 rounded-full" />
            <span className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_1px_#8cc2ff]" />
            <span className="absolute inset-0 rounded-full border border-[#005fc6]" />
            <span className="relative text-white font-semibold text-[16px] tracking-[-0.32px] leading-[1.4] whitespace-nowrap">
              Замовити демо
            </span>
          </button>
        </div>

        {/* Mobile: Hamburger only */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex md:hidden w-9 h-9 flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-black/[0.05] transition-colors"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
        >
          <span className={cn("w-5 h-[1.5px] bg-black rounded-full transition-all duration-200 origin-center", open && "rotate-45 translate-y-[6.5px]")} />
          <span className={cn("w-5 h-[1.5px] bg-black rounded-full transition-all duration-200", open && "opacity-0 scale-x-0")} />
          <span className={cn("w-5 h-[1.5px] bg-black rounded-full transition-all duration-200 origin-center", open && "-rotate-45 -translate-y-[6.5px]")} />
        </button>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 md:hidden transition-all duration-300",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/20 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 bg-white border-b border-black/[0.06] transition-transform duration-300 shadow-lg",
            open ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setOpen(false);
                  if (link.href === "/#contacts") {
                    e.preventDefault();
                    setTimeout(() => {
                      document
                        .getElementById("contacts")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }
                }}
                className={cn(
                  "px-4 py-3 rounded-xl text-[16px] leading-[1.2] tracking-[-0.16px] transition-colors",
                  link.match && pathname === link.match
                    ? "bg-black/[0.06] text-black font-medium"
                    : "text-black/70 hover:bg-black/[0.04]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <button
                onClick={() => { setOpen(false); openModal(); }}
                className="btn-primary group relative flex items-center justify-center h-12 w-full rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#007aff] group-hover:bg-[#2F93FF] transition-colors duration-150 rounded-full" />
                <span className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_1px_#8cc2ff]" />
                <span className="absolute inset-0 rounded-full border border-[#005fc6]" />
                <span className="relative text-white font-semibold text-[16px] tracking-[-0.32px] leading-[1.4]">
                  Замовити демо
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
