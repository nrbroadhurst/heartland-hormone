import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
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
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy covers general website data collection (contact forms and technical data). It is separate from our HIPAA Notice of Privacy Practices."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">Last updated: August 17, 2026</p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Overview</h2>
          <p>
            {SITE.name} (&quot;we,&quot; &quot;us&quot;) operates this website for
            marketing and general inquiries. This Privacy Policy describes how we
            collect and use information gathered through the website itself.
          </p>
          <p>
            Protected health information (PHI) is governed by our{" "}
            <Link
              href="/notice-of-privacy-practices"
              className="text-teal underline underline-offset-2"
            >
              Notice of Privacy Practices
            </Link>
            , which is a separate document.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Information we collect
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Contact details you submit via general inquiry forms (name, email,
              phone, visit type, message).
            </li>
            <li>
              Technical data such as IP address, browser type and pages visited
              when analytics are enabled.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            How we use information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To respond to general inquiries and scheduling requests.</li>
            <li>To operate, secure and improve the website.</li>
            <li>To understand aggregate traffic patterns when analytics are enabled.</li>
          </ul>
          <p>
            Do not submit symptoms, diagnoses, medications or other health details
            through general website forms. Health information should only be shared
            through secure intake after booking.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Cookies &amp; tracking
          </h2>
          <p>
            Essential cookies may be used to operate the site. Marketing pixels are
            not enabled by default. If analytics or advertising tools are added
            later, this policy will be updated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Contact</h2>
          <p>
            Questions about this policy: {SITE.name}
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
              ". Use the contact form for general questions."
            )}
          </p>
        </section>
      </article>
    </>
  );
}
