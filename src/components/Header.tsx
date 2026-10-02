import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ChevronDown, Globe, Menu, Play, RadioTower, Search, Tv, User, X } from 'lucide-react'
import { searchSuggestions } from '../data/media'
import { radioStations } from '../data/radioStations'
import { universes, type Universe } from '../data/universes'
import { useLanguage } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translate'

type NavItem = { labelKey: TranslationKey; to: string; descKey?: TranslationKey }
/** Entrée de sous-menu déjà traduite : les noms de province viennent des données. */
type MenuEntry = { key: string; label: string; to: string; desc?: string }

const TV_LINKS: NavItem[] = [
  { labelKey: 'nav.live', to: '/live' },
  { labelKey: 'nav.replay', to: '/replay' },
  { labelKey: 'emission.breadcrumbShows', to: '/emissions/ny-vaovao' },
]

const MORE_LINKS: NavItem[] = [
  { labelKey: 'programs.nyVaovao', to: '/emissions/ny-vaovao', descKey: 'header.moreDesc.nyVaovao' },
  { labelKey: 'programs.journal', to: '/emissions/ny-vaovao', descKey: 'header.moreDesc.journal' },
  { labelKey: 'programs.magazines', to: '/replay', descKey: 'header.moreDesc.magazines' },
  { labelKey: 'programs.entertainment', to: '/replay', descKey: 'header.moreDesc.entertainment' },
  { labelKey: 'programs.sport', to: '/replay', descKey: 'header.moreDesc.sport' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<Universe | null>(null)
  const [query, setQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const [openMenu, setOpenMenu] = useState<Universe | 'more' | null>(null)
  const { t, language, toggleLanguage } = useLanguage()
  const { pathname, search } = useLocation()
  const lang = language.toUpperCase()

  const activeTab = pathname === '/' ? new URLSearchParams(search).get('tab') : null
  // L'univers TV couvre le direct, le replay et les pages émission ; l'univers FM, /radio*.
  const isTvActive =
    pathname === '/live' ||
    pathname === '/replay' ||
    pathname.startsWith('/emissions') ||
    activeTab === 'tv'
  const isFmActive = pathname.startsWith('/radio') || activeTab === 'radio'

  const tvEntries: MenuEntry[] = TV_LINKS.map((link) => ({
    key: link.labelKey,
    label: t(link.labelKey),
    to: link.to,
  }))

  const fmEntries: MenuEntry[] = [
    ...radioStations.map((station) => ({
      key: station.slug,
      label: station.name,
      to: `/radio/${station.slug}`,
      desc: station.frequency ?? t('radio.frequencyTbc'),
    })),
    { key: 'all', label: t('radio.allProvinces'), to: '/radio' },
  ]

  // Filtre sur le texte affiché, pour que la recherche fonctionne dans la langue active.
  const filteredSuggestions = searchSuggestions
    .map((key) => ({ key, label: t(key) }))
    .filter((s) => (query ? s.label.toLowerCase().includes(query.toLowerCase()) : true))

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-white/10 font-semibold text-white'
        : 'text-white/75 hover:bg-white/10 hover:text-white'
    }`

  const universeNavClass = (universe: Universe, isActive: boolean) =>
    `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
      isActive ? universes[universe].active : `text-white/75 ${universes[universe].hover}`
    }`

  const renderUniverseMenu = (universe: Universe, label: string, entries: MenuEntry[], isActive: boolean) => (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(universe)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <Link
        to={universes[universe].hub}
        onClick={() => setOpenMenu(null)}
        aria-expanded={openMenu === universe}
        className={universeNavClass(universe, isActive)}
      >
        {universe === 'tv' ? <Tv className="h-4 w-4" /> : <RadioTower className="h-4 w-4" />}
        {label}
        <ChevronDown className="h-3.5 w-3.5" />
      </Link>
      {openMenu === universe && (
        <div className="fade-up absolute left-0 top-11 z-50 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 text-slate-900 shadow-card-hover">
          {entries.map((entry) => (
            <Link
              key={entry.key}
              to={entry.to}
              onClick={() => setOpenMenu(null)}
              className={`block rounded-lg px-3 py-2.5 transition-colors ${universes[universe].menuHover}`}
            >
              <div className="text-sm font-semibold">{entry.label}</div>
              {entry.desc && <div className="text-xs text-slate-500">{entry.desc}</div>}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileSection(null)
  }

  const renderMobileSection = (universe: Universe, label: string, entries: MenuEntry[], isActive: boolean) => (
    <div>
      <button
        type="button"
        onClick={() => setMobileSection((current) => (current === universe ? null : universe))}
        aria-expanded={mobileSection === universe}
        className={`flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${
          isActive ? universes[universe].active : `text-white/85 ${universes[universe].hover}`
        }`}
      >
        {universe === 'tv' ? <Tv className="h-4 w-4" /> : <RadioTower className="h-4 w-4" />}
        {label}
        <ChevronDown
          className={`ml-auto h-4 w-4 transition-transform ${mobileSection === universe ? 'rotate-180' : ''}`}
        />
      </button>
      {mobileSection === universe && (
        <div className="mt-1 space-y-1 border-l-2 border-white/15 pl-3">
          <Link
            to={universes[universe].hub}
            onClick={closeMobile}
            className="block rounded-md px-3 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
          >
            {label}
          </Link>
          {entries.map((entry) => (
            <Link
              key={entry.key}
              to={entry.to}
              onClick={closeMobile}
              className="block rounded-md px-3 py-2 text-sm text-white/75 hover:bg-white/10"
            >
              {entry.label}
              {entry.desc && <span className="ml-2 text-xs text-white/50">{entry.desc}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <header className="sticky top-0 z-50 w-full bg-kolo-navy text-white">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center gap-4 px-4 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span className="font-display text-lg font-black tracking-tight text-white">KOLO</span>
          <span className="hidden text-xs font-medium italic text-white/60 xl:block">
            {t('brand.tagline')}
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-1 lg:flex">
          <NavLink to="/" end className={navLinkClass}>
            {t('nav.home')}
          </NavLink>
          {renderUniverseMenu('tv', 'KOLO TV', tvEntries, isTvActive)}
          {renderUniverseMenu('fm', 'KOLO FM', fmEntries, isFmActive)}
          <NavLink to="/emissions/ny-vaovao" className={navLinkClass}>
            {t('nav.news')}
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('more')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              onClick={() => setOpenMenu((current) => (current === 'more' ? null : 'more'))}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              aria-expanded={openMenu === 'more'}
            >
              {t('nav.more')} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {openMenu === 'more' && (
              <div className="fade-up absolute left-0 top-11 z-50 w-72 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 text-slate-900 shadow-card-hover">
                {MORE_LINKS.map((item) => (
                  <Link
                    key={item.labelKey}
                    to={item.to}
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-100"
                  >
                    <div className="text-sm font-semibold">{t(item.labelKey)}</div>
                    {item.descKey && <div className="text-xs text-slate-500">{t(item.descKey)}</div>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="relative ml-auto hidden xl:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
            placeholder={t('header.searchPlaceholder')}
            aria-label={t('header.search')}
            className="h-9 w-40 rounded-full border border-white/15 bg-white/10 pl-9 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/50 focus:w-56 focus:border-white/40"
          />
          {searchFocused && (
            <div className="fade-up absolute right-0 top-11 z-50 w-72 overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-card-hover">
              <div className="border-b border-slate-200 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t('header.suggestions')}
              </div>
              <ul>
                {filteredSuggestions.map((s) => (
                  <li key={s.key}>
                    <button className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-slate-100">
                      <Search className="h-3.5 w-3.5 text-slate-500" />
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Link
          to="/live"
          className="ml-auto hidden shrink-0 items-center gap-2 rounded-full bg-kolo-blue px-4 py-2 text-sm font-bold text-white ring-1 ring-white/25 transition-colors hover:bg-kolo-blue/80 lg:inline-flex xl:ml-0"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          {t('header.watchLive')}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 rounded-full px-2 py-1.5 text-xs font-bold text-white/75 hover:bg-white/10 hover:text-white"
            aria-label={t('header.changeLanguage')}
          >
            <Globe className="h-4 w-4" />
            {lang}
          </button>
          <button
            className="rounded-full p-2 text-white/75 hover:bg-white/10 hover:text-white"
            aria-label={t('header.account')}
          >
            <User className="h-4 w-4" />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Link
            to="/live"
            className="inline-flex items-center gap-1.5 rounded-full bg-kolo-blue px-3 py-1.5 text-xs font-bold text-white"
          >
            <Play className="h-3.5 w-3.5 fill-current" /> {t('nav.live')}
          </Link>
          <button
            className="rounded-md p-2 text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t('header.menu')}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fade-up max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/10 bg-kolo-navy lg:hidden">
          <div className="space-y-1 p-4">
            <div className="relative mb-3">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <input
                placeholder={t('header.searchPlaceholder')}
                aria-label={t('header.search')}
                className="h-11 w-full rounded-full border border-white/15 bg-white/10 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/50"
              />
            </div>

            <Link
              to="/"
              onClick={closeMobile}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10"
            >
              {t('nav.home')}
            </Link>
            {renderMobileSection('tv', 'KOLO TV', tvEntries, isTvActive)}
            {renderMobileSection('fm', 'KOLO FM', fmEntries, isFmActive)}
            <Link
              to="/emissions/ny-vaovao"
              onClick={closeMobile}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10"
            >
              {t('nav.news')}
            </Link>
            {MORE_LINKS.map((item) => (
              <Link
                key={item.labelKey + item.to}
                to={item.to}
                onClick={closeMobile}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                {t(item.labelKey)}
              </Link>
            ))}

            <div className="flex items-center gap-2 pt-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white"
              >
                <Globe className="h-4 w-4" /> {lang}
              </button>
              <button
                className="rounded-full bg-white/10 p-2 text-white"
                aria-label={t('header.account')}
              >
                <User className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
