"use client"
// Page Image — galerie photo bilingue

import NavBar from "@/component/Navbar";
import Footer from "@/component/footer";
import { useState } from "react";
import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

const photos = [
  "/img/im1.jpg", "/img/im2.jpg", "/img/im6.jpg",
  "/img/im7.jpg", "/img/im8.jpg", "/img/im9.jpg",
  "/img/im10.jpg", "/img/im11.jpg", "/img/im12.jpg",
  "/img/im13.jpg", "/img/im14.jpg", "/img/im15.jpg",
  "/img/im16.jpg", "/img/im17.jpg", "/img/im18.jpg",
  "/img/im19.jpg", "/img/hero1.jpg", "/img/hero3.jpg",
  "/img/in1.jpg", "/img/in2.jpg", "/img/in3.jpg",
  "/img/in4.jpg", "/img/in5.jpg", "/img/in6.jpg",
];

export default function ImagePage() {
  const { langue } = useContexte();
  const [photoOuverte, setPhotoOuverte] = useState<string | null>(null);
  console.log("📸 Page Photo — langue :", langue);

  return (
    <div>
      <NavBar />

      <section className="categorie-hero">
        <div className="container-max">
          <div className="section-label" data-aos="fade-up">{traduire(t.photo_label, langue)}</div>
          <h1 className="section-titre" data-aos="fade-up" data-aos-delay="100">
            <em>{traduire(t.photo_titre_em, langue)}</em> {traduire(t.photo_titre_rest, langue)}
          </h1>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="200">{traduire(t.photo_desc, langue)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <div className="galerie-grid" data-aos="fade-up">
            {photos.map((src, i) => (
              <div key={i} className="galerie-item" onClick={() => setPhotoOuverte(src)}>
                <img src={src} alt={`Photo ${i + 1}`} />
                <div className="galerie-item-overlay">
                  <span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {photoOuverte && (
        <div onClick={() => setPhotoOuverte(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", cursor: "pointer" }}>
          <button onClick={() => setPhotoOuverte(null)} style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "1px solid var(--bordure)", color: "var(--blanc)", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontFamily: "var(--font-mono)" }}>✕</button>
          <img src={photoOuverte} alt="Photo agrandie" style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", border: "1px solid var(--bordure)" }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <Footer />
    </div>
  );
}
