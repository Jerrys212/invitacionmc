import { getTransporter } from "@/src/lib/mail/mailer";
import type { RsvpInput } from "@/src/lib/types/rsvp";

const NOTIFICATION_EMAIL = "jerryrogers2305@gmail.com";

function buildHtml(rsvp: RsvpInput): string {
    const confirmado = rsvp.asistencia;
    const acompañantesRows =
        rsvp.acompañantes.length > 0
            ? rsvp.acompañantes
                  .map(
                      (a) => `
                <tr>
                    <td align="center" style="padding:6px 0; text-align:center; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size:17px; color:#5c1a1a; border-bottom:1px solid rgba(92,26,26,0.12);">${a}</td>
                </tr>`
                  )
                  .join("")
            : `<tr><td align="center" style="padding:6px 0; text-align:center; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size:16px; font-style:italic; color:rgba(92,26,26,0.5);">Sin acompañantes</td></tr>`;

    return `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
</head>
<body style="margin:0; padding:0; background-color:#3d1212;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#3d1212; padding:40px 16px;">
    <tr>
        <td align="center">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#f5f0e8;">
                <!-- header -->
                <tr>
                    <td align="center" style="background-color:#5c1a1a; padding:36px 24px 28px;">
        <p style="margin:0; text-align:center; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size:13px; letter-spacing:4px; text-transform:uppercase; color:#c4a882;">Confirmación de invitado</p>
                        <p style="margin:10px 0 0; text-align:center; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-style:italic; font-weight:600; font-size:34px; color:#f5f0e8; line-height:1.2;">Nueva respuesta RSVP</p>
                    </td>
                </tr>
                <!-- gold rule -->
                <tr>
                    <td style="background-color:#c4a882; height:3px; line-height:3px; font-size:0;">&nbsp;</td>
                </tr>
                <!-- nombre + estatus -->
                <tr>
                    <td align="center" style="padding:32px 24px 8px;">
                        <p style="margin:0; text-align:center; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size:28px; font-weight:600; color:#5c1a1a;">${rsvp.nombre}</p>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding:8px 24px 28px;">
                        <span style="display:inline-block; padding:8px 22px; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size:13px; letter-spacing:3px; text-transform:uppercase; color:${confirmado ? "#f5f0e8" : "#5c1a1a"}; background-color:${confirmado ? "#5c1a1a" : "#e8d5b0"}; border:1px solid #5c1a1a;">
                            ${confirmado ? "Sí asistirá" : "No podrá asistir"}
                        </span>
                    </td>
                </tr>
                <!-- detalle -->
                <tr>
                    <td align="center" style="padding:0 36px 8px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <td align="center" style="padding:14px 0; border-top:1px solid rgba(92,26,26,0.2);">
                                    <p style="margin:0 0 4px; text-align:center; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size:11px; letter-spacing:3px; text-transform:uppercase; color:rgba(92,26,26,0.5);">Pases asignados</p>
                                    <p style="margin:0; text-align:center; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size:19px; color:#5c1a1a;">${rsvp.pases}</p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding:14px 0; border-top:1px solid rgba(92,26,26,0.2);">
                                    <p style="margin:0 0 8px; text-align:center; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size:11px; letter-spacing:3px; text-transform:uppercase; color:rgba(92,26,26,0.5);">Acompañantes</p>
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                        ${acompañantesRows}
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <!-- footer -->
                <tr>
                    <td align="center" style="padding:32px 24px 36px;">
                        <p style="margin:0; text-align:center; font-family:'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size:11px; letter-spacing:4px; text-transform:uppercase; color:rgba(92,26,26,0.4);">Invitación MC</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>`;
}

export async function sendRsvpNotification(rsvp: RsvpInput): Promise<void> {
    const asistenciaTexto = rsvp.asistencia ? "Sí asistirá" : "No podrá asistir";
    const acompañantesTexto = rsvp.acompañantes.length > 0 ? rsvp.acompañantes.join(", ") : "Ninguno";

    await getTransporter().sendMail({
        from: `"Invitación MC" <${process.env.SMTP_FROM}>`,
        to: NOTIFICATION_EMAIL,
        subject: `Nueva confirmación de asistencia: ${rsvp.nombre}`,
        text: [
            `Nombre: ${rsvp.nombre}`,
            `Asistencia: ${asistenciaTexto}`,
            `Pases asignados: ${rsvp.pases}`,
            `Acompañantes: ${acompañantesTexto}`,
        ].join("\n"),
        html: buildHtml(rsvp),
    });
}
