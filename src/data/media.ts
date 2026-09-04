// Données mock locales — aucune API, aucun backend.
import heroStudio from '../assets/images/hero-studio.svg'
import showVaovao from '../assets/images/show-vaovao.svg'
import showCulture from '../assets/images/show-culture.svg'
import showSport from '../assets/images/show-sport.svg'
import showMusic from '../assets/images/show-music.svg'
import showRadio from '../assets/images/show-radio.svg'
import newsTana from '../assets/images/news-tana.svg'

export const images = {
  heroStudio,
  showVaovao,
  showCulture,
  showSport,
  showMusic,
  showRadio,
  newsTana,
}

export type MediaItem = {
  title: string
  category: string
  duration: string
  image: string
  time: string
  live?: boolean
}

export const featured: MediaItem[] = [
  { title: `Ny Vaovao — Journal du 20h`, category: `Journal`, duration: `28:14`, image: showVaovao, time: `Aujourd'hui · 20h00` },
  { title: `Kolo Kulture : les artisans du Sud`, category: `Culture`, duration: `42:00`, image: showCulture, time: `Hier` },
  { title: `Barea : préparation CAN 2026`, category: `Sport`, duration: `18:32`, image: showSport, time: `Il y a 3h` },
]

export const journals: MediaItem[] = [
  { title: `Ny Vaovao 12h — édition du jour`, category: `Journal`, duration: `22:10`, image: showVaovao, time: `Il y a 6h` },
  { title: `Antananarivo : le grand débat`, category: `Débat`, duration: `1:02:45`, image: newsTana, time: `Hier` },
  { title: `Musique Malagasy live session`, category: `Musique`, duration: `34:12`, image: showMusic, time: `Il y a 2 jours` },
  { title: `Focus économie : le riz local`, category: `Économie`, duration: `15:44`, image: newsTana, time: `Il y a 2 jours` },
  { title: `Zoom sport : Analamanga FC`, category: `Sport`, duration: `24:00`, image: showSport, time: `Il y a 3 jours` },
  { title: `Kolo Kulture : festival Madajazzcar`, category: `Culture`, duration: `38:22`, image: showCulture, time: `Il y a 4 jours` },
  { title: `Journal du soir en malagasy`, category: `Journal`, duration: `26:41`, image: showVaovao, time: `Il y a 5 jours` },
  { title: `Portrait : entrepreneurs de Toamasina`, category: `Reportage`, duration: `19:03`, image: newsTana, time: `Il y a 6 jours` },
]

export const replayLibrary: MediaItem[] = [
  { title: `Ny Vaovao — Journal du 20h`, category: `Journal`, duration: `28:14`, image: showVaovao, time: `Aujourd'hui` },
  { title: `Kolo Kulture : les artisans du Sud`, category: `Culture`, duration: `42:00`, image: showCulture, time: `Hier` },
  { title: `Barea : préparation CAN 2026`, category: `Sport`, duration: `18:32`, image: showSport, time: `Il y a 3h` },
  { title: `Musique Malagasy live session`, category: `Musique`, duration: `34:12`, image: showMusic, time: `Il y a 2 jours` },
  { title: `Antananarivo : le grand débat`, category: `Débat`, duration: `1:02:45`, image: newsTana, time: `Hier` },
  { title: `Focus économie : le riz local`, category: `Économie`, duration: `15:44`, image: newsTana, time: `Il y a 2 jours` },
  { title: `Zoom sport : Analamanga FC`, category: `Sport`, duration: `24:00`, image: showSport, time: `Il y a 3 jours` },
  { title: `Festival Madajazzcar`, category: `Culture`, duration: `38:22`, image: showCulture, time: `Il y a 4 jours` },
  { title: `Journal du soir en malagasy`, category: `Journal`, duration: `26:41`, image: showVaovao, time: `Il y a 5 jours` },
  { title: `Portrait : entrepreneurs Toamasina`, category: `Reportage`, duration: `19:03`, image: newsTana, time: `Il y a 6 jours` },
  { title: `Ny Vaovao — Journal du 12h`, category: `Journal`, duration: `22:10`, image: showVaovao, time: `Aujourd'hui` },
  { title: `Sessions Live : concert malgache`, category: `Musique`, duration: `48:22`, image: showMusic, time: `Semaine dernière` },
]

export const categories = [`Tout`, `Journal`, `Culture`, `Sport`, `Musique`, `Débat`, `Reportage`, `Économie`]

export type Show = {
  title: string
  desc: string
  image: string
  gradient: string
}

export const shows: Show[] = [
  { title: `Ny Vaovao`, desc: `Le journal quotidien en malagasy et en français`, image: showVaovao, gradient: 'from-kolo-blue to-kolo-blue-deep' },
  { title: `Kolo Kulture`, desc: `Le magazine culturel malgache`, image: showCulture, gradient: 'from-kolo-orange to-kolo-orange-hot' },
  { title: `Zoom Sport`, desc: `Toute l'actualité sportive de la Grande Île`, image: showSport, gradient: 'from-kolo-green to-emerald-700' },
  { title: `Sessions Live`, desc: `Concerts et rencontres avec les artistes`, image: showMusic, gradient: 'from-fuchsia-600 to-kolo-orange' },
]

export const episodesList = [
  { title: `Édition du 20h — Aujourd'hui`, duration: `28:14`, date: `Aujourd'hui · 20h00`, image: showVaovao, current: true },
  { title: `Édition du 12h — Aujourd'hui`, duration: `22:10`, date: `Aujourd'hui · 12h00`, image: showVaovao },
  { title: `Édition du soir — Hier`, duration: `26:41`, date: `Hier · 20h00`, image: newsTana },
  { title: `Édition du 12h — Hier`, duration: `21:33`, date: `Hier · 12h00`, image: showVaovao },
  { title: `Édition spéciale : élections`, duration: `45:12`, date: `Il y a 2 jours`, image: newsTana },
  { title: `Journal en malagasy`, duration: `24:00`, date: `Il y a 3 jours`, image: showVaovao },
]

export const relatedEpisodes: MediaItem[] = [
  { title: `Kolo Kulture : les artisans du Sud`, category: `Culture`, duration: `42:00`, image: showCulture, time: `Hier` },
  { title: `Barea : préparation CAN 2026`, category: `Sport`, duration: `18:32`, image: showSport, time: `Il y a 3h` },
  { title: `Focus : le riz malgache`, category: `Économie`, duration: `15:44`, image: newsTana, time: `Il y a 2 jours` },
  { title: `Portrait de Toamasina`, category: `Reportage`, duration: `19:03`, image: newsTana, time: `Il y a 6 jours` },
]

export const initialChatMessages = [
  { user: `Hery R.`, color: `#0022e3`, msg: `Salama daholo ! Excellent journal ce soir 🇲🇬`, time: `20:12` },
  { user: `Nirina`, color: `#f2762e`, msg: `Le reportage sur Toamasina était très bien fait 👏`, time: `20:14` },
  { user: `Fara M.`, color: `#3aa66b`, msg: `Misaotra KOLO TV pour la qualité !`, time: `20:15` },
  { user: `Tahiana`, color: `#0022e3`, msg: `Vous diffusez le match des Barea demain ?`, time: `20:17` },
  { user: `Rojo`, color: `#f2762e`, msg: `Tsara be ny fandaharana e 💛`, time: `20:19` },
]

export const searchSuggestions = [
  `Ny Vaovao du soir`,
  `Journal télévisé`,
  `Kolo Kulture`,
  `Match Barea`,
  `KOLO FM direct`,
]
