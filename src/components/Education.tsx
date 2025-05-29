"use client";

interface EducationCardProps {
  institution: string;
  period: string;
  title: string;
  description: string;
}

export default function EducationCard({
  institution,
  period,
  title,
  description,
}: EducationCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border-2 border-pink-300 shadow-md hover:shadow-pink-400 transition-shadow duration-300 font-['Montserrat'] h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-pink-700">{institution}</h3>
        <p className="text-sm text-pink-600">{period}</p>
        <h4 className="mt-2 text-md font-semibold text-pink-800">{title}</h4>
        <p className="mt-2 text-sm text-pink-900">{description}</p>
      </div>
    </div>
  );
}

