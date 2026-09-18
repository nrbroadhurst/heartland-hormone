import type { ReactNode } from "react";
import { emailComposeUrl, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function EmailLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const href = emailComposeUrl();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
    >
      {children ?? SITE.email}
    </a>
  );
}
