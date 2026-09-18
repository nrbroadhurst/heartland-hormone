import type { ReactNode } from "react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Clinic public address only. Never mailto or Outlook — those open a Microsoft
 * account picker and can show a personal mailbox on a shared or staff computer.
 */
export function EmailLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <span className={cn("select-all", className)}>{children ?? SITE.email}</span>
  );
}
