"use client";

import dynamic from "next/dynamic";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import GlobalPresence from "@/components/sections/GlobalPresence";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
        <GlobalPresence />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
