import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown, MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.png";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../locales/translation";
import AboutMe from "../Components/AboutMe";
import MyWork from "../Components/MyWork";
import MyServices from "../Components/MyServices";
import { PiGithubLogo, PiLinkedinLogoBold } from "react-icons/pi";
import Contact from "../Components/Contact";
import { useEffect } from "react";
import { doc, getDoc, setDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Slider from "../Components/Slider";

import angular from "../assets/tecnologies/angular.png";
import aws from "../assets/tecnologies/aws.png";
import docker from "../assets/tecnologies/docker.png";
import firebase from "../assets/tecnologies/firebase.png";
import git from "../assets/tecnologies/git.png";
import js from "../assets/tecnologies/javascript.png";
import kafka from "../assets/tecnologies/kafka.png";
import kotlin from "../assets/tecnologies/kotlin.png";
import kubernetes from "../assets/tecnologies/kubernetes.png";
import mongoDB from "../assets/tecnologies/mongodb.png";
import mysql from "../assets/tecnologies/mysql.png";
import nodejs from "../assets/tecnologies/node.png";
import python from "../assets/tecnologies/python.png";
import react from "../assets/tecnologies/react.png";
import spring from "../assets/tecnologies/spring.png";
import tailwind from "../assets/tecnologies/tailwind.png";
import java from "../assets/tecnologies/java.png";
import next from "../assets/tecnologies/next.png";
import ts from "../assets/tecnologies/typescript.png";

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

  const tecnologies = [
    {
      name: currentTexts.kafka,
      image: kafka,
    },
    {
      name: currentTexts.git,
      image: git,
    },
    {
      name: currentTexts.docker,
      image: docker,
    },
    {
      name: currentTexts.kubernetes,
      image: kubernetes,
    },
    {
      name: currentTexts.aws,
      image: aws,
    },

    {
      name: currentTexts.kotlin,
      image: kotlin,
    },
    {
      name: currentTexts.tailwind,
      image: tailwind,
    },
    {
      name: currentTexts.mongoDB,
      image: mongoDB,
    },
    {
      name: currentTexts.mysql,
      image: mysql,
    },
    {
      name: currentTexts.firebase,
      image: firebase,
    },
    {
      name: currentTexts.js,
      image: js,
    },
    {
      name: currentTexts.ts,
      image: ts,
    },
    {
      name: currentTexts.react,
      image: react,
    },
    {
      name: currentTexts.nextjs,
      image: next,
    },
    {
      name: currentTexts.angular,
      image: angular,
    },
    {
      name: currentTexts.nodejs,
      image: nodejs,
    },
    {
      name: currentTexts.python,
      image: python,
    },
    {
      name: currentTexts.java,
      image: java,
    },
    {
      name: currentTexts.spring,
      image: spring,
    },
  ];

  return (
    <div className="w-full h-full bg-defaultBackground">
      <div
        id="header"
        className="flex flex-col items-center justify-center pt-16 sm:pt-0"
      >
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
          className="p-0 m-0 text-center sm:text-xl text-white font-inconsolata px-10"
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
          className="text-[2rem] md:text-[3.5rem] lg:text-[3.8rem] text-white font-asap mt-5 md:mt-0 px-10 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }} // Permite refazer a animação ao voltar
        >
          <span
            className={`${
              currentTexts.job[0] === "Full stack"
                ? "text-[#13CD51] font-bold"
                : " "
            }`}
          >
            {currentTexts.job[0]}
          </span>{" "}
          <span
            className={`${
              currentTexts.job[1] === "Full stack"
                ? "text-[#13CD51] font-bold"
                : " "
            }`}
          >
            {currentTexts.job[1]}
          </span>{" "}
        </motion.h1>
        <motion.p
          className="max-w-[850px] text-justify md:text-center text-white font-maven-pro text-md mt-5 py-0 px-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }} // Permite refazer a animação ao voltar
        >
          {currentTexts.description}
        </motion.p>

        {/* Animação para Habilities */}
        <Slider tecnologies={tecnologies} />

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
        className="flex flex-col items-center justify-center pt-32 text-center px-10"
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
          className="my-2 text-2xl sm:text-3xl font-semibold text-white font-asap"
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center w-full max-w-2xl gap-4 mt-10 mx-auto" // Container principal com largura máxima
        >
          {[
            {
              icon: <PiLinkedinLogoBold className="text-[#13CD51] text-2xl" />,
              title: "Linkedin",
              url: "https://www.linkedin.com/in/pedro-henrique-panstein-7833bb316/",
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
              className="w-full"
            >
              <Contact {...contact} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <p className="text-center text-[#C0C4CE] font-maven-pro pb-5">
        &copy; {new Date().getFullYear()} Pedro Panstein
      </p>
    </div>
  );
}
