import Link from 'next/link'
import { Shell, Label } from '@/components/primitives'

export default function NotFound() {
  return (
    <Shell className="py-24">
      <Label small className="mb-4 block">
        404 — no page here
      </Label>
      <h1 className="max-w-[16em] text-[clamp(2rem,6vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
        We don’t have an answer at this address.
      </h1>
      <p className="text-body mt-5 max-w-[42em] text-base leading-relaxed">
        Either the page moved or the question hasn’t been asked yet. Both are fixable.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/answers" className="chip">
          Every answer
        </Link>
        <Link href="/search" className="chip">
          Search
        </Link>
        <Link href="/" className="chip">
          Start over
        </Link>
      </div>
    </Shell>
  )
}
