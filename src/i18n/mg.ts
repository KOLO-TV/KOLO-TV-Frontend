// Dictionnaire malgache — même structure que fr.ts (imposée par le type `Dictionary`).
// Glossaire : Émission → fandaharana · Épisode → fizarana · Édition (journal) → fandefasana ·
// En direct / Live → mivantana · Replay → jereo indray · Grille → fandaharam-potoana ·
// Journal (catégorie) → vaovao · Le Journal (programme) → fandaharam-baovao.
// Slogan « La télé autrement » → « TV hafa kely » (registre familier de « télé », et libellé
// assez court pour tenir dans l'en-tête desktop).
// Les noms propres (KOLO TV/FM, Ny Vaovao, Kolo Kulture, Zoom Sport, Sessions Live, Barea,
// Mankasitraka, Malagasy Beats, Madajazzcar…) ne sont pas traduits.
import type { Dictionary } from './fr'

const mg: Dictionary = {
  seo: {
    title: 'KOLO TV/FM — TV hafa kely… | Fandraisana',
    description:
      'Jereo mivantana ny KOLO TV : Ny Vaovao, fandaharam-baovao, fandaharana manokana, fanatanjahantena ary kolontsaina malagasy. Henoy ny KOLO FM.',
  },

  brand: {
    tagline: 'TV hafa kely…',
    slogan: '« Ho anao… Ho anao hatrany… Ho anao ihany. »',
  },

  common: {
    liveBadge: 'Mivantana',
    direct: 'Mivantana',
    onAir: 'Am-pandefasana',
    viewers: '{{count}} mpijery',
  },

  player: {
    playVideo: 'Alefaso ny horonantsary',
    play: 'Alefaso',
    playShort: 'Alefaso',
    pause: 'Ajanony vetivety',
  },

  nav: {
    home: 'Fandraisana',
    news: 'Vaovao',
    live: 'Mivantana',
    replay: 'Jereo indray',
    radio: 'Radio',
    more: 'Hafa',
  },

  programs: {
    nyVaovao: 'Ny Vaovao',
    journal: 'Fandaharam-baovao',
    magazines: 'Fandaharana manokana',
    entertainment: 'Fialamboly',
    sport: 'Fanatanjahantena',
  },

  header: {
    moreDesc: {
      nyVaovao: 'Vaovao isan’andro',
      journal: 'Amin’ny 12 ora & 8 ora alina',
      magazines: 'Kolontsaina & fiarahamonina',
      entertainment: 'Mozika & fandaharana resadresaka',
      sport: 'Barea & fifaninanana',
    },
    searchPlaceholder: 'Hikaroka…',
    search: 'Hikaroka',
    suggestions: 'Soso-kevitra',
    watchLive: 'Jereo mivantana',
    changeLanguage: 'Hanova fiteny',
    account: 'Ny kaontiko',
    menu: 'Safidy',
  },

  footer: {
    description:
      'Haino aman-jery malagasy ho an’ny rehetra, manome kolontsaina sy fampahalalana. TV hafa kely.',
    social: 'Tambajotra sosialy',
    programsTitle: 'Fandaharana',
    contactTitle: 'Fifandraisana',
    about: {
      about: 'Momba anay',
      teams: 'Ny ekipanay',
      tvGuide: 'Fandaharam-potoana TV',
      fmGuide: 'Fandaharam-potoana FM',
      advertising: 'Dokam-barotra',
    },
    location: 'Antananarivo, Madagasikara',
    copyright: '© {{year}} KOLO TV/FM. Zo rehetra voatokana.',
    legal: 'Fanamarihana ara-dalàna',
    privacy: 'Tsiambaratelo',
    terms: 'Fepetra fampiasana',
  },

  category: {
    Tout: 'Rehetra',
    Journal: 'Vaovao',
    Culture: 'Kolontsaina',
    Sport: 'Fanatanjahantena',
    Musique: 'Mozika',
    Débat: 'Adihevitra',
    Reportage: 'Tatitra',
    Économie: 'Toekarena',
  },

  time: {
    today: 'Androany',
    todayEvening: 'Androany · 8 ora alina',
    todayNoon: 'Androany · 12 ora atoandro',
    yesterday: 'Omaly',
    yesterdayEvening: 'Omaly · 8 ora alina',
    yesterdayNoon: 'Omaly · 12 ora atoandro',
    hoursAgo: '{{count}} ora lasa',
    daysAgo: '{{count}} andro lasa',
    lastWeek: 'Herinandro lasa',
  },

  home: {
    hero: {
      titleLead: 'TV',
      titleAccent: 'hafa kely',
      titleLine2: 'Ho anao hatrany.',
      intro:
        'Arahi-maso ny vaovao, ny fandaharana manokana ary ny fanatanjahantena eto amin’ny Nosy Lehibe. Fahitalavitra malagasy akaiky ny vahoaka, manome kolontsaina sy fampahalalana.',
      watchNow: 'Jereo izao',
      seeReplay: 'Jereo indray',
      viewers: 'Mpijery',
      bilingual: 'Fiteny roa',
      imageAlt: 'Vaovao mivantana',
      videoTitle: 'NY VAOVAO — Ny vaovao eto Madagasikara androany',
    },
    featured: {
      title: 'Nosongadinina',
      subtitle: 'Ireo fotoana manan-danja nofantenin’ny mpanao gazety',
    },
    journals: {
      title: 'Ny Vaovao & Fandaharam-baovao',
      subtitle: 'Ireo fandefasana farany',
      cta: 'Jereo daholo',
    },
    promo: {
      badge: 'Mivantana izao',
      titleAccent: 'isan’andro, tsy misy tapaka',
      text: 'Jereo mivantana ny fahitalavitra amin’ny finday na solosaina, henoy ny radio ary miaraha miresaka amin’ny fianakaviamben’ny KOLO.',
      watchTv: 'Jereo ny TV',
      listenFm: 'Henoy ny FM',
    },
    popular: {
      title: 'Malaza amin’ity herinandro ity',
      subtitle: 'Izay tena jeren’ny fianakaviamben’ny KOLO',
    },
    shows: {
      title: 'Ny fandaharanay',
      subtitle: 'Voafantina manokana ho anao',
      cta: 'Fandaharam-potoana feno',
      seeEpisodes: 'Jereo ireo fizarana',
    },
    radio: {
      subtitle: 'Ilay radio mavitrika !',
      imageAlt: 'Studio KOLO FM',
      title: 'Ny mozika sy ny feon’i Madagasikara, tsy misy fiatoana.',
      text: 'Henoy avy hatrany amin’ny tranonkala ny KOLO FM, amin’ny finday na amin’ny podcast. Fandaharana ara-kolontsaina, adihevitra, mozika malagasy sy iraisam-pirenena.',
      listenLive: 'Henoy mivantana',
    },
  },

  live: {
    title: 'KOLO mivantana',
    tvImageAlt: 'KOLO TV mivantana',
    fmShow: 'Mankasitraka — fandaharana maraina',
    fmHost: 'miaraka amin’i Nirina Rakoto · 6 – 9 ora maraina',
    now: 'Ankehitriny',
    next: 'Manaraka',
    tvNowTitle: 'Ny Vaovao — Fandefasana 8 ora alina',
    tvNowSlot: '20:00 – 20:30 · Vaovao amin’ny fahitalavitra',
    fmNowSlot: '06:00 – 09:00 · Resaka & mozika',
    tvNextSlot: '20:30 – 21:15 · Fandaharana ara-kolontsaina',
    fmNextSlot: '09:00 – 11:00 · Mozika voafantina',
    chat: {
      title: 'Resaka mivantana',
      you: 'Ianao',
      placeholder: 'Manorata hafatra…',
      inputLabel: 'Hafatra ho an’ny resaka',
      send: 'Alefaso ny hafatra',
    },
  },

  replay: {
    eyebrow: 'Tahirim-pandaharana',
    title: 'Horonantsary azo jerena indray',
    intro:
      'Ireo fandaharana rehetra an’ny KOLO TV, azonao jerena amin’izay fotoana tianao. Sivano araka ny sokajy na karohy ny fandaharana iray.',
    searchPlaceholder: 'Karohy horonantsary na fandaharana…',
    countOne: '{{count}} horonantsary',
    countOther: '{{count}} horonantsary',
    categoryLabel: 'Sokajy :',
    empty: 'Tsy misy horonantsary mifanaraka amin’ny fikarohanao.',
  },

  emission: {
    breadcrumbShows: 'Fandaharana',
    episodeOfDay: 'Fizaran’ny andro',
    flagship: 'Ny Vaovao · Fandaharana lohalaharana',
    title: 'Ny Vaovao — Fandefasana 8 ora alina, ny vaovaon’i Madagasikara',
    duration: '{{count}} minitra',
    views: '{{count}} fijerena',
    actions: {
      like: 'Tiako · {{count}}',
      share: 'Zarao',
      save: 'Tehirizo',
    },
    aboutTitle: 'Momba ity fandefasana ity',
    aboutText:
      'Arahi-maso ny vaovao eto Madagasikara sy manerana izao tontolo izao, entin’ireo mpanao gazetin’ny KOLO TV. Toekarena, politika, fiarahamonina, kolontsaina ary fanatanjahantena : vaovao feno amin’ny teny frantsay, misy ampahany amin’ny teny malagasy.',
    tags: {
      politics: 'Politika',
      antananarivo: 'Antananarivo',
      economy: 'Toekarena',
      barea: 'Barea',
      culture: 'Kolontsaina',
    },
    related: 'Mety ho tianao koa',
    recentEpisodes: 'Fizarana farany',
    episodesCount: '{{shown}} amin’ny {{total}}',
    nowPlaying: 'Mandeha izao',
    allEpisodes: 'Jereo ny fizarana rehetra',
  },

  notFound: {
    title: 'Tsy hita ny pejy',
    text: 'Tsy misy na efa nafindra toerana ny pejy tadiavinao.',
    back: 'Hiverina amin’ny fandraisana',
  },

  media: {
    titles: {
      journal20h: 'Ny Vaovao — Fandefasana 8 ora alina',
      journal12h: 'Ny Vaovao — Fandefasana 12 ora atoandro',
      journal12hToday: 'Ny Vaovao 12 ora — fandefasana androany',
      artisansSud: 'Kolo Kulture : ireo mpanao asa tanana any atsimo',
      bareaCan: 'Barea : fiomanana amin’ny CAN 2026',
      grandDebat: 'Antananarivo : ilay adihevitra lehibe',
      musiqueLive: 'Mozika malagasy mivantana',
      focusRizLocal: 'Fanadihadiana ara-toekarena : ny vary eto an-toerana',
      focusRizMalgache: 'Fanadihadiana : ny vary malagasy',
      zoomAnalamanga: 'Zoom Sport : Analamanga FC',
      kultureMadajazzcar: 'Kolo Kulture : fetiben’ny Madajazzcar',
      festivalMadajazzcar: 'Fetiben’ny Madajazzcar',
      journalSoir: 'Vaovao hariva amin’ny teny malagasy',
      portraitEntrepreneurs: 'Mombamomba : mpandraharaha avy any Toamasina',
      portraitEntrepreneursShort: 'Mombamomba : mpandraharaha any Toamasina',
      portraitToamasina: 'Mombamomba an’i Toamasina',
      concertMalgache: 'Sessions Live : fampisehoana malagasy',
    },
    shows: {
      nyVaovao: 'Vaovao isan’andro amin’ny teny malagasy sy frantsay',
      koloKulture: 'Fandaharana ara-kolontsaina malagasy',
      zoomSport: 'Ny vaovao ara-panatanjahantena rehetra eto amin’ny Nosy Lehibe',
      sessionsLive: 'Fampisehoana sy fihaonana amin’ireo mpanakanto',
    },
    episodes: {
      today20h: 'Fandefasana 8 ora alina — Androany',
      today12h: 'Fandefasana 12 ora atoandro — Androany',
      yesterdayEvening: 'Fandefasana hariva — Omaly',
      yesterday12h: 'Fandefasana 12 ora atoandro — Omaly',
      elections: 'Fandefasana manokana : fifidianana',
      malagasy: 'Vaovao amin’ny teny malagasy',
    },
    chat: {
      hery: 'Salama daholo ! Tena tsara ny vaovao anio hariva 🇲🇬',
      nirina: 'Tena voavolavola tsara ilay tatitra momba an’i Toamasina 👏',
      fara: 'Misaotra KOLO TV noho ny kalitao !',
      tahiana: 'Handefa ny lalao Barea ve ianareo rahampitso ?',
      rojo: 'Tsara be ny fandaharana e 💛',
    },
    search: {
      nyVaovaoEvening: 'Ny Vaovao hariva',
      tvNews: 'Vaovao amin’ny fahitalavitra',
      koloKulture: 'Kolo Kulture',
      bareaMatch: 'Lalao Barea',
      koloFmLive: 'KOLO FM mivantana',
    },
  },
}

export default mg
