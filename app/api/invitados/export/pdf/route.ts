import { renderToBuffer } from "@react-pdf/renderer";
import { apiErrorFromUnknown } from "@/src/lib/api/response";
import { GuestListDocument } from "@/src/lib/pdf/guest-list-document";
import { computeStats, getAllGuests } from "@/src/lib/services/rsvp-service";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
    try {
        const guests = await getAllGuests();
        const stats = computeStats(guests);

        const buffer = await renderToBuffer(GuestListDocument({ guests, stats }));

        return new Response(new Uint8Array(buffer), {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="invitados.pdf"',
            },
        });
    } catch (err) {
        return apiErrorFromUnknown(err);
    }
}
