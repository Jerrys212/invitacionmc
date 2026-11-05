import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/", disallow: ["/invitados", "/api/"] },
        host: SITE_URL,
    };
}
