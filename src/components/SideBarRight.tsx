import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function SidebarRight() {
  return (
    <aside className="fixed top-0 right-0 h-screen w-20 bg-gradient-to-b from-pink-300 to-pink-500 text-gray-900 shadow-2xl flex flex-col items-center justify-center space-y-6 p-2 z-50 font-['Montserrat']">
      <a
        href="https://github.com/Vaf88"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FaGithub className="text-3xl text-pink-900 group-hover:text-pink-600 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-6 drop-shadow-lg" />
      </a>
      <a
        href="https://www.linkedin.com/in/valeria-alvarez-fernandez-961013325/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FaLinkedin className="text-3xl text-pink-900 group-hover:text-blue-700 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:-rotate-6 drop-shadow-lg" />
      </a>
      <a
        href="https://www.facebook.com/valerii.alvarex/?locale=es_LA"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FaFacebook className="text-3xl text-pink-900 group-hover:text-blue-900 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-6 drop-shadow-lg" />
      </a>
      <a
        href="https://www.instagram.com/valekaw_uwu?igsh=MWtrdzR0Y3ZqaGJhbg=="
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FaInstagram className="text-3xl text-pink-900 group-hover:text-pink-700 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:-rotate-6 drop-shadow-lg" />
      </a>
    </aside>
  );
}
