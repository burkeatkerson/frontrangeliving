import { SRC } from './_template.mjs'

const src = [SRC.car, SRC.census]
const CS = { city: 'colorado-springs', cityName: 'Colorado Springs' }

const csCity = { label: 'City of Colorado Springs', url: 'https://coloradosprings.gov/' }
const d11 = { label: 'Colorado Springs School District 11', url: 'https://www.d11.org/' }
const d20 = { label: 'Academy School District 20', url: 'https://www.asd20.org/' }
const d12 = { label: 'Cheyenne Mountain School District 12', url: 'https://www.cmsd12.org/' }
const parks = {
  label: 'Colorado Springs Parks, Recreation and Cultural Services',
  url: 'https://coloradosprings.gov/parks',
}

/** The regional foundation problem, worth repeating on every Springs guide. */
const SOIL = `**Expansive soils.** The Front Range south of Denver sits on
bentonite-rich clay that swells when wet and shrinks when dry, and El Paso
County has some of the worst of it. Heaved basement slabs and cracked
foundations are common enough here that a structural engineer's opinion on any
crack is money well spent — not an optional extra.`

export const csWest = [
  // ---------------------------------------------------------------- Central
  {
    ...CS,
    sector: 'Central',
    slug: 'old-north-end',
    name: 'Old North End',
    featured: true,
    title: 'Old North End, Colorado Springs — a neighborhood guide',
    summary:
      'The grandest houses in southern Colorado, built on Cripple Creek gold, on wide streets north of Colorado College.',
    answer:
      'The Old North End is a historic Colorado Springs neighborhood immediately north of Colorado College, containing the city’s largest and best-preserved late-nineteenth and early-twentieth-century houses. It is a designated historic district and among the city’s most expensive addresses.',
    tags: ['old-north-end', 'colorado-springs', 'historic', 'walkable', 'colorado-college'],
    bounds: 'Cascade Avenue to Wahsatch, roughly Uintah Street to Fontanero',
    housing: ['1890s–1920s mansions and period revivals', 'Historic district protected'],
    stats: ['historic district - yes', 'Colorado College - adjacent', 'top of the Springs market'],
    parks: 'Monument Valley Park, Acacia Park nearby',
    geo: { lat: 38.8547, lng: -104.8244 },
    links: [
      csCity,
      { label: 'Colorado College', url: 'https://www.coloradocollege.edu/' },
      {
        label: 'Colorado Springs historic preservation',
        url: 'https://coloradosprings.gov/planning-and-development',
      },
      d11,
    ],
    faq: [
      {
        q: 'What is the Old North End in Colorado Springs?',
        a: 'A historic district immediately north of Colorado College holding the city’s grandest houses, built largely between the 1890s and 1920s on Cripple Creek gold and railroad money. It is one of the most intact neighborhoods of its era in Colorado.',
      },
      {
        q: 'Is the Old North End expensive?',
        a: 'Yes — it sits well above the Colorado Springs single-family median of $499,900 recorded in June 2026, though the houses are far larger than that figure implies and still cost a fraction of comparable Denver stock.',
      },
      {
        q: 'Can you renovate a house in the Old North End?',
        a: 'Within limits. Much of the area is a designated historic district, so exterior changes visible from the street go through review. Confirm the status of a specific parcel with the city before planning work.',
      },
    ],
    sources: src,
    lede: `The Old North End is what Cripple Creek gold bought. Between about 1890 and
1920, the money coming out of the mines west of here built several hundred
substantial houses on wide streets north of Colorado College, and an unusual
number of them are still standing and still intact.`,
    sections: `## Where the Old North End actually is

Immediately north of Colorado College, roughly between Cascade Avenue and
Wahsatch from Uintah Street up to Fontanero, adjoining
[downtown](/neighborhoods/colorado-springs/downtown-colorado-springs/).

## What got built here

Period revival at scale: Queen Anne, Colonial Revival, Tudor, Mission and
Craftsman houses on generous lots, many by the architects who also designed the
city's institutional buildings. Wood Avenue and Cascade in particular carry the
showpieces.

General Palmer laid out Colorado Springs in 1871 with unusually wide streets,
and the Old North End is where that plan is most visible.

## Colorado College

The private liberal arts college anchors the neighborhood's southern edge. It
brings a cultural calendar, a good bookshop, and some student rental pressure on
the blocks closest to campus.

## The historic district

Designation means design review on exterior alterations. It constrains owners
and it is precisely why the streetscape survived when so much comparable housing
elsewhere did not.

## What you actually get for the money

This is the strongest argument for the neighborhood. A large, architecturally
serious 1905 house here costs a fraction of its equivalent in Denver's
[Country Club](/neighborhoods/denver/country-club/) or Boulder's
[Mapleton Hill](/neighborhoods/boulder/mapleton-hill/). The trade is a smaller
city and a slower market — Colorado Springs ran 45 days on market in June 2026.`,
    suits: `Buyers who want a genuinely grand period house and will accept design review,
and anyone connected to Colorado College.`,
    check: `**Design review scope** before you plan anything exterior.

**Systems.** Knob-and-tube wiring, galvanised supply and original boilers are all
plausible in unrenovated houses of this age.

**Tree maintenance** on mature canopy, which is the owner's cost.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Central',
    slug: 'patty-jewett',
    name: 'Patty Jewett',
    featured: true,
    title: 'Patty Jewett, Colorado Springs — a neighborhood guide',
    summary:
      'Craftsman bungalows around an 1898 golf course that a widower deeded to the city in his wife’s memory, with a covenant keeping it public forever.',
    answer:
      'Patty Jewett is a central Colorado Springs neighborhood surrounding the Patty Jewett Golf Course, built in 1898 and among the oldest golf courses west of the Mississippi. Its housing is predominantly early-twentieth-century Craftsman and Victorian, and it is one of the city’s most sought-after central addresses.',
    tags: ['patty-jewett', 'colorado-springs', 'historic', 'golf', 'bungalows', 'walkable'],
    bounds: 'Around the golf course, roughly Union Boulevard to Wahsatch north of Fontanero',
    housing: ['1900s–1930s Craftsman bungalows and Victorians', 'Some mid-century infill'],
    stats: ['golf course - 1898', 'to downtown - 8 min', 'tenure - majority owner'],
    parks: 'Patty Jewett Golf Course, Shooks Run Trail',
    geo: { lat: 38.8617, lng: -104.8069 },
    links: [
      csCity,
      {
        label: 'Patty Jewett Golf Course, City of Colorado Springs',
        url: 'https://coloradosprings.gov/pattyjewett',
      },
      parks,
      d11,
    ],
    faq: [
      {
        q: 'How old is Patty Jewett Golf Course?',
        a: 'It was built in 1898, originally as the Town and Gown Golf Club to a Willie Campbell design, and is recognised as the third oldest golf course west of the Mississippi. It has been city-owned since 1919.',
      },
      {
        q: 'Who was Patty Jewett?',
        a: 'Patty Stuart Jewett, wife of William Jewett, who owned the course. Four years after her death he deeded it to the city as the Patty Stuart Jewett Memorial Field, stipulating that it be maintained in perpetuity for public golf and open to all persons over the age of ten. It is believed to be the oldest golf course named after a woman.',
      },
      {
        q: 'Is Patty Jewett a good neighborhood?',
        a: 'It is one of the most consistently desirable central addresses in Colorado Springs — walkable, largely owner-occupied, with intact Craftsman housing and a municipal golf course at the centre. Prices sit above the city median.',
      },
    ],
    sources: src,
    lede: `Patty Jewett is a neighborhood wrapped around a golf course from 1898, which a
man deeded to the city in 1919 in memory of his late wife on the condition that
it stay public forever. It did. The bungalows around it are among the best-kept
in Colorado Springs.`,
    sections: `## Where Patty Jewett actually is

Central Colorado Springs north-east of downtown, wrapping the golf course
roughly between Union Boulevard and Wahsatch above Fontanero.

## The course, and the covenant

Built in 1898 as the Town and Gown Golf Club to a design by Willie Campbell, it
is the **third oldest golf course west of the Mississippi**. William Jewett
bought it in 1910 and renamed it the Colorado Springs Golf Club.

In 1919, four years after his wife Patty Stuart Jewett died, he deeded the
course to the city with a stipulation: it would be known as the Patty Stuart
Jewett Memorial Field, maintained in perpetuity for public golf, and **open to
all persons over the age of ten**.

That covenant is why a central Colorado Springs neighborhood has 27 holes of
municipal golf at its heart rather than a subdivision. It is also believed to be
the oldest golf course in the country named after a woman.

## The housing

1900s–1930s Craftsman bungalows and Victorians on a compact grid, with some
mid-century infill on the edges. Well maintained by neighborhood standards, and
largely owner-occupied.

## Shooks Run

The Shooks Run drainage and its trail run along the western edge, connecting
south toward downtown and the
[Shooks Run](/neighborhoods/colorado-springs/shooks-run/) historic
neighborhood.`,
    suits: `Buyers who want a walkable central neighborhood with intact period housing and
a park-scale amenity, and golfers.`,
    check: `**Sewer and pre-1935 systems** on unrenovated houses.

**Golf course adjacency** — errant balls are real on the lots that front it.

**Drainage** near the Shooks Run channel.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Central',
    slug: 'shooks-run',
    name: 'Shooks Run',
    title: 'Shooks Run, Colorado Springs — a neighborhood guide',
    summary:
      'A historic central neighborhood along a creek-side trail, with 92 documented historic sites and prices below its neighbours.',
    answer:
      'Shooks Run is a central Colorado Springs neighborhood east of downtown, following the Shooks Run drainage and trail. A historic sites inventory documented 92 properties here, and it remains less expensive than neighbouring Patty Jewett and the Old North End.',
    tags: ['shooks-run', 'colorado-springs', 'historic', 'value', 'trail', 'central'],
    bounds: 'The Shooks Run corridor east of downtown, roughly Platte Avenue to Fontanero',
    housing: ['1890s–1930s cottages, Victorians and bungalows'],
    stats: ['92 documented historic sites', 'to downtown - 5 min', 'value - below Patty Jewett'],
    parks: 'Shooks Run Trail, Bancroft Park nearby',
    geo: { lat: 38.8394, lng: -104.8039 },
    links: [
      csCity,
      {
        label: 'Colorado Springs historic preservation',
        url: 'https://coloradosprings.gov/planning-and-development',
      },
      d11,
    ],
    faq: [
      {
        q: 'What is Shooks Run?',
        a: 'Both a drainage running north–south through central Colorado Springs and the historic neighborhood along it. A historic sites inventory documented 92 properties in the area, including houses, two churches, the Garfield School, buildings associated with Sinton Dairy and a Santa Fe railroad depot.',
      },
      {
        q: 'Is Shooks Run a good value?',
        a: 'It offers comparable period housing to Patty Jewett and the Old North End at lower prices, largely because it sits closer to the arterials and the housing stock is more mixed in condition.',
      },
    ],
    sources: src,
    lede: `Shooks Run is the historic neighborhood most Colorado Springs buyers overlook.
Same era of housing as Patty Jewett next door, a creek-side trail running
through it, ninety-two documented historic sites, and lower prices.`,
    sections: `## Where Shooks Run actually is

The corridor east of downtown following the Shooks Run drainage, roughly from
Platte Avenue north to Fontanero, west of
[Patty Jewett](/neighborhoods/colorado-springs/patty-jewett/).

## The historic inventory

The Shooks Run Inventory of Historic Sites documented **92 sites** — houses, two
churches, the Garfield School, buildings associated with Sinton Dairy, and an
Atchison, Topeka & Santa Fe railroad depot. That density of surviving fabric is
unusual for a neighborhood this close to a downtown.

## The trail

The Shooks Run Trail runs the length of the drainage, connecting the
neighborhood north toward Patty Jewett and south toward downtown. It is a
genuine amenity and, in a storm, a working flood channel.

## The housing

1890s–1930s cottages, Victorians and bungalows, mixed in condition. Some are
beautifully restored; many carry deferred maintenance, which is where the price
gap to Patty Jewett comes from.`,
    suits: `Value buyers who want period housing within walking distance of downtown and
are prepared to renovate, and investors.`,
    check: `**Flood risk** along the drainage — pull current mapping.

**Historic designation** on individual properties, which varies.

**Full systems survey** on anything unrenovated.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Central',
    slug: 'ivywild',
    name: 'Ivywild',
    featured: true,
    title: 'Ivywild, Colorado Springs — a neighborhood guide',
    summary:
      'A small south-central neighborhood that turned its 1916 school into a brewery, bakery and market — and became the city’s most interesting few blocks.',
    answer:
      'Ivywild is a small neighborhood about two and a half miles south of downtown Colorado Springs, best known for the Ivywild School — a 1916 school building converted into a marketplace with a brewery, bakery and restaurants. Its housing is predominantly early-twentieth-century cottages.',
    tags: ['ivywild', 'colorado-springs', 'walkable', 'food', 'adaptive-reuse', 'central'],
    bounds: 'South-central Colorado Springs around Cheyenne Boulevard and Tejon Street',
    housing: ['1900s–1940s cottages and bungalows', 'Some infill'],
    stats: ['Ivywild School - 1916', 'to downtown - 6 min', 'walkable core'],
    parks: 'Cheyenne Creek, Bear Creek nearby',
    geo: { lat: 38.8114, lng: -104.8264 },
    links: [csCity, { label: 'Ivywild School', url: 'https://ivywildschool.com/' }, d11],
    faq: [
      {
        q: 'What is the Ivywild School?',
        a: 'A 1916 school building in Ivywild that closed in 2009 and was redeveloped into a marketplace containing a brewery, bakery, bar and restaurants. It is the neighborhood’s anchor and one of the better adaptive-reuse projects in Colorado.',
      },
      {
        q: 'Is Ivywild walkable?',
        a: 'The core few blocks are, and that is unusual for Colorado Springs outside downtown and Old Colorado City. Beyond the school and its immediate surroundings you are driving.',
      },
    ],
    sources: src,
    lede: `Ivywild is a handful of blocks two and a half miles south of downtown that
became interesting when somebody bought the closed 1916 elementary school and
put a brewery, a bakery and a market in it. The neighborhood around it has been
catching up ever since.`,
    sections: `## Where Ivywild actually is

South-central Colorado Springs around Cheyenne Boulevard and Tejon Street,
between downtown and the [Broadmoor](/neighborhoods/colorado-springs/broadmoor/).

## The school

Ivywild School closed in 2009 and was redeveloped into a marketplace — brewery,
bakery, bar, restaurants and event space in the original building, with the
gymnasium and classrooms adapted rather than gutted. It is the reason anyone
outside the neighborhood knows the name.

## The housing

1900s–1940s cottages and bungalows on small lots, modest in scale. Prices have
risen with the neighborhood's profile but remain below the Old North End and
Patty Jewett.

## The setting

Cheyenne Creek runs through, and the foothills start a few minutes west. It is
one of the better positioned small neighborhoods in the city — close to
downtown, close to the mountains, and with somewhere to walk to.`,
    suits: `Buyers who want a small walkable pocket with genuine character close to
downtown, and who do not need a large house.`,
    check: `**Creek proximity and flood mapping.**

**Small lot sizes** — this is not a yard-and-garage neighborhood.

**Pre-1945 systems.**

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Central',
    slug: 'divine-redeemer',
    name: 'Divine Redeemer',
    title: 'Divine Redeemer, Colorado Springs — a neighborhood guide',
    summary:
      'A modest central neighborhood named for its church, with post-war brick housing and some of the shortest commutes in the city.',
    answer:
      'Divine Redeemer is a central-east Colorado Springs neighborhood named after the Divine Redeemer Catholic parish, with predominantly 1940s–1960s housing. It is centrally located, largely residential and priced below the city median.',
    tags: ['divine-redeemer', 'colorado-springs', 'central', 'value', 'post-war'],
    bounds: 'Central-east Colorado Springs, roughly north of Platte Avenue near Union Boulevard',
    housing: ['1940s–1960s brick cottages and ranches'],
    stats: ['to downtown - 8 min', 'value - below city median', 'central location'],
    parks: 'Palmer Park nearby, Shooks Run Trail',
    geo: { lat: 38.8506, lng: -104.7889 },
    links: [csCity, d11],
    faq: [
      {
        q: 'Why is it called Divine Redeemer?',
        a: 'After the Divine Redeemer Catholic parish and school, which anchor the neighborhood. Colorado Springs has several neighborhoods that take their names from a church or an institution rather than a developer.',
      },
    ],
    sources: src,
    lede: `Divine Redeemer is a quiet central neighborhood named after its parish —
post-war brick, standard lots, eight minutes from downtown, and priced below
almost anything else this central.`,
    sections: `## Where Divine Redeemer actually is

Central-east Colorado Springs north of Platte Avenue near Union Boulevard,
between [Patty Jewett](/neighborhoods/colorado-springs/patty-jewett/) and
Palmer Park.

## The housing

1940s–60s brick cottages and ranches on standard lots. Solid, plain, and much of
it unmodernised — which is the opportunity.

## What is nearby

**Palmer Park** to the east is one of the largest city parks in Colorado Springs
with an extensive trail network on the bluffs. Downtown is eight minutes.`,
    suits: `First-time buyers and investors who want a central location at below-median
pricing.`,
    check: `**Post-war systems** — panels, sewer, roofs.

**Block-level variation**, which is meaningful here.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'East',
    slug: 'knob-hill',
    name: 'Knob Hill',
    title: 'Knob Hill, Colorado Springs — a neighborhood guide',
    summary:
      'An older east-side neighborhood along Platte Avenue, cheap, central, and slowly gaining an arts and food scene.',
    answer:
      'Knob Hill is an east-central Colorado Springs neighborhood along East Platte Avenue, with predominantly mid-century housing and a growing concentration of independent restaurants and arts businesses. It is among the more affordable central areas of the city.',
    tags: ['knob-hill', 'colorado-springs', 'affordable', 'arts', 'food', 'east-side'],
    bounds: 'East Platte Avenue corridor, roughly Circle Drive to Academy Boulevard',
    housing: ['1940s–1960s cottages and ranches', 'Apartments along the corridor'],
    stats: ['to downtown - 10 min', 'value - among the city’s lowest', 'Palmer Park nearby'],
    parks: 'Palmer Park',
    geo: { lat: 38.8394, lng: -104.7736 },
    links: [csCity, parks, d11],
    faq: [
      {
        q: 'Is Knob Hill affordable?',
        a: 'It is among the least expensive central neighborhoods in Colorado Springs, well below the June 2026 city median of $499,900, with mid-century detached housing on standard lots.',
      },
      {
        q: 'Is Knob Hill changing?',
        a: 'Gradually. The Platte Avenue corridor has picked up independent restaurants, breweries and arts businesses over the last decade, though it remains a working-class neighborhood with visible commercial vacancy in places.',
      },
    ],
    sources: src,
    lede: `Knob Hill is the east-side neighborhood that has been quietly getting more
interesting — independent restaurants and studios appearing along Platte Avenue,
attached to some of the cheapest detached housing in central Colorado Springs.`,
    sections: `## Where Knob Hill actually is

The East Platte Avenue corridor roughly between Circle Drive and Academy
Boulevard, south of Palmer Park.

## The corridor

Platte Avenue here has picked up a genuine cluster of independent restaurants,
breweries and arts businesses. It is not polished, and that is much of the
appeal for the people moving in.

## Palmer Park

The 700-plus-acre park north of the neighborhood is one of the best open spaces
in Colorado Springs — bluffs, mesa-top trails and views across the city. It is
the neighborhood's strongest amenity.

## The housing

1940s–60s cottages and ranches on standard lots, plus apartment stock along the
arterials. Condition varies widely block to block.`,
    suits: `Value buyers and investors who want central location at the lowest available
price, and anyone who will use Palmer Park.`,
    check: `**Platte Avenue noise** on the corridor blocks.

**Block-level variation** — walk the specific street.

**Deferred maintenance**, which is common in this stock.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Northeast',
    slug: 'cragmor',
    name: 'Cragmor',
    title: 'Cragmor, Colorado Springs — a neighborhood guide',
    summary:
      'The neighborhood around UCCS, built on a former tuberculosis sanatorium site, with bluff views and mid-century houses.',
    answer:
      'Cragmor is a north-east Colorado Springs neighborhood surrounding the University of Colorado Colorado Springs, built partly on the site of the former Cragmor Sanatorium. It has predominantly mid-century housing with bluff-top views over the city.',
    tags: ['cragmor', 'colorado-springs', 'uccs', 'mid-century', 'views', 'university'],
    bounds: 'Around the UCCS campus, north of Austin Bluffs Parkway',
    housing: ['1950s–1970s ranches and split-levels', 'Student rentals near campus'],
    stats: ['UCCS - adjacent', 'to downtown - 12 min', 'bluff views'],
    parks: 'Austin Bluffs Open Space, Pulpit Rock',
    geo: { lat: 38.8917, lng: -104.7889 },
    links: [
      csCity,
      { label: 'University of Colorado Colorado Springs', url: 'https://www.uccs.edu/' },
      { label: 'Austin Bluffs Open Space', url: 'https://coloradosprings.gov/parks' },
      d11,
    ],
    faq: [
      {
        q: 'What was the Cragmor Sanatorium?',
        a: 'A tuberculosis sanatorium that operated from 1905, part of the wave of institutions that drew TB patients to Colorado’s dry climate. The main building later became the founding campus of the University of Colorado Colorado Springs.',
      },
      {
        q: 'Is Cragmor good for investors?',
        a: 'It has steady rental demand from UCCS. Confirm any city rental licensing requirements and check occupancy limits before underwriting a per-bedroom model.',
      },
    ],
    sources: src,
    lede: `Cragmor sits on the bluffs around UCCS, on ground that was a tuberculosis
sanatorium before it was a university. The houses are mid-century, the views
are better than the prices suggest, and the trails start at the end of the
street.`,
    sections: `## Where Cragmor actually is

North-east Colorado Springs around the UCCS campus, north of Austin Bluffs
Parkway.

## The sanatorium

Cragmor Sanatorium opened in 1905, part of the wave of tuberculosis institutions
that brought patients to Colorado for the dry air — the same phenomenon that
shaped [Denver's West Colfax](/neighborhoods/denver/west-colfax/). The main
building later became the founding campus of UCCS.

## The university

UCCS has grown substantially and is now a significant presence, which brings
student rental demand to the blocks nearest campus and steady employment to the
area.

## The open space

**Austin Bluffs Open Space** and **Pulpit Rock** sit immediately north, with
trails onto the bluffs and long views south across the city to Cheyenne
Mountain.

## The housing

1950s–70s ranches and split-levels, some with genuinely good views from the
higher ground.`,
    suits: `University staff and students, investors serving UCCS, and buyers who want
mid-century housing with trail access at a moderate price.`,
    check: `**Rental concentration** on the specific block if you want quiet.

**Slope and drainage** on the bluff-adjacent lots.

**1960s systems.**

${SOIL}`,
  },

  // ---------------------------------------------------------------- Westside
  {
    ...CS,
    sector: 'Westside',
    slug: 'pleasant-valley',
    name: 'Pleasant Valley',
    title: 'Pleasant Valley, Colorado Springs — a neighborhood guide',
    summary:
      'A quiet west-side pocket tucked between Garden of the Gods and Mesa Road, with mid-century houses and red rock at the end of the street.',
    answer:
      'Pleasant Valley is a west-side Colorado Springs neighborhood between Old Colorado City and Garden of the Gods, with predominantly mid-century housing. It offers direct access to Garden of the Gods and Mesa open space at prices below the foothills neighborhoods further north.',
    tags: ['pleasant-valley', 'colorado-springs', 'westside', 'garden-of-the-gods', 'mid-century'],
    bounds: 'West side between Fontanero, Mesa Road and Garden of the Gods',
    housing: ['1940s–1970s ranches and cottages'],
    stats: ['Garden of the Gods - adjacent', 'to downtown - 10 min', 'quiet'],
    parks: 'Garden of the Gods, Mesa Valley, Pleasant Valley Park',
    geo: { lat: 38.8639, lng: -104.8608 },
    links: [csCity, { label: 'Garden of the Gods', url: 'https://gardenofgods.com/' }, d11],
    faq: [
      {
        q: 'How close is Pleasant Valley to Garden of the Gods?',
        a: 'Immediately adjacent — the park’s southern and eastern approaches are minutes away, and parts of the neighborhood are within walking distance of trailheads.',
      },
    ],
    sources: src,
    lede: `Pleasant Valley is a quiet west-side pocket between Old Colorado City and
Garden of the Gods, with mid-century houses, mature trees, and red sandstone
visible from a lot of the front windows.`,
    sections: `## Where Pleasant Valley actually is

West Colorado Springs between Fontanero, Mesa Road and the Garden of the Gods,
north of [Old Colorado City](/neighborhoods/colorado-springs/old-colorado-city/).

## The setting

Garden of the Gods is on the doorstep, and the Mesa above the neighborhood gives
long views east across the city. It is one of the better combinations of quiet
and access on the west side.

## The housing

1940s–70s ranches and cottages on varied lots — the street layout follows the
terrain rather than a grid, which gives it a less uniform feel than the east
side.`,
    suits: `Buyers who want quiet, trees and immediate Garden of the Gods access without
Kissing Camels or Mountain Shadows pricing.`,
    check: `**Wildfire exposure** at the wildland interface.

**Insurance availability and cost** — the west side is underwritten differently
since 2012.

**Slope and drainage** on the hillside lots.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Westside',
    slug: 'gold-hill-mesa',
    name: 'Gold Hill Mesa',
    featured: true,
    title: 'Gold Hill Mesa, Colorado Springs — a neighborhood guide',
    summary:
      'A newer west-side community built on the tailings of a gold mill — good views, walkable plan, and a soil history every buyer needs to read about.',
    answer:
      'Gold Hill Mesa is a master-planned Colorado Springs neighborhood built on the former Golden Cycle Mill site, which processed Cripple Creek ore. Parts of the development sit on mill tailings up to 130 feet deep, and settlement and soil questions have been the subject of city and state review.',
    tags: [
      'gold-hill-mesa',
      'colorado-springs',
      'new-construction',
      'westside',
      'soil',
      'due-diligence',
    ],
    bounds: 'West side south of Highway 24, between 21st Street and the mesa',
    housing: ['2000s–present houses, townhomes and condos'],
    stats: ['built on former mill site', 'to downtown - 8 min', 'mountain views'],
    parks: 'Bear Creek Regional Park, Red Rock Canyon Open Space nearby',
    geo: { lat: 38.8333, lng: -104.8556 },
    links: [
      csCity,
      {
        label: 'Colorado Division of Reclamation, Mining and Safety',
        url: 'https://drms.colorado.gov/',
      },
      { label: 'Red Rock Canyon Open Space', url: 'https://coloradosprings.gov/parks' },
      d11,
    ],
    faq: [
      {
        q: 'Is Gold Hill Mesa built on mine tailings?',
        a: 'Yes. The site was the Golden Cycle Mill, which processed ore from Cripple Creek. Parts of the development sit above a former decant pond containing tailings reported to be up to 130 feet deep in places.',
      },
      {
        q: 'Are there soil problems at Gold Hill Mesa?',
        a: 'Settlement and heaving have been documented at some homes, and in 2019 the city halted a new building phase pending further soil testing. The state subsequently approved an expansion after reviewing a new soil report. This is a well-documented, publicly reported issue — read the primary coverage and commission your own geotechnical review.',
      },
      {
        q: 'Should I avoid Gold Hill Mesa?',
        a: 'That is your call to make with a geotechnical engineer, not ours to make for you. People live there happily and the location is genuinely good. What we would say is that this is the one neighborhood in Colorado Springs where a standard home inspection is not sufficient due diligence.',
      },
    ],
    sources: src,
    lede: `Gold Hill Mesa is a newer walkable community with real mountain views, eight
minutes from downtown, built on top of a gold mill's tailings. Both halves of
that sentence matter, and the second one has been the subject of city hearings,
state review and a decade of newspaper coverage.`,
    sections: `## Where Gold Hill Mesa actually is

The west side south of Highway 24 between 21st Street and the mesa, near
[Old Colorado City](/neighborhoods/colorado-springs/old-colorado-city/) and Bear
Creek.

## What the site was

The **Golden Cycle Mill** processed ore hauled down from Cripple Creek, and the
milling left tailings across the site. Parts of the development sit above a
former decant pond reported at up to **130 feet deep** in places.

## The soil question, stated plainly

This is the most important thing on this page.

- Mill tailings are known for **settlement** — they can compress at uneven rates,
  which stresses foundations.
- Some homes at Gold Hill Mesa have been reported to be **sinking, heaving or
  flooding**.
- In **2019 the city halted a new building phase** pending further soil testing.
- The **state subsequently approved an expansion** after reviewing a new soil
  report.
- The milling process historically involved **arsenic, cyanide and lead**, and
  questions about residual soil chemistry have been raised repeatedly.

None of that means the neighborhood is unbuildable or that every house has a
problem. It does mean the standard Colorado Springs due diligence is not enough
here.

## What we would actually do

Commission an **independent geotechnical review** — not just a home inspection —
before removing objections. Ask for the site's soil reports, the specific
parcel's fill history, and any structural repair record on the house. Ask the
insurer what they know. Read the *Gazette*'s coverage rather than relying on a
summary, including ours.

## The neighborhood itself

Setting the geology aside, the plan is good: a walkable layout with a small
commercial core, mountain views west to Pikes Peak, and quick access to
downtown, Bear Creek Regional Park and Red Rock Canyon Open Space.`,
    suits: `Buyers who want newer walkable housing with views close to downtown **and**
who will pay for independent geotechnical advice before committing.`,
    check: `**Independent geotechnical review** of the specific parcel. This is the whole
ballgame here.

**Structural repair history** on the house, and any warranty claims.

**Soil and fill documentation** from the developer and the city.

**Insurance** — confirm coverage and what is excluded.

**Resale** — understand that future buyers will run the same searches you did.`,
  },

  // ---------------------------------------------------------------- Northwest
  {
    ...CS,
    sector: 'Northwest',
    slug: 'mountain-shadows',
    name: 'Mountain Shadows',
    featured: true,
    title: 'Mountain Shadows, Colorado Springs — a neighborhood guide',
    summary:
      'The neighborhood the Waldo Canyon Fire burned in 2012, largely rebuilt since — and the clearest case study in Colorado of what wildfire means for a suburb.',
    answer:
      'Mountain Shadows is a north-west Colorado Springs neighborhood below the foothills that bore essentially all the structural damage from the 2012 Waldo Canyon Fire, which destroyed 347 homes. About 77% of destroyed homes have been rebuilt, giving the area an unusual mix of 1970s–90s and post-2013 construction.',
    tags: ['mountain-shadows', 'colorado-springs', 'wildfire', 'foothills', 'rebuilt', 'd20'],
    bounds: 'North-west Colorado Springs below the foothills, west of Centennial Boulevard',
    housing: ['1970s–1990s houses', 'Substantial post-2013 rebuilds'],
    stats: ['347 homes lost in 2012', '77% rebuilt', 'Academy District 20'],
    parks: 'Garden of the Gods, Ute Valley Park, Blodgett Peak Open Space',
    geo: { lat: 38.9, lng: -104.8722 },
    links: [
      csCity,
      {
        label: 'Colorado Springs Fire Department wildfire mitigation',
        url: 'https://coloradosprings.gov/fire-department',
      },
      {
        label: 'Waldo Canyon Fire, Colorado Encyclopedia',
        url: 'https://coloradoencyclopedia.org/article/waldo-canyon-fire',
      },
      d20,
    ],
    faq: [
      {
        q: 'How many homes did the Waldo Canyon Fire destroy?',
        a: 'The June 2012 fire burned 18,247 acres and destroyed 347 homes. Structural damage was contained almost entirely to the Mountain Shadows neighborhood in north-west Colorado Springs.',
      },
      {
        q: 'Has Mountain Shadows been rebuilt?',
        a: 'Largely. About 77% of destroyed homes were rebuilt — a higher share than any other fire-affected community in Colorado. Parkside at Mountain Shadows, which lost 141 of its 178 homes, was nearly finished rebuilding after about seven years.',
      },
      {
        q: 'Is it safe to buy in Mountain Shadows now?',
        a: 'People buy and live there, and the rebuilt housing is newer and built to more recent code than most of the city. What has changed permanently is insurance: get a bindable quote before you are under contract, and understand the mitigation requirements for the property.',
      },
    ],
    sources: src,
    lede: `On 26 June 2012 the Waldo Canyon Fire came over the ridge into Mountain
Shadows and destroyed 347 homes in an afternoon. Most of them have been rebuilt.
The neighborhood is a good place to live and it is also the clearest lesson in
Colorado about what wildfire means for an ordinary suburb.`,
    sections: `## Where Mountain Shadows actually is

North-west Colorado Springs below the foothills, west of Centennial Boulevard,
between Garden of the Gods and the Air Force Academy, in
[Academy District 20](https://www.asd20.org/).

## The fire

The Waldo Canyon Fire burned **18,247 acres** and destroyed **347 homes**. The
structural loss was contained almost entirely to Mountain Shadows. Two people
died. It was, at the time, the most destructive wildfire in Colorado history —
a record later taken by the Marshall Fire in
[Superior](/places/superior/) and [Louisville](/places/louisville/).

## The rebuild

About **77% of destroyed homes were rebuilt**, the highest share of any
fire-affected community in the state. **Parkside at Mountain Shadows**, which lost
**141 of its 178 homes**, was close to fully rebuilt after roughly seven years.

For a buyer today that produces an unusual housing stock: 1970s–90s original
houses interleaved with post-2013 construction on the same streets, the newer
ones built to more recent energy and fire code.

## What actually changed

**Insurance.** This is the practical legacy. Colorado foothills property is
underwritten differently than it was in 2012, premiums are materially higher,
and some carriers have withdrawn from the wildland-urban interface entirely.

**Mitigation.** Defensible space, roof materials and vegetation management are
now central rather than optional, and the city runs active mitigation
programmes.

**The landscape.** The burn scar above the neighborhood is still visible and
still affects drainage. Post-fire flash flooding was a serious secondary problem
in the years after 2012.

## The neighborhood itself

Setting the fire aside, this is a good north-west address: D20 schools, Ute
Valley Park and Blodgett Peak Open Space on the doorstep, Garden of the Gods
minutes south, and genuine mountain views.`,
    suits: `Families who want D20 schools and foothills access, and buyers who want newer
construction — provided they have priced the insurance honestly.`,
    check: `**Bindable insurance quote** before you remove objections, not after.

**Whether the house is original or a rebuild**, and what code it was built to.

**Defensible space and roof material.**

**Post-fire drainage** — the burn scar above still changes how water moves.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Northwest',
    slug: 'rockrimmon',
    name: 'Rockrimmon',
    featured: true,
    title: 'Rockrimmon, Colorado Springs — a neighborhood guide',
    summary:
      'A 1970s hillside neighborhood in the north-west with mature trees, winding streets, Air Academy schools and immediate I-25 access.',
    answer:
      'Rockrimmon is a north-west Colorado Springs neighborhood developed largely in the 1970s, built into the hillsides west of I-25. It is served by Academy School District 20, has mature landscaping and offers quick access to both the interstate and open space.',
    tags: ['rockrimmon', 'colorado-springs', 'd20', 'hillside', '1970s', 'family'],
    bounds: 'North-west Colorado Springs west of I-25, around Rockrimmon Boulevard',
    housing: ['1970s–1980s hillside houses', 'Some newer infill and townhomes'],
    stats: ['Academy District 20', 'I-25 - immediate', 'to downtown - 12 min'],
    parks: 'Ute Valley Park, Blodgett Peak Open Space',
    geo: { lat: 38.9139, lng: -104.8444 },
    links: [csCity, { label: 'Ute Valley Park', url: 'https://coloradosprings.gov/parks' }, d20],
    faq: [
      {
        q: 'Is Rockrimmon in Academy District 20?',
        a: 'Yes, much of it is, which is a significant part of why it prices as it does. Verify the assigned schools for a specific address, since D20 boundaries do not follow neighborhood names.',
      },
      {
        q: 'What is Rockrimmon like?',
        a: 'It is a hillside neighborhood of mostly 1970s and 80s houses on winding streets with mature landscaping — unusually leafy for Colorado Springs. It has direct I-25 access and Ute Valley Park on its western edge.',
      },
    ],
    sources: src,
    lede: `Rockrimmon was built into the hills west of I-25 in the 1970s, and fifty years
of growth has given it something most Colorado Springs neighborhoods lack: a
real tree canopy. It has D20 schools, an interstate on-ramp and a mountain park
at the back.`,
    sections: `## Where Rockrimmon actually is

North-west Colorado Springs west of I-25 around Rockrimmon Boulevard, south of
the Air Force Academy and north of Garden of the Gods.

## The layout

Streets follow the terrain rather than a grid, which is why it feels different
from the east side. Many houses are split-level or tri-level, built into slopes,
with decks facing the view.

## Ute Valley Park

A substantial open space on the western edge with a well-used trail network —
rock outcrops, mountain biking and long views. **Blodgett Peak Open Space** is
just north.

## The schools

Much of Rockrimmon falls in **Academy School District 20**, the most sought-after
district in the region, which supports values. Verify the specific assignment.

## The housing

1970s–80s hillside houses with some newer infill and townhome development. Many
are now at the age where major systems — roofs, furnaces, decks, windows — are
due.`,
    suits: `Families who want D20 schools with mature trees and trail access, and
commuters who want immediate I-25 access.`,
    check: `**Deck, retaining wall and drainage condition** on hillside lots.

**Roof age and hail history** — this is a hail corridor.

**1970s systems** approaching replacement.

**Wildfire mitigation** on the western edge nearest the open space.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Northwest',
    slug: 'peregrine',
    name: 'Peregrine',
    title: 'Peregrine, Colorado Springs — a neighborhood guide',
    summary:
      'An elevated north-west neighborhood with some of the best city views in Colorado Springs and D20 schools.',
    answer:
      'Peregrine is a north-west Colorado Springs neighborhood on high ground west of I-25, developed largely in the 1980s and 1990s. It is in Academy School District 20 and known for elevated views over the city and the plains.',
    tags: ['peregrine', 'colorado-springs', 'd20', 'views', 'family', 'foothills'],
    bounds: 'North-west Colorado Springs above Rockrimmon, west of I-25',
    housing: ['1980s–1990s houses', 'Some custom homes'],
    stats: ['Academy District 20', 'elevated city views', 'to downtown - 15 min'],
    parks: 'Blodgett Peak Open Space, Ute Valley Park',
    geo: { lat: 38.9333, lng: -104.8639 },
    links: [
      csCity,
      { label: 'Blodgett Peak Open Space', url: 'https://coloradosprings.gov/parks' },
      d20,
    ],
    faq: [
      {
        q: 'Does Peregrine have good views?',
        a: 'Yes — it sits high on the north-west side, and many houses have long views east across the city and the plains, with the foothills immediately behind.',
      },
    ],
    sources: src,
    lede: `Peregrine sits above Rockrimmon on the north-west edge of the city, high
enough that a lot of houses look out across the whole of Colorado Springs to
the plains beyond.`,
    sections: `## Where Peregrine actually is

North-west Colorado Springs on high ground west of I-25, above
[Rockrimmon](/neighborhoods/colorado-springs/rockrimmon/), below Blodgett Peak.

## The views and the setting

Elevation is the selling point. Blodgett Peak Open Space is immediately west
with trails onto the mountain, and the Air Force Academy is just north.

## The housing

1980s–90s houses with some custom construction, generally larger than
Rockrimmon's and priced accordingly. Academy District 20 schools throughout most
of the area.`,
    suits: `Families who want D20 schools, views and space, and buyers who want foothills
access with newer housing than Rockrimmon.`,
    check: `**Wildfire exposure and insurance** — this is wildland-urban interface, close
to where the 2012 fire ran.

**Slope, drainage and retaining structures.**

**Wind exposure** on the higher lots.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Northwest',
    slug: 'kissing-camels',
    name: 'Kissing Camels',
    title: 'Kissing Camels, Colorado Springs — a neighborhood guide',
    summary:
      'A gated golf community wrapped around Garden of the Gods, named for the rock formation above it, and among the city’s most expensive addresses.',
    answer:
      'Kissing Camels is a gated golf community in west Colorado Springs adjoining Garden of the Gods, centred on the Garden of the Gods Resort and Club. It is among the most expensive residential areas in the city, named for a rock formation in the park.',
    tags: ['kissing-camels', 'colorado-springs', 'gated', 'golf', 'affluent', 'garden-of-the-gods'],
    bounds: 'West Colorado Springs adjoining Garden of the Gods, off 30th Street',
    housing: ['1970s–present custom houses, patio homes and villas'],
    stats: ['gated golf community', 'Garden of the Gods - adjacent', 'top of the market'],
    parks: 'Garden of the Gods',
    geo: { lat: 38.8806, lng: -104.8722 },
    links: [
      csCity,
      { label: 'Garden of the Gods Resort and Club', url: 'https://gardenofthegodsresort.com/' },
      { label: 'Garden of the Gods Park', url: 'https://gardenofgods.com/' },
      d11,
    ],
    faq: [
      {
        q: 'What are the Kissing Camels?',
        a: 'A sandstone formation in Garden of the Gods that resembles two camels touching noses. The neighborhood and the golf club take their name from it.',
      },
      {
        q: 'Is Kissing Camels gated?',
        a: 'Yes — it is a gated community associated with the Garden of the Gods Resort and Club, with HOA governance and a mix of custom houses, patio homes and villas.',
      },
    ],
    sources: src,
    lede: `Kissing Camels is a gated community built around a golf course on the edge of
Garden of the Gods, named after the rock formation you can see from a lot of the
back gardens. It is one of the few Colorado Springs addresses that competes with
the Broadmoor.`,
    sections: `## Where Kissing Camels actually is

West Colorado Springs off 30th Street, adjoining Garden of the Gods, north of
[Old Colorado City](/neighborhoods/colorado-springs/old-colorado-city/).

## The club

The Garden of the Gods Resort and Club sits at the centre, with golf and resort
amenities. Much of the neighborhood's value is tied to that association and to
the park boundary.

## The housing

A mix of custom houses, patio homes and villas from the 1970s onward. HOA
governance is extensive — read it carefully, including what club membership is
or is not tied to the property.`,
    suits: `Buyers at the top of the Colorado Springs market who want gated golf living
next to the city's best-known park.`,
    check: `**HOA and club membership terms** — whether membership conveys, and what it
costs annually.

**Wildfire exposure and insurance** at the park boundary.

**Tourist traffic** on the Garden of the Gods approaches in summer.

${SOIL}`,
  },

  // ---------------------------------------------------------------- Southwest
  {
    ...CS,
    sector: 'Southwest',
    slug: 'skyway',
    name: 'Skyway',
    title: 'Skyway, Colorado Springs — a neighborhood guide',
    summary:
      'A quiet foothills neighborhood above the Broadmoor with mid-century houses, big views and Cheyenne Mountain schools.',
    answer:
      'Skyway is a south-west Colorado Springs neighborhood set against the foothills above the Broadmoor, with predominantly 1950s–1970s housing. It is served by Cheyenne Mountain School District 12 and known for mountain views and quiet streets.',
    tags: ['skyway', 'colorado-springs', 'foothills', 'd12', 'mid-century', 'views'],
    bounds: 'South-west Colorado Springs on the slopes above the Broadmoor',
    housing: ['1950s–1970s ranches and split-levels', 'Later custom infill'],
    stats: ['Cheyenne Mountain D12', 'foothills setting', 'to downtown - 15 min'],
    parks: 'Bear Creek Regional Park, North Cheyenne Cañon',
    geo: { lat: 38.7861, lng: -104.8611 },
    links: [csCity, d12, parks],
    faq: [
      {
        q: 'What school district is Skyway in?',
        a: 'Cheyenne Mountain School District 12, a small and strongly performing district that also serves the Broadmoor. It is a significant part of why the south-west side prices as it does.',
      },
      {
        q: 'Is Skyway a good value?',
        a: 'It generally prices below the Broadmoor while sharing the same school district and a similar foothills setting, which makes it one of the better south-west options.',
      },
    ],
    sources: src,
    lede: `Skyway is the quieter, cheaper neighbour to the Broadmoor — the same foothills,
the same school district, mid-century houses instead of estates, and views that
cost a great deal more one ridge over.`,
    sections: `## Where Skyway actually is

South-west Colorado Springs on the slopes above the
[Broadmoor](/neighborhoods/colorado-springs/broadmoor/), below the Cheyenne
Mountain foothills.

## The schools

**Cheyenne Mountain School District 12** serves the area — small, well regarded,
and shared with the Broadmoor. For families this is the primary draw.

## The setting

Bear Creek Regional Park is below, and **North Cheyenne Cañon** with its
waterfalls and trails is a short drive west. The elevation gives most of the
neighborhood long views east.

## The housing

1950s–70s ranches and split-levels on hillside lots, with later custom infill.
Many are due for major systems work.`,
    suits: `Families who want D12 schools and a foothills setting without Broadmoor
pricing.`,
    check: `**Wildfire exposure and insurance** at the foothills interface.

**Slope, retaining walls and drainage.**

**Mid-century systems** — panels, sewer, windows.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Southwest',
    slug: 'cheyenne-canon',
    name: 'Cheyenne Cañon',
    title: 'Cheyenne Cañon, Colorado Springs — a neighborhood guide',
    summary:
      'The neighborhood at the mouth of North Cheyenne Cañon, with waterfalls, trails and creek-side houses minutes from downtown.',
    answer:
      'Cheyenne Cañon is a south-west Colorado Springs neighborhood at the mouth of North Cheyenne Cañon Park, with varied early- and mid-twentieth-century housing. It offers among the best trail and waterfall access of any residential area in the city.',
    tags: ['cheyenne-canon', 'colorado-springs', 'trails', 'waterfalls', 'foothills', 'creek'],
    bounds: 'South-west Colorado Springs along Cheyenne Boulevard toward the canyon mouth',
    housing: ['1900s–1960s cottages and houses', 'Creek-side and hillside lots'],
    stats: ['North Cheyenne Cañon Park', 'to downtown - 12 min', 'trailheads at the door'],
    parks: 'North Cheyenne Cañon Park, Seven Falls, Stratton Open Space',
    geo: { lat: 38.7889, lng: -104.85 },
    links: [
      csCity,
      { label: 'North Cheyenne Cañon Park', url: 'https://coloradosprings.gov/parks' },
      { label: 'Starsmore Discovery Center', url: 'https://coloradosprings.gov/parks' },
      d12,
    ],
    faq: [
      {
        q: 'What is North Cheyenne Cañon Park?',
        a: 'A large city park in the foothills south-west of Colorado Springs with waterfalls, the Mount Cutler and Seven Bridges trails, Helen Hunt Falls and the Starsmore Discovery Center. It is among the best open space in the city.',
      },
      {
        q: 'Is it safe to buy a creek-side house here?',
        a: 'Creek-side lots in a canyon mouth carry genuine flood and debris-flow exposure, particularly downstream of any burn area. Pull current flood mapping and get an insurance quote before committing.',
      },
    ],
    sources: src,
    lede: `Cheyenne Cañon is where the city stops and the mountains start. Houses along
the creek and up the slopes at the mouth of a canyon with waterfalls in it,
twelve minutes from downtown.`,
    sections: `## Where Cheyenne Cañon actually is

South-west Colorado Springs along Cheyenne Boulevard toward the canyon mouth,
west of the [Broadmoor](/neighborhoods/colorado-springs/broadmoor/).

## The park

**North Cheyenne Cañon Park** has Helen Hunt Falls, the Mount Cutler trail, the
Seven Bridges route and the Starsmore Discovery Center. **Seven Falls** is in the
adjacent South Cheyenne Cañon. **Stratton Open Space** connects north.

For anyone who hikes or runs several times a week, this is the best residential
trail access in Colorado Springs.

## The housing

Varied — 1900s cottages, mid-century houses, and later custom homes, on creek
lots and hillside lots. Character is high and consistency is low, which is part
of the appeal.

## The trade-offs

Canyon roads, summer visitor traffic to the falls, and genuine water and fire
exposure. This is a beautiful place to live that asks for more diligence than a
subdivision does.`,
    suits: `Hikers and runners who will use the canyon constantly, and buyers who want
character housing at the mountain edge.`,
    check: `**Flood and debris-flow mapping** on creek-side lots.

**Wildfire exposure, mitigation and insurance.**

**Access and plowing** on the steeper streets.

**Visitor traffic** in summer.

${SOIL}`,
  },

  {
    ...CS,
    sector: 'Southwest',
    slug: 'broadmoor-bluffs',
    name: 'Broadmoor Bluffs',
    title: 'Broadmoor Bluffs, Colorado Springs — a neighborhood guide',
    summary:
      'Newer hillside housing south of the Broadmoor with big views, D12 schools, and prices below the resort blocks.',
    answer:
      'Broadmoor Bluffs is a south-west Colorado Springs neighborhood on the slopes south of the Broadmoor, developed largely from the 1980s onward. It offers Cheyenne Mountain School District 12 schools and elevated views at prices below the historic Broadmoor area.',
    tags: ['broadmoor-bluffs', 'colorado-springs', 'd12', 'views', 'newer-housing'],
    bounds: 'South-west Colorado Springs south of the Broadmoor, along Broadmoor Bluffs Drive',
    housing: ['1980s–2000s houses', 'Some custom hillside homes'],
    stats: ['Cheyenne Mountain D12', 'elevated views', 'newer than the Broadmoor'],
    parks: 'Cheyenne Mountain State Park, Stratton Open Space',
    geo: { lat: 38.7639, lng: -104.8444 },
    links: [
      csCity,
      {
        label: 'Cheyenne Mountain State Park',
        url: 'https://cpw.state.co.us/placestogo/parks/CheyenneMountain',
      },
      d12,
    ],
    faq: [
      {
        q: 'How is Broadmoor Bluffs different from the Broadmoor?',
        a: 'It is newer — mostly 1980s onward rather than 1920s–60s — sits higher on the slopes to the south, and generally prices below the historic Broadmoor blocks while sharing the D12 school district.',
      },
    ],
    sources: src,
    lede: `Broadmoor Bluffs is the newer hillside development south of the resort: bigger,
younger houses on steeper ground, the same school district, and a lower number
than a Broadmoor address.`,
    sections: `## Where Broadmoor Bluffs actually is

South-west Colorado Springs on the slopes south of the
[Broadmoor](/neighborhoods/colorado-springs/broadmoor/), along Broadmoor Bluffs
Drive toward Cheyenne Mountain State Park.

## The housing

1980s–2000s houses, many stepped into the hillside with walk-out lower levels
and decks oriented east across the city. Some custom construction at the upper
end.

## The setting

**Cheyenne Mountain State Park** is immediately south with a substantial trail
network, and NORAD's Cheyenne Mountain complex is inside the mountain itself.`,
    suits: `Families who want D12 schools with newer, larger housing and views.`,
    check: `**Slope, drainage and retaining walls** — this is steep ground.

**Wildfire mitigation and insurance.**

**HOA terms** where applicable.

${SOIL}`,
  },
]
