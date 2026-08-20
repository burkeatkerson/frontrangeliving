#!/usr/bin/env node
/**
 * Colorado Springs eating guide — column entries plus the anchor answer.
 *
 *   node scripts/build-springs-food.mjs
 *
 * Every place here is real and its address was checked against the business's
 * own listing in August 2026. Nothing on this list is invented, and nothing is
 * included that could not be verified. Restaurants close, so each entry carries
 * a `verified` date and the page says plainly that it may be stale.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT = path.join(ROOT, 'content')
const VERIFIED = '2026-08-20'

const yaml = (v) => JSON.stringify(v)
const list = (items, indent = '  ') =>
  items.length ? '\n' + items.map((i) => `${indent}- ${i}`).join('\n') : ' []'

const GAZETTE = {
  label: 'Colorado Springs Gazette — Best of the Springs readers’ poll',
  url: 'https://gazette.com/',
  retrieved: VERIFIED,
}

/** Renders one column entry. */
function renderEntry(e) {
  const faq = e.faq.map((f) => `  - q: ${yaml(f.q)}\n    a: ${yaml(f.a)}`).join('\n')
  const sources = e.sources
    .map((s) => {
      const parts = [`label: ${yaml(s.label)}`]
      if (s.url) parts.push(`url: ${yaml(s.url)}`)
      if (s.retrieved) parts.push(`retrieved: ${s.retrieved}`)
      return `  - { ${parts.join(', ')} }`
    })
    .join('\n')

  return `---
title: ${yaml(e.title)}
column: ${e.column}
category: eat
summary: ${yaml(e.summary)}
answer: >-
  ${e.answer.replace(/\s+/g, ' ').trim()}
date: ${VERIFIED}
updated: ${VERIFIED}${e.featured ? '\nfeatured: true' : ''}
tags: [${e.tags.join(', ')}]
place: colorado-springs${e.hood ? `\nhood: ${e.hood}` : ''}
address: ${yaml(e.address)}
order:${list(e.order.map(yaml), '  ')}
verified: ${VERIFIED}
faq:
${faq}
sources:
${sources}
---

${e.body.trim()}
`
}

// ---------------------------------------------------------------- the places

const T = 'taco-report'
const O = 'the-oven-report'
const G = 'griddle-marks'
const A = 'after-dark'

const yelp = (name, url) => ({
  label: `${name} — address and hours verified against its listing`,
  url,
  retrieved: VERIFIED,
})

const entries = [
  // ------------------------------------------------------------------ TACOS
  {
    column: T,
    slug: 'dos-santos-colorado-springs',
    title: 'Dos Santos, Colorado Springs',
    featured: true,
    summary:
      'Street-style tacos and a proper cocktail list on Moreno Avenue, and the rare place that does both without doing either badly.',
    answer:
      'Dos Santos is a taqueria at 70 E Moreno Avenue in Colorado Springs serving Mexico City-style street tacos alongside a full cocktail programme. It runs an all-day Taco Tuesday and is open seven days a week.',
    tags: ['tacos', 'colorado-springs', 'downtown', 'cocktails', 'street-tacos'],
    address: '70 E Moreno Ave, Colorado Springs',
    hood: 'downtown-colorado-springs',
    order: ['Al pastor, three', 'Whatever the salsa of the day is', 'A margarita, if you are not driving'],
    faq: [
      {
        q: 'Is Dos Santos a restaurant or a bar?',
        a: 'Both, genuinely. It serves street-style tacos and runs a full cocktail programme, which is unusual — most places that take the drinks seriously stop taking the tacos seriously.',
      },
      {
        q: 'When is Taco Tuesday at Dos Santos?',
        a: 'All day Tuesday, from 11am to close, as of August 2026. Hours and specials change; check before you go.',
      },
    ],
    sources: [yelp('Dos Santos', 'https://www.yelp.com/biz/dos-santos-colorado-springs-2'), GAZETTE],
    body: `Dos Santos sits on Moreno Avenue in the strip between downtown proper and
[Ivywild](/neighborhoods/colorado-springs/ivywild/), and it does the thing most
places get wrong: it takes the tacos and the drinks equally seriously.

The tacos are small and street-style — the Mexico City format rather than the
Tex-Mex one — which means you order four and you are not embarrassed about it.
The al pastor is the one to judge them on.

What sets it apart in Colorado Springs is the cocktail list. This is a city with
a genuinely good taqueria scene, and almost all of it is counter-service with a
cooler of Jarritos. Dos Santos is where you go when you want the same quality of
taco and also want to sit down for two hours.

It runs an all-day Taco Tuesday and various weekday specials, and it is open
seven days. That combination — good tacos, real drinks, reliably open — makes it
the default recommendation for anyone new to the city who wants one place.

If you want the other end of the spectrum, go to
[Tacos Tenexpa](/columns/taco-report/tacos-tenexpa-colorado-springs/), which is
a truck, opens at five, and has no cocktails at all.`,
  },

  {
    column: T,
    slug: 'monicas-taco-shop-colorado-springs',
    title: 'Monica’s Taco Shop, Colorado Springs',
    featured: true,
    summary:
      'Twenty-five years, several locations, and a menu that still lists cabeza, buche and lengua without apologising for it.',
    answer:
      'Monica’s Taco Shop is a family-owned Colorado Springs taqueria operating for about 25 years across several locations, including 5829 Palmer Park Boulevard. It serves traditional cuts including cabeza, buche and lengua alongside standard fillings, and opens early for breakfast.',
    tags: ['tacos', 'colorado-springs', 'family-owned', 'breakfast-burrito', 'lengua'],
    address: '5829 Palmer Park Blvd, Colorado Springs (and other locations)',
    order: ['Cabeza, if you have never had it', 'Carnitas', 'A breakfast burrito, early'],
    faq: [
      {
        q: 'What is cabeza?',
        a: 'Beef cheek, slow-cooked until it falls apart. It is richer and softer than carne asada and it is one of the better tests of whether a taqueria is cooking for its own community or for tourists.',
      },
      {
        q: 'How early does Monica’s open?',
        a: 'The Palmer Park location has opened at 5am on weekdays, which makes it one of the earliest proper breakfast options in the city. Confirm current hours for the specific location before relying on it.',
      },
      {
        q: 'How many Monica’s locations are there?',
        a: 'Several across Colorado Springs, including Palmer Park Boulevard, Jamboree Drive and South Nevada Avenue downtown. Note that at least one former location has closed — check the one you are heading to.',
      },
    ],
    sources: [
      yelp('Monica’s Taco Shop', 'https://www.yelp.com/biz/monicas-taco-shop-colorado-springs'),
      { label: 'Monica’s Taco Shop', url: 'https://monicastacoshop.com/', retrieved: VERIFIED },
    ],
    body: `Monica's has been feeding Colorado Springs for about twenty-five years, which
in the restaurant business is roughly a geological era. It has grown to several
locations without doing the thing that usually happens next, which is quietly
dropping everything difficult off the menu.

The menu still lists **cabeza**, **buche** and **lengua** — beef cheek, pork
stomach, beef tongue. That is the tell. A taqueria that keeps those on the board
across four locations is cooking for people who want them, not for people who
photograph them.

If you have never eaten cabeza, this is a good place to fix that. It is rich,
soft, and much less confronting than the translation suggests.

The other thing Monica's does is open early — the Palmer Park location has run
from 5am on weekdays. There is a specific Colorado Springs use case for this:
you are driving to a trailhead, it is dark, and you want a breakfast burrito
that was made by a person. This is the answer.

**One caution.** Monica's has opened and closed locations over the years — at
least one former shop is now shut. Check the specific address before you drive.`,
  },

  {
    column: T,
    slug: 'tacos-tenexpa-colorado-springs',
    title: 'Tacos Tenexpa, Colorado Springs',
    summary:
      'A truck on Palmer Park Boulevard, open Thursday to Sunday from five until eleven, and the most purely traditional taco on this list.',
    answer:
      'Tacos Tenexpa is a taco truck at 4020 Palmer Park Boulevard in Colorado Springs, open Thursday through Sunday from 5pm to 11pm. It serves traditional fillings including lengua, cabeza and tripa alongside asada and pollo.',
    tags: ['tacos', 'colorado-springs', 'food-truck', 'lengua', 'late-night'],
    address: '4020 Palmer Park Blvd, Colorado Springs',
    order: ['Lengua', 'Tripa, if you are committed', 'Asada for the table'],
    faq: [
      {
        q: 'When is Tacos Tenexpa open?',
        a: 'Thursday through Sunday, 5pm to 11pm, as of August 2026. It is closed Monday through Wednesday. Truck hours move — check before you drive.',
      },
      {
        q: 'What should I order at a traditional taqueria if I am nervous?',
        a: 'Asada or pollo will not scare anyone. But order one lengua alongside it. Beef tongue is tender, mild and nothing like what the name suggests, and it is the single best argument against ordering carne asada for the rest of your life.',
      },
    ],
    sources: [
      yelp('Tacos Tenexpa', 'https://www.yelp.com/biz/tacos-tenexpa-colorado-springs'),
      { label: 'Tacos Tenexpa', url: 'http://ordertacostenexpa.com/', retrieved: VERIFIED },
    ],
    body: `Tacos Tenexpa is a truck on Palmer Park Boulevard that opens at five in the
evening, four days a week, and closes at eleven. That schedule tells you most of
what you need to know about it.

The board runs **lengua, cabeza, tripa, asada, pollo** — plus tortas, burritos
and quesadillas. The presence of tripa on a permanent menu is unusual even among
the good trucks, and it is a reasonable proxy for how seriously a place takes
itself.

Order the lengua. It is the filling that most reliably separates a taqueria that
knows what it is doing from one that is assembling. Done properly it is soft,
clean and slightly sweet, and it bears no resemblance whatsoever to the mental
image the English name produces.

This is the opposite end of the Colorado Springs taco spectrum from
[Dos Santos](/columns/taco-report/dos-santos-colorado-springs/). No cocktails,
no dining room, no Tuesday promotion. A window, a short menu and four nights a
week.

**Check the hours before you go.** Trucks move and schedules change faster than
anything else we write about.`,
  },

  {
    column: T,
    slug: 'tacos-el-amigo-colorado-springs',
    title: 'Tacos El Amigo, Colorado Springs',
    summary:
      'Birria and quesabirria on East Boulder Street, generously packed, with live music often going and a room that welcomes children.',
    answer:
      'Tacos El Amigo is a Colorado Springs Mexican restaurant at 2416 E Boulder Street known for birria and quesabirria tacos, with a second location on North Hancock Avenue. It also serves menudo, chile rellenos and breakfast burritos.',
    tags: ['tacos', 'colorado-springs', 'birria', 'family-friendly', 'menudo'],
    address: '2416 E Boulder St, Colorado Springs (also 3005 N Hancock Ave)',
    hood: 'knob-hill',
    order: ['Quesabirria, with the consommé', 'Menudo on a Sunday', 'Chile relleno'],
    faq: [
      {
        q: 'What is quesabirria?',
        a: 'A birria taco with cheese, the tortilla dipped in the stewing fat and griddled until crisp, served with a cup of consommé for dipping. It is the dish that made birria a national phenomenon and it is genuinely as good as the internet claimed.',
      },
      {
        q: 'Is Tacos El Amigo good for families?',
        a: 'Yes — it is a welcoming room, often with live music, and the menu is broad enough that a cautious eater will find something. It is one of the easier taquerias in the city to bring children to.',
      },
    ],
    sources: [
      yelp('Tacos El Amigo', 'https://www.yelp.com/biz/tacos-el-amigo-colorado-springs'),
      { label: 'Tacos El Amigo', url: 'https://www.tacoselamigoco.com/order', retrieved: VERIFIED },
    ],
    body: `Tacos El Amigo on East Boulder Street is where Colorado Springs does birria,
and it does it generously — the tacos come packed rather than politely filled,
with a cup of consommé alongside.

**Quesabirria** is the order. The tortilla goes into the fat off the top of the
stew, onto the griddle, then gets cheese and meat and a fold. What you get is
crisp, red-stained and structurally unsound in the best way, and the consommé is
not a garnish — dip it.

Beyond birria the menu runs wide: menudo, chile rellenos, breakfast burritos.
Menudo on a Sunday morning is a genuine Colorado Springs tradition and this is a
reasonable place to start if you have never had it.

The room is livelier than most taquerias — live music turns up regularly — and
it is unusually easy to bring children to. That combination is rarer than it
should be.

There is a second location on North Hancock Avenue.`,
  },

  // ------------------------------------------------------------------ PIZZA
  {
    column: O,
    slug: 'pizzeria-rustica-colorado-springs',
    title: 'Pizzeria Rustica, Old Colorado City',
    featured: true,
    summary:
      'Old Colorado City’s wood-fired standard-bearer: a locally built oven, San Marzano tomatoes, mozzarella made in the building.',
    answer:
      'Pizzeria Rustica is a wood-fired Neapolitan pizzeria at 2527 W Colorado Avenue in Old Colorado City, Colorado Springs. It uses imported Italian flour and San Marzano tomatoes with mozzarella made in-house, baked in a locally built wood-fired oven.',
    tags: ['pizza', 'colorado-springs', 'neapolitan', 'wood-fired', 'old-colorado-city'],
    address: '2527 W Colorado Ave, Colorado Springs',
    hood: 'old-colorado-city',
    order: ['Margherita, to judge the oven', 'Whatever is on the seasonal board'],
    faq: [
      {
        q: 'What makes Pizzeria Rustica different?',
        a: 'A genuine wood-fired oven, Italian flour and San Marzano tomatoes, and mozzarella made on site. The Margherita is the test — a Neapolitan oven either produces a leopard-spotted, pliable crust or it does not, and there is nowhere to hide.',
      },
      {
        q: 'Where is Pizzeria Rustica?',
        a: 'On West Colorado Avenue in Old Colorado City, the historic district on the city’s west side, walkable from the Colorado Avenue shops and about five minutes from Garden of the Gods.',
      },
    ],
    sources: [
      { label: 'Visit Colorado Springs — pizza guide', url: 'https://www.visitcos.com/blog/best-pizza-places/', retrieved: VERIFIED },
      GAZETTE,
    ],
    body: `Pizzeria Rustica is the pizza most Colorado Springs arguments end at. It sits on
West Colorado Avenue in
[Old Colorado City](/neighborhoods/colorado-springs/old-colorado-city/), which
means you can walk to it from the historic district's shops and be at Garden of
the Gods five minutes later.

The specifics are the point. **Flour milled in Italy. San Marzano tomatoes.
Mozzarella made in the building. A wood-fired oven built locally** rather than
bought as a marketing prop.

Order the Margherita first, however boring that sounds. A Neapolitan oven cannot
hide behind toppings — you either get the leopard-spotted, pliable, slightly
soupy centre that a properly hot floor produces, or you get bread with sauce on
it. Rustica gets it right, which is why it has been the local standard for
years.

The room is small and it fills. This is not a walk-in-at-seven-on-Saturday
proposition.`,
  },

  {
    column: O,
    slug: 'bambinos-urban-pizzeria-colorado-springs',
    title: 'Bambino’s Urban Pizzeria, downtown Colorado Springs',
    summary:
      'Neapolitan dough, Italian flour and house-made fior di latte, fired fast enough to be a lunch option.',
    answer:
      'Bambino’s Urban Pizzeria is at 36 E Bijou Street in downtown Colorado Springs, serving Neapolitan-style pizza made with Italian-milled flour and house-made fior di latte mozzarella, fired quickly enough to work as a lunch stop.',
    tags: ['pizza', 'colorado-springs', 'neapolitan', 'downtown', 'lunch'],
    address: '36 E Bijou St, Colorado Springs',
    hood: 'downtown-colorado-springs',
    order: ['Margherita', 'Anything with the house fior di latte doing the work'],
    faq: [
      {
        q: 'How fast is Bambino’s?',
        a: 'Fast — the format is built around a quick fire, which is what makes it viable as a downtown lunch rather than an evening commitment. A proper Neapolitan pizza cooks in a couple of minutes at temperature.',
      },
      {
        q: 'What is fior di latte?',
        a: 'Fresh cow’s-milk mozzarella, as distinct from mozzarella di bufala. Bambino’s makes its own, which is the difference between mozzarella as an ingredient and mozzarella as a topping.',
      },
    ],
    sources: [
      { label: 'Bambino’s Urban Pizzeria', url: 'https://bambinosurbanpizzeria.com/', retrieved: VERIFIED },
      { label: 'Visit Colorado Springs — pizza guide', url: 'https://www.visitcos.com/blog/best-pizza-places/', retrieved: VERIFIED },
    ],
    body: `Bambino's is on East Bijou in
[downtown](/neighborhoods/colorado-springs/downtown-colorado-springs/), and its
useful trick is speed. Neapolitan pizza cooks in about two minutes at proper
oven temperature, and Bambino's has built the whole operation around that fact —
which turns a style usually reserved for a slow evening into something you can
do on a lunch break.

The inputs are serious: **dough from flour milled in Italy, hand stretched**, and
**fior di latte mozzarella made in house**. Locally sourced meats and produce on
top.

Making your own fresh mozzarella is the kind of thing that does not show up in a
photograph and shows up immediately on the palate. It is the difference between
cheese as an ingredient and cheese as a layer.

Between this and
[Pizzeria Rustica](/columns/the-oven-report/pizzeria-rustica-colorado-springs/),
downtown and Old Colorado City are covered. Rustica is the destination; Bambino's
is the one you can actually get into on a Wednesday.`,
  },

  {
    column: O,
    slug: 'basil-and-barley-colorado-springs',
    title: 'Basil & Barley, north Colorado Springs',
    summary:
      'A Naples-built oven on the north side, with a dining room that looks straight at Pikes Peak.',
    answer:
      'Basil & Barley Pizzeria Napoletana is at 9278 Forest Bluffs View in northern Colorado Springs, serving Neapolitan pizza from a wood-fired oven imported from Naples, with dining-room views of Pikes Peak.',
    tags: ['pizza', 'colorado-springs', 'neapolitan', 'north-side', 'views'],
    address: '9278 Forest Bluffs View #100, Colorado Springs',
    hood: 'briargate',
    order: ['Margherita', 'A signature pie once you have judged the crust'],
    faq: [
      {
        q: 'Does Basil & Barley have a real Neapolitan oven?',
        a: 'Yes — the wood-fired oven was imported from Naples, which matters because oven mass and floor temperature are most of what produces a Neapolitan crust.',
      },
      {
        q: 'Where is Basil & Barley?',
        a: 'North Colorado Springs, off Forest Bluffs View near the Briargate area — a long way from the downtown and Old Colorado City pizzerias, which is precisely its value if you live on the north side.',
      },
    ],
    sources: [
      { label: 'Visit Colorado Springs — pizza guide', url: 'https://www.visitcos.com/blog/best-pizza-places/', retrieved: VERIFIED },
      GAZETTE,
    ],
    body: `The north side of Colorado Springs has a great deal of new housing, excellent
schools and, historically, not much worth driving to for dinner. Basil & Barley
is one of the corrections.

The oven was **imported from Naples**. That is not decoration — a Neapolitan
crust is produced almost entirely by thermal mass and floor temperature, and you
cannot fake either with a conveyor.

The dining room looks at **Pikes Peak**, which sounds like a brochure line and is
simply true. On a clear evening it is among the better views from a restaurant
table in the city.

For anyone living in [Briargate](/neighborhoods/colorado-springs/briargate/),
[Cordera](/neighborhoods/colorado-springs/cordera/),
[Pine Creek](/neighborhoods/colorado-springs/pine-creek/) or
[Wolf Ranch](/neighborhoods/colorado-springs/wolf-ranch/), this is the answer to
"is there anywhere up here" — and the answer is yes, without going downtown.`,
  },

  // ---------------------------------------------------------------- BURGERS
  {
    column: G,
    slug: 'skirted-heifer-colorado-springs',
    title: 'The Skirted Heifer, downtown Colorado Springs',
    featured: true,
    summary:
      'The burger with the lace collar of fried cheddar — a local institution built on one very good idea.',
    answer:
      'The Skirted Heifer is a Colorado Springs burger restaurant at 204 N Tejon Street downtown, with a second location on Dublin Boulevard. Its signature is the "skirt" — cheddar melted onto the griddle around the patty until it crisps into a lace ring — using grass-fed beef and buns baked in house.',
    tags: ['burgers', 'colorado-springs', 'downtown', 'green-chile', 'institution'],
    address: '204 N Tejon St, Colorado Springs (also 5935 Dublin Blvd)',
    hood: 'downtown-colorado-springs',
    order: ['The skirted burger, green chile added', 'Do not skip the skirt — it is the whole point'],
    faq: [
      {
        q: 'What is a cheese skirt?',
        a: 'Cheddar dropped directly onto the hot griddle around the patty, where it fries rather than melts, forming a lacy, crisp ring welded to the burger. It is texturally completely different from a slice of cheese on top, and it is what the restaurant is named for.',
      },
      {
        q: 'Where is the Skirted Heifer?',
        a: 'The original is at 204 N Tejon Street in downtown Colorado Springs, with a second location at 5935 Dublin Boulevard on the north-east side.',
      },
      {
        q: 'What beef does the Skirted Heifer use?',
        a: 'Grass-fed, grass-finished beef, with buns baked in house and condiments made from scratch.',
      },
    ],
    sources: [
      { label: 'The Skirted Heifer', url: 'https://skirtedheifer.com/', retrieved: VERIFIED },
      yelp('The Skirted Heifer', 'https://www.yelp.com/biz/skirted-heifer-colorado-springs'),
      GAZETTE,
    ],
    body: `If you have seen a photograph of a burger wearing a ragged halo of fried
cheese, there is a decent chance it was taken here.

The **skirt** is the whole proposition. Cheddar goes onto the griddle *around* the
patty rather than on top of it, where it fries into a crisp, lacy collar that
stays welded to the meat. It is a different texture entirely from melted cheese —
brittle at the edges, chewy where it meets the patty — and it is the reason the
place is named what it is named.

Underneath the theatre the fundamentals are right: **grass-fed, grass-finished
beef, buns baked in house, condiments made from scratch**. A gimmick on top of a
bad burger is just a bad burger.

Add green chile. This is Colorado, the chile is good, and it cuts the richness of
all that fried cheddar in exactly the way you would hope.

The original is on **North Tejon** in
[downtown](/neighborhoods/colorado-springs/downtown-colorado-springs/) and it is
small and busy. There is a second location on Dublin Boulevard on the north-east
side if you cannot face the queue.`,
  },

  {
    column: G,
    slug: 'green-line-grill-colorado-springs',
    title: 'Green Line Grill, downtown Colorado Springs',
    summary:
      'A lunch counter with a checkered floor doing thin, crisp-edged smashburgers, and nothing else it does not need to.',
    answer:
      'Green Line Grill is a small counter-service burger restaurant at 230½ Pueblo Avenue in downtown Colorado Springs, serving flat-top smashburgers, hot dogs and fries in an old-school diner setting.',
    tags: ['burgers', 'colorado-springs', 'smashburger', 'downtown', 'lunch-counter'],
    address: '230½ Pueblo Ave, Colorado Springs',
    hood: 'downtown-colorado-springs',
    order: ['A double smashburger', 'Fries', 'Nothing complicated'],
    faq: [
      {
        q: 'What is a smashburger?',
        a: 'A ball of beef pressed hard onto a hot flat-top so the surface caramelises across the whole patty rather than just around a seared edge. Thin, crisp-edged, and a completely different animal from a thick pub burger.',
      },
      {
        q: 'Is Green Line Grill sit-down?',
        a: 'It is a small old-school counter with checkered floors — order, sit, eat. It is a lunch place rather than an evening out.',
      },
    ],
    sources: [
      { label: 'Green Line Grill listing', url: 'https://help.restaurant.com/locations/green-line-grill-colorado-springs-230-1-2-pueblo-ave', retrieved: VERIFIED },
      GAZETTE,
    ],
    body: `Green Line Grill has a half-number address — 230½ Pueblo Avenue — which is
usually a good sign about a burger.

Inside it is a checkered-floor lunch counter doing **flat-top smashburgers**:
thin patties pressed hard onto the griddle so the whole surface caramelises
rather than just the edge. The result is crisp-edged, deeply browned, and about
as far from a thick pub burger as a burger gets while remaining a burger.

Get a double. Smashburger patties are thin by definition, and the whole appeal of
the style is the ratio of crust to interior — two thin patties gives you twice
the crust for the same amount of beef.

There are hot dogs and fries, and there is not much else, which is correct.

This and [the Skirted Heifer](/columns/griddle-marks/skirted-heifer-colorado-springs/)
are the two ends of downtown Colorado Springs burgers: one is a very good idea
executed theatrically, the other is a lunch counter refusing to have ideas at
all. Both work.`,
  },

  // ------------------------------------------------------------------- BARS
  {
    column: A,
    slug: 'shame-and-regret-colorado-springs',
    title: 'Shame & Regret, downtown Colorado Springs',
    featured: true,
    summary:
      'A back-alley whiskey bar with 110 American whiskeys and 120 single malts, found through a door you would walk past.',
    answer:
      'Shame & Regret is a whiskey and cocktail bar at 15 E Bijou Street in downtown Colorado Springs, reached through the alley between Taste of Jerusalem Cafe and Escape Velocity. It stocks roughly 110 American whiskeys and 120 single malt Scotch whiskies.',
    tags: ['bars', 'colorado-springs', 'whiskey', 'downtown', 'cocktails', 'speakeasy'],
    address: '15 E Bijou St, Suite C, Colorado Springs — in the alley',
    hood: 'downtown-colorado-springs',
    order: ['Something from the American whiskey list you cannot get at home', 'Ask the bar to pick'],
    faq: [
      {
        q: 'How do you find Shame & Regret?',
        a: 'It is off the alley between Taste of Jerusalem Cafe and the Escape Velocity comic shop on East Bijou Street. There is a door. That is deliberate.',
      },
      {
        q: 'How big is the whiskey list?',
        a: 'Roughly 110 American whiskeys and 120 single malt Scotch whiskies, plus a craft cocktail programme. For a city of this size that is a genuinely serious collection.',
      },
    ],
    sources: [
      { label: 'Shame & Regret', url: 'https://www.shameandregret.com/', retrieved: VERIFIED },
      GAZETTE,
    ],
    body: `Shame & Regret is down the alley off East Bijou, between a Jerusalem café and a
comic book shop, behind a door that gives away nothing. Once you know, you know.

The list is the reason to go: roughly **110 American whiskeys and 120 single malt
Scotches**, plus a proper cocktail programme. That is a serious collection
anywhere and an unusually serious one in a city this size.

The right way to use it is not to order the thing you drink at home. Tell the bar
what you normally like and let them go two steps sideways from it. That is what
the shelf is for.

The room manages the trick of feeling like a hideout without doing the full
speakeasy costume drama — no password, no fake bookcase, no one in braces
explaining ice to you.

It is a five-minute walk from
[the Skirted Heifer](/columns/griddle-marks/skirted-heifer-colorado-springs/),
which is a defensible way to spend an evening in
[downtown Colorado Springs](/neighborhoods/colorado-springs/downtown-colorado-springs/).`,
  },

  {
    column: A,
    slug: 'shrunken-head-tiki-bar-colorado-springs',
    title: 'Shrunken Head Tiki Bar, downtown Colorado Springs',
    summary:
      'A committed tiki bar on North Tejon, up a door between two breweries, doing the rum properly.',
    answer:
      'Shrunken Head Tiki Bar is at 114 N Tejon Street in downtown Colorado Springs, entered through a door between the Oskar Blues and Bell Brothers Brewing entrances. It is the city’s dedicated tiki bar, serving rum-forward classic and original cocktails.',
    tags: ['bars', 'colorado-springs', 'tiki', 'downtown', 'rum', 'cocktails'],
    address: '114 N Tejon St, Colorado Springs — door between Oskar Blues and Bell Brothers',
    hood: 'downtown-colorado-springs',
    order: ['A Mai Tai, to judge them', 'Whatever is on fire'],
    faq: [
      {
        q: 'How do you get into Shrunken Head?',
        a: 'The entrance is a door on North Tejon Street between the Oskar Blues Grill & Brew and Bell Brothers Brewing entrances. It is easy to walk past.',
      },
      {
        q: 'Is tiki just sweet drinks?',
        a: 'Done badly, yes. Done properly it is a rum-driven cocktail tradition with real technique behind it — the original Mai Tai is essentially rum, lime, orgeat and curaçao, and it is dry. Order one and judge the bar on it.',
      },
    ],
    sources: [
      yelp('Shrunken Head Tiki Bar', 'https://www.yelp.com/biz/shrunken-head-tiki-bar-colorado-springs'),
      { label: 'Colorado Springs Gazette — tiki bar opening coverage', url: 'https://gazette.com/arts-entertainment/dining/colorado-springs-gets-a-tiki-bar/article_f5e4bcb6-8e9e-11ec-867a-af1737471c76.html', retrieved: VERIFIED },
    ],
    body: `Colorado is about as far from Polynesia as the continental United States gets,
which makes a committed tiki bar in downtown Colorado Springs a slightly absurd
and entirely welcome thing.

The entrance is a **door on North Tejon between the Oskar Blues and Bell Brothers
entrances**, which you will walk past the first time.

Judge it on a **Mai Tai**. The real one — rum, lime, orgeat, curaçao — is dry,
nutty and nothing like the pink thing served at hotel pools, and it is the
fastest way to work out whether a tiki bar is doing the tradition or the
costume.

Tiki done properly is a rum discipline with genuine technique behind it: layered
rums, fresh juice, crushed ice, and syrups made rather than bought. Done badly it
is sugar in a mug shaped like a face. This is the former.

It is on the same downtown block or two as
[Shame & Regret](/columns/after-dark/shame-and-regret-colorado-springs/), which
between them cover about as much stylistic ground as two bars can.`,
  },

  {
    column: A,
    slug: 'triple-nickel-tavern-colorado-springs',
    title: 'Triple Nickel Tavern, Colorado Springs',
    summary:
      'The city’s enduring punk dive on South Wahsatch: loud, cheap, unrenovated, and entirely unbothered by any of it.',
    answer:
      'Triple Nickel Tavern is a dive bar at 103 S Wahsatch Avenue in Colorado Springs, long established as the city’s principal punk and rock venue-bar. It is known for live music, cheap drinks and a deliberately unpolished room.',
    tags: ['bars', 'colorado-springs', 'dive-bar', 'live-music', 'punk'],
    address: '103 S Wahsatch Ave, Colorado Springs',
    hood: 'downtown-colorado-springs',
    order: ['A beer and a shot', 'Nothing that requires a shaker'],
    faq: [
      {
        q: 'What kind of bar is the Triple Nickel?',
        a: 'A genuine dive and a live music room — punk, metal and rock, loud, cheap and unrenovated. It is not a cocktail bar and it has no interest in becoming one.',
      },
      {
        q: 'Is there live music at Triple Nickel Tavern?',
        a: 'Regularly. It has been one of the more durable small live rooms in Colorado Springs. Check its listings for what is on before going specifically for a band.',
      },
    ],
    sources: [
      yelp('Triple Nickel Tavern', 'https://www.yelp.com/biz/triple-nickel-tavern-colorado-springs'),
      { label: 'Triple Nickel Tavern', url: 'https://www.facebook.com/triplenickeltavern/', retrieved: VERIFIED },
    ],
    body: `Every city needs one bar that has resisted every trend of the last twenty
years, and in Colorado Springs it is the Triple Nickel on South Wahsatch.

It is a **dive and a live room** — punk, metal, rock, played loud in a space that
has never been described as tastefully appointed. The drinks are cheap. Nobody is
going to make you an old fashioned with a hand-cut sphere.

That is the point. There is a real ecological function to a bar like this: it is
where bands too small for a proper venue actually play, and it is where people
who do not want a $16 cocktail can still go out downtown.

If you have moved to Colorado Springs from somewhere larger and are wondering
where the city keeps its underground, a good deal of it has passed through this
room.

Check what is on before you go specifically for music.`,
  },
]

// ---------------------------------------------------------------- the answer

const ANSWER = `---
title: "Where to eat in Colorado Springs"
question: "Where should I eat in Colorado Springs?"
summary: "Tacos, pizza, burgers and bars, with addresses — the short list we give people who have just moved to the Springs and want somewhere to start."
answer: >-
  Start with four: Dos Santos or Tacos El Amigo for tacos, Pizzeria Rustica in Old
  Colorado City for wood-fired pizza, the Skirted Heifer downtown for a burger with
  a fried-cheddar skirt, and Shame & Regret down a back alley for whiskey. All four
  are locally owned and all four are worth the drive.
date: ${VERIFIED}
updated: ${VERIFIED}
featured: true
category: eat
lanes: [out-of-state]
tags: [colorado-springs, tacos, pizza, burgers, bars, eat]
money: >-
  Not a real-estate question, and we are not going to pretend it is. What it does
  tell you is which parts of the city have somewhere to walk to at night — and in
  Colorado Springs that is a short list: downtown, Old Colorado City and Ivywild.
places:
  - name: Downtown
    county: Colorado Springs
    why: "The highest concentration of the good stuff — Skirted Heifer, Green Line Grill, Bambino's, Shame & Regret and Shrunken Head are all within a few blocks of Tejon Street."
    stats: ["burgers - two of the best", "bars - whiskey and tiki", "walkable - yes"]
  - name: Old Colorado City
    county: Colorado Springs
    why: "Pizzeria Rustica plus the historic avenue, five minutes from Garden of the Gods. The best eating-and-walking combination on the west side."
    stats: ["pizza - Pizzeria Rustica", "walkable - yes", "to Garden of the Gods - 5 min"]
  - name: The east side
    county: Colorado Springs
    why: "Where the taquerias are. Palmer Park Boulevard and East Boulder Street carry Monica's, Tacos Tenexpa and Tacos El Amigo, and none of them are trying to impress you."
    stats: ["tacos - the real ones", "prices - low", "walkable - no"]
faq:
  - q: "What food is Colorado Springs known for?"
    a: "Green chile, first — Colorado green chile is a pork-based sauce rather than a stew, and it goes on burgers and burritos alike. Beyond that the city's strengths are its taquerias, a genuinely good wood-fired pizza scene, and an outsized number of breweries."
  - q: "Where is the best taco in Colorado Springs?"
    a: "Depends what you want. Dos Santos on Moreno Avenue for street-style tacos with real cocktails, Tacos El Amigo on East Boulder for birria and quesabirria, Tacos Tenexpa's truck on Palmer Park for the most traditional board including lengua and tripa, and Monica's for cabeza and an early breakfast burrito."
  - q: "Is the food scene in Colorado Springs good?"
    a: "Better than its reputation and not as deep as Denver's. It is strongest in the categories where family-owned places thrive — taquerias, pizza and burgers — and thinner at the fine-dining end. The gap has narrowed considerably over the last decade."
  - q: "Where should I eat if I only have one night in Colorado Springs?"
    a: "Pizzeria Rustica in Old Colorado City, then drive fifteen minutes to Shame & Regret downtown for a whiskey. That gets you the best pizza in the city, a historic district worth walking, and the most interesting bar list in southern Colorado."
sources:
  - { label: "Colorado Springs Gazette — Best of the Springs readers' poll", url: "https://gazette.com/", retrieved: ${VERIFIED} }
  - { label: "Visit Colorado Springs — pizza guide", url: "https://www.visitcos.com/blog/best-pizza-places/", retrieved: ${VERIFIED} }
  - { label: "Business addresses and hours verified against each restaurant's own listing", retrieved: ${VERIFIED} }
---

People move to Colorado Springs and are told, usually by someone in Denver, that
there is nowhere to eat. That was closer to true fifteen years ago than it is
now, and it was never true about tacos.

Here is the short list, by category, with addresses. Everything on it is locally
owned. Everything on it we would send a friend to.

## Tacos

Colorado Springs has the strongest taqueria scene of any Colorado city outside
Denver's [Havana Street](/neighborhoods/aurora/havana-district/), and it is
concentrated on the east side rather than downtown.

- **[Dos Santos](/columns/taco-report/dos-santos-colorado-springs/)** — 70 E
  Moreno Ave. Street-style tacos and a real cocktail list, which almost nowhere
  else manages at once.
- **[Tacos El Amigo](/columns/taco-report/tacos-el-amigo-colorado-springs/)** —
  2416 E Boulder St. Birria and quesabirria, packed generously, often with live
  music.
- **[Tacos Tenexpa](/columns/taco-report/tacos-tenexpa-colorado-springs/)** —
  4020 Palmer Park Blvd. A truck, Thursday to Sunday, five until eleven. Lengua,
  cabeza, tripa.
- **[Monica's Taco Shop](/columns/taco-report/monicas-taco-shop-colorado-springs/)**
  — 5829 Palmer Park Blvd and others. Twenty-five years in, still serving cabeza
  and buche, open from 5am.

## Pizza

Three genuinely wood-fired Neapolitan ovens, which is more than most cities this
size manage.

- **[Pizzeria Rustica](/columns/the-oven-report/pizzeria-rustica-colorado-springs/)**
  — 2527 W Colorado Ave, Old Colorado City. Italian flour, San Marzano tomatoes,
  mozzarella made in the building. The local standard.
- **[Bambino's Urban Pizzeria](/columns/the-oven-report/bambinos-urban-pizzeria-colorado-springs/)**
  — 36 E Bijou St, downtown. House-made fior di latte, fired fast enough for
  lunch.
- **[Basil & Barley](/columns/the-oven-report/basil-and-barley-colorado-springs/)**
  — 9278 Forest Bluffs View, north side. Oven imported from Naples, Pikes Peak
  out the window.

## Burgers

- **[The Skirted Heifer](/columns/griddle-marks/skirted-heifer-colorado-springs/)**
  — 204 N Tejon St. The fried-cheddar skirt, grass-fed beef, buns baked in house.
  Add green chile.
- **[Green Line Grill](/columns/griddle-marks/green-line-grill-colorado-springs/)**
  — 230½ Pueblo Ave. A checkered-floor lunch counter doing smashburgers and
  refusing to complicate it.

## Bars

- **[Shame & Regret](/columns/after-dark/shame-and-regret-colorado-springs/)** —
  15 E Bijou St, down the alley. About 110 American whiskeys and 120 single
  malts.
- **[Shrunken Head Tiki Bar](/columns/after-dark/shrunken-head-tiki-bar-colorado-springs/)**
  — 114 N Tejon St, through the door between two breweries. Rum, done properly.
- **[Triple Nickel Tavern](/columns/after-dark/triple-nickel-tavern-colorado-springs/)**
  — 103 S Wahsatch Ave. The enduring punk dive, loud and cheap.

## The one caveat

Restaurants close. Hours change. Trucks move.

Everything above was checked against each business's own listing in **August
2026**, and at least one former location of one of these places has already shut.
Call before you drive across town, particularly for the trucks.

## Where this leaves you if you are house-hunting

Three parts of Colorado Springs have somewhere to walk to at night:
[downtown](/neighborhoods/colorado-springs/downtown-colorado-springs/),
[Old Colorado City](/neighborhoods/colorado-springs/old-colorado-city/) and
[Ivywild](/neighborhoods/colorado-springs/ivywild/). Everywhere else in the city
you are driving, which is worth knowing before you buy on the assumption that
you will walk to dinner.

The taquerias, notably, are mostly in the parts of town that get written off —
[Knob Hill](/neighborhoods/colorado-springs/knob-hill/),
[Rustic Hills](/neighborhoods/colorado-springs/rustic-hills/) and the Palmer
Park corridor. That is not a coincidence, and it is one of several reasons we
think the east side is underrated. See the
[Colorado Springs city guide](/places/colorado-springs/) for the rest of them.
`

// ---------------------------------------------------------------- write

let n = 0
for (const e of entries) {
  const dir = path.join(CONTENT, 'columns', e.column)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, `${e.slug}.mdx`), renderEntry(e), 'utf8')
  n++
}

const answerDir = path.join(CONTENT, 'answers', 'eat')
fs.mkdirSync(answerDir, { recursive: true })
fs.writeFileSync(path.join(answerDir, 'where-to-eat-colorado-springs.mdx'), ANSWER, 'utf8')

const byColumn = entries.reduce((acc, e) => {
  acc[e.column] = (acc[e.column] ?? 0) + 1
  return acc
}, {})

console.log(`Wrote ${n} column entries + 1 anchor answer:`)
for (const [col, count] of Object.entries(byColumn).sort()) {
  console.log(`  ${col.padEnd(20)} ${count}`)
}
