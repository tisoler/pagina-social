import type { Metadata } from "next";
import { Barlow_Condensed, Caveat, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Club Social y Deportivo de Máximo Paz",
    template: "%s | Club Social y Deportivo de Máximo Paz",
  },
  description:
    "Web oficial del Club Social y Deportivo de Máximo Paz: actividades, cuotas y todo lo que necesitás para ser parte del club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${barlow.variable} ${caveat.variable} ${inter.variable} flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
