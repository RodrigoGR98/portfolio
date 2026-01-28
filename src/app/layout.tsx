import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Rodrigo Portfolio",
  description: "Portfolio pessoal de Rodrigo Gonçalves Ribeiro",
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
