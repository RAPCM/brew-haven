import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Brew Haven - Specialty Coffee Shop",
  description:
    "Where every cup tells a story. Discover our specialty coffee and cozy atmosphere.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lato.className} bg-background text-foreground antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
