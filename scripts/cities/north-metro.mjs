import { SOURCES } from './_template.mjs'

const census = { ...SOURCES.census, retrieved: '2026-08-19' }

export const northMetro = [
  // ------------------------------------------------------------ Broomfield
  {
    slug: 'broomfield',
    name: 'Broomfield',
    region: 'north-metro',
    county: 'City and County of Broomfield',
    featured: true,
    title: 'Broomfield, Colorado — the complete guide to living here',
    summary:
      'Colorado’s only consolidated city and county created in living memory, sitting exactly between Denver and Boulder with corporate headquarters and rail access to both.',
    answer:
      'Broomfield is a consolidated city and county of about 74,112 midway between Denver and Boulder on the US-36 corridor. Created as Colorado’s newest county in 2001 to escape being split across four counties, it hosts corporate headquarters including Vail Resorts and Crocs and has RTD B Line rail service.',
    tags: ['broomfield', 'north-metro', 'us-36', 'corporate', 'rail'],
    geo: { lat: 39.9206, lng: -105.0866 },
    stats: [
      'population - 74,112',
      'days on market - 46',
      'own city and county',
      'commute to Boulder - 20 min',
    ],
    civic: {
      population: 74112,
      elevation: 5420,
      incorporated: 1961,
      countySeat: true,
      schoolDistricts: [
        'Boulder Valley School District',
        'Adams 12 Five Star Schools',
        'Jefferson County Public Schools',
        'St. Vrain Valley School District',
      ],
      employers: [
        'Vail Resorts (headquarters)',
        'Crocs (headquarters)',
        'Lumen/Level 3 heritage operations',
        'Webroot',
      ],
      transit: [
        'RTD B Line commuter rail to Denver Union Station',
        'RTD Flatiron Flyer BRT on US-36',
      ],
      drive: { denver: 30, boulder: 20, dia: 40 },
    },
    links: [
      { label: 'City and County of Broomfield', url: 'https://www.broomfield.org/' },
      { label: 'Boulder Valley School District', url: 'https://www.bvsd.org/' },
      { label: 'Adams 12 Five Star Schools', url: 'https://www.adams12.org/' },
      { label: 'RTD B Line', url: 'https://www.rtd-denver.com/' },
    ],
    faq: [
      {
        q: 'Why is Broomfield its own county?',
        a: 'Because it was split across Adams, Boulder, Jefferson and Weld counties, which made basic services and law enforcement absurdly complicated. Voters approved consolidation and Broomfield became a combined city and county on 15 November 2001 — the newest county in Colorado.',
      },
      {
        q: 'What school district is Broomfield in?',
        a: 'Four of them, depending on address: Boulder Valley, Adams 12 Five Star, Jefferson County and St. Vrain Valley. This is a direct legacy of the four-county split, and it is the single most important thing to verify before buying.',
      },
      {
        q: 'Does Broomfield have a train to Denver?',
        a: 'Yes — the RTD B Line runs from Westminster through Broomfield to Denver Union Station. Service has historically been limited, though RTD moved in 2026 to restore 30-minute peak frequencies.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City and County of Broomfield', url: 'https://www.broomfield.org/' },
    ],
    lede: `Broomfield exists in its current form because being split across four
counties was intolerable. It voted itself into a consolidated city and county in
2001, and it now occupies the most strategically useful ground on the Front
Range: halfway between Denver and Boulder, on the US-36 corridor, with rail at
one end and the Flatiron Flyer down the middle.`,
    money: `Broomfield homes took about **46 days** to sell in June 2026, meaningfully
faster than Boulder County's 64 — a sign of a market with genuine demand from
both directions. Condos and townhomes were down about 3% year over year, a much
milder correction than Boulder's 15%.

Pricing sits between Boulder County and the Adams County figure of $520,000,
which is exactly what its geography implies. The Interlocken and Anthem areas
carry the newer, larger stock; the original 1960s Broomfield core is the value.`,
    sections: `## Where Broomfield actually is

Straddling the US-36 corridor between Denver and Boulder, about twenty minutes
from Boulder and thirty from downtown Denver. It is one of only two consolidated
city-counties in Colorado, the other being Denver.

## The four-county problem it solved

Before 2001, Broomfield's city limits sprawled across Adams, Boulder, Jefferson
and Weld counties. A resident's county sheriff, court, assessor and elections
office depended on which part of town they lived in. Voters approved
consolidation, and on 15 November 2001 Broomfield became Colorado's 64th and
newest county.

The school districts did not consolidate. Broomfield still contains four of
them, and the boundaries are not intuitive. **Verify the assigned school for the
specific address** — this is the mistake we see most often here.

## The corporate base

Vail Resorts and Crocs are both headquartered here, and the Interlocken business
park has been a significant office and tech cluster since the 1990s. That means
Broomfield is a job centre in its own right, not purely a bedroom community —
unusual for a town in this position.

## The neighbourhoods

**Original Broomfield** is the 1950s–70s core near the old town, the least
expensive and most conventional part of the city.

**Interlocken and Flatiron** wrap the business park and the former Flatiron
Crossing mall area, denser and newer.

**Anthem** in the north is the large master-planned community, mostly
post-2000, with the newest stock and Adams 12 or St. Vrain schools.

**Broadlands and The Ridge** sit west, with the best Flatirons views and higher
prices to match.

## Who Broomfield is right for

Households split between Denver and Boulder jobs — this is the single best
address on the Front Range for that problem. Also anyone who wants rail access
without Denver prices, and families who verify their school district before
signing.

It is a weaker fit if you want a walkable historic downtown. Broomfield does not
really have one; for that, look at [Louisville](/places/louisville/) or
[Longmont](/places/longmont/).`,
  },

  // ------------------------------------------------------------ Thornton
  {
    slug: 'thornton',
    priceLadder: [
      { label: 'Denver metro', value: 650000 },
      { label: 'Arapahoe County', value: 590000 },
      { label: 'Adams County (incl. Thornton)', value: 520000, self: true },
    ],
    name: 'Thornton',
    region: 'north-metro',
    county: 'Adams County',
    featured: true,
    title: 'Thornton, Colorado — the complete guide to living here',
    summary:
      'Colorado’s sixth-largest city and the north metro’s workhorse: postwar ranches, new subdivisions, and the N Line commuter train to downtown Denver.',
    answer:
      'Thornton is an Adams County city of about 141,867, the sixth-largest in Colorado, running north from Denver along I-25. It is served by the RTD N Line commuter rail and Adams 12 Five Star Schools, and sits at the Adams County median of $520,000 as of June 2026.',
    tags: ['thornton', 'north-metro', 'adams-county', 'commuter-rail', 'value'],
    geo: { lat: 39.868, lng: -104.9719 },
    stats: [
      'county median - $520K',
      'population - 141,867',
      'elevation - 5,351 ft',
      'N Line rail to Denver',
    ],
    civic: {
      population: 141867,
      elevation: 5351,
      incorporated: 1956,
      schoolDistricts: ['Adams 12 Five Star Schools', 'School District 27J (northern portion)'],
      employers: [
        'Denver Health North',
        'Amazon fulfilment',
        'City of Thornton',
        'Retail and logistics corridor',
      ],
      transit: [
        'RTD N Line commuter rail — Thornton Crossroads, Original Thornton and Eastlake stations',
      ],
      drive: { denver: 25, boulder: 35, dia: 30 },
      median: 520000,
      medianBasis: 'Adams County, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Thornton', url: 'https://www.thorntonco.gov/' },
      { label: 'Adams 12 Five Star Schools', url: 'https://www.adams12.org/' },
      {
        label: 'RTD N Line',
        url: 'https://www.rtd-denver.com/about-rtd/projects/fastracks/n-line',
      },
    ],
    faq: [
      {
        q: 'Does Thornton have a train to Denver?',
        a: 'Yes. The RTD N Line runs from Denver Union Station through Commerce City and Northglenn to Thornton, with stations at Thornton Crossroads/104th, Original Thornton/88th and Eastlake/124th. The line was built as the first 13 miles of a planned 18.5-mile route.',
      },
      {
        q: 'Is Thornton a good value in the Denver metro?',
        a: 'It is one of the better ones. Adams County’s June 2026 single-family median was $520,000 against $650,000 for the seven-county metro — and Thornton offers rail access, which most similarly priced areas do not.',
      },
      {
        q: 'What school district serves Thornton?',
        a: 'Most of the city is Adams 12 Five Star Schools; the far northern portion falls in School District 27J. Confirm by address.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Thornton', url: 'https://www.thorntonco.gov/' },
    ],
    lede: `Thornton is the north metro's workhorse — Colorado's sixth-largest city,
built mostly since 1955, running fifteen miles north from Denver along I-25.
Nobody writes travel features about it. It also has a commuter train to Union
Station and a median about $130,000 below the metro figure, which is a
combination almost nowhere else on the Front Range offers.`,
    money: `Adams County's June 2026 single-family median was **$520,000**, against
$650,000 for the seven-county Denver metro — a $130,000 discount for being on
the north side. Days on market across the Aurora/Adams/Arapahoe group averaged
36, and prices moved within about 1% year over year.

The rail access is the part the price does not yet reflect. Homes within
walking distance of the N Line stations are, in our view, the most
underappreciated proposition in the metro.`,
    sections: `## Where Thornton actually is

Immediately north of Denver along I-25, running from about 84th Avenue up to
144th, at 5,351 feet. Downtown Denver is twenty-five minutes; DIA about thirty.

## The three Thorntons

**South Thornton**, roughly 84th to 104th, is the original city: 1950s–70s
ranches on real lots, the cheapest detached housing in the metro's north side,
and the closest to the N Line's southern stations.

**Central Thornton**, 104th to 128th, is 1980s–2000s subdivision growth around
the Thornton Parkway and Washington Street corridors.

**North Thornton**, above 128th toward 144th, is the newest — post-2005 master
planned neighbourhoods, larger houses, HOAs, and the Eastlake N Line station.

## The N Line

Opened in 2020, the N Line runs from Denver Union Station through Commerce City
and Northglenn into Thornton. It was built as the first 13 miles of a planned
18.5-mile route; the remaining segment north to State Highway 7 has not been
built.

For a buyer, the practical question is walkability to a station. Thornton has
three, and the difference between a ten-minute walk and a ten-minute drive to
one is the difference between using the train and not.

## The water fight

Thornton has spent decades and hundreds of millions acquiring water rights in
Larimer County and trying to build a pipeline south — a project that has been
litigated, denied and revised repeatedly. It is the defining long-term policy
issue for the city and worth understanding if you are buying here for the long
run.

## Who Thornton is right for

Commuters who want rail, first-time buyers who want a detached house with a
yard under the metro median, and families using Adams 12. It is one of the
strongest value propositions in the metro.

It is a weaker fit if you want character housing or walkable retail — Thornton
is a postwar and modern suburb and does not pretend otherwise.`,
  },

  // ------------------------------------------------------------ Westminster
  {
    slug: 'westminster',
    name: 'Westminster',
    region: 'north-metro',
    county: 'Adams & Jefferson Counties',
    title: 'Westminster, Colorado — the complete guide to living here',
    summary:
      'Nobody is romantic about it and everybody who moves there stays. Brick ranches, a lake, rail to Denver, and the 36 corridor when you need Boulder by nine.',
    answer:
      'Westminster is a city of about 116,317 straddling the Adams–Jefferson county line north-west of Denver. Its advantage is dual access — roughly 25 minutes to downtown Denver, direct US-36 access to Boulder, and an RTD B Line station — with prices near the Adams County median of $520,000.',
    tags: ['westminster', 'north-metro', 'adams-county', 'jefferson-county', 'commute'],
    geo: { lat: 39.8367, lng: -105.0372 },
    stats: [
      'population - 116,317',
      'elevation - 5,384 ft',
      'commute to Denver - 25 min',
      'commute to Boulder - 27 min',
    ],
    civic: {
      population: 116317,
      elevation: 5384,
      incorporated: 1911,
      schoolDistricts: [
        'Adams 12 Five Star Schools',
        'Westminster Public Schools',
        'Jefferson County Public Schools',
      ],
      employers: ['Ball Corporation', 'St. Anthony North Hospital', 'City of Westminster'],
      transit: [
        'RTD B Line commuter rail at Westminster Station',
        'RTD Flatiron Flyer BRT on US-36',
      ],
      drive: { denver: 25, boulder: 27, dia: 35 },
      median: 520000,
      medianBasis: 'Adams County, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Westminster', url: 'https://www.cityofwestminster.us/' },
      { label: 'Adams 12 Five Star Schools', url: 'https://www.adams12.org/' },
      { label: 'Westminster Public Schools', url: 'https://www.westminsterpublicschools.org/' },
    ],
    faq: [
      {
        q: 'Is Westminster in Denver or Boulder County?',
        a: 'Neither. It straddles Adams and Jefferson counties, which is why property tax rates vary street to street. Check the county before you check the comps.',
      },
      {
        q: 'Does Westminster have rail service?',
        a: 'Yes — Westminster Station on the RTD B Line, with service to Denver Union Station. RTD moved in 2026 to restore 30-minute peak-hour frequencies after a period of hourly service.',
      },
      {
        q: 'Which school district is Westminster in?',
        a: 'Three of them: Adams 12 Five Star, Westminster Public Schools, and Jefferson County. They perform differently and the boundaries do not follow the city limits, so verify by address.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Westminster', url: 'https://www.cityofwestminster.us/' },
    ],
    lede: `Westminster is the city people move to when they need to be able to reach
both Denver and Boulder without committing to either. That sounds like a
compromise and mostly is not — it has brick ranches on real lots, a large
regional park, a commuter rail station, and one of the shortest combined commute
profiles on the Front Range.`,
    money: `Adams County's June 2026 single-family median was **$520,000**, and
Westminster tracks close to it, with the Jefferson County side generally
pricing higher. Days on market across the Adams/Arapahoe/Aurora group averaged
36 — a functioning, unhurried market.

The tax quirk is real money. Westminster sits across two counties with different
mill levies, so two comparable houses four blocks apart can carry meaningfully
different annual bills. Check the parcel, not the city.`,
    sections: `## Where Westminster actually is

North-west of Denver between US-36 and I-25, straddling the Adams–Jefferson
line at 5,384 feet. Downtown Denver is about twenty-five minutes; Boulder about
twenty-seven on US-36.

## The dual-commute advantage

This is the whole argument for Westminster. Very few Front Range addresses put
both downtown Denver and Boulder inside half an hour. Westminster does, and it
adds a B Line rail station and Flatiron Flyer BRT stops on top.

For a two-income household with one job in each city, this and
[Broomfield](/places/broomfield/) are the short list.

## The old mall, and what replaced it

Westminster spent years redeveloping the site of the demolished Westminster Mall
into Downtown Westminster — a new mixed-use city centre that is still filling
in. It is the city's attempt to build the walkable core it never had, and
whether it succeeds is still an open question.

## Standley Lake

The city's large reservoir and regional park on the western side, with trails,
a heron rookery and genuine open space. It is the amenity that makes west
Westminster distinctly more pleasant than its price suggests.

## The neighbourhoods

**South Westminster**, near the B Line station and 72nd Avenue, is the oldest
and least expensive — 1950s–60s stock, and the part of the city undergoing the
most change.

**Central Westminster** around 88th and Sheridan is the 1970s–80s core: brick
ranches, real garages, big lots.

**West Westminster** toward Standley Lake and the Jeffco line has newer stock,
better views and higher prices.

**North Westminster** above 120th blends into the newer Adams County growth
around Interlocken and Broomfield.

## Who Westminster is right for

Two-city commuters, buyers who want a detached 1970s house with a garage under
the metro median, and anyone who values a big park over a trendy main street. We
recommend it constantly and it is rarely anyone's first idea.

It is a weaker fit if school district consistency matters and you do not want to
research boundaries, because Westminster's three districts differ substantially.`,
  },

  // ------------------------------------------------------------ Northglenn
  {
    slug: 'northglenn',
    name: 'Northglenn',
    region: 'north-metro',
    county: 'Adams County',
    title: 'Northglenn, Colorado — the complete guide to living here',
    summary:
      'A compact postwar suburb built as a planned community in the 1950s, now one of the most affordable rail-served addresses in the Denver metro.',
    answer:
      'Northglenn is an Adams County city of about 38,131 immediately north of Denver, originally developed in the 1950s as a planned community. It is among the most affordable rail-served suburbs in the metro, with an RTD N Line station and Adams 12 Five Star Schools.',
    tags: ['northglenn', 'north-metro', 'adams-county', 'affordable', 'commuter-rail'],
    geo: { lat: 39.8961, lng: -104.9811 },
    stats: [
      'population - 38,131',
      'county median - $520K',
      'N Line rail',
      'commute to Denver - 22 min',
    ],
    civic: {
      population: 38131,
      incorporated: 1969,
      schoolDistricts: ['Adams 12 Five Star Schools'],
      transit: ['RTD N Line commuter rail at Northglenn/112th station'],
      drive: { denver: 22, boulder: 35, dia: 30 },
      median: 520000,
      medianBasis: 'Adams County, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Northglenn', url: 'https://www.northglenn.org/' },
      { label: 'Adams 12 Five Star Schools', url: 'https://www.adams12.org/' },
    ],
    faq: [
      {
        q: 'Is Northglenn a good first-time buyer market?',
        a: 'It is one of the better ones in the metro — small postwar houses on real lots, below the Adams County median, with a commuter rail station. The stock is dated, which is precisely why the prices work.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Northglenn', url: 'https://www.northglenn.org/' },
    ],
    lede: `Northglenn was built in the 1950s as a planned community and marketed as a
model postwar suburb. It is small, dense by suburban standards, and one of the
last places in the Denver metro where a first-time buyer can get a detached
house near a train.`,
    money: `Northglenn typically prices below the Adams County median of $520,000. The
housing is predominantly 1950s–70s: small square footage, real lots, and a lot
of houses that have never been updated. That is the opportunity and the caveat —
budget for the kitchen and check the sewer line, because clay laterals of that
era are at the end of their lives.`,
    sections: `## Where Northglenn actually is

Directly north of Denver between Thornton and Federal Heights, west of I-25.
Downtown Denver is roughly twenty-two minutes by car and served by the N Line
at the 112th Avenue station.

## What you are buying

Compact postwar housing, mostly ranches and split-levels, on lots that are
generous relative to anything built after 1990. The city is only about seven
square miles, which makes it walkable in a way its neighbours are not.

## Who Northglenn is right for

First-time buyers, investors looking for workable rent-to-price ratios inside
the metro, and commuters who want the N Line. It is a weaker fit if you want new
construction or a large house — very little of either exists here.`,
  },

  // ------------------------------------------------------------ Brighton
  {
    slug: 'brighton',
    name: 'Brighton',
    region: 'north-metro',
    county: 'Adams County',
    title: 'Brighton, Colorado — the complete guide to living here',
    summary:
      'The Adams County seat, still visibly a farm town at its edges, and one of the last places in the metro where new detached housing stays under the median.',
    answer:
      'Brighton is the Adams County seat, population about 40,083, on the South Platte north-east of Denver. It retains an agricultural character alongside rapid subdivision growth, is served by School District 27J, and offers newer detached housing below the Denver metro median.',
    tags: ['brighton', 'north-metro', 'adams-county', 'county-seat', 'agriculture'],
    geo: { lat: 39.9853, lng: -104.8206 },
    stats: [
      'population - 40,083',
      'county median - $520K',
      'Adams County seat',
      'commute to Denver - 35 min',
    ],
    civic: {
      population: 40083,
      incorporated: 1887,
      countySeat: true,
      schoolDistricts: ['School District 27J'],
      employers: ['Adams County government', 'Vestas Towers America', 'Agricultural processing'],
      transit: ['RTD bus; no rail service'],
      drive: { denver: 35, boulder: 45, dia: 25 },
      median: 520000,
      medianBasis: 'Adams County, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Brighton', url: 'https://www.brightonco.gov/' },
      { label: 'School District 27J', url: 'https://www.sd27j.org/' },
      { label: 'Adams County', url: 'https://adcogov.org/' },
    ],
    faq: [
      {
        q: 'Is Brighton a good commute to Denver?',
        a: 'About 35 minutes to downtown, and notably only about 25 to DIA, which makes it popular with airline and airport employees. There is no rail service.',
      },
      {
        q: 'What school district is Brighton in?',
        a: 'School District 27J, which also covers Commerce City’s northern reaches and much of the surrounding area. It moved to a four-day school week in 2018 after funding shortfalls — a fact worth understanding if you have young children.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Brighton', url: 'https://www.brightonco.gov/' },
    ],
    lede: `Brighton is the Adams County seat and still, at its edges, a farm town — sugar
beets and vegetables on the South Platte bottomland, with subdivisions advancing
across it. It is about twenty-five minutes from DIA, which is why a lot of
airport and airline workers live here.`,
    money: `Adams County's June 2026 single-family median was **$520,000**, and Brighton
offers some of the newest detached construction available at or below it. Much
of the growth is in master-planned areas on the city's south and west sides.

Check for metropolitan district mill levies on newer subdivisions — they are
common here and materially change the tax bill.`,
    sections: `## Where Brighton actually is

North-east of Denver on the South Platte River, at the junction of US-85 and
I-76. DIA is twenty-five minutes; downtown Denver about thirty-five.

## The four-day school week

School District 27J moved to a four-day week in 2018 following repeated failed
mill levy attempts. Schools are closed most Mondays. For families with young
children this is a significant logistical fact, and it is one of the most
common surprises for buyers moving into the district.

## Who Brighton is right for

Airport and airline workers, buyers who want new detached construction under the
metro median, and anyone who likes the idea of a county seat with a real
courthouse square. It is a weaker fit for daily downtown Denver commuters, and
families should look hard at the four-day week before committing.`,
  },

  // ------------------------------------------------------------ Commerce City
  {
    slug: 'commerce-city',
    name: 'Commerce City',
    region: 'north-metro',
    county: 'Adams County',
    title: 'Commerce City, Colorado — the complete guide to living here',
    summary:
      'An industrial city with a refinery at one end and fast-growing master-planned neighbourhoods at the other, split into two halves that barely resemble each other.',
    answer:
      'Commerce City is an Adams County city of about 62,418 north-east of Denver, divided between an older industrial south end near the Suncor refinery and rapidly growing northern master-planned communities. It hosts Dick’s Sporting Goods Park and borders the Rocky Mountain Arsenal National Wildlife Refuge.',
    tags: ['commerce-city', 'north-metro', 'adams-county', 'industrial', 'growth'],
    geo: { lat: 39.8083, lng: -104.9339 },
    stats: [
      'population - 62,418',
      'county median - $520K',
      'N Line rail at 72nd',
      'commute to DIA - 20 min',
    ],
    civic: {
      population: 62418,
      elevation: 5164,
      incorporated: 1952,
      schoolDistricts: ['School District 27J', 'Adams 14'],
      employers: [
        'Suncor Energy refinery',
        'United Airlines operations',
        'Logistics and distribution',
      ],
      transit: ['RTD N Line commuter rail at Commerce City/72nd Avenue'],
      drive: { denver: 20, boulder: 40, dia: 20 },
      median: 520000,
      medianBasis: 'Adams County, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Commerce City', url: 'https://www.c3gov.com/' },
      {
        label: 'Rocky Mountain Arsenal National Wildlife Refuge',
        url: 'https://www.fws.gov/refuge/rocky-mountain-arsenal',
      },
      { label: 'School District 27J', url: 'https://www.sd27j.org/' },
    ],
    faq: [
      {
        q: 'Is air quality a problem in Commerce City?',
        a: 'It is a genuine and well-documented concern in the older southern half, near the Suncor refinery, which has a long record of emissions violations. The northern neighbourhoods are several miles away. If this matters to you — and it should if you have children with asthma — look at the specific location and the state’s monitoring data.',
      },
      {
        q: 'What is the Rocky Mountain Arsenal?',
        a: 'A former chemical weapons manufacturing site, now a 15,000-acre National Wildlife Refuge with bison, deer and one of the metro’s best trail networks. It is a remarkable amenity and the cleanup remains one of the largest in US history.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Commerce City', url: 'https://www.c3gov.com/' },
    ],
    lede: `Commerce City is really two cities. The southern half is the older industrial
one — refineries, rail yards, warehouses, and the housing that grew up around
them. The northern half is twenty-first-century master planning, with new
subdivisions, a soccer stadium and a national wildlife refuge next door.`,
    money: `Adams County's June 2026 median was **$520,000**, and Commerce City spans a
wide range around it — the older south end is among the least expensive housing
in the metro, while the northern master-planned areas price at or above the
county figure.

The refinery is a real variable in value and in liveability. Understand where a
given address sits relative to it.`,
    sections: `## Where Commerce City actually is

North-east of Denver between the South Platte and DIA, wrapping the Rocky
Mountain Arsenal refuge. DIA is twenty minutes; downtown Denver about the same.

## The two halves

**South Commerce City**, roughly below 72nd Avenue, is the historic industrial
city: modest postwar housing, heavy industry, the Suncor refinery, and the
lowest prices in the metro. It also has the N Line station at 72nd.

**North Commerce City** — Reunion, Buffalo Run, the Villages at Buffalo Run — is
post-2000 master-planned suburbia with new schools, golf and larger houses. It
feels like Brighton or north Aurora, not like the south end.

## The Arsenal

The Rocky Mountain Arsenal manufactured chemical weapons from 1942 and later
hosted pesticide production. Its cleanup is among the largest environmental
remediation projects in US history, and the site is now a 15,000-acre National
Wildlife Refuge with bison, prairie dogs, deer, and an excellent trail and
wildlife-drive network. It is genuinely one of the best open space amenities in
the metro, and it sits directly against the city.

## Who Commerce City is right for

Value buyers and investors in the south, families wanting new construction and
DIA access in the north. Do the air-quality homework honestly, particularly in
the south.`,
  },

  // ------------------------------------------------------------ Federal Heights
  {
    slug: 'federal-heights',
    name: 'Federal Heights',
    region: 'north-metro',
    county: 'Adams County',
    title: 'Federal Heights, Colorado — the complete guide to living here',
    summary:
      'A tiny, dense Adams County city wedged between Westminster and Thornton, with the lowest entry prices in the north metro.',
    answer:
      'Federal Heights is an Adams County city of about 14,382 covering less than two square miles between Westminster and Thornton. It has a high share of multifamily and manufactured housing and offers among the lowest entry prices in the Denver metro.',
    tags: ['federal-heights', 'north-metro', 'adams-county', 'affordable'],
    geo: { lat: 39.8653, lng: -105.0161 },
    stats: [
      'population - 14,382',
      'county median - $520K',
      'under 2 sq mi',
      'commute to Denver - 22 min',
    ],
    civic: {
      population: 14382,
      incorporated: 1940,
      schoolDistricts: ['Adams 12 Five Star Schools', 'Westminster Public Schools'],
      transit: ['RTD bus on Federal Boulevard and 92nd Avenue'],
      drive: { denver: 22, boulder: 35, dia: 35 },
    },
    links: [
      { label: 'City of Federal Heights', url: 'https://www.fedheights.org/' },
      { label: 'Adams 12 Five Star Schools', url: 'https://www.adams12.org/' },
    ],
    faq: [
      {
        q: 'Is Federal Heights a good place to buy?',
        a: 'For price, yes — it is among the least expensive addresses in the metro. The stock skews heavily to condos, townhomes and manufactured housing, so detached single-family inventory is thin.',
      },
    ],
    sources: [census, { label: 'City of Federal Heights', url: 'https://www.fedheights.org/' }],
    lede: `Federal Heights is under two square miles, sandwiched between Westminster and
Thornton, and it contains a disproportionate share of the north metro's
lower-cost housing. It is not scenic and it is not trying to be.`,
    money: `Among the lowest entry prices in the Denver metro. The inventory skews to
attached and manufactured housing; detached single-family is limited. For
investors the rent-to-price ratios are among the better ones inside the metro
boundary.`,
    sections: `## Where Federal Heights actually is

Between Westminster and Thornton along Federal Boulevard, about twenty-two
minutes from downtown Denver.

## Who Federal Heights is right for

Buyers and investors whose primary constraint is price and who want to stay
inside the metro. It is a weaker fit for anyone wanting a detached house with a
yard — for that at a similar price, look at [Northglenn](/places/northglenn/) or
south [Thornton](/places/thornton/).`,
  },

  // ------------------------------------------------------------ Firestone
  {
    slug: 'firestone',
    name: 'Firestone',
    region: 'north-metro',
    county: 'Weld County',
    title: 'Firestone, Colorado — the complete guide to living here',
    summary:
      'One of the Carbon Valley towns — a former coal community turned fast-growing commuter suburb on the I-25 corridor between Denver and Longmont.',
    answer:
      'Firestone is a Weld County town of about 16,381 in the Carbon Valley, north of Denver near I-25. Formerly a coal-mining community, it has grown rapidly with new subdivision construction and is served by the St. Vrain Valley School District.',
    tags: ['firestone', 'north-metro', 'weld-county', 'carbon-valley', 'growth'],
    geo: { lat: 40.1119, lng: -104.9364 },
    stats: [
      'population - 16,381',
      'county median - $499K',
      'incorporated - 1908',
      'commute to Denver - 35 min',
    ],
    civic: {
      population: 16381,
      incorporated: 1908,
      schoolDistricts: ['St. Vrain Valley School District'],
      transit: ['I-25 corridor; no fixed-route transit'],
      drive: { denver: 35, boulder: 30, dia: 40 },
      median: 499000,
      medianBasis: 'Weld County, June 2026 (CAR)',
    },
    links: [
      { label: 'Town of Firestone', url: 'https://www.firestoneco.gov/' },
      { label: 'St. Vrain Valley School District', url: 'https://www.svvsd.org/' },
    ],
    faq: [
      {
        q: 'What is the Carbon Valley?',
        a: 'The local name for the cluster of former coal-mining towns in southern Weld County — Firestone, Frederick and Dacono — which now function together as a single fast-growing commuter area.',
      },
      {
        q: 'Is there oil and gas activity in Firestone?',
        a: 'Yes, extensively. This is the Wattenberg Field. A 2017 house explosion in Firestone caused by a severed flowline led to statewide changes in flowline regulation. Check the state permit map for any address.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'Town of Firestone', url: 'https://www.firestoneco.gov/' },
    ],
    lede: `Firestone is one of the three Carbon Valley towns — a coal community that
spent most of the twentieth century small and has spent the last twenty years
growing very fast, on the strength of I-25 access and Weld County land prices.`,
    money: `Weld County's June 2026 single-family median was **$499,000**. Firestone's
stock is overwhelmingly post-2000, and metropolitan district levies are common —
check the total mill levy for the specific subdivision, not the town average.`,
    sections: `## Where Firestone actually is

Southern Weld County near I-25, between Longmont and the north metro, alongside
[Frederick](/places/frederick/) and [Dacono](/places/dacono/). Denver is
thirty-five minutes; Boulder about thirty.

## Oil and gas, and 2017

Firestone sits in the Wattenberg Field. In April 2017 a house in Firestone
exploded, killing two people, after an abandoned flowline leaked gas into the
home's foundation. The incident prompted statewide flowline inspection and
mapping requirements.

This is not a reason to avoid the Carbon Valley — it is a reason to check the
Colorado Energy and Carbon Management Commission map for any address, and to ask
directly about nearby wells and lines.

## Who Firestone is right for

Commuters who want newer housing at Weld County prices with St. Vrain schools,
and buyers who want a garage and a yard under the metro median. It is a weaker
fit if you want walkability or established trees.`,
  },

  // ------------------------------------------------------------ Frederick
  {
    slug: 'frederick',
    name: 'Frederick',
    region: 'north-metro',
    county: 'Weld County',
    title: 'Frederick, Colorado — the complete guide to living here',
    summary:
      'The Carbon Valley town that kept a genuine old main street, sitting between Firestone and the I-25 corridor.',
    answer:
      'Frederick is a Weld County town of about 14,513 in the Carbon Valley alongside Firestone and Dacono. A former coal town, it has retained a historic core on Fifth Street while growing substantially with new construction, and is served by the St. Vrain Valley School District.',
    tags: ['frederick', 'north-metro', 'weld-county', 'carbon-valley', 'main-street'],
    geo: { lat: 40.0989, lng: -104.9369 },
    stats: [
      'population - 14,513',
      'county median - $499K',
      'incorporated - 1907',
      'commute to Denver - 35 min',
    ],
    civic: {
      population: 14513,
      incorporated: 1907,
      schoolDistricts: ['St. Vrain Valley School District'],
      transit: ['I-25 corridor; no fixed-route transit'],
      drive: { denver: 35, boulder: 30, dia: 40 },
      median: 499000,
      medianBasis: 'Weld County, June 2026 (CAR)',
    },
    links: [
      { label: 'Town of Frederick', url: 'https://www.frederickco.gov/' },
      { label: 'St. Vrain Valley School District', url: 'https://www.svvsd.org/' },
    ],
    faq: [
      {
        q: 'What is the difference between Frederick and Firestone?',
        a: 'They are adjacent Carbon Valley towns with a shared school district and a largely shared housing market. Frederick has kept more of a historic main street; Firestone is more purely new subdivision. Most residents treat them as one place.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'Town of Frederick', url: 'https://www.frederickco.gov/' },
    ],
    lede: `Frederick is Firestone's twin — same coal history, same school district, same
growth curve — with the meaningful difference that it kept a real historic main
street along Fifth Street, and has invested in it.`,
    money: `Weld County's June 2026 median was **$499,000**. Frederick's older core holds
the character housing; everything else is post-2000. Metropolitan district
levies are common in the newer subdivisions.`,
    sections: `## Where Frederick actually is

Southern Weld County in the Carbon Valley, adjoining [Firestone](/places/firestone/)
and near [Dacono](/places/dacono/), close to I-25. Denver is about thirty-five
minutes.

## The main street

Frederick's Fifth Street historic district and Crist Park give it a civic centre
its neighbours lack, and the town has consistently invested in events and
streetscape there. It is a small thing that makes a real difference to how the
place feels.

## Who Frederick is right for

The same buyer as Firestone, with a preference for somewhere with a centre.
Oil and gas due diligence applies here exactly as it does across the Carbon
Valley.`,
  },

  // ------------------------------------------------------------ Dacono
  {
    slug: 'dacono',
    name: 'Dacono',
    region: 'north-metro',
    county: 'Weld County',
    title: 'Dacono, Colorado — the complete guide to living here',
    summary:
      'The smallest of the three Carbon Valley towns, and the cheapest way into the I-25 corridor north of Denver.',
    answer:
      'Dacono is a Weld County town of about 6,297, the smallest of the three Carbon Valley communities alongside Firestone and Frederick. It offers among the lowest housing prices on the northern I-25 corridor and is served by the St. Vrain Valley School District.',
    tags: ['dacono', 'north-metro', 'weld-county', 'carbon-valley', 'affordable'],
    geo: { lat: 40.0819, lng: -104.9391 },
    stats: [
      'population - 6,297',
      'county median - $499K',
      'incorporated - 1908',
      'commute to Denver - 33 min',
    ],
    civic: {
      population: 6297,
      incorporated: 1908,
      schoolDistricts: ['St. Vrain Valley School District'],
      transit: ['I-25 corridor; no fixed-route transit'],
      drive: { denver: 33, boulder: 30, dia: 38 },
    },
    links: [
      { label: 'City of Dacono', url: 'https://www.cityofdacono.com/' },
      { label: 'St. Vrain Valley School District', url: 'https://www.svvsd.org/' },
    ],
    faq: [
      {
        q: 'Is Dacono cheaper than Firestone and Frederick?',
        a: 'Generally yes. It is the smallest and least developed of the three Carbon Valley towns, with correspondingly lower prices and fewer amenities.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Dacono', url: 'https://www.cityofdacono.com/' },
    ],
    lede: `Dacono is the third and smallest Carbon Valley town, closest to I-25 and
cheapest of the three. It has less of everything than Firestone and Frederick,
including price.`,
    money: `Below the Weld County median of $499,000 for comparable stock. This is the
value entry point for the northern I-25 corridor with St. Vrain schools.`,
    sections: `## Where Dacono actually is

Right on I-25 in southern Weld County, immediately south of
[Firestone](/places/firestone/). Denver is about thirty-three minutes — the
shortest Denver commute of the three Carbon Valley towns.

## Who Dacono is right for

Price-first buyers who want St. Vrain schools and I-25 access. Amenity is
minimal; most errands happen in Firestone, Frederick or Longmont.`,
  },

  // ------------------------------------------------------------ Fort Lupton
  {
    slug: 'fort-lupton',
    name: 'Fort Lupton',
    region: 'north-metro',
    county: 'Weld County',
    title: 'Fort Lupton, Colorado — the complete guide to living here',
    summary:
      'An old South Platte farm town on US-85, at the centre of Weld County’s oil and gas country and among the least expensive towns in the metro’s orbit.',
    answer:
      'Fort Lupton is a Weld County city of about 7,955 on the South Platte River along US-85, north-east of Denver. It remains agricultural and energy-oriented in character and is among the least expensive incorporated towns within commuting distance of the Denver metro.',
    tags: ['fort-lupton', 'north-metro', 'weld-county', 'affordable', 'agriculture'],
    geo: { lat: 40.0847, lng: -104.8136 },
    stats: [
      'population - 7,955',
      'county median - $499K',
      'incorporated - 1890',
      'commute to Denver - 35 min',
    ],
    civic: {
      population: 7955,
      incorporated: 1890,
      schoolDistricts: ['Weld County School District RE-8'],
      employers: ['Oil and gas services', 'Agriculture and food processing'],
      transit: ['US-85 corridor; no fixed-route transit'],
      drive: { denver: 35, boulder: 45, dia: 30 },
    },
    links: [
      { label: 'City of Fort Lupton', url: 'https://fortluptonco.gov/' },
      { label: 'Weld County RE-8 School District', url: 'https://www.weldre8.org/' },
    ],
    faq: [
      {
        q: 'Is Fort Lupton a good value?',
        a: 'It is among the cheapest incorporated towns within 40 minutes of Denver. The trade-offs are limited amenity, a smaller school district, and heavy surrounding oil and gas activity.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Fort Lupton', url: 'https://fortluptonco.gov/' },
    ],
    lede: `Fort Lupton is an old South Platte farm town on US-85 that has become, without
much fuss, one of the cheapest places to buy a house within forty minutes of
Denver. It is surrounded by oil and gas activity and by irrigated farmland, in
roughly equal measure.`,
    money: `Well below the Weld County median of $499,000. The stock is older and
smaller, and inventory is thin. Oil and gas due diligence is essential here —
this is the heart of the Wattenberg Field.`,
    sections: `## Where Fort Lupton actually is

On the South Platte along US-85, north-east of Denver and south of Greeley.
DIA is thirty minutes; downtown Denver about thirty-five.

## Who Fort Lupton is right for

Price-first buyers and investors comfortable with an agricultural and energy
town, and workers in the Weld County oil and gas industry. It is a weaker fit if
you want amenity, walkability, or distance from industrial activity.`,
  },

  // ------------------------------------------------------------ Mead
  {
    slug: 'mead',
    name: 'Mead',
    region: 'north-metro',
    county: 'Weld County',
    title: 'Mead, Colorado — the complete guide to living here',
    summary:
      'A small Weld County town between Longmont and the Carbon Valley, growing steadily while keeping its farm-town scale.',
    answer:
      'Mead is a Weld County town of about 4,781 between Longmont and the Carbon Valley near I-25. It has grown steadily with new subdivision construction while retaining a small-town scale, and is served by the St. Vrain Valley School District.',
    tags: ['mead', 'north-metro', 'weld-county', 'small-town', 'growth'],
    geo: { lat: 40.2331, lng: -104.9994 },
    stats: [
      'population - 4,781',
      'elevation - 5,017 ft',
      'incorporated - 1908',
      'commute to Denver - 40 min',
    ],
    civic: {
      population: 4781,
      elevation: 5017,
      incorporated: 1908,
      area: 12.64,
      schoolDistricts: ['St. Vrain Valley School District'],
      transit: ['I-25 corridor; no fixed-route transit'],
      drive: { denver: 40, boulder: 30, dia: 45 },
    },
    links: [
      { label: 'Town of Mead', url: 'https://www.townofmead.org/' },
      { label: 'St. Vrain Valley School District', url: 'https://www.svvsd.org/' },
    ],
    faq: [
      {
        q: 'Why do people choose Mead over Longmont?',
        a: 'Space and newer housing at a lower price, in the same school district, about fifteen minutes further out. Mead is small enough that it still feels rural at the edges.',
      },
    ],
    sources: [census, SOURCES.car, { label: 'Town of Mead', url: 'https://www.townofmead.org/' }],
    lede: `Mead is a small farm town north-east of Longmont that has added subdivisions
without losing its scale, and it offers St. Vrain schools with more land than
anywhere closer in.`,
    money: `Below the Weld County median of $499,000 for comparable houses, with newer
construction and larger lots than Longmont at the same price. Check for
metropolitan district levies on new subdivisions.`,
    sections: `## Where Mead actually is

Between Longmont and the Carbon Valley, just east of I-25 at CO-66. Boulder is
thirty minutes, Denver about forty.

## Who Mead is right for

Families who want St. Vrain schools, a bigger lot, and newer construction, and
who do not mind driving into Longmont for most things.`,
  },
]
