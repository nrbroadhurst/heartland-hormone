import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-terracotta uppercase">
        404
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        That page is not on the map.
      </h1>
      <p className="mt-3 text-muted-foreground">
        The address you followed does not match a page on this site.
      </p>
      <ButtonLink href="/" className="mt-8 h-11 px-5">
        Back to home
      </ButtonLink>
    </div>
  );
}
