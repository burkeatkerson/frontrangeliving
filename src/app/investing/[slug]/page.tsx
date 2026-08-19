import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { allInvesting, getInvestingBrief } from '@/lib/content'
import { docMetadata } from '@/lib/seo'
import { ArticlePage } from '@/components/article-page'
import { Label, StatList } from '@/components/primitives'

export const dynamicParams = false

export function generateStaticParams() {
  return allInvesting.map((b) => ({ slug: b.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const brief = getInvestingBrief(slug)
  return brief ? docMetadata(brief) : {}
}

export default async function InvestingBriefPage({ params }: Props) {
  const { slug } = await params
  const brief = getInvestingBrief(slug)
  if (!brief) notFound()

  return (
    <ArticlePage
      doc={brief}
      eyebrow={[brief.submarket, brief.quarter].filter(Boolean).join(' · ')}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Investing', path: '/investing' },
        { name: brief.title, path: brief.url },
      ]}
      aside={
        brief.stats.length ? (
          <div>
            <Label small as="p" className="mb-2">
              The numbers
            </Label>
            <StatList stats={brief.stats} />
          </div>
        ) : null
      }
    >
      <aside className="mt-8 border-l-2 border-rust bg-bone-2 px-5 py-4">
        <Label small className="mb-1.5 block">
          Read this first
        </Label>
        <p className="text-[0.9375rem] leading-relaxed text-body">
          These are our numbers and our read, not investment or legal advice. Regulations on this
          page change faster than almost anything else we track — check the revision date and
          verify with the city before you write an offer.
        </p>
      </aside>
    </ArticlePage>
  )
}
