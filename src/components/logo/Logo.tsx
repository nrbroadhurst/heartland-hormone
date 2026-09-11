import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string | null;
  variant?: "stacked" | "horizontal" | "icon";
  theme?: "light" | "dark";
};

export function Logo({
  className = "",
  href = "/",
  variant = "horizontal",
  theme = "light",
}: LogoProps) {
  const gold = "#C8A67A";
  const cream = "#F7F3EC";
  const teal = "#1E4D59";
  const wordmark = theme === "dark" ? cream : teal;
  const accent = gold;

  const mark =
    variant === "icon" ? (
      <svg
        viewBox="0 0 64 64"
        className={className || "h-10 w-10"}
        role="img"
        aria-label="Heartland Hormone & Wellness Clinic"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          fill={teal}
          stroke={accent}
          strokeWidth="1.5"
        />
        <text
          x="32"
          y="39"
          textAnchor="middle"
          fill={accent}
          fontFamily="Cinzel, serif"
          fontSize="20"
          fontWeight="600"
          letterSpacing="2"
        >
          HH
        </text>
      </svg>
    ) : variant === "stacked" ? (
      <svg
        viewBox="0 0 240 120"
        className={className || "h-20 w-auto"}
        role="img"
        aria-label="Heartland Hormone & Wellness Clinic"
      >
        <text
          x="120"
          y="38"
          textAnchor="middle"
          fill={accent}
          fontFamily="Cinzel, serif"
          fontSize="28"
          fontWeight="600"
          letterSpacing="6"
        >
          HH
        </text>
        <text
          x="120"
          y="68"
          textAnchor="middle"
          fill={wordmark}
          fontFamily="Cinzel, serif"
          fontSize="22"
          fontWeight="600"
          letterSpacing="8"
        >
          HEARTLAND
        </text>
        <line
          x1="40"
          y1="80"
          x2="200"
          y2="80"
          stroke={accent}
          strokeWidth="1"
        />
        <text
          x="120"
          y="98"
          textAnchor="middle"
          fill={accent}
          fontFamily="Cinzel, serif"
          fontSize="9"
          fontWeight="600"
          letterSpacing="2.5"
        >
          HORMONE &amp; WELLNESS CLINIC
        </text>
      </svg>
    ) : (
      <svg
        viewBox="0 0 320 56"
        className={className || "h-12 w-auto"}
        role="img"
        aria-label="Heartland Hormone & Wellness Clinic"
      >
        <text
          x="4"
          y="36"
          fill={accent}
          fontFamily="Cinzel, serif"
          fontSize="22"
          fontWeight="600"
          letterSpacing="2"
        >
          HH
        </text>
        <line
          x1="52"
          y1="12"
          x2="52"
          y2="44"
          stroke={accent}
          strokeWidth="1"
        />
        <text
          x="64"
          y="26"
          fill={wordmark}
          fontFamily="Cinzel, serif"
          fontSize="16"
          fontWeight="600"
          letterSpacing="4"
        >
          HEARTLAND
        </text>
        <text
          x="64"
          y="44"
          fill={accent}
          fontFamily="Cinzel, serif"
          fontSize="8"
          fontWeight="600"
          letterSpacing="1.8"
        >
          HORMONE &amp; WELLNESS CLINIC
        </text>
      </svg>
    );

  if (href === null) return mark;
  return (
    <Link href={href} className="inline-flex shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
      {mark}
    </Link>
  );
}
