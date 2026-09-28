export type Service = {
  slug: string;
  icon: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "venta",
    icon: "shopping-basket",
    title: "Venta de aguaymanto",
    description: "Venta de producto para clientes particulares y comerciales.",
  },
  {
    slug: "venta-mayorista",
    icon: "package",
    title: "Venta al por mayor",
    description: "Atención de pedidos de mayor volumen.",
  },
  {
    slug: "restaurantes",
    icon: "utensils",
    title: "Atención a restaurantes",
    description:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
  },
  {
    slug: "tiendas-distribuidores",
    icon: "store",
    title: "Atención a tiendas y distribuidores",
    description:
      "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
  },
  {
    slug: "pedidos-personalizados",
    icon: "clipboard-list",
    title: "Pedidos personalizados",
    description:
      "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
  },
  {
    slug: "asesoria",
    icon: "headset",
    title: "Asesoría comercial",
    description: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
  },
];
