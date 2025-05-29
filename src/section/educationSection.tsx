import EducationCard from "../components/Education";

const educacion = [
  {
    institution: "Universidad de Antioquia",
    period: "2019 - Actualidad",
    title: "Ingeniería de Sistemas",
    description:
      "Formación integral en desarrollo de software, bases de datos, Arquitectura de software.",
  },
  
  {
    institution: "Cisco Networking Academy",
    period: "2023 - 2024",
    title: "Redes y CyberOps",
    description:
      "Capacitación en redes de computadoras, fundamentos de ciberseguridad, operaciones de seguridad (CyberOps), protocolos, enrutamiento y defensa ante amenazas cibernéticas.",
  },
  {
    institution:
      "IN2LAB research group | Facultad de Ingeniería, Universidad de Antioquia",
    period: "2023 - 2024",
    title: "Certificaciones",
    description:
      "Cursos especializados en Inteligencia Artificial aplicada a la ingeniería y ciencias, así como algoritmos para el análisis y procesamiento de Big Data.",
  },
];

export default function EducacionSection() {
  return (
    <section className="mb-10">
      <div className="max-w-[calc(100vw-64px)]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Educación</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {educacion.map((item, idx) => (
            <EducationCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}