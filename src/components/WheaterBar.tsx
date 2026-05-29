"use client";

import { useEffect, useState, useMemo, memo } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, CloudDrizzle } from "lucide-react";

interface WeatherDay {
    date: string;
    max: number;
    min: number;
    code: number;
}

const WeatherIcon = memo(({ code, size = 28 }: { code: number; size?: number }) => {
    const props = {
        size,
        strokeWidth: 1.5,
        className: "text-ivory/70",
        "aria-hidden": true as const,
    };
    if (code === 0) return <Sun {...props} />;
    if (code <= 3) return <Cloud {...props} />;
    if (code <= 67) return <CloudRain {...props} />;
    if (code <= 77) return <CloudSnow {...props} />;
    if (code <= 82) return <CloudDrizzle {...props} />;
    return <CloudRain {...props} />;
});

WeatherIcon.displayName = "WeatherIcon";

function WeatherWidget() {
    const [forecast, setForecast] = useState<WeatherDay[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=19.4326&longitude=-99.1332&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto",
                );
                if (!res.ok) throw new Error();
                const data = await res.json();
                setForecast(
                    data.daily.time.map((date: string, i: number) => ({
                        date,
                        max: Math.round(data.daily.temperature_2m_max[i]),
                        min: Math.round(data.daily.temperature_2m_min[i]),
                        code: data.daily.weathercode[i],
                    })),
                );
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
    }, []);

    const processedDays = useMemo(() => {
        const names = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        return forecast.slice(0, 7).map((day) => ({
            ...day,
            dayName: names[new Date(day.date + "T12:00:00").getDay()],
        }));
    }, [forecast]);

    const weatherDescription = useMemo(() => {
        const code = processedDays[0]?.code || 0;
        if (code === 0) return "Despejado";
        if (code <= 3) return "Nubes dispersas";
        if (code <= 67) return "Lluvioso";
        if (code <= 77) return "Nevado";
        if (code <= 82) return "Llovizna";
        return "Lluvioso";
    }, [processedDays]);

    if (loading) {
        return (
            <div className="w-full max-w-3xl border border-ivory/20 px-8 py-12 flex items-center justify-center">
                <p className="font-serif text-ivory/50 text-sm md:text-xl tracking-[0.4em] uppercase">
                    Cargando clima...
                </p>
            </div>
        );
    }

    if (error || processedDays.length === 0) {
        return (
            <div className="w-full max-w-3xl border border-ivory/20 px-8 py-12 flex items-center justify-center">
                <p className="font-serif text-ivory/50 text-sm md:text-xl tracking-[0.4em] uppercase">
                    No se pudo cargar el clima
                </p>
            </div>
        );
    }

    const today = processedDays[0];
    const restOfWeek = processedDays.slice(1);

    return (
        <div className="w-full max-w-3xl border border-ivory/20">
            {/* header */}
            <div className="flex items-center justify-between px-8 py-8 border-b border-ivory/20">
                <div className="flex items-center gap-4">
                    <WeatherIcon code={today.code} size={32} />
                    <div>
                        <p className="font-serif text-ivory text-lg md:text-2xl tracking-widest uppercase">
                            Ciudad de México
                        </p>
                        <p className="font-serif text-ivory/40 text-sm tracking-[0.4em] uppercase">
                            Clima
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-serif text-ivory text-4xl md:text-6xl lg:text-8xl font-light tabular-nums leading-none">
                        {today.max}°
                    </p>
                    <p className="font-serif text-ivory/50 text-sm md:text-xl tracking-[0.4em] uppercase mt-1">
                        {weatherDescription}
                    </p>
                </div>
            </div>

            {/* pronóstico semanal */}
            <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-ivory/10">
                {restOfWeek.map((day, i) => (
                    <div key={`${day.date}-${i}`} className="flex flex-col items-center gap-3 py-6">
                        <p className="font-serif text-ivory/40 text-sm tracking-widest uppercase">
                            {day.dayName.slice(0, 3)}
                        </p>
                        <WeatherIcon code={day.code} size={22} />
                        <div className="flex gap-2 font-serif tabular-nums">
                            <span className="text-ivory text-lg">{day.max}°</span>
                            <span className="text-ivory/40 text-lg">{day.min}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(WeatherWidget);
