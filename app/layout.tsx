import type { Metadata } from "next";
import "./globals.css";
import { product } from "./product";

export const metadata: Metadata = {
  title: `${product.name} — Record now. Coach later.`,
  description:
    "A reviewer-focused product prototype for an AI-assisted Teamfight Tactics post-game coaching app.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
