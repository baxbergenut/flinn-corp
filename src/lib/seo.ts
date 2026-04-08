import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site-config";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
  keywords?: string[];
  type?: "website" | "article";
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type WebPageSchemaOptions = {
  title: string;
  description: string;
  path: string;
};

// SEO: Build route-level metadata so every page gets unique titles, descriptions, canonicals, robots directives, and social cards.
export function buildPageMetadata({
  title,
  description,
  path,
  ogImagePath = siteConfig.homeOgImagePath,
  keywords = [],
  type = "website",
}: MetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(ogImagePath);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// SEO: Publish a reusable website entity so search engines can connect the brand, domain, and contact channel across pages.
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.defaultDescription,
    image: absoluteUrl(siteConfig.homeOgImagePath),
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
    },
  };
}

// SEO: Publish organization data so search engines can understand the company identity behind the site content.
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.siteUrl,
    description: siteConfig.defaultDescription,
    image: absoluteUrl(siteConfig.logoPath),
    logo: absoluteUrl(siteConfig.logoPath),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
  };
}

// SEO: Add local business data because the site promotes a real transportation company with a published office address and contact details.
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    url: siteConfig.siteUrl,
    description: siteConfig.defaultDescription,
    image: absoluteUrl(siteConfig.homeOgImagePath),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.serviceArea,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
  };
}

// SEO: Add page-level entity data so each route has a crawlable description tied to its canonical URL.
export function buildWebPageSchema({
  title,
  description,
  path,
}: WebPageSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: absoluteUrl(path),
    description,
    image: absoluteUrl(path === "/" ? siteConfig.homeOgImagePath : siteConfig.privacyOgImagePath),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  };
}

// SEO: Emit breadcrumb schema for hierarchical pages so search engines can display cleaner result paths.
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
