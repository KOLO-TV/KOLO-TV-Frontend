import { Link } from 'react-router-dom'
import { radioStations } from '../data/radioStations'
import { useLanguage } from '../i18n/LanguageContext'

type Props = {
  currentSlug: string
}

/** Passage d'une station à l'autre sans repasser par l'accueil. */
export default function ProvinceNav({ currentSlug }: Props) {
  const { t } = useLanguage()

  return (
    <nav aria-label={t('radio.province.otherStations')} className="border-y border-kolo-orange/40 bg-kolo-orange/10">
      <div className="thin-scroll mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 lg:px-8">
        {radioStations.map((station) => {
          const isCurrent = station.slug === currentSlug
          return (
            <Link
              key={station.slug}
              to={`/radio/${station.slug}`}
              aria-current={isCurrent ? 'page' : undefined}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                isCurrent
                  ? 'bg-kolo-orange text-kolo-navy'
                  : 'bg-white text-slate-600 hover:bg-kolo-orange/40 hover:text-kolo-navy'
              }`}
            >
              {station.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
