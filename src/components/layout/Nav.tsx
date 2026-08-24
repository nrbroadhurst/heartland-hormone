"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import { getNavServices } from "@/lib/services";
import { cn } from "@/lib/utils";

export function AnnouncementBar() {
  return (
    <div className="bg-teal text-center text-cream text-sm font-medium tracking-wide px-4 py-2">
      {SITE.locationLine}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-cream/95 backdrop-blur-sm transition-shadow",
        scrolled && "shadow-[0_4px_20px_rgba(30,77,89,0.12)]",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Logo variant="horizontal" theme="light" className="h-11 w-auto md:h-12" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-teal hover:text-teal-dark"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 text-gold" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[260px] translate-y-1 rounded-md border border-gold/30 bg-cream p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {getNavServices().map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="block rounded px-3 py-2 text-sm text-charcoal hover:bg-teal/5 hover:text-teal"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-teal hover:text-teal-dark"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline-teal" size="sm" className="hidden md:inline-flex">
            <Link href="/patient-portal">Patient Portal</Link>
          </Button>
          <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-teal lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-teal text-cream shadow-xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-gold/30 px-4 py-4">
          <Logo variant="horizontal" theme="dark" href={null} className="h-10 w-auto" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-cream"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-left text-base font-medium"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-gold transition",
                      servicesOpen && "rotate-180",
                    )}
                  />
                </button>
                {servicesOpen && (
                  <div className="mb-2 ml-3 flex flex-col border-l border-gold/40 pl-3">
                    <Link
                      href="/services"
                      className="py-2 text-sm text-cream/90"
                      onClick={() => setOpen(false)}
                    >
                      All Services
                    </Link>
                    {getNavServices().map((service) => (
                      <Link
                        key={service.slug}
                        href={service.href}
                        className="py-2 text-sm text-cream/90"
                        onClick={() => setOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            href="/patient-portal"
            className="py-3 text-base font-medium"
            onClick={() => setOpen(false)}
          >
            Patient Portal
          </Link>
          <Link
            href="/contact"
            className="py-3 text-base font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Button asChild variant="gold" className="mt-4">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Book a Consultation
            </Link>
          </Button>
        </nav>
      </div>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-teal-dark/40 lg:hidden"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
