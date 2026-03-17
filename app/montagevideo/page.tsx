"use client"
// Page Montage Vidéo — bilingue

import NavBar from "@/component/Navbar";
import Footer from "@/component/footer";
import { useState } from "react";
import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

const videos = [
  { src: "/img/vi1.mp4",  titre: { fr: "Projet Vidéo 01", en: "Video Project 01" }, desc: { fr: "Montage dynamique", en: "Dynamic editing" } },
  { src: "/img/vi2.mp4",  titre: { fr: "Projet Vidéo 02", en: "Video Project 02" }, desc: { fr: "Effets spéciaux",   en: "Special effects" } },
  { src: "/img/vi3.mp4",  titre: { fr: "Projet Vidéo 03", en: "Video Project 03" }, desc: { fr: "Motion Design",     en: "Motion Design" } },
  { src: "/img/vi4.mp4",  titre: { fr: "Projet Vidéo 04", en: "Video Project 04" }, desc: { fr: "Clip promotionnel", en: "Promo clip" } },
  { src: "/img/vi5.mp4",  titre: { fr: "Projet Vidéo 05", en: "Video Project 05" }, desc: { fr: "After Effects",     en: "After Effects" } },
  { src: "/img/vi6.mp4",  titre: { fr: "Projet Vidéo 06", en: "Video Project 06" }, desc: { fr: "Color Grading",     en: "Color Grading" } },
  { src: "/img/vi7.mp4",  titre: { fr: "Projet Vidéo 07", en: "Video Project 07" }, desc: { fr: "Transitions",       en: "Transitions" } },
  { src: "/img/vi8.mp4",  titre: { fr: "Projet Vidéo 08", en: "Video Project 08" }, desc: { fr: "Storytelling",      en: "Storytelling" } },
  { src: "/img/vi9.mp4",  titre: { fr: "Projet Vidéo 09", en: "Video Project 09" }, desc: { fr: "Brand Film",        en: "Brand Film" } },
  { src: "/img/vi10.mp4", titre: { fr: "Projet Vidéo 10", en: "Video Project 10" }, desc: { fr: "Social Media",      en: "Social Media" } },
  { src: "/img/vi11.mp4", titre: { fr: "Projet Vidéo 11", en: "Video Project 11" }, desc: { fr: "Cinématique",       en: "Cinematic" } },
];

export default function MontageVideo() {
  const { langue } = useContexte();
  const [videoActive, setVideoActive] = useState<number | null>(null);
  console.log("🎬 Page Montage Vidéo — langue :", langue);

  return (
    <div>
      <NavBar />

      <section className="categorie-hero">
        <div className="container-max">
          <div className="section-label" data-aos="fade-up">{traduire(t.video_label, langue)}</div>
          <h1 className="section-titre" data-aos="fade-up" data-aos-delay="100">
            {traduire(t.video_titre, langue)} <em>{traduire(t.video_titre_em, langue)}</em>
          </h1>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="200">{traduire(t.video_desc, langue)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <div className="video-grid" data-aos="fade-up">
            {videos.map((video, i) => (
              <div key={i} className="video-item" onClick={() => setVideoActive(i)} style={{ cursor: "pointer" }}>
                <video src={video.src} muted loop autoPlay playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px" }}>
                  <div style={{ width: "50px", height: "50px", border: "1.5px solid var(--or)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "var(--or)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                  </div>
                  <div style={{ fontFamily: "var(--font-corps)", fontSize: "0.95rem", fontWeight: "700", color: "var(--blanc)", marginBottom: "4px" }}>
                    {langue === "fr" ? video.titre.fr : video.titre.en}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "2px", textTransform: "uppercase", color: "var(--or)" }}>
                    {langue === "fr" ? video.desc.fr : video.desc.en}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lecteur vidéo plein écran */}
      {videoActive !== null && (
        <div onClick={() => setVideoActive(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.97)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <button onClick={() => setVideoActive(null)} style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "1px solid var(--bordure)", color: "var(--blanc)", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontFamily: "var(--font-mono)" }}>✕</button>
          <video src={videos[videoActive].src} controls autoPlay style={{ maxWidth: "90vw", maxHeight: "85vh", border: "1px solid var(--bordure)" }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <Footer />
    </div>
  );
}
