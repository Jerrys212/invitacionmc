"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Play, Pause, Music } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Reveal from "./Reveal";

const WEDDING_DATE = new Date("2026-12-19T00:00:00");

function getTimeLeft() {
    const now = new Date();
    const diff = WEDDING_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

export default function Hero() {
    const { t } = useLanguage();
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [playing, setPlaying] = useState(false);
    const [audio] = useState(() =>
        typeof window !== "undefined" ? new Audio("https://res.cloudinary.com/dsrxyg5rn/video/upload/v1793902198/How_long_will_I_love_you_-_Jon_Boden_Sam_Sweeney_Ben_Coleman_xcazoy.mp3") : null,
    );

    useEffect(() => {
        const interval = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(interval);
    }, []);

    function togglePlay() {
        if (!audio) return;
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    }

    const units = [
        { value: time.days, label: t.hero.days },
        { value: time.hours, label: t.hero.hrs },
        { value: time.minutes, label: t.hero.min },
        { value: time.seconds, label: t.hero.sec },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Imágenes de fondo */}
            <div className="absolute inset-0 hidden lg:block animate-ken-burns">
                <Image
                    src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780029538/Album_157_1_mihkkv.avif"
                    alt="Mariana & Christopher"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 lg:hidden animate-ken-burns">
                <Image
                    src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780029538/Album_140_x00whc.avif"
                    alt="Mariana & Christopher"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-black/40" />

            {/* Contenido principal */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-between py-16 px-6 text-white text-center">
                {/* Título hero — arriba */}
                <Reveal immediate variant="up" className="flex flex-col items-center gap-2 mt-6">
                    <p className="uppercase font-display text-7xl md:text-8xl lg:text-9xl">M&C</p>
                    <p className="font-serif text-xl md:text-2xl tracking-widest">Mariana & Christopher</p>
                </Reveal>

                {/* Contador — abajo */}
                <Reveal immediate variant="up" delay={200} className="flex flex-col items-center gap-6 mb-4">
                    {/* Fecha + botón play */}
                    <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={playing ? t.hero.pauseSong : t.hero.playSong}
                        className="group flex items-center gap-3 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm pl-2 pr-5 py-2 text-white hover:bg-white/20 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <span className="relative flex w-10 h-10 items-center justify-center">
                            {!playing && <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />}
                            <span className="relative flex w-10 h-10 items-center justify-center rounded-full bg-white text-burgundy-dark">
                                {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
                            </span>
                        </span>
                        <span className="flex items-center gap-2 font-serif text-sm md:text-base tracking-[0.2em] uppercase">
                            {playing ? <Music size={14} className="animate-pulse" /> : null}
                            {playing ? t.hero.pauseSong : t.hero.playSong}
                        </span>
                    </button>

                    <p className="font-serif text-white/80 text-lg md:text-xl tracking-[0.3em]">{t.hero.date}</p>

                    {/* Línea divisora */}
                    <div className="h-px w-64 md:w-96 bg-white/30" />

                    {/* Números del contador */}
                    <div className="flex items-start gap-8 md:gap-14">
                        {units.map(({ value, label }) => (
                            <div key={label} className="flex flex-col items-center gap-1">
                                <span className="font-serif text-white text-4xl md:text-6xl font-light leading-none tabular-nums">
                                    {String(value).padStart(2, "0")}
                                </span>
                                <span className="font-serif text-white/50 text-xs tracking-[0.3em]">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Línea inferior */}
                    <div className="h-px w-64 md:w-96 bg-white/30" />
                </Reveal>
            </div>
        </section>
    );
}
