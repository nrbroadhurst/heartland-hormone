import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EmailLink } from "@/components/EmailLink";
import { SITE, hasEmail } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: `Website privacy policy for ${SITE.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="This Privacy Policy applies to information collected through this website, including contact forms and technical website data. It is separate from Heartland Hormone & Wellness Clinic's HIPAA Notice of Privacy Practices, which governs protected health information (PHI)."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">Last Updated: August 17, 2026</p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Overview</h2>
          <p>
            {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
            this website for informational purposes, patient education, and general
            inquiries. This Privacy Policy explains how information collected
            through this website is used and protected.
          </p>
          <p>
            Protected health information (PHI) is governed by our{" "}
            <Link
              href="/notice-of-privacy-practices"
              className="text-teal underline underline-offset-2"
            >
              Notice of Privacy Practices
            </Link>{" "}
            and is subject to separate privacy and security requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Contact information submitted through general inquiry forms,
              including name, email address, phone number, visit type, and
              message content.
            </li>
            <li>
              Technical information such as IP address, browser type, device
              information, and pages visited when website analytics are enabled.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            How We Use Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To respond to general inquiries and scheduling requests.</li>
            <li>To operate, maintain, secure, and improve the website.</li>
            <li>
              To understand website traffic and usage patterns when analytics
              tools are enabled.
            </li>
          </ul>
          <p>
            Please do not submit symptoms, diagnoses, medications, laboratory
            results, or other personal health information through general website
            contact forms. Health information should only be shared through
            approved secure patient communications after establishing care.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Cookies and Tracking Technologies
          </h2>
          <p>
            Essential cookies may be used to operate and maintain website
            functionality. Marketing pixels and advertising trackers are not
            enabled by default. If analytics, advertising, or additional tracking
            technologies are added in the future, this Privacy Policy will be
            updated accordingly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Contact</h2>
          <p>Questions regarding this Privacy Policy may be directed to:</p>
          <p>
            {SITE.name}
            <br />
            {hasEmail() ? (
              <EmailLink className="text-teal underline underline-offset-2" />
            ) : (
              "Use the contact form for general questions."
            )}
          </p>
        </section>
      </article>
    </>
  );
}
