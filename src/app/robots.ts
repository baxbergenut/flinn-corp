import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// SEO: Generate robots.txt so crawlers can index the marketing pages while staying out of non-public paths.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/checkout/"],
      },
      {
        userAgent: ["Googlebot", "Bingbot", "Applebot"],
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/checkout/"],
      },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
