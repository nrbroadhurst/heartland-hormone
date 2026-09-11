import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_CATEGORIES, FAQ_ENTRIES } from "@/lib/faq";
import { faqJsonLd } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FAQ",
  description:
    "Answers about hormone care, menopause care, medical weight management, billing and pricing at Heartland Hormone in Overland Park and Kansas City.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Plain answers about in-person visits, hormone care, weight management, billing and pricing."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20 md:px-6 space-y-12">
        {FAQ_CATEGORIES.map((category) => {
          const items = FAQ_ENTRIES.filter((entry) => entry.category === category);
          return (
            <div key={category}>
              <SectionHeading title={category} />
              <FAQAccordion
                items={items.map((entry) => ({
                  question: entry.question,
                  answer: entry.answer,
                }))}
              />
            </div>
          );
        })}
      </section>

      <CTASection
        headline="Still have questions?"
        subtext="Book a consultation, or send a general (non-health) message on our contact page."
        secondaryLabel="Contact Heartland"
        secondaryHref="/contact"
      />
    </>
  );
}
