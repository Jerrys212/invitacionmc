"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Reveal from "./Reveal";

const GIFT_EMAIL = "cjollie102188@gmail.com";

const GIFT_CARDS = [
    { label: "Costco e-gift card (members only)", href: "https://www.costco.com/p/-/10024438" },
    { label: "Navy Exchange e-gift card", href: "https://www.mynavyexchange.com/giftcards/browse/egiftcardDetails.jsp?cardType=egc" },
];

function MexicoFlag() {
    return (
        <svg viewBox="0 0 90 90" className="w-full h-full" aria-hidden="true">
            <clipPath id="mx-circle">
                <circle cx="45" cy="45" r="45" />
            </clipPath>
            <g clipPath="url(#mx-circle)">
                <rect x="0" width="30" height="90" fill="var(--color-flag-green)" />
                <rect x="30" width="30" height="90" fill="var(--color-flag-white)" />
                <rect x="60" width="30" height="90" fill="var(--color-flag-red)" />
                <circle cx="45" cy="45" r="8" fill="none" stroke="var(--color-tan)" strokeWidth="3" />
            </g>
        </svg>
    );
}

function UsaFlag() {
    const stripes = Array.from({ length: 13 }, (_, i) => i);
    return (
        <svg viewBox="0 0 90 90" className="w-full h-full" aria-hidden="true">
            <clipPath id="us-circle">
                <circle cx="45" cy="45" r="45" />
            </clipPath>
            <g clipPath="url(#us-circle)">
                {stripes.map((i) => (
                    <rect
                        key={i}
                        y={(i * 90) / 13}
                        width="90"
                        height={90 / 13 + 0.5}
                        fill={i % 2 === 0 ? "var(--color-flag-red)" : "var(--color-flag-white)"}
                    />
                ))}
                <rect width="44" height={(90 / 13) * 7} fill="var(--color-flag-blue)" />
                {[0, 1, 2, 3].map((row) =>
                    [0, 1, 2, 3, 4].map((col) => (
                        <circle
                            key={`${row}-${col}`}
                            cx={6 + col * 8 + (row % 2) * 4}
                            cy={8 + row * 11}
                            r="1.6"
                            fill="var(--color-flag-white)"
                        />
                    )),
                )}
            </g>
        </svg>
    );
}

export default function Gift() {
    const { t } = useLanguage();

    const bankRows = [
        { label: t.gift.holderLabel, value: "Laura Mariana Ramírez" },
        { label: t.gift.accountLabel, value: "56797364229" },
        { label: t.gift.clabeLabel, value: "014180567973642290" },
        { label: t.gift.conceptLabel, value: t.gift.concept },
    ];

    return (
        <section className="min-h-screen w-full bg-ivory-texture flex flex-col items-center justify-center px-6 md:px-8 py-24 gap-14">
            <Reveal variant="up" className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark/50 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">{t.gift.eyebrow}</p>
                <h2 className="font-serif text-burgundy-dark text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">{t.gift.heading}</h2>
                <Reveal variant="line" delay={250} className="h-px w-16 bg-burgundy-dark/30 mt-2" />
                <Image src="/sugerencia-regalo.png" alt="" width={512} height={512} className="w-14 md:w-16 h-auto mt-4 opacity-75" />
            </Reveal>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-5xl">
                <Reveal variant="scale" className="relative w-full md:w-2/5 h-80 md:h-96 shrink-0 overflow-hidden">
                    <Image
                        src="/hawaii.jpg"
                        alt="Hawái"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                </Reveal>
                <Reveal variant="up" delay={150} className="flex-1">
                    <p className="font-serif text-burgundy-dark text-lg md:text-2xl leading-relaxed">{t.gift.intro}</p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10 w-full max-w-5xl">
                <Reveal variant="up" className="flex flex-col items-center gap-5 text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-burgundy-dark/20 shadow-md">
                        <MexicoFlag />
                    </div>
                    <p className="font-serif text-burgundy-dark/50 text-sm tracking-[0.4em] uppercase">{t.gift.mexico}</p>
                    <Image src="/cuenta-bancaria.png" alt="" width={512} height={512} className="w-14 h-auto opacity-75" />
                    <p className="font-serif text-burgundy-dark text-xl md:text-2xl tracking-widest uppercase">{t.gift.bankTitle}</p>
                    <dl className="flex flex-col gap-3 w-full max-w-sm">
                        {bankRows.map(({ label, value }) => (
                            <div key={label} className="flex flex-col">
                                <dt className="font-serif text-burgundy-dark/50 text-xs md:text-sm tracking-[0.3em] uppercase">{label}</dt>
                                <dd className="font-serif text-burgundy-dark text-lg md:text-xl tabular-nums break-all select-all">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>

                <Reveal variant="up" delay={150} className="flex flex-col items-center gap-5 text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-burgundy-dark/20 shadow-md">
                        <UsaFlag />
                    </div>
                    <p className="font-serif text-burgundy-dark/50 text-sm tracking-[0.4em] uppercase">{t.gift.usa}</p>
                    <Image src="/gift-card.png" alt="" width={512} height={512} className="w-14 h-auto" />
                    <p className="font-serif text-burgundy-dark text-xl md:text-2xl tracking-widest uppercase">{t.gift.giftCardsTitle}</p>
                    <div className="flex flex-col gap-3 w-full max-w-sm">
                        {GIFT_CARDS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-shine flex items-center justify-center gap-3 border border-burgundy-dark/30 px-6 py-4 text-burgundy-dark font-serif text-sm md:text-base tracking-[0.2em] uppercase hover:bg-burgundy-dark hover:text-ivory hover:scale-[1.02] active:scale-95 transition-all duration-500"
                            >
                                <ExternalLink size={14} className="shrink-0" />
                                {label}
                            </Link>
                        ))}
                    </div>
                    <p className="flex items-center justify-center gap-2 flex-wrap font-serif text-burgundy-dark/80 text-base md:text-lg italic">
                        <Mail size={16} className="shrink-0" />
                        {t.gift.emailNote}
                        <a href={`mailto:${GIFT_EMAIL}`} className="link-underline not-italic break-all">
                            {GIFT_EMAIL}
                        </a>
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
