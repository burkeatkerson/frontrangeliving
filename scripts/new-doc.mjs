#!/usr/bin/env node
/**
 * Scaffolds a new content file with valid frontmatter.
 *
 *   npm run new -- answer "Where do I find a decent bagel?" --category eat
 *   npm run new -- place "Golden" --region jeffco
 *   npm run new -- column "Birria on Federal" --column taco-report
 *   npm run new -- investing "Loveland rent vs. carry" --kind math
 *   npm run new -- page "Press"
 *
 * The point is that every document starts life with the AEO fields present —
 * the standalone `answer`, the FAQ block, the sources list — because fields
 * that are not in the template do not get filled in later.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT = path.join(ROOT, 'content')

const TYPES = new Set(['answer', 'place', 'column', 'investing', 'page'])

const argv = process.argv.slice(2)
const type = argv[0]
const title = argv[1]

const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`)
  return i !== -1 && argv[i + 1] ? argv[i + 1] : fallback
}

if (!TYPES.has(type) || !title) {
  console.error(`Usage: npm run new -- <${[...TYPES].join('|')}> "Title" [--flags]

  --slug <slug>          override the generated filename
  --category <slug>      answers: library category (default: moving-here)
  --lane <slug>          answers: audience lane, repeatable via commas
  --region <slug>        places: region folder (default: denver)
  --county <name>        places: county name
  --column <slug>        columns: which standing column
  --kind <kind>          investing: brief | rules | math | ground-notes
  --draft                mark as draft (hidden from production builds)`)
  process.exit(1)
}

const slugify = (input) =>
  input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 70)

const slug = flag('slug', slugify(title))
const today = new Date().toISOString().slice(0, 10)
const draft = argv.includes('--draft')

const shared = (extra) => `---
title: ${JSON.stringify(title)}
summary: "One or two sentences. This is the meta description and the list-page blurb."
${extra}date: ${today}
draft: ${draft}
tags: []
answer: >-
  The complete answer in 40-60 words, written so it stands alone with no
  surrounding context. This is what a search engine lifts into a snippet and
  what an answer engine quotes, so lead with the conclusion, not the setup.
faq:
  - q: "A follow-up question, phrased the way somebody would type it."
    a: "A direct answer in one or two sentences."
sources: []
---

Open with the answer in plain language, then earn it.

## A subheading that is itself a question

Body copy. Keep paragraphs short and put the specific, checkable detail in —
the street, the number, the year the thing was built. Generic copy is what
every other site already has.
`

const templates = {
  answer: {
    dir: path.join('answers', flag('category', 'moving-here')),
    body: shared(`question: ${JSON.stringify(title)}
category: ${flag('category', 'moving-here')}
lanes: [${flag('lane', '').split(',').filter(Boolean).join(', ')}]
money: "The one-line commercial note that closes the answer."
places: []
`),
  },
  place: {
    dir: path.join('places', flag('region', 'denver')),
    body: shared(`name: ${JSON.stringify(title)}
region: ${flag('region', 'denver')}
county: ${JSON.stringify(flag('county', 'Denver'))}
stats:
  - "median - $000K"
  - "commute downtown - 00 min"
`),
  },
  column: {
    dir: path.join('columns', flag('column', 'taco-report')),
    body: shared(`column: ${flag('column', 'taco-report')}
category: eat
`),
  },
  investing: {
    dir: path.join('investing', flag('kind', 'brief') === 'rules' ? 'rules' : 'submarkets'),
    body: shared(`kind: ${flag('kind', 'brief')}
category: money
lanes: [investor]
submarket: ""
quarter: "${new Date().getFullYear()} Q${Math.floor(new Date().getMonth() / 3) + 1}"
stats: []
`),
  },
  page: {
    dir: 'pages',
    body: shared(''),
  },
}

const { dir, body } = templates[type]
const target = path.join(CONTENT, dir, `${slug}.mdx`)

if (fs.existsSync(target)) {
  console.error(`Refusing to overwrite existing file: ${path.relative(ROOT, target)}`)
  process.exit(1)
}

fs.mkdirSync(path.dirname(target), { recursive: true })
fs.writeFileSync(target, body, 'utf8')

console.log(`Created ${path.relative(ROOT, target)}`)
console.log('Run `npm run dev` and it will appear without a restart.')
