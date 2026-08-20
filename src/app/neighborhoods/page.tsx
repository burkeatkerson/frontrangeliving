import type { Metadata } from 'next'
import Link from 'next/link'

import { citiesWithNeighborhoods, neighborhoodCounts } from '@/lib/content'
import { buildMetadata, listingGraph } from '@/lib/seo'
import { JsonLd } from '@/components/jsonld'
import { Shell, Label, SectionHead } from '@/components/primitives'

const DESCRIPTION =
  'Neighborhood-by-neighborhood guides across Colorado’s Front Range — boundaries, housing stock, what each area is actually like, and who it suits.'

export const metadata: Metadata = buildMetadata({
  title: 'Every neighborhood',
  description: DESCRIPTION,
  path: '/neighborhoods',
})

export default function NeighborhoodsIndex() {
  const groups = citiesWithNeighborhoods()

  return (
    <>
      <JsonLd
        graph={listingGraph({
          name: 'Every neighborhood',
          description: DESCRIPTION,
          path: '/neighborhoods',
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Neighborhoods', path: '/neighborhoods' },
          ],
          items: groups.flatMap((g) => g.items.map((n) => ({ heading: n.name, url: n.url }))),
        })}
      />

      <Shell className="pt-12">
        <Label small className="mb-3 block">
          {neighborhoodCounts.total} guides across {neighborhoodCounts.cities}{' '}
          {neighborhoodCounts.cities === 1 ? 'city' : 'cities'}
        </Label>
        <div className="border-ink flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b pb-4">
          <h1 className="text-[clamp(2rem,5vw,3rem)] leading-tight tracking-[-0.02em]">
            Every neighborhood
          </h1>
          <span className="label ml-auto tracking-[0.04em] normal-case">
            {neighborhoodCounts.total} guides
          </span>
        </div>

        <p className="text-body mt-5 max-w-[46em] text-base leading-relaxed">
          City guides answer &ldquo;which town?&rdquo;. These answer &ldquo;which blocks?&rdquo; —
          which is the question people actually get wrong. Two neighborhoods in the same city, four
          miles apart, routinely differ more than two cities do.
        </p>

        <p className="text-muted mt-4 max-w-[46em] text-[0.9375rem]">
          Looking for the whole town instead? Start with{' '}
          <Link href="/cities">every Front Range city</Link>.
        </p>

        {groups.map((group) => (
          <section key={group.city.slug} className="pt-12">
            <SectionHead
              title={
                <Link
                  href={`/neighborhoods/${group.city.slug}`}
                  className="text-ink hover:text-rust"
                >
                  {group.city.name}
                </Link>
              }
              note={`${group.items.length} ${group.items.length === 1 ? 'neighborhood' : 'neighborhoods'}`}
              heavy={false}
            />
            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((n) => (
                <Link key={n.url} href={n.url} className="chip chip-round">
                  {n.name}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </Shell>
    </>
  )
}
