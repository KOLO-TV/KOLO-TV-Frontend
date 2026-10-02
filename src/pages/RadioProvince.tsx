import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, Mail, MapPin, Mic, Phone, RadioTower } from 'lucide-react'
import SiteLayout from '../layouts/SiteLayout'
import ProvinceNav from '../components/ProvinceNav'
import RadioPlayer from '../components/RadioPlayer'
import { getRadioStation } from '../data/radioStations'
import { useLanguage } from '../i18n/LanguageContext'

/** /radio/:province — une page par station, générée depuis src/data/radioStations.ts. */
export default function RadioProvince() {
  const { province } = useParams()
  const { t } = useLanguage()
  const station = getRadioStation(province)

  // Slug inconnu : retour à la grille des provinces plutôt qu'une 404.
  if (!station) return <Navigate to="/radio" replace />

  const frequency = station.frequency ?? t('radio.frequencyTbc')
  const contactEntries = [
    { key: 'phone', icon: Phone, value: station.contact.phone, href: `tel:${station.contact.phone}` },
    { key: 'email', icon: Mail, value: station.contact.email, href: `mailto:${station.contact.email}` },
    { key: 'address', icon: MapPin, value: station.contact.address },
  ].filter((entry) => Boolean(entry.value))

  return (
    <SiteLayout>
      <header className="bg-kolo-orange text-kolo-navy">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
          <Link
            to="/?tab=radio"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t('radio.backToTab')}
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-kolo-navy text-kolo-orange">
              <RadioTower className="h-7 w-7" />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-bold uppercase tracking-widest">
                KOLO FM · {t('radio.province.eyebrow')}
              </div>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                {station.name}
              </h1>
            </div>
            <span className="rounded-full bg-kolo-navy px-4 py-2 font-display text-lg font-black text-kolo-orange">
              {frequency}
            </span>
          </div>
        </div>
      </header>

      <ProvinceNav currentSlug={station.slug} />

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[1.4fr_1fr] lg:px-8 lg:py-14">
        <div className="space-y-6">
          <RadioPlayer
            title={`KOLO FM ${station.name}`}
            subtitle={`${frequency} · ${t('radio.tagline')}`}
            streamUrl={station.streamUrl}
          />

          <section className="rounded-3xl border-2 border-kolo-orange/40 bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-2xl font-black text-kolo-navy">
              <Clock className="h-5 w-5" />
              {t('radio.province.schedule')}
            </h2>
            {station.schedule.length > 0 ? (
              <ul className="mt-5 divide-y divide-slate-200">
                {station.schedule.map((slot) => (
                  <li key={`${slot.time}-${slot.title}`} className="flex flex-wrap gap-x-4 gap-y-1 py-3">
                    <span className="w-32 shrink-0 text-sm font-bold text-kolo-navy">{slot.time}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold">{slot.title}</span>
                      {slot.host && <span className="block text-xs text-slate-500">{slot.host}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
                {t('radio.province.scheduleEmpty')}
              </p>
            )}
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-3xl border-2 border-kolo-orange/40 bg-white p-6">
            <h2 className="flex items-center gap-2 font-display text-xl font-black text-kolo-navy">
              <Mic className="h-5 w-5" />
              {t('radio.province.hosts')}
            </h2>
            {station.hosts.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {station.hosts.map((host) => (
                  <li key={host.name} className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-kolo-orange font-display text-sm font-black text-kolo-navy">
                      {host.name.charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold">{host.name}</span>
                      <span className="block truncate text-xs text-slate-500">{host.role}</span>
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
                {t('radio.province.hostsEmpty')}
              </p>
            )}
          </section>

          <section className="rounded-3xl border-2 border-kolo-orange/40 bg-white p-6">
            <h2 className="flex items-center gap-2 font-display text-xl font-black text-kolo-navy">
              <MapPin className="h-5 w-5" />
              {t('radio.province.contact')}
            </h2>
            {contactEntries.length > 0 ? (
              <ul className="mt-4 space-y-3 text-sm">
                {contactEntries.map(({ key, icon: Icon, value, href }) => (
                  <li key={key} className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-kolo-navy" />
                    {href ? (
                      <a href={href} className="hover:text-kolo-blue">
                        {value}
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
                {t('radio.province.contactEmpty')}
              </p>
            )}
          </section>

          <Link
            to="/radio"
            className="flex items-center justify-center gap-2 rounded-2xl bg-kolo-navy px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-kolo-blue"
          >
            <RadioTower className="h-4 w-4" />
            {t('radio.allProvinces')}
          </Link>
        </div>
      </div>
    </SiteLayout>
  )
}
