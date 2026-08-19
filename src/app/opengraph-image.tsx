import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.name} — ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Rendered once at build time and emitted as a static file.
export const dynamic = 'force-static'

/**
 * One site-wide social card, inherited by every page.
 *
 * Deliberately not generated per document: at several hundred articles that
 * would add a satori render to every page of the build for a marginal gain.
 * If per-article cards become worth it, add an `opengraph-image.tsx` inside
 * `answers/[slug]/` and accept the build cost.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#F3EFE7',
        color: '#1A1714',
        padding: '72px 80px',
        fontFamily: 'Georgia, serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 22,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#8A8072',
          fontFamily: 'monospace',
        }}
      >
        {site.coverage.join('  ·  ')}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 76, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          {site.tagline}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            height: 6,
            width: 180,
            background: '#C4501F',
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', fontSize: 34 }}>{site.name}</div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#5C544A',
            fontFamily: 'monospace',
          }}
        >
          Answers since {site.founded}
        </div>
      </div>
    </div>,
    size
  )
}
