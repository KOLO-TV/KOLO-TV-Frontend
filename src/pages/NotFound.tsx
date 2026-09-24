import { Link } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import { useLanguage } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <SiteLayout>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">
        <span className="font-sans text-6xl font-black text-kolo-blue">404</span>
        <h1 className="mt-4 font-display text-2xl font-black">{t('notFound.title')}</h1>
        <p className="mt-2 max-w-md text-slate-500">
          {t('notFound.text')}
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-kolo-orange px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-kolo-orange-hot"
        >
          {t('notFound.back')}
        </Link>
      </div>
    </SiteLayout>
  )
}
