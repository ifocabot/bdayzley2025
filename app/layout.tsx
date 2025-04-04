import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galeri Ulang Tahun",
  description: "Galeri foto untuk merayakan ulang tahun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <Head>
        <title>Test Title</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
