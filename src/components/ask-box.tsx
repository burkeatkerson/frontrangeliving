'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface AskEntry {
  /** question */
  q: string
  /** url */
  u: string
  /** extra match terms: tags + category */
  k: string
}

/**
 * The hero ask field.
 *
 * The question index is fetched from `/ask-index.json` on first keystroke
 * rather than embedded in the page, so the home page payload does not grow
 * with the library. Anything the index cannot match confidently falls through
 * to the Pagefind-backed search page rather than showing a dead end.
 */
export function AskBox({ chips }: { chips: readonly { label: string; url: string }[] }) {
  const router = useRouter()
  const [typed, setTyped] = useState('')
  const [focused, setFocused] = useState(false)
  const [index, setIndex] = useState<AskEntry[]>([])
  const loading = useRef(false)

  const loadIndex = useCallback(async () => {
    if (loading.current) return
    loading.current = true
    try {
      const res = await fetch('/ask-index.json')
      if (res.ok) setIndex((await res.json()) as AskEntry[])
    } catch {
      // Suggestions are an enhancement; the Ask button still routes to search.
    }
  }, [])

  const matches = useMemo(() => {
    const query = typed.trim().toLowerCase()
    if (query.length < 3 || !index.length) return []
    const words = query.split(/\s+/).filter((w) => w.length > 2)
    if (!words.length) return []

    return index
      .map((entry) => {
        const haystack = `${entry.q} ${entry.k}`.toLowerCase()
        let score = 0
        for (const word of words) if (haystack.includes(word)) score += 1
        if (haystack.includes(query)) score += 3
        return { entry, score }
      })
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((m) => m.entry)
  }, [index, typed])

  const submit = () => {
    const query = typed.trim()
    if (!query) return
    if (matches.length === 1) {
      router.push(matches[0]!.u)
      return
    }
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  const showSuggestions = focused && matches.length > 0

  return (
    <div className="relative">
      <div className="border-ink flex max-w-4xl items-center gap-4 border-b-2 pb-3.5">
        <label htmlFor="frl-ask" className="label text-rust shrink-0">
          You
        </label>
        <input
          id="frl-ask"
          type="search"
          role="combobox"
          aria-expanded={showSuggestions}
          aria-controls="frl-ask-suggestions"
          aria-autocomplete="list"
          autoComplete="off"
          value={typed}
          onChange={(e) => {
            setTyped(e.target.value)
            void loadIndex()
          }}
          onFocus={() => {
            setFocused(true)
            void loadIndex()
          }}
          // Delayed so a click on a suggestion lands before the list unmounts.
          onBlur={() => window.setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submit()
            if (e.key === 'Escape') setFocused(false)
          }}
          placeholder="where do I live if I want a yard, a taco truck, and a 25-minute commute"
          className="font-display text-ink placeholder:text-dim min-w-0 flex-1 border-0 bg-transparent p-0 text-xl leading-snug italic outline-none sm:text-2xl md:text-[1.875rem] [&::-webkit-search-cancel-button]:appearance-none"
        />
        <button type="button" onClick={submit} className="chip border-ink text-ink shrink-0">
          Ask
        </button>
      </div>

      {showSuggestions ? (
        <ul
          id="frl-ask-suggestions"
          role="listbox"
          className="border-edge bg-paper absolute inset-x-0 top-full z-30 max-w-4xl border border-t-0 shadow-sm"
        >
          {matches.map((m) => (
            <li key={m.u} role="option" aria-selected={false}>
              <Link
                href={m.u}
                className="border-rule text-ink hover:bg-bone-2 block border-b px-4 py-3 text-[0.9375rem] leading-snug last:border-b-0"
              >
                {m.q}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={`/search?q=${encodeURIComponent(typed.trim())}`}
              className="label bg-bone-2 hover:text-ink block px-4 py-3"
            >
              Search everything for “{typed.trim()}” →
            </Link>
          </li>
        </ul>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="label-sm mr-1">Or try</span>
        {chips.map((chip) => (
          <Link key={chip.url} href={chip.url} className="chip chip-round">
            {chip.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
