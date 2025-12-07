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
    languages: {
      "en-US": "https://nathanrael.vercel.app/en",
      "fr-FR": "https://nathanrael.vercel.app/fr",
    },
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
  return (
    <html lang="en" className={"dark"}>
      <body
        className={`bg-background-100  text-white-100  scroll-smooth antialiased h-full ${schibsetGrotesk.variable} ${schibsetGrotesk.className}`}
      >
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
