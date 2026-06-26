"use client";

import { useState } from "react";
import { Check, X, Send, AlertCircle } from "lucide-react";
import { submitRsvp } from "@/app/actions/rsvp-action";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Reveal from "./Reveal";

interface RsvpProps {
    pases: number;
}

export default function Rsvp({ pases }: RsvpProps) {
    const { t } = useLanguage();
    const [nombre, setNombre] = useState("");
    const [asistencia, setAsistencia] = useState<boolean | null>(null);
    const [acompañantes, setAcompañantes] = useState<string[]>(Array(pases).fill(""));
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleAcompañante(index: number, value: string) {
        const updated = [...acompañantes];
        updated[index] = value;
        setAcompañantes(updated);
    }

    async function handleSubmit() {
        if (!nombre || asistencia === null) return;
        setLoading(true);
        setError(null);

        const result = await submitRsvp({
            nombre,
            asistencia,
            acompañantes: acompañantes.filter((a) => a.trim() !== ""),
            pases,
        });

        setLoading(false);
        if (!result.success) {
            setError(result.error);
            return;
        }
        setEnviado(true);
    }

    return (
        <section className="min-h-screen w-full bg-ivory flex flex-col items-center justify-center px-8 py-24 gap-12">
            {/* título */}
            <Reveal variant="up" className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark/40 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">{t.rsvp.eyebrow}</p>
                <h2 className="font-display text-burgundy-dark text-5xl md:text-6xl lg:text-7xl">{t.rsvp.heading}</h2>
                <Reveal variant="line" delay={250} className="h-px w-16 bg-burgundy-dark/30 mt-2" />
            </Reveal>

            {/* pases */}
            <Reveal variant="up" className="flex flex-col items-center gap-2 border border-burgundy-dark/20 px-12 py-6 w-full max-w-2xl hover-lift">
                <p className="font-serif text-burgundy-dark/40 text-sm md:text-xl tracking-[0.4em] uppercase">{t.rsvp.assignedEyebrow}</p>
                <p className="font-serif text-burgundy-dark text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">
                    {pases + 1} {pases + 1 === 1 ? t.rsvp.pass : t.rsvp.passes}
                </p>
            </Reveal>

            {/* notas importantes */}
            <Reveal variant="up" className="flex flex-col gap-6 border border-burgundy-dark/20 px-8 py-8 w-full max-w-2xl">
                <div className="flex items-start gap-4">
                    <AlertCircle size={22} className="text-burgundy-dark/50 shrink-0 mt-1" strokeWidth={1.5} />
                    <p className="font-serif italic text-burgundy-dark text-lg md:text-xl leading-relaxed">
                        {t.rsvp.noteIntro}
                    </p>
                </div>
                <ul className="font-serif text-burgundy-dark/80 text-base md:text-lg leading-relaxed space-y-4 list-disc list-inside marker:text-burgundy-dark/40">
                    <li>{t.rsvp.note1}</li>
                    <li>{t.rsvp.note2}</li>
                    <li>{t.rsvp.note3}</li>
                </ul>
            </Reveal>

            <Reveal variant="up" className="flex flex-col gap-8 w-full max-w-2xl">
                {/* nombre */}
                <div className="flex flex-col gap-3">
                    <label className="font-serif text-burgundy-dark text-sm md:text-xl tracking-[0.4em] uppercase">{t.rsvp.nameLabel}</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder={t.rsvp.namePlaceholder}
                        className="w-full border border-burgundy-dark/20 bg-transparent px-6 py-4 font-serif text-burgundy-dark text-lg placeholder:text-burgundy-dark/30 focus:outline-none focus:border-burgundy-dark/60 focus:shadow-[0_0_0_3px_rgba(92,26,26,0.08)] transition-all duration-300"
                    />
                </div>

                {/* asistencia */}
                <div className="flex flex-col gap-3">
                    <label className="font-serif text-burgundy-dark text-sm md:text-xl tracking-[0.4em] uppercase">{t.rsvp.attendLabel}</label>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setAsistencia(true)}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 border font-serif text-sm md:text-xl tracking-[0.3em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer ${
                                asistencia === true
                                    ? "bg-burgundy-dark border-burgundy-dark text-ivory"
                                    : "border-burgundy-dark/20 text-burgundy-dark hover:border-burgundy-dark/60"
                            }`}
                        >
                            <Check size={16} />
                            {t.rsvp.yes}
                        </button>
                        <button
                            onClick={() => setAsistencia(false)}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 border font-serif text-sm md:text-xl tracking-[0.3em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer ${
                                asistencia === false
                                    ? "bg-burgundy-dark border-burgundy-dark text-ivory"
                                    : "border-burgundy-dark/20 text-burgundy-dark hover:border-burgundy-dark/60"
                            }`}
                        >
                            <X size={16} />
                            {t.rsvp.no}
                        </button>
                    </div>
                </div>

                {/* acompañantes */}
                {asistencia === true && pases > 0 && (
                    <Reveal variant="up" className="flex flex-col gap-4 border border-burgundy-dark/20 px-6 py-6">
                        <p className="font-serif text-burgundy-dark text-sm md:text-xl tracking-[0.4em] uppercase">
                            {pases} {pases === 1 ? t.rsvp.companion : t.rsvp.companions}
                        </p>
                        <p className="font-serif text-burgundy-dark/40 text-sm md:text-base italic">{t.rsvp.companionHint}</p>
                        {acompañantes.map((a, i) => (
                            <input
                                key={i}
                                type="text"
                                value={a}
                                onChange={(e) => handleAcompañante(i, e.target.value)}
                                placeholder={t.rsvp.companionPlaceholder}
                                className="w-full border border-burgundy-dark/20 bg-transparent px-6 py-4 font-serif text-burgundy-dark text-lg placeholder:text-burgundy-dark/30 focus:outline-none focus:border-burgundy-dark/60 focus:shadow-[0_0_0_3px_rgba(92,26,26,0.08)] transition-all duration-300"
                            />
                        ))}
                    </Reveal>
                )}

                {enviado ? (
                    <div className="w-full flex items-center justify-center gap-3 py-5 border border-burgundy-dark/20 animate-[fade-in_0.5s_ease-out]">
                        <Check size={16} className="text-burgundy-dark" />
                        <p className="font-serif text-burgundy-dark text-sm md:text-xl tracking-[0.4em] uppercase">{t.rsvp.success}</p>
                    </div>
                ) : (
                    <>
                        {error && (
                            <div className="w-full flex items-center gap-3 py-4 px-6 border border-burgundy-dark/40 bg-burgundy-dark/5 animate-[fade-in_0.3s_ease-out]">
                                <AlertCircle size={18} className="text-burgundy-dark shrink-0" />
                                <p className="font-serif text-burgundy-dark text-sm md:text-base">{error}</p>
                            </div>
                        )}
                        <button
                            onClick={handleSubmit}
                            disabled={loading || !nombre || asistencia === null}
                            className="btn-shine w-full flex items-center justify-center gap-3 py-5 bg-burgundy-dark text-ivory font-serif text-sm md:text-xl tracking-[0.4em] uppercase disabled:opacity-40 hover:opacity-90 hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer"
                        >
                            <Send size={16} />
                            {loading ? t.rsvp.sending : t.rsvp.confirm}
                        </button>
                    </>
                )}
            </Reveal>
        </section>
    );
}
