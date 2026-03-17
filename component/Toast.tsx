"use client"
// Toast corrigé — n'affiche PAS de notification au premier chargement
// Utilise useRef pour détecter si c'est le montage initial ou un vrai changement

import { useEffect, useRef, useState } from "react";
import { useContexte } from "@/context/ThemeContext";

export default function Toast() {
  const { theme, langue } = useContexte();

  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Ces refs permettent de détecter si c'est le 1er rendu ou un vrai changement
  const premierRenduTheme  = useRef(true);
  const premierRenduLangue = useRef(true);

  // ── Thème change ────────────────────────────────────────
  useEffect(() => {
    // Ignorer le montage initial
    if (premierRenduTheme.current) {
      premierRenduTheme.current = false;
      return;
    }

    const msg = theme === "dark"
      ? (langue === "fr" ? "🌙 Mode sombre activé"  : "🌙 Dark mode enabled")
      : (langue === "fr" ? "☀️ Mode clair activé"   : "☀️ Light mode enabled");

    afficherToast(msg);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  // ── Langue change ────────────────────────────────────────
  useEffect(() => {
    // Ignorer le montage initial
    if (premierRenduLangue.current) {
      premierRenduLangue.current = false;
      return;
    }

    const msg = langue === "fr"
      ? "🇫🇷 Langue française activée"
      : "🇬🇧 English language enabled";

    afficherToast(msg);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langue]);

  function afficherToast(msg: string) {
    console.log(`🔔 Toast affiché : "${msg}"`);

    // Annuler le timer précédent si le toast est déjà visible
    if (timerRef.current) clearTimeout(timerRef.current);

    setMessage(msg);
    setVisible(true);

    // Masquer après 2.5 secondes
    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 2500);
  }

  return (
    <div
      onClick={() => setVisible(false)}
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 99999,
        background: "var(--noir-4)",
        border: "1px solid var(--bordure)",
        borderLeft: "3px solid var(--or)",
        padding: "14px 22px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.68rem",
        letterSpacing: "1.5px",
        color: "var(--gris-clair)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        cursor: "pointer",
        userSelect: "none",
        maxWidth: "280px",
        // Animation slide + opacité
        transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {message}

      {/* Barre de progression qui se vide en 2.5s */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "2px",
        background: "linear-gradient(to right, var(--or), var(--or-clair))",
        width: visible ? "0%" : "100%",
        transition: visible ? "width 2.5s linear" : "none",
      }} />
    </div>
  );
}
