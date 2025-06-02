import { motion } from "framer-motion";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/locales/translation";
import { Server, Zap } from "lucide-react";

export default function MyServices() {
  const language = useLanguage();
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
    <section className="py-20 px-4 relative" id="servicos">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-center font-inconsolata text-[#13CD51] text-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
        >
          {t.myServicesTitle}
        </motion.h3>
        <motion.h2
          className="text-center font-asap text-[#E2E4E9] text-2xl mt-2"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
        >
          {t.myServicesSubtitle}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: t.services[0].title,
              description: t.services[0].description,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              gradient: "from-purple-500 to-pink-500",
            },
            {
              title: t.services[1].title,
              description: t.services[1].description,
              icon: <Server className="h-6 w-6 text-white" />,
              gradient: "from-yellow-500 to-orange-500",
            },
            {
              title: t.services[2].title,
              description: t.services[2].description,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              ),
              gradient: "from-green-500 to-emerald-500",
            },
            {
              title: t.services[3].title,
              description: t.services[3].description,
              icon: <Zap className="h-6 w-6 text-white" />,
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              title: t.services[4].title,
              description: t.services[4].description,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
              gradient: "from-red-500 to-pink-500",
            },
            {
              title: t.services[5].title,
              description: t.services[5].title,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ),
              gradient: "from-cyan-500 to-blue-500",
            },
          ].map((service, index) => (
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
              className="group backdrop-blur-sm bg-black/40 rounded-xl p-8 border-[3px] border-emerald-500/40 hover:border-[#13CD51]/80 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div
                className={`mb-6 h-12 w-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#13CD51] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
