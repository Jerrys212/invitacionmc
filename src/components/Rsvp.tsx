"use client";

import { useState } from "react";
import { Check, X, Send } from "lucide-react";
import { submitRsvp } from "@/app/actions/rsvp-action";

interface RsvpProps {
    pases: number;
}

export default function Rsvp({ pases }: RsvpProps) {
    const [nombre, setNombre] = useState("");
    const [asistencia, setAsistencia] = useState<boolean | null>(null);
    const [acompañantes, setAcompañantes] = useState<string[]>(Array(pases).fill(""));
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleAcompañante(index: number, value: string) {
        const updated = [...acompañantes];
        updated[index] = value;
        setAcompañantes(updated);
    }

    async function handleSubmit() {
        if (!nombre || asistencia === null) return;
        setLoading(true);
        await submitRsvp({
            nombre,
            asistencia,
            acompañantes: acompañantes.filter((a) => a.trim() !== ""),
            pases,
        });
        setEnviado(true);
        setLoading(false);
    }

    return (
        <section className="min-h-screen w-full bg-ivory flex flex-col items-center justify-center px-8 py-24 gap-12">
            {/* título */}
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark/40 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">Por favor confirma</p>
                <h2 className="font-display text-burgundy-dark text-5xl md:text-6xl lg:text-7xl">Tu asistencia</h2>
                <div className="h-px w-16 bg-burgundy-dark/30 mt-2" />
            </div>

            {/* pases */}
            <div className="flex flex-col items-center gap-2 border border-burgundy-dark/20 px-12 py-6 w-full max-w-2xl">
                <p className="font-serif text-burgundy-dark/40 text-sm md:text-xl tracking-[0.4em] uppercase">Hemos asignado para ti</p>
                <p className="font-serif text-burgundy-dark text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">
                    {pases + 1} {pases + 1 === 1 ? "Pase" : "Pases"}
                </p>
            </div>

            <div className="flex flex-col gap-8 w-full max-w-2xl">
                {/* nombre */}
                <div className="flex flex-col gap-3">
                    <label className="font-serif text-burgundy-dark text-sm md:text-xl tracking-[0.4em] uppercase">Tu nombre completo</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ej. María González López"
                        className="w-full border border-burgundy-dark/20 bg-transparent px-6 py-4 font-serif text-burgundy-dark text-lg placeholder:text-burgundy-dark/30 focus:outline-none focus:border-burgundy-dark/60 transition-colors"
                    />
                </div>

                {/* asistencia */}
                <div className="flex flex-col gap-3">
                    <label className="font-serif text-burgundy-dark text-sm md:text-xl tracking-[0.4em] uppercase">¿Confirmas tu asistencia?</label>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setAsistencia(true)}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 border font-serif text-sm md:text-xl tracking-[0.3em] uppercase transition-colors duration-300 cursor-pointer ${
                                asistencia === true
                                    ? "bg-burgundy-dark border-burgundy-dark text-ivory"
                                    : "border-burgundy-dark/20 text-burgundy-dark hover:border-burgundy-dark/60"
                            }`}
                        >
                            <Check size={16} />
                            Sí asistiré
                        </button>
                        <button
                            onClick={() => setAsistencia(false)}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 border font-serif text-sm md:text-xl tracking-[0.3em] uppercase transition-colors duration-300 cursor-pointer ${
                                asistencia === false
                                    ? "bg-burgundy-dark border-burgundy-dark text-ivory"
                                    : "border-burgundy-dark/20 text-burgundy-dark hover:border-burgundy-dark/60"
                            }`}
                        >
                            <X size={16} />
                            No podré asistir
                        </button>
                    </div>
                </div>

                {/* acompañantes */}
                {asistencia === true && pases > 0 && (
                    <div className="flex flex-col gap-4 border border-burgundy-dark/20 px-6 py-6">
                        <p className="font-serif text-burgundy-dark text-sm md:text-xl tracking-[0.4em] uppercase">
                            {pases} {pases === 1 ? "Acompañante" : "Acompañantes"}
                        </p>
                        <p className="font-serif text-burgundy-dark/40 text-sm md:text-base italic">Deja en blanco si no llevas acompañantes</p>
                        {acompañantes.map((a, i) => (
                            <input
                                key={i}
                                type="text"
                                value={a}
                                onChange={(e) => handleAcompañante(i, e.target.value)}
                                placeholder="Nombre del acompañante"
                                className="w-full border border-burgundy-dark/20 bg-transparent px-6 py-4 font-serif text-burgundy-dark text-lg placeholder:text-burgundy-dark/30 focus:outline-none focus:border-burgundy-dark/60 transition-colors"
                            />
                        ))}
                    </div>
                )}

                {enviado ? (
                    <div className="w-full flex items-center justify-center gap-3 py-5 border border-burgundy-dark/20">
                        <Check size={16} className="text-burgundy-dark" />
                        <p className="font-serif text-burgundy-dark text-sm md:text-xl tracking-[0.4em] uppercase">¡Registro exitoso!</p>
                    </div>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={loading || !nombre || asistencia === null}
                        className="w-full flex items-center justify-center gap-3 py-5 bg-burgundy-dark text-ivory font-serif text-sm md:text-xl tracking-[0.4em] uppercase disabled:opacity-40 hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        <Send size={16} />
                        {loading ? "Enviando..." : "Confirmar asistencia"}
                    </button>
                )}
            </div>
        </section>
    );
}
