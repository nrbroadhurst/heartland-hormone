import type { Metadata } from "next";
import { PRIMARY_SERVICES } from "@/lib/services";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Hormone Replacement Therapy for Women and Men",
  description:
    "Hormonal changes can affect energy, mood, sleep, body composition, libido, and overall well-being. Heartland provides comprehensive evaluations and individualized treatment plans based on symptoms, health history, and laboratory findings.",
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        title="Hormone Replacement Therapy for Women and Men"
        description="Hormonal changes can affect energy, mood, sleep, body composition, libido, and overall well-being. Heartland provides comprehensive evaluations and individualized treatment plans based on symptoms, health history, and laboratory findings."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <ServicesGrid services={PRIMARY_SERVICES} featured />
      </section>

      <CTASection
        headline="Not sure where to start?"
        subtext="Book a consultation to discuss your symptoms, health history, and goals. Your provider will help determine the most appropriate path based on your evaluation."
        secondaryLabel="View Pricing & Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
