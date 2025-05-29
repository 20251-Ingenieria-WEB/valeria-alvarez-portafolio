import ConocimientoCard from "../components/ConocimientosCard";

const conocimientos = [
   {
    icon: "/icons/Softwaredevelopment.png",
    title: "Software Development",
    description:
      "Desarrollo, implementación y mantenimiento de aplicaciones y sistemas de software, aplicando principios de ingeniería de software y metodologías ágiles como Scrum. Utiliza tecnologías como JavaScript, TypeScript, Python, frameworks como React, Node.js, y bases de datos relacionales y NoSQL, asegurando escalabilidad, calidad de código y optimización.",
  },
  {
    icon: "/icons/WebDevelopment.png",
    title: "Web Development",
    description:
      "Desarrollo y diseño de interfaces de usuario interactivas, aplicando tecnologías como HTML, CSS, JavaScript y frameworks modernos como React o Vue.js para garantizar experiencias web eficientes, responsivas y de alto rendimiento.",
  },
  {
    icon: "/icons/FullStack.png",
    title: "Full Stack Development",
    description:
      "Desarrollo integral de aplicaciones, mediante la implementación de interfaces de usuario, la integración de bases de datos relacionales y NoSQL, la gestión de servidores y la construcción de APIs RESTful. Aplica tecnologías como JavaScript, TypeScript, React, Node.js, Express y MongoDB, asegurando soluciones escalables, seguras y eficientes.",
  },
  {
    icon: "/icons/DevOps.png",
    title: "DevOps",
    description:
      "Conjunto de prácticas culturales y técnicas que unifican el desarrollo de software y las operaciones de TI, orientadas a acelerar la entrega y mejora continua de aplicaciones mediante la automatización de procesos, integración continua (CI), despliegue continuo (CD) y monitoreo proactivo, asegurando calidad, estabilidad y escalabilidad en entornos de producción",
  },
  {
    icon: "/icons/DataAn.png",
    title: "Data Analyst",
    description:
      "Recolección, procesamiento y análisis de grandes volúmenes de datos utilizando herramientas y lenguajes como Python, R, SQL y plataformas de visualización como Power BI.",
  },
  {
    icon: "/icons/Scrum.png",
    title: "Scrum",
    description:
      "Marco ágil para la gestión y desarrollo de proyectos que promueve la entrega incremental de valor a través de iteraciones cortas (sprints), fomentando la colaboración continua entre equipos multidisciplinarios y la adaptación constante a los cambios mediante reuniones periódicas.",
  },
  
];

export default function ConocimientoSection() {
  return (
    <section className="mb-10 mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Conocimientos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {conocimientos.map((item, idx) => (
          <ConocimientoCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
