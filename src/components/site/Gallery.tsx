import { X } from "lucide-react";
import { useState } from "react";
import { gallery } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {gallery.map((item, i) => (
          <Reveal key={item.src} delay={i * 60}>
            <button
              onClick={() => setActive(i)}
              aria-label={`Ampliar imagen: ${item.alt}`}
              className={cn(
                "group relative block w-full overflow-hidden rounded-lg",
                i % 5 === 0 ? "aspect-4/5" : "aspect-square",
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-forest/0 transition-colors group-hover:bg-forest/25" />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gallery[active].alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-100 grid place-items-center bg-forest/95 p-4"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Cerrar galería"
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream hover:bg-cream hover:text-forest"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="max-h-[80svh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/80">
              {gallery[active].alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
