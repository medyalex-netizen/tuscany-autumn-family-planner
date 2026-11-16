import type { Language } from "./translations";

const LANGUAGE_KEY = "tuscanyLanguage";

export function getSavedLanguage(): Language {
  if (typeof window === "undefined") {
    return "he";
  }

  const saved = window.localStorage.getItem(LANGUAGE_KEY);

  return saved === "en" ? "en" : "he";
}

export function saveLanguage(language: Language) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LANGUAGE_KEY, language);
  }
}