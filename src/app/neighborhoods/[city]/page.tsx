import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import {
  allNeighborhoods,
  getPlace,
  getRegion,
  neighborhoodsBySector,
  neighborhoodsInCity,
} from '@/lib/content'
import { buildMetadata, listingGraph } from '@/lib/seo'
import { JsonLd } from '@/components/jsonld'
import { Shell, Label, SectionHead } from '@/components/primitives'

export const dynamicParams = false

export function generateStaticParams() {
  return [...new Set(allNeighborhoods.map((n) => n.city))].map((city) => ({ city }))
}

type Props = { params: Promise<{ city: string }> }

const describe = (name: string, n: number) =>
  `All ${n} ${name} neighborhood guides — boundaries, housing stock, what each area is actually like, and what it costs.`

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const parent = getPlace(city)
  const items = neighborhoodsInCity(city)
  if (!items.length) return {}
  const name = parent?.name ?? city
  return buildMetadata({
    title: `${name} neighborhoods`,
    description: describe(name, items.length),
    path: `/neighborhoods/${city}`,
  })
}

export default async function CityNeighborhoodsPage({ params }: Props) {
  const { city } = await params
  const items = neighborhoodsInCity(city)
  if (!items.length) notFound()

  const parent = getPlace(city)
  const region = parent ? getRegion(parent.region) : undefined
  const name = parent?.name ?? city
  const sectors = neighborhoodsBySector(city)
  const grouped = sectors.length > 1

  return (
    <>
      <JsonLd
        graph={listingGraph({
          name: `${name} neighborhoods`,
          description: describe(name, items.length),
          path: `/neighborhoods/${city}`,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Neighborhoods', path: '/neighborhoods' },
            { name, path: `/neighborhoods/${city}` },
          ],
          items: items.map((n) => ({ heading: n.name, url: n.url })),
        })}
      />

      <Shell className="pt-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/neighborhoods" className="label-sm hover:text-ink">
                Neighborhoods
              </Link>
            </li>
            <li className="label-sm" aria-hidden="true">
              /
            </li>
            <li>
              <Label small aria-current="page">
                {name}
              </Label>
            </li>
          </ol>
        </nav>

        <div className="border-ink flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b pb-4">
          <h1 className="text-[clamp(2rem,5vw,3rem)] leading-tight tracking-[-0.02em]">
            {name} neighborhoods
          </h1>
          <span className="label ml-auto tracking-[0.04em] normal-case">{items.length} guides</span>
        </div>

        <p className="text-body mt-5 max-w-[46em] text-base leading-relaxed">
          One page per neighborhood, each with the same facts in the same order — where the
          boundaries actually are, what got built and when, what to check before you write an offer,
          and who the area genuinely suits.
        </p>

        {parent ? (
          <p className="text-muted mt-4 text-[0.9375rem]">
            Start with the <Link href={parent.url}>{name} city guide</Link>
            {region ? (
              <>
                {' '}
                or browse the rest of{' '}
                <Link href={`/places/region/${region.slug}`}>{region.label}</Link>
              </>
            ) : null}
            .
          </p>
        ) : null}

        {grouped ? (
          sectors.map((group) => (
            <section key={group.sector} className="pt-10">
              <SectionHead
                title={group.sector}
                note={`${group.items.length} ${group.items.length === 1 ? 'neighborhood' : 'neighborhoods'}`}
                heavy={false}
              />
              <ul className="mt-4 grid gap-x-12 md:grid-cols-2">
                {group.items.map((n) => (
                  <li key={n.url}>
                    <Link
                      href={n.url}
                      className="border-rule text-ink hover:bg-bone-2 flex items-baseline justify-between gap-4 border-b py-3.5 pr-2 text-[0.9375rem] leading-snug transition-colors"
                    >
                      <span>{n.name}</span>
                      <span className="text-faint shrink-0 font-mono text-[0.6875rem] whitespace-nowrap">
                        {n.metadata.readingTime} min
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))
        ) : (
          <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
            {items.map((n) => (
              <li key={n.url}>
                <Link
                  href={n.url}
                  className="border-rule text-ink hover:bg-bone-2 flex items-baseline justify-between gap-4 border-b py-3.5 pr-2 text-[0.9375rem] leading-snug transition-colors"
                >
                  <span>{n.name}</span>
                  <span className="text-faint shrink-0 font-mono text-[0.6875rem] whitespace-nowrap">
                    {n.metadata.readingTime} min
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Shell>
    </>
  )
}
