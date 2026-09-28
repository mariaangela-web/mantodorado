import mercados from "@/assets/producto-empaque.jpg";
import cultivo from "@/assets/galeria-plantacion.jpg";
import calidad from "@/assets/galeria-seleccion.jpg";
import gastronomia from "@/assets/galeria-gastronomia.jpg";

export type NewsPost = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  author: string;
  excerpt: string;
  image: string;
  alt: string;
  content: string[];
  gallery?: { src: string; alt: string }[];
};

/** Contenido de ejemplo: editable o eliminable. */
export const news: NewsPost[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    title: "El aguaymanto peruano y su presencia en nuevos mercados",
    category: "Mercado",
    date: "2026-09-10",
    author: "[AUTOR]",
    excerpt:
      "El interés comercial por el aguaymanto continúa creciendo y abre oportunidades para los productores peruanos.",
    image: mercados,
    alt: "Aguaymanto empacado listo para distribución comercial",
    content: [
      "El aguaymanto es uno de los frutos peruanos que ha despertado mayor interés comercial en los últimos años, tanto en el mercado local como en nuevos destinos.",
      "Este interés representa una oportunidad para las empresas que trabajan el producto con criterios de selección, presentación y atención comercial consistente.",
      "Como empresa, mantenemos el foco en la calidad del fruto y en construir relaciones comerciales duraderas con clientes particulares, restaurantes, tiendas y distribuidores.",
    ],
  },
  {
    slug: "conoce-el-cultivo-del-aguaymanto",
    title: "Conoce más sobre el cultivo del aguaymanto",
    category: "Agricultura",
    date: "2026-08-22",
    author: "[AUTOR]",
    excerpt:
      "Un recorrido por las características del cultivo del aguaymanto y el trabajo que hay detrás de cada cosecha.",
    image: cultivo,
    alt: "Plantación de aguaymanto en terrazas andinas",
    content: [
      "El aguaymanto crece envuelto en un cáliz que protege el fruto y ayuda a conservar su frescura hasta el momento de su consumo.",
      "El cultivo requiere seguimiento constante: revisión de las plantas, cuidado del suelo y cosecha en el punto adecuado de madurez.",
      "Ese trabajo de campo es la base de la calidad que buscamos ofrecer en cada presentación de nuestro producto.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad",
    title: "Nuestra apuesta por la calidad y la producción responsable",
    category: "Noticias de la empresa",
    date: "2026-07-15",
    author: "[AUTOR]",
    excerpt:
      "Compartimos los criterios con los que trabajamos la selección, el empaque y la atención a nuestros clientes.",
    image: calidad,
    alt: "Equipo seleccionando aguaymanto en área de empaque",
    content: [
      "La calidad no es un resultado aislado: depende de decisiones tomadas en el campo, en la selección y en el empaque.",
      "Trabajamos con procesos ordenados para que cada pedido llegue con una presentación adecuada y consistente.",
      "Nuestro compromiso incluye también prácticas responsables con el entorno y con las personas que forman parte de nuestra operación.",
    ],
    gallery: [
      { src: calidad, alt: "Área de selección de aguaymanto" },
      { src: gastronomia, alt: "Aguaymanto usado en preparación gastronómica" },
    ],
  },
];

export const newsCategories = [
  "Noticias de la empresa",
  "Agricultura",
  "Aguaymanto",
  "Mercado",
  "Eventos",
  "Innovación",
  "Producción",
];

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
