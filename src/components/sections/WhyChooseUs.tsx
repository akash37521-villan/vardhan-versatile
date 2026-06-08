"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, SectionHeading, AnimatedCounter, GlowOrb } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { Zap, Shield, Globe, Clock, Award, HeartHandshake, TrendingUp, Lock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Specializing in US GAAP & tax preparation",
    color: "#00E5FF",
  },
  {
    icon: Shield,
    value: 99,
    suffix: ".9%",
    label: "Accuracy Rate",
    description: "Meticulous attention to accounting standards",
    color: "#7C3AED",
  },
  {
    icon: Globe,
    value: 3,
    suffix: "",
    label: "Continents Served",
    description: "Global client references and trust",
    color: "#14F195",
  },
  {
    icon: Zap,
    value: 100,
    suffix: "%",
    label: "Remote Setup",
    description: "Secure remote infrastructure active since 2018",
    color: "#00E5FF",
  },
];

const features = [
  {
    icon: Globe,
    title: "Regional Compliance",
    description: "Deep expertise in US, Canadian, Australian, and New Zealand accounting standards.",
  },
  {
    icon: Zap,
    title: "Tax & Payroll",
    description: "Specialized in US 1040s (TurboTax) and full-cycle payroll via ADP and Gusto.",
  },
  {
    icon: Shield,
    title: "Software Stack",
    description: "Power user of NetSuite (ERP), QuickBooks, Xero, and MYOB.",
  },
  {
    icon: Award,
    title: "Industry Niche",
    description: "Proven track record in Real Estate, IT, Logistics, and Restaurant accounting.",
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
          label="The Trust Factor"
          title="Secure, Remote & Deadline-Driven"
          description="I have been working 100% remotely since 2018—long before it was the norm. I have the infrastructure, security protocols, and references from three continents to ensure your client data is safe and your deadlines are met."
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
