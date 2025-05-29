"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-pink-50 border-t-2 border-pink-300 mt-8 py-4 font-['Montserrat'] text-center">
      <p className="text-sm text-pink-700">
        © {new Date().getFullYear()} Hecho con 💖 por Valeria Alvarez Fernandez 
      </p>
      <p className="text-xs text-pink-500 mt-1">
        Universidad de Antioquia - Curso de ingenieria web 
      </p>
    </footer>
  );
}
