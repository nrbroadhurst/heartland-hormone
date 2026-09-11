import {
  User,
  Heart,
  Scale,
  Dna,
  HeartPulse,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/services";

const ICONS: Record<Service["icon"], LucideIcon> = {
  user: User,
  heart: Heart,
  scale: Scale,
  dna: Dna,
  heartPulse: HeartPulse,
  leaf: Leaf,
};

export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: Service["icon"];
  className?: string;
}) {
  const Icon = ICONS[name];
  return <Icon className={className} strokeWidth={1.5} aria-hidden />;
}
