// hooks/useLanguage.ts
import { useEffect, useState } from "react";

const useLanguage = () => {
  const [language, setLanguage] = useState<"pt" | "en">("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localLang = localStorage.getItem("lang");
      if (localLang === "pt" || localLang === "en") {
        setLanguage(localLang);
      } else {
        const browserLang = navigator.language;
        const isBrazil = browserLang.includes("pt");
        const detectedLang = isBrazil ? "pt" : "en";
        setLanguage(detectedLang);
        localStorage.setItem("lang", detectedLang);
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "pt" ? "en" : "pt";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return { language, toggleLanguage };
};

export default useLanguage;