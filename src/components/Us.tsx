import Image from "next/image";
import Reveal from "./Reveal";

export default function Us() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 animate-ken-burns">
                <Image
                    src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780187263/Album_145_bnly3x.avif"
                    alt="Mariana y Christopher"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10" />

            <Reveal variant="up" className="absolute top-10 left-6 right-6 md:top-14 md:left-10 md:right-16 z-20">
                <p className="font-serif italic text-white text-3xl md:text-4xl lg:text-5xl leading-snug">
                    &lsquo;Here, now, always &ndash; where the fire and the rose are one.&rsquo;
                </p>
                <p className="font-serif italic text-white/70 text-2xl md:text-3xl mt-4 text-right">-T.S. Eliot</p>
            </Reveal>
        </section>
    );
}
