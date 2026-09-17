import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "John Doe | Politician Portfolio",
  description:
    "Official portfolio website of John Doe (Demo/Placeholder) — showcasing profile, projects, and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}