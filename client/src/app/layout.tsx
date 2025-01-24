import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Lora } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Com",
  description: "Crafted by PearlWaveLabs",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
    </>
  );
}
