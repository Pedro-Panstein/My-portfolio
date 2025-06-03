"use client";
import { useEffect, useRef, useState } from "react";

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx)
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const setupCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(ratio, ratio);
      return ctx;
    };

    const ctx = setupCanvas();
    if (!ctx) return;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 3 + 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.3 + 0.2;
        this.color = `hsla(120, 80%, 60%, ${this.opacity})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > window.innerWidth || this.x < 0) this.speedX *= -0.8;
        if (this.y > window.innerHeight || this.y < 0) this.speedY *= -0.8;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const createParticles = () => {
      const count = Math.min(
        60,
        Math.floor((window.innerWidth * window.innerHeight) / 20000)
      );
      return Array.from({ length: count }, () => new Particle());
    };

    particlesRef.current = createParticles();

    const connectParticles = () => {
      const maxDistance = 150;
      const particles = particlesRef.current;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            
            ctx.strokeStyle = `hsla(120, 60%, 50%, ${particles[a].opacity})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "#16181D";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      connectParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setupCanvas();
      particlesRef.current = createParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-defaultBackground z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none opacity-30"
      />
    </div>
  );
}

