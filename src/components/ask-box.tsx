'use client'

import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export interface AskEntry {
  q: string
  url: string
  /** Extra match terms — tags and category — kept short to keep the payload small. */
  k: string
}

/**
 * The hero ask field.
 *
 * Matching runs against a compact index of question strings rather than the
 * full corpus, so the client payload stays flat as the library grows. Anything
 * the index cannot answer confidently falls through to the Pagefind-backed
 * search page rather than showing a dead end.
 */
export function AskBox({
  index,
  chips,
}: {
  index: readonly AskEntry[]
  chips: readonly { label: string; url: string }[]
}) {
  const router = useRouter()
  const [typed, setTyped] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const matches = useMemo(() => {
    const query = typed.trim().toLowerCase()
    if (query.length < 3) return []
    const words = query.split(/\s+/).filter((w) => w.length > 2)
    if (!words.length) return []

    return index
      .map((entry) => {
        const haystack = `${entry.q} ${entry.k}`.toLowerCase()
        let score = 0
        for (const word of words) {
          if (haystack.includes(word)) score += 1
        }
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
      router.push(matches[0]!.url)
      return
    }
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  const showSuggestions = focused && matches.length > 0

  return (
    <div className="relative">
      <div className="flex max-w-4xl items-center gap-4 border-b-2 border-ink pb-3.5">
        <label htmlFor="frl-ask" className="label shrink-0 text-rust">
          You
        </label>
        <input
          id="frl-ask"
          ref={inputRef}
          type="search"
          role="combobox"
          aria-expanded={showSuggestions}
          aria-controls="frl-ask-suggestions"
          aria-autocomplete="list"
          autoComplete="off"
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          onFocus={() => setFocused(true)}
          // Delay so a click on a suggestion lands before the list unmounts.
          onBlur={() => window.setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submit()
            if (e.key === 'Escape') setFocused(false)
          }}
          placeholder="where do I live if I want a yard, a taco truck, and a 25-minute commute"
          className="min-w-0 flex-1 border-0 bg-transparent p-0 font-display text-xl italic leading-snug text-ink outline-none placeholder:text-dim sm:text-2xl md:text-[1.875rem] [&::-webkit-search-cancel-button]:appearance-none"
        />
        <button type="button" onClick={submit} className="chip shrink-0 border-ink text-ink">
          Ask
        </button>
      </div>

      {showSuggestions ? (
        <ul
          id="frl-ask-suggestions"
          role="listbox"
          className="absolute left-0 right-0 top-full z-30 max-w-4xl border border-edge border-t-0 bg-paper shadow-sm"
        >
          {matches.map((m) => (
            <li key={m.url} role="option" aria-selected={false}>
              <Link
                href={m.url}
                className="block border-b border-rule px-4 py-3 text-[0.9375rem] leading-snug text-ink last:border-b-0 hover:bg-bone-2"
              >
                {m.q}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={`/search?q=${encodeURIComponent(typed.trim())}`}
              className="label block bg-bone-2 px-4 py-3 hover:text-ink"
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
