import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { FaqSection } from "@/components/site/FaqSection";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/config/site";

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>) => ({
    producto: typeof search.producto === "string" ? search.producto : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contacto | Solicita tu cotización de aguaymanto" },
      {
        name: "description",
        content:
          "Contáctanos por WhatsApp, teléfono, correo o formulario para cotizar aguaymanto fresco y presentaciones comerciales en Perú.",
      },
      { property: "og:title", content: "Contacto | Solicita tu cotización de aguaymanto" },
      {
        property: "og:description",
        content: "Atendemos consultas de clientes particulares, restaurantes, tiendas y mayoristas.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const { producto } = Route.useSearch();

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para atenderte"
        text="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionTitle eyebrow="Datos de contacto" title="Escríbenos o llámanos" />
            <Reveal delay={100} className="mt-8 space-y-4">
              <ContactItem icon={<Phone className="h-5 w-5" aria-hidden="true" />} label="WhatsApp">
                <a href={whatsappLink} className="hover:underline">
                  {site.contact.whatsapp}
                </a>
              </ContactItem>
              <ContactItem icon={<Phone className="h-5 w-5" aria-hidden="true" />} label="Teléfono">
                <a href={site.contact.phoneHref} className="hover:underline">
                  {site.contact.phone}
                </a>
              </ContactItem>
              <ContactItem
                icon={<Mail className="h-5 w-5" aria-hidden="true" />}
                label="Correo electrónico"
              >
                {site.contact.email}
              </ContactItem>
              <ContactItem
                icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
                label="Dirección"
              >
                {site.contact.address} — {site.contact.city}
              </ContactItem>
              <ContactItem
                icon={<Clock className="h-5 w-5" aria-hidden="true" />}
                label="Horario de atención"
              >
                {site.contact.hours}
              </ContactItem>
            </Reveal>
            <Reveal delay={200} className="mt-8">
              <Button asChild variant="gold" size="lg">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <h2 className="text-2xl text-primary">Formulario de consulta</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Completa tus datos y te responderemos a la brevedad.
            </p>
            <div className="mt-6">
              <ContactForm defaultProduct={producto} />
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full surface-cream text-leaf">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {label}
        </p>
        <p className="mt-1 font-medium text-foreground">{children}</p>
      </div>
    </div>
  );
}
