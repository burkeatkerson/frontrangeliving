#!/usr/bin/env node
/**
 * Renders the city anchor guides into content/places/<region>/.
 *
 *   node scripts/build-city-guides.mjs
 *
 * Guides are generated rather than hand-written as MDX so the parts that must
 * be consistent across sixty-odd pages — the fact table, the corridor map, the
 * citation block, the property-tax explainer — stay consistent. The prose for
 * each city is still written individually; only the scaffolding is shared.
 *
 * Regenerating overwrites the files it owns. Edit the data in scripts/cities/
 * and re-run, rather than editing the generated MDX.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { renderCity } from './cities/_template.mjs'
import { northern } from './cities/northern.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const PLACES = path.join(ROOT, 'content', 'places')

const registries = [northern]

/** Optional region files — added as each is written. */
for (const name of ['boulder', 'north-metro', 'denver-jeffco', 'south-metro', 'springs-pueblo']) {
  const file = path.join(ROOT, 'scripts', 'cities', `${name}.mjs`)
  if (!fs.existsSync(file)) continue
  const mod = await import(`./cities/${name}.mjs`)
  registries.push(Object.values(mod)[0])
}

const cities = registries.flat()

// Guard against two cities claiming the same URL.
const seen = new Map()
for (const c of cities) {
  if (seen.has(c.slug)) throw new Error(`Duplicate slug: ${c.slug}`)
  seen.set(c.slug, c)
}

/**
 * A city anchor supersedes any earlier hand-written guide with the same slug,
 * including one filed under a different region folder. Velite keys on the
 * filename, so leaving both would collide on the URL.
 */
const walk = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const full = path.join(dir, e.name)
        return e.isDirectory() ? walk(full) : full.endsWith('.mdx') ? [full] : []
      })
    : []

for (const file of walk(PLACES)) {
  const slug = path.basename(file, '.mdx')
  const city = seen.get(slug)
  if (!city) continue
  const expected = path.join(PLACES, city.region, `${slug}.mdx`)
  if (path.resolve(file) !== path.resolve(expected)) {
    fs.rmSync(file)
    console.log(`  superseded ${path.relative(ROOT, file)}`)
  }
}

let written = 0
for (const city of cities) {
  const dir = path.join(PLACES, city.region)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, `${city.slug}.mdx`), renderCity(city), 'utf8')
  written++
}

const byRegion = cities.reduce((acc, c) => {
  acc[c.region] = (acc[c.region] ?? 0) + 1
  return acc
}, {})

console.log(`Wrote ${written} city guides:`)
for (const [region, n] of Object.entries(byRegion).sort()) {
  console.log(`  ${region.padEnd(20)} ${n}`)
}
