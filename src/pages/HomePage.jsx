import React, { useRef } from "react";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaAngular,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.png";
import Habilitie from "../Components/Habilitie";
import java from "../assets/java.svg";
import spring from "../assets/spring.png";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../locales/translation";
import AboutMe from "../Components/AboutMe";
import MyWork from "../Components/MyWork";

export default function HomePage() {
  const language = useLanguage();
  const currentTexts = translations[language];

  // Ref para o AboutMe
  const aboutMeRef = useRef(null);

  // Função para rolar até o AboutMe
  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Variantes de animação para os elementos
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Inicial (invisível e deslocado para baixo)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-full bg-defaultBackground">
      <div id="header" className="flex flex-col items-center justify-center">
        {/* Animação da foto */}
        <motion.img
          src={myPhoto}
          alt="profile photo"
          className="p-0 mb-10 select-none"
          draggable="false"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }} // Permite refazer a animação ao voltar
        />
        {/* Animação do título */}
        <motion.h3
          className="p-0 m-0 text-xl text-white font-inconsolata"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }} // Permite refazer a animação ao voltar
        >
          {currentTexts.hello}{" "}
          <span className="text-[#13CD51]">Pedro Henrique Panstein</span>{" "}
          {currentTexts.hello2}
        </motion.h3>
        <motion.h1
          className="text-[3.8rem] text-white font-asap m-0 p-0 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }} // Permite refazer a animação ao voltar
        >
          {currentTexts.jobTitle}
        </motion.h1>
        <motion.p
          className="w-[800px] text-center text-white font-maven-pro text-md m-0 p-0"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }} // Permite refazer a animação ao voltar
        >
          {currentTexts.description}
        </motion.p>

        {/* Animação para Habilities */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {[
            {
              icon: <FaGitAlt className="text-2xl text-[#F4511E]" />,
              title: currentTexts.github,
              url: "https://git-scm.com",
            },
            {
              icon: <FaHtml5 className="text-[#E3646E] text-2xl" />,
              title: currentTexts.html,
              url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
            },
            {
              icon: <FaCss3 className="text-[#3996DB] text-2xl" />,
              title: currentTexts.css,
              url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
            },
            {
              icon: <IoLogoJavascript className="text-[#EABD5F] text-2xl" />,
              title: currentTexts.javascript,
              url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
            },
            {
              icon: <FaReact className="text-[#3996DB] text-2xl" />,
              title: currentTexts.react,
              url: "https://react.dev",
            },
            {
              icon: <FaAngular className="text-[#A00F0F] text-2xl" />,
              title: currentTexts.angular,
              url: "https://angular.dev",
            },
          ].map((habilitie, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: false }} // Permite refazer a animação ao voltar
            >
              <Habilitie {...habilitie} />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {[
            {
              icon: java,
              title: currentTexts.java,
              url: "https://www.java.com/pt-BR/",
            },
            {
              icon: spring,
              title: currentTexts.spring,
              url: "https://spring.io",
            },
            {
              icon: <GrMysql className="text-[#00758F] text-2xl" />,
              title: currentTexts.css,
              url: "https://www.mysql.com",
            },
            {
              icon: <FaNodeJs className="text-[#82BC4F] text-2xl" />,
              title: currentTexts.javascript,
              url: "https://nodejs.org/pt",
            },
          ].map((habilitie, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: false }} // Permite refazer a animação ao voltar
            >
              <Habilitie {...habilitie} />
            </motion.div>
          ))}
        </div>

        {/* Botão de Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <MdKeyboardDoubleArrowDown
            onClick={scrollToAboutMe}
            className="absolute text-4xl text-gray-600 transform -translate-x-1/2 cursor-pointer left-1/2 bottom-5"
          />
        </motion.div>
      </div>

      {/* AboutMe com scroll suave */}
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div>
        <MyWork />
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
}
