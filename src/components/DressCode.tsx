import { OrnamentFrame } from "./Ornament";
import Image from "next/image";
import Reveal from "./Reveal";

export default function DressCode() {
    return (
        <section
            className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 py-12 sm:py-16"
            style={{
                backgroundImage: "url('/bg3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Desktop / tablet: 1920×1280 */}
            <Reveal variant="scale" className="hidden sm:block w-full max-w-3xl">
                <Image
                    src="/dresscodedk.png"
                    width={1920}
                    height={1280}
                    alt="imagen dresscode"
                    sizes="(max-width: 1024px) 70vw, 800px"
                    className="w-full h-auto object-contain"
                    priority
                />
            </Reveal>

            {/* Mobile: 1280×1920 */}
            <Reveal variant="scale" className="block sm:hidden w-full max-w-sm">
                <Image
                    src="/dresscodemb.png"
                    width={1280}
                    height={1920}
                    alt="imagen dresscode"
                    sizes="90vw"
                    className="w-full h-auto object-contain"
                    priority
                />
            </Reveal>

            {/* <div
                className="relative w-full max-w-4xl px-8 sm:px-14 py-14 sm:py-20 flex flex-col items-center gap-10 sm:gap-14 overflow-hidden"
                style={{
                    backgroundImage: "url('/bg1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
       
                <div className="flex flex-col items-center gap-3">
                    <h2 className="font-serif text-black/80 text-4xl sm:text-6xl md:text-7xl tracking-[0.2em] sm:tracking-[0.3em] uppercase text-center">
                        Dress Code
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className="h-px w-14 bg-black/30" />
                        <span className="font-great-vibes text-black/40 text-2xl">❧</span>
                        <div className="h-px w-14 bg-black/30" />
                    </div>
                </div>

             
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-10 w-full">
          
                    <div className="relative w-56 sm:w-80 md:w-96 h-96 sm:h-[28rem] shrink-0">
                        <Image src="/dresscode.png" alt="Dress code pareja" fill className="object-contain" />
                    </div>

                
                    <div className="flex flex-col items-center gap-6 flex-1 w-full min-w-0">
                     
                        <div className="flex flex-col items-center w-full">
                            <OrnamentFrame className="w-56 sm:w-64 opacity-50" />
                            <p className="font-serif text-black/80 text-2xl sm:text-3xl tracking-[0.3em] uppercase -my-8">Formal</p>
                            <OrnamentFrame className="w-56 sm:w-64 opacity-50 rotate-180" />
                        </div>

              
                        <ul className="font-serif text-black/70 text-lg sm:text-xl md:text-2xl space-y-5 list-disc list-inside text-center md:text-left w-full">
                            <li>Los colores blanco, beige y similares se reservan para la novia.</li>
                            <li>El color borgoña se reserva para damas y caballeros de honor.</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </section>
    );
}
