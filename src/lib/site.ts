/**
 * Central clinic configuration.
 *
 * Fill null fields before production. The UI never prints raw placeholders.
 *
 * Still pending from clinic:
 * - provider photo
 * - clinic photos
 * - booking URL / custom domain (heartlandhormone.com)
 * - tadalafil add-on pricing
 * - peptide launch pricing
 * - Quest/LabCorp cash-rate list
 * - cancellation/pause policy
 * - attorney-reviewed legal pages
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
  locationLine:
    "Overland Park / Kansas City + Telehealth Throughout Kansas and Missouri",
  serviceAreaLine:
    "Local care in the Kansas City area. Convenient telehealth throughout Kansas and Missouri.",

  streetAddress: "14400 Metcalf Avenue, Suite 150",
  addressNote: "Inside Property Evaluations/Regus Building",
  zip: "66223",
  phone: "913-427-9275",
  phoneTel: "+19134279275",
  email: "sherry@heartlandhormones.com",
  officeHours: "By appointment only",
  bookingUrl: null as string | null,
  bookingSystem: "OptiMantra",
  patientPortalUrl: "https://www.optimantra.com/optimus/om/patient/login",

  providerName: "Sherry Broadhurst",
  providerCredential: "MSN, APRN, AGACNP-BC",
  providerTitle: "Adult-Gerontology Acute Care Nurse Practitioner",
  providerExperience: "decades of advanced clinical experience",
  licenseNumber: null as string | null,
  privacyOfficerName: "Sherry Broadhurst",

  consultLength:
    "Initial consultations are typically 45 minutes to 1 hour. Follow-up visits are typically 15 to 20 minutes.",
  firstVisitPreference:
    "An in-person first visit is preferred. Follow-up may be in office or by telehealth when clinically appropriate. Controlled substances such as testosterone may require at least one in-person visit per year.",

  telehealthStates: ["Kansas", "Missouri"] as const,
  telehealthStatement:
    "Telehealth is available for eligible patients in Kansas and Missouri when clinically appropriate and permitted by applicable law and prescribing requirements.",

  acceptsInsurance: false,
  superbillAvailable: true,
  byAppointmentOnly: true,
  refundsOffered: false,

  socialLinks: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
} as const;

export const MEDICAL_DISCLAIMER =
  "Information on this website is for general educational purposes and does not replace individualized medical evaluation or treatment. Prescription medications are provided only when clinically appropriate following evaluation by a licensed healthcare professional.";

export const PRICING_DISCLAIMER =
  "Treatment is individualized. Medication availability, dose, laboratory requirements and treatment recommendations vary by patient. Pricing shown reflects current published program structures and may change. Additional medications, laboratory testing or specialized services are billed separately. Prescription treatment is provided only when clinically appropriate. Consultation and membership fees are generally nonrefundable.";

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
