#!/usr/bin/env node
/**
 * Renders neighborhood guides into content/neighborhoods/<city>/.
 *
 *   node scripts/build-hood-guides.mjs
 *
 * Same arrangement as the city guides: the data files in scripts/hoods/ hold
 * per-neighborhood facts and prose, and the shared template owns the
 * scaffolding. Edit the data and re-run; do not edit the generated MDX.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { renderHood } from './hoods/_template.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'content', 'neighborhoods')

// Every data file in scripts/hoods/ except the shared template.
const dir = path.join(ROOT, 'scripts', 'hoods')
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.mjs') && !f.startsWith('_'))
  .sort()

const hoods = []
for (const file of files) {
  const mod = await import(`./hoods/${file}`)
  for (const group of Object.values(mod)) {
    if (Array.isArray(group)) hoods.push(...group)
  }
}

const seen = new Set()
let written = 0
const byCity = {}

for (const hood of hoods) {
  const key = `${hood.city}/${hood.slug}`
  if (seen.has(key)) throw new Error(`Duplicate neighborhood: ${key}`)
  seen.add(key)

  const cityDir = path.join(OUT, hood.city)
  fs.mkdirSync(cityDir, { recursive: true })
  fs.writeFileSync(path.join(cityDir, `${hood.slug}.mdx`), renderHood(hood), 'utf8')
  written++
  byCity[hood.city] = (byCity[hood.city] ?? 0) + 1
}

console.log(`Wrote ${written} neighborhood guides:`)
for (const [city, n] of Object.entries(byCity).sort()) {
  console.log(`  ${city.padEnd(20)} ${n}`)
}
