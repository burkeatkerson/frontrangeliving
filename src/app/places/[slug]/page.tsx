import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import {
  allPlaces,
  answersMentioning,
  columnEntriesForPlace,
  getPlace,
  getRegion,
  summarize,
} from '@/lib/content'
import { docMetadata } from '@/lib/seo'
import { ArticlePage } from '@/components/article-page'
import { Label, StatList } from '@/components/primitives'
import { QuestionList } from '@/components/doc-list'

export const dynamicParams = false

export function generateStaticParams() {
  return allPlaces.map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const place = getPlace(slug)
  return place ? docMetadata(place) : {}
}

export default async function PlacePage({ params }: Props) {
  const { slug } = await params
  const place = getPlace(slug)
  if (!place) notFound()

  const region = getRegion(place.region)
  const asked = summarize(answersMentioning(place.slug))
  const entries = summarize(columnEntriesForPlace(place.slug))

  return (
    <ArticlePage
      doc={place}
      eyebrow={[place.county, region?.label].filter(Boolean).join(' · ')}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Places', path: '/places' },
        ...(region ? [{ name: region.label, path: `/places/region/${region.slug}` }] : []),
        { name: place.name, path: place.url },
      ]}
      aside={
        place.stats.length ? (
          <div>
            <Label small as="p" className="mb-2">
              At a glance
            </Label>
            <StatList stats={place.stats} />
          </div>
        ) : null
      }
    >
      {asked.length ? (
        <section className="border-rule border-b py-8" aria-labelledby="asked-heading">
          <Label small as="p" className="mb-3">
            <span id="asked-heading">Answers that send people here</span>
          </Label>
          <QuestionList items={asked} columns={1} />
        </section>
      ) : null}

      {entries.length ? (
        <section className="border-rule border-b py-8" aria-labelledby="entries-heading">
          <Label small as="p" className="mb-3">
            <span id="entries-heading">From the columns</span>
          </Label>
          <QuestionList items={entries} columns={1} />
        </section>
      ) : null}

      {region ? (
        <p className="text-muted pt-6 text-[0.9375rem]">
          More in <Link href={`/places/region/${region.slug}`}>{region.label}</Link>.
        </p>
      ) : null}
    </ArticlePage>
  )
}
