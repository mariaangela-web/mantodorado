/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: todo el sitio se actualiza automáticamente.
 * Los valores entre [CORCHETES] son placeholders pendientes de confirmación.
 */

export const site = {
  company: {
    name: "[NOMBRE DE LA EMPRESA]",
    brandName: "Aguaymanto Perú",
    tagline: "Calidad y compromiso desde el campo peruano.",
    legalName: "[RAZÓN SOCIAL]",
    ruc: "[RUC]",
  },
  contact: {
    whatsapp: "[WHATSAPP]",
    // Solo dígitos, con código de país. Ej: 51999888777
    whatsappNumber: "51000000000",
    whatsappMessage:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
    phone: "[TELÉFONO]",
    phoneHref: "tel:+51000000000",
    email: "[CORREO]",
    address: "[DIRECCIÓN]",
    city: "[CIUDAD]",
    hours: "[HORARIO DE ATENCIÓN]",
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
