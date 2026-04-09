import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  Mail,
  MapPinned,
  Phone,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import JsonLd from "@/components/json-ld";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildPageMetadata,
  buildWebPageSchema,
  buildWebSiteSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type CardItem = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

const serviceCards: CardItem[] = [
  {
    title: "Reliable Freight Transportation",
    copy:
      "Safe and dependable freight transportation with clear updates from pickup through delivery.",
    icon: Waypoints,
  },
  {
    title: "On-Time Delivery Coordination",
    copy:
      "Timely pickups, dependable scheduling, and smooth delivery coordination keep every load moving.",
    icon: FileCheck2,
  },
  {
    title: "Responsive Customer Support",
    copy:
      "Friendly communication and proactive check-ins help shippers stay informed at every step.",
    icon: Sparkles,
  },
];

const principles: CardItem[] = [
  {
    title: "Professional Service",
    copy:
      "Flinn Corp combines direct communication, dependable follow-through, and a smooth experience for every customer.",
    icon: BadgeCheck,
  },
  {
    title: "Efficient Operations",
    copy:
      "Organized routing and timely coordination help keep freight moving safely and efficiently.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Focus",
    copy:
      "Shippers and logistics partners receive reliable support that keeps priorities visible from start to finish.",
    icon: Building2,
  },
];

const credentials = [
  { label: "Service", value: "Freight transportation" },
  { label: "Support", value: "Responsive communication" },
  { label: "Focus", value: "Safe, timely delivery" },
  { label: "Phone", value: siteConfig.phone },
];

const title = "Freight Transportation | Flinn Corp";
const description =
  "Freight transportation from Flinn Corp with dependable scheduling, responsive updates, and safe on-time delivery support.";

// SEO: Give the home page its own keyword-led metadata, canonical URL, robots policy, and social card content.
export const metadata = buildPageMetadata({
  title,
  description,
  path: "/",
  ogImagePath: siteConfig.homeOgImagePath,
  keywords: [
    "freight transportation",
    "trucking company",
    "logistics support",
    "on-time delivery",
  ],
});

export default function Home() {
  const websiteSchema = buildWebSiteSchema();
  const organizationSchema = buildOrganizationSchema();
  const localBusinessSchema = buildLocalBusinessSchema();
  const webPageSchema = buildWebPageSchema({
    title,
    description,
    path: "/",
  });
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", path: "/" }]);

  return (
    <main
      id="main-content"
      aria-label="Flinn Corp freight transportation content"
      className="relative z-10 overflow-x-clip pb-10"
    >
      {/* SEO: Inject homepage structured data so search engines can understand the brand, website, local business details, and route hierarchy. */}
      <JsonLd
        data={[
          websiteSchema,
          organizationSchema,
          localBusinessSchema,
          webPageSchema,
          breadcrumbSchema,
        ]}
      />

      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-3 pb-8 pt-0 sm:px-6 sm:pb-10 lg:px-4">
        <header
          aria-label="Site header"
          className="surface sticky top-0 z-50 mt-3 flex items-center justify-between gap-3 rounded-[28px] px-3 py-3 sm:rounded-full sm:px-6"
        >
          <Link
            href="/"
            aria-label="Flinn Corp home"
            className="inline-flex min-h-12 min-w-12 items-center gap-3 rounded-full pr-3 transition hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
          >
            {/* SEO/images: Use the transparent PNG logo mark so the brand artwork stays clean against the glass UI and retains descriptive alt text. */}
            <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-[0_8px_30px_rgba(72,159,216,0.14)]">
              <Image
                src="/brand/flinn-corp-logo-mark-transparent.png"
                alt="Flinn Corp freight transportation logo"
                width="44"
                height="44"
                className="h-full w-full object-contain"
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-sm sm:tracking-[0.28em]">
                Flinn Corp
              </p>
              <p className="truncate font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-strong)] sm:tracking-[0.24em]">
                Freight Transportation
              </p>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-2 text-sm font-medium text-[var(--foreground)] lg:flex"
          >
            <a
              href="#services"
              className="inline-flex min-h-12 items-center rounded-full px-4 transition hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
            >
              Freight transportation services
            </a>
            <a
              href="#approach"
              className="inline-flex min-h-12 items-center rounded-full px-4 transition hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
            >
              Transportation approach
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-full px-4 transition hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
            >
              Contact Flinn Corp
            </a>
          </nav>

          <a
            href={siteConfig.emailHref}
            aria-label="Email Flinn Corp about freight transportation"
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-mint))] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(72,159,216,0.28)] transition hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
          >
            <span className="hidden sm:inline">Start a Conversation</span>
            <span className="sm:hidden">Contact</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </header>

        <section
          id="top"
          aria-labelledby="hero-heading"
          className="relative grid flex-1 items-center gap-10 pb-8 pt-10 sm:gap-12 sm:pt-12 lg:grid-cols-[1.06fr_0.94fr] lg:pt-20"
        >
          <article className="relative z-10 animate-fade-up">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--line)] bg-white/65 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--brand-blue)] sm:gap-3 sm:text-sm sm:tracking-[0.22em]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-mint)]" />
              <span className="truncate">
                Safe, reliable freight transportation
              </span>
            </div>

            <h1
              id="hero-heading"
              className="mt-5 max-w-3xl text-[clamp(2.8rem,11vw,6.4rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em] text-[var(--foreground)] sm:mt-6"
            >
              Freight transportation
              <span className="block text-[var(--brand-blue)] drop-shadow-[0_10px_24px_rgba(72,159,216,0.18)]">
                you can count on.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted-strong)] sm:mt-6 sm:text-xl sm:leading-8">
              Flinn Corp supports freight transportation with dependable
              trucking service, responsive updates, and a strong commitment to
              safe, on-time delivery.
            </p>

            {/* SEO/internal linking: Add descriptive in-body links so important pages and conversion sections are connected with useful anchor text. */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted-strong)]">
              Explore our{" "}
              <a
                href="#services"
                className="font-semibold text-[var(--brand-blue)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
              >
                freight transportation services
              </a>
              , review our{" "}
              <a
                href="#contact"
                className="font-semibold text-[var(--brand-blue)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
              >
                direct contact options
              </a>
              , or read the{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-[var(--brand-blue)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
              >
                Flinn Corp privacy policy
              </Link>
              .
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 sm:w-auto"
                style={{ color: "#ffffff" }}
              >
                <span className="text-white">
                  Contact us about freight transportation
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white" />
              </a>
              <a
                href={siteConfig.phoneHref}
                aria-label={`Call Flinn Corp at ${siteConfig.phone}`}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href="https://account.neweratitans.com/apply/MTE3NTE="
                target="_blank"
                rel="noreferrer"
                aria-label="Apply to drive with Flinn Corp"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[rgba(72,159,216,0.2)] bg-[linear-gradient(135deg,rgba(72,159,216,0.12),rgba(93,199,195,0.18))] px-6 py-3 text-sm font-semibold text-[var(--foreground)] shadow-[0_18px_45px_rgba(72,159,216,0.12)] transition hover:-translate-y-[1px] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 sm:w-auto"
              >
                <span>Drive With Flinn Corp</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
              {credentials.map((credential, index) => (
                <div
                  key={credential.label}
                  className="surface animate-fade-up rounded-[20px] px-4 py-4 sm:rounded-[24px] sm:px-5"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted-strong)] sm:tracking-[0.3em]">
                    {credential.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[var(--foreground)] sm:text-lg">
                    {credential.value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <figure className="hero-panel relative min-h-[420px] overflow-hidden rounded-[28px] p-3 sm:min-h-[560px] sm:rounded-[36px] sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(93,199,195,0.08),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(72,159,216,0.07),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(238,250,255,0.01))]" />
            <div className="absolute inset-2.5 rounded-[24px] border border-white/20 bg-white/[0.02] sm:inset-3 sm:rounded-[30px]" />

            <div className="glass-float absolute left-3 top-3 z-10 hidden w-[190px] rounded-[24px] px-4 py-3 sm:block sm:left-5 sm:top-5 sm:w-[220px]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                Service
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                Freight transportation
              </p>
            </div>
            <div className="glass-float absolute right-3 top-16 z-10 hidden w-[190px] rounded-[24px] px-4 py-3 sm:block sm:right-5 sm:top-12">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                Support
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                Responsive updates
              </p>
            </div>
            <div className="glass-float absolute bottom-20 left-3 z-10 hidden w-[200px] rounded-[24px] px-4 py-3 sm:block sm:bottom-24 sm:left-8 sm:w-[220px]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                Delivery
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                Safe and on time
              </p>
            </div>
            <div className="glass-float absolute bottom-4 right-3 z-10 hidden w-[180px] rounded-[24px] px-4 py-3 sm:block sm:bottom-6 sm:right-6 sm:w-[200px]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                Office
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                Columbus, Ohio
              </p>
            </div>

            <svg
              viewBox="0 0 520 520"
              className="absolute inset-0 h-full w-full opacity-65"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="routeStroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="var(--brand-blue)" />
                  <stop offset="100%" stopColor="var(--brand-mint)" />
                </linearGradient>
              </defs>

              <path
                d="M72 160C124 112 192 104 252 144C312 184 346 232 430 210"
                fill="none"
                stroke="url(#routeStroke)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="10 14"
                className="route-path route-path--delay-1"
              />
              <path
                d="M98 364C164 328 220 332 282 294C344 256 376 218 446 286"
                fill="none"
                stroke="url(#routeStroke)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="10 14"
                className="route-path route-path--delay-2"
              />
              <path
                d="M170 92C280 72 364 122 394 216C424 310 388 390 312 430"
                fill="none"
                stroke="url(#routeStroke)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="8 16"
                className="route-path route-path--delay-3"
              />

              {[
                [72, 160],
                [252, 144],
                [430, 210],
                [98, 364],
                [282, 294],
                [446, 286],
                [170, 92],
                [312, 430],
              ].map(([cx, cy], index) => (
                <g key={`${cx}-${cy}`}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r="11"
                    fill="rgba(255,255,255,0.92)"
                    stroke="rgba(72,159,216,0.18)"
                  />
                  <circle
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="var(--brand-blue)"
                    className="route-node"
                    style={{ animationDelay: `${index * 180}ms` }}
                  />
                </g>
              ))}
            </svg>

            <div className="absolute inset-0 flex items-start justify-center px-4 pt-18 sm:items-center sm:px-10 sm:pt-0">
              <div className="relative z-[1] h-[158px] w-[158px] rounded-[36px] border border-white/28 bg-white/[0.04] shadow-[0_18px_40px_rgba(72,159,216,0.07)] backdrop-blur-[16px] sm:h-[250px] sm:w-[250px] sm:rounded-[52px]">
                <div className="absolute inset-[12px] rounded-[28px] bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] sm:inset-[16px] sm:rounded-[38px]" />
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute inset-[18px] rounded-[30px] bg-white/[0.02] sm:inset-[22px] sm:rounded-[40px]" />
                  <div className="relative h-[108px] w-[108px] sm:h-[182px] sm:w-[182px]">
                    <Image
                      src="/brand/flinn-corp-logo-mark-transparent.png"
                      alt="Flinn Corp freight transportation logo mark"
                      width="182"
                      height="182"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-3 bottom-3 z-10 grid gap-3 sm:hidden">
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-float rounded-[20px] px-4 py-3">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                    Service
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                    Freight transportation
                  </p>
                </div>
                <div className="glass-float rounded-[20px] px-4 py-3">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                    Office
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                    Columbus, Ohio
                  </p>
                </div>
              </div>
            </div>
          </figure>
        </section>

        <section
          id="services"
          aria-labelledby="services-heading"
          className="grid gap-5 py-8 sm:gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:py-16"
        >
          <article className="surface rounded-[24px] p-6 sm:rounded-[32px] sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-sm sm:tracking-[0.3em]">
              What Flinn Corp Does
            </p>
            <h2
              id="services-heading"
              className="mt-4 text-3xl font-bold uppercase tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl"
            >
              Freight transportation services built on reliability and clear
              communication.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted-strong)] sm:mt-5 sm:text-lg sm:leading-8">
              Flinn Corp focuses on the essentials shippers care about most:
              dependable service, timely delivery, and responsive support from
              pickup to final handoff.
            </p>
          </article>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="surface animate-fade-up rounded-[24px] p-6 sm:rounded-[32px] sm:p-7"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(72,159,216,0.16),rgba(93,199,195,0.16))] text-[var(--brand-blue)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:mt-6 sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted-strong)]">
                    {card.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="approach"
          aria-labelledby="approach-heading"
          className="grid gap-5 py-8 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16"
        >
          <article className="surface relative overflow-hidden rounded-[24px] p-6 sm:rounded-[32px] sm:p-10">
            <div className="absolute right-[-72px] top-[-72px] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(93,199,195,0.26),transparent_68%)]" />
            <p className="relative font-mono text-xs uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-sm sm:tracking-[0.3em]">
              Why Choose Flinn Corp
            </p>
            <h2
              id="approach-heading"
              className="relative mt-4 text-3xl font-bold uppercase tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl"
            >
              Reliable service, efficient operations, and customer-focused
              support.
            </h2>
            <p className="relative mt-4 max-w-2xl text-base leading-7 text-[var(--muted-strong)] sm:mt-5 sm:text-lg sm:leading-8">
              Flinn Corp keeps freight transportation straightforward with
              dependable routing, professional communication, and a strong
              commitment to customer satisfaction.
            </p>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[22px] border border-[var(--line)] bg-white/72 p-4 sm:rounded-[26px] sm:p-5"
                  >
                    <Icon className="h-5 w-5 text-[var(--brand-blue)]" />
                    <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--muted-strong)]">
                      {item.copy}
                    </p>
                  </article>
                );
              })}
            </div>
          </article>

          <aside
            aria-labelledby="contact-routes-heading"
            className="surface rounded-[24px] p-6 sm:rounded-[32px] sm:p-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-sm sm:tracking-[0.3em]">
              Contact Routes
            </p>
            <h2
              id="contact-routes-heading"
              className="mt-4 text-3xl font-bold uppercase tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl"
            >
              Transportation support that is easy to reach.
            </h2>

            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex min-h-12 items-start gap-3 rounded-[20px] border border-[var(--line)] bg-white/78 p-4 transition hover:border-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 sm:gap-4 sm:rounded-[24px] sm:p-5"
              >
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(72,159,216,0.16),rgba(93,199,195,0.16))] text-[var(--brand-blue)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--muted-strong)]">
                    Email
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    {siteConfig.email}
                  </p>
                  <p className="mt-1 text-base leading-7 text-[var(--muted-strong)]">
                    For service questions, freight coordination, and general
                    business inquiries.
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.phoneHref}
                className="group flex min-h-12 items-start gap-3 rounded-[20px] border border-[var(--line)] bg-white/78 p-4 transition hover:border-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 sm:gap-4 sm:rounded-[24px] sm:p-5"
              >
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(72,159,216,0.16),rgba(93,199,195,0.16))] text-[var(--brand-blue)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--muted-strong)]">
                    Phone
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    {siteConfig.phone}
                  </p>
                  <p className="mt-1 text-base leading-7 text-[var(--muted-strong)]">
                    Direct line for timely freight transportation coordination.
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8">
              <section className="rounded-[20px] border border-[var(--line)] bg-white/72 p-4 sm:rounded-[24px] sm:p-5">
                <div className="flex items-center gap-3">
                  <MapPinned className="h-5 w-5 text-[var(--brand-blue)]" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                    Physical Office
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
                  2280 W HENDERSON RD STE 208
                  <br />
                  COLUMBUS, OH 43220
                </p>
              </section>
            </div>
          </aside>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="surface mt-4 rounded-[28px] px-5 py-8 sm:rounded-[36px] sm:px-10 sm:py-12"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-sm sm:tracking-[0.3em]">
                Contact Flinn Corp
              </p>
              <h2
                id="contact-heading"
                className="mt-4 max-w-4xl text-3xl font-bold uppercase tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl"
              >
                Reach out for freight transportation and service inquiries.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted-strong)] sm:mt-5 sm:text-lg sm:leading-8">
                Contact Flinn Corp by phone or email to discuss transportation
                needs, availability, and service expectations with the team
                directly.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:flex-col">
              <a
                href={siteConfig.emailHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-mint))] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(72,159,216,0.28)] transition hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
              >
                Email Flinn Corp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
              >
                Call for freight transportation support
              </a>
            </div>
          </div>
        </section>

        <footer aria-label="Site footer" className="pt-8">
          <div className="flex flex-col gap-3 border-t border-[var(--line)] py-6 text-sm text-[var(--muted-strong)] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p>Flinn Corp / Freight Transportation / Reliable Service</p>
            <div className="flex flex-col gap-2 sm:items-end">
              <p className="font-mono text-xs uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.24em]">
                Columbus, OH
              </p>
              <Link
                href="/privacy-policy"
                className="inline-flex min-h-12 items-center rounded-full text-sm font-medium text-[var(--foreground)] transition hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
              >
                Review the Flinn Corp privacy policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
