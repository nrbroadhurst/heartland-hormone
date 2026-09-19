import Link from "next/link";
import { Logo } from "@/components/logo/Logo";
import { AddressBlock } from "@/components/AddressBlock";
import { EmailLink } from "@/components/EmailLink";
import {
  LEGAL_LINKS,
  NAV_LINKS,
  SITE,
  MEDICAL_DISCLAIMER,
  hasEmail,
  hasPhone,
  hasStreetAddress,
  phoneHref,
} from "@/lib/site";
import { getNavServices } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-teal text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-12 xl:gap-x-10">
          <div className="max-w-sm space-y-5 sm:col-span-2 xl:col-span-3 xl:max-w-none">
            <Logo variant="stacked" theme="dark" className="h-24 w-auto" />
            <p className="text-sm leading-7 text-cream/80 text-pretty">
              Helping women and men restore energy, balance, vitality, and
              confidence through personalized hormone care and evidence-based
              treatment.
            </p>
          </div>

          <div className="xl:col-span-2">
            <h3 className="font-display mb-4 text-sm tracking-widest uppercase text-gold">
              Explore
            </h3>
            <ul className="space-y-3 text-sm leading-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/patient-portal" className="hover:text-gold-light transition-colors">
                  Patient Access
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="xl:col-span-3 min-w-0">
            <h3 className="font-display mb-4 text-sm tracking-widest uppercase text-gold">
              Care
            </h3>
            <ul className="space-y-3 text-sm leading-6">
              {getNavServices().map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-pretty hover:text-gold-light transition-colors"
                  >
                    {service.title.replace("Menopause Care", "Menopause\u00A0Care")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 xl:col-span-4">
            <h3 className="font-display mb-4 text-sm tracking-widest uppercase text-gold">
              Visit &amp; Contact
            </h3>
            <div className="space-y-4 text-sm leading-7 text-cream/85">
              {hasStreetAddress() ? (
                <AddressBlock />
              ) : (
                <p>
                  {SITE.city}, {SITE.state} / {SITE.region}
                </p>
              )}
              <p className="space-y-1">
                {hasPhone() && (
                  <a
                    href={phoneHref() ?? `tel:${SITE.phone}`}
                    className="block hover:text-gold-light"
                  >
                    {SITE.phone}
                  </a>
                )}
                {hasEmail() && (
                  <EmailLink className="block" />
                )}
              </p>
              <p className="text-xs tracking-wide uppercase text-gold">
                By Appointment Only
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/30 pt-8 space-y-6">
          <p className="max-w-4xl text-xs leading-7 text-cream/70">
            {MEDICAL_DISCLAIMER}
          </p>
          <div>
            <h3 className="font-display mb-4 text-sm tracking-widest uppercase text-gold">
              Policies &amp; Legal
            </h3>
            <ul className="space-y-2.5 text-xs leading-6 text-cream/75">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
