#!/usr/bin/env node
/**
 * Generates throwaway content so the pipeline can be load-tested at the volume
 * this site is actually built for.
 *
 *   node scripts/seed-fixtures.mjs 600    # 600 answers + proportional others
 *   node scripts/seed-fixtures.mjs --clean
 *
 * Everything it writes is prefixed `fx-` and lives in `*-fixtures/` folders, so
 * `--clean` can remove all of it without touching real content. Never commit
 * the generated files.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT = path.join(ROOT, 'content')

const FIXTURE_DIRS = [
  path.join(CONTENT, 'answers', 'fixtures'),
  path.join(CONTENT, 'places', 'fixtures'),
  path.join(CONTENT, 'columns', 'taco-report', 'fixtures'),
  path.join(CONTENT, 'investing', 'fixtures'),
]

if (process.argv.includes('--clean')) {
  for (const dir of FIXTURE_DIRS) fs.rmSync(dir, { recursive: true, force: true })
  console.log('Removed all fixture content.')
  process.exit(0)
}

const total = Number(process.argv[2] ?? 600)
if (!Number.isInteger(total) || total < 1) {
  console.error('Usage: node scripts/seed-fixtures.mjs <count> | --clean')
  process.exit(1)
}

const CATEGORIES = ['moving-here', 'neighborhoods', 'eat', 'outside', 'with-kids', 'money']
const LANES = ['out-of-state', 'family', 'first-time', 'investor']
const REGIONS = ['denver', 'boulder-county', 'jeffco', 'northern-colorado', 'the-springs']
const TOWNS = [
  'Arvada',
  'Aurora',
  'Berthoud',
  'Broomfield',
  'Castle Rock',
  'Centennial',
  'Denver',
  'Erie',
  'Evergreen',
  'Firestone',
  'Fort Collins',
  'Golden',
  'Greeley',
  'Lafayette',
  'Lakewood',
  'Littleton',
  'Longmont',
  'Louisville',
  'Loveland',
  'Monument',
  'Morrison',
  'Northglenn',
  'Parker',
  'Superior',
  'Thornton',
  'Windsor',
]
const SUBJECTS = [
  'a yard',
  'a short commute',
  'good schools',
  'a walkable block',
  'a garage shop',
  'weeknight trails',
  'a taco truck',
  'a quiet street',
  'a basement that stays dry',
  'room for chickens',
  'a mountain view',
  'a real main street',
]

/** Deterministic pick so reruns produce identical output. */
const pick = (arr, i) => arr[i % arr.length]

const write = (file, body) => {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, body, 'utf8')
}

const isoDate = (i) => {
  const d = new Date(Date.UTC(2024, 0, 1))
  d.setUTCDate(d.getUTCDate() + (i % 900))
  return d.toISOString().slice(0, 10)
}

const paragraphs = (town, subject) => `Generated fixture copy for load testing the content
pipeline. It exists to make the build do the same amount of work it would do
with real writing, and it is never published.

## What ${town} is actually like

The honest version of the answer about ${subject}, at the length a real page
would run. Specific numbers, a street name, and the year the housing stock was
built would all live in this paragraph.

## What to check before you commit

A second section, so the table of contents has something to do and the reading
time lands somewhere realistic.

## The part nobody mentions

A third section, closing on the caveat that a real answer would carry.
`

let count = 0

for (let i = 0; i < total; i++) {
  const town = pick(TOWNS, i)
  const subject = pick(SUBJECTS, i * 7)
  const category = pick(CATEGORIES, i * 3)
  const question = `Where do I live near ${town} if I want ${subject}? (fixture ${i})`

  write(
    path.join(CONTENT, 'answers', 'fixtures', `fx-answer-${i}.mdx`),
    `---
title: "Living near ${town} with ${subject} — fixture ${i}"
question: ${JSON.stringify(question)}
summary: "Fixture summary ${i}. Generated content used only to load-test the build."
answer: "Fixture answer ${i}: ${town} is the short answer, because it pairs ${subject} with a commute most people can live with. Two neighbouring towns do most of the same job for less money."
date: ${isoDate(i)}
updated: ${isoDate(i + 30)}
category: ${category}
lanes: [${pick(LANES, i)}]
tags: [fixture, ${town.toLowerCase().replace(/\s+/g, '-')}, ${category}]
money: "Fixture money note ${i}."
places:
  - name: ${town}
    county: Fixture County
    why: "Fixture rationale ${i}, at roughly the length a real one runs."
    stats: ["yard - good", "commute - ${10 + (i % 40)} min", "median - $${400 + (i % 400)}K"]
faq:
  - q: "Is ${town} a good place to live?"
    a: "Fixture answer. Yes, with the caveats above."
---

${paragraphs(town, subject)}`
  )
  count++
}

// Proportional volume in the other collections, so listing pages, tag indexes
// and the sitemap are all exercised at scale too.
for (let i = 0; i < Math.ceil(total / 5); i++) {
  const town = pick(TOWNS, i)
  write(
    path.join(CONTENT, 'places', 'fixtures', `fx-place-${i}.mdx`),
    `---
title: "${town} fixture ${i} — a neighborhood guide"
name: "${town} fixture ${i}"
region: ${pick(REGIONS, i)}
county: Fixture County
summary: "Fixture place summary ${i}."
answer: "Fixture place answer ${i}. ${town} is a Front Range town used here only to load-test the build."
date: ${isoDate(i * 2)}
tags: [fixture, ${pick(REGIONS, i)}]
stats: ["median - $${400 + (i % 400)}K", "commute downtown - ${10 + (i % 40)} min"]
---

${paragraphs(town, 'a place guide')}`
  )
  count++
}

for (let i = 0; i < Math.ceil(total / 4); i++) {
  const town = pick(TOWNS, i)
  write(
    path.join(CONTENT, 'columns', 'taco-report', 'fixtures', `fx-column-${i}.mdx`),
    `---
title: "The window in ${town} — fixture ${i}"
column: taco-report
category: eat
summary: "Fixture column summary ${i}."
answer: "Fixture column answer ${i}. One window in ${town}, one order, one paragraph."
date: ${isoDate(i * 3)}
tags: [fixture, tacos]
---

${paragraphs(town, 'one taco window')}`
  )
  count++
}

for (let i = 0; i < Math.ceil(total / 10); i++) {
  const town = pick(TOWNS, i)
  write(
    path.join(CONTENT, 'investing', 'fixtures', `fx-brief-${i}.mdx`),
    `---
title: "${town} submarket brief — fixture ${i}"
kind: brief
submarket: "${town} fixture ${i}"
quarter: "2026 Q3"
summary: "Fixture investing summary ${i}."
answer: "Fixture investing answer ${i}. ${town} trades at a fixture yield with fixture vacancy."
date: ${isoDate(i * 5)}
category: money
lanes: [investor]
tags: [fixture, yield]
stats: ["gross yield - ${4 + (i % 5)}.${i % 10}%", "vacancy - ${3 + (i % 6)}.${i % 10}%"]
---

${paragraphs(town, 'an investment thesis')}`
  )
  count++
}

console.log(`Wrote ${count} fixture documents. Remove them with --clean.`)
