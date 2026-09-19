import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EmailLink } from "@/components/EmailLink";
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
        title="Notice of Privacy Practices"
        description="This Notice describes how medical information about you may be used and disclosed and how you can obtain access to this information."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">Last Updated: August 17, 2026</p>
        <p>
          A complete HIPAA Notice of Privacy Practices is provided to all
          patients and is available upon request. Until the full notice is
          published on this website, the following summary applies.
        </p>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Our Responsibilities
          </h2>
          <p>
            {SITE.name} is required by law to maintain the privacy and security
            of your protected health information (PHI), provide you with notice
            of our legal duties and privacy practices, and notify you following
            a breach of unsecured PHI when required by law.
          </p>
          <p>
            We may use and disclose PHI for treatment, payment, and healthcare
            operations as permitted by applicable law. Most other uses and
            disclosures require your written authorization.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access and obtain a copy of your medical records</li>
            <li>Request amendments to your records</li>
            <li>Request restrictions on certain uses and disclosures</li>
            <li>Request confidential communications</li>
            <li>Receive an accounting of certain disclosures</li>
            <li>Obtain a copy of this Notice of Privacy Practices</li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Contact Us About Privacy
          </h2>
          <p>
            {SITE.name}
            <br />
            {SITE.city}, {SITE.stateName}
          </p>
          <p>
            Privacy Officer: {SITE.privacyOfficerName}
            {hasEmail() ? (
              <>
                <br />
                Email:{" "}
                <EmailLink className="text-teal underline underline-offset-2" />
              </>
            ) : null}
            {hasPhone() ? (
              <>
                <br />
                Phone: {SITE.phone}
              </>
            ) : null}
          </p>
          <p>
            You also have the right to file a complaint with the U.S. Department
            of Health and Human Services if you believe your privacy rights have
            been violated.
          </p>
        </section>
      </article>
    </>
  );
}
