/**
 * Central clinic configuration.
 *
 * Fill null fields before production. The UI never prints raw placeholders.
 *
 * Unresolved on purpose (do not invent):
 * - providerName
 * - zip
 * - officeHours
 * - bookingUrl
 * - licenseNumber
 * - social links
 */
export const SITE = {
  name: "Heartland Hormone & Wellness Clinic",
  shortName: "Heartland",
  tagline: "Hormone therapy and medical weight management for men and women.",
  siteUrl: "https://heartland-hormone.vercel.app",

  city: "Overland Park",
  region: "Kansas City",
  state: "KS",
  stateName: "Kansas",
  county: "Johnson County",
  country: "US",
  locationLine: "Overland Park / Kansas City + Telehealth Throughout Kansas",
  serviceAreaLine:
    "Local care in the Kansas City area. Convenient telehealth throughout Kansas.",

  streetAddress: "14400 Metcalf Avenue, Suite 150",
  addressNote: "Inside Property Evaluations/Regus Building",
  zip: null as string | null,
  phone: "913-427-9275",
  phoneTel: "+19134279275",
  email: "sherry@heartlandhormones.com",
  officeHours: null as string | null,
  bookingUrl: null as string | null,

  providerName: null as string | null,
  providerCredential: "AGACNP-BC",
  providerTitle: "Adult-Gerontology Acute Care Nurse Practitioner",
  providerExperience:
    "decades of advanced clinical experience",
  licenseNumber: null as string | null,

  telehealthStates: ["Kansas"] as const,
  telehealthStatement:
    "Telehealth is available for eligible patients when clinically appropriate and permitted by applicable law and prescribing requirements.",

  acceptsInsurance: false,
  superbillAvailable: true,
  byAppointmentOnly: true,

  socialLinks: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
} as const;

export const MEDICAL_DISCLAIMER =
  "Information on this website is for general educational purposes and does not replace individualized medical evaluation or treatment. Prescription medications are provided only when clinically appropriate following evaluation by a licensed healthcare professional.";

export const PRICING_DISCLAIMER =
  "Treatment is individualized. Medication availability, dose, laboratory requirements and treatment recommendations vary by patient. Pricing shown reflects standard program structures and may vary when additional medications, laboratory testing or specialized services are required. Prescription treatment is provided only when clinically appropriate.";

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  {
    href: "/notice-of-privacy-practices",
    label: "Notice of Privacy Practices",
  },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/telehealth-consent", label: "Telehealth Consent" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
] as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services", children: true },
  { href: "/pricing", label: "Programs & Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export function providerCredentialLine(): string {
  return `${SITE.providerTitle}, ${SITE.providerCredential}`;
}

export function providerDisplayName(): string {
  return SITE.providerName ?? providerCredentialLine();
}

export function hasStreetAddress(): boolean {
  return Boolean(SITE.streetAddress);
}

export function hasPhone(): boolean {
  return Boolean(SITE.phone);
}

export function hasEmail(): boolean {
  return Boolean(SITE.email);
}

export function cityStateLine(): string {
  return `${SITE.city}, ${SITE.state}`;
}

export function formattedAddress(): string | null {
  if (!SITE.streetAddress) return null;
  const zip = SITE.zip ? ` ${SITE.zip}` : "";
  const note = SITE.addressNote ? ` (${SITE.addressNote})` : "";
  return `${SITE.streetAddress}${note}, ${SITE.city}, ${SITE.state}${zip}`;
}

export function addressLines(): string[] {
  const lines: string[] = [];
  if (SITE.streetAddress) lines.push(SITE.streetAddress);
  if (SITE.addressNote) lines.push(SITE.addressNote);
  const zip = SITE.zip ? ` ${SITE.zip}` : "";
  lines.push(`${SITE.city}, ${SITE.state}${zip}`);
  return lines;
}

export function mapsUrl(): string | null {
  if (!SITE.streetAddress) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    formattedAddress() ?? SITE.streetAddress,
  )}`;
}

export function phoneHref(): string | null {
  if (!SITE.phoneTel && !SITE.phone) return null;
  return `tel:${SITE.phoneTel ?? SITE.phone}`;
}
