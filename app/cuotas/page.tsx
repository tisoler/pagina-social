import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cuotas",
  description:
    "Contactos de tesorería del Club Social y Deportivo de Máximo Paz para consultas y pago de cuotas sociales.",
};

const CONTACTOS = [
  { nombre: "Sandra", telefono: "3460694392", muestra: "3460-694392" },
  { nombre: "Lara", telefono: "3413593619", muestra: "341-3593619" },
];

export default function Cuotas() {
  return (
    <>
      <section className="bg-gradient-to-r from-brand-navy via-neutral-900 to-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
            Tesorería
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">
            Cuotas sociales
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            Por consultas sobre cuotas, valores y formas de pago, escribinos por
            WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {CONTACTOS.map((contacto) => (
            <div
              key={contacto.nombre}
              className="flex flex-col items-center rounded-2xl border border-neutral-200 border-t-4 border-t-brand-red bg-white p-8 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
                <span className="font-display text-2xl font-bold text-brand-red">
                  {contacto.nombre.charAt(0)}
                </span>
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-brand-navy">
                {contacto.nombre}
              </h2>
              <p className="mt-1 text-sm text-neutral-500">Consultas de cuotas</p>
              <a
                href={`https://wa.me/${contacto.telefono}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 font-semibold text-white transition hover:brightness-95"
              >
                <Image src="/whatsapp-blanco.svg" alt="" width={20} height={20} />
                <span className="tabular-nums">{contacto.muestra}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="font-display text-sm font-semibold uppercase tracking-widest text-brand-red hover:text-brand-dark"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
}
