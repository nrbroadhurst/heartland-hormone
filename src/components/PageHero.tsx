import Link from "next/link";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-teal text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-3 font-display text-xs uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] tracking-wide max-w-3xl mb-4 text-balance">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg text-cream/85 leading-relaxed text-pretty">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
      <div className="h-px w-full bg-gold/40" aria-hidden />
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl mb-10" : "mb-10 max-w-2xl"}>
      {eyebrow && (
        <p className="mb-2 font-display text-xs uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl tracking-wide mb-3 ${
          onDark ? "text-cream" : "text-teal"
        }`}
      >
        {title}
      </h2>
      <div className={`h-px w-16 bg-gold mb-4 ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p className={`leading-relaxed ${onDark ? "text-cream/85" : "text-charcoal/85"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function BookButton({
  label = "Book a Consultation",
  href = "/contact",
  variant = "gold" as const,
}: {
  label?: string;
  href?: string;
  variant?: "gold" | "teal" | "outline" | "outline-teal";
}) {
  return (
    <Button asChild variant={variant} size="lg">
      <Link href={href}>{label}</Link>
    </Button>
  );
}
