import { FaSearch } from "react-icons/fa";
import { LuDatabase, LuMonitorSmartphone } from "react-icons/lu";

export default function Service({ icon, title, description }) {
  // Determina a cor do texto com base no tipo do ícone
  const getTextColor = () => {
    if (icon.type === LuMonitorSmartphone) return "text-[#BB72E9]";
    if (icon.type === LuDatabase) return "text-[#EABD5F]";
    if (icon.type === FaSearch) return "text-[#82BC4F]";
    return "text-white";
  };

  return (
    <div className="w-[350px] h-[250px] p-4 border-2 border-[#16181D] rounded-xl flex flex-col items-start space-y-4 text-center hover:border-[#13CD51] transition-colors">
      <div className={`${getTextColor()} text-5xl`}>{icon}</div>
      <h2 className="text-lg font-bold text-white text-start">{title}</h2>
      <p className="text-gray-400 text-start">{description}</p>
    </div>
  );
}
