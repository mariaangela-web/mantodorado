import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  onDark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", onDark && "text-gold-light")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl leading-tight md:text-4xl",
          onDark ? "text-cream" : "text-primary",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            onDark ? "text-cream/80" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
      <span
        className={cn(
          "mt-6 block h-1 w-16 rounded-full gradient-gold",
          align === "center" && "mx-auto",
        )}
      />
    </Reveal>
  );
}
