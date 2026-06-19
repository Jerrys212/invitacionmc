import nodemailer, { Transporter } from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST as string;
const SMTP_PORT = process.env.SMTP_PORT as string;
const SMTP_USER = process.env.SMTP_USER as string;
const SMTP_PASS = process.env.SMTP_PASS as string;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Faltan variables de entorno SMTP en .env");
}

declare global {
    var mailTransporter: Transporter | undefined;
}

export function getTransporter(): Transporter {
    if (!global.mailTransporter) {
        global.mailTransporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: false,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
        });
    }
    return global.mailTransporter;
}
