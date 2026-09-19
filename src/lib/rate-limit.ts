const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;

const hitsByKey = new Map<string, number[]>();

export function rateLimit(
  key: string,
  {
    windowMs = WINDOW_MS,
    max = MAX_HITS,
  }: { windowMs?: number; max?: number } = {},
): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  const windowStart = now - windowMs;
  const recent = (hitsByKey.get(key) ?? []).filter((t) => t > windowStart);

  if (recent.length >= max) {
    const oldest = recent[0] ?? now;
    const retryAfterSec = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
    hitsByKey.set(key, recent);
    return { ok: false, retryAfterSec };
  }

  recent.push(now);
  hitsByKey.set(key, recent);
  pruneStale(now - windowMs);
  return { ok: true };
}

function pruneStale(cutoff: number) {
  if (hitsByKey.size < 500) return;
  for (const [key, times] of hitsByKey) {
    const kept = times.filter((t) => t > cutoff);
    if (kept.length === 0) hitsByKey.delete(key);
    else hitsByKey.set(key, kept);
  }
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}
