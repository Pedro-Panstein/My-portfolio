import { IoLogoJavascript } from "react-icons/io";
import myPhoto from "../assets/myPhoto.png";
import Habilitie from "../Components/Habilitie";
import {
  FaAngular,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import java from "../assets/java.svg";
import spring from "../assets/spring.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../locales/translation"; // Importando o arquivo de traduções
import AboutMe from "../Components/AboutMe";

export default function HomePage() {
  const language = useLanguage();

  // Agora as traduções vêm do arquivo importado
  const currentTexts = translations[language];

  return (
    <>
      <div className="w-full h-full bg-defaultBackground">
        <div id="header" className="flex flex-col items-center justify-center">
          <img
            src={myPhoto}
            alt="profile photo"
            className="p-0 mb-10 select-none"
            draggable="false"
          />
          <h3 className="p-0 m-0 text-xl text-white font-inconsolata">
            {currentTexts.hello}{" "}
            <span className="text-[#13CD51]">Pedro Henrique Panstein</span>{" "}
            {currentTexts.hello2}
          </h3>
          <h1 className="text-[3.8rem] text-white font-asap m-0 p-0 text-center">
            {currentTexts.jobTitle}
          </h1>
          <p className="w-[800px] text-center text-white font-maven-pro text-md m-0 p-0">
            {currentTexts.description}
          </p>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <Habilitie
              icon={<FaGitAlt />}
              title={currentTexts.github}
              url={"https://git-scm.com"}
              className="text-2xl text-[#F4511E]"
            />
            <Habilitie
              icon={<FaHtml5 className="text-[#E3646E] text-2xl" />}
              title={currentTexts.html}
              url={"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}
            />
            <Habilitie
              icon={<FaCss3 className="text-[#3996DB] text-2xl" />}
              title={currentTexts.css}
              url={"https://developer.mozilla.org/pt-BR/docs/Web/CSS"}
            />
            <Habilitie
              icon={<IoLogoJavascript className="text-[#EABD5F] text-2xl" />}
              title={currentTexts.javascript}
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"}
            />
            <Habilitie
              icon={<FaReact className="text-[#3996DB] text-2xl" />}
              title={currentTexts.react}
              url={"https://react.dev"}
            />
            <Habilitie
              icon={<FaAngular className="text-[#A00F0F] text-2xl" />}
              title={currentTexts.angular}
              url={"https://angular.dev"}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            <Habilitie
              icon={java}
              title={currentTexts.java}
              url={"https://www.java.com/pt-BR/"}
            />
            <Habilitie
              icon={spring}
              title={currentTexts.spring}
              url={"https://spring.io"}
            />
            <Habilitie
              icon={<GrMysql className="text-2xl text-[#00758F]" />}
              title={currentTexts.mysql}
              url={"https://www.mysql.com"}
            />
            <Habilitie
              icon={<FaNodeJs className="text-2xl text-[#82BC4F]" />}
              title={currentTexts.nodejs}
              url={"https://nodejs.org/pt"}
            />
          </div>
          <MdKeyboardDoubleArrowDown className="absolute text-4xl text-gray-600 animate-bounce bottom-5" />
        </div>
        <AboutMe />
        <div className="h-[100vh]"></div>
      </div>
    </>
  );
}
