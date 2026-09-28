import { whatsappLink } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="¿Necesitas información? Escríbenos por WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-leaf py-3 pr-5 pl-3 text-leaf-foreground shadow-lift transition-transform hover:-translate-y-1 md:right-6 md:bottom-6"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-cream">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-leaf" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-5.9-5c-.4-.7-.6-1.4-.5-2 .1-.6.7-1.5 1.2-1.7.3-.1.7-.1.9.3l.7 1.4c.1.3.1.5-.1.7l-.4.5c-.2.2-.2.4-.1.6.4.8 1.3 1.8 2.3 2.3.3.1.5.1.7-.1l.5-.5c.2-.2.4-.2.7-.1l1.4.7c.3.2.3.6 0 .9Z"
          />
        </svg>
      </span>
      <span className="hidden text-sm font-semibold sm:inline">¿Necesitas información?</span>
    </a>
  );
}
