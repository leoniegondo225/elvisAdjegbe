"use client"
// Page Cadrage — galerie bilingue FR/EN avec filtres traduits

import NavBar from "@/component/Navbar";
import Footer from "@/component/footer";
import { useState } from "react";
import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

// Données des cadrages avec traductions FR et EN
const cadrages = [
  { src: "/img/c.avif",   titre: { fr: "Plan Large",        en: "Wide Shot" },        desc: { fr: "Vue d'ensemble panoramique",  en: "Panoramic overview" } },
  { src: "/img/c1.jpg",   titre: { fr: "Plan Américain",    en: "American Shot" },    desc: { fr: "Cadrage personnage",          en: "Character framing" } },
  { src: "/img/c2.jpg",   titre: { fr: "Gros Plan",         en: "Close-Up" },         desc: { fr: "Focus sur les détails",       en: "Focus on details" } },
  { src: "/img/c3.jpg",   titre: { fr: "Plan Moyen",        en: "Medium Shot" },      desc: { fr: "Cadrage équilibré",           en: "Balanced framing" } },
  { src: "/img/c4.jpg",   titre: { fr: "Contre-plongée",    en: "Low Angle" },        desc: { fr: "Angle dramatique",            en: "Dramatic angle" } },
  { src: "/img/Ca1.jpg",  titre: { fr: "Plongée",           en: "High Angle" },       desc: { fr: "Vue du dessus",               en: "Top-down view" } },
  { src: "/img/hero2.jpg",titre: { fr: "Plan Séquence",     en: "Sequence Shot" },    desc: { fr: "Continuité narrative",        en: "Narrative continuity" } },
  { src: "/img/hero3.jpg",titre: { fr: "Plan Rapproché",    en: "Medium Close-Up" }, desc: { fr: "Émotion et intimité",         en: "Emotion and intimacy" } },
  { src: "/img/im7.jpg",  titre: { fr: "Plan d'Ensemble",   en: "Establishing Shot"}, desc: { fr: "Contexte et décor",           en: "Context and setting" } },
];

// Filtres bilingues : chaque filtre a une version FR et EN
const typesCadrage = [
  { fr: "Tous les plans",  en: "All shots" },
  { fr: "Plans larges",    en: "Wide shots" },
  { fr: "Plans serrés",    en: "Tight shots" },
  { fr: "Angles spéciaux", en: "Special angles" },
];

export default function Cadrage() {
  // Récupération de la langue depuis le contexte global
  const { langue } = useContexte();

  // Index du filtre actif (0 = "Tous les plans")
  const [filtreIndex, setFiltreIndex] = useState(0);

  // Lightbox
  const [photoOuverte, setPhotoOuverte] = useState<string | null>(null);

  function changerFiltre(index: number) {
    setFiltreIndex(index);
    const nomFiltre = langue === "fr" ? typesCadrage[index].fr : typesCadrage[index].en;
    console.log(`🔍 Filtre sélectionné : ${nomFiltre}`);
  }

  console.log("🎥 Page Cadrage chargée — langue :", langue);

  return (
    <div>
      <NavBar />

      {/* En-tête de la page */}
      <section className="categorie-hero">
        <div className="container-max">
          <div className="section-label" data-aos="fade-up">
            {traduire(t.cadrage_label, langue)}
          </div>
          <h1 className="section-titre" data-aos="fade-up" data-aos-delay="100">
            {traduire(t.cadrage_titre, langue)} <em>{traduire(t.cadrage_titre_em, langue)}</em>
          </h1>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="200">
            {traduire(t.cadrage_desc, langue)}
          </p>
        </div>
      </section>

      {/* Filtres traduits */}
      <section style={{ padding: "0 0 20px", background: "var(--noir-2)" }}>
        <div className="container-max">
          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", paddingTop: "40px" }}>
            {typesCadrage.map((filtre, index) => (
              <button
                key={index}
                onClick={() => changerFiltre(index)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  background: filtreIndex === index ? "var(--or)" : "transparent",
                  color: filtreIndex === index ? "var(--noir)" : "var(--gris)",
                  border: "1px solid",
                  borderColor: filtreIndex === index ? "var(--or)" : "var(--bordure-subtile)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Afficher le texte selon la langue active */}
                {langue === "fr" ? filtre.fr : filtre.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie des cadrages */}
      <section className="section">
        <div className="container-max">
          <div className="galerie-grid" data-aos="fade-up">
            {cadrages.map((item, index) => (
              <div key={index} className="galerie-item" onClick={() => setPhotoOuverte(item.src)}>
                <img src={item.src} alt={langue === "fr" ? item.titre.fr : item.titre.en} />

                {/* Overlay avec infos traduits */}
                <div className="galerie-item-overlay">
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-titre)", fontSize: "1.1rem", fontWeight: "700", color: "var(--blanc)", marginBottom: "6px" }}>
                      {langue === "fr" ? item.titre.fr : item.titre.en}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "2px", textTransform: "uppercase", color: "var(--or)" }}>
                      {langue === "fr" ? item.desc.fr : item.desc.en}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox plein écran */}
      {photoOuverte && (
        <div
          onClick={() => setPhotoOuverte(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", cursor: "pointer" }}
        >
          <button
            onClick={() => setPhotoOuverte(null)}
            style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "1px solid var(--bordure)", color: "var(--blanc)", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontFamily: "var(--font-mono)" }}
          >
            ✕
          </button>
          <img
            src={photoOuverte}
            alt={langue === "fr" ? "Cadrage agrandi" : "Enlarged framing"}
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", border: "1px solid var(--bordure)" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
