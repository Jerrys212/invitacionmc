"use client";

import { useLanguage } from "@/src/contexts/LanguageContext";
import Reveal from "./Reveal";

export default function Parents() {
    const { t } = useLanguage();
    return (
        <section className="min-h-screen w-full bg-burgundy-texture flex flex-col items-center justify-center px-6 md:px-8 py-24">
            <Reveal
                variant="scale"
                className="relative w-full lg:max-w-3/5 flex flex-col items-center gap-10 px-8 md:px-12 py-16 shadow-2xl"
                style={{
                    backgroundImage: "url('/seccion-papas.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="font-serif italic text-black/70 text-2xl md:text-3xl">{t.parents.blessing}</p>
                    <Reveal variant="fade" delay={150} className="flex items-center gap-2 text-black/40">
                        <div className="h-px w-10 bg-black/30" />
                        <span className="font-serif text-xl">❧</span>
                        <div className="h-px w-10 bg-black/30" />
                    </Reveal>
                </div>

                <div className="flex flex-col items-center gap-1 text-center">
                    <p className="font-serif italic text-black/80 text-2xl md:text-3xl">Laura Pico García</p>
                    <p className="font-serif italic text-black/80 text-2xl md:text-3xl">Hugo Ramírez Castro</p>
                </div>

                <p className="font-display text-black/40 text-5xl">&</p>

                <div className="flex flex-col items-center gap-1 text-center">
                    <p className="font-serif italic text-black/80 text-2xl md:text-3xl">Lori Renee Glenn</p>
                    <p className="font-serif italic text-black/80 text-2xl md:text-3xl">Karen Denise Davenport</p>
                </div>

                <div className="h-px w-16 bg-black/20" />

                <p className="font-serif text-black/70 text-xl md:text-2xl leading-relaxed text-center max-w-xl">
                    {t.parents.invite}
                </p>
            </Reveal>
        </section>
    );
}
