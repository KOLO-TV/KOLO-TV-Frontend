// Dictionnaire français — source de vérité du contenu et de la structure des clés.
// Toute clé ajoutée ici doit aussi exister dans mg.ts (vérifié par le typage `Dictionary`).
// Les variables {{name}} sont remplacées à l'affichage et doivent rester identiques dans chaque langue.
const fr = {
  seo: {
    title: 'KOLO TV/FM — La télé autrement… | Accueil',
    description:
      'Regardez KOLO TV en direct : Ny Vaovao, Le Journal, magazines, sport et culture malgache. Écoutez KOLO FM.',
  },

  brand: {
    tagline: 'La télé autrement…',
    slogan: '« Pour vous… Toujours pour vous… Rien que pour vous. »',
  },

  common: {
    liveBadge: 'Live',
    direct: 'En direct',
    onAir: 'On air',
    viewers: '{{count}} spectateurs',
  },

  player: {
    playVideo: 'Lire la vidéo',
    play: 'Lecture',
    playShort: 'Play',
    pause: 'Pause',
  },

  nav: {
    home: 'Accueil',
    news: 'Actualités',
    live: 'Live',
    replay: 'Replay',
    radio: 'Radio',
    more: 'Plus',
  },

  programs: {
    nyVaovao: 'Ny Vaovao',
    journal: 'Le Journal',
    magazines: 'Magazines',
    entertainment: 'Divertissement',
    sport: 'Sport',
  },

  header: {
    moreDesc: {
      nyVaovao: 'Le journal quotidien',
      journal: 'Éditions 12h & 20h',
      magazines: 'Culture & société',
      entertainment: 'Musique & talk-shows',
      sport: 'Barea & championnats',
    },
    searchPlaceholder: 'Rechercher…',
    search: 'Rechercher',
    suggestions: 'Suggestions',
    watchLive: 'Regarder en direct',
    changeLanguage: 'Changer de langue',
    account: 'Mon compte',
    menu: 'Menu',
  },

  footer: {
    description: 'Média malgache généraliste, culturel et informatif. La télé autrement.',
    social: 'Réseau social',
    programsTitle: 'Programmes',
    contactTitle: 'Contact',
    about: {
      about: 'À propos',
      teams: 'Nos équipes',
      tvGuide: 'Grille TV',
      fmGuide: 'Grille FM',
      advertising: 'Publicité',
    },
    location: 'Antananarivo, Madagascar',
    copyright: '© {{year}} KOLO TV/FM. Tous droits réservés.',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    terms: 'CGU',
  },

  // Libellés des catégories : les clés sont les valeurs internes utilisées par le filtre Replay.
  category: {
    Tout: 'Tout',
    Journal: 'Journal',
    Culture: 'Culture',
    Sport: 'Sport',
    Musique: 'Musique',
    Débat: 'Débat',
    Reportage: 'Reportage',
    Économie: 'Économie',
  },

  time: {
    today: "Aujourd'hui",
    todayEvening: "Aujourd'hui · 20h00",
    todayNoon: "Aujourd'hui · 12h00",
    yesterday: 'Hier',
    yesterdayEvening: 'Hier · 20h00',
    yesterdayNoon: 'Hier · 12h00',
    hoursAgo: 'Il y a {{count}}h',
    daysAgo: 'Il y a {{count}} jours',
    lastWeek: 'Semaine dernière',
  },

  home: {
    hero: {
      titleLead: 'La télé',
      titleAccent: 'autrement',
      titleLine2: 'Toujours pour vous.',
      intro:
        'Suivez le Journal, les magazines et le sport de la Grande Île. Une chaîne malgache proche du public, culturelle et informative.',
      watchNow: 'Regarder maintenant',
      seeReplay: 'Voir le Replay',
      viewers: 'Téléspectateurs',
      bilingual: 'Bilingue',
      imageAlt: 'Journal en direct',
      videoTitle: "NY VAOVAO — Aujourd'hui, l'actualité de Madagascar",
    },
    featured: {
      title: 'À la une',
      subtitle: 'Les temps forts sélectionnés par la rédaction',
    },
    journals: {
      title: 'Ny Vaovao & Journaux',
      subtitle: 'Les dernières éditions',
      cta: 'Tout voir',
    },
    promo: {
      badge: 'En direct maintenant',
      titleAccent: 'tous les jours, sans coupure',
      text: 'Regardez la chaîne en direct sur mobile ou desktop, écoutez la radio et rejoignez le chat de la communauté KOLO.',
      watchTv: 'Regarder TV',
      listenFm: 'Écouter FM',
    },
    popular: {
      title: 'Populaire cette semaine',
      subtitle: 'Ce que la communauté KOLO regarde le plus',
    },
    shows: {
      title: 'Nos émissions',
      subtitle: 'Une programmation pensée pour vous',
      cta: 'Toute la grille',
      seeEpisodes: 'Voir les épisodes',
    },
    radio: {
      subtitle: 'La radio active !',
      imageAlt: 'Studio KOLO FM',
      title: 'La musique et les voix de Madagascar, non-stop.',
      text: 'Écoutez KOLO FM directement dans votre navigateur, sur mobile ou en podcast. Émissions culturelles, débats, musique malgache et internationale.',
      listenLive: 'Écouter en direct',
    },
  },

  live: {
    title: 'KOLO en direct',
    tvImageAlt: 'KOLO TV en direct',
    fmShow: 'Mankasitraka — matinale',
    fmHost: 'avec Nirina Rakoto · 06h – 09h',
    now: 'Maintenant',
    next: 'Ensuite',
    tvNowTitle: 'Ny Vaovao — Journal 20h',
    tvNowSlot: '20:00 – 20:30 · Journal télévisé',
    fmNowSlot: '06:00 – 09:00 · Talk & musique',
    tvNextSlot: '20:30 – 21:15 · Magazine culturel',
    fmNextSlot: '09:00 – 11:00 · Sélection musicale',
    chat: {
      title: 'Chat en direct',
      you: 'Vous',
      placeholder: 'Écrire un message…',
      inputLabel: 'Message du chat',
      send: 'Envoyer',
    },
  },

  replay: {
    eyebrow: 'Vidéothèque',
    title: 'Replay & Vidéos',
    intro:
      'Toutes les émissions de KOLO TV disponibles à la demande. Filtrez par catégorie ou recherchez une émission.',
    searchPlaceholder: 'Rechercher une vidéo, une émission…',
    countOne: '{{count}} vidéo',
    countOther: '{{count}} vidéos',
    categoryLabel: 'Catégorie :',
    empty: 'Aucune vidéo ne correspond à votre recherche.',
  },

  emission: {
    breadcrumbShows: 'Émissions',
    episodeOfDay: 'Épisode du jour',
    flagship: 'Ny Vaovao · Émission phare',
    title: 'Ny Vaovao — Édition du 20h, le journal de Madagascar',
    duration: '{{count}} min',
    views: '{{count}} vues',
    actions: {
      like: "J'aime · {{count}}",
      share: 'Partager',
      save: 'Enregistrer',
    },
    aboutTitle: 'À propos de cette édition',
    aboutText:
      "Retrouvez l'actualité de Madagascar et du monde présentée par les journalistes de KOLO TV. Économie, politique, société, culture et sport : le journal complet en français, avec des séquences en malagasy.",
    tags: {
      politics: 'Politique',
      antananarivo: 'Antananarivo',
      economy: 'Économie',
      barea: 'Barea',
      culture: 'Culture',
    },
    related: 'Vous aimerez aussi',
    recentEpisodes: 'Épisodes récents',
    episodesCount: '{{shown}} sur {{total}}',
    nowPlaying: 'En lecture',
    allEpisodes: 'Voir tous les épisodes',
  },

  notFound: {
    title: 'Page introuvable',
    text: "La page que vous recherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },

  // Contenus mock de src/data/media.ts
  media: {
    titles: {
      journal20h: 'Ny Vaovao — Journal du 20h',
      journal12h: 'Ny Vaovao — Journal du 12h',
      journal12hToday: 'Ny Vaovao 12h — édition du jour',
      artisansSud: 'Kolo Kulture : les artisans du Sud',
      bareaCan: 'Barea : préparation CAN 2026',
      grandDebat: 'Antananarivo : le grand débat',
      musiqueLive: 'Musique Malagasy live session',
      focusRizLocal: 'Focus économie : le riz local',
      focusRizMalgache: 'Focus : le riz malgache',
      zoomAnalamanga: 'Zoom sport : Analamanga FC',
      kultureMadajazzcar: 'Kolo Kulture : festival Madajazzcar',
      festivalMadajazzcar: 'Festival Madajazzcar',
      journalSoir: 'Journal du soir en malagasy',
      portraitEntrepreneurs: 'Portrait : entrepreneurs de Toamasina',
      portraitEntrepreneursShort: 'Portrait : entrepreneurs Toamasina',
      portraitToamasina: 'Portrait de Toamasina',
      concertMalgache: 'Sessions Live : concert malgache',
    },
    shows: {
      nyVaovao: 'Le journal quotidien en malagasy et en français',
      koloKulture: 'Le magazine culturel malgache',
      zoomSport: "Toute l'actualité sportive de la Grande Île",
      sessionsLive: 'Concerts et rencontres avec les artistes',
    },
    episodes: {
      today20h: "Édition du 20h — Aujourd'hui",
      today12h: "Édition du 12h — Aujourd'hui",
      yesterdayEvening: 'Édition du soir — Hier',
      yesterday12h: 'Édition du 12h — Hier',
      elections: 'Édition spéciale : élections',
      malagasy: 'Journal en malagasy',
    },
    chat: {
      hery: 'Salama daholo ! Excellent journal ce soir 🇲🇬',
      nirina: 'Le reportage sur Toamasina était très bien fait 👏',
      fara: 'Misaotra KOLO TV pour la qualité !',
      tahiana: 'Vous diffusez le match des Barea demain ?',
      rojo: 'Tsara be ny fandaharana e 💛',
    },
    search: {
      nyVaovaoEvening: 'Ny Vaovao du soir',
      tvNews: 'Journal télévisé',
      koloKulture: 'Kolo Kulture',
      bareaMatch: 'Match Barea',
      koloFmLive: 'KOLO FM direct',
    },
  },
}

export type Dictionary = typeof fr

export default fr
