import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "../locales/translation";

export default function MyExperience() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}
      viewport={{ once: false }}
      className="py-20 px-4 relative mt-28"
      id="experiencia"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-center font-inconsolata text-[#13CD51] text-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
        >
          {t.myExperience}
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
          className="text-gray-200 text-center text-xl max-w-2xl font-asap mx-auto mb-16"
        >
          {t.myExperienceDescription}
        </motion.p>

        <Tabs defaultValue="experiencia" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger
              value="experiencia"
              className="data-[state=active]:bg-[#13CD51]/20 data-[state=active]:text-[#13CD51]"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              {t.experienceContent.experience.title}
            </TabsTrigger>
            <TabsTrigger
              value="educacao"
              className="data-[state=active]:bg-[#13CD51]/20 data-[state=active]:text-[#13CD51]"
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              {t.experienceContent.education.title}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experiencia" className="space-y-8">
            <div className="relative border-l-2 border-[#13CD51]/60 pl-[26px] ml-4 space-y-12">
              {t.experienceContent.experience.experiences.map((item, index) => (
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
                  className="relative"
                >
                  <div className="absolute -left-[42px] h-8 w-8 rounded-full bg-black border-2 border-[#13CD51] flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-[#13CD51]" />
                  </div>
                  <div className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border-2 border-[#13CD51]/60">
                    <span className="inline-block px-3 py-1 rounded-full text-xs bg-[#13CD51]/20 text-[#13CD51] mb-4">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <h4 className="text-[#13CD51] mb-3 font-bold">
                      {item.company}
                    </h4>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="educacao" className="space-y-8">
            <div className="relative border-l-2 border-[#13CD51]/60 pl-[26px] ml-4 space-y-12">
              {t.experienceContent.education.educations.map((item, index) => (
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
                  className="relative"
                >
                  <div className="absolute -left-[42px] h-8 w-8 rounded-full bg-black border-2 border-[#13CD51] flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-[#13CD51]" />
                  </div>
                  <div className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border-2 border-[#13CD51]/60">
                    <span className="inline-block px-3 py-1 rounded-full text-xs bg-[#13CD51]/20 text-[#13CD51] mb-4">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <h4 className="text-[#13CD51] mb-3 font-bold">
                      {item.institution}
                    </h4>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}
