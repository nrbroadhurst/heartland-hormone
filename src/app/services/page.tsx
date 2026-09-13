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
    "Hormone replacement and symptom-guided hormone balancing for women and men, plus medical weight management, in Overland Park and the Kansas City area.",
  path: "/services",
});

export default function ServicesHubPage() {
  const secondaryServices = getSecondaryServices();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Hormone Replacement & Symptom-Guided Hormone Balancing for Women and Men"
        description={`Hormonal changes can affect how you feel physically, mentally and emotionally. We provide comprehensive evaluations and personalized treatment plans for appropriate candidates. ${SITE.serviceAreaLine}`}
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
              description="Healthy aging and metabolic wellness support for selected patients after clinical evaluation."
            />
            <ServicesGrid services={secondaryServices} />
          </div>
        </section>
      )}

      <CTASection
        headline="Not sure where to start?"
        subtext="Book a consultation. Your provider will help you choose the right path after evaluation."
        secondaryLabel="View Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
