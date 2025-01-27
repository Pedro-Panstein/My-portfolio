import { GoArrowUpRight } from "react-icons/go";

export default function Contact({ icon, title, url }) {
  return (
    <div
      className="w-[400px] h-[70px] bg-[#292C34] rounded-lg mx-auto flex items-center justify-between px-4 cursor-pointer border-2 border-transparent hover:border-[#13CD51] transition-all"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="flex items-center gap-3 text-[#13CD51]">
        {icon}
        <span className="text-lg text-white">{title}</span>
      </div>
      <GoArrowUpRight className="text-[#13CD51] text-2xl" />
    </div>
  );
}
