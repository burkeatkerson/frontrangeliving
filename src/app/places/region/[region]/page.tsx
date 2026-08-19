import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRegion, placesInRegion, regions, summarize } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { ListingPage } from '@/components/listing-page'

export const dynamicParams = false

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }))
}

type Props = { params: Promise<{ region: string }> }

const describe = (label: string) =>
  `Neighborhood and town guides across ${label} — housing stock, what to check, and what things cost.`

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params
  const def = getRegion(region)
  if (!def) return {}
  return buildMetadata({
    title: def.label,
    description: describe(def.label),
    path: `/places/region/${def.slug}`,
  })
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params
  const def = getRegion(region)
  if (!def) notFound()

  return (
    <ListingPage
      title={def.label}
      description={describe(def.label)}
      eyebrow="Region"
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Places', path: '/places' },
        { name: def.label, path: `/places/region/${def.slug}` },
      ]}
      items={summarize(placesInRegion(def.slug))}
      filters={regions.map((r) => ({
        href: `/places/region/${r.slug}`,
        label: r.label,
        active: r.slug === def.slug,
      }))}
      layout="grid"
    />
  )
}
