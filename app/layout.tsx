import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HRMDO Portal",
  description: "Unified Human Resource Management and Development Office portal",
  icons: {
    icon: { url: "/hrmdo-favicon.png", type: "image/png" },
    apple: "/hrmdo-logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
