import { Button } from "@/components/ui/button";
import { BOOKING_URL, SITE } from "@/lib/site";

type BookOnlineButtonProps = {
  label?: string;
  variant?: "gold" | "teal" | "outline" | "outline-teal";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
};

export function BookOnlineButton({
  label = SITE.consultCta,
  variant = "gold",
  size = "default",
  className,
  onClick,
}: BookOnlineButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {label}
      </a>
    </Button>
  );
}
