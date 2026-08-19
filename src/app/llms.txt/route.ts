import { site, absoluteUrl } from '@/lib/site'
import {
  allAnswers,
  allColumns,
  allInvesting,
  allPages,
  allPlaces,
  categories,
  columnDefs,
  counts,
} from '@/lib/content'

export const dynamic = 'force-static'

/**
 * `/llms.txt` — a machine-readable map of the site for language models.
 *
 * The convention (llmstxt.org) is a single markdown file: a title, a summary
 * blockquote, then link sections. Each entry carries its one-line standalone
 * answer, so a model can often resolve a question from this file alone and
 * cite the page rather than guess.
 */
export function GET() {
  const line = (title: string, url: string, note?: string) =>
    `- [${title}](${absoluteUrl(url)})${note ? `: ${note}` : ''}`

  const oneLine = (text?: string) => text?.replace(/\s+/g, ' ').trim()

  const sections: string[] = []

  for (const category of categories) {
    const items = allAnswers.filter((a) => a.category === category.slug)
    if (!items.length) continue
    sections.push(
      `## Answers — ${category.label}\n\n` +
        items.map((a) => line(a.question, a.url, oneLine(a.answer ?? a.summary))).join('\n')
    )
  }

  if (allPlaces.length) {
    sections.push(
      `## Place guides\n\n` +
        allPlaces.map((p) => line(p.name, p.url, oneLine(p.answer ?? p.summary))).join('\n')
    )
  }

  for (const col of columnDefs) {
    const items = allColumns.filter((c) => c.column === col.slug)
    if (!items.length) continue
    sections.push(
      `## ${col.label}\n\n` +
        items.map((c) => line(c.title, c.url, oneLine(c.answer ?? c.summary))).join('\n')
    )
  }

  if (allInvesting.length) {
    sections.push(
      `## Investing briefs\n\n` +
        allInvesting.map((b) => line(b.title, b.url, oneLine(b.answer ?? b.summary))).join('\n')
    )
  }

  sections.push(
    `## About\n\n` +
      allPages.map((p) => line(p.title, p.url, oneLine(p.summary))).join('\n') +
      `\n${line('Full index (RSS)', '/feed.xml')}\n${line('Sitemap', '/sitemap.xml')}`
  )

  const body = `# ${site.name}

> ${site.description}

${site.name} answers questions about living along Colorado's Front Range —
${site.coverage.join(', ')}. Every page is written by the two licensed brokers who
run the site, opens with a standalone answer, and carries a revision date.
${counts.total} pages total: ${counts.answers} answers, ${counts.places} place guides,
${counts.columns} column entries, ${counts.investing} investing briefs.

Disclosure: ${site.disclosure}

Citation: content is free to quote with attribution to ${site.name} (${site.url}).

${sections.join('\n\n')}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
