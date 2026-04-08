import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPinned, Phone, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";
import JsonLd from "@/components/json-ld";
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildPageMetadata,
  buildWebPageSchema,
  buildWebSiteSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We may collect information you choose to share with us, including your name, email address, phone number, company name, and details you provide through forms, phone calls, or email messages.",
      "We may also collect limited technical information such as browser type, device information, and site usage data to improve the website experience.",
    ],
  },
  {
    title: "2. How We Use Information",
    body: [
      "We use information to respond to inquiries, discuss freight transportation services, coordinate communication, improve customer support, and maintain the website.",
      "We may also use contact details to follow up on service requests or provide updates related to our business relationship.",
    ],
  },
  {
    title: "3. SMS and Phone Communications",
    body: [
      "If you provide your phone number to Flinn Corp, you may receive calls or text messages related to service inquiries, transportation updates, scheduling, or other business communications.",
      "Message frequency may vary. Message and data rates may apply. You can opt out of text messages at any time by replying STOP. For help, reply HELP or contact us directly.",
      "SMS consent is not sold or shared with third parties for marketing purposes.",
    ],
  },
  {
    title: "4. How We Share Information",
    body: [
      "Flinn Corp does not sell or rent personal information.",
      "We may share limited information with service providers who help us operate our business or when disclosure is required by law, needed to protect our rights, or necessary to respond to legal process.",
    ],
  },
  {
    title: "5. Cookies and Site Usage",
    body: [
      "Our website may use basic analytics, cookies, or similar technologies to understand how visitors use the site and improve performance and usability.",
      "You can control cookie settings through your browser preferences.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We use reasonable administrative, technical, and physical safeguards to help protect information from unauthorized access, disclosure, or misuse.",
      "No website or electronic transmission is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Your Choices",
    body: [
      "You may contact us to request updates to your contact information or ask questions about the information you have shared with us.",
      "If you no longer wish to receive text communications, you can opt out at any time by following the instructions in the message.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "Flinn Corp may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date.",
    ],
  },
  {
    title: "9. Contact Information",
    body: [
      "If you have questions about this Privacy Policy or how your information is handled, please contact us using the details below.",
    ],
  },
] as const;

const title = "Privacy Policy | Flinn Corp Freight";
const description =
  "Read the Flinn Corp privacy policy to learn how freight transportation inquiries and website communications are handled.";

// SEO: Give the privacy page unique metadata, a canonical URL, robots directives, and route-specific social previews.
export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/privacy-policy",
  ogImagePath: siteConfig.privacyOgImagePath,
  keywords: ["privacy policy", "freight transportation privacy", "Flinn Corp"],
});

export default function PrivacyPolicyPage() {
  const websiteSchema = buildWebSiteSchema();
  const organizationSchema = buildOrganizationSchema();
  const webPageSchema = buildWebPageSchema({
    title,
    description,
    path: "/privacy-policy",
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);

  return (
    <main
      id="main-content"
      aria-label="Flinn Corp privacy policy content"
      className="relative z-10 overflow-x-clip pb-10"
    >
      {/* SEO: Inject route-level schema so search engines can connect the privacy page to the site, organization, and breadcrumb trail. */}
      <JsonLd
        data={[websiteSchema, organizationSchema, webPageSchema, breadcrumbSchema]}
      />

      <div className="mx-auto flex min-h-screen w-full max-w-[1450px] flex-col px-3 pb-8 pt-0 sm:px-6 sm:pb-10 lg:px-4">
        <header
          aria-label="Privacy page header"
          className="surface sticky top-0 z-50 mt-3 flex items-center justify-between gap-3 rounded-[28px] px-4 py-3 sm:rounded-full sm:px-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-sm sm:tracking-[0.28em]">
              Flinn Corp
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-strong)] sm:tracking-[0.24em]">
              Privacy Policy
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>
        </header>

        <section
          aria-labelledby="privacy-heading"
          className="pt-10 sm:pt-14"
        >
          <div className="space-y-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Privacy Policy" },
              ]}
            />

            <article className="surface rounded-[28px] px-5 py-8 sm:rounded-[36px] sm:px-10 sm:py-12">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-sm sm:tracking-[0.3em]">
                  Effective Date: April 8, 2026
                </p>
                <h1
                  id="privacy-heading"
                  className="mt-4 text-3xl font-bold uppercase tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl"
                >
                  Privacy Policy for Flinn Corp freight transportation inquiries
                </h1>
                <p className="mt-4 text-base leading-7 text-[var(--muted-strong)] sm:text-lg sm:leading-8">
                  This page explains how Flinn Corp handles information shared
                  through our website and business communications.
                </p>

                {/* SEO/internal linking: Add keyword-rich body links so legal content still supports the main service and contact pages. */}
                <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
                  If you want to review our{" "}
                  <Link
                    href="/#services"
                    className="font-semibold text-[var(--brand-blue)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
                  >
                    freight transportation services
                  </Link>
                  , jump to the{" "}
                  <Link
                    href="/#contact"
                    className="font-semibold text-[var(--brand-blue)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
                  >
                    Flinn Corp contact section
                  </Link>
                  , or return to the{" "}
                  <Link
                    href="/"
                    className="font-semibold text-[var(--brand-blue)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
                  >
                    company homepage
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:mt-10">
                {sections.map((section) => {
                  const sectionId = section.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-");

                  return (
                    <section
                      key={section.title}
                      aria-labelledby={sectionId}
                      className="rounded-[22px] border border-[var(--line)] bg-white/78 px-4 py-5 sm:rounded-[26px] sm:px-6 sm:py-6"
                    >
                      <h2
                        id={sectionId}
                        className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl"
                      >
                        {section.title}
                      </h2>
                      <div className="mt-4 space-y-3">
                        {section.body.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base leading-7 text-[var(--muted-strong)]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>

              <section
                aria-labelledby="contact-details-heading"
                className="mt-8 rounded-[22px] border border-[var(--line)] bg-white/82 px-4 py-5 sm:rounded-[26px] sm:px-6 sm:py-6"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[var(--brand-blue)]" />
                  <h2
                    id="contact-details-heading"
                    className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl"
                  >
                    Contact Details
                  </h2>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[20px] border border-[var(--line)] bg-white/72 p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[var(--brand-blue)]" />
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                        Email
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
                      {siteConfig.email}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-[var(--line)] bg-white/72 p-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[var(--brand-blue)]" />
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                        Phone
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
                      {siteConfig.phone}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-[var(--line)] bg-white/72 p-4">
                    <div className="flex items-center gap-3">
                      <MapPinned className="h-5 w-5 text-[var(--brand-blue)]" />
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                        Office
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
                      2280 W HENDERSON RD STE 208
                      <br />
                      COLUMBUS, OH 43220
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
