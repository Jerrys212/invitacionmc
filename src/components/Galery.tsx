"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Reveal from "./Reveal";

const CLOUDINARY = "https://res.cloudinary.com/dsrxyg5rn/image/upload";
const SWIPE_THRESHOLD = 50;

const photos = [
    { area: "a", src: `${CLOUDINARY}/v1793902542/Engagement_t6xyt8.jpg` },
    { area: "b", src: `${CLOUDINARY}/v1793902540/AF_Ball_g3di2w.jpg` },
    { area: "c", src: `${CLOUDINARY}/v1793902542/Disney_wjt0vm.jpg` },
    { area: "d", src: `${CLOUDINARY}/v1793902542/Greece_d7wtif.jpg` },
    { area: "e", src: `${CLOUDINARY}/v1793902542/Germany_u1gti5.jpg` },
    { area: "f", src: `${CLOUDINARY}/v1793902543/Highlands_by0tn2.jpg` },
    { area: "g", src: `${CLOUDINARY}/v1793902543/London_xxjcyb.jpg` },
    { area: "h", src: `${CLOUDINARY}/v1793902543/Ireland_xgkryy.jpg` },
    { area: "i", src: `${CLOUDINARY}/v1793902544/Texans_stxfge.jpg` },
    { area: "j", src: `${CLOUDINARY}/v1793902552/Copia_de_Album_078_mgp20c.jpg` },
];

function Lightbox({ index, onClose, onChange }: { index: number; onClose: () => void; onChange: (index: number) => void }) {
    const touchStartX = useRef<number | null>(null);

    const prev = useCallback(() => onChange((index - 1 + photos.length) % photos.length), [index, onChange]);
    const next = useCallback(() => onChange((index + 1) % photos.length), [index, onChange]);

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        }
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKey);
        };
    }, [onClose, prev, next]);

    function handleTouchEnd(e: React.TouchEvent) {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (delta > SWIPE_THRESHOLD) prev();
        if (delta < -SWIPE_THRESHOLD) next();
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-[fade-in_0.3s_ease-out]"
            onClick={onClose}
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
        >
            <div className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
                <Image key={photos[index].src} src={photos[index].src} alt="Momento" fill sizes="100vw" className="object-contain" priority />
            </div>

            <button
                type="button"
                aria-label="Cerrar"
                onClick={onClose}
                className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
            >
                <X size={26} />
            </button>

            <button
                type="button"
                aria-label="Anterior"
                onClick={(e) => {
                    e.stopPropagation();
                    prev();
                }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/30 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
            >
                <ChevronLeft size={28} />
            </button>

            <button
                type="button"
                aria-label="Siguiente"
                onClick={(e) => {
                    e.stopPropagation();
                    next();
                }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/30 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
            >
                <ChevronRight size={28} />
            </button>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-serif text-white/70 text-sm tracking-[0.3em] tabular-nums">
                {index + 1} / {photos.length}
            </p>
        </div>
    );
}

export default function Gallery() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const close = useCallback(() => setOpenIndex(null), []);

    return (
        <section className="min-h-screen w-full bg-ivory-texture flex flex-col items-center justify-center px-8 py-24 gap-16">
            <Reveal variant="up" className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark/40 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">{t.gallery.eyebrow}</p>
                <h2 className="font-display text-burgundy-dark text-5xl md:text-6xl lg:text-7xl">{t.gallery.heading}</h2>
                <Reveal variant="line" delay={250} className="h-px w-16 bg-burgundy-dark/30 mt-2" />
            </Reveal>

            <div
                className="w-full max-w-5xl grid gap-2"
                style={{
                    gridTemplateAreas: `
                        "a a b c"
                        "d e e c"
                        "d f g g"
                        "h i j j"
                    `,
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gridTemplateRows: "280px 280px 280px 280px",
                }}
            >
                {photos.map(({ area, src }, i) => (
                    <Reveal key={area} variant="scale" delay={i * 60} className="relative overflow-hidden" style={{ gridArea: area }}>
                        <button type="button" onClick={() => setOpenIndex(i)} aria-label={`Ver foto ${i + 1}`} className="absolute inset-0 w-full h-full">
                            <Image
                                src={src}
                                alt="Momento"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </button>
                    </Reveal>
                ))}
            </div>

            <Reveal variant="fade" className="font-serif text-burgundy-dark/40 text-lg md:text-2xl italic text-center">
                {t.gallery.caption}
            </Reveal>

            {openIndex !== null && <Lightbox index={openIndex} onClose={close} onChange={setOpenIndex} />}
        </section>
    );
}
