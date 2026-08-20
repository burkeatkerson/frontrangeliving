import { SRC } from './_template.mjs'

const base = { city: 'denver', cityName: 'Denver', sector: 'South Denver' }
const src = [SRC.denverNbhd, SRC.car]

const denverLink = { label: 'City and County of Denver', url: 'https://www.denvergov.org/' }
const dpsLink = { label: 'Denver Public Schools', url: 'https://www.dpsk12.org/' }

export const denverSouth = [
  {
    ...base,
    slug: 'washington-park',
    name: 'Washington Park',
    featured: true,
    title: 'Washington Park, Denver — a neighborhood guide',
    summary:
      'Denver’s best big park with the city’s classic bungalow belt wrapped around it — and one of the most consistently expensive addresses in town.',
    answer:
      'Washington Park is a south Denver neighborhood surrounding the 165-acre park of the same name. It is characterised by 1900s–1930s brick bungalows and Denver Squares, is heavily owner-occupied, and is among the city’s most sought-after and expensive areas.',
    tags: ['washington-park', 'wash-park', 'denver', 'bungalows', 'parks', 'family', 'expensive'],
    bounds: 'Downing Street to University Boulevard, Alameda to Louisiana Avenue',
    housing: ['1900–1935 brick bungalows and Denver Squares', 'Significant pop-tops and rebuilds'],
    stats: ['park - 165 acres', 'to downtown - 15 min', 'tenure - majority owner'],
    parks: 'Washington Park, Smith Lake, Grasmere Lake',
    geo: { lat: 39.6989, lng: -104.9714 },
    links: [
      denverLink,
      {
        label: 'Washington Park, Denver Parks and Recreation',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'Why is Wash Park so popular?',
        a: 'A 165-acre park with two lakes, a flower garden, a 2.6-mile loop, tennis courts and playing fields, wrapped in walkable bungalow streets fifteen minutes from downtown. It is the most complete package of park, housing and location in Denver, and it prices accordingly.',
      },
      {
        q: 'How big is Washington Park in Denver?',
        a: 'About 165 acres, containing Smith Lake and Grasmere Lake, a recreation centre, a boathouse, tennis courts, and a formal flower garden modelled on one at Mount Vernon.',
      },
      {
        q: 'Is Washington Park expensive?',
        a: 'Yes — it is consistently one of Denver’s most expensive neighborhoods, and the blocks fronting the park carry a substantial premium over those a few streets away.',
      },
    ],
    sources: src,
    lede: `Washington Park is the neighborhood most Denver residents would pick if money
were not a consideration. A 165-acre park with two lakes at the centre, a 2.6
mile loop that the whole south side runs on, and brick bungalows on every street
around it.`,
    sections: `## Where Wash Park actually is

South Denver between Downing and University, from Alameda down to Louisiana.
Downtown is fifteen minutes. [Platt Park](/neighborhoods/denver/platt-park/) is
immediately south and [Belcaro](/neighborhoods/denver/belcaro/) east.

## The park

165 acres, laid out from 1899, containing:

- **Smith Lake** and the boathouse, and **Grasmere Lake** at the southern end
- A **2.6-mile loop road** closed to cars, which is the busiest running and
  cycling loop in the city
- The **flower gardens**, including a formal garden modelled on one at Mount
  Vernon
- Tennis courts, playing fields, a recreation centre and a large indoor pool

Smith Ditch, one of Denver's oldest irrigation ditches, runs through it and is
why the trees are as big as they are.

## The housing

1900 to 1935, predominantly brick: bungalows, Denver Squares and Tudor
Revivals. There has been extensive pop-top and scrape activity, so many original
one-storey bungalows are now two.

The **east side** of the park, toward University, generally carries larger houses
and higher prices. The **west side**, toward Downing, is somewhat more modest.

## Old South Gaylord

A short, well-preserved commercial block at Gaylord and Mississippi with
restaurants, a bookshop and a farmers market. It is the neighborhood's walkable
centre and one of the more pleasant small commercial streets in Denver.`,
    suits: `Families and buyers who will use the park daily, and who want the classic
Denver bungalow on a walkable street. It is the safest long-term hold in south
Denver and priced as such.`,
    check: `**Pop-top quality and permits.** A lot of second storeys went on quickly.
Get the permit history and a structural opinion.

**Sewer scope.** Mature trees, clay laterals, and a hundred-year-old system.

**Park-side premium.** Understand what you are paying for proximity versus the
house itself.`,
  },

  {
    ...base,
    slug: 'washington-park-west',
    name: 'Washington Park West',
    title: 'Washington Park West, Denver — a neighborhood guide',
    summary:
      'The more affordable western half of the Wash Park area, between the park and Broadway, with the same bungalows and a lower entry price.',
    answer:
      'Washington Park West is a south Denver neighborhood between Broadway and Downing Street, west of Washington Park. It shares the area’s 1900s–1930s bungalow housing stock at generally lower prices than the blocks fronting the park.',
    tags: ['washington-park-west', 'denver', 'bungalows', 'value', 'walkable'],
    bounds: 'Broadway to Downing Street, Alameda to Louisiana Avenue',
    housing: ['1900–1935 brick bungalows and squares', 'Some infill and duplexes'],
    stats: ['to downtown - 13 min', 'value - below Wash Park', 'Broadway corridor'],
    parks: 'Washington Park nearby',
    geo: { lat: 39.6989, lng: -104.9847 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Washington Park West cheaper than Washington Park?',
        a: 'Generally yes — it has similar housing stock but sits further from the park and closer to the Broadway corridor, which puts it below the park-adjacent blocks.',
      },
    ],
    sources: src,
    lede: `Washington Park West is the half of the Wash Park area that people forget to
look at. Same bungalows, same grid, a slightly longer walk to the park, and a
noticeably lower number.`,
    sections: `## Where it actually is

Between Broadway and Downing, from Alameda to Louisiana, west of
[Washington Park](/neighborhoods/denver/washington-park/).

## The housing

Substantially the same as Wash Park proper — 1900s–1930s brick bungalows and
squares — with more duplexes and small apartment buildings mixed in, particularly
toward Broadway.

## The Broadway edge

South Broadway runs along the western boundary with its run of bars, restaurants
and vintage shops continuing down from [Baker](/neighborhoods/denver/baker/).
That is a genuine amenity and a source of traffic noise depending on the block.`,
    suits: `Buyers who want Wash Park housing and walkability at a lower entry price, and
who do not need to be on the park.`,
    check: `**Broadway noise** on the western blocks.

**Sewer and pre-1935 systems.**

**Conversion history** on duplexed houses.`,
  },

  {
    ...base,
    slug: 'platt-park',
    name: 'Platt Park',
    featured: true,
    title: 'Platt Park, Denver — a neighborhood guide',
    summary:
      'Old South Pearl Street, a Sunday farmers market, and a bungalow grid that has become one of south Denver’s most desirable addresses.',
    answer:
      'Platt Park is a south Denver neighborhood centred on Old South Pearl Street, with 1900s–1930s bungalow housing. It is known for its walkable commercial strip, a long-running Sunday farmers market, and light rail access at the Louisiana-Pearl station.',
    tags: ['platt-park', 'denver', 'south-pearl', 'bungalows', 'walkable', 'light-rail'],
    bounds: 'Downing Street to University Boulevard, Louisiana to Evans Avenue',
    housing: ['1900–1935 brick bungalows and cottages', 'Pop-tops and infill'],
    stats: ['Old South Pearl Street', 'light rail - Louisiana-Pearl', 'to downtown - 15 min'],
    transit: 'RTD light rail at Louisiana-Pearl',
    parks: 'Platt Park, Washington Park nearby',
    geo: { lat: 39.6864, lng: -104.9714 },
    links: [
      denverLink,
      { label: 'South Pearl Street', url: 'https://southpearlstreet.com/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is Old South Pearl Street?',
        a: 'A walkable commercial strip in Platt Park with independent restaurants, bars and shops, and a Sunday farmers market that runs through the warm months. It is one of the best small main streets in Denver.',
      },
      {
        q: 'Does Platt Park have light rail?',
        a: 'Yes — the Louisiana-Pearl station on the RTD light rail line sits at the neighborhood’s northern edge, giving a direct ride downtown and south toward Littleton.',
      },
    ],
    sources: src,
    lede: `Platt Park has the thing every Denver neighborhood wants and few have: a real
main street. Old South Pearl runs through the middle of it with restaurants, a
Sunday farmers market and enough foot traffic to keep it all going, wrapped in a
bungalow grid with a light rail station at the corner.`,
    sections: `## Where Platt Park actually is

South Denver between Downing and University, from Louisiana down to Evans, south
of [Washington Park](/neighborhoods/denver/washington-park/) and north of
[University](/neighborhoods/denver/university/).

## Old South Pearl

The commercial spine runs roughly from Louisiana to Iowa. Independent
restaurants, bars, a bookshop, and the Sunday farmers market that draws the whole
south side through the summer.

It is compact enough to walk end to end in ten minutes, which is what makes it
work.

## The park

Platt Park itself is modest, with the historic **Decker Library** on its edge —
a 1913 Carnegie library still in use.

## The housing

1900s–1930s brick bungalows and cottages, smaller on average than Wash Park's,
on standard lots with alleys. Extensive pop-top activity.

## The light rail

The Louisiana-Pearl station is on the northern edge, which makes a car-free
commute downtown genuinely practical.`,
    suits: `Buyers who want a walkable main street and light rail with a bungalow attached.
It is one of the most consistently recommended neighborhoods in south Denver.`,
    check: `**Pop-top permits and structure.**

**Sewer scope.**

**Proximity to the rail line** for noise, on the northern blocks.`,
  },

  {
    ...base,
    slug: 'university-park',
    name: 'University Park',
    title: 'University Park, Denver — a neighborhood guide',
    summary:
      'The neighborhood around the University of Denver: mature trees, varied period housing, and the Observatory that gives the area its landmark.',
    answer:
      'University Park is a south Denver neighborhood surrounding the University of Denver, with varied 1890s–1950s housing, mature trees and the historic Chamberlin Observatory. It is served by light rail at the University of Denver station.',
    tags: ['university-park', 'denver', 'university-of-denver', 'historic', 'light-rail'],
    bounds: 'University Boulevard to Colorado Boulevard, Evans to Yale Avenue',
    housing: ['1890s–1950s varied period housing', 'Student rentals near campus'],
    stats: ['University of Denver', 'light rail - DU station', 'to downtown - 20 min'],
    transit: 'RTD light rail at University of Denver station',
    parks: 'Observatory Park, Harvard Gulch nearby',
    geo: { lat: 39.6739, lng: -104.9531 },
    links: [
      denverLink,
      { label: 'University of Denver', url: 'https://www.du.edu/' },
      { label: 'Chamberlin Observatory', url: 'https://www.du.edu/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is Chamberlin Observatory?',
        a: 'An 1890 astronomical observatory in Observatory Park, operated by the University of Denver, housing a historic refracting telescope. It still hosts public observing nights and gives the surrounding area its name.',
      },
      {
        q: 'Is University Park mostly students?',
        a: 'No. There is student rental housing near campus, but much of the neighborhood is long-term owner-occupied with substantial period houses, particularly around Observatory Park.',
      },
    ],
    sources: src,
    lede: `University Park grew up around the University of Denver from the 1880s, and it
has the tree canopy and the housing variety that a hundred and forty years
produces. The 1890 Chamberlin Observatory still sits at the centre of it.`,
    sections: `## Where University Park actually is

South Denver between University and Colorado Boulevard, from Evans down to Yale,
wrapping the DU campus.

## The observatory

**Chamberlin Observatory**, built in 1890 and operated by DU, sits in Observatory
Park with a historic refracting telescope still in use for public nights. The
surrounding blocks — often called Observatory Park locally — hold some of the
largest houses in the neighborhood.

## The housing

Genuinely varied: 1890s–1900s houses from the original university settlement,
1920s bungalows and Tudors, and post-war ranches. Near campus there is a
significant student rental component; further out it is stable owner-occupied.

## Transit

The University of Denver light rail station sits on the western edge, giving a
direct ride downtown.`,
    suits: `Faculty and staff, families who want large trees and varied period housing, and
buyers who want light rail with a quieter setting than Platt Park.`,
    check: `**Rental concentration** on the specific block if you want quiet.

**Systems**, which vary widely across the housing eras.

**Sewer scope** on anything pre-1940.`,
  },

  {
    ...base,
    slug: 'university',
    name: 'University',
    title: 'University, Denver — a neighborhood guide',
    summary:
      'The blocks immediately west and north of the DU campus, mixing student housing, apartments and modest period houses.',
    answer:
      'University is a south Denver neighborhood adjoining the University of Denver campus, containing a mix of student housing, apartments and 1900s–1950s houses. It has direct light rail access and is among the more affordable central-south options.',
    tags: ['university-denver', 'denver', 'student-housing', 'apartments', 'light-rail'],
    bounds: 'Downing Street to University Boulevard, Evans to Yale Avenue',
    housing: ['1900s–1950s houses', 'Apartments and student rentals'],
    stats: ['DU campus - adjacent', 'light rail', 'tenure - majority renter'],
    transit: 'RTD light rail at University of Denver station',
    parks: 'Harvard Gulch Park nearby',
    geo: { lat: 39.6739, lng: -104.9714 },
    links: [denverLink, { label: 'University of Denver', url: 'https://www.du.edu/' }, dpsLink],
    faq: [
      {
        q: 'Is the University neighborhood good for investors?',
        a: 'It has steady student rental demand from DU and light rail access, which supports occupancy. Denver’s rental licensing requirements apply, so confirm compliance before buying an existing rental.',
      },
    ],
    sources: src,
    lede: `The University neighborhood sits on the campus doorstep and functions largely
as its housing: apartments, student rentals and modest period houses, with a
light rail station attached.`,
    sections: `## Where it actually is

Between Downing and University Boulevard, from Evans down to Yale, west of
[University Park](/neighborhoods/denver/university-park/) and adjoining the DU
campus.

## The housing

A mix of 1900s–1950s houses, purpose-built student apartments and converted
rentals. Renter-occupancy is high.

## For investors

Steady demand from DU, though seasonal. Note that Denver requires residential
rental licences; confirm the licence status of any existing rental you buy.`,
    suits: `Investors, students and staff, and renters who want light rail and campus
proximity.`,
    check: `**Rental licence status** on any existing rental property.

**Seasonality** of student demand.

**Condition** on properties that have been rentals for a long time.`,
  },

  {
    ...base,
    slug: 'rosedale',
    name: 'Rosedale',
    title: 'Rosedale, Denver — a neighborhood guide',
    summary:
      'A small, quiet south Denver neighborhood of bungalows near Harvard Gulch, with a golf course and a strong local school.',
    answer:
      'Rosedale is a small south Denver neighborhood between Downing and University Boulevard, south of Evans. It has predominantly 1920s–1940s bungalows, borders Harvard Gulch Park and its par-3 golf course, and is a quiet, largely owner-occupied area.',
    tags: ['rosedale', 'denver', 'bungalows', 'quiet', 'family'],
    bounds: 'Downing Street to University Boulevard, Yale to Iliff Avenue',
    housing: ['1920s–1940s brick bungalows'],
    stats: ['Harvard Gulch Park', 'to downtown - 20 min', 'tenure - majority owner'],
    parks: 'Harvard Gulch Park and golf course',
    geo: { lat: 39.6672, lng: -104.9714 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Rosedale a good family neighborhood?',
        a: 'It is quiet, largely owner-occupied, and has a park with a recreation centre, a pool and a par-3 golf course on its edge. It is smaller and less well known than Platt Park or Wash Park, which keeps prices somewhat lower.',
      },
    ],
    sources: src,
    lede: `Rosedale is a small grid of 1920s bungalows in south Denver, quiet enough that
most people only find it by looking for something cheaper than Platt Park.`,
    sections: `## Where Rosedale actually is

Between Downing and University Boulevard, from Yale down to Iliff, south of
[University](/neighborhoods/denver/university/).

## Harvard Gulch

The park runs along the southern edge with a recreation centre, an outdoor pool,
and a par-3 golf course — an unusually good amenity for a neighborhood this
small. The Harvard Gulch Trail connects west toward the South Platte.

## The housing

Predominantly 1920s–40s brick bungalows on standard lots. Modest, consistent,
and generally well maintained.`,
    suits: `Families and first-time buyers who want a bungalow in south Denver below Platt
Park pricing.`,
    check: `**Sewer scope** and pre-1945 systems.

**Drainage** near the gulch.`,
  },

  {
    ...base,
    slug: 'overland',
    name: 'Overland',
    title: 'Overland, Denver — a neighborhood guide',
    summary:
      'A south Denver neighborhood between Broadway and the South Platte, with a historic golf course, an industrial edge and steadily rising interest.',
    answer:
      'Overland is a south Denver neighborhood between Broadway and the South Platte River, containing the historic Overland Park Golf Course. It mixes modest early- and mid-century housing with light industrial uses and has good river trail access.',
    tags: ['overland', 'denver', 'golf', 'river-trail', 'value', 'industrial'],
    bounds: 'Broadway to the South Platte, Mississippi to Evans Avenue',
    housing: ['1900s–1950s cottages and bungalows', 'Recent infill'],
    stats: ['Overland Park Golf Course', 'light rail - Evans station', 'value - below city median'],
    transit: 'RTD light rail at Evans station',
    parks: 'Overland Park, South Platte Trail, Ruby Hill nearby',
    geo: { lat: 39.6797, lng: -104.9903 },
    links: [
      denverLink,
      {
        label: 'Overland Park Golf Course',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation/Golf',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is Overland Park Golf Course?',
        a: 'Denver’s oldest golf course, on a site that hosted a racetrack and later an automobile speedway in the early twentieth century. It sits along the South Platte in the Overland neighborhood.',
      },
      {
        q: 'Is Overland a good value in Denver?',
        a: 'It has been one of the better-value south Denver neighborhoods, with light rail, river trail access and prices below the city median. The industrial edges along the river are the reason.',
      },
    ],
    sources: src,
    lede: `Overland sits between Broadway and the South Platte around Denver's oldest golf
course, on land that was a racetrack and then a speedway before it was a
neighborhood. It has light rail, the river trail, and prices that still reflect
the industrial edge.`,
    sections: `## Where Overland actually is

South Denver between Broadway and the South Platte, from Mississippi down to
Evans, west of [Platt Park](/neighborhoods/denver/platt-park/).

## The golf course and the speedway

**Overland Park Golf Course** is Denver's oldest. The site previously hosted a
horse racing track and, from 1909, an automobile speedway — one of the earliest
in the country. The course occupies most of the neighborhood's western half
along the river.

## Transit and trail

The **Evans light rail station** sits on the western side, and the **South Platte
Trail** runs the length of the river frontage, giving a car-free route downtown.

## The housing

Modest 1900s–1950s cottages and bungalows, with newer infill appearing near the
station. Light industrial uses persist along the rail and river corridor.`,
    suits: `Golfers, cyclists, and value buyers who want light rail and trail access below
the Denver median.`,
    check: `**Industrial adjacency and environmental history** near the rail and river.

**Flood mapping** along the South Platte.

**Rail noise** on the western blocks.`,
  },

  {
    ...base,
    slug: 'university-hills',
    name: 'University Hills',
    title: 'University Hills, Denver — a neighborhood guide',
    summary:
      'A large post-war ranch neighborhood in south-east Denver, with good parks, a light rail station and steady mid-century value.',
    answer:
      'University Hills is a south-east Denver neighborhood developed largely in the 1950s, characterised by brick ranches on standard lots. It has light rail access, extensive park frontage along Highline Canal and Cherry Creek, and prices below the city median.',
    tags: ['university-hills', 'denver', 'mid-century', 'ranches', 'light-rail', 'value'],
    bounds: 'Colorado Boulevard to Quebec Street, Yale to Hampden Avenue',
    housing: ['1950s brick ranches', 'Some mid-century modern'],
    stats: ['light rail - Southmoor and Yale', 'Highline Canal', 'value - below city median'],
    transit: 'RTD light rail at Yale and Southmoor stations',
    parks: 'Highline Canal Trail, Bible Park, Eisenhower Park',
    geo: { lat: 39.6656, lng: -104.9333 },
    links: [
      denverLink,
      { label: 'Highline Canal Conservancy', url: 'https://highlinecanal.org/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is the Highline Canal?',
        a: 'A 71-mile historic irrigation canal running from Waterton Canyon through the metro, with a soft-surface trail along its length. It passes through University Hills and is one of the best long-distance walking and riding routes in Denver.',
      },
      {
        q: 'Is University Hills affordable?',
        a: 'It is one of the better value detached-housing neighborhoods in south-east Denver, with light rail and substantial park access, though prices have risen with interest in mid-century houses.',
      },
    ],
    sources: src,
    lede: `University Hills is several thousand 1950s brick ranches in south-east Denver,
threaded by the Highline Canal and served by two light rail stations. It is one
of the better value propositions left inside the city.`,
    sections: `## Where University Hills actually is

South-east Denver between Colorado Boulevard and Quebec, from Yale down to
Hampden, south of [Virginia Village](/neighborhoods/denver/virginia-village/).

## The Highline Canal

The historic 71-mile canal runs through with its soft-surface trail — shaded,
flat, and continuous for miles in both directions. It is the neighborhood's best
amenity and one of the metro's genuinely great linear parks.

## Transit

The **Yale** and **Southmoor** light rail stations sit at the edges, giving a
direct ride downtown and to the Tech Center.

## The housing

Overwhelmingly 1950s brick ranches on standard lots, with pockets of genuine
mid-century modern that trade at a premium.`,
    suits: `Buyers who want a detached mid-century house with a yard, light rail and trail
access below the Denver median.`,
    check: `**Electrical capacity and sewer** on unmodernised 1950s houses.

**Aircraft noise** varies; check the specific location.

**Original windows and insulation.**`,
  },

  {
    ...base,
    slug: 'wellshire',
    name: 'Wellshire',
    title: 'Wellshire, Denver — a neighborhood guide',
    summary:
      'A small, quiet, affluent south Denver neighborhood around the Wellshire golf course, with large lots and mature trees.',
    answer:
      'Wellshire is a small affluent south Denver neighborhood around the Wellshire Golf Course, near the Cherry Hills Village boundary. It has large lots, substantial mid-century and later housing, and is among the quieter parts of the city.',
    tags: ['wellshire', 'denver', 'golf', 'affluent', 'large-lots', 'quiet'],
    bounds: 'University Boulevard to Colorado Boulevard, Hampden to Yale Avenue',
    housing: ['1940s–1960s ranches', 'Later custom houses and rebuilds'],
    stats: ['Wellshire Golf Course', 'to downtown - 20 min', 'lot size - large'],
    parks: 'Wellshire Golf Course, Highline Canal Trail',
    geo: { lat: 39.6567, lng: -104.9531 },
    links: [
      denverLink,
      {
        label: 'Wellshire Golf Course',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation/Golf',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'Is Wellshire an expensive neighborhood?',
        a: 'It is among the more expensive parts of south Denver, driven by large lots, the golf course and proximity to Cherry Hills Village. Inventory is limited.',
      },
    ],
    sources: src,
    lede: `Wellshire is a small, quiet, expensive corner of south Denver wrapped around a
municipal golf course, with lot sizes that feel more like Cherry Hills Village
next door than like the rest of the city.`,
    sections: `## Where Wellshire actually is

South Denver between University and Colorado Boulevard, from Hampden up to Yale,
adjoining [Cherry Hills Village](/places/cherry-hills-village/).

## The golf course

Wellshire Golf Course is a municipal course on a Donald Ross-influenced layout,
with a historic clubhouse. It is the neighborhood's centre and the reason for
much of the pricing.

## The housing

1940s–60s ranches on large lots, plus a significant number of later custom
houses and rebuilds. The Highline Canal Trail passes nearby.`,
    suits: `Buyers who want a large lot and quiet in south Denver, and golfers.`,
    check: `**Lot coverage and zoning** if you plan to rebuild.

**Systems in original mid-century houses.**

**Golf course adjacency** — errant balls are a genuine consideration on some
lots.`,
  },

  {
    ...base,
    slug: 'college-view-south-platte',
    name: 'College View / South Platte',
    title: 'College View / South Platte, Denver — a neighborhood guide',
    summary:
      'A working-class south-west Denver neighborhood along the river, with modest housing and among the lowest prices in the city.',
    answer:
      'College View / South Platte is a south-west Denver neighborhood along the South Platte River, with predominantly modest mid-century housing and some industrial uses. It is among the least expensive neighborhoods in the city.',
    tags: ['college-view', 'south-platte', 'denver', 'affordable', 'river'],
    bounds: 'The South Platte to Federal Boulevard, Evans to Hampden Avenue',
    housing: ['1940s–1960s cottages and ranches'],
    stats: ['to downtown - 20 min', 'value - among Denver’s lowest', 'river trail'],
    parks: 'South Platte Trail, Ruby Hill nearby',
    geo: { lat: 39.6656, lng: -105.0083 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is College View affordable?',
        a: 'It is among the least expensive neighborhoods in Denver, with modest detached housing and yards. The trade-offs are limited amenity, industrial adjacency along the river, and arterial traffic.',
      },
    ],
    sources: src,
    lede: `College View and South Platte make up a working-class stretch of south-west
Denver along the river — modest houses, real yards, and some of the lowest
prices left inside the city.`,
    sections: `## Where it actually is

South-west Denver between the South Platte and Federal Boulevard, from Evans
down to Hampden, south of [Ruby Hill](/neighborhoods/denver/ruby-hill/).

## The housing

1940s–60s cottages and ranches on standard lots. Industrial and commercial uses
persist along the river and the rail corridor.

## The trail

The South Platte Trail runs the eastern edge, connecting north toward downtown
and south toward Englewood and Littleton.`,
    suits: `Value-first buyers and investors who want a detached house with a yard at the
lowest available price inside Denver.`,
    check: `**Environmental history** near the river and rail corridor.

**Flood mapping.**

**Post-war systems** and any unpermitted work.`,
  },
]
