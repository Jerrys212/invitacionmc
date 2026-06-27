import { z } from "zod";

export const rsvpInputSchema = z.object({
    nombre: z.string().trim().min(1, "El nombre es requerido"),
    asistencia: z.boolean(),
    acompañantes: z.array(z.string().trim().min(1)).default([]),
    pases: z.number().int().min(0),
});

export type RsvpInput = z.infer<typeof rsvpInputSchema>;

export const guestSchema = rsvpInputSchema.extend({
    id: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});

export type Guest = z.infer<typeof guestSchema>;

export interface GuestStats {
    totalRespuestas: number;
    confirmados: number;
    noConfirmados: number;
    totalAcompañantesConfirmados: number;
    totalAsistentesConfirmados: number;
}
