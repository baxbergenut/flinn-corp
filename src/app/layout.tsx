import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import BackgroundGrid from "./background-grid";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// SEO: Set shared metadata defaults and the canonical site origin so page-level metadata can emit absolute canonicals and social URLs.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
};

// SEO: Export an explicit viewport so mobile crawlers and browsers receive the intended responsive rendering instructions.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5fdff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full">
        {/* SEO/accessibility: Add a skip link so keyboard users can bypass repeated navigation and reach primary content quickly. */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <BackgroundGrid />
        {children}
      </body>
    </html>
  );
}
