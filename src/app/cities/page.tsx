import type { Metadata } from 'next'
import Link from 'next/link'

import { allPlaces, regions } from '@/lib/content'
import { buildMetadata, listingGraph } from '@/lib/seo'
import { JsonLd } from '@/components/jsonld'
import { Shell, Label, SectionHead } from '@/components/primitives'
import { CorridorMap } from '@/components/visuals'

const DESCRIPTION =
  'A guide to every city and town on Colorado’s Front Range, from Wellington south to Pueblo — population, elevation, schools, commutes, housing costs and what each place is actually like.'

export const metadata: Metadata = buildMetadata({
  title: 'Every Front Range city',
  description: DESCRIPTION,
  path: '/cities',
})

export default function CitiesIndex() {
  const cities = allPlaces.filter((p) => p.kind === 'city')

  const byRegion = regions
    .map((r) => ({
      ...r,
      items: cities
        .filter((c) => c.region === r.slug)
        .sort((a, b) => (b.civic?.population ?? 0) - (a.civic?.population ?? 0)),
    }))
    .filter((r) => r.items.length)

  return (
    <>
      <JsonLd
        graph={listingGraph({
          name: 'Every Front Range city',
          description: DESCRIPTION,
          path: '/cities',
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Cities', path: '/cities' },
          ],
          items: cities.map((c) => ({ heading: c.name, url: c.url })),
        })}
      />

      <Shell className="pt-12">
        <Label small className="mb-3 block">
          Pueblo to Wellington · {cities.length} towns
        </Label>
        <div className="border-ink flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b pb-4">
          <h1 className="text-[clamp(2rem,5vw,3rem)] leading-tight tracking-[-0.02em]">
            Every Front Range city
          </h1>
          <span className="label ml-auto tracking-[0.04em] normal-case">
            {cities.length} guides
          </span>
        </div>

        <p className="text-body mt-5 max-w-[46em] text-base leading-relaxed">
          One page per town, all the way down the corridor. Each one carries the same facts in the
          same order — population, elevation, county, schools, commute times, what the housing stock
          actually is, and what it costs — so you can compare two places without reading two sales
          pitches.
        </p>

        <CorridorMap caption="The corridor, end to end" />

        {byRegion.map((region) => (
          <section key={region.slug} className="pt-12">
            <SectionHead
              title={region.label}
              note={`${region.items.length} ${region.items.length === 1 ? 'town' : 'towns'}`}
              heavy={false}
            />
            <ul className="mt-4 grid gap-x-12 md:grid-cols-2">
              {region.items.map((c) => (
                <li key={c.url}>
                  <Link
                    href={c.url}
                    className="border-rule text-ink hover:bg-bone-2 flex items-baseline justify-between gap-4 border-b py-3.5 pr-2 text-[0.9375rem] leading-snug transition-colors"
                  >
                    <span>{c.name}</span>
                    <span className="text-faint shrink-0 font-mono text-[0.6875rem] whitespace-nowrap">
                      {c.civic?.population
                        ? `${c.civic.population.toLocaleString()}`
                        : c.county?.replace(' County', '')}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="border-rule text-muted mt-12 border-t pt-6 text-[0.9375rem]">
          Population figures are 2020 decennial census counts. Prices come from the Colorado
          Association of REALTORS® monthly market reports and are county or metro medians unless a
          city-level figure was published. Where we could not source a number, we left it out rather
          than estimating it.
        </p>
      </Shell>
    </>
  )
}
