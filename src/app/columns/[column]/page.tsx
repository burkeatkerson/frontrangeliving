import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { columnDefs, entriesInColumn, getColumnDef, summarize } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { ListingPage } from '@/components/listing-page'

export const dynamicParams = false

export function generateStaticParams() {
  return columnDefs.map((c) => ({ column: c.slug }))
}

type Props = { params: Promise<{ column: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { column } = await params
  const def = getColumnDef(column)
  if (!def) return {}
  return buildMetadata({ title: def.label, description: def.blurb, path: `/columns/${def.slug}` })
}

export default async function ColumnPage({ params }: Props) {
  const { column } = await params
  const def = getColumnDef(column)
  if (!def) notFound()

  return (
    <ListingPage
      title={def.label}
      description={def.blurb}
      eyebrow="A standing column"
      intro={def.blurb}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Columns', path: '/columns' },
        { name: def.label, path: `/columns/${def.slug}` },
      ]}
      items={summarize(entriesInColumn(def.slug))}
      filters={columnDefs.map((c) => ({
        href: `/columns/${c.slug}`,
        label: c.label,
        active: c.slug === def.slug,
      }))}
      layout="grid"
    />
  )
}
