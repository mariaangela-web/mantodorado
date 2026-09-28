import fresco from "@/assets/hero-fruto.jpg";
import distribucion from "@/assets/producto-empaque.jpg";
import especiales from "@/assets/galeria-seleccion.jpg";

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  /** Campos ampliables: presentación, peso, disponibilidad, precio, ficha técnica. */
  specs: { label: string; value: string }[];
  features: string[];
};

export const products: Product[] = [
  {
    slug: "aguaymanto-fresco",
    name: "Aguaymanto fresco",
    description:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    image: fresco,
    alt: "Aguaymanto fresco con cáliz en canasta de fibra natural",
    cta: "Solicitar información",
    specs: [
      { label: "Presentación", value: "[PRESENTACIÓN]" },
      { label: "Peso", value: "[PESO]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "Según cotización" },
    ],
    features: ["Fruto seleccionado", "Manejo cuidadoso", "Presentación uniforme"],
  },
  {
    slug: "aguaymanto-distribucion",
    name: "Aguaymanto para distribución",
    description: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    image: distribucion,
    alt: "Aguaymanto empacado en envases comerciales y cajas para distribución",
    cta: "Consultar",
    specs: [
      { label: "Presentación", value: "[PRESENTACIÓN COMERCIAL]" },
      { label: "Volumen", value: "[VOLUMEN MÍNIMO]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "Según volumen" },
    ],
    features: ["Pedidos por volumen", "Empaque para transporte", "Coordinación de entregas"],
  },
  {
    slug: "presentaciones-especiales",
    name: "Presentaciones especiales",
    description: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    image: especiales,
    alt: "Selección de aguaymanto en planta de empaque",
    cta: "Consultar presentación",
    specs: [
      { label: "Presentación", value: "A evaluar según requerimiento" },
      { label: "Peso", value: "[PESO]" },
      { label: "Disponibilidad", value: "Sujeta a campaña" },
      { label: "Precio", value: "Según cotización" },
    ],
    features: ["Requerimientos específicos", "Asesoría comercial", "Evaluación de disponibilidad"],
  },
];
