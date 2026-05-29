import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Amiri } from "next/font/google";
import "./globals.css";

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
            className={`${greatVibes.variable} ${cormorant.variable} ${amiri.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
