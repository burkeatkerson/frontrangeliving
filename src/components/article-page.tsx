import Link from 'next/link'
import type { Doc } from '@/lib/content'
import { getAuthors, relatedTo } from '@/lib/content'
import { docGraph, type Crumb } from '@/lib/seo'
import { site } from '@/lib/site'

import { JsonLd } from './jsonld'
import { Shell, Label, SectionHead } from './primitives'
import { MDXContent } from './mdx'
import { QuestionList } from './doc-list'
import { ByLine, FaqList, Sources, SpeakableAnswer } from './answer-parts'

function Breadcrumbs({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            {i > 0 ? (
              <span className="label-sm" aria-hidden="true">
                /
              </span>
            ) : null}
            {i === crumbs.length - 1 ? (
              <Label small aria-current="page">
                {c.name}
              </Label>
            ) : (
              <Link href={c.path} className="label-sm hover:text-ink">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** In-page table of contents, shown when a document has enough structure to need one. */
function Toc({ toc }: { toc: Doc['toc'] }) {
  // Velite nests sub-headings under `items`; flatten one level for a compact list.
  const items = toc.flatMap((t) => [
    { ...t, sub: false },
    ...t.items.map((i) => ({ ...i, sub: true })),
  ])
  if (items.length < 3) return null
  return (
    <nav aria-labelledby="toc-heading" className="border-rule border-t pt-4">
      <Label small as="p" className="mb-2">
        <span id="toc-heading">On this page</span>
      </Label>
      <ol className="space-y-1.5">
        {items.map((item) => (
          <li key={item.url} className={item.sub ? 'pl-3' : undefined}>
            <a href={item.url} className="text-body hover:text-rust text-sm leading-snug">
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

/**
 * The shared reading layout for every document type. Keeping one template
 * means the AEO surface — speakable answer, FAQ, sources, byline, revision
 * stamp — is identical on all several-hundred pages by construction.
 */
export function ArticlePage({
  doc,
  crumbs,
  eyebrow,
  aside,
  children,
}: {
  doc: Doc
  crumbs: readonly Crumb[]
  /** Small mono line above the headline, e.g. the category or column name. */
  eyebrow?: React.ReactNode
  /** Extra content rendered in the sidebar under the TOC. */
  aside?: React.ReactNode
  /** Extra content rendered between the answer block and the article body. */
  children?: React.ReactNode
}) {
  const heading = doc.type === 'answer' ? doc.question : doc.title
  const authors = getAuthors(doc.authors)
  const related = relatedTo(doc, 6)

  return (
    <>
      <JsonLd graph={docGraph(doc, crumbs)} />

      {/* Pagefind indexes only this element, so listing pages and site chrome stay
          out of the search index. */}
      <Shell as="article" className="pt-10" data-pagefind-body>
        <Breadcrumbs crumbs={crumbs} />

        <header className="border-ink mt-6 border-b pb-7">
          {eyebrow ? (
            <Label small className="mb-3 block">
              {eyebrow}
            </Label>
          ) : null}
          <h1 className="max-w-[20em] text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            {heading}
          </h1>
          <div className="mt-5">
            <ByLine
              authors={authors}
              date={doc.date}
              updated={doc.updated}
              readingTime={doc.metadata.readingTime}
            />
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div className="min-w-0">
            {doc.answer ? (
              <div className="border-rule border-b py-8">
                <Label small className="text-rust mb-3 block">
                  The short answer
                </Label>
                <SpeakableAnswer>{doc.answer}</SpeakableAnswer>
              </div>
            ) : null}

            {children}

            <div className="py-8">
              <MDXContent code={doc.body} />
            </div>

            <FaqList faq={doc.faq} />
            <Sources sources={doc.sources} />

            <aside className="border-rule mt-12 border-t pt-5">
              <Label small className="block">
                Disclosure
              </Label>
              <p className="text-muted mt-2 max-w-[46em] text-sm leading-relaxed">
                {site.disclosure} <Link href="/work-with-us">Work with us →</Link>
              </p>
            </aside>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start" data-pagefind-ignore>
            <Toc toc={doc.toc} />
            {doc.tags.length ? (
              <div className="border-rule border-t pt-4">
                <Label small as="p" className="mb-2">
                  Filed under
                </Label>
                <div className="flex flex-wrap gap-1.5">
                  {doc.tags.map((tag) => (
                    <Link key={tag} href={`/topics/${tag}`} className="chip chip-round">
                      {tag.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            {aside}
          </aside>
        </div>
      </Shell>

      {related.length ? (
        <Shell as="section" className="pt-16" data-pagefind-ignore>
          <SectionHead title="Keep reading" note="related answers" heavy={false} />
          <div className="mt-4">
            <QuestionList items={related} />
          </div>
        </Shell>
      ) : null}
    </>
  )
}
