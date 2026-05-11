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
        <span className="shrink-0 w-5 h-5 flex items-center justify-center text-black/40 mt-[1px]">
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </div>
      {open && (
        <p className="mt-3 text-base font-normal text-black/80 leading-[1.5] text-left">
          {item.answer}
        </p>
      )}
    </button>
  );
}

export default function Faq() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-28">
      <div className="w-full max-w-[600px] mx-auto px-5 md:px-0 flex flex-col gap-10 md:gap-14">

        <FadeIn className="flex flex-col gap-5">
          <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
            Найчастіші запитання
          </h2>
          <p className="text-base font-normal text-black/80 leading-[1.5]">
            Тут зібрані відповіді на найпоширеніші запитання про роботу платформи MyChurch.
          </p>
        </FadeIn>

        <FadeIn delay={1} className="flex flex-col gap-8 md:gap-12">
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-3">
              <h3 className="text-[15px] md:text-base font-semibold text-black/40 leading-[1.36] tracking-[-0.16px]">
                {category.title}
              </h3>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <FaqCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </FadeIn>

      </div>
    </section>
  );
}
