import Image from "next/image";

export default function Us() {
    return (
        <section className="min-h-screen w-full bg-burgundy-dark flex flex-col lg:flex-row items-center justify-center px-12 py-24 gap-16 overflow-hidden">
            <div className="flex flex-col gap-4 lg:flex-1 w-full">
                <h2 className="font-serif text-ivory text-5xl md:text-6xl lg:text-7xl tracking-widest uppercase">Nosotros</h2>
                <div className="flex flex-col gap-1">
                    <p className="font-serif text-ivory/50 text-sm md:text-xl tracking-[0.4em] uppercase">Mariana</p>
                    <p className="font-serif text-ivory/50 text-sm md:text-xl tracking-[0.4em] uppercase">Christopher</p>
                </div>
                <div className="h-px w-full bg-ivory/20 mt-4" />
            </div>

            <div className="relative lg:w-2/3 w-full h-[600px] md:h-[700px] lg:h-[80vh]">
                <div className="absolute left-0 top-0 w-[60%] h-[75%] overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780029538/Album_140_x00whc.avif"
                        alt="Mariana y Christopher"
                        fill
                        sizes="(max-width: 1024px) 55vw, 25vw"
                        className="object-cover"
                    />
                </div>

                <div className="absolute right-0 bottom-0 w-[60%] h-[75%] overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780187262/Album_054_1_z7oh1l.avif"
                        alt="Mariana y Christopher"
                        fill
                        sizes="(max-width: 1024px) 55vw, 25vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
