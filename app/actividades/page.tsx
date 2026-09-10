import type { Metadata } from "next";
import Link from "next/link";
import ActivityCard, { type Actividad } from "@/components/ActivityCard";

export const metadata: Metadata = {
  title: "Actividades",
  description:
    "Todas las actividades del Club Social y Deportivo de Máximo Paz: vóley, pádel, gimnasia, patín y más, con contacto directo de cada profe.",
};

const ACTIVIDADES: Actividad[] = [
  {
    icono: "/pelota_voley.svg",
    actividad: "Mini vóley",
    profe: "Prof. Victoria Fabre",
    contacto: "3460690531",
    contactoMostra: "3460-690531",
    instagram: "minivoley.social",
  },
  {
    icono: "/pelota_voley.svg",
    actividad: "Vóley juvenil femenino",
    profe: "Prof. Vanesa Durand",
    contacto: "3460690531",
    contactoMostra: "3460-690531",
    instagram: "clubsocial_juveniles",
  },
  {
    icono: "/pelota_voley.svg",
    actividad: "Maxi vóley",
    profe: "Prof. Natalia Rattaro",
    contacto: "3460697964",
    contactoMostra: "3460-697964",
    instagram: "voleyclubsocialmpaz",
  },
  {
    icono: "/gimnasia.svg",
    actividad: "Gimnasia artística",
    profe: "Prof. Gabriela Formentín",
    contacto: "3416454917",
    contactoMostra: "341-6454917",
    instagram: "gimnasiaartistica.clubsocial",
  },
  {
    icono: "/patin.svg",
    actividad: "Patín artístico",
    profe: "Prof. Juan Pablo López / Noe Reynoso",
    contacto: "3584128570",
    contactoMostra: "358-4128570 / 341-3229273",
    instagram: "patinartistico.socialpaz",
  },
  {
    icono: "/pelota_padel.svg",
    actividad: "Pádel (escuela)",
    profe: "Prof. Pablo Torres",
    contacto: "3460692328",
    contactoMostra: "3460-692328",
    instagram: "padel.mpaz",
  },
  {
    icono: "/pesa_rusa.svg",
    actividad: "Funcional",
    profe: "Prof. Paloma López",
    contacto: "3460694586",
    contactoMostra: "3460-694586",
    instagram: "",
  },
];

export default function Actividades() {
  return (
    <>
      <section className="bg-gradient-to-r from-brand-navy via-neutral-900 to-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
            Deporte y comunidad
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">
            Actividades
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            Encontrá tu disciplina y escribile directamente a tu profe por WhatsApp o
            seguí la cuenta de Instagram de cada actividad.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVIDADES.map((item) => (
            <ActivityCard key={item.actividad} item={item} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-brand-navy">
            ¿No encontrás lo que buscás?
          </h2>
          <p className="max-w-md text-neutral-600">
            Escribinos por Instagram y contanos qué actividad te gustaría que sumemos
            al club.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://instagram.com/clubsocialdeportivo.mpaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Hablar con el club
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 font-semibold text-brand-navy transition hover:border-brand-navy"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
