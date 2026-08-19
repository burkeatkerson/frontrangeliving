import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPages, getPage } from '@/lib/content'
import { docMetadata } from '@/lib/seo'
import { ArticlePage } from '@/components/article-page'

export const dynamicParams = false

/**
 * Standalone editorial pages (about, work-with-us, …) live at the site root.
 * Only slugs that exist in `content/pages` are generated, so this never
 * shadows a real route.
 */
export function generateStaticParams() {
  return allPages.map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getPage(slug)
  return page ? docMetadata(page) : {}
}

export default async function StandalonePage({ params }: Props) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) notFound()

  return (
    <ArticlePage
      doc={page}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: page.title, path: page.url },
      ]}
    />
  )
}
