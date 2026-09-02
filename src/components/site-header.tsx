"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { clinic, navLinks } from "@/lib/clinic";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
          <span className="sr-only">{clinic.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            <Phone className="size-3.5" />
            {clinic.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
          >
            Request a visit
          </Link>
        </div>

        <Button
          variant="outline"
          size="icon-lg"
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X /> : <Menu />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </Button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={clinic.phoneHref}
            className="mt-3 flex items-center gap-2 px-3 py-2 text-sm font-medium"
          >
            <Phone className="size-4" />
            {clinic.phoneDisplay}
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-2 h-11 w-full px-4",
            )}
          >
            Request a visit
          </Link>
        </div>
      ) : null}
    </header>
  );
}
