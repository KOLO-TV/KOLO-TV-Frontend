import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'

const PROGRAMS = [
  { label: 'Ny Vaovao', to: '/emissions/ny-vaovao' },
  { label: 'Le Journal', to: '/replay' },
  { label: 'Magazines', to: '/replay' },
  { label: 'Sport', to: '/replay' },
  { label: 'Divertissement', to: '/replay' },
]

const ABOUT_LINKS = ['À propos', 'Nos équipes', 'Grille TV', 'Grille FM', 'Publicité']

const SOCIALS = [Facebook, Youtube, Instagram]

export default function Footer() {
  return (
    <footer className="mt-24 bg-kolo-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-11 items-center rounded-lg bg-white px-3">
                <span className="font-display text-xl font-black text-kolo-blue">KOLO</span>
                <span className="ml-1 rounded-sm bg-kolo-blue px-1 py-0.5 text-[10px] font-black text-white">
                  TV
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm italic text-white/80">
              « Pour vous… Toujours pour vous… Rien que pour vous. »
            </p>
            <p className="mt-3 text-sm text-white/70">
              Média malgache généraliste, culturel et informatif. La télé autrement.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-kolo-orange"
                  aria-label="Réseau social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-kolo-orange">
              Programmes
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {PROGRAMS.map((p) => (
                <li key={p.label}>
                  <Link to={p.to} className="hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-kolo-orange">
              KOLO
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {ABOUT_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-kolo-orange">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-kolo-orange" />
                <a href="tel:+261321288838" className="hover:text-white">
                  +261 32 12 888 38
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-kolo-orange" />
                <a href="mailto:dir.marketing@kolo.mg" className="hover:text-white">
                  dir.marketing@kolo.mg
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-kolo-orange" />
                Antananarivo, Madagascar
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} KOLO TV/FM. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white">
              Confidentialité
            </a>
            <a href="#" className="hover:text-white">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
