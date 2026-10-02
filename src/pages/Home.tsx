import { useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ChevronRight, Clock, Play, RadioTower, TrendingUp } from 'lucide-react'
import SiteLayout from '../layouts/SiteLayout'
import Section from '../components/Section'
import MediaCard from '../components/MediaCard'
import UniverseTabs from '../components/UniverseTabs'
import { featured, journals, shows, images } from '../data/media'
import { radioStations } from '../data/radioStations'
import { TAB_PARAM, universeFromParam, type Universe } from '../data/universes'
import { useLanguage } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab')
  const activeUniverse = universeFromParam(tabParam)
  const tabsRef = useRef<HTMLDivElement>(null)
  // Une bascule faite depuis le bloc lui-même ne doit pas faire défiler la page ;
  // une arrivée via /?tab=… (menu, CTA du hero) ramène le visiteur sur le bloc.
  const tabSetFromTabs = useRef<string | null>(null)

  const scrollToTabs = () => tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  useEffect(() => {
    if (!tabParam) return
    if (tabSetFromTabs.current === tabParam) {
      tabSetFromTabs.current = null
      return
    }
    scrollToTabs()
  }, [tabParam])

  const handleTabChange = (universe: Universe) => {
    tabSetFromTabs.current = TAB_PARAM[universe]
    setSearchParams({ tab: TAB_PARAM[universe] })
  }

  const goToUniverse = (universe: Universe) => {
    tabSetFromTabs.current = null
    if (tabParam === TAB_PARAM[universe]) {
      scrollToTabs()
      return
    }
    setSearchParams({ tab: TAB_PARAM[universe] })
  }

  return (
    <SiteLayout>
      {/* Hero « KOLO, le groupe » — l'entreprise avant ses deux antennes. */}
      <section className="relative overflow-hidden bg-kolo-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8 lg:py-16">
          <div className="fade-up flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">
              {t('home.group.eyebrow')}
            </span>
            <h1 className="mt-3 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              KOLO
            </h1>
            <p className="mt-3 max-w-lg font-display text-xl font-bold leading-snug text-white/95 sm:text-2xl">
              {t('home.group.baseline')}
            </p>
            <p className="mt-4 max-w-lg text-base text-white/85">{t('home.group.intro')}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => goToUniverse('fm')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-kolo-orange px-6 py-3.5 text-sm font-bold text-kolo-navy shadow-glow-orange transition-all hover:scale-105 hover:bg-kolo-orange-hot"
              >
                <RadioTower className="h-4 w-4" />
                {t('home.group.listenFm')}
              </button>
              <button
                type="button"
                onClick={() => goToUniverse('tv')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-kolo-blue px-6 py-3.5 text-sm font-bold text-white ring-1 ring-white/25 transition-all hover:scale-105 hover:bg-kolo-blue/80"
              >
                <Play className="h-4 w-4 fill-current" />
                {t('home.group.watchTv')}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/70">
              <div>
                <div className="font-sans text-2xl font-black text-white">150K+</div>
                <div>{t('home.group.stats.audience')}</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <div className="font-sans text-2xl font-black text-white">{radioStations.length}</div>
                <div>{t('home.group.stats.provinces')}</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <div className="font-sans text-2xl font-black text-white">24/7</div>
                <div>{t('home.group.stats.broadcast')}</div>
              </div>
            </div>
          </div>

          <div className="fade-up grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <button
              type="button"
              onClick={() => goToUniverse('tv')}
              className="group relative overflow-hidden rounded-2xl border border-white/10 text-left shadow-2xl"
            >
              <img
                src={images.heroStudio}
                alt={t('home.group.tvImageAlt')}
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={1600}
                height={900}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                <span className="rounded-md bg-kolo-blue px-2 py-1 text-[11px] font-black uppercase tracking-widest text-white">
                  KOLO TV
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-white/85">
                  {t('home.group.watchTv')} <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => goToUniverse('fm')}
              className="group relative overflow-hidden rounded-2xl border border-white/10 text-left shadow-2xl"
            >
              <img
                src={images.showRadio}
                alt={t('home.group.fmImageAlt')}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                <span className="rounded-md bg-kolo-orange px-2 py-1 text-[11px] font-black uppercase tracking-widest text-kolo-navy">
                  KOLO FM
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-white/85">
                  {t('home.group.listenFm')} <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Bloc à onglets Radio | Télé — deep-linkable via /?tab=radio et /?tab=tv. */}
      <div ref={tabsRef} className="scroll-mt-[86px] py-8 lg:py-12">
        <UniverseTabs active={activeUniverse} onChange={handleTabChange} />
      </div>

      <Section
        title={t('home.featured.title')}
        subtitle={t('home.featured.subtitle')}
        icon={<TrendingUp className="h-5 w-5" />}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <div key={item.titleKey} style={{ animationDelay: `${i * 80}ms` }} className="fade-up">
              <MediaCard {...item} size="lg" />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title={t('home.journals.title')}
        subtitle={t('home.journals.subtitle')}
        cta={{ label: t('home.journals.cta'), to: '/replay' }}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journals.slice(0, 8).map((item) => (
            <MediaCard key={item.titleKey} {...item} />
          ))}
        </div>
      </Section>

      <Section title={t('home.popular.title')} subtitle={t('home.popular.subtitle')}>
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 lg:-mx-8 lg:px-8">
          {journals.map((item, i) => (
            <div key={item.titleKey} className="w-72 shrink-0 snap-start sm:w-80">
              <MediaCard {...item} />
              <div className="mt-2 flex items-center gap-2 px-1 text-xs text-slate-500">
                <span className="font-display text-lg font-black text-kolo-blue">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Clock className="h-3 w-3" /> {item.duration}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title={t('home.shows.title')}
        subtitle={t('home.shows.subtitle')}
        cta={{ label: t('home.shows.cta'), to: '/replay' }}
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
                <p className="mt-1 text-sm text-white/85">{t(show.descKey)}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white">
                  {t('home.shows.seeEpisodes')} <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <div className="h-8" />
    </SiteLayout>
  )
}
