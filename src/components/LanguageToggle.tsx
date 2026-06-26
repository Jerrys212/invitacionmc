"use client";

import { useLanguage } from "@/src/contexts/LanguageContext";

export default function LanguageToggle() {
    const { locale, toggleLocale } = useLanguage();

    return (
        <button
            onClick={toggleLocale}
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
            className="fixed top-4 right-4 z-50 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/25 px-3 py-1.5 text-white hover:bg-black/50 transition-all duration-300 cursor-pointer"
        >
            <span className={`font-serif text-xs tracking-[0.2em] uppercase transition-opacity duration-200 ${locale === "es" ? "opacity-100" : "opacity-35"}`}>
                ES
            </span>
            <span className="font-serif text-xs text-white/30">|</span>
            <span className={`font-serif text-xs tracking-[0.2em] uppercase transition-opacity duration-200 ${locale === "en" ? "opacity-100" : "opacity-35"}`}>
                EN
            </span>
        </button>
    );
}
