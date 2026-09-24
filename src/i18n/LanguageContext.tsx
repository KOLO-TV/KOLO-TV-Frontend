import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { DEFAULT_LANGUAGE, translate, type Language, type TranslationKey, type TranslationParams } from './translate'

const STORAGE_KEY = 'kolo.language'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: TranslationKey, params?: TranslationParams) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'mg') return stored
  } catch {
    // localStorage indisponible (navigation privée, stockage bloqué…) : langue par défaut.
  }
  return DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage)

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Préférence non persistée, mais le changement de langue reste effectif.
    }
  }, [])

  const toggleLanguage = useCallback(
    () => setLanguage(language === 'fr' ? 'mg' : 'fr'),
    [language, setLanguage]
  )

  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams) => translate(language, key, params),
    [language]
  )

  // Langue du document + titre et description (valeurs FR identiques à index.html).
  useEffect(() => {
    document.documentElement.lang = language
    document.title = translate(language, 'seo.title')
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', translate(language, 'seo.description'))
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, setLanguage, toggleLanguage, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage() doit être utilisé à l’intérieur de <LanguageProvider>')
  return context
}
