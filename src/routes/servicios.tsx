import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/Cards";
import { WholesaleCta } from "@/components/site/WholesaleCta";
import { services } from "@/data/services";
import { reasons } from "@/data/company";
import { Icon } from "@/components/site/Icon";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Venta mayorista y atención a restaurantes" },
      {
        name: "description",
        content:
          "Servicios de venta de aguaymanto: venta al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Servicios | Venta mayorista de aguaymanto" },
      {
        property: "og:description",
        content:
          "Atendemos restaurantes, tiendas, distribuidores y empresas con pedidos de aguaymanto peruano.",
      },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Servicios comerciales alrededor del aguaymanto"
        text="Te acompañamos desde la consulta inicial hasta la coordinación de la entrega."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Qué ofrecemos"
            title="Soluciones para cada tipo de cliente"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="surface-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow="¿Por qué elegirnos?" title="Trabajamos con orden y compromiso" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 90} className="h-full">
                <div className="card-lift h-full rounded-xl border border-border bg-card p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-full surface-cream text-leaf">
                    <Icon name={reason.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-primary">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10">
            <Button asChild variant="gold" size="lg">
              <Link to="/contacto">Contactarnos</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <WholesaleCta />
    </>
  );
}
