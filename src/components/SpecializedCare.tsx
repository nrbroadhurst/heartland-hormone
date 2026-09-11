import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SPECIALIZED_CARE } from "@/lib/homepage-copy";

export function SpecializedCareGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SPECIALIZED_CARE.map((item, i) => (
        <FadeIn key={item.title} delay={i * 0.04} className="h-full">
          <article className="flex h-full flex-col rounded-md border border-gold/25 bg-cream p-6">
            <h3 className="font-display text-xl text-teal tracking-wide mb-3">
              {item.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-charcoal/85 mb-4">
              {item.body}
            </p>
            <Link
              href={item.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-teal hover:gap-2 transition-all"
            >
              Learn more <ArrowRight className="h-4 w-4 text-gold" />
            </Link>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
