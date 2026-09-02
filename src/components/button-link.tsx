"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  className,
  variant,
  size = "lg",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
} & VariantProps<typeof buttonVariants>) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}
