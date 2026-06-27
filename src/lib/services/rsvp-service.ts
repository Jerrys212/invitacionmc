import Rsvp from "@/src/lib/models/Rsvp";
import { connectDB } from "@/src/lib/mongoose";
import { guestSchema, type Guest, type GuestStats } from "@/src/lib/types/rsvp";

export async function getAllGuests(): Promise<Guest[]> {
    await connectDB();
    const docs = await Rsvp.find().sort({ createdAt: -1 }).lean();

    return docs.map((doc) =>
        guestSchema.parse({
            id: String(doc._id),
            nombre: doc.nombre,
            asistencia: doc.asistencia,
            acompañantes: doc.acompañantes ?? [],
            pases: doc.pases,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
        })
    );
}

export function computeStats(guests: Guest[]): GuestStats {
    const confirmados = guests.filter((g) => g.asistencia);
    const noConfirmados = guests.filter((g) => !g.asistencia);
    const totalAcompañantesConfirmados = confirmados.reduce((sum, g) => sum + g.acompañantes.length, 0);

    return {
        totalRespuestas: guests.length,
        confirmados: confirmados.length,
        noConfirmados: noConfirmados.length,
        totalAcompañantesConfirmados,
        totalAsistentesConfirmados: confirmados.length + totalAcompañantesConfirmados,
    };
}
