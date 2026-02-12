import React, { useMemo } from "react";

const LogoMarquee = ({ items, speed = 40 }) => {
  // Repetimos el array lo suficiente para llenar pantallas grandes
  const repeatedItems = useMemo(() => {
    const MIN_ITEMS = 20; // garantiza ancho suficiente
    const times = Math.ceil(MIN_ITEMS / items.length);
    return Array(times).fill(items).flat();
  }, [items]);

  return (
    <section className="relative w-screen overflow-hidden py-10">
      {/* Gradientes laterales */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

      <div
        className="group flex w-max items-center gap-16 animate-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...repeatedItems, ...repeatedItems].map((item, index) => (
          <a
            key={index}
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
          >
            <img
              loading="lazy"
              src={item.logo}
              alt={item.name}
              className="
                h-14 sm:h-16 md:h-18
                object-contain
                grayscale
                brightness-200
                contrast-125
              "
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
