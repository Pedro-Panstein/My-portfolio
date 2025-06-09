// context/LanguageContext.tsx
"use client"
import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "pt" | "en";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "pt" || stored === "en") {
      setLanguage(stored);
    } else {
      const browserLang = navigator.language.includes("pt") ? "pt" : "en";
      setLanguage(browserLang);
      localStorage.setItem("lang", browserLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "pt" ? "en" : "pt";
      localStorage.setItem("lang", newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
};