import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE, hasEmail } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: `Website terms of service for ${SITE.name}.`,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Terms governing use of this website. Not a substitute for a provider-patient agreement."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">Last updated: August 17, 2026</p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Acceptance</h2>
          <p>
            By accessing this website, you agree to these Terms. If you do not
            agree, do not use the site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Educational content only
          </h2>
          <p>
            Content on this website is for educational purposes and does not
            constitute medical advice. Nothing on this site establishes a
            provider-patient relationship. Treatment decisions are made
            individually with a licensed provider following consultation and
            appropriate evaluation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            No outcome guarantees
          </h2>
          <p>
            We do not guarantee specific results from any service described on
            this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Intellectual property
          </h2>
          <p>
            Website content, branding and design are owned by {SITE.name} unless
            otherwise noted. You may not copy or reuse them without permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Governing law
          </h2>
          <p>
            These Terms are governed by the laws of the State of Kansas, without
            regard to conflict-of-law rules.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Contact</h2>
          <p>
            {SITE.name}
            {hasEmail() ? (
              <>
                {" "}
                (
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-teal underline underline-offset-2"
                >
                  {SITE.email}
                </a>
                )
              </>
            ) : (
              ". Use the contact page for general questions."
            )}
          </p>
        </section>
      </article>
    </>
  );
}
