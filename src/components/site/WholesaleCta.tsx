import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";

const benefits = [
  "Pedidos por volumen",
  "Atención personalizada",
  "Presentaciones comerciales",
  "Coordinación de entregas",
  "Cotizaciones",
];

export function WholesaleCta() {
  return (
    <section className="gradient-forest py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-gold-light">Clientes mayoristas</p>
          <h2 className="mt-4 text-3xl text-cream md:text-4xl">
            ¿Buscas un proveedor de aguaymanto?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80">
            Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y
            otros negocios que requieren aguaymanto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ul className="grid gap-3 rounded-xl border border-cream/20 bg-cream/5 p-6 backdrop-blur sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-cream/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full gradient-gold text-gold-foreground">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
