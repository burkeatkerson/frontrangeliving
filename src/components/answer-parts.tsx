import Link from 'next/link'
import type { Answer, Author } from '@/lib/content'
import { formatDate, revisionStamp } from '@/lib/utils'
import { Label, StatList, ArrowLink } from './primitives'

/**
 * The standalone answer paragraph.
 *
 * `data-speakable` is what the page's `SpeakableSpecification` points at, and
 * it is the block an answer engine is most likely to quote — so it sits high
 * in the DOM, before the article body, and reads as a complete answer on its own.
 */
export function SpeakableAnswer({ children }: { children: React.ReactNode }) {
  return (
    <p
      data-speakable
      className="max-w-[52em] font-display text-[1.375rem] leading-[1.45] text-ink sm:text-[1.625rem]"
    >
      {children}
    </p>
  )
}

/** The ranked three-across place grid that closes most answers. */
export function AnswerPlaces({ places }: { places: Answer['places'] }) {
  if (!places.length) return null
  return (
    <div className="grid gap-y-10 md:grid-cols-3">
      {places.map((p, i) => (
        <div key={p.name} className="border-rule px-0 md:border-l md:px-6 md:first:pl-0 md:first:border-l-0">
          <div className="flex items-baseline gap-2.5">
            <span className="font-mono text-[1.375rem] text-rust">{i + 1}</span>
            <span className="font-display text-[1.75rem] leading-none sm:text-[1.9375rem]">
              {p.name}
            </span>
          </div>
          {p.county ? (
            <Label small className="mt-1 block">
              {p.county}
            </Label>
          ) : null}
          <p className="mb-3.5 mt-3 text-sm leading-[1.62] text-body">{p.why}</p>
          <StatList stats={p.stats} />
          {p.place ? (
            <div className="mt-3">
              <ArrowLink href={`/places/${p.place}`}>Full guide</ArrowLink>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

/**
 * The dark "money part" panel. Every answer ends with the commercial note in
 * the same place, which is the site's stated bargain with the reader.
 */
export function MoneyNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="mt-9 flex flex-wrap items-start gap-10 bg-ink px-8 py-7 text-bone">
      <div className="flex-1 basis-[28rem]">
        <Label small className="text-rust">
          The money part · every answer ends here
        </Label>
        <p className="mt-2.5 max-w-[26em] font-display text-[1.625rem] leading-snug">{children}</p>
      </div>
      <div className="font-mono text-xs leading-[2] text-dim">
        <div>we live in two of these three</div>
        <div>we are licensed, and we&rsquo;ll say so once</div>
        <div>
          <Link href="/investing" className="text-rust hover:text-rust">
            market notes, in full →
          </Link>
        </div>
      </div>
    </aside>
  )
}

/** Visible FAQ. Mirrors the FAQPage JSON-LD exactly — never one without the other. */
export function FaqList({ faq }: { faq: readonly { q: string; a: string }[] }) {
  if (!faq.length) return null
  return (
    <section className="mt-16" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="border-b border-ink pb-3 text-[1.75rem]">
        Also asked
      </h2>
      <dl className="mt-2">
        {faq.map((item) => (
          <div key={item.q} className="border-b border-rule py-5">
            <dt className="font-display text-xl leading-snug text-ink">{item.q}</dt>
            <dd className="mt-2 max-w-[52em] text-[0.9375rem] leading-relaxed text-body">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

/** Where the numbers came from. Cited in JSON-LD too. */
export function Sources({ sources }: { sources: Answer['sources'] }) {
  if (!sources.length) return null
  return (
    <section className="mt-12 border-t border-rule pt-5">
      <Label small className="block">
        Where this comes from
      </Label>
      <ul className="mt-2.5 space-y-1 font-mono text-[0.6875rem] leading-relaxed text-muted">
        {sources.map((s) => (
          <li key={s.label}>
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ) : (
              s.label
            )}
            {s.retrieved ? <span className="text-faint"> · retrieved {formatDate(s.retrieved)}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Byline plus revision stamp — the trust signals, stated plainly. */
export function ByLine({
  authors,
  date,
  updated,
  readingTime,
}: {
  authors: readonly Author[]
  date: string
  updated?: string
  readingTime: number
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
      <Label small>
        {authors.length ? `Answered by ${authors.map((a) => a.name).join(' & ')}` : 'Answered by us'}
      </Label>
      <Label small>
        <time dateTime={date}>{formatDate(date)}</time>
      </Label>
      <Label small>{readingTime} min</Label>
      {updated && updated !== date ? (
        <Label small className="ml-auto text-rust">
          {revisionStamp(updated)}
        </Label>
      ) : null}
    </div>
  )
}
