"use client";

import { useState } from "react";
import FadeIn from "@/components/shared/fade-in";

const categories = [
  {
    title: "Комунікація",
    items: [
      {
        id: "com-1",
        question: "Як надсилати масові повідомлення членам громади?",
        answer:
          "У розділі «Повідомлення» оберіть групу або фільтр учасників і натисніть «Нова розсилка». Доступні канали: email, SMS та push-сповіщення. Ви можете написати текст вручну або скористатися шаблонами.",
      },
      {
        id: "com-2",
        question: "Чи можна автоматизувати привітання нових учасників?",
        answer:
          "Так, у системі є модуль автоматизації, який дозволяє налаштувати привітальні повідомлення для нових членів. Ви можете вибрати канал — email або SMS — і задати текст заздалегідь.",
      },
      {
        id: "com-3",
        question: "Які канали комунікації підтримуються?",
        answer:
          "Платформа підтримує email-розсилки, SMS-повідомлення та push-сповіщення через мобільний застосунок. Усі канали налаштовуються окремо, а статистика доставки доступна в реальному часі.",
      },
      {
        id: "com-4",
        question: "Чи є можливість планувати розсилки заздалегідь?",
        answer:
          "Так, під час створення повідомлення виберіть «Запланувати» і вкажіть потрібну дату та час. Заплановані розсилки відображаються в окремому списку, де їх можна редагувати або скасовувати.",
      },
    ],
  },
  {
    title: "Технічний склад",
    items: [
      {
        id: "tech-1",
        question: "Які браузери підтримує платформа?",
        answer:
          "MyChurch працює у всіх сучасних браузерах: Chrome, Firefox, Safari та Edge останніх двох версій. Для оптимальної роботи рекомендуємо Chrome або Edge.",
      },
      {
        id: "tech-2",
        question: "Чи є мобільний застосунок для пасторів і лідерів?",
        answer:
          "Так, мобільний застосунок доступний для iOS та Android. Він дозволяє керувати членами, переглядати звіти та надсилати повідомлення прямо зі смартфону.",
      },
      {
        id: "tech-3",
        question: "Як часто виходять оновлення системи?",
        answer:
          "Ми випускаємо оновлення щотижня. Невеликі виправлення та покращення виходять без простою системи. Про великі оновлення ми повідомляємо заздалегідь через email та in-app сповіщення.",
      },
      {
        id: "tech-4",
        question: "Чи підтримується інтеграція з іншими сервісами?",
        answer:
          "Так, є готові інтеграції з Google Calendar, Zoom, Mailchimp і Stripe. Також доступний відкритий API для підключення власних сервісів та автоматизацій через Zapier або Make.",
      },
    ],
  },
  {
    title: "Системні",
    items: [
      {
        id: "sys-1",
        question: "Як захищені дані нашої громади?",
        answer:
          "Усі дані зберігаються на серверах у ЄС із шифруванням AES-256. Передача даних захищена TLS. Ми відповідаємо вимогам GDPR і проходимо щорічний незалежний аудит безпеки.",
      },
      {
        id: "sys-2",
        question: "Чи є резервне копіювання даних?",
        answer:
          "Так, резервне копіювання відбувається автоматично щодня. Дані зберігаються на захищених серверах із шифруванням, і ви можете відновити будь-який знімок за останні 30 днів.",
      },
      {
        id: "sys-3",
        question: "Як додати нового адміністратора до системи?",
        answer:
          "Перейдіть до «Налаштування → Команда» і натисніть «Запросити учасника». Введіть email і оберіть роль: Адміністратор, Пастор або Волонтер. Запрошений отримає лист з інструкціями для входу.",
      },
      {
        id: "sys-4",
        question: "Що відбувається з даними при скасуванні підписки?",
        answer:
          "Після скасування підписки ваші дані зберігаються ще 60 днів. Протягом цього часу ви можете завантажити повний експорт у форматі CSV або Excel. Після 60 днів дані видаляються безповоротно.",
      },
    ],
  },
];

function FaqCard({ item }: { item: { id: string; question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className="w-full text-left rounded-[12px] border border-black/[0.08] bg-white px-5 py-4 flex flex-col gap-0 transition-colors duration-150 hover:bg-[#f7f8fa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]/40"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-medium text-black text-[17px] leading-[1.36] tracking-[-0.17px] text-left">
          {item.question}
        </span>
        <span className="shrink-0 w-5 h-5 flex items-center justify-center text-black/40 mt-[1px] transition-transform duration-200" style={{ transform: open ? "rotate(45deg)" : "none" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      {/* CSS grid trick: animates height without knowing it */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p className="mt-3 text-base font-normal text-black/80 leading-[1.5] text-left">
            {item.answer}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function Faq() {
  return (
    <div className="w-full bg-[#fcfcfc]">

      {/* Hero */}
      <section className="w-full bg-white py-[80px] relative">
        <FadeIn className="relative z-10 w-full max-w-[600px] mx-auto px-5 md:px-0 flex flex-col items-center gap-5 text-center">
          <h2 className="font-semibold text-black text-[36px] md:text-[53px] leading-[1.12] tracking-[-1.08px] md:tracking-[-1.59px]">
            Найчастіші запитання
          </h2>
          <p className="text-base font-normal text-black/80 leading-[1.5] max-w-[447px]">
            Тут зібрані відповіді на найпоширеніші запитання про роботу платформи MyChurch.
          </p>
        </FadeIn>
        {/* Gradient fade white → #fcfcfc */}
        <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-white to-[#fcfcfc] pointer-events-none" />
      </section>

      {/* FAQ categories — one block, animates on mount before scroll */}
      <div style={{ animation: "fadeInUp 0.55s 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both" }}>
      {categories.map((category, index) => (
        <section
          key={category.title}
          className={`w-full ${index === 0 ? "py-[80px]" : "pt-[40px] pb-[80px]"}`}
        >
          <div className="w-full max-w-[600px] mx-auto px-5 md:px-0">
            <div className="flex flex-col gap-[40px]">
              <h3 className="text-[24px] md:text-[32px] font-semibold text-black leading-[1.2] tracking-[-0.72px] md:tracking-[-0.96px]">
                {category.title}
              </h3>
              <div className="flex flex-col gap-[16px]">
                {category.items.map((item) => (
                  <FaqCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      </div>

    </div>
  );
}
