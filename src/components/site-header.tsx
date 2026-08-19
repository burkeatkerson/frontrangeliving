'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'
import { Shell } from './primitives'

interface NavItem {
  href: string
  label: string
  accent?: boolean
}

const NAV: readonly NavItem[] = [
  { href: '/answers', label: 'Ask' },
  { href: '/places', label: 'Places' },
  { href: '/columns/taco-report', label: 'Eat' },
  { href: '/columns/ten-minutes-to-dirt', label: 'Outside' },
  { href: '/lanes/family', label: 'With kids' },
  { href: '/investing', label: 'Investing', accent: true },
]

export function SiteHeader() {
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="border-rule bg-bone/95 supports-[backdrop-filter]:bg-bone/80 sticky top-0 z-50 border-b backdrop-blur">
      <Shell className="flex items-center gap-7 py-4">
        <Link href="/" className="font-display text-ink hover:text-ink text-2xl tracking-[-0.01em]">
          {site.name}
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-[1.375rem] lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'label transition-colors',
                item.accent ? 'text-rust hover:text-rust-deep' : 'hover:text-ink',
                isActive(item.href) && !item.accent && 'border-rust text-ink border-b-2 pb-0.5'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/search" className="label hover:text-ink" aria-label="Search the site">
            Search
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="chip ml-auto lg:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </Shell>

      {open ? (
        <nav id="mobile-nav" aria-label="Primary" className="border-rule border-t lg:hidden">
          <Shell className="flex flex-col py-2">
            {[...NAV, { href: '/search', label: 'Search' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'label border-rule border-b py-3 last:border-b-0',
                  item.accent ? 'text-rust' : 'text-ink'
                )}
              >
                {item.label}
              </Link>
            ))}
          </Shell>
        </nav>
      ) : null}
    </header>
  )
}
