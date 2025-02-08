import React, { useRef } from "react";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaAngular,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaInstagram,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { MdKeyboardDoubleArrowDown, MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.png";
import Habilitie from "../Components/Habilitie";
import java from "../assets/java.svg";
import spring from "../assets/spring.png";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../locales/translation";
import AboutMe from "../Components/AboutMe";
import MyWork from "../Components/MyWork";
import MyServices from "../Components/MyServices";
import { PiGithubLogo, PiLinkedinLogoBold } from "react-icons/pi";
import Contact from "../Components/Contact";

import { useEffect } from "react";
import { doc, getDoc, setDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Caminho para o arquivo firebaseConfig.

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

  useEffect(() => {
    const incrementViewCount = async () => {
      const viewKey = "hasViewed"; // Chave única para identificar a visualização desta página

      // Verifica se o usuário já contou a visualização nesta sessão
      if (localStorage.getItem(viewKey) === "true") {
        console.log("Visualização já contabilizada nesta sessão.");
        return;
      }

      // Marca no localStorage que a visualização foi contabilizada
      localStorage.setItem(viewKey, "true");

      const docRef = doc(db, "Banco de acessos", "Portifolio"); // Referência ao Firestore

      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          await updateDoc(docRef, {
            Visualizações: increment(1),
          });
        } else {
          await setDoc(docRef, { Visualizações: 1 });
        }
      } catch (error) {
        console.error("Erro ao acessar ou atualizar visualizações:", error);
      }
    };

    incrementViewCount();
  }, []);

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
              title: currentTexts.mysql,
              url: "https://www.mysql.com",
            },
            {
              icon: <FaNodeJs className="text-[#82BC4F] text-2xl" />,
              title: currentTexts.nodejs,
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
      <div className="pt-24">
        <MyWork />
      </div>
      <div className="pt-24">
        <MyServices />
      </div>
      <motion.div
        id="footer"
        className="flex flex-col items-center justify-center pt-32 text-center"
      >
        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
          className="text-[#13CD51] text-xl font-inconsolata"
        >
          {currentTexts.footerTitle}
        </motion.h3>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
          className="my-2 text-3xl font-semibold text-white font-asap"
        >
          {currentTexts.footerSubtitle}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
          className="font-maven-pro text-[#C0C4CE] text-lg"
        >
          {currentTexts.footerDescription}
        </motion.p>
        <div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center gap-5 mt-10"
        >
          {[
            {
              icon: <PiLinkedinLogoBold className="text-[#13CD51] text-2xl" />,
              title: "Linkedin",
              url: "https://aindaestaporvir.com",
            },
            {
              icon: <MdOutlineEmail className="text-[#13CD51] text-2xl" />,
              title: "Email",
              url: "mailto:phpanstein@gmail.com",
            },
            {
              icon: <PiGithubLogo className="text-[#13CD51] text-2xl" />,
              title: "Github",
              url: "https://github.com/Pedro-Panstein",
            },
            {
              icon: <FaInstagram className="text-[#13CD51] text-2xl" />,
              title: "Instagram",
              url: "https://www.instagram.com/pedro.panstein/",
            },
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{
                x: index % 2 === 0 ? "20%" : "-20%", // Alterna entrada: par da direita, ímpar da esquerda
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }} // Animação para posição final
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Adiciona atraso para o efeito cascata
                ease: "easeOut",
              }}
              viewport={{ once: false }}
            >
              <Contact {...contact} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <p className="text-center text-[#C0C4CE] font-maven-pro pb-5">
        &copy; {new Date().getFullYear()} Pedro Panstein
      </p>
    </div>
  );
}
