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
 * - Quest/LabCorp cash-rate list
 * - cancellation/pause policy finalization
 * - attorney-reviewed legal pages
 */
export const SITE = {
  name: "Heartland Hormone & Wellness Clinic",
  legalBusinessName: "Heartland Hormone & Wellness Clinic",
  shortName: "Heartland",
  tagline:
    "Helping women and men restore energy, balance, vitality, and confidence through personalized hormone replacement and symptom-guided hormone balancing.",
  consultCta: "Schedule Your Consultation",
  consultCtaShort: "Schedule Consultation",
  siteUrl: "https://heartland-hormone.vercel.app",

  city: "Overland Park",
  region: "Kansas City",
  state: "KS",
  stateName: "Kansas",
  county: "Johnson County",
  country: "US",
  locationLine:
    "Based in Kansas. Serving the Kansas City area and eligible patients in Kansas and Missouri.",
  serviceAreaLine:
    "Local care in the Kansas City area with in-person appointments and convenient follow-up options for eligible Kansas and Missouri patients.",
  heroSupportingCopy:
    "Whether you are experiencing low testosterone, perimenopause, menopause, PMOS (Polyendocrine Metabolic Ovarian Syndrome, also known as PCOS [Polycystic Ovary Syndrome]), endometriosis, or weight management challenges, we provide evidence-based care tailored to your goals, symptoms, and lifestyle.",
  heroWholePersonCopy:
    "Our approach focuses on treating the whole person, not just lab numbers, helping you achieve lasting improvements in health, well-being, and quality of life.",

  streetAddress: "14400 Metcalf Avenue, Suite 105",
  addressNote: "Inside Property Evaluations / Regus Building",
  zip: "66223",
  phone: "913-427-9275",
  phoneTel: "+19134279275",
  email: "sherry@heartlandhormones.com",
  officeHours: "By appointment only",
  bookingUrl: null as string | null,
  bookingSystem: "OptiMantra",
  /** Do not publish a live OptiMantra login URL on the public site. */
  patientPortalUrl: null as string | null,

  providerName: "Sherry Broadhurst",
  providerCredential: "MSN, APRN, AGACNP-BC",
  providerTitle: "Adult-Gerontology Acute Care Nurse Practitioner",
  providerExperience: "decades of advanced clinical experience",
  licenseNumber: null as string | null,
  privacyOfficerName: "Sherry Broadhurst",

  consultLength:
    "New patient consultations are typically 60 minutes. Follow-up visits are typically 15 to 20 minutes.",
  firstVisitPreference:
    "An in-person first visit is preferred. Follow-up may be in office or by virtual visit when clinically and legally appropriate. Controlled substances may require at least one in-person visit per year.",

  virtualCareAvailable: true,
  virtualCareStates: ["Kansas", "Missouri"] as const,
  virtualCareStatement:
    "Virtual follow-up may be available for eligible Kansas and Missouri patients when clinically and legally appropriate.",

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
  "Information on this website is provided for general educational purposes and does not constitute medical advice. Treatment recommendations are individualized following appropriate clinical evaluation. Prescription treatment is provided only when clinically appropriate.";

export const PRICING_DISCLAIMER =
  "Treatment is individualized. Medication availability, dose, laboratory requirements and treatment recommendations vary by patient. Published program rates are listed on Pricing & Programs and may change. Additional medications, laboratory testing or specialized services are billed separately. Prescription treatment is provided only when clinically appropriate. Consultation fees are nonrefundable. Membership fees are nonrefundable once billed and medications have been prescribed, processed or shipped.";

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  {
    href: "/notice-of-privacy-practices",
    label: "Notice of Privacy Practices",
  },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/recurring-billing", label: "Recurring Billing & Cancellation" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/telehealth-consent", label: "Virtual Care Consent" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
] as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services", children: true },
  { href: "/programs", label: "Pricing & Programs" },
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

