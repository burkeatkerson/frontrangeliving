import { site, absoluteUrl } from '@/lib/site'
import { allDocs } from '@/lib/content'

export const dynamic = 'force-static'

const escape = (input: string) =>
  input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Newest 100 documents across every collection. */
export function GET() {
  const items = [...allDocs]
    .filter((d) => !d.noindex)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 100)

  const updated = items[0]?.updated ?? items[0]?.date ?? new Date(0).toISOString()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${site.url}</link>
    <description>${escape(site.description)}</description>
    <language>${site.locale}</language>
    <lastBuildDate>${new Date(updated).toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl('/feed.xml')}" rel="self" type="application/rss+xml" />
${items
  .map((doc) => {
    const heading = doc.type === 'answer' ? doc.question : doc.title
    const url = absoluteUrl(doc.url)
    return `    <item>
      <title>${escape(heading)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(doc.date).toUTCString()}</pubDate>
      <description>${escape(doc.answer ?? doc.summary)}</description>
${doc.tags.map((t) => `      <category>${escape(t)}</category>`).join('\n')}
    </item>`
  })
  .join('\n')}
  </channel>
</rss>
`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
