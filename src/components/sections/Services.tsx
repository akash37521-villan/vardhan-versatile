"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, SectionHeading, GlowOrb } from "@/components/ui";
import {
  Headphones,
  PhoneCall,
  Target,
  UserCheck,
  Monitor,
  FileText,
  Database,
  Bot,
  MessageSquare,
  Calculator,
} from "lucide-react";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const services = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 omnichannel support with AI-powered routing and real-time sentiment analysis across voice, chat, and email.",
    color: "#00E5FF",
  },
  {
    icon: PhoneCall,
    title: "Inbound/Outbound Calls",
    description: "High-volume call operations with predictive dialing, intelligent queuing, and multilingual agent teams.",
    color: "#7C3AED",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Data-driven prospecting and qualification pipelines that deliver marketing-qualified leads at scale.",
    color: "#14F195",
  },
  {
    icon: UserCheck,
    title: "Virtual Assistance",
    description: "Dedicated virtual assistants for executive support, calendar management, and administrative operations.",
    color: "#00E5FF",
  },
  {
    icon: Monitor,
    title: "Technical Support",
    description: "Tiered technical support from L1 through L3 with certified engineers and 99.9% resolution rates.",
    color: "#7C3AED",
  },
  {
    icon: FileText,
    title: "Back Office Operations",
    description: "Streamlined back-office processing including invoicing, compliance, HR operations, and document management.",
    color: "#14F195",
  },
  {
    icon: Database,
    title: "Data Entry & Processing",
    description: "High-accuracy data entry, extraction, and transformation services with automated quality assurance.",
    color: "#00E5FF",
  },
  {
    icon: Bot,
    title: "AI-Powered Support",
    description: "Custom AI chatbots and copilots that handle 60% of queries autonomously while seamlessly escalating to humans.",
    color: "#7C3AED",
  },
  {
    icon: MessageSquare,
    title: "Email & Chat Support",
    description: "Managed email and live chat operations with sub-60-second response times and intelligent auto-responses.",
    color: "#14F195",
  },
  {
    icon: Calculator,
    title: "Taxation & Accounting",
    description: "Comprehensive bookkeeping, tax compliance, payroll processing, and financial reporting managed by financial experts.",
    color: "#00E5FF",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-28 md:py-36" ref={ref}>
      <GlowOrb color="secondary" size={500} top="20%" left="-10%" />
      <GlowOrb color="accent" size={400} bottom="10%" right="-5%" />

      <Container className="relative z-10">
        <SectionHeading
          label="Our Services"
          title="Enterprise-Grade Solutions Across Every Touchpoint"
          description="From frontline customer engagement to complex back-office operations, we deliver measurable outcomes at scale."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={staggerItemVariants}
                className="service-card glass group relative cursor-pointer overflow-hidden p-6 md:p-8"
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-shadow duration-300 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${service.color}12`,
                      color: service.color,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-3 font-[var(--font-clash)] text-lg font-semibold text-[var(--color-text-primary)]">
                    {service.title}
                  </h3>

                  <p className="font-[var(--font-satoshi)] text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-medium transition-colors group-hover:text-[var(--color-accent)]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Learn more
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
