// Moteur de traduction : résolution des clés, variables {{name}} et repli sur le français.
import fr, { type Dictionary } from './fr'
import mg from './mg'

export type Language = 'fr' | 'mg'

export const DEFAULT_LANGUAGE: Language = 'fr'

const dictionaries: Record<Language, Dictionary> = { fr, mg }

// Toutes les clés « feuilles » du dictionnaire en notation pointée : 'home.hero.title', …
type Leaves<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${Leaves<T[K]>}`
}[keyof T & string]

export type TranslationKey = Leaves<Dictionary>
export type TranslationParams = Record<string, string | number>

/** Texte traduisible porté par les données mock : une clé et ses variables éventuelles. */
export type Label = { key: TranslationKey; params?: TranslationParams }

const reported = new Set<string>()

function reportMissing(language: Language, key: string) {
  if (!import.meta.env.DEV || reported.has(`${language}:${key}`)) return
  reported.add(`${language}:${key}`)
  console.warn(`[i18n] Traduction manquante (${language}) : "${key}"`)
}

function lookup(dictionary: Dictionary, key: string): string | undefined {
  let node: unknown = dictionary
  for (const part of key.split('.')) {
    if (typeof node !== 'object' || node === null) return undefined
    node = (node as Record<string, unknown>)[part]
  }
  return typeof node === 'string' ? node : undefined
}

function interpolate(text: string, params?: TranslationParams): string {
  if (!params) return text
  return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, name: string) =>
    Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match
  )
}

export function translate(language: Language, key: TranslationKey, params?: TranslationParams): string {
  let text = lookup(dictionaries[language], key)
  if (text === undefined) {
    reportMissing(language, key)
    if (language !== DEFAULT_LANGUAGE) text = lookup(dictionaries[DEFAULT_LANGUAGE], key)
  }
  // Clé absente partout : visible en dev pour la repérer, jamais affichée en production.
  if (text === undefined) return import.meta.env.DEV ? key : ''
  return interpolate(text, params)
}
