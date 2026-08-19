# Writing for this site

Everything publishable lives in this folder as MDX. There is no CMS and no
database — a file is a page.

## Where files go

```
answers/      one question, one page. The core unit of the site.
places/       town and neighborhood guides
columns/      the four standing columns
investing/    submarket briefs, city rules, rent-vs-carry math
pages/        standalone pages (about, work-with-us)
authors/      bylines
taxonomy.yml  categories, lanes, columns, regions
```

**Subfolders are for you, not for the URL.** The slug comes from the filename.
`answers/eat/green-chile.mdx` and `answers/2026/q3/green-chile.mdx` both publish
to `/answers/green-chile`. Organise however keeps the folder navigable at four
hundred files, and reorganise later without breaking a single link.

Filenames become URLs, so use lowercase words separated by hyphens.

## Making a new one

```bash
npm run new -- answer "Where do I find a decent bagel?" --category eat
npm run new -- place "Golden" --region jeffco --county "Jefferson County"
npm run new -- column "Birria on Federal" --column taco-report
npm run new -- investing "Loveland rent vs. carry" --kind math
npm run new -- page "Press"
```

Add `--draft` to keep something out of production builds while you work on it.
Drafts still appear in `npm run dev`.

---

## The `answer` field

This is the one that matters.

```yaml
answer: >-
  For roughly a third of buyers, yes — specifically those who will genuinely
  use a trailhead on foot several times a week. For everyone else, Louisville
  or Niwot delivers most of what Boulder is famous for at about two-thirds of
  the price.
```

**40–60 words. Complete on its own. Conclusion first.**

Write it as though it will be read aloud with no surrounding page, because that
is exactly what happens. It becomes:

- the "The short answer" block at the top of the page
- the target of `speakable` in the structured data
- the meta description, unless `seoDescription` overrides it
- the entry in `/llms.txt` that an AI assistant reads

If it starts with "It depends" or "There are many factors," rewrite it. Say the
thing, then qualify it in the body.

---

## Field reference

### Every document

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | The page title. Used in listings and `<title>`. |
| `summary` | yes | One or two sentences. Listing blurb. |
| `date` | yes | `YYYY-MM-DD`. Publication date. |
| `updated` | | Drives the "revised 8.14.26" stamp. Move it when facts change. |
| `answer` | | The standalone answer. See above. |
| `faq` | | `q`/`a` pairs. Rendered visibly *and* as `FAQPage` schema — never one without the other. |
| `sources` | | `label`, optional `url` and `retrieved`. Becomes `citation` in the structured data. |
| `tags` | | Lowercase, hyphenated. Each becomes a `/topics/<tag>` page. |
| `authors` | | Author ids from `authors/`. Defaults to `frl`. |
| `draft` | | Hidden in production, visible in dev. |
| `featured` | | Eligible for the home page hero; raises sitemap priority. |
| `cover` / `coverAlt` | | Processed at build time for dimensions and a blur placeholder. |
| `slug` | | Overrides the filename-derived URL. Rarely needed. |
| `seoTitle` / `seoDescription` | | Per-page overrides. |
| `noindex` | | Excludes from the sitemap and asks crawlers to skip it. |

### `answers/`

| Field | Required | Notes |
| --- | --- | --- |
| `question` | yes | The question **as someone would type or say it**, with the question mark. This is the `<h1>`, not `title`. |
| `category` | yes | A slug from `taxonomy.yml`. |
| `lanes` | | Audience lanes: `out-of-state`, `family`, `first-time`, `investor`. |
| `places` | | The ranked cards: `name`, `county`, `why`, `stats[]`, and `place` (a place-guide slug) to link the full guide. |
| `money` | | The one-line commercial note in the dark panel. Every answer ends here. |

### `places/`

`name`, `region` (a slug from `taxonomy.yml`), `county`, `stats[]`, and optional
`geo: { lat, lng }` — the coordinates feed the `Place` structured data.

### `columns/`

`column` — one of the slugs in `taxonomy.yml`. Optional `place` links the entry
to a place guide, which makes it show up on that guide.

### `investing/`

`kind` (`brief` | `rules` | `math` | `ground-notes`), plus optional `submarket`,
`quarter`, and `stats[]`.

Regulatory pages carry a standing caveat automatically. Keep `updated` current
on them — short-term rental and ADU rules change faster than anything else here.

---

## Stat lines

Stats are plain strings authored as `label - value`. The template splits on the
dash and inks the value:

```yaml
stats:
  - "median - $585K"
  - "commute downtown - 19 min"
  - "lot size - 9,000 sq ft typical"
```

---

## House style

- **Lead with the answer.** The reader came for one thing.
- **Be specific enough to be wrong.** The street, the number, the year the
  housing stock was built. Generic copy is what every other site already has.
- **Say the caveat.** Including the ones where the math does not work.
- **Disclose once.** The commercial note goes at the bottom, in the `money`
  field, where it belongs — not woven through the page.
- **Date your facts.** If a number came from somewhere, put it in `sources`
  with a `retrieved` date.
- **Fix, don't delete.** When something changes, change the page and move
  `updated`.

## Components you can use in the body

```mdx
<Note label="Worth knowing">
  An inset caveat, for regulatory copy and the "we could be wrong" paragraphs.
</Note>

<Stat value="$585K" caption="median, Wheat Ridge" />
```

Standard markdown, GFM tables, and footnotes all work. Headings get anchor links
automatically, and `##`/`###` build the in-page table of contents.
