import { Link } from 'react-router-dom'
import { Bookmark, ChevronRight, Clock, Pause, Play, Share2, ThumbsUp, Volume2 } from 'lucide-react'
import SiteLayout from '../layouts/SiteLayout'
import MediaCard from '../components/MediaCard'
import { episodesList, images, relatedEpisodes } from '../data/media'

const ACTIONS = [
  { icon: ThumbsUp, label: "J'aime · 2.4K" },
  { icon: Share2, label: 'Partager' },
  { icon: Bookmark, label: 'Enregistrer' },
]

const TAGS = ['Politique', 'Antananarivo', 'Économie', 'Barea', 'Culture']

export default function EmissionDetail() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-10">
        <nav className="mb-4 flex items-center gap-1.5 text-xs text-slate-500">
          <Link to="/" className="hover:text-kolo-blue">
            Accueil
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span>Émissions</span>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-slate-900">Ny Vaovao</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-card-hover">
              <img
                src={images.showVaovao}
                alt="Ny Vaovao"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button aria-label="Lecture" className="absolute inset-0 grid place-items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-kolo-orange text-white shadow-glow-orange transition-transform hover:scale-110">
                  <Play className="h-8 w-8 fill-current" />
                </span>
              </button>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="mb-2 flex h-1 items-center overflow-hidden rounded-full bg-white/25">
                  <div className="h-full w-1/3 bg-kolo-orange" />
                  <span className="ml-[-6px] h-3 w-3 rounded-full bg-kolo-orange ring-2 ring-white" />
                </div>
                <div className="flex items-center gap-3 text-white">
                  <button aria-label="Pause">
                    <Pause className="h-5 w-5" />
                  </button>
                  <Volume2 className="h-5 w-5" />
                  <span className="text-xs font-semibold">09:23 / 28:14</span>
                  <div className="ml-auto flex items-center gap-3">
                    <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-bold">HD</span>
                    <Volume2 className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="rounded-md bg-kolo-blue px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Journal
                </span>
                <span className="rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                  Épisode du jour
                </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-kolo-orange">
                Ny Vaovao · Émission phare
              </div>
              <h1 className="mt-2 font-display text-3xl font-black leading-tight sm:text-4xl">
                Ny Vaovao — Édition du 20h, le journal de Madagascar
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> 28 min
                </span>
                <span>·</span>
                <span>Aujourd'hui · 20h00</span>
                <span>·</span>
                <span>124 512 vues</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-kolo-orange hover:text-kolo-orange"
                  >
                    <action.icon className="h-4 w-4" /> {action.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-display text-lg font-bold">À propos de cette édition</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Retrouvez l'actualité de Madagascar et du monde présentée par les
                  journalistes de KOLO TV. Économie, politique, société, culture et sport : le
                  journal complet en français, avec des séquences en malagasy.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-kolo-blue/10 px-3 py-1 font-semibold text-kolo-blue"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-6 font-display text-2xl font-black">Vous aimerez aussi</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {relatedEpisodes.map((item) => (
                  <MediaCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-display text-lg font-black">Épisodes récents</h2>
                <span className="text-xs text-slate-500">6 sur 240</span>
              </div>
              <ul className="thin-scroll max-h-[720px] space-y-2 overflow-y-auto pr-1">
                {episodesList.map((ep) => (
                  <li key={ep.title}>
                    <button
                      className={`group flex w-full items-start gap-3 rounded-xl p-2 text-left transition-colors ${
                        ep.current ? 'bg-kolo-blue/10' : 'hover:bg-slate-100'
                      }`}
                    >
                      <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                        <img src={ep.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                        {ep.current && (
                          <span className="absolute inset-0 grid place-items-center bg-black/50">
                            <span className="rounded-full bg-kolo-orange px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                              En lecture
                            </span>
                          </span>
                        )}
                        <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 py-0.5 text-[9px] font-semibold text-white">
                          {ep.duration}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div
                          className={`line-clamp-2 text-sm font-bold leading-tight group-hover:text-kolo-blue ${
                            ep.current ? 'text-kolo-blue' : ''
                          }`}
                        >
                          {ep.title}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">{ep.date}</div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <button className="mt-3 w-full rounded-full border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm font-semibold hover:bg-kolo-blue/5">
                Voir tous les épisodes
              </button>
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  )
}
