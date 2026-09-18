import { addressLines } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AddressBlock({ className }: { className?: string }) {
  const lines = addressLines();
  if (lines.length === 0) return null;

  return (
    <div className={cn("leading-7", className)}>
      {lines.map((line, index) => (
        <span key={line} className={cn("block text-pretty", index > 0 && "pl-1")}>
          {line}
        </span>
      ))}
    </div>
  );
}
