import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getService,
  SERVICES,
  DEDICATED_SERVICE_SLUGS,
  isServicePubliclyMarketable,
} from "@/lib/services";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { ServiceExpectSteps } from "@/components/StepList";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn } from "@/components/FadeIn";
import { CareTeamNote } from "@/components/ProviderPreview";
import { pageMeta } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.filter((s) => !DEDICATED_SERVICE_SLUGS.includes(s.slug)).map(
    (s) => ({ slug: s.slug }),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const base = pageMeta({
    title: service.seoTitle,
    description: service.seoDescription,
    path: service.href,
  });

  if (!isServicePubliclyMarketable(slug)) {
    return {
      ...base,
      robots: { index: false, follow: false },
    };
  }

  return base;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || DEDICATED_SERVICE_SLUGS.includes(service.slug)) notFound();

  if (!isServicePubliclyMarketable(slug)) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={serviceJsonLd(service.title, service.description, service.href)}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: service.href },
        ])}
      />

      <PageHero
        eyebrow="Services"
        title={service.title}
        description={service.heroDescriptor}
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-gold/50 text-gold">
            <ServiceIcon name={service.icon} className="h-6 w-6" />
          </div>
          <BookButton label={`Book a ${service.shortTitle} Consultation`} />
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <FadeIn>
          <SectionHeading title="What It Is" />
          <p className="text-lg leading-relaxed text-charcoal/90 -mt-6">
            {service.whatItIs}
          </p>
        </FadeIn>
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="Who It Is For" />
          <ul className="space-y-4 -mt-2">
            {service.whoItsFor.map((item) => (
              <li key={item} className="flex gap-3 text-charcoal/90 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="What to Expect" />
        <ServiceExpectSteps items={service.whatToExpect} />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-14 md:px-6">
        <div className="rounded-md border border-gold/40 bg-cream p-6 md:p-8">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Safety &amp; Oversight
          </p>
          <p className="text-charcoal/90 leading-relaxed">{service.safetyCallout}</p>
          {service.extraDisclosure && (
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80 border-t border-gold/30 pt-4">
              {service.extraDisclosure}
            </p>
          )}
        </div>
        <CareTeamNote />
      </section>

      <CTASection
        headline={`Ready to discuss ${service.shortTitle.toLowerCase()}?`}
        subtext="Book a consultation at our Kansas City-area clinic."
        ctaLabel="Book a Consultation"
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
