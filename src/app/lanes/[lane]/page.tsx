import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { answersInLane, getLane, lanes, summarize } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { ListingPage } from '@/components/listing-page'

export const dynamicParams = false

export function generateStaticParams() {
  return lanes.map((l) => ({ lane: l.slug }))
}

type Props = { params: Promise<{ lane: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lane } = await params
  const def = getLane(lane)
  if (!def) return {}
  return buildMetadata({ title: def.label, description: def.blurb, path: `/lanes/${def.slug}` })
}

export default async function LanePage({ params }: Props) {
  const { lane } = await params
  const def = getLane(lane)
  if (!def) notFound()

  return (
    <ListingPage
      title={def.label}
      description={def.blurb}
      eyebrow="Ask as a…"
      intro={def.blurb}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Answers', path: '/answers' },
        { name: def.label, path: `/lanes/${def.slug}` },
      ]}
      items={summarize(answersInLane(def.slug))}
      filters={lanes.map((l) => ({
        href: `/lanes/${l.slug}`,
        label: l.label,
        active: l.slug === def.slug,
      }))}
    />
  )
}
