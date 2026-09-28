import {
  Award,
  BadgeCheck,
  ClipboardList,
  Compass,
  Handshake,
  Headset,
  Leaf,
  Lightbulb,
  MapPin,
  Package,
  Scale,
  Shield,
  ShoppingBasket,
  Sparkles,
  Sprout,
  Store,
  Target,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  award: Award,
  "badge-check": BadgeCheck,
  "clipboard-list": ClipboardList,
  compass: Compass,
  handshake: Handshake,
  headset: Headset,
  leaf: Leaf,
  lightbulb: Lightbulb,
  "map-pin": MapPin,
  package: Package,
  scale: Scale,
  shield: Shield,
  "shopping-basket": ShoppingBasket,
  sparkles: Sparkles,
  sprout: Sprout,
  store: Store,
  target: Target,
  users: Users,
  utensils: Utensils,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Leaf;
  return <Cmp className={className} aria-hidden="true" />;
}
