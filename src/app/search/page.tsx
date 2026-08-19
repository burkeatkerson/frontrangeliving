import type { Metadata } from 'next'
import { Suspense } from 'react'
import { buildMetadata } from '@/lib/seo'
import { counts } from '@/lib/content'
import { Shell, Label } from '@/components/primitives'
import { SearchClient } from '@/components/search-client'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Search',
    description: 'Search every answer, place guide, column entry and investing brief.',
    path: '/search',
  }),
  // A search results page has nothing stable to index.
  robots: { index: false, follow: true },
}

export default function SearchPage() {
  return (
    <Shell className="pt-12">
      <Label small className="mb-3 block">
        {counts.total} pages, all of them searchable
      </Label>
      <h1 className="mb-8 text-[clamp(2rem,5vw,3rem)] leading-tight tracking-[-0.02em]">
        Search everything
      </h1>
      <Suspense fallback={<Label small>Loading…</Label>}>
        <SearchClient />
      </Suspense>
    </Shell>
  )
}
