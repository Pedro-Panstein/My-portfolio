import { GoArrowUpRight } from "react-icons/go";

interface ContactProps {
  icon: React.ReactNode;
  title: string;
  url: string;
}

export default function Contact({ icon, title, url }: ContactProps) {
  return (
    <div
      className="w-full bg-[#292C34] rounded-lg flex items-center justify-between p-4 cursor-pointer border-2 border-transparent hover:border-[#13CD51] transition-all"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="flex items-center gap-3 text-[#13CD51]">
        {icon}
        <span className="text-lg text-white">{title}</span>
      </div>
      <span className="text-[#13CD51] text-2xl">
        <GoArrowUpRight />
      </span>
    </div>
  );
}
