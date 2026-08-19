import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** "March 11, 2026" */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

/** "revised 8.14.26" — the compact stamp used in the mastheads. */
export function revisionStamp(iso: string): string {
  const d = new Date(iso)
  const m = d.getUTCMonth() + 1
  const day = d.getUTCDate()
  const y = String(d.getUTCFullYear()).slice(2)
  return `revised ${m}.${day}.${y}`
}

/** 1200 -> "1.2k". Used for the "asked N times" counts in the library. */
export function compactCount(n: number): string {
  if (n < 1000) return String(n)
  return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`
}

/** Chunk an array into fixed-size pages. */
export function paginate<T>(items: readonly T[], size: number): T[][] {
  const pages: T[][] = []
  for (let i = 0; i < items.length; i += size) pages.push(items.slice(i, i + size))
  return pages.length ? pages : [[]]
}

/** Strip markdown/MDX noise down to plain prose for meta descriptions. */
export function toPlainText(input: string, max = 300): string {
  const text = input
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  if (text.length <= max) return text
  return `${text.slice(0, text.lastIndexOf(' ', max) || max)}…`
}
