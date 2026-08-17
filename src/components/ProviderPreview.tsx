import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { SITE, providerCredentialLine } from "@/lib/site";

export function ProviderPreview() {
  return (
    <section className="bg-teal/5 border-y border-gold/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24 md:px-6 lg:px-8">
        <FadeIn>
          <div className="aspect-[4/5] w-full max-w-md rounded-md border border-gold/30 bg-teal text-cream flex flex-col items-center justify-center px-8 text-center">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-gold mb-4">
              Your Provider
            </p>
            <p className="font-display text-2xl tracking-wide mb-3">
              {SITE.providerName ?? SITE.shortName}
            </p>
            <p className="text-sm text-cream/80 leading-relaxed">
              {providerCredentialLine()}
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-teal tracking-wide mb-4">
            Rooted in the Kansas City Community
          </h2>
          <div className="h-px w-16 bg-gold mb-6" />
          <p className="text-charcoal/85 leading-relaxed mb-4">
            Heartland was founded by an Adult-Gerontology Acute Care Nurse
            Practitioner, AGACNP-BC, raised in Miami County. The Kansas City metro
            has been home since 1983. Family life here includes children who
            graduated from the Blue Valley School District.
          </p>
          <p className="text-charcoal/85 leading-relaxed mb-8">
            After more than four decades in this community, the clinic exists to
            provide personalized, evidence-based hormone and wellness care to
            neighbors in Overland Park, Johnson County and the wider Kansas City
            area.
          </p>
          <Button asChild variant="teal">
            <Link href="/about">Meet Your Provider</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

export function CareTeamNote() {
  return (
    <div className="mt-10 rounded-md border border-teal/15 bg-teal/5 p-6">
      <p className="font-display text-sm tracking-wide text-teal mb-2">
        Your Care Team
      </p>
      <p className="text-sm text-charcoal/80 leading-relaxed">
        Care is nurse practitioner-led. Heartland was founded by an{" "}
        {providerCredentialLine()} with decades of advanced clinical experience.{" "}
        <Link href="/about" className="text-teal underline underline-offset-2">
          Meet your provider
        </Link>
        .
      </p>
    </div>
  );
}
