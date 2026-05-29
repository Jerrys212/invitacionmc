import { Users, User } from "lucide-react";
import WheaterBar from "./WheaterBar";

export default function DressCode() {
    return (
        <section className="min-h-screen w-full bg-burgundy-dark flex flex-col items-center justify-center px-8 py-24 gap-16">
            {/* título */}
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-ivory/40 text-sm md:text-xl tracking-[0.4em] uppercase">
                    Código de
                </p>
                <h2 className="font-display text-ivory text-5xl md:text-6xl lg:text-7xl">
                    Vestimenta
                </h2>
                <div className="h-px w-16 bg-ivory/30 mt-2" />
            </div>

            <div className="border border-ivory/20 px-10 py-3">
                <p className="font-serif text-ivory text-sm md:text-xl tracking-[0.4em] uppercase">
                    Formal
                </p>
            </div>

            <div className="flex flex-col gap-6 items-start w-full max-w-3xl">
                <div className="flex items-center gap-4">
                    <User size={20} className="text-ivory/60" />
                    <p className="font-serif text-ivory tracking-widest uppercase text-lg md:text-2xl">
                        Mujeres: Vestido Largo
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Users size={20} className="text-ivory/60" />
                    <p className="font-serif text-ivory tracking-widest uppercase text-lg md:text-2xl">
                        Hombres: Traje
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full max-w-3xl">
                <div className="h-px flex-1 bg-ivory/20" />
                <p className="font-serif text-ivory/30 text-3xl">M&C</p>
                <div className="h-px flex-1 bg-ivory/20" />
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
                <div className="border border-ivory/20 px-8 py-6 text-center flex-1">
                    <p className="font-serif text-ivory/70 text-lg md:text-xl leading-relaxed italic">
                        Los colores <span className="text-ivory font-semibold">blanco, beige</span>{" "}
                        y tonos similares están reservados para la novia.
                    </p>
                </div>
                <div className="border border-ivory/20 px-8 py-6 text-center flex-1">
                    <p className="font-serif text-ivory/70 text-lg md:text-xl leading-relaxed italic">
                        Los colores <span className="text-ivory font-semibold">rojo y tinto</span>{" "}
                        están reservados para las damas de honor.
                    </p>
                </div>
            </div>

            <WheaterBar />
        </section>
    );
}
