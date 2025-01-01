import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";
import {SanityLive} from "@/sanity/lib/live";
import ReactQueryProvider from "@/context/ReactQueryProvider";
import { Analytics } from "@vercel/analytics/react"

const schibsetGrotesk = localFont({
    src: [
        {
            path: '/fonts/SchibstedGrotesk-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '/fonts/SchibstedGrotesk-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '/fonts/SchibstedGrotesk-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '/fonts/SchibstedGrotesk-Bold.ttf',
            weight: '700',
            style: 'normal',
        }
    ],
    variable: '--font-schibstedGrotesk'
})

export const metadata: Metadata = {
    title: "Rael Protfolio",
    description: "A portfolio to showcase my realisations",
};




export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`bg-neutral-dark-100 text-white-100 px-[64px] py-6 max-md:px-10 max-sm:px-2 scroll-smooth overflow-x-hidden antialiased h-full ${schibsetGrotesk.variable}`}
        >
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
        <Analytics/>
        <SanityLive/>
        </body>
        </html>
    );
}
