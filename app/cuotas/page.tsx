import Image from "next/image";

export default function Cuotas() {
  return (
    <div className="flex flex-col items-center h-[50vh]">
      <div className="flex flex-col items-center gap-6 bg-red-600 p-3 rounded mt-10">
        <h1 className="text-xl text-center">Por consultas sobre cuotas contactanos:</h1>
        <div className="bg-white w-full rounded-lg shadow-md px-4 py-2 flex justify-start items-center gap-4 hover:shadow-lg transition-shadow">
          <h2 className="text-blue-700 font-semibold text-xl">Sandra</h2>
          <a href={`https://wa.me/3460694392`} className='flex items-center justify-center w-full gap-2 pl-2 bg-green-500 py-3 text-white' target="_blank" rel="noopener noreferrer">
            <Image width={30} height={30} className="object-cover" alt="WhatsApp" src={`/whatsapp-blanco.svg`} />
            <p>3460-694392</p>
          </a>
        </div>
        <div className="bg-white w-full rounded-lg shadow-md px-4 py-2 flex justify-start items-center gap-4 hover:shadow-lg transition-shadow">
          <h2 className="text-blue-700 font-semibold text-xl">Lara</h2>
          <a href={`https://wa.me/3413593619`} className='flex items-center justify-center w-full gap-2 pl-2 bg-green-500 py-3 text-white' target="_blank" rel="noopener noreferrer">
            <Image width={30} height={30} className="object-cover" alt="WhatsApp" src={`/whatsapp-blanco.svg`} />
            <p>341-3593619</p>
          </a>
        </div>
      </div>
    </div>
  );
}
