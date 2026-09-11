import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  headline: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "teal" | "gold";
  className?: string;
};

export function CTASection({
  headline,
  subtext,
  ctaLabel = "Book a Consultation",
  ctaHref = "/contact",
  secondaryLabel,
  secondaryHref,
  variant = "teal",
  className,
}: CTASectionProps) {
  const isTeal = variant === "teal";
  return (
    <section
      className={cn(
        "px-4 py-16 md:py-20",
        isTeal ? "bg-teal text-cream" : "bg-gold text-cream",
        className,
      )}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-4 text-balance">
          {headline}
        </h2>
        {subtext && (
          <p
            className={cn(
              "mb-8 text-base md:text-lg leading-relaxed",
              isTeal ? "text-cream/85" : "text-cream",
            )}
          >
            {subtext}
          </p>
        )}
        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button asChild variant={isTeal ? "gold" : "teal"} size="lg">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
