const DEFAULT_SITE_URL = "https://flinncorp.com";

const normalizedSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Flinn Corp",
  legalName: "Flinn Corp",
  siteUrl: normalizedSiteUrl,
  defaultTitle: "Freight Transportation | Flinn Corp",
  defaultDescription:
    "Freight transportation from Flinn Corp with dependable scheduling, responsive updates, and safe on-time delivery support.",
  phone: "904-746-4276",
  phoneHref: "tel:9047464276",
  email: "info@flinncorp.com",
  emailHref: "mailto:info@flinncorp.com?subject=Freight%20Transportation%20Inquiry",
  address: {
    streetAddress: "2280 W Henderson Rd Ste 208",
    addressLocality: "Columbus",
    addressRegion: "OH",
    postalCode: "43220",
    addressCountry: "US",
  },
  serviceArea: "Regional and national freight transportation",
  logoPath: "/brand/flinn-corp-logo-mark-transparent.png",
  homeOgImagePath: "/opengraph-image",
  privacyOgImagePath: "/privacy-policy/opengraph-image",
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.siteUrl}/`).toString();
}
