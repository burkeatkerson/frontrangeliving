'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Label } from './primitives'

interface PagefindResultData {
  url: string
  meta: { title?: string }
  excerpt: string
}

interface PagefindResult {
  id: string
  data: () => Promise<PagefindResultData>
}

interface Pagefind {
  search: (term: string) => Promise<{ results: PagefindResult[] }>
  options?: (opts: Record<string, unknown>) => Promise<void>
}

/**
 * Search is Pagefind: a static index built from the rendered HTML after
 * `next build`, loaded in chunks on demand. It stays fast at thousands of
 * pages and needs no server, which is the whole point of a static site.
 */
export function SearchClient() {
  const router = useRouter()
  const params = useSearchParams()
  const initial = params.get('q') ?? ''

  const [query, setQuery] = useState(initial)
  const [results, setResults] = useState<PagefindResultData[]>([])
  const [state, setState] = useState<'idle' | 'loading' | 'ready' | 'unavailable'>('idle')
  const pagefind = useRef<Pagefind | null>(null)

  const load = useCallback(async () => {
    if (pagefind.current) return pagefind.current
    try {
      // Built into /pagefind at deploy time, so it must not be bundled.
      const mod = (await import(
        /* webpackIgnore: true */ /* @vite-ignore */ '/pagefind/pagefind.js' as string
      )) as Pagefind
      await mod.options?.({ excerptLength: 30 })
      pagefind.current = mod
      return mod
    } catch {
      setState('unavailable')
      return null
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    const term = query.trim()

    if (term.length < 2) {
      setResults([])
      setState('idle')
      return
    }

    setState('loading')
    const timer = window.setTimeout(async () => {
      const pf = await load()
      if (!pf || cancelled) return
      const search = await pf.search(term)
      const data = await Promise.all(search.results.slice(0, 30).map((r) => r.data()))
      if (cancelled) return
      setResults(data)
      setState('ready')
    }, 180)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [query, load])

  // Keep the URL shareable without pushing a history entry per keystroke.
  useEffect(() => {
    const term = query.trim()
    const next = term ? `/search?q=${encodeURIComponent(term)}` : '/search'
    router.replace(next, { scroll: false })
  }, [query, router])

  return (
    <div>
      <div className="flex items-center gap-4 border-b-2 border-ink pb-3.5">
        <label htmlFor="frl-search" className="label shrink-0 text-rust">
          Find
        </label>
        <input
          id="frl-search"
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="green chile, sewer scope, splash pads, Louisville…"
          className="min-w-0 flex-1 border-0 bg-transparent p-0 font-display text-xl italic leading-snug text-ink outline-none placeholder:text-dim sm:text-2xl md:text-[1.75rem] [&::-webkit-search-cancel-button]:appearance-none"
        />
      </div>

      <div className="mt-6" aria-live="polite">
        {state === 'unavailable' ? (
          <p className="text-[0.9375rem] text-muted">
            The search index isn’t built yet. Run <code className="font-mono">npm run build</code>{' '}
            to generate it, then reload — search does not run in dev.
          </p>
        ) : state === 'loading' ? (
          <Label small>Searching…</Label>
        ) : state === 'ready' && results.length === 0 ? (
          <p className="text-[0.9375rem] text-muted">
            Nothing matched “{query.trim()}”. Try fewer words — or{' '}
            <Link href="/answers">browse every answer</Link>.
          </p>
        ) : state === 'ready' ? (
          <>
            <Label small className="mb-3 block">
              {results.length} {results.length === 1 ? 'result' : 'results'}
            </Label>
            <ul>
              {results.map((r) => (
                <li key={r.url} className="border-b border-rule py-4">
                  <h2 className="text-xl leading-snug">
                    <Link href={r.url} className="text-ink hover:text-rust">
                      {r.meta.title ?? r.url}
                    </Link>
                  </h2>
                  <p
                    className="mt-1.5 max-w-[52em] text-sm leading-relaxed text-body [&_mark]:bg-bone-2 [&_mark]:text-ink"
                    // Pagefind returns its own highlighted excerpt markup.
                    dangerouslySetInnerHTML={{ __html: r.excerpt }}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-[0.9375rem] text-muted">
            Search runs over every answer, place guide, column entry and investing brief.
          </p>
        )}
      </div>
    </div>
  )
}
