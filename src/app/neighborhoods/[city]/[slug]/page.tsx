import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import {
  allNeighborhoods,
  getNeighborhood,
  getPlace,
  getRegion,
  neighborhoodsInCity,
} from '@/lib/content'
import { docMetadata } from '@/lib/seo'
import { ArticlePage } from '@/components/article-page'
import { Label, StatList } from '@/components/primitives'

export const dynamicParams = false

export function generateStaticParams() {
  return allNeighborhoods.map((n) => ({ city: n.city, slug: n.slug }))
}

type Props = { params: Promise<{ city: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, slug } = await params
  const hood = getNeighborhood(city, slug)
  return hood ? docMetadata(hood) : {}
}

export default async function NeighborhoodPage({ params }: Props) {
  const { city, slug } = await params
  const hood = getNeighborhood(city, slug)
  if (!hood) notFound()

  const parent = getPlace(hood.city)
  const region = parent ? getRegion(parent.region) : undefined

  // Sibling neighborhoods, for lateral navigation within the city.
  const siblings = neighborhoodsInCity(hood.city).filter((n) => n.slug !== hood.slug)

  return (
    <ArticlePage
      doc={hood}
      eyebrow={parent ? `${parent.name}${hood.sector ? ` · ${hood.sector}` : ''}` : hood.sector}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Neighborhoods', path: '/neighborhoods' },
        ...(parent ? [{ name: parent.name, path: `/neighborhoods/${parent.slug}` }] : []),
        { name: hood.name, path: hood.url },
      ]}
      aside={
        <>
          {hood.bounds ? (
            <div>
              <Label small as="p" className="mb-2">
                Roughly bounded by
              </Label>
              <p className="text-body text-sm leading-relaxed">{hood.bounds}</p>
            </div>
          ) : null}

          {hood.housing.length ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                Housing stock
              </Label>
              <ul className="text-body space-y-1 text-sm leading-snug">
                {hood.housing.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {hood.stats.length ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                At a glance
              </Label>
              <StatList stats={hood.stats} />
            </div>
          ) : null}

          {parent ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                In context
              </Label>
              <ul className="space-y-1.5 text-sm leading-snug">
                <li>
                  <Link href={parent.url}>The {parent.name} city guide →</Link>
                </li>
                <li>
                  <Link href={`/neighborhoods/${parent.slug}`}>
                    All {parent.name} neighborhoods →
                  </Link>
                </li>
                {region ? (
                  <li>
                    <Link href={`/places/region/${region.slug}`}>{region.label} →</Link>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}

          {hood.links.length ? (
            <div className="border-rule border-t pt-4">
              <Label small as="p" className="mb-2">
                Official sources
              </Label>
              <ul className="space-y-1.5 text-sm leading-snug">
                {hood.links.map((l) => (
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
      {siblings.length ? (
        <section className="border-rule border-b py-8" aria-labelledby="nearby-heading">
          <Label small as="p" className="mb-3">
            <span id="nearby-heading">
              Other {parent?.name ?? ''} neighborhoods we have written up
            </span>
          </Label>
          <div className="flex flex-wrap gap-1.5">
            {siblings.slice(0, 18).map((n) => (
              <Link key={n.url} href={n.url} className="chip chip-round">
                {n.name}
              </Link>
            ))}
            {siblings.length > 18 ? (
              <Link href={`/neighborhoods/${hood.city}`} className="chip chip-round">
                all {siblings.length + 1} →
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}
    </ArticlePage>
  )
}
