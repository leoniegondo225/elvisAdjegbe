"use client"
// Compétences — textes traduits

import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

function Competence() {
  const { langue } = useContexte();

  // Données des compétences avec clés de traduction
  const competences = [
    {
      numero: "01",
      icone: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      ),
      nom: t.comp_1_nom,
      texte: t.comp_1_txt,
    },
    {
      numero: "02",
      icone: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      ),
      nom: t.comp_2_nom,
      texte: t.comp_2_txt,
    },
    {
      numero: "03",
      icone: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      ),
      nom: t.comp_3_nom,
      texte: t.comp_3_txt,
    },
    {
      numero: "04",
      icone: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      nom: t.comp_4_nom,
      texte: t.comp_4_txt,
    },
  ];

  return (
    <section className="section section-alt" id="competences">
      <div className="container-max">

        <div className="section-entete" data-aos="fade-up">
          <div className="section-label">{traduire(t.comp_label, langue)}</div>
          <h2 className="section-titre">
            {traduire(t.comp_titre, langue)} <em>{traduire(t.comp_titre_em, langue)}</em>
          </h2>
          <p className="section-desc">{traduire(t.comp_desc, langue)}</p>
        </div>

        <div className="competences-grille" data-aos="fade-up" data-aos-delay="200">
          {competences.map((comp) => (
            <div className="comp-carte" key={comp.numero}>
              <span className="comp-numero">{comp.numero}</span>
              <div className="comp-icone">{comp.icone}</div>
              <h3 className="comp-nom">{traduire(comp.nom, langue)}</h3>
              <p className="comp-texte">{traduire(comp.texte, langue)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Competence;
