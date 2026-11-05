"use client";

import { Church, Gem, Wine, UtensilsCrossed, Disc3, Cake, Drum, Soup, Heart } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Reveal from "./Reveal";

const ICONS = [Church, Gem, Wine, UtensilsCrossed, Disc3, Cake, Drum, Soup, Heart];

export default function Timeline() {
    const { t } = useLanguage();
    return (
        <section className="min-h-screen w-full bg-ivory-texture flex flex-col items-center justify-center px-6 md:px-8 py-24 gap-14">
            <Reveal variant="up" className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark/50 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">{t.timeline.eyebrow}</p>
                <h2 className="font-serif text-burgundy-dark text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">{t.timeline.heading}</h2>
                <Reveal variant="line" delay={250} className="h-px w-16 bg-burgundy-dark/30 mt-2" />
            </Reveal>

            <ol className="relative w-full max-w-md">
                <div className="absolute left-[5.3rem] md:left-[6.3rem] top-8 bottom-8 w-px bg-burgundy-dark/25" />
                {t.timeline.events.map((event, i) => {
                    const Icon = ICONS[i];
                    return (
                        <li key={event.label}>
                            <Reveal variant="up" delay={i * 60} className="relative flex items-center gap-6 md:gap-8 py-4">
                                <div className="w-14 md:w-16 flex justify-center shrink-0">
                                    <Icon className="w-9 h-9 md:w-11 md:h-11 text-burgundy-dark/80" strokeWidth={1.2} />
                                </div>
                                <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-burgundy-dark shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-serif text-burgundy-dark/70 text-lg md:text-xl tabular-nums">{event.time}</span>
                                    <span className="font-serif text-burgundy-dark text-xl md:text-2xl tracking-wider uppercase">{event.label}</span>
                                </div>
                            </Reveal>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
