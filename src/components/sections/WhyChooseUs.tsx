"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, SectionHeading, AnimatedCounter, GlowOrb } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { Zap, Shield, Globe, Clock, Award, HeartHandshake, TrendingUp, Lock } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: 50,
    suffix: "M+",
    label: "Customer Interactions",
    description: "Processed annually across all channels",
    color: "#00E5FF",
  },
  {
    icon: HeartHandshake,
    value: 500,
    suffix: "+",
    label: "Trained Agents",
    description: "Certified, multilingual professionals",
    color: "#7C3AED",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Global Coverage",
    description: "Continuous operations, zero downtime",
    color: "#14F195",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently exceeding SLA benchmarks",
    color: "#00E5FF",
  },
];

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II, ISO 27001 certified. GDPR and HIPAA compliant infrastructure.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Operations across 6 continents with 15+ delivery centers worldwide.",
  },
  {
    icon: TrendingUp,
    title: "AI-Augmented Workforce",
    description: "Proprietary AI copilots that boost agent productivity by 40%.",
  },
  {
    icon: Lock,
    title: "Guaranteed Uptime",
    description: "99.99% SLA-backed uptime with redundant infrastructure and disaster recovery.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="relative py-28 md:py-36" ref={ref}>
      <GlowOrb color="accent" size={500} top="10%" right="0%" />
      <GlowOrb color="highlight" size={400} bottom="20%" left="-5%" />

      {/* Subtle grid pattern */}
      <div className="grid-pattern absolute inset-0 opacity-50" />

      <Container className="relative z-10">
        <SectionHeading
          label="Why Choose Us"
          title="The Numbers Speak For Themselves"
          description="We don't just process — we optimize, innovate, and deliver measurable business outcomes."
        />

        {/* Stats Grid */}
        <motion.div
          className="mb-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={staggerItemVariants}
                className="glass group relative overflow-hidden p-6 text-center md:p-8"
              >
                {/* Top glow */}
                <div
                  className="absolute inset-x-0 -top-1 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
                />

                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${stat.color}12`, color: stat.color }}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <p className="font-[var(--font-clash)] text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2.5} />
                </p>

                <p className="mt-2 font-[var(--font-clash)] text-base font-medium text-[var(--color-text-primary)]">
                  {stat.label}
                </p>

                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItemVariants}
                className="glass flex items-start gap-5 p-6 md:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-[var(--font-clash)] text-lg font-semibold text-[var(--color-text-primary)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 font-[var(--font-satoshi)] text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
