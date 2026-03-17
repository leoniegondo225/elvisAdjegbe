"use client"
// ClientInit — composant client qui initialise :
// 1. AOS (animations au scroll)
// 2. Le curseur personnalisé
// 3. Les barres de compétences animées
// Ce composant ne rend rien visuellement (retourne null)
// Il est monté une seule fois dans le layout

import { useEffect } from "react";
import AOS from "aos";

export default function ClientInit() {

  useEffect(() => {
    // ------------------------------------------------
    // 1. Initialisation des animations AOS
    // ------------------------------------------------
    console.log("🎬 Initialisation AOS...");
    AOS.init({
      duration: 900,          // Durée de l'animation en millisecondes
      easing: "ease-out-cubic", // Courbe de l'animation (décélération douce)
      once: true,             // Jouer l'animation une seule fois
      offset: 60,             // Déclencher 60px avant l'apparition
    });
    console.log("✅ AOS initialisé avec succès");

    // ------------------------------------------------
    // 2. Curseur personnalisé (point doré + cercle)
    // ------------------------------------------------
    const curseur       = document.getElementById("curseur");
    const curseurCercle = document.getElementById("curseur-cercle");

    // Déplacer les deux éléments du curseur en suivant la souris
    function deplacerCurseur(e: MouseEvent) {
      if (curseur) {
        curseur.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
      if (curseurCercle) {
        curseurCercle.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
      }
    }

    // Agrandir le cercle quand la souris est sur un élément cliquable
    function agrandir() {
      curseurCercle?.classList.add("curseur-agrandi");
    }
    function retrecir() {
      curseurCercle?.classList.remove("curseur-agrandi");
    }

    document.addEventListener("mousemove", deplacerCurseur);

    // Appliquer l'effet sur tous les liens et boutons
    const interactifs = document.querySelectorAll("a, button, .creation-item, .galerie-item");
    interactifs.forEach(el => {
      el.addEventListener("mouseenter", agrandir);
      el.addEventListener("mouseleave", retrecir);
    });

    console.log("🖱️ Curseur personnalisé activé");

    // ------------------------------------------------
    // 3. Barres de compétences animées (IntersectionObserver)
    // ------------------------------------------------
    // L'observateur surveille les barres et les anime quand elles deviennent visibles
    const observateurBarres = new IntersectionObserver(
      (entrees) => {
        entrees.forEach(entree => {
          if (entree.isIntersecting) {
            // Récupérer le pourcentage depuis l'attribut data-pct
            const barre = entree.target as HTMLElement;
            const pct   = barre.getAttribute("data-pct") || "0";
            barre.style.width = pct + "%";
            console.log(`📊 Barre de compétence animée : ${pct}%`);
          }
        });
      },
      { threshold: 0.3 } // Déclencher quand 30% de la barre est visible
    );

    // Observer toutes les barres présentes dans le DOM
    document.querySelectorAll(".barre-remplissage").forEach(b => {
      observateurBarres.observe(b);
    });

    // ------------------------------------------------
    // 4. Animation [data-anim] au scroll
    // ------------------------------------------------
    const observateurAnim = new IntersectionObserver(
      (entrees) => {
        entrees.forEach(entree => {
          if (entree.isIntersecting) {
            entree.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("[data-anim]").forEach(el => {
      observateurAnim.observe(el);
    });

    // ------------------------------------------------
    // Nettoyage quand le composant est démonté
    // ------------------------------------------------
    return () => {
      document.removeEventListener("mousemove", deplacerCurseur);
      interactifs.forEach(el => {
        el.removeEventListener("mouseenter", agrandir);
        el.removeEventListener("mouseleave", retrecir);
      });
      observateurBarres.disconnect();
      observateurAnim.disconnect();
      console.log("🧹 ClientInit : nettoyage terminé");
    };
  }, []); // [] = s'exécute une seule fois au montage

  // Ce composant ne rend rien dans le DOM
  return null;
}
