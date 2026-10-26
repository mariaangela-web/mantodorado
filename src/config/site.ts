/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: todo el sitio se actualiza automáticamente.
 * Los valores entre [CORCHETES] son placeholders pendientes de confirmación.
 */

export const site = {
  company: {
    name: "Manto Dorado",
    brandName: "Manto Dorado",
    tagline: "Calidad y compromiso desde el campo peruano.",
    legalName: "[RAZÓN SOCIAL]",
    ruc: "[RUC]",
  },
  contact: {
    whatsapp: "967 739 510",
    // Solo dígitos, con código de país. Ej: 51999888777
    whatsappNumber: "51967739510",
    whatsappMessage:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
    phone: "921 044 696",
    phoneHref: "tel:+51921044696",
    email: "contacto@mantodorado.com",
    address: "Comunidad Sauceda S/N",
    city: "Limatambo, Anta, Cusco",
    hours: "Lunes a sábado: 8:00 a.m. - 6:00 p.m.",
  },
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
  },
  nav: [
    { label: "Inicio", to: "/" },
    { label: "Quiénes Somos", to: "/quienes-somos" },
    { label: "Productos", to: "/productos" },
    { label: "Servicios", to: "/servicios" },
    { label: "Noticias", to: "/noticias" },
    { label: "Contacto", to: "/contacto" },
  ] as const,
} as const;

export const whatsappLink = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;

export function whatsappLinkWith(message: string) {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
