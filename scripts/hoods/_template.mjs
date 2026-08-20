/**
 * Shared renderer for neighborhood guides.
 *
 * Same discipline as the city anchors: this module owns everything that must
 * be identical across every guide — the fact table, the citation block, the
 * disclosure — and each neighborhood supplies its own facts and prose.
 *
 * Numbers appear only when sourced. Neighborhood-level medians are deliberately
 * absent: no public source publishes them reliably for all 78 Denver
 * neighborhoods, and inventing them on a licensed broker's site is not an
 * option. Guides position neighborhoods against cited city and metro figures
 * instead, and say so.
 */

export const SRC = {
  denverNbhd: {
    label: 'City and County of Denver — statistical neighborhoods',
    url: 'https://www.denvergov.org/opendata',
    retrieved: '2026-08-19',
  },
  car: {
    label: 'Colorado Association of REALTORS® market statistics, June 2026',
    url: 'https://coloradorealtors.com/2026/07/14/colorados-housing-market-remains-steady-as-summer-buying-season-settles-into-more-balanced-rhythm/',
    retrieved: '2026-08-19',
  },
  census: {
    label: 'U.S. Census Bureau, 2020 Decennial Census',
    url: 'https://data.census.gov/',
    retrieved: '2026-08-19',
  },
  dpt: {
    label: 'Colorado Division of Property Taxation',
    url: 'https://dpt.colorado.gov/residential-local-government-assessment-rate',
  },
  rtd: { label: 'RTD Denver service information', url: 'https://www.rtd-denver.com/' },
}

const yaml = (v) => JSON.stringify(v)
const list = (items, indent = '  ') =>
  items.length ? '\n' + items.map((i) => `${indent}- ${i}`).join('\n') : ' []'

function frontmatter(n) {
  const faq = n.faq.map((f) => `  - q: ${yaml(f.q)}\n    a: ${yaml(f.a)}`).join('\n')
  const sources = (n.sources ?? [])
    .map((s) => {
      const parts = [`label: ${yaml(s.label)}`]
      if (s.url) parts.push(`url: ${yaml(s.url)}`)
      if (s.retrieved) parts.push(`retrieved: ${s.retrieved}`)
      return `  - { ${parts.join(', ')} }`
    })
    .join('\n')
  const links = (n.links ?? [])
    .map((l) => `  - { label: ${yaml(l.label)}, url: ${yaml(l.url)} }`)
    .join('\n')

  return `---
title: ${yaml(n.title)}
name: ${yaml(n.name)}
summary: ${yaml(n.summary)}
answer: >-
  ${n.answer.replace(/\s+/g, ' ').trim()}
date: 2026-08-19
updated: 2026-08-19${n.featured ? '\nfeatured: true' : ''}${n.sector ? `\nsector: ${yaml(n.sector)}` : ''}${
    n.bounds ? `\nbounds: ${yaml(n.bounds)}` : ''
  }
tags: [${n.tags.join(', ')}]
housing:${list((n.housing ?? []).map(yaml), '  ')}
stats:${list((n.stats ?? []).map(yaml), '  ')}${
    n.geo ? `\ngeo: { lat: ${n.geo.lat}, lng: ${n.geo.lng} }` : ''
  }
links:
${links}
faq:
${faq}
sources:
${sources}
---`
}

function opening(n) {
  const rows = []
  const add = (k, v) => v && rows.push(`{ k: ${yaml(k)}, v: ${yaml(v)} }`)
  add('City', n.cityName)
  if (n.sector) add('Sector', n.sector)
  if (n.bounds) add('Bounded by', n.bounds)
  if (n.housing?.length) add('Built', n.housing[0])
  if (n.transit) add('Transit', n.transit)
  if (n.parks) add('Open space', n.parks)

  const table = rows.length ? `\n\n<FactTable rows={[\n  ${rows.join(',\n  ')},\n]} />` : ''
  return `${n.lede}${table}`
}

function closing(n) {
  return `## Who ${n.name} suits

${n.suits}

## What to check before you offer

${n.check}

Prices here move with the wider market rather than independently of it. The
Denver metro single-family median was $650,000 in June 2026, with condos and
townhomes at $395,000 — useful as a baseline, but a neighborhood this specific
deserves a look at genuinely comparable sales rather than a city average. The
[property tax](${SRC.dpt.url}) picture follows the same statewide formula
everywhere: assessment rate against actual value, multiplied by the local mill
levy.`
}

export function renderHood(n) {
  const body = [opening(n), n.sections.trim(), closing(n)].join('\n\n')
  return `${frontmatter(n)}\n\n${body}\n`
}
