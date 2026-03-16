import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Narsent | Modern Financial Reporting & Cashflow Management",
    description: "Narsent is a modern financial reporting, AI-powered cashflow management, and autonomous financial reasoning platform for fast-growing businesses.",
    openGraph: {
        title: "Narsent | Modern Financial Reporting & Cashflow Management",
        description: "Narsent is a modern financial reporting, AI-powered cashflow management, and autonomous financial reasoning platform for fast-growing businesses.",
        url: "https://narsent.com",
        siteName: "Narsent Workspace",
        images: [
            {
                url: "https://narsent.com/og-image.webp",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Narsent | Modern Financial Reporting & Cashflow Management",
        description: "Narsent is a modern financial reporting, AI-powered cashflow management, and autonomous financial reasoning platform for fast-growing businesses.",
        images: ["https://narsent.com/og-image.webp"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#E5F33D]/30 selection:text-[#E5F33D]`}
            >
                {children}
            </body>
            <GoogleAnalytics gaId="G-HYK55E1KJH" />
        </html>
    );
}
