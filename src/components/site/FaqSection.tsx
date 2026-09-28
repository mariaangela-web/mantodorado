import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

export function FaqSection() {
  return (
    <section id="faq" className="surface-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas antes de comprar"
          text="Si necesitas información adicional, escríbenos y te atendemos de forma directa."
          align="center"
        />
        <Reveal delay={120} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="mb-3 overflow-hidden rounded-lg border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
