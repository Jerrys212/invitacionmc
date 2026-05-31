import Image from "next/image";

const images = [
    "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780187265/Album_078_hl5akk.avif",
    "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780187263/Album_145_bnly3x.avif",
    "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780187262/Album_054_1_z7oh1l.avif",
    "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780187261/Album_107_euizp9.avif",
    "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780187261/Album_007_xfzw27.avif",
    "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780187259/a2ebe8b6-0c31-419f-a934-15e0f6622c37_t9gnf2.avif",
    "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780029540/Album_181_cp38gg.avif",
    "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780029538/Album_157_1_mihkkv.avif",
    "https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780029538/Album_140_x00whc.avif",
];

export default function Gallery() {
    return (
        <section className="min-h-screen w-full bg-ivory flex flex-col items-center justify-center px-8 py-24 gap-16">
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark/40 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">Nuestros</p>
                <h2 className="font-display text-burgundy-dark text-5xl md:text-6xl lg:text-7xl">Momentos</h2>
                <div className="h-px w-16 bg-burgundy-dark/30 mt-2" />
            </div>

            <div
                className="w-full max-w-5xl grid gap-2"
                style={{
                    gridTemplateAreas: `
                        "a a b c"
                        "d e e c"
                        "d f g g"
                        "h h i i"
                    `,
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gridTemplateRows: "280px 280px 280px 280px",
                }}
            >
                {[
                    { area: "a", src: images[0] },
                    { area: "b", src: images[1] },
                    { area: "c", src: images[2] },
                    { area: "d", src: images[3] },
                    { area: "e", src: images[4] },
                    { area: "f", src: images[5] },
                    { area: "g", src: images[6] },
                    { area: "h", src: images[7] },
                    { area: "i", src: images[8] },
                ].map(({ area, src }) => (
                    <div key={area} className="relative overflow-hidden" style={{ gridArea: area }}>
                        <Image
                            src={src}
                            alt="Momento"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                ))}
            </div>

            <p className="font-serif text-burgundy-dark/40 text-lg md:text-2xl italic text-center">
                Cada momento compartido es un recuerdo que atesoramos
            </p>
        </section>
    );
}
