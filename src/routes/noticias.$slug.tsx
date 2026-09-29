import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/site/Cards";
import { Reveal } from "@/components/site/Reveal";
import { formatDate, news } from "@/data/news";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const post = news.find((item) => item.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Noticia no encontrada" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Noticias` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: NoticiaNoEncontrada,
  component: Noticia,
});

function Noticia() {
  const { post } = Route.useLoaderData();
  const related = news.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="gradient-forest py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:gap-3 transition-all"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a noticias
            </Link>
            <p className="eyebrow mt-6 text-gold-light">{post.category}</p>
            <h1 className="mt-3 text-3xl leading-tight text-cream md:text-4xl">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-cream/75">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" aria-hidden="true" />
                {post.author}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
          <img
            src={post.image}
            alt={post.alt}
            width={1200}
            height={750}
            className="rounded-xl object-cover shadow-lift"
          />
          <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          {post.gallery?.length ? (
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {post.gallery.map((item) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="rounded-lg object-cover shadow-card"
                />
              ))}
            </div>
          ) : null}

          <div className="mt-12 rounded-xl border border-border surface-cream p-8 text-center">
            <h2 className="text-xl text-primary">¿Te interesa nuestro aguaymanto?</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Escríbenos y te enviamos información y una cotización según tu requerimiento.
            </p>
            <Button asChild variant="gold" size="lg" className="mt-6">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="surface-cream py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-2xl text-primary">Noticias relacionadas</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <NewsCard key={item.slug} post={item} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

function NoticiaNoEncontrada() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center md:px-6">
      <Reveal>
        <h1 className="text-3xl text-primary">Noticia no encontrada</h1>
        <p className="mt-4 text-muted-foreground">
          La publicación que buscas no está disponible o fue movida.
        </p>
        <Button asChild variant="forest" className="mt-8">
          <Link to="/noticias">Ver todas las noticias</Link>
        </Button>
      </Reveal>
    </div>
  );
}
