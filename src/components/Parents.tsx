export default function Parents() {
    return (
        <section className="min-h-screen w-full bg-burgundy-dark flex flex-col items-center justify-center px-8 py-24">
            {/* Tarjeta con textura bg1 */}
            <div
                className="relative w-full lg:max-w-3/5 flex flex-col items-center gap-10 px-12 py-16"
                style={{
                    backgroundImage: "url('/bg1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Título */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="font-serif italic text-black/70 text-2xl md:text-3xl">Con la bendición de nuestras familias</p>
                    {/* Separador ornamental */}
                    <div className="flex items-center gap-2 text-black/40">
                        <div className="h-px w-10 bg-black/30" />
                        <span className="font-great-vibes text-xl">❧</span>
                        <div className="h-px w-10 bg-black/30" />
                    </div>
                </div>

                {/* Padres de la novia */}
                <div className="flex flex-col items-center gap-1 text-center">
                    <p className="font-serif italic text-black/80 text-2xl md:text-3xl">Laura Pico García</p>
                    <p className="font-serif italic text-black/80 text-2xl md:text-3xl">Hugo Ramírez Castro</p>
                </div>

                {/* Separador & */}
                <p className="font-display text-black/40 text-5xl">&</p>

                {/* Padres del novio */}
                <div className="flex flex-col items-center gap-1 text-center">
                    <p className="font-serif italic text-black/80 text-2xl md:text-3xl">Lori Renee Glenn</p>
                    <p className="font-serif italic text-black/80 text-2xl md:text-3xl">Karen Denise Davenport</p>
                </div>
            </div>
        </section>
    );
}
