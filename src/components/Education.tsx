// components/ConocimientoCard.tsx
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  description: string;
}

export default function KnowledgeCard({ icon, title, description }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 relative transform transition duration-300 hover:scale-110 hover:rotate-6">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
}