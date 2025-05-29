import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  description: string;
}

export default function ConocimientoCard({ icon, title, description }: Props) {
  return (
    <div className="bg-white rounded-xl border-2 border-pink-300 shadow-md p-4 min-h-[300px] max-w-[240px] flex flex-col justify-between items-center text-center transition-transform duration-300 hover:shadow-pink-400 hover:scale-105">
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 relative transform transition duration-300 hover:scale-110 hover:rotate-6">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-pink-700">{title}</h3>
      </div>
      <p className="text-sm text-pink-900">{description}</p>
    </div>
  );
}


