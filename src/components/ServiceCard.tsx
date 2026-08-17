import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FadeIn } from "@/components/FadeIn";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <FadeIn delay={index * 0.05}>
      <Link
        href={service.href}
        className="group flex h-full flex-col rounded-md border border-gold/25 bg-cream p-6 transition hover:border-gold/60 hover:shadow-[0_8px_30px_rgba(30,77,89,0.08)]"
      >
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/40 text-teal">
          <ServiceIcon name={service.icon} />
        </div>
        <h3 className="font-display text-xl text-teal tracking-wide mb-2">
          {service.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-charcoal/85 mb-4">
          {service.description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-teal group-hover:gap-2 transition-all">
          {service.ctaLabel} <ArrowRight className="h-4 w-4 text-gold" />
        </span>
      </Link>
    </FadeIn>
  );
}

export function PrimaryServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <FadeIn delay={index * 0.05} className="h-full">
      <article className="flex h-full flex-col rounded-md border border-gold/30 bg-cream p-6 md:p-8 shadow-[0_8px_30px_rgba(30,77,89,0.04)]">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md border border-gold/40 text-teal">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl text-teal tracking-wide mb-3">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-charcoal/85 mb-5">
          {service.description}
        </p>
        <ul className="mb-6 flex-1 space-y-2">
          {service.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-charcoal/90">
              <Check
                className="h-4 w-4 shrink-0 mt-0.5 text-gold"
                strokeWidth={1.5}
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href={service.href}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-teal px-5 text-sm font-medium text-cream hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          {service.ctaLabel}
        </Link>
      </article>
    </FadeIn>
  );
}

export function ServicesGrid({
  services,
  featured = false,
}: {
  services: Service[];
  featured?: boolean;
}) {
  if (featured) {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service, i) => (
          <PrimaryServiceCard key={service.slug} service={service} index={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <ServiceCard key={service.slug} service={service} index={i} />
      ))}
    </div>
  );
}
