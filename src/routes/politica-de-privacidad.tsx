import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/config/site";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Información sobre el tratamiento de los datos personales que recibimos a través de nuestro formulario de contacto.",
      },
      { property: "og:title", content: "Política de privacidad" },
      {
        property: "og:description",
        content: "Cómo tratamos los datos personales recibidos a través del sitio web.",
      },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Política de privacidad" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-muted-foreground md:px-6">
          <p>
            Los datos personales que nos proporcionas mediante el formulario de contacto se utilizan
            únicamente para atender tu consulta comercial y enviarte la información solicitada.
          </p>
          <h2 className="pt-4 text-xl text-primary">Datos que recopilamos</h2>
          <p>
            Nombre, empresa, correo electrónico, teléfono, ciudad, tipo de cliente, producto de
            interés, cantidad aproximada y el mensaje que decidas enviarnos.
          </p>
          <h2 className="pt-4 text-xl text-primary">Conservación y acceso</h2>
          <p>
            Los datos son tratados por {site.company.name} con fines comerciales y no se comparten
            con terceros ajenos a la atención de tu consulta. [TEXTO LEGAL A CONFIRMAR POR LA
            EMPRESA]
          </p>
          <h2 className="pt-4 text-xl text-primary">Tus derechos</h2>
          <p>
            Puedes solicitar el acceso, la rectificación o la eliminación de tus datos escribiendo a{" "}
            {site.contact.email}.
          </p>
        </div>
      </section>
    </>
  );
}
