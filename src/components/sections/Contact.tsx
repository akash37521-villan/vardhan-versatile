"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Container, SectionHeading, MagneticButton, GlowOrb } from "@/components/ui";
import { fadeUpVariants } from "@/lib/animations";
import { Send, Calendar, Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Customer Support",
  "Inbound/Outbound Calls",
  "Lead Generation",
  "Virtual Assistance",
  "Technical Support",
  "Back Office Operations",
  "Data Entry",
  "AI-Powered Support",
  "Email & Chat Support",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36" ref={ref}>
      <GlowOrb color="accent" size={500} top="20%" right="-10%" />
      <GlowOrb color="secondary" size={400} bottom="10%" left="10%" />

      <Container className="relative z-10">
        <SectionHeading
          label="Get In Touch"
          title="Ready To Scale Your Operations?"
          description="Let's discuss how Vardhan Versatile can transform your business operations. Get a custom proposal within 24 hours."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
          >
            <div className="glass-strong glow-border p-6 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-highlight)]/10">
                    <CheckCircle2 className="h-8 w-8 text-[var(--color-highlight)]" />
                  </div>
                  <h3 className="mb-2 font-[var(--font-clash)] text-2xl font-semibold text-[var(--color-text-primary)]">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    We&apos;ll get back to you within 24 hours with a custom proposal.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-xs font-medium text-[var(--color-text-muted)]">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)]/60 px-4 py-3 font-[var(--font-satoshi)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-all duration-200 focus:border-[var(--color-accent)]/40 focus:ring-1 focus:ring-[var(--color-accent)]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-xs font-medium text-[var(--color-text-muted)]">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)]/60 px-4 py-3 font-[var(--font-satoshi)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-all duration-200 focus:border-[var(--color-accent)]/40 focus:ring-1 focus:ring-[var(--color-accent)]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="mb-2 block text-xs font-medium text-[var(--color-text-muted)]">
                      Company Name *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      placeholder="Company Inc."
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)]/60 px-4 py-3 font-[var(--font-satoshi)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-all duration-200 focus:border-[var(--color-accent)]/40 focus:ring-1 focus:ring-[var(--color-accent)]/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="mb-2 block text-xs font-medium text-[var(--color-text-muted)]">
                      Service Interest *
                    </label>
                    <select
                      id="contact-service"
                      required
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)]/60 px-4 py-3 font-[var(--font-satoshi)] text-sm text-[var(--color-text-primary)] outline-none transition-all duration-200 focus:border-[var(--color-accent)]/40 focus:ring-1 focus:ring-[var(--color-accent)]/20"
                    >
                      <option value="" className="bg-[var(--color-bg-surface)]">Select a service</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service} className="bg-[var(--color-bg-surface)]">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-xs font-medium text-[var(--color-text-muted)]">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell us about your project and requirements..."
                      className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)]/60 px-4 py-3 font-[var(--font-satoshi)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-all duration-200 focus:border-[var(--color-accent)]/40 focus:ring-1 focus:ring-[var(--color-accent)]/20"
                    />
                  </div>

                  <MagneticButton variant="primary" size="large" className="w-full">
                    <Send className="h-4 w-4" />
                    Send Message
                  </MagneticButton>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            className="space-y-6 lg:col-span-2"
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3}
          >
            {/* Calendly placeholder */}
            <div className="glass p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-[var(--font-clash)] text-base font-semibold text-[var(--color-text-primary)]">
                    Book a Discovery Call
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">30-minute consultation</p>
                </div>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Schedule a call with our solutions team to discuss your specific requirements and get a custom proposal.
              </p>
              <MagneticButton variant="secondary" className="w-full">
                Schedule Call <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "vardhanversatile@gmail.com", href: "mailto:vardhanversatile@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 7018703476", href: "tel:+917018703476" },
                { icon: MapPin, label: "Headquarters", value: "Himachal Pradesh, Solan, Shamti", href: "https://maps.google.com/?q=Shamti,+Solan,+Himachal+Pradesh" },
              ].map((info) => {
                const Icon = info.icon;
                const innerContent = (
                  <>
                    <p className="text-xs text-[var(--color-text-muted)]">{info.label}</p>
                    <p className="font-[var(--font-satoshi)] text-sm font-medium text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                      {info.value}
                    </p>
                  </>
                );
                return (
                  <div key={info.label} className="glass group flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      {info.href ? (
                        <a href={info.href} className="block">
                          {innerContent}
                        </a>
                      ) : (
                        innerContent
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust badges */}
            <div className="glass p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
                Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"].map((cert) => (
                  <span
                    key={cert}
                    className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)]/60 px-3 py-1.5 text-[10px] font-semibold text-[var(--color-accent)]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
