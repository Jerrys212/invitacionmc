export default function Parents() {
    return (
        <section className="min-h-screen w-full bg-ivory flex flex-col items-center justify-center px-8 py-24 gap-16">
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="font-serif text-burgundy-dark text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase">
                    Con la bendición de
                </p>
                <h2 className="font-serif text-burgundy-dark text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">
                    Nuestras Familias
                </h2>
                <div className="h-px w-16 bg-burgundy-dark/30 mt-2" />
            </div>

            <div className="w-full max-w-3xl flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-0">
                {/* padres de la novia */}
                <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-auto">
                    <p className="font-serif text-burgundy-dark text-lg md:text-2xl  tracking-widest uppercase">
                        Laura Pico García
                    </p>
                    <p className="font-serif text-burgundy-dark text-lg md:text-2xl  tracking-widest uppercase">
                        Hugo Ramírez Castro
                    </p>
                    <p className="font-serif text-burgundy-dark text-md tracking-[0.3em] uppercase mt-2">
                        Padres de la novia
                    </p>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
                    <p className="font-serif text-burgundy-dark text-lg md:text-2xl  tracking-widest uppercase">
                        Karen Davenport
                    </p>
                    <p className="font-serif text-burgundy-dark text-lg md:text-2xl  tracking-widest uppercase">
                        Lori Renee Glenn
                    </p>
                    <p className="font-serif text-burgundy-dark text-md tracking-[0.3em] uppercase mt-2">
                        Padres del novio
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full max-w-3xl">
                <div className="h-px flex-1 bg-burgundy-dark/20" />
                <p className="font-serif text-burgundy-dark/30 text-3xl">M&C</p>
                <div className="h-px flex-1 bg-burgundy-dark/20" />
            </div>
            {/* 
            <div className="flex flex-col items-center gap-3">
                <p className="font-serif text-burgundy-dark text-lg tracking-widest uppercase">
                    Ana María
                </p>
                <p className="font-serif text-burgundy-dark text-lg tracking-widest uppercase">
                    José Luis
                </p>
                <p className="font-serif text-burgundy-dark/40 text-xs tracking-[0.3em] uppercase mt-2">
                    Nuestros padrinos
                </p>
            </div> */}
        </section>
    );
}
