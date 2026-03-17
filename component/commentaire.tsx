"use client"
// Commentaires — témoignages traduits

import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

function Commentaire() {
  const { langue } = useContexte();

  const temoignages = [
    {
      texte: t.temo_1_txt,
      nom: "Marie Kouassi",
      poste: t.temo_1_poste,
      avatar: "/img/im1.jpg",
      etoiles: 5,
    },
    {
      texte: t.temo_2_txt,
      nom: "Kofi Asante",
      poste: t.temo_2_poste,
      avatar: "/img/im2.jpg",
      etoiles: 5,
    },
    {
      texte: t.temo_3_txt,
      nom: "Fatou Diallo",
      poste: t.temo_3_poste,
      avatar: "/img/im6.jpg",
      etoiles: 5,
    },
  ];

  return (
    <section className="section section-alt" id="temoignages">
      <div className="container-max">

        <div className="section-entete" data-aos="fade-up">
          <div className="section-label">{traduire(t.temo_label, langue)}</div>
          <h2 className="section-titre">
            {traduire(t.temo_titre, langue)} <em>{traduire(t.temo_titre_em, langue)}</em>
          </h2>
          <p className="section-desc">{traduire(t.temo_desc, langue)}</p>
        </div>

        <div className="temoignages-conteneur" data-aos="fade-up" data-aos-delay="200">
          {temoignages.map((item, i) => (
            <div className="temoignage-carte" key={i}>
              <div className="temoignage-etoiles">
                {Array.from({ length: item.etoiles }).map((_, j) => (
                  <span key={j} className="etoile">★</span>
                ))}
              </div>
              <div className="temoignage-guillemet">&quot;</div>
              <p className="temoignage-texte">
                &ldquo;{traduire(item.texte, langue)}&rdquo;
              </p>
              <div className="temoignage-auteur">
                <img
                  src={item.avatar}
                  alt={item.nom}
                  className="temoignage-avatar"
                  onError={(e) => {
                    console.log(`⚠️ Avatar manquant : ${item.nom}`);
                    (e.target as HTMLImageElement).src = "/img/hero1.jpg";
                  }}
                />
                <div>
                  <div className="temoignage-nom">{item.nom}</div>
                  <div className="temoignage-poste">{traduire(item.poste, langue)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Commentaire;
