import {
  BadgeCheck,
  MapPin,
  FlaskConical,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const DEFAULT_BADGES: { icon: LucideIcon; label: string }[] = [
  { icon: BadgeCheck, label: "Nurse Practitioner-Led Care" },
  { icon: MapPin, label: "Kansas City Clinic + Telehealth" },
  { icon: FlaskConical, label: "Lab-Guided Treatment" },
  { icon: Lock, label: "Cash-Pay Program Clarity" },
];

export function TrustBadgeRow({
  badges = DEFAULT_BADGES,
}: {
  badges?: { icon: LucideIcon; label: string }[];
}) {
  return (
    <section className="border-y border-gold/30 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 md:px-6 lg:px-8">
        {badges.map((badge, i) => (
          <FadeIn key={badge.label} delay={i * 0.05}>
            <div className="flex items-center gap-3">
              <badge.icon
                className="h-6 w-6 shrink-0 text-gold"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="font-display text-sm tracking-wide text-teal">
                {badge.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
