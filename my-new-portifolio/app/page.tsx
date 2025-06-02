"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Users,
  Coffee,
  Server,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import kafka from "@/assets/tecnologies/kafka.png";
import git from "@/assets/tecnologies/git.png";
import docker from "@/assets/tecnologies/docker.png";
import kubernetes from "@/assets/tecnologies/kubernetes.png";
import aws from "@/assets/tecnologies/aws.png";
import kotlin from "@/assets/tecnologies/kotlin.png";
import tailwind from "@/assets/tecnologies/tailwind.png";
import mongoDB from "@/assets/tecnologies/mongoDB.png";
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
import plasmaDocs from "@/assets/projects/plasma-docs.png";
import machineManagement from "@/assets/projects/machine-management.png";
import ricadi from "@/assets/projects/ricadi.png";
import cashControlHub from "@/assets/projects/cash-control-hub.png";
import cursoresCss from "@/assets/projects/cursoresCss.png";
import crudUsers from "@/assets/projects/crudUsers.png";
import portalConselho from "@/assets/projects/portal-conselho.png";

export default function Portfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const [yearExperience, setYearExperience] = useState(0);
  const tecnologies = [
    {
      name: "Kafka",
      image: kafka,
    },
    {
      name: "Git",
      image: git,
    },
    {
      name: "Docker",
      image: docker,
    },
    {
      name: "kubernetes",
      image: kubernetes,
    },
    {
      name: "aws",
      image: aws,
    },

    {
      name: "kotlin",
      image: kotlin,
    },
    {
      name: "tailwind",
      image: tailwind,
    },
    {
      name: "mongoDB",
      image: mongoDB,
    },
    {
      name: "mysql",
      image: mysql,
    },
    {
      name: "firebase",
      image: firebase,
    },
    {
      name: "js",
      image: js,
    },
    {
      name: "ts",
      image: ts,
    },
    {
      name: "react",
      image: react,
    },
    {
      name: "next",
      image: next,
    },
    {
      name: "angular",
      image: angular,
    },
    {
      name: "nodejs",
      image: nodejs,
    },
    {
      name: "python",
      image: python,
    },
    {
      name: "java",
      image: java,
    },
    {
      name: "spring",
      image: spring,
    },
  ];

  useEffect(() => {
    setMounted(true);
    const actualDate = new Date().getFullYear();
    setYearExperience(actualDate - 2021);

    // Dynamic background with particles
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        if (canvas) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        } else {
          this.x = Math.random();
          this.y = Math.random();
        }
        this.size = Math.random() * 8 + 2; // Aumentado de 5+1 para 8+2
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

        // Cores mais vibrantes
        const hue = Math.random() * 60 + 120; // Range from 120 (green) to 180 (cyan)
        this.color = `hsl(${hue}, 100%, 60%)`; // Aumentado saturação e luminosidade
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (canvas) {
          if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
          }
          if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
          }
        }
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Create particle array
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(
      150,
      Math.floor((canvas.width * canvas.height) / 10000)
    ); // Aumentado de 100 para 150 e densidade maior

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Connect particles with lines
    function connect() {
      const maxDistance = 180; // Aumentado de 150 para 180
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            const gradient = ctx!.createLinearGradient(
              particlesArray[a].x,
              particlesArray[a].y,
              particlesArray[b].x,
              particlesArray[b].y
            );
            gradient.addColorStop(0, `hsla(140, 100%, 60%, ${opacity * 0.8})`); // Aumentado de 80% para 100% saturação e de 0.5 para 0.8 opacidade
            gradient.addColorStop(1, `hsla(180, 100%, 60%, ${opacity * 0.8})`); // Aumentado de 80% para 100% saturação e de 0.5 para 0.8 opacidade

            ctx!.strokeStyle = gradient;
            ctx!.lineWidth = 1.5; // Aumentado de 1 para 1.5
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (canvas) {
        // Create gradient background
        const gradient = ctx!.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height
        );
        gradient.addColorStop(0, "rgba(10, 20, 30, 0.7)"); // Reduzido de 0.8 para 0.7
        gradient.addColorStop(0.5, "rgba(15, 25, 40, 0.7)"); // Reduzido de 0.8 para 0.7
        gradient.addColorStop(1, "rgba(20, 30, 50, 0.7)"); // Reduzido de 0.8 para 0.7

        ctx!.fillStyle = gradient;
        ctx!.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
        }

        connect();
        requestAnimationFrame(animate);
      }
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reset particles
      particlesArray.length = 0;
      const newNumberOfParticles = Math.min(
        150,
        Math.floor((canvas.width * canvas.height) / 10000)
      ); // Atualizado para corresponder ao valor acima

      for (let i = 0; i < newNumberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Dynamic background */}
      {/* Matrix background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0"
      />

      {/* Gradient overlay */}
      {/*<div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/90 to-black z-0"></div>*/}

      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-emerald-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Panstein.dev
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  {[
                    { name: "Início", href: "#home" },
                    { name: "Habilidades", href: "#habilidades" },
                    { name: "Sobre", href: "#sobre" },
                    { name: "Experiência", href: "#experiencia" },
                    { name: "Projetos", href: "#projetos" },
                    { name: "Serviços", href: "#servicos" },
                    { name: "Contato", href: "#contato" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:hidden">
                <Button variant="ghost" size="icon" className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center px-4 relative pt-16"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-full">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/70 to-emerald-500/0"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: 0,
                    right: 0,
                    opacity: 0.4,
                    transform: `translateY(${Math.random() * 10}px)`,
                    animation: `pulse ${
                      5 + Math.random() * 10
                    }s infinite ease-in-out`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative mb-8 z-10">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-75 blur-sm animate-pulse"></div>
            <div className="relative rounded-full border-2 border-emerald-500 p-1 bg-black">
              <Image
                src="/me.jpg"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full h-[120px] w-[120px] object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-6 z-10">
            <div className="space-y-2">
              <p className="text-emerald-500 text-lg font-mono">
                Hello World! Meu nome é{" "}
                <span className="font-bold text-emerald-200">
                  Pedro Henrique Panstein
                </span>{" "}
                e sou
              </p>
              <h1 className="text-4xl md:text-6xl font-bold">
                Desenvolvedor{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Full Stack
                </span>
              </h1>
            </div>

            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Transformo necessidades em aplicações reais, evolutivas e
              funcionais. Desenvolvo sistemas através da minha paixão pela
              tecnologia, contribuindo com soluções inovadoras e eficazes para
              desafios complexos.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button
                variant="outline"
                className="border-emerald-500 border-2 p-[24px] text-emerald-300 hover:bg-emerald-500/10"
              >
                Meus Projetos
              </Button>
              <Button className="bg-gradient-to-r p-[25px] from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-medium">
                Vamos Conversar
              </Button>
            </div>

            <div className="pt-12 animate-bounce">
              <ChevronDown className="h-6 w-6 text-emerald-500 mx-auto" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Code className="h-8 w-8" />,
                  value: yearExperience + "+",
                  label: "Anos de Experiência",
                },
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  value: "20+",
                  label: "Projetos Concluídos",
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  value: "30+",
                  label: "Desafios Superados",
                },
                {
                  icon: <Coffee className="h-8 w-8" />,
                  value: "∞",
                  label: "Xícaras de Café",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border-2 border-emerald-500/60 flex flex-col items-center text-center hover:border-emerald-500 transition-all duration-300 hover:transform hover:translate-y-[-5px]"
                >
                  <div className="mb-3 text-emerald-500">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4 relative" id="habilidades">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Tecnologias
              </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              <Slider tecnologies={tecnologies} />
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="py-20 px-4 relative" id="sobre">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-emerald-500">Sobre</span> Mim
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-xl border-2 border-emerald-500/60">
                  <Image
                    src="/aboutme-photo2.jpg"
                    alt="Profile"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Pedro Henrique Panstein</h3>
                <h4 className="text-xl text-emerald-500">
                  Desenvolvedor Full Stack
                </h4>

                <p className="text-gray-200">
                  Sou um desenvolvedor Full Stack apaixonado por transformar
                  ideias em soluções digitais. Minha jornada é guiada pela
                  tecnologia e inovação. Transformo ideias em soluções digitais,
                  unindo criatividade e eficiência.
                </p>

                <p className="text-gray-200">
                  Com foco em desenvolvimento web e aplicações modernas, crio
                  sistemas funcionais, modernos e intuitivos. Meu objetivo é
                  estar sempre evoluindo algo novo para elevar minhas
                  habilidades e criar experiências incríveis.
                </p>

                <div className="flex gap-4 pt-4">
                  <Link
                    href="https://github.com/Pedro-Panstein"
                    target="_blank"
                    className="bg-black/40 p-4 rounded-full border-2 border-emerald-500/40 hover:border-emerald-500 hover:bg-emerald-500/20 transition-colors"
                  >
                    <Github className="h-6 w-6 text-emerald-500" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/pedro-henrique-panstein-7833bb316/"
                    target="_blank"
                    className="bg-black/40 p-4 rounded-full border-2 border-emerald-500/40 hover:border-emerald-500 hover:bg-emerald-500/20 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-emerald-500" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/pedro.panstein?igsh=ZnNpbWV2dGx6OTNs&utm_source=qr"
                    target="_blank"
                    className="bg-black/40 p-4 rounded-full border-2 border-emerald-500/40 hover:border-emerald-500 hover:bg-emerald-500/20 transition-colorss"
                  >
                    <Instagram className="h-6 w-6 text-emerald-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 px-4 relative" id="experiencia">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-emerald-500">Minha</span> Trajetória
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-200 text-center max-w-2xl mx-auto mb-16">
              Minha jornada profissional e acadêmica no mundo da tecnologia.
            </p>

            <Tabs defaultValue="experiencia" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger
                  value="experiencia"
                  className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-500"
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Experiência
                </TabsTrigger>
                <TabsTrigger
                  value="educacao"
                  className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-500"
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Educação
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experiencia" className="space-y-8">
                <div className="relative border-l-2 border-emerald-500/60 pl-[26px] ml-4 space-y-12">
                  {[
                    {
                      title: "Desenvolvedor de Sistemas",
                      company: "WEG",
                      period: "2025 - Momento atual",
                      description:
                        "Atuação no desenvolvimento e manutenção de sistemas internos da WEG na área de Contas a Pagar, com foco em automação de processos e atendimento de demandas técnicas. Utilizo principalmente a plataforma ServiceNow, integrando soluções com JavaScript e Angular, aplicando boas práticas de desenvolvimento, para garantir entregas eficientes e de qualidade.",
                    },
                    {
                      title:
                        "Freelancer – Desenvolvimento de Site para a RICADI Corretora de Seguros",
                      company: "WEG",
                      period: "2025",
                      description:
                        "Fui convidado pela RICADI Corretora de Seguros para desenvolver uma landing page moderna e funcional, com foco em experiência do usuário e comunicação clara dos serviços oferecidos. Trabalhei em colaboração direta com os proprietários e a equipe da empresa, participando ativamente do processo criativo, propondo soluções, ajustando o design com base em feedbacks e garantindo um resultado profissional e alinhado às necessidades do cliente.",
                    },
                    {
                      title: "Jovem Aprendiz",
                      company: "WEG",
                      period: "2023 - 2025",
                      description:
                        "Participação em um programa de formação técnica (CentroWEG), voltado ao desenvolvimento de sistemas e fundamentos de TI. Adquiri conhecimentos sólidos em lógica de programação, microserviços, arquitetura de software, metodologias ágeis, sistemas operacionais e redes. Desenvolvi projetos utilizando Java, Node.js, Kafka, Docker, além de frameworks modernos para desenvolvimento web e mobile, com foco em boas práticas, performance e escalabilidade.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[42px] h-8 w-8 rounded-full bg-black border-2 border-emerald-500 flex items-center justify-center">
                        <Briefcase className="h-4 w-4 text-emerald-500" />
                      </div>
                      <div className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border-2 border-emerald-500/60">
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-400 mb-4">
                          {item.period}
                        </span>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <h4 className="text-emerald-500 mb-3 font-bold">
                          {item.company}
                        </h4>
                        <p className="text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="educacao" className="space-y-8">
                <div className="relative border-l-2 border-emerald-500/60 pl-[26px] ml-4 space-y-12">
                  {[
                    {
                      title: "Curso completo de java - básico ao avançado",
                      institution: "Udemy",
                      period: "2024",
                      description:
                        "Formação intensiva em Java com foco em desenvolvimento moderno utilizando Spring Boot. O curso abrange desde os fundamentos da linguagem até tópicos avançados, incluindo criação de APIs REST, integração com bancos de dados, segurança, testes e deploy de aplicações completas com práticas de mercado.",
                    },
                    {
                      title: "Curso avançado de Desenvolvimento Web",
                      institution: "Udemy",
                      period: "2023 - 2024",
                      description:
                        "Capacitação avançada em desenvolvimento web frontend, com foco em Angular, Next.js e TypeScript. O curso também abordou conceitos essenciais de UI/UX, acessibilidade, performance, estruturação de projetos modernos e integração com APIs RESTful.",
                    },
                    {
                      title: "Eletiva de programação",
                      institution: "Alfa Jangada",
                      period: "2021 - 2022",
                      description:
                        "Introdução ao desenvolvimento web com foco na criação de páginas e sites simples. Aprendizado dos fundamentos de HTML, CSS, JavaScript e lógica de programação, promovendo a base para evolução em tecnologias web.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[42px] h-8 w-8 rounded-full bg-black border-2 border-emerald-500 flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-emerald-500" />
                      </div>
                      <div className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border-2 border-emerald-500/60">
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-400 mb-4">
                          {item.period}
                        </span>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <h4 className="text-emerald-500 mb-3 font-bold">
                          {item.institution}
                        </h4>
                        <p className="text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-emerald-500">Depoimentos</span> de Clientes
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-200 text-center max-w-2xl mx-auto mb-16">
              O que meus clientes dizem sobre meu trabalho e colaboração.
            </p>

            <Carousel className="w-full">
              <CarouselContent>
                {[
                  {
                    name: "Ana Silva",
                    role: "CEO, TechStart",
                    image: "/placeholder.svg",
                    text: "Pedro transformou completamente nossa plataforma digital. Sua expertise técnica e capacidade de entender nossas necessidades de negócio resultaram em um produto que superou todas as nossas expectativas.",
                  },
                  {
                    name: "Carlos Mendes",
                    role: "CTO, InnovaSoft",
                    image: "/placeholder.svg",
                    text: "Trabalhamos com Pedro em um projeto complexo de migração de sistema. Sua abordagem metódica e conhecimento técnico foram fundamentais para o sucesso do projeto, entregue no prazo e dentro do orçamento.",
                  },
                  {
                    name: "Mariana Costa",
                    role: "Diretora de Marketing, BrandPulse",
                    image: "/placeholder.svg",
                    text: "A landing page desenvolvida pelo Pedro aumentou nossa taxa de conversão em 45%. Seu olhar para UX e performance fez toda a diferença no resultado final do projeto.",
                  },
                  {
                    name: "Roberto Alves",
                    role: "Fundador, EduTech",
                    image: "/placeholder.svg",
                    text: "Pedro não apenas desenvolveu nossa plataforma de ensino online, mas também trouxe ideias inovadoras que melhoraram significativamente a experiência do usuário. Um verdadeiro parceiro de negócios.",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <div className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border border-emerald-500/20 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden border border-emerald-500/30">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-emerald-500 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-200 italic flex-grow">
                          "{testimonial.text}"
                        </p>
                        <div className="flex text-emerald-500 mt-4">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="relative inset-0 translate-y-0 bg-black/40 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50" />
                <CarouselNext className="relative inset-0 translate-y-0 bg-black/40 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50" />
              </div>
            </Carousel>
          </div>
        </section> */}

        {/* Projects */}
        <section className="py-20 px-4 relative" id="projetos">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-emerald-500">Meu</span> Trabalho
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-200 text-center max-w-2xl mx-auto mb-16">
              Veja os projetos em destaque que desenvolvi utilizando as mais
              recentes tecnologias e boas práticas de desenvolvimento.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Portal do Conselho",
                  description:
                    "Sistema selecionado pelo SENAI para digitalizar os Conselhos de Classe, eliminando atrasos e modernizando um processo antes 100% presencial.",
                  image: portalConselho,
                  tags: ["Next.js", "Java", "Phyton", "Kafka", "+12"],
                },
                {
                  title: "Machine Management",
                  description:
                    "Sistema de monitoramento de máquinas desenvolvido com arquitetura moderna baseada em microsserviços, mensageria assíncrona e processamento distribuído, garantindo alta escalabilidade, desempenho e detecção proativa de falhas.",
                  image: machineManagement,
                  tags: ["React", "Kafka", "Docker", "GraphQL", "+5"],
                },
                {
                  title: "Plasma Docs",
                  description:
                    "Plataforma estilo Wikipédia focada em desenvolvedores, com documentações práticas e exemplos reais. Já conta com um guia completo sobre GitHub e GitHub CLI.",
                  image: plasmaDocs,
                  tags: ["Next.js", "Shadcn", "Tailwind CSS", "TypeScript"],
                },
                {
                  title: "RICADI",
                  description:
                    "Site institucional moderno e responsivo para uma corretora de seguros real, com foco em usabilidade, performance e contato direto para cotações personalizadas.",
                  image: ricadi,
                  tags: ["React", "Tailwind Css", "Firebase", "CI/CD", "+2"],
                },
                {
                  title: "CRUD Users",
                  description:
                    "CRUD de usuários desenvolvido com Angular, focado em usabilidade, layout moderno e integração com banco de dados em nuvem.",
                  image: crudUsers,
                  tags: ["Angular", "Angular Material", "SCSS", "Firebase"],
                },
                {
                  title: "Cash Control Hub",
                  description:
                    "Sistema de controle financeiro pessoal com gráficos interativos, importação/exportação via CSV e alertas automáticos — ideal para organizar e analisar suas finanças com clareza.",
                  image: cashControlHub,
                  tags: ["Next.js", "Recharts", "Tailwind CSS", "TypeScript"],
                },
                {
                  title: "Cursores CSS",
                  description:
                    "Site interativo que apresenta todos os cursores CSS com exemplos, código para uso, temas claro/escuro e ajustes de acessibilidade.",
                  image: cursoresCss,
                  tags: ["HTML5", "CSS", "JavaScript"],
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-black/40 backdrop-blur-sm border-[3px] border-emerald-500/40 hover:border-emerald-500/80 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full bg-black/50 border-emerald-500/50"
                      >
                        <ExternalLink className="h-4 w-4 text-emerald-500" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">
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
                          className="bg-black/60 text-emerald-400 border-emerald-500/30 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 relative" id="servicos">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-emerald-500">Meus</span> Serviços
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-200 text-center max-w-2xl mx-auto mb-16">
              Como posso ajudar seu negócio a crescer e se destacar no mercado
              digital?
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Websites, Landing Pages e Designs",
                  description:
                    "Soluções de design e interfaces que combinam estética e funcionalidade, proporcionando experiências memoráveis para o usuário.",
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
                  title: "API e Banco de Dados",
                  description:
                    "Soluções completas de API e banco de dados que ajudam seu sistema organizar, armazenar e gerenciar informações de forma eficiente.",
                  icon: <Server className="h-6 w-6 text-white" />,
                  gradient: "from-yellow-500 to-orange-500",
                },
                {
                  title: "SEO",
                  description:
                    "Aprimoramento de performance e otimização para mecanismos de busca, com estratégias que aumentam a visibilidade do seu negócio online.",
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
                  title: "Aplicações Web Progressivas",
                  description:
                    "Desenvolvimento de PWAs que funcionam offline e oferecem experiência similar a aplicativos nativos, aumentando o engajamento dos usuários.",
                  icon: <Zap className="h-6 w-6 text-white" />,
                  gradient: "from-blue-500 to-indigo-500",
                },
                {
                  title: "Consultoria Técnica",
                  description:
                    "Análise e recomendações para melhorar sua infraestrutura tecnológica, otimizar processos e implementar as melhores práticas de desenvolvimento.",
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
                  title: "Manutenção e Suporte",
                  description:
                    "Serviços contínuos de manutenção, atualizações e suporte técnico para garantir que suas aplicações funcionem perfeitamente a longo prazo.",
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
                <div
                  key={index}
                  className="group backdrop-blur-sm bg-black/40 rounded-xl p-8 border-[3px] border-emerald-500/40 hover:border-emerald-500/80 transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div
                    className={`mb-6 h-12 w-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-4 relative" id="contato">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-emerald-500">Contato</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-200 text-center max-w-2xl mx-auto mb-16">
              Vamos trabalhar juntos! Entre em contato ou acompanhe as minhas
              redes sociais!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border border-emerald-500/20 flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-200 mb-4">Respondo em até 24 horas</p>
                <Link
                  href="mailto:pansteinph@gmail.com"
                  className="text-emerald-500 hover:underline"
                >
                  pansteinph@gmail.com
                </Link>
              </div>

              <div className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border border-emerald-500/20 flex flex-col items-center text-center">
                <Linkedin className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-gray-200 mb-4">Vamos nos conectar</p>
                <Link
                  href="https://www.linkedin.com/in/pedro-henrique-panstein-7833bb316/"
                  target="_blank"
                  className="text-emerald-500 hover:underline"
                >
                  linkedin.com/in/pedro-henrique-panstein
                </Link>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-black/40 rounded-xl p-8 border border-emerald-500/20">
              <h3 className="text-xl font-bold mb-6 text-center">
                Envie uma mensagem
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-black/60 border border-emerald-500/30 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-lg bg-black/60 border border-emerald-500/30 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-black/60 border border-emerald-500/30 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-black/60 border border-emerald-500/30 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-medium">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-emerald-500/20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Panstein.dev
                </h3>
                <p className="text-gray-200 mb-4">
                  Desenvolvedor Full Stack apaixonado por criar soluções
                  digitais inovadoras e eficientes.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/Pedro-Panstein"
                    target="_blank"
                    className="bg-black/40 p-2 rounded-full border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                  >
                    <Github className="h-5 w-5 text-emerald-500" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/pedro-henrique-panstein-7833bb316/"
                    target="_blank"
                    className="bg-black/40 p-2 rounded-full border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-emerald-500" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/pedro.panstein?igsh=ZnNpbWV2dGx6OTNs&utm_source=qr"
                    target="_blank"
                    className="bg-black/40 p-2 rounded-full border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-emerald-500" />
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Início", href: "#home" },
                    { name: "Sobre", href: "#sobre" },
                    { name: "Projetos", href: "#projetos" },
                    { name: "Serviços", href: "#servicos" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-200 hover:text-emerald-500 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Serviços</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Desenvolvimento Web" },
                    { name: "Aplicações Mobile" },
                    { name: "UI/UX Design" },
                    { name: "Consultoria" },
                    { name: "SEO" },
                  ].map((service) => (
                    <li key={service.name}>
                      <p className="text-gray-200 cursor-default hover:text-emerald-500 transition-colors">
                        {service.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Contato</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-200">pansteinph@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-emerald-500 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 5.282 16.566 5.03 12.223a1 1 0 01.984-1.076 1 1 0 011.075.984a10.025 10.025 0 009.539 9.539 1 1 0 01.984 1.075 1 1 0 01-1.075.984A11.996 11.996 0 015.03 12.223z"
                      />
                    </svg>
                    <span className="text-gray-200">(47) 99168-4308</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-emerald-500 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-200">
                      Santa Catarina, Brasil
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-emerald-500/20 pt-8 text-center text-gray-500 text-sm">
              <p>
                © {new Date().getFullYear()} Pedro Panstein. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
