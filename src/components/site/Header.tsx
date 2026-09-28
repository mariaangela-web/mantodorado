import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-card backdrop-blur"
          : "border-b border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Ir al inicio">
          <span className="grid h-11 w-11 place-items-center rounded-full gradient-gold shadow-gold">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-forest" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 3c1.2 2.1 3.2 3.4 5.6 3.7-.4 3-1.7 5-3.6 6.2V21h-4v-8.1C8.1 11.7 6.8 9.7 6.4 6.7 8.8 6.4 10.8 5.1 12 3Z"
              />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-primary">
              {site.company.brandName}
            </span>
            <span className="block text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Producción y comercialización
            </span>
          </span>
        </Link>

        <nav aria-label="Menú principal" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.contact.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.contact.phone}
          </a>
          <Button asChild variant="gold">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Menú móvil" className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-2 py-3 text-base font-medium text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="gold" size="lg" className="mt-3">
              <Link to="/contacto" onClick={() => setOpen(false)}>
                Solicitar cotización
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
