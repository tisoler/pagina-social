import Image from "next/image";
import Link from "next/link";

const HERO_IMG =
  "https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/clubsocial/fondo_social.jpg";

const ACCESOS = [
  {
    titulo: "Quiero ser socio/a",
    descripcion: "Completá la solicitud y sumate a la familia del club.",
    href: "https://forms.gle/fsm1AcU1HZXCcpEYA",
    externo: true,
    icono: (
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10-8v6m3-3h-6" />
    ),
  },
  {
    titulo: "Actividades",
    descripcion: "Vóley, pádel, gimnasia, patín, funcional y más.",
    href: "/actividades",
    externo: false,
    icono: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c3 3 3 17 0 20M12 2c-3 3-3 17 0 20M2 12h20" />
    ),
  },
  {
    titulo: "Cuotas sociales",
    descripcion: "Contactá a tesorería para pagar o consultar tu cuota.",
    href: "/cuotas",
    externo: false,
    icono: (
      <path d="M2 7h20v12H2zM2 11h20M6 15h4" />
    ),
  },
  {
    titulo: "Pádel: canchas disponibles",
    descripcion: "Mirá la disponibilidad de las canchas en tiempo real.",
    href: "https://docs.google.com/spreadsheets/d/1KTszTIHBF8oXamvIDhRncWm5IilGSbHHJt9jZZZSiBs",
    externo: true,
    icono: (
      <path d="M12 21s-7-4.5-9-9a5.5 5.5 0 0 1 9-5.5A5.5 5.5 0 0 1 21 12c-2 4.5-9 9-9 9Z" />
    ),
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          src={HERO_IMG}
          alt="Club Social y Deportivo de Máximo Paz"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-neutral-900/80 to-brand-dark/85" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-36 pt-20 text-center sm:px-6 md:pb-44 md:pt-28">
          <span className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-red shadow-2xl ring-4 ring-white/20 md:h-32 md:w-32">
            <Image
              src="/escudo_social.svg"
              alt="Escudo de Club Social y Deportivo de Máximo Paz"
              width={110}
              height={110}
            />
          </span>
          <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
            Web oficial
          </p>
          <h1 className="mt-2 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
            Club Social
            <span className="mt-1 block text-brand-red">y Deportivo</span>
          </h1>
          <p className="mt-4 font-display text-xl font-medium uppercase tracking-[0.35em] text-white/80 md:text-2xl">
            de Máximo Paz
          </p>
          <p className="mt-7 -rotate-2 font-hand text-4xl font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl">
            Social, siempre{" "}
            <span className="relative inline-block text-brand-red">
              Social
              <svg
                aria-hidden
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 120 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C30 3 90 2 118 7"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/actividades" className="btn-primary text-lg">
              Ver actividades
            </Link>
            <a
              href="https://forms.gle/fsm1AcU1HZXCcpEYA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light text-lg"
            >
              Quiero ser socio/a
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-surface [clip-path:polygon(0_100%,100%_0,100%_100%)] md:h-24" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="text-center">
          <p className="section-kicker">Accesos rápidos</p>
          <h2 className="section-title mt-2">Todo el club en un clic</h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACCESOS.map((acceso) => (
            <Link
              key={acceso.titulo}
              href={acceso.href}
              target={acceso.externo ? "_blank" : undefined}
              rel={acceso.externo ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {acceso.icono}
                </svg>
              </span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase leading-tight tracking-wide text-brand-navy">
                {acceso.titulo}
              </h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{acceso.descripcion}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                Entrar
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="transition group-hover:translate-x-1"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Deporte para todos</p>
              <h2 className="section-title mt-2">Nuestras actividades</h2>
            </div>
            <Link
              href="/actividades"
              className="font-display text-sm font-semibold uppercase tracking-widest text-brand-red hover:text-brand-dark"
            >
              Ver todas →
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Mini vóley",
              "Vóley juvenil femenino",
              "Maxi vóley",
              "Gimnasia artística",
              "Patín artístico",
              "Pádel (escuela)",
              "Funcional",
            ].map((nombre) => (
              <Link
                key={nombre}
                href="/actividades"
                className="rounded-full border border-neutral-300 bg-white px-5 py-2 font-display text-sm font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-red hover:bg-brand-red hover:text-white"
              >
                {nombre}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-dark to-brand-red">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              ¿Todavía no sos parte?
            </h2>
            <p className="mt-2 text-white/85">
              Sumate como socio/a y viví el club todo el año.
            </p>
          </div>
          <a
            href="https://forms.gle/fsm1AcU1HZXCcpEYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 font-display text-lg font-bold uppercase tracking-widest text-brand-red shadow-lg transition hover:bg-brand-navy hover:text-white"
          >
            Hacete socio/a
          </a>
        </div>
      </section>
    </>
  );
}
