import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MEDICAL_DISCLAIMER, SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Medical Disclaimer",
  description: `Educational-use disclaimer for ${SITE.name}.`,
  path: "/medical-disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Medical Disclaimer"
        description="This website is for general education. It is not a substitute for an individualized medical visit."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-6 text-charcoal/90 leading-relaxed">
        <p>{MEDICAL_DISCLAIMER}</p>
        <p>
          Nothing on this site establishes a provider-patient relationship.
          Treatment decisions are made only after evaluation by a licensed
          healthcare professional. Prescription treatment is provided only when
          clinically appropriate.
        </p>
        <p>
          Individual results vary. We do not guarantee symptom resolution, weight
          loss, testosterone levels or any other outcome.
        </p>
      </article>
    </>
  );
}
