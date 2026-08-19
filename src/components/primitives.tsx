import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** The 1280px measure with the mockup's 40px gutters. */
export function Shell({
  children,
  className,
  as: Tag = 'div',
  ...rest
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article'
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag className={cn('max-w-shell mx-auto w-full px-5 sm:px-8 lg:px-10', className)} {...rest}>
      {children}
    </Tag>
  )
}

export function Label({
  children,
  className,
  small = false,
  as: Tag = 'span',
}: {
  children: ReactNode
  className?: string
  small?: boolean
  as?: 'span' | 'div' | 'p'
}) {
  return <Tag className={cn(small ? 'label-sm' : 'label', className)}>{children}</Tag>
}

/**
 * The recurring section masthead: a serif heading on a hairline rule with an
 * optional mono note pushed to the right.
 */
export function SectionHead({
  title,
  note,
  id,
  heavy = true,
  className,
}: {
  title: ReactNode
  note?: ReactNode
  id?: string
  /** Heavy = ink rule (major sections); light = hairline. */
  heavy?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-baseline gap-x-5 gap-y-2 pb-3.5',
        heavy ? 'border-ink border-b' : 'border-rule border-b',
        className
      )}
    >
      <h2
        id={id}
        className="m-0 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-[-0.015em]"
      >
        {title}
      </h2>
      {note ? <span className="label ml-auto tracking-[0.04em] normal-case">{note}</span> : null}
    </div>
  )
}

/** Mono stat lines, as used in the answer cards and place sidebars. */
export function StatList({ stats, className }: { stats: readonly string[]; className?: string }) {
  if (!stats.length) return null
  return (
    <dl
      className={cn(
        'border-rule text-muted border-t pt-2.5 font-mono text-[0.6875rem] leading-loose',
        className
      )}
    >
      {stats.map((stat) => {
        // Stats are authored as "label - value"; split so the value can be inked.
        const [head, ...rest] = stat.split(' - ')
        const tail = rest.join(' - ')
        return (
          <div key={stat} className="flex justify-between gap-4">
            <dt>{head}</dt>
            {tail ? <dd className="text-ink">{tail}</dd> : null}
          </div>
        )
      })}
    </dl>
  )
}

/** Small "Read on →" style link. */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a href={href} className={cn('hover:text-rust-deep font-mono text-[0.6875rem]', className)}>
      {children} →
    </a>
  )
}
