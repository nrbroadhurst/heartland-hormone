import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  name: string;
  price: string;
  summary: string;
  includes: readonly string[];
  notIncluded?: readonly string[];
  href?: string;
  ctaLabel?: string;
  featured?: boolean;
  note?: string;
};

export function PricingCard({
  name,
  price,
  summary,
  includes,
  notIncluded,
  href = "/contact",
  ctaLabel = "Book a Consultation",
  featured = false,
  note,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md border p-6 md:p-8",
        featured
          ? "border-gold bg-teal text-cream"
          : "border-gold/40 bg-cream",
      )}
    >
      <h3
        className={cn(
          "font-display text-xl tracking-wide mb-2",
          featured ? "text-cream" : "text-teal",
        )}
      >
        {name}
      </h3>
      <p
        className={cn(
          "font-display text-2xl md:text-3xl tracking-wide mb-3",
          featured ? "text-gold-light" : "text-teal",
        )}
      >
        {price}
      </p>
      <p
        className={cn(
          "text-sm leading-relaxed mb-6",
          featured ? "text-cream/85" : "text-charcoal/80",
        )}
      >
        {summary}
      </p>
      <ul className="space-y-2.5 mb-6 flex-1">
        {includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm">
            <Check
              className={cn(
                "h-4 w-4 shrink-0 mt-0.5",
                featured ? "text-gold" : "text-teal",
              )}
              strokeWidth={1.5}
              aria-hidden
            />
            <span className={featured ? "text-cream/90" : "text-charcoal/85"}>
              {item}
            </span>
          </li>
        ))}
      </ul>
      {notIncluded && notIncluded.length > 0 && (
        <div
          className={cn(
            "mb-6 border-t pt-4 text-sm leading-relaxed",
            featured ? "border-gold/30 text-cream/75" : "border-gold/30 text-charcoal/70",
          )}
        >
          <p className="font-medium mb-2">Not automatically included</p>
          <ul className="space-y-1.5">
            {notIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {note && (
        <p
          className={cn(
            "mb-6 text-xs leading-relaxed",
            featured ? "text-cream/70" : "text-charcoal/65",
          )}
        >
          {note}
        </p>
      )}
      <Button asChild variant={featured ? "gold" : "teal"} className="mt-auto">
        <Link href={href}>{ctaLabel}</Link>
      </Button>
    </article>
  );
}
