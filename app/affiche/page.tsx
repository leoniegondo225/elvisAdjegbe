"use client"
// Page Affiche — bilingue

import NavBar from "@/component/Navbar";
import Footer from "@/component/footer";
import { useState } from "react";
import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

const affiches = [
  { src: "/img/c1.jpg",   titre: { fr: "Affiche Événement",  en: "Event Poster" },    cat: { fr: "Print",       en: "Print" } },
  { src: "/img/c2.jpg",   titre: { fr: "Design Visuel",      en: "Visual Design" },   cat: { fr: "Branding",    en: "Branding" } },
  { src: "/img/c3.jpg",   titre: { fr: "Communication",      en: "Communication" },   cat: { fr: "Social Media",en: "Social Media" } },
  { src: "/img/c4.jpg",   titre: { fr: "Identité Visuelle",  en: "Visual Identity" }, cat: { fr: "Logo",        en: "Logo" } },
  { src: "/img/Ca1.jpg",  titre: { fr: "Flyer Promo",        en: "Promo Flyer" },     cat: { fr: "Print",       en: "Print" } },
  { src: "/img/img3.jpg", titre: { fr: "Bannière Web",       en: "Web Banner" },      cat: { fr: "Digital",     en: "Digital" } },
  { src: "/img/img4.jpg", titre: { fr: "Poster Créatif",     en: "Creative Poster" }, cat: { fr: "Art",         en: "Art" } },
  { src: "/img/img5.jpg", titre: { fr: "Packaging",          en: "Packaging" },       cat: { fr: "Design",      en: "Design" } },
  { src: "/img/in7.jpg",  titre: { fr: "Campagne Pub",       en: "Ad Campaign" },     cat: { fr: "Marketing",   en: "Marketing" } },
  { src: "/img/in8.png",  titre: { fr: "Motion Design",      en: "Motion Design" },   cat: { fr: "Animation",   en: "Animation" } },
  { src: "/img/in9.png",  titre: { fr: "Infographie Data",   en: "Data Infographic" },cat: { fr: "Info",        en: "Info" } },
  { src: "/img/p.avif",   titre: { fr: "Carte de Visite",    en: "Business Card" },   cat: { fr: "Print",       en: "Print" } },
  { src: "/img/p2.avif",  titre: { fr: "Rapport Annuel",     en: "Annual Report" },   cat: { fr: "Edition",     en: "Publishing" } },
];

export default function Affiche() {
  const { langue } = useContexte();
  const [photoOuverte, setPhotoOuverte] = useState<string | null>(null);
  console.log("🎨 Page Affiche — langue :", langue);

  return (
    <div>
      <NavBar />

      <section className="categorie-hero">
        <div className="container-max">
          <div className="section-label" data-aos="fade-up">{traduire(t.affiche_label, langue)}</div>
          <h1 className="section-titre" data-aos="fade-up" data-aos-delay="100">
            {traduire(t.affiche_titre, langue)} <em>{traduire(t.affiche_titre_em, langue)}</em>
          </h1>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="200">{traduire(t.affiche_desc, langue)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <div className="galerie-grid" data-aos="fade-up">
            {affiches.map((item, i) => (
              <div key={i} className="galerie-item" onClick={() => setPhotoOuverte(item.src)}>
                <img src={item.src} alt={langue === "fr" ? item.titre.fr : item.titre.en} />
                <span style={{ position: "absolute", top: "14px", left: "14px", background: "rgba(8,8,8,0.75)", backdropFilter: "blur(8px)", border: "1px solid var(--bordure)", padding: "4px 10px", fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "2px", textTransform: "uppercase", color: "var(--gris-clair)", zIndex: 2 }}>
                  {langue === "fr" ? item.cat.fr : item.cat.en}
                </span>
                <div className="galerie-item-overlay">
                  <div style={{ textAlign: "center" }}>
                    <span style={{ display: "block", fontFamily: "var(--font-titre)", fontSize: "1rem", color: "var(--blanc)", fontWeight: "700", marginBottom: "8px" }}>
                      {langue === "fr" ? item.titre.fr : item.titre.en}
                    </span>
                    <span style={{ display: "inline-flex", width: "44px", height: "44px", border: "1.5px solid var(--or)", alignItems: "center", justifyContent: "center", color: "var(--or)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {photoOuverte && (
        <div onClick={() => setPhotoOuverte(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", cursor: "pointer" }}>
          <button onClick={() => setPhotoOuverte(null)} style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "1px solid var(--bordure)", color: "var(--blanc)", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontFamily: "var(--font-mono)" }}>✕</button>
          <img src={photoOuverte} alt="Affiche" style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", border: "1px solid var(--bordure)" }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <Footer />
    </div>
  );
}
