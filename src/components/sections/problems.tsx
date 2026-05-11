import Image from "next/image";
import FadeIn from "@/components/shared/fade-in";

const CARDS = [
  {
    icon: "/icon-people-lost.png",
    title: "Губляться люди",
    text: "Контакти розкидані між Telegram, таблицями і записниками. Знайти людину або згадати її історію займає більше часу, ніж варто",
  },
  {
    icon: "/icon-no-activity.png",
    title: "Не видно активності",
    text: "Пастор не знає, хто з членів церкви перестав ходити. Відвідуваність не відстежується, бо немає де",
  },
  {
    icon: "/icon-leader-overload.png",
    title: "Перевантаження лідерів",
    text: "Лідер групи вручну збирає явку, пише нагадування і веде список учасників. Щотижня, знову і знову",
  },
  {
    icon: "/icon-ministry-transfer.png",
    title: "Передача служіння ламається",
    text: "Лідер іде, і всі напрацювання йдуть разом з ним. Новий починає збирати базу заново",
  },
];

export default function Problems() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20">
      <div className="w-full max-w-[600px] px-5 md:px-0 flex flex-col gap-10 md:gap-14">
        <FadeIn className="flex flex-col gap-5">
          <h2 className="font-semibold text-black text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.84px] md:tracking-[-1.08px]">
            Стан без системи
          </h2>
          <p className="text-base font-normal text-black/80 leading-[1.5]">
            Контакти розпорошені, комунікація в чатах, облік служінь у кожного свій.
            Все тримається на конкретних людях — а не на процесах.
          </p>
        </FadeIn>

        {/* Desktop: кожен ряд анімується разом */}
        <div className="hidden md:flex flex-col">
          {[[0, 1], [2, 3]].map((row, rowIdx) => (
            <FadeIn
              key={rowIdx}
              delay={rowIdx === 0 ? 1 : 2}
              className={["flex", rowIdx === 0 ? "border-b border-black/[0.08]" : ""].join(" ")}
            >
              {row.map((i) => {
                const card = CARDS[i];
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={card.title}
                    className={[
                      "flex-1 flex flex-col gap-5 min-h-[226px]",
                      rowIdx === 0 ? "pt-0 pb-12" : "pt-8 pb-0",
                      isLeft ? "pr-8 border-r border-black/[0.08]" : "pl-8",
                    ].join(" ")}
                  >
                    <Image src={card.icon} alt={card.title} width={48} height={48} quality={75} loading="lazy" />
                    <div className="flex flex-col gap-2.5">
                      <h3 className="font-semibold text-black text-[18px] leading-[1.36] tracking-[-0.18px]">
                        {card.title}
                      </h3>
                      <p className="text-base font-normal text-black/80 leading-[1.5]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </FadeIn>
          ))}
        </div>

        {/* Mobile: кожна картка окремо (вертикальний скрол — ок) */}
        <div className="flex md:hidden flex-col gap-7">
          {CARDS.map((card) => (
            <FadeIn key={card.title} className="flex gap-4 items-start">
              <Image src={card.icon} alt={card.title} width={40} height={40} quality={75} loading="lazy" className="shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-black text-[17px] leading-[1.36] tracking-[-0.17px]">
                  {card.title}
                </h3>
                <p className="text-[15px] font-normal text-black/80 leading-[1.5]">
                  {card.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
