import { FaGithub, FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { motion } from "framer-motion"; // Importando o motion
import aboutMePhoto from "../assets/aboutme-photo2.jpg";
import ButtonAboutMe from "./ButtonAboutMe";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../locales/translation";

export default function AboutMe() {
  const language = useLanguage();
  const currentTexts = translations[language];

  // Variantes para a animação
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Inicial (invisível)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Animação suave
    },
  };

  return (
    <div className="flex flex-col items-center justify-center pt-32">
      {/* Animação para o título */}
      <motion.h2
        className="font-inconsolata text-[#13CD51] text-xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false }} // Aparece apenas uma vez
      >
        {currentTexts.aboutMeTitle}
      </motion.h2>

      <motion.div
        className="bg-[#0f1114] border-[#38393C] border-2 rounded-lg p-10 mt-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false }}
      >
        <div className="flex gap-10">
          <motion.img
            src={aboutMePhoto}
            alt="profile photo"
            className="rounded-md h-96"
            initial={{ opacity: 0, scale: 0.8 }} // Começa menor e invisível
            whileInView={{ opacity: 1, scale: 1 }} // Aparece com zoom
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          />

          <motion.div
            className="flex flex-col w-[500px]"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false }}
          >
            <h4 className="text-[#13CD51] text-xl font-inconsolata">
              {currentTexts.aboutMeWhoAmI}
            </h4>
            <h3 className="mt-4 text-3xl font-semibold text-white font-asap">
              {currentTexts.aboutMeName}
            </h3>
            <h5 className="mt-3 text-xl text-whiteNotPure font-maven-pro">
              {currentTexts.aboutMeJobTitle}
            </h5>
            <p className="mt-3 text-[#878EA1] font-maven-pro">
              {currentTexts.aboutMeDescription}
            </p>
            <div className="flex items-center justify-start gap-5 mt-5">
              <ButtonAboutMe
                icon={<FaGithub className="w-7 h-7 text-[#13CD51]" />}
                url={"https://github.com/Pedro-Panstein"}
              />
              <ButtonAboutMe
                icon={
                  <PiLinkedinLogoBold className="w-7 h-7 text-[#13CD51]" />
                }
                url={"https://aindaestaporvir.com"}
              />
              <ButtonAboutMe
                icon={<FaInstagram className="w-7 h-7 text-[#13CD51]" />}
                url={"https://www.instagram.com/pedro.panstein/"}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}