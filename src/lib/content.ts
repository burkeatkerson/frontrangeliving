import {
  answers as rawAnswers,
  places as rawPlaces,
  columns as rawColumns,
  investing as rawInvesting,
  pages as rawPages,
  authors as rawAuthors,
  taxonomy,
  type Answer,
  type Place,
  type ColumnEntry,
  type InvestingBrief,
  type Page,
  type Author,
} from '#content'

export type { Answer, Place, ColumnEntry, InvestingBrief, Page, Author }
export { taxonomy }

/** Any document that gets its own page, feed entry and sitemap row. */
export type Doc = Answer | Place | ColumnEntry | InvestingBrief | Page

/**
 * Listing pages only ever need these fields. Passing full documents (which
 * carry a compiled MDX function body) into list components would balloon the
 * RSC payload once the library reaches the hundreds, so lists take summaries.
 */
export interface DocSummary {
  type: Doc['type']
  title: string
  /** The question form for answers; the title for everything else. */
  heading: string
  summary: string
  url: string
  slug: string
  date: string
  updated?: string
  tags: string[]
  featured: boolean
  readingTime: number
  category?: string
  /** Small right-aligned meta string used in list rows. */
  meta?: string
}

const publish = <T extends { draft: boolean }>(docs: readonly T[]): T[] =>
  process.env.NODE_ENV === 'development' ? [...docs] : docs.filter((d) => !d.draft)

const byNewest = (a: { date: string }, b: { date: string }) => (a.date < b.date ? 1 : -1)

// --- collections, published + sorted once at module load ---------------------

export const allAnswers: Answer[] = publish(rawAnswers).sort(byNewest)
export const allPlaces: Place[] = publish(rawPlaces).sort((a, b) => a.name.localeCompare(b.name))
export const allColumns: ColumnEntry[] = publish(rawColumns).sort(byNewest)
export const allInvesting: InvestingBrief[] = publish(rawInvesting).sort(byNewest)
export const allPages: Page[] = publish(rawPages).sort(byNewest)
export const allAuthors: Author[] = [...rawAuthors]

/** Everything with a URL, for the sitemap, the feed and search. */
export const allDocs: Doc[] = [
  ...allAnswers,
  ...allPlaces,
  ...allColumns,
  ...allInvesting,
  ...allPages,
]

// --- lookup maps -------------------------------------------------------------

const index = <T extends { slug?: string; id?: string }>(docs: readonly T[], key: 'slug' | 'id') =>
  new Map(docs.map((d) => [d[key] as string, d]))

const answerBySlug = index(allAnswers, 'slug')
const placeBySlug = index(allPlaces, 'slug')
const columnBySlug = index(allColumns, 'slug')
const investingBySlug = index(allInvesting, 'slug')
const pageBySlug = index(allPages, 'slug')
const authorById = index(allAuthors, 'id')

export const getAnswer = (slug: string) => answerBySlug.get(slug)
export const getPlace = (slug: string) => placeBySlug.get(slug)
export const getColumnEntry = (slug: string) => columnBySlug.get(slug)
export const getInvestingBrief = (slug: string) => investingBySlug.get(slug)
export const getPage = (slug: string) => pageBySlug.get(slug)
export const getAuthor = (id: string) => authorById.get(id)
export const getAuthors = (ids: readonly string[]) =>
  ids.map((id) => authorById.get(id)).filter((a): a is Author => Boolean(a))

// --- summaries ---------------------------------------------------------------

export function toSummary(doc: Doc): DocSummary {
  const heading = doc.type === 'answer' ? doc.question : doc.title
  const meta =
    doc.type === 'place'
      ? doc.county
      : doc.type === 'investing'
        ? doc.quarter
        : doc.type === 'answer'
          ? doc.category
          : undefined
  return {
    type: doc.type,
    title: doc.title,
    heading,
    summary: doc.summary,
    url: doc.url,
    slug: doc.slug,
    date: doc.date,
    updated: doc.updated,
    tags: doc.tags,
    featured: doc.featured,
    readingTime: doc.metadata.readingTime,
    category: 'category' in doc ? doc.category : undefined,
    meta,
  }
}

export const summarize = (docs: readonly Doc[]): DocSummary[] => docs.map(toSummary)

// --- taxonomy helpers --------------------------------------------------------

export const categories = taxonomy.categories
export const lanes = taxonomy.lanes
export const columnDefs = taxonomy.columns
export const regions = taxonomy.regions

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)
export const getLane = (slug: string) => lanes.find((l) => l.slug === slug)
export const getColumnDef = (slug: string) => columnDefs.find((c) => c.slug === slug)
export const getRegion = (slug: string) => regions.find((r) => r.slug === slug)

/** Answers grouped by library category, in taxonomy order. */
export const answersByCategory = (): { slug: string; label: string; items: Answer[] }[] =>
  categories
    .map((c) => ({
      slug: c.slug,
      label: c.label,
      items: allAnswers.filter((a) => a.category === c.slug),
    }))
    .filter((g) => g.items.length > 0)

export const answersInLane = (lane: string) => allAnswers.filter((a) => a.lanes.includes(lane))
export const entriesInColumn = (column: string) => allColumns.filter((c) => c.column === column)
export const placesInRegion = (region: string) => allPlaces.filter((p) => p.region === region)

// --- tags --------------------------------------------------------------------

export interface TagRef {
  slug: string
  label: string
  count: number
}

/** Every tag across every collection, most-used first. Built once. */
export const allTags: TagRef[] = (() => {
  const counts = new Map<string, number>()
  for (const doc of allDocs) {
    for (const tag of doc.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  }
  return [...counts.entries()]
    .map(([slug, count]) => ({ slug, label: slug.replace(/-/g, ' '), count }))
    .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug))
})()

export const docsWithTag = (tag: string) => allDocs.filter((d) => d.tags.includes(tag))

// --- relationships -----------------------------------------------------------

/**
 * Related documents for the "keep reading" rail: shared tags first, then same
 * category, scored so the strongest overlap wins. Linear over the corpus, which
 * stays cheap because it runs at build time only.
 */
export function relatedTo(doc: Doc, limit = 4): DocSummary[] {
  const tags = new Set(doc.tags)
  const category = 'category' in doc ? doc.category : undefined

  return allDocs
    .filter((d) => d.url !== doc.url && !d.noindex)
    .map((d) => {
      let score = d.tags.reduce((n, t) => n + (tags.has(t) ? 2 : 0), 0)
      if (category && 'category' in d && d.category === category) score += 1
      if (d.featured) score += 0.5
      return { doc: d, score }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || (a.doc.date < b.doc.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => toSummary(x.doc))
}

/** Answers that recommend a given place, for the place page's "asked about" rail. */
export const answersMentioning = (placeSlug: string) =>
  allAnswers.filter((a) => a.places.some((p) => p.place === placeSlug))

/** Column entries tied to a place. */
export const columnEntriesForPlace = (placeSlug: string) =>
  allColumns.filter((c) => c.place === placeSlug)

// --- counts ------------------------------------------------------------------

export const counts = {
  answers: allAnswers.length,
  places: allPlaces.length,
  columns: allColumns.length,
  investing: allInvesting.length,
  total: allDocs.length,
} as const
