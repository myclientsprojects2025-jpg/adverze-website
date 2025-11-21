import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adverze - Digital That Makes a Difference | Digital Marketing Agency Namakkal",
  description: "Strategic. Creative. Performance-Driven. Adverze is a digital marketing agency based in Namakkal, serving clients across Tamil Nadu with SEO, paid ads, social media marketing, and web development.",
  keywords: "digital marketing, SEO, paid ads, social media marketing, web development, Namakkal, Tamil Nadu, Google Ads, Meta Ads, branding",
  authors: [{ name: "Adverze" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Adverze - Digital That Makes a Difference",
    description: "Strategic. Creative. Performance-Driven digital marketing agency in Namakkal, Tamil Nadu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
