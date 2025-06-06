"use client";

import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/locales/translation";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Users,
  Calendar,
  Award,
  Code,
  Cloud,
  MessageSquare,
  BarChart3,
  CheckCircle,
  Clock,
  Target,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  GitBranch,
  Server,
  Linkedin,
} from "lucide-react";
import fluxoDoSistema from "@/assets/projects/Fluxo do sistema.png";
import portalConselho from "@/assets/projects/portal-conselho.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import next from "@/assets/tecnologies/next.png";
import typescript from "@/assets/tecnologies/typescript.png";
import tailwind from "@/assets/tecnologies/tailwind.png";
import mui from "@/assets/tecnologies/mui.svg";
import spring from "@/assets/tecnologies/spring.png";
import phyton from "@/assets/tecnologies/python.png";
import mysql from "@/assets/tecnologies/mysql.png";
import node from "@/assets/tecnologies/node.png";
import docker from "@/assets/tecnologies/docker.png";
import kubernetes from "@/assets/tecnologies/kubernetes.png";
import aws from "@/assets/tecnologies/aws.png";
import kafka from "@/assets/tecnologies/kafka.png";
import councilChat from "@/assets/projects/councilChat.png";
import { MdManageHistory } from "react-icons/md";

export default function CouncilPortal() {
  const language = useLanguage();
  const t = translations[language as keyof typeof translations];

  const technologies = {
    frontend: [
      { name: "Next.js", icon: next },
      { name: "TypeScript", icon: typescript },
      { name: "TailwindCSS", icon: tailwind },
      { name: "Material UI", icon: mui },
    ],
    backend: [
      { name: "Spring Boot", icon: spring },
      { name: "Node.js", icon: node },
      { name: "Python Flask", icon: phyton },
      { name: "MySQL", icon: mysql },
    ],
    infrastructure: [
      { name: "Docker", icon: docker },
      { name: "Kubernetes", icon: kubernetes },
      { name: "AWS S3", icon: aws },
      { name: "Apache Kafka", icon: kafka },
    ],
  };

  const timeline = [
    {
      icon: <Users className="h-5 w-5" />,
    },
    {
      icon: <Target className="h-5 w-5" />,
    },
    {
      icon: <Code className="h-5 w-5" />,
    },
    {
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      icon: <Globe className="h-5 w-5" />,
    },
    {
      icon: <Server className="h-5 w-5" />,
    },
    {
      icon: <Cloud className="h-5 w-5" />,
    },
    {
      icon: <Award className="h-5 w-5" />,
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ];

  const userProfiles = [
    {
      title: t.projectsPages["council-portal"].userProfiles.student.title,
      description:
        t.projectsPages["council-portal"].userProfiles.student.description,
      icon: <Users className="h-6 w-6" />,
      features: t.projectsPages["council-portal"].userProfiles.student.features,
    },
    {
      title: t.projectsPages["council-portal"].userProfiles.leader.title,
      description:
        t.projectsPages["council-portal"].userProfiles.leader.description,
      icon: <Shield className="h-6 w-6" />,
      features: t.projectsPages["council-portal"].userProfiles.leader.features,
    },
    {
      title: t.projectsPages["council-portal"].userProfiles.teacher.title,
      description:
        t.projectsPages["council-portal"].userProfiles.teacher.description,
      icon: <Code className="h-6 w-6" />,
      features: t.projectsPages["council-portal"].userProfiles.teacher.features,
    },
    {
      title: t.projectsPages["council-portal"].userProfiles.pedagogic.title,
      description:
        t.projectsPages["council-portal"].userProfiles.pedagogic.description,
      icon: <BarChart3 className="h-6 w-6" />,
      features:
        t.projectsPages["council-portal"].userProfiles.pedagogic.features,
    },
    {
      title: t.projectsPages["council-portal"].userProfiles.supervisors.title,
      description:
        t.projectsPages["council-portal"].userProfiles.supervisors.description,
      icon: <Award className="h-6 w-6" />,
      features:
        t.projectsPages["council-portal"].userProfiles.supervisors.features,
    },
    {
      title: t.projectsPages["council-portal"].userProfiles.admin.title,
      description:
        t.projectsPages["council-portal"].userProfiles.admin.description,
      icon: <MdManageHistory className="h-6 w-6" />,
      features: t.projectsPages["council-portal"].userProfiles.admin.features,
    },
  ];

  const team = [
    {
      name: "Pedro Henrique Panstein",
      role: "Desenvolvedor Full Stack",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
    {
      name: "Pedro Augusto Wilhelm",
      role: "Desenvolvedor Backend",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
    {
      name: "Mateus Henrique Bosquetti",
      role: "Desenvolvedor Frontend",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
    {
      name: "Kauan Eggert",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
    {
      name: "Vinícius Eduardo dos Santos",
      role: "UX/UI Designer",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-[#13CD51]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="flex items-center gap-2 text-[#13CD51] hover:text-[#5ddd87f5] transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                {t.projectsPages["council-portal"].navbar}
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/Hivqs79/Portal_do_Conselho"
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:[#5ddd87f5] transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="hidden md:inline">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#13CD51]/20 text-[#13CD51] border-[#13CD51]/30">
                {t.projectsPages["council-portal"].hero.highligh}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {t.projectsPages["council-portal"].hero.title}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13CD51] to-cyan-400">
                  {t.projectsPages["council-portal"].hero.title2}
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                {t.projectsPages["council-portal"].hero.description}
              </p>

              <div className="relative max-w-4xl mx-auto mb-8">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#13CD51]/20 to-cyan-600/20 opacity-75 blur-md"></div>
                <div className="relative overflow-hidden rounded-xl border border-[#13CD51]/30">
                  <Image
                    src={portalConselho}
                    alt="Portal do Conselho - Interface Principal"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="h-5 w-5 text-[#13CD51]" />
                  <span>{t.projectsPages["council-portal"].hero.calendar}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="h-5 w-5 text-[#13CD51]" />
                  <span>{t.projectsPages["council-portal"].hero.devs}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="h-5 w-5 text-[#13CD51]" />
                  <span>{t.projectsPages["council-portal"].hero.winner}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Summary */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">
                {t.projectsPages["council-portal"].summary.title}
              </span>{" "}
              {t.projectsPages["council-portal"].summary.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#13CD51]">
                    {t.projectsPages["council-portal"].summary.challenge.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {
                      t.projectsPages["council-portal"].summary.challenge
                        .description
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#13CD51]">
                    {t.projectsPages["council-portal"].summary.solution.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {
                      t.projectsPages["council-portal"].summary.solution
                        .description
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#13CD51]">
                    {t.projectsPages["council-portal"].summary.team.title}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-200">
                      <span className="text-[#1eb174] font-semibold">
                        Pedro Henrique Panstein
                      </span>{" "}
                      ({t.projectsPages["council-portal"].summary.team.me})
                    </p>
                    <p className="text-gray-200">Pedro Augusto Wilhelm</p>
                    <p className="text-gray-200">Mateus Henrique Bosquetti</p>
                    <p className="text-gray-200">Kauan Eggert</p>
                    <p className="text-gray-200">Vinícius Eduardo dos Santos</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">
                      {t.projectsPages["council-portal"].summary.months}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {t.projectsPages["council-portal"].summary.months2}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                  <CardContent className="p-6">
                    <Server className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">
                      {t.projectsPages["council-portal"].summary.microservice}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {t.projectsPages["council-portal"].summary.microservice2}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">
                      {t.projectsPages["council-portal"].summary.profileUsers}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {t.projectsPages["council-portal"].summary.profileUsers2}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                  <CardContent className="p-6">
                    <Award className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">
                      {t.projectsPages["council-portal"].summary.winner}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {t.projectsPages["council-portal"].summary.winner2}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">
                {t.projectsPages["council-portal"].Technologies.title}
              </span>
              {t.projectsPages["council-portal"].Technologies.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger
                  value="frontend"
                  className="data-[state=active]:bg-[#13CD51]/20 data-[state=active]:text-[#13CD51]"
                >
                  Frontend
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="data-[state=active]:bg-[#13CD51]/20 data-[state=active]:text-[#13CD51]"
                >
                  Backend
                </TabsTrigger>
                <TabsTrigger
                  value="infrastructure"
                  className="data-[state=active]:bg-[#13CD51]/20 data-[state=active]:text-[#13CD51]"
                >
                  {t.projectsPages["council-portal"].Technologies.infra}
                </TabsTrigger>
              </TabsList>

              {Object.entries(technologies).map(([category, techs]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {techs.map((tech, index) => (
                      <Card
                        key={index}
                        className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 hover:border-[#13CD51]/50 transition-all duration-300 group"
                      >
                        <CardContent className="p-6 text-center">
                          <div className="h-16 w-16 mx-auto mb-4 relative flex items-center justify-center">
                            <Image
                              src={tech.icon || "/placeholder.svg"}
                              alt={tech.name}
                              width={48}
                              height={48}
                              className="transition-all duration-300 group-hover:scale-110"
                            />
                          </div>
                          <h3 className="font-semibold group-hover:text-[#13CD51] transition-colors">
                            {tech.name}
                          </h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">
                {t.projectsPages["council-portal"].architecture.title}
              </span>{" "}
              {t.projectsPages["council-portal"].architecture.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#13CD51]">
                  {
                    t.projectsPages["council-portal"].architecture.microservice
                      .title
                  }
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {
                    t.projectsPages["council-portal"].architecture.microservice
                      .description
                  }
                </p>

                <h3 className="text-2xl font-bold text-[#13CD51]">
                  {t.projectsPages["council-portal"].architecture.kafka.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {
                    t.projectsPages["council-portal"].architecture.kafka
                      .description
                  }
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#13CD51]/20 to-cyan-600/20 opacity-75 blur-md"></div>
                <div className="relative overflow-hidden rounded-xl border border-[#13CD51]/30">
                  <Image
                    src={fluxoDoSistema}
                    alt="Arquitetura do Sistema"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#13CD51]">
                    <GitBranch className="h-5 w-5" />
                    {
                      t.projectsPages["council-portal"].architecture.decoupling
                        .title
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm">
                    {
                      t.projectsPages["council-portal"].architecture.decoupling
                        .description
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#13CD51]">
                    <Zap className="h-5 w-5" />
                    {
                      t.projectsPages["council-portal"].architecture
                        .escalability.title
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm">
                    {
                      t.projectsPages["council-portal"].architecture
                        .escalability.description
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#13CD51]">
                    <Shield className="h-5 w-5" />
                    {
                      t.projectsPages["council-portal"].architecture.resiliency
                        .title
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm">
                    {
                      t.projectsPages["council-portal"].architecture.resiliency
                        .description
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* User Profiles */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">Funcionalidades</span> por Perfil
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userProfiles.map((profile, index) => (
                <Card
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 hover:border-[#13CD51]/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-[#13CD51] group-hover:text-[#37a75c] transition-colors">
                      {profile.icon}
                      {profile.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-200 text-sm">
                      {profile.description}
                    </p>
                    <ul className="space-y-2">
                      {profile.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-[#13CD51] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Chat Feature */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">
                {t.projectsPages["council-portal"].chat.title}
              </span>{" "}
              {t.projectsPages["council-portal"].chat.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-8 w-8 text-[#13CD51]" />
                  <h3 className="text-2xl font-bold">
                    {t.projectsPages["council-portal"].chat.descriptions.title}
                  </h3>
                </div>

                <p className="text-gray-200 leading-relaxed">
                  {
                    t.projectsPages["council-portal"].chat.descriptions
                      .description
                  }
                </p>

                <div className="space-y-4">
                  {t.projectsPages[
                    "council-portal"
                  ].chat.descriptions.topics.map((row, index) => (
                    <div className="flex items-start gap-3" key={index}>
                      <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#13CD51]">
                          {row.title}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {row.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#13CD51]/20 to-cyan-600/20 opacity-75 blur-md"></div>
                <div className="relative overflow-hidden rounded-xl border border-[#13CD51]/30">
                  <Image
                    src={councilChat}
                    alt="Interface do Chat"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">
                {t.projectsPages["council-portal"].timeline.title}
              </span>{" "}
              {t.projectsPages["council-portal"].timeline.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#13CD51]/30"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-black border-2 border-[#13CD51] rounded-full flex items-center justify-center">
                      <div className="text-[#13CD51]">{item.icon}</div>
                    </div>

                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 hover:border-[#13CD51]/50 transition-all duration-300">
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-[#13CD51]/20 text-[#13CD51] border-[#13CD51]/30">
                            {
                              t.projectsPages["council-portal"].timeline.line[
                                index
                              ].phase
                            }
                          </Badge>
                          <h3 className="text-xl font-bold mb-2">
                            {
                              t.projectsPages["council-portal"].timeline.line[
                                index
                              ].title
                            }
                          </h3>
                          <p className="text-gray-200 text-sm">
                            {
                              t.projectsPages["council-portal"].timeline.line[
                                index
                              ].description
                            }
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">
                {t.projectsPages["council-portal"].interface.title}
              </span>{" "}
              {t.projectsPages["council-portal"].interface.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#13CD51]/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl border border-[#13CD51]/30">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt={
                        t.projectsPages["council-portal"].interface.subTitles[0]
                          .text
                      }
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-2">
                    {
                      t.projectsPages["council-portal"].interface.subTitles[0]
                        .text
                    }
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#13CD51]/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl border border-[#13CD51]/30">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt={
                        t.projectsPages["council-portal"].interface.subTitles[2]
                          .text
                      }
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-2">
                    {
                      t.projectsPages["council-portal"].interface.subTitles[2]
                        .text
                    }
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#13CD51]/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl border border-[#13CD51]/30">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt={
                        t.projectsPages["council-portal"].interface.subTitles[1]
                          .text
                      }
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-2">
                    {
                      t.projectsPages["council-portal"].interface.subTitles[1]
                        .text
                    }
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#13CD51]/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl border border-[#13CD51]/30">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt={
                        t.projectsPages["council-portal"].interface.subTitles[3]
                          .text
                      }
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-2">
                    {
                      t.projectsPages["council-portal"].interface.subTitles[3]
                        .text
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="flex justify-center gap-8 mb-6">
                <div className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-[#13CD51]" />
                  <span className="text-gray-300">
                    {t.projectsPages["council-portal"].interface.desktop}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-[#13CD51]" />
                  <span className="text-gray-300">
                    {t.projectsPages["council-portal"].interface.mobile}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">
                {t.projectsPages["council-portal"].results.title}
              </span>{" "}
              {t.projectsPages["council-portal"].results.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-[#13CD51] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    {t.projectsPages["council-portal"].results.results[0].title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {t.projectsPages["council-portal"].results.results[0].description}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                <CardContent className="p-8">
                  <Zap className="h-12 w-12 text-[#13CD51] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t.projectsPages["council-portal"].results.results[1].title}</h3>
                  <p className="text-gray-200 text-sm">
                    {t.projectsPages["council-portal"].results.results[1].description}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                <CardContent className="p-8">
                  <BarChart3 className="h-12 w-12 text-[#13CD51] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t.projectsPages["council-portal"].results.results[2].title}</h3>
                  <p className="text-gray-200 text-sm">
                    {t.projectsPages["council-portal"].results.results[2].description}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="backdrop-blur-sm bg-black/40 rounded-xl p-8 border border-[#13CD51]/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-[#13CD51]">
                {t.projectsPages["council-portal"].results.title3}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{t.projectsPages["council-portal"].results.criterias[0].title}</h4>
                  <p className="text-gray-300 text-sm">
                    {t.projectsPages["council-portal"].results.criterias[0].description}
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{t.projectsPages["council-portal"].results.criterias[1].title}</h4>
                  <p className="text-gray-300 text-sm">
                    {t.projectsPages["council-portal"].results.criterias[1].description}
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{t.projectsPages["council-portal"].results.criterias[2].title}</h4>
                  <p className="text-gray-300 text-sm">
                    {t.projectsPages["council-portal"].results.criterias[2].description}
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{t.projectsPages["council-portal"].results.criterias[3].title}</h4>
                  <p className="text-gray-300 text-sm">
                    {t.projectsPages["council-portal"].results.criterias[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">Aprendizados</span> e Conclusão
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#13CD51]">
                  Desafios Enfrentados
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Prazo apertado de apenas 2 meses para entrega completa
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Complexidade da arquitetura em microserviços
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Integração de múltiplas tecnologias e serviços
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Coordenação de equipe multidisciplinar
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-[#13CD51]">
                  Tecnologias Dominadas
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Apache Kafka para mensageria e eventos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Kubernetes para orquestração de containers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Arquitetura de microserviços na prática
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Integração de serviços AWS
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#13CD51]">
                  Crescimento Pessoal
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Este projeto representou uma transformação significativa na
                  minha forma de desenvolver soluções. A experiência de liderar
                  uma equipe técnica, tomar decisões arquiteturais complexas e
                  entregar uma solução que impacta diretamente a vida acadêmica
                  de centenas de alunos foi extremamente enriquecedora.
                </p>

                <h3 className="text-2xl font-bold text-[#13CD51]">
                  Reflexões Futuras
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Apesar da complexidade técnica e do prazo desafiador,
                  conseguimos entregar uma solução completa, funcional e
                  escalável. É interessante imaginar o que seria possível com
                  mais tempo e investimento - certamente poderíamos explorar
                  ainda mais funcionalidades avançadas como machine learning
                  para análise preditiva de desempenho e inteligência artificial
                  para insights pedagógicos.
                </p>

                <div className="backdrop-blur-sm bg-[#13CD51]/10 rounded-xl p-6 border border-[#13CD51]/30">
                  <p className="text-[#8fffb4] italic text-center">
                    "Este projeto vai além da tecnologia — representa uma
                    transformação concreta na forma como desenvolvemos soluções
                    educacionais."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Devs */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {member.role}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Links and Credits */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-[#13CD51]">Links</span> e Créditos
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                asChild
                className="bg-gradient-to-r from-[#13CD51] to-cyan-500 hover:from-[#13CD51] hover:to-cyan-600 text-black font-medium"
              >
                <Link
                  href="https://github.com/pedropanstein/portal-do-conselho"
                  target="_blank"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Repositório GitHub
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#13CD51] text-[#13CD51] hover:bg-[#13CD51]/10"
              >
                <Link
                  href="https://linkedin.com/in/pedropanstein"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Post no LinkedIn
                </Link>
              </Button>
            </div>

            <div className="backdrop-blur-sm bg-black/40 rounded-xl p-8 border border-[#13CD51]/20">
              <p className="text-gray-300 text-sm">
                Projeto desenvolvido durante a aprendizagem CentroWeg - Parceria
                WEG e SENAI
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-[#13CD51]/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Pedro Panstein. Portal do Conselho -
              Projeto acadêmico CentroWeg.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
