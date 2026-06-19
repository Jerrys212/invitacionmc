import ExportButtons from "@/src/components/admin/ExportButtons";
import GuestTable from "@/src/components/admin/GuestTable";
import StatsCards from "@/src/components/admin/StatsCards";
import { computeStats, getAllGuests } from "@/src/lib/services/rsvp-service";

export const dynamic = "force-dynamic";

export default async function InvitadosPage() {
    const guests = await getAllGuests();
    const stats = computeStats(guests);

    return (
        <section className="min-h-screen w-full bg-ivory flex flex-col items-center px-6 md:px-12 py-16 gap-10">
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark/40 text-sm md:text-lg tracking-[0.4em] uppercase">Panel de boda</p>
                <h1 className="font-display text-burgundy-dark text-4xl md:text-6xl">Invitados</h1>
                <div className="h-px w-16 bg-burgundy-dark/30 mt-2" />
            </div>

            <div className="w-full max-w-5xl flex flex-col gap-8">
                <StatsCards stats={stats} />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="font-serif text-burgundy-dark/60 text-sm md:text-base">
                        Lista completa de invitados con su confirmación de asistencia.
                    </p>
                    <ExportButtons />
                </div>

                <GuestTable guests={guests} />
            </div>
        </section>
    );
}
