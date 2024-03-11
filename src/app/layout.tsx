import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KTolliver | Open Source",
  description: "List of open-source projects I have contributed to.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="data:image/jpeg;base64,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" />
      </head>
      <>
        {children}
      </>
    </html>
  );
}
