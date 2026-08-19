import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allAnswers, categories, getCategory, summarize } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { ListingPage } from '@/components/listing-page'

export const dynamicParams = false

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

type Props = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const def = getCategory(category)
  if (!def) return {}
  return buildMetadata({
    title: def.label,
    description: def.blurb ?? `Every ${def.label.toLowerCase()} question we have answered.`,
    path: `/categories/${def.slug}`,
  })
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const def = getCategory(category)
  if (!def) notFound()

  const items = allAnswers.filter((a) => a.category === def.slug)

  return (
    <ListingPage
      title={def.label}
      description={def.blurb ?? `Every ${def.label.toLowerCase()} question we have answered.`}
      eyebrow="Category"
      intro={def.blurb}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Answers', path: '/answers' },
        { name: def.label, path: `/categories/${def.slug}` },
      ]}
      items={summarize(items)}
      filters={categories.map((c) => ({
        href: `/categories/${c.slug}`,
        label: c.label,
        active: c.slug === def.slug,
      }))}
    />
  )
}
