/**
 * Central clinic configuration.
 *
 * Fill null fields before production. The UI never prints raw placeholders.
 *
 * Still pending from clinic:
 * - clinic photos
 * - custom domain (heartlandhormone.com)
 * - tadalafil add-on pricing
 * - Quest/LabCorp cash-rate list
 * - cancellation/pause policy finalization
 * - attorney-reviewed legal pages
 */
export const BOOKING_URL =
  "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=TXd6ZERaRCtjNHFyYVUxTXM4MnY0QT09&lid=RVQ1d3BUUmxBZDhURThxRURVYVVNdz09";
export const PORTAL_URL =
  "https://www.optimantra.com/optimus/om/patient/login";
export const CLINIC_EMAIL = "sherry@heartlandhormone.com";
export const CLINIC_ADDRESS =
  "14400 Metcalf Avenue, Suite 105, Property Evaluations / Regus Building, Overland Park, KS 66223";
export const PHONE = "913-427-9275";

export const SITE = {
  name: "Heartland Hormone & Wellness Clinic",
  legalBusinessName: "Heartland Hormone & Wellness Clinic",
  shortName: "Heartland",
  tagline:
    "Helping women and men restore energy, balance, vitality, and confidence through personalized hormone replacement and symptom-guided hormone balancing.",
  consultCta: "Book a Consultation",
  consultCtaShort: "Book a Consultation",
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
  addressNote: "Property Evaluations / Regus Building",
  zip: "66223",
  phone: PHONE,
  phoneTel: "+19134279275",
  email: CLINIC_EMAIL,
  officeHours: "By appointment only",
  bookingUrl: BOOKING_URL,
  bookingSystem: "OptiMantra",
  patientPortalUrl: PORTAL_URL,

  providerName: "Sherry Broadhurst",
  providerCredential: "MSN, APRN, AGACNP-BC",
  providerTitle: "Adult-Gerontology Acute Care Nurse Practitioner",
  providerExperience: "decades of advanced clinical experience",
  licenseNumber: null as string | null,
  privacyOfficerName: "Sherry Broadhurst",

  consultLength:
    "New patient consultations are typically 60 minutes, while follow-up appointments generally last 30 minutes.",
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
  "Information provided on this website is for general educational purposes only and is not intended as medical advice. Treatment recommendations are individualized and based on a comprehensive clinical evaluation. Prescription medications are prescribed only when medically appropriate.";

export const PRICING_DISCLAIMER =
  "Treatment is individualized. Medication selection, dosing, laboratory requirements, and treatment recommendations vary by patient. Program pricing is listed on the Pricing & Programs page and is subject to change. Additional medications, laboratory testing, and specialized services are billed separately. Prescription medications are prescribed only when medically appropriate. Consultation fees are nonrefundable. Membership fees are nonrefundable once billed and after medications have been prescribed, processed, dispensed, or shipped.";

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  {
    href: "/notice-of-privacy-practices",
    label: "Notice of Privacy Practices",
  },
  { href: "/terms-of-service", label: "Terms of Service" },
  {
    href: "/recurring-billing",
    label: "Recurring Billing & Cancellation Policy",
  },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
] as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services", children: true },
  { href: "/programs", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Location" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
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

export function addressLines(): string[] {
  const lines: string[] = [];
  if (SITE.streetAddress) lines.push(SITE.streetAddress);
  if (SITE.addressNote) lines.push(SITE.addressNote);
  const zip = SITE.zip ? ` ${SITE.zip}` : "";
  lines.push(`${SITE.city}, ${SITE.state}${zip}`);
  return lines;
}

export function formattedAddress(): string | null {
  return CLINIC_ADDRESS;
}

export function mapsUrl(): string | null {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CLINIC_ADDRESS,
  )}`;
}

export function isHttpUrl(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function phoneHref(): string | null {
  if (!SITE.phoneTel && !SITE.phone) return null;
  return `tel:${SITE.phoneTel ?? SITE.phone}`;
}

