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
    <div className="flex flex-col items-center justify-center pt-32 px-10">
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
        className="bg-[#0f1114] border-[#38393C] border-2 rounded-lg p-5 md:p-10 mt-10 mx-4 md:mx-0"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false }}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <motion.img
            src={aboutMePhoto}
            alt="profile photo"
            className="rounded-md w-full h-auto md:min-h-96 md:max-w-96 object-cover self-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          />

          <motion.div
            className="flex flex-col w-full lg:w-[500px]"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false }}
          >
            <h4 className="text-[#13CD51] text-lg md:text-xl font-inconsolata">
              {currentTexts.aboutMeWhoAmI}
            </h4>
            <h3 className="mt-2 md:mt-4 text-2xl md:text-3xl font-semibold text-white font-asap">
              {currentTexts.aboutMeName}
            </h3>
            <h5 className="mt-2 md:mt-3 text-lg md:text-xl text-whiteNotPure font-maven-pro">
              {currentTexts.aboutMeJobTitle}
            </h5>
            <p className="mt-2 md:mt-3 text-sm md:text-base text-[#878EA1] font-maven-pro">
              {currentTexts.aboutMeDescription}
            </p>
            <div className="flex items-center justify-start gap-3 md:gap-5 mt-3 md:mt-5">
              <ButtonAboutMe
                icon={
                  <FaGithub className="w-5 h-5 md:w-7 md:h-7 text-[#13CD51]" />
                }
                url={"https://github.com/Pedro-Panstein"}
              />
              <ButtonAboutMe
                icon={
                  <PiLinkedinLogoBold className="w-5 h-5 md:w-7 md:h-7 text-[#13CD51]" />
                }
                url={"https://www.linkedin.com/in/pedro-henrique-panstein-7833bb316/"}
              />
              <ButtonAboutMe
                icon={
                  <FaInstagram className="w-5 h-5 md:w-7 md:h-7 text-[#13CD51]" />
                }
                url={"https://www.instagram.com/pedro.panstein/"}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
