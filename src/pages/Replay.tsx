import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import SiteLayout from '../layouts/SiteLayout'
import MediaCard from '../components/MediaCard'
import { categories, replayLibrary } from '../data/media'

export default function Replay() {
  const [activeCategory, setActiveCategory] = useState('Tout')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      replayLibrary.filter(
        (item) =>
          (activeCategory === 'Tout' || item.category === activeCategory) &&
          item.title.toLowerCase().includes(query.toLowerCase())
      ),
    [activeCategory, query]
  )

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-kolo-blue text-white">
        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-kolo-orange">
            Vidéothèque
          </span>
          <h1 className="mt-2 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Replay & Vidéos
          </h1>
          <p className="mt-3 max-w-2xl text-white/85">
            Toutes les émissions de KOLO TV disponibles à la demande. Filtrez par catégorie
            ou recherchez une émission.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="mb-8 flex flex-col gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une vidéo, une émission…"
              className="h-14 w-full rounded-full border border-slate-200 bg-slate-100 pl-12 pr-4 text-base outline-none transition-colors focus:border-kolo-blue focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <SlidersHorizontal className="h-4 w-4 shrink-0 text-slate-500" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-kolo-blue text-white shadow-[0_6px_20px_-6px_rgba(62,80,158,0.6)]'
                    : 'border border-slate-200 bg-slate-100 text-slate-600 hover:border-kolo-blue hover:text-kolo-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-sm text-slate-500">
            {filtered.length} vidéo{filtered.length > 1 ? 's' : ''} · Catégorie :{' '}
            <span className="font-semibold text-slate-900">{activeCategory}</span>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item, i) => (
              <div key={item.title + i} className="fade-up" style={{ animationDelay: `${i * 40}ms` }}>
                <MediaCard {...item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
            <p className="text-slate-500">Aucune vidéo ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </SiteLayout>
  )
}
