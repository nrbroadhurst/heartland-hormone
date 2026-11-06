"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { BookOnlineButton } from "@/components/BookOnlineButton";
import { NAV_LINKS, PORTAL_URL, SITE } from "@/lib/site";
import { getNavServices } from "@/lib/services";
import { cn } from "@/lib/utils";

export function AnnouncementBar() {
  return (
    <div className="bg-teal px-3 py-2 pt-[max(0.5rem,env(safe-area-inset-top))] text-center text-xs font-medium tracking-wide text-cream sm:px-4 sm:text-sm">
      {SITE.locationLine}
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="lg:hidden">
      <button
        type="button"
        className="fixed inset-0 z-[200] bg-teal-dark/50"
        aria-label="Close menu overlay"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-y-0 right-0 z-[210] flex w-full max-w-sm flex-col bg-teal text-cream shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-gold/30 px-4 py-4">
          <Logo variant="horizontal" theme="dark" href={null} className="h-9 w-auto max-w-[12rem]" />
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-md text-cream touch-manipulation"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain p-4" aria-label="Mobile">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href}>
                <button
                  type="button"
                  className="flex min-h-12 w-full items-center justify-between py-3 text-left text-base font-medium touch-manipulation"
                  onClick={() => setServicesOpen((value) => !value)}
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
                      className="flex min-h-11 items-center py-2 text-sm text-cream/90"
                      onClick={onClose}
                    >
                      All Services
                    </Link>
                    {getNavServices().map((service) => (
                      <Link
                        key={service.slug}
                        href={service.href}
                        className="flex min-h-11 items-center py-2 text-sm text-cream/90"
                        onClick={onClose}
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
                className="flex min-h-12 items-center py-3 text-base font-medium"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center py-3 text-base font-medium"
            onClick={onClose}
          >
            Patient Access
          </a>
          <BookOnlineButton
            variant="gold"
            className="mt-4 min-h-12 w-full"
            onClick={onClose}
          />
        </nav>
      </div>
    </div>,
    document.body,
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-cream/95",
        scrolled && "shadow-[0_4px_20px_rgba(30,77,89,0.12)]",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-4 md:px-6 lg:px-8">
        <Logo
          variant="horizontal"
          theme="light"
          className="h-9 w-auto max-w-[min(12.5rem,58vw)] sm:h-11 sm:max-w-none md:h-12"
        />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-sm font-medium text-teal hover:text-teal-dark"
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
                className="whitespace-nowrap px-2.5 py-2 text-sm font-medium text-teal hover:text-teal-dark"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="outline-teal" size="sm" className="hidden md:inline-flex">
            <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
              Patient Access
            </a>
          </Button>
          <BookOnlineButton
            variant="gold"
            size="sm"
            className="hidden lg:inline-flex"
          />
          <button
            type="button"
            className="relative z-[80] inline-flex h-12 w-12 items-center justify-center rounded-md text-teal touch-manipulation lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
