"use client"
// Page À propos — bilingue FR/EN

import NavBar from "@/component/Navbar";
import Footer from "@/component/footer";
import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

const outils = [
  { nom: "Adobe Photoshop", niveau: 95 },
  { nom: "Adobe Premiere Pro", niveau: 90 },
  { nom: "After Effects", niveau: 85 },
  { nom: "Adobe Illustrator", niveau: 88 },
  { nom: "DaVinci Resolve", niveau: 80 },
  { nom: "Adobe Lightroom", niveau: 92 },
  { nom: "Adobe InDesign", niveau: 78 },
  { nom: "Capture One", niveau: 75 },
];

export default function About() {
  const { langue } = useContexte();
  console.log("👤 Page À propos chargée — langue :", langue);

  const chiffres = [
    { valeur: "120+", label: t.about_stats_projets },
    { valeur: "50+",  label: t.about_stats_clients },
    { valeur: "5+",   label: t.about_stats_ans },
    { valeur: "98%",  label: t.about_stats_satis },
  ];

  return (
    <div>
      <NavBar />

      {/* Hero */}
      <section className="about-hero">
        <div className="container-max">
          <div className="about-grid" data-aos="fade-up">

            <div className="about-img-wrap" data-aos="fade-right">
              <img src="/img/about.jpg" alt="Elvis Adjegbe" className="about-img" />
            </div>

            <div data-aos="fade-left" data-aos-delay="150">
              <div className="about-texte-tag">{traduire(t.about_label, langue)}</div>

              <h1 className="about-titre">
                {traduire(t.about_titre_rest, langue)} <em>{traduire(t.about_titre_em, langue)}</em><br />
                {traduire(t.about_titre_qui, langue)}
              </h1>

              <p className="about-para">{traduire(t.about_para1, langue)}</p>
              <p className="about-para">{traduire(t.about_para2, langue)}</p>
              <p className="about-para">{traduire(t.about_para3, langue)}</p>

              <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="/img/CvElvis.pdf" target="_blank" rel="noopener noreferrer" className="btn-gold">
                  {traduire(t.about_btn_cv, langue)} <span>↓</span>
                </a>
                <a href="#contact-about" className="btn-outline">
                  {traduire(t.about_btn_contact, langue)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="section section-alt">
        <div className="container-max">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--bordure-subtile)" }}
            data-aos="fade-up"
          >
            {chiffres.map((item) => (
              <div key={item.label.fr} style={{ background: "var(--noir-3)", padding: "52px 36px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-titre)", fontSize: "3.5rem", color: "var(--or)", fontWeight: "700", lineHeight: "1", marginBottom: "10px" }}>
                  {item.valeur}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "2px", textTransform: "uppercase", color: "var(--gris)" }}>
                  {traduire(item.label, langue)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils */}
      <section className="section">
        <div className="container-max">
          <div className="section-entete" data-aos="fade-up">
            <div className="section-label">{traduire(t.about_outils_label, langue)}</div>
            <h2 className="section-titre">
              {traduire(t.about_outils_titre, langue)} <em>{traduire(t.about_outils_em, langue)}</em>
            </h2>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0 80px" }}
            data-aos="fade-up" data-aos-delay="150"
          >
            {outils.map((outil) => (
              <div className="barre-skill" key={outil.nom}>
                <div className="barre-skill-header">
                  <span className="barre-skill-nom">{outil.nom}</span>
                  <span className="barre-skill-pct">{outil.niveau}%</span>
                </div>
                <div className="barre-piste">
                  <div className="barre-remplissage" data-pct={outil.niveau}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact-about"></div>
      <Footer />
    </div>
  );
}
