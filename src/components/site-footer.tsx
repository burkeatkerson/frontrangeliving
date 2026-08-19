import Link from 'next/link'
import { site } from '@/lib/site'
import { columnDefs, regions } from '@/lib/content'
import { Shell, Label } from './primitives'

function FooterColumn({
  heading,
  links,
}: {
  heading: string
  links: readonly { href: string; label: string }[]
}) {
  return (
    <div className="text-sm leading-[2.1] text-body">
      <Label small className="mb-1.5 block">
        {heading}
      </Label>
      {links.map((l) => (
        <div key={l.href}>
          <Link href={l.href} className="text-body hover:text-rust">
            {l.label}
          </Link>
        </div>
      ))}
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-20">
      <Shell className="pb-14 pt-16">
        <div className="rule-faded mb-7" />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-[1.375rem]">{site.name}</span>
            <p className="mt-2 font-mono text-[0.6875rem] leading-[1.9] text-faint">
              frontrangeliving.com
              <br />
              {site.address.locality}, Colorado
              <br />
              Answers since {site.founded}
            </p>
          </div>

          <FooterColumn
            heading="Places"
            links={regions.map((r) => ({ href: `/places/region/${r.slug}`, label: r.label }))}
          />
          <FooterColumn
            heading="Columns"
            links={columnDefs.map((c) => ({ href: `/columns/${c.slug}`, label: c.label }))}
          />
          <FooterColumn
            heading="The other wing"
            links={[
              { href: '/investing', label: 'Investing on the Range' },
              { href: '/answers', label: 'Ask a question' },
              { href: '/about', label: 'Who’s answering' },
              { href: '/work-with-us', label: 'Work with us' },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-rule pt-6">
          <p className="max-w-2xl font-mono text-[0.6875rem] leading-relaxed text-faint">
            {site.disclosure}
          </p>
          <div className="ml-auto flex gap-5">
            <Link href="/feed.xml" className="label hover:text-ink">
              RSS
            </Link>
            <Link href="/sitemap.xml" className="label hover:text-ink">
              Sitemap
            </Link>
          </div>
        </div>
      </Shell>
    </footer>
  )
}
