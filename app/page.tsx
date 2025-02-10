import Image from "next/image";
import Link from "next/link";

const links = [
  { text: "Quiero ser socio/a", href: "https://forms.gle/fsm1AcU1HZXCcpEYA" },
  { text: "Cuotas sociales", href: "/cuotas", },
  { text: "Pádel - Canchas disponibles", href: "https://docs.google.com/spreadsheets/d/1KTszTIHBF8oXamvIDhRncWm5IilGSbHHJt9jZZZSiBs" },
  { text: "Pádel - Ranking damas", href: "https://comova.ar/2" },
  { text: "Pádel - Ranking caballeros", href: "https://comova.ar/1" },
];

export default function Home() {
  return (
    <div
      className="fondo-pagina grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-4 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundImage: "url('https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/clubsocial/fondo_social.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src="/escudo_social.svg"
          alt="Escudo Club Social"
          width={150}
          height={150}
          priority
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href || '#'}
              className="bg-red-600 text-white p-6 rounded-lg text-center hover:bg-blue-500 md:active:bg-red-600 active:bg-blue-500"
              rel="noopener noreferrer"
              target={link.href?.includes('https://') ? '_blank' : ''}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 font-bold text-white md:text-blue-800 flex-wrap items-center justify-center">
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
      </footer>
    </div>
  );
}
