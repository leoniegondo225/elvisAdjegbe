"use client"
// Page d'accueil — assemblage de tous les composants dans l'ordre

import NavBar      from "@/component/Navbar";
import Hero        from "@/component/hero";
import Outils      from "@/component/outils";
import Competence  from "@/component/competence";
import Creation    from "@/component/creation";
import Commentaire from "@/component/commentaire";
import Contact     from "@/component/contact";
import Footer      from "@/component/footer";

export default function Home() {
  console.log("🏠 Page d'accueil chargée");

  return (
    <div>
      {/* 1. Barre de navigation fixe */}
      <NavBar />

      {/* 2. Section hero plein écran */}
      <Hero />

      {/* 3. Bande défilante des outils maîtrisés */}
      <Outils />

      {/* 4. Section compétences */}
      <Competence />

      {/* 5. Galerie des créations */}
      <Creation />

      {/* 6. Témoignages clients */}
      <Commentaire />

      {/* 7. Formulaire de contact */}
      <Contact />

      {/* 8. Pied de page */}
      <Footer />
    </div>
  );
}
