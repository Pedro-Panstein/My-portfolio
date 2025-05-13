import Card from "./Card";
import machineManagement from "../assets/machine-management.png";
import pansteinLibrary from "../assets/panstein-library.png";
import crudUsers from "../assets/crud-users.png";
import cursores from "../assets/cursores.png";
import coca from "../assets/coca.png";
import emBreve from "../assets/Group 8.png";
import comingSoon from "../assets/Group 8 (1).png";
import { translations } from "../locales/translation"; // Importa o objeto de traduções
import { motion } from "framer-motion"; // Importa o framer-motion
import useLanguage from "../hooks/useLanguage";
import { useEffect, useState } from "react";

export default function MyWork() {
  const [selectedImageCard, setImageCard] = useState(null);
  const language = useLanguage();
  const t = translations[language];

  useEffect(() => {
    if (language === "pt") {
      setImageCard(emBreve);
    } else {
      setImageCard(comingSoon);
    }
  }, [language]);

  // Define os projetos com as traduções
  const projects = [
    {
      id: 1,
      image: machineManagement,
      title: t.projects[0].title,
      description: t.projects[0].description,
      url: "https://machine-management.vercel.app",
    },
    {
      id: 2,
      image: pansteinLibrary,
      title: t.projects[1].title,
      description: t.projects[1].description,
      url: "https://panstein-library.vercel.app",
    },
    {
      id: 3,
      image: crudUsers,
      title: t.projects[2].title,
      description: t.projects[2].description,
      url: "https://crud-users-angular.vercel.app",
    },
    {
      id: 4,
      image: cursores,
      title: t.projects[3].title,
      description: t.projects[3].description,
      url: "https://cursores-css.vercel.app",
    },
    {
      id: 5,
      image: coca,
      title: t.projects[4].title,
      description: t.projects[4].description,
      url: "https://atividade-avaliativa1.vercel.app",
    },
    {
      id: 6,
      image: selectedImageCard,
      title: t.projects[5].title,
      description: t.projects[5].description,
    },
  ];

  // Variantes de animação
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-32">
      {/* Título com animação */}
      <motion.h3
        className="text-center font-inconsolata text-[#13CD51] text-xl"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        viewport={{ once: false }}
      >
        {t.myWorkTitle}
      </motion.h3>
      <motion.h2
        className="text-center font-asap text-[#E2E4E9] text-2xl mt-2"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        viewport={{ once: false }}
      >
        {t.myWorkSubtitle}
      </motion.h2>

      {/* Projetos com animação */}
      <div className="flex flex-wrap justify-center gap-10 mt-10 mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
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
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
