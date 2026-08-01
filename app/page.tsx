import Link from "next/link";

const links = [
  { text: "Quiero ser socio/a", href: "https://forms.gle/fsm1AcU1HZXCcpEYA" },
  { text: "Cuotas sociales", href: "/cuotas", },
  { text: "Actividades", href: "/actividades", },
  { text: "Pádel - Canchas disponibles", href: "https://docs.google.com/spreadsheets/d/1KTszTIHBF8oXamvIDhRncWm5IilGSbHHJt9jZZZSiBs" },
];

export default function Home() {
  return (
    <div className="h-[50vh] flex items-center">
      <div className="grid grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href || '#'}
            className="h-fit min-h-20 flex items-center justify-center bg-red-600 text-white py-3 px-3 font-semibold rounded-lg text-center hover:bg-blue-500 md:active:bg-red-600 active:bg-blue-500"
            rel="noopener noreferrer"
            target={link.href?.includes('https://') ? '_blank' : ''}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
