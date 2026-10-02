// Distinction visuelle Radio / Télé : une seule source pour les couleurs d'univers,
// utilisée par le header, les onglets de la home et les pages /radio.
// Les valeurs sont des tokens de la charte (voir tailwind.config.js) — rien de nouveau.
//
// Note contraste : #FFC32C est un jaune, illisible sous du texte blanc ; l'univers FM
// l'utilise donc en aplat avec du texte kolo-navy, et kolo-navy comme couleur de texte.

export type Universe = 'tv' | 'fm'

type UniverseTheme = {
  /** Page d'accueil de l'univers, cible de l'entrée de menu. */
  hub: string
  /** Entrée de menu / onglet à l'état actif. */
  active: string
  /** Entrée de menu / onglet inactif, au survol. */
  hover: string
  /** Survol d'une entrée du sous-menu, sur fond clair. */
  menuHover: string
  /** Couleur de texte d'accent, sur fond clair. */
  text: string
  /** Aplat de couleur, avec sa couleur de texte lisible. */
  fill: string
  /** Fond teinté léger, pour les cartes et bandeaux. */
  soft: string
  /** Bordure d'accent. */
  border: string
}

export const universes: Record<Universe, UniverseTheme> = {
  tv: {
    hub: '/?tab=tv',
    active: 'bg-kolo-blue text-white ring-1 ring-white/25',
    hover: 'hover:bg-kolo-blue/60 hover:text-white',
    menuHover: 'hover:bg-kolo-blue/10',
    text: 'text-kolo-blue',
    fill: 'bg-kolo-blue text-white',
    soft: 'bg-kolo-blue/10',
    border: 'border-kolo-blue',
  },
  fm: {
    hub: '/radio',
    active: 'bg-kolo-orange text-kolo-navy',
    hover: 'hover:bg-kolo-orange/80 hover:text-kolo-navy',
    menuHover: 'hover:bg-kolo-orange/20',
    text: 'text-kolo-navy',
    fill: 'bg-kolo-orange text-kolo-navy',
    soft: 'bg-kolo-orange/15',
    border: 'border-kolo-orange',
  },
}

/** Valeur de `?tab=` dans l'URL de la home pour chaque univers. */
export const TAB_PARAM: Record<Universe, string> = { tv: 'tv', fm: 'radio' }

export const DEFAULT_UNIVERSE: Universe = 'tv'

export function universeFromParam(value: string | null): Universe {
  return value === TAB_PARAM.fm ? 'fm' : DEFAULT_UNIVERSE
}
