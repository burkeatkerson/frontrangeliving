import type { Metadata } from 'next'
import Link from 'next/link'
import { columnDefs, entriesInColumn, allColumns, summarize } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { ListingPage } from '@/components/listing-page'

const DESCRIPTION =
  'The four standing columns: The Taco Report, Ten Minutes to Dirt, After Dark, and Saturday With Kids.'

export const metadata: Metadata = buildMetadata({
  title: 'The columns',
  description: DESCRIPTION,
  path: '/columns',
})

export default function ColumnsIndex() {
  return (
    <ListingPage
      title="The columns"
      description={DESCRIPTION}
      eyebrow="Four standing columns, all year"
      intro="Where the answers come from. Each column runs on its own schedule and feeds the question library underneath it."
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Columns', path: '/columns' },
      ]}
      items={summarize(allColumns.slice(0, 12))}
      total={allColumns.length}
    >
      <div className="mt-8 grid gap-px border border-edge bg-edge sm:grid-cols-2">
        {columnDefs.map((col) => (
          <Link
            key={col.slug}
            href={`/columns/${col.slug}`}
            className="group bg-bone p-6 transition-shadow hover:shadow-[inset_0_0_0_1px_var(--color-ink)]"
          >
            <h2 className="text-[1.625rem] text-ink group-hover:text-rust">{col.label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-body">{col.blurb}</p>
            <span className="label-sm mt-3 block">
              {entriesInColumn(col.slug).length} {col.unit}
            </span>
          </Link>
        ))}
      </div>

      <h2 className="mt-14 border-b border-rule pb-3 text-[1.5rem]">Latest across all columns</h2>
    </ListingPage>
  )
}
