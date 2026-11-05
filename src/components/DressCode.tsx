"use client";

import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { OrnamentFrame } from "./Ornament";
import Reveal from "./Reveal";

export default function DressCode() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen w-full bg-dresscode-texture flex items-center justify-center px-4 sm:px-8 py-16">
            <Reveal variant="scale" className="w-full max-w-4xl bg-ivory-texture shadow-2xl px-6 sm:px-12 py-12 sm:py-16 flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-3 text-center">
                    <h2 className="font-serif text-black/85 text-4xl md:text-6xl tracking-widest uppercase">{t.dressCode.heading}</h2>
                    <div className="flex items-center gap-3 text-black/40">
                        <div className="h-px w-16 md:w-32 bg-black/40" />
                        <span className="font-serif text-xl">❦</span>
                        <div className="h-px w-16 md:w-32 bg-black/40" />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-12 w-full">
                    <div className="w-48 sm:w-2/5 shrink-0">
                        <Image
                            src="/dresscode-couple.png"
                            alt=""
                            width={382}
                            height={604}
                            sizes="(max-width: 640px) 12rem, 320px"
                            className="w-full h-auto opacity-90"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-8 flex-1">
                        <div className="flex flex-col items-center w-56 md:w-72 text-black/70">
                            <OrnamentFrame />
                            <p className="font-serif text-black/85 text-4xl md:text-5xl tracking-widest uppercase py-1">{t.dressCode.style}</p>
                            <OrnamentFrame className="rotate-180" />
                        </div>

                        <ul className="font-serif text-black/85 text-lg md:text-2xl leading-relaxed space-y-4 list-disc pl-6 marker:text-black/60">
                            {t.dressCode.rules.map((rule) => (
                                <li key={rule}>{rule}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
