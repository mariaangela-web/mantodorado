import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/Cards";
import { WholesaleCta } from "@/components/site/WholesaleCta";
import { FaqSection } from "@/components/site/FaqSection";
import { products } from "@/data/products";
import { qualityAttributes } from "@/data/company";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos | Aguaymanto fresco y presentaciones comerciales" },
      {
        name: "description",
        content:
          "Catálogo de aguaymanto peruano: fruto fresco seleccionado, presentaciones para distribución y opciones especiales según requerimiento.",
      },
      { property: "og:title", content: "Productos | Aguaymanto fresco y presentaciones" },
      {
        property: "og:description",
        content:
          "Aguaymanto fresco seleccionado y presentaciones comerciales para distribuidores, tiendas y restaurantes.",
      },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        title="Aguaymanto peruano seleccionado, listo para tu negocio"
        text="Presentaciones para consumo directo, distribución comercial y requerimientos específicos."
      />

      <section id="catalogo" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Catálogo"
            title="Elige la presentación que necesitas"
            text="Cada producto puede ampliarse con fotografías, fichas técnicas y condiciones comerciales."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      <section id="calidad" className="surface-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Calidad que se nota"
            title="Atributos que cuidamos en cada pedido"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualityAttributes.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="h-full">
                <article className="card-lift h-full rounded-xl border border-border bg-card p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-full gradient-gold text-gold-foreground">
                    <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10 text-center">
            <Button asChild variant="forest" size="lg">
              <Link to="/contacto">Consultar disponibilidad</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <WholesaleCta />
      <FaqSection />
    </>
  );
}
