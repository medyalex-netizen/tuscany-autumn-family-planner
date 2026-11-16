"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Language } from "./translations";
import { getSavedLanguage, saveLanguage } from "./language";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("he");

  useEffect(() => {
    const savedLanguage = getSavedLanguage();
    setLanguageState(savedLanguage);

    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === "he" ? "rtl" : "ltr";
  }, []);

  function setLanguage(language: Language) {
    setLanguageState(language);
    saveLanguage(language);

    document.documentElement.lang = language;
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}