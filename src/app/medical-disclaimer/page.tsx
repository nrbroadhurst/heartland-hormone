import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Medical Disclaimer",
  description:
    "This website is provided for general educational purposes only and is not intended as medical advice.",
  path: "/medical-disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHero title="Medical Disclaimer" />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-6 text-charcoal/90 leading-relaxed">
        <p>
          This website is provided for general educational purposes only and is
          not intended as medical advice. Information presented on this website
          should not be used as a substitute for an individualized medical
          evaluation, diagnosis, or treatment.
        </p>
        <p>
          Treatment recommendations are individualized and based on a
          comprehensive evaluation, health history, laboratory findings, and
          each patient&apos;s unique needs. Prescription medications are
          prescribed only after appropriate clinical evaluation.
        </p>
        <p>
          Nothing on this website creates a provider-patient relationship.
          Treatment decisions are made only after consultation and evaluation by
          a licensed healthcare professional.
        </p>
        <p>
          Individual results vary. {SITE.name} does not guarantee symptom
          resolution, weight loss, hormone levels, or any specific treatment
          outcome.
        </p>
      </article>
    </>
  );
}
