"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PerfilSection() {
  const [showModal, setShowModal] = useState(false);
  const fullName = "Valeria Alvarez Fernandez";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedName(fullName.slice(0, index));
      index++;
      if (index > fullName.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-pink-50 rounded-xl p-6 shadow-md mb-8 mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Foto sin el badge */}
        <div className="relative group transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <Image
            src="/img/Perfil.jpeg"
            alt="Foto de perfil"
            width={220}
            height={220}
            className="rounded-full border-4 border-pink-400 shadow-lg"
          />
        </div>

        {/* Nombre y descripción */}
        <div className="flex-1">
          <h2 className="text-4xl font-serif font-extrabold text-pink-600 whitespace-nowrap overflow-hidden border-b-4 border-pink-600 pb-1 animate-[typing_2.5s_steps(25)_1s_forwards] drop-shadow-md">
            {typedName}
          </h2>
          <p className="text-pink-800 mt-4 text-justify leading-relaxed">
            La tecnología es mi pasión y el aprendizaje constante mi motor. Me encanta trabajar en equipo, colaborar 
             con otras personas y enfrentar nuevos desafíos en el mundo del desarrollo de software y aplicaciones web. 
             Actualmente, estoy profundizando en el desarrollo frontend mientras exploro nuevas áreas como el testing, 
             siempre buscando crear soluciones innovadoras que generen un impacto positivo.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 px-5 py-2 border-2 border-pink-600 text-pink-600 font-semibold rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-sm"
          >
            Más detalle
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative animate-fade-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-pink-700">¡Hola!</h3>
            <p className="text-pink-700">
              Me gusta mucho el aprendizaje continuo, la creación de soluciones innovadoras y el desarrollo de software 
              con impacto positivo en la vida de las personas. Actualmente me encuentro fortaleciendo mis conocimientos en tecnologías 
              como JavaScript, Java, CSS, Node.js, Next.js, y Tailwind, además de tener experiencia básica con bases de datos como MySQL y 
              herramientas como Postman. Me interesa especializarme en el desarrollo de software y aplicaciones web, con un enfoque particular en el frontend, aunque 
              también estoy explorando el mundo del testing para ampliar mi perspectiva como futura Full Stack Developer.
              Me destaco por mi capacidad para comunicarme de manera clara, trabajar en equipo y adaptarme a nuevos retos, siempre con una 
              mentalidad creativa y proactiva. Mi meta es crear productos únicos e innovadores que sean útiles y generen un impacto positivo 
              en la vida de las personas.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
