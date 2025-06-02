import { useState, useEffect } from "react";

const useLanguage = () => {
  const [language, setLanguage] = useState("pt"); // Padrão português

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    if (browserLanguage.includes("pt")) {
      setLanguage("pt"); // Português
    } else {
      setLanguage("en"); // Inglês
    }
  }, []);

  return language;
};

export default useLanguage;