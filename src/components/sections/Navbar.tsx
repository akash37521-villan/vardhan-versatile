"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, MagneticButton } from "@/components/ui";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Global", href: "#global" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 shadow-lg shadow-black/5 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between" aria-label="Main navigation">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="Vardhan Versatile Solutions"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2 font-[var(--font-satoshi)] text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-bg-surface)] hover:text-[var(--color-text-primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <MagneticButton variant="ghost" size="default">
                Log In
              </MagneticButton>
              <MagneticButton variant="primary" size="default" href="#contact">
                Get Started <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden"
          >
            <Container className="flex h-full flex-col justify-center">
              <div className="mb-10 flex justify-center">
                <Image src="/logo.png" alt="Vardhan Versatile Solutions" width={200} height={60} className="h-16 w-auto" />
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="rounded-2xl px-6 py-5 font-[var(--font-clash)] text-3xl font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-surface)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-col gap-3"
              >
                <MagneticButton variant="primary" size="large" href="#contact">
                  Get Started <ArrowRight className="h-5 w-5" />
                </MagneticButton>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
