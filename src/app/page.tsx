"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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

type CardItem = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

const serviceCards: CardItem[] = [
  {
    title: "Reliable Transportation",
    copy:
      "Safe and dependable freight transportation with clear communication from pickup to delivery.",
    icon: Waypoints,
  },
  {
    title: "On-Time Service",
    copy:
      "We focus on timely pickups, dependable scheduling, and smooth delivery coordination for every load.",
    icon: FileCheck2,
  },
  {
    title: "Professional Support",
    copy:
      "Friendly service and responsive updates help customers stay informed throughout the transportation process.",
    icon: Sparkles,
  },
];

const principles: CardItem[] = [
  {
    title: "Professional Service",
    copy:
      "Flinn Corp is committed to professional communication, dependable service, and a smooth experience for every customer.",
    icon: BadgeCheck,
  },
  {
    title: "Efficient Operations",
    copy:
      "Organized operations and timely coordination help keep freight moving safely and efficiently.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Focus",
    copy:
      "Clear communication and reliable follow-through help build strong relationships with shippers and logistics partners.",
    icon: Building2,
  },
];

const credentials = [
  { label: "Service", value: "Freight Transportation" },
  { label: "Support", value: "Responsive Communication" },
  { label: "Focus", value: "Safe, Timely Delivery" },
  { label: "Phone", value: "904-746-4276" },
];

function FadeIn({
  children,
  className,
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function FloatingCard({
  className,
  title,
  value,
  delay = 0,
}: {
  className: string;
  title: string;
  value: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`surface absolute rounded-[24px] px-4 py-3 ${className}`}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
      animate={
        prefersReducedMotion
          ? undefined
          : { opacity: 1, y: [0, -8, 0], rotate: [0, -1, 0] }
      }
      transition={{
        opacity: { duration: 0.5, delay },
        y: {
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        },
        rotate: {
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-[var(--muted)]">
        {title}
      </p>
      <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
        {value}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="relative overflow-x-clip pb-10">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-4 lg:px-4">
        <header className="surface sticky top-3 z-50 flex items-center justify-between gap-3 rounded-[28px] px-3 py-3 sm:top-4 sm:rounded-full sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-[0_8px_30px_rgba(72,159,216,0.14)] sm:h-11 sm:w-11">
              <Image
                src="/brand/icon-only.png"
                alt="Flinn Corp logo mark"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-sm sm:tracking-[0.28em]">
                Flinn Corp
              </p>
              <p className="truncate font-mono text-[0.55rem] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[0.63rem] sm:tracking-[0.28em]">
                Freight Transportation
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--foreground)] lg:flex">
            <a href="#services" className="transition hover:text-[var(--brand-blue)]">
              Services
            </a>
            <a href="#approach" className="transition hover:text-[var(--brand-blue)]">
              Approach
            </a>
            <a href="#contact" className="transition hover:text-[var(--brand-blue)]">
              Contact
            </a>
          </nav>

          <a
            href="mailto:info@flinncorp.com?subject=Freight%20Inquiry"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-mint))] px-3 py-2 text-xs font-semibold text-white shadow-[0_18px_45px_rgba(72,159,216,0.28)] transition hover:translate-y-[-1px] sm:gap-2 sm:px-4 sm:text-sm"
          >
            <span className="hidden sm:inline">Start a Conversation</span>
            <span className="sm:hidden">Contact</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </header>

        <section
          id="top"
          className="relative grid flex-1 items-center gap-10 pb-8 pt-10 sm:gap-12 sm:pt-12 lg:grid-cols-[1.06fr_0.94fr] lg:pt-20"
        >
          <FadeIn className="relative z-10">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--line)] bg-white/65 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--brand-blue)] sm:gap-3 sm:px-4 sm:text-[0.72rem] sm:tracking-[0.3em]">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-mint)]" />
              <span className="truncate">Safe, reliable freight transportation</span>
            </div>

            <h1 className="mt-5 max-w-3xl text-[clamp(2.6rem,12vw,6.75rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em] text-[var(--foreground)] sm:mt-6">
              Reliable
              <span className="block text-[var(--brand-blue)] drop-shadow-[0_10px_24px_rgba(72,159,216,0.18)]">
                freight
              </span>
              transportation.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted-strong)] sm:mt-6 sm:text-xl sm:leading-8">
              Flinn Corp provides dependable trucking service with
              professional communication, responsive support, and a strong
              focus on safe, on-time delivery.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)] sm:w-auto"
                style={{ color: "#ffffff" }}
              >
                <span className="text-white">Contact Us</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white" />
              </a>
              <a
                href="tel:9047464276"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                904-746-4276
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
              {credentials.map((credential, index) => (
                <FadeIn
                  key={credential.label}
                  delay={0.06 * index}
                  className="surface rounded-[20px] px-4 py-4 sm:rounded-[24px] sm:px-5"
                >
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[var(--muted)] sm:text-[0.68rem] sm:tracking-[0.3em]">
                    {credential.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[var(--foreground)] sm:text-lg">
                    {credential.value}
                  </p>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="relative">
            <div className="hero-panel relative min-h-[420px] overflow-hidden rounded-[28px] p-3 sm:min-h-[560px] sm:rounded-[36px] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(93,199,195,0.26),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(72,159,216,0.2),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,250,255,0.82))]" />
              <div className="absolute inset-2.5 rounded-[24px] border border-white/70 sm:inset-3 sm:rounded-[30px]" />

              <FloatingCard
                className="left-3 top-3 w-[180px] sm:left-5 sm:top-5 sm:w-[220px]"
                title="Service"
                value="Freight transportation"
                delay={0.15}
              />
              <FloatingCard
                className="right-3 top-16 hidden w-[190px] sm:block sm:right-5 sm:top-12"
                title="Support"
                value="Responsive updates"
                delay={0.35}
              />
              <FloatingCard
                className="bottom-20 left-3 hidden w-[190px] sm:block sm:bottom-24 sm:left-8 sm:w-[220px]"
                title="Delivery"
                value="Safe and on time"
                delay={0.55}
              />
              <FloatingCard
                className="bottom-4 right-3 w-[170px] sm:bottom-6 sm:right-6 sm:w-[190px]"
                title="Office"
                value="Columbus, Ohio"
                delay={0.75}
              />

              <svg
                viewBox="0 0 520 520"
                className="absolute inset-0 h-full w-full opacity-80"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="routeStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--brand-blue)" />
                    <stop offset="100%" stopColor="var(--brand-mint)" />
                  </linearGradient>
                </defs>

                <motion.path
                  d="M72 160C124 112 192 104 252 144C312 184 346 232 430 210"
                  fill="none"
                  stroke="url(#routeStroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                  initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0.2 }}
                  animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
                />
                <motion.path
                  d="M98 364C164 328 220 332 282 294C344 256 376 218 446 286"
                  fill="none"
                  stroke="url(#routeStroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                  initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0.2 }}
                  animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 1.2, delay: 0.45, ease: "easeOut" }}
                />
                <motion.path
                  d="M170 92C280 72 364 122 394 216C424 310 388 390 312 430"
                  fill="none"
                  stroke="url(#routeStroke)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="8 16"
                  initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0.2 }}
                  animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.3, delay: 0.65, ease: "easeOut" }}
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
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r="4"
                      fill="var(--brand-blue)"
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : { scale: [1, 1.35, 1], opacity: [0.85, 0.4, 0.85] }
                      }
                      transition={{
                        duration: 3.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.18,
                        ease: "easeInOut",
                      }}
                    />
                  </g>
                ))}
              </svg>

              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-10">
                <motion.div
                  className="relative h-[180px] w-[180px] rounded-[40px] border border-white/80 bg-white/65 shadow-[0_30px_90px_rgba(72,159,216,0.16)] backdrop-blur-md sm:h-[240px] sm:w-[240px] sm:rounded-[52px]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { y: [0, -10, 0], rotate: [0, 1.4, 0] }
                  }
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-[12px] rounded-[28px] bg-[linear-gradient(135deg,rgba(72,159,216,0.14),rgba(93,199,195,0.14))] sm:inset-[16px] sm:rounded-[38px]" />
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="absolute inset-[18px] rounded-[30px] border border-white/85 sm:inset-[22px] sm:rounded-[40px]" />
                    <div className="relative h-[128px] w-[128px] overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,rgba(72,159,216,0.12),rgba(93,199,195,0.1))] sm:h-[178px] sm:w-[178px] sm:rounded-[36px]">
                      <Image
                        src="/brand/icon-only.png"
                        alt="Flinn Corp icon"
                        fill
                        sizes="178px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-3 left-1/2 z-10 w-[calc(100%-1.5rem)] max-w-[320px] -translate-x-1/2 rounded-[22px] border border-white/80 bg-white/80 px-4 py-3 text-center shadow-[0_25px_70px_rgba(72,159,216,0.16)] backdrop-blur-md sm:bottom-8 sm:w-[calc(100%-3rem)] sm:rounded-[28px] sm:px-5 sm:py-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--muted)] sm:text-[0.68rem] sm:tracking-[0.34em]">
                  Company Overview
                </p>
                <p className="mt-2 text-xs leading-5 text-[var(--foreground)] sm:text-sm sm:leading-6">
                  Professional service and direct communication help customers
                  move freight with confidence.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <section
          id="services"
          className="grid gap-5 py-8 sm:gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:py-16"
        >
          <FadeIn className="surface rounded-[24px] p-6 sm:rounded-[32px] sm:p-10">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-[0.72rem] sm:tracking-[0.35em]">
              What Flinn Corp Does
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
              Transportation services built on reliability, safety, and clear communication.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted-strong)] sm:mt-5 sm:text-lg sm:leading-8">
              Flinn Corp focuses on the essentials customers care about most:
              dependable service, timely delivery, and responsive support from
              start to finish.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <FadeIn
                  key={card.title}
                  delay={0.08 * index}
                  className="surface rounded-[24px] p-6 sm:rounded-[32px] sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(72,159,216,0.16),rgba(93,199,195,0.16))] text-[var(--brand-blue)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:mt-6 sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)] sm:mt-4 sm:text-base sm:leading-7">
                    {card.copy}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section
          id="approach"
          className="grid gap-5 py-8 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16"
        >
          <FadeIn className="surface relative overflow-hidden rounded-[24px] p-6 sm:rounded-[32px] sm:p-10">
            <div className="absolute right-[-72px] top-[-72px] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(93,199,195,0.26),transparent_68%)]" />
            <p className="relative font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-[0.72rem] sm:tracking-[0.35em]">
              Why Choose Flinn Corp
            </p>
            <h2 className="relative mt-4 text-3xl font-bold uppercase tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
              Reliable service, efficient operations, and customer-focused support.
            </h2>
            <p className="relative mt-4 max-w-2xl text-base leading-7 text-[var(--muted-strong)] sm:mt-5 sm:text-lg sm:leading-8">
              Flinn Corp keeps things simple with dependable transportation,
              professional communication, and a strong commitment to customer
              satisfaction.
            </p>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn
                    key={item.title}
                    delay={0.08 * index}
                    className="rounded-[22px] border border-[var(--line)] bg-white/72 p-4 sm:rounded-[26px] sm:p-5"
                  >
                    <Icon className="h-5 w-5 text-[var(--brand-blue)]" />
                    <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
                      {item.copy}
                    </p>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="surface rounded-[24px] p-6 sm:rounded-[32px] sm:p-10">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-[0.72rem] sm:tracking-[0.35em]">
              Contact Routes
            </p>

            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              <a
                href="mailto:info@flinncorp.com"
                className="group flex items-start gap-3 rounded-[20px] border border-[var(--line)] bg-white/78 p-4 transition hover:border-[var(--brand-blue)] sm:gap-4 sm:rounded-[24px] sm:p-5"
              >
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(72,159,216,0.16),rgba(93,199,195,0.16))] text-[var(--brand-blue)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                    Email
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    info@flinncorp.com
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted-strong)]">
                    For service questions, freight coordination, and general
                    inquiries.
                  </p>
                </div>
              </a>

              <a
                href="tel:9047464276"
                className="group flex items-start gap-3 rounded-[20px] border border-[var(--line)] bg-white/78 p-4 transition hover:border-[var(--brand-blue)] sm:gap-4 sm:rounded-[24px] sm:p-5"
              >
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(72,159,216,0.16),rgba(93,199,195,0.16))] text-[var(--brand-blue)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                    Phone
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    904-746-4276
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted-strong)]">
                    Direct line for timely coordination.
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8">
              <div className="rounded-[20px] border border-[var(--line)] bg-white/72 p-4 sm:rounded-[24px] sm:p-5">
                <div className="flex items-center gap-3">
                  <MapPinned className="h-5 w-5 text-[var(--brand-blue)]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                    Physical Office
                  </p>
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
                  2280 W HENDERSON RD STE 208
                  <br />
                  COLUMBUS, OH 43220
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <FadeIn
          id="contact"
          className="surface mt-4 rounded-[28px] px-5 py-8 sm:rounded-[36px] sm:px-10 sm:py-12"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[var(--brand-blue)] sm:text-[0.72rem] sm:tracking-[0.35em]">
                Contact Flinn Corp
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-bold uppercase tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
                Reach out for freight transportation and service inquiries.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted-strong)] sm:mt-5 sm:text-lg sm:leading-8">
                Contact Flinn Corp by phone or email to discuss your
                transportation needs and connect with the team directly.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row lg:flex-col">
              <a
                href="mailto:info@flinncorp.com?subject=Freight%20Inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-mint))] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(72,159,216,0.28)] transition hover:translate-y-[-1px]"
              >
                Email Flinn Corp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:9047464276"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
              >
                Call Now
              </a>
            </div>
          </div>
        </FadeIn>

        <footer className="pt-8">
          <div className="flex flex-col gap-3 border-t border-[var(--line)] py-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p>
              Flinn Corp / Freight Transportation / Reliable Service
            </p>
            <div className="flex flex-col gap-2 sm:items-end">
              <p className="font-mono text-xs uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.26em]">
                Columbus, OH
              </p>
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-[var(--foreground)] transition hover:text-[var(--brand-blue)]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
