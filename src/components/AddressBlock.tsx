import { SITE, addressLines } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AddressBlock({ className }: { className?: string }) {
  const lines = addressLines();
  if (lines.length === 0) return null;

  return (
    <div className={cn("leading-7", className)}>
      {lines.map((line) => (
        <span
          key={line}
          className="block"
          style={
            line === SITE.addressNote ? { whiteSpace: "nowrap" } : undefined
          }
        >
          {line}
        </span>
      ))}
    </div>
  );
}
