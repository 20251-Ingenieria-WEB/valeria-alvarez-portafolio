import PortfolioCard from "../components/Portafolio";

const proyectos = [
  {
    image: "/img/MovieTime.png",
    title: "Movie Time",
    shortDescription: "Sistema con las peliculas actuales del momento",
    longDescription:
      "Este proyecto tuvo como objetivo crear una página de películas como práctica de desarrollo web, la cual consistia en mostrar las peliculas que mas se adecuen a tus preferencias; se aplicaron técnicas avanzadas de HTML, CSS, JavaScript y React, combinadas con Bootstrap, para diseñar una plataforma funcional y estéticamente atractiva",
    link: "https://cotizador-servicios-transporte-cootraespeciales.vercel.app/",
  },
  {
    image: "/img/logo-cootraespeciales.svg",
    title: "Cootraespeciales | Cotizador de Viajes",
    shortDescription: "Sistema de cotizador de viajes",
    longDescription:
      "Sistema web de cotización de transporte, desarrollado en colaboración con la empresa colombiana de transporte COOTRAESPECIALES. Diseñado con el objetivo de optimizar y automatizar el proceso de estimación de costos de transporte, mejorando la eficiencia y la precisión de los cálculos.",
    link: "https://cotizador-servicios-transporte-cootraespeciales.vercel.app/",
  },
];

export default function PortfolioSection() {
  return (
    <section className="mb-10 max-w-[calc(100%-300px)] mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Portafolio</h2>
      <div
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {proyectos.map((p, idx) => (
          <div key={idx} className="snap-start shrink-0 w-80">
            <PortfolioCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
