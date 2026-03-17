"use client"
// Hero — section d'accueil avec stats animées (compteur) et textes bilingues

import { useEffect, useRef, useState } from "react";
import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

// ── Hook compteur animé ────────────────────────────────────
// Anime un nombre de 0 jusqu'à la valeur cible
function useCompteur(valeurCible: number, duree: number = 1800) {
  const [compteur, setCompteur] = useState(0);
  const dejaAnime = useRef(false);

  function demarrer() {
    // Ne démarrer qu'une seule fois
    if (dejaAnime.current) return;
    dejaAnime.current = true;

    const debut = performance.now();

    function mettreAJour(maintenant: number) {
      // Calcul de la progression (0 → 1)
      const progression = Math.min((maintenant - debut) / duree, 1);

      // Courbe d'accélération "ease-out" pour un effet naturel
      const valeurActuelle = Math.floor(
        progression < 1
          ? valeurCible * (1 - Math.pow(1 - progression, 3))
          : valeurCible
      );

      setCompteur(valeurActuelle);

      // Continuer l'animation si pas terminée
      if (progression < 1) {
        requestAnimationFrame(mettreAJour);
      }
    }

    requestAnimationFrame(mettreAJour);
  }

  return { compteur, demarrer };
}

function Hero() {
  const { langue } = useContexte();

  // Compteurs animés pour chaque statistique
  const stat1 = useCompteur(120, 1600); // 120+ projets
  const stat2 = useCompteur(98, 1400);  // 98% satisfaction
  const stat3 = useCompteur(50, 1200);  // 50+ clients

  // Observer l'apparition du hero pour déclencher les compteurs
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observateur = new IntersectionObserver(
      (entrees) => {
        if (entrees[0].isIntersecting) {
          console.log("🔢 Démarrage des compteurs de statistiques...");
          // Démarrer les 3 compteurs avec de petits décalages
          setTimeout(() => stat1.demarrer(), 400);
          setTimeout(() => stat2.demarrer(), 600);
          setTimeout(() => stat3.demarrer(), 800);
          observateur.disconnect(); // Observer une seule fois
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observateur.observe(heroRef.current);

    return () => observateur.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="hero" id="accueil" ref={heroRef}>
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-ligne-v"></div>

      <div className="hero-contenu">

        {/* ── GAUCHE : Texte ──────────────────────── */}
        <div className="hero-texte-col">

          <div className="hero-numero">
            <span>{traduire(t.hero_label, langue)}</span>
          </div>

          <h1 className="hero-titre">
            {traduire(t.hero_bonjour, langue)}
            <em>Elvis Adjegbe</em>
          </h1>

          <p className="hero-sous-titre">
            {traduire(t.hero_metier, langue)}
          </p>

          <p className="hero-desc">
            {traduire(t.hero_desc, langue)}
          </p>

          {/* Liste des services */}
          <ul className="hero-liste">
            {[t.hero_service1, t.hero_service2, t.hero_service3, t.hero_service4].map((s, i) => (
              <li key={i}>
                <span className="bullet" aria-hidden="true"></span>
                {traduire(s, langue)}
              </li>
            ))}
          </ul>

          {/* Boutons d'action */}
          <div className="hero-actions">
            <a href="#creations" className="btn-gold">
              {traduire(t.hero_btn_voir, langue)}{" "}
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn-outline">
              {traduire(t.hero_btn_contact, langue)}
            </a>
          </div>
        </div>

        {/* ── DROITE : Image + Stats ───────────────── */}
        <div className="hero-visuel">
          <div className="hero-img-cadre">

            {/* Photo principale */}
            <img
              src="/img/hero1.jpg"
              alt="Elvis Adjegbe — Créateur multimédia"
              className="hero-img"
            />

            {/* Badge années d'expérience */}
            <div className="hero-badge">
              <div className="hero-badge-num">5+</div>
              <div className="hero-badge-txt">
                {traduire(t.hero_badge_txt, langue)}
              </div>
            </div>

            {/* Stats avec compteurs animés */}
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-num">
                  {stat1.compteur}<span style={{ fontSize: "0.6em" }}>+</span>
                </div>
                <div className="hero-stat-lab">{traduire(t.hero_stat_projets, langue)}</div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-num">
                  {stat2.compteur}<span style={{ fontSize: "0.6em" }}>%</span>
                </div>
                <div className="hero-stat-lab">{traduire(t.hero_stat_satis, langue)}</div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-num">
                  {stat3.compteur}<span style={{ fontSize: "0.6em" }}>+</span>
                </div>
                <div className="hero-stat-lab">{traduire(t.hero_stat_clients, langue)}</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Flèche de scroll vers le bas */}
      <a href="#competences" className="hero-scroll" aria-label={traduire(t.hero_defiler, langue)}>
        <span>{traduire(t.hero_defiler, langue)}</span>
        <div className="hero-scroll-ligne" aria-hidden="true"></div>
      </a>

    </section>
  );
}

export default Hero;
