import useLanguage from "../hooks/useLanguage";
import { useState } from "react";
import { translations } from "../locales/translation";
import { motion } from "framer-motion";
import plasmaDocs from "@/assets/projects/plasma-docs.png";
import machineManagement from "@/assets/projects/machine-management.png";
import ricadi from "@/assets/projects/ricadi.png";
import cashControlHub from "@/assets/projects/cash-control-hub.png";
import crudUsers from "@/assets/projects/crudUsers.png";
import portalConselho from "@/assets/projects/portal-conselho.png";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function MyWork() {
  const [selectedImageCard, setImageCard] = useState(null);
  const language = useLanguage();
  const t = translations[language as keyof typeof translations];

  //   useEffect(() => {
  //     if (language === "pt") {
  //       setImageCard(emBreve);
  //     } else {
  //       setImageCard(comingSoon);
  //     }
  //   }, [language]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      id: 1,
      image: portalConselho,
      title: t.projects[0].title,
      description: t.projects[0].description,
      url: "/projects/council-portal",
      tags: ["Next.js", "Java", "Phyton", "Kafka", "+12"],
    },
    {
      id: 2,
      image: machineManagement,
      title: t.projects[1].title,
      description: t.projects[1].description,
      url: "/projects/machine-management",
      tags: ["React", "Kafka", "Docker", "GraphQL", "+5"],
    },
    {
      id: 3,
      image: plasmaDocs,
      title: t.projects[2].title,
      description: t.projects[2].description,
      url: "/projects/plasma-docs",
      tags: ["Next.js", "Shadcn", "Tailwind CSS", "TypeScript"],
    },
    {
      id: 4,
      image: ricadi,
      title: t.projects[3].title,
      description: t.projects[3].description,
      url: "/projects/ricadi",
      tags: ["React", "Tailwind Css", "Firebase", "CI/CD", "+2"],
    },
    {
      id: 5,
      image: crudUsers,
      title: t.projects[4].title,
      description: t.projects[4].description,
      url: "/projects/crud-users",
      tags: ["Angular", "Angular Material", "SCSS", "Firebase"],
    },
    {
      id: 6,
      image: cashControlHub,
      title: t.projects[5].title,
      description: t.projects[5].description,
      url: "/projects/cash-control-hub",
      tags: ["Next.js", "Recharts", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <section className="py-20 px-4 relative" id="projetos">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-center font-inconsolata text-[#13CD51] text-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
        >
          {t.myWorkTitle}
        </motion.h3>
        <motion.h2
          className="text-center font-asap text-[#E2E4E9] text-2xl mt-2"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
        >
          {t.myWorkSubtitle}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4 },
            },
          }}
          viewport={{ once: false }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative group overflow-hidden bg-black/40 backdrop-blur-sm border-[3px] border-[#13CD51]/10 hover:border-[#13CD51]/80 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <Link href={project.url}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </Link>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={project.url}>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 rounded-full bg-black/50 border-[#13CD51]/50"
                    >
                      <ExternalLink className="h-4 w-4 text-[#13CD51]" />
                    </Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#13CD51] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-black/60 text-[#13CD51] border-[#13CD51]/30 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
