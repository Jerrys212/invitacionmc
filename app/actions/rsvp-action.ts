"use server";

import Rsvp from "@/src/lib/models/Rsvp";
import { connectDB } from "@/src/lib/mongoose";
import { sendRsvpNotification } from "@/src/lib/mailer";
import { rsvpInputSchema } from "@/src/lib/types/rsvp";
import type { ApiResponse } from "@/src/lib/api/response";

export async function submitRsvp(formData: unknown): Promise<ApiResponse<{ id: string }>> {
    const parsed = rsvpInputSchema.safeParse(formData);

    if (!parsed.success) {
        const issues = parsed.error.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message }));
        return { success: false, error: "Datos inválidos", issues };
    }

    try {
        await connectDB();
        const created = await Rsvp.create(parsed.data);
        try {
            await sendRsvpNotification(parsed.data);
        } catch (mailError) {
            console.error("RSVP notification failed", mailError);
        }
        return { success: true, data: { id: String(created._id) } };
    } catch (err) {
        const message = err instanceof Error ? err.message : "Error inesperado";
        return { success: false, error: message };
    }
}
