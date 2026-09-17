import type { Metadata } from "next";
import ServicesSection from "@/sections/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover the services Natanaël RALAIVOAVY offers: full-stack web apps, AI integration, UI/UX prototyping, and performance engineering.",
  alternates: {
    canonical: "https://nathanrael.vercel.app/services",
  },
  openGraph: {
    title: "Services | Natanaël RALAIVOAVY",
    description:
      "Full-stack web apps, AI integration, UI/UX prototyping, and performance engineering.",
    url: "https://nathanrael.vercel.app/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="app-section">
      <ServicesSection />
    </main>
  );
}
