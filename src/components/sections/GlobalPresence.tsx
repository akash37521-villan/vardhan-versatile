"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, SectionHeading, AnimatedCounter, GlowOrb } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { MapPin } from "lucide-react";

const offices = [
  { city: "New York", country: "USA", x: 24, y: 35, agents: 120, timezone: "EST" },
  { city: "London", country: "UK", x: 47, y: 28, agents: 85, timezone: "GMT" },
  { city: "Dubai", country: "UAE", x: 58, y: 40, agents: 65, timezone: "GST" },
  { city: "Mumbai", country: "India", x: 65, y: 42, agents: 180, timezone: "IST" },
  { city: "Manila", country: "Philippines", x: 78, y: 48, agents: 150, timezone: "PHT" },
  { city: "Sydney", country: "Australia", x: 83, y: 72, agents: 45, timezone: "AEST" },
  { city: "Toronto", country: "Canada", x: 22, y: 28, agents: 55, timezone: "EST" },
  { city: "São Paulo", country: "Brazil", x: 30, y: 65, agents: 40, timezone: "BRT" },
];

const globalStats = [
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 15, suffix: "", label: "Delivery Centers" },
  { value: 8, suffix: "", label: "Time Zones Covered" },
  { value: 25, suffix: "+", label: "Languages Supported" },
];

export default function GlobalPresence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="global" className="relative py-28 md:py-36" ref={ref}>
      <GlowOrb color="accent" size={500} top="10%" left="30%" />

      <Container className="relative z-10">
        <SectionHeading
          label="Global Presence"
          title="Wherever Your Customers Are, We Are"
          description="Our strategically positioned delivery centers ensure 24/7 coverage with local expertise and global standards."
        />

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-subtle relative mx-auto mb-20 overflow-hidden p-8 md:p-12"
        >
          <div className="relative aspect-[2/1]">
            {/* Grid background */}
            <div className="grid-pattern absolute inset-0 opacity-30" />

            {/* Simplified world map outline using dots */}
            <svg
              viewBox="0 0 100 50"
              className="absolute inset-0 h-full w-full"
              aria-label="World map showing office locations"
            >
              {/* Subtle continent outlines */}
              <ellipse cx="25" cy="35" rx="12" ry="8" fill="rgba(148,163,184,0.03)" stroke="rgba(148,163,184,0.06)" strokeWidth="0.2" />
              <ellipse cx="48" cy="30" rx="8" ry="10" fill="rgba(148,163,184,0.03)" stroke="rgba(148,163,184,0.06)" strokeWidth="0.2" />
              <ellipse cx="55" cy="28" rx="5" ry="7" fill="rgba(148,163,184,0.03)" stroke="rgba(148,163,184,0.06)" strokeWidth="0.2" />
              <ellipse cx="65" cy="38" rx="8" ry="10" fill="rgba(148,163,184,0.03)" stroke="rgba(148,163,184,0.06)" strokeWidth="0.2" />
              <ellipse cx="80" cy="45" rx="7" ry="6" fill="rgba(148,163,184,0.03)" stroke="rgba(148,163,184,0.06)" strokeWidth="0.2" />
              <ellipse cx="83" cy="68" rx="5" ry="4" fill="rgba(148,163,184,0.03)" stroke="rgba(148,163,184,0.06)" strokeWidth="0.2" />

              {/* Connection lines between offices */}
              {offices.map((office, i) =>
                offices.slice(i + 1).map((office2, j) => (
                  <line
                    key={`line-${i}-${j}`}
                    x1={office.x}
                    y1={office.y}
                    x2={office2.x}
                    y2={office2.y}
                    stroke="rgba(0,229,255,0.06)"
                    strokeWidth="0.15"
                    strokeDasharray="1 1"
                  />
                ))
              )}
            </svg>

            {/* Office dots */}
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group absolute"
                style={{ left: `${office.x}%`, top: `${office.y}%`, transform: "translate(-50%, -50%)" }}
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="h-8 w-8 rounded-full animate-ping"
                    style={{ backgroundColor: "rgba(0,229,255,0.1)", animationDuration: `${3 + i * 0.5}s` }}
                  />
                </div>

                {/* Dot */}
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-[var(--color-accent)]/30" />
                  <div className="absolute h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
                </div>

                {/* Tooltip */}
                <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="glass whitespace-nowrap rounded-xl px-3 py-2 text-center !rounded-lg">
                    <p className="font-[var(--font-clash)] text-xs font-semibold text-[var(--color-text-primary)]">
                      {office.city}
                    </p>
                    <p className="text-[10px] text-[var(--color-text-muted)]">
                      {office.agents} agents · {office.timezone}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Stats */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {globalStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItemVariants}
              className="glass flex items-center gap-4 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-[var(--font-clash)] text-2xl font-bold text-[var(--color-text-primary)]">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
