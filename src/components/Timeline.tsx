import Image from "next/image";
import Reveal from "./Reveal";

export default function Timeline() {
    return (
        <section className="min-h-screen w-full bg-ivory flex flex-col items-center justify-center px-8 py-24">
            <Reveal variant="up" className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark text-md md:text-2xl lg:text-3xl tracking-[0.4em] uppercase">El gran día</p>
                <Reveal variant="line" delay={250} className="h-px w-16 bg-burgundy-dark/30 mt-2" />
            </Reveal>

            <Reveal variant="scale" delay={150} className="w-full max-w-2xl flex justify-center">
                <Image src="/timeline.png" alt="Itinerario de boda" width={800} height={1200} className="w-full h-auto object-contain" />
            </Reveal>
        </section>
    );
}
