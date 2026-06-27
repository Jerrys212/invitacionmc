"use client";

import { useMemo, useState } from "react";
import { Check, Search, X } from "lucide-react";
import type { Guest } from "@/src/lib/types/rsvp";

interface GuestTableProps {
    guests: Guest[];
}

type Filter = "todos" | "confirmados" | "no-confirmados";

const FILTERS: { value: Filter; label: string }[] = [
    { value: "todos", label: "Todos" },
    { value: "confirmados", label: "Confirmados" },
    { value: "no-confirmados", label: "No confirmados" },
];

export default function GuestTable({ guests }: GuestTableProps) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<Filter>("todos");

    const filteredGuests = useMemo(() => {
        const term = search.trim().toLowerCase();

        return guests.filter((guest) => {
            if (filter === "confirmados" && !guest.asistencia) return false;
            if (filter === "no-confirmados" && guest.asistencia) return false;
            if (!term) return true;

            const haystack = [guest.nombre, ...guest.acompañantes].join(" ").toLowerCase();
            return haystack.includes(term);
        });
    }, [guests, search, filter]);

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-burgundy-dark/40" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar invitado o acompañante..."
                        className="w-full border border-burgundy-dark/20 bg-transparent pl-11 pr-4 py-3 font-serif text-burgundy-dark placeholder:text-burgundy-dark/30 focus:outline-none focus:border-burgundy-dark/60 transition-all duration-300"
                    />
                </div>

                <div className="flex gap-2">
                    {FILTERS.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setFilter(f.value)}
                            className={`px-4 py-2 border font-serif text-sm tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                                filter === f.value
                                    ? "bg-burgundy-dark border-burgundy-dark text-ivory"
                                    : "border-burgundy-dark/20 text-burgundy-dark hover:border-burgundy-dark/60"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="border border-burgundy-dark/20 overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-burgundy-dark/20 bg-burgundy-dark/5">
                            <th className="px-5 py-3 font-serif text-burgundy-dark text-sm tracking-[0.2em] uppercase">Invitado</th>
                            <th className="px-5 py-3 font-serif text-burgundy-dark text-sm tracking-[0.2em] uppercase">Asistencia</th>
                            <th className="px-5 py-3 font-serif text-burgundy-dark text-sm tracking-[0.2em] uppercase">Pases</th>
                            <th className="px-5 py-3 font-serif text-burgundy-dark text-sm tracking-[0.2em] uppercase">Acompañantes</th>
                            <th className="px-5 py-3 font-serif text-burgundy-dark text-sm tracking-[0.2em] uppercase">Respondió</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGuests.map((guest) => (
                            <tr key={guest.id} className="border-b border-burgundy-dark/10 last:border-b-0 hover:bg-burgundy-dark/[0.03] transition-colors">
                                <td className="px-5 py-4 font-serif text-burgundy-dark text-base">{guest.nombre}</td>
                                <td className="px-5 py-4">
                                    {guest.asistencia ? (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-burgundy-dark bg-burgundy-dark text-ivory font-serif text-xs tracking-[0.15em] uppercase">
                                            <Check size={12} />
                                            Asiste
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-burgundy-dark/30 text-burgundy-dark/70 font-serif text-xs tracking-[0.15em] uppercase">
                                            <X size={12} />
                                            No asiste
                                        </span>
                                    )}
                                </td>
                                <td className="px-5 py-4 font-serif text-burgundy-dark/70 text-base">{guest.pases + 1}</td>
                                <td className="px-5 py-4 font-serif text-burgundy-dark/70 text-sm">
                                    {guest.acompañantes.length > 0 ? guest.acompañantes.join(", ") : "—"}
                                </td>
                                <td className="px-5 py-4 font-serif text-burgundy-dark/50 text-sm whitespace-nowrap">
                                    {guest.createdAt.toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" })}
                                </td>
                            </tr>
                        ))}

                        {filteredGuests.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-5 py-10 text-center font-serif text-burgundy-dark/40 italic">
                                    No se encontraron invitados con estos filtros.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
