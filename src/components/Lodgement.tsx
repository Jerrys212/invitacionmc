"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Hotel, Tag, Copy, Check } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Reveal from "./Reveal";

const GUEST_CODE = "1712BODAMYC";
const BOOKING_URL = "https://www.grupocaminoreal.com/camino-real-polanco-mexico";

export default function Lodgement() {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    async function copyCode() {
        try {
            await navigator.clipboard.writeText(GUEST_CODE);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    return (
        <section className="min-h-screen w-full bg-burgundy-texture flex flex-col items-center justify-center px-6 md:px-8 py-24 gap-16">
            <Reveal variant="up" className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-ivory/50 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">{t.lodgement.eyebrow}</p>
                <h2 className="font-serif text-ivory text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">{t.lodgement.heading}</h2>
                <Reveal variant="line" delay={250} className="h-px w-16 bg-ivory/30 mt-2" />
                <Image src="/simbolo-hotel.webp" alt="" width={512} height={512} className="w-16 md:w-20 h-auto mt-4 brightness-0 invert opacity-80" />
            </Reveal>

            <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-5xl">
                <Reveal variant="up" className="flex flex-col gap-6 flex-1 w-full">
                    <div className="flex flex-col gap-2">
                        <p className="font-serif text-ivory text-lg md:text-2xl tracking-widest uppercase">Hotel Camino Real Polanco</p>
                        <p className="font-serif text-ivory/50 text-sm md:text-xl tracking-[0.4em] uppercase">{t.lodgement.hotelLabel}</p>
                    </div>

                    <div className="h-px w-16 bg-ivory/20" />

                    <div className="flex flex-col gap-3 border border-ivory/20 px-6 py-5 hover-lift">
                        <div className="flex items-center gap-2">
                            <Tag size={16} className="text-ivory/50" />
                            <p className="font-serif text-ivory/50 text-sm tracking-[0.3em] uppercase">{t.lodgement.discountLabel}</p>
                        </div>
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <p className="font-serif text-ivory text-2xl md:text-3xl tracking-[0.2em] select-all">{GUEST_CODE}</p>
                            <button
                                type="button"
                                onClick={copyCode}
                                className="flex items-center gap-2 text-ivory/70 hover:text-ivory font-serif text-xs md:text-sm tracking-[0.3em] uppercase transition-colors duration-300"
                            >
                                {copied ? <Check size={14} /> : <Copy size={14} />}
                                {copied ? t.lodgement.copied : t.lodgement.copy}
                            </button>
                        </div>
                    </div>

                    <Link
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-shine flex items-center gap-3 border border-ivory/30 px-8 py-4 text-ivory font-serif text-sm md:text-xl tracking-[0.4em] uppercase hover:bg-ivory hover:text-burgundy-dark hover:scale-[1.03] active:scale-95 transition-all duration-500 w-fit"
                    >
                        <Hotel size={16} />
                        {t.lodgement.book}
                    </Link>
                </Reveal>

                <Reveal variant="scale" delay={150} className="relative w-full lg:w-1/2 h-72 lg:h-96 shrink-0 overflow-hidden">
                    <Image
                        src="/camino-real-polanco.jpg"
                        alt="Hotel Camino Real Polanco"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                </Reveal>
            </div>
        </section>
    );
}
