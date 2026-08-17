import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE, hasEmail, hasPhone } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Notice of Privacy Practices",
  description: `HIPAA Notice of Privacy Practices for ${SITE.name}.`,
  path: "/notice-of-privacy-practices",
});

export default function NoticeOfPrivacyPracticesPage() {
  return (
    <>
      <PageHero
        eyebrow="HIPAA"
        title="Notice of Privacy Practices"
        description="This Notice describes how medical information about you may be used and disclosed and how you can get access to this information."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">Last updated: August 17, 2026</p>
        <p>
          A complete HIPAA Notice of Privacy Practices will be provided at your
          first visit and is available upon request. Until the full notice is
          published here, the following summary applies.
        </p>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Our responsibilities
          </h2>
          <p>
            We are required by law to maintain the privacy of protected health
            information, to provide you with this notice of our legal duties and
            privacy practices, and to notify you following a breach of unsecured
            PHI when required.
          </p>
          <p>
            We may use and disclose PHI for treatment, payment and health care
            operations as permitted by law. Other uses generally require your
            written authorization.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Your rights</h2>
          <p>
            You have the right to access and request amendments to your records,
            request restrictions, request confidential communications, receive an
            accounting of certain disclosures and obtain a copy of this Notice.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            How to contact us about privacy
          </h2>
          <p>
            Practice: {SITE.name}, {SITE.city}, {SITE.state}
            {hasEmail() ? `. Email ${SITE.email}` : ""}
            {hasPhone() ? `. Phone ${SITE.phone}` : ""}. You may also file a
            complaint with the U.S. Department of Health and Human Services.
          </p>
        </section>
      </article>
    </>
  );
}
