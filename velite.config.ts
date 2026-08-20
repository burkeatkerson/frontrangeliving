import { defineConfig, defineCollection, s } from 'velite'
import remarkGfm from 'remark-gfm'
import remarkSmartypantsRaw from 'remark-smartypants'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

/**
 * `remark-smartypants` is retext-based, so its `this` is a retext processor and
 * TypeScript will not accept it in an mdast plugin list. The runtime behaviour
 * is correct; only the declared processor type differs.
 */
const remarkSmartypants = remarkSmartypantsRaw as unknown as typeof remarkGfm

/**
 * Content pipeline for a large library (hundreds+ of documents).
 *
 * Every collection globs recursively, so authors can nest files however they
 * like -- `content/answers/moving/altitude.mdx` and `content/answers/2026/q1/x.mdx`
 * both work. The URL slug comes from the filename, not the folder path, so
 * files can be reorganised on disk without breaking links.
 */

/** Derive the public slug from the file path, with a frontmatter override. */
const slugFrom = (path: string, override?: string) =>
  override ??
  path
    .split('/')
    .pop()!
    .replace(/\.mdx?$/, '')

/** Fields shared by every document type. */
const base = {
  title: s.string().max(140),
  summary: s.string().max(400),
  date: s.isodate(),
  updated: s.isodate().optional(),
  draft: s.boolean().default(false),
  featured: s.boolean().default(false),
  cover: s.image().optional(),
  coverAlt: s.string().optional(),
  tags: s.array(s.string()).default([]),
  authors: s.array(s.string()).default(['frl']),
  /** Overrides the filename-derived slug. Rarely needed. */
  slug: s.string().optional(),
  /** Per-document SEO overrides. */
  seoTitle: s.string().max(70).optional(),
  seoDescription: s.string().max(180).optional(),
  noindex: s.boolean().default(false),
}

/** Answer Engine Optimisation fields -- what LLMs and rich results consume. */
const aeo = {
  /**
   * A complete, standalone answer in 40-60 words. This is what gets lifted
   * into featured snippets, `speakable` schema, and AI answer citations.
   */
  answer: s.string().max(700).optional(),
  faq: s.array(s.object({ q: s.string(), a: s.string() })).default([]),
  sources: s
    .array(
      s.object({
        label: s.string(),
        url: s.string().url().optional(),
        retrieved: s.isodate().optional(),
      })
    )
    .default([]),
}

/** Body fields: compiled MDX plus derived reading metadata and a TOC. */
const body = {
  body: s.mdx(),
  toc: s.toc(),
  metadata: s.metadata(),
  excerpt: s.excerpt({ length: 240 }),
}

const answers = defineCollection({
  name: 'Answer',
  pattern: 'answers/**/*.mdx',
  schema: s
    .object({
      ...base,
      ...aeo,
      ...body,
      path: s.path(),
      /** The literal question this page answers, phrased the way people ask it. */
      question: s.string().max(180),
      /** Library category, e.g. "Moving here", "Eat", "Outside". */
      category: s.string(),
      /** Audience lane, e.g. "out-of-state", "family", "first-time", "investor". */
      lanes: s.array(s.string()).default([]),
      /** Places this answer recommends, rendered as the ranked answer grid. */
      places: s
        .array(
          s.object({
            name: s.string(),
            county: s.string().optional(),
            why: s.string(),
            stats: s.array(s.string()).default([]),
            place: s.string().optional(), // slug of a place guide to link to
          })
        )
        .default([]),
      /** The disclosure paragraph that closes every answer. */
      money: s.string().optional(),
    })
    .transform((data) => ({
      ...data,
      type: 'answer' as const,
      slug: slugFrom(data.path, data.slug),
      url: `/answers/${slugFrom(data.path, data.slug)}`,
    })),
})

const places = defineCollection({
  name: 'Place',
  pattern: 'places/**/*.mdx',
  schema: s
    .object({
      ...base,
      ...aeo,
      ...body,
      path: s.path(),
      /** Town, neighborhood, or district name as locals say it. */
      name: s.string(),
      county: s.string().optional(),
      region: s.string(), // "Denver", "Boulder County", "Northern Colorado", ...
      /**
       * `city` marks a municipal anchor article — the definitive page for a
       * whole town. `neighborhood` is a district inside one. Anchors get the
       * civic facts block, the corridor map, and richer structured data.
       */
      kind: s.enum(['city', 'neighborhood']).default('neighborhood'),
      /** Quick-scan stat lines shown in the sidebar and in answer cards. */
      stats: s.array(s.string()).default([]),
      geo: s.object({ lat: s.number(), lng: s.number() }).optional(),
      /**
       * Civic facts for a municipal anchor. Every number here is rendered with
       * its source, and feeds the schema.org `City` node — so an answer engine
       * asked "how high is Loveland" gets a figure it can attribute.
       */
      civic: s
        .object({
          /** Omitted rather than estimated when no cited figure is available. */
          population: s.number().optional(),
          populationYear: s.number().default(2020),
          /** Feet above sea level, at the civic centre. */
          elevation: s.number().optional(),
          incorporated: s.number().optional(),
          /** True when the city is its county's seat. */
          countySeat: s.boolean().default(false),
          /** Land area in square miles. */
          area: s.number().optional(),
          schoolDistricts: s.array(s.string()).default([]),
          employers: s.array(s.string()).default([]),
          /** RTD rail/bus, Bustang, or future Colorado Connector service. */
          transit: s.array(s.string()).default([]),
          /** Driving minutes in normal midday traffic. */
          drive: s
            .object({
              denver: s.number().optional(),
              boulder: s.number().optional(),
              dia: s.number().optional(),
              springs: s.number().optional(),
            })
            .optional(),
          /** Median sale price, with the source that produced it. */
          median: s.number().optional(),
          medianBasis: s.string().optional(),
        })
        .optional(),
      /** Outbound authoritative links: city hall, school district, data sources. */
      links: s
        .array(s.object({ label: s.string(), url: s.string().url(), note: s.string().optional() }))
        .default([]),
    })
    .transform((data) => ({
      ...data,
      type: 'place' as const,
      slug: slugFrom(data.path, data.slug),
      url: `/places/${slugFrom(data.path, data.slug)}`,
    })),
})

/**
 * Neighborhood guides, namespaced by their parent city.
 *
 * The folder is the city slug — `neighborhoods/denver/highland.mdx` — which
 * gives every document a `/neighborhoods/<city>/<slug>` URL. Namespacing by
 * city is not cosmetic: "Old Town", "Downtown" and "Highlands" all exist in
 * several Front Range cities, and a flat slug space would collide.
 */
const neighborhoods = defineCollection({
  name: 'Neighborhood',
  pattern: 'neighborhoods/**/*.mdx',
  schema: s
    .object({
      ...base,
      ...aeo,
      path: s.path(),
      body: s.mdx(),
      toc: s.toc(),
      metadata: s.metadata(),
      excerpt: s.excerpt({ length: 240 }),
      /** Neighborhood name as locals say it. */
      name: s.string(),
      /** Parent city slug. Must match a `kind: city` place guide. */
      city: s.string().optional(),
      /** Denver's official sector, or an equivalent local grouping. */
      sector: s.string().optional(),
      /** Rough boundaries, written the way people give directions. */
      bounds: s.string().optional(),
      /** Dominant housing eras and types, e.g. "1900-1930 brick bungalow". */
      housing: s.array(s.string()).default([]),
      /** Quick-scan stat lines. */
      stats: s.array(s.string()).default([]),
      geo: s.object({ lat: s.number(), lng: s.number() }).optional(),
      /** Outbound authoritative links: registered neighborhood orgs, parks, districts. */
      links: s
        .array(s.object({ label: s.string(), url: s.string().url(), note: s.string().optional() }))
        .default([]),
    })
    .transform((data) => {
      const parts = data.path.split('/')
      // `neighborhoods/<city>/<file>.mdx` -> city comes from the folder.
      const city = data.city ?? parts[parts.length - 2] ?? 'denver'
      const slug = slugFrom(data.path, data.slug)
      return {
        ...data,
        city,
        type: 'neighborhood' as const,
        slug,
        url: `/neighborhoods/${city}/${slug}`,
      }
    }),
})

const columns = defineCollection({
  name: 'ColumnEntry',
  pattern: 'columns/**/*.mdx',
  schema: s
    .object({
      ...base,
      ...aeo,
      ...body,
      path: s.path(),
      /** Standing column: taco-report, ten-minutes-to-dirt, after-dark, saturday-with-kids. */
      column: s.string(),
      place: s.string().optional(), // slug of the related place guide
    })
    .transform((data) => ({
      ...data,
      type: 'column' as const,
      slug: slugFrom(data.path, data.slug),
      url: `/columns/${data.column}/${slugFrom(data.path, data.slug)}`,
    })),
})

const investing = defineCollection({
  name: 'InvestingBrief',
  pattern: 'investing/**/*.mdx',
  schema: s
    .object({
      ...base,
      ...aeo,
      ...body,
      path: s.path(),
      kind: s.enum(['brief', 'rules', 'math', 'ground-notes']).default('brief'),
      submarket: s.string().optional(),
      quarter: s.string().optional(), // "2026 Q3"
      stats: s.array(s.string()).default([]),
    })
    .transform((data) => ({
      ...data,
      type: 'investing' as const,
      slug: slugFrom(data.path, data.slug),
      url: `/investing/${slugFrom(data.path, data.slug)}`,
    })),
})

const pages = defineCollection({
  name: 'Page',
  pattern: 'pages/**/*.mdx',
  schema: s.object({ ...base, ...aeo, ...body, path: s.path() }).transform((data) => ({
    ...data,
    type: 'page' as const,
    slug: slugFrom(data.path, data.slug),
    url: `/${slugFrom(data.path, data.slug)}`,
  })),
})

const authors = defineCollection({
  name: 'Author',
  pattern: 'authors/**/*.mdx',
  schema: s
    .object({
      id: s.string(),
      name: s.string(),
      role: s.string().optional(),
      bio: s.markdown().optional(),
      avatar: s.image().optional(),
      license: s.string().optional(), // real estate license number, shown on bylines
      links: s.array(s.object({ label: s.string(), url: s.string().url() })).default([]),
      path: s.path(),
    })
    .transform((data) => ({ ...data, url: `/about#${data.id}` })),
})

/** Site-wide editorial taxonomy, kept in one YAML file rather than in code. */
const taxonomy = defineCollection({
  name: 'Taxonomy',
  pattern: 'taxonomy.yml',
  single: true,
  schema: s.object({
    categories: s.array(
      s.object({ label: s.string(), slug: s.string(), blurb: s.string().optional() })
    ),
    lanes: s.array(
      s.object({
        slug: s.string(),
        label: s.string(),
        blurb: s.string(),
        accent: s.boolean().default(false),
      })
    ),
    columns: s.array(
      s.object({
        slug: s.string(),
        label: s.string(),
        blurb: s.string(),
        unit: s.string().default('entries'),
      })
    ),
    regions: s.array(s.object({ slug: s.string(), label: s.string() })),
  }),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:8].[ext]',
    clean: true,
  },
  collections: { answers, places, neighborhoods, columns, investing, pages, authors, taxonomy },
  mdx: {
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['heading-anchor'] } }],
      [
        rehypePrettyCode,
        { theme: { light: 'github-light', dark: 'github-dark' }, keepBackground: false },
      ],
    ],
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [],
  },
})
