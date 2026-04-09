import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistem Peminjaman Ruang Kelas — DSA Project",
  description: "Algoritma Queue, Stack & Linked List — Fakultas Teknik UGM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}