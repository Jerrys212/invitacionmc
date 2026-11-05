"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, MapPin, Landmark } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Reveal from "./Reveal";

const MAPS_URL = "https://maps.app.goo.gl/TfTGmSjVV7U6oVrw8";

export default function Location() {
    const { t } = useLanguage();
    const details = [
        { icon: CalendarDays, text: t.location.date },
        { icon: Landmark, text: t.location.venue },
        { icon: Clock, text: t.location.time },
    ];

    return (
        <section className="min-h-screen w-full bg-ivory-texture flex flex-col items-center justify-center px-6 md:px-8 py-24 gap-14">
            <Reveal variant="up" className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark/50 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">{t.location.eyebrow}</p>
                <h2 className="font-serif text-burgundy-dark text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">{t.location.heading}</h2>
                <Reveal variant="line" delay={250} className="h-px w-16 bg-burgundy-dark/30 mt-2" />
                <Image src="/evento-simbolo.png" alt="" width={600} height={466} className="w-28 md:w-36 h-auto mt-4 opacity-80" />
            </Reveal>

            <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-5xl">
                <Reveal variant="scale" className="relative w-full lg:w-1/2 h-72 lg:h-96 shrink-0 overflow-hidden">
                    <Image
                        src="/evento-lugar.jpg"
                        alt="Hotel Camino Real Polanco"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                </Reveal>

                <Reveal variant="up" delay={150} className="flex flex-col gap-6 lg:gap-4 flex-1 w-full">
                    <ul className="flex flex-col gap-4 lg:gap-3">
                        {details.map(({ icon: Icon, text }) => (
                            <li key={text} className="flex items-start gap-4">
                                <Icon size={22} strokeWidth={1.5} className="text-burgundy-dark/60 shrink-0 mt-1" />
                                <span className="font-serif text-burgundy-dark text-xl md:text-2xl lg:text-xl">{text}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="h-px w-16 bg-burgundy-dark/20" />

                    <div className="flex flex-col gap-1">
                        <p className="font-serif text-burgundy-dark/50 text-sm md:text-base lg:text-sm tracking-[0.3em] uppercase">{t.location.addressLabel}</p>
                        <p className="font-serif text-burgundy-dark text-lg md:text-xl lg:text-lg leading-relaxed lg:leading-snug">{t.location.address}</p>
                    </div>

                    <Link
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-shine flex items-center gap-3 border border-burgundy-dark/30 px-8 py-4 lg:py-3 text-burgundy-dark font-serif text-sm md:text-lg lg:text-base tracking-[0.4em] uppercase hover:bg-burgundy-dark hover:text-ivory hover:scale-[1.03] active:scale-95 transition-all duration-500 w-fit"
                    >
                        <MapPin size={16} />
                        {t.location.viewLocation}
                    </Link>

                    <div className="flex items-center gap-4 border border-burgundy-dark/15 px-5 py-4 lg:py-3">
                        <Image src="/estacionamiento.png" alt="" width={512} height={512} className="w-10 h-10 lg:w-8 lg:h-8 shrink-0 opacity-70" />
                        <p className="font-serif text-burgundy-dark text-base md:text-lg lg:text-base leading-snug">
                            <span className="uppercase tracking-[0.2em]">{t.location.parkingLabel}:</span> {t.location.parking}
                        </p>
                    </div>
                </Reveal>
            </div>

            <Reveal variant="fade" className="w-full max-w-3xl">
                <p className="font-serif italic text-burgundy-dark/80 text-lg md:text-xl leading-relaxed text-center">{t.location.important}</p>
            </Reveal>
        </section>
    );
}
