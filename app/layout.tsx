import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Red Ride Ticket",
  description: "A venture execution studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
