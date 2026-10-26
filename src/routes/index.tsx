import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { NewsCard, ProductCard, ServiceCard, ValueCard } from "@/components/site/Cards";
import { Gallery } from "@/components/site/Gallery";
import { FaqSection } from "@/components/site/FaqSection";
import { WholesaleCta } from "@/components/site/WholesaleCta";
import { Icon } from "@/components/site/Icon";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { news } from "@/data/news";
import { reasons, values } from "@/data/company";
import campo from "@/assets/galeria-productor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manto Dorado | Venta y producción de aguaymanto peruano - limatambo" },
      {
        name: "description",
        content:
          "Producimos y comercializamos aguaymanto fresco seleccionado en Perú. Venta al por mayor, atención a restaurantes, tiendas y distribuidores. Solicita tu cotización.",
      },
      { property: "og:title", content: "Manto Dorado | Venta y producción de aguaymanto" },
      {
        property: "og:description",
        content:
          "Aguaymanto peruano de calidad para clientes particulares, restaurantes, tiendas y distribuidores.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Introducción institucional */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={campo}
                alt="Productor peruano sosteniendo una caja de aguaymanto en el campo"
                loading="lazy"
                width={1200}
                height={900}
                className="rounded-xl object-cover shadow-lift"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-xl gradient-gold px-6 py-5 shadow-gold sm:block">
                <p className="font-display text-2xl font-semibold text-gold-foreground">100%</p>
                <p className="text-xs font-semibold tracking-wider text-gold-foreground uppercase">
                  Origen peruano
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionTitle
              eyebrow="Sobre la Empresa"
              title="Comprometidos con la calidad del aguaymanto Limatambeño"
              text="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
            />
            <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="forest" size="lg">
                <Link to="/quienes-somos">Conoce quiénes somos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/productos">Ver productos</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="surface-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Nuestro producto bandera"
            title="Aguaymanto seleccionado para cada tipo de cliente"
            text="Trabajamos presentaciones para consumo directo y para clientes comerciales."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Acompañamos cada etapa de tu pedido"
            text="Desde la consulta inicial hasta la coordinación de la entrega."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={i * 90} />
            ))}
          </div>
          <Reveal delay={200} className="mt-10">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 font-semibold text-leaf transition-all hover:gap-3"
            >
              Conocer nuestros servicios <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WholesaleCta />

      {/* Por qué elegirnos */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="¿Por qué elegirnos?"
            title="Razones para trabajar con nosotros"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 90} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-6 text-center shadow-card card-lift">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full surface-cream text-leaf">
                    <Icon name={reason.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-primary">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="surface-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow="Nuestros valores" title="Lo que guía nuestro trabajo" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <ValueCard key={value.title} item={value} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Galería"
            title="El campo, el fruto y nuestro trabajo"
            align="center"
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="surface-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Noticias y actualidad"
            title="Novedades del aguaymanto y de la empresa"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((post, i) => (
              <NewsCard key={post.slug} post={post} delay={i * 110} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="gradient-forest py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className="text-3xl text-cream md:text-4xl">¿Listo para tu próximo pedido?</h2>
          <p className="max-w-2xl text-cream/80">
            Cuéntanos qué necesitas y te enviamos una cotización a la medida.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
