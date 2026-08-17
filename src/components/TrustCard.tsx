import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function TrustCard({
  title,
  body,
  icon: Icon,
  index = 0,
}: {
  title: string;
  body: string;
  icon: LucideIcon;
  index?: number;
}) {
  return (
    <FadeIn delay={index * 0.05}>
      <article className="h-full rounded-md border border-gold/25 bg-cream p-6">
        <Icon className="h-6 w-6 text-gold mb-4" strokeWidth={1.5} aria-hidden />
        <h3 className="font-display text-xl text-teal tracking-wide mb-2">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-charcoal/85">{body}</p>
      </article>
    </FadeIn>
  );
}
