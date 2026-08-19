import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google'

import './globals.css'
import { site } from '@/lib/site'
import { buildMetadata, siteGraph } from '@/lib/seo'
import { JsonLd } from '@/components/jsonld'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const sans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-instrument-serif',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...buildMetadata({
    title: site.tagline,
    description: site.description,
    path: '/',
  }),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  applicationName: site.name,
  category: 'real estate',
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false, address: false, email: false },
}

export const viewport: Viewport = {
  themeColor: '#f3efe7',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.lang} className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title={site.name} href="/feed.xml" />
        {/* Points crawlers and AI agents at the machine-readable site summary. */}
        <link rel="llms" type="text/plain" href="/llms.txt" />
      </head>
      <body className="flex min-h-screen flex-col">
        <JsonLd graph={siteGraph()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
