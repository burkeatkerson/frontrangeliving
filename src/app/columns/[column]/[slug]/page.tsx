import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import {
  allColumns,
  getColumnDef,
  getColumnEntry,
  getNeighborhood,
  getPlace,
} from '@/lib/content'
import { formatDate } from '@/lib/utils'
import { docMetadata } from '@/lib/seo'
import { ArticlePage } from '@/components/article-page'
import { Label, StatList } from '@/components/primitives'

export const dynamicParams = false

export function generateStaticParams() {
  return allColumns.map((c) => ({ column: c.column, slug: c.slug }))
}

type Props = { params: Promise<{ column: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = getColumnEntry(slug)
  return entry ? docMetadata(entry) : {}
}

export default async function ColumnEntryPage({ params }: Props) {
  const { column, slug } = await params
  const entry = getColumnEntry(slug)
  if (!entry || entry.column !== column) notFound()

  const def = getColumnDef(entry.column)
  const place = entry.place ? getPlace(entry.place) : undefined
  // Entries can point at a neighborhood as well as the parent city.
  const hood = entry.hood && entry.place ? getNeighborhood(entry.place, entry.hood) : undefined

  return (
    <ArticlePage
      doc={entry}
      eyebrow={def?.label ?? entry.column}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Columns', path: '/columns' },
        ...(def ? [{ name: def.label, path: `/columns/${def.slug}` }] : []),
        { name: entry.title, path: entry.url },
      ]}
      aside={
        <>
          {entry.address ? (
            <div>
              <Label small as="p" className="mb-2">
                Where
              </Label>
              <p className="text-body text-sm leading-relaxed">{entry.address}</p>
              {hood ? (
                <p className="mt-2 text-sm leading-snug">
                  <Link href={hood.url}>{hood.name} →</Link>
                </p>
              ) : null}
            </div>
          ) : null}

          {entry.order.length ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                What we order
              </Label>
              <ul className="text-body space-y-1 text-sm leading-snug">
                {entry.order.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {place ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                Nearby
              </Label>
              <p className="text-sm leading-snug">
                <Link href={place.url}>{place.name} guide →</Link>
              </p>
              <StatList stats={place.stats} className="mt-3" />
            </div>
          ) : null}

          {entry.verified ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                Last verified
              </Label>
              <p className="text-muted text-sm leading-relaxed">
                {formatDate(entry.verified)}. Restaurants close and hours change — call before you
                drive across town.
              </p>
            </div>
          ) : null}
        </>
      }
    />
  )
}
