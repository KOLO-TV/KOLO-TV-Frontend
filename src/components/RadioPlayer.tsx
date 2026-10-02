import { useRef, useState } from 'react'
import { Pause, Play, RadioTower } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const BAR_HEIGHTS = [10, 20, 32, 16, 26, 38, 18, 28, 12]

type Props = {
  title: string
  subtitle: string
  /** Chaîne vide tant que le client n'a pas fourni le flux : le player passe en attente. */
  streamUrl: string
}

/** Player audio KOLO FM — national sur la home, local sur les pages province. */
export default function RadioPlayer({ title, subtitle, streamUrl }: Props) {
  const { t } = useLanguage()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) audio.pause()
    // Lecture refusée (autoplay, flux injoignable) : l'état reste sur « arrêté ».
    else void audio.play().catch(() => setPlaying(false))
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-kolo-navy via-kolo-blue to-kolo-navy p-6 text-white sm:p-8">
      <div className="flex flex-wrap items-center gap-5">
        <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-full bg-kolo-orange text-kolo-navy">
          <RadioTower className="h-9 w-9" />
          {playing && (
            <span className="absolute inset-0 animate-ping rounded-full bg-kolo-orange opacity-40" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-bold uppercase tracking-widest text-kolo-orange">
            {streamUrl ? t('common.onAir') : t('radio.streamPending')}
          </div>
          <h3 className="mt-1 font-display text-2xl font-black leading-tight">{title}</h3>
          <p className="mt-1 text-sm text-white/80">{subtitle}</p>
        </div>

        <div className="flex items-end gap-1" aria-hidden="true">
          {BAR_HEIGHTS.map((height, i) => (
            <span
              key={i}
              className={`w-1.5 rounded-full ${playing ? 'bg-kolo-orange' : 'bg-white/25'}`}
              style={{
                height,
                animation: playing ? `kolo-pulse 1.${i}s ease-in-out infinite alternate` : undefined,
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={toggle}
          disabled={!streamUrl}
          className="inline-flex items-center gap-2 rounded-full bg-kolo-orange px-6 py-3.5 text-sm font-bold text-kolo-navy transition-all hover:bg-kolo-orange-hot disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/60"
        >
          {playing ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
          {streamUrl
            ? playing
              ? t('player.pause')
              : t('home.radio.listenLive')
            : t('radio.streamPending')}
        </button>
      </div>

      {streamUrl && (
        <audio
          ref={audioRef}
          src={streamUrl}
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      )}
    </div>
  )
}
