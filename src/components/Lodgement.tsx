"use client";

import Image from "next/image";
import { Hotel, Tag } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Lodgement() {
    const { t } = useLanguage();
    return (
        <section className="min-h-screen w-full bg-burgundy-dark flex flex-col items-center justify-center px-8 py-24 gap-16">
            {/* título */}
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-ivory/40 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">{t.lodgement.eyebrow}</p>
                <h2 className="font-serif text-ivory text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">{t.lodgement.heading}</h2>
                <div className="h-px w-16 bg-ivory/30 mt-2" />
            </div>

            {/* contenido */}
            <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-5xl">
                {/* texto */}
                <div className="flex flex-col gap-6 flex-1">
                    <div className="flex flex-col gap-2">
                        <p className="font-serif text-ivory text-lg md:text-2xl tracking-widest uppercase">Hotel Camino Real</p>
                        <p className="font-serif text-ivory/40 text-sm md:text-xl tracking-[0.4em] uppercase">{t.lodgement.hotelLabel}</p>
                    </div>

                    <div className="h-px w-16 bg-ivory/20" />

                    {/* código de descuento */}
                    <div className="flex flex-col gap-3 border border-ivory/20 px-6 py-5">
                        <div className="flex items-center gap-2">
                            <Tag size={16} className="text-ivory/40" />
                            <p className="font-serif text-ivory/40 text-sm tracking-[0.4em] uppercase">{t.lodgement.discountLabel}</p>
                        </div>
                        <p className="font-serif text-ivory/30 text-lg md:text-2xl tracking-widest italic">{t.lodgement.comingSoon}</p>
                    </div>
                    <Link
                        href="https://www.grupocaminoreal.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 border border-ivory/30 px-8 py-4 text-ivory font-serif text-sm md:text-xl tracking-[0.4em] uppercase hover:bg-ivory hover:text-burgundy-dark transition-all duration-500 w-fit"
                    >
                        <Hotel size={16} />
                        {t.lodgement.viewHotel}
                    </Link>
                </div>

                <div className="relative w-full lg:w-1/2 h-72 lg:h-96 flex-shrink-0">
                    <Image
                        src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780186755/hotel_real_pjgww2.jpg"
                        alt="Hotel Camino Real"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
