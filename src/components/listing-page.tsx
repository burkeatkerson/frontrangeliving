import Link from 'next/link'
import type { DocSummary } from '@/lib/content'
import { listingGraph, type Crumb } from '@/lib/seo'
import { JsonLd } from './jsonld'
import { Shell, Label } from './primitives'
import { DocGrid, QuestionList, Pagination } from './doc-list'

export interface FilterLink {
  href: string
  label: string
  active?: boolean
}

/**
 * One layout for every index in the site — answers, places, columns, topics,
 * categories, lanes. Consistency here is what keeps a library of several
 * hundred documents navigable.
 */
export function ListingPage({
  title,
  intro,
  eyebrow,
  crumbs,
  items,
  total,
  filters,
  layout = 'list',
  pagination,
  description,
  children,
}: {
  title: string
  intro?: React.ReactNode
  eyebrow?: React.ReactNode
  crumbs: readonly Crumb[]
  items: readonly DocSummary[]
  /** Total across all pages, for the count in the masthead. */
  total?: number
  filters?: readonly FilterLink[]
  layout?: 'list' | 'grid'
  pagination?: { base: string; page: number; totalPages: number }
  /** Meta description; falls back to the intro when it is a plain string. */
  description: string
  children?: React.ReactNode
}) {
  const count = total ?? items.length
  const path = crumbs[crumbs.length - 1]!.path

  return (
    <>
      <JsonLd
        graph={listingGraph({
          name: title,
          description,
          path,
          crumbs,
          items: items.map((i) => ({ heading: i.heading, url: i.url })),
        })}
      />

      <Shell className="pt-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i > 0 ? (
                  <span className="label-sm" aria-hidden="true">
                    /
                  </span>
                ) : null}
                {i === crumbs.length - 1 ? (
                  <Label small aria-current="page">
                    {c.name}
                  </Label>
                ) : (
                  <Link href={c.path} className="label-sm hover:text-ink">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow ? (
          <Label small className="mb-3 block">
            {eyebrow}
          </Label>
        ) : null}

        <div className="border-ink flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b pb-4">
          <h1 className="text-[clamp(2rem,5vw,3rem)] leading-tight tracking-[-0.02em]">{title}</h1>
          <span className="label ml-auto tracking-[0.04em] normal-case">
            {count} {count === 1 ? 'entry' : 'entries'}
          </span>
        </div>

        {intro ? (
          <p className="text-body mt-5 max-w-[46em] text-base leading-relaxed">{intro}</p>
        ) : null}

        {filters?.length ? (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {filters.map((f) => (
              <Link key={f.href} href={f.href} data-active={f.active} className="chip">
                {f.label}
              </Link>
            ))}
          </div>
        ) : null}

        {children}

        <div className="mt-8">
          {layout === 'grid' ? <DocGrid items={items} /> : <QuestionList items={items} />}
        </div>

        {pagination ? <Pagination {...pagination} /> : null}
      </Shell>
    </>
  )
}
