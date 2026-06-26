"use client";

import { Ban } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function NoKids() {
    const { t } = useLanguage();
    return (
        <section className="min-h-screen w-full bg-burgundy-dark flex items-center justify-center px-8 overflow-hidden">
            <div className="relative bg-ivory flex flex-col items-center text-center gap-8 px-16 py-20 max-w-2xl w-full rounded-md">
                {/* PNG collage — posiciones random */}
                <div className="absolute -top-12 -left-12 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rotate-[-12deg] pointer-events-none select-none">
                    <Image src="/babytoys1.png" alt="" fill className="object-contain drop-shadow-xl" />
                </div>

                <div className="absolute -bottom-18 -right-10 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rotate-[10deg] pointer-events-none select-none">
                    <Image src="/babytoys2.png" alt="" fill className="object-contain drop-shadow-xl" />
                </div>

                <div className="absolute top-1/5 -right-16 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rotate-[18deg] pointer-events-none select-none">
                    <Image src="/babytoys3.png" alt="" fill className="object-contain drop-shadow-xl" />
                </div>

                {/* Contenido */}
                <Ban size={64} className="text-burgundy-dark/40" strokeWidth={1.5} />
                <div className="flex flex-col items-center gap-4">
                    <h2 className="font-serif text-burgundy-dark text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">{t.noKids.heading}</h2>
                    <div className="h-px w-16 bg-burgundy-dark/20" />
                    <p className="font-serif text-burgundy-dark/60 text-lg md:text-2xl leading-relaxed italic">
                        {t.noKids.body}
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-burgundy-dark/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-burgundy-dark/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-burgundy-dark/20" />
                </div>
            </div>
        </section>
    );
}
