import Image from "next/image";

export type Actividad = {
  icono: string;
  actividad: string;
  profe: string;
  contacto: string;
  contactoMostra: string;
  instagram: string;
};

export default function ActivityCard({ item }: { item: Actividad }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 border-t-4 border-t-brand-red bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-red shadow-inner transition group-hover:scale-105">
            <Image src={item.icono} alt="" width={30} height={30} />
          </span>
          <h2 className="font-display text-2xl font-bold uppercase leading-none tracking-wide text-brand-navy">
            {item.actividad}
          </h2>
        </div>

        <p className="mt-4 text-sm font-medium uppercase tracking-wider text-neutral-500">
          {item.profe}
        </p>

        <div className="mt-5 flex flex-col gap-2 pt-1">
          {item.contacto && (
            <a
              href={`https://wa.me/${item.contacto}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 font-semibold text-white transition hover:brightness-95"
            >
              <Image src="/whatsapp-blanco.svg" alt="" width={20} height={20} />
              <span className="tabular-nums">{item.contactoMostra}</span>
            </a>
          )}
          {item.instagram && (
            <a
              href={`https://instagram.com/${item.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy"
            >
              <Image src="/icono-instagram-blanco.svg" alt="" width={18} height={18} />
              <span className="truncate">@{item.instagram}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
