import { FaGithub, FaInstagram } from "react-icons/fa";
import aboutMePhoto from "../assets/aboutme-photo2.jpg";
import ButtonAboutMe from "./ButtonAboutMe";
import { PiLinkedinLogoBold } from "react-icons/pi";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../locales/translation";

export default function AboutMe() {
  const language = useLanguage();

  const currentTexts = translations[language];

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-32">
        <h2 className="font-inconsolata text-[#13CD51] text-xl">
          {currentTexts.aboutMeTitle}
        </h2>
        <div className="bg-[#0f1114] border-[#38393C] border-2 rounded-lg p-10 mt-10">
          <div className="flex gap-10">
            <img
              src={aboutMePhoto}
              alt="profile photo"
              className="rounded-md h-96"
            />
            <div className="flex flex-col w-[500px]">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
