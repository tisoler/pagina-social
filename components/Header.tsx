"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Actividades", href: "/actividades" },
  { label: "Cuotas", href: "/cuotas" },
];

const SOCIO_URL = "https://forms.gle/fsm1AcU1HZXCcpEYA";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red">
            <Image
              src="/escudo_social.svg"
              alt="Escudo de Club Social y Deportivo de Máximo Paz"
              width={34}
              height={34}
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold uppercase tracking-wide text-brand-navy">
              Club Social
            </span>
            <span className="block font-display text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Máximo Paz
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 font-display text-sm font-semibold uppercase tracking-widest transition ${
                  active
                    ? "bg-brand-red/10 text-brand-red"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SOCIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-3 !px-4 !py-2 text-sm"
          >
            Quiero ser socio/a
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-navy hover:bg-neutral-100 md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-neutral-200 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 font-display text-base font-semibold uppercase tracking-widest text-brand-navy hover:bg-neutral-100"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SOCIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 w-full"
          >
            Quiero ser socio/a
          </a>
        </nav>
      )}
    </header>
  );
}
