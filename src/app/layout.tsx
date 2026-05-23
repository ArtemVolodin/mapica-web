import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollManager } from "@/components/layout/ScrollManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mapica.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mapica — AI-Powered Mobile Product Studio",
  description:
    "Mapica builds AI-powered mobile apps, MVPs, AI agents and automation systems for startups and modern businesses.",
  keywords: [
    "AI mobile apps",
    "AI MVP",
    "Flutter development",
    "AI agents",
    "startup MVP",
    "mobile product studio",
    "OpenAI",
    "Claude",
    "automation",
  ],
  openGraph: {
    title: "Mapica — AI-Powered Mobile Product Studio",
    description:
      "Mapica builds AI-powered mobile apps, MVPs, AI agents and automation systems for startups and modern businesses.",
    siteName: "Mapica",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mapica — AI-Powered Mobile Product Studio",
    description:
      "Mapica builds AI-powered mobile apps, MVPs, AI agents and automation systems for startups and modern businesses.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#030308] text-foreground antialiased">
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}
