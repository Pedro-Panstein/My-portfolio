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
  StopCircle,
  Pause,
  Infinity,
} from "lucide-react";
import fluxoDoSistema from "@/assets/projects/fluxo-sistema-machine.png";
import machineManagement from "@/assets/projects/machine-management.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import react from "@/assets/tecnologies/react.png";
import javascript from "@/assets/tecnologies/javascript.png";
import tailwind from "@/assets/tecnologies/tailwind.png";
import node from "@/assets/tecnologies/node.png";
import spring from "@/assets/tecnologies/spring.png";
import mysql from "@/assets/tecnologies/mysql.png";
import mongoDb from "@/assets/tecnologies/mongodb.png";
import docker from "@/assets/tecnologies/docker.png";
import prometheus from "@/assets/tecnologies/Prometheus.svg";
import grafana from "@/assets/tecnologies/Grafana.svg";
import graphql from "@/assets/tecnologies/GraphQL.svg";
import kafka from "@/assets/tecnologies/kafka.png";
import councilChat from "@/assets/projects/councilChat.png";
import { MdManageHistory } from "react-icons/md";

export default function CouncilPortal() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const technologies = {
    frontend: [
      { name: "React", icon: react },
      { name: "JavaScript", icon: javascript },
      { name: "TailwindCSS", icon: tailwind },
      { name: "Node.js", icon: node },
    ],
    backend: [
      { name: "Spring Boot", icon: spring },
      { name: "MySQL", icon: mysql },
      { name: "MongoDB", icon: mongoDb },
      { name: "Apache Kafka", icon: kafka },
    ],
    infrastructure: [
      { name: "Docker", icon: docker },
      { name: "Prometheus", icon: prometheus },
      { name: "Grafana", icon: grafana },
      { name: "GraphQL", icon: graphql },
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
    {
      icon: <Pause className="h-5 w-5" />,
    },
  ];

  const userProfiles = [
    {
      title: t.projectsPages["machine-management"].userProfiles.student.title,
      description:
        t.projectsPages["machine-management"].userProfiles.student.description,
      icon: <Users className="h-6 w-6" />,
      features:
        t.projectsPages["machine-management"].userProfiles.student.features,
    },
    {
      title: t.projectsPages["machine-management"].userProfiles.leader.title,
      description:
        t.projectsPages["machine-management"].userProfiles.leader.description,
      icon: <Shield className="h-6 w-6" />,
      features:
        t.projectsPages["machine-management"].userProfiles.leader.features,
    },
    {
      title: t.projectsPages["machine-management"].userProfiles.teacher.title,
      description:
        t.projectsPages["machine-management"].userProfiles.teacher.description,
      icon: <Code className="h-6 w-6" />,
      features:
        t.projectsPages["machine-management"].userProfiles.teacher.features,
    },
    {
      title: t.projectsPages["machine-management"].userProfiles.pedagogic.title,
      description:
        t.projectsPages["machine-management"].userProfiles.pedagogic
          .description,
      icon: <BarChart3 className="h-6 w-6" />,
      features:
        t.projectsPages["machine-management"].userProfiles.pedagogic.features,
    },
  ];

  const team = [
    {
      name: "Pedro Henrique Panstein",
      role: t.projectsPages["machine-management"].team.fullstack,
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/Pedro-Panstein",
      linkedin:
        "https://www.linkedin.com/in/pedro-henrique-panstein-7833bb316/",
    },
    {
      name: "Mateus Henrique Bosquetti",
      role: t.projectsPages["machine-management"].team.fullstack,
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/mateusbosquetti",
      linkedin:
        "https://www.linkedin.com/in/mateus-henrique-bosquetti-2a50bb30b/",
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
                {t.projectsPages["machine-management"].navbar}
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/Pedro-Panstein/machine-management"
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
                {t.projectsPages["machine-management"].hero.highligh}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {t.projectsPages["machine-management"].hero.title}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13CD51] to-cyan-400">
                  {t.projectsPages["machine-management"].hero.title2}
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                {t.projectsPages["machine-management"].hero.description}
              </p>

              <div className="relative max-w-4xl mx-auto mb-8">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#13CD51]/20 to-cyan-600/20 opacity-75 blur-md"></div>
                <div className="relative overflow-hidden rounded-xl border border-[#13CD51]/30">
                  <Image
                    src={machineManagement}
                    alt="Machine Management"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="h-5 w-5 text-[#13CD51]" />
                  <span>
                    {t.projectsPages["machine-management"].hero.calendar}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="h-5 w-5 text-[#13CD51]" />
                  <span>{t.projectsPages["machine-management"].hero.devs}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Infinity className="h-5 w-5 text-[#13CD51]" />
                  <span>
                    {t.projectsPages["machine-management"].hero.winner}
                  </span>
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
                {t.projectsPages["machine-management"].summary.title}
              </span>{" "}
              {t.projectsPages["machine-management"].summary.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#13CD51]">
                    {
                      t.projectsPages["machine-management"].summary.challenge
                        .title
                    }
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {
                      t.projectsPages["machine-management"].summary.challenge
                        .description
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#13CD51]">
                    {
                      t.projectsPages["machine-management"].summary.solution
                        .title
                    }
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {
                      t.projectsPages["machine-management"].summary.solution
                        .description
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#13CD51]">
                    {t.projectsPages["machine-management"].summary.team.title}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-200">
                      <span className="text-[#1eb174] font-semibold">
                        Pedro Henrique Panstein
                      </span>{" "}
                      ({t.projectsPages["machine-management"].summary.team.me})
                    </p>
                    <p className="text-gray-200">Mateus Henrique Bosquetti</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">
                      {t.projectsPages["machine-management"].summary.months}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {t.projectsPages["machine-management"].summary.months2}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                  <CardContent className="p-6">
                    <Server className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">
                      {
                        t.projectsPages["machine-management"].summary
                          .microservice
                      }
                    </div>
                    <div className="text-gray-400 text-sm">
                      {
                        t.projectsPages["machine-management"].summary
                          .microservice2
                      }
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">
                      {
                        t.projectsPages["machine-management"].summary
                          .profileUsers
                      }
                    </div>
                    <div className="text-gray-400 text-sm">
                      {
                        t.projectsPages["machine-management"].summary
                          .profileUsers2
                      }
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                  <CardContent className="p-6">
                    <Infinity className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">
                      {t.projectsPages["machine-management"].summary.winner}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {t.projectsPages["machine-management"].summary.winner2}
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
                {t.projectsPages["machine-management"].Technologies.title}
              </span>{" "}
              {t.projectsPages["machine-management"].Technologies.title2}
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
                  {t.projectsPages["machine-management"].Technologies.infra}
                </TabsTrigger>
              </TabsList>

              {Object.entries(technologies).map(([category, techs]) => (
                <TabsContent key={category} value={category}>
                  {/* Deixar centralizado */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
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
                {t.projectsPages["machine-management"].architecture.title}
              </span>{" "}
              {t.projectsPages["machine-management"].architecture.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#13CD51]">
                  {
                    t.projectsPages["machine-management"].architecture
                      .microservice.title
                  }
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {
                    t.projectsPages["machine-management"].architecture
                      .microservice.description
                  }
                </p>

                <h3 className="text-2xl font-bold text-[#13CD51]">
                  {
                    t.projectsPages["machine-management"].architecture.kafka
                      .title
                  }
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {
                    t.projectsPages["machine-management"].architecture.kafka
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
                      t.projectsPages["machine-management"].architecture
                        .decoupling.title
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm">
                    {
                      t.projectsPages["machine-management"].architecture
                        .decoupling.description
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#13CD51]">
                    <Zap className="h-5 w-5" />
                    {
                      t.projectsPages["machine-management"].architecture
                        .scalability.title
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm">
                    {
                      t.projectsPages["machine-management"].architecture
                        .scalability.description
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#13CD51]">
                    <Shield className="h-5 w-5" />
                    {
                      t.projectsPages["machine-management"].architecture
                        .resiliency.title
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm">
                    {
                      t.projectsPages["machine-management"].architecture
                        .resiliency.description
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
              <span className="text-[#13CD51]">
                {t.projectsPages["machine-management"].userProfiles.title}
              </span>{" "}
              {t.projectsPages["machine-management"].userProfiles.title2}
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

        {/* Timeline */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">
                {t.projectsPages["machine-management"].timeline.title}
              </span>{" "}
              {t.projectsPages["machine-management"].timeline.title2}
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
                              t.projectsPages["machine-management"].timeline
                                .line[index].phase
                            }
                          </Badge>
                          <h3 className="text-xl font-bold mb-2">
                            {
                              t.projectsPages["machine-management"].timeline
                                .line[index].title
                            }
                          </h3>
                          <p className="text-gray-200 text-sm">
                            {
                              t.projectsPages["machine-management"].timeline
                                .line[index].description
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

        {/* Results */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-[#13CD51]">
                {t.projectsPages["machine-management"].results.title}
              </span>{" "}
              {t.projectsPages["machine-management"].results.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                <CardContent className="p-8">
                  <Infinity className="h-12 w-12 text-[#13CD51] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    {
                      t.projectsPages["machine-management"].results.results[0]
                        .title
                    }
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {
                      t.projectsPages["machine-management"].results.results[0]
                        .description
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                <CardContent className="p-8">
                  <Zap className="h-12 w-12 text-[#13CD51] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    {
                      t.projectsPages["machine-management"].results.results[1]
                        .title
                    }
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {
                      t.projectsPages["machine-management"].results.results[1]
                        .description
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-[#13CD51]/20 text-center">
                <CardContent className="p-8">
                  <BarChart3 className="h-12 w-12 text-[#13CD51] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    {
                      t.projectsPages["machine-management"].results.results[2]
                        .title
                    }
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {
                      t.projectsPages["machine-management"].results.results[2]
                        .description
                    }
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="backdrop-blur-sm bg-black/40 rounded-xl p-8 border border-[#13CD51]/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-[#13CD51]">
                {t.projectsPages["machine-management"].results.title3}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    {
                      t.projectsPages["machine-management"].results.criterias[0]
                        .title
                    }
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {
                      t.projectsPages["machine-management"].results.criterias[0]
                        .description
                    }
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    {
                      t.projectsPages["machine-management"].results.criterias[1]
                        .title
                    }
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {
                      t.projectsPages["machine-management"].results.criterias[1]
                        .description
                    }
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    {
                      t.projectsPages["machine-management"].results.criterias[2]
                        .title
                    }
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {
                      t.projectsPages["machine-management"].results.criterias[2]
                        .description
                    }
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-[#13CD51] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    {
                      t.projectsPages["machine-management"].results.criterias[3]
                        .title
                    }
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {
                      t.projectsPages["machine-management"].results.criterias[3]
                        .description
                    }
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
              <span className="text-[#13CD51]">
                {t.projectsPages["machine-management"].learning.title}
              </span>{" "}
              {t.projectsPages["machine-management"].learning.title2}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13CD51] to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {t.projectsPages["machine-management"].learning.learnings.map(
                  (row, index) => (
                    <div key={index}>
                      <h3 className="text-2xl font-bold text-[#13CD51]">
                        {row.title}
                      </h3>
                      <ul className="space-y-3">
                        {row.bullets.map((row, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#13CD51] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-200">{row.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>

              <div className="space-y-6">
                {t.projectsPages["machine-management"].learning.others.map(
                  (row, index) => (
                    <div key={index}>
                      <h3 className="text-2xl font-bold text-[#13CD51]">
                        {row.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed">
                        {row.text}
                      </p>
                    </div>
                  )
                )}
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
                        className="p-1.5 rounded-md text-[#13CD51] hover:bg-[#13cd518a] transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md text-[#13CD51] hover:bg-[#13cd518a] transition-colors"
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
              <span className="text-[#13CD51]">
                {t.projectsPages["machine-management"].credits.title}
              </span>{" "}
              {t.projectsPages["machine-management"].credits.title2}
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                asChild
                className="bg-gradient-to-r from-[#13CD51] to-cyan-500 hover:from-[#13CD51] hover:to-cyan-600 text-black font-medium"
              >
                <Link
                  href="https://github.com/Hivqs79/Portal_do_Conselho"
                  target="_blank"
                >
                  <Github className="h-5 w-5 mr-2" />
                  {t.projectsPages["machine-management"].credits.button}
                </Link>
              </Button>
            </div>

            <div className="backdrop-blur-sm bg-black/40 rounded-xl p-8 border border-[#13CD51]/20">
              <p className="text-gray-300 text-sm">
                {t.projectsPages["machine-management"].credits.subTitle}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-[#13CD51]/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Pedro Panstein.{" "}
              {t.projectsPages["machine-management"].credits.footer}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
