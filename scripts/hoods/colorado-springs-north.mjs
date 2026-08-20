import { SRC } from './_template.mjs'

const src = [SRC.car, SRC.census]
const CS = { city: 'colorado-springs', cityName: 'Colorado Springs' }

const csCity = { label: 'City of Colorado Springs', url: 'https://coloradosprings.gov/' }
const d20 = { label: 'Academy School District 20', url: 'https://www.asd20.org/' }
const d49 = { label: 'Falcon School District 49', url: 'https://www.d49.org/' }
const d11 = { label: 'Colorado Springs School District 11', url: 'https://www.d11.org/' }
const parks = {
  label: 'Colorado Springs Parks, Recreation and Cultural Services',
  url: 'https://coloradosprings.gov/parks',
}

const SOIL = `**Expansive soils.** El Paso County sits on bentonite-rich clay that
swells when wet and shrinks when dry, and it is the most common structural
problem in the region. Heaved slabs and cracked foundations are frequent enough
that a structural engineer's opinion on any crack is worth the fee.`

const METRO = `**Metropolitan district mill levies.** Most post-2000 development
on this side of the city funds its infrastructure through a metro district, and
that levy sits on top of the base property tax. It is easy to miss on a listing
and it materially changes the monthly cost. Ask for the total levy on the
specific parcel.`

export const csNorth = [
  // ---------------------------------------------------------------- North
  {
    ...CS,
    sector: 'North',
    slug: 'northgate',
    name: 'Northgate',
    title: 'Northgate, Colorado Springs — a neighborhood guide',
    summary:
      'The far north edge of the city by the Air Force Academy’s north gate, with newer housing, D20 schools and the shortest run to Monument.',
    answer:
      'Northgate is a far north Colorado Springs area near the north gate of the US Air Force Academy, developed largely since the 2000s. It is served by Academy School District 20 and offers newer housing with quick I-25 access toward Monument and Denver.',
    tags: ['northgate', 'colorado-springs', 'd20', 'new-construction', 'air-force-academy'],
    bounds: 'Far north Colorado Springs around Northgate Boulevard and I-25',
    housing: ['2000s–present single-family subdivisions', 'Townhomes and apartments'],
    stats: ['Academy District 20', 'Air Force Academy - adjacent', 'to Monument - 10 min'],
    parks: 'Pine Creek and Cottonwood Creek trails, Air Force Academy trails',
    geo: { lat: 38.9944, lng: -104.8028 },
    links: [
      csCity,
      { label: 'United States Air Force Academy', url: 'https://www.usafa.edu/' },
      d20,
    ],
    faq: [
      {
        q: 'Is Northgate close to the Air Force Academy?',
        a: 'Yes — it sits at the Academy’s north gate, which makes it popular with Academy staff, faculty and military families. The Academy grounds also offer public access to some trails and the visitor centre.',
      },
      {
        q: 'Is Northgate a good commute to Denver?',
        a: 'It is the closest Colorado Springs address to Denver, with immediate I-25 access — roughly an hour and ten minutes midday, and considerably more at peak or when the Monument Hill grade is bad in winter.',
      },
    ],
    sources: src,
    lede: `Northgate is the last piece of Colorado Springs before the Palmer Divide. It
sits at the Air Force Academy's north gate, has D20 schools and post-2000
housing, and is the shortest run in the city to Monument and, beyond it, Denver.`,
    sections: `## Where Northgate actually is

Far north Colorado Springs around Northgate Boulevard and I-25, at the Air Force
Academy's north gate, south of [Monument](/places/monument/).

## The Academy

The **United States Air Force Academy** is immediately west, and its presence
shapes the area — staff and faculty housing demand, the visitor centre and
Cadet Chapel, and public trail access on parts of the grounds.

## The commute question

This is the closest Colorado Springs address to Denver. It is still about
seventy miles, and the **Monument Hill grade** over the Palmer Divide is the most
frequently closed stretch of I-25 in winter. Do not treat it as a routine daily
Denver commute.

## The housing

Post-2000 subdivisions, townhomes and apartments in Academy District 20.
Construction continues on the eastern side.`,
    suits: `Air Force Academy staff and military families, and buyers who want new
construction with D20 schools at the northern edge of the city.`,
    check: `${METRO}

**Winter commuting over Monument Hill** if you work north.

**Wind exposure** — the divide is noticeably windier than the city.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'North',
    slug: 'flying-horse',
    name: 'Flying Horse',
    title: 'Flying Horse, Colorado Springs — a neighborhood guide',
    summary:
      'A golf resort community in the north with a club, a lodge and some of the largest new houses in the city.',
    answer:
      'Flying Horse is a master-planned golf community in northern Colorado Springs, built around a Tom Weiskopf-designed course, club and lodge. It contains predominantly large post-2004 houses and is served by Academy School District 20.',
    tags: ['flying-horse', 'colorado-springs', 'golf', 'd20', 'new-construction', 'affluent'],
    bounds: 'North Colorado Springs east of I-25, around Northgate and Highway 83',
    housing: ['2004–present large single-family houses', 'Villas and townhomes'],
    stats: ['golf and club community', 'Academy District 20', 'newer large houses'],
    parks: 'Flying Horse trails, Pine Creek open space',
    geo: { lat: 38.9861, lng: -104.7639 },
    links: [
      csCity,
      { label: 'The Club at Flying Horse', url: 'https://flyinghorseclub.com/' },
      d20,
    ],
    faq: [
      {
        q: 'Do you have to join the club at Flying Horse?',
        a: 'Club membership is separate from home ownership and carries its own cost. Confirm what membership is available, what it costs annually, and whether anything conveys with the property before assuming access.',
      },
      {
        q: 'Is Flying Horse in Academy District 20?',
        a: 'Yes, the community is within Academy School District 20, which is a significant part of its appeal to families.',
      },
    ],
    sources: src,
    lede: `Flying Horse is a golf resort community on the north side — a Weiskopf course,
a lodge and spa, and several hundred of the largest new houses in Colorado
Springs, all inside D20.`,
    sections: `## Where Flying Horse actually is

North Colorado Springs east of I-25 around Northgate Boulevard and Highway 83,
near [Northgate](/neighborhoods/colorado-springs/northgate/).

## The club

The Club at Flying Horse has a Tom Weiskopf-designed course, a lodge, spa and
athletic facilities. Membership is separate from ownership — verify the terms
and the annual cost rather than assuming access comes with the house.

## The housing

2004 onward, and large: substantial single-family houses plus villas and
townhomes at the lower end. Flying Horse North, further out, is a separate and
newer extension.

## The schools

Academy District 20 throughout, which is the region's most sought-after
district.`,
    suits: `Buyers who want a large new house with club amenities and D20 schools, and
golfers.`,
    check: `**Club membership terms and annual cost.**

${METRO}

**HOA covenants**, which are extensive.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'North',
    slug: 'pine-creek',
    name: 'Pine Creek',
    title: 'Pine Creek, Colorado Springs — a neighborhood guide',
    summary:
      'An established north-side golf community with mature landscaping, D20 schools and a genuine trail network.',
    answer:
      'Pine Creek is a north Colorado Springs master-planned community developed from the 1990s around a golf course, with mature landscaping and Academy School District 20 schools. It is more established than the newer north-side communities around it.',
    tags: ['pine-creek', 'colorado-springs', 'd20', 'golf', 'family', 'trails'],
    bounds: 'North Colorado Springs east of I-25 around Union Boulevard and Briargate Parkway',
    housing: ['1990s–2000s single-family houses', 'Some townhomes'],
    stats: ['Academy District 20', 'golf course community', 'mature landscaping'],
    parks: 'Pine Creek Trail, Cottonwood Creek Trail',
    geo: { lat: 38.9667, lng: -104.7778 },
    links: [
      csCity,
      { label: 'Pine Creek Golf Club', url: 'https://www.pinecreekgc.com/' },
      d20,
      parks,
    ],
    faq: [
      {
        q: 'How is Pine Creek different from the newer north-side communities?',
        a: 'It is older — largely 1990s and 2000s — so the landscaping is mature and the trees are established, which most of the newer north-side subdivisions do not yet have.',
      },
    ],
    sources: src,
    lede: `Pine Creek is the north side with twenty-five years of growth on it. Same D20
schools and golf-community layout as the newer developments further out, but
with trees that have actually filled in.`,
    sections: `## Where Pine Creek actually is

North Colorado Springs east of I-25 around Union Boulevard and Briargate
Parkway, adjoining [Briargate](/neighborhoods/colorado-springs/briargate/).

## The trails

The **Pine Creek** and **Cottonwood Creek** trails run through the area and connect
into the wider north-side network — one of the better-connected trail systems in
the city.

## The housing

1990s–2000s single-family houses with some townhome product, on standard
suburban lots. The maturity of the landscaping is the main differentiator from
Cordera and Wolf Ranch further out.`,
    suits: `Families who want D20 schools and an established neighborhood rather than a
brand-new one.`,
    check: `${METRO}

**Roof age and hail history** — the north side takes hail hard.

**1990s systems** approaching replacement.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'North',
    slug: 'cordera',
    name: 'Cordera',
    title: 'Cordera, Colorado Springs — a neighborhood guide',
    summary:
      'A 2000s master-planned north-side community built around a community centre, pool and an unusually good trail network.',
    answer:
      'Cordera is a master-planned community in northern Colorado Springs developed from the mid-2000s, centred on a community centre with a pool and extensive trails. It is served by Academy School District 20.',
    tags: ['cordera', 'colorado-springs', 'd20', 'master-planned', 'family', 'new-construction'],
    bounds: 'North Colorado Springs east of Powers Boulevard, around Cordera Crest Avenue',
    housing: ['2005–present single-family houses', 'Some patio homes'],
    stats: ['Academy District 20', 'community centre and pool', 'trail network'],
    parks: 'Cordera trails, Cottonwood Creek Trail',
    geo: { lat: 38.9722, lng: -104.7361 },
    links: [csCity, d20, parks],
    faq: [
      {
        q: 'What does the Cordera HOA include?',
        a: 'The community centre with a pool and fitness facilities, extensive trails and parks, and community events. Confirm the current fee and what it covers, and check whether a metro district levy applies on top.',
      },
    ],
    sources: src,
    lede: `Cordera is a 2000s north-side master plan built around a community centre and
pool, with more trail and park than most developments of its era and D20 schools
throughout.`,
    sections: `## Where Cordera actually is

North Colorado Springs east of Powers Boulevard around Cordera Crest Avenue,
north of [Briargate](/neighborhoods/colorado-springs/briargate/).

## The community centre

The Cordera community centre with its pool, fitness facilities and event
programme is the neighborhood's anchor and a large part of what the HOA fee buys.

## The housing

Mid-2000s onward: single-family houses and some patio homes, conventional
suburban product with attached garages.`,
    suits: `Families who want D20 schools, newer housing and an active community
association with real amenities.`,
    check: `**HOA fee plus any metro district levy** — establish the combined figure.

${METRO}

**Build phase**, since construction spans nearly twenty years.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'North',
    slug: 'wolf-ranch',
    name: 'Wolf Ranch',
    title: 'Wolf Ranch, Colorado Springs — a neighborhood guide',
    summary:
      'One of the newest large north-side communities, built around a lake and a trail system, still under construction.',
    answer:
      'Wolf Ranch is a large master-planned community in northern Colorado Springs, developed from the late 2000s around a central lake and trail network. It is served by Academy School District 20 and contains some of the newest housing in the city.',
    tags: ['wolf-ranch', 'colorado-springs', 'd20', 'new-construction', 'master-planned', 'family'],
    bounds: 'North Colorado Springs east of Powers Boulevard around Research Parkway',
    housing: ['2008–present single-family houses', 'Townhomes and paired homes'],
    stats: ['Academy District 20', 'lake and trails', 'still building'],
    parks: 'Wolf Lake, Cottonwood Creek Trail',
    geo: { lat: 38.9806, lng: -104.725 },
    links: [csCity, d20, parks],
    faq: [
      {
        q: 'Is Wolf Ranch still being built?',
        a: 'Yes — construction has continued in phases since the late 2000s. Buying in an actively building community means living with construction traffic and means later phases may differ from earlier ones in layout and price.',
      },
    ],
    sources: src,
    lede: `Wolf Ranch is among the newest of the big north-side communities — a lake, a
trail system, D20 schools, and construction still going on around the edges.`,
    sections: `## Where Wolf Ranch actually is

North Colorado Springs east of Powers Boulevard around Research Parkway, near
[Cordera](/neighborhoods/colorado-springs/cordera/).

## The lake and trails

Wolf Lake sits at the centre with trails around it, connecting into the
Cottonwood Creek system. It is the community's main amenity.

## Buying in an active build

Later phases are still going up. That means construction traffic and noise, and
it means the neighborhood you buy into is not the finished one. Ask what is
platted around a given lot and when it is scheduled.`,
    suits: `Families who want the newest available housing with D20 schools and are
comfortable living alongside ongoing construction.`,
    check: `**What is platted next to the lot** and the build schedule.

${METRO}

**Builder warranty terms** on new construction.

${SOIL}`,
  },

  // ---------------------------------------------------------------- Northeast
  {
    ...CS,
    sector: 'Northeast',
    slug: 'stetson-hills',
    name: 'Stetson Hills',
    title: 'Stetson Hills, Colorado Springs — a neighborhood guide',
    summary:
      'A large 1990s and 2000s north-east community, popular with military families for its price and its run to Peterson.',
    answer:
      'Stetson Hills is a large north-east Colorado Springs community developed from the 1990s, with predominantly single-family suburban housing. It is served largely by Falcon School District 49 and is popular with military families for its affordability and access to Peterson Space Force Base.',
    tags: ['stetson-hills', 'colorado-springs', 'd49', 'military', 'value', 'family'],
    bounds: 'North-east Colorado Springs around Stetson Hills Boulevard and Peterson Road',
    housing: ['1990s–2000s single-family houses', 'Townhomes and apartments'],
    stats: ['Falcon District 49', 'to Peterson SFB - 15 min', 'value - below city median'],
    parks: 'Sand Creek Trail, John Venezia Park nearby',
    geo: { lat: 38.9139, lng: -104.7167 },
    links: [csCity, d49, parks],
    faq: [
      {
        q: 'Is Stetson Hills good for military families?',
        a: 'It is one of the most common choices — reasonable prices, newer housing than the central city, and a fifteen-minute run to Peterson Space Force Base. Turnover is high, which keeps rental demand steady.',
      },
      {
        q: 'What school district serves Stetson Hills?',
        a: 'Largely Falcon School District 49, though boundaries in north-east Colorado Springs are irregular. Verify the assigned schools for the specific address.',
      },
    ],
    sources: src,
    lede: `Stetson Hills is where a lot of Colorado Springs military families buy their
first house: 1990s and 2000s subdivisions, prices below the city median, and a
short run to Peterson.`,
    sections: `## Where Stetson Hills actually is

North-east Colorado Springs around Stetson Hills Boulevard and Peterson Road,
east of [Briargate](/neighborhoods/colorado-springs/briargate/).

## The military connection

Peterson Space Force Base is about fifteen minutes south-east, and the
neighborhood has a substantial military population. That means high turnover,
steady rental demand, and a market that moves with PCS cycles.

Note the wider context: the **US Space Command headquarters** is relocating from
Peterson to Alabama following a September 2025 decision, affecting roughly 1,400
of about 1,700 positions. Peterson itself and the region's four other
installations continue — see the
[Colorado Springs city guide](/places/colorado-springs/) for the fuller picture.

## The housing

1990s–2000s single-family houses on standard suburban lots, plus townhomes and
apartments. Conventional product, generally priced below the city median.`,
    suits: `Military families, first-time buyers, and investors who want steady rental
demand at a workable entry price.`,
    check: `**School district assignment** — D49 boundaries here are irregular.

**Roof age and hail history** — the east side takes hail hard.

${METRO}

${SOIL}`,
  },

  // ---------------------------------------------------------------- East
  {
    ...CS,
    sector: 'East',
    slug: 'banning-lewis-ranch',
    name: 'Banning Lewis Ranch',
    featured: true,
    title: 'Banning Lewis Ranch, Colorado Springs — a neighborhood guide',
    summary:
      '24,000 acres annexed in 1988 that sat almost empty for thirty years because of the deal that brought it in — and is now the city’s biggest growth frontier.',
    answer:
      'Banning Lewis Ranch is a 24,000-acre area on the eastern edge of Colorado Springs, annexed by the city in 1988. Unusual infrastructure obligations in the original annexation agreement stalled development for decades until the agreement was amended in 2018, and it is now the city’s primary growth area.',
    tags: [
      'banning-lewis-ranch',
      'colorado-springs',
      'new-construction',
      'growth',
      'annexation',
      'd49',
    ],
    bounds: 'Eastern Colorado Springs, east of Marksheffel Road from Woodmen Road to the airport',
    housing: ['2000s–present single-family subdivisions', 'Ongoing phased construction'],
    stats: ['24,000 acres', 'annexed 1988', 'Falcon District 49'],
    parks: 'Community parks and trails within the master plan',
    geo: { lat: 38.8917, lng: -104.6667 },
    links: [
      {
        label: 'Banning Lewis Ranch annexation, City of Colorado Springs',
        url: 'https://coloradosprings.gov/blr',
      },
      csCity,
      d49,
    ],
    faq: [
      {
        q: 'What is Banning Lewis Ranch?',
        a: 'A 24,000-acre area on the eastern edge of Colorado Springs, annexed into the city in 1988 with the expectation it would house up to 175,000 people. The original annexation agreement required developers to build or pay for all infrastructure — roads, drainage, parks, trails, plus land for fire and police stations — which made development uneconomic for decades.',
      },
      {
        q: 'Why did Banning Lewis Ranch take so long to develop?',
        a: 'Two reasons. The 1988 annexation agreement imposed unusually heavy infrastructure obligations to protect taxpayers, and the Savings and Loan crisis hit Colorado Springs hard shortly afterwards — the city became known as a foreclosure capital. Little happened until the agreement was amended in 2018.',
      },
      {
        q: 'Is Banning Lewis Ranch still growing?',
        a: 'Yes, and substantially. Updated land plans reported in 2026 could add several thousand more homes. Anyone buying here should treat the surrounding land as likely to be built on.',
      },
    ],
    sources: src,
    lede: `Colorado Springs annexed 24,000 acres of ranch land on its eastern edge in
1988, expecting to house 175,000 people there. Then almost nothing happened for
thirty years — because of the deal that brought it in, and because the economy
collapsed underneath it. It is now the city's main growth frontier.`,
    sections: `## Where Banning Lewis Ranch actually is

The eastern edge of Colorado Springs, east of Marksheffel Road, stretching from
Woodmen Road south toward the municipal airport.

## The 1988 agreement, and why it mattered

When the ranch was annexed in 1988 it was far outside the built city. Planners
wrote an annexation agreement that went well beyond normal practice to protect
taxpayers: developers would have to **build all the needed infrastructure or pay
the city in lieu** — roads, drainage, parks and trails — plus dedicate land for
fire and police stations and a public transit site.

The intent was sound. The effect was that development here could not compete
economically with land outside the city.

## Then the economy collapsed

Shortly after annexation, the Savings and Loan crisis hit Colorado Springs
hard — the city became known nationally as a foreclosure capital. The planned
development did not happen. The ranch stayed largely empty.

## The 2018 amendment

The city amended the annexation agreement in 2018, easing the obligations, and
development has moved since. Reporting in 2026 indicated updated land plans that
could add several thousand additional homes.

## What this means for a buyer

**Assume the land around you will be built on.** This is an actively developing
area with decades of platted capacity. Ask what is entitled adjacent to any lot
and what the phasing schedule looks like.

**Infrastructure timing matters.** Roads, schools and retail arrive on a
schedule that is not always the same as the housing. Check what exists now
rather than what is shown on a plan.

## The housing

Post-2000 single-family subdivisions in phases, in Falcon School District 49.
Conventional suburban product, generally priced below the city median.`,
    suits: `Buyers who want the newest housing at a reasonable price and are comfortable
living in an area that is still being built.`,
    check: `**What is entitled on adjacent land**, and the phasing schedule.

${METRO}

**Which schools actually exist** versus which are planned.

**Commute** driven at rush hour — this is the far east side.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'East',
    slug: 'springs-ranch',
    name: 'Springs Ranch',
    title: 'Springs Ranch, Colorado Springs — a neighborhood guide',
    summary:
      'An east-side 1990s and 2000s community around a golf course, popular with military families and priced below the city median.',
    answer:
      'Springs Ranch is an east Colorado Springs community developed from the 1990s around the Springs Ranch Golf Club, with predominantly single-family suburban housing. It is served by Falcon School District 49 and is convenient to Peterson Space Force Base.',
    tags: ['springs-ranch', 'colorado-springs', 'd49', 'golf', 'military', 'value'],
    bounds: 'East Colorado Springs around Marksheffel Road and Barnes Road',
    housing: ['1990s–2000s single-family houses', 'Townhomes'],
    stats: ['Falcon District 49', 'golf course', 'to Peterson SFB - 12 min'],
    parks: 'Springs Ranch Golf Club, Sand Creek Trail',
    geo: { lat: 38.8722, lng: -104.6944 },
    links: [csCity, d49],
    faq: [
      {
        q: 'Is Springs Ranch convenient to Peterson Space Force Base?',
        a: 'Yes — roughly twelve minutes, which makes it a common choice for military families along with Stetson Hills and Cimarron Hills.',
      },
    ],
    sources: src,
    lede: `Springs Ranch is a 1990s and 2000s east-side community wrapped around a golf
course, twelve minutes from Peterson, with prices below the city median.`,
    sections: `## Where Springs Ranch actually is

East Colorado Springs around Marksheffel and Barnes Road, near
[Stetson Hills](/neighborhoods/colorado-springs/stetson-hills/) and
[Cimarron Hills](/neighborhoods/colorado-springs/cimarron-hills/).

## The housing

1990s–2000s single-family houses and townhomes on standard suburban lots,
arranged around the Springs Ranch Golf Club.

## The military market

Peterson Space Force Base is close, and the area has substantial military
turnover. That supports rentals and keeps transaction volume steady.`,
    suits: `Military families, first-time buyers and investors who want newer housing at
below-median prices.`,
    check: `**Roof age and hail history.**

**Golf course adjacency** on affected lots.

${METRO}

${SOIL}`,
  },

  {
    ...CS,
    sector: 'East',
    slug: 'village-seven',
    name: 'Village Seven',
    title: 'Village Seven, Colorado Springs — a neighborhood guide',
    summary:
      'A 1960s and 70s planned community on the east side, with mature trees, curving streets and better value than its age suggests.',
    answer:
      'Village Seven is an east Colorado Springs planned community developed from the 1960s, with mid-century and 1970s housing on curving streets. It has mature landscaping unusual for the east side and prices below the city median.',
    tags: ['village-seven', 'colorado-springs', 'mid-century', 'value', 'planned-community'],
    bounds:
      'East Colorado Springs around Union Boulevard and Academy Boulevard, south of Palmer Park',
    housing: ['1960s–1970s ranches, tri-levels and split-levels'],
    stats: ['planned community', 'mature landscaping', 'value - below city median'],
    parks: 'Palmer Park, neighborhood parks and trails',
    geo: { lat: 38.8444, lng: -104.75 },
    links: [csCity, parks, d11],
    faq: [
      {
        q: 'What is Village Seven?',
        a: 'A planned community developed on the east side from the 1960s, laid out with curving streets, internal parks and a trail system rather than a straight grid. It was one of the first large planned developments in Colorado Springs.',
      },
      {
        q: 'Is Village Seven a good value?',
        a: 'Yes — it offers solid mid-century houses with mature landscaping at below-median prices, which is unusual for a neighborhood with this much tree cover.',
      },
    ],
    sources: src,
    lede: `Village Seven was one of the first big planned communities in Colorado Springs,
laid out in the 1960s with curving streets and internal parks. Sixty years on it
has the tree cover to show for it, and prices well below the city median.`,
    sections: `## Where Village Seven actually is

East Colorado Springs around Union and Academy Boulevards, south of Palmer Park.

## The plan

Curving streets, internal green space and a trail system rather than a grid. It
is a product of 1960s planning ideas and it has aged better than most.

## Palmer Park

The large city park to the north — bluffs, mesa-top trails and views — is the
area's best amenity.

## The housing

1960s–70s ranches, tri-levels and split-levels on generous lots, with landscaping
that has had decades to establish.`,
    suits: `Value buyers who want mature trees and a detached house with a yard, and
mid-century enthusiasts.`,
    check: `**1960s and 70s systems** — panels, sewer, windows, furnaces.

**Roof age and hail history.**

**Tree maintenance** on mature landscaping.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'East',
    slug: 'rustic-hills',
    name: 'Rustic Hills',
    title: 'Rustic Hills, Colorado Springs — a neighborhood guide',
    summary:
      'An east-side neighborhood below Palmer Park with mid-century housing and some of the lowest prices in the city.',
    answer:
      'Rustic Hills is an east Colorado Springs neighborhood below Palmer Park, with predominantly 1960s–1970s housing. It is among the more affordable parts of the city and offers direct access to Palmer Park’s trail network.',
    tags: ['rustic-hills', 'colorado-springs', 'affordable', 'palmer-park', 'mid-century'],
    bounds: 'East Colorado Springs around Academy Boulevard and Palmer Park Boulevard',
    housing: ['1960s–1970s ranches and split-levels', 'Apartments along the arterials'],
    stats: ['Palmer Park - adjacent', 'value - among the city’s lowest', 'to downtown - 12 min'],
    parks: 'Palmer Park',
    geo: { lat: 38.8611, lng: -104.7639 },
    links: [csCity, parks, d11],
    faq: [
      {
        q: 'Is Rustic Hills affordable?',
        a: 'It is among the least expensive detached-housing areas in Colorado Springs, well below the June 2026 city median of $499,900.',
      },
      {
        q: 'What is Palmer Park?',
        a: 'A 700-plus-acre city park on the bluffs in east Colorado Springs, with an extensive trail network, rock formations and long views across the city to Pikes Peak. It is one of the best urban parks in Colorado.',
      },
    ],
    sources: src,
    lede: `Rustic Hills sits below Palmer Park on the east side — mid-century houses,
some of the lowest prices in Colorado Springs, and seven hundred acres of bluff
and trail at the top of the street.`,
    sections: `## Where Rustic Hills actually is

East Colorado Springs around Academy and Palmer Park Boulevards, on the southern
and eastern flanks of Palmer Park.

## Palmer Park

The park is the reason to be here: over 700 acres of bluffs, rock formations,
mesa-top trails and views west to Pikes Peak. For a neighborhood at this price
point, that is a remarkable amenity.

## The housing

1960s–70s ranches and split-levels, plus apartment stock along the arterials.
Condition varies considerably block to block.`,
    suits: `Value buyers and investors who want the lowest detached prices in the city
with genuine park access.`,
    check: `**Block-level variation** — walk the specific street at the hours you would be
home.

**Arterial noise** on Academy Boulevard.

**Deferred maintenance**, which is common in this stock.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'East',
    slug: 'cimarron-hills',
    name: 'Cimarron Hills',
    title: 'Cimarron Hills, Colorado Springs — a neighborhood guide',
    summary:
      'An unincorporated community east of the city next to Peterson Space Force Base, with modest housing and county rather than city rules.',
    answer:
      'Cimarron Hills is an unincorporated El Paso County community immediately east of Colorado Springs, adjacent to Peterson Space Force Base. It has predominantly mid-century and later housing, a large military population, and is governed by the county rather than the city.',
    tags: ['cimarron-hills', 'colorado-springs', 'unincorporated', 'military', 'affordable', 'd49'],
    bounds: 'East of Colorado Springs city limits, around Peterson Road and Galley Road',
    housing: ['1960s–1990s single-family houses', 'Apartments and manufactured housing'],
    stats: ['unincorporated El Paso County', 'Peterson SFB - adjacent', 'value - low'],
    parks: 'Sand Creek Trail, county parks',
    geo: { lat: 38.85, lng: -104.6833 },
    links: [
      { label: 'El Paso County', url: 'https://www.elpasoco.com/' },
      { label: 'Peterson Space Force Base', url: 'https://www.peterson.spaceforce.mil/' },
      d49,
    ],
    faq: [
      {
        q: 'Is Cimarron Hills part of Colorado Springs?',
        a: 'No. It is an unincorporated census-designated place in El Paso County, immediately east of the city limits. That means county rather than city services, different rules on things like short-term rentals, and a different tax picture.',
      },
      {
        q: 'Why do so many military families live in Cimarron Hills?',
        a: 'It sits immediately next to Peterson Space Force Base, and housing costs are among the lowest in the area. The combination makes it a default choice for many service members.',
      },
    ],
    sources: src,
    lede: `Cimarron Hills is just outside the city limits next to Peterson, which makes it
two things at once: some of the cheapest housing in the Colorado Springs area,
and a place where county rules rather than city rules apply.`,
    sections: `## Where Cimarron Hills actually is

Immediately east of the Colorado Springs city limits around Peterson Road and
Galley Road, adjoining Peterson Space Force Base.

## Unincorporated, and why it matters

This is **El Paso County**, not the City of Colorado Springs. Practically:

- County sheriff rather than city police
- County land use and code enforcement
- A different mill levy
- Different rules on short-term rentals and accessory structures

Buyers routinely assume a Colorado Springs mailing address means city
jurisdiction. Confirm it.

## The military

Peterson is on the doorstep. The area has a large military population and the
turnover that goes with it, which supports rentals.

## The housing

1960s–90s single-family houses plus apartments and a meaningful manufactured
housing component. Prices are among the lowest in the region.`,
    suits: `Military families, value-first buyers and investors, provided they understand
they are buying in the county rather than the city.`,
    check: `**Jurisdiction** — confirm county versus city for the parcel.

**Water and sanitation district** and its rates.

**Aircraft noise** from Peterson and the municipal airport.

${SOIL}`,
  },
]
