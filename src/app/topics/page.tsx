import type { Metadata } from 'next'
import Link from 'next/link'
import { allTags } from '@/lib/content'
import { buildMetadata, listingGraph } from '@/lib/seo'
import { JsonLd } from '@/components/jsonld'
import { Shell, Label } from '@/components/primitives'

const DESCRIPTION = 'Every topic covered on Front Range Living, from green chile to sewer scopes.'

export const metadata: Metadata = buildMetadata({
  title: 'Topics',
  description: DESCRIPTION,
  path: '/topics',
})

export default function TopicsIndex() {
  return (
    <>
      <JsonLd
        graph={listingGraph({
          name: 'Topics',
          description: DESCRIPTION,
          path: '/topics',
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Topics', path: '/topics' },
          ],
          items: allTags.map((t) => ({ heading: t.label, url: `/topics/${t.slug}` })),
        })}
      />
      <Shell className="pt-12">
        <Label small className="mb-3 block">
          Everything, cross-cut
        </Label>
        <div className="border-ink flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b pb-4">
          <h1 className="text-[clamp(2rem,5vw,3rem)] leading-tight tracking-[-0.02em]">Topics</h1>
          <span className="label ml-auto tracking-[0.04em] normal-case">
            {allTags.length} topics
          </span>
        </div>

        <ul className="mt-7 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <li key={tag.slug}>
              <Link href={`/topics/${tag.slug}`} className="chip chip-round">
                {tag.label}
                <span className="text-faint ml-2">{tag.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Shell>
    </>
  )
}
