import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boyce Consulting - Pushing the Needle",
  description: "Moving campaigns forward with strategic digital marketing, voter contact, and training services across Canada.",
  icons: {
    icon: '/favicon.svg',
  },
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
