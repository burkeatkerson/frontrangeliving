import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import {
  allPlaces,
  answersMentioning,
  columnEntriesForPlace,
  getPlace,
  getRegion,
  neighborhoodsInCity,
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
  const hoods = neighborhoodsInCity(place.slug)
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
        <>
          {place.stats.length ? (
            <div>
              <Label small as="p" className="mb-2">
                At a glance
              </Label>
              <StatList stats={place.stats} />
            </div>
          ) : null}

          {place.civic?.employers?.length ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                Largest employers
              </Label>
              <ul className="text-body space-y-1 text-sm leading-snug">
                {place.civic.employers.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {place.civic?.transit?.length ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                Getting around
              </Label>
              <ul className="text-body space-y-1.5 text-sm leading-snug">
                {place.civic.transit.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {place.links.length ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                Official sources
              </Label>
              <ul className="space-y-1.5 text-sm leading-snug">
                {place.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </>
      }
    >
      {hoods.length ? (
        <section className="border-rule border-b py-8" aria-labelledby="hoods-heading">
          <Label small as="p" className="mb-3">
            <span id="hoods-heading">
              {hoods.length} {place.name} neighborhood {hoods.length === 1 ? 'guide' : 'guides'}
            </span>
          </Label>
          <div className="flex flex-wrap gap-1.5">
            {hoods.map((n) => (
              <Link key={n.url} href={n.url} className="chip chip-round">
                {n.name}
              </Link>
            ))}
          </div>
          <p className="mt-3 text-[0.9375rem]">
            <Link href={`/neighborhoods/${place.slug}`}>
              Browse all {place.name} neighborhoods →
            </Link>
          </p>
        </section>
      ) : null}

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
