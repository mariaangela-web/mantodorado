import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="surface-forest">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold text-cream">{site.company.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/75">{site.company.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-forest"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-forest"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.social.tiktok}
              aria-label="TikTok"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-forest"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M16.5 3h-2.7v11.2a2.3 2.3 0 1 1-2.3-2.3c.2 0 .4 0 .6.1V9.2a5.1 5.1 0 1 0 4.4 5V8.6c.9.7 2 1.1 3.2 1.2V7.1c-1.8-.1-3.2-1.5-3.2-4.1Z"
                />
              </svg>
            </a>
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-forest"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Enlaces del sitio">
          <p className="text-sm font-semibold tracking-[0.16em] text-gold-light uppercase">
            Enlaces
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/80 transition-colors hover:text-gold-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-gold-light uppercase">
            Información
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li>
              <a href={whatsappLink} className="flex items-start gap-2 hover:text-gold-light">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                WhatsApp: {site.contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={site.contact.phoneHref}
                className="flex items-start gap-2 hover:text-gold-light"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {site.contact.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {site.contact.address}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {site.contact.hours}
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-gold-light uppercase">
            Productos
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <Link to="/productos" className="hover:text-gold-light">
                Aguaymanto fresco
              </Link>
            </li>
            <li>
              <Link to="/productos" className="hover:text-gold-light">
                Presentaciones comerciales
              </Link>
            </li>
            <li>
              <Link to="/productos" className="hover:text-gold-light">
                Pedidos mayoristas
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-gold-light">
                Atención a restaurantes
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-cream/70 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 {site.company.name}. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link to="/politica-de-privacidad" className="hover:text-gold-light">
              Política de privacidad
            </Link>
            <Link to="/terminos-y-condiciones" className="hover:text-gold-light">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
