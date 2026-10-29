import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

type BookOnlineButtonProps = {
  variant?: "gold" | "teal" | "outline" | "outline-teal";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
};

export function BookOnlineButton({
  variant = "gold",
  size = "default",
  className,
  onClick,
}: BookOnlineButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={SITE.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        Book Online
      </a>
    </Button>
  );
}
