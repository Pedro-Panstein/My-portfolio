import type React from "react";
import "./globals.css";
import { useEffect, useRef } from "react";

export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
