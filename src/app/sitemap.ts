import type { MetadataRoute } from "next";
import { getPublicServices } from "@/lib/services";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/how-it-works",
    "/services",
    "/about",
    "/locations",
    "/pricing",
    "/faq",
    "/patient-portal",
    "/contact",
    "/privacy-policy",
    "/notice-of-privacy-practices",
    "/terms-of-service",
    "/recurring-billing",
    "/refund-policy",
    "/telehealth-consent",
    "/medical-disclaimer",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE.siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...getPublicServices().map((s) => ({
      url: `${SITE.siteUrl}${s.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: s.primary ? 0.9 : 0.7,
    })),
  ];
}
