export const translations = {
    es: {
        hero: {
            days: "DÍAS",
            hrs: "HRS",
            min: "MIN",
            sec: "SEG",
            date: "19 · diciembre · 2026",
        },
        parents: {
            blessing: "Con la bendición de nuestras familias",
        },
        timeline: {
            heading: "El gran día",
        },
        visit: {
            eyebrow: "Aprovecha tu visita",
            heading: "Qué visitar en CDMX",
            mapsLabel: "Ver en Google Maps",
            places: [
                {
                    name: "Museo de Antropología",
                    description:
                        "El Museo Nacional de Antropología es uno de los recintos museográficos más importantes de México y de América.",
                },
                {
                    name: "Museo Casa Frida Kahlo",
                    description:
                        "El Museo Frida Kahlo es el recinto cultural más representativo de la artista mexicana, así como es contenedor de parte importante de su legado artístico y conceptual.",
                },
                {
                    name: "Castillo de Chapultepec",
                    description:
                        "El Castillo de Chapultepec es un palacio histórico ubicado en la Ciudad de México y el único castillo real del continente americano.",
                },
                {
                    name: "Centro Histórico",
                    description:
                        "El Centro Histórico de la Ciudad de México es el núcleo fundacional de la capital. Declarado Patrimonio Cultural de la Humanidad por la UNESCO en 1987.",
                },
            ],
        },
        noKids: {
            heading: "No Niños",
            body: "Aunque amamos a sus pequeños, hagan de este día una cita y pásemosla increíble.",
        },
        rsvp: {
            eyebrow: "Por favor confirma",
            heading: "Tu asistencia",
            assignedEyebrow: "Hemos asignado para ti",
            pass: "Pase",
            passes: "Pases",
            noteIntro: "Queremos compartir este día tan especial contigo. Por favor, considera lo siguiente:",
            note1: "Evento exclusivo para adultos (no se permiten niños).",
            note2: "Cada invitado ha sido elegido con mucho cariño, por lo que los pases son personales e intransferibles.",
            note3: "En caso de no poder asistir, te pedimos lo comuniques lo más pronto posible aún si ya habías confirmado.",
            nameLabel: "Tu nombre completo",
            namePlaceholder: "Ej. María González López",
            attendLabel: "¿Confirmas tu asistencia?",
            yes: "Sí asistiré",
            no: "No podré asistir",
            companion: "Acompañante",
            companions: "Acompañantes",
            companionHint: "Deja en blanco si no llevas acompañantes",
            companionPlaceholder: "Nombre del acompañante",
            success: "¡Registro exitoso!",
            sending: "Enviando...",
            confirm: "Confirmar asistencia",
        },
        lodgement: {
            eyebrow: "Sugerencia de",
            heading: "Hospedaje",
            hotelLabel: "Hotel sede",
            discountLabel: "Código de descuento",
            comingSoon: "Próximamente...",
            viewHotel: "Ver hotel",
        },
        gallery: {
            eyebrow: "Nuestros",
            heading: "Momentos",
            caption: "Cada momento compartido es un recuerdo que atesoramos",
        },
        footer: {
            thanks: "Gracias por ser parte de este día tan especial",
            madeWith: "Hecho con amor y dedicación",
        },
    },
    en: {
        hero: {
            days: "DAYS",
            hrs: "HRS",
            min: "MIN",
            sec: "SEC",
            date: "December 19 · 2026",
        },
        parents: {
            blessing: "With the blessing of our families",
        },
        timeline: {
            heading: "The Big Day",
        },
        visit: {
            eyebrow: "Make the most of your visit",
            heading: "Explore Mexico City",
            mapsLabel: "Open in Google Maps",
            places: [
                {
                    name: "National Museum of Anthropology",
                    description:
                        "The National Museum of Anthropology is one of the most significant cultural institutions in Mexico and all of the Americas.",
                },
                {
                    name: "Frida Kahlo Museum",
                    description:
                        "The Frida Kahlo Museum is the most celebrated tribute to the iconic Mexican artist, housing a significant portion of her artistic and personal legacy.",
                },
                {
                    name: "Chapultepec Castle",
                    description:
                        "Chapultepec Castle is a stunning historic palace in the heart of Mexico City and the only royal castle on the American continent.",
                },
                {
                    name: "Historic Center",
                    description:
                        "Mexico City's Historic Center is the founding heart of the capital, declared a UNESCO World Heritage Site in 1987.",
                },
            ],
        },
        noKids: {
            heading: "Adults Only",
            body: "We adore your little ones, but tonight let's make it a grown-ups' night to remember.",
        },
        rsvp: {
            eyebrow: "Please confirm",
            heading: "Your Attendance",
            assignedEyebrow: "We've reserved for you",
            pass: "Pass",
            passes: "Passes",
            noteIntro: "We'd love to celebrate this special day with you. Please keep the following in mind:",
            note1: "Adults-only event — no children will be admitted.",
            note2: "Each guest has been personally chosen with care. Passes are non-transferable.",
            note3: "If your plans change, please let us know as soon as possible, even if you've already confirmed.",
            nameLabel: "Your full name",
            namePlaceholder: "E.g. Jane Smith",
            attendLabel: "Will you be attending?",
            yes: "I'll be there",
            no: "I can't make it",
            companion: "Guest",
            companions: "Guests",
            companionHint: "Leave blank if you're coming alone",
            companionPlaceholder: "Guest's name",
            success: "All set!",
            sending: "Sending...",
            confirm: "Confirm attendance",
        },
        lodgement: {
            eyebrow: "Our pick for",
            heading: "Lodging",
            hotelLabel: "Event hotel",
            discountLabel: "Discount code",
            comingSoon: "Coming soon...",
            viewHotel: "View hotel",
        },
        gallery: {
            eyebrow: "Our",
            heading: "Moments",
            caption: "Every shared moment is a memory we'll always treasure",
        },
        footer: {
            thanks: "Thank you for being part of this special day",
            madeWith: "Made with love and dedication",
        },
    },
};

export type Locale = "es" | "en";
export type Translations = typeof translations.es;
