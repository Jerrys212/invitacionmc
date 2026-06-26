"use client";

import { Heart } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-burgundy-dark px-8 py-12 flex flex-col items-center gap-8">
            {/* separador superior */}
            <div className="flex items-center gap-4 w-full max-w-sm">
                <div className="h-px flex-1 bg-ivory/20" />
                <Heart size={14} className="text-ivory/40 fill-ivory/40" strokeWidth={1.5} />
                <div className="h-px flex-1 bg-ivory/20" />
            </div>

            {/* contenido */}
            <div className="flex flex-col items-center gap-4 text-center">
                <p className="font-serif text-ivory/60 text-lg md:text-2xl italic">{t.footer.thanks}</p>

                <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-ivory/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-ivory/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-ivory/20" />
                </div>

                <div className="h-px w-16 bg-ivory/20" />

                <p className="font-serif text-ivory/30 text-sm tracking-[0.3em] uppercase">Gerardo García &copy; {currentYear}</p>

                <p className="font-serif text-ivory/20 text-sm italic">{t.footer.madeWith}</p>
            </div>
        </footer>
    );
}
