import type { Metadata } from "next";
import { PRIMARY_SERVICES } from "@/lib/services";
import { PageHero } from "@/components/PageHero";
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
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Hormone Replacement & Symptom-Guided Hormone Balancing for Women and Men"
        description={`Hormonal changes can affect how you feel physically, mentally and emotionally. We provide comprehensive evaluations and personalized treatment plans for appropriate candidates. ${SITE.serviceAreaLine}`}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <ServicesGrid services={PRIMARY_SERVICES} featured />
      </section>

      <CTASection
        headline="Not sure where to start?"
        subtext="Book a consultation. Your provider will help you choose the right path after evaluation."
        secondaryLabel="View Pricing & Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
