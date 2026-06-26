"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/src/contexts/LanguageContext";

const placesMeta = [
    {
        maps: "https://maps.app.goo.gl/gRjAMSDn8baCZo6o7",
        image: "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780117121/nick-kwan-FeBoOVQv0sQ-unsplash_rkjver.jpg",
    },
    {
        maps: "https://maps.app.goo.gl/LYyx22D7KcfmLNq2A",
        image: "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780117237/pexels-enzo-renz-424999667-28226134_imthup.jpg",
    },
    {
        maps: "https://maps.app.goo.gl/QSg4KxEqXEbs9ZMp7",
        image: "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780117352/obed-hernandez-ta6FUMWx9_o-unsplash_gvkydc.jpg",
    },
    {
        maps: "https://maps.app.goo.gl/Fo4uu5uGK8XVBxXx6",
        image: "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780117456/bhargava-marripati-7LDBKPWAHJ4-unsplash_kwc9ep.jpg",
    },
];

export default function Visit() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen w-full bg-ivory/80 flex flex-col items-center justify-center px-8 py-24 gap-16">
            {/* título */}
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark text-sm md:text-xl tracking-[0.4em] uppercase">{t.visit.eyebrow}</p>
                <h2 className="font-serif text-burgundy-dark text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">{t.visit.heading}</h2>
                <div className="h-px w-16 bg-burgundy-dark/30 mt-2" />
            </div>

            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {t.visit.places.map((place, i) => (
                    <div key={place.name} className="flex flex-col bg-ivory border border-burgundy-dark/10">
                        {/* imagen */}
                        <div className="relative w-full h-64">
                            <Image
                                src={placesMeta[i].image}
                                alt={place.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        {/* contenido */}
                        <div className="flex flex-col gap-4 px-6 py-6">
                            <h3 className="font-serif text-burgundy-dark text-lg md:text-2xl tracking-widest uppercase">{place.name}</h3>
                            <p className="font-serif text-burgundy-dark text-md md:text-base leading-relaxed">{place.description}</p>
                            <Link
                                href={placesMeta[i].maps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-burgundy-dark hover:text-burgundy-dark transition-colors duration-300 mt-2"
                            >
                                <MapPin size={16} />
                                <span className="font-serif text-xs tracking-[0.3em] uppercase">{t.visit.mapsLabel}</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
