import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import { allAnswers, getAnswer, getCategory } from '@/lib/content'
import { docMetadata } from '@/lib/seo'
import { ArticlePage } from '@/components/article-page'
import { AnswerPlaces, MoneyNote } from '@/components/answer-parts'
import { Label } from '@/components/primitives'

export const dynamicParams = false

export function generateStaticParams() {
  return allAnswers.map((a) => ({ slug: a.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const answer = getAnswer(slug)
  if (!answer) return {}
  return docMetadata(answer)
}

export default async function AnswerPage({ params }: Props) {
  const { slug } = await params
  const answer = getAnswer(slug)
  if (!answer) notFound()

  const category = getCategory(answer.category)

  return (
    <ArticlePage
      doc={answer}
      eyebrow={category?.label ?? answer.category}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Answers', path: '/answers' },
        ...(category ? [{ name: category.label, path: `/categories/${category.slug}` }] : []),
        { name: answer.title, path: answer.url },
      ]}
      aside={
        answer.lanes.length ? (
          <div className="border-rule border-t pt-4">
            <Label small as="p" className="mb-2">
              Asked most by
            </Label>
            <div className="flex flex-wrap gap-1.5">
              {answer.lanes.map((lane) => (
                <Link key={lane} href={`/lanes/${lane}`} className="chip chip-round">
                  {lane.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </div>
        ) : null
      }
    >
      {answer.places.length ? (
        <section className="border-rule border-b py-9" aria-labelledby="picks-heading">
          <h2 id="picks-heading" className="sr-only">
            Where we would send you
          </h2>
          <AnswerPlaces places={answer.places} />
        </section>
      ) : null}

      {answer.money ? <MoneyNote>{answer.money}</MoneyNote> : null}
    </ArticlePage>
  )
}
