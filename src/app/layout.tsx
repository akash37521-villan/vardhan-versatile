import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vardhan Versatile | Enterprise BPO & Business Operations",
  description:
    "Scale your customer operations with AI-powered enterprise outsourcing. 50M+ interactions, 500+ agents, 24/7 global coverage. Customer support, lead generation, technical support, and back office solutions.",
  keywords: [
    "BPO",
    "business process outsourcing",
    "customer support",
    "enterprise operations",
    "AI support",
    "call center",
    "lead generation",
    "technical support",
    "virtual assistance",
    "Vardhan Versatile",
  ],
  openGraph: {
    title: "Vardhan Versatile | Enterprise BPO & Business Operations",
    description:
      "Scale your customer operations with AI-powered enterprise outsourcing. 50M+ interactions, 500+ agents, 24/7 global coverage.",
    type: "website",
    locale: "en_US",
    siteName: "Vardhan Versatile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardhan Versatile | Enterprise BPO & Business Operations",
    description:
      "Scale your customer operations with AI-powered enterprise outsourcing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
