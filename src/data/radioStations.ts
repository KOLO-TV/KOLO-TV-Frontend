// Configuration des stations KOLO FM — une entrée par province.
// Les routes /radio et /radio/:province sont générées à partir de ce seul fichier :
// ajouter ou retirer une station ici suffit, aucun composant n'est à modifier.
//
// Les noms de province sont des noms propres : ils ne passent pas par l'i18n.
// Les contenus encore inconnus (fréquences, flux, grilles, animateurs, contacts)
// sont volontairement vides — chaque bloc de page a un état d'attente dédié.

export type RadioSlot = {
  /** Créneau affiché tel quel, ex. « 06:00 – 09:00 ». */
  time: string
  title: string
  host?: string
}

export type RadioHost = {
  name: string
  /** Émission ou rôle de l'animateur, ex. « Matinale ». */
  role: string
}

export type RadioContact = {
  phone?: string
  email?: string
  address?: string
}

export type RadioStation = {
  slug: string
  name: string
  /** `null` tant que la fréquence locale n'est pas confirmée par le client. */
  frequency: string | null
  /** Flux local ; chaîne vide = pas encore fourni, le player passe en attente. */
  streamUrl: string
  schedule: RadioSlot[]
  hosts: RadioHost[]
  contact: RadioContact
}

export const radioStations: RadioStation[] = [
  {
    slug: 'antananarivo',
    name: 'Antananarivo',
    frequency: '99.5 MHz',
    streamUrl: '',
    schedule: [],
    hosts: [],
    contact: {},
  },
  {
    slug: 'antsiranana',
    name: 'Antsiranana',
    frequency: null,
    streamUrl: '',
    schedule: [],
    hosts: [],
    contact: {},
  },
  {
    slug: 'fianarantsoa',
    name: 'Fianarantsoa',
    frequency: null,
    streamUrl: '',
    schedule: [],
    hosts: [],
    contact: {},
  },
  {
    slug: 'mahajanga',
    name: 'Mahajanga',
    frequency: null,
    streamUrl: '',
    schedule: [],
    hosts: [],
    contact: {},
  },
  {
    slug: 'toamasina',
    name: 'Toamasina',
    frequency: null,
    streamUrl: '',
    schedule: [],
    hosts: [],
    contact: {},
  },
  {
    slug: 'toliara',
    name: 'Toliara',
    frequency: null,
    streamUrl: '',
    schedule: [],
    hosts: [],
    contact: {},
  },
]

/** Flux national, servi en repli tant que les flux provinciaux ne sont pas fournis. */
export const nationalStream = ''

export function getRadioStation(slug?: string): RadioStation | undefined {
  return radioStations.find((station) => station.slug === slug)
}
