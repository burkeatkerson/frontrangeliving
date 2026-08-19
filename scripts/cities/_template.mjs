/**
 * Shared renderer for the city anchor guides.
 *
 * Every city file supplies verified facts plus its own prose. This module owns
 * the parts that must be identical across all of them — the fact table, the
 * corridor map, the disclosure, the citation block — so the AEO surface is the
 * same on every guide by construction rather than by discipline.
 *
 * Rule: a number appears here only if it came from a cited source. Anything
 * unverified is left out rather than estimated. On a licensed broker's site an
 * invented median is worse than a missing one.
 */

/** Sources cited across many guides, defined once. */
export const SOURCES = {
  census: {
    label: 'U.S. Census Bureau, 2020 Decennial Census',
    url: 'https://data.census.gov/',
  },
  car: {
    label: 'Colorado Association of REALTORS® market statistics, June 2026',
    url: 'https://coloradorealtors.com/2026/07/14/colorados-housing-market-remains-steady-as-summer-buying-season-settles-into-more-balanced-rhythm/',
    retrieved: '2026-08-19',
  },
  dola: {
    label: 'Colorado Dept. of Local Affairs, State Demography Office',
    url: 'https://demography.dola.colorado.gov/',
  },
  dpt: {
    label: 'Colorado Division of Property Taxation, residential assessment rate',
    url: 'https://dpt.colorado.gov/residential-local-government-assessment-rate',
  },
  connector: {
    label: 'Colorado Connector (Front Range Passenger Rail)',
    url: 'https://coloradoconnector.com/',
    retrieved: '2026-08-19',
  },
  rtd: { label: 'RTD Denver service information', url: 'https://www.rtd-denver.com/' },
  cdot: { label: 'Colorado Department of Transportation', url: 'https://www.codot.gov/' },
}

/** Regional median benchmarks from the June 2026 CAR report, for PriceLadder. */
export const BENCHMARKS = {
  state: 606500,
  denverMetro: 650000,
  denverCondo: 395000,
  arapahoe: 590000,
  adams: 520000,
  aurora: 515000,
  weld: 499000,
  weldCondo: 359950,
  fortCollins: 650000,
  springs: 499900,
  pueblo: 324000,
  evergreen: 726000,
}

const yaml = (v) => JSON.stringify(v)

const list = (items, indent = '  ') =>
  items.length ? '\n' + items.map((i) => `${indent}- ${i}`).join('\n') : ' []'

/** Build the frontmatter block. */
function frontmatter(c) {
  const civic = c.civic ?? {}
  const civicLines = []
  const push = (k, v) => v !== undefined && v !== null && civicLines.push(`  ${k}: ${v}`)

  push('population', civic.population)
  push('populationYear', civic.populationYear ?? 2020)
  push('elevation', civic.elevation)
  push('incorporated', civic.incorporated)
  push('countySeat', civic.countySeat ? 'true' : undefined)
  push('area', civic.area)
  if (civic.schoolDistricts?.length)
    civicLines.push(`  schoolDistricts:${list(civic.schoolDistricts.map(yaml), '    ')}`)
  if (civic.employers?.length)
    civicLines.push(`  employers:${list(civic.employers.map(yaml), '    ')}`)
  if (civic.transit?.length) civicLines.push(`  transit:${list(civic.transit.map(yaml), '    ')}`)
  if (civic.drive) {
    civicLines.push('  drive:')
    for (const [k, v] of Object.entries(civic.drive)) civicLines.push(`    ${k}: ${v}`)
  }
  push('median', civic.median)
  push('medianBasis', civic.medianBasis ? yaml(civic.medianBasis) : undefined)

  const faq = c.faq.map((f) => `  - q: ${yaml(f.q)}\n    a: ${yaml(f.a)}`).join('\n')

  const sources = c.sources
    .map((s) => {
      const parts = [`label: ${yaml(s.label)}`]
      if (s.url) parts.push(`url: ${yaml(s.url)}`)
      if (s.retrieved) parts.push(`retrieved: ${s.retrieved}`)
      return `  - { ${parts.join(', ')} }`
    })
    .join('\n')

  const links = (c.links ?? [])
    .map((l) => `  - { label: ${yaml(l.label)}, url: ${yaml(l.url)} }`)
    .join('\n')

  return `---
title: ${yaml(c.title)}
name: ${yaml(c.name)}
kind: city
region: ${c.region}
county: ${yaml(c.county)}
summary: ${yaml(c.summary)}
answer: >-
  ${c.answer.replace(/\s+/g, ' ').trim()}
date: 2026-08-19
updated: 2026-08-19${c.featured ? '\nfeatured: true' : ''}
tags: [${c.tags.join(', ')}]
stats:${list(c.stats.map(yaml), '  ')}
geo: { lat: ${c.geo.lat}, lng: ${c.geo.lng} }
civic:
${civicLines.join('\n')}
links:
${links}
faq:
${faq}
sources:
${sources}
---`
}

/** Assemble the standard opening: lede, fact table, corridor map. */
function opening(c) {
  const civic = c.civic ?? {}
  const rows = []
  const add = (k, v) => v && rows.push(`{ k: ${yaml(k)}, v: ${yaml(v)} }`)

  add('County', c.county)
  if (civic.population)
    add('Population', `${civic.population.toLocaleString()} (${civic.populationYear ?? 2020})`)
  if (civic.elevation) add('Elevation', `${civic.elevation.toLocaleString()} ft`)
  if (civic.area) add('Land area', `${civic.area} sq mi`)
  if (civic.incorporated) add('Incorporated', String(civic.incorporated))
  if (civic.schoolDistricts?.length) add('Schools', civic.schoolDistricts.join('; '))
  if (civic.median)
    add('Median sale price', `$${civic.median.toLocaleString()}${civic.medianBasis ? '' : ''}`)

  const map = `<CorridorMap highlight="${c.slug}" />`
  const table = `<FactTable rows={[\n  ${rows.join(',\n  ')},\n]} />`

  return `${c.lede}\n\n${table}\n\n${map}`
}

/** The closing sections every guide shares. */
function closing(c) {
  const civic = c.civic ?? {}
  const elevation = civic.elevation
    ? `\n\n<ElevationScale feet={${civic.elevation}} name=${yaml(c.name)} />`
    : ''

  const drive = civic.drive
    ? `\n\n<DriveTimes rows={[\n${Object.entries(civic.drive)
        .map(([k, v]) => {
          const to = {
            denver: 'Downtown Denver',
            boulder: 'Boulder',
            dia: 'Denver airport (DIA)',
            springs: 'Colorado Springs',
          }[k]
          return `  { to: ${yaml(to)}, minutes: ${v} },`
        })
        .join('\n')}\n]} />`
    : ''

  // Optional price comparison chart, for cities where we have cited medians
  // to compare against. Never invented — omitted when there is nothing to plot.
  const ladder = c.priceLadder
    ? `\n\n<PriceLadder\n  source="Colorado Association of REALTORS®, June 2026"\n  rows={[\n${c.priceLadder
        .map(
          (r) =>
            `    { label: ${yaml(r.label)}, value: ${r.value}${r.self ? ', self: true' : ''} },`
        )
        .join('\n')}\n  ]}\n/>`
    : ''

  return `## How high, and how far${elevation}${drive}

## The money question

${c.money}${ladder}

Property tax here follows the same statewide formula as everywhere else in
Colorado: the residential assessment rate is applied to actual value, then
multiplied by the local mill levy, which is set by the county, the
municipality, the school district, and any special districts stacked on top.
Two identical houses on opposite sides of a district line can carry
meaningfully different bills, so check the levy for the specific parcel rather
than the city average. See the [Division of Property
Taxation](${SOURCES.dpt.url}) for the current rate.`
}

/** Render one city to a full MDX document. */
export function renderCity(c) {
  const body = [opening(c), c.sections.trim(), closing(c)].join('\n\n')
  return `${frontmatter(c)}\n\n${body}\n`
}
