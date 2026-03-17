"use client"
// Outils — bande défilante des logiciels maîtrisés (style "clients logos")
// Animation CSS infinie de gauche à droite

import { useContexte } from "@/context/ThemeContext";

// Liste des outils avec leur couleur de marque
const outils = [
  { nom: "Photoshop",    couleur: "#31A8FF", lettre: "Ps" },
  { nom: "Premiere Pro", couleur: "#9999FF", lettre: "Pr" },
  { nom: "After Effects",couleur: "#9999FF", lettre: "Ae" },
  { nom: "Illustrator",  couleur: "#FF9A00", lettre: "Ai" },
  { nom: "Lightroom",    couleur: "#31A8FF", lettre: "Lr" },
  { nom: "InDesign",     couleur: "#FF3366", lettre: "Id" },
  { nom: "DaVinci",      couleur: "#E6D04F", lettre: "Da" },
  { nom: "Capture One",  couleur: "#8E44AD", lettre: "C1" },
];

// On duplique la liste pour un défilement infini sans saut
const outilsDupliques = [...outils, ...outils];

export default function Outils() {
  const { langue } = useContexte();

  return (
    <section
      style={{
        padding: "60px 0",
        background: "var(--noir-2)",
        borderTop:    "1px solid var(--bordure-subtile)",
        borderBottom: "1px solid var(--bordure-subtile)",
        overflow: "hidden",
      }}
    >
      {/* Label centré */}
      <div
        style={{
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "var(--gris)",
          marginBottom: "36px",
        }}
      >
        {langue === "fr" ? "— Outils maîtrisés —" : "— Tools & Software —"}
      </div>

      {/* Piste de défilement infini */}
      <div style={{ position: "relative" }}>
        {/* Masques de fondu gauche/droite */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: "80px", zIndex: 1,
          background: "linear-gradient(to right, var(--noir-2), transparent)",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0,
          width: "80px", zIndex: 1,
          background: "linear-gradient(to left, var(--noir-2), transparent)",
        }} />

        {/* Conteneur qui défile */}
        <div className="outils-piste">
          {outilsDupliques.map((outil, i) => (
            <div key={i} className="outil-item">
              {/* Carré coloré avec les initiales du logiciel */}
              <div
                className="outil-logo"
                style={{ background: outil.couleur + "22", borderColor: outil.couleur + "44" }}
              >
                <span style={{ color: outil.couleur }}>{outil.lettre}</span>
              </div>
              {/* Nom du logiciel */}
              <span className="outil-nom">{outil.nom}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
