/**
 * Single source of truth for anything that appears in metadata, structured
 * data, the feed, or the footer. Changing a value here changes it everywhere.
 */
export const site = {
  name: 'Front Range Living',
  shortName: 'FRL',
  /** No trailing slash. Override per-environment with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://frontrangeliving.com').replace(/\/$/, ''),
  tagline: 'Ask us anything about living along the Front Range.',
  description:
    'Straight answers about living along Colorado’s Front Range — Denver, Boulder, Golden, Longmont, Fort Collins and Colorado Springs. Neighborhoods, food, trails, and what things actually cost.',
  locale: 'en-US',
  lang: 'en',
  /** Regions we cover, used in metadata and the hero eyebrow. */
  coverage: ['Denver', 'Boulder', 'Golden', 'Longmont', 'Fort Collins', 'Colorado Springs'],
  founded: '2017',
  address: {
    locality: 'Arvada',
    region: 'CO',
    country: 'US',
  },
  contact: {
    email: 'hello@frontrangeliving.com',
  },
  social: {
    twitter: '@frontrangeliving',
  },
  /** Shown once per page, at the bottom, where it belongs. */
  disclosure:
    'We are licensed real estate brokers in Colorado. If you buy or sell with us, we get paid — that is what funds this site.',
  /** How many documents per listing page. */
  pageSize: 24,
} as const

export type Site = typeof site

/** Absolute URL builder. Every canonical, feed link and JSON-LD @id runs through this. */
export function absoluteUrl(pathname = '/'): string {
  if (/^https?:\/\//.test(pathname)) return pathname
  return `${site.url}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
}
