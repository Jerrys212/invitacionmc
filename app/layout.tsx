import type { Metadata, Viewport } from "next";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SHARE_IMAGE } from "@/src/lib/site";
import { Imperial_Script, Cormorant_Garamond, Amiri, Playfair_Display, Lora } from "next/font/google";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import LanguageToggle from "@/src/components/LanguageToggle";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "700"],
    variable: "--font-playfair-display",
});

const lora = Lora({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "700"],
    variable: "--font-lora",
});

const imperialScript = Imperial_Script({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-imperial-script",
});

const cormorant = Cormorant_Garamond({
    weight: ["300", "400", "600"],
    subsets: ["latin"],
    variable: "--font-cormorant",
});

const amiri = Amiri({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-amiri",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    applicationName: "Mariana & Christopher",
    keywords: ["boda", "wedding", "Mariana", "Christopher", "Camino Real Polanco", "Ciudad de México"],
    openGraph: {
        type: "website",
        url: SITE_URL,
        siteName: "Mariana & Christopher",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        locale: "es_MX",
        alternateLocale: ["en_US"],
        images: [SHARE_IMAGE],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [SHARE_IMAGE.url],
    },
};

export const viewport: Viewport = {
    themeColor: "#5c1a1a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="es"
            className={`${imperialScript.variable} ${cormorant.variable} ${amiri.variable} ${playfair.variable} ${lora.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                    <LanguageProvider>
                        <LanguageToggle />
                        {children}
                    </LanguageProvider>
                </body>
        </html>
    );
}
