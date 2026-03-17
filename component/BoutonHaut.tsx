"use client"
// BoutonHaut — bouton flottant "⬆ retour en haut" (apparaît après 400px de scroll)

import { useEffect, useState } from "react";
import { useContexte } from "@/context/ThemeContext";

export default function BoutonHaut() {
  const { langue } = useContexte();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Surveiller le scroll pour afficher/cacher le bouton
    function gererScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", gererScroll, { passive: true });
    return () => window.removeEventListener("scroll", gererScroll);
  }, []);

  function allerEnHaut() {
    console.log("⬆️ Retour en haut de la page");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      id="bouton-haut"
      onClick={allerEnHaut}
      className={`btn-retour-haut ${visible ? "btn-retour-haut--visible" : ""}`}
      aria-label={langue === "fr" ? "Retour en haut" : "Back to top"}
      title={langue === "fr" ? "Retour en haut" : "Back to top"}
    >
      {/* Flèche vers le haut */}
      <svg
        width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
