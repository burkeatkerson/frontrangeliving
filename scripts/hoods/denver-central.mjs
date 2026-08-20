import { SRC } from './_template.mjs'

const base = { city: 'denver', cityName: 'Denver', sector: 'Central Denver' }
const src = [SRC.denverNbhd, SRC.car]

const dpsLink = { label: 'Denver Public Schools', url: 'https://www.dpsk12.org/' }
const denverLink = { label: 'City and County of Denver', url: 'https://www.denvergov.org/' }

export const denverCentral = [
  {
    ...base,
    slug: 'capitol-hill',
    name: 'Capitol Hill',
    featured: true,
    title: 'Capitol Hill, Denver — a neighborhood guide',
    summary:
      'Denver’s densest, most walkable and most rented neighborhood: mansions carved into apartments, the state capitol at one end, and the best late-night city blocks in Colorado.',
    answer:
      'Capitol Hill is Denver’s densest neighborhood, immediately east of the State Capitol. It is dominated by 1890s–1930s mansions converted to apartments and mid-century brick blocks, is overwhelmingly renter-occupied, and is the most walkable part of the city.',
    tags: ['capitol-hill', 'denver', 'walkable', 'rentals', 'historic', 'dense'],
    bounds: 'Broadway to York Street, Colfax Avenue to 6th Avenue',
    housing: [
      '1890–1930 mansions and rowhouses',
      '1950s–70s brick apartment blocks',
      'Modern infill',
    ],
    stats: [
      'walkability - the best in Denver',
      'tenure - majority renter',
      'to downtown - 10 min walk',
    ],
    transit: 'Dense RTD bus grid; Colfax BRT under construction',
    parks: 'Cheesman Park, Governor’s Park, Civic Center',
    geo: { lat: 39.7317, lng: -104.9797 },
    links: [
      denverLink,
      { label: 'Capitol Hill United Neighborhoods (CHUN)', url: 'https://chundenver.org/' },
      { label: 'Molly Brown House Museum', url: 'https://mollybrown.org/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'Is Capitol Hill a good place to live in Denver?',
        a: 'If you want walkability and density, it is the best in the city — groceries, bars, restaurants and two large parks all on foot. It is also the loudest, has the least parking, and is overwhelmingly rental, so it suits renters and condo buyers far better than families wanting a yard.',
      },
      {
        q: 'Is Capitol Hill safe?',
        a: 'It is a dense urban neighborhood with the property crime profile that implies — car break-ins are the common complaint. Most residents describe it as comfortable on foot at night on the busier streets and quieter than its reputation on the residential blocks.',
      },
      {
        q: 'Can you live in Capitol Hill without a car?',
        a: 'Yes. It is one of the few Denver neighborhoods where that is genuinely practical, with a dense bus grid, a flat street layout, and grocery stores inside walking distance.',
      },
    ],
    sources: src,
    lede: `Capitol Hill is the densest square mile in Colorado and the closest thing
Denver has to a proper inner city. Nineteenth-century silver-money mansions sit
next to 1960s brick apartment blocks, and both are full of renters. It is loud,
it is walkable, and it is where most people who move to Denver without a plan
end up first.`,
    sections: `## Where Capitol Hill actually is

Immediately east of the State Capitol, running from Broadway out to York Street
between Colfax and 6th Avenue. Downtown is a ten-minute walk from the western
edge. Cheesman Park anchors the eastern end and effectively marks the boundary
with [Cheesman Park](/neighborhoods/denver/cheesman-park/) proper and
[Congress Park](/neighborhoods/denver/congress-park/).

## What got built here

Capitol Hill was Denver's first wealthy neighborhood, built on silver and cattle
money between about 1885 and 1910. The mansions on Grant, Logan and Pennsylvania
are the survivors — the Molly Brown House is the famous one, and there are
dozens more.

Then came the Depression, and most of those houses were carved into apartments.
That subdivision is the single most important fact about the neighborhood: it is
why a street of grand Victorian facades contains four hundred renters, and why
the ownership stock is largely condos rather than houses.

The 1950s through 1970s filled the gaps with brick three- and four-storey walk-up
apartment blocks, many of them well built and now the bulk of the rental market.

## The streets that matter

**Colfax Avenue** is the northern edge and the spine of the neighborhood's
nightlife — dive bars, music venues, the Fillmore, taquerias, and the constant
low-grade chaos that makes people either love it or leave. Bus Rapid Transit
construction along Colfax is reshaping it.

**13th and 14th Avenues** are the one-way pair carrying traffic through, and
they are where a lot of the neighborhood retail sits.

**Grant, Logan, Pennsylvania and Pearl** are the residential streets with the
mansion stock, and the quietest addresses in the neighborhood.

## Parks

**Cheesman Park** is the great one — 80 acres, a marble pavilion, mountain views
at sunset, and a history as a cemetery that was never fully exhumed. Bodies are
still found during utility work, which is exactly as unsettling as it sounds.

**Governor's Park** and **Civic Center** bracket the western end.`,
    suits: `Renters, young professionals, students, and anyone who wants to live without
a car. Condo buyers who want walkability at a price the Highlands no longer
offers do well here.

It is a poor fit for families wanting a yard, anyone who needs off-street
parking, and light sleepers on the Colfax side.`,
    check: `**Parking.** Ask specifically whether a unit has a deeded space. Street
permit parking is competitive and this is the top practical complaint.

**HOA health on condo conversions.** Many buildings are converted mansions with
small owner counts and ageing systems. Read the reserve study, not just the
minutes.

**Noise exposure.** Walk the block on a Friday at 11pm before deciding. A unit
two doors off Colfax is a very different proposition from one on Pearl.`,
  },

  {
    ...base,
    slug: 'cheesman-park',
    name: 'Cheesman Park',
    title: 'Cheesman Park, Denver — a neighborhood guide',
    summary:
      'The park is the neighborhood: eighty acres of lawn and mountain views ringed by the best-preserved apartment buildings and mansions in central Denver.',
    answer:
      'Cheesman Park is a central Denver neighborhood built around the 80-acre park of the same name, east of Capitol Hill. It holds well-preserved 1900s–1930s mansions and mid-rise apartment buildings, and is among the most expensive rental and condo markets in central Denver.',
    tags: ['cheesman-park', 'denver', 'parks', 'historic', 'walkable'],
    bounds: 'York Street to Downing, 6th Avenue to Colfax, wrapped around the park',
    housing: ['1900–1930 mansions and mid-rise apartments', 'Post-war towers on the park edge'],
    stats: ['park - 80 acres', 'to downtown - 15 min', 'tenure - mixed rent and own'],
    parks: 'Cheesman Park, Denver Botanic Gardens',
    geo: { lat: 39.7331, lng: -104.9686 },
    links: [
      denverLink,
      { label: 'Denver Botanic Gardens', url: 'https://www.botanicgardens.org/' },
      {
        label: 'Denver Parks and Recreation',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation',
      },
    ],
    faq: [
      {
        q: 'Was Cheesman Park a cemetery?',
        a: 'Yes. It was Denver’s Mount Prospect Cemetery, and when the city converted it to a park in the 1890s the removal of remains was done badly and incompletely. Human remains are still occasionally uncovered during construction and utility work.',
      },
      {
        q: 'Is Cheesman Park expensive?',
        a: 'It is one of the more expensive central Denver addresses, particularly for the mansions on the park and the units in the older towers with mountain views. It sits above Capitol Hill next door.',
      },
    ],
    sources: src,
    lede: `Cheesman Park is one of the few Denver neighborhoods where the park genuinely
is the neighborhood. Eighty acres of open lawn with an unobstructed view of the
entire Front Range, ringed by the best-preserved apartment buildings in the
city, and the Botanic Gardens attached to the eastern side.`,
    sections: `## Where Cheesman Park actually is

East of [Capitol Hill](/neighborhoods/denver/capitol-hill/) between York and
Downing, north of 6th Avenue. The park itself occupies the centre and the
housing wraps it.

## The cemetery

The park was Mount Prospect Cemetery until the 1890s, when the city decided to
convert it. The contractor hired to move the remains was paid per box and
behaved accordingly — remains were divided, mishandled, and in many cases simply
left. Bodies have been uncovered repeatedly since, most recently during
infrastructure work.

It is Denver's best-known piece of civic gothic, and it is entirely true.

## What got built here

Mansions along the park's edge from the 1900s and 1910s, then a ring of
substantial brick and stone apartment buildings through the 1920s and 1930s.
Several mid-century towers went up on the park perimeter and hold the best views
in central Denver.

The stock is unusually intact — this was never subdivided as aggressively as
Capitol Hill, so more of the original houses remain whole.

## The Botanic Gardens

The Denver Botanic Gardens sits on the park's eastern edge and is one of the
best in the country, with a genuinely serious alpine collection. For residents
it functions as a second, quieter park.`,
    suits: `Buyers and renters who want a park at the door, mountain views, and a walkable
central location, and who will pay for a well-preserved building. It suits
people without children better than families — the schools are choice-enrolled
and the housing skews to apartments and condos.`,
    check: `**Building age and systems.** The 1920s buildings are beautiful and their
boilers, risers and windows are the age they look. Get the reserve study.

**View protection.** A mountain view is a large part of what you pay for on the
park edge, and nothing guarantees it survives the next development.

**Short-term rental rules.** Denver restricts short-term rentals to a primary
residence with a licence — verify before underwriting any rental income.`,
  },

  {
    ...base,
    slug: 'congress-park',
    name: 'Congress Park',
    title: 'Congress Park, Denver — a neighborhood guide',
    summary:
      'Denver Squares and bungalows on a quiet grid between Cheesman Park and Colorado Boulevard, with the best block-for-block consistency in central Denver.',
    answer:
      'Congress Park is a central Denver neighborhood of predominantly 1900–1930 Denver Squares and brick bungalows, east of Cheesman Park. It is largely owner-occupied, quiet, and among the most consistent historic housing stock in the city.',
    tags: ['congress-park', 'denver', 'bungalows', 'denver-square', 'family', 'walkable'],
    bounds: 'York Street to Colorado Boulevard, Colfax to 6th Avenue',
    housing: ['1900–1930 Denver Squares and brick bungalows', 'Scattered 1950s infill'],
    stats: ['tenure - majority owner', 'to downtown - 15 min', 'lot size - 4,700 sq ft typical'],
    parks: 'Congress Park, Cheesman Park',
    geo: { lat: 39.7331, lng: -104.9525 },
    links: [
      denverLink,
      { label: 'Congress Park Neighbors', url: 'https://congressparkneighbors.org/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is a Denver Square?',
        a: 'A two-storey, foursquare-plan brick house built roughly 1900–1925, typically with a full-width front porch, a hipped roof and a centre dormer. It is the signature Denver house type and Congress Park has one of the densest concentrations of them.',
      },
      {
        q: 'Is Congress Park good for families?',
        a: 'Yes — it is quiet, largely owner-occupied, has a recreation centre and pool in the park, and is walkable to shops on 12th and Colfax. Denver Public Schools uses choice enrolment, so verify the assigned and available schools for a specific address.',
      },
    ],
    sources: src,
    lede: `Congress Park is what people picture when they picture old Denver: two-storey
brick squares with full-width porches, mature street trees, alleys, and a grid
that has barely changed since 1925. It is quieter than Capitol Hill next door
and considerably more owner-occupied.`,
    sections: `## Where Congress Park actually is

Between York Street and Colorado Boulevard, Colfax down to 6th Avenue, east of
[Cheesman Park](/neighborhoods/denver/cheesman-park/). Downtown is fifteen
minutes by car.

## What got built here

Almost entirely 1900 to 1930, and almost entirely brick. The Denver Square
dominates — two storeys, hipped roof, centre dormer, full-width porch — with
bungalows filling the smaller lots. The consistency is the point: block after
block of the same era and material, which is rare in a city that has scraped as
much as Denver has.

Protected historic designations cover parts of the neighborhood, which has
slowed the pop-top and scrape activity that reshaped the Highlands.

## What is there

**Congress Park** itself has a recreation centre and one of the city's better
outdoor pools.

**12th Avenue** has a small run of neighborhood commerce — a bakery, a bar, a
couple of restaurants — that residents actually use.

**Colfax** forms the northern edge with everything that implies, and the
National Jewish Health campus sits at the eastern end near Colorado Boulevard.`,
    suits: `Families and long-term owners who want a historic house on a quiet grid within
fifteen minutes of downtown, and who value consistency over novelty. Buyers who
want a Denver Square in original condition should look here first.`,
    check: `**Sewer scope.** Clay laterals of this era are at the end of their lives, and
mature street trees make root intrusion likely rather than possible.

**Knob-and-tube and galvanised supply.** Both are common in unrenovated houses
from this period and both affect insurance.

**Historic district status.** Parts of Congress Park carry design review. Find
out before you plan an addition.`,
  },

  {
    ...base,
    slug: 'baker',
    name: 'Baker',
    featured: true,
    title: 'Baker, Denver — a neighborhood guide',
    summary:
      'Victorian cottages, the Santa Fe Arts District, and the stretch of South Broadway that has stayed genuinely weird while everything around it got expensive.',
    answer:
      'Baker is a Denver neighborhood south-west of downtown, known for 1880s–1900s Victorian cottages, the Santa Fe Drive arts district, and the South Broadway commercial strip. It holds a designated historic district and is among central Denver’s most walkable areas.',
    tags: ['baker', 'denver', 'victorian', 'arts', 'south-broadway', 'historic', 'walkable'],
    bounds: 'Broadway to Santa Fe Drive, 6th Avenue to Alameda',
    housing: ['1880–1910 Victorian cottages and terraces', 'Modern infill and townhomes'],
    stats: ['historic district - yes', 'to downtown - 10 min', 'First Friday - Santa Fe Drive'],
    transit: 'RTD light rail at Alameda and 10th & Osage; Broadway bus',
    parks: 'Dailey Park, Vanderbilt Park nearby',
    geo: { lat: 39.7147, lng: -104.9925 },
    links: [
      denverLink,
      { label: 'Denver Santa Fe Art District', url: 'https://denversantafeartdistrict.com/' },
      {
        label: 'Baker Historic District, Denver landmark information',
        url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Landmark-Preservation',
      },
    ],
    faq: [
      {
        q: 'What is Baker known for?',
        a: 'Three things: the Victorian cottage housing stock and its historic district, the Santa Fe Drive arts district and its First Friday art walk, and the South Broadway strip of bars, vintage shops and music venues.',
      },
      {
        q: 'Is Baker walkable?',
        a: 'Very. It has two light rail stations, a dense commercial strip on Broadway, another on Santa Fe, and a flat compact grid. It is one of the few Denver neighborhoods where a car is genuinely optional.',
      },
      {
        q: 'Can I renovate a house in Baker?',
        a: 'Within limits. Much of the neighborhood sits in the Baker Historic District, which means exterior changes visible from the street go through design review. Confirm the status of a specific parcel with Denver Landmark Preservation before planning work.',
      },
    ],
    sources: src,
    lede: `Baker is the neighborhood that got gentrified without getting sanded down. The
Victorian cottages are still Victorian cottages, South Broadway still has the
dive bars and the record shops, and First Friday on Santa Fe still shuts the
street. It is ten minutes from downtown on foot and it has two light rail
stations.`,
    sections: `## Where Baker actually is

South-west of downtown between Broadway and Santa Fe Drive, from 6th Avenue down
to Alameda. Light rail stops at Alameda and at 10th & Osage on the western edge.

## What got built here

Baker is one of Denver's oldest intact residential neighborhoods, built out
between roughly 1880 and 1910 for working- and middle-class families. The
housing is small by modern standards — one- and one-and-a-half-storey Victorian
cottages, some terraces, mostly brick, on narrow lots.

The **Baker Historic District** covers a large share of it, which is why the
streetscape survived when so much of central Denver did not. It also means
design review on exterior work.

## The two commercial strips

**South Broadway** — "SoBo" to people who do not live there — runs the eastern
edge: vintage shops, dive bars, the Hi-Dive and the Skylark, tattoo studios, and
a genuinely good run of restaurants. It has changed but it has not been
sterilised.

**Santa Fe Drive** on the western edge is the Denver Santa Fe Art District,
which holds a monthly First Friday art walk that closes the street and draws
thousands. It is also the historic heart of Denver's Chicano community, and the
tension between that history and the gallery scene is a live local conversation.

## The light rail

Two stations inside the neighborhood put downtown, the Tech Center and Littleton
within a direct ride. For a neighborhood this central and this walkable, that is
an unusual amount of transit.`,
    suits: `People who want a genuinely walkable, transit-served central neighborhood with
character housing and nightlife at the end of the block. Renters, first-time
buyers, and anyone who wants a small historic house rather than a large modern
one.

It is a weaker fit for families needing space — the houses and lots are small —
and for anyone who wants quiet on the Broadway side.`,
    check: `**Historic district review.** Establish whether the parcel is contributing to
the Baker Historic District, and what that permits.

**Foundations and additions.** Houses of this age on this soil frequently have
settlement history and rear additions of varying quality. A structural
engineer's opinion is cheap next to the problem.

**Sewer and supply lines.** Same as everywhere in pre-1930 Denver: scope it.`,
  },

  {
    ...base,
    slug: 'cherry-creek',
    name: 'Cherry Creek',
    featured: true,
    title: 'Cherry Creek, Denver — a neighborhood guide',
    summary:
      'Denver’s luxury shopping district and the dense, expensive, largely rebuilt neighborhood around it — plus the older, quieter Cherry Creek North blocks.',
    answer:
      'Cherry Creek is an affluent Denver neighborhood about three miles south-east of downtown, centred on the Cherry Creek Shopping Center and the Cherry Creek North retail district. Most of its original bungalows have been replaced by high-end duplexes, townhomes and condos, and it is among Denver’s most expensive areas.',
    tags: ['cherry-creek', 'denver', 'luxury', 'shopping', 'condos', 'expensive'],
    bounds: 'University Boulevard to Steele Street, 1st Avenue to 6th Avenue',
    housing: [
      '2000s–present luxury duplexes, townhomes and condos',
      'Remaining 1940s–50s brick bungalows',
    ],
    stats: ['to downtown - 10 min', 'retail - Cherry Creek North', 'tenure - mixed'],
    parks: 'Cherry Creek Trail, Pulaski Park',
    geo: { lat: 39.7189, lng: -104.9531 },
    links: [
      denverLink,
      { label: 'Cherry Creek North business district', url: 'https://cherrycreeknorth.com/' },
      {
        label: 'Cherry Creek Regional Trail',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation',
      },
    ],
    faq: [
      {
        q: 'Is Cherry Creek in Denver?',
        a: 'Yes — Cherry Creek is a neighborhood within the City and County of Denver. It is distinct from the Cherry Creek School District, which serves parts of Arapahoe County and does not cover the Denver neighborhood.',
      },
      {
        q: 'Why is Cherry Creek so expensive?',
        a: 'Location and redevelopment. It is ten minutes from downtown with the region’s best concentration of high-end retail, and almost all of the original modest housing has been replaced with new luxury product, which reset the price floor.',
      },
      {
        q: 'Is Cherry Creek in the Cherry Creek School District?',
        a: 'No, and this catches people constantly. The Denver neighborhood is served by Denver Public Schools. The Cherry Creek School District is in Arapahoe County and serves places like Greenwood Village and southern Aurora.',
      },
    ],
    sources: src,
    lede: `Cherry Creek is where Denver keeps its money. The shopping centre and the
Cherry Creek North retail grid draw the whole region, and the residential blocks
around them have been almost entirely rebuilt over the last twenty-five years
into high-end duplexes and townhomes. Very little of the original neighborhood
remains.`,
    sections: `## Where Cherry Creek actually is

Three miles south-east of downtown between University and Steele, from 1st to
6th Avenue. The Cherry Creek Trail runs along the southern edge and gets you
downtown on a bike without touching a road.

## The name confusion, resolved

Three different things share the name and they are not related:

- **The Cherry Creek neighborhood** — this one, in Denver.
- **The Cherry Creek School District** — in Arapahoe County, covering
  [Greenwood Village](/places/greenwood-village/), [Centennial](/places/centennial/)
  and southern [Aurora](/places/aurora/). It does **not** serve this
  neighborhood.
- **Cherry Creek State Park and Reservoir** — in Aurora, well to the south-east.

Buyers move here expecting the school district and get Denver Public Schools.
Check before you assume.

## What got built here

Originally modest 1940s and 1950s brick bungalows on a standard grid. From the
late 1990s onward, nearly all of it was scraped and replaced with two-unit
luxury duplexes, townhomes and condo buildings — much of it well built, most of
it expensive, and a fair amount of it indistinguishable.

A handful of original bungalows survive, and they trade as land.

## Cherry Creek North

The retail district north of 1st Avenue is a walkable grid of boutiques,
galleries, restaurants and patios — genuinely pleasant, and the reason a lot of
residents chose the neighborhood. The **Cherry Creek Shopping Center** across 1st
is the enclosed mall and the region's luxury anchor.

## The trail

The Cherry Creek Trail is a real amenity: paved, grade-separated, and a
continuous car-free route into downtown and out to Aurora and the reservoir.`,
    suits: `Buyers who want new construction and walkable high-end retail without leaving
Denver, downsizers trading a large house for a lock-and-leave, and anyone whose
priority is convenience over character.

It is a weaker fit for buyers wanting historic housing, a large yard, or value.`,
    check: `**Party-wall construction.** Much of the new stock is attached. Read the party
wall agreement and understand what is shared.

**HOA scope and reserves** on the condo and townhome product.

**School assignment.** Confirm the actual Denver Public Schools assignment
rather than assuming the Cherry Creek district.`,
  },

  {
    ...base,
    slug: 'city-park',
    name: 'City Park',
    title: 'City Park, Denver — a neighborhood guide',
    summary:
      'Denver’s largest and grandest park, the zoo, the natural history museum, and the tight ring of historic housing that looks onto all of it.',
    answer:
      'City Park is a Denver neighborhood built around the city’s 330-acre flagship park, which contains the Denver Zoo and the Denver Museum of Nature & Science. Its housing is predominantly 1900s–1930s brick, and the park frontage carries some of central Denver’s best views.',
    tags: ['city-park', 'denver', 'parks', 'museums', 'historic'],
    bounds: 'York Street to Colorado Boulevard, 17th to 26th Avenue',
    housing: ['1900–1935 brick bungalows, squares and duplexes'],
    stats: ['park - 330 acres', 'zoo and museum - inside the park', 'to downtown - 12 min'],
    parks: 'City Park, City Park Golf Course, Ferril Lake',
    geo: { lat: 39.7481, lng: -104.9525 },
    links: [
      denverLink,
      { label: 'Denver Zoo', url: 'https://denverzoo.org/' },
      { label: 'Denver Museum of Nature & Science', url: 'https://www.dmns.org/' },
      {
        label: 'City Park, Denver Parks and Recreation',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation',
      },
    ],
    faq: [
      {
        q: 'What is in Denver City Park?',
        a: 'The Denver Zoo, the Denver Museum of Nature & Science, City Park Golf Course, Ferril Lake, a bandstand with a free summer jazz series, and one of the best framed views of the Front Range in the city, looking west across the lake to the mountains behind downtown.',
      },
      {
        q: 'Is the City Park neighborhood a good place to live?',
        a: 'For access to open space and cultural institutions it is hard to beat in Denver, and the historic housing is solid. It is busier than its neighbours on event days, and parking near the park edge is competitive.',
      },
    ],
    sources: src,
    lede: `City Park is Denver's Central Park in ambition if not scale — 330 acres with a
zoo, a natural history museum, a golf course, a lake and the single best view in
the city, west across the water to downtown with the mountains behind it. The
neighborhood is the ring of brick housing that looks onto it.`,
    sections: `## Where City Park actually is

Between York Street and Colorado Boulevard, 17th to 26th Avenue, north-east of
[Congress Park](/neighborhoods/denver/congress-park/) and west of
[Park Hill](/neighborhoods/denver/south-park-hill/).

## The park

Laid out from 1882 and developed over decades, it holds:

- **Denver Zoo**, one of the most visited attractions in Colorado
- **Denver Museum of Nature & Science**, with the planetarium and IMAX
- **City Park Golf Course**, rebuilt in recent years alongside major stormwater
  detention work
- **Ferril Lake** and the pavilion, and the free City Park Jazz series on summer
  Sunday evenings

The view from the western shore of the lake — downtown skyline, mountains
behind — is the postcard shot of Denver and it is genuinely that good.

## What got built here

Brick, 1900 to 1935: bungalows, Denver Squares, and a substantial number of
handsome two- and four-unit brick duplexes. The blocks fronting the park carry
the largest houses and the premium.

## The stormwater work

The Platte to Park Hill drainage project reshaped the golf course and parts of
the park to hold stormwater and reduce flooding downstream in
[Cole](/neighborhoods/denver/cole/) and
[Elyria-Swansea](/neighborhoods/denver/elyria-swansea/). It was contentious —
mature trees were lost — and it is worth understanding as context for how the
city treats this park.`,
    suits: `People who will use the park constantly, families who want museums and a zoo
within walking distance, and buyers who want solid pre-war brick near the centre.`,
    check: `**Event-day traffic and parking** if you are on the park edge. Zoo lights in
December and summer concerts are real.

**Pre-1935 systems** — sewer, electrical, supply lines.

**Basement moisture**, particularly on the lower-lying blocks north of the park.`,
  },

  {
    ...base,
    slug: 'country-club',
    name: 'Country Club',
    title: 'Country Club, Denver — a neighborhood guide',
    summary:
      'Denver’s most consistently grand residential blocks: large early-twentieth-century houses on wide, tree-lined streets around the Denver Country Club.',
    answer:
      'Country Club is a small, affluent Denver neighborhood south of Speer Boulevard, built around the Denver Country Club. It contains some of the city’s largest and best-preserved early-twentieth-century houses and is protected by historic district designations.',
    tags: ['country-club', 'denver', 'historic', 'affluent', 'large-lots'],
    bounds: 'Downing Street to University Boulevard, 1st Avenue to Speer Boulevard',
    housing: ['1900–1930 large period-revival houses', 'Historic district protected'],
    stats: [
      'historic district - yes',
      'to downtown - 10 min',
      'lot size - large for central Denver',
    ],
    parks: 'Cherry Creek Trail, Denver Country Club (private)',
    geo: { lat: 39.7203, lng: -104.9714 },
    links: [
      denverLink,
      {
        label: 'Denver Landmark Preservation',
        url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Landmark-Preservation',
      },
    ],
    faq: [
      {
        q: 'Is Country Club the most expensive neighborhood in Denver?',
        a: 'It is consistently among them, along with Cherry Creek, Hilltop and Belcaro. What distinguishes it is the size and preservation of the original houses rather than new construction.',
      },
      {
        q: 'Can anyone drive through Country Club?',
        a: 'Yes, the streets are public, though several are configured to discourage through traffic. The country club itself is private.',
      },
    ],
    sources: src,
    lede: `Country Club is four hundred or so houses on wide streets with mature elms,
built between about 1900 and 1930 for people who had a great deal of money, and
preserved since by historic district designation. It is the most architecturally
intact grand neighborhood in Denver.`,
    sections: `## Where Country Club actually is

South of Speer Boulevard between Downing and University, north of 1st Avenue,
immediately west of [Cherry Creek](/neighborhoods/denver/cherry-creek/). The
Cherry Creek Trail runs along the northern edge.

## What got built here

Period revival at scale: Tudor, Georgian, Mediterranean and Colonial Revival
houses on lots that are large by central Denver standards, many designed by the
architects who shaped the rest of the city's institutional building.

Three historic districts cover the area. Exterior alterations go through design
review, and that is precisely why the neighborhood still looks the way it does.

## Who lives here

It is quiet, largely owner-occupied, and turns over slowly. Inventory is thin in
most years and transactions are infrequent enough that a single sale can move
perceived comparables.`,
    suits: `Buyers at the top of the Denver market who want a preserved period house
rather than new construction, and who are comfortable with design review.`,
    check: `**Design review scope.** Understand exactly what the historic district
permits before planning any change.

**Systems in large old houses.** Heating, wiring and plumbing in a 6,000 square
foot 1915 house are a different order of expense from a bungalow.

**Tree health.** The elm canopy is the neighborhood's defining feature and
mature tree work is the owner's cost.`,
  },

  {
    ...base,
    slug: 'union-station',
    name: 'Union Station',
    featured: true,
    title: 'Union Station, Denver — a neighborhood guide',
    summary:
      'The most-transformed part of Denver: a restored 1914 rail terminal, the region’s transit hub, and the dense new district built around it.',
    answer:
      'Union Station is a downtown Denver neighborhood centred on the restored 1914 Denver Union Station, the hub for RTD light rail, commuter rail including the A Line to the airport, and regional buses. It is a dense, almost entirely post-2010 district of apartments, condos, offices and hotels.',
    tags: ['union-station', 'denver', 'downtown', 'transit', 'lodo', 'condos'],
    bounds: 'The lower downtown blocks around 17th and Wynkoop, west to the South Platte',
    housing: ['2010–present high-rise apartments and condos', 'Converted historic warehouses'],
    stats: ['A Line to DIA - 37 min', 'transit - every RTD rail line', 'tenure - mostly rental'],
    transit: 'Every RTD rail line, regional and intercity buses, Amtrak California Zephyr',
    parks: 'Commons Park, Confluence Park, South Platte Trail',
    geo: { lat: 39.7527, lng: -105.0 },
    links: [
      denverLink,
      { label: 'Denver Union Station', url: 'https://unionstationindenver.com/' },
      { label: 'RTD Denver', url: 'https://www.rtd-denver.com/' },
      { label: 'Downtown Denver Partnership', url: 'https://www.downtowndenver.com/' },
    ],
    faq: [
      {
        q: 'How long does the A Line take from Union Station to Denver airport?',
        a: 'About 37 minutes, running roughly every 15 minutes for most of the day. It is the fastest and most reliable way to reach DIA from central Denver.',
      },
      {
        q: 'Is Union Station a good place to live?',
        a: 'For transit access and walkability it is the best address in Colorado — every rail line, buses, and a dense grid of restaurants and bars. The trade-offs are price, noise, almost no green space of your own, and a housing stock that is entirely apartments and condos.',
      },
      {
        q: 'Is Union Station the same as LoDo?',
        a: 'They overlap but are not identical. LoDo — Lower Downtown — is the historic warehouse district and a Denver landmark district; the Union Station statistical neighborhood covers the station and the newer development around it.',
      },
    ],
    sources: [...src, SRC.rtd],
    lede: `No part of Denver has changed as completely in twenty years as the blocks
around Union Station. A derelict rail yard became the region's transit hub, the
1914 terminal was restored into a public hall that functions as the city's
living room, and the surrounding acreage filled with towers.`,
    sections: `## Where Union Station actually is

The north-western corner of downtown, where the street grid turns to meet the
South Platte. Confluence Park and Commons Park sit just beyond, and the Highland
pedestrian bridge crosses into [Highland](/neighborhoods/denver/highland/).

## The station

Denver Union Station opened in 1914, declined with passenger rail, and was
restored and reopened in 2014 as a transit hub with a hotel, bars and
restaurants in the Great Hall. It is the rare civic restoration that people
actually use — the hall functions as a public room, not a museum.

Everything RTD runs comes here: light rail, the **A Line to DIA** (about 37
minutes), the B, G and N commuter lines, and regional and intercity buses.
Amtrak's California Zephyr stops daily. Under current plans it is also the hub
for the [Colorado Connector](https://coloradoconnector.com/) intercity rail
service.

## What got built here

Almost everything is post-2010: apartment towers, condo buildings, offices and
hotels, plus a handful of converted nineteenth-century warehouses along Wynkoop
and Wazee that survived from the produce-district era.

The density is real by Denver standards and the ground floors are active, which
is why it works as a place to walk.

## The parks

**Commons Park** and **Confluence Park** are immediately west, where Cherry Creek
meets the South Platte — the literal founding site of Denver, and now a
whitewater park and trail junction.`,
    suits: `People who want to live without a car, frequent flyers, and anyone who values
transit access and walkability above space. Lock-and-leave buyers do very well
here.

It is a weaker fit for families, dog owners wanting a yard, and anyone sensitive
to noise — this is the busiest part of the city.`,
    check: `**HOA fees and reserves.** High-rise buildings carry high-rise costs; some
towers here have had significant assessments.

**Construction defect history** on the condo product from the 2010s.

**Noise and event exposure.** Ball games at Coors Field and the bar district
generate real crowds. Visit on a Saturday night.`,
  },

  {
    ...base,
    slug: 'central-business-district',
    name: 'Central Business District',
    title: 'Downtown Denver (Central Business District) — a neighborhood guide',
    summary:
      'The office core, the 16th Street Mall, and a growing residential population in converted towers — Denver’s most urban and most in-flux district.',
    answer:
      'The Central Business District is downtown Denver’s office and commercial core, containing the 16th Street Mall, the Denver Performing Arts Complex and most of the city’s high-rise towers. Its residential population lives largely in converted office buildings and newer apartment towers.',
    tags: ['downtown-denver', 'central-business-district', 'denver', 'urban', 'condos'],
    bounds: 'Colfax and Broadway to Wynkoop and Speer, the downtown grid',
    housing: ['Converted office towers and lofts', '2000s–present apartment and condo high-rises'],
    stats: ['16th Street Mall', 'to Union Station - 10 min walk', 'tenure - mostly rental'],
    transit: 'Free MallRide, light rail on the 16th Street and Stout/California corridors',
    parks: 'Skyline Park, Civic Center Park',
    geo: { lat: 39.7439, lng: -104.9903 },
    links: [
      denverLink,
      { label: 'Downtown Denver Partnership', url: 'https://www.downtowndenver.com/' },
      { label: 'Denver Performing Arts Complex', url: 'https://www.artscomplex.com/' },
    ],
    faq: [
      {
        q: 'Is downtown Denver a good place to live?',
        a: 'It suits people who want walkability, culture and no commute. Honestly assessed, the office core has struggled with reduced weekday foot traffic since 2020, and the 16th Street Mall reconstruction has disrupted the main spine — both worth seeing in person before deciding.',
      },
      {
        q: 'What is the 16th Street Mall?',
        a: 'A mile-long pedestrian and transit street through the middle of downtown, served by a free shuttle bus. It has undergone a major reconstruction to replace the original paving and redesign the streetscape.',
      },
    ],
    sources: src,
    lede: `The Central Business District is Denver's office core: the towers, the 16th
Street Mall, the theatre complex, and an increasing number of people living in
buildings that were built for work rather than sleep.`,
    sections: `## Where the CBD actually is

The downtown grid, running at 45 degrees to the rest of the city, bounded
roughly by Colfax and Broadway on the south-east and Speer and Wynkoop on the
north-west, with [Union Station](/neighborhoods/denver/union-station/) at one
end and [Civic Center](/neighborhoods/denver/civic-center/) at the other.

## The 16th Street Mall

A mile-long pedestrian and transit spine with a free shuttle, designed by I.M.
Pei's firm and opened in 1982. It has been through a lengthy full
reconstruction, replacing the granite paving and rethinking the layout. The
result is better; the construction period was not.

## Housing

Two kinds: converted older office and warehouse buildings turned into lofts,
and newer purpose-built apartment towers. There is very little that is not
attached, and essentially no private outdoor space.

## The honest part

Downtown Denver's office core has had a harder time than its residential
neighbours since 2020. Weekday foot traffic fell with hybrid work, some ground
floor retail has struggled, and vacancy in older office stock is high. The city
has been actively pursuing office-to-residential conversion as a response.

For a buyer or renter this cuts both ways — it means value and it means you
should look carefully at what is actually open on the block you are considering.`,
    suits: `Urban renters and condo buyers who work downtown or remotely, culture-first
residents who will use the theatre complex and the museums, and anyone who wants
to live without a car.`,
    check: `**Walk the block at different hours.** Downtown varies enormously
street by street and hour by hour.

**Building conversion quality** on office-to-residential product — light,
ventilation and plumbing are the usual weak points.

**HOA reserves and assessments** in older towers.`,
  },

  {
    ...base,
    slug: 'civic-center',
    name: 'Civic Center',
    title: 'Civic Center, Denver — a neighborhood guide',
    summary:
      'Denver’s monumental core: the State Capitol, the city and county building, the art museum and the central library, around a formal park.',
    answer:
      'Civic Center is the governmental and cultural core of Denver, containing the Colorado State Capitol, the City and County Building, the Denver Art Museum, the Denver Public Library central branch and Civic Center Park. Its residential population is small and concentrated in nearby apartment buildings.',
    tags: ['civic-center', 'denver', 'museums', 'government', 'parks'],
    bounds: 'Broadway to Bannock, Colfax to 14th Avenue',
    housing: ['Limited; nearby apartment buildings and lofts'],
    stats: ['State Capitol', 'Denver Art Museum', 'to downtown - walking distance'],
    parks: 'Civic Center Park',
    geo: { lat: 39.7375, lng: -104.9889 },
    links: [
      denverLink,
      { label: 'Colorado State Capitol', url: 'https://www.colorado.gov/capitol' },
      { label: 'Denver Art Museum', url: 'https://www.denverartmuseum.org/' },
      { label: 'Denver Public Library', url: 'https://www.denverlibrary.org/' },
    ],
    faq: [
      {
        q: 'Where is the mile-high marker in Denver?',
        a: 'On the west steps of the Colorado State Capitol. The thirteenth step is engraved as being exactly one mile above sea level, and a later, more precise survey added a second marker a few steps up.',
      },
      {
        q: 'Do people live in Civic Center?',
        a: 'A relatively small number. It is primarily a governmental and cultural district; most nearby residents live in Capitol Hill, the CBD or the Golden Triangle portion of the area.',
      },
    ],
    sources: src,
    lede: `Civic Center is the part of Denver built to be photographed: the gold-domed
State Capitol facing the City and County Building across a formal park, with the
art museum, the history museum and the central library on the flanks.`,
    sections: `## Where Civic Center actually is

Between Broadway and Bannock, Colfax down to 14th Avenue, south-west of the
[Central Business District](/neighborhoods/denver/central-business-district/)
and west of [Capitol Hill](/neighborhoods/denver/capitol-hill/).

## What is here

- **Colorado State Capitol**, with the mile-high marker on the west steps
- **Denver City and County Building**, which gets an elaborate holiday light
  display each December
- **Denver Art Museum**, including the Gio Ponti building and the Hamilton
  addition
- **Denver Public Library** central branch, by Michael Graves
- **History Colorado Center**
- **Civic Center Park**, a formal Beaux-Arts park with a Greek amphitheatre

The area immediately south-west is often called the **Golden Triangle**, which
holds most of the residential development.

## Living here

Housing is limited and almost entirely attached — lofts and apartment
buildings, mostly in the Golden Triangle. Civic Center Park has had persistent
public-safety and unhoused-population challenges that the city has addressed in
waves, and it is worth seeing for yourself rather than reading about.`,
    suits: `Museum and culture-first residents who want to walk to all of it, and
government or legal professionals working nearby.`,
    check: `**Conditions in the park** at the hours you would actually use it.

**Building type and HOA** — nearly everything here is attached.`,
  },

  {
    ...base,
    slug: 'lincoln-park',
    name: 'Lincoln Park',
    title: 'Lincoln Park, Denver — a neighborhood guide',
    summary:
      'One of Denver’s oldest neighborhoods, immediately south-west of downtown, with deep Chicano history, the Auraria campus edge, and rapid redevelopment pressure.',
    answer:
      'Lincoln Park is a historically Hispanic Denver neighborhood immediately south-west of downtown, one of the city’s oldest. It contains the Santa Fe Drive arts corridor’s northern end, Denver’s oldest public housing, and is under significant redevelopment pressure from its downtown proximity.',
    tags: [
      'lincoln-park',
      'denver',
      'historic',
      'chicano-history',
      'santa-fe-drive',
      'gentrification',
    ],
    bounds: 'Speer Boulevard to 6th Avenue, Santa Fe Drive to the South Platte',
    housing: ['1880s–1920s cottages and brick', 'Public housing', 'New infill and townhomes'],
    stats: ['to downtown - 5 min', 'light rail - 10th & Osage', 'oldest Denver neighborhoods'],
    transit: 'RTD light rail at 10th & Osage',
    parks: 'Lincoln Park, Sunken Gardens, South Platte Trail',
    geo: { lat: 39.7278, lng: -105.0044 },
    links: [
      denverLink,
      { label: 'Denver Santa Fe Art District', url: 'https://denversantafeartdistrict.com/' },
      { label: 'Denver Housing Authority', url: 'https://www.denverhousing.org/' },
    ],
    faq: [
      {
        q: 'What is the history of Lincoln Park in Denver?',
        a: 'It is one of Denver’s oldest neighborhoods and has been a centre of the city’s Mexican-American and Chicano community for generations, including during the Chicano Movement of the 1960s and 70s. That history is why the Santa Fe corridor matters culturally as well as commercially.',
      },
      {
        q: 'Is Lincoln Park changing?',
        a: 'Substantially. Its proximity to downtown, light rail and the Auraria campus has driven heavy redevelopment, and displacement pressure on long-standing residents is a live and contested local issue.',
      },
    ],
    sources: src,
    lede: `Lincoln Park sits five minutes from downtown across the tracks, and it is one
of the oldest neighborhoods in Denver. It has been the heart of the city's
Mexican-American community for generations, and it is now under as much
redevelopment pressure as anywhere in Colorado.`,
    sections: `## Where Lincoln Park actually is

South-west of downtown between Santa Fe Drive and the South Platte, from Speer
down toward 6th Avenue, with the Auraria campus to the north and
[Baker](/neighborhoods/denver/baker/) to the east.

## The history

Lincoln Park was settled early and became the centre of Denver's Chicano
community through the twentieth century. The Crusade for Justice, a major
Chicano Movement organisation, was based nearby, and the neighborhood remains
culturally significant well beyond its size.

Denver's oldest public housing sits here, and the Denver Housing Authority has
been redeveloping portions of it — a process that has brought new units and also
real concern about who gets to stay.

## What got built here

A mix that reflects the layers: 1880s–1920s cottages and brick houses, mid-
century public housing, and a great deal of new infill and townhome
construction on formerly industrial parcels.

## Santa Fe Drive

The northern end of the Santa Fe arts corridor runs through, connecting to
[Baker](/neighborhoods/denver/baker/) and the First Friday art walk. The galleries
sit alongside businesses that have served the neighborhood for decades.`,
    suits: `Buyers who want to be closer to downtown than almost anywhere else at a lower
price than Baker or the Highlands, and who are comfortable in a neighborhood in
visible transition.`,
    check: `**Industrial history.** Parts of the area have former industrial uses. Ask
about any environmental assessment on redeveloped parcels.

**Flood risk** near the South Platte — pull current FEMA mapping.

**Pre-1930 systems** on the older housing stock.`,
  },

  {
    ...base,
    slug: 'north-capitol-hill',
    name: 'North Capitol Hill',
    title: 'North Capitol Hill (Uptown), Denver — a neighborhood guide',
    summary:
      'Known locally as Uptown: the restaurant row on 17th Avenue, the hospital campuses, and a dense mix of Victorian rowhouses and new apartment blocks.',
    answer:
      'North Capitol Hill, commonly called Uptown, is a dense Denver neighborhood between downtown and Capitol Hill. It is known for the 17th Avenue restaurant row, a concentration of medical facilities, and a mix of Victorian rowhouses and modern apartment buildings.',
    tags: ['north-capitol-hill', 'uptown', 'denver', 'restaurants', 'walkable', 'dense'],
    bounds: 'Broadway to Downing, Colfax to 23rd Avenue',
    housing: ['1880s–1900s Victorian rowhouses and mansions', 'Modern mid-rise apartments'],
    stats: ['17th Avenue restaurant row', 'to downtown - 10 min walk', 'tenure - majority renter'],
    parks: 'Benedict Fountain Park, City Park nearby',
    geo: { lat: 39.7461, lng: -104.9797 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Uptown the same as North Capitol Hill?',
        a: 'Yes. "Uptown" is the common local name; North Capitol Hill is the official statistical neighborhood designation.',
      },
      {
        q: 'What is 17th Avenue in Denver known for?',
        a: 'Restaurant row — a concentrated stretch of independent restaurants and bars between roughly Downing and Park Avenue, and one of the most consistently good eating streets in the city.',
      },
    ],
    sources: src,
    lede: `Uptown is the wedge between downtown and Capitol Hill, and its defining
feature is 17th Avenue — a dense, walkable restaurant row that has survived
several waves of change. The housing behind it runs from surviving Victorian
rowhouses to new mid-rise apartment blocks.`,
    sections: `## Where Uptown actually is

Between Broadway and Downing, Colfax up to about 23rd Avenue, immediately
north-east of downtown.

## 17th Avenue

The restaurant row is the reason people move here. It is a genuinely dense
concentration of independent restaurants and bars, walkable end to end, and busy
most nights.

## The hospitals

Presbyterian/St. Luke's and the surrounding medical campus sit at the eastern
end, and the area has a substantial healthcare workforce living locally. It also
means ambulance traffic, which is worth registering before you sign.

## The housing

Surviving 1880s–1900s rowhouses and mansions on the residential streets, many
subdivided, alongside a great deal of newer mid-rise apartment construction that
has filled surface parking lots over the last fifteen years.`,
    suits: `Renters and condo buyers who want to walk to dinner and to work downtown,
healthcare workers, and people who want density without Capitol Hill's scale.`,
    check: `**Ambulance and hospital noise** on the eastern blocks.

**Parking**, which is scarce and mostly permit-controlled.

**Building quality** on the newer mid-rise stock, which varies considerably.`,
  },

  {
    ...base,
    slug: 'speer',
    name: 'Speer',
    title: 'Speer, Denver — a neighborhood guide',
    summary:
      'A narrow central neighborhood strung along Speer Boulevard and the Cherry Creek Trail, between Capitol Hill and Wash Park.',
    answer:
      'Speer is a central Denver neighborhood following Speer Boulevard and the Cherry Creek corridor, between Capitol Hill and Washington Park West. It mixes early-twentieth-century houses, mid-century apartments and newer infill, with direct access to the Cherry Creek Trail.',
    tags: ['speer', 'denver', 'cherry-creek-trail', 'central', 'apartments'],
    bounds: 'Broadway to Downing, 6th Avenue to Alameda, along Speer Boulevard',
    housing: ['1900–1930 houses and duplexes', 'Mid-century apartment blocks', 'Recent infill'],
    stats: ['Cherry Creek Trail - through it', 'to downtown - 10 min', 'tenure - mixed'],
    parks: 'Cherry Creek Trail, Alamo Placita Park',
    geo: { lat: 39.7208, lng: -104.9797 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Speer a good neighborhood in Denver?',
        a: 'It is a solid, central, slightly overlooked one — cheaper than Country Club and Wash Park on either side, with the Cherry Creek Trail running through it and quick access to Broadway and downtown. The trade-off is traffic noise on Speer Boulevard itself.',
      },
    ],
    sources: src,
    lede: `Speer is the neighborhood most Denverites drive through without naming. It
follows Speer Boulevard and the Cherry Creek corridor between Capitol Hill and
Wash Park, and it quietly offers a central location, trail access and prices
below its famous neighbours.`,
    sections: `## Where Speer actually is

Along Speer Boulevard between roughly Broadway and Downing, from 6th Avenue
south to Alameda, wrapping the Cherry Creek channel.

## The trail

The Cherry Creek Trail runs the length of the neighborhood, grade-separated,
giving a car-free route into downtown one way and out toward Cherry Creek and
Aurora the other. For cyclists and runners this is the whole argument.

## The housing

Genuinely mixed: 1900–1930 houses and duplexes on the residential streets,
mid-century brick apartment blocks along the arterials, and a growing amount of
newer infill. **Alamo Placita** at the northern end is the prettiest pocket, with
a small park and well-kept period housing.`,
    suits: `Cyclists and runners who will use the trail daily, buyers who want central
Denver below Wash Park pricing, and renters who want quick downtown access.`,
    check: `**Traffic noise** on and near Speer Boulevard, which is a major arterial.

**Flood mapping** near the Cherry Creek channel.

**Pre-1930 systems** on the older houses.`,
  },

  {
    ...base,
    slug: 'city-park-west',
    name: 'City Park West',
    title: 'City Park West, Denver — a neighborhood guide',
    summary:
      'The dense strip between Uptown and City Park, with hospital campuses, Victorian remnants and a great deal of new apartment construction.',
    answer:
      'City Park West is a dense Denver neighborhood between North Capitol Hill and City Park, containing significant medical campuses and a mix of Victorian housing and recent apartment development. It offers direct access to City Park and short commutes downtown.',
    tags: ['city-park-west', 'denver', 'dense', 'apartments', 'medical'],
    bounds: 'Downing to York Street, Colfax to 23rd Avenue',
    housing: ['1890s–1920s Victorian and brick', 'Recent mid-rise apartments'],
    stats: ['City Park - adjacent', 'to downtown - 12 min', 'tenure - majority renter'],
    parks: 'City Park',
    geo: { lat: 39.7461, lng: -104.9639 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is City Park West a good place to rent in Denver?',
        a: 'It is one of the better value central options — walking distance to City Park, close to the Uptown restaurants, and with a lot of newer apartment supply that keeps rents competitive relative to Capitol Hill.',
      },
    ],
    sources: src,
    lede: `City Park West is the connective tissue between Uptown and City Park: dense,
rapidly rebuilt, and one of the better value central rental markets in Denver.`,
    sections: `## Where City Park West actually is

Between Downing and York, Colfax up to 23rd Avenue, with
[City Park](/neighborhoods/denver/city-park/) on its eastern edge and
[Uptown](/neighborhoods/denver/north-capitol-hill/) to the west.

## What got built here

The original stock was 1890s–1920s Victorian and brick, and a good deal
survives. Layered onto it is a substantial amount of new mid-rise apartment
construction, particularly along the arterials, which has changed the density
and the streetscape considerably.

## The park

Being able to walk into City Park — the zoo, the museum, the lake — is the
neighborhood's main amenity and the reason to choose it over cheaper blocks
further north.`,
    suits: `Renters who want park access and central location at below Capitol Hill and
Congress Park pricing, and healthcare workers at the nearby campuses.`,
    check: `**New-build quality** varies widely across the recent apartment stock.

**Noise from Colfax and the arterials.**

**Parking availability**, which is tight.`,
  },
]
