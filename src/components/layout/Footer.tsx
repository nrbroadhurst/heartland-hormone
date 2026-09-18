import Link from "next/link";
import { Logo } from "@/components/logo/Logo";
import { EmailLink } from "@/components/EmailLink";
import {
  LEGAL_LINKS,
  NAV_LINKS,
  SITE,
  MEDICAL_DISCLAIMER,
  hasEmail,
  hasPhone,
  addressLines,
  phoneHref,
} from "@/lib/site";
import { getNavServices } from "@/lib/services";

export function Footer() {
  const lines = addressLines();

  return (
    <footer className="bg-teal text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="stacked" theme="dark" className="h-24 w-auto" />
            <h3 className="font-display text-sm tracking-widest uppercase text-gold">
              {SITE.name}
            </h3>
            <p className="text-sm text-cream/80 leading-relaxed">
              Helping women and men restore energy, balance, vitality, and
              confidence through personalized hormone care and evidence-based
              treatment.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest uppercase text-gold mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/patient-portal" className="hover:text-gold-light transition-colors">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest uppercase text-gold mb-4">
              Care
            </h3>
            <ul className="space-y-2 text-sm">
              {getNavServices().map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="hover:text-gold-light transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest uppercase text-gold mb-4">
              Visit &amp; Contact
            </h3>
            <ul className="space-y-2 text-sm text-cream/85">
              <li>{SITE.name}</li>
              {lines.length > 0 ? (
                <li>
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </li>
              ) : (
                <li>
                  {SITE.city}, {SITE.state} / {SITE.region}
                </li>
              )}
              {hasPhone() && (
                <li className="pt-2">
                  <a href={phoneHref() ?? `tel:${SITE.phone}`} className="hover:text-gold-light">
                    {SITE.phone}
                  </a>
                </li>
              )}
              {hasEmail() && (
                <li>
                  <EmailLink />
                </li>
              )}
              <li className="text-gold text-xs tracking-wide uppercase pt-2">
                By Appointment Only
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/30 pt-8 space-y-4">
          <p className="text-xs leading-relaxed text-cream/70 max-w-4xl">
            {MEDICAL_DISCLAIMER}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-cream/75">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-cream/60">
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
