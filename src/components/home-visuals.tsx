import { cn } from '@/lib/utils'
import { Label } from './primitives'

/**
 * Visual aids for the homeowner guides.
 *
 * Same two rules as the city-anchor visuals: every figure also reads as plain
 * text (an answer engine should be able to quote the checklist, not just see
 * it), and nothing is fetched — every diagram is inline SVG in the palette.
 */

const FIG = 'not-prose my-9 border-t border-ink pt-4'

function Figure({
  caption,
  note,
  children,
  className,
}: {
  caption: string
  note?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <figure className={cn(FIG, className)}>
      <figcaption className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <Label small>{caption}</Label>
        {note ? <span className="label-sm ml-auto normal-case">{note}</span> : null}
      </figcaption>
      {children}
    </figure>
  )
}

// ------------------------------------------------------------------ checklist

type CheckItem = string | { text: string; note?: string }

/** A printable checklist. Items are plain strings or `{ text, note }`. */
export function Checklist({
  title = 'Checklist',
  items,
  note,
}: {
  title?: string
  items: readonly CheckItem[]
  note?: string
}) {
  return (
    <Figure caption={title} note={note}>
      <ul className="m-0 grid list-none gap-x-8 gap-y-2.5 p-0 sm:grid-cols-2">
        {items.map((it) => {
          const text = typeof it === 'string' ? it : it.text
          const sub = typeof it === 'string' ? undefined : it.note
          return (
            <li key={text} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="border-ink mt-1 block h-3.5 w-3.5 shrink-0 border"
              />
              <span className="text-body text-sm leading-snug">
                <span className="text-ink">{text}</span>
                {sub ? <span className="text-muted block text-[0.8125rem]">{sub}</span> : null}
              </span>
            </li>
          )
        })}
      </ul>
    </Figure>
  )
}

// ---------------------------------------------------------------------- steps

export interface Step {
  title: string
  body: string
  /** e.g. "$150–250" or "20 min" — shown as a mono tag. */
  tag?: string
}

/** Numbered procedure. */
export function Steps({
  steps,
  caption = 'Step by step',
}: {
  steps: readonly Step[]
  caption?: string
}) {
  return (
    <Figure caption={caption}>
      <ol className="m-0 list-none space-y-4 p-0">
        {steps.map((s, i) => (
          <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-3">
            <span className="text-rust font-mono text-xl leading-none">{i + 1}</span>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-display text-ink text-lg leading-tight">{s.title}</span>
                {s.tag ? <span className="label-sm normal-case">{s.tag}</span> : null}
              </div>
              <p className="text-body mt-1 mb-0 text-sm leading-relaxed">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Figure>
  )
}

// ---------------------------------------------------------------- season grid

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

export interface SeasonItem {
  label: string
  /** 1-indexed start and end month, inclusive. Wraps if end < start. */
  months: readonly [number, number]
  note?: string
  accent?: boolean
}

/**
 * Twelve-column calendar strip. Each row is a task with a bar across the
 * months it applies to, plus the text equivalent underneath.
 */
export function SeasonCalendar({
  items,
  caption = 'When, through the year',
}: {
  items: readonly SeasonItem[]
  caption?: string
}) {
  const span = ([a, b]: readonly [number, number]) =>
    b >= a
      ? [[a, b]]
      : [
          [a, 12],
          [1, b],
        ]
  const name = (m: number) =>
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]

  return (
    <Figure caption={caption}>
      <div className="overflow-x-auto">
        <div className="min-w-[34rem]">
          <div className="grid grid-cols-[minmax(10rem,13rem)_repeat(12,1fr)] gap-y-1.5">
            <div />
            {MONTHS.map((m, i) => (
              <div key={i} className="text-faint text-center font-mono text-[0.625rem]">
                {m}
              </div>
            ))}
            {items.map((it) => (
              <div key={it.label} className="contents">
                <div className="text-ink pr-3 font-mono text-[0.6875rem] leading-tight">
                  {it.label}
                </div>
                {MONTHS.map((_, i) => {
                  const m = i + 1
                  const on = span(it.months).some(([a, b]) => m >= a && m <= b)
                  return (
                    <div key={i} className="bg-bone-2 h-5" aria-hidden="true">
                      {on ? (
                        <div className={cn('h-full', it.accent ? 'bg-rust' : 'bg-edge')} />
                      ) : null}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="text-muted mt-4 mb-0 list-none space-y-1 p-0 text-[0.8125rem] leading-relaxed">
        {items.map((it) => (
          <li key={it.label}>
            <span className="text-ink">{it.label}</span> — {name(it.months[0])}
            {it.months[0] !== it.months[1] ? `–${name(it.months[1])}` : ''}
            {it.note ? `. ${it.note}` : ''}
          </li>
        ))}
      </ul>
    </Figure>
  )
}

// ----------------------------------------------------------------- cost table

export interface CostRow {
  item: string
  low: number
  high: number
  note?: string
}

const money = (n: number) =>
  n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K` : `$${n}`

/** Cost ranges with proportional bars; every figure is printed as text. */
export function CostTable({
  rows,
  caption = 'What it costs here',
  note,
}: {
  rows: readonly CostRow[]
  caption?: string
  note?: string
}) {
  const max = Math.max(...rows.map((r) => r.high))
  return (
    <Figure caption={caption} note={note}>
      <dl className="m-0 space-y-3">
        {rows.map((r) => (
          <div
            key={r.item}
            className="grid grid-cols-[minmax(8rem,12rem)_1fr_auto] items-center gap-3"
          >
            <dt className="text-ink font-mono text-[0.6875rem] leading-tight">
              {r.item}
              {r.note ? <span className="text-faint block">{r.note}</span> : null}
            </dt>
            <div className="bg-bone-2 relative h-5" aria-hidden="true">
              <div
                className="bg-edge absolute top-0 h-full"
                style={{
                  left: `${(r.low / max) * 100}%`,
                  width: `${Math.max(1.5, ((r.high - r.low) / max) * 100)}%`,
                }}
              />
              <div
                className="bg-rust absolute top-0 h-full w-0.5"
                style={{ left: `${(r.low / max) * 100}%` }}
              />
            </div>
            <dd className="text-ink m-0 text-right font-mono text-xs whitespace-nowrap tabular-nums">
              {money(r.low)}–{money(r.high)}
            </dd>
          </div>
        ))}
      </dl>
    </Figure>
  )
}

// -------------------------------------------------------------------- compare

/** A compact comparison grid, typically city-by-city. First column is the row label. */
export function Compare({
  caption,
  cols,
  rows,
  note,
}: {
  caption: string
  cols: readonly string[]
  rows: readonly (readonly string[])[]
  note?: string
}) {
  return (
    <Figure caption={caption} note={note}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr>
              {cols.map((c, i) => (
                <th
                  key={i}
                  className="border-ink text-faint border-b pr-4 pb-2 align-bottom font-mono text-[0.6875rem] font-normal tracking-wider uppercase"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-rule border-b align-top">
                {r.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      'py-2.5 pr-4 leading-snug',
                      j === 0 ? 'text-ink font-mono text-[0.75rem] whitespace-nowrap' : 'text-body'
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------- timeline

/** Vertical timeline: when → what. */
export function Timeline({
  rows,
  caption = 'Timeline',
}: {
  rows: readonly { when: string; what: string; note?: string }[]
  caption?: string
}) {
  return (
    <Figure caption={caption}>
      <ol className="border-edge m-0 ml-2 list-none space-y-4 border-l p-0 pl-5">
        {rows.map((r) => (
          <li key={r.when + r.what} className="relative">
            <span aria-hidden="true" className="bg-rust absolute top-1.5 -left-[1.55rem] h-2 w-2" />
            <div className="label-sm normal-case">{r.when}</div>
            <div className="text-ink mt-0.5 text-sm leading-snug">{r.what}</div>
            {r.note ? (
              <div className="text-muted mt-0.5 text-[0.8125rem] leading-snug">{r.note}</div>
            ) : null}
          </li>
        ))}
      </ol>
    </Figure>
  )
}

// ------------------------------------------------------------------- diagrams

/** Shared SVG styling helpers. */
const INK = 'var(--color-ink)'
const EDGE = 'var(--color-edge)'
const RULE = 'var(--color-rule)'
const RUST = 'var(--color-rust)'
const BONE2 = 'var(--color-bone-2)'
const MUTED = 'var(--color-muted)'

function T({
  x,
  y,
  children,
  anchor = 'start',
  size = 9,
  fill = MUTED,
  bold = false,
}: {
  x: number
  y: number
  children: React.ReactNode
  anchor?: 'start' | 'middle' | 'end'
  size?: number
  fill?: string
  bold?: boolean
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontFamily="monospace"
      fill={fill}
      textAnchor={anchor}
      fontWeight={bold ? 700 : 400}
    >
      {children}
    </text>
  )
}

function Ground({ y, w }: { y: number; w: number }) {
  return <line x1="0" y1={y} x2={w} y2={y} stroke={INK} strokeWidth="1.5" />
}

/** A simple house profile used by several diagrams. */
function House({
  x,
  y,
  w = 120,
  h = 70,
  roof = 34,
}: {
  x: number
  y: number
  w?: number
  h?: number
  roof?: number
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="var(--color-paper)"
        stroke={INK}
        strokeWidth="1.5"
      />
      <polygon
        points={`${x - 6},${y} ${x + w / 2},${y - roof} ${x + w + 6},${y}`}
        fill={BONE2}
        stroke={INK}
        strokeWidth="1.5"
      />
    </g>
  )
}

const DIAGRAMS: Record<string, { aria: string; body: React.ReactNode; w: number; h: number }> = {
  'sewer-lateral': {
    w: 420,
    h: 200,
    aria: 'Cross-section showing a house sewer lateral running under the yard and sidewalk to the main under the street, with tree roots entering a joint and the property line marked.',
    body: (
      <>
        <House x={30} y={60} w={110} h={60} />
        <Ground y={120} w={420} />
        <rect x="150" y="118" width="60" height="4" fill={EDGE} />
        <T x={180} y={114} anchor="middle">
          sidewalk
        </T>
        <rect x="230" y="116" width="190" height="6" fill={RULE} />
        <T x={325} y={112} anchor="middle">
          street
        </T>
        {/* lateral */}
        <line x1="85" y1="120" x2="85" y2="150" stroke={INK} strokeWidth="3" />
        <line x1="85" y1="150" x2="330" y2="172" stroke={INK} strokeWidth="3" />
        {/* main */}
        <circle cx="330" cy="178" r="9" fill="none" stroke={INK} strokeWidth="2" />
        <T x={345} y={182}>
          city main
        </T>
        {/* roots */}
        <path
          d="M165 125 q 5 10 -2 22 M170 125 q -4 12 6 24 M160 126 q 0 14 8 20"
          stroke={RUST}
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="165" cy="118" r="3" fill={RUST} />
        <line x1="165" y1="118" x2="165" y2="96" stroke={RUST} strokeWidth="1.5" />
        <circle cx="165" cy="90" r="10" fill="none" stroke={RUST} strokeWidth="1.5" />
        <T x={165} y={78} anchor="middle" fill={RUST}>
          tree roots at a joint
        </T>
        {/* property line */}
        <line
          x1="150"
          y1="40"
          x2="150"
          y2="195"
          stroke={MUTED}
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <T x={148} y={36} anchor="end">
          your property
        </T>
        <T x={153} y={36}>
          right-of-way
        </T>
        <T x={60} y={165} fill={INK}>
          clay or Orangeburg,
        </T>
        <T x={60} y={176} fill={INK}>
          1900–1985
        </T>
        <T x={235} y={150}>
          your pipe all the way
        </T>
        <T x={235} y={161}>
          to the main, incl. the street cut
        </T>
      </>
    ),
  },
  'ice-dam': {
    w: 420,
    h: 200,
    aria: 'Roof cross-section showing heat escaping a poorly insulated attic, snow melting on the upper roof, water refreezing at the cold eave into an ice dam, and water backing up under the shingles.',
    body: (
      <>
        <polygon points="40,150 210,40 380,150" fill={BONE2} stroke={INK} strokeWidth="1.5" />
        <rect
          x="60"
          y="150"
          width="300"
          height="40"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        {/* snow */}
        <path
          d="M110 106 Q 160 60 210 46 Q 260 60 300 98 L 300 84 Q 260 48 210 36 Q 160 48 110 92 Z"
          fill="var(--color-paper)"
          stroke={MUTED}
        />
        <T x={210} y={30} anchor="middle">
          snow
        </T>
        {/* heat arrows */}
        {[150, 210, 270].map((x) => (
          <g key={x}>
            <line x1={x} y1="140" x2={x} y2="112" stroke={RUST} strokeWidth="1.5" />
            <polygon points={`${x - 4},116 ${x},108 ${x + 4},116`} fill={RUST} />
          </g>
        ))}
        <T x={210} y={172} anchor="middle" fill={RUST}>
          heat leaking through a thin attic floor
        </T>
        {/* meltwater */}
        <path d="M300 100 L 352 134" stroke={INK} strokeWidth="1.5" strokeDasharray="3 2" />
        <T x={318} y={96}>
          melt runs down
        </T>
        {/* ice dam */}
        <ellipse cx="366" cy="150" rx="16" ry="8" fill={EDGE} stroke={INK} />
        <T x={396} y={146} anchor="end" fill={INK} bold>
          ice dam
        </T>
        <T x={396} y={157} anchor="end">
          at the cold eave
        </T>
        {/* backup */}
        <path d="M350 144 L 330 132" stroke={RUST} strokeWidth="2" />
        <T x={352} y={182} anchor="end" fill={RUST}>
          water backs under shingles
        </T>
        <T x={40} y={192}>
          fix: air-seal + insulate the attic, vent the roof; then heat cable
        </T>
      </>
    ),
  },
  'radon-mitigation': {
    w: 420,
    h: 220,
    aria: 'House cross-section showing a radon mitigation system: a suction pit under the basement slab, a sealed pipe running up through the house, an inline fan, and a vent discharging above the roofline, with a manometer on the pipe.',
    body: (
      <>
        <rect
          x="90"
          y="70"
          width="200"
          height="80"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <polygon points="84,70 190,20 296,70" fill={BONE2} stroke={INK} strokeWidth="1.5" />
        <rect x="90" y="150" width="200" height="50" fill={BONE2} stroke={INK} strokeWidth="1.5" />
        <T x={190} y={180} anchor="middle">
          basement
        </T>
        <Ground y={150} w={420} />
        {/* slab & pit */}
        <line x1="90" y1="198" x2="290" y2="198" stroke={INK} strokeWidth="2" />
        <ellipse cx="250" cy="206" rx="18" ry="6" fill="none" stroke={RUST} strokeWidth="1.5" />
        <T x={250} y={218} anchor="middle" fill={RUST}>
          suction pit under slab
        </T>
        {/* pipe */}
        <line x1="250" y1="200" x2="250" y2="60" stroke={INK} strokeWidth="4" />
        <line x1="250" y1="60" x2="250" y2="8" stroke={INK} strokeWidth="4" />
        <rect x="240" y="40" width="20" height="16" fill={RUST} />
        <T x={266} y={52}>
          fan (attic or outside)
        </T>
        <T x={266} y={14}>
          vent above roofline
        </T>
        {/* manometer */}
        <rect x="232" y="120" width="8" height="20" fill="none" stroke={MUTED} />
        <T x={228} y={134} anchor="end">
          manometer — check it
        </T>
        {/* radon arrows */}
        {[120, 160, 200].map((x) => (
          <g key={x}>
            <line x1={x} y1="212" x2={x + 20} y2="204" stroke={MUTED} strokeWidth="1" />
          </g>
        ))}
        <T x={100} y={214}>
          soil gas
        </T>
        <T x={310} y={120}>
          typical: $1,200–2,500
        </T>
        <T x={310} y={132}>
          post-mitigation: under 2 pCi/L
        </T>
      </>
    ),
  },
  grading: {
    w: 420,
    h: 190,
    aria: 'Cross-section of a foundation wall showing soil graded to fall six inches in the first ten feet away from the house, a downspout extension discharging five feet out, and a window well with a cover.',
    body: (
      <>
        <rect
          x="40"
          y="40"
          width="120"
          height="120"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <T x={100} y={100} anchor="middle">
          house
        </T>
        {/* grade */}
        <path d="M160 120 L 300 134 L 420 138" stroke={INK} strokeWidth="1.5" fill="none" />
        <path d="M160 120 L 300 134 L 420 138 L 420 190 L 160 190 Z" fill={BONE2} />
        <line x1="160" y1="120" x2="300" y2="120" stroke={MUTED} strokeDasharray="3 3" />
        <line x1="300" y1="120" x2="300" y2="134" stroke={RUST} strokeWidth="2" />
        <T x={306} y={130} fill={RUST}>
          6 in. drop
        </T>
        <T x={230} y={112} anchor="middle">
          first 10 ft
        </T>
        {/* downspout */}
        <line x1="165" y1="40" x2="165" y2="118" stroke={INK} strokeWidth="3" />
        <line x1="165" y1="118" x2="235" y2="126" stroke={RUST} strokeWidth="3" />
        <T x={200} y={146} anchor="middle" fill={RUST}>
          extension, 5+ ft
        </T>
        {/* window well */}
        <rect x="20" y="110" width="20" height="50" fill="none" stroke={INK} strokeWidth="1.5" />
        <line x1="16" y1="108" x2="44" y2="108" stroke={INK} strokeWidth="2" />
        <T x={30} y={176} anchor="middle">
          well + cover
        </T>
        <T x={30} y={186} anchor="middle">
          gravel to drain
        </T>
        <T x={420} y={176} anchor="end">
          bentonite clay swells when wet —
        </T>
        <T x={420} y={186} anchor="end">
          keep water away from the wall
        </T>
      </>
    ),
  },
  'sprinkler-blowout': {
    w: 420,
    h: 190,
    aria: 'Schematic of a lawn irrigation system: water meter, interior shutoff, backflow preventer outside the house, compressor connection point, valve manifold and zones, with the blow-out order numbered.',
    body: (
      <>
        <rect
          x="20"
          y="60"
          width="110"
          height="90"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <T x={75} y={80} anchor="middle">
          house
        </T>
        <circle cx="50" cy="120" r="8" fill="none" stroke={INK} strokeWidth="1.5" />
        <T x={50} y={142} anchor="middle">
          ① shut-off
        </T>
        <line x1="58" y1="120" x2="130" y2="120" stroke={INK} strokeWidth="2.5" />
        {/* backflow */}
        <rect x="150" y="100" width="40" height="24" fill={BONE2} stroke={INK} strokeWidth="1.5" />
        <line x1="130" y1="120" x2="150" y2="120" stroke={INK} strokeWidth="2.5" />
        <line x1="190" y1="112" x2="230" y2="112" stroke={INK} strokeWidth="2.5" />
        <T x={170} y={94} anchor="middle">
          backflow preventer
        </T>
        <T x={170} y={138} anchor="middle">
          ② valves 45°
        </T>
        {/* compressor */}
        <circle cx="170" cy="168" r="10" fill="none" stroke={RUST} strokeWidth="1.5" />
        <line
          x1="170"
          y1="158"
          x2="170"
          y2="124"
          stroke={RUST}
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <T x={186} y={172} fill={RUST}>
          ③ compressor ≤ 50 psi
        </T>
        {/* manifold */}
        <rect x="230" y="96" width="60" height="32" fill="none" stroke={INK} strokeWidth="1.5" />
        <T x={260} y={90} anchor="middle">
          valve box
        </T>
        {[108, 120].map((y, i) => (
          <g key={y}>
            <line x1="290" y1={y} x2="400" y2={y - 30 + i * 60} stroke={INK} strokeWidth="2" />
            <T x={405} y={y - 27 + i * 60}>
              zone {i + 1}
            </T>
          </g>
        ))}
        <line x1="290" y1="114" x2="400" y2="114" stroke={INK} strokeWidth="2" />
        <T x={405} y={117}>
          zone 3
        </T>
        <T x={260} y={150} anchor="middle">
          ④ one zone at a time,
        </T>
        <T x={260} y={161} anchor="middle">
          2 min each, until mist
        </T>
        <T x={260} y={182} anchor="middle" fill={INK}>
          ⑤ leave ball valves half-open for winter
        </T>
      </>
    ),
  },
  'expansive-soil': {
    w: 420,
    h: 190,
    aria: 'Two side-by-side foundation cross-sections: dry clay with a level slab, and wet clay swollen upward, heaving the basement slab and garage floor while a floating wall with a gap above it stays undamaged.',
    body: (
      <>
        <T x={105} y={14} anchor="middle" fill={INK} bold>
          dry
        </T>
        <T x={315} y={14} anchor="middle" fill={INK} bold>
          wet — clay swells
        </T>
        {/* dry */}
        <rect
          x="30"
          y="30"
          width="150"
          height="90"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <line x1="30" y1="110" x2="180" y2="110" stroke={INK} strokeWidth="2" />
        <rect x="30" y="120" width="150" height="50" fill={BONE2} />
        <line x1="105" y1="40" x2="105" y2="106" stroke={MUTED} strokeWidth="3" />
        <T x={105} y={150} anchor="middle">
          bentonite clay
        </T>
        {/* wet */}
        <rect
          x="240"
          y="30"
          width="150"
          height="90"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <path d="M240 110 Q 315 92 390 110" stroke={RUST} strokeWidth="2" fill="none" />
        <path d="M240 120 Q 315 100 390 120 L 390 170 L 240 170 Z" fill={EDGE} />
        <line x1="315" y1="40" x2="315" y2="92" stroke={MUTED} strokeWidth="3" />
        <rect x="312" y="92" width="6" height="8" fill="none" stroke={RUST} />
        <T x={322} y={100} fill={RUST}>
          gap = floating wall
        </T>
        <T x={315} y={150} anchor="middle">
          slab heaves up to 2 in.
        </T>
        <T x={210} y={186} anchor="middle">
          a 2–4 in. void above a basement partition is by design, not damage
        </T>
      </>
    ),
  },
  'roof-hail': {
    w: 420,
    h: 170,
    aria: 'Layered cutaway of an asphalt shingle roof: decking, underlayment, ice-and-water shield at the eave, shingles, with a hail bruise shown on a standard shingle and an intact Class 4 shingle beside it.',
    body: (
      <>
        <polygon points="20,120 20,100 300,40 300,60" fill={BONE2} stroke={INK} />
        <T x={150} y={126} anchor="middle">
          decking
        </T>
        <polygon points="20,100 20,92 300,32 300,40" fill={RULE} stroke={INK} />
        <polygon points="20,92 20,86 120,64 120,70" fill={RUST} />
        <T x={60} y={140} fill={RUST}>
          ice & water shield, first 3–6 ft
        </T>
        <polygon points="20,86 20,78 300,18 300,26" fill="var(--color-paper)" stroke={INK} />
        <T x={160} y={30} anchor="middle">
          shingles
        </T>
        {/* bruise */}
        <ellipse cx="200" cy="44" rx="7" ry="4" fill={MUTED} />
        <line x1="200" y1="48" x2="200" y2="100" stroke={MUTED} strokeDasharray="2 2" />
        <T x={200} y={112} anchor="middle">
          hail bruise: mat fractured
        </T>
        {/* class 4 */}
        <rect
          x="330"
          y="20"
          width="70"
          height="40"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <T x={365} y={38} anchor="middle" fill={INK} bold>
          Class 4
        </T>
        <T x={365} y={50} anchor="middle">
          impact-rated
        </T>
        <T x={365} y={76} anchor="middle">
          10–30% off premium
        </T>
        <T x={365} y={87} anchor="middle">
          +10–20% to install
        </T>
        <T x={210} y={160} anchor="middle">
          insurers write roofs over ~15 yr at actual cash value, not replacement
        </T>
      </>
    ),
  },
  'water-heater': {
    w: 420,
    h: 200,
    aria: 'Diagram of a gas water heater tank with cold inlet, hot outlet, expansion tank on the cold line, temperature and pressure relief valve with discharge pipe, sediment at the tank bottom, and the drain valve used for annual flushing.',
    body: (
      <>
        <rect
          x="150"
          y="40"
          width="90"
          height="130"
          rx="10"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <path d="M150 150 Q 195 140 240 150 L 240 170 L 150 170 Z" fill={EDGE} />
        <T x={195} y={164} anchor="middle" fill={INK}>
          sediment
        </T>
        <T x={195} y={100} anchor="middle">
          40–50 gal
        </T>
        {/* cold in */}
        <line x1="165" y1="40" x2="165" y2="14" stroke={INK} strokeWidth="3" />
        <T x={160} y={10} anchor="end">
          cold in
        </T>
        <circle cx="120" cy="24" r="12" fill={BONE2} stroke={INK} strokeWidth="1.5" />
        <line x1="132" y1="24" x2="165" y2="24" stroke={INK} strokeWidth="3" />
        <T x={120} y={52} anchor="middle">
          expansion tank
        </T>
        <T x={120} y={63} anchor="middle">
          (required here)
        </T>
        {/* hot out */}
        <line x1="225" y1="40" x2="225" y2="14" stroke={RUST} strokeWidth="3" />
        <T x={232} y={10}>
          hot out
        </T>
        {/* TPR */}
        <rect x="240" y="60" width="14" height="10" fill="none" stroke={INK} strokeWidth="1.5" />
        <line x1="254" y1="65" x2="280" y2="65" stroke={INK} strokeWidth="2" />
        <line x1="280" y1="65" x2="280" y2="175" stroke={INK} strokeWidth="2" />
        <T x={286} y={70}>
          T&P relief valve
        </T>
        <T x={286} y={82}>
          pipe to within 6 in. of floor
        </T>
        {/* drain */}
        <rect x="238" y="150" width="14" height="8" fill={RUST} />
        <T x={258} y={158} fill={RUST}>
          drain valve — flush yearly
        </T>
        <T x={258} y={170} fill={RUST}>
          (hard water shortens life to 8–12 yr)
        </T>
        {/* pan */}
        <rect x="140" y="170" width="110" height="6" fill="none" stroke={INK} />
        <T x={195} y={190} anchor="middle">
          drain pan, seismic strap not required
        </T>
        <T x={40} y={120}>
          set 120°F
        </T>
      </>
    ),
  },
  'egress-window': {
    w: 420,
    h: 200,
    aria: 'Cross-section of a basement egress window: a window well at least 36 inches out from the wall, an opening of at least 5.7 square feet, sill no higher than 44 inches above the floor, a ladder for wells deeper than 44 inches, and a cover.',
    body: (
      <>
        <Ground y={60} w={420} />
        <rect
          x="180"
          y="60"
          width="200"
          height="130"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <T x={300} y={180} anchor="middle">
          basement floor
        </T>
        <line x1="180" y1="190" x2="380" y2="190" stroke={INK} strokeWidth="2" />
        {/* window */}
        <rect x="178" y="80" width="6" height="60" fill={RUST} />
        <T x={196} y={100} fill={RUST}>
          opening ≥ 5.7 sq ft
        </T>
        <T x={196} y={112} fill={RUST}>
          ≥ 20 in. wide, ≥ 24 in. tall
        </T>
        {/* sill height */}
        <line x1="230" y1="140" x2="230" y2="190" stroke={MUTED} strokeDasharray="3 2" />
        <T x={236} y={168}>
          sill ≤ 44 in.
        </T>
        {/* well */}
        <rect x="110" y="60" width="70" height="90" fill={BONE2} stroke={INK} strokeWidth="1.5" />
        <line x1="110" y1="66" x2="110" y2="144" stroke={MUTED} />
        <T x={145} y={164} anchor="middle">
          well ≥ 36 in. out
        </T>
        <T x={145} y={176} anchor="middle">
          ≥ 9 sq ft floor
        </T>
        {/* ladder */}
        <line x1="118" y1="66" x2="118" y2="146" stroke={INK} strokeWidth="1.5" />
        <line x1="128" y1="66" x2="128" y2="146" stroke={INK} strokeWidth="1.5" />
        {[80, 96, 112, 128].map((y) => (
          <line key={y} x1="118" y1={y} x2="128" y2={y} stroke={INK} strokeWidth="1.5" />
        ))}
        <T x={60} y={110} anchor="middle">
          ladder if
        </T>
        <T x={60} y={121} anchor="middle">
          deeper than 44 in.
        </T>
        {/* cover */}
        <line x1="106" y1="56" x2="184" y2="56" stroke={INK} strokeWidth="2.5" />
        <T x={145} y={50} anchor="middle">
          cover, openable from inside
        </T>
        <T x={300} y={30} anchor="middle">
          without this, it is not a bedroom — for sale, rent, or appraisal
        </T>
      </>
    ),
  },
  'defensible-space': {
    w: 420,
    h: 220,
    aria: 'Plan view of a house with three concentric wildfire defensible-space zones: zero to five feet of noncombustible ground, five to thirty feet of lean, spaced and pruned vegetation, and thirty to one hundred feet of thinned trees with crowns ten feet apart.',
    body: (
      <>
        <ellipse
          cx="210"
          cy="110"
          rx="200"
          ry="100"
          fill={BONE2}
          stroke={MUTED}
          strokeDasharray="4 3"
        />
        <ellipse cx="210" cy="110" rx="120" ry="62" fill={RULE} stroke={MUTED} />
        <ellipse cx="210" cy="110" rx="62" ry="34" fill={EDGE} stroke={INK} />
        <rect
          x="180"
          y="96"
          width="60"
          height="28"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <T x={210} y={114} anchor="middle" fill={INK}>
          house
        </T>
        <T x={210} y={150} anchor="middle" fill={INK} bold>
          0–5 ft: nothing that burns
        </T>
        <T x={210} y={161} anchor="middle">
          rock mulch, no junipers, no wood under the deck
        </T>
        <T x={210} y={184} anchor="middle" fill={INK} bold>
          5–30 ft: lean and clean
        </T>
        <T x={210} y={195} anchor="middle">
          prune limbs 6–10 ft up, gaps between shrubs, mow
        </T>
        <T x={210} y={212} anchor="middle" fill={INK} bold>
          30–100 ft: thin — crowns 10 ft apart
        </T>
        {/* trees */}
        {[
          [60, 60],
          [90, 160],
          [340, 50],
          [360, 150],
          [150, 30],
          [280, 190],
        ].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="9" fill="var(--color-paper)" stroke={MUTED} />
        ))}
      </>
    ),
  },
  hydrozones: {
    w: 420,
    h: 200,
    aria: 'Plan view of a residential lot divided into hydrozones: a small high-water turf area where it is used, a moderate zone of shrubs and perennials on drip irrigation, and low-water native beds and rock along the street and side yard.',
    body: (
      <>
        <rect x="20" y="20" width="380" height="160" fill={BONE2} stroke={INK} strokeWidth="1.5" />
        <rect
          x="160"
          y="70"
          width="100"
          height="60"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <T x={210} y={104} anchor="middle" fill={INK}>
          house
        </T>
        {/* low water strip along street */}
        <rect x="20" y="150" width="380" height="30" fill={RULE} />
        <T x={210} y={169} anchor="middle" fill={INK}>
          LOW — native grasses, rock, no spray heads (the street strip)
        </T>
        {/* side yards low */}
        <rect x="20" y="20" width="50" height="130" fill={RULE} />
        <rect x="350" y="20" width="50" height="130" fill={RULE} />
        <T x={45} y={90} anchor="middle" size={8}>
          LOW
        </T>
        <T x={375} y={90} anchor="middle" size={8}>
          LOW
        </T>
        {/* moderate beds */}
        <rect x="70" y="20" width="280" height="40" fill={EDGE} />
        <T x={210} y={44} anchor="middle" fill={INK}>
          MODERATE — shrubs and perennials on drip
        </T>
        {/* turf where used */}
        <rect
          x="90"
          y="70"
          width="60"
          height="70"
          fill="var(--color-paper)"
          stroke={RUST}
          strokeWidth="1.5"
        />
        <T x={120} y={102} anchor="middle" fill={RUST} size={8}>
          HIGH
        </T>
        <T x={120} y={113} anchor="middle" fill={RUST} size={8}>
          turf where
        </T>
        <T x={120} y={124} anchor="middle" fill={RUST} size={8}>
          it is used
        </T>
        <T x={305} y={110} anchor="middle" size={8}>
          patio
        </T>
        <T x={210} y={194} anchor="middle">
          one valve per zone — never water rock on the turf schedule
        </T>
      </>
    ),
  },
  furnace: {
    w: 420,
    h: 190,
    aria: 'Diagram of a forced-air gas furnace: return duct bringing air through a filter, blower, heat exchanger, supply plenum, flue, and condensate drain on a high-efficiency unit, with the filter slot marked for monthly changes.',
    body: (
      <>
        <rect
          x="150"
          y="40"
          width="100"
          height="120"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <T x={200} y={60} anchor="middle">
          supply plenum
        </T>
        <rect x="160" y="70" width="80" height="40" fill={BONE2} stroke={INK} />
        <T x={200} y={93} anchor="middle">
          heat exchanger
        </T>
        <circle cx="200" cy="135" r="14" fill="none" stroke={INK} strokeWidth="1.5" />
        <T x={200} y={138} anchor="middle" size={8}>
          blower
        </T>
        {/* return + filter */}
        <rect x="60" y="115" width="90" height="40" fill="none" stroke={INK} strokeWidth="1.5" />
        <T x={105} y={110} anchor="middle">
          return air
        </T>
        <rect x="140" y="115" width="8" height="40" fill={RUST} />
        <T x={105} y={170} anchor="middle" fill={RUST}>
          filter — 1 in.: monthly
        </T>
        <T x={105} y={181} anchor="middle" fill={RUST}>
          4 in.: every 6 months
        </T>
        {/* supply */}
        <line x1="200" y1="40" x2="200" y2="14" stroke={INK} strokeWidth="3" />
        <T x={208} y={14}>
          to the house
        </T>
        {/* flue */}
        <line x1="240" y1="70" x2="300" y2="70" stroke={MUTED} strokeWidth="3" />
        <line x1="300" y1="70" x2="300" y2="14" stroke={MUTED} strokeWidth="3" />
        <T x={306} y={14}>
          flue (or PVC if 90%+)
        </T>
        {/* condensate */}
        <line x1="250" y1="150" x2="300" y2="150" stroke={INK} strokeWidth="1.5" />
        <line x1="300" y1="150" x2="300" y2="175" stroke={INK} strokeWidth="1.5" />
        <T x={306} y={158}>
          condensate line —
        </T>
        <T x={306} y={169}>
          clogs, then the furnace stops
        </T>
        <T x={200} y={186} anchor="middle">
          service in October; CO alarm on every floor
        </T>
      </>
    ),
  },
  'hose-bib': {
    w: 420,
    h: 170,
    aria: 'Cross-section of an exterior wall with a frost-free hose bib: the valve seat sits inside the heated wall at the end of a long stem, the hose must be disconnected in autumn, and an interior shut-off with a bleeder is shown for older non-frost-free spigots.',
    body: (
      <>
        <rect x="180" y="20" width="30" height="130" fill={BONE2} stroke={INK} strokeWidth="1.5" />
        <T x={120} y={34} anchor="middle">
          inside (heated)
        </T>
        <T x={300} y={34} anchor="middle">
          outside
        </T>
        {/* frost free */}
        <line x1="60" y1="70" x2="230" y2="70" stroke={INK} strokeWidth="4" />
        <circle cx="240" cy="70" r="8" fill="none" stroke={INK} strokeWidth="2" />
        <T x={252} y={60}>
          frost-free bib
        </T>
        <rect x="188" y="64" width="8" height="12" fill={RUST} />
        <T x={190} y={90} anchor="middle" fill={RUST} size={8}>
          valve seat
        </T>
        <T x={190} y={100} anchor="middle" fill={RUST} size={8}>
          in the warm
        </T>
        <path
          d="M248 70 q 30 0 30 30 q 0 20 -20 24"
          stroke={MUTED}
          strokeWidth="3"
          fill="none"
          strokeDasharray="5 3"
        />
        <T x={300} y={130} fill={RUST}>
          hose OFF by October —
        </T>
        <T x={300} y={141} fill={RUST}>
          left on, it freezes anyway
        </T>
        {/* old style */}
        <line x1="60" y1="130" x2="230" y2="130" stroke={MUTED} strokeWidth="3" />
        <circle cx="240" cy="130" r="7" fill="none" stroke={MUTED} strokeWidth="1.5" />
        <circle cx="110" cy="130" r="8" fill="none" stroke={INK} strokeWidth="1.5" />
        <line x1="110" y1="138" x2="110" y2="150" stroke={INK} strokeWidth="1.5" />
        <T x={110} y={162} anchor="middle">
          older bib: shut off inside,
        </T>
        <T x={110} y={172} anchor="middle">
          open the bleeder, open outside
        </T>
      </>
    ),
  },
  'swamp-cooler': {
    w: 420,
    h: 190,
    aria: 'Diagram of a rooftop evaporative cooler: water supply line with float valve in the reservoir, pump lifting water to soak the pads, fan pulling outside air through the wet pads into the house, and the need to open a window for airflow.',
    body: (
      <>
        <rect
          x="120"
          y="40"
          width="160"
          height="100"
          fill="var(--color-paper)"
          stroke={INK}
          strokeWidth="1.5"
        />
        <rect x="120" y="120" width="160" height="20" fill={EDGE} />
        <T x={200} y={134} anchor="middle" size={8}>
          reservoir — float valve keeps level
        </T>
        <rect x="120" y="50" width="14" height="70" fill={RULE} stroke={INK} />
        <rect x="266" y="50" width="14" height="70" fill={RULE} stroke={INK} />
        <T x={100} y={88} anchor="end">
          pads (aspen or rigid)
        </T>
        <T x={100} y={100} anchor="end">
          replace every 1–2 yr
        </T>
        <circle cx="200" cy="85" r="22" fill="none" stroke={INK} strokeWidth="1.5" />
        <T x={200} y={88} anchor="middle" size={8}>
          fan
        </T>
        <rect x="240" y="108" width="14" height="12" fill={RUST} />
        <T x={262} y={106} size={8} fill={RUST}>
          pump
        </T>
        <line x1="247" y1="108" x2="247" y2="56" stroke={RUST} strokeWidth="1.5" />
        <line x1="134" y1="56" x2="266" y2="56" stroke={RUST} strokeWidth="1.5" />
        {/* air arrows */}
        <line x1="60" y1="70" x2="118" y2="70" stroke={MUTED} strokeWidth="1.5" />
        <polygon points="112,66 120,70 112,74" fill={MUTED} />
        <line x1="282" y1="70" x2="340" y2="70" stroke={MUTED} strokeWidth="1.5" />
        <polygon points="274,66 282,70 274,74" fill={MUTED} transform="rotate(180 278 70)" />
        <T x={60} y={62}>
          dry outside air
        </T>
        <T x={300} y={62}>
          dry outside air
        </T>
        <line x1="200" y1="140" x2="200" y2="170" stroke={INK} strokeWidth="4" />
        <T x={208} y={160}>
          cool, humid air down the duct
        </T>
        {/* supply */}
        <line x1="300" y1="150" x2="300" y2="128" stroke={INK} strokeWidth="2" />
        <T x={306} y={150} size={8}>
          ¼ in. water line — drain & cover in October
        </T>
        <T x={200} y={186} anchor="middle">
          open a window on the far side or it does nothing
        </T>
      </>
    ),
  },
}

/** Named inline SVG schematic. Every diagram has an aria-label that says what it shows. */
export function Diagram({
  name,
  caption,
  note,
}: {
  name: keyof typeof DIAGRAMS | string
  caption?: string
  note?: string
}) {
  const d = DIAGRAMS[name]
  if (!d) return null
  return (
    <Figure caption={caption ?? 'How it works'} note={note}>
      <svg
        viewBox={`0 0 ${d.w} ${d.h}`}
        className="h-auto w-full max-w-[34rem]"
        role="img"
        aria-label={d.aria}
      >
        {d.body}
      </svg>
      <p className="text-muted mt-3 mb-0 text-[0.8125rem] leading-relaxed">{d.aria}</p>
    </Figure>
  )
}

export const diagramNames = Object.keys(DIAGRAMS)
