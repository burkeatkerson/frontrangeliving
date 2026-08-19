import Link from 'next/link'
import { allPlaces } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Label } from './primitives'

/**
 * Visual aids for the city anchor articles.
 *
 * Two rules hold across all of them:
 *
 * 1. Every number is also present as readable text, not only as SVG geometry.
 *    A chart an answer engine cannot read is decoration, and these are meant
 *    to be quoted.
 * 2. No external assets. Everything is inline SVG in the site palette, so
 *    there is nothing to license, host, or wait on.
 */

const FIG = 'my-9 border-t border-ink pt-4'

function Figure({
  caption,
  source,
  children,
  className,
}: {
  caption: string
  source?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <figure className={cn(FIG, 'not-prose', className)}>
      <figcaption className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <Label small>{caption}</Label>
        {source ? <span className="label-sm ml-auto normal-case">{source}</span> : null}
      </figcaption>
      {children}
    </figure>
  )
}

// ---------------------------------------------------------------- corridor map

/** Geographic bounds of the corridor, with a little padding. */
const BOUNDS = { north: 40.85, south: 38.15, west: -105.45, east: -104.55 }
const MAP = { w: 300, h: 760, pad: 26 }

const project = (lat: number, lng: number) => ({
  x: MAP.pad + ((lng - BOUNDS.west) / (BOUNDS.east - BOUNDS.west)) * (MAP.w - MAP.pad * 2),
  y: MAP.pad + ((BOUNDS.north - lat) / (BOUNDS.north - BOUNDS.south)) * (MAP.h - MAP.pad * 2),
})

/** Cities always labelled on the map, because they orient everyone else. */
const ANCHORS = new Set([
  'fort-collins',
  'greeley',
  'boulder',
  'denver',
  'colorado-springs',
  'pueblo',
])

/**
 * The whole Front Range corridor as one tall strip, with `highlight` picked
 * out. Every published city anchor appears automatically.
 *
 * The point it makes visually: this is a 200-mile line of towns pinned between
 * the mountains and the plains, not a metro with suburbs.
 */
export function CorridorMap({ highlight, caption }: { highlight?: string; caption?: string }) {
  const cities = allPlaces
    .filter((p) => p.kind === 'city' && p.geo)
    .map((p) => ({ slug: p.slug, name: p.name, ...project(p.geo!.lat, p.geo!.lng) }))
    .sort((a, b) => a.y - b.y)

  if (!cities.length) return null

  const here = cities.find((c) => c.slug === highlight)
  // I-25 runs the length of the corridor; trace it through the plotted cities.
  const spine = project(BOUNDS.north, -104.98)
  const spineEnd = project(BOUNDS.south, -104.62)

  return (
    <Figure
      caption={caption ?? 'Where this sits on the Front Range'}
      source="positions from published coordinates"
    >
      <div className="flex flex-wrap items-start gap-8">
        <svg
          viewBox={`0 0 ${MAP.w} ${MAP.h}`}
          className="h-auto w-full max-w-[260px] shrink-0"
          role="img"
          aria-label={
            here
              ? `Map of the Front Range corridor with ${here.name} marked, between Wellington in the north and Pueblo in the south.`
              : 'Map of the Front Range urban corridor from Wellington south to Pueblo.'
          }
        >
          {/* The mountain front: a ragged edge down the west side. */}
          <path
            d="M 34 20 L 46 62 L 36 96 L 52 140 L 40 186 L 56 232 L 44 280 L 58 330 L 46 382 L 60 430 L 48 486 L 62 540 L 50 596 L 64 650 L 52 706 L 60 740"
            fill="none"
            stroke="var(--color-edge)"
            strokeWidth="2"
          />
          <text
            x="16"
            y="380"
            className="fill-faint"
            fontSize="9"
            fontFamily="monospace"
            transform="rotate(-90 16 380)"
          >
            THE MOUNTAINS
          </text>

          {/* I-25. */}
          <line
            x1={spine.x}
            y1={spine.y}
            x2={spineEnd.x}
            y2={spineEnd.y}
            stroke="var(--color-rule)"
            strokeWidth="3"
          />
          <text
            x={spine.x + 6}
            y={spine.y + 4}
            className="fill-faint"
            fontSize="9"
            fontFamily="monospace"
          >
            I-25
          </text>

          {cities.map((c) => {
            const active = c.slug === highlight
            const labelled = active || ANCHORS.has(c.slug)
            return (
              <g key={c.slug}>
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={active ? 6 : 2.5}
                  fill={active ? 'var(--color-rust)' : 'var(--color-faint)'}
                />
                {labelled ? (
                  <text
                    x={c.x + (active ? 11 : 7)}
                    y={c.y + 3.5}
                    fontSize={active ? 12 : 9.5}
                    fontFamily={active ? 'Georgia, serif' : 'monospace'}
                    fill={active ? 'var(--color-ink)' : 'var(--color-muted)'}
                  >
                    {c.name}
                  </text>
                ) : null}
              </g>
            )
          })}
        </svg>

        <div className="text-body min-w-[14rem] flex-1 text-sm leading-relaxed">
          <p className="m-0">
            The Front Range corridor runs about <strong className="text-ink">200 miles</strong>{' '}
            along I-25, from Pueblo north to Cheyenne, and holds roughly{' '}
            <strong className="text-ink">5.06 million people</strong> — more than four in five
            Coloradans, on about a quarter of the state&rsquo;s land.
          </p>
          <p className="mt-3 mb-0">
            Everything on this map is pinned between the mountain front on the west and the high
            plains on the east. That strip is why towns twenty minutes apart can have completely
            different weather, water, and commutes.
          </p>
          <p className="text-muted mt-3 mb-0 text-[0.8125rem]">
            {cities.length} of our city guides plotted. Dots are drawn from each town&rsquo;s
            published coordinates.
          </p>
        </div>
      </div>
    </Figure>
  )
}

// ---------------------------------------------------------------- price ladder

export interface PriceRow {
  label: string
  value: number
  /** Marks the row for the city this page is about. */
  self?: boolean
}

/**
 * Median price comparison. Bars are proportional, and every figure is printed
 * next to its bar so the chart reads correctly as plain text too.
 */
export function PriceLadder({
  rows,
  caption = 'Median sale price, in context',
  source,
}: {
  rows: readonly PriceRow[]
  caption?: string
  source?: string
}) {
  const max = Math.max(...rows.map((r) => r.value))
  const money = (n: number) =>
    n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${Math.round(n / 1000)}K`

  return (
    <Figure caption={caption} source={source}>
      <dl className="m-0 space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[minmax(7rem,11rem)_1fr_auto] items-center gap-3"
          >
            <dt
              className={cn(
                'font-mono text-[0.6875rem] leading-tight',
                r.self ? 'text-ink' : 'text-muted'
              )}
            >
              {r.label}
            </dt>
            <div className="bg-bone-2 h-5" aria-hidden="true">
              <div
                className={cn('h-full', r.self ? 'bg-rust' : 'bg-edge')}
                style={{ width: `${Math.max(2, (r.value / max) * 100)}%` }}
              />
            </div>
            <dd
              className={cn(
                'm-0 text-right font-mono text-xs tabular-nums',
                r.self ? 'text-ink' : 'text-muted'
              )}
            >
              {money(r.value)}
            </dd>
          </div>
        ))}
      </dl>
    </Figure>
  )
}

// ---------------------------------------------------------------- drive times

export function DriveTimes({
  rows,
  caption = 'Driving time, normal midday traffic',
}: {
  rows: readonly { to: string; minutes: number }[]
  caption?: string
}) {
  const max = Math.max(...rows.map((r) => r.minutes), 60)
  return (
    <Figure caption={caption} source="one-way, off-peak">
      <dl className="m-0 space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.to}
            className="grid grid-cols-[minmax(7rem,11rem)_1fr_auto] items-center gap-3"
          >
            <dt className="text-muted font-mono text-[0.6875rem]">{r.to}</dt>
            <div className="bg-bone-2 h-5" aria-hidden="true">
              <div className="bg-edge h-full" style={{ width: `${(r.minutes / max) * 100}%` }} />
            </div>
            <dd className="text-ink m-0 text-right font-mono text-xs tabular-nums">
              {r.minutes} min
            </dd>
          </div>
        ))}
      </dl>
      <p className="text-muted mt-4 mb-0 text-[0.8125rem] leading-relaxed">
        Add 15&ndash;25 minutes for a weekday 7:30&ndash;9:00am run into central Denver, and more on
        I-25 south of downtown.
      </p>
    </Figure>
  )
}

// ---------------------------------------------------------------- elevation

/**
 * Elevation against the two reference points everyone already has: Denver's
 * mile marker and the altitude where thin air starts to be felt.
 */
export function ElevationScale({ feet, name }: { feet: number; name: string }) {
  const floor = 4200
  const ceiling = 8600
  const pct = (v: number) => ((v - floor) / (ceiling - floor)) * 100
  const marks = [
    { v: 5280, label: 'Denver — one mile' },
    { v: feet, label: name, self: true },
  ].sort((a, b) => a.v - b.v)

  return (
    <Figure caption="Elevation" source="feet above sea level">
      <div className="relative h-14">
        <div className="bg-bone-2 absolute inset-x-0 top-6 h-1" aria-hidden="true" />
        {marks.map((m) => (
          <div
            key={m.label}
            className="absolute top-0 -translate-x-1/2"
            style={{ left: `${Math.min(96, Math.max(4, pct(m.v)))}%` }}
          >
            <div
              className={cn('mx-auto h-6 w-px', 'self' in m && m.self ? 'bg-rust' : 'bg-edge')}
              aria-hidden="true"
            />
            <div
              className={cn(
                'mt-1 text-center font-mono text-[0.625rem] whitespace-nowrap',
                'self' in m && m.self ? 'text-ink' : 'text-faint'
              )}
            >
              {m.v.toLocaleString()}&nbsp;ft
            </div>
          </div>
        ))}
      </div>
      <p className="text-body mt-2 mb-0 text-sm leading-relaxed">
        {name} sits at <strong className="text-ink">{feet.toLocaleString()} feet</strong>
        {feet > 5280
          ? `, about ${(feet - 5280).toLocaleString()} feet above Denver.`
          : feet < 5280
            ? `, about ${(5280 - feet).toLocaleString()} feet below Denver.`
            : ', level with Denver.'}{' '}
        Most people adjust within one to two weeks — see{' '}
        <Link href="/answers/altitude-adjustment/">is the altitude going to wreck me?</Link>
      </p>
    </Figure>
  )
}

// ---------------------------------------------------------------- fact table

export function FactTable({
  rows,
  caption = 'At a glance',
}: {
  rows: readonly { k: string; v: React.ReactNode }[]
  caption?: string
}) {
  return (
    <Figure caption={caption}>
      <dl className="m-0 grid gap-x-8 sm:grid-cols-2">
        {rows.map((r) => (
          <div
            key={r.k}
            className="border-rule flex items-baseline justify-between gap-4 border-b py-2.5"
          >
            <dt className="text-faint font-mono text-[0.6875rem] tracking-wider uppercase">
              {r.k}
            </dt>
            <dd className="text-ink m-0 text-right text-sm">{r.v}</dd>
          </div>
        ))}
      </dl>
    </Figure>
  )
}

// ---------------------------------------------------------------- photo slot

/**
 * An honest placeholder.
 *
 * We do not ship stock photography of these towns — a licensing problem and a
 * credibility one, since the whole promise of the site is that we have been
 * there. This marks the shot to take.
 */
export function PhotoSlot({ shot, ratio = '3/2' }: { shot: string; ratio?: string }) {
  return (
    <figure className="not-prose my-9">
      <div
        className="border-edge bg-bone-2 flex items-center justify-center border border-dashed px-6 text-center"
        style={{ aspectRatio: ratio }}
      >
        <span className="label-sm max-w-[28em] leading-relaxed">Photo — {shot}</span>
      </div>
    </figure>
  )
}
