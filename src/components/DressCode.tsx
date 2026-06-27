"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function DressCode() {
    const { locale } = useLanguage();

    const dkSrc = locale === "en" ? "/dresscodeen.png" : "/dresscodedk.png";
    const mbSrc = locale === "en" ? "/dresscodemb-en.png" : "/dresscodemb.png";
    const alt = locale === "en" ? "Dress code" : "imagen dresscode";

    return (
        <section
            className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 py-12 sm:py-16"
            style={{
                backgroundImage: "url('/bg3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Desktop / tablet: 1920×1280 */}
            <Reveal variant="scale" className="hidden sm:block w-full max-w-3xl">
                <Image
                    src={dkSrc}
                    width={1920}
                    height={1280}
                    alt={alt}
                    sizes="(max-width: 1024px) 70vw, 800px"
                    className="w-full h-auto object-contain"
                    priority
                />
            </Reveal>

            {/* Mobile: 1280×1920 */}
            <Reveal variant="scale" className="block sm:hidden w-full max-w-sm">
                <Image
                    src={mbSrc}
                    width={1280}
                    height={1920}
                    alt={alt}
                    sizes="90vw"
                    className="w-full h-auto object-contain"
                    priority
                />
            </Reveal>
        </section>
    );
}
