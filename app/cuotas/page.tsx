import Image from "next/image";
import Link from "next/link";

export default function Cuotas() {
  return (
    <div
      className="fondo-pagina grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-4 pb-20 gap-4 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundImage: "url('https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/clubsocial/fondo_social.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src="/escudo_social.svg"
          alt="Escudo Club Social"
          width={120}
          height={120}
          priority
        />
        <div className="flex flex-col items-center gap-6 bg-red-600 p-3 rounded">
          <h1 className="text-2xl text-center">Por consultas sobre cuotas contactanos:</h1>
          <div className="flex items-center gap-3">
            <h2 className="text-lg">Sandra: 3460-694392</h2>
            <a href={`https://wa.me/3460694392`} className='flex justify-center' target="_blank" rel="noopener noreferrer">
              <Image width={40} height={40} className="object-cover" alt="WhatsApp" src={`/whatsapp.svg`} />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-lg">Lara: 341-3593619</h2>
            <a href={`https://wa.me/3413593619`} className='flex justify-center' target="_blank" rel="noopener noreferrer">
              <Image width={40} height={40} className="object-cover" alt="WhatsApp" src={`/whatsapp.svg`} />
            </a>
          </div>
        </div>
        <Link className="p-4 font-bold rounded bg-blue-500 hover:bg-white hover:text-blue-500" href={'/'}>
          Volver
        </Link>
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
