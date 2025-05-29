"use client";

import { useState } from "react";

interface PortfolioCardProps {
  image: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  link?: string;
}

export default function PortfolioCard({
  image,
  title,
  shortDescription,
  longDescription,
  link,
}: PortfolioCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full min-h-[400px] flex flex-col justify-between font-['Montserrat'] border-2 border-pink-300 hover:shadow-pink-400 transition-shadow duration-300">
      <div>
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold mt-3 text-pink-700">{title}</h3>
        <p className="text-sm text-pink-900">{shortDescription}</p>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="mt-2 text-pink-600 font-semibold hover:underline hover:text-pink-800 transition-colors duration-200"
      >
        Ver más
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full relative border-2 border-pink-400 shadow-xl animate-fade-in">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-pink-500 hover:text-pink-700 text-xl font-bold"
            >
              ✕
            </button>
            <h4 className="text-2xl font-bold text-pink-700">{title}</h4>
            <p className="mt-3 text-sm text-pink-900">{longDescription}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-pink-600 font-semibold hover:underline hover:text-pink-800 transition-colors duration-200"
              >
                Ver en Web
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
