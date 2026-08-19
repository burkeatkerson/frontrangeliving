import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allAnswers, categories, summarize } from '@/lib/content'
import { site, absoluteUrl } from '@/lib/site'
import { buildMetadata } from '@/lib/seo'
import { paginate } from '@/lib/utils'
import { ListingPage } from '@/components/listing-page'

export const dynamicParams = false

const pages = () => paginate(allAnswers, site.pageSize)

/**
 * Every page number is generated, including 1.
 *
 * `/answers` is the canonical first page, so `/answers/page/1` exists only so
 * that this route always produces at least one path (a static export fails on
 * an empty `generateStaticParams`) — it points its canonical back at
 * `/answers` and asks not to be indexed.
 */
export function generateStaticParams() {
  return pages().map((_, i) => ({ page: String(i + 1) }))
}

type Props = { params: Promise<{ page: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params
  const n = Number(page)
  const meta = buildMetadata({
    title: `Every answer — page ${n}`,
    description: `Page ${n} of every question we have answered about living along the Front Range.`,
    path: `/answers/page/${n}`,
  })
  if (n !== 1) return meta
  return {
    ...meta,
    alternates: { ...meta.alternates, canonical: absoluteUrl('/answers') },
    robots: { index: false, follow: true },
  }
}

export default async function AnswersPaginated({ params }: Props) {
  const { page } = await params
  const n = Number(page)
  const all = pages()
  const items = all[n - 1]
  if (!Number.isInteger(n) || n < 1 || !items) notFound()

  return (
    <ListingPage
      title="Every answer"
      description={`Page ${n} of the answer library.`}
      eyebrow={`Page ${n} of ${all.length}`}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Answers', path: '/answers' },
        { name: `Page ${n}`, path: `/answers/page/${n}` },
      ]}
      items={summarize(items)}
      total={allAnswers.length}
      filters={categories.map((c) => ({ href: `/categories/${c.slug}`, label: c.label }))}
      pagination={{ base: '/answers', page: n, totalPages: all.length }}
    />
  )
}
