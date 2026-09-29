export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="gradient-forest py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="eyebrow text-gold-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-cream md:text-5xl">{title}</h1>
        {text ? <p className="mt-5 max-w-2xl leading-relaxed text-cream/80">{text}</p> : null}
      </div>
    </section>
  );
}
