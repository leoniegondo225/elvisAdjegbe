"use client"
// Page 404 — Page introuvable, bilingue et dans le style du portfolio

import NavBar from "@/component/Navbar";
import Footer from "@/component/footer";
import { useContexte } from "@/context/ThemeContext";

export default function NotFound() {
  const { langue } = useContexte();

  console.log("❌ Page 404 affichée");

  return (
    <div>
      <NavBar />

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fond décoratif */}
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>

        {/* Numéro 404 en arrière-plan géant */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-titre)",
            fontSize: "clamp(120px, 30vw, 320px)",
            fontWeight: "900",
            color: "rgba(201, 168, 76, 0.04)",
            letterSpacing: "-10px",
            userSelect: "none",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          404
        </div>

        {/* Contenu principal */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 40px",
          }}
        >
          {/* Label */}
          <div
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "24px" }}
          >
            {langue === "fr" ? "Erreur 404" : "Error 404"}
          </div>

          {/* Titre */}
          <h1
            style={{
              fontFamily: "var(--font-titre)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: "900",
              color: "var(--blanc)",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            {langue === "fr" ? (
              <>Page <em style={{ color: "var(--or)", fontStyle: "italic" }}>introuvable</em></>
            ) : (
              <>Page <em style={{ color: "var(--or)", fontStyle: "italic" }}>not found</em></>
            )}
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-corps)",
              fontSize: "1rem",
              color: "var(--gris-clair)",
              maxWidth: "480px",
              margin: "0 auto 48px",
              lineHeight: "1.8",
            }}
          >
            {langue === "fr"
              ? "Oups ! Cette page n'existe pas ou a été déplacée. Retournez à l'accueil pour découvrir mon travail."
              : "Oops! This page doesn't exist or has been moved. Go back home to discover my work."}
          </p>

          {/* Boutons */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="/" className="btn-gold">
              {langue === "fr" ? "← Retour à l'accueil" : "← Back to home"}
            </a>
            <a href="#contact" className="btn-outline">
              {langue === "fr" ? "Me contacter" : "Contact me"}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
