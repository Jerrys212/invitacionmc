import ExcelJS from "exceljs";
import { apiErrorFromUnknown } from "@/src/lib/api/response";
import { getAllGuests } from "@/src/lib/services/rsvp-service";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
    try {
        const guests = await getAllGuests();

        const workbook = new ExcelJS.Workbook();
        workbook.creator = "Mariana & Christopher";
        const sheet = workbook.addWorksheet("Invitados");

        sheet.columns = [
            { header: "Nombre", key: "nombre", width: 32 },
            { header: "Asistencia", key: "asistencia", width: 16 },
            { header: "Pases", key: "pases", width: 10 },
            { header: "Acompañantes", key: "acompañantes", width: 40 },
            { header: "Fecha de respuesta", key: "createdAt", width: 22 },
        ];
        sheet.getRow(1).font = { bold: true };

        guests.forEach((guest) => {
            sheet.addRow({
                nombre: guest.nombre,
                asistencia: guest.asistencia ? "Asiste" : "No asiste",
                pases: guest.pases + 1,
                acompañantes: guest.acompañantes.join(", "),
                createdAt: guest.createdAt.toLocaleString("es-MX"),
            });
        });

        const buffer = await workbook.xlsx.writeBuffer();

        return new Response(new Uint8Array(buffer), {
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "Content-Disposition": 'attachment; filename="invitados.xlsx"',
            },
        });
    } catch (err) {
        return apiErrorFromUnknown(err);
    }
}
