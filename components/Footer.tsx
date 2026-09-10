import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com/profile.php?id=100070215852582",
    icon: "/icono-facebook-blanco.svg",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/clubsocialdeportivo.mpaz/",
    icon: "/icono-instagram-blanco.svg",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/escudo_social.svg"
            alt="Escudo de Club Social y Deportivo de Máximo Paz"
            width={52}
            height={52}
          />
          <div className="leading-tight">
            <p className="font-display text-lg font-bold uppercase tracking-wide">
              Club Social y Deportivo
            </p>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-white/60">
              Máximo Paz
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-red"
            >
              <Image src={social.icon} alt="" width={22} height={22} />
            </a>
          ))}
        </div>

        <nav className="flex gap-6 font-display text-sm font-semibold uppercase tracking-widest text-white/70">
          <Link href="/" className="transition hover:text-white">
            Inicio
          </Link>
          <Link href="/actividades" className="transition hover:text-white">
            Actividades
          </Link>
          <Link href="/cuotas" className="transition hover:text-white">
            Cuotas
          </Link>
        </nav>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Club Social y Deportivo de Máximo Paz
      </div>
    </footer>
  );
}
