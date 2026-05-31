"use client";

import { useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";

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

export default function Countdown() {
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [playing, setPlaying] = useState(false);
    const [audio] = useState(() =>
        typeof window !== "undefined" ? new Audio("https://res.cloudinary.com/dsrxyg5rn/video/upload/TU_CANCION.mp3") : null,
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
        { value: time.days, label: "DÍAS" },
        { value: time.hours, label: "HORAS" },
        { value: time.minutes, label: "MIN" },
        { value: time.seconds, label: "SEG" },
    ];

    return (
        <section className="relative min-h-screen w-full bg-burgundy-dark flex flex-col items-center justify-center gap-16 px-6">
            <div className="absolute top-16 w-full flex items-center justify-center gap-4 px-12">
                <div className="h-px flex-1 bg-ivory/30" />
                <p className="font-serif text-ivory/50 text-4xl md:text-6xl lg:text-8xl whitespace-nowrap">M&C</p>
                <div className="h-px flex-1 bg-ivory/30" />
            </div>

            <p className="font-serif text-ivory/60 text-3xl md:text-4xl lg:text-5xl tracking-[0.4em] uppercase">Solo faltan</p>

            <div className="flex items-start gap-10 md:gap-20">
                {units.map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2">
                        <span className="font-serif text-ivory text-4xl md:text-6xl lg:text-8xl font-light leading-none">
                            {String(value).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-ivory/50 text-md tracking-[0.3em]">{label}</span>
                    </div>
                ))}
            </div>

            <div className="h-px w-24 bg-ivory/20" />

            <div className="flex flex-col items-center gap-6">
                <p className="font-serif text-ivory/60 text-md md:text-xl lg:text-2xl tracking-[0.4em] uppercase">Escucha nuestra canción</p>
                <button
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full border border-ivory/30 flex items-center justify-center text-ivory hover:border-ivory hover:text-ivory transition-all duration-500 cursor-pointer"
                >
                    {playing ? <Pause size={18} /> : <Play size={18} />}
                </button>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 h-px w-48 bg-ivory/20" />
        </section>
    );
}
