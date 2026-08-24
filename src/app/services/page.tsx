import type { Metadata } from "next";
import { getSecondaryServices, PRIMARY_SERVICES } from "@/lib/services";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Hormone & Weight Management Services",
  description:
    "Men's hormone care, women's menopause care and medical weight management in Overland Park and the Kansas City area.",
  path: "/services",
});

export default function ServicesHubPage() {
  const secondaryServices = getSecondaryServices();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Care for Men and Women"
        description={`Men's hormone care, women's menopause care and medical weight management are the core of this practice. ${SITE.serviceAreaLine}`}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <SectionHeading
          title="Primary programs"
          description="These three clinical programs are the starting point for most patients."
        />
        <ServicesGrid services={PRIMARY_SERVICES} featured />
      </section>

      {secondaryServices.length > 0 && (
        <section className="bg-teal/5 border-y border-gold/20">
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
            <SectionHeading
              title="Additional services"
              description="Sexual wellness, healthy aging and metabolic wellness support for selected patients after clinical evaluation."
            />
            <ServicesGrid services={secondaryServices} />
          </div>
        </section>
      )}

      <CTASection
        headline="Not sure where to start?"
        subtext="Book a consultation. Your provider will help you choose the right path after evaluation."
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
