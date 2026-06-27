"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealVariant = "up" | "scale" | "fade" | "line";

const HIDDEN: Record<RevealVariant, string> = {
    up: "opacity-0 translate-y-8",
    scale: "opacity-0 scale-95",
    fade: "opacity-0",
    line: "scale-x-0",
};

const VISIBLE: Record<RevealVariant, string> = {
    up: "opacity-100 translate-y-0",
    scale: "opacity-100 scale-100",
    fade: "opacity-100",
    line: "scale-x-100",
};

interface RevealProps {
    children?: ReactNode;
    className?: string;
    variant?: RevealVariant;
    /** Delay in ms applied once the element becomes visible — used to cascade groups of items. */
    delay?: number;
    /** Animate on mount instead of waiting for scroll — use for above-the-fold content. */
    immediate?: boolean;
    style?: CSSProperties;
}

/**
 * Scroll-triggered fade/scale reveal. Animates opacity + transform only (GPU
 * compositing, no layout/paint cost) and fires a single IntersectionObserver
 * callback per element, then disconnects — negligible runtime overhead.
 */
export default function Reveal({ children, className = "", variant = "up", delay = 0, immediate = false, style }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(immediate);

    useEffect(() => {
        if (immediate) return;
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [immediate]);

    return (
        <div
            ref={ref}
            style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
            className={`transition-all duration-700 ease-out ${visible ? VISIBLE[variant] : HIDDEN[variant]} ${className}`}
        >
            {children}
        </div>
    );
}
