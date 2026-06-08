"use client";

import { Container, GradientText } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Services: [
    "Customer Support",
    "Inbound/Outbound Calls",
    "Lead Generation",
    "Virtual Assistance",
    "Technical Support",
    "Back Office Operations",
  ],
  Company: [
    "About Us",
    "Careers",
    "Leadership",
    "Partners",
    "Press",
    "Blog",
  ],
  Resources: [
    "Case Studies",
    "Documentation",
    "API Reference",
    "Status Page",
    "Security",
    "Compliance",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Data Processing",
    "SLA Terms",
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

      {/* Newsletter CTA */}
      <div className="border-b border-[var(--color-border)]">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h3 className="font-[var(--font-clash)] text-2xl font-semibold text-[var(--color-text-primary)] md:text-3xl">
                Stay ahead with <GradientText>industry insights</GradientText>
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Get weekly updates on BPO trends, AI automation, and operational excellence.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)]/60 px-4 py-3 font-[var(--font-satoshi)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-all focus:border-[var(--color-accent)]/40"
              />
              <button className="magnetic-btn inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 font-[var(--font-satoshi)] text-sm font-semibold text-[var(--color-bg-primary)] transition-shadow hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Vardhan Versatile Solutions"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Enterprise-grade business process outsourcing powered by AI and human expertise. Scaling operations for global brands since 2018.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                >
                  <span className="text-xs font-semibold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-[var(--font-clash)] text-sm font-semibold text-[var(--color-text-primary)]">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-[var(--font-satoshi)] text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-secondary)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-border)]">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Vardhan Versatile. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((cert) => (
              <span
                key={cert}
                className="rounded-md border border-[var(--color-border)] px-2 py-0.5 text-[9px] font-semibold text-[var(--color-text-muted)]"
              >
                {cert}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
