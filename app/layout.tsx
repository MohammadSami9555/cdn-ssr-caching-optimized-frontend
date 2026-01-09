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
  title: "SSR News Dashboard | CDN + Caching Optimized",
  description:
    "A high-performance SSR News Dashboard built with Next.js, optimized using CDN, caching strategies, and image optimization.",
  keywords: [
    "Next.js",
    "SSR",
    "CDN",
    "Caching",
    "Frontend Performance",
    "Web Optimization",
  ],
  authors: [{ name: "Mohammad Sami" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
