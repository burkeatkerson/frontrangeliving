import * as runtime from 'react/jsx-runtime'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  CorridorMap,
  PriceLadder,
  DriveTimes,
  ElevationScale,
  FactTable,
  PhotoSlot,
} from './visuals'

/**
 * Velite compiles each MDX body to a function-body string. Evaluating it here
 * happens only during prerender (every page in this app is static), so no
 * `new Function` ever reaches the browser.
 */
function useMDXComponent(code: string) {
  const fn = new Function(code)
  return fn({ ...runtime }).default as (props: { components?: MDXComponents }) => ReactNode
}

type MDXComponents = Record<string, React.ComponentType<never>>

function Anchor({ href = '', ...props }: ComponentPropsWithoutRef<'a'>) {
  const external = /^https?:\/\//.test(href)
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
  }
  return <Link href={href} {...props} />
}

/** `<Note>` — the inset caveat used for regulatory and "we could be wrong" copy. */
function Note({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <aside className="not-prose border-rust bg-bone-2 my-7 border-l-2 px-5 py-4">
      {label ? <div className="label mb-1.5">{label}</div> : null}
      <div className="text-body text-[0.9375rem] leading-relaxed [&>p]:m-0 [&>p+p]:mt-3">
        {children}
      </div>
    </aside>
  )
}

/** `<Stat>` — a single mono figure with a caption, for inline numbers. */
function Stat({ value, caption }: { value: string; caption: string }) {
  return (
    <span className="not-prose mr-6 inline-flex flex-col align-top">
      <span className="font-display text-ink text-3xl leading-none">{value}</span>
      <span className="label-sm mt-1">{caption}</span>
    </span>
  )
}

const components: MDXComponents = {
  a: Anchor as never,
  Note: Note as never,
  Stat: Stat as never,
  // Visual aids for the city anchors. See components/visuals.tsx.
  CorridorMap: CorridorMap as never,
  PriceLadder: PriceLadder as never,
  DriveTimes: DriveTimes as never,
  ElevationScale: ElevationScale as never,
  FactTable: FactTable as never,
  PhotoSlot: PhotoSlot as never,
  img: ((props: ComponentPropsWithoutRef<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt ?? ''} loading="lazy" decoding="async" className="w-full" />
  )) as never,
  table: ((props: ComponentPropsWithoutRef<'table'>) => (
    <div className="not-prose my-7 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  )) as never,
}

export function MDXContent({ code, className }: { code: string; className?: string }) {
  const Component = useMDXComponent(code)
  return (
    <div
      className={cn(
        'prose prose-frl max-w-none',
        'prose-headings:font-display prose-headings:font-normal prose-headings:tracking-[-0.01em]',
        'prose-h2:mt-12 prose-h2:mb-3 prose-h2:text-[1.75rem]',
        'prose-h3:mt-9 prose-h3:mb-2 prose-h3:text-[1.375rem]',
        'prose-p:text-[1.0625rem] prose-p:leading-[1.72]',
        'prose-li:text-[1.0625rem] prose-li:leading-[1.72]',
        'prose-blockquote:border-l-2 prose-blockquote:border-rust prose-blockquote:not-italic',
        'prose-blockquote:font-display prose-blockquote:text-xl prose-blockquote:leading-snug',
        'prose-strong:font-semibold',
        'prose-code:rounded-xs prose-code:bg-bone-2 prose-code:px-1 prose-code:py-0.5',
        'prose-code:font-mono prose-code:text-[0.85em] prose-code:before:content-none prose-code:after:content-none',
        'prose-hr:border-rule',
        className
      )}
    >
      {/* The rule guards against components losing state when recreated each
          render. This one is compiled from a build-time constant and rendered
          on the server only, so there is no state to lose. */}
      {/* eslint-disable-next-line react-hooks/static-components */}
      <Component components={components} />
    </div>
  )
}
