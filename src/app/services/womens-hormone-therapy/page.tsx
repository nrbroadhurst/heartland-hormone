import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { TreatmentList } from "@/components/TreatmentList";
import { CTASection } from "@/components/CTASection";
import { CareTeamNote } from "@/components/ProviderPreview";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { pricing } from "@/lib/pricing";
import { SITE } from "@/lib/site";

const PATH = "/services/womens-hormone-therapy";

export const metadata: Metadata = pageMeta({
  title: "Menopause & Women's Hormone Therapy in Overland Park, KS",
  description:
    "Perimenopause and menopause care in Overland Park and Kansas City. Estradiol, progesterone, vaginal estrogen and individualized follow-up from Heartland Hormone.",
  path: PATH,
});

export default function WomensHormonePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Women's Hormone Therapy & Menopause Care",
          "Individualized hormone care for women experiencing perimenopause, menopause and related symptoms.",
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Women's Hormone Therapy", path: PATH },
        ])}
      />

      <PageHero
        eyebrow="Women's Care"
        title="Women's Hormone Therapy & Menopause Care"
        description="Heartland Hormone & Wellness Clinic provides individualized hormone care for women experiencing perimenopause, menopause and related symptoms. Treatment is based on symptoms, medical history, risk factors and each patient's individual goals."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton label="Schedule a Women's Hormone Consultation" />
          <BookButton
            label="View Women's Hormone Pricing"
            href="/pricing#womens-hormone"
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
            "Brain fog",
            "Changes in mood",
            "Low libido",
            "Vaginal dryness",
            "Discomfort during intercourse",
            "Urinary symptoms",
            "Changes in body composition",
            "Reduced sense of well-being",
          ]}
        />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6 space-y-10">
          <SectionHeading title="Treatment Options" />
          <div className="space-y-8 -mt-4">
            <div>
              <h3 className="font-display text-xl text-teal tracking-wide mb-2">
                Estradiol
              </h3>
              <p className="text-charcoal/90 leading-relaxed">
                Systemic estradiol may be considered using a transdermal patch,
                gel or other appropriate formulations, based on symptoms and
                clinical judgment.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-teal tracking-wide mb-2">
                Progesterone
              </h3>
              <p className="text-charcoal/90 leading-relaxed">
                Progesterone may be prescribed when clinically indicated,
                including for endometrial protection in appropriate patients using
                systemic estrogen.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-teal tracking-wide mb-2">
                Vaginal Estrogen
              </h3>
              <p className="text-charcoal/90 leading-relaxed">
                Local vaginal estrogen may be used to treat genitourinary symptoms
                associated with menopause, such as dryness and discomfort during
                intercourse.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-teal tracking-wide mb-2">
                Testosterone for Women
              </h3>
              <p className="text-charcoal/90 leading-relaxed">
                Testosterone may be considered for carefully selected patients
                when clinically appropriate. It is not a routine treatment for all
                menopausal women.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-teal tracking-wide mb-2">
                Customized Compounded Hormone Therapy
              </h3>
              <p className="text-charcoal/90 leading-relaxed">
                FDA-approved hormone therapies are used when appropriate.
                Customized compounded formulations may be considered when an
                individualized clinical need cannot be adequately met by
                commercially available products. Compounded hormones are not
                described as safer, more natural, superior or free of risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="Why Women's Hormone Care Requires Individualization" />
        <p className="text-charcoal/90 leading-relaxed -mt-4 mb-6">
          Hormone therapy may involve more than one medication. Decisions consider:
        </p>
        <TreatmentList
          items={[
            "Uterine status",
            "Bleeding history",
            "Breast history",
            "Cardiovascular risk",
            "Thromboembolic risk",
            "Family history",
            "Symptom profile",
            "Medication tolerance",
            "Sexual health concerns",
            "Vaginal symptoms",
            "Medication interactions",
            "Individual treatment goals",
          ]}
        />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="What Ongoing Care May Include" />
          <TreatmentList
            items={[
              "Initial evaluation",
              "Medication review",
              "Review of previous labs",
              "Appropriate laboratory testing",
              "Individualized treatment planning",
              "Estradiol management",
              "Progesterone management",
              "Testosterone management when appropriate",
              "Vaginal estrogen management",
              "Dose adjustments",
              "Symptom tracking",
              "Side-effect monitoring",
              "Routine follow-up visits",
              "Prescription refill management",
              "Provider messaging",
            ]}
          />
          <p className="mt-6 text-sm text-charcoal/75 leading-relaxed">
            Female HRT membership starts at {pricing.womensTriple.display} for
            standard triple therapy and {pricing.womensAdvanced.display} for advanced
            formulations. The {pricing.initialEvaluation.display} initial evaluation
            and laboratory fees are separate.{" "}
            <Link
              href="/pricing#womens-hormone"
              className="text-teal underline underline-offset-2"
            >
              View women&apos;s hormone pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <p className="text-sm text-charcoal/75 leading-relaxed">
          {SITE.telehealthStatement} {SITE.serviceAreaLine}
        </p>
        <CareTeamNote />
      </section>

      <CTASection
        headline="Schedule a Women's Hormone Consultation"
        subtext="Perimenopause and menopause care with follow-up that matches your regimen."
        ctaLabel="Schedule a Women's Hormone Consultation"
        secondaryLabel="View Women's Hormone Pricing"
        secondaryHref="/pricing#womens-hormone"
      />
    </>
  );
}
