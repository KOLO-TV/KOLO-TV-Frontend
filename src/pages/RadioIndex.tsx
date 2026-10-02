import { RadioTower } from 'lucide-react'
import SiteLayout from '../layouts/SiteLayout'
import ProvinceGrid from '../components/ProvinceGrid'
import RadioPlayer from '../components/RadioPlayer'
import { nationalStream } from '../data/radioStations'
import { useLanguage } from '../i18n/LanguageContext'

/** /radio — la grille des 6 provinces, accessible directement depuis le menu. */
export default function RadioIndex() {
  const { t } = useLanguage()

  return (
    <SiteLayout>
      <header className="bg-kolo-orange text-kolo-navy">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          <div className="flex items-center gap-2">
            <RadioTower className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">
              KOLO FM · {t('radio.tagline')}
            </span>
          </div>
          <h1 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
            {t('radio.index.title')}
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-medium text-kolo-navy/80 sm:text-base">
            {t('radio.index.intro')}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
        <h2 className="mb-5 font-display text-2xl font-black text-kolo-navy">
          {t('radio.chooseProvince')}
        </h2>
        <ProvinceGrid />

        <div className="mt-8">
          <RadioPlayer
            title={t('radio.national.title')}
            subtitle={t('radio.national.text')}
            streamUrl={nationalStream}
          />
        </div>
      </div>
    </SiteLayout>
  )
}
