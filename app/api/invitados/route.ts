import { apiErrorFromUnknown, apiSuccess } from "@/src/lib/api/response";
import { computeStats, getAllGuests } from "@/src/lib/services/rsvp-service";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const guests = await getAllGuests();
        const stats = computeStats(guests);
        return apiSuccess({ guests, stats });
    } catch (err) {
        return apiErrorFromUnknown(err);
    }
}
