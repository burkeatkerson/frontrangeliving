# Front Range Living

A content site built to answer questions about living along Colorado's Front
Range, and to be the source an answer engine cites when somebody asks one.

No database. Every page is prerendered to static HTML at build time from MDX
files in [`content/`](content/), and the whole site deploys as a folder.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Content hot-reloads: editing an `.mdx` file under `content/` rebuilds the
content layer and refreshes the page without restarting the dev server.

```bash
npm run build        # static export to out/ + Pagefind search index
npm start            # serve the built out/ folder locally
npm run check        # typecheck + lint + format check
```

> Search does not work in `npm run dev`. The index is built from the exported
> HTML, so run `npm run build && npm start` to try it.

---

## The stack, and why

| Piece | Choice | Reason |
| --- | --- | --- |
| Framework | Next.js 16, App Router | Static export, RSC, first-class metadata API |
| Content | [Velite](https://velite.js.org) | Zod-validated MDX → typed JSON at build time. Compiles once, not per-request, which is what keeps hundreds of documents fast |
| Styling | Tailwind CSS v4 | Design tokens live in `@theme`, one place |
| Prose | `@tailwindcss/typography` | Retuned to the paper palette via `prose-frl` |
| Search | [Pagefind](https://pagefind.app) | Static index over the built HTML. Scales to thousands of pages with no server and no per-query cost |
| Structured data | `schema-dts` | Typed schema.org, so the JSON-LD graph cannot drift from reality |
| Output | `output: 'export'` | The site has no per-request work. Pure CDN delivery, deployable anywhere |

### Why static export

Nothing on this site needs a server: no auth, no database, no personalisation.
Exporting to HTML makes it as fast as a site can be, lets Pagefind index real
files, and means it can be hosted on Vercel, Netlify, Cloudflare Pages, S3, or
a USB stick.

The trade-off is that `next/image` optimisation is off. Velite processes content
images at build time (dimensions and blur placeholders) instead. If you later
need ISR or on-demand image optimisation, delete `output: 'export'` from
`next.config.ts` and point the Pagefind step at the server output.

---

## Content

Everything publishable lives in [`content/`](content/). See
[`content/README.md`](content/README.md) for the field reference and the house
style rules.

```
content/
  taxonomy.yml          categories, lanes, columns, regions — the site's spine
  answers/              the core unit: one question, one page
  places/               town and neighborhood guides
  columns/              the four standing columns
  investing/            submarket briefs, rules, rent-vs-carry math
  pages/                standalone pages (about, work-with-us)
  authors/              bylines
```

Folders inside each collection are for **your** convenience only — the URL slug
comes from the filename, not the path. `content/answers/eat/green-chile.mdx`
and `content/answers/2026/q3/green-chile.mdx` both publish to
`/answers/green-chile`. Reorganise freely without breaking links.

### Adding a page

```bash
npm run new -- answer "Where do I find a decent bagel?" --category eat
npm run new -- place "Golden" --region jeffco --county "Jefferson County"
npm run new -- column "Birria on Federal" --column taco-report
npm run new -- investing "Loveland rent vs. carry" --kind math
```

The scaffold ships with the AEO fields already present — the standalone
`answer`, the `faq` block, the `sources` list. Fields that are not in the
template do not get filled in later.

---

## How the SEO and AEO layer works

Classic SEO and answer-engine optimisation want different things. This site
does both from one source of truth, so a page cannot be well-formed for one and
broken for the other.

**Per page, automatically:**

- Canonical URL, OpenGraph and Twitter metadata, article dates and authors
- A schema.org `@graph`: `RealEstateAgent` (the publisher — specific, not a
  generic `Organization`, because the entity really is one), `WebSite`,
  `Article`, `BreadcrumbList`, plus `FAQPage` and `Place` where they apply
- `speakable` pointing at `[data-speakable]`, which wraps the standalone answer
- `citation` built from the document's `sources`, so claims are traceable

**Site-wide:**

- [`/sitemap.xml`](src/app/sitemap.ts) — every document plus every index
- [`/robots.txt`](src/app/robots.ts) — answer-engine crawlers explicitly allowed,
  because being cited is the point
- [`/feed.xml`](src/app/feed.xml/route.ts) — the newest 100 documents
- [`/llms.txt`](src/app/llms.txt/route.ts) — a machine-readable map of the site
  where every entry carries its one-line standalone answer, so a model can often
  resolve a question and cite the page from this file alone

### The one rule that matters

Every document should carry an `answer`: **40–60 words, complete on its own,
conclusion first**. It is what appears in the "The short answer" block, what
`speakable` points at, what fills the meta description, and what goes into
`llms.txt`. A page without one still builds — it just does not compete.

---

## Built for volume

The requirement was hundreds and hundreds of articles, so the architecture is
shaped around that rather than retrofitted later:

- **Content compiles once.** Velite parses and validates every MDX file into
  JSON before Next starts. Pages read plain objects.
- **Lists never carry article bodies.** `DocSummary` in
  [`src/lib/content.ts`](src/lib/content.ts) is what listing pages receive.
  Compiled MDX bodies stay out of the RSC payload for index routes.
- **Indexes are built once at module load** — lookup maps, tag counts, category
  groupings — not recomputed per page.
- **Every index paginates** at `site.pageSize` (24), with windowed page numbers
  so a 40-page library does not render 40 links.
- **The hero ask index is fetched, not inlined.** `/ask-index.json` loads on
  first interaction, so the home page payload stays flat as the library grows.
- **Search is a static index**, chunked and loaded on demand.

### Load-testing it

```bash
node scripts/seed-fixtures.mjs 600   # ~950 throwaway documents
npm run build
node scripts/seed-fixtures.mjs --clean
```

At ~950 documents the full pipeline — content compile, static export of every
page, and the search index — completes in about a minute, producing roughly
1,080 HTML pages. Fixtures are prefixed `fx-` and confined to `fixtures/`
folders; never commit them.

---

## Deploying

The build produces `out/`. Point any static host at it.

- **Vercel** — zero config; [`vercel.json`](vercel.json) supplies caching and
  security headers.
- **Netlify / Cloudflare Pages** — build `npm run build`, publish `out`;
  [`public/_headers`](public/_headers) carries the same rules.

Set `NEXT_PUBLIC_SITE_URL` to the production origin (see
[`.env.example`](.env.example)). It drives every canonical URL, the sitemap,
the feed, and the JSON-LD `@id`s — if it is wrong, all of them are.

---

## Design

The visual system is one warm-paper palette and three typefaces, defined once in
[`src/app/globals.css`](src/app/globals.css):

- Bone `#F3EFE7`, ink `#1A1714`, rust `#C4501F`
- Instrument Serif (display), Instrument Sans (body), IBM Plex Mono (labels)

There is deliberately no dark theme. The identity is paper, ink, and one accent;
a second palette would dilute it.
