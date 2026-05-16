import type { Metadata } from "next";
import "./globals.css";
import FloatingCTA from "@/components/floating-cta";

export const metadata: Metadata = {
  metadataBase: new URL("https://redrideticket.vectoros.co"),

  title: "Red Ride Ticket",
  description: "A venture execution studio.",

  openGraph: {
    title: "Red Ride Ticket",
    description: "A venture execution studio.",
    url: "https://redrideticket.vectoros.co",
    siteName: "Red Ride Ticket",
    type: "website",
    images: [
      {
        url: "https://redrideticket.vectoros.co/red-ride-ticket-og.jpg",
        width: 1200,
        height: 630,
        alt: "Red Ride Ticket OG",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Red Ride Ticket",
    description: "A venture execution studio.",
    images: ["https://redrideticket.vectoros.co/red-ride-ticket-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}