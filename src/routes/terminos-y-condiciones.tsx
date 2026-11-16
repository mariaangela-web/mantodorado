import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/config/site";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Manto Dorado" },
      {
        name: "description",
        content:
          "Condiciones de uso del sitio web y alcance de la información comercial publicada sobre nuestros productos de aguaymanto.",
      },
      { property: "og:title", content: "Términos y condiciones" },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio y de la información comercial publicada.",
      },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Términos y condiciones" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-muted-foreground md:px-6">
          <p>
            El contenido de este sitio web tiene carácter informativo y comercial. La disponibilidad,
            presentaciones y precios de los productos están sujetos a confirmación mediante una
            cotización.
          </p>
          <h2 className="pt-4 text-xl text-primary">Uso del sitio</h2>
          <p>
            Las imágenes y textos publicados pertenecen a {site.company.name} y no pueden
            reproducirse sin autorización.
          </p>
          <h2 className="pt-4 text-xl text-primary">Pedidos y cotizaciones</h2>
          <p>
            Las consultas enviadas por el formulario o WhatsApp no constituyen un pedido en firme
            hasta ser confirmadas por la empresa. [CONDICIONES COMERCIALES A CONFIRMAR]
          </p>
          <h2 className="pt-4 text-xl text-primary">Contacto</h2>
          <p>Para consultas sobre estos términos escríbenos a {site.contact.email}.</p>
        </div>
      </section>
    </>
  );
}
