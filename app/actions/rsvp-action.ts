"use server";

import Rsvp from "@/src/lib/models/Rsvp";
import { connectDB } from "@/src/lib/mongoose";

console.log("URI:", process.env.MONGODB_URI);

export async function submitRsvp(formData: {
    nombre: string;
    asistencia: boolean;
    acompañantes: string[];
    pases: number;
}) {
    await connectDB();

    await Rsvp.create({
        nombre: formData.nombre,
        asistencia: formData.asistencia,
        acompañantes: formData.acompañantes,
        pases: formData.pases,
    });
}