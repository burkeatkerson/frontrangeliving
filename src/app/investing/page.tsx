import type { Metadata } from 'next'
import { allInvesting, summarize } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { ListingPage } from '@/components/listing-page'

const DESCRIPTION =
  'Submarket briefs, city-by-city rules, and rent-versus-carry math for investing along the Colorado Front Range.'

const KINDS = [
  { slug: 'brief', label: 'Submarket briefs' },
  { slug: 'rules', label: 'The rules, city by city' },
  { slug: 'math', label: 'Rent vs. carry' },
  { slug: 'ground-notes', label: 'Ground-level notes' },
] as const

export const metadata: Metadata = buildMetadata({
  title: 'Investing on the Front Range',
  description: DESCRIPTION,
  path: '/investing',
})

export default function InvestingIndex() {
  return (
    <ListingPage
      title="Investing on the Front Range"
      description={DESCRIPTION}
      eyebrow="A separate wing of this site"
      intro="Same question format, different questions. One page per submarket: what rents, what carries, what the city just changed, and where the next ten years probably go. Written for people who don’t live here yet and can’t drive the block themselves."
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Investing', path: '/investing' },
      ]}
      items={summarize(allInvesting)}
      layout="grid"
    >
      <div className="border-edge bg-edge mt-6 grid gap-px border sm:grid-cols-2 lg:grid-cols-4">
        {KINDS.map((k) => {
          const n = allInvesting.filter((b) => b.kind === k.slug).length
          return (
            <div key={k.slug} className="bg-bone p-5">
              <h2 className="text-xl leading-snug">{k.label}</h2>
              <span className="label-sm mt-1.5 block">
                {n} {n === 1 ? 'brief' : 'briefs'}
              </span>
            </div>
          )
        })}
      </div>
    </ListingPage>
  )
}
