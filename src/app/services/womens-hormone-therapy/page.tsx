import type { Metadata } from "next";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { TreatmentList } from "@/components/TreatmentList";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";

const PATH = "/services/womens-hormone-therapy";

export const metadata: Metadata = pageMeta({
  title: "Menopause & Women's Hormone Care in Overland Park, KS",
  description:
    "Perimenopause and menopause care in Overland Park and Kansas City. Individualized women's hormone care with clinical evaluation and ongoing monitoring.",
  path: PATH,
});

export default function WomensHormonePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Women's Hormone & Menopause Care",
          "Individualized care for women experiencing symptoms associated with the menopause transition, including perimenopause, menopause, and postmenopause.",
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Women's Hormone & Menopause Care", path: PATH },
        ])}
      />

      <PageHero
        title="Women's Hormone & Menopause Care"
        description="Heartland provides individualized care for women experiencing symptoms associated with the menopause transition, including perimenopause, menopause, and postmenopause. Treatment recommendations are based on symptoms, health history, risk factors, laboratory findings, and personal health goals."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton
            label="Book a Women's Hormone Consultation"
            href="/contact?interest=womens-hormone"
          />
          <BookButton
            label="View Pricing & Programs"
            href="/programs#womens-hormone"
            variant="outline"
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="Symptoms We Commonly Evaluate" />
        <TreatmentList
          items={[
            "Hot flashes",
            "Night sweats",
            "Disrupted sleep",
            "Fatigue",
            "Changes in mood",
            "Low libido",
            "Vaginal symptoms",
            "Sexual wellness concerns",
            "Changes in body composition",
            "Symptoms that may be related to PMOS/PCOS",
            "Reduced sense of well-being",
          ]}
        />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="PMOS/PCOS and Metabolic Hormone Care" />
          <p className="text-charcoal/90 leading-relaxed -mt-4">
            PMOS/PCOS (polycystic ovary syndrome) can affect cycles, androgen
            levels, metabolic health, and long-term wellness. Heartland evaluates
            these concerns as part of women&apos;s hormone and metabolic care.
            Treatment is individualized following a review of symptoms, health
            history, examination when indicated, and laboratory findings.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6 space-y-10">
        <div className="space-y-6">
          <SectionHeading title="Customized Hormone Therapy" />
          <p className="text-charcoal/90 leading-relaxed -mt-4">
            Heartland provides individualized hormone therapy based on symptoms,
            health history, treatment goals, and laboratory findings. Treatment
            plans are developed around each patient&apos;s unique needs, goals, and
            preferences.
          </p>
          <p className="text-charcoal/90 leading-relaxed">
            Ongoing care includes symptom review, laboratory monitoring, and
            treatment adjustments as needed.
          </p>
        </div>

        <div>
          <SectionHeading title="Why Women's Hormone Care Is Individualized" />
          <p className="text-charcoal/90 leading-relaxed -mt-4 mb-6">
            Treatment recommendations are based on factors that may include:
          </p>
          <TreatmentList
            items={[
              "Uterine status",
              "Bleeding history",
              "Breast health history",
              "Cardiovascular risk factors",
              "Thromboembolic risk factors",
              "Family history",
              "Symptom profile",
              "Medication tolerance",
              "Sexual health concerns",
              "Vaginal symptoms",
              "Potential medication interactions",
              "Individual treatment goals",
            ]}
          />
        </div>
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="What to Expect" />
          <TreatmentList
            items={[
              "Initial evaluation",
              "Review of medical history and current medications",
              "Review of previous laboratory results",
              "Appropriate laboratory testing",
              "Individualized treatment planning",
              "Medication management",
              "Treatment adjustments as needed",
              "Symptom assessment and monitoring",
              "Side-effect monitoring",
              "Routine follow-up visits",
              "Prescription refill management",
              "Secure provider messaging",
            ]}
          />
        </div>
      </section>

      <CTASection
        headline="Ready to Get Started?"
        subtext="Schedule a consultation to discuss your symptoms, review your health history, and learn whether hormone therapy may be right for you."
        ctaLabel="Book a Women's Hormone Consultation"
        ctaHref="/contact?interest=womens-hormone"
      />
    </>
  );
}
