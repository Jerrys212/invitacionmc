"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Locale, type Translations } from "@/src/lib/translations";

interface LanguageContextValue {
    locale: Locale;
    t: Translations;
    toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
    locale: "es",
    t: translations.es,
    toggleLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>("es");

    useEffect(() => {
        const saved = localStorage.getItem("mc-locale") as Locale | null;
        if (saved === "en" || saved === "es") setLocale(saved);
    }, []);

    function toggleLocale() {
        const next: Locale = locale === "es" ? "en" : "es";
        setLocale(next);
        localStorage.setItem("mc-locale", next);
    }

    return (
        <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
