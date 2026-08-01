import Image from "next/image";
import Link from "next/link";

const ACTIVIDADES = [
  {
    icono: "/pelota_voley.svg",
    actividad: "Mini vóley",
    profe: "Prof. Victoria	Fabre",
    contacto: "3460690531",
    contactoMostra: "3460-690531",
    instagram: "minivoley.social"
  },
  {
    icono: "/pelota_voley.svg",
    actividad: "Vóley juvenil femenino",
    profe: "Prof. Vanesa Durand",
    contacto: "3460690531",
    contactoMostra: "3460-690531",
    instagram: "clubsocial_juveniles"
  },
  {
    icono: "/pelota_voley.svg",
    actividad: "Maxi voley",
    profe: "Prof. Natalia Rattaro",
    contacto: "3460697964",
    contactoMostra: "3460-697964",
    instagram: "voleyclubsocialmpaz"
  },
  {
    icono: "/gimnasia.svg",
    actividad: "Gimnasia artística",
    profe: "Prof. Gabriela Formentín",
    contacto: "3416454917",
    contactoMostra: "341-6454917",
    instagram: "gimnasiaartistica.clubsocial"
  },
  {
    icono: "/patin.svg",
    actividad: "Patín artístico",
    profe: "Prof. Juan Pablo López / Noe Reynoso",
    contacto: "3584128570",
    contactoMostra: "358-4128570 / 341-3229273",
    instagram: "patinartistico.socialpaz"
  },
  {
    icono: "/pelota_padel.svg",
    actividad: "Pádel (escuela)",
    profe: "Prof. Pablo Torres",
    contacto: "3460692328",
    contactoMostra: "3460-692328",
    instagram: "padel.mpaz"
  },
  {
    icono: "/pesa_rusa.svg",
    actividad: "Funcional",
    profe: "Prof. Paloma López",
    contacto: "3460694586",
    contactoMostra: "3460-694586",
    instagram: ""
  },
];

export default function Actividades() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 w-full">
        {ACTIVIDADES.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md px-2 py-2 flex items-center gap-2 hover:shadow-lg transition-shadow">
            <div className="w-3/12">
              <div className="bg-red-600 rounded-lg p-2 flex justify-center items-center">
                <Image
                  src={item.icono}
                  alt={item.actividad}
                  width={60}
                  height={60}
                  className="flex-shrink-0"
                />
              </div>
            </div>
            <div className="flex flex-col w-9/12">
              <h2 className="text-blue-700 font-semibold text-lg md:text-xl">{item.actividad}</h2>
              <p className="text-red-600 font-semibold">{item.profe}</p>
              <div className="text-gray-600 flex flex-col gap-1">
                {
                  item.contacto && (
                    <a href={`https://wa.me/${item.contacto}`} className='flex items-center justify-center gap-2 bg-green-500 py-2 px-2 text-white' target="_blank" rel="noopener noreferrer">
                      <Image width={30} height={30} className="object-cover" alt="WhatsApp" src={`/whatsapp-blanco.svg`} />
                      <p>{item.contactoMostra}</p>
                    </a>
                  )
                }
                {
                  item.instagram && (
                    <a
                      className={`flex items-center justify-center gap-2 ${item.instagram?.length > 24 ? 'text-sm md:text-base' : ''} hover:underline hover:underline-offset-4 bg-red-600 py-2 text-white`}
                      href={`https://instagram.com/${item.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        aria-hidden
                        src="/icono-instagram-blanco.svg"
                        alt="Instagram"
                        width={30}
                        height={30}
                      />
                      {item.instagram}
                    </a>
                  )
                }
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link className="hidden md:block p-4 w-2/3 text-center font-bold rounded bg-blue-500 hover:bg-white hover:text-blue-500 mt-10" href={'/'}>
        Volver
      </Link>
    </>
  );
}
