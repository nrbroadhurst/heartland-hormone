import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { ProviderPortrait } from "@/components/ProviderPortrait";
import { SITE, providerCredentialLine } from "@/lib/site";

export function ProviderPreview() {
  return (
    <section className="bg-teal/5 border-y border-gold/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24 md:px-6 lg:px-8">
        <FadeIn>
          <ProviderPortrait
            eyebrow="Your Provider"
            name={SITE.providerName ?? SITE.shortName}
            detail={providerCredentialLine()}
            className="w-full max-w-md"
          />
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
            Heartland Hormone & Wellness Clinic was founded by {SITE.providerName},
            AGACNP-BC, a board-certified nurse practitioner with decades of
            clinical experience caring for adults, including patients with complex
            medical conditions.
          </p>
          <p className="text-charcoal/85 leading-relaxed mb-8">
            Raised in Miami County and a longtime resident of Overland Park, she
            established Heartland to provide a more personalized approach to
            hormone replacement therapy and wellness care.
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
        Care is nurse practitioner-led by {SITE.providerName},{" "}
        {providerCredentialLine()}.{" "}
        <Link href="/about" className="text-teal underline underline-offset-2">
          Meet your provider
        </Link>
        .
      </p>
    </div>
  );
}
