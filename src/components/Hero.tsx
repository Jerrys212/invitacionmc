import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full">
            <Image
                src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780029538/Album_157_1_mihkkv.avif"
                alt="Mariana & Christopher"
                fill
                sizes="100vw"
                className="object-cover hidden lg:block"
                priority
            />
            <Image
                src="https://res.cloudinary.com/dsrxyg5rn/image/upload/v1780029538/Album_140_x00whc.avif"
                alt="Mariana & Christopher"
                fill
                sizes="100vw"
                className="object-cover lg:hidden"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-18 text-white text-center">
                <p className="uppercase font-serif text-7xl md:text-8xl lg:text-9xl">M&C</p>
                <p className="font-serif text-xl md:text-2xl tracking-widest">
                    Mariana & Christopher
                </p>
            </div>
        </section>
    );
}
