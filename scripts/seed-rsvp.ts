import mongoose from "mongoose";
import Rsvp from "@/src/lib/models/Rsvp";
import { connectDB } from "@/src/lib/mongoose";
import { computeStats } from "@/src/lib/services/rsvp-service";
import { rsvpInputSchema, type RsvpInput } from "@/src/lib/types/rsvp";

function daysAgo(days: number): Date {
    return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}

const sampleGuests: (RsvpInput & { createdAt: Date })[] = [
    { nombre: "María Fernanda López Torres", asistencia: true, pases: 2, acompañantes: ["Juan Carlos Pérez", "Ana Sofía Pérez"], createdAt: daysAgo(21) },
    { nombre: "Roberto Sánchez Ortiz", asistencia: false, pases: 1, acompañantes: [], createdAt: daysAgo(19) },
    { nombre: "Daniela Martínez Ruiz", asistencia: true, pases: 1, acompañantes: ["Pedro Martínez"], createdAt: daysAgo(17) },
    { nombre: "Carlos Alberto Gómez", asistencia: false, pases: 0, acompañantes: [], createdAt: daysAgo(15) },
    { nombre: "Valentina Castillo Reyes", asistencia: true, pases: 0, acompañantes: [], createdAt: daysAgo(12) },
    { nombre: "Eduardo Jiménez Flores", asistencia: true, pases: 3, acompañantes: ["Lucía Jiménez", "Mateo Jiménez", "Renata Jiménez"], createdAt: daysAgo(10) },
    { nombre: "Patricia Ramírez Soto", asistencia: false, pases: 1, acompañantes: [], createdAt: daysAgo(7) },
    { nombre: "Andrés Torres Vega", asistencia: true, pases: 1, acompañantes: ["Camila Torres"], createdAt: daysAgo(5) },
    { nombre: "Gabriela Moreno Díaz", asistencia: false, pases: 2, acompañantes: [], createdAt: daysAgo(3) },
    { nombre: "Fernando Ortiz Medina", asistencia: true, pases: 0, acompañantes: [], createdAt: daysAgo(1) },
];

async function main() {
    const reset = process.argv.includes("--reset");

    await connectDB();

    if (reset) {
        const { deletedCount } = await Rsvp.deleteMany({});
        console.log(`Eliminados ${deletedCount} registros existentes.`);
    }

    const docs = sampleGuests.map(({ createdAt, ...input }) => ({
        ...rsvpInputSchema.parse(input),
        createdAt,
        updatedAt: createdAt,
    }));

    const created = await Rsvp.insertMany(docs);
    console.log(`Insertados ${created.length} invitados de prueba.`);

    const guests = await Rsvp.find().lean();
    const stats = computeStats(
        guests.map((g) => ({
            id: String(g._id),
            nombre: g.nombre,
            asistencia: g.asistencia,
            acompañantes: g.acompañantes ?? [],
            pases: g.pases,
            createdAt: g.createdAt,
            updatedAt: g.updatedAt,
        }))
    );
    console.log("Estado actual de la colección:", stats);

    await mongoose.disconnect();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
