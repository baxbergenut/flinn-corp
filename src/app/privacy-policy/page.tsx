import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPinned, Phone, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "Introduction",
    body: [
      "This Privacy Policy explains how Flinn Corp collects, uses, and protects information when you visit our website, contact us, request services, or communicate with our team.",
      "By using this website, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "1. Information We Collect",
    body: [
      "We may collect information you choose to share with us, including your name, email address, phone number, company name, and any details you provide through forms, phone calls, or email messages.",
      "We may also collect limited technical information such as browser type, device information, and website usage data to help us improve the site experience.",
    ],
  },
  {
    title: "2. How We Use Information",
    body: [
      "We use information to respond to inquiries, discuss transportation services, coordinate communication, improve customer support, and maintain our website.",
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
      "We may share limited information with service providers who help us operate our business or when disclosure is required by law, needed to protect our rights, or necessary to respond to a legal process.",
    ],
  },
  {
    title: "5. Cookies and Site Usage",
    body: [
      "Our website may use basic analytics, cookies, or similar technologies to understand how visitors use the site and to improve performance and usability.",
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
      "You may contact us to request updates to your contact information or to ask questions about the information you have shared with us.",
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
      "If you have questions about this Privacy Policy or how your information is handled, please contact us using the information below.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Flinn Corp | Privacy Policy",
  description:
    "Read the Flinn Corp privacy policy for information about data collection, communications, and contact details.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-x-clip pb-10">
      <div className="mx-auto flex min-h-screen w-full max-w-[1450px] flex-col px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-4 lg:px-4">
        <header className="surface sticky top-3 z-50 flex items-center justify-between gap-3 rounded-[28px] px-4 py-3 sm:top-4 sm:rounded-full sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-sm sm:tracking-[0.28em]">
              Flinn Corp
            </p>
            <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[0.63rem] sm:tracking-[0.28em]">
              Privacy Policy
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>
        </header>

        <section className="pt-10 sm:pt-14">
          <div className="surface rounded-[28px] px-5 py-8 sm:rounded-[36px] sm:px-10 sm:py-12">
            <div className="max-w-3xl">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-[0.72rem] sm:tracking-[0.35em]">
                Effective Date: April 8, 2026
              </p>
              <h1 className="mt-4 text-3xl font-bold uppercase tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-base leading-7 text-[var(--muted-strong)] sm:text-lg sm:leading-8">
                This page explains how Flinn Corp handles information shared
                through our website and business communications. It is
                structured similarly to the reference site you shared, but the
                language here is written specifically for Flinn Corp.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[22px] border border-[var(--line)] bg-white/78 px-4 py-5 sm:rounded-[26px] sm:px-6 sm:py-6"
                >
                  <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-3">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-6 text-[var(--muted-strong)] sm:text-base sm:leading-7"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-8 rounded-[22px] border border-[var(--line)] bg-white/82 px-4 py-5 sm:rounded-[26px] sm:px-6 sm:py-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[var(--brand-blue)]" />
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl">
                  Contact Details
                </h2>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[20px] border border-[var(--line)] bg-white/72 p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[var(--brand-blue)]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                      Email
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted-strong)] sm:text-base sm:leading-7">
                    info@flinncorp.com
                  </p>
                </div>

                <div className="rounded-[20px] border border-[var(--line)] bg-white/72 p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[var(--brand-blue)]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                      Phone
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted-strong)] sm:text-base sm:leading-7">
                    904-746-4276
                  </p>
                </div>

                <div className="rounded-[20px] border border-[var(--line)] bg-white/72 p-4">
                  <div className="flex items-center gap-3">
                    <MapPinned className="h-5 w-5 text-[var(--brand-blue)]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                      Office
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted-strong)] sm:text-base sm:leading-7">
                    2280 W HENDERSON RD STE 208
                    <br />
                    COLUMBUS, OH 43220
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
