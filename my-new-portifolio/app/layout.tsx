import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import ParticlesCanvas from "@/components/ParticlesCanvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Panstein - Desenvolvedor Full Stack",
  description: "Portfólio de Pedro Panstein",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <ParticlesCanvas />
            <div className="relative z-10 ">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}