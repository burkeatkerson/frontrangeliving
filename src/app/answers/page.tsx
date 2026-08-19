import type { Metadata } from 'next'
import { allAnswers, categories, summarize } from '@/lib/content'
import { site } from '@/lib/site'
import { buildMetadata } from '@/lib/seo'
import { paginate } from '@/lib/utils'
import { ListingPage } from '@/components/listing-page'

const DESCRIPTION =
  'Every question we have been asked about living along the Front Range, answered — neighborhoods, food, trails, schools, and what it costs.'

export const metadata: Metadata = buildMetadata({
  title: 'Every answer',
  description: DESCRIPTION,
  path: '/answers',
})

export default function AnswersPage() {
  const pages = paginate(allAnswers, site.pageSize)

  return (
    <ListingPage
      title="Every answer"
      description={DESCRIPTION}
      eyebrow="The whole library"
      intro="Every page here started as a question somebody actually asked us. If we don’t know, we go find out, and then it becomes a page."
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Answers', path: '/answers' },
      ]}
      items={summarize(pages[0]!)}
      total={allAnswers.length}
      filters={categories.map((c) => ({ href: `/categories/${c.slug}`, label: c.label }))}
      pagination={{ base: '/answers', page: 1, totalPages: pages.length }}
    />
  )
}
