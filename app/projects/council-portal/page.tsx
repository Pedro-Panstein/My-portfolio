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
      phase: "Descoberta",
      title: "Reunião com Pedagógico",
      description: "Levantamento de requisitos e entendimento do problema",
      icon: <Users className="h-5 w-5" />,
    },
    {
      phase: "Planejamento",
      title: "Análise de Requisitos",
      description: "Definição de funcionalidades e arquitetura do sistema",
      icon: <Target className="h-5 w-5" />,
    },
    {
      phase: "Prototipação",
      title: "Wireframes no Figma",
      description: "Criação de protótipos simples para validação inicial",
      icon: <Code className="h-5 w-5" />,
    },
    {
      phase: "Design",
      title: "Protótipo de Alta Fidelidade",
      description: "Refinamento da interface após aprovação do pedagógico",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      phase: "Frontend",
      title: "Desenvolvimento da Interface",
      description: "Implementação das telas e componentes em Next.js",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      phase: "Backend",
      title: "APIs e Microserviços",
      description: "Desenvolvimento dos 6 microserviços e integração com Kafka",
      icon: <Server className="h-5 w-5" />,
    },
    {
      phase: "DevOps",
      title: "Infraestrutura",
      description: "Containerização com Docker e orquestração com Kubernetes",
      icon: <Cloud className="h-5 w-5" />,
    },
    {
      phase: "Apresentação",
      title: "Demo para Stakeholders",
      description:
        "Apresentação para 4 turmas de TI + professores + coordenação",
      icon: <Award className="h-5 w-5" />,
    },
    {
      phase: "Aprovação",
      title: "Seleção pelo SENAI",
      description: "Projeto escolhido para implementação oficial",
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
              <span className="text-[#13CD51]">Chat</span> Interno
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-8 w-8 text-[#13CD51]" />
                  <h3 className="text-2xl font-bold">
                    Comunicação em Tempo Real
                  </h3>
                </div>

                <p className="text-gray-200 leading-relaxed">
                  Sistema de chat integrado que permite comunicação direta entre
                  pedagogos e demais usuários, garantindo centralização e foco
                  pedagógico nas conversas.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#13CD51]">
                        Pedagogos
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Podem iniciar conversas com qualquer usuário do sistema
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#13CD51]">
                        Demais Usuários
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Podem conversar apenas com pedagogos, garantindo
                        centralização
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#13CD51]">
                        Tempo Real
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Comunicação instantânea via Kafka + Event Source
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 opacity-75 blur-md"></div>
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
              <span className="text-emerald-500">Timeline</span> de
              Desenvolvimento
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-emerald-500/30"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-black border-2 border-emerald-500 rounded-full flex items-center justify-center">
                      <div className="text-emerald-500">{item.icon}</div>
                    </div>

                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <Card className="bg-black/40 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                            {item.phase}
                          </Badge>
                          <h3 className="text-xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-200 text-sm">
                            {item.description}
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
              <span className="text-emerald-500">Interface</span> do Sistema
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl border border-emerald-500/30">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Dashboard Principal"
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-2">
                    Dashboard Principal
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl border border-emerald-500/30">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Gestão de Conselhos"
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-2">
                    Gestão de Conselhos
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl border border-emerald-500/30">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Feedbacks dos Alunos"
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-2">
                    Feedbacks dos Alunos
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl border border-emerald-500/30">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Relatórios e Analytics"
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-2">
                    Relatórios e Analytics
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="flex justify-center gap-8 mb-6">
                <div className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-300">Interface Desktop</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-300">Responsivo Mobile</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-emerald-500">Resultados</span> e
              Reconhecimento
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-black/40 backdrop-blur-sm border-emerald-500/20 text-center">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Projeto Selecionado
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Escolhido pelo SENAI entre 4 equipes participantes para
                    implementação oficial
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-emerald-500/20 text-center">
                <CardContent className="p-8">
                  <Zap className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Redução de Prazo</h3>
                  <p className="text-gray-200 text-sm">
                    De 2 meses para liberação instantânea de feedbacks aos
                    alunos
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-emerald-500/20 text-center">
                <CardContent className="p-8">
                  <BarChart3 className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Padronização</h3>
                  <p className="text-gray-200 text-sm">
                    Processo unificado e padronizado para todos os conselhos de
                    classe
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="backdrop-blur-sm bg-black/40 rounded-xl p-8 border border-emerald-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-emerald-500">
                Critérios de Avaliação
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Viabilidade Técnica</h4>
                  <p className="text-gray-300 text-sm">
                    Arquitetura sólida e tecnologias adequadas
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Usabilidade</h4>
                  <p className="text-gray-300 text-sm">
                    Interface intuitiva e experiência do usuário
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Impacto Institucional</h4>
                  <p className="text-gray-300 text-sm">
                    Benefícios diretos para a instituição
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Escalabilidade</h4>
                  <p className="text-gray-300 text-sm">
                    Capacidade de crescimento e adaptação
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
              <span className="text-emerald-500">Aprendizados</span> e Conclusão
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-500">
                  Desafios Enfrentados
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Prazo apertado de apenas 2 meses para entrega completa
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Complexidade da arquitetura em microserviços
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Integração de múltiplas tecnologias e serviços
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Coordenação de equipe multidisciplinar
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-emerald-500">
                  Tecnologias Dominadas
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Apache Kafka para mensageria e eventos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Kubernetes para orquestração de containers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Arquitetura de microserviços na prática
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">
                      Integração de serviços AWS
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-500">
                  Crescimento Pessoal
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Este projeto representou uma transformação significativa na
                  minha forma de desenvolver soluções. A experiência de liderar
                  uma equipe técnica, tomar decisões arquiteturais complexas e
                  entregar uma solução que impacta diretamente a vida acadêmica
                  de centenas de alunos foi extremamente enriquecedora.
                </p>

                <h3 className="text-2xl font-bold text-emerald-500">
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

                <div className="backdrop-blur-sm bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
                  <p className="text-emerald-200 italic text-center">
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
              <span className="text-emerald-500">Links</span> e Créditos
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-medium"
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
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
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

            <div className="backdrop-blur-sm bg-black/40 rounded-xl p-8 border border-emerald-500/20">
              <p className="text-gray-300 text-sm">
                Projeto desenvolvido durante a aprendizagem CentroWeg - Parceria
                WEG e SENAI
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-emerald-500/20">
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