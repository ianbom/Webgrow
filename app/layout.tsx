import type { Metadata, Viewport } from "next";
import { DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = DM_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = { title: "Aceternity — Design and Development Agency", description: "A productized design and development agency for fast-moving companies.", openGraph: { title: "Aceternity", description: "Design and development that drives results." } };
export const viewport: Viewport = { themeColor: "#efeeeb", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${mono.variable}`}><body>{children}</body></html>;
}
