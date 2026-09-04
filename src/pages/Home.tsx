import { Link } from 'react-router-dom'
import { ChevronRight, Play, Radio, TrendingUp, Clock } from 'lucide-react'
import SiteLayout from '../layouts/SiteLayout'
import Section from '../components/Section'
import MediaCard from '../components/MediaCard'
import { featured, journals, shows, images } from '../data/media'

export default function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-kolo-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8 lg:py-16">
          <div className="fade-up flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
              <span className="relative flex items-center gap-2 rounded-full bg-kolo-live px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                En direct
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/70">
                Ny Vaovao · Aujourd'hui · 20h00
              </span>
            </div>
            <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              La télé <span className="text-kolo-orange">autrement</span>…
              <br />
              <span className="text-white/95">Toujours pour vous.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/85 lg:text-lg">
              Suivez le Journal, les magazines et le sport de la Grande Île. Une chaîne
              malgache proche du public, culturelle et informative.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/live"
                className="inline-flex items-center gap-2 rounded-full bg-kolo-orange px-6 py-3.5 text-sm font-bold text-white shadow-glow-orange transition-all hover:scale-105 hover:bg-kolo-orange-hot"
              >
                <Play className="h-4 w-4 fill-current" />
                Regarder maintenant
              </Link>
              <Link
                to="/replay"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
              >
                Voir le Replay <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-white/70">
              <div>
                <div className="font-display text-2xl font-black text-white">150K+</div>
                <div>Téléspectateurs</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <div className="font-display text-2xl font-black text-white">24/7</div>
                <div>En direct</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <div className="font-display text-2xl font-black text-white">FR / MG</div>
                <div>Bilingue</div>
              </div>
            </div>
          </div>

          <div className="fade-up relative">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={images.heroStudio}
                alt="Journal en direct"
                className="h-full w-full object-cover"
                width={1600}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <button aria-label="Lire la vidéo" className="absolute inset-0 grid place-items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-kolo-orange text-white shadow-glow-orange transition-transform hover:scale-110">
                  <Play className="h-8 w-8 fill-current" />
                </span>
              </button>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-md bg-kolo-live px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                    Live
                  </span>
                  <span className="text-xs font-semibold text-white/80">KOLO TV</span>
                </div>
                <h3 className="font-display text-lg font-bold sm:text-xl">
                  NY VAOVAO — Aujourd'hui, l'actualité de Madagascar
                </h3>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 text-kolo-blue shadow-2xl backdrop-blur sm:flex">
              <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-kolo-orange text-white">
                <Radio className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-kolo-green ring-2 ring-white" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  On air
                </div>
                <div className="text-sm font-bold">KOLO FM — Mankasitraka</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="À la une"
        subtitle="Les temps forts sélectionnés par la rédaction"
        icon={<TrendingUp className="h-5 w-5" />}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <div key={item.title} style={{ animationDelay: `${i * 80}ms` }} className="fade-up">
              <MediaCard {...item} size="lg" />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Ny Vaovao & Journaux"
        subtitle="Les dernières éditions"
        cta={{ label: 'Tout voir', to: '/replay' }}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journals.slice(0, 8).map((item) => (
            <MediaCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-kolo-navy via-kolo-navy to-kolo-blue p-8 text-white sm:p-12">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-kolo-live px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                En direct maintenant
              </span>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-4xl">
                KOLO TV & KOLO FM
                <br />
                <span className="text-kolo-orange">tous les jours, sans coupure</span>
              </h2>
              <p className="mt-3 max-w-xl text-white/80">
                Regardez la chaîne en direct sur mobile ou desktop, écoutez la radio et
                rejoignez le chat de la communauté KOLO.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/live"
                className="inline-flex items-center gap-2 rounded-full bg-kolo-orange px-6 py-3.5 text-sm font-bold shadow-glow-orange transition-all hover:scale-105 hover:bg-kolo-orange-hot"
              >
                <Play className="h-4 w-4 fill-current" /> Regarder TV
              </Link>
              <Link
                to="/live"
                className="inline-flex items-center gap-2 rounded-full bg-kolo-green px-6 py-3.5 text-sm font-bold transition-all hover:scale-105"
              >
                <Radio className="h-4 w-4" /> Écouter FM
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section title="Populaire cette semaine" subtitle="Ce que la communauté KOLO regarde le plus">
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 lg:-mx-8 lg:px-8">
          {journals.map((item, i) => (
            <div key={item.title} className="w-72 shrink-0 snap-start sm:w-80">
              <MediaCard {...item} />
              <div className="mt-2 flex items-center gap-2 px-1 text-xs text-slate-500">
                <span className="font-display text-lg font-black text-kolo-orange">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Clock className="h-3 w-3" /> {item.duration}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Nos émissions"
        subtitle="Une programmation pensée pour vous"
        cta={{ label: 'Toute la grille', to: '/replay' }}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shows.map((show) => (
            <Link
              key={show.title}
              to="/emissions/ny-vaovao"
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl shadow-card transition-shadow hover:shadow-card-hover"
            >
              <img
                src={show.image}
                alt={show.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${show.gradient} mix-blend-multiply opacity-60`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="relative p-5 text-white">
                <h3 className="font-display text-xl font-black">{show.title}</h3>
                <p className="mt-1 text-sm text-white/85">{show.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-kolo-orange">
                  Voir les épisodes <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="KOLO FM" subtitle="La radio culturelle malgache">
        <div className="grid gap-6 overflow-hidden rounded-3xl bg-white lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto">
            <img
              src={images.showRadio}
              alt="Studio KOLO FM"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
            <div className="flex items-center gap-2 text-kolo-orange">
              <Radio className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">On air · 24/7</span>
            </div>
            <h3 className="font-display text-3xl font-black leading-tight">
              La musique et les voix de Madagascar, non-stop.
            </h3>
            <p className="text-slate-600">
              Écoutez KOLO FM directement dans votre navigateur, sur mobile ou en podcast.
              Émissions culturelles, débats, musique malgache et internationale.
            </p>
            <div>
              <Link
                to="/live"
                className="inline-flex items-center gap-2 rounded-full bg-kolo-blue px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-kolo-blue-deep"
              >
                <Play className="h-4 w-4 fill-current" /> Écouter en direct
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <div className="h-8" />
    </SiteLayout>
  )
}
