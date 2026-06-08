"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, MagneticButton, GlowOrb, AnimatedCounter, GradientText } from "@/components/ui";
import { ArrowRight, Play, TrendingUp, Users, Headphones, Globe } from "lucide-react";
import { heroTextVariants } from "@/lib/animations";
import Image from "next/image";

/* ===== Floating KPI Card ===== */
function KpiCard({
  icon: Icon,
  label,
  value,
  suffix,
  color,
  delay,
  className = "",
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix: string;
  color: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`glass animate-float-slow p-4 md:p-5 shadow-lg shadow-black/5 ${className}`}
      style={{ animationDelay: `${delay * 2}s` }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}15`, color }}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="font-[var(--font-clash)] text-xl font-semibold text-[var(--color-text-primary)] md:text-2xl">
            <AnimatedCounter target={value} suffix={suffix} />
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ===== World Map SVG ===== */
function WorldMapDots() {
  const dots = [
    { cx: 150, cy: 100 },
    { cx: 340, cy: 95 },
    { cx: 370, cy: 120 },
    { cx: 430, cy: 115 },
    { cx: 490, cy: 130 },
    { cx: 520, cy: 100 },
    { cx: 200, cy: 80 },
    { cx: 350, cy: 140 },
    { cx: 530, cy: 160 },
    { cx: 100, cy: 120 },
    { cx: 320, cy: 80 },
    { cx: 450, cy: 100 },
  ];

  return (
    <svg viewBox="0 0 640 240" className="w-full opacity-40" aria-hidden="true">
      {dots.map((dot, i) =>
        dots.slice(i + 1).map((dot2, j) => {
          const dist = Math.sqrt(Math.pow(dot.cx - dot2.cx, 2) + Math.pow(dot.cy - dot2.cy, 2));
          if (dist < 180) {
            return (
              <line key={`${i}-${j}`} x1={dot.cx} y1={dot.cy} x2={dot2.cx} y2={dot2.cy} stroke="rgba(14,165,160,0.1)" strokeWidth="0.5" />
            );
          }
          return null;
        })
      )}
      {dots.map((dot, i) => (
        <g key={i}>
          <circle cx={dot.cx} cy={dot.cy} r="6" fill="rgba(14,165,160,0.06)" />
          <circle cx={dot.cx} cy={dot.cy} r="3" fill="rgba(14,165,160,0.2)" />
          <circle cx={dot.cx} cy={dot.cy} r="1.5" fill="#0EA5A0" className="dot-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
        </g>
      ))}
    </svg>
  );
}

/* ===== Mini Dashboard Preview ===== */
function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative mx-auto mt-16 max-w-5xl md:mt-20"
    >
      <div className="glass-strong glow-border overflow-hidden p-1">
        <div className="rounded-[20px] bg-white p-6 md:p-8 border border-[var(--color-border)]">
          {/* Top bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[var(--color-bg-surface)] px-3 py-1.5">
              <div className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span className="text-xs text-[var(--color-text-muted)]">Live Dashboard</span>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Active Agents", value: "523", change: "+12%", color: "var(--color-accent)" },
              { label: "Calls Today", value: "12,847", change: "+8.3%", color: "var(--color-highlight)" },
              { label: "Avg Response", value: "1.2s", change: "-23%", color: "var(--color-secondary)" },
              { label: "CSAT Score", value: "98.2%", change: "+2.1%", color: "var(--color-accent)" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-[var(--color-bg-surface)] p-4">
                <p className="text-xs text-[var(--color-text-muted)]">{stat.label}</p>
                <p className="mt-1 font-[var(--font-clash)] text-2xl font-semibold text-[var(--color-text-primary)]">{stat.value}</p>
                <p className="mt-1 text-xs font-medium" style={{ color: stat.color }}>{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mt-6 rounded-xl bg-[var(--color-bg-surface)] p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-[var(--color-text-muted)]">Performance Overview</span>
              <span className="text-xs text-[var(--color-accent)]">Last 30 Days</span>
            </div>
            <div className="flex items-end gap-1 h-24">
              {[40, 55, 45, 65, 50, 75, 60, 80, 70, 85, 65, 90, 75, 95, 80, 88, 82, 92, 78, 96, 85, 93, 88, 97].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 1 + i * 0.05 }}
                  className="flex-1 rounded-t-sm"
                  style={{
                    background: `linear-gradient(to top, var(--color-accent), ${i % 3 === 0 ? 'var(--color-secondary)' : 'var(--color-accent)'})`,
                    opacity: 0.4 + (h / 100) * 0.6,
                  }}
                />
              ))}
            </div>
          </div>

          {/* World map */}
          <div className="mt-6">
            <WorldMapDots />
          </div>
        </div>
      </div>

      {/* Floating KPI cards */}
      <div className="hidden md:block">
        <div className="absolute -left-16 top-12">
          <KpiCard icon={Users} label="Active Agents" value={523} suffix="+" color="#0EA5A0" delay={1.2} />
        </div>
        <div className="absolute -right-16 top-24">
          <KpiCard icon={TrendingUp} label="Uptime" value={99} suffix=".9%" color="#14B8A6" delay={1.4} />
        </div>
        <div className="absolute -left-8 bottom-24">
          <KpiCard icon={Headphones} label="Calls/Hour" value={847} suffix="" color="#1B365D" delay={1.6} />
        </div>
        <div className="absolute -right-8 bottom-16">
          <KpiCard icon={Globe} label="Countries" value={50} suffix="+" color="#0EA5A0" delay={1.8} />
        </div>
      </div>
    </motion.div>
  );
}

/* ===== Hero Section ===== */
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32"
    >
      <div className="grid-pattern absolute inset-0" />
      <GlowOrb color="accent" size={600} top="-10%" left="20%" />
      <GlowOrb color="secondary" size={500} top="30%" right="-5%" />
      <GlowOrb color="highlight" size={300} bottom="10%" left="10%" />

      <Container className="relative z-10">
        {/* Logo above headline */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={heroTextVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <Image
            src="/logo.png"
            alt="Vardhan Versatile Solutions"
            width={200}
            height={70}
            className="h-20 w-auto object-contain md:h-24"
            priority
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={heroTextVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.1}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="font-[var(--font-satoshi)] text-xs font-medium text-[var(--color-text-secondary)]">
              Now serving 50M+ customer interactions annually
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mx-auto max-w-5xl text-center font-[var(--font-clash)] text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
          variants={heroTextVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.15}
        >
          Scaling Customer Operations{" "}
          <GradientText>For Global Brands</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center font-[var(--font-satoshi)] text-lg leading-relaxed text-[var(--color-text-secondary)] md:mt-8 md:text-xl"
          variants={heroTextVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.3}
        >
          Enterprise outsourcing powered by AI and human expertise. We deliver
          measurable results for the world&apos;s most demanding companies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12"
          variants={heroTextVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.45}
        >
          <MagneticButton variant="primary" size="large" href="#contact">
            Get Started <ArrowRight className="h-5 w-5" />
          </MagneticButton>
          <MagneticButton variant="secondary" size="large" href="#case-studies">
            <Play className="h-4 w-4" /> View Case Studies
          </MagneticButton>
        </motion.div>

        <DashboardPreview />
      </Container>
    </section>
  );
}
