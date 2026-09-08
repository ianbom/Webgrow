import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import "./hero-reference.css";
import "./projects-reference.css";
import "./projects-reference-responsive.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-tight" });

export const metadata: Metadata = { title: "Webgrow — Jasa Pembuatan Website & Web Application", description: "Software house yang membantu bisnis membangun website, e-commerce, dan aplikasi web yang modern, cepat, scalable, dan sesuai kebutuhan.", openGraph: { title: "Webgrow", description: "Website dan aplikasi web yang bekerja untuk bisnis Anda." } };
export const viewport: Viewport = { themeColor: "#F2F5EC", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" className={`${inter.variable} ${interTight.variable}`}><body>{children}</body></html>;
}
