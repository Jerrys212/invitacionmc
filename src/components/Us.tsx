import Image from "next/image";
import Reveal from "./Reveal";

export default function Us() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden lg:grid lg:grid-cols-2">
            <div className="absolute inset-0 lg:relative lg:order-2 lg:min-h-screen overflow-hidden">
                <div className="absolute inset-0 animate-ken-burns">
                    <Image
                        src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780187263/Album_145_bnly3x.avif"
                        alt="Mariana y Christopher"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-transparent lg:hidden" />
            </div>

            <div className="relative z-10 lg:order-1 lg:bg-burgundy-texture lg:flex lg:items-center lg:justify-center lg:px-16 xl:px-24">
                <Reveal variant="up" className="pt-10 px-6 md:pt-14 md:px-10 lg:p-0 lg:max-w-xl">
                    <p className="font-serif italic text-white lg:text-ivory text-3xl md:text-4xl lg:text-5xl leading-snug">
                        &lsquo;Here, now, always &ndash; where the fire and the rose are one.&rsquo;
                    </p>
                    <p className="font-serif italic text-white/70 lg:text-ivory/70 text-2xl md:text-3xl mt-4 text-right">-T.S. Eliot</p>
                </Reveal>
            </div>
        </section>
    );
}
