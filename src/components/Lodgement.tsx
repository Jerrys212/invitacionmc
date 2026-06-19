import Image from "next/image";
import { Hotel, Tag } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Lodgement() {
    return (
        <section className="min-h-screen w-full bg-burgundy-dark flex flex-col items-center justify-center px-8 py-24 gap-16">
            {/* título */}
            <Reveal variant="up" className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-ivory/40 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">Sugerencia de</p>
                <h2 className="font-serif text-ivory text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">Hospedaje</h2>
                <Reveal variant="line" delay={250} className="h-px w-16 bg-ivory/30 mt-2" />
            </Reveal>

            {/* contenido */}
            <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-5xl">
                {/* texto */}
                <Reveal variant="up" className="flex flex-col gap-6 flex-1">
                    <div className="flex flex-col gap-2">
                        <p className="font-serif text-ivory text-lg md:text-2xl tracking-widest uppercase">Hotel Camino Real</p>
                        <p className="font-serif text-ivory/40 text-sm md:text-xl tracking-[0.4em] uppercase">Hotel sede</p>
                    </div>

                    <div className="h-px w-16 bg-ivory/20" />

                    {/* código de descuento */}
                    <div className="flex flex-col gap-3 border border-ivory/20 px-6 py-5 hover-lift">
                        <div className="flex items-center gap-2">
                            <Tag size={16} className="text-ivory/40" />
                            <p className="font-serif text-ivory/40 text-sm tracking-[0.4em] uppercase">Código de descuento</p>
                        </div>
                        <p className="font-serif text-ivory/30 text-lg md:text-2xl tracking-widest italic">Próximamente...</p>
                    </div>
                    <Link
                        href="https://www.grupocaminoreal.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-shine flex items-center gap-3 border border-ivory/30 px-8 py-4 text-ivory font-serif text-sm md:text-xl tracking-[0.4em] uppercase hover:bg-ivory hover:text-burgundy-dark hover:scale-[1.03] active:scale-95 transition-all duration-500 w-fit"
                    >
                        <Hotel size={16} />
                        Ver hotel
                    </Link>
                </Reveal>

                <Reveal variant="scale" delay={150} className="relative w-full lg:w-1/2 h-72 lg:h-96 flex-shrink-0 overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780186755/hotel_real_pjgww2.jpg"
                        alt="Hotel Camino Real"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                </Reveal>
            </div>
        </section>
    );
}
