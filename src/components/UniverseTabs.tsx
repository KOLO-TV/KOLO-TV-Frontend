import { Link } from 'react-router-dom'
import { ChevronRight, Play, RadioTower, Tv } from 'lucide-react'
import ProvinceGrid from './ProvinceGrid'
import RadioPlayer from './RadioPlayer'
import { images } from '../data/media'
import { nationalStream } from '../data/radioStations'
import { universes, type Universe } from '../data/universes'
import { useLanguage } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translate'

type Props = {
  active: Universe
  onChange: (universe: Universe) => void
}

const TV_SHORTCUTS: { labelKey: TranslationKey; descKey: TranslationKey; to: string }[] = [
  { labelKey: 'programs.nyVaovao', descKey: 'tv.nyVaovaoDesc', to: '/emissions/ny-vaovao' },
  { labelKey: 'nav.replay', descKey: 'tv.replayDesc', to: '/replay' },
  { labelKey: 'home.shows.title', descKey: 'tv.showsDesc', to: '/replay' },
]

/** Bloc à onglets « Radio | Télé » de la home : un seul univers visible à la fois. */
export default function UniverseTabs({ active, onChange }: Props) {
  const { t } = useLanguage()

  const tabClass = (universe: Universe) =>
    `flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-4 text-center font-display text-base font-black transition-colors sm:text-lg ${
      active === universe
        ? universes[universe].active
        : `bg-slate-100 text-slate-500 ${universes[universe].hover}`
    }`

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      <div role="tablist" aria-label={t('universe.label')} className="flex flex-col gap-2 sm:flex-row">
        <button
          role="tab"
          id="tab-radio"
          type="button"
          aria-selected={active === 'fm'}
          aria-controls="panel-radio"
          onClick={() => onChange('fm')}
          className={tabClass('fm')}
        >
          <RadioTower className="h-5 w-5 shrink-0" />
          {t('universe.radioTab')}
        </button>
        <button
          role="tab"
          id="tab-tv"
          type="button"
          aria-selected={active === 'tv'}
          aria-controls="panel-tv"
          onClick={() => onChange('tv')}
          className={tabClass('tv')}
        >
          <Tv className="h-5 w-5 shrink-0" />
          {t('universe.tvTab')}
        </button>
      </div>

      {active === 'fm' ? (
        <section
          role="tabpanel"
          id="panel-radio"
          aria-labelledby="tab-radio"
          className="fade-up mt-3 rounded-3xl border-2 border-kolo-orange bg-white p-5 sm:p-8"
        >
          <div className="flex items-center gap-2 text-kolo-navy">
            <RadioTower className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">
              {t('radio.eyebrow')} · {t('radio.tagline')}
            </span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-kolo-navy sm:text-4xl">
            KOLO FM
          </h2>
          <p className="mt-2 text-slate-600">{t('radio.chooseProvince')}</p>

          <div className="mt-6">
            <ProvinceGrid />
          </div>

          <div className="mt-6">
            <RadioPlayer
              title={t('radio.national.title')}
              subtitle={t('radio.national.text')}
              streamUrl={nationalStream}
            />
          </div>
        </section>
      ) : (
        <section
          role="tabpanel"
          id="panel-tv"
          aria-labelledby="tab-tv"
          className="fade-up mt-3 rounded-3xl border-2 border-kolo-blue bg-white p-5 sm:p-8"
        >
          <div className="flex items-center gap-2 text-kolo-blue">
            <Tv className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">
              {t('tv.eyebrow')} · {t('brand.tagline')}
            </span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-kolo-navy sm:text-4xl">
            KOLO TV
          </h2>
          <p className="mt-2 text-slate-600">{t('tv.intro')}</p>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Link to="/live" className="group relative block overflow-hidden rounded-2xl shadow-card">
              <img
                src={images.heroStudio}
                alt={t('live.tvImageAlt')}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-kolo-live px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                {t('common.liveBadge')}
              </span>
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-kolo-blue text-white transition-transform group-hover:scale-110">
                  <Play className="h-7 w-7 fill-current" />
                </span>
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 text-white">
                <span className="font-display text-base font-black leading-tight sm:text-lg">
                  {t('live.tvNowTitle')}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-kolo-blue px-4 py-2 text-xs font-bold">
                  {t('header.watchLive')} <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </Link>

            <div className="flex flex-col gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-kolo-blue/30 bg-kolo-blue/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-kolo-blue">
                    {t('live.now')}
                  </div>
                  <div className="mt-1 font-display text-lg font-black leading-tight">
                    {t('live.tvNowTitle')}
                  </div>
                  <div className="text-xs text-slate-600">{t('live.tvNowSlot')}</div>
                </div>
                <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100/60 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    {t('live.next')}
                  </div>
                  <div className="mt-1 font-display text-lg font-black leading-tight">Kolo Kulture</div>
                  <div className="text-xs text-slate-600">{t('live.tvNextSlot')}</div>
                </div>
              </div>

              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                {t('tv.quickAccess')}
              </div>
              <div className="grid gap-2">
                {TV_SHORTCUTS.map((shortcut) => (
                  <Link
                    key={shortcut.labelKey}
                    to={shortcut.to}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-colors hover:border-kolo-blue hover:bg-kolo-blue/5"
                  >
                    <Tv className="h-4 w-4 shrink-0 text-kolo-blue" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold">{t(shortcut.labelKey)}</span>
                      <span className="block truncate text-xs text-slate-500">{t(shortcut.descKey)}</span>
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-kolo-blue transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
