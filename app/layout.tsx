import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { SanityLive } from "@/sanity/lib/live";
import ReactQueryProvider from "@/context/ReactQueryProvider";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/sections/Navbar";

const schibsetGrotesk = localFont({
  src: [
    {
      path: "/fonts/SchibstedGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/SchibstedGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/SchibstedGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/SchibstedGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-schibstedGrotesk",
});



export const metadata: Metadata = {
  title: {
    default: "Natanaël RALAIVOAVY",
    template: "%s | Natanaël RALAIVOAVY",
  },
  description: "Frontend and AI integrator developer building performant and intelligent web experiences.",
  keywords: [
    "Frontend developer",
    "AI integrator",
    "Next.js",
    "React",
    "Portfolio",
    "Natanaël RALAIVOAVY",
    "Web developer"
  ],
  metadataBase: new URL("https://nathanrael.vercel.app"),
  generator: "Next.js 16",
  applicationName: "Natanaël RALAIVOAVY Portfolio",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Natanaël RALAIVOAVY", url: "https://nathanrael.vercel.app/" },
  ],
  creator: "Natanaël RALAIVOAVY",
  publisher: "Natanaël RALAIVOAVY",
  openGraph: {
    title: "Natanaël RALAIVOAVY | Frontend & AI Integrator",
    description:
      "Explore the portfolio and work of Natanaël RALAIVOAVY, a frontend and AI integrator developer.",
    url: "https://nathanrael.vercel.app",
    siteName: "Natanaël RALAIVOAVY",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/NathanRael/NathanRael/main/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Natanaël RALAIVOAVY Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  alternates: {
    canonical: "https://nathanrael.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natanaël RALAIVOAVY | Frontend & AI Integrator",
    description:
      "Frontend and AI integrator developer building performant and intelligent web experiences.",
    images: [
      "https://raw.githubusercontent.com/NathanRael/NathanRael/main/portfolio.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Natanaël RALAIVOAVY",
    url: "https://nathanrael.vercel.app",
    image: "https://nathanrael.vercel.app/images/profile-transparent.png",
    jobTitle: "Frontend Developer and AI Integrator",
    sameAs: [
      "https://www.github.com/NathanRael",
      "https://www.linkedin.com/in/natana%C3%ABl-ralaivoavy-694447283",
    ],
    knowsAbout: [
      "Frontend development",
      "AI integration",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
    ],
  };

  return (
    <html lang="en" className={"dark"}>
      <body
        className={`bg-background-100  text-white-100  scroll-smooth antialiased h-full ${schibsetGrotesk.variable} ${schibsetGrotesk.className}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <ReactQueryProvider>
          <div>{children}</div>
        </ReactQueryProvider>
        <Analytics />
        <SanityLive />
      </body>
    </html>
  );
}
