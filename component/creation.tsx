"use client"
// Créations — galerie traduite

import Link from "next/link";
import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

function Creation() {
  const { langue } = useContexte();

  const creations = [
    { id: 1, href: "/montagevideo", image: "/img/v.jpg",     cat: "Vidéographie / Videography", nom: { fr: "Vidéographe", en: "Videographer" },      tag: "Vidéo" },
    { id: 2, href: "/montagevideo", image: "/img/hero2.jpg", cat: "Post-production",             nom: { fr: "Montage Vidéo", en: "Video Editing" },     tag: "Montage" },
    { id: 3, href: "/affiche",      image: "/img/i.avif",    cat: "Design Graphique / Graphic",  nom: { fr: "Infographie", en: "Infographics" },         tag: "Design" },
    { id: 4, href: "/image",        image: "/img/hero3.jpg", cat: "Photo",                       nom: { fr: "Photographie", en: "Photography" },        tag: "Photo" },
    { id: 5, href: "/cadrage",      image: "/img/c.avif",    cat: "Technique / Technical",       nom: { fr: "Cadrage", en: "Framing" },                 tag: "Cadrage" },
    { id: 6, href: "#",             image: "/img/g.avif",    cat: "Branding",                    nom: { fr: "Design Graphique", en: "Graphic Design" }, tag: "Branding" },
  ];

  return (
    <section className="section" id="creations">
      <div className="container-max">

        <div className="section-entete" data-aos="fade-up">
          <div className="section-label">{traduire(t.creat_label, langue)}</div>
          <h2 className="section-titre">
            {traduire(t.creat_titre, langue)} <em>{traduire(t.creat_titre_em, langue)}</em>
          </h2>
          <p className="section-desc">{traduire(t.creat_desc, langue)}</p>
        </div>

        <div className="creations-grille" data-aos="fade-up" data-aos-delay="150">
          {creations.map((item) => (
            <Link key={item.id} href={item.href} className="creation-item" style={{ textDecoration: "none" }}>
              <span className="creation-tag">{item.tag}</span>
              <img src={item.image} alt={item.nom.fr} className="creation-img" />
              <div className="creation-overlay">
                <span className="creation-cat">{item.cat}</span>
                <h3 className="creation-nom">{langue === "fr" ? item.nom.fr : item.nom.en}</h3>
                <span className="creation-lien">
                  {traduire(t.creat_voir, langue)} <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Creation;
