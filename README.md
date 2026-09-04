# KOLO TV — Frontend React

Reproduction **frontend uniquement** (React + Vite + TypeScript + Tailwind CSS)
de l'interface visuelle de la chaîne malgache KOLO TV/FM, réalisée à partir
d'une inspection manuelle de la mise en page, des couleurs, de la typographie
et des interactions du site de référence.

> Ce projet est 100% frontend : aucune API, aucune base de données, aucune
> authentification. Toutes les données affichées sont des **mocks locaux**
> définis dans `src/data/media.ts`. Les visuels d'illustration (miniatures,
> studio, etc.) sont des **SVG générés localement** (dégradés + pictogrammes),
> afin de ne dépendre d'aucune image ou média externe protégé.

## Fonctionnalités

- **Accueil (`/`)** : hero avec bandeau "En direct", CTA, bloc statistiques,
  section "À la une", "Ny Vaovao & Journaux", bandeau promo Live TV/FM,
  carrousel horizontal "Populaire cette semaine", grille "Nos émissions",
  bloc "KOLO FM".
- **Live (`/live`)** : bascule fonctionnelle entre onglet **KOLO TV** et
  **KOLO FM** (visuel différent selon le canal), lecteur factice avec
  barre de progression, chat en direct **interactif** (envoi de messages
  ajoutés en temps réel dans la liste).
- **Replay (`/replay`)** : bibliothèque vidéo avec **recherche texte** et
  **filtres par catégorie** (Tout, Journal, Culture, Sport, Musique, Débat,
  Reportage, Économie) fonctionnant en combinaison, avec état vide géré.
- **Détail d'émission (`/emissions/ny-vaovao`)** : page épisode avec lecteur,
  fil d'ariane, tags, actions (like/partager/enregistrer), liste d'épisodes
  récents et suggestions "Vous aimerez aussi".
- **Header** : navigation desktop + menu déroulant "Plus", recherche avec
  suggestions, sélecteur de langue FR/MG, menu mobile (hamburger) avec
  recherche et liens.
- **Footer** : liens programmes, à propos, contact, réseaux sociaux.
- **Responsive** : optimisé pour desktop, tablette et mobile (menu hamburger,
  grilles qui s'empilent, carrousel tactile).

## Stack technique

- [React 18](https://react.dev/) + [React Router 6](https://reactrouter.com/) (navigation SPA)
- [Vite 5](https://vitejs.dev/) (bundler / dev server)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/) (thème personnalisé aux couleurs KOLO)
- [lucide-react](https://lucide.dev/) (icônes, même bibliothèque que la référence)

## Structure du projet

```
webapp/
├── src/
│   ├── assets/images/       # Illustrations SVG générées localement
│   ├── components/          # MediaCard, Section, Header, Footer (réutilisables)
│   ├── data/media.ts        # Données mock (émissions, replay, chat, etc.)
│   ├── layouts/SiteLayout.tsx
│   ├── pages/               # Home, Live, Replay, EmissionDetail, NotFound
│   ├── App.tsx              # Routes React Router
│   ├── main.tsx             # Point d'entrée
│   └── index.css            # Styles globaux + animations
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Installation et lancement en local

```bash
npm install
npm run dev
```

L'application est accessible sur **http://localhost:3000**.

Build de production :

```bash
npm run build
npm run preview
```

## Données mock

Toutes les données (émissions, journal, replay, messages de chat,
suggestions de recherche) sont statiques et centralisées dans
`src/data/media.ts`. Aucun appel réseau n'est effectué.

## Ce qui n'est pas implémenté (hors périmètre)

- Lecture vidéo/audio réelle (les lecteurs sont visuels/statiques)
- Authentification / compte utilisateur
- Persistance des messages de chat après rechargement
- Backend, base de données, API

## Prochaines étapes possibles

- Intégrer un vrai lecteur vidéo (ex: video.js) branché sur des flux réels
- Ajouter la persistance locale (localStorage) pour le chat et les favoris
- Ajouter des tests unitaires (Vitest + React Testing Library)
- Ajouter d'autres pages (À propos, Grille TV/FM, Contact) si besoin
