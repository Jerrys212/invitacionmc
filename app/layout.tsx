import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Amiri, Playfair_Display, Lora } from "next/font/google";
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

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-great-vibes",
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
    title: "Mariana & Christopher - Nuestra Boda",
    description: "...",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${greatVibes.variable} ${cormorant.variable} ${amiri.variable} ${playfair.variable} ${lora.variable} h-full antialiased`}
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
