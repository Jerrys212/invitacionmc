import { Ban } from "lucide-react";

export default function NoKids() {
    return (
        <section className="min-h-screen w-full bg-burgundy-dark flex items-center justify-center px-8">
            <div className="bg-ivory flex flex-col items-center text-center gap-8 px-16 py-20 max-w-2xl w-full rounded-md">
                <Ban size={64} className="text-burgundy-dark/40" strokeWidth={1.5} />
                <div className="flex flex-col items-center gap-4">
                    <h2 className="font-serif text-burgundy-dark text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">No Niños</h2>
                    <div className="h-px w-16 bg-burgundy-dark/20" />
                    <p className="font-serif text-burgundy-dark/60 text-lg md:text-2xl leading-relaxed italic">
                        Aunque amamos a sus pequeños, hagan de este día una cita y pásemosla increíble.
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-burgundy-dark/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-burgundy-dark/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-burgundy-dark/20" />
                </div>
            </div>
        </section>
    );
}
