"use client"
// Contexte global — gère le thème (dark/light) et la langue (fr/en)
// Utilisé dans toute l'application via le hook useContexte()

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// --- Types ---
type Langue = "fr" | "en";
type Theme  = "dark" | "light";

type ContexteType = {
  theme: Theme;
  langue: Langue;
  basculerTheme: () => void;
  basculerLangue: () => void;
};

// --- Création du contexte avec valeurs par défaut ---
const Contexte = createContext<ContexteType>({
  theme: "dark",
  langue: "fr",
  basculerTheme: () => {},
  basculerLangue: () => {},
});

// --- Provider : enveloppe l'application entière ---
export function ContexteProvider({ children }: { children: ReactNode }) {
  // dark par défaut — évite le flash au chargement
  const [theme, setTheme]   = useState<Theme>("dark");
  const [langue, setLangue] = useState<Langue>("fr");

  // Lecture de localStorage UNIQUEMENT côté client (après le montage)
  // On vérifie typeof window !== "undefined" pour éviter les erreurs SSR
  useEffect(() => {
    console.log("🌍 Chargement des préférences sauvegardées...");

    // Lire le thème sauvegardé
    const themeSave = (typeof window !== "undefined")
      ? (localStorage.getItem("portfolio-theme") as Theme | null)
      : null;

    // Lire la langue sauvegardée
    const langueSave = (typeof window !== "undefined")
      ? (localStorage.getItem("portfolio-langue") as Langue | null)
      : null;

    if (themeSave  === "dark" || themeSave  === "light") {
      setTheme(themeSave);
      console.log(`🎨 Thème restauré : ${themeSave}`);
    }
    if (langueSave === "fr"   || langueSave === "en") {
      setLangue(langueSave);
      console.log(`🌐 Langue restaurée : ${langueSave}`);
    }
  }, []); // [] = ne s'exécute qu'une seule fois au premier chargement

  // Appliquer le thème sur la balise <html> et sauvegarder
  useEffect(() => {
    // data-theme="dark" ou "light" sur <html> → le CSS l'utilise pour switcher les couleurs
    document.documentElement.setAttribute("data-theme", theme);

    // Sauvegarder dans localStorage pour mémoriser entre les visites
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-theme", theme);
    }
    console.log(`✅ Thème appliqué sur <html> : ${theme}`);
  }, [theme]); // Se relance à chaque changement de thème

  // Appliquer la langue sur <html> et sauvegarder
  useEffect(() => {
    document.documentElement.setAttribute("lang", langue);

    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-langue", langue);
    }
    console.log(`✅ Langue appliquée : ${langue}`);
  }, [langue]); // Se relance à chaque changement de langue

  // Basculer entre dark et light
  function basculerTheme() {
    const nouveau: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nouveau);
    console.log(`🔄 Thème : ${theme} → ${nouveau}`);
  }

  // Basculer entre français et anglais
  function basculerLangue() {
    const nouveau: Langue = langue === "fr" ? "en" : "fr";
    setLangue(nouveau);
    console.log(`🔄 Langue : ${langue} → ${nouveau}`);
  }

  // Fournir toutes les valeurs aux composants enfants
  return (
    <Contexte.Provider value={{ theme, langue, basculerTheme, basculerLangue }}>
      {children}
    </Contexte.Provider>
  );
}

// --- Hook personnalisé : useContexte() ---
// Utilisation dans n'importe quel composant :
// const { theme, langue, basculerTheme, basculerLangue } = useContexte();
export function useContexte() {
  return useContext(Contexte);
}
