import Link from "next/link";

import { Logo } from "@/components/logo";
import { clinic, navLinks } from "@/lib/clinic";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-primary/10 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Nurse practitioner–led hormone and wellness care in Overland Park,
            Kansas. Visits are by appointment.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-primary-foreground/60">
            Visit
          </p>
          <nav className="mt-3 flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground/85 hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-primary-foreground/60">
            Clinic
          </p>
          <address className="mt-3 not-italic text-sm leading-relaxed text-primary-foreground/85">
            <a
              href={clinic.mapsUrl}
              className="hover:text-primary-foreground"
              target="_blank"
              rel="noreferrer"
            >
              {clinic.addressLine1}
              <br />
              {clinic.addressLine2}
            </a>
            <p className="mt-3">
              <a href={clinic.phoneHref} className="hover:text-primary-foreground">
                {clinic.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">{clinic.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {clinic.legalName}
          </p>
          <p>
            Information on this site is educational and is not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
