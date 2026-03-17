"use client"
// Navbar — navigation principale avec :
// - détection de la page active (lien surligné)
// - toggle thème dark/light animé
// - toggle langue FR/EN avec drapeaux
// - menu hamburger pour mobile

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

function NavBar() {
  const { theme, langue, basculerTheme, basculerLangue } = useContexte();
  const pathname = usePathname(); // Chemin de la page actuelle (ex: "/about")

  const [scrolle,    setScrolle]    = useState(false);
  const [menuOuvert, setMenuOuvert] = useState(false);

  useEffect(() => {
    function gererScroll() { setScrolle(window.scrollY > 60); }
    window.addEventListener("scroll", gererScroll, { passive: true });
    return () => window.removeEventListener("scroll", gererScroll);
  }, []);

  // Fermer le menu (utilisé après clic sur un lien)
  function fermerMenu() { setMenuOuvert(false); }

  function basculerMenu() {
    const nouvel = !menuOuvert;
    setMenuOuvert(nouvel);
    console.log(`📱 Menu mobile ${nouvel ? "ouvert" : "fermé"}`);
  }

  // Vérifie si un lien est actif (correspondance avec l'URL actuelle)
  function estActif(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  // Définition des liens de navigation
  const liensNav = [
    { href: "/",            labelCle: t.nav_accueil     },
    { href: "/about",       labelCle: t.nav_apropos     },
    { href: "#creations",   labelCle: t.nav_creations   },
    { href: "#competences", labelCle: t.nav_competences },
    { href: "#contact",     labelCle: t.nav_contact     },
  ];

  return (
    <nav className={`navbar-elvs ${scrolle ? "scrolled" : ""}`} role="navigation">
      <div className="container-nav">

        {/* ── Logo ── */}
        <a href="/" className="nav-logo" onClick={fermerMenu}>
          <span className="nav-logo-nom">
            Elvis{" "}
            <em style={{ color: "var(--or)", fontStyle: "italic" }}>Adjegbe</em>
          </span>
          <span className="nav-logo-metier">
            {langue === "fr" ? "Multimédia & Design" : "Multimedia & Design"}
          </span>
        </a>

        {/* ── Hamburger mobile ── */}
        <button
          className={`nav-toggle ${menuOuvert ? "ouvert" : ""}`}
          onClick={basculerMenu}
          aria-label={langue === "fr" ? "Ouvrir le menu" : "Open menu"}
          aria-expanded={menuOuvert}
          aria-controls="nav-menu-principal"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ── Menu principal ── */}
        <div
          id="nav-menu-principal"
          className={`nav-menu ${menuOuvert ? "ouvert" : ""}`}
        >
          {/* Liens de navigation avec détection de la page active */}
          <ul className="nav-liens">
            {liensNav.map((lien) => (
              <li key={lien.href}>
                <a
                  href={lien.href}
                  onClick={fermerMenu}
                  className={estActif(lien.href) ? "actif" : ""}
                  aria-current={estActif(lien.href) ? "page" : undefined}
                >
                  {traduire(lien.labelCle, langue)}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Actions : CV + Langue + Thème ── */}
          <div className="nav-actions">

            {/* Bouton CV */}
            <a
              href="/img/CvElvis.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-cv"
              onClick={fermerMenu}
            >
              {traduire(t.nav_cv, langue)}
            </a>

            <div className="separateur-v" aria-hidden="true"></div>

            {/* Toggle langue */}
            <button
              className="btn-toggle"
              onClick={basculerLangue}
              title={langue === "fr" ? "Switch to English" : "Passer en Français"}
              aria-label={langue === "fr" ? "Switch to English" : "Passer en Français"}
            >
              <span aria-hidden="true">{langue === "fr" ? "🇫🇷" : "🇬🇧"}</span>
              <span>{langue === "fr" ? "FR" : "EN"}</span>
            </button>

            {/* Toggle thème avec icônes animées */}
            <button
              className={`btn-toggle btn-toggle-theme ${theme === "light" ? "theme-actif" : ""}`}
              onClick={basculerTheme}
              title={theme === "dark"
                ? (langue === "fr" ? "Mode clair"  : "Light mode")
                : (langue === "fr" ? "Mode sombre" : "Dark mode")}
              aria-label={theme === "dark"
                ? (langue === "fr" ? "Passer en mode clair"  : "Switch to light mode")
                : (langue === "fr" ? "Passer en mode sombre" : "Switch to dark mode")}
            >
              <span className="theme-icone-wrap" aria-hidden="true">
                <span className={`toggle-icone icone-soleil ${theme === "light" ? "icone-visible" : "icone-cache"}`}>☀️</span>
                <span className={`toggle-icone icone-lune   ${theme === "dark"  ? "icone-visible" : "icone-cache"}`}>🌙</span>
              </span>
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
