"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, SectionHeading, GlowOrb } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Vardhan Versatile transformed our customer operations. We went from 72-hour response times to under 30 seconds, and our CSAT score jumped from 78% to 97%.",
    name: "Sarah Chen",
    title: "VP of Customer Experience",
    company: "TechVault Inc.",
    stars: 5,
  },
  {
    quote: "The AI-augmented support model they deployed is years ahead of what we've seen from other BPO providers. It's like having a co-pilot for every agent.",
    name: "Marcus Williams",
    title: "Chief Operating Officer",
    company: "Meridian Group",
    stars: 5,
  },
  {
    quote: "Scaling from 50 to 500 agents during peak season without any quality drop was something we never thought possible. Vardhan made it seamless.",
    name: "Priya Patel",
    title: "Director of Operations",
    company: "CloudNine Commerce",
    stars: 5,
  },
  {
    quote: "Their technical support team resolved a critical integration issue in 12 minutes that our internal team had been struggling with for weeks. Exceptional talent.",
    name: "James O'Brien",
    title: "CTO",
    company: "DataForge Systems",
    stars: 5,
  },
  {
    quote: "We've partnered with 5 BPO companies over the past decade. Vardhan is the only one that feels like an actual extension of our team, not a vendor.",
    name: "Aisha Johnson",
    title: "Head of Global Support",
    company: "NovaCorp",
    stars: 5,
  },
  {
    quote: "The compliance and security standards they maintain are exceptional. SOC 2, GDPR, HIPAA — all handled proactively. That kind of trust is invaluable.",
    name: "Robert Kim",
    title: "VP of Compliance",
    company: "Pinnacle Financial",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-36" ref={ref}>
      <GlowOrb color="secondary" size={500} top="20%" right="-10%" />
      <GlowOrb color="accent" size={350} bottom="10%" left="5%" />

      <Container className="relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the enterprises that trust us with their most critical operations."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItemVariants}
              className="glass group relative overflow-hidden p-6 md:p-8 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-[var(--color-accent)]/20" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 font-[var(--font-satoshi)] text-sm leading-relaxed text-[var(--color-text-secondary)]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-secondary)]/20">
                  <span className="font-[var(--font-clash)] text-sm font-semibold text-[var(--color-accent)]">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-[var(--font-satoshi)] text-sm font-medium text-[var(--color-text-primary)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
