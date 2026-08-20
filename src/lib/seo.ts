import type { Metadata } from 'next'
import type {
  Article,
  BreadcrumbList,
  FAQPage,
  Graph,
  Organization,
  Place as SchemaPlace,
  Thing,
  WebPage,
  WebSite,
} from 'schema-dts'

import { site, absoluteUrl } from './site'
import type { Doc } from './content'
import { getAuthors, getPlace } from './content'

// ---------------------------------------------------------------- metadata

interface MetaInput {
  title: string
  description: string
  /** Site-relative path, e.g. `/answers/is-boulder-worth-it`. */
  path: string
  published?: string
  modified?: string
  type?: 'website' | 'article'
  noindex?: boolean
  tags?: readonly string[]
  authors?: readonly string[]
}

export function buildMetadata({
  title,
  description,
  path,
  published,
  modified,
  type = 'website',
  noindex = false,
  tags,
  authors,
}: MetaInput): Metadata {
  const url = absoluteUrl(path)
  return {
    title,
    description,
    alternates: {
      canonical: url,
      types: { 'application/rss+xml': absoluteUrl('/feed.xml') },
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type,
      url,
      siteName: site.name,
      title,
      description,
      locale: site.locale.replace('-', '_'),
      ...(type === 'article'
        ? {
            publishedTime: published,
            modifiedTime: modified ?? published,
            tags: tags ? [...tags] : undefined,
            authors: authors ? [...authors] : undefined,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: site.social.twitter,
      title,
      description,
    },
  }
}

/** Metadata for a content document, honouring its per-page SEO overrides. */
export function docMetadata(doc: Doc): Metadata {
  const heading = doc.type === 'answer' ? doc.question : doc.title
  return buildMetadata({
    title: doc.seoTitle ?? heading,
    description: doc.seoDescription ?? doc.answer ?? doc.summary,
    path: doc.url,
    published: doc.date,
    modified: doc.updated ?? doc.date,
    type: doc.type === 'page' ? 'website' : 'article',
    noindex: doc.noindex,
    tags: doc.tags,
    authors: getAuthors(doc.authors).map((a) => a.name),
  })
}

// ---------------------------------------------------------------- JSON-LD

const ORG_ID = absoluteUrl('/#organization')
const SITE_ID = absoluteUrl('/#website')

/**
 * The publisher node. `RealEstateAgent` rather than plain `Organization`
 * because the entity genuinely is one — that specificity is what lets an
 * answer engine attribute local real-estate claims to a licensed source.
 */
export const organizationNode: Organization = {
  '@type': 'RealEstateAgent',
  '@id': ORG_ID,
  name: site.name,
  url: site.url,
  description: site.description,
  foundingDate: site.founded,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: site.coverage.map((c) => ({
    '@type': 'City' as const,
    name: c,
    address: { '@type': 'PostalAddress' as const, addressRegion: 'CO', addressCountry: 'US' },
  })),
  knowsAbout: [
    'Front Range real estate',
    'Denver neighborhoods',
    'Boulder County housing',
    'Colorado short-term rental regulation',
  ],
} as Organization

export const websiteNode: WebSite = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: site.lang,
  publisher: { '@id': ORG_ID },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: absoluteUrl('/search/?q={search_term_string}'),
    },
    // `query-input` is required by Google and absent from the schema-dts types.
    'query-input': 'required name=search_term_string',
  },
} as WebSite

export interface Crumb {
  name: string
  path: string
}

export function breadcrumbNode(crumbs: readonly Crumb[]): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    '@id': absoluteUrl(crumbs[crumbs.length - 1]!.path) + '#breadcrumb',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  }
}

function faqNode(doc: Doc): FAQPage | null {
  if (!doc.faq.length) return null
  return {
    '@type': 'FAQPage',
    '@id': absoluteUrl(doc.url) + '#faq',
    mainEntity: doc.faq.map((f) => ({
      '@type': 'Question' as const,
      name: f.q,
      acceptedAnswer: { '@type': 'Answer' as const, text: f.a },
    })),
  }
}

/**
 * The real-world entity a place guide is about.
 *
 * City anchors emit `City` rather than the generic `Place`, with population,
 * elevation and containment. That specificity is the whole point: it lets an
 * answer engine resolve "how high is Woodland Park" or "what county is Erie
 * in" from this page and attribute the figure to it.
 */
function placeNode(doc: Extract<Doc, { type: 'place' }>): SchemaPlace {
  const civic = doc.civic
  return {
    '@type': doc.kind === 'city' ? 'City' : 'Place',
    '@id': absoluteUrl(doc.url) + '#place',
    name: doc.name,
    description: doc.answer ?? doc.summary,
    address: {
      '@type': 'PostalAddress',
      addressLocality: doc.name,
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    // `elevation` is a real Place property; population is not, so it goes in
    // additionalProperty as a typed PropertyValue rather than being invented.
    ...(civic?.elevation ? { elevation: `${civic.elevation} ft` } : {}),
    ...(civic?.population
      ? {
          additionalProperty: {
            '@type': 'PropertyValue' as const,
            name: 'population',
            value: civic.population,
            observationDate: String(civic.populationYear),
          },
        }
      : {}),
    ...(doc.county
      ? {
          containedInPlace: {
            '@type': 'AdministrativeArea' as const,
            name: doc.county,
            containedInPlace: { '@type': 'State' as const, name: 'Colorado' },
          },
        }
      : {}),
    ...(doc.geo
      ? {
          geo: {
            '@type': 'GeoCoordinates' as const,
            latitude: doc.geo.lat,
            longitude: doc.geo.lng,
          },
        }
      : {}),
  } as SchemaPlace
}

/**
 * A neighborhood as a real-world entity.
 *
 * Emitted so an answer engine asked "what are the boundaries of Baker in
 * Denver" or "which city is Olde Town Arvada in" can resolve it from this page
 * and attribute the answer. `containedInPlace` carries the parent city.
 */
function neighborhoodNode(doc: Extract<Doc, { type: 'neighborhood' }>): SchemaPlace {
  return {
    '@type': 'Place',
    '@id': absoluteUrl(doc.url) + '#place',
    name: doc.name,
    description: doc.answer ?? doc.summary,
    ...(doc.bounds
      ? {
          additionalProperty: {
            '@type': 'PropertyValue' as const,
            name: 'boundaries',
            value: doc.bounds,
          },
        }
      : {}),
    containedInPlace: {
      '@type': 'City' as const,
      // Resolve the parent city's display name from its own guide.
      name: getPlace(doc.city)?.name ?? doc.city,
      address: {
        '@type': 'PostalAddress' as const,
        addressRegion: 'CO',
        addressCountry: 'US',
      },
    },
    ...(doc.geo
      ? {
          geo: {
            '@type': 'GeoCoordinates' as const,
            latitude: doc.geo.lat,
            longitude: doc.geo.lng,
          },
        }
      : {}),
  } as SchemaPlace
}

/**
 * The page graph for a content document.
 *
 * Three things here are specifically for answer engines rather than for
 * classic search: `speakable` points at the standalone answer paragraph,
 * `about`/`mentions` name the real-world entities the page covers, and
 * `citation` exposes the sources the claims came from.
 */
export function docGraph(doc: Doc, crumbs: readonly Crumb[]): Graph {
  const url = absoluteUrl(doc.url)
  const authors = getAuthors(doc.authors)
  const heading = doc.type === 'answer' ? doc.question : doc.title

  const article: Article = {
    '@type': doc.type === 'page' ? 'WebPage' : 'Article',
    '@id': `${url}#article`,
    isPartOf: { '@id': SITE_ID },
    url,
    headline: heading,
    name: heading,
    description: doc.answer ?? doc.summary,
    abstract: doc.answer ?? doc.summary,
    datePublished: doc.date,
    dateModified: doc.updated ?? doc.date,
    inLanguage: site.lang,
    isAccessibleForFree: true,
    wordCount: doc.metadata.wordCount,
    keywords: doc.tags.join(', '),
    publisher: { '@id': ORG_ID },
    author: authors.length
      ? authors.map((a) => ({
          '@type': 'Person' as const,
          '@id': absoluteUrl(a.url),
          name: a.name,
          ...(a.role ? { jobTitle: a.role } : {}),
        }))
      : { '@id': ORG_ID },
    breadcrumb: { '@id': `${absoluteUrl(crumbs[crumbs.length - 1]!.path)}#breadcrumb` },
    // The 40-60 word standalone answer, marked for voice and AI extraction.
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-speakable]'],
    },
    ...(doc.sources.length
      ? {
          citation: doc.sources.map((s) =>
            s.url
              ? ({ '@type': 'CreativeWork' as const, name: s.label, url: s.url } as Thing)
              : s.label
          ),
        }
      : {}),
    ...(doc.type === 'place' || doc.type === 'neighborhood'
      ? { about: { '@id': `${url}#place` } }
      : {}),
  } as Article

  const nodes: Thing[] = [organizationNode as Thing, websiteNode as Thing, article as Thing]
  nodes.push(breadcrumbNode(crumbs) as Thing)

  const faq = faqNode(doc)
  if (faq) nodes.push(faq as Thing)
  if (doc.type === 'place') nodes.push(placeNode(doc) as Thing)
  if (doc.type === 'neighborhood') nodes.push(neighborhoodNode(doc) as Thing)

  return { '@context': 'https://schema.org', '@graph': nodes } as Graph
}

/** The site-level graph, emitted once from the root layout. */
export function siteGraph(): Graph {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationNode as Thing, websiteNode as Thing],
  } as Graph
}

/** A collection/listing page graph. */
export function listingGraph(opts: {
  name: string
  description: string
  path: string
  crumbs: readonly Crumb[]
  items?: readonly { heading: string; url: string }[]
}): Graph {
  const url = absoluteUrl(opts.path)
  const page: WebPage = {
    '@type': 'CollectionPage',
    '@id': `${url}#page`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': SITE_ID },
    inLanguage: site.lang,
    breadcrumb: { '@id': `${absoluteUrl(opts.crumbs[opts.crumbs.length - 1]!.path)}#breadcrumb` },
    ...(opts.items?.length
      ? {
          mainEntity: {
            '@type': 'ItemList' as const,
            itemListElement: opts.items.map((it, i) => ({
              '@type': 'ListItem' as const,
              position: i + 1,
              name: it.heading,
              url: absoluteUrl(it.url),
            })),
          },
        }
      : {}),
  } as WebPage

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode as Thing,
      websiteNode as Thing,
      page as Thing,
      breadcrumbNode(opts.crumbs) as Thing,
    ],
  } as Graph
}
