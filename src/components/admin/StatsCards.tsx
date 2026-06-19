import type { GuestStats } from "@/src/lib/types/rsvp";

interface StatsCardsProps {
    stats: GuestStats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
    const cards = [
        { label: "Respuestas totales", value: stats.totalRespuestas },
        { label: "Confirmados", value: stats.confirmados },
        { label: "No confirmados", value: stats.noConfirmados },
        { label: "Asistentes totales", value: stats.totalAsistentesConfirmados },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {cards.map((card) => (
                <div key={card.label} className="flex flex-col items-center gap-1 border border-burgundy-dark/20 px-4 py-6">
                    <p className="font-serif text-burgundy-dark text-3xl md:text-4xl">{card.value}</p>
                    <p className="font-serif text-burgundy-dark/50 text-xs md:text-sm tracking-[0.15em] uppercase text-center">{card.label}</p>
                </div>
            ))}
        </div>
    );
}
