import { SOURCES } from './_template.mjs'

const census = { ...SOURCES.census, retrieved: '2026-08-19' }

export const denverJeffco = [
  // ------------------------------------------------------------ Denver
  {
    slug: 'denver',
    priceLadder: [
      { label: 'Denver metro single-family', value: 650000, self: true },
      { label: 'Colorado statewide', value: 606500 },
      { label: 'Arapahoe County', value: 590000 },
      { label: 'Adams County', value: 520000 },
      { label: 'Denver metro condo/townhome', value: 395000 },
    ],
    name: 'Denver',
    region: 'denver',
    county: 'City and County of Denver',
    featured: true,
    title: 'Denver, Colorado — the complete guide to living here',
    summary:
      'The Mile High City: 715,000 people, a consolidated city and county, the economic centre of the Mountain West, and seventy-eight neighbourhoods that behave like different housing markets.',
    answer:
      'Denver is Colorado’s capital and largest city, a consolidated city and county of about 715,522 people at exactly 5,280 feet. The seven-county metro had a June 2026 single-family median of $650,000 and a condo median of $395,000, and the city is served by RTD light rail and commuter rail including the A Line to the airport.',
    tags: ['denver', 'capital', 'urban', 'rtd', 'neighborhoods'],
    geo: { lat: 39.7392, lng: -104.9903 },
    stats: [
      'metro median - $650K',
      'population - 715,522',
      'elevation - 5,280 ft',
      '78 official neighborhoods',
    ],
    civic: {
      population: 715522,
      elevation: 5280,
      incorporated: 1861,
      countySeat: true,
      area: 153.0,
      schoolDistricts: ['Denver Public Schools (DPS)'],
      employers: [
        'State of Colorado and City & County of Denver',
        'HealthONE and UCHealth systems',
        'Denver International Airport',
        'DaVita (headquarters)',
        'Federal government offices',
      ],
      transit: [
        'RTD light rail: C, D, E, H, L, W lines',
        'RTD commuter rail: A Line to DIA, B, G and N lines',
        'Denver Union Station — the hub for all of it',
      ],
      drive: { denver: 0, boulder: 45, dia: 35 },
      median: 650000,
      medianBasis: 'seven-county Denver metro single-family, June 2026 (CAR)',
    },
    links: [
      { label: 'City and County of Denver', url: 'https://www.denvergov.org/' },
      { label: 'Denver Public Schools', url: 'https://www.dpsk12.org/' },
      { label: 'RTD Denver', url: 'https://www.rtd-denver.com/' },
      {
        label: 'Denver Parks and Recreation',
        url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation',
      },
      {
        label: 'Denver Assessor property records',
        url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Assessors-Office',
      },
    ],
    faq: [
      {
        q: 'Why is Denver called the Mile High City?',
        a: 'Because it sits at exactly 5,280 feet — one mile — above sea level. The thirteenth step of the State Capitol building is marked at that elevation, and there is a second marker where later surveys placed it more precisely.',
      },
      {
        q: 'How much does a house cost in Denver?',
        a: 'The seven-county metro single-family median was $650,000 in June 2026, up about 1.6% year over year, with condos and townhomes at $395,000, down 1.3%. Within the city itself the range is enormous — central neighbourhoods run far above the median and the far north-east runs below it.',
      },
      {
        q: 'Do you need a car in Denver?',
        a: 'In central neighbourhoods — Capitol Hill, Baker, the Highlands, Five Points, Cherry Creek — many people manage without one, helped by light rail, buses and generally flat terrain. Everywhere else in the metro, yes.',
      },
      {
        q: 'How long does it take to get to the mountains from Denver?',
        a: 'Idaho Springs is about 40 minutes on a clear weekday and can be two hours on a Saturday morning in ski season. The I-70 mountain corridor is the single most consistent frustration of living here.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City and County of Denver', url: 'https://www.denvergov.org/' },
      SOURCES.rtd,
    ],
    lede: `Denver is the economic centre of an eight-state region, a consolidated city
and county of 715,000 people, and a place that has changed more in the last
fifteen years than in the fifty before them. It is also, contrary to the
postcard, a plains city — the mountains are a view from here, not a location.`,
    money: `The seven-county metro single-family median was **$650,000** in June 2026, up
1.6% year over year, with the average at $792,284. Condos and townhomes were
**$395,000**, down 1.3%. Single-family homes took 39 days to sell; attached
product took 55.

The number that tells you the most about the current market is inventory: 17,432
active listings, **down 18.6%** year over year, with pending contracts up 5.1%.
Supply tightened through 2026 while demand held. That is not a crash and it is
not a boom — it is a market where good houses in good locations still move and
everything else negotiates.

Within the city, "the Denver median" is close to meaningless. Central
neighbourhoods run well above it; the far north-east runs well below. Ask about
the neighbourhood, not the city.`,
    sections: `## Where Denver actually is

On the high plains at the western edge of the Great Plains, fifteen miles east
of where the Rocky Mountains begin. This surprises people: Denver is not in the
mountains, it looks at them. The city is broadly flat, tilted gently down toward
the South Platte, and the foothills form a wall on the western horizon.

At exactly 5,280 feet, it is high enough to notice — expect a week or two of
sleeping badly and running slowly — and low enough that nearly everyone adapts.
See [is the altitude going to wreck me?](/answers/altitude-adjustment/)

## The 78 neighbourhoods

Denver formally recognises 78 statistical neighbourhoods, and they are the unit
that actually matters for housing. A few of the ones people ask about most:

**Capitol Hill and Cheesman Park** — dense, historic, apartment-heavy, the most
walkable part of the city and the centre of its rental market.

**Baker and the Santa Fe Arts District** — Victorian cottages, First Friday art
walks, and Broadway's run of bars and vintage shops.

**Highlands (LoHi, the Highlands, Sunnyside)** — north-west across I-25, the
epicentre of the last fifteen years of redevelopment, with the highest
concentration of scrape-and-replace duplexes in the city.

**Washington Park and Platt Park** — the classic Denver bungalow belt around the
city's best large park, and among the most expensive addresses in town.

**Five Points and RiNo** — historically the heart of Black Denver and the jazz
scene, now the most heavily redeveloped district in the city, with all the
tension that implies.

**Park Hill and Stapleton/Central Park** — east side, tree-lined, with the
former airport site redeveloped into one of the largest new-urbanist
communities in the country.

**Athmar Park, Westwood and Barnum** — south-west, the most affordable detached
housing left in the city. See our [Athmar Park guide](/neighborhoods/denver/athmar-park/).

**Montbello, Green Valley Ranch and Far North-east** — beyond I-70 toward the
airport, the least expensive part of the city and the fastest-growing.

## The housing stock, by era

Denver's housing reads as a set of rings:

- **1890–1910**: Victorian and Queen Anne, in Baker, Curtis Park, Highlands.
- **1910–1940**: the Denver Square and the bungalow — the classic brick house
  with a porch, everywhere from Wash Park to Berkeley.
- **1945–1965**: postwar brick ranches, filling the eastern and south-western
  city and every inner suburb.
- **1990s–present**: infill, scrapes, townhomes and apartment blocks, plus
  greenfield in the far north-east.

The brick is not decorative. Denver built in brick because it had good clay and
frequent fires, and a 1925 brick bungalow is generally a better-built house than
a 2005 frame duplex on the same street.

## Getting around

RTD runs light rail (C, D, E, H, L and W lines) and commuter rail (A, B, G and
N) out of Denver Union Station, which was itself rebuilt in 2014 and is now the
best public building in the city.

The **A Line to DIA** is the standout: 37 minutes from Union Station to the
airport, every 15 minutes most of the day. It is genuinely excellent and it is
the reason a lot of frequent travellers live near the line.

The **I-70 mountain corridor** is the counterweight. Every skier in the metro
uses the same road, and Saturday mornings in winter are miserable. The Winter
Park Express train and the Bustang buses are underrated alternatives.

## What people get wrong about Denver

**It is not a mountain town.** You will drive to the mountains. Budget 40
minutes to the first foothills town and much longer on weekends.

**It is dry, not just high.** The humidity is low year-round. Expect nosebleeds,
dry skin, and much more water intake than you are used to.

**Winter is sunnier than you think.** Denver gets roughly 300 days with some
sunshine, and snow frequently melts within 48 hours. The cold snaps are sharp
but short.

**Hail is the real weather risk.** Not tornadoes, not blizzards. Hail is what
damages roofs and cars, and it is why roof age and insurance deductibles matter
so much here.

## Who Denver is right for

People who want a genuine city with an international airport, a large job
market, and mountains within an hour. Renters who want walkability. Families who
will engage with DPS's choice-enrolment system rather than assuming a
neighbourhood school.

It is a weaker fit if you want a big lot and a quiet street on a modest budget —
the inner suburbs like [Wheat Ridge](/places/wheat-ridge/),
[Westminster](/places/westminster/) and [Thornton](/places/thornton/) do that
much better. See [where do I live if I want a yard, a taco truck, and a
25-minute commute?](/answers/yard-taco-truck-short-commute/)`,
  },

  // ------------------------------------------------------------ Lakewood
  {
    slug: 'lakewood',
    name: 'Lakewood',
    region: 'jeffco',
    county: 'Jefferson County',
    featured: true,
    title: 'Lakewood, Colorado — the complete guide to living here',
    summary:
      'Colorado’s fifth-largest city, immediately west of Denver, with the Federal Center, the W Line, and a growth cap that makes it unusual among American suburbs.',
    answer:
      'Lakewood is a Jefferson County city of about 155,984 immediately west of Denver, the fifth-largest in Colorado. It hosts the Denver Federal Center, is served by the RTD W Line light rail, and in 2019 adopted a voter-approved 1% annual residential growth cap.',
    tags: ['lakewood', 'jeffco', 'w-line', 'growth-cap', 'green-mountain'],
    geo: { lat: 39.7047, lng: -105.0814 },
    stats: [
      'population - 155,984',
      'elevation - 5,518 ft',
      'W Line light rail',
      'commute to Denver - 20 min',
    ],
    civic: {
      population: 155984,
      elevation: 5518,
      incorporated: 1969,
      area: 42.9,
      schoolDistricts: ['Jefferson County Public Schools (Jeffco)'],
      employers: [
        'Denver Federal Center',
        'St. Anthony Hospital',
        'Colorado Christian University',
        'Terumo BCT',
      ],
      transit: [
        'RTD W Line light rail — Federal Center, Oak, Garrison, Lakewood-Wadsworth stations',
      ],
      drive: { denver: 20, boulder: 40, dia: 45 },
    },
    links: [
      { label: 'City of Lakewood', url: 'https://www.lakewood.org/' },
      { label: 'Jeffco Public Schools', url: 'https://www.jeffcopublicschools.org/' },
      { label: 'RTD W Line', url: 'https://www.rtd-denver.com/' },
    ],
    faq: [
      {
        q: 'What is Lakewood’s growth cap?',
        a: 'In July 2019 Lakewood voters approved a measure limiting new residential construction to about 1% of existing housing stock per year, with additional council review for larger projects. It is unusual among Colorado municipalities and has been a live political issue since.',
      },
      {
        q: 'Does Lakewood have light rail?',
        a: 'Yes — the RTD W Line runs from Denver Union Station through Lakewood to Golden, with several Lakewood stations including the Federal Center.',
      },
      {
        q: 'What is Belmar?',
        a: 'A mixed-use downtown built on the site of the demolished Villa Italia mall in the 2000s, and Lakewood’s attempt at a walkable city centre. It is one of the more successful mall-to-downtown conversions in the region.',
      },
    ],
    sources: [census, SOURCES.car, { label: 'City of Lakewood', url: 'https://www.lakewood.org/' }],
    lede: `Lakewood is the fifth-largest city in Colorado and the one most people drive
through without registering. It runs from the Denver line west to the hogback,
contains a federal campus the size of a small town, and in 2019 did something
almost no American suburb does: it voted to limit its own growth.`,
    money: `Lakewood spans a wide range. The eastern edge along Sheridan is among the
least expensive in Jefferson County; Green Mountain and the western
neighbourhoods near the foothills price well above. The Denver metro
single-family median was $650,000 in June 2026, and Lakewood straddles it.

The growth cap is a genuine long-term variable. Constraining new supply in a
metro that keeps adding people has a predictable effect on prices, and buyers
here should think about that in both directions.`,
    sections: `## Where Lakewood actually is

Immediately west of Denver, running from Sheridan Boulevard out to the hogback
at the foot of the mountains, at 5,518 feet. Downtown Denver is twenty minutes;
Golden is ten.

## The Federal Center

The Denver Federal Center is a 640-acre campus of federal agencies — the largest
concentration of federal employees outside Washington, DC. It anchors the local
economy, it has its own W Line light rail station, and it is why Lakewood's
employment base is more stable than a typical suburb's.

## Green Mountain

The 2,400-acre William Frederick Hayden Park on Green Mountain sits in the
middle of the city — a genuine open space with trails right in the suburbs.
Neighbourhoods around it carry a premium and deserve it.

## Belmar

Villa Italia mall was demolished in the early 2000s and rebuilt as Belmar, a
mixed-use district with streets, apartments, retail and a cinema. It is
Lakewood's downtown by construction rather than by history, and it works better
than most attempts at the same thing.

## The growth cap

In July 2019, Lakewood voters approved a strict residential growth limit —
roughly 1% of existing housing stock annually. Supporters wanted to slow
traffic and preserve character; opponents argued it would worsen affordability.
Both have turned out to be somewhat right. It remains one of the most
distinctive municipal policies on the Front Range.

## Who Lakewood is right for

People who want quick Denver access and quick mountain access from the same
address, federal employees, and buyers who want a 1960s–70s brick house near
real open space. The W Line makes car-light living plausible along its corridor.

It is a weaker fit if you want a historic walkable downtown — Belmar is good but
it is new — or if you need new construction, which the growth cap has made
scarcer.`,
  },

  // ------------------------------------------------------------ Arvada
  {
    slug: 'arvada',
    name: 'Arvada',
    region: 'jeffco',
    county: 'Jefferson & Adams Counties',
    featured: true,
    title: 'Arvada, Colorado — the complete guide to living here',
    summary:
      'Olde Town, the G Line, and streets that dead-end into schools rather than arterials. The Front Range’s most convincing answer to "somewhere my kid can ride a bike".',
    answer:
      'Arvada is a city of about 124,402 north-west of Denver, straddling the Jefferson–Adams county line. Olde Town Arvada combines a historic square with a G Line commuter rail station to Denver Union Station, and the surrounding grid is among the most genuinely bike-friendly in the metro.',
    tags: ['arvada', 'jeffco', 'olde-town', 'g-line', 'biking', 'schools'],
    geo: { lat: 39.8028, lng: -105.0875 },
    stats: [
      'population - 124,402',
      'elevation - 5,344 ft',
      'G Line to Union Station',
      'commute to Denver - 28 min',
    ],
    civic: {
      population: 124402,
      elevation: 5344,
      incorporated: 1904,
      area: 38.6,
      schoolDistricts: ['Jefferson County Public Schools (Jeffco)', 'Adams 12 Five Star Schools'],
      employers: ['Jeffco Public Schools', 'City of Arvada', 'Arvada Center for the Arts'],
      transit: [
        'RTD G Line commuter rail — Olde Town Arvada, Arvada Ridge and Gold Strike stations',
        'RTD increased G Line frequency to every 15 minutes for most of the day in 2026',
      ],
      drive: { denver: 28, boulder: 30, dia: 45 },
    },
    links: [
      { label: 'City of Arvada', url: 'https://arvadaco.gov/' },
      { label: 'Jeffco Public Schools', url: 'https://www.jeffcopublicschools.org/' },
      { label: 'Arvada Center for the Arts and Humanities', url: 'https://arvadacenter.org/' },
      { label: 'RTD G Line', url: 'https://www.rtd-denver.com/' },
    ],
    faq: [
      {
        q: 'Is Olde Town Arvada worth living near?',
        a: 'It is one of the few genuine town squares in the metro with a commuter rail station attached. You get walkable restaurants and bars, a farmers market, and a 28-minute train to Union Station — a combination almost nothing else on the Front Range offers.',
      },
      {
        q: 'How often does the G Line run?',
        a: 'RTD moved in 2026 to increase G Line frequency to every 15 minutes for most of the day, up from 30 minutes — a substantial improvement for Arvada commuters.',
      },
      {
        q: 'Is Arvada in Jefferson or Adams County?',
        a: 'Mostly Jefferson, with the north-eastern portion in Adams. That affects both taxes and school district — Jeffco for most of the city, Adams 12 for part of the north-east.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Arvada', url: 'https://arvadaco.gov/' },
      SOURCES.rtd,
    ],
    lede: `Arvada has the thing most Denver suburbs are missing: a centre. Olde Town is a
real square with real buildings, a farmers market, bars people actually go to,
and a commuter rail station that reaches Union Station in under half an hour.
Around it sits a street grid that dead-ends into schools rather than arterials.`,
    money: `Arvada spans the range from 1950s ranches in the older south-east to
post-2000 construction in the far north-west toward Candelas. The Denver metro
single-family median was $650,000 in June 2026.

Proximity to Olde Town and the G Line commands a premium, and in our view a
justified one — it is a scarce combination. The far north-west is newer and
cheaper per square foot but a very different, car-dependent proposition.`,
    sections: `## Where Arvada actually is

North-west of Denver, straddling the Jefferson–Adams line at 5,344 feet, running
from Sheridan Boulevard out toward the foothills at Highway 93. Downtown Denver
is about twenty-eight minutes by car or train.

## Olde Town

Arvada was founded in 1870 and Olde Town is the surviving core — a compact
square of late-1800s brick buildings that has been carefully rather than
destructively redeveloped. The G Line station sits at its edge.

This matters more than it sounds. The metro has very few places where you can
walk from a house to a square, eat, and get a train downtown. Arvada is the most
convincing one outside Denver itself.

## The bike thing

Arvada's older grid, particularly around Olde Town, dead-ends into schools
rather than into arterials, and the Ralston Creek Trail runs through the city
east to west. The result is scooter and bike traffic at 3pm that is genuinely
heavy — the clearest evidence that a neighbourhood works for children.

We use it as one of our three examples in [where can my kid actually ride a bike
to school?](/answers/kid-bike-to-school/)

## The four Arvadas

**Olde Town and the south-east** is the oldest: pre-war and 1950s housing, the
square, the train. Most expensive per square foot and most walkable.

**Central Arvada**, roughly Wadsworth to Kipling, is the 1960s–70s brick ranch
belt — big lots, alleys, real garages. The value core of the city.

**West Arvada** toward Indiana Street is 1980s–2000s subdivisions with foothills
views.

**Candelas and the far north-west** is the newest growth, out toward Highway 93
and the Rocky Flats site.

## Rocky Flats

The former Rocky Flats Plant, which manufactured plutonium pits for nuclear
weapons until 1989, sits north-west of the city. It is now the Rocky Flats
National Wildlife Refuge following a large remediation. The refuge's opening to
public access has been contested, and some residents and researchers continue to
raise concerns about residual contamination.

It is a real consideration for buyers in the far north-west, and one where we
would tell you to read the primary sources and reach your own conclusion rather
than take a realtor's word — ours included.

## Who Arvada is right for

Families who want walkability and a bikeable school route, commuters who want
rail, and buyers who want a solid 1960s brick house on a real lot. It is one of
our most frequent recommendations.

It is a weaker fit if you want a large modern house at a low price per square
foot, which the newer north-west does better than the parts of Arvada worth
paying for.`,
  },

  // ------------------------------------------------------------ Golden
  {
    slug: 'golden',
    name: 'Golden',
    region: 'jeffco',
    county: 'Jefferson County',
    title: 'Golden, Colorado — the complete guide to living here',
    summary:
      'The original territorial capital, wedged into a canyon mouth with a brewery, a school of mines, and Clear Creek running through the middle of downtown.',
    answer:
      'Golden is the Jefferson County seat, population about 20,399, at the mouth of Clear Creek Canyon west of Denver. It hosts the Colorado School of Mines, the Coors brewery and the National Renewable Energy Laboratory, and is the western terminus of the RTD W Line.',
    tags: ['golden', 'jeffco', 'county-seat', 'school-of-mines', 'clear-creek', 'foothills'],
    geo: { lat: 39.7555, lng: -105.2211 },
    stats: [
      'population - 20,399',
      'elevation - 5,675 ft',
      'W Line terminus',
      'commute to Denver - 25 min',
    ],
    civic: {
      population: 20399,
      elevation: 5675,
      incorporated: 1871,
      countySeat: true,
      schoolDistricts: ['Jefferson County Public Schools (Jeffco)'],
      employers: [
        'Colorado School of Mines',
        'Molson Coors Golden brewery',
        'National Renewable Energy Laboratory (NREL)',
        'Jefferson County government',
      ],
      transit: ['RTD W Line light rail — Jeffco Government Center–Golden station'],
      drive: { denver: 25, boulder: 30, dia: 50 },
    },
    links: [
      { label: 'City of Golden', url: 'https://www.cityofgolden.net/' },
      { label: 'Colorado School of Mines', url: 'https://www.mines.edu/' },
      { label: 'National Renewable Energy Laboratory', url: 'https://www.nrel.gov/' },
      { label: 'Jeffco Public Schools', url: 'https://www.jeffcopublicschools.org/' },
    ],
    faq: [
      {
        q: 'Was Golden the capital of Colorado?',
        a: 'Yes — Golden was the capital of Colorado Territory from 1862 to 1867, before it moved to Denver. The old territorial capitol building still stands on Washington Avenue.',
      },
      {
        q: 'Is Golden expensive?',
        a: 'Yes, relative to the rest of Jefferson County. Constrained geography — it sits in a canyon mouth between two mesas — limits how much can be built, and demand from Mines, NREL and foothills buyers is steady.',
      },
      {
        q: 'Can you tube down Clear Creek in Golden?',
        a: 'Yes, and thousands of people do every summer. Clear Creek runs through the middle of downtown with a whitewater park, and it is one of the defining features of the town.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Golden', url: 'https://www.cityofgolden.net/' },
    ],
    lede: `Golden is a town of twenty thousand that contains a nineteenth-century
territorial capitol, the largest single brewing site in the world, a top-ranked
engineering university, and a federal renewable energy laboratory. It is wedged
into the mouth of Clear Creek Canyon between North and South Table Mountains,
and it has almost nowhere left to grow.`,
    money: `Golden prices above most of Jefferson County, and the reason is supply. The
town is hemmed in by two mesas, a canyon and open space, so it cannot expand
outward. Add Mines, NREL and Coors employment plus foothills demand, and prices
hold up.

Look at the difference between downtown-adjacent housing and the newer
subdivisions south toward the Jeffco Government Center — the gap is substantial
and the walkability difference explains most of it.`,
    sections: `## Where Golden actually is

Fifteen miles west of downtown Denver at the mouth of Clear Creek Canyon,
at 5,675 feet, between North and South Table Mountain. It is the point where
the plains genuinely end.

## The three institutions

**Colorado School of Mines** is a public research university focused on
engineering and applied science, consistently among the top earth-sciences and
mining engineering programmes in the world. About 7,000 students in a town of
20,000 shapes the place considerably.

**Molson Coors** has brewed in Golden since 1873, and the Golden brewery is the
largest single brewing facility in the world. The smell of malt on the right
wind is part of living here.

**NREL** — the National Renewable Energy Laboratory — is the US Department of
Energy's primary renewable energy research lab, with its main campus on South
Table Mountain.

## Clear Creek

The creek runs through the middle of downtown, with a whitewater park, a paved
trail, and enough tubing traffic in July to constitute a local traffic problem.
It is a genuinely unusual civic amenity — most towns put their creek behind
buildings.

## Golden vs. the mountains

Golden is the last town before the mountains, not a mountain town. Clear Creek
Canyon and Lookout Mountain start immediately west, which means hiking and
climbing from the door, but the town itself is at plains-adjacent elevation with
plains-adjacent winters.

## Who Golden is right for

Mines and NREL employees, people who want a genuine walkable downtown with
mountain access, and buyers who will pay for scarcity. The W Line makes Denver
commuting practical without a car.

It is a weaker fit if you want value per square foot — [Wheat
Ridge](/places/wheat-ridge/) and [Arvada](/places/arvada/) next door offer
considerably more house for the money.`,
  },

  // ------------------------------------------------------------ Wheat Ridge
  {
    slug: 'wheat-ridge',
    name: 'Wheat Ridge',
    region: 'jeffco',
    county: 'Jefferson County',
    title: 'Wheat Ridge, Colorado — the complete guide to living here',
    summary:
      'Big flat lots, real alleys, chickens nobody permitted, and a fourteen-minute drive downtown if you take 44th instead of I-70. The best yard-per-dollar in the metro.',
    answer:
      'Wheat Ridge is a Jefferson County city of about 32,787 immediately west of Denver, known for unusually large flat lots and alley-loaded 1950s brick ranches. It was platted as market-garden land before it was suburban, which is why the parcels are large, and it is served by the RTD G Line.',
    tags: ['wheat-ridge', 'jeffco', 'yards', 'ranches', 'west-metro', 'g-line'],
    geo: { lat: 39.7661, lng: -105.0772 },
    stats: [
      'population - 32,787',
      'commute downtown - 19 min',
      'lot size - 9,000 sq ft typical',
      'built - 1948-1968 mostly',
    ],
    civic: {
      population: 32787,
      incorporated: 1969,
      schoolDistricts: ['Jefferson County Public Schools (Jeffco)'],
      employers: ['Lutheran Medical Center', 'Exempla healthcare cluster'],
      transit: ['RTD G Line commuter rail at Wheat Ridge–Ward Road'],
      drive: { denver: 19, boulder: 35, dia: 40 },
    },
    links: [
      { label: 'City of Wheat Ridge', url: 'https://www.ci.wheatridge.co.us/' },
      { label: 'Jeffco Public Schools', url: 'https://www.jeffcopublicschools.org/' },
    ],
    faq: [
      {
        q: 'Is Wheat Ridge part of Denver?',
        a: 'No. It is a separate city in Jefferson County, immediately west of Denver, with its own government, police and zoning.',
      },
      {
        q: 'Why are the lots so big in Wheat Ridge?',
        a: 'It was platted as truck-farming and market-garden land before it was suburban, so the parcels were sized for growing rather than for houses. Nine thousand square feet is typical and much larger is common.',
      },
      {
        q: 'What should I check before buying a Wheat Ridge ranch?',
        a: 'Sewer scope first — the clay laterals from this era are at the end of their lives. Then roof age and hail history, and whether any finished basement was permitted. A lot of them were not.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Wheat Ridge', url: 'https://www.ci.wheatridge.co.us/' },
    ],
    lede: `Wheat Ridge was farmland that became a suburb without ever fully deciding to,
which is why the lots are enormous and the streets have alleys. It is the answer
to more of our questions than any other single city on the Range.`,
    money: `Wheat Ridge sits below the Denver metro single-family median of $650,000 for
comparable houses, and what you get for the money is land. The typical parcel is
around 9,000 square feet and considerably larger is common — a scale of lot that
simply does not exist in anything built after about 1970.

The value play is the unrenovated 1954 brick ranch. Roughly a third have had the
kitchen done and two thirds have not. The ones that have not are the deal.`,
    sections: `## Where Wheat Ridge actually is

Immediately west of Denver between Sheridan and Kipling, north of Lakewood and
south of Arvada. Downtown Denver is about nineteen minutes if you take 44th
Avenue rather than I-70 — which you should, between 7:30 and 9:00.

## What you are buying

A 1954 brick ranch on 9,000 square feet with a detached garage somebody has
already wired for a shop. The housing stock is overwhelmingly 1948–1968, single
storey, brick, on alley-loaded lots.

Roughly a third of them have had the kitchen done and two thirds have not. The
ones that have not are where the value is, provided you have priced the work.

## What to check

**Sewer scope, always.** The clay lines from this era are at the end of their
service life, and a replacement runs into five figures.

**Hail history on the roof.** Ask the age, ask whether the last replacement was
an insurance claim, and read the wind-and-hail deductible on any quote.

**Permits on the basement.** A great many Wheat Ridge basements were finished
without them, which becomes your problem at resale.

## The agricultural leftovers

Wheat Ridge was Colorado's carnation capital and a market-garden district
supplying Denver. The greenhouses are mostly gone but the land pattern remains,
along with a permissive attitude to livestock that means chickens — and
occasionally more — on residential lots.

## Who Wheat Ridge is right for

Anyone who wants a yard, a garage they can work in, and a short drive downtown.
It is our most common recommendation for the [yard, taco truck and short
commute](/answers/yard-taco-truck-short-commute/) question, and it has been for
years.

It is a weaker fit if you want new construction or a walkable commercial
district. Wheat Ridge's retail is arterial strip, and that is not changing fast.`,
  },

  // ------------------------------------------------------------ Edgewater
  {
    slug: 'edgewater',
    name: 'Edgewater',
    region: 'jeffco',
    county: 'Jefferson County',
    title: 'Edgewater, Colorado — the complete guide to living here',
    summary:
      'Half a square mile of independent city wedged between Denver and Sloan’s Lake, with a main street that has quietly become one of the metro’s best.',
    answer:
      'Edgewater is a Jefferson County city of about 5,005 covering roughly half a square mile between Denver and Lakewood, adjacent to Sloan’s Lake. Its compact size and 25th Avenue commercial strip make it one of the most walkable small municipalities in the metro.',
    tags: ['edgewater', 'jeffco', 'walkable', 'small-city', 'sloans-lake'],
    geo: { lat: 39.7508, lng: -105.0586 },
    stats: [
      'population - 5,005',
      'about 0.5 sq mi',
      'incorporated - 1901',
      'commute to Denver - 12 min',
    ],
    civic: {
      population: 5005,
      incorporated: 1901,
      schoolDistricts: ['Jefferson County Public Schools (Jeffco)'],
      transit: ['RTD bus on Sheridan and 20th Avenue'],
      drive: { denver: 12, boulder: 35, dia: 40 },
    },
    links: [
      { label: 'City of Edgewater', url: 'https://www.edgewaterco.com/' },
      { label: 'Jeffco Public Schools', url: 'https://www.jeffcopublicschools.org/' },
    ],
    faq: [
      {
        q: 'Why is Edgewater its own city?',
        a: 'It incorporated in 1901 and simply never merged, leaving a half-square-mile municipality entirely surrounded by Denver, Lakewood and Wheat Ridge with its own police force, government and zoning.',
      },
      {
        q: 'Is Edgewater walkable?',
        a: 'Unusually so for the metro. The whole city is about half a square mile, the 25th Avenue commercial strip is genuinely good, and Sloan’s Lake is immediately east.',
      },
    ],
    sources: [census, { label: 'City of Edgewater', url: 'https://www.edgewaterco.com/' }],
    lede: `Edgewater is half a square mile of independent municipality that Denver grew
entirely around and never absorbed. It has its own police force, a main street
that has become genuinely good over the last decade, and Sloan's Lake at the end
of the block.`,
    money: `Small city, small inventory, high demand. Edgewater prices reflect proximity
to Sloan's Lake and the Highlands without a Denver address, and the housing is
mostly small early-20th-century and postwar stock on compact lots. Scrape-and-
replace activity has been heavy.`,
    sections: `## Where Edgewater actually is

Directly west of Sloan's Lake, between Denver, Lakewood and Wheat Ridge, twelve
minutes from downtown. You can walk across the entire city in about fifteen
minutes.

## The 25th Avenue strip

Edgewater Public Market and the surrounding blocks turned a tired commercial
strip into one of the better small food and drink districts in the metro. For a
city of five thousand, the density of decent places to eat is remarkable.

## Who Edgewater is right for

People who want walkability, Sloan's Lake, and quick downtown access without
Denver prices or a Denver address. It is a weaker fit if you want a yard — lots
are small — or a large house.`,
  },

  // ------------------------------------------------------------ Morrison
  {
    slug: 'morrison',
    name: 'Morrison',
    region: 'jeffco',
    county: 'Jefferson County',
    title: 'Morrison, Colorado — the complete guide to living here',
    summary:
      'A town of a few hundred people at the mouth of Bear Creek Canyon, best known as the address of Red Rocks Amphitheatre.',
    answer:
      'Morrison is a tiny Jefferson County town of about 429 residents at the mouth of Bear Creek Canyon, immediately below Red Rocks Park and Amphitheatre. Its housing stock is minimal and its identity is dominated by the park, the geology and concert traffic.',
    tags: ['morrison', 'jeffco', 'red-rocks', 'small-town', 'foothills'],
    geo: { lat: 39.6533, lng: -105.1908 },
    stats: [
      'population - 429',
      'incorporated - 1906',
      'Red Rocks - 5 min',
      'commute to Denver - 30 min',
    ],
    civic: {
      population: 429,
      incorporated: 1906,
      schoolDistricts: ['Jefferson County Public Schools (Jeffco)'],
      transit: ['No fixed-route transit'],
      drive: { denver: 30, boulder: 45, dia: 55 },
    },
    links: [
      { label: 'Town of Morrison', url: 'https://www.town.morrison.co.us/' },
      { label: 'Red Rocks Park and Amphitheatre', url: 'https://www.redrocksonline.com/' },
      { label: 'Dinosaur Ridge', url: 'https://dinoridge.org/' },
    ],
    faq: [
      {
        q: 'Is Red Rocks in Morrison?',
        a: 'Red Rocks Park and Amphitheatre carries a Morrison address and sits immediately above the town, though the park itself is owned and operated by the City and County of Denver as part of its mountain parks system.',
      },
      {
        q: 'What is Dinosaur Ridge?',
        a: 'A hogback just east of Morrison with exposed dinosaur bones and tracks in the rock face, and one of the most accessible fossil sites in North America.',
      },
    ],
    sources: [census, { label: 'Town of Morrison', url: 'https://www.town.morrison.co.us/' }],
    lede: `Morrison has a few hundred residents, one main street, and the most famous
concert venue in the United States immediately above it. It sits at the mouth of
Bear Creek Canyon where the hogback breaks, next to a ridge with dinosaur tracks
in it.`,
    money: `Inventory is very limited — this is a town of a few hundred people. Most
buyers looking at "Morrison" are actually buying in unincorporated Jefferson
County nearby, which is a different tax and services picture. Confirm whether an
address is inside town limits.`,
    sections: `## Where Morrison actually is

At the mouth of Bear Creek Canyon, thirty minutes south-west of Denver, below
Red Rocks. Dinosaur Ridge is immediately east.

## Concert traffic is a real factor

Red Rocks hosts a heavy summer schedule, and traffic through and around Morrison
on show nights is substantial. If you are considering an address here, visit on
a concert evening before deciding.

## Who Morrison is right for

People who want to be at the exact edge of the foothills with Denver half an
hour away, and who consider Red Rocks a feature rather than a traffic problem.
Inventory is thin enough that this is rarely a plannable move.`,
  },

  // ------------------------------------------------------------ Evergreen
  {
    slug: 'evergreen',
    priceLadder: [
      { label: 'Evergreen / mountain metro', value: 726000, self: true },
      { label: 'Denver metro', value: 650000 },
      { label: 'Colorado statewide', value: 606500 },
    ],
    name: 'Evergreen',
    region: 'jeffco',
    county: 'Jefferson County',
    title: 'Evergreen, Colorado — the complete guide to living here',
    summary:
      'Mountain living at 7,162 feet, thirty minutes from Denver, with the highest mountain-metro prices and the wildfire and insurance realities that come with them.',
    answer:
      'Evergreen is an unincorporated Jefferson County community of about 9,307 at 7,162 feet in the foothills west of Denver. The Evergreen and mountain metro area had a June 2026 single-family median of $726,000, and inventory reached near ten-year highs.',
    tags: ['evergreen', 'jeffco', 'mountain', 'foothills', 'wildfire'],
    geo: { lat: 39.6333, lng: -105.3172 },
    stats: [
      'median - $726K',
      'population - 9,307',
      'elevation - 7,162 ft',
      'commute to Denver - 40 min',
    ],
    civic: {
      population: 9307,
      elevation: 7162,
      area: 11.52,
      schoolDistricts: ['Jefferson County Public Schools (Jeffco)'],
      transit: ['No fixed-route transit; I-70 and CO-74 access'],
      drive: { denver: 40, boulder: 55, dia: 65 },
      median: 726000,
      medianBasis: 'Evergreen / mountain metro single-family, June 2026 (CAR)',
    },
    links: [
      { label: 'Jefferson County', url: 'https://www.jeffco.us/' },
      {
        label: 'Evergreen Park and Recreation District',
        url: 'https://www.evergreenrecreation.com/',
      },
      { label: 'Jeffco Public Schools', url: 'https://www.jeffcopublicschools.org/' },
    ],
    faq: [
      {
        q: 'How much do houses cost in Evergreen?',
        a: 'The Evergreen and mountain metro single-family median was $726,000 in June 2026, up 3.1% year over year, with 35 days on market. Inventory was near its highest level in more than a decade.',
      },
      {
        q: 'Is Evergreen a town?',
        a: 'No — it is an unincorporated census-designated place governed by Jefferson County, without its own municipal government.',
      },
      {
        q: 'What should I know about wildfire insurance in Evergreen?',
        a: 'It has become materially harder and more expensive. Some carriers have withdrawn from the Colorado foothills entirely. Get a bindable quote before you go under contract, not after inspection.',
      },
    ],
    sources: [census, SOURCES.car, { label: 'Jefferson County', url: 'https://www.jeffco.us/' }],
    lede: `Evergreen is the closest thing the Denver metro has to living in the mountains
while keeping a metro job. It sits at 7,162 feet in the Jeffco foothills, about
forty minutes from downtown, among pines, with elk in the meadow and a lake in
the middle of town.`,
    money: `The Evergreen and mountain metro single-family median was **$726,000** in June
2026, up 3.1% year over year, with 35 days on market — and inventory near its
highest level in over a decade. That last point matters: this is the most
buyer-friendly the mountain market has been in years.

Three costs people underestimate here. **Insurance**, which has risen sharply and
in some cases become hard to obtain at all. **Wells and septic**, which need
proper inspection and can be expensive to remediate. **Access** — private roads
are the owner's problem to plow.`,
    sections: `## Where Evergreen actually is

In the Jeffco foothills west of Denver, reached via I-70 and CO-74 or up Bear
Creek Canyon from Morrison. At 7,162 feet it is nearly 1,900 feet above Denver,
which means real winter and a genuinely different climate thirty miles from
downtown.

## What living up here is actually like

Snow that stays. Wood stoves. Four-wheel drive. Elk in the yard, and the
associated fencing problems. Evergreen Lake freezes hard enough for skating and
hosts one of the more charming winter scenes in the metro.

It is beautiful and it is work. People who move up here from the flats
consistently underestimate the plowing, the driving and the maintenance.

## Wildfire

This is the central risk. The foothills are wildland-urban interface, and the
insurance market has repriced accordingly — some carriers have exited Colorado
foothills business entirely.

Practical steps: get a bindable insurance quote early, understand the defensible
space around the structure, ask about the roof material, and look at the
property's position on the slope. Fire moves uphill.

## Who Evergreen is right for

People who genuinely want mountain living and will accept the trade-offs, remote
workers, and anyone whose commute is only a few days a week. Jeffco schools serve
the area and the local elementary schools are well regarded.

It is a weaker fit for daily downtown commuters — I-70 in winter is a real
constraint — and for anyone who has not priced the insurance.`,
  },

  // ------------------------------------------------------------ Idaho Springs
  {
    slug: 'idaho-springs',
    name: 'Idaho Springs',
    region: 'jeffco',
    county: 'Clear Creek County',
    title: 'Idaho Springs, Colorado — the complete guide to living here',
    summary:
      'A gold-rush town at 7,526 feet, squeezed between I-70 and Clear Creek, and the first real mountain town on the drive west.',
    answer:
      'Idaho Springs is a Clear Creek County town of about 1,782 at 7,526 feet, roughly 40 minutes west of Denver on I-70. Founded during the 1859 gold rush, it retains a historic Miner Street commercial core and serves as the gateway to the I-70 mountain corridor.',
    tags: ['idaho-springs', 'clear-creek-county', 'mountain-town', 'mining', 'i-70'],
    geo: { lat: 39.7425, lng: -105.5136 },
    stats: [
      'population - 1,782',
      'elevation - 7,526 ft',
      'incorporated - 1885',
      'commute to Denver - 40 min',
    ],
    civic: {
      population: 1782,
      elevation: 7526,
      incorporated: 1885,
      area: 2.25,
      schoolDistricts: ['Clear Creek School District RE-1'],
      employers: ['Tourism and hospitality', 'Clear Creek County government'],
      transit: ['Bustang West Line on I-70', 'Snowstang seasonal ski service'],
      drive: { denver: 40, boulder: 60, dia: 75 },
    },
    links: [
      { label: 'City of Idaho Springs', url: 'https://www.idahospringsco.com/' },
      { label: 'Clear Creek County', url: 'https://www.clearcreekcounty.us/' },
      { label: 'Bustang', url: 'https://ridebustang.com/' },
    ],
    faq: [
      {
        q: 'Is Idaho Springs a good place to live year-round?',
        a: 'It is one of the more practical mountain towns because it is only 40 minutes from Denver on I-70 and has genuine services. The trade-offs are the interstate running through the middle of it, limited housing, and steep terrain.',
      },
      {
        q: 'Why is it called Idaho Springs when it is in Colorado?',
        a: 'The name predates the state of Idaho and comes from the hot springs and an early settlement name. The hot springs are still there and still commercially operated.',
      },
    ],
    sources: [census, { label: 'City of Idaho Springs', url: 'https://www.idahospringsco.com/' }],
    lede: `Idaho Springs is where the 1859 Colorado gold rush actually started, and it is
the first genuine mountain town you reach driving west from Denver. It is
squeezed into the Clear Creek canyon with the interstate running through it, at
7,526 feet, forty minutes from downtown.`,
    money: `Small inventory, older mining-era housing on steep lots, and mountain-town
maintenance realities. Wildfire and insurance considerations apply as they do
throughout the foothills, and canyon geography means some parcels have genuine
access and drainage constraints.`,
    sections: `## Where Idaho Springs actually is

On I-70 in the Clear Creek canyon, forty minutes west of Denver at 7,526 feet.
It is the closest real mountain town to the metro and the gateway to Georgetown,
Loveland Pass and the ski corridor beyond.

## The mining history

Gold was found here in January 1859, touching off the Colorado rush. The
Argo Tunnel, the Phoenix Mine and miles of workings underlie the area, and the
mining legacy includes real environmental remediation — the Clear Creek and
Central City Superfund site covers parts of the district.

## Living with I-70

The interstate is the town's lifeline and its principal nuisance. Traffic noise
is real, and weekend ski traffic makes the corridor genuinely difficult on
winter Saturdays and Sunday afternoons.

## Who Idaho Springs is right for

People who want an authentic mountain town with a short Denver drive, who will
use the hot springs and the trails, and who are not bothered by the interstate.
It is a weaker fit for anyone wanting quiet, a big lot, or a wide housing choice.`,
  },
]
