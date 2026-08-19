'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { DocSummary } from '@/lib/content'
import { QuestionList } from './doc-list'

export interface LibraryGroup {
  slug: string
  label: string
  total: number
  items: DocSummary[]
}

/**
 * Category chips over the question library.
 *
 * Every group is rendered into the DOM and inactive ones are hidden with the
 * `hidden` attribute rather than unmounted — so a crawler (and an answer
 * engine reading the raw HTML) sees every question, not just the open tab.
 */
export function LibraryBrowser({ groups }: { groups: readonly LibraryGroup[] }) {
  const [active, setActive] = useState(groups[0]?.slug ?? '')

  return (
    <div>
      <div className="my-4 flex flex-wrap gap-1.5">
        {groups.map((g) => (
          <button
            key={g.slug}
            type="button"
            aria-pressed={g.slug === active}
            aria-controls={`library-${g.slug}`}
            onClick={() => setActive(g.slug)}
            className="chip"
          >
            {g.label}
          </button>
        ))}
      </div>

      {groups.map((g) => (
        <section key={g.slug} id={`library-${g.slug}`} hidden={g.slug !== active}>
          <h3 className="sr-only">{g.label}</h3>
          <QuestionList items={g.items} />
          {g.total > g.items.length ? (
            <p className="mt-4">
              <Link href={`/categories/${g.slug}`} className="font-mono text-[0.6875rem]">
                All {g.total} in {g.label.toLowerCase()} →
              </Link>
            </p>
          ) : null}
        </section>
      ))}
    </div>
  )
}
