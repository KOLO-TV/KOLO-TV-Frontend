import { useState, type FormEvent } from 'react'
import { Play, Radio, Send, Tv, Users, Volume2 } from 'lucide-react'
import SiteLayout from '../layouts/SiteLayout'
import { images, initialChatMessages, type ChatMessage } from '../data/media'
import { useLanguage } from '../i18n/LanguageContext'

type Channel = 'tv' | 'fm'
// Messages mock (traduits) ou envoyés par l'utilisateur (texte saisi, affiché tel quel).
type ChatMsg = ChatMessage | { own: true; color: string; msg: string; time: string }

const BAR_HEIGHTS = [8, 16, 24, 12, 20, 30, 14, 22, 10]

export default function Live() {
  const { t } = useLanguage()
  const [channel, setChannel] = useState<Channel>('tv')
  const [messages, setMessages] = useState<ChatMsg[]>(initialChatMessages)
  const [draft, setDraft] = useState('')

  const authorOf = (m: ChatMsg) => ('own' in m ? t('live.chat.you') : m.user)
  const textOf = (m: ChatMsg) => ('own' in m ? m.msg : t(m.msgKey))

  const handleSend = (e: FormEvent) => {
    e.preventDefault()
    if (!draft.trim()) return
    setMessages((prev) => [
      ...prev,
      {
        own: true,
        color: '#3E509E',
        msg: draft.trim(),
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      },
    ])
    setDraft('')
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-kolo-orange">
              <span className="relative flex items-center gap-2 rounded-full bg-kolo-live px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> {t('common.liveBadge')}
              </span>
              <span className="flex items-center gap-1 text-xs font-semibold">
                <Users className="h-3.5 w-3.5" /> {t('common.viewers', { count: '2 314' })}
              </span>
            </div>
            <h1 className="mt-2 font-display text-3xl font-black sm:text-4xl">{t('live.title')}</h1>
          </div>

          <div className="flex rounded-full border border-slate-200 bg-white p-1">
            <button
              onClick={() => setChannel('tv')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                channel === 'tv' ? 'bg-kolo-blue text-white' : 'text-slate-600'
              }`}
            >
              <Tv className="h-4 w-4" /> KOLO TV
            </button>
            <button
              onClick={() => setChannel('fm')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                channel === 'fm' ? 'bg-kolo-orange text-white' : 'text-slate-600'
              }`}
            >
              <Radio className="h-4 w-4" /> KOLO FM
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-card-hover">
              {channel === 'tv' ? (
                <>
                  <img src={images.heroStudio} alt={t('live.tvImageAlt')} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </>
              ) : (
                <div className="grid h-full w-full place-items-center bg-gradient-to-br from-kolo-blue via-kolo-blue-deep to-black">
                  <div className="text-center text-white">
                    <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full bg-kolo-orange">
                      <Radio className="h-12 w-12" />
                      <span className="absolute inset-0 animate-ping rounded-full bg-kolo-orange opacity-40" />
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-widest text-white/70">
                      {t('common.onAir')}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-black">
                      {t('live.fmShow')}
                    </h2>
                    <p className="mt-1 text-sm text-white/80">{t('live.fmHost')}</p>
                    <div className="mt-6 flex items-end justify-center gap-1">
                      {BAR_HEIGHTS.map((h, i) => (
                        <span
                          key={i}
                          className="w-1.5 rounded-full bg-kolo-orange"
                          style={{
                            height: h,
                            animation: `kolo-pulse 1.${i}s ease-in-out infinite alternate`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute left-4 top-4 flex gap-2">
                <span className="rounded-md bg-kolo-live px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  {t('common.liveBadge')}
                </span>
                <span className="rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                  {channel === 'tv' ? 'KOLO TV · Ny Vaovao' : 'KOLO FM · 99.5 MHz'}
                </span>
              </div>

              {channel === 'tv' && (
                <button className="absolute inset-0 grid place-items-center" aria-label={t('player.play')}>
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-kolo-orange text-white shadow-glow-orange transition-transform hover:scale-110">
                    <Play className="h-8 w-8 fill-current" />
                  </span>
                </button>
              )}

              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center gap-3 text-white">
                  <button aria-label={t('player.playShort')}>
                    <Play className="h-5 w-5 fill-current" />
                  </button>
                  <Volume2 className="h-5 w-5" />
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/25">
                    <div className="h-full w-2/3 bg-kolo-orange" />
                  </div>
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-bold">
                    {channel === 'tv' ? '1080p' : '128 kbps'}
                  </span>
                  <Volume2 className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-[11px] font-bold uppercase tracking-widest text-kolo-orange">
                  {t('live.now')}
                </div>
                <div className="mt-1 font-display text-lg font-black">
                  {channel === 'tv' ? t('live.tvNowTitle') : t('live.fmShow')}
                </div>
                <div className="text-xs text-slate-500">
                  {channel === 'tv' ? t('live.tvNowSlot') : t('live.fmNowSlot')}
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-100/60 p-4">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  {t('live.next')}
                </div>
                <div className="mt-1 font-display text-lg font-black">
                  {channel === 'tv' ? 'Kolo Kulture' : 'Malagasy Beats'}
                </div>
                <div className="text-xs text-slate-500">
                  {channel === 'tv' ? t('live.tvNextSlot') : t('live.fmNextSlot')}
                </div>
              </div>
            </div>
          </div>

          <aside className="flex h-[560px] flex-col rounded-2xl border border-slate-200 bg-white shadow-card lg:h-auto">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <h2 className="font-display text-sm font-black uppercase tracking-widest">
                {t('live.chat.title')}
              </h2>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Users className="h-3.5 w-3.5" /> 2.3K
              </span>
            </div>
            <div className="thin-scroll flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className="fade-up flex gap-2.5">
                  <div
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-black text-white"
                    style={{ backgroundColor: m.color }}
                  >
                    {authorOf(m)[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold">{authorOf(m)}</span>
                      <span className="text-[10px] text-slate-500">{m.time}</span>
                    </div>
                    <p className="text-sm text-slate-700">{textOf(m)}</p>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="flex gap-2 border-t border-slate-200 p-3">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={t('live.chat.placeholder')}
                aria-label={t('live.chat.inputLabel')}
                className="flex-1 rounded-full border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm outline-none focus:border-kolo-blue"
              />
              <button
                type="submit"
                aria-label={t('live.chat.send')}
                className="grid h-10 w-10 place-items-center rounded-full bg-kolo-orange text-white transition-colors hover:bg-kolo-orange-hot"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </aside>
        </div>
      </div>
    </SiteLayout>
  )
}
