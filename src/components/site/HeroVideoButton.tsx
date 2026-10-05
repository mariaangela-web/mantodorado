import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

// Video de ejemplo de YouTube sobre el aguaymanto.
// Reemplazar el ID por el video oficial de la empresa cuando esté disponible.
const YOUTUBE_VIDEO_ID = "fWUpvKU-reQ";

export function HeroVideoButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Button
        variant="onDark"
        size="xl"
        onClick={() => setOpen(true)}
        className="mt-3"
      >
        <Play className="h-5 w-5" aria-hidden="true" />
        Ver video
      </Button>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Video sobre el aguaymanto"
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#263238]/95 p-4 md:p-8"
              onClick={() => setOpen(false)}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar video"
                className="absolute right-4 top-4 z-[101] grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream transition-colors hover:bg-cream hover:text-forest md:right-6 md:top-6"
              >
                <span aria-hidden="true" className="text-xl leading-none">
                  ✕
                </span>
              </button>
              <div
                className="aspect-video w-full max-w-5xl overflow-hidden rounded-lg bg-black shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Video sobre el aguaymanto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
