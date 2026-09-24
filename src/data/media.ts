// Données mock locales — aucune API, aucun backend.
// Les textes affichés sont des clés de traduction (voir src/i18n/fr.ts et mg.ts).
import heroStudio from '../assets/images/hero-studio.svg'
import showVaovao from '../assets/images/show-vaovao.svg'
import showCulture from '../assets/images/show-culture.svg'
import showSport from '../assets/images/show-sport.svg'
import showMusic from '../assets/images/show-music.svg'
import showRadio from '../assets/images/show-radio.svg'
import newsTana from '../assets/images/news-tana.svg'
import type { Label, TranslationKey } from '../i18n/translate'

export const images = {
  heroStudio,
  showVaovao,
  showCulture,
  showSport,
  showMusic,
  showRadio,
  newsTana,
}

// Valeurs internes du filtre Replay ; libellés affichés via t(`category.${…}`).
export const categories = [`Tout`, `Journal`, `Culture`, `Sport`, `Musique`, `Débat`, `Reportage`, `Économie`] as const

export type CategoryFilter = (typeof categories)[number]
export type Category = Exclude<CategoryFilter, 'Tout'>

const TODAY: Label = { key: 'time.today' }
const TODAY_EVENING: Label = { key: 'time.todayEvening' }
const TODAY_NOON: Label = { key: 'time.todayNoon' }
const YESTERDAY: Label = { key: 'time.yesterday' }
const YESTERDAY_EVENING: Label = { key: 'time.yesterdayEvening' }
const YESTERDAY_NOON: Label = { key: 'time.yesterdayNoon' }
const LAST_WEEK: Label = { key: 'time.lastWeek' }
const hoursAgo = (count: number): Label => ({ key: 'time.hoursAgo', params: { count } })
const daysAgo = (count: number): Label => ({ key: 'time.daysAgo', params: { count } })

export type MediaItem = {
  titleKey: TranslationKey
  category: Category
  duration: string
  image: string
  time: Label
  live?: boolean
}

export const featured: MediaItem[] = [
  { titleKey: 'media.titles.journal20h', category: `Journal`, duration: `28:14`, image: showVaovao, time: TODAY_EVENING },
  { titleKey: 'media.titles.artisansSud', category: `Culture`, duration: `42:00`, image: showCulture, time: YESTERDAY },
  { titleKey: 'media.titles.bareaCan', category: `Sport`, duration: `18:32`, image: showSport, time: hoursAgo(3) },
]

export const journals: MediaItem[] = [
  { titleKey: 'media.titles.journal12hToday', category: `Journal`, duration: `22:10`, image: showVaovao, time: hoursAgo(6) },
  { titleKey: 'media.titles.grandDebat', category: `Débat`, duration: `1:02:45`, image: newsTana, time: YESTERDAY },
  { titleKey: 'media.titles.musiqueLive', category: `Musique`, duration: `34:12`, image: showMusic, time: daysAgo(2) },
  { titleKey: 'media.titles.focusRizLocal', category: `Économie`, duration: `15:44`, image: newsTana, time: daysAgo(2) },
  { titleKey: 'media.titles.zoomAnalamanga', category: `Sport`, duration: `24:00`, image: showSport, time: daysAgo(3) },
  { titleKey: 'media.titles.kultureMadajazzcar', category: `Culture`, duration: `38:22`, image: showCulture, time: daysAgo(4) },
  { titleKey: 'media.titles.journalSoir', category: `Journal`, duration: `26:41`, image: showVaovao, time: daysAgo(5) },
  { titleKey: 'media.titles.portraitEntrepreneurs', category: `Reportage`, duration: `19:03`, image: newsTana, time: daysAgo(6) },
]

export const replayLibrary: MediaItem[] = [
  { titleKey: 'media.titles.journal20h', category: `Journal`, duration: `28:14`, image: showVaovao, time: TODAY },
  { titleKey: 'media.titles.artisansSud', category: `Culture`, duration: `42:00`, image: showCulture, time: YESTERDAY },
  { titleKey: 'media.titles.bareaCan', category: `Sport`, duration: `18:32`, image: showSport, time: hoursAgo(3) },
  { titleKey: 'media.titles.musiqueLive', category: `Musique`, duration: `34:12`, image: showMusic, time: daysAgo(2) },
  { titleKey: 'media.titles.grandDebat', category: `Débat`, duration: `1:02:45`, image: newsTana, time: YESTERDAY },
  { titleKey: 'media.titles.focusRizLocal', category: `Économie`, duration: `15:44`, image: newsTana, time: daysAgo(2) },
  { titleKey: 'media.titles.zoomAnalamanga', category: `Sport`, duration: `24:00`, image: showSport, time: daysAgo(3) },
  { titleKey: 'media.titles.festivalMadajazzcar', category: `Culture`, duration: `38:22`, image: showCulture, time: daysAgo(4) },
  { titleKey: 'media.titles.journalSoir', category: `Journal`, duration: `26:41`, image: showVaovao, time: daysAgo(5) },
  { titleKey: 'media.titles.portraitEntrepreneursShort', category: `Reportage`, duration: `19:03`, image: newsTana, time: daysAgo(6) },
  { titleKey: 'media.titles.journal12h', category: `Journal`, duration: `22:10`, image: showVaovao, time: TODAY },
  { titleKey: 'media.titles.concertMalgache', category: `Musique`, duration: `48:22`, image: showMusic, time: LAST_WEEK },
]

export type Show = {
  title: string
  descKey: TranslationKey
  image: string
  gradient: string
}

export const shows: Show[] = [
  { title: `Ny Vaovao`, descKey: 'media.shows.nyVaovao', image: showVaovao, gradient: 'from-kolo-blue to-kolo-blue-deep' },
  { title: `Kolo Kulture`, descKey: 'media.shows.koloKulture', image: showCulture, gradient: 'from-kolo-orange to-kolo-orange-hot' },
  { title: `Zoom Sport`, descKey: 'media.shows.zoomSport', image: showSport, gradient: 'from-kolo-green to-kolo-purple' },
  { title: `Sessions Live`, descKey: 'media.shows.sessionsLive', image: showMusic, gradient: 'from-kolo-purple to-kolo-orange' },
]

export const episodesList: { titleKey: TranslationKey; duration: string; date: Label; image: string; current?: boolean }[] = [
  { titleKey: 'media.episodes.today20h', duration: `28:14`, date: TODAY_EVENING, image: showVaovao, current: true },
  { titleKey: 'media.episodes.today12h', duration: `22:10`, date: TODAY_NOON, image: showVaovao },
  { titleKey: 'media.episodes.yesterdayEvening', duration: `26:41`, date: YESTERDAY_EVENING, image: newsTana },
  { titleKey: 'media.episodes.yesterday12h', duration: `21:33`, date: YESTERDAY_NOON, image: showVaovao },
  { titleKey: 'media.episodes.elections', duration: `45:12`, date: daysAgo(2), image: newsTana },
  { titleKey: 'media.episodes.malagasy', duration: `24:00`, date: daysAgo(3), image: showVaovao },
]

export const relatedEpisodes: MediaItem[] = [
  { titleKey: 'media.titles.artisansSud', category: `Culture`, duration: `42:00`, image: showCulture, time: YESTERDAY },
  { titleKey: 'media.titles.bareaCan', category: `Sport`, duration: `18:32`, image: showSport, time: hoursAgo(3) },
  { titleKey: 'media.titles.focusRizMalgache', category: `Économie`, duration: `15:44`, image: newsTana, time: daysAgo(2) },
  { titleKey: 'media.titles.portraitToamasina', category: `Reportage`, duration: `19:03`, image: newsTana, time: daysAgo(6) },
]

export type ChatMessage = { user: string; color: string; msgKey: TranslationKey; time: string }

export const initialChatMessages: ChatMessage[] = [
  { user: `Hery R.`, color: `#3E509E`, msgKey: 'media.chat.hery', time: `20:12` },
  { user: `Nirina`, color: `#7D3B8F`, msgKey: 'media.chat.nirina', time: `20:14` },
  { user: `Fara M.`, color: `#1D71B8`, msgKey: 'media.chat.fara', time: `20:15` },
  { user: `Tahiana`, color: `#3E509E`, msgKey: 'media.chat.tahiana', time: `20:17` },
  { user: `Rojo`, color: `#7D3B8F`, msgKey: 'media.chat.rojo', time: `20:19` },
]

export const searchSuggestions: TranslationKey[] = [
  'media.search.nyVaovaoEvening',
  'media.search.tvNews',
  'media.search.koloKulture',
  'media.search.bareaMatch',
  'media.search.koloFmLive',
]
