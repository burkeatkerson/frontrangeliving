import { SOURCES } from './_template.mjs'

const census = { ...SOURCES.census, retrieved: '2026-08-19' }

export const southMetro = [
  // ------------------------------------------------------------ Aurora
  {
    slug: 'aurora',
    priceLadder: [
      { label: 'Denver metro', value: 650000 },
      { label: 'Arapahoe County', value: 590000 },
      { label: 'Adams County', value: 520000 },
      { label: 'Aurora', value: 515000, self: true },
    ],
    name: 'Aurora',
    region: 'south-metro',
    county: 'Arapahoe, Adams & Douglas Counties',
    featured: true,
    title: 'Aurora, Colorado — the complete guide to living here',
    summary:
      'Colorado’s third-largest city and its most diverse: 386,000 people across three counties, a major medical campus, a Space Force base, and the metro’s best value on detached housing.',
    answer:
      'Aurora is Colorado’s third-largest city, population about 386,261, spanning Arapahoe, Adams and Douglas counties east of Denver. Its June 2026 median sale price was $515,000 — well below the metro’s $650,000 — and it hosts the Anschutz Medical Campus and Buckley Space Force Base.',
    tags: ['aurora', 'south-metro', 'arapahoe-county', 'diversity', 'value', 'a-line'],
    geo: { lat: 39.7294, lng: -104.8319 },
    stats: [
      'median - $515K',
      'population - 386,261',
      'elevation - 5,471 ft',
      'days on market - 36',
    ],
    civic: {
      population: 386261,
      elevation: 5471,
      incorporated: 1903,
      area: 160.0,
      schoolDistricts: [
        'Aurora Public Schools',
        'Cherry Creek School District',
        'Adams-Arapahoe 28J',
      ],
      employers: [
        'University of Colorado Anschutz Medical Campus',
        'Children’s Hospital Colorado',
        'UCHealth University of Colorado Hospital',
        'Buckley Space Force Base',
        'Raytheon and aerospace cluster',
      ],
      transit: [
        'RTD A Line commuter rail to DIA and Union Station',
        'RTD R Line light rail through central Aurora',
        'RTD H Line to the Nine Mile station',
      ],
      drive: { denver: 25, boulder: 50, dia: 25 },
      median: 515000,
      medianBasis: 'Aurora, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Aurora', url: 'https://www.auroragov.org/' },
      { label: 'Cherry Creek School District', url: 'https://www.cherrycreekschools.org/' },
      { label: 'Aurora Public Schools', url: 'https://aurorak12.org/' },
      { label: 'CU Anschutz Medical Campus', url: 'https://www.cuanschutz.edu/' },
    ],
    faq: [
      {
        q: 'How much does a house cost in Aurora?',
        a: 'The median sale price was $515,000 in June 2026, against $650,000 for the seven-county Denver metro — one of the largest discounts available inside the metro, with average days on market around 36.',
      },
      {
        q: 'Is Aurora a good place to live?',
        a: 'For value and diversity, yes. It has the metro’s widest range of housing prices, an enormous medical and aerospace employment base, and the best international food scene in Colorado. Quality varies sharply by neighbourhood, so the district and the specific area matter more here than almost anywhere.',
      },
      {
        q: 'What school district is Aurora in?',
        a: 'Multiple. Aurora Public Schools covers much of the older west and north; Cherry Creek School District covers the southern and south-eastern neighbourhoods and is generally the higher-performing of the two. The boundary is a significant driver of price.',
      },
      {
        q: 'Where is the best food in Aurora?',
        a: 'Havana Street, without much argument. The corridor holds one of the densest concentrations of Korean, Ethiopian, Mexican, Vietnamese and East African restaurants in the Mountain West.',
      },
    ],
    sources: [census, SOURCES.car, { label: 'City of Aurora', url: 'https://www.auroragov.org/' }],
    lede: `Aurora is the third-largest city in Colorado, the most ethnically diverse
municipality in the state, and the one most consistently written off by people
who have only driven through it on I-225. It is 160 square miles across three
counties, and the difference between one end and the other is larger than the
difference between most separate cities.`,
    money: `Aurora's median sale price was **$515,000** in June 2026 against **$650,000**
for the seven-county metro — one of the biggest discounts available without
leaving the metro. Days on market across the Aurora/Adams/Arapahoe group
averaged 36, with prices moving within about 1% year over year.

The internal spread is the thing to understand. Older north-west Aurora near
Colfax is among the least expensive housing in the metro; the southern Cherry
Creek School District neighbourhoods around Southlands price like Douglas
County. Same city, same median, entirely different markets.`,
    sections: `## Where Aurora actually is

East and south-east of Denver, wrapping the city from Montview Boulevard down to
E-470, across Arapahoe, Adams and a sliver of Douglas County. DIA is
twenty-five minutes; downtown Denver about the same.

## The four Auroras

**Original Aurora and north-west**, along Colfax and Montview, is the oldest —
pre-war and postwar housing, the lowest prices in the city, and the area with
the most concentrated poverty. It also holds the Anschutz Medical Campus, which
is transforming its immediate surroundings.

**Havana and central Aurora** is the immigrant commercial heart of the metro.
The Havana Street corridor is the best eating in Colorado, full stop, and the
surrounding 1960s–70s housing is solid value.

**South Aurora**, in the Cherry Creek School District around Smoky Hill and
Tower Road, is conventional 1980s–2000s suburbia with strong schools and prices
to match.

**Far south-east**, around Southlands and toward E-470, is the newest growth:
post-2000 master-planned neighbourhoods, larger houses, and the longest
commutes.

## The Anschutz Medical Campus

Built on the site of the former Fitzsimons Army Medical Center, Anschutz is one
of the largest academic medical campuses in the United States — CU's medical,
nursing, dental and pharmacy schools, University of Colorado Hospital, Children's
Hospital Colorado, and a growing bioscience park.

It is the single most important economic fact about modern Aurora, and it has
driven substantial redevelopment in the surrounding older neighbourhoods.

## Buckley Space Force Base

Buckley hosts space-based missile warning and surveillance operations and a
substantial military and contractor population. Military families are a
meaningful share of the local rental and purchase market, which affects both
demand patterns and the availability of VA-financed transactions.

## The food

Havana Street deserves its own paragraph. Korean barbecue, Ethiopian injera,
Vietnamese phở, Mexican from half a dozen regions, East African, Salvadoran —
within about three miles. It is the most interesting eating in Colorado and it
is not close.

See also [best green chile, no debate?](/answers/best-green-chile/)

## Who Aurora is right for

Value buyers who will do neighbourhood-level research, medical and aerospace
workers, military families, and anyone who wants to eat well without paying
Denver rent. It is the best value inside the metro if you buy in the right
place.

It is a weaker fit for anyone who wants to buy on the city's reputation rather
than on a specific neighbourhood — Aurora punishes lazy research more than
anywhere else on the Front Range.`,
  },

  // ------------------------------------------------------------ Centennial
  {
    slug: 'centennial',
    name: 'Centennial',
    region: 'south-metro',
    county: 'Arapahoe County',
    title: 'Centennial, Colorado — the complete guide to living here',
    summary:
      'A city of 108,000 that did not exist until 2001, formed to keep its neighbourhoods out of annexation. Strong schools, low crime, and almost no downtown.',
    answer:
      'Centennial is an Arapahoe County city of about 108,418 south of Denver, incorporated in 2001 in what was then one of the largest incorporations in US history. It is served largely by the Cherry Creek and Littleton school districts and consistently ranks among the safest cities in Colorado.',
    tags: ['centennial', 'south-metro', 'arapahoe-county', 'schools', 'suburban'],
    geo: { lat: 39.5807, lng: -104.8772 },
    stats: [
      'population - 108,418',
      'elevation - 5,833 ft',
      'county median - $590K',
      'incorporated - 2001',
    ],
    civic: {
      population: 108418,
      elevation: 5833,
      incorporated: 2001,
      schoolDistricts: [
        'Cherry Creek School District',
        'Littleton Public Schools',
        'Douglas County School District',
      ],
      employers: [
        'Arapahoe County government',
        'Centennial Airport businesses',
        'Denver Tech Center adjacency',
      ],
      transit: ['RTD light rail on the E and R lines at Dry Creek, Arapahoe and Orchard'],
      drive: { denver: 30, boulder: 55, dia: 40 },
      median: 590000,
      medianBasis: 'Arapahoe County, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Centennial', url: 'https://www.centennialco.gov/' },
      { label: 'Cherry Creek School District', url: 'https://www.cherrycreekschools.org/' },
      { label: 'Littleton Public Schools', url: 'https://littletonpublicschools.net/' },
    ],
    faq: [
      {
        q: 'Why was Centennial incorporated?',
        a: 'To prevent the unincorporated neighbourhoods between Littleton, Aurora and Greenwood Village from being annexed piecemeal by their neighbours. Voters approved incorporation in 2000 and the city was formed in 2001 with over 100,000 residents — among the largest incorporations in American history.',
      },
      {
        q: 'Is Centennial a safe place to live?',
        a: 'It consistently ranks among the safest cities of its size in Colorado and nationally, which along with the school districts is the main reason families choose it.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Centennial', url: 'https://www.centennialco.gov/' },
    ],
    lede: `Centennial is a city of 108,000 people that did not legally exist until 2001.
It was created defensively — a collection of unincorporated Arapahoe County
neighbourhoods that incorporated to avoid being annexed by their neighbours —
and it has the character that origin implies: excellent schools, very low crime,
and essentially no centre.`,
    money: `Arapahoe County's June 2026 single-family median was **$590,000**, and
Centennial generally sits at or above it. The premium is for schools and safety
rather than for architecture or location — most of the stock is 1970s–2000s
suburban.

The Cherry Creek versus Littleton school district boundary is a real price line
here. Both are strong, and both are priced accordingly.`,
    sections: `## Where Centennial actually is

South of Denver between Littleton, Greenwood Village and Aurora, at 5,833 feet.
Downtown Denver is thirty minutes; the Denver Tech Center is immediately north.

## What incorporation was about

Through the 1990s, Arapahoe County's unincorporated suburbs were being annexed
piece by piece. Residents organised, and in 2000 voted to incorporate the whole
area at once. The city formed in 2001 with more than 100,000 residents.

The consequence is a city designed around not changing much. Centennial has
strong services, low taxes, and very little of the mixed-use redevelopment that
Denver and its inner suburbs have seen.

## Centennial Airport

One of the busiest general aviation airports in the country sits inside the
city. It is a genuine economic asset and a noise consideration depending on
where you are relative to the approach paths.

## Who Centennial is right for

Families prioritising schools and safety who want a conventional suburban house
with a garage and a yard, and Tech Center workers. Light rail access on the E
and R lines is better than most suburbs.

It is a weaker fit if you want walkability, character housing or a downtown.
Centennial has none of those and is not building them.`,
  },

  // ------------------------------------------------------------ Littleton
  {
    slug: 'littleton',
    name: 'Littleton',
    region: 'south-metro',
    county: 'Arapahoe County',
    title: 'Littleton, Colorado — the complete guide to living here',
    summary:
      'The Arapahoe County seat, with the best preserved historic main street in the south metro, light rail, and Lockheed Martin down the road.',
    answer:
      'Littleton is the Arapahoe County seat, population about 45,652, south-west of Denver on the South Platte. It has a well-preserved historic downtown on Main Street, RTD light rail service, and its own highly regarded Littleton Public Schools district.',
    tags: [
      'littleton',
      'south-metro',
      'arapahoe-county',
      'main-street',
      'light-rail',
      'county-seat',
    ],
    geo: { lat: 39.6133, lng: -105.0166 },
    stats: [
      'population - 45,652',
      'elevation - 5,362 ft',
      'county median - $590K',
      'commute to Denver - 25 min',
    ],
    civic: {
      population: 45652,
      elevation: 5362,
      incorporated: 1890,
      countySeat: true,
      schoolDistricts: ['Littleton Public Schools'],
      employers: [
        'Lockheed Martin Space',
        'Littleton Adventist Hospital',
        'Arapahoe County government',
      ],
      transit: ['RTD C and D lines — Littleton-Downtown and Littleton-Mineral stations'],
      drive: { denver: 25, boulder: 50, dia: 45 },
      median: 590000,
      medianBasis: 'Arapahoe County, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Littleton', url: 'https://www.littletonco.gov/' },
      { label: 'Littleton Public Schools', url: 'https://littletonpublicschools.net/' },
      { label: 'Hudson Gardens', url: 'https://www.hudsongardens.org/' },
    ],
    faq: [
      {
        q: 'Is downtown Littleton worth living near?',
        a: 'It is the best-preserved historic main street in the south metro, with a light rail station attached and genuine independent businesses. Housing near it commands a premium and holds value well.',
      },
      {
        q: 'What school district serves Littleton?',
        a: 'Littleton Public Schools, a small independent district that consistently performs well. Note that parts of the Littleton postal area fall into Jeffco or Douglas County districts — postal address and school district do not align here.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Littleton', url: 'https://www.littletonco.gov/' },
    ],
    lede: `Littleton is the Arapahoe County seat and has the most intact historic
downtown in the southern metro — a real Main Street with a light rail station at
the end of it. It sits on the South Platte where the river comes out of Chatfield,
which gives it more trail and water access than its neighbours.`,
    money: `Arapahoe County's single-family median was **$590,000** in June 2026.
Littleton's downtown-adjacent historic neighbourhoods carry a premium; the
1960s–80s stock further out is more moderate.

Be careful with the postal address. A great many houses with a Littleton mailing
address are actually in Jefferson or Douglas County and in different school
districts. Verify the jurisdiction, the district and the mill levy for the exact
parcel.`,
    sections: `## Where Littleton actually is

South-west of Denver on the South Platte, at 5,362 feet, between Englewood and
Highlands Ranch. Downtown Denver is twenty-five minutes by car or light rail.

## Downtown Littleton

Main Street has survived largely intact — brick storefronts, independent shops
and restaurants, a town hall, and the Littleton-Downtown light rail station at
its edge. It is the closest thing the south metro has to Olde Town Arvada, and
it is genuinely pleasant.

## Lockheed Martin

Lockheed Martin Space's main campus is in the foothills at Waterton Canyon just
south-west of the city, employing thousands of engineers. It anchors an
aerospace cluster that reaches through Littleton and into Douglas County.

## The postal address trap

"Littleton, CO" as a mailing address covers a vast area of unincorporated
Jefferson and Douglas County far beyond the city limits. That means different
schools, different taxes, different services and different police. This is the
single most common confusion in the south metro. Check the actual jurisdiction.

## Who Littleton is right for

People who want a walkable historic downtown with rail access in the south
metro, families using Littleton Public Schools, and buyers who want river and
trail access. Chatfield State Park and the South Platte trail are immediately
south.

It is a weaker fit if you want new construction, which is mostly in Highlands
Ranch and Douglas County instead.`,
  },

  // ------------------------------------------------------------ Englewood
  {
    slug: 'englewood',
    name: 'Englewood',
    region: 'south-metro',
    county: 'Arapahoe County',
    title: 'Englewood, Colorado — the complete guide to living here',
    summary:
      'A compact inner-ring suburb with two major hospitals, light rail, and some of the last genuinely affordable bungalows inside the beltway.',
    answer:
      'Englewood is an Arapahoe County city of about 33,659 immediately south of Denver. It hosts Swedish Medical Center and Craig Hospital, is served by RTD light rail, and offers early-20th-century and postwar housing at prices below the Arapahoe County median.',
    tags: ['englewood', 'south-metro', 'arapahoe-county', 'hospitals', 'light-rail', 'value'],
    geo: { lat: 39.6478, lng: -104.9878 },
    stats: [
      'population - 33,659',
      'elevation - 5,338 ft',
      'county median - $590K',
      'commute to Denver - 18 min',
    ],
    civic: {
      population: 33659,
      elevation: 5338,
      incorporated: 1903,
      schoolDistricts: ['Englewood Schools'],
      employers: ['Swedish Medical Center', 'Craig Hospital', 'DISH Network (Meridian adjacency)'],
      transit: ['RTD C and D lines — Englewood and Oxford stations'],
      drive: { denver: 18, boulder: 45, dia: 40 },
      median: 590000,
      medianBasis: 'Arapahoe County, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Englewood', url: 'https://www.englewoodco.gov/' },
      { label: 'Craig Hospital', url: 'https://craighospital.org/' },
      { label: 'Englewood Schools', url: 'https://www.englewoodschools.net/' },
    ],
    faq: [
      {
        q: 'What is Craig Hospital?',
        a: 'A nationally ranked rehabilitation hospital specialising in spinal cord and traumatic brain injury, in Englewood. It draws patients from across the country and, with the adjacent Swedish Medical Center, anchors the local economy.',
      },
      {
        q: 'Is Englewood affordable?',
        a: 'Relatively, for how close it is. It generally prices below the Arapahoe County median of $590,000 while being eighteen minutes from downtown Denver with light rail — one of the better value-for-location trades in the metro.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Englewood', url: 'https://www.englewoodco.gov/' },
    ],
    lede: `Englewood is a compact inner-ring suburb directly south of Denver that
contains two nationally significant hospitals, a light rail line, and a
surprising amount of affordable early-20th-century housing for somewhere
eighteen minutes from downtown.`,
    money: `Generally below the Arapahoe County median of $590,000, with a housing stock
that runs from 1900s bungalows near Broadway to 1950s ranches further out. The
proximity-to-price ratio is among the better ones in the metro.

Sewer scope and permit history on basement finishes are the standard checks on
housing of this vintage.`,
    sections: `## Where Englewood actually is

Immediately south of Denver along South Broadway and Santa Fe, at 5,338 feet.
Downtown Denver is eighteen minutes by car and directly served by the C and D
light rail lines.

## The hospitals

**Craig Hospital** is one of the leading spinal cord and brain injury
rehabilitation centres in the United States, drawing patients nationally.
**Swedish Medical Center** next door is a major trauma centre. Together they are
the city's largest employer and give Englewood an unusual economic profile for
its size.

## CityCenter Englewood

The former Cinderella City mall — once the largest shopping centre west of the
Mississippi — was demolished and redeveloped into CityCenter Englewood, a
transit-oriented mixed-use district around the light rail station and the civic
centre. It was an early example of the mall-to-downtown conversion that
Westminster and Lakewood later attempted.

## Who Englewood is right for

Healthcare workers, buyers who want proximity and light rail on a moderate
budget, and anyone who wants a small bungalow inside the beltway. South Broadway's
antique district and restaurant strip are a genuine amenity.

It is a weaker fit for families set on a top-tier district — Englewood Schools is
small and does not have the reputation of Cherry Creek or Littleton next door.`,
  },

  // ------------------------------------------------------------ Greenwood Village
  {
    slug: 'greenwood-village',
    name: 'Greenwood Village',
    region: 'south-metro',
    county: 'Arapahoe County',
    title: 'Greenwood Village, Colorado — the complete guide to living here',
    summary:
      'Half of it is the Denver Tech Center; the other half is horse property and large lots. One of the wealthiest municipalities in Colorado.',
    answer:
      'Greenwood Village is an Arapahoe County city of about 15,691 that contains much of the Denver Tech Center office district alongside large-lot residential neighbourhoods. It is among Colorado’s wealthiest municipalities, served largely by the Cherry Creek School District.',
    tags: ['greenwood-village', 'south-metro', 'arapahoe-county', 'dtc', 'affluent'],
    geo: { lat: 39.6172, lng: -104.9508 },
    stats: [
      'population - 15,691',
      'elevation - 5,633 ft',
      'incorporated - 1950',
      'Denver Tech Center',
    ],
    civic: {
      population: 15691,
      elevation: 5633,
      incorporated: 1950,
      area: 8.27,
      schoolDistricts: ['Cherry Creek School District', 'Littleton Public Schools'],
      employers: ['Denver Tech Center employers', 'Charles Schwab', 'Arrow Electronics', 'CoBank'],
      transit: [
        'RTD E, F and R lines — Arapahoe at Village Center, Orchard and Belleview stations',
      ],
      drive: { denver: 25, boulder: 50, dia: 35 },
    },
    links: [
      { label: 'City of Greenwood Village', url: 'https://www.greenwoodvillage.com/' },
      { label: 'Cherry Creek School District', url: 'https://www.cherrycreekschools.org/' },
    ],
    faq: [
      {
        q: 'Is the Denver Tech Center in Denver?',
        a: 'Mostly not. The DTC office district straddles Greenwood Village and Denver, with the majority of it in Greenwood Village and neighbouring Arapahoe County jurisdictions rather than the City and County of Denver.',
      },
      {
        q: 'Why is Greenwood Village so expensive?',
        a: 'Large lots, minimal density, top-tier Cherry Creek schools, and an enormous commercial tax base that keeps residential services well funded. Much of the residential area is zoned for very low density, including horse property.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Greenwood Village', url: 'https://www.greenwoodvillage.com/' },
    ],
    lede: `Greenwood Village is two entirely different places sharing a city hall. On one
side of I-25 is the Denver Tech Center — glass towers, corporate headquarters,
light rail. On the other are winding lanes, one-acre lots and horse property.`,
    money: `Among the most expensive residential markets in the metro, driven by very
large lots, low-density zoning and Cherry Creek School District enrolment. The
commercial tax base from the DTC funds an unusually high service level for the
residential population.`,
    sections: `## Where Greenwood Village actually is

South-east of Denver along I-25, at 5,633 feet, between Cherry Hills Village
and Centennial. Downtown Denver is twenty-five minutes; light rail runs through
the DTC.

## The Denver Tech Center

The DTC is the metro's principal suburban office district, developed from the
1970s onward — Charles Schwab, Arrow Electronics, CoBank and a large financial
and technology employment base. It has its own light rail stations and, at rush
hour, its own traffic problem on I-25.

## The residential side

West of I-25, Greenwood Village looks nothing like an office district: large
lots, mature trees, bridle paths, and some of the most expensive houses in
Colorado outside Cherry Hills Village and Boulder.

## Who Greenwood Village is right for

DTC executives, buyers who want acreage close in, and families targeting Cherry
Creek schools at the top of the market. It is a weaker fit for anyone wanting
walkable urbanism or moderate prices.`,
  },

  // ------------------------------------------------------------ Cherry Hills Village
  {
    slug: 'cherry-hills-village',
    name: 'Cherry Hills Village',
    region: 'south-metro',
    county: 'Arapahoe County',
    title: 'Cherry Hills Village, Colorado — the complete guide to living here',
    summary:
      'Colorado’s wealthiest municipality: one-acre minimum lots, no sidewalks by design, and bridle paths instead.',
    answer:
      'Cherry Hills Village is an Arapahoe County city of about 6,442 immediately south of Denver, consistently among the wealthiest municipalities in Colorado. It maintains large minimum lot sizes, has no commercial district, and is served by the Cherry Creek and Englewood school districts.',
    tags: ['cherry-hills-village', 'south-metro', 'arapahoe-county', 'affluent', 'large-lots'],
    geo: { lat: 39.6425, lng: -104.9528 },
    stats: [
      'population - 6,442',
      'incorporated - 1945',
      'large minimum lots',
      'commute to Denver - 20 min',
    ],
    civic: {
      population: 6442,
      incorporated: 1945,
      schoolDistricts: ['Cherry Creek School District', 'Englewood Schools'],
      transit: ['Limited; primarily a driving community'],
      drive: { denver: 20, boulder: 45, dia: 40 },
    },
    links: [
      { label: 'City of Cherry Hills Village', url: 'https://www.cherryhillsvillage.com/' },
      { label: 'Cherry Creek School District', url: 'https://www.cherrycreekschools.org/' },
    ],
    faq: [
      {
        q: 'Why are there no sidewalks in Cherry Hills Village?',
        a: 'By design. The city was developed and zoned around a semi-rural character with large lots and bridle paths rather than sidewalks, and has resisted changing it.',
      },
    ],
    sources: [
      census,
      { label: 'City of Cherry Hills Village', url: 'https://www.cherryhillsvillage.com/' },
    ],
    lede: `Cherry Hills Village is the wealthiest municipality in Colorado, and it has
spent eighty years making sure it stays semi-rural. Large minimum lot sizes, no
commercial development, bridle paths instead of sidewalks, and the Cherry Hills
Country Club at the centre of it.`,
    money: `The top of the Colorado residential market alongside parts of Boulder and
Aspen. Inventory is very limited and transactions are infrequent.`,
    sections: `## Where Cherry Hills Village actually is

Immediately south of Denver, west of I-25, between Englewood and Greenwood
Village. Downtown Denver is twenty minutes.

## What is there

Houses on large lots, the High Line Canal trail, Cherry Hills Country Club, and
essentially no commerce. Residents shop in Englewood, Denver or Greenwood
Village.

## Who Cherry Hills Village is right for

Buyers at the top of the market who want acreage twenty minutes from downtown
Denver. For most people this is a place to drive through and admire the trees.`,
  },

  // ------------------------------------------------------------ Sheridan
  {
    slug: 'sheridan',
    name: 'Sheridan',
    region: 'south-metro',
    county: 'Arapahoe County',
    title: 'Sheridan, Colorado — the complete guide to living here',
    summary:
      'A small, working-class city on the South Platte between Denver and Englewood, and one of the least expensive addresses inside the beltway.',
    answer:
      'Sheridan is a small Arapahoe County city of about 6,079 on the South Platte between Denver and Englewood. It is among the least expensive municipalities inside the Denver beltway and is served by Sheridan School District 2.',
    tags: ['sheridan', 'south-metro', 'arapahoe-county', 'affordable'],
    geo: { lat: 39.6469, lng: -105.0233 },
    stats: [
      'population - 6,079',
      'county median - $590K',
      'incorporated - 1890',
      'commute to Denver - 18 min',
    ],
    civic: {
      population: 6079,
      incorporated: 1890,
      schoolDistricts: ['Sheridan School District 2'],
      transit: ['RTD light rail at Oxford-City of Sheridan station'],
      drive: { denver: 18, boulder: 45, dia: 40 },
    },
    links: [
      { label: 'City of Sheridan', url: 'https://www.ci.sheridan.co.us/' },
      { label: 'Sheridan School District 2', url: 'https://www.ssd2.org/' },
    ],
    faq: [
      {
        q: 'Is Sheridan a good value?',
        a: 'It is one of the least expensive municipalities inside the beltway, with light rail access. The school district is small and under-resourced relative to its neighbours, which is the main trade-off.',
      },
    ],
    sources: [census, { label: 'City of Sheridan', url: 'https://www.ci.sheridan.co.us/' }],
    lede: `Sheridan is a small working-class city on the South Platte, squeezed between
Denver, Englewood and Littleton, with light rail and prices well below all three
of them.`,
    money: `Below the Arapahoe County median of $590,000, often substantially. The stock
is modest postwar housing and there is a significant manufactured-housing
component. For investors, the rent-to-price ratios are among the better ones
this close to downtown.`,
    sections: `## Where Sheridan actually is

On the South Platte between Denver and Littleton, eighteen minutes from
downtown, with an RTD light rail station at Oxford Avenue.

## Who Sheridan is right for

Price-first buyers and investors who want proximity and rail. Families should
look carefully at Sheridan School District 2, which is small and has fewer
resources than the surrounding districts.`,
  },

  // ------------------------------------------------------------ Glendale
  {
    slug: 'glendale',
    name: 'Glendale',
    region: 'south-metro',
    county: 'Arapahoe County',
    title: 'Glendale, Colorado — the complete guide to living here',
    summary:
      'A half-square-mile enclave entirely surrounded by Denver, dominated by apartments and known nationally for rugby.',
    answer:
      'Glendale is an Arapahoe County city of about 4,499 covering roughly half a square mile, entirely surrounded by the City and County of Denver. Its housing is overwhelmingly multifamily, and it is known for Infinity Park, a municipally owned rugby stadium.',
    tags: ['glendale', 'south-metro', 'arapahoe-county', 'rentals', 'rugby'],
    geo: { lat: 39.7047, lng: -104.9339 },
    stats: ['population - 4,499', 'about 0.5 sq mi', 'incorporated - 1952', 'mostly multifamily'],
    civic: {
      population: 4499,
      incorporated: 1952,
      schoolDistricts: ['Denver Public Schools', 'Cherry Creek School District'],
      transit: ['RTD bus; adjacent to Cherry Creek'],
      drive: { denver: 12, boulder: 45, dia: 35 },
    },
    links: [
      { label: 'City of Glendale', url: 'https://www.glendale.co.us/' },
      { label: 'Infinity Park', url: 'https://www.infinityparkatglendale.com/' },
    ],
    faq: [
      {
        q: 'Why is Glendale a separate city inside Denver?',
        a: 'It incorporated in 1952 specifically to avoid annexation by Denver, and has remained an independent enclave ever since, entirely surrounded by the City and County of Denver.',
      },
      {
        q: 'Why is Glendale known for rugby?',
        a: 'The city built Infinity Park, a municipally owned rugby-specific stadium, and has actively promoted itself as a centre for American rugby — an unusual civic strategy for a city of four thousand people.',
      },
    ],
    sources: [census, { label: 'City of Glendale', url: 'https://www.glendale.co.us/' }],
    lede: `Glendale is half a square mile of independent municipality entirely encircled
by Denver, next to Cherry Creek, made up almost entirely of apartments — and it
owns a rugby stadium.`,
    money: `Predominantly a rental market with very little for-sale single-family
inventory. Investors look here for multifamily; owner-occupiers rarely do.`,
    sections: `## Where Glendale actually is

Surrounded by Denver, immediately south-east of Cherry Creek, twelve minutes
from downtown.

## Who Glendale is right for

Renters who want Cherry Creek proximity, and multifamily investors. There is
very little detached housing to buy.`,
  },

  // ------------------------------------------------------------ Castle Rock
  {
    slug: 'castle-rock',
    name: 'Castle Rock',
    region: 'douglas-county',
    county: 'Douglas County',
    featured: true,
    title: 'Castle Rock, Colorado — the complete guide to living here',
    summary:
      'The Douglas County seat, halfway between Denver and Colorado Springs, with a real downtown, a landmark butte, and relentless growth.',
    answer:
      'Castle Rock is the Douglas County seat, population about 73,158, midway between Denver and Colorado Springs on I-25 at 6,224 feet. Named for the butte above the town, it has grown rapidly while retaining a historic downtown, and is served by the Douglas County School District.',
    tags: ['castle-rock', 'douglas-county', 'county-seat', 'growth', 'i-25'],
    geo: { lat: 39.3722, lng: -104.8561 },
    stats: [
      'population - 73,158',
      'elevation - 6,224 ft',
      'incorporated - 1881',
      'to Denver - 35 min',
    ],
    civic: {
      population: 73158,
      elevation: 6224,
      incorporated: 1881,
      countySeat: true,
      schoolDistricts: ['Douglas County School District'],
      employers: [
        'Douglas County government',
        'AdventHealth Castle Rock',
        'Castle Rock Adventist Hospital',
      ],
      transit: ['Bustang South Line on I-25; no rail service'],
      drive: { denver: 35, boulder: 65, dia: 45, springs: 35 },
    },
    links: [
      { label: 'Town of Castle Rock', url: 'https://www.crgov.com/' },
      { label: 'Douglas County School District', url: 'https://www.dcsdk12.org/' },
      { label: 'Douglas County', url: 'https://www.douglas.co.us/' },
    ],
    faq: [
      {
        q: 'Is Castle Rock a good midpoint between Denver and Colorado Springs?',
        a: 'It is the midpoint — about 35 minutes to each in normal traffic. That makes it the standard answer for households with one job in each city, and it is why the town has grown so fast.',
      },
      {
        q: 'Does Castle Rock have water?',
        a: 'Douglas County has historically relied heavily on non-renewable Denver Basin groundwater, and Castle Rock has invested substantially in moving toward renewable supply. It is a genuine long-term issue worth understanding for anyone buying in the county.',
      },
    ],
    sources: [census, SOURCES.car, { label: 'Town of Castle Rock', url: 'https://www.crgov.com/' }],
    lede: `Castle Rock sits under the butte it is named for, exactly halfway between
Denver and Colorado Springs, and it has grown from about 8,000 people in 1990 to
more than 73,000 now. It has managed the growth better than most — the downtown
is real and busy, which is not true of its Douglas County neighbours.`,
    money: `Douglas County is among the highest-income counties in the United States and
prices accordingly, generally above the Denver metro single-family median of
$650,000.

Two Douglas County specifics to underwrite: **metropolitan district mill levies**,
which are widespread in newer subdivisions and can add substantially to the tax
bill, and **water**, where the county's historic reliance on non-renewable
groundwater has driven significant infrastructure investment and rate increases.`,
    sections: `## Where Castle Rock actually is

On I-25 midway between Denver and Colorado Springs at 6,224 feet — nearly a
thousand feet above Denver, which means more snow and cooler summers than the
metro.

## The Rock

The butte the town is named for sits above downtown with a trail to the top and
a star lit at Christmas. It is a genuine civic landmark rather than a marketing
device.

## Downtown

Castle Rock has actively invested in its historic downtown, and the result is
one of the few genuinely busy small-town main streets in the southern metro,
with restaurants, a plaza and events. The Philip S. Miller Park and its
incline-style stairs sit just above it.

## Growth and water

The town has grown ninefold since 1990. The constraint everyone in Douglas
County eventually runs into is water: the county built out on non-renewable
Denver Basin aquifer supply, and transitioning to renewable sources has been
expensive. Expect this to keep showing up in rates and in development policy.

## Who Castle Rock is right for

Households split between Denver and Colorado Springs, families using Douglas
County schools, and buyers who want newer housing with a real downtown attached.

It is a weaker fit for daily downtown Denver commuters — 35 minutes midday
becomes considerably more at rush hour on I-25.`,
  },

  // ------------------------------------------------------------ Parker
  {
    slug: 'parker',
    name: 'Parker',
    region: 'douglas-county',
    county: 'Douglas County',
    title: 'Parker, Colorado — the complete guide to living here',
    summary:
      'A fast-growing Douglas County town with a deliberately built Old West downtown, strong schools, and a long commute to anywhere but the Tech Center.',
    answer:
      'Parker is a Douglas County town of about 58,512 south-east of Denver, one of the fastest-growing municipalities in Colorado. It is served by the Douglas County School District and centred on Mainstreet, a compact downtown with an Old West architectural theme.',
    tags: ['parker', 'douglas-county', 'growth', 'schools', 'suburban'],
    geo: { lat: 39.5186, lng: -104.7614 },
    stats: [
      'population - 58,512',
      'elevation - 5,869 ft',
      'incorporated - 1981',
      'to Tech Center - 25 min',
    ],
    civic: {
      population: 58512,
      elevation: 5869,
      incorporated: 1981,
      schoolDistricts: ['Douglas County School District'],
      employers: [
        'Parker Adventist Hospital',
        'Douglas County School District',
        'Retail and services',
      ],
      transit: ['RTD bus to the Lincoln light rail station'],
      drive: { denver: 35, boulder: 60, dia: 35 },
    },
    links: [
      { label: 'Town of Parker', url: 'https://www.parkerco.gov/' },
      { label: 'Douglas County School District', url: 'https://www.dcsdk12.org/' },
    ],
    faq: [
      {
        q: 'Is Parker a good commute to Denver?',
        a: 'To the Denver Tech Center, yes — about 25 minutes. To downtown Denver it is roughly 35 minutes midday and considerably longer at peak. There is no rail station in Parker; the nearest is Lincoln.',
      },
      {
        q: 'Why does downtown Parker look like a Western town?',
        a: 'By design. The town adopted architectural standards for Mainstreet that produce a consistent Old West streetscape, most of it built or refaced far more recently than it appears.',
      },
    ],
    sources: [census, SOURCES.car, { label: 'Town of Parker', url: 'https://www.parkerco.gov/' }],
    lede: `Parker went from a crossroads with a few hundred residents to a town of nearly
sixty thousand in about forty years. It has strong schools, a compact downtown
built to look older than it is, and the standard Douglas County trade-off: a lot
of house, a long drive.`,
    money: `Douglas County pricing, generally above the Denver metro median of $650,000.
Metropolitan district mill levies are common in the newer subdivisions and are
the single most overlooked cost here — check the total levy on the specific
parcel.`,
    sections: `## Where Parker actually is

South-east of Denver along Parker Road at 5,869 feet, east of Lone Tree and
north of Castle Rock. The Denver Tech Center is twenty-five minutes; downtown
about thirty-five midday.

## Mainstreet

Parker's downtown is compact, walkable and consistently themed. It works well —
restaurants, a farmers market, the Parker Arts Center — even though most of it
is far newer than the architecture suggests.

## Who Parker is right for

Families using Douglas County schools who want a large newer house and a small
downtown, and Tech Center commuters. It is a weaker fit for downtown Denver
workers and anyone who wants rail.`,
  },

  // ------------------------------------------------------------ Lone Tree
  {
    slug: 'lone-tree',
    name: 'Lone Tree',
    region: 'douglas-county',
    county: 'Douglas County',
    title: 'Lone Tree, Colorado — the complete guide to living here',
    summary:
      'A small, affluent Douglas County city built around a hospital, a corporate campus and a light rail line — one of the few south metro suburbs with real transit.',
    answer:
      'Lone Tree is a Douglas County city of about 14,253 at 6,280 feet, incorporated in 1995. It hosts Sky Ridge Medical Center, a major Charles Schwab campus and Park Meadows mall, and is served by RTD light rail on the E and R lines.',
    tags: ['lone-tree', 'douglas-county', 'light-rail', 'affluent', 'schwab'],
    geo: { lat: 39.5486, lng: -104.8861 },
    stats: [
      'population - 14,253',
      'elevation - 6,280 ft',
      'incorporated - 1995',
      'light rail served',
    ],
    civic: {
      population: 14253,
      elevation: 6280,
      incorporated: 1995,
      area: 9.81,
      schoolDistricts: ['Douglas County School District'],
      employers: ['Charles Schwab', 'Sky Ridge Medical Center', 'Park Meadows retail'],
      transit: [
        'RTD E and R lines — Lincoln, Sky Ridge, Lone Tree City Center and RidgeGate Parkway stations',
      ],
      drive: { denver: 30, boulder: 55, dia: 40 },
    },
    links: [
      { label: 'City of Lone Tree', url: 'https://www.cityoflonetree.com/' },
      { label: 'Douglas County School District', url: 'https://www.dcsdk12.org/' },
      { label: 'RTD light rail', url: 'https://www.rtd-denver.com/' },
    ],
    faq: [
      {
        q: 'Does Lone Tree have light rail?',
        a: 'Yes — the RTD E and R lines serve Lone Tree with four stations, including the 2019 southeast extension to RidgeGate Parkway. It is one of the best-served suburbs in the south metro.',
      },
      {
        q: 'What is RidgeGate?',
        a: 'A large master-planned development on Lone Tree’s eastern side, designed around the light rail extension with a mix of housing densities, offices and open space. It is the most transit-oriented new development in Douglas County.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Lone Tree', url: 'https://www.cityoflonetree.com/' },
    ],
    lede: `Lone Tree is a small city that incorporated in 1995 and then did something
unusual for Douglas County: it built around light rail. Four stations, a
master-planned transit-oriented district, a major hospital and a Charles Schwab
campus, all inside about ten square miles.`,
    money: `Among the more expensive Douglas County addresses, above the Denver metro
median of $650,000. RidgeGate offers the newest inventory and a wider range of
densities than most of the county, including attached product that is genuinely
scarce in south metro suburbs.

Metropolitan district levies apply here as across Douglas County — check the
parcel.`,
    sections: `## Where Lone Tree actually is

South of Denver along I-25 at 6,280 feet, between Greenwood Village and Castle
Rock, wrapped around Park Meadows. Downtown Denver is thirty minutes by car or
light rail.

## The transit bet

The 2019 southeast rail extension pushed the E and R lines out to RidgeGate
Parkway, and Lone Tree planned RidgeGate around it. For a Douglas County
address, the transit access is exceptional.

## Who Lone Tree is right for

Tech Center and south-corridor professionals who want rail, medical workers at
Sky Ridge, and buyers who want newer housing with genuine transit. It is a
weaker fit for anyone wanting a large lot or a historic house — neither exists
here.`,
  },

  // ------------------------------------------------------------ Highlands Ranch
  {
    slug: 'highlands-ranch',
    name: 'Highlands Ranch',
    region: 'douglas-county',
    county: 'Douglas County',
    title: 'Highlands Ranch, Colorado — the complete guide to living here',
    summary:
      'A master-planned community of 105,000 people that is not a city, governed by a metro district and a very active homeowners association.',
    answer:
      'Highlands Ranch is an unincorporated Douglas County community of about 105,631 — one of the largest master-planned communities in the United States. It has no municipal government, being administered by Douglas County alongside metropolitan districts and a large homeowners association.',
    tags: ['highlands-ranch', 'douglas-county', 'master-planned', 'hoa', 'schools'],
    geo: { lat: 39.5539, lng: -104.9689 },
    stats: ['population - 105,631', 'elevation - 5,817 ft', 'unincorporated', 'area - 24.3 sq mi'],
    civic: {
      population: 105631,
      elevation: 5817,
      area: 24.27,
      schoolDistricts: ['Douglas County School District'],
      employers: ['UCHealth Highlands Ranch Hospital', 'Retail and professional services'],
      transit: ['RTD bus to Lincoln and Littleton stations'],
      drive: { denver: 30, boulder: 55, dia: 45 },
    },
    links: [
      { label: 'Highlands Ranch Metro District', url: 'https://highlandsranch.org/' },
      { label: 'Highlands Ranch Community Association', url: 'https://hrcaonline.org/' },
      { label: 'Douglas County School District', url: 'https://www.dcsdk12.org/' },
    ],
    faq: [
      {
        q: 'Is Highlands Ranch a city?',
        a: 'No. It is an unincorporated census-designated place with no municipal government. Services are provided by Douglas County, the Highlands Ranch Metro District, and the Highlands Ranch Community Association, which functions as a large HOA.',
      },
      {
        q: 'What does the HOA cover in Highlands Ranch?',
        a: 'The Community Association operates four large recreation centres, extensive trails and parks, and enforces community-wide covenants. Membership is mandatory for residents, and the fee is a real ongoing cost to factor into any purchase.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'Highlands Ranch Metro District', url: 'https://highlandsranch.org/' },
    ],
    lede: `Highlands Ranch has more residents than Boulder and is not a city. It is one
of the largest master-planned communities in the United States, built from 1981
onward on a former cattle ranch, governed by a county, a metro district and a
homeowners association rather than a mayor.`,
    money: `Generally at or above the Denver metro single-family median of $650,000. The
stock is overwhelmingly 1985–2005 suburban, well maintained and consistent.

Budget for the Community Association fee on top of taxes and any metro district
levy. Together they are a meaningful monthly line and they surprise buyers
moving from municipalities.`,
    sections: `## Where Highlands Ranch actually is

South of Denver in northern Douglas County, west of I-25 between Littleton and
Lone Tree, at 5,817 feet across about 24 square miles.

## How it is governed

There is no city council. Douglas County provides law enforcement and land use;
the Highlands Ranch Metro District handles infrastructure; and the Highlands
Ranch Community Association runs four recreation centres, the trail system and
the covenants.

It works well by most measures — the services are good and the community is
consistently rated highly. It also means the levers residents can pull are
different from those in a municipality.

## The Backcountry

Highlands Ranch includes an 8,200-acre backcountry wilderness area on its
southern edge with trails and genuine open space, which is a substantial amenity
and unusual for a master-planned community.

## Who Highlands Ranch is right for

Families who want consistency, good Douglas County schools, and recreation
amenities, and who are comfortable with covenant governance. It is a weaker fit
for anyone who dislikes HOAs, wants architectural variety, or wants a walkable
downtown.`,
  },

  // ------------------------------------------------------------ Castle Pines
  {
    slug: 'castle-pines',
    name: 'Castle Pines',
    region: 'douglas-county',
    county: 'Douglas County',
    title: 'Castle Pines, Colorado — the complete guide to living here',
    summary:
      'A small, wooded, affluent Douglas County city that incorporated in 2008, between Lone Tree and Castle Rock.',
    answer:
      'Castle Pines is a Douglas County city of about 11,036 between Lone Tree and Castle Rock, incorporated in 2008. It is a wooded, low-density and affluent community served by the Douglas County School District, with golf course developments and I-25 access.',
    tags: ['castle-pines', 'douglas-county', 'affluent', 'golf', 'i-25'],
    geo: { lat: 39.4681, lng: -104.8956 },
    stats: [
      'population - 11,036',
      'incorporated - 2008',
      'to Denver - 32 min',
      'to Castle Rock - 10 min',
    ],
    civic: {
      population: 11036,
      incorporated: 2008,
      schoolDistricts: ['Douglas County School District'],
      transit: ['I-25 corridor; no rail service'],
      drive: { denver: 32, boulder: 60, dia: 45, springs: 45 },
    },
    links: [
      { label: 'City of Castle Pines', url: 'https://www.castlepinesco.gov/' },
      { label: 'Douglas County School District', url: 'https://www.dcsdk12.org/' },
    ],
    faq: [
      {
        q: 'When did Castle Pines become a city?',
        a: 'Voters approved incorporation in 2007 and the city was formally established in 2008, making it one of Colorado’s newest municipalities.',
      },
    ],
    sources: [census, { label: 'City of Castle Pines', url: 'https://www.castlepinesco.gov/' }],
    lede: `Castle Pines is a wooded, low-density Douglas County city of about eleven
thousand people that only became a city in 2008. It sits on the ridge along
I-25 between Lone Tree and Castle Rock, among ponderosa pines that most of the
county does not have.`,
    money: `Above the Denver metro median, with a housing stock that is mostly post-1985
and includes several golf course communities. Metropolitan district levies are
common; check the parcel.`,
    sections: `## Where Castle Pines actually is

On the I-25 ridge between Lone Tree and Castle Rock, higher and more wooded than
the surrounding county. Denver is about thirty-two minutes.

## Who Castle Pines is right for

Buyers who want trees, space and a short I-25 commute to the Tech Center, with
Douglas County schools. It is a weaker fit for anyone wanting walkability or
moderate pricing.`,
  },
]
