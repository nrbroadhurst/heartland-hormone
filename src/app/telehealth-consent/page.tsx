import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE, hasEmail } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Telehealth Consent",
  description: `Telehealth consent information for ${SITE.name}.`,
  path: "/telehealth-consent",
});

export default function TelehealthConsentPage() {
  return (
    <>
      <PageHero
        eyebrow="Telehealth"
        title="Telehealth Consent"
        description="Information about receiving care via secure video visits. Formal consent may also be collected in your patient portal."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">Last updated: August 17, 2026</p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Overview</h2>
          <p>{SITE.telehealthStatement}</p>
          <p>
            Current service area: {SITE.telehealthStates.join(", ")}. You should
            be physically located in a licensed state at the time of the visit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            What you should understand
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Telehealth can be convenient for follow-up, but it has limits
              compared with an in-person exam.
            </li>
            <li>
              You are responsible for using a private location and a working
              internet connection.
            </li>
            <li>
              You may decline a telehealth visit and request in-person care when
              that option is available.
            </li>
            <li>
              Telehealth is not for emergencies. Call 911 or go to the nearest
              emergency department.
            </li>
            <li>
              Some medications, including certain controlled substances, may
              require an in-person visit under federal or Kansas rules.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Questions</h2>
          <p>
            Contact {SITE.name}
            {hasEmail() ? (
              <>
                {" "}
                at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-teal underline underline-offset-2"
                >
                  {SITE.email}
                </a>
              </>
            ) : (
              " through the contact page."
            )}
          </p>
        </section>
      </article>
    </>
  );
}
