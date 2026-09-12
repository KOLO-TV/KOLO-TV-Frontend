import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ChevronDown, Globe, Menu, Play, Search, User, X } from 'lucide-react'
import { searchSuggestions } from '../data/media'

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Actualités', to: '/emissions/ny-vaovao' },
  { label: 'Live', to: '/live' },
  { label: 'Replay', to: '/replay' },
  { label: 'Radio', to: '/live' },
]

const MORE_LINKS = [
  { label: 'Ny Vaovao', to: '/emissions/ny-vaovao', desc: 'Le journal quotidien' },
  { label: 'Le Journal', to: '/emissions/ny-vaovao', desc: 'Éditions 12h & 20h' },
  { label: 'Magazines', to: '/replay', desc: 'Culture & société' },
  { label: 'Divertissement', to: '/replay', desc: 'Musique & talk-shows' },
  { label: 'Sport', to: '/replay', desc: 'Barea & championnats' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [lang, setLang] = useState<'FR' | 'MG'>('FR')

  const filteredSuggestions = searchSuggestions.filter((s) =>
    query ? s.toLowerCase().includes(query.toLowerCase()) : true
  )

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-white/10 font-semibold text-white'
        : 'text-white/75 hover:bg-white/10 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 w-full bg-kolo-navy text-white">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center gap-6 px-4 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-lg font-black tracking-tight text-white">
              KOLO
            </span>
            <span className="rounded-md bg-white px-1.5 py-0.5 text-[10px] font-black text-kolo-blue">
              TV
            </span>
          </div>
          <span className="hidden text-xs font-medium italic text-white/60 lg:block">
            La télé autrement…
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              aria-expanded={moreOpen}
            >
              Plus <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {moreOpen && (
              <div className="fade-up absolute left-0 top-11 w-72 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 text-slate-900 shadow-card-hover">
                {MORE_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMoreOpen(false)}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-100"
                  >
                    <div className="text-sm font-semibold">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="relative ml-auto hidden lg:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
            placeholder="Rechercher…"
            aria-label="Rechercher"
            className="h-9 w-44 rounded-full border border-white/15 bg-white/10 pl-9 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/50 focus:w-60 focus:border-white/40"
          />
          {searchFocused && (
            <div className="fade-up absolute right-0 top-11 z-50 w-72 overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-card-hover">
              <div className="border-b border-slate-200 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Suggestions
              </div>
              <ul>
                {filteredSuggestions.map((s) => (
                  <li key={s}>
                    <button className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-slate-100">
                      <Search className="h-3.5 w-3.5 text-slate-500" />
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Link
          to="/live"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-kolo-orange px-4 py-2 text-sm font-bold text-white transition-all hover:bg-kolo-orange-hot lg:inline-flex"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Regarder en direct
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <button
            onClick={() => setLang((l) => (l === 'FR' ? 'MG' : 'FR'))}
            className="flex items-center gap-1 rounded-full px-2 py-1.5 text-xs font-bold text-white/75 hover:bg-white/10 hover:text-white"
            aria-label="Changer de langue"
          >
            <Globe className="h-4 w-4" />
            {lang}
          </button>
          <button
            className="rounded-full p-2 text-white/75 hover:bg-white/10 hover:text-white"
            aria-label="Mon compte"
          >
            <User className="h-4 w-4" />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Link
            to="/live"
            className="inline-flex items-center gap-1.5 rounded-full bg-kolo-orange px-3 py-1.5 text-xs font-bold text-white"
          >
            <Play className="h-3.5 w-3.5 fill-current" /> Live
          </Link>
          <button
            className="rounded-md p-2 text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fade-up border-t border-white/10 bg-kolo-navy lg:hidden">
          <div className="space-y-1 p-4">
            <div className="relative mb-3">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <input
                placeholder="Rechercher…"
                className="h-11 w-full rounded-full border border-white/15 bg-white/10 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/50"
              />
            </div>
            {[...NAV_LINKS, ...MORE_LINKS].map((item) => (
              <Link
                key={item.label + item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-3">
              <button
                onClick={() => setLang((l) => (l === 'FR' ? 'MG' : 'FR'))}
                className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white"
              >
                <Globe className="h-4 w-4" /> {lang}
              </button>
              <button
                className="rounded-full bg-white/10 p-2 text-white"
                aria-label="Mon compte"
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
