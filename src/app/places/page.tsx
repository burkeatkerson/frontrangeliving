import type { Metadata } from 'next'
import { allPlaces, regions, summarize } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { ListingPage } from '@/components/listing-page'

const DESCRIPTION =
  'Neighborhood and town guides across the Colorado Front Range — what you are buying, what to check, and what it costs, block by block.'

export const metadata: Metadata = buildMetadata({
  title: 'Place guides',
  description: DESCRIPTION,
  path: '/places',
})

export default function PlacesPage() {
  return (
    <ListingPage
      title="Place guides"
      description={DESCRIPTION}
      eyebrow="One page per place"
      intro="One page per town and neighborhood: what the housing stock actually is, what to check before you write an offer, and what a normal week there looks like."
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Places', path: '/places' },
      ]}
      items={summarize(allPlaces)}
      filters={regions.map((r) => ({ href: `/places/region/${r.slug}`, label: r.label }))}
      layout="grid"
    />
  )
}
