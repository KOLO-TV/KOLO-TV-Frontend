import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import type { MediaItem } from '../data/media'

type Props = MediaItem & {
  to?: string
  size?: 'md' | 'lg'
}

export default function MediaCard({
  title,
  category,
  duration,
  image,
  time,
  live,
  to = '/emissions/ny-vaovao',
  size = 'md',
}: Props) {
  return (
    <Link
      to={to}
      className="group block overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <div
        className={`relative overflow-hidden bg-slate-200 ${
          size === 'lg' ? 'aspect-[16/10]' : 'aspect-video'
        }`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-md bg-kolo-blue px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {category}
          </span>
          {live && (
            <span className="relative flex items-center gap-1 rounded-md bg-kolo-live px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Live
            </span>
          )}
        </div>
        {duration && (
          <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-semibold text-white">
            {duration}
          </span>
        )}
        <div className="absolute bottom-3 left-3 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-kolo-orange text-white opacity-0 shadow-glow-orange transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Play className="h-5 w-5 fill-current" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 font-display font-bold leading-tight text-slate-900 transition-colors group-hover:text-kolo-blue">
          {title}
        </h3>
        {time && <p className="mt-1.5 text-xs text-slate-500">{time}</p>}
      </div>
    </Link>
  )
}
