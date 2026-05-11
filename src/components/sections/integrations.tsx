import Image from "next/image";
import FadeIn from "@/components/shared/fade-in";

const CARDS = [
  {
    icon: "/telegram.png",
    title: "Telegram",
    text: "Повідомлення, check-in і нагадування прямо в бот",
  },
  {
    icon: "/twilio.png",
    title: "Twilio",
    text: "SMS та WhatsApp-розсилки для учасників і груп",
  },
  {
    icon: "/turbo-sms.png",
    title: "Turbo SMS",
    text: "Масові SMS для всієї церкви за лічені секунди",
  },
  {
    icon: "/google-sheets.png",
    title: "Google Sheets",
    text: "Імпорт існуючих даних без ручного перенесення",
  },
  {
    icon: "/google-calendar.png",
    title: "Google Calendar",
    text: "Документи і матеріали церкви в одному місці",
  },
];

export default function Integrations() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20">
      <div className="w-full max-w-[600px] px-5 md:px-0 flex flex-col gap-10 md:gap-14">

        <FadeIn className="flex flex-col gap-5">
          <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
            Підключайте улюблені інтеграції
          </h2>
          <p className="text-base font-normal text-black/80 leading-[1.5]">
            MyChurch підключається до інструментів, які церква вже використовує. Нічого міняти не потрібно.
          </p>
        </FadeIn>

        {/* 1-col on mobile, 2-col on desktop — весь grid анімується разом */}
        <FadeIn delay={1} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 md:gap-y-8">
          {CARDS.map((card) => (
            <div key={card.title} className="flex gap-4 md:gap-5 items-start">
              <Image
                src={card.icon}
                alt={card.title}
                width={48}
                height={48}
                quality={75}
                loading="lazy"
                className="rounded-lg shrink-0"
              />
              <div className="flex flex-col gap-1.5 md:gap-2">
                <h3 className="font-semibold text-black text-[17px] md:text-[18px] leading-[1.36] tracking-[-0.18px]">
                  {card.title}
                </h3>
                <p className="text-[15px] md:text-base font-normal text-black/80 leading-[1.4] tracking-[-0.16px]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </FadeIn>

      </div>
    </section>
  );
}
