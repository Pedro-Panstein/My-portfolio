import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/locales/translation";

interface SliderProps {
  tecnologies: {
    image: StaticImageData;
    name: string;
  }[];
}

export default function Slider({ tecnologies }: SliderProps) {
  const { language, toggleLanguage } = useLanguage();
  const currentTexts = translations[language as keyof typeof translations];

  const handleMouseEnter = (event: React.MouseEvent<HTMLImageElement>) => {
    event.currentTarget.closest(".marquee")?.classList.add("pause");
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLImageElement>) => {
    event.currentTarget.closest(".marquee")?.classList.remove("pause");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.h2
        className="font-inconsolata text-[#13CD51] text-center mt-10 text-xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false }}
      >
        {currentTexts.tecnologiesTitle}
      </motion.h2>
      <div className="marquee select-none mt-16">
        <div className="marquee-content scroll reverse">
          {tecnologies.map((tech, index) => (
            <Image
              key={index}
              src={tech.image}
              width={200}
              height={100}
              className="drop-shadow-lg shadow-emerald-400 transition-all duration-300 hover:transform hover:translate-y-[-5px]"
              alt={tech.name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
        <div className="marquee-content scroll reverse">
          {tecnologies.map((tech, index) => (
            <Image
              key={index}
              src={tech.image}
              width={200}
              height={100}
              className="drop-shadow-2xl shadow-emerald-400 transition-all duration-300 hover:transform hover:translate-y-[-5px]"
              alt={tech.name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </>
  );
}
