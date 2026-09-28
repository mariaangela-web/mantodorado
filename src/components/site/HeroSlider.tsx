import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import campo from "@/assets/hero-campo.jpg";
import cosecha from "@/assets/hero-cosecha.jpg";
import empaque from "@/assets/producto-empaque.jpg";

type Slide = {
  image: string;
  alt: string;
  title: string;
  text?: string;
  actions: { label: string; to: string; variant: "gold" | "onDark" }[];
};

const slides: Slide[] = [
  {
    image: campo,
    alt: "Cultivo de aguaymanto en el campo peruano al atardecer",
    title: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    actions: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "gold" },
      { label: "Solicitar cotización", to: "/contacto", variant: "onDark" },
    ],
  },
  {
    image: cosecha,
    alt: "Productores peruanos cosechando aguaymanto",
    title: "Del campo peruano a nuevos mercados",
    text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    actions: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "gold" }],
  },
  {
    image: empaque,
    alt: "Aguaymanto fresco empacado en presentaciones comerciales",
    title: "Natural, versátil y de excelente calidad",
    actions: [{ label: "Ver productos", to: "/productos", variant: "gold" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(id);
  }, [index]);

  return (
    <section aria-label="Presentación principal" className="relative isolate overflow-hidden">
      <div className="relative h-[92svh] min-h-[520px] w-full">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              i === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              width={1920}
              height={1080}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              className={cn(
                "h-full w-full object-cover transition-transform duration-[8000ms] ease-out",
                i === index ? "scale-105" : "scale-100",
              )}
            />
            <div className="absolute inset-0 overlay-hero" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div key={index} className="max-w-2xl reveal-shown">
              <p className="eyebrow text-gold-light">Aguaymanto peruano</p>
              <h1 className="mt-4 text-4xl leading-[1.08] text-cream md:text-6xl">
                {slides[index].title}
              </h1>
              {slides[index].text ? (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
                  {slides[index].text}
                </p>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                {slides[index].actions.map((action) => (
                  <Button key={action.label} asChild variant={action.variant} size="xl">
                    <Link to={action.to}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2" role="tablist" aria-label="Indicadores">
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-10 bg-gold" : "w-5 bg-cream/50 hover:bg-cream/80",
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(index - 1)}
                aria-label="Diapositiva anterior"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/40 text-cream transition-colors hover:bg-cream hover:text-forest"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Diapositiva siguiente"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/40 text-cream transition-colors hover:bg-cream hover:text-forest"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
