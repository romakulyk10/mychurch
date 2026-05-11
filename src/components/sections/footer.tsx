import Link from "next/link";
import LogoLink from "@/components/shared/logo-link";

const NAV_LINKS = [
  { label: "Продукт", href: "/#product" },
  { label: "ШІ-помічник", href: "/ai" },
  { label: "Питання", href: "/faq" },
  { label: "Про нас", href: "/about" },
];

const AMBASSADORS = [
  { label: "Нове Життя", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="w-full flex flex-col items-center py-12 md:py-20 bg-[#fcfcfc]">
      <div className="flex flex-col gap-12 md:gap-20 w-full max-w-[864px] px-5 md:px-8 lg:px-0">

        {/* Upper */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-6">

          <LogoLink size="sm" />

          {/* Columns */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-8 sm:gap-10">

            {/* Навігація */}
            <div className="flex flex-col gap-3">
              <span className="px-2 font-medium text-[15px] md:text-[16px] text-black leading-[1.3]">Навігація</span>
              <div className="flex flex-col gap-1.5 md:gap-2 items-start">
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="px-2 py-1 rounded-md text-[15px] md:text-[16px] text-black/70 tracking-[-0.16px] leading-[1.2] whitespace-nowrap hover:bg-black/[0.06] hover:text-black transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Амбасадори */}
            <div className="flex flex-col gap-3">
              <span className="px-2 font-medium text-[15px] md:text-[16px] text-black leading-[1.3]">Амбасадори</span>
              <div className="flex flex-col gap-1.5 md:gap-2 items-start">
                {AMBASSADORS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 rounded-md text-[15px] md:text-[16px] text-black/70 tracking-[-0.16px] leading-[1.2] whitespace-nowrap hover:bg-black/[0.06] hover:text-black transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Контакти */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="px-2 font-medium text-[15px] md:text-[16px] text-black leading-[1.3]">Контакти</span>
              <div className="flex flex-col gap-1.5 md:gap-2 items-start">
                <span className="px-2 py-1 text-[15px] md:text-[16px] text-black/70 tracking-[-0.16px] leading-[1.2]">
                  hello.church@gmail.com
                </span>
                <span className="px-2 py-1 text-[15px] md:text-[16px] text-black/70 tracking-[-0.16px] leading-[1.2]">
                  +380 97 721 712
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 sm:gap-0">
          <p className="text-[12px] text-black/60 tracking-[-0.12px] leading-[1.2]">
            © 2026 MyChurch, Всі права захищені
          </p>
          <div className="flex gap-0.5 flex-wrap">
            <Link
              href="/privacy"
              className="px-2 py-1 rounded-md text-[12px] text-black/60 tracking-[-0.12px] leading-[1.2] whitespace-nowrap hover:bg-black/[0.06] hover:text-black transition-colors"
            >
              Політика конфіденційності
            </Link>
            <Link
              href="/terms"
              className="px-2 py-1 rounded-md text-[12px] text-black/60 tracking-[-0.12px] leading-[1.2] whitespace-nowrap hover:bg-black/[0.06] hover:text-black transition-colors"
            >
              Умови використання
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
