"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useDemoModal } from "@/context/demo-modal-context";
import { cn } from "@/lib/utils";

// ─── Validation ───────────────────────────────────────────────────────────────

function validateName(value: string): string | null {
  const v = value.trim();
  if (!v) return "Введіть ваше ім'я";
  if (/\d/.test(v)) return "Ім'я може містити лише літери";
  if (v.length < 2) return "Введіть повне ім'я";
  if (!/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ''\-\s]+$/.test(v)) return "Ім'я може містити лише літери";
  return null;
}

function validatePhone(value: string): string | null {
  const v = value.trim();
  if (!v) return "Введіть номер телефону";
  const digits = v.replace(/\D/g, "");
  const hasPlus = v.startsWith("+");
  if (!hasPlus && digits.length < 8)
    return "Номер занадто короткий та не містить код країни. Перевірте і спробуйте ще раз";
  if (!hasPlus)
    return "Вкажіть код країни на початку номера, наприклад +380";
  if (digits.length < 10)
    return "Номер занадто короткий. Перевірте і спробуйте ще раз";
  if (!/^\+[\d\s\-().]{9,20}$/.test(v))
    return "Схоже, номер введено некоректно. Перевірте і спробуйте ще раз";
  return null;
}

// ─── Input field ──────────────────────────────────────────────────────────────

interface FieldProps {
  icon: string;
  placeholder: string;
  type?: string;
  value: string;
  error: string | null;
  onChange: (v: string) => void;
}

function Field({ icon, placeholder, type = "text", value, error, onChange }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={cn(
          "flex items-center gap-4 h-[52px] px-5 rounded-[14px] bg-white border transition-[border-color,box-shadow] duration-150 cursor-text",
          "[&:hover:not(:focus-within)]:border-black/[0.12] [&:hover:not(:focus-within)]:shadow-[0px_1px_2px_rgba(0,0,0,0.06)]",
          "focus-within:border-[#007aff] focus-within:shadow-[0px_2px_4px_rgba(0,122,255,0.12)]",
          "border-black/[0.08]"
        )}
      >
        <span className="text-[18px] leading-none shrink-0 select-none cursor-default">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 min-w-0 text-[16px] text-black/[0.88] placeholder:text-[#818186] bg-transparent outline-none leading-[1.4] cursor-text"
        />
      </label>
      {error && (
        <p className="text-[13px] font-medium text-[#ff9500] leading-[1.4]">{error}</p>
      )}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

export default function DemoModal() {
  const { isOpen, close } = useDemoModal();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const windowRef = useRef<HTMLDivElement>(null);
  const scrollbarWidthRef = useRef(0);

  // Reset form after close animation completes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setName("");
        setPhone("");
        setNameError(null);
        setPhoneError(null);
        setSubmitted(false);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  // Body scroll lock with scrollbar compensation to prevent layout shift
  useEffect(() => {
    if (isOpen) {
      scrollbarWidthRef.current = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidthRef.current}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const ne = validateName(name);
      const pe = validatePhone(phone);
      setNameError(ne);
      setPhoneError(pe);
      if (ne || pe) return;
      setSubmitted(true);
    },
    [name, phone]
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (windowRef.current && !windowRef.current.contains(e.target as Node)) {
        close();
      }
    },
    [close]
  );

  return (
    // Backdrop — invisible when closed so backdrop-blur is not computed by GPU
    <div
      aria-hidden={!isOpen}
      onClick={handleBackdropClick}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center px-4",
        "bg-black/40",
        "transition-[opacity,visibility] duration-200",
        isOpen
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
      )}
    >
      {/* Window — will-change promotes GPU layer before animation starts */}
      <div
        ref={windowRef}
        role="dialog"
        aria-modal="true"
        aria-label="Замовити демо"
        style={{ willChange: "opacity, transform" }}
        className={cn(
          "relative bg-white rounded-[24px] border border-black/[0.12]",
          "shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06)]",
          "w-full max-w-[472px]",
          "px-5 sm:px-[44px] py-8 sm:py-[48px]",
          "flex flex-col gap-[36px]",
          // transition-[opacity,transform] instead of transition-all — only what moves
          "transition-[opacity,transform] duration-200",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Закрити"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-black/40 hover:text-black/70 hover:bg-black/[0.05] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          /* Success state */
          <div className="flex flex-col items-center gap-6 py-4 text-center">
            <div className="w-[72px] h-[72px] rounded-full bg-[#007aff] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M7 16.5L13 22.5L25 10" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-black text-[34px] leading-[1.2] tracking-[-1.02px]">
                Заявку надіслано!
              </h2>
              <p className="text-base text-black/80 leading-[1.5]">
                Менеджер зв&apos;яжеться з вами протягом дня
              </p>
            </div>
            <button
              onClick={close}
              className="mt-2 btn-primary group relative flex items-center justify-center h-12 px-9 rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#007aff] group-hover:bg-[#2F93FF] transition-colors duration-150 rounded-full" />
              <span className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_1px_#8cc2ff]" />
              <span className="absolute inset-0 rounded-full border border-[#005fc6]" />
              <span className="relative text-white font-semibold text-base tracking-[-0.32px] leading-[1.4]">
                Закрити
              </span>
            </button>
          </div>
        ) : (
          <>
            {/* Header text */}
            <div className="flex flex-col gap-3 text-center">
              <h2 className="font-semibold text-black text-[28px] sm:text-[34px] leading-[1.28] tracking-[-0.84px] sm:tracking-[-1.02px]">
                Залиште контакт — ми зв&apos;яжемось і покажемо як все працює
              </h2>
              <p className="text-base text-black/80 leading-[1.5]">
                Менеджер зв&apos;яжеться з вами протягом дня
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <Field
                  icon="👋"
                  placeholder="Ім'я"
                  value={name}
                  error={nameError}
                  onChange={(v) => {
                    setName(v);
                    if (nameError) setNameError(validateName(v));
                  }}
                />
                <Field
                  icon="☎️"
                  placeholder="Номер телефону"
                  type="tel"
                  value={phone}
                  error={phoneError}
                  onChange={(v) => {
                    setPhone(v);
                    if (phoneError) setPhoneError(validatePhone(v));
                  }}
                />
              </div>

              <div className="flex flex-col gap-8">
                <button
                  type="submit"
                  className="btn-primary group relative flex items-center justify-center h-12 w-full rounded-full overflow-hidden"
                >
                  <span className="absolute inset-0 bg-[#007aff] group-hover:bg-[#2F93FF] transition-colors duration-150 rounded-full" />
                  <span className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_1px_#8cc2ff]" />
                  <span className="absolute inset-0 rounded-full border border-[#005fc6]" />
                  <span className="relative text-white font-semibold text-base tracking-[-0.32px] leading-[1.4]">
                    Замовити демо
                  </span>
                </button>

                {/* Legal */}
                <p className="text-[12px] text-black/60 leading-[1.5] text-center">
                  Натискаючи &quot;Замовити демо&quot;, ви погоджуєтесь з{" "}
                  <Link href="/terms" className="font-medium text-black/80 hover:underline underline-offset-2">умовами використання</Link>
                  {" "}та{" "}
                  <Link href="/privacy" className="font-medium text-black/80 hover:underline underline-offset-2">політикою конфіденційності</Link>.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
