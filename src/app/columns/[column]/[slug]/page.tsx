import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import { allColumns, getColumnDef, getColumnEntry, getPlace } from '@/lib/content'
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
        place ? (
          <div className="border-rule border-t pt-4">
            <Label small as="p" className="mb-2">
              Nearby
            </Label>
            <p className="text-sm leading-snug">
              <Link href={place.url}>{place.name} guide →</Link>
            </p>
            <StatList stats={place.stats} className="mt-3" />
          </div>
        ) : null
      }
    />
  )
}
