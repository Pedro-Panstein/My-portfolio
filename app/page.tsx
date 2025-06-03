"use client";
import { motion } from "framer-motion";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/locales/translation";
import { useEffect, useRef, useState } from "react";
import kafka from "@/assets/tecnologies/kafka.png";
import git from "@/assets/tecnologies/git.png";
import docker from "@/assets/tecnologies/docker.png";
import kubernetes from "@/assets/tecnologies/kubernetes.png";
import aws from "@/assets/tecnologies/aws.png";
import kotlin from "@/assets/tecnologies/kotlin.png";
import tailwind from "@/assets/tecnologies/tailwind.png";
import mongoDB from "@/assets/tecnologies/mongodb.png";
import mysql from "@/assets/tecnologies/mysql.png";
import firebase from "@/assets/tecnologies/firebase.png";
import js from "@/assets/tecnologies/javascript.png";
import ts from "@/assets/tecnologies/typescript.png";
import react from "@/assets/tecnologies/react.png";
import next from "@/assets/tecnologies/next.png";
import angular from "@/assets/tecnologies/angular.png";
import nodejs from "@/assets/tecnologies/node.png";
import python from "@/assets/tecnologies/python.png";
import java from "@/assets/tecnologies/java.png";
import spring from "@/assets/tecnologies/spring.png";
import Slider from "@/components/Slider";
import { MdKeyboardDoubleArrowDown, MdOutlineEmail } from "react-icons/md";
import AboutMe from "@/components/AboutMe";
import MyWork from "@/components/MyWork";
import MyServices from "@/components/MyServices";
import { PiGithubLogo, PiLinkedinLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import Contact from "@/components/Contact";
import YearExperience from "@/components/YearExperience";
import MyExperience from "@/components/MyExperience";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const language = useLanguage();
  const currentTexts = translations[language as keyof typeof translations];
  const yearExperienceRef = useRef<HTMLDivElement>(null);
  const [yearExperience, setYearExperience] = useState(0);

  useEffect(() => {
    setMounted(true);
    const actualDate = new Date().getFullYear();
    setYearExperience(actualDate - 2021);
  }, []);

  if (!mounted) return null;

  const scrollToYearExperience = () => {
    yearExperienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
      name: currentTexts.next,
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
    <div className="w-full h-full">
      <div
        id="header"
        className="flex flex-col items-center relative justify-center pt-16 sm:pt-0 z-10"
      >
        <motion.img
          src="/myPhoto.png"
          alt="profile photo"
          className="p-0 mb-10 select-none"
          draggable="false"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
        />
        <motion.h3
          className="p-0 m-0 text-center sm:text-xl text-white font-inconsolata px-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
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
          viewport={{ once: false }}
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
          viewport={{ once: false }}
        >
          {currentTexts.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div
            onClick={scrollToYearExperience as any}
            className="absolute text-4xl text-gray-600 transform -translate-x-1/2 cursor-pointer left-1/2 bottom-5"
          >
            <MdKeyboardDoubleArrowDown />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        ref={yearExperienceRef}
        whileInView="visible"
        variants={fadeInVariants}
        viewport={{ once: false }}
        className="min-h-[60vh] flex flex-col sm:flex-row justify-center items-center sm:gap-10 text-white px-4 mb-32 sm:mb-0"
      >
        <YearExperience year={yearExperience} />

        <div className="flex flex-col items-center sm:items-start leading-none mt-[-40px] sm:mt-0">
          <p className="text-7xl font-bold text-white">{currentTexts.year}</p>
          <p className="text-3xl font-light text-gray-300 mt-2">
            {currentTexts.experience}
          </p>
        </div>
      </motion.div>

      <div>
        <Slider tecnologies={tecnologies} />
      </div>
      {/* About me */}
      <div className="z-20">
        <AboutMe />
      </div>

      {/* My experience */}
      <div>
        <MyExperience />
      </div>

      <div className="pt-24">
        <MyWork />
      </div>
      <div className="pt-24">
        <MyServices />
      </div>

      {/* Contact */}
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
              icon: (
                <span className="text-[#13CD51] text-2xl">
                  <PiLinkedinLogoBold />{" "}
                </span>
              ),
              title: "Linkedin",
              url: "https://www.linkedin.com/in/pedro-henrique-panstein-7833bb316/",
            },
            {
              icon: (
                <span className="text-[#13CD51] text-2xl">
                  <MdOutlineEmail />
                </span>
              ),
              title: "Email",
              url: "mailto:phpanstein@gmail.com",
            },
            {
              icon: (
                <span className="text-[#13CD51] text-2xl">
                  <PiGithubLogo />
                </span>
              ),
              title: "Github",
              url: "https://github.com/Pedro-Panstein",
            },
            {
              icon: (
                <span className="text-[#13CD51] text-2xl">
                  <FaInstagram />
                </span>
              ),
              title: "Instagram",
              url: "https://www.instagram.com/pedro.panstein/",
            },
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{
                x: index % 2 === 0 ? "20%" : "-20%",
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
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
