import Link from 'next/link'
import type { DocSummary } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

/**
 * The dense two-column question list from the library section. This is the
 * workhorse listing for large result sets — one line per document, no cards.
 */
export function QuestionList({
  items,
  columns = 2,
}: {
  items: readonly DocSummary[]
  columns?: 1 | 2
}) {
  if (!items.length) {
    return <p className="py-8 text-[0.9375rem] text-muted">Nothing here yet.</p>
  }
  return (
    <ul className={cn('grid gap-x-12', columns === 2 && 'md:grid-cols-2')}>
      {items.map((item) => (
        <li key={item.url}>
          <Link
            href={item.url}
            className="flex items-baseline justify-between gap-4 border-b border-rule py-3.5 pr-2 text-[0.9375rem] leading-snug text-ink transition-colors hover:bg-bone-2 hover:text-ink"
          >
            <span>{item.heading}</span>
            <span className="shrink-0 whitespace-nowrap font-mono text-[0.6875rem] text-faint">
              {item.meta ?? `${item.readingTime} min`}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** A roomier card grid, used where summaries earn their space. */
export function DocGrid({ items }: { items: readonly DocSummary[] }) {
  if (!items.length) {
    return <p className="py-8 text-[0.9375rem] text-muted">Nothing here yet.</p>
  }
  return (
    <div className="grid gap-px bg-edge sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.url} className="group bg-bone p-6 transition-shadow hover:shadow-[inset_0_0_0_1px_var(--color-ink)]">
          {item.category ? <div className="label-sm mb-2">{item.category.replace(/-/g, ' ')}</div> : null}
          <h3 className="text-[1.375rem] leading-tight">
            <Link href={item.url} className="text-ink group-hover:text-rust">
              {item.heading}
            </Link>
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-body">{item.summary}</p>
          <div className="label-sm mt-4 flex gap-4">
            <time dateTime={item.date}>{formatDate(item.updated ?? item.date)}</time>
            <span>{item.readingTime} min</span>
          </div>
        </article>
      ))}
    </div>
  )
}

/** Numbered pagination for prerendered listing pages. */
export function Pagination({
  base,
  page,
  totalPages,
}: {
  /** e.g. `/answers` — page 1 lives at the base, page N at `${base}/page/N`. */
  base: string
  page: number
  totalPages: number
}) {
  if (totalPages <= 1) return null
  const href = (n: number) => (n === 1 ? base : `${base}/page/${n}`)

  // Window the numbers so a 30-page library does not render 30 links.
  const window = new Set<number>([1, totalPages, page - 1, page, page + 1])
  const numbers = [...window].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b)

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center gap-2 border-t border-rule pt-6">
      {page > 1 ? (
        <Link href={href(page - 1)} className="chip" rel="prev">
          Previous
        </Link>
      ) : null}

      <ol className="flex items-center gap-1.5">
        {numbers.map((n, i) => {
          const prev = numbers[i - 1]
          return (
            <li key={n} className="flex items-center gap-1.5">
              {prev !== undefined && n - prev > 1 ? (
                <span className="label-sm px-1" aria-hidden="true">
                  …
                </span>
              ) : null}
              <Link
                href={href(n)}
                data-active={n === page}
                aria-current={n === page ? 'page' : undefined}
                className="chip"
              >
                {n}
              </Link>
            </li>
          )
        })}
      </ol>

      {page < totalPages ? (
        <Link href={href(page + 1)} className="chip ml-auto" rel="next">
          Next
        </Link>
      ) : null}
    </nav>
  )
}
