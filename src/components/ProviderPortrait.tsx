import Image from "next/image";
import { SITE } from "@/lib/site";

type ProviderPortraitProps = {
  eyebrow: string;
  name: string;
  detail: string;
  className?: string;
  priority?: boolean;
};

export function ProviderPortrait({
  eyebrow,
  name,
  detail,
  className = "",
  priority = false,
}: ProviderPortraitProps) {
  return (
    <figure
      className={`overflow-hidden rounded-md border border-gold/30 bg-teal text-cream ${className}`}
    >
      <div className="relative aspect-[4/5] w-full bg-cream">
        <Image
          src="/images/sherry-broadhurst.webp"
          alt={`${SITE.providerName}, ${SITE.providerCredential}`}
          fill
          priority={priority}
          sizes="(min-width: 768px) 36rem, 100vw"
          className="object-cover object-center"
        />
      </div>
      <figcaption className="px-6 py-5 text-center">
        <p className="mb-3 font-display text-xs uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </p>
        <p className="mb-2 text-balance font-display text-2xl tracking-wide">
          {name}
        </p>
        <p className="text-sm leading-relaxed text-cream/80">{detail}</p>
      </figcaption>
    </figure>
  );
}
