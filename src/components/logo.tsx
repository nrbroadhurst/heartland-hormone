import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn("size-9 shrink-0", className)}
    >
      <rect width="40" height="40" rx="10" fill="#2F4F3E" />
      <path
        d="M8 26.5c4.2-1.6 7.6-5.4 8.4-10.2.3-1.8 2.8-1.9 3.2-.1.8 4.8 4.2 8.6 8.4 10.2"
        fill="none"
        stroke="#F4E6C8"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 11c.2 3.4 0 7.2 0 16.2"
        fill="none"
        stroke="#F4E6C8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 14.2c-2.4-1.8-4.8-.4-4.8 1.6 0 2.4 3.4 4.6 4.8 6.4 1.4-1.8 4.8-4 4.8-6.4 0-2-2.4-3.4-4.8-1.6Z"
        fill="#E8A06A"
      />
    </svg>
  );
}

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        inverted ? "text-primary-foreground" : "text-primary",
        className,
      )}
    >
      <LogoMark className={inverted ? "text-primary-foreground/15" : "text-primary"} />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[1.15rem] font-semibold tracking-tight">
          Heartland Hormone
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.68rem] font-medium tracking-[0.16em] uppercase",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          &amp; Wellness Clinic
        </span>
      </span>
    </span>
  );
}
