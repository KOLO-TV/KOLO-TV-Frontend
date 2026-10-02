import { Link } from 'react-router-dom'
import { ChevronRight, RadioTower } from 'lucide-react'
import { radioStations } from '../data/radioStations'
import { useLanguage } from '../i18n/LanguageContext'

type Props = {
  /** Station en cours de consultation : sa carte est marquée, sans être désactivée. */
  currentSlug?: string
}

/** Grille des stations KOLO FM — partagée par l'onglet Radio de la home et la page /radio. */
export default function ProvinceGrid({ currentSlug }: Props) {
  const { t } = useLanguage()

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {radioStations.map((station) => {
        const isCurrent = station.slug === currentSlug
        return (
          <Link
            key={station.slug}
            to={`/radio/${station.slug}`}
            aria-current={isCurrent ? 'page' : undefined}
            className={`group flex items-center gap-3 rounded-2xl border-2 p-4 transition-all hover:-translate-y-0.5 hover:border-kolo-orange hover:shadow-card ${
              isCurrent
                ? 'border-kolo-orange bg-kolo-orange/20'
                : 'border-kolo-orange/40 bg-kolo-orange/5'
            }`}
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-kolo-orange text-kolo-navy">
              <RadioTower className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-lg font-black leading-tight text-kolo-navy">
                {station.name}
              </span>
              <span className="block truncate text-xs font-semibold text-slate-600">
                {station.frequency ?? t('radio.frequencyTbc')}
              </span>
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-kolo-navy transition-transform group-hover:translate-x-0.5" />
          </Link>
        )
      })}
    </div>
  )
}
