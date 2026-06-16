interface OrnamentFrameProps {
    className?: string;
    color?: string;
    strokeWidth?: number;
}

/**
 * Un solo flourish ornamental (la mitad superior del marco "FORMAL").
 *
 * Diseñado para usarse en pareja: uno normal arriba del texto y otro
 * con `rotate-180` debajo, reproduciendo el marco completo:
 *
 *   <OrnamentFrame className="w-44 opacity-50" />
 *   <p>Formal</p>
 *   <OrnamentFrame className="w-44 opacity-50 rotate-180" />
 *
 * Geometría: doble trazo simétrico con pico central hacia arriba y dos
 * colas que descienden a los lados afinándose; en los extremos, un pequeño
 * remate curvo hacia adentro como en la referencia.
 */
export function OrnamentFrame({ className = "", color = "currentColor", strokeWidth = 1.4 }: OrnamentFrameProps) {
    return (
        <svg
            viewBox="0 0 600 140"
            className={className}
            role="presentation"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", width: "100%", height: "auto" }}
        >
            <g fill="none" stroke={color} strokeLinecap="round" vectorEffect="non-scaling-stroke">
                {/* Trazo exterior, más marcado */}
                <path
                    d="M 30 118
                       C 36 102, 60 100, 96 102
                       C 140 105, 170 100, 240 60
                       C 282 36, 296 24, 300 12
                       C 304 24, 318 36, 360 60
                       C 430 100, 460 105, 504 102
                       C 540 100, 564 102, 570 118"
                    strokeWidth={strokeWidth}
                />
                {/* Trazo interior, paralelo y más tenue */}
                <path
                    d="M 36 128
                       C 44 114, 66 112, 100 114
                       C 144 117, 172 112, 240 73
                       C 282 49, 296 37, 300 25
                       C 304 37, 318 49, 360 73
                       C 428 112, 456 117, 500 114
                       C 534 112, 556 114, 564 128"
                    strokeWidth={strokeWidth * 0.62}
                    opacity={0.55}
                />
            </g>
        </svg>
    );
}

export default OrnamentFrame;
