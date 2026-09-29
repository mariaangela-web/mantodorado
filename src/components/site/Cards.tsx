import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { formatDate, type NewsPost } from "@/data/news";
import type { Product } from "@/data/products";
import type { Service } from "@/data/services";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card-lift flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card">
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={product.image}
            alt={product.alt}
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl text-primary">{product.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            {product.specs.map((spec) => (
              <li key={spec.label} className="flex justify-between gap-3 border-b border-border py-1">
                <span className="font-medium text-foreground">{spec.label}</span>
                <span className="text-right">{spec.value}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="gold" className="mt-6 w-full">
            <Link to="/contacto">{product.cta}</Link>
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card-lift flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-card">
        <span className="grid h-12 w-12 place-items-center rounded-lg surface-cream text-leaf">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-lg text-primary">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <Link
          to="/contacto"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf hover:gap-3 transition-all"
        >
          Consultar <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </article>
    </Reveal>
  );
}

export function ValueCard({
  item,
  delay = 0,
}: {
  item: { icon: string; title: string; text: string };
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card-lift h-full rounded-xl border border-border bg-card p-6 shadow-card">
        <span className="grid h-11 w-11 place-items-center rounded-full gradient-gold text-gold-foreground">
          <Icon name={item.icon} className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-base font-semibold text-primary">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
      </article>
    </Reveal>
  );
}

export function NewsCard({ post, delay = 0 }: { post: NewsPost; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card-lift flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card">
        <div className="aspect-16/10 overflow-hidden">
          <img
            src={post.image}
            alt={post.alt}
            loading="lazy"
            width={1200}
            height={750}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full surface-cream px-3 py-1 font-semibold text-leaf">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
          </div>
          <h3 className="mt-4 text-lg leading-snug text-primary">{post.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <Link
            to="/noticias/$slug"
            params={{ slug: post.slug }}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf transition-all hover:gap-3"
          >
            Leer más <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
