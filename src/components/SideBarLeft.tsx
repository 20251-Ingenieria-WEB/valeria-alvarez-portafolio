import Image from "next/image";
import { idiomas } from "../data/idiomas";
import { lenguajes } from "../data/lenguajes";
import { habilidades } from "../data/habilidades";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";

export default function SidebarLeft() {
  return (
    <aside className="w-72 h-screen fixed top-0 left-0 z-50 bg-gradient-to-b from-pink-300 to-pink-500 text-gray-900 shadow-2xl p-6 flex flex-col font-['Montserrat']">
      <div className="overflow-y-auto flex-1 space-y-6 scrollbar-thin scrollbar-thumb-pink-600 scrollbar-track-pink-200 pr-1">
        {/* Foto y nombre */}
        <div className="text-center">
          <Image
            src="/img/Valeria.jpeg" 
            alt="Foto de perfil"
            width={120}
            height={120}
            className="rounded-full mx-auto border-4 border-pink-600 shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-2xl font-bold mt-4 text-pink-900">
            Valeria Alvarez Fernandez
          </h1>
          <p className="text-sm text-pink-800">
            Estudiante de Ingeniería | Apasionada por la tecnología
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-lg font-semibold mb-2 border-b border-pink-700 pb-1">
            Contacto
          </h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaUser className="text-pink-600" />
              Edad: 24
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-pink-600" />
              Medellín, Colombia
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-pink-600" />
              +57 304 557 700
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-pink-600" />
              valeriaaf835@gmail.com
            </li>
          </ul>
        </div>

        {/* Idiomas */}
        <div>
          <h2 className="text-lg font-semibold mb-2 border-b border-pink-700 pb-1">
            Idiomas
          </h2>
          {idiomas.map((idioma) => (
            <div key={idioma.nombre} className="mb-2">
              <p className="text-sm">{idioma.nombre}</p>
              <div className="w-full bg-pink-200 h-2 rounded overflow-hidden">
                <div
                  className="bg-pink-600 h-2 transition-all duration-300 ease-in-out"
                  style={{ width: `${idioma.porcentaje}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lenguajes */}
        <div>
          <h2 className="text-lg font-semibold mb-2 border-b border-pink-700 pb-1">
            Lenguajes
          </h2>
          {lenguajes.map((leng) => (
            <div key={leng.nombre} className="mb-2">
              <p className="text-sm">{leng.nombre}</p>
              <div className="w-full bg-pink-200 h-2 rounded overflow-hidden">
                <div
                  className="bg-pink-600 h-2 transition-all duration-300 ease-in-out"
                  style={{ width: `${leng.porcentaje}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Habilidades */}
        <div>
          <h2 className="text-lg font-semibold mb-2 border-b border-pink-700 pb-1">
            Habilidades
          </h2>
          <ul className="list-disc list-inside text-sm text-pink-900 space-y-1">
            {habilidades.map((hab, i) => (
              <li key={i} className="hover:text-pink-600 transition duration-200">
                {hab}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
