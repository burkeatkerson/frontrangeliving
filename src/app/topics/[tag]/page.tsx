import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allTags, docsWithTag, summarize } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { ListingPage } from '@/components/listing-page'

export const dynamicParams = false

export function generateStaticParams() {
  return allTags.map((t) => ({ tag: t.slug }))
}

type Props = { params: Promise<{ tag: string }> }

const describe = (label: string) =>
  `Everything we have written about ${label} along the Colorado Front Range.`

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const def = allTags.find((t) => t.slug === tag)
  if (!def) return {}
  return buildMetadata({
    title: def.label,
    description: describe(def.label),
    path: `/topics/${def.slug}`,
  })
}

export default async function TopicPage({ params }: Props) {
  const { tag } = await params
  const def = allTags.find((t) => t.slug === tag)
  if (!def) notFound()

  return (
    <ListingPage
      title={def.label}
      description={describe(def.label)}
      eyebrow="Topic"
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Topics', path: '/topics' },
        { name: def.label, path: `/topics/${def.slug}` },
      ]}
      items={summarize(docsWithTag(def.slug))}
    />
  )
}
