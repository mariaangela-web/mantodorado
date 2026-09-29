import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { NewsCard } from "@/components/site/Cards";
import { Reveal } from "@/components/site/Reveal";
import { news, newsCategories } from "@/data/news";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad | Aguaymanto peruano" },
      {
        name: "description",
        content:
          "Noticias de la empresa, información sobre el cultivo del aguaymanto, mercado y producción responsable.",
      },
      { property: "og:title", content: "Noticias y actualidad | Aguaymanto peruano" },
      {
        property: "og:description",
        content: "Novedades de la empresa y contenidos sobre el aguaymanto y la agricultura peruana.",
      },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Noticias y actualidad"
        title="Novedades de la empresa y del aguaymanto peruano"
        text="Publicamos información sobre nuestro trabajo, el cultivo y el mercado del aguaymanto."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow="Últimas publicaciones" title="Lo más reciente" />
          <Reveal delay={80} className="mt-8 flex flex-wrap gap-2">
            {newsCategories.map((category) => (
              <span
                key={category}
                className="rounded-full surface-cream px-4 py-1.5 text-xs font-semibold text-leaf"
              >
                {category}
              </span>
            ))}
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((post, i) => (
              <NewsCard key={post.slug} post={post} delay={i * 110} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
