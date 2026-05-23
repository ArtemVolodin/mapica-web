import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mapica — AI-Powered Mobile Product Studio",
  description:
    "Mapica designs and launches iPhone, Android and web products using AI, Flutter, Figma and modern automation workflows.",
  keywords: [
    "AI apps",
    "mobile development",
    "Flutter",
    "startup MVP",
    "AI agents",
  ],
  openGraph: {
    title: "Mapica — AI-Powered Mobile Product Studio",
    description:
      "We build AI-powered mobile products. From idea to App Store in weeks.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
