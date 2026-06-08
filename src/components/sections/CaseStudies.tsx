"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, SectionHeading, GlowOrb } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { ArrowUpRight, TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    industry: "FinTech",
    company: "Leading Digital Bank",
    challenge: "Scaling customer support from 2K to 50K daily interactions while maintaining CSAT above 95%.",
    results: [
      { icon: TrendingUp, label: "CSAT Improvement", value: "+23%" },
      { icon: Clock, label: "Response Time", value: "-67%" },
      { icon: Users, label: "Agents Deployed", value: "120+" },
    ],
    gradient: "from-[#00E5FF]/20 to-[#7C3AED]/20",
    accentColor: "#00E5FF",
    tags: ["Customer Support", "AI Chatbot", "24/7 Coverage"],
  },
  {
    industry: "E-Commerce",
    company: "Global Marketplace Platform",
    challenge: "Managing peak-season volume spikes of 300% while reducing operational costs by 40%.",
    results: [
      { icon: TrendingUp, label: "Cost Reduction", value: "42%" },
      { icon: Clock, label: "Handling Time", value: "-35%" },
      { icon: Users, label: "Peak Agents", value: "200+" },
    ],
    gradient: "from-[#7C3AED]/20 to-[#14F195]/20",
    accentColor: "#7C3AED",
    tags: ["Seasonal Scaling", "Back Office", "Multi-language"],
  },
  {
    industry: "SaaS",
    company: "Enterprise Software Provider",
    challenge: "Building a world-class technical support team with L1-L3 capabilities across 12 time zones.",
    results: [
      { icon: TrendingUp, label: "Resolution Rate", value: "99.2%" },
      { icon: Clock, label: "First Response", value: "<30s" },
      { icon: Users, label: "Certified Engineers", value: "85+" },
    ],
    gradient: "from-[#14F195]/20 to-[#00E5FF]/20",
    accentColor: "#14F195",
    tags: ["Technical Support", "SLA Management", "Knowledge Base"],
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" className="relative py-28 md:py-36" ref={ref}>
      <GlowOrb color="accent" size={400} top="30%" left="-10%" />

      <Container className="relative z-10">
        <SectionHeading
          label="Case Studies"
          title="Proven Results, Real Impact"
          description="See how we've helped global enterprises transform their operations and achieve breakthrough performance."
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.industry}
              variants={staggerItemVariants}
              className="glass group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${study.gradient}`}
              />

              <div className="p-6 md:p-8">
                {/* Industry badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: `${study.accentColor}15`,
                      color: study.accentColor,
                    }}
                  >
                    {study.industry}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-[var(--color-text-muted)] transition-all duration-300 group-hover:text-[var(--color-accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Company */}
                <h3 className="mb-3 font-[var(--font-clash)] text-xl font-semibold text-[var(--color-text-primary)]">
                  {study.company}
                </h3>

                {/* Challenge */}
                <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {study.challenge}
                </p>

                {/* Results */}
                <div className="mb-6 space-y-3">
                  {study.results.map((result) => {
                    const Icon = result.icon;
                    return (
                      <div
                        key={result.label}
                        className="flex items-center justify-between rounded-xl bg-[var(--color-bg-primary)]/60 px-4 py-3"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[var(--color-text-muted)]" />
                          <span className="text-xs text-[var(--color-text-secondary)]">{result.label}</span>
                        </div>
                        <span
                          className="font-[var(--font-clash)] text-sm font-semibold"
                          style={{ color: study.accentColor }}
                        >
                          {result.value}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[10px] text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
