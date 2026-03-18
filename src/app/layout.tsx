import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chef Christian Kabilambali | Fine Dining · Dubai",
  description:
    "Jr. Sous Chef at CHOIX par Pierre Gagnaire & Pierre's TT, Dubai. 8 years of culinary excellence spanning French, Italian, and Pastry arts. City & Guilds accredited double diploma.",
  keywords: [
    "Chef Christian Kabilambali",
    "Fine Dining Dubai",
    "Pierre Gagnaire",
    "CHOIX Dubai",
    "French Chef",
    "Pastry Chef",
    "CK-Unlimited",
  ],
  authors: [{ name: "Christian Kabilambali" }],
  openGraph: {
    title: "Chef Christian Kabilambali",
    description: "Jr. Sous Chef · Fine Dining · Dubai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <LoadingScreen />
        <CustomCursor />
        <NoiseOverlay />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
