import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaida Dashboard",
  description: "This is not a real jaida dashboard",
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
