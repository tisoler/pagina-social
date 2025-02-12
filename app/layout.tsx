import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club Social - Oficial",
  description: "Web oficial del Club Social y Deportivo de Máximo Paz",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className={`fondo-pagina min-h-screen grid justify-items-center px-4 font-[family-name:var(--font-geist-sans)]`}
          style={{
            backgroundImage: "url('https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/clubsocial/fondo_social.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <main className="flex flex-col items-center w-full h-full">
            <Image
              className="mt-4"
              src="/escudo_social.svg"
              alt="Escudo Club Social"
              width={120}
              height={120}
              priority
            />
            {children}
          </main>
          <footer className={`flex flex-col min-h-24 w-full gap-4 font-bold text-white md:text-blue-800 flex-wrap items-center justify-center h-full`}>
            <hr className="w-5/12"></hr>
            <div className="flex justify-around md:justify-center md:gap-10 w-10/12">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://facebook.com/profile.php?id=100070215852582"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/icono-facebook.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
                Facebook
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://instagram.com/clubsocialdeportivo.mpaz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/icono-instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
                Instagram
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
