"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, InfiniteMarquee } from "@/components/ui";

const logos = [
  "Accenture",
  "Deloitte",
  "TechVault",
  "Meridian Group",
  "Apex Solutions",
  "CloudNine",
  "DataForge",
  "NovaCorp",
  "Pinnacle AI",
  "Quantum Systems",
  "SkyBridge",
  "Vertex Global",
];

export default function LogoMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center font-[var(--font-satoshi)] text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
        >
          Trusted by industry leaders worldwide
        </motion.p>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <InfiniteMarquee items={logos} speed={35} />
      </motion.div>
    </section>
  );
}
