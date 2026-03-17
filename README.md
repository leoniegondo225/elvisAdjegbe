# Portfolio Elvis Adjegbe — Multimédia & Design

Portfolio professionnel de **Elvis Adjegbe**, créateur multimédia basé à Abidjan, Côte d'Ivoire.

---

## 🚀 Lancer le projet

```bash
# Installer les dépendances (à faire une seule fois)
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

Le site est accessible sur **http://localhost:3000**

---

## 🗂 Structure du projet

```
por-elvis/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx            # Page d'accueil
│   ├── layout.tsx          # Layout global (CSS + contexte)
│   ├── not-found.tsx       # Page 404
│   ├── about/page.tsx      # Page À propos
│   ├── image/page.tsx      # Galerie photos
│   ├── montagevideo/page.tsx  # Galerie vidéos
│   ├── affiche/page.tsx    # Galerie infographie
│   └── cadrage/page.tsx    # Galerie cadrage
│
├── component/              # Composants React réutilisables
│   ├── Navbar.tsx          # Navigation + toggles thème/langue
│   ├── hero.tsx            # Section héro avec compteurs animés
│   ├── outils.tsx          # Bande défilante des logiciels
│   ├── competence.tsx      # Grille des compétences
│   ├── creation.tsx        # Galerie masonry des créations
│   ├── commentaire.tsx     # Section témoignages
│   ├── contact.tsx         # Formulaire de contact (validation)
│   ├── footer.tsx          # Pied de page
│   ├── ClientInit.tsx      # Init JS côté client (AOS, curseur)
│   ├── ThemeScript.tsx     # Anti-flash de thème
│   ├── Toast.tsx           # Notification thème/langue
│   └── BoutonHaut.tsx      # Bouton retour en haut
│
├── context/
│   ├── ThemeContext.tsx    # Contexte global (thème + langue)
│   └── traductions.ts     # Dictionnaire FR/EN complet
│
├── css/
│   └── style.css          # CSS global (~2400 lignes)
│
└── public/img/            # Images et vidéos du portfolio
```

---

## 🎨 Fonctionnalités

### Mode sombre / clair
- Bouton **🌙/☀️** dans la navbar
- Mémorisation dans `localStorage`
- Transition douce de 0.35s
- Anti-flash au rechargement

### Bilingue FR / EN
- Bouton **🇫🇷/🇬🇧** dans la navbar
- ~200 traductions dans `context/traductions.ts`
- Mémorisation dans `localStorage`

### Animations
- **AOS** : animations au scroll sur toutes les sections
- **Compteurs** : statistiques animées dans le hero
- **Bande défilante** : logos des outils en continu
- **Curseur custom** : point doré + cercle suiveur
- **Toast** : notification lors des changements de préférence

### Formulaire de contact
- Validation des champs en temps réel
- Messages d'erreur en FR/EN
- Envoi vers **WhatsApp** avec le message pré-rempli

---

## 🛠 Technologies

- **Next.js 15** — Framework React
- **TypeScript** — Typage statique
- **AOS** — Animations au scroll
- **CSS Variables** — Theming dark/light
- **Google Fonts** — Playfair Display + Syne + Space Mono

---

## 📸 Images requises (dans `public/img/`)

Toutes les images originales sont conservées depuis le projet initial.
Les vidéos `vi1.mp4` à `vi11.mp4` sont utilisées dans la page montage vidéo.

---

*Développé avec ❤️ — Abidjan, Côte d'Ivoire*
