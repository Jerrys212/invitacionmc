"use client";

import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Reveal from "./Reveal";

const CLOUDINARY = "https://res.cloudinary.com/dsrxyg5rn/image/upload";

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

export default function Gallery() {
    const { t } = useLanguage();
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
                        <Image
                            src={src}
                            alt="Momento"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </Reveal>
                ))}
            </div>

            <Reveal variant="fade" className="font-serif text-burgundy-dark/40 text-lg md:text-2xl italic text-center">
                {t.gallery.caption}
            </Reveal>
        </section>
    );
}
