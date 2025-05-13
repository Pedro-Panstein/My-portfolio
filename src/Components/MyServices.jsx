import { FaSearch } from "react-icons/fa";
import { LuDatabase, LuMonitorSmartphone } from "react-icons/lu";
import { motion } from "framer-motion";
import Service from "./service";
import { translations } from "../locales/translation"; // Importa as traduções
import useLanguage from "../hooks/useLanguage"; // Hook para pegar a linguagem atual

export default function MyServices() {
  const language = useLanguage(); // Obtém a linguagem
  const t = translations[language]; // Seleciona as traduções baseadas no idioma

  return (
    <div className="bg-[#0D0E11] flex flex-col justify-center items-center mt-32 py-20 px-10">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, delay: 0.1 },
          },
        }}
        viewport={{ once: false }}
        className="text-center font-inconsolata text-[#13CD51] text-xl"
      >
        {t.myServicesTitle}
      </motion.h3>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, delay: 0.1 },
          },
        }}
        viewport={{ once: false }}
        className="text-2xl text-white text-center font-asap"
      >
        {t.myServicesSubtitle}
      </motion.h2>
      <div className="flex flex-wrap items-center p-0 justify-center gap-10 mt-10">
        {t.services.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4, delay: index * 0.1 },
              },
            }}
            viewport={{ once: false }}
          >
            <Service
              icon={
                [<LuMonitorSmartphone />, <LuDatabase />, <FaSearch />][index]
              }
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}