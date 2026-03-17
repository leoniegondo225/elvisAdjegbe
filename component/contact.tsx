"use client"
// Contact — formulaire bilingue avec validation des champs

import { useState } from "react";
import { useContexte } from "@/context/ThemeContext";
import { t, traduire } from "@/context/traductions";

// Type pour les erreurs de validation
type Erreurs = { nom?: string; email?: string; sujet?: string; message?: string };

function Contact() {
  const { langue } = useContexte();

  // Valeurs des champs du formulaire
  const [formulaire, setFormulaire] = useState({
    nom: "", email: "", sujet: "", message: "",
  });

  // Erreurs de validation (vides si tout est OK)
  const [erreurs, setErreurs] = useState<Erreurs>({});

  // true quand l'envoi est en cours (évite double-clic)
  const [envoi, setEnvoi] = useState(false);

  // Met à jour un champ ET efface son erreur en temps réel
  function mettreAJourChamp(champ: string, valeur: string) {
    setFormulaire(prev => ({ ...prev, [champ]: valeur }));
    // Effacer l'erreur du champ dès que l'utilisateur tape
    if (erreurs[champ as keyof Erreurs]) {
      setErreurs(prev => ({ ...prev, [champ]: undefined }));
    }
  }

  // Valide le formulaire — retourne true si tout est OK
  function valider(): boolean {
    const nouvellesErreurs: Erreurs = {};

    // Nom obligatoire
    if (!formulaire.nom.trim()) {
      nouvellesErreurs.nom = langue === "fr"
        ? "Veuillez entrer votre nom"
        : "Please enter your name";
    }

    // Email obligatoire + format valide
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formulaire.email.trim()) {
      nouvellesErreurs.email = langue === "fr"
        ? "Veuillez entrer votre email"
        : "Please enter your email";
    } else if (!regexEmail.test(formulaire.email)) {
      nouvellesErreurs.email = langue === "fr"
        ? "Format d'email invalide"
        : "Invalid email format";
    }

    // Sujet obligatoire
    if (!formulaire.sujet.trim()) {
      nouvellesErreurs.sujet = langue === "fr"
        ? "Veuillez indiquer un sujet"
        : "Please enter a subject";
    }

    // Message obligatoire (minimum 10 caractères)
    if (!formulaire.message.trim()) {
      nouvellesErreurs.message = langue === "fr"
        ? "Veuillez écrire un message"
        : "Please write a message";
    } else if (formulaire.message.trim().length < 10) {
      nouvellesErreurs.message = langue === "fr"
        ? "Le message doit contenir au moins 10 caractères"
        : "Message must be at least 10 characters";
    }

    setErreurs(nouvellesErreurs);

    const estValide = Object.keys(nouvellesErreurs).length === 0;
    console.log(estValide
      ? "✅ Formulaire valide — préparation de l'envoi"
      : "❌ Formulaire invalide :", nouvellesErreurs
    );
    return estValide;
  }

  // Envoie le formulaire vers WhatsApp
  function envoyerMessage() {
    if (!valider()) return; // Stopper si erreurs

    setEnvoi(true);
    console.log("📩 Ouverture WhatsApp avec le message...");

    const texte =
      `Bonjour Elvis !%0A` +
      `Je m'appelle *${formulaire.nom}*%0A` +
      `Email : ${formulaire.email}%0A` +
      `Sujet : *${formulaire.sujet}*%0A%0A` +
      `${formulaire.message}`;

    window.open(`https://wa.me/message/ALVHMML7F2H6L1?text=${texte}`, "_blank");

    // Réinitialiser après 1.5s
    setTimeout(() => {
      setFormulaire({ nom: "", email: "", sujet: "", message: "" });
      setEnvoi(false);
      console.log("🔄 Formulaire réinitialisé");
    }, 1500);
  }

  // Icônes SVG pour les infos de contact
  const icones = {
    tel:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.06 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>,
    email: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    loc:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  };

  return (
    <section className="section" id="contact">
      <div className="container-max">

        {/* En-tête */}
        <div className="section-entete" data-aos="fade-up">
          <div className="section-label">{traduire(t.cont_label, langue)}</div>
          <h2 className="section-titre">
            {traduire(t.cont_titre, langue)} <em>{traduire(t.cont_titre_em, langue)}</em>
          </h2>
        </div>

        <div className="contact-grid">

          {/* ── Colonne gauche : infos ── */}
          <div className="contact-info" data-aos="fade-right">
            <h3>
              {langue === "fr"
                ? <>Un projet ? <em>Une idée ?</em></>
                : <>A project? <em>An idea?</em></>}
            </h3>
            <p>{traduire(t.cont_intro_txt, langue)}</p>

            <div className="contact-items">
              {[
                { icone: icones.tel,   label: traduire(t.cont_tel_label, langue),  val: traduire(t.cont_tel_txt, langue) },
                { icone: icones.email, label: traduire(t.cont_mail_label, langue), val: "elvisadjegbe@gmail.com" },
                { icone: icones.loc,   label: traduire(t.cont_loc_label, langue),  val: traduire(t.cont_loc_txt, langue) },
              ].map((item, i) => (
                <div className="contact-item" key={i}>
                  <div className="contact-item-icone">{item.icone}</div>
                  <div className="contact-item-texte">
                    <strong>{item.label}</strong>
                    <span>{item.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite : formulaire ── */}
          <div data-aos="fade-left" data-aos-delay="150">

            {/* Champs texte (nom, email, sujet) */}
            {[
              { id: "nom",   label: t.cont_champ_nom,   ph: t.cont_ph_nom,   type: "text"  },
              { id: "email", label: t.cont_champ_email, ph: t.cont_ph_email, type: "email" },
              { id: "sujet", label: t.cont_champ_sujet, ph: t.cont_ph_sujet, type: "text"  },
            ].map((champ) => (
              <div className="contact-form-group" key={champ.id}>
                <label htmlFor={`contact-${champ.id}`}>
                  {traduire(champ.label, langue)}
                </label>
                <input
                  id={`contact-${champ.id}`}
                  type={champ.type}
                  className={`contact-input ${erreurs[champ.id as keyof Erreurs] ? "input-erreur" : ""}`}
                  placeholder={traduire(champ.ph, langue)}
                  value={(formulaire as Record<string, string>)[champ.id]}
                  onChange={(e) => mettreAJourChamp(champ.id, e.target.value)}
                />
                {/* Message d'erreur sous le champ */}
                {erreurs[champ.id as keyof Erreurs] && (
                  <span className="erreur-msg">
                    ⚠ {erreurs[champ.id as keyof Erreurs]}
                  </span>
                )}
              </div>
            ))}

            {/* Champ message (textarea) */}
            <div className="contact-form-group">
              <label htmlFor="contact-message">
                {traduire(t.cont_champ_msg, langue)}
              </label>
              <textarea
                id="contact-message"
                className={`contact-input ${erreurs.message ? "input-erreur" : ""}`}
                placeholder={traduire(t.cont_ph_msg, langue)}
                rows={5}
                value={formulaire.message}
                onChange={(e) => mettreAJourChamp("message", e.target.value)}
              />
              {erreurs.message && (
                <span className="erreur-msg">⚠ {erreurs.message}</span>
              )}
            </div>

            {/* Bouton d'envoi */}
            <button
              onClick={envoyerMessage}
              disabled={envoi}
              className="btn-gold"
              style={{
                width: "100%",
                justifyContent: "center",
                border: "none",
                cursor: envoi ? "not-allowed" : "pointer",
                opacity: envoi ? 0.7 : 1,
              }}
            >
              {envoi
                ? (langue === "fr" ? "Envoi en cours..." : "Sending...")
                : traduire(t.cont_btn, langue)
              }
              {!envoi && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              )}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
