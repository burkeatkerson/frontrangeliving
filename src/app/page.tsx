import Link from 'next/link'
import type { Metadata } from 'next'

import { site } from '@/lib/site'
import { buildMetadata, listingGraph } from '@/lib/seo'
import {
  allAnswers,
  answersByCategory,
  categories,
  columnDefs,
  counts,
  entriesInColumn,
  lanes,
  answersInLane,
  toSummary,
} from '@/lib/content'
import { revisionStamp } from '@/lib/utils'

import { JsonLd } from '@/components/jsonld'
import { Shell, Label, SectionHead } from '@/components/primitives'
import { AskBox, type AskEntry } from '@/components/ask-box'
import { AnswerPlaces, MoneyNote } from '@/components/answer-parts'
import { LibraryBrowser, type LibraryGroup } from '@/components/library-browser'

export const metadata: Metadata = buildMetadata({
  title: site.tagline,
  description: site.description,
  path: '/',
})

/** The answer shown in the hero. Falls back to the newest if nothing is featured. */
const heroAnswer = allAnswers.find((a) => a.featured) ?? allAnswers[0]

export default function HomePage() {
  const askIndex: AskEntry[] = allAnswers.map((a) => ({
    q: a.question,
    url: a.url,
    k: `${a.tags.join(' ')} ${a.category}`,
  }))

  const chips = allAnswers
    .filter((a) => a.url !== heroAnswer?.url)
    .slice(0, 5)
    .map((a) => ({ label: a.title.toLowerCase(), url: a.url }))

  const groups: LibraryGroup[] = answersByCategory().map((g) => ({
    slug: g.slug,
    label: g.label,
    total: g.items.length,
    items: g.items.slice(0, 10).map(toSummary),
  }))

  return (
    <>
      <JsonLd
        graph={listingGraph({
          name: `${site.name} — ${site.tagline}`,
          description: site.description,
          path: '/',
          crumbs: [{ name: 'Home', path: '/' }],
          items: allAnswers.slice(0, 20).map((a) => ({ heading: a.question, url: a.url })),
        })}
      />

      {/* ---------------------------------------------------------- hero */}
      <Shell as="section" className="pb-5 pt-16 sm:pt-[4.75rem]">
        <Label small>{site.coverage.join(' · ')}</Label>
        <h1 className="my-4 max-w-[17em] text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.02] tracking-[-0.025em]">
          {site.tagline}
        </h1>
        <div className="mt-7">
          <AskBox index={askIndex} chips={chips} />
        </div>
      </Shell>

      {/* -------------------------------------------------- featured answer */}
      {heroAnswer ? (
        <Shell as="section" className="mt-11 border-t border-ink pt-11">
          <div className="flex flex-wrap items-baseline gap-4">
            <Label small>Answered by people who live here</Label>
            <Label small className="ml-auto">
              {revisionStamp(heroAnswer.updated ?? heroAnswer.date)}
            </Label>
          </div>

          <h2 className="mb-2 mt-3.5 max-w-[26em] text-[clamp(1.625rem,3.5vw,2.375rem)] leading-[1.15]">
            <Link href={heroAnswer.url} className="text-ink hover:text-rust">
              {heroAnswer.question}
            </Link>
          </h2>
          <p className="mb-7 max-w-[52em] text-base leading-[1.65] text-body">
            {heroAnswer.summary}
          </p>

          <AnswerPlaces places={heroAnswer.places} />
          {heroAnswer.money ? <MoneyNote>{heroAnswer.money}</MoneyNote> : null}

          <p className="mt-5 text-[0.9375rem] italic text-muted">
            Not what you meant? Add the commute, the budget, or the dog and{' '}
            <Link href="/answers">ask again</Link> — the answer changes.
          </p>
        </Shell>
      ) : null}

      {/* -------------------------------------------------------- library */}
      <Shell as="section" className="pt-20">
        <SectionHead
          title="The questions we actually get asked"
          note={`${counts.answers} answered, and counting`}
        />
        <LibraryBrowser groups={groups} />
        <p className="mt-5 text-[0.9375rem] text-muted">
          Got one that isn&rsquo;t here? <Link href="/search">Search first</Link> — if we
          don&rsquo;t know, we go find out and it becomes a page.
        </p>
      </Shell>

      {/* ---------------------------------------------------------- lanes */}
      <Shell as="section" className="pt-20">
        <h2 className="mb-1.5 text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.015em]">Ask as a…</h2>
        <p className="mb-6 max-w-[46em] text-base leading-relaxed text-body">
          The same four hundred miles answers differently depending on why you&rsquo;re looking.
          Pick the version of the question that&rsquo;s actually yours.
        </p>
        <div className="grid gap-px border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
          {lanes.map((lane, i) => {
            const n = answersInLane(lane.slug).length
            return (
              <Link
                key={lane.slug}
                href={`/lanes/${lane.slug}`}
                className={`group p-6 transition-shadow hover:shadow-[inset_0_0_0_1px_var(--color-ink)] ${
                  lane.accent ? 'bg-bone-2' : 'bg-bone'
                }`}
              >
                <span className="font-mono text-[0.6875rem] text-rust">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-2.5 mt-2 text-[1.6875rem] leading-tight text-ink group-hover:text-rust">
                  {lane.label}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-body">{lane.blurb}</p>
                <span className={`label-sm ${lane.accent ? 'text-rust' : ''}`}>
                  {lane.accent ? 'The Investing wing →' : `${n} ${n === 1 ? 'answer' : 'answers'}`}
                </span>
              </Link>
            )
          })}
        </div>
      </Shell>

      {/* -------------------------------------------------------- columns */}
      <Shell as="section" className="pt-20">
        <SectionHead
          title="Where the answers come from"
          note="four standing columns, all year"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {columnDefs.map((col, i) => (
            <div
              key={col.slug}
              className={`px-0 py-6 md:px-6 ${i === 0 ? 'md:pl-0' : ''} ${
                i < columnDefs.length - 1 ? 'md:border-r md:border-rule' : 'md:pr-0'
              }`}
            >
              <h3 className="mb-2.5 text-[1.625rem]">
                <Link href={`/columns/${col.slug}`} className="text-ink hover:text-rust">
                  {col.label}
                </Link>
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-body">{col.blurb}</p>
              <Link href={`/columns/${col.slug}`} className="font-mono text-[0.6875rem]">
                {entriesInColumn(col.slug).length} {col.unit} →
              </Link>
            </div>
          ))}
        </div>
      </Shell>

      {/* ------------------------------------------------------- investing */}
      <section className="mt-20 bg-ink py-16 text-bone">
        <Shell>
          <Label small className="text-rust">
            A separate wing of this site
          </Label>
          <div className="mt-4 grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="mb-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] tracking-[-0.02em]">
                Investing on the Front Range
              </h2>
              <p className="mb-6 max-w-[44em] text-base leading-[1.7] text-dim">
                Same question format, different questions. One page per submarket: what rents, what
                carries, what the city just changed, and where the next ten years probably go.
                Written for people who don&rsquo;t live here yet and can&rsquo;t drive the block
                themselves.
              </p>
              <div className="grid gap-px border border-rule-dark bg-rule-dark sm:grid-cols-2">
                {[
                  ['Submarket briefs', 'One page per place. Rent bands, vacancy, what the last twelve months of closings actually did.'],
                  ['The rules, city by city', 'Short-term rental licensing, ADUs, occupancy limits — tracked where they change, not where they’re famous.'],
                  ['Rent vs. carry', 'The quarterly math, plainly. Including the ones where the math doesn’t work and we say so.'],
                  ['Ground-level notes', 'Hail, soil, sewer scopes, 1950s galvanized, and the six blocks where the water table matters.'],
                ].map(([title, blurb]) => (
                  <div key={title} className="bg-ink p-5">
                    <h3 className="mb-2 text-2xl">{title}</h3>
                    <p className="text-sm leading-relaxed text-dim">{blurb}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-rule-dark lg:border-l lg:pl-8">
              <Label small>Asked most, in the wing</Label>
              <div className="mt-3.5 flex flex-col">
                {allAnswers
                  .concat()
                  .filter((a) => a.lanes.includes('investor') || a.category === 'money')
                  .slice(0, 5)
                  .map((a) => (
                    <Link
                      key={a.url}
                      href={a.url}
                      className="border-b border-rule-dark py-3 text-[0.9375rem] leading-snug text-bone last:border-b-0 hover:text-rust"
                    >
                      {a.question}
                    </Link>
                  ))}
              </div>
              <Link
                href="/investing"
                className="label mt-5 inline-block border border-rust px-4 py-2.5 text-rust hover:bg-rust hover:text-bone"
              >
                Enter the wing
              </Link>
            </div>
          </div>
        </Shell>
      </section>

      {/* ------------------------------------------------------------ who */}
      <Shell as="section" className="pt-18">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Label small>Who&rsquo;s answering</Label>
            <h2 className="mb-4 mt-3 text-[clamp(1.875rem,4.5vw,2.625rem)] leading-[1.1] tracking-[-0.015em]">
              Two people, one car, and about nine years of eating our way up Federal.
            </h2>
            <p className="mb-3.5 max-w-[40em] text-base leading-[1.7] text-body">
              We answer every question ourselves. We&rsquo;ve lived in Baker, Wheat Ridge, and now a
              house in Arvada with a bad driveway. Yes, we sell real estate — it&rsquo;s how this
              pays for itself — and you&rsquo;ll hear about it exactly once per page, at the bottom,
              where it belongs.
            </p>
            <Link href="/about" className="font-mono text-[0.6875rem]">
              The longer version →
            </Link>
          </div>
          <div className="grid gap-px border border-edge bg-edge sm:grid-cols-2">
            {[
              [counts.answers, 'answers'],
              [counts.places, 'place guides'],
              [counts.columns, 'column entries'],
              [counts.investing, 'investing briefs'],
            ].map(([n, label]) => (
              <div key={label as string} className="bg-bone p-6">
                <div className="font-display text-4xl text-ink">{n as number}</div>
                <Label small className="mt-1 block">
                  {label as string}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </Shell>

      {/* ------------------------------------------------- category index */}
      <Shell as="section" className="pt-20">
        <SectionHead title="Browse by category" note="every answer has a home" heavy={false} />
        <div className="mt-5 grid gap-px border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group bg-bone p-5 transition-shadow hover:shadow-[inset_0_0_0_1px_var(--color-ink)]"
            >
              <h3 className="text-xl text-ink group-hover:text-rust">{c.label}</h3>
              {c.blurb ? <p className="mt-1.5 text-sm leading-relaxed text-body">{c.blurb}</p> : null}
            </Link>
          ))}
        </div>
      </Shell>
    </>
  )
}
