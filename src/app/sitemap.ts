import type { MetadataRoute } from 'next'
import { site, absoluteUrl } from '@/lib/site'
import { allDocs, allAnswers, allTags, categories, columnDefs, lanes, regions } from '@/lib/content'
import { paginate } from '@/lib/utils'

// Emitted as a static file by `output: 'export'`.
export const dynamic = 'force-static'

/**
 * A single sitemap covers up to 50,000 URLs, which is well beyond where this
 * library is headed. If it ever gets close, switch to `generateSitemaps()` and
 * chunk by collection — the URL sources below are already grouped for it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const answerPages = paginate(allAnswers, site.pageSize)

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'daily', priority: 1 },
    { url: absoluteUrl('/answers'), changeFrequency: 'daily', priority: 0.9 },
    { url: absoluteUrl('/places'), changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/columns'), changeFrequency: 'weekly', priority: 0.7 },
    { url: absoluteUrl('/investing'), changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/topics'), changeFrequency: 'weekly', priority: 0.5 },
  ]

  const indexRoutes: MetadataRoute.Sitemap = [
    ...answerPages.slice(1).map((_, i) => ({
      url: absoluteUrl(`/answers/page/${i + 2}`),
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    })),
    ...categories.map((c) => ({
      url: absoluteUrl(`/categories/${c.slug}`),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...lanes.map((l) => ({
      url: absoluteUrl(`/lanes/${l.slug}`),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...columnDefs.map((c) => ({
      url: absoluteUrl(`/columns/${c.slug}`),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...regions.map((r) => ({
      url: absoluteUrl(`/places/region/${r.slug}`),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...allTags.map((t) => ({
      url: absoluteUrl(`/topics/${t.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
  ]

  const docRoutes: MetadataRoute.Sitemap = allDocs
    .filter((doc) => !doc.noindex)
    .map((doc) => ({
      url: absoluteUrl(doc.url),
      lastModified: new Date(doc.updated ?? doc.date),
      changeFrequency: 'monthly',
      // Answers and place guides are the pages we actually want ranked.
      priority: doc.featured ? 0.9 : doc.type === 'answer' || doc.type === 'place' ? 0.7 : 0.6,
    }))

  return [...staticRoutes, ...indexRoutes, ...docRoutes]
}
