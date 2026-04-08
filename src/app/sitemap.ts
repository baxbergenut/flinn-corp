import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const lastModified = "2026-04-08";

// SEO: Generate a crawlable XML sitemap with page metadata and image entries for the key marketing assets.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(siteConfig.homeOgImagePath)],
    },
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
      images: [absoluteUrl(siteConfig.privacyOgImagePath)],
    },
  ];
}
