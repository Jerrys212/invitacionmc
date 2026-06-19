import { getTransporter } from "@/src/lib/mail/mailer";
import type { RsvpInput } from "@/src/lib/types/rsvp";

const NOTIFICATION_EMAIL = "jerryrogers2305@gmail.com";

export async function sendRsvpNotification(rsvp: RsvpInput): Promise<void> {
    const asistenciaTexto = rsvp.asistencia ? "Sí asistirá" : "No podrá asistir";
    const acompañantesTexto = rsvp.acompañantes.length > 0 ? rsvp.acompañantes.join(", ") : "Ninguno";

    await getTransporter().sendMail({
        from: `"Invitación MC" <${process.env.SMTP_USER}>`,
        to: NOTIFICATION_EMAIL,
        subject: `Nueva confirmación de asistencia: ${rsvp.nombre}`,
        text: [
            `Nombre: ${rsvp.nombre}`,
            `Asistencia: ${asistenciaTexto}`,
            `Pases asignados: ${rsvp.pases}`,
            `Acompañantes: ${acompañantesTexto}`,
        ].join("\n"),
        html: `
            <h2>Nueva confirmación de asistencia</h2>
            <p><strong>Nombre:</strong> ${rsvp.nombre}</p>
            <p><strong>Asistencia:</strong> ${asistenciaTexto}</p>
            <p><strong>Pases asignados:</strong> ${rsvp.pases}</p>
            <p><strong>Acompañantes:</strong> ${acompañantesTexto}</p>
        `,
    });
}
