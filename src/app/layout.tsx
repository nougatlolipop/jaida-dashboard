import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import MenuContextProvider from "@/context/MenuContext";

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
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
