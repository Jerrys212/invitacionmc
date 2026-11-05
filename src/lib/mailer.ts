import nodemailer from "nodemailer";
import type { RsvpInput } from "@/src/lib/types/rsvp";

const BRAND = {
    burgundy: "#5c1a1a",
    ivory: "#f5f0e8",
    tan: "#c4a882",
    cream: "#e8d5b0",
};

const SERIF = "'Cormorant Garamond', Georgia, 'Times New Roman', serif";
const SCRIPT = "'Imperial Script', 'Brush Script MT', cursive";

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function getTransport() {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
    const port = Number(SMTP_PORT) || 587;
    return nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
}

function detailRow(label: string, value: string) {
    return `
        <tr>
            <td style="padding: 14px 0; border-bottom: 1px solid ${BRAND.cream};">
                <p style="margin: 0 0 4px; font-family: ${SERIF}; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: ${BRAND.burgundy}; opacity: 0.6;">${label}</p>
                <p style="margin: 0; font-family: ${SERIF}; font-size: 20px; color: ${BRAND.burgundy};">${value}</p>
            </td>
        </tr>`;
}

export function renderRsvpEmail(rsvp: RsvpInput) {
    const attending = rsvp.asistencia;
    const total = attending ? 1 + rsvp.acompañantes.length : 0;
    const companions = rsvp.acompañantes.length
        ? rsvp.acompañantes.map((name) => escapeHtml(name)).join("<br>")
        : `<span style="font-style: italic; opacity: 0.6;">Ninguno</span>`;

    const badge = attending
        ? `<span style="display: inline-block; padding: 8px 22px; background: ${BRAND.burgundy}; color: ${BRAND.ivory}; font-family: ${SERIF}; font-size: 13px; letter-spacing: 4px; text-transform: uppercase;">Asistirá</span>`
        : `<span style="display: inline-block; padding: 7px 21px; border: 1px solid ${BRAND.burgundy}; color: ${BRAND.burgundy}; font-family: ${SERIF}; font-size: 13px; letter-spacing: 4px; text-transform: uppercase;">No asistirá</span>`;

    const rows = [
        detailRow("Pases asignados", String(rsvp.pases + 1)),
        attending ? detailRow("Acompañantes", companions) : "",
        detailRow("Total de asistentes", String(total)),
    ].join("");

    return `<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Imperial+Script&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background: ${BRAND.burgundy};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: ${BRAND.burgundy};">
        <tr>
            <td align="center" style="padding: 40px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px; background: ${BRAND.ivory};">
                    <tr>
                        <td align="center" style="padding: 44px 32px 8px;">
                            <p style="margin: 0; font-family: ${SCRIPT}; font-size: 64px; line-height: 1; color: ${BRAND.burgundy};">M&nbsp;&nbsp;<span style="font-size: 52px;">&amp;</span>&nbsp;&nbsp;C</p>
                            <p style="margin: 10px 0 0; font-family: ${SERIF}; font-size: 13px; letter-spacing: 5px; text-transform: uppercase; color: ${BRAND.burgundy}; opacity: 0.6;">19 · diciembre · 2026</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px 32px 0;">
                            <table role="presentation" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="width: 48px; border-top: 1px solid ${BRAND.tan};"></td>
                                    <td style="padding: 0 12px; font-family: ${SERIF}; font-size: 18px; color: ${BRAND.tan};">❦</td>
                                    <td style="width: 48px; border-top: 1px solid ${BRAND.tan};"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 24px 32px 8px;">
                            <p style="margin: 0; font-family: ${SERIF}; font-size: 13px; letter-spacing: 4px; text-transform: uppercase; color: ${BRAND.burgundy}; opacity: 0.6;">Nueva confirmación</p>
                            <p style="margin: 10px 0 18px; font-family: ${SERIF}; font-size: 30px; font-style: italic; color: ${BRAND.burgundy};">${escapeHtml(rsvp.nombre)}</p>
                            ${badge}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 24px 48px 8px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 28px 32px 40px;">
                            <p style="margin: 0; font-family: ${SERIF}; font-size: 15px; font-style: italic; color: ${BRAND.burgundy}; opacity: 0.7;">Mariana &amp; Christopher</p>
                            <p style="margin: 6px 0 0; font-family: ${SERIF}; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: ${BRAND.burgundy}; opacity: 0.5;">Hotel Camino Real Polanco</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

export async function sendRsvpNotification(rsvp: RsvpInput) {
    const transport = getTransport();
    const from = process.env.SMTP_FROM;
    const to = process.env.NOTIFY_EMAIL || from;
    if (!transport || !from || !to) {
        console.warn("RSVP notification skipped: SMTP not configured");
        return;
    }

    const status = rsvp.asistencia ? "Asistirá" : "No asistirá";
    const total = rsvp.asistencia ? 1 + rsvp.acompañantes.length : 0;

    const text = [
        `Nueva confirmación — Mariana & Christopher`,
        ``,
        `Nombre: ${rsvp.nombre}`,
        `Respuesta: ${status}`,
        `Pases asignados: ${rsvp.pases + 1}`,
        `Acompañantes: ${rsvp.acompañantes.length ? rsvp.acompañantes.join(", ") : "Ninguno"}`,
        `Total de asistentes: ${total}`,
    ].join("\n");

    await transport.sendMail({
        from: `"Boda Mariana & Christopher" <${from}>`,
        to,
        subject: `RSVP: ${rsvp.nombre} — ${status}`,
        text,
        html: renderRsvpEmail(rsvp),
    });
}
