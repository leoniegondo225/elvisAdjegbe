// Fichier de traductions — contient tous les textes du site en FR et EN
// Pour ajouter une traduction, il suffit d'ajouter une clé ici

// Type des traductions : chaque clé a une version FR et EN
type TraductionObjet = {
  fr: string;
  en: string;
};

// Dictionnaire de toutes les traductions du site
export const t: Record<string, TraductionObjet> = {

  // ---- NAVBAR ----
  nav_accueil:      { fr: "Accueil",       en: "Home" },
  nav_apropos:      { fr: "À propos",      en: "About" },
  nav_creations:    { fr: "Créations",     en: "Work" },
  nav_competences:  { fr: "Compétences",   en: "Skills" },
  nav_contact:      { fr: "Contact",       en: "Contact" },
  nav_cv:           { fr: "Voir le CV",    en: "View Resume" },

  // ---- HERO ----
  hero_label:       { fr: "01 — ACCUEIL",                  en: "01 — HOME" },
  hero_bonjour:     { fr: "Hello, je suis",                en: "Hello, I am" },
  hero_metier:      { fr: "Créateur Multimédia & Visual Artist", en: "Multimedia Creator & Visual Artist" },
  hero_desc:        { fr: "De la conception graphique au montage vidéo, je transforme vos idées en visuels captivants. Chaque projet est pensé pour mettre en valeur votre image et raconter votre histoire de manière percutante.",
                      en: "From graphic design to video editing, I transform your ideas into captivating visuals. Every project is crafted to showcase your image and tell your story with impact." },
  hero_service1:    { fr: "Création graphique et design sur mesure",        en: "Custom graphic design" },
  hero_service2:    { fr: "Photographie professionnelle et retouche avancée", en: "Professional photography & advanced retouching" },
  hero_service3:    { fr: "Montage vidéo et effets visuels dynamiques",     en: "Video editing & dynamic visual effects" },
  hero_service4:    { fr: "Identité visuelle et branding impactant",        en: "Visual identity & impactful branding" },
  hero_btn_voir:    { fr: "Voir mes créations",  en: "View my work" },
  hero_btn_contact: { fr: "Me contacter",        en: "Get in touch" },
  hero_badge_txt:   { fr: "Années d'expérience", en: "Years of experience" },
  hero_stat_projets:{ fr: "Projets",  en: "Projects" },
  hero_stat_satis:  { fr: "Satisfaction", en: "Satisfaction" },
  hero_stat_clients:{ fr: "Clients", en: "Clients" },
  hero_defiler:     { fr: "Défiler",  en: "Scroll" },

  // ---- COMPÉTENCES ----
  comp_label:       { fr: "Expertise",      en: "Expertise" },
  comp_titre:       { fr: "Mes",            en: "My" },
  comp_titre_em:    { fr: "Compétences",    en: "Skills" },
  comp_desc:        { fr: "Une maîtrise complète des outils et techniques multimédia pour donner vie à chaque projet avec précision et créativité.",
                      en: "Complete mastery of multimedia tools and techniques to bring every project to life with precision and creativity." },
  comp_1_nom:       { fr: "Photographie & Cadrage",  en: "Photography & Framing" },
  comp_1_txt:       { fr: "Maîtrise du cadrage, prise de vue professionnelle, retouches avancées et colorimétrie avec Adobe Lightroom et Photoshop.",
                      en: "Mastery of framing, professional shooting, advanced retouching and color grading with Adobe Lightroom and Photoshop." },
  comp_2_nom:       { fr: "Montage Vidéo",    en: "Video Editing" },
  comp_2_txt:       { fr: "Montage dynamique, effets spéciaux et animations avec Premiere Pro, After Effects et DaVinci Resolve.",
                      en: "Dynamic editing, special effects and animations with Premiere Pro, After Effects and DaVinci Resolve." },
  comp_3_nom:       { fr: "Infographie & Design",   en: "Infographics & Design" },
  comp_3_txt:       { fr: "Création de visuels percutants, logos, affiches et supports marketing avec Photoshop, Illustrator et InDesign.",
                      en: "Creating impactful visuals, logos, posters and marketing materials with Photoshop, Illustrator and InDesign." },
  comp_4_nom:       { fr: "Disponibilité 24h/24",   en: "24/7 Availability" },
  comp_4_txt:       { fr: "Flexibilité et réactivité totale pour répondre à vos besoins en création graphique, photo et vidéo à tout moment.",
                      en: "Full flexibility and responsiveness to meet your graphic, photo and video needs at any time." },

  // ---- CRÉATIONS ----
  creat_label:      { fr: "Portfolio",     en: "Portfolio" },
  creat_titre:      { fr: "Mes",           en: "My" },
  creat_titre_em:   { fr: "Créations",     en: "Creations" },
  creat_desc:       { fr: "Une sélection de projets qui reflètent ma passion pour le multimédia, du design graphique à la production vidéo.",
                      en: "A selection of projects reflecting my passion for multimedia, from graphic design to video production." },
  creat_voir:       { fr: "Voir le projet", en: "View project" },

  // ---- TÉMOIGNAGES ----
  temo_label:       { fr: "Témoignages",            en: "Testimonials" },
  temo_titre:       { fr: "Ce que disent",           en: "What my" },
  temo_titre_em:    { fr: "mes clients",             en: "clients say" },
  temo_desc:        { fr: "La satisfaction de mes clients est ma plus grande récompense. Voici quelques retours sur nos collaborations.",
                      en: "Client satisfaction is my greatest reward. Here are some feedbacks from our collaborations." },
  temo_1_txt:       { fr: "Elvis a transformé notre identité visuelle avec un professionnalisme remarquable. Ses créations graphiques ont immédiatement capté l'attention de notre audience cible.",
                      en: "Elvis transformed our visual identity with remarkable professionalism. His graphic creations immediately captured our target audience's attention." },
  temo_2_txt:       { fr: "Le montage vidéo réalisé pour notre événement était tout simplement époustouflant. Elvis maîtrise parfaitement l'art du cadrage et du rythme.",
                      en: "The video editing done for our event was simply breathtaking. Elvis perfectly masters the art of framing and rhythm." },
  temo_3_txt:       { fr: "Une collaboration incroyable ! Les photos de notre campagne sont d'une qualité exceptionnelle. Elvis a su capturer l'essence de notre marque.",
                      en: "An incredible collaboration! The photos from our campaign are of exceptional quality. Elvis captured the essence of our brand perfectly." },
  temo_1_poste:     { fr: "Directrice Marketing",       en: "Marketing Director" },
  temo_2_poste:     { fr: "Directeur Artistique",       en: "Art Director" },
  temo_3_poste:     { fr: "Responsable Communication",  en: "Communication Manager" },

  // ---- CONTACT ----
  cont_label:       { fr: "Contact",            en: "Contact" },
  cont_titre:       { fr: "Travaillons",        en: "Let's work" },
  cont_titre_em:    { fr: "ensemble",           en: "together" },
  cont_intro_titre: { fr: "Un projet ? Une idée ?", en: "A project? An idea?" },
  cont_intro_txt:   { fr: "Je suis disponible pour tout projet de création graphique, montage vidéo, photographie ou branding. N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.",
                      en: "I'm available for any graphic design, video editing, photography or branding project. Don't hesitate to contact me, I'll reply as soon as possible." },
  cont_tel_label:   { fr: "Téléphone / WhatsApp", en: "Phone / WhatsApp" },
  cont_tel_txt:     { fr: "Disponible sur WhatsApp", en: "Available on WhatsApp" },
  cont_mail_label:  { fr: "Email",              en: "Email" },
  cont_loc_label:   { fr: "Localisation",       en: "Location" },
  cont_loc_txt:     { fr: "Abidjan, Côte d'Ivoire", en: "Abidjan, Ivory Coast" },
  cont_champ_nom:   { fr: "Votre nom",          en: "Your name" },
  cont_champ_email: { fr: "Adresse e-mail",     en: "Email address" },
  cont_champ_sujet: { fr: "Sujet",              en: "Subject" },
  cont_champ_msg:   { fr: "Votre message",      en: "Your message" },
  cont_ph_nom:      { fr: "Ex : Jean Dupont",   en: "Ex: John Doe" },
  cont_ph_email:    { fr: "Ex : jean@exemple.com", en: "Ex: john@example.com" },
  cont_ph_sujet:    { fr: "Ex : Logo pour mon entreprise", en: "Ex: Logo for my business" },
  cont_ph_msg:      { fr: "Décrivez votre projet...", en: "Describe your project..." },
  cont_btn:         { fr: "Envoyer sur WhatsApp", en: "Send via WhatsApp" },

  // ---- FOOTER ----
  foot_metier:      { fr: "Créateur Multimédia & Visual Artist", en: "Multimedia Creator & Visual Artist" },
  foot_desc:        { fr: "Passionné par l'image, la vidéo et le design. Je crée des expériences visuelles qui marquent les esprits et valorisent votre identité.",
                      en: "Passionate about image, video and design. I create visual experiences that leave a lasting impression and elevate your identity." },
  foot_nav_titre:   { fr: "Navigation",  en: "Navigation" },
  foot_services_titre: { fr: "Services", en: "Services" },
  foot_copyright:   { fr: "Tous droits réservés.", en: "All rights reserved." },
  foot_fait:        { fr: "Conçu avec passion — Abidjan, Côte d'Ivoire", en: "Crafted with passion — Abidjan, Ivory Coast" },

  // ---- PAGE À PROPOS ----
  about_label:      { fr: "À propos de moi",  en: "About me" },
  about_titre_em:   { fr: "visuels",          en: "visuals" },
  about_titre_rest: { fr: "Créateur de",      en: "Creator of" },
  about_titre_qui:  { fr: "qui marquent",     en: "that make an impact" },
  about_para1:      { fr: "Je suis Elvis Adjegbe, créateur multimédia passionné basé à Abidjan, Côte d'Ivoire. Avec plus de 5 ans d'expérience dans le domaine visuel, je combine technique et créativité pour donner vie aux projets les plus ambitieux.",
                      en: "I am Elvis Adjegbe, a passionate multimedia creator based in Abidjan, Ivory Coast. With over 5 years of experience in the visual field, I combine technical skill and creativity to bring the most ambitious projects to life." },
  about_para2:      { fr: "Mon approche est simple : écouter, comprendre et créer. Chaque projet est unique et mérite une attention particulière. Que ce soit pour un logo, une vidéo promotionnelle ou une campagne photo complète, je m'investis pleinement pour dépasser vos attentes.",
                      en: "My approach is simple: listen, understand and create. Every project is unique and deserves special attention. Whether it's a logo, a promotional video or a full photo campaign, I'm fully committed to exceeding your expectations." },
  about_para3:      { fr: "Maîtrisant toute la suite Adobe Creative Cloud ainsi que DaVinci Resolve, je suis en mesure de gérer l'intégralité de votre projet, de la conception à la livraison finale.",
                      en: "Mastering the entire Adobe Creative Cloud suite as well as DaVinci Resolve, I'm able to handle your entire project from concept to final delivery." },
  about_btn_cv:     { fr: "Télécharger mon CV",  en: "Download my Resume" },
  about_btn_contact:{ fr: "Me contacter",        en: "Contact me" },
  about_stats_projets: { fr: "Projets réalisés", en: "Completed projects" },
  about_stats_clients: { fr: "Clients satisfaits", en: "Happy clients" },
  about_stats_ans:     { fr: "Années d'exp.",    en: "Years of exp." },
  about_stats_satis:   { fr: "Taux de satisfaction", en: "Satisfaction rate" },
  about_outils_label:  { fr: "Maîtrise",   en: "Mastery" },
  about_outils_titre:  { fr: "Outils &",   en: "Tools &" },
  about_outils_em:     { fr: "Logiciels",  en: "Software" },

  // ---- PAGES CATÉGORIES ----
  video_label:      { fr: "Production",  en: "Production" },
  video_titre:      { fr: "Montage",     en: "Video" },
  video_titre_em:   { fr: "Vidéo",       en: "Editing" },
  video_desc:       { fr: "Des vidéos qui captent l'attention, racontent une histoire et transmettent des émotions avec puissance et précision.",
                      en: "Videos that capture attention, tell a story and convey emotions with power and precision." },
  photo_label:      { fr: "Galerie",     en: "Gallery" },
  photo_titre_em:   { fr: "Photographie", en: "Photography" },
  photo_titre_rest: { fr: "& Retouche",  en: "& Retouching" },
  photo_desc:       { fr: "Shooting professionnel, retouches avancées et correction colorimétrique pour sublimer chaque instant capturé.",
                      en: "Professional shooting, advanced retouching and color correction to enhance every captured moment." },
  affiche_label:    { fr: "Graphisme",   en: "Graphic Design" },
  affiche_titre:    { fr: "Infographie &", en: "Infographics &" },
  affiche_titre_em: { fr: "Design",      en: "Design" },
  affiche_desc:     { fr: "Création de visuels percutants, affiches et supports de communication qui captivent et transmettent votre message avec impact.",
                      en: "Creating impactful visuals, posters and communication materials that captivate and convey your message powerfully." },
  cadrage_label:    { fr: "Technique",   en: "Technique" },
  cadrage_titre:    { fr: "L'art du",    en: "The art of" },
  cadrage_titre_em: { fr: "Cadrage",     en: "Framing" },
  cadrage_desc:     { fr: "Maîtrise des compositions, des angles et des plans pour créer des visuels qui racontent une histoire à travers chaque image.",
                      en: "Mastery of compositions, angles and shots to create visuals that tell a story through each image." },

  // ---- LIGHTBOX ----
  fermer:           { fr: "Fermer", en: "Close" },
};

// --------------------------------------------------------
// Fonction utilitaire : récupérer un texte traduit
// Utilisation : traduire(t.hero_bonjour, "fr") → "Hello, je suis"
// --------------------------------------------------------
export function traduire(cle: TraductionObjet, langue: string): string {
  if (langue === "en") return cle.en;
  return cle.fr; // Par défaut, retourner le français
}
