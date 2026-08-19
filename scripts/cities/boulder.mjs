import { SOURCES } from './_template.mjs'

const census = { ...SOURCES.census, retrieved: '2026-08-19' }

export const boulderCounty = [
  // ------------------------------------------------------------ Boulder
  {
    slug: 'boulder',
    priceLadder: [
      { label: 'Denver metro', value: 650000 },
      { label: 'Colorado statewide', value: 606500 },
      { label: 'Evergreen / mountain metro', value: 726000 },
    ],
    name: 'Boulder',
    region: 'boulder-county',
    county: 'Boulder County',
    featured: true,
    title: 'Boulder, Colorado — the complete guide to living here',
    summary:
      'The Flatirons, a major research university, federal science labs, and the most expensive housing on the Front Range. Worth it for about a third of the people who ask.',
    answer:
      'Boulder is a Boulder County city of about 108,250 at the base of the Flatirons, home to the University of Colorado and major federal research labs including NOAA and NIST. It has the Front Range’s most expensive housing, protected by a greenbelt of over 45,000 acres of city open space and a building height limit.',
    tags: ['boulder', 'boulder-county', 'university', 'open-space', 'expensive'],
    geo: { lat: 40.015, lng: -105.2705 },
    stats: [
      'population - 108,250',
      'elevation - 5,318 ft',
      'days on market - 64',
      'commute to Denver - 45 min',
    ],
    civic: {
      population: 108250,
      elevation: 5318,
      incorporated: 1871,
      countySeat: true,
      area: 27.4,
      schoolDistricts: ['Boulder Valley School District (BVSD)'],
      employers: [
        'University of Colorado Boulder',
        'NOAA Boulder laboratories',
        'NIST Boulder',
        'National Center for Atmospheric Research (NCAR)',
        'Google Boulder',
        'Medtronic',
      ],
      transit: [
        'RTD regional bus, including the FF1/FF3 Flatiron Flyer BRT to Denver',
        'HOP, SKIP and JUMP local routes',
        'No rail service — the FasTracks Northwest Rail segment remains unbuilt',
      ],
      drive: { denver: 45, boulder: 0, dia: 55 },
    },
    links: [
      { label: 'City of Boulder', url: 'https://bouldercolorado.gov/' },
      { label: 'Boulder Valley School District', url: 'https://www.bvsd.org/' },
      { label: 'University of Colorado Boulder', url: 'https://www.colorado.edu/' },
      {
        label: 'Boulder Open Space and Mountain Parks',
        url: 'https://bouldercolorado.gov/services/open-space-and-mountain-parks',
      },
      {
        label: 'Boulder County property records',
        url: 'https://bouldercounty.gov/property-and-land/assessor/',
      },
    ],
    faq: [
      {
        q: 'Is Boulder worth the price?',
        a: 'For roughly a third of the people who ask, yes — specifically those who will genuinely use a trailhead on foot several times a week. For everyone else, Louisville, Niwot or Lafayette deliver most of what Boulder is famous for at a substantially lower price.',
      },
      {
        q: 'Why is Boulder so expensive?',
        a: 'Supply is deliberately constrained. The city has bought more than 45,000 acres of surrounding open space since 1967 and enforces a building height limit, so it cannot sprawl outward or build far upward. Add a major university and a federal research cluster, and demand meets a fixed supply.',
      },
      {
        q: 'Does Boulder have a train to Denver?',
        a: 'No. The FasTracks Northwest Rail line to Boulder and Longmont was approved by voters in 2004 and has never been built. The practical transit option is the Flatiron Flyer bus rapid transit, which runs frequently down US-36 and is genuinely fast.',
      },
      {
        q: 'How bad is the fire risk in Boulder?',
        a: 'Real and increasing. The 2021 Marshall Fire destroyed more than a thousand homes in Boulder County — in suburban neighbourhoods, not the mountains. Ask about defensible space, insurance availability and the wildland-urban interface rating for any address west or south of the city.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      {
        label: 'City of Boulder Open Space and Mountain Parks',
        url: 'https://bouldercolorado.gov/services/open-space-and-mountain-parks',
      },
    ],
    lede: `Boulder is the most argued-about address in Colorado, and both sides of the
argument are right. It has a walkable downtown, a world-class university, three
federal science laboratories, and mountains that begin at the end of certain
streets. It also costs roughly what a similar house costs in coastal California,
for reasons that are entirely deliberate.`,
    money: `Boulder County prices were flat year-to-date through June 2026, with
single-family homes taking about **64 days** to sell — the longest on the
northern Front Range and a sign of a market that has stopped rewarding urgency.
Condos and townhomes were down about 15% year over year, which is the
sharpest correction in the region.

The number that decides most Boulder questions is not the median but the gap to
the coal towns. Comparable houses in [Louisville](/places/louisville/) and
[Lafayette](/places/lafayette/) run hundreds of thousands less, in the same
school district, twenty minutes away. That money is buying the trailhead, not
the house. We wrote the long version: [is Boulder worth
it?](/answers/is-boulder-worth-it/)`,
    sections: `## Where Boulder actually is

Twenty-five miles north-west of Denver at 5,318 feet, pressed against the
Flatirons where the plains stop. Boulder Creek runs out of the canyon through
the middle of town, and the Boulder Creek Path along it is the spine of the
city's transport network as much as its recreation.

The mountain backdrop is not scenery, it is the zoning policy. Everything west
of Broadway rises.

## Why it costs what it costs

In 1967 Boulder became the first city in the United States to tax itself
specifically to buy open space. It has since assembled more than 45,000 acres
of city open space, plus a great deal more county open space, forming a
greenbelt the city cannot build across. A 55-foot building height limit,
approved by voters in 1971, caps how far up it can go instead.

The result is a city that physically cannot add much housing, attached to a
university of 35,000 students and an employment base — NOAA, NIST, NCAR, Google,
Medtronic — that keeps growing. That is the whole explanation. It is not a
mystery and it is not going to resolve.

## The neighbourhoods

**Newlands and Mapleton Hill** sit north-west, closest to the mountains, with
the oldest and grandest housing and walking access to Mount Sanitas and Sanitas
Valley. This is the top of the market.

**Chautauqua and University Hill** wrap the south-west and the campus. The Hill
is student-dominated and rowdy in term; Chautauqua is quiet, historic and
directly beneath the Flatirons.

**Table Mesa and Martin Acres** in the south are the 1950s and 60s ranch
neighbourhoods, the closest Boulder gets to conventional suburbia and the
entry point for buyers who want the city without the seven figures.

**North Boulder (NoBo)** has been the growth area — newer infill, the art
district on Broadway, and better value per square foot than the west side.

**Gunbarrel** is the eastern outlier, physically separate from the rest of the
city, near the Boulder Reservoir. It is where Boulder addresses get most
affordable, and it commutes to Longmont as easily as to Boulder.

## Fire, seriously

The Marshall Fire of 30 December 2021 destroyed more than a thousand homes in
Boulder County. It did not burn a forest — it burned grassland in high wind and
then burned subdivisions in [Superior](/places/superior/) and Louisville. It
reset how everyone here thinks about wildfire risk, because it demonstrated that
suburban neighbourhoods on the plains are exposed too.

Practically, this means: ask what insurance costs and whether the carrier is
still writing in the area, ask about defensible space, and do not assume a house
away from the trees is a house away from the risk.

## Getting to Denver

There is no train. The FasTracks Northwest Rail line was approved by voters in
2004 and remains unbuilt, which is a live political grievance in Boulder County.

What exists is genuinely good: the Flatiron Flyer bus rapid transit runs down
US-36 in its own lanes for much of the route and reaches downtown Denver in
about 45 minutes reliably. Many Boulder commuters use it and never drive.

## Who Boulder is right for

People who will use the mountains on foot, on weekdays, from their door. People
whose work is at the university, the labs, or in the local tech and biotech
cluster. People for whom the price is simply not the deciding variable.

For everyone else, the honest recommendation is to look twenty minutes east
first and come back to Boulder only if the substitutes genuinely disappoint.`,
  },

  // ------------------------------------------------------------ Longmont
  {
    slug: 'longmont',
    name: 'Longmont',
    region: 'boulder-county',
    county: 'Boulder County',
    featured: true,
    title: 'Longmont, Colorado — the complete guide to living here',
    summary:
      'Boulder County without the Boulder premium. A working city with its own municipal broadband, a real downtown, and the best value in the county by a wide margin.',
    answer:
      'Longmont is a Boulder County city of about 98,885, roughly fifteen miles north-east of Boulder. It offers Boulder County location and St. Vrain Valley schools at substantially lower prices than Boulder, and operates NextLight, a city-owned gigabit fibre utility.',
    tags: ['longmont', 'boulder-county', 'value', 'broadband', 'st-vrain'],
    geo: { lat: 40.1672, lng: -105.1019 },
    stats: [
      'population - 98,885',
      'elevation - 4,979 ft',
      'commute to Boulder - 25 min',
      'municipal fibre - NextLight',
    ],
    civic: {
      population: 98885,
      elevation: 4979,
      incorporated: 1885,
      area: 28.7,
      schoolDistricts: ['St. Vrain Valley School District'],
      employers: [
        'Seagate Technology',
        'Amgen',
        'UCHealth Longs Peak Hospital',
        'Longmont United Hospital',
        'DigitalGlobe / Maxar heritage operations',
      ],
      transit: [
        'RTD regional bus to Boulder and Denver',
        'Colorado Connector passenger rail — a planned stop on the Denver–Fort Collins segment',
      ],
      drive: { denver: 45, boulder: 25, dia: 50 },
    },
    links: [
      { label: 'City of Longmont', url: 'https://www.longmontcolorado.gov/' },
      { label: 'St. Vrain Valley School District', url: 'https://www.svvsd.org/' },
      { label: 'NextLight municipal broadband', url: 'https://mynextlight.com/' },
    ],
    faq: [
      {
        q: 'Is Longmont cheaper than Boulder?',
        a: 'Substantially — typically hundreds of thousands less for a comparable house, in the same county, about 25 minutes away. It is the single biggest value gap in Boulder County.',
      },
      {
        q: 'What is NextLight?',
        a: 'Longmont’s city-owned fibre internet utility, built after voters authorised it and launched in 2014. It offers symmetrical gigabit service at prices well below the incumbent providers and is regularly rated among the fastest ISPs in the country.',
      },
      {
        q: 'Is Longmont in Boulder Valley School District?',
        a: 'No — Longmont is served by St. Vrain Valley School District, which is a separate district covering Longmont, Erie, Lyons, Niwot, Frederick, Firestone and Dacono.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Longmont', url: 'https://www.longmontcolorado.gov/' },
    ],
    lede: `Longmont is the answer to the Boulder County price problem, and it has spent
the last fifteen years becoming a place people choose rather than settle for. It
has a genuine main street, a craft brewing scene that predates the trend, a
municipal fibre utility that embarrasses most of the country, and houses that
cost a fraction of what they do fifteen miles south-west.`,
    money: `Longmont is the value end of Boulder County. County-wide prices were flat
year to date through June 2026 with 64 days on market, and Longmont sits well
below the county average — the county figure is pulled upward by Boulder,
Superior and Niwot.

For buyers who want Boulder County schools, open space and proximity without the
Boulder number, this is the most efficient trade available on the Front Range.
Compare it against [Loveland](/places/loveland/) to the north and
[Lafayette](/places/lafayette/) to the south before deciding.`,
    sections: `## Where Longmont actually is

Fifteen miles north-east of Boulder at the confluence of the St. Vrain Creek
and Left Hand Creek, at 4,979 feet — the lowest of the Boulder County towns.
Longs Peak dominates the western view, which is where the name comes from.

## Founded by a Chicago newspaper advert

The Chicago-Colorado Colony bought the land and platted the town in 1871,
recruiting members through newspaper advertisements much as Greeley's Union
Colony had a year earlier. The grid downtown is the result, and Main Street is
still the widest and most usable commercial street in the county.

## NextLight

In 2011 Longmont voters authorised the city to use its existing fibre loop to
sell retail internet service. NextLight launched in 2014, offers symmetrical
gigabit connections, and consistently ranks among the fastest ISPs in the
United States. It is cheaper than the incumbents and it is a genuine reason
remote workers choose Longmont over similarly priced towns.

## The 2013 flood

The St. Vrain overtopped in September 2013, cutting the city in half and
destroying homes along the creek corridor. Longmont has since spent heavily on
the Resilient St. Vrain project, rebuilding the channel to carry a 100-year
flow. Check current FEMA mapping near the creek, and ask whether a given
property benefits from the completed work or is waiting on a later phase.

## The neighbourhoods

**Old Town** is the grid around Main Street: 1890s to 1930s housing, alleys,
mature trees, and walkability that no other Boulder County town outside Boulder
and Louisville matches.

**Southwest Longmont** toward Airport Road is 1970s–90s stock and the most
convenient side for a Boulder commute.

**Southeast and Prospect** includes Prospect New Town, a new-urbanist
development from the 1990s that looks like nothing else in the county and has
its own dedicated following.

**North Longmont** has the newest subdivisions and the easiest access to
Longs Peak Hospital and CO-66.

## Who Longmont is right for

Almost anyone who wants Boulder County and does not need to be in Boulder
proper — families using St. Vrain schools, remote workers who care about
bandwidth, and buyers who want a downtown they can walk to. Investors should
look here too: it is one of the few Boulder County markets where the rent-to-
price ratio is defensible.

It is a weaker fit if you want walk-out-the-door trail access, which Boulder,
[Lyons](/places/lyons/) and [Nederland](/places/nederland/) do better.`,
  },

  // ------------------------------------------------------------ Louisville
  {
    slug: 'louisville',
    name: 'Louisville',
    region: 'boulder-county',
    county: 'Boulder County',
    title: 'Louisville, Colorado — the complete guide to living here',
    summary:
      'Old coal-town main street, Boulder Valley schools, Flatirons out the windshield, and bike paths that go under the busy roads. The Boulder compromise nobody regrets.',
    answer:
      'Louisville is a Boulder County city of about 21,226 between Boulder and Broomfield, with a preserved coal-town main street and Boulder Valley School District enrolment. It repeatedly ranks among the best small places to live in America, and lost more than 500 homes in the 2021 Marshall Fire.',
    tags: ['louisville', 'boulder-county', 'schools', 'main-street', 'biking', 'marshall-fire'],
    geo: { lat: 39.9778, lng: -105.1319 },
    stats: [
      'population - 21,226',
      'elevation - 5,335 ft',
      'commute to Boulder - 15 min',
      'school walk - 9 min typical',
    ],
    civic: {
      population: 21226,
      elevation: 5335,
      incorporated: 1882,
      area: 8.0,
      schoolDistricts: ['Boulder Valley School District (BVSD)'],
      employers: ['Medtronic', 'Sierra Nevada Corporation', 'GlobalMed / medical device cluster'],
      transit: ['RTD regional bus to Boulder, Denver and the US-36 corridor'],
      drive: { denver: 35, boulder: 15, dia: 40 },
    },
    links: [
      { label: 'City of Louisville', url: 'https://www.louisvilleco.gov/' },
      { label: 'Boulder Valley School District', url: 'https://www.bvsd.org/' },
      {
        label: 'Marshall Fire recovery information, Boulder County',
        url: 'https://bouldercounty.gov/disasters/wildfires/marshall-fire/',
      },
    ],
    faq: [
      {
        q: 'Are Louisville schools in the Boulder district?',
        a: 'Yes. Louisville is in Boulder Valley School District, the same district as Boulder itself, which is a large part of why families choose it over towns in neighbouring districts.',
      },
      {
        q: 'How badly was Louisville hit by the Marshall Fire?',
        a: 'Severely. The 30 December 2021 fire destroyed more than 500 homes in Louisville alone, concentrated in the Harper Lake, Coal Creek Ranch and Centennial Heights areas. Much of the affected area has been rebuilt, and rebuilt houses are now some of the newest stock in the county.',
      },
      {
        q: 'Why can kids bike everywhere in Louisville?',
        a: 'The town built its trail network to pass under the arterial roads rather than across them. That single design decision is why you see children riding here and not in otherwise similar suburbs.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      {
        label: 'Boulder County Marshall Fire information',
        url: 'https://bouldercounty.gov/disasters/wildfires/marshall-fire/',
      },
    ],
    lede: `Louisville is what people mean when they say they want Boulder but cannot pay
for Boulder. It is an old coal town with a real main street, absurd schools, and
a bike network that goes *under* the busy roads rather than across them — an
expensive infrastructure decision made decades ago that is now the most valuable
thing about living there.`,
    money: `Louisville sits below Boulder for comparable houses while staying in Boulder
Valley School District, which is the entire value proposition. Boulder County
prices were flat through June 2026 with 64 days on market.

One local wrinkle: a meaningful share of Louisville's housing stock is now
post-2022 rebuild following the Marshall Fire. That inventory is brand new, built
to current code, and often better insulated than anything around it — but
insurance pricing across the whole town has changed since the fire, so get a
quote early rather than at closing.`,
    sections: `## Where Louisville actually is

Between Boulder and Broomfield on the US-36 corridor, at 5,335 feet, with
Davidson Mesa and the Flatirons view that appears on the drive in. Boulder is
fifteen minutes, Denver about thirty-five.

## The coal town underneath

Louisville was a coal-mining town from 1877, and the mines ran under what is now
the town until the 1950s. The legacy is twofold: a genuinely old Main Street
with buildings that predate the automobile, and undermining. Some parcels sit
above old workings, and subsidence is a real if uncommon issue. Ask for a
mine-subsidence disclosure and, on older parcels, whether any grouting has been
done.

## Why the bike network matters so much

The town made a deliberate choice to grade-separate its trails, so the paths
duck beneath McCaslin, South Boulder Road and Dillon rather than crossing at
grade. The consequence is that a nine-year-old can ride to school without
crossing four lanes of traffic, which is the single variable that separates
neighbourhoods that *look* bikeable from ones where children actually ride.

See [where can my kid actually ride a bike to
school?](/answers/kid-bike-to-school/) for how we test this elsewhere.

## The Marshall Fire

On 30 December 2021, a grass fire driven by hurricane-force winds burned into
Louisville and [Superior](/places/superior/) and destroyed more than a thousand
homes across the two towns, over 500 in Louisville. It remains the most
destructive wildfire in Colorado history by structures lost.

Rebuilding has been substantial. What it means for a buyer today: a lot of new
construction inside established neighbourhoods, a community that has been
through something, and an insurance market that prices Boulder County
grassland-adjacent property differently than it did in 2021.

## Who Louisville is right for

Families who want BVSD schools and a town their children can move around
independently, and buyers who want Boulder access without the Boulder price. It
is the most consistent recommendation we make in Boulder County.

It is a weaker fit if you want a large lot — Louisville's are modest — or if you
want mountain access on foot rather than by car.`,
  },

  // ------------------------------------------------------------ Lafayette
  {
    slug: 'lafayette',
    name: 'Lafayette',
    region: 'boulder-county',
    county: 'Boulder County',
    title: 'Lafayette, Colorado — the complete guide to living here',
    summary:
      'The least expensive Boulder Valley School District address, with an old coal-town core, a genuine arts streak, and more character than its neighbours get credit for.',
    answer:
      'Lafayette is a Boulder County city of about 30,411 east of Boulder, in the Boulder Valley School District. It is generally the most affordable BVSD address, with an old coal-mining core along Public Road and a growing arts and restaurant scene.',
    tags: ['lafayette', 'boulder-county', 'value', 'schools', 'arts'],
    geo: { lat: 39.9936, lng: -105.0897 },
    stats: [
      'population - 30,411',
      'elevation - 5,240 ft',
      'commute to Boulder - 20 min',
      'district - BVSD',
    ],
    civic: {
      population: 30411,
      elevation: 5240,
      incorporated: 1888,
      schoolDistricts: ['Boulder Valley School District (BVSD)'],
      employers: ['Good Samaritan Medical Center', 'Medtronic', 'Exempla healthcare cluster'],
      transit: ['RTD regional bus to Boulder and Denver'],
      drive: { denver: 35, boulder: 20, dia: 40 },
    },
    links: [
      { label: 'City of Lafayette', url: 'https://www.lafayetteco.gov/' },
      { label: 'Boulder Valley School District', url: 'https://www.bvsd.org/' },
    ],
    faq: [
      {
        q: 'Is Lafayette cheaper than Louisville?',
        a: 'Usually, yes — Lafayette is generally the least expensive Boulder Valley School District address, which is its central appeal for families priced out of Boulder and Louisville.',
      },
      {
        q: 'What is there to do in Lafayette?',
        a: 'Public Road has an unusually good run of independent restaurants and music venues for a town this size, plus the Lafayette Public Library and a strong farmers market. It is less polished than Louisville’s Main Street and more interesting for it.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Lafayette', url: 'https://www.lafayetteco.gov/' },
    ],
    lede: `Lafayette is the Boulder County town that gets overlooked between Louisville's
polish and Boulder's price, and it is the one we most often recommend to
families who need BVSD schools on a real budget. It has an old coal-town spine
along Public Road, better independent restaurants than its size suggests, and a
slightly scruffier, more interesting character than its neighbours.`,
    money: `Lafayette is typically the lowest-priced entry into Boulder Valley School
District, which is the number most buyers are actually solving for. Boulder
County was flat through June 2026 with 64 days on market — a market that gives
buyers room to negotiate.

Compare Lafayette against [Louisville](/places/louisville/) for schools and
[Erie](/places/erie/) for newer construction before committing.`,
    sections: `## Where Lafayette actually is

East of Boulder and north of Louisville, at 5,240 feet, on the old coal seam
that runs under this corner of the county. Boulder is twenty minutes, Denver
about thirty-five.

## The coal-town core

Like Louisville and Superior, Lafayette began as a mining town — founded in 1888
by Mary Miller, who named it after her late husband and became, reportedly, the
first woman in the United States to serve as a bank president. The old town grid
around Public Road holds the 1890s–1930s housing and most of the walkable
commerce.

Undermining applies here as it does in Louisville. Ask about it.

## What makes it different

Lafayette has kept more of an independent streak than its neighbours. Public
Road has music venues and restaurants that are not chains, the arts scene is
genuine, and the town feels less curated than Louisville. Whether that is a
feature depends entirely on you.

## Who Lafayette is right for

Families who need BVSD and cannot reach Boulder or Louisville pricing, and
buyers who want a bit of grit with their county. It is a weaker fit if you want
a polished town centre or a large modern house — for the latter, look at
[Erie](/places/erie/) next door.`,
  },

  // ------------------------------------------------------------ Superior
  {
    slug: 'superior',
    name: 'Superior',
    region: 'boulder-county',
    county: 'Boulder County',
    title: 'Superior, Colorado — the complete guide to living here',
    summary:
      'A small Boulder County town that lost nearly 400 homes in the Marshall Fire and rebuilt. Excellent US-36 access, BVSD schools, and the newest housing stock in the county.',
    answer:
      'Superior is a Boulder County town of about 13,094 on the US-36 corridor between Boulder and Broomfield. The 2021 Marshall Fire destroyed 398 structures here, including most of Original Town Superior and the entire Sagamore subdivision, and much of the town is now post-2022 construction.',
    tags: ['superior', 'boulder-county', 'marshall-fire', 'schools', 'us-36'],
    geo: { lat: 39.9528, lng: -105.1686 },
    stats: [
      'population - 13,094',
      'elevation - 5,522 ft',
      '2021 fire loss - 398 structures',
      'commute to Boulder - 15 min',
    ],
    civic: {
      population: 13094,
      elevation: 5522,
      incorporated: 1904,
      area: 3.93,
      schoolDistricts: ['Boulder Valley School District (BVSD)'],
      transit: ['RTD Flatiron Flyer BRT on US-36 at McCaslin station'],
      drive: { denver: 30, boulder: 15, dia: 40 },
    },
    links: [
      { label: 'Town of Superior', url: 'https://www.superiorcolorado.gov/' },
      { label: 'Boulder Valley School District', url: 'https://www.bvsd.org/' },
      {
        label: 'Marshall Fire recovery, Boulder County',
        url: 'https://bouldercounty.gov/disasters/wildfires/marshall-fire/',
      },
    ],
    faq: [
      {
        q: 'How many homes did Superior lose in the Marshall Fire?',
        a: 'The 30 December 2021 fire destroyed 398 structures in Superior — 393 residential and 4 commercial. Only seven of the historic homes in Original Town Superior survived, and the Sagamore subdivision was lost entirely.',
      },
      {
        q: 'Is it safe to buy in Superior now?',
        a: 'People are buying and rebuilding, and the new stock is built to current code. What has changed is insurance: verify availability and cost with a carrier before you are under contract, because grassland-adjacent Boulder County property is underwritten differently than it was in 2021.',
      },
    ],
    sources: [
      census,
      { label: 'Town of Superior', url: 'https://www.superiorcolorado.gov/' },
      {
        label: 'Boulder County Marshall Fire information',
        url: 'https://bouldercounty.gov/disasters/wildfires/marshall-fire/',
      },
    ],
    lede: `Superior is a small town on the US-36 corridor with excellent Boulder access,
Boulder Valley schools, and a history that now divides sharply into before and
after 30 December 2021.`,
    money: `An unusually large share of Superior's housing is now brand new, because it
was rebuilt after the fire. That produces an odd market: established
neighbourhoods with 2022-and-later construction, current-code efficiency, and
modern layouts.

The insurance question is the one to resolve first. Get a bindable quote early.
Boulder County grassland-adjacent property is priced differently now, and it can
change the monthly number materially.`,
    sections: `## Where Superior actually is

On the US-36 corridor between Boulder and Broomfield at 5,522 feet, with the
McCaslin Flatiron Flyer station giving it some of the best bus access in the
county. Boulder is fifteen minutes; downtown Denver about thirty.

## The Marshall Fire

On 30 December 2021, with sustained winds above 100 mph and no snowpack, a
grass fire moved into Superior and destroyed 398 structures. Original Town
Superior — the small historic core — lost all but seven of its historic homes.
The Sagamore subdivision was destroyed completely.

This is the dominant fact about Superior and it should be discussed directly
rather than skirted. The town has rebuilt substantially. What a buyer needs to
understand is that the risk was not theoretical, it was not confined to forested
mountain property, and insurers have repriced accordingly.

## Original Town and the rest

**Original Town Superior** is the old coal-town grid, now largely rebuilt.

**Rock Creek** is the large 1990s master-planned area that makes up most of the
town's population — conventional suburban subdivisions with good schools and
trail connections.

**Downtown Superior** is the newer mixed-use development near the US-36
interchange, denser and still filling in.

## Who Superior is right for

Buyers who want BVSD schools, quick Boulder and Denver access, and new
construction, and who have looked squarely at the fire history and priced the
insurance. It is a weaker fit for anyone who wants mature trees — much of the
canopy burned.`,
  },

  // ------------------------------------------------------------ Erie
  {
    slug: 'erie',
    name: 'Erie',
    region: 'boulder-county',
    county: 'Boulder & Weld Counties',
    title: 'Erie, Colorado — the complete guide to living here',
    summary:
      'A former coal town that became one of Colorado’s fastest-growing towns, straddling the Boulder–Weld line with two very different tax and school pictures.',
    answer:
      'Erie is a town of about 30,038 straddling the Boulder–Weld county line north-east of Louisville. It has grown rapidly with new subdivision construction, is served by both Boulder Valley and St. Vrain Valley school districts depending on address, and offers newer housing than most of Boulder County.',
    tags: ['erie', 'boulder-county', 'weld-county', 'growth', 'new-construction'],
    geo: { lat: 40.0503, lng: -105.0499 },
    stats: [
      'population - 30,038',
      'elevation - 5,026 ft',
      'two counties - Boulder & Weld',
      'commute to Boulder - 25 min',
    ],
    civic: {
      population: 30038,
      elevation: 5026,
      incorporated: 1874,
      schoolDistricts: ['St. Vrain Valley School District', 'Boulder Valley School District'],
      transit: ['Limited RTD bus; primarily a driving town'],
      drive: { denver: 35, boulder: 25, dia: 35 },
    },
    links: [
      { label: 'Town of Erie', url: 'https://www.erieco.gov/' },
      { label: 'St. Vrain Valley School District', url: 'https://www.svvsd.org/' },
    ],
    faq: [
      {
        q: 'Is Erie in Boulder County or Weld County?',
        a: 'Both. The town line crosses the county line, which means different mill levies and potentially different school district assignments depending on the specific address. This is the most common thing buyers get wrong in Erie.',
      },
      {
        q: 'What school district is Erie in?',
        a: 'Most of Erie is St. Vrain Valley, but part falls in Boulder Valley. Because the boundaries do not follow the town or county lines, confirm the assigned schools for the exact parcel.',
      },
      {
        q: 'Is there oil and gas drilling near Erie?',
        a: 'Yes. Erie sits on the edge of the Wattenberg Field and there has been active drilling near residential areas, which has been a persistent local political issue. Check the state permit map for any address you are serious about.',
      },
    ],
    sources: [census, SOURCES.car, { label: 'Town of Erie', url: 'https://www.erieco.gov/' }],
    lede: `Erie has done what a lot of Front Range coal towns tried and few managed: it
turned a few thousand residents into thirty thousand in about two decades,
mostly by having land when Boulder County had none. It also straddles a county
line, which makes it two towns for tax and school purposes.`,
    money: `Erie's housing is markedly newer than the rest of Boulder County, which is
the main draw. Pricing sits between the Boulder County and Weld County
pictures — the county single-family medians in June 2026 were flat for Boulder
County and $499,000 for Weld.

Two things to check on every Erie purchase: which county the parcel is in, and
whether there is a metropolitan district mill levy on top of the base tax. Both
change the monthly number and neither is obvious from a listing.`,
    sections: `## Where Erie actually is

North-east of Louisville, straddling the Boulder–Weld county line, with
Lafayette to the west and Broomfield to the south. Boulder is twenty-five
minutes, Denver about thirty-five, and DIA is unusually close at around
thirty-five.

## The two-county problem

Erie's town limits cross the county line. That means:

- **Different mill levies.** Two similar houses on opposite sides carry
  different tax bills.
- **Different school assignments.** Most of Erie is St. Vrain Valley; some is
  Boulder Valley.
- **Different county services** — assessor, clerk, sheriff.

None of this is a reason to avoid Erie. All of it is a reason to verify the
specific parcel rather than reasoning about "Erie" as a single place.

## Oil and gas

Erie sits at the western edge of the Wattenberg Field, one of the most heavily
drilled onshore basins in the country. There has been active development near
residential neighbourhoods and it has driven years of local political conflict.
If proximity to a well pad matters to you — for noise, air quality or resale —
check the Colorado Energy and Carbon Management Commission map before you offer.

## Who Erie is right for

Families who want newer, larger houses with good schools and are willing to
drive for amenity. The DIA access is genuinely convenient for frequent
travellers.

It is a weaker fit if you want walkability or an established neighbourhood. Old
Town Erie is a few blocks; the rest is subdivisions.`,
  },

  // ------------------------------------------------------------ Niwot
  {
    slug: 'niwot',
    name: 'Niwot',
    region: 'boulder-county',
    county: 'Boulder County',
    title: 'Niwot, Colorado — the complete guide to living here',
    summary:
      'One street, a couple of good bars, hay fields and long views. The quiet Boulder County alternative that people drive for everything from — and do not mind.',
    answer:
      'Niwot is an unincorporated Boulder County community of about 4,306 between Boulder and Longmont, with a small historic commercial street and surrounding agricultural land. It is in the St. Vrain Valley School District and priced below Boulder while retaining open views and rural character.',
    tags: ['niwot', 'boulder-county', 'small-town', 'quiet', 'st-vrain'],
    geo: { lat: 40.1033, lng: -105.1708 },
    stats: [
      'population - 4,306',
      'elevation - 5,168 ft',
      'unincorporated - Boulder County',
      'commute to Boulder - 18 min',
    ],
    civic: {
      population: 4306,
      elevation: 5168,
      area: 4.0,
      schoolDistricts: ['St. Vrain Valley School District'],
      transit: ['No fixed-route transit; driving community'],
      drive: { denver: 45, boulder: 18, dia: 45 },
    },
    links: [
      { label: 'Boulder County', url: 'https://bouldercounty.gov/' },
      { label: 'St. Vrain Valley School District', url: 'https://www.svvsd.org/' },
      { label: 'Niwot Cultural Arts Association', url: 'https://niwotculturalarts.org/' },
    ],
    faq: [
      {
        q: 'Is Niwot a town?',
        a: 'Not legally — it is an unincorporated census-designated place governed by Boulder County rather than its own municipal government, though it has a strong local business and cultural association.',
      },
      {
        q: 'Where does the name Niwot come from?',
        a: 'From Chief Niwot, an Arapaho leader whose name means "left hand" — the same source as Left Hand Creek and Left Hand Canyon nearby.',
      },
    ],
    sources: [census, { label: 'Boulder County', url: 'https://bouldercounty.gov/' }],
    lede: `Niwot is a single commercial street, a handful of good bars, and several
square miles of hay fields with the Front Range as a backdrop. It is
unincorporated, quiet, and the choice for people who want Boulder County
without either Boulder's price or Longmont's size.`,
    money: `Niwot prices well below Boulder while sitting eighteen minutes away, and the
lot sizes are the real attraction — this is where you find acreage in Boulder
County. Boulder County prices were flat through June 2026.

Because Niwot is unincorporated, county rather than municipal rules govern
things like short-term rentals and building. Check with Boulder County directly
rather than assuming a town ordinance applies.`,
    sections: `## Where Niwot actually is

Between Boulder and Longmont on the Diagonal Highway, at 5,168 feet, surrounded
by agricultural land that Boulder County open space has largely locked in place.
Boulder is eighteen minutes; Longmont ten.

## What is there

Second Avenue — the old commercial street — has a small run of restaurants, bars
and shops that punch above the population. Left Hand Creek runs through, the
Niwot Trail connects to the county system, and the surrounding fields are the
reason for the long views.

## Who Niwot is right for

People who want space and quiet with Boulder within twenty minutes, who will
drive for groceries without resentment, and who value the view out the kitchen
window more than a walkable errand. Families use St. Vrain Valley schools.

It is a weaker fit if you want amenity within walking distance or if you are
buying your first house — Niwot's inventory skews larger and more expensive
than Longmont's.`,
  },

  // ------------------------------------------------------------ Lyons
  {
    slug: 'lyons',
    name: 'Lyons',
    region: 'boulder-county',
    county: 'Boulder County',
    title: 'Lyons, Colorado — the complete guide to living here',
    summary:
      'The sandstone town at the mouth of two canyons, gateway to Estes Park, and the community most changed by the 2013 flood.',
    answer:
      'Lyons is a Boulder County town of about 2,209 at the confluence of the North and South St. Vrain creeks, serving as a gateway to Estes Park and Rocky Mountain National Park. It was severely damaged by the September 2013 flood, which cut off all access routes and destroyed water and sewer service.',
    tags: ['lyons', 'boulder-county', 'small-town', 'flood', 'music', 'gateway'],
    geo: { lat: 40.2247, lng: -105.2711 },
    stats: [
      'population - 2,209',
      'elevation - 5,341 ft',
      'incorporated - 1891',
      'to Estes Park - 25 min',
    ],
    civic: {
      population: 2209,
      elevation: 5341,
      incorporated: 1891,
      area: 1.35,
      schoolDistricts: ['St. Vrain Valley School District'],
      transit: ['No fixed-route transit; US-36 and CO-7 access'],
      drive: { denver: 55, boulder: 20, dia: 60 },
    },
    links: [
      { label: 'Town of Lyons', url: 'https://www.townoflyons.com/' },
      { label: 'St. Vrain Valley School District', url: 'https://www.svvsd.org/' },
    ],
    faq: [
      {
        q: 'Has Lyons recovered from the 2013 flood?',
        a: 'Largely, but not entirely. The September 2013 flood blocked every access route and destroyed water and sewer service; some residents never returned and affordable housing lost then has been difficult to replace. The town centre and river corridor have been rebuilt.',
      },
      {
        q: 'What is Lyons known for?',
        a: 'Sandstone quarrying — the distinctive red flagstone in buildings across the Front Range comes from here — and music, with Planet Bluegrass hosting the RockyGrass and Folks Festival events on the river.',
      },
    ],
    sources: [census, { label: 'Town of Lyons', url: 'https://www.townoflyons.com/' }],
    lede: `Lyons sits where the North and South St. Vrain creeks meet, at the mouth of
two canyons, and it is built out of the red sandstone quarried from the hills
around it. It is a music town, a gateway to Estes Park, and the Front Range
community most fundamentally altered by the 2013 flood.`,
    money: `Small inventory and high desirability keep Lyons prices firm despite the
flood history. The critical due-diligence item is flood mapping and insurance —
much of the town sits in or near the creek corridors, and post-2013 mapping
changed meaningfully.`,
    sections: `## Where Lyons actually is

Twenty minutes north-west of Boulder at the junction of US-36 and CO-7, at the
mouth of the St. Vrain canyons. It is the gateway to Estes Park and, through it,
Rocky Mountain National Park.

## The sandstone

Lyons sandstone has been quarried here since the 1880s and appears in buildings
across the Front Range, including much of the University of Colorado's campus.
The town itself is largely built from it, which gives it a visual coherence few
Colorado towns have.

## The 2013 flood

On 12 September 2013 the St. Vrain flooded catastrophically. Every access route
into Lyons was blocked, and sewer and fresh water service was destroyed. The
town was evacuated in full. Recovery took years, and the loss of lower-cost
housing in the flood corridor permanently changed who can afford to live there.

If you buy here, understand the creek. Get the current FEMA map, get a flood
insurance quote, and ask what happened to the specific parcel in 2013.

## Who Lyons is right for

People who want a genuine small mountain-gateway town twenty minutes from
Boulder, who will use the canyons, and who go in clear-eyed about water. The
music scene at Planet Bluegrass is a real amenity if it is your thing.

It is a weaker fit for anyone who needs a large housing selection — inventory is
thin — or who is uncomfortable with flood risk.`,
  },

  // ------------------------------------------------------------ Nederland
  {
    slug: 'nederland',
    name: 'Nederland',
    region: 'boulder-county',
    county: 'Boulder County',
    title: 'Nederland, Colorado — the complete guide to living here',
    summary:
      'A mountain town at 8,200 feet, sixteen miles up Boulder Canyon. Genuine altitude, genuine winter, and a commute that is beautiful until it snows.',
    answer:
      'Nederland is a Boulder County mountain town at roughly 8,200 feet, about sixteen miles west of Boulder up Boulder Canyon. It offers true mountain living within commuting distance of Boulder, with the trade-offs of canyon driving, heavy snow, and wildfire exposure.',
    tags: ['nederland', 'boulder-county', 'mountain-town', 'altitude', 'wildfire'],
    geo: { lat: 39.9614, lng: -105.5111 },
    stats: [
      'elevation - 8,228 ft',
      'incorporated - 1874',
      'to Boulder - 30 min',
      'Eldora ski area - 10 min',
    ],
    civic: {
      elevation: 8228,
      population: 1486,
      incorporated: 1874,
      schoolDistricts: ['Boulder Valley School District (BVSD)'],
      transit: ['RTD route N to Boulder — one of the few mountain bus services on the Front Range'],
      drive: { denver: 70, boulder: 30, dia: 80 },
    },
    links: [
      { label: 'Town of Nederland', url: 'https://www.townofnederland.org/' },
      { label: 'Eldora Mountain Resort', url: 'https://www.eldora.com/' },
      { label: 'Boulder Valley School District', url: 'https://www.bvsd.org/' },
    ],
    faq: [
      {
        q: 'Can you commute from Nederland to Boulder?',
        a: 'Yes, and many do — about thirty minutes down Boulder Canyon in good conditions. RTD also runs a bus. In winter the canyon can be slow, icy or closed, and you should assume several days a year when the drive is genuinely bad.',
      },
      {
        q: 'How much snow does Nederland get?',
        a: 'Substantially more than Boulder, thirty minutes downhill. At 8,228 feet it holds snow through the spring, and residents plan around plowing, four-wheel drive and wood heat in a way Boulder residents do not.',
      },
    ],
    sources: [census, { label: 'Town of Nederland', url: 'https://www.townofnederland.org/' }],
    lede: `Nederland is a real mountain town that happens to be half an hour from
Boulder — 8,228 feet, snow into May, Eldora ten minutes up the road, and a
canyon drive that is one of the best commutes in Colorado about three hundred
days a year.`,
    money: `Mountain property with Boulder access is its own market: limited inventory,
older and more idiosyncratic construction, and buyers who are choosing a
lifestyle rather than optimising a commute.

Underwrite three things carefully. **Wildfire** — insurance in the Boulder County
mountains has become difficult and expensive, and some carriers have withdrawn.
**Water and septic** — many properties are on wells and septic systems that need
inspection. **Access** — ask whether the road to the house is county-maintained
and plowed, because private mountain roads are the buyer's problem in February.`,
    sections: `## Where Nederland actually is

Sixteen miles west of Boulder up Boulder Canyon on CO-119, at 8,228 feet, at the
edge of the Indian Peaks Wilderness. Barker Reservoir sits at the town's edge.
Eldora Mountain Resort is ten minutes further.

## What living at 8,200 feet is actually like

Winter runs long. Snow arrives in October and lingers into May. Gardens are
short-season, wood heat is common, and four-wheel drive is not optional. The
altitude is high enough that visitors notice it and new residents take longer to
adjust than they do in Denver — see [is the altitude going to wreck
me?](/answers/altitude-adjustment/)

## The canyon

Boulder Canyon is the lifeline and the constraint. It is spectacular. It also
closes for rockfall, ices over, and turns a thirty-minute drive into ninety in a
storm. Anyone considering Nederland should drive the canyon in February before
deciding, not in July.

## Who Nederland is right for

People who want genuine mountain living without giving up access to a city, who
will ski or hike constantly, and who are comfortable with self-reliance in
winter. The RTD bus makes a car-free-ish existence marginally possible, which is
rare for a mountain town.

It is a weaker fit for anyone who needs reliable daily commuting, has health
issues affected by altitude, or is unprepared for what wildfire insurance now
costs in the Boulder County mountains.`,
  },
]
