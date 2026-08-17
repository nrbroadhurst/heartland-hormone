import type { Metadata } from "next";
import { PRIMARY_SERVICES, SECONDARY_SERVICES } from "@/lib/services";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Hormone Therapy & Weight Management Services",
  description:
    "Men's testosterone therapy, women's menopause care, medical weight management, sexual wellness and peptide therapy in Overland Park and Kansas City.",
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Care for Men and Women"
        description={`Men's hormone therapy, women's menopause care and medical weight management are the core of this practice. ${SITE.serviceAreaLine}`}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <SectionHeading
          title="Primary programs"
          description="These three service lines are the starting point for most patients."
        />
        <ServicesGrid services={PRIMARY_SERVICES} featured />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
          <SectionHeading
            title="Additional services"
            description="Peptide therapy, sexual wellness and healthy-aging support may be considered for selected patients."
          />
          <ServicesGrid services={SECONDARY_SERVICES} />
        </div>
      </section>

      <CTASection
        headline="Not sure where to start?"
        subtext="Book a consultation. Your provider will help you choose the right path."
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
