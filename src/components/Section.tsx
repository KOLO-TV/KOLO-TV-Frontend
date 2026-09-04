import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type Props = {
  title: string
  subtitle?: string
  icon?: ReactNode
  cta?: { label: string; to: string }
  children: ReactNode
}

export default function Section({ title, subtitle, icon, cta, children }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-kolo-orange">
            {icon}
            {subtitle && (
              <span className="text-xs font-bold uppercase tracking-widest">{subtitle}</span>
            )}
          </div>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        {cta && (
          <Link
            to={cta.to}
            className="hidden shrink-0 items-center gap-1 text-sm font-bold text-kolo-blue transition-colors hover:text-kolo-orange sm:inline-flex"
          >
            {cta.label}
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}
