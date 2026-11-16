import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ValueCard } from "@/components/site/Cards";
import { Gallery } from "@/components/site/Gallery";
import { Icon } from "@/components/site/Icon";
import { commitments, mission, timeline, values, vision } from "@/data/company";
import empresa from "@/assets/galeria-plantacion.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | Empresa peruana de aguaymanto" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa: historia, misión, visión, valores y compromiso con la calidad del aguaymanto peruano.",
      },
      { property: "og:title", content: "Quiénes somos | Empresa peruana de aguaymanto" },
      {
        property: "og:description",
        content:
          "Una empresa con raíces en el campo peruano dedicada a la producción y comercialización de aguaymanto.",
      },
    ],
  }),
  component: QuienesSomos,
});

function QuienesSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        text="Producimos y comercializamos aguaymanto con un enfoque en la calidad, la atención directa y las relaciones comerciales de largo plazo."
      />

      <section id="nuestra-empresa" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src={empresa}
              alt="Plantación de aguaymanto en terrazas de la sierra peruana"
              loading="lazy"
              width={1200}
              height={900}
              className="rounded-xl object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionTitle eyebrow="Sobre Nuestra empresa" title="Aguaymanto: tradición y dulzura natural." />
            <Reveal delay={100} className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Somos una empresa peruana dedicada a la recolección, selección y comercialización
                de aguaymanto fresco. Trabajamos directamente con este fruto natural,
                ofreciendo productos cuidadosamente recolectados y seleccionados para garantizar su calidad y frescura.
              </p>
              <p>
               Atendemos a clientes particulares, mercados, restaurantes, hoteles, cafeterías, tiendas, distribuidores
              y empresas interesadas en adquirir aguaymanto para su consumo o comercialización.
              </p>
              <p>
                Nos diferenciamos por el cuidado durante la recolección, la selección responsable de los frutos, la 
                atención directa a nuestros clientes y el compromiso de ofrecer aguaymanto fresco y de buena calidad.

                Nuestro propósito es llevar el delicioso sabor del aguaymanto desde el campo hasta tu mesa.

              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8">
              <Button asChild variant="forest" size="lg">
                <Link to="/productos">Ver nuestros productos</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="nuestra-historia" className="surface-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Nuestra historia"
            title="Un camino construido paso a paso"
            text="Contenido inicial editable: será reemplazado por la historia real de la empresa."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal key={item.step} delay={i * 110} as="li" className="h-full">
                <div className="relative h-full rounded-xl border border-border bg-card p-6 shadow-card card-lift">
                  <span className="font-display text-4xl font-semibold text-gold">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
          <Reveal>
            <article
              id="mision"
              className="h-full rounded-xl gradient-forest p-8 shadow-lift md:p-10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-cream/15 text-gold-light">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl text-cream">Nuestra Misión</h2>
              <p className="mt-4 leading-relaxed text-cream/85">{mission}</p>
            </article>
          </Reveal>
          <Reveal delay={140}>
            <article
              id="vision"
              className="h-full rounded-xl border border-border surface-cream p-8 shadow-card md:p-10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full gradient-gold text-gold-foreground">
                <Compass className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl text-primary">Nuestra Visión</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="valores" className="surface-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow="Nuestros valores" title="Principios que sostienen nuestro trabajo" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <ValueCard key={value.title} item={value} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section id="compromiso" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Nuestro compromiso"
            title="Tres pilares que orientan nuestras decisiones"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commitments.map((item, i) => (
              <Reveal key={item.title} delay={i * 110} className="h-full">
                <article className="h-full rounded-xl border border-border bg-card p-8 text-center shadow-card card-lift">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full surface-cream text-leaf">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow="Galería" title="Nuestro trabajo en imágenes" align="center" />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}
