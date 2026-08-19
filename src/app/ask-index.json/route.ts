import { allAnswers } from '@/lib/content'

export const dynamic = 'force-static'

/**
 * The question index behind the hero ask field.
 *
 * It is served as a separate static file rather than inlined into the home
 * page so the homepage payload stays flat as the library grows — the browser
 * only fetches it once the reader actually starts typing.
 *
 * Keys are short on purpose: `q` question, `u` url, `k` extra match terms.
 */
export function GET() {
  const index = allAnswers.map((a) => ({
    q: a.question,
    u: a.url,
    k: `${a.tags.join(' ')} ${a.category}`,
  }))

  return Response.json(index, {
    headers: { 'Cache-Control': 'public, max-age=3600, s-maxage=86400' },
  })
}
