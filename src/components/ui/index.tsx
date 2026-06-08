"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

/* ===== Container ===== */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/* ===== Section Heading ===== */
export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {label && (
        <motion.span
          className="mb-4 inline-block rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-4 py-1.5 font-[var(--font-satoshi)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
          }}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        className="font-[var(--font-clash)] text-3xl font-semibold leading-tight text-[var(--color-text-primary)] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
        variants={{
          hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] } },
        }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={`mt-5 font-[var(--font-satoshi)] text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ===== Glass Card ===== */
export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}) {
  return (
    <div
      className={`glass ${hover ? "service-card" : ""} ${glow ? "glow-accent" : ""} p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

/* ===== Magnetic Button ===== */
export function MagneticButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  href,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(buttonRef.current, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  const baseClasses = `magnetic-btn inline-flex items-center justify-center gap-2 font-[var(--font-satoshi)] font-medium transition-all duration-300 cursor-pointer ${
    size === "large" ? "px-8 py-4 text-base rounded-2xl" : "px-6 py-3 text-sm rounded-xl"
  }`;

  const variantClasses = {
    primary:
      "bg-[var(--color-secondary)] text-white hover:shadow-[0_4px_20px_rgba(27,54,93,0.3)] font-semibold",
    secondary:
      "border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-surface)]",
    ghost:
      "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={combinedClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={combinedClasses}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

/* ===== Animated Counter ===== */
export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const counterRef = useRef({ value: 0 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated && ref.current) {
      setHasAnimated(true);
      gsap.to(counterRef.current, {
        value: target,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(counterRef.current.value).toLocaleString()}${suffix}`;
          }
        },
      });
    }
  }, [isInView, hasAnimated, target, suffix, prefix, duration]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

/* ===== Gradient Text ===== */
export function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`gradient-text ${className}`}>{children}</span>;
}

/* ===== Glow Orb ===== */
export function GlowOrb({
  color = "accent",
  size = 400,
  top,
  left,
  right,
  bottom,
  className = "",
}: {
  color?: "accent" | "secondary" | "highlight";
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className?: string;
}) {
  return (
    <div
      className={`glow-orb glow-orb-${color} animate-pulse-glow ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
    />
  );
}

/* ===== Infinite Logo Marquee ===== */
export function InfiniteMarquee({
  items,
  speed = 30,
}: {
  items: string[];
  speed?: number;
}) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
      <div
        className="animate-marquee flex items-center gap-16 whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-[var(--font-clash)] text-xl font-medium text-[var(--color-text-muted)]/60 transition-colors hover:text-[var(--color-text-secondary)] md:text-2xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]/40" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
