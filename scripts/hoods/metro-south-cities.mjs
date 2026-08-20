import { SRC } from './_template.mjs'

const src = [SRC.car, SRC.census]

const CS = { city: 'colorado-springs', cityName: 'Colorado Springs', sector: 'Colorado Springs' }
const AU = { city: 'aurora', cityName: 'Aurora', sector: 'Aurora' }
const LW = { city: 'lakewood', cityName: 'Lakewood', sector: 'Lakewood' }
const AR = { city: 'arvada', cityName: 'Arvada', sector: 'Arvada' }
const PU = { city: 'pueblo', cityName: 'Pueblo', sector: 'Pueblo' }
const GO = { city: 'golden', cityName: 'Golden', sector: 'Golden' }
const LT = { city: 'littleton', cityName: 'Littleton', sector: 'Littleton' }
const WM = { city: 'westminster', cityName: 'Westminster', sector: 'Westminster' }

const jeffco = { label: 'Jeffco Public Schools', url: 'https://www.jeffcopublicschools.org/' }
const csCity = { label: 'City of Colorado Springs', url: 'https://coloradosprings.gov/' }
const auroraCity = { label: 'City of Aurora', url: 'https://www.auroragov.org/' }
const cherryCreek = {
  label: 'Cherry Creek School District',
  url: 'https://www.cherrycreekschools.org/',
}

export const metroSouthHoods = [
  // ---------------------------------------------------- Colorado Springs
  {
    ...CS,
    slug: 'old-colorado-city',
    name: 'Old Colorado City',
    featured: true,
    title: 'Old Colorado City, Colorado Springs — a neighborhood guide',
    summary:
      'The 1859 townsite that predates Colorado Springs itself, with a preserved main street and the closest housing to Garden of the Gods.',
    answer:
      'Old Colorado City is a historic west-side Colorado Springs neighborhood founded in 1859, predating the city itself and briefly serving as territorial capital. It has a preserved commercial district on Colorado Avenue and the closest residential access to Garden of the Gods.',
    tags: ['old-colorado-city', 'colorado-springs', 'historic', 'walkable', 'garden-of-the-gods'],
    bounds: 'Colorado Avenue corridor, roughly 21st to 31st Street',
    housing: ['1880s–1920s Victorian cottages and brick', 'Some newer infill'],
    stats: ['founded 1859', 'Garden of the Gods - 5 min', 'walkable main street'],
    parks: 'Garden of the Gods, Bear Creek, Red Rock Canyon Open Space',
    geo: { lat: 38.8544, lng: -104.8664 },
    links: [
      csCity,
      { label: 'Garden of the Gods', url: 'https://gardenofgods.com/' },
      { label: 'Old Colorado City Historic District', url: 'https://shopoldcoloradocity.com/' },
      { label: 'Colorado Springs School District 11', url: 'https://www.d11.org/' },
    ],
    faq: [
      {
        q: 'Is Old Colorado City older than Colorado Springs?',
        a: 'Yes. It was founded in 1859 as Colorado City, served briefly as the territorial capital in 1862, and predates Colorado Springs by twelve years. It was annexed by the city in 1917.',
      },
      {
        q: 'How close is Old Colorado City to Garden of the Gods?',
        a: 'About five minutes by car and walkable from the western blocks. It is the closest residential neighborhood to the park.',
      },
    ],
    sources: src,
    lede: `Old Colorado City was a town before Colorado Springs existed — founded in 1859,
briefly the territorial capital, and annexed in 1917. Its main street survived,
and so did the Victorian cottages behind it, five minutes from Garden of the
Gods.`,
    sections: `## Where Old Colorado City actually is

The west side of Colorado Springs along Colorado Avenue, roughly 21st to 31st
Street, below the Garden of the Gods and Red Rock Canyon.

## The history

Founded in 1859 during the Pikes Peak gold rush, it served as the Colorado
Territory capital briefly in 1862. General Palmer founded Colorado Springs
alongside it in 1871 as a dry, planned resort town — and Colorado City, which
was neither, remained the rougher neighbour until annexation in 1917.

## The main street

The Colorado Avenue commercial district is preserved and genuinely walkable —
independent shops, restaurants and galleries in nineteenth-century buildings.

## The housing

1880s–1920s Victorian cottages and brick houses on a compact grid, plus newer
infill. Prices sit above the Colorado Springs median of $499,900 for comparable
size, reflecting the location and the walkability.

## The open space

**Garden of the Gods** is five minutes away, **Red Rock Canyon Open Space** is
adjacent, and **Bear Creek** runs nearby. This is the best trail access of any
Colorado Springs neighborhood outside the Broadmoor area.`,
    suits: `Buyers who want a walkable historic main street with immediate trail access,
and who will use the west-side open space.`,
    check: `**Wildfire exposure** — this is the wildland-urban interface, and the 2012
Waldo Canyon Fire burned nearby.

**Insurance availability and cost** before contracting.

**Pre-1930 systems** on the older housing.`,
  },

  {
    ...CS,
    slug: 'broadmoor',
    name: 'The Broadmoor',
    featured: true,
    title: 'The Broadmoor, Colorado Springs — a neighborhood guide',
    summary:
      'The top of the Colorado Springs market: a grand resort, a lake, and large houses climbing into the foothills below Cheyenne Mountain.',
    answer:
      'The Broadmoor is an affluent south-west Colorado Springs neighborhood around The Broadmoor resort, opened in 1918. It contains the city’s most expensive housing, sits below Cheyenne Mountain, and is served by Cheyenne Mountain School District 12.',
    tags: ['broadmoor', 'colorado-springs', 'affluent', 'resort', 'foothills'],
    bounds: 'South-west Colorado Springs around Lake Avenue and Cheyenne Boulevard',
    housing: ['1920s–present large houses', 'Custom foothills homes'],
    stats: ['top of the Springs market', 'Cheyenne Mountain D12', 'foothills setting'],
    parks: 'Cheyenne Mountain, Seven Falls, North Cheyenne Cañon',
    geo: { lat: 38.7917, lng: -104.8478 },
    links: [
      csCity,
      { label: 'The Broadmoor', url: 'https://www.broadmoor.com/' },
      { label: 'Cheyenne Mountain School District 12', url: 'https://www.cmsd12.org/' },
    ],
    faq: [
      {
        q: 'Is the Broadmoor the most expensive area of Colorado Springs?',
        a: 'Yes, generally. It combines the resort, the foothills setting, large lots and the Cheyenne Mountain School District, and it sits well above the city’s $499,900 median.',
      },
      {
        q: 'What is North Cheyenne Cañon?',
        a: 'A city park in the foothills above the Broadmoor with waterfalls, hiking and the Mount Cutler and Seven Bridges trails. It is among the best open space in the city.',
      },
    ],
    sources: src,
    lede: `The Broadmoor is where Colorado Springs keeps its money: a 1918 resort on a
lake, a golf course, and large houses climbing into the foothills below Cheyenne
Mountain.`,
    sections: `## Where the Broadmoor actually is

South-west Colorado Springs around Lake Avenue and Cheyenne Boulevard, below
Cheyenne Mountain.

## The resort

The Broadmoor opened in 1918 and remains one of the best-known resort hotels in
the United States, with golf courses, a lake and extensive grounds. It anchors
the neighborhood and gives it the name.

## The open space

**North Cheyenne Cañon Park** and **Seven Falls** are immediately above, with
waterfalls, the Mount Cutler trail and the Seven Bridges route. **Cheyenne
Mountain State Park** is nearby.

## The schools

Cheyenne Mountain School District 12 is small and among the strongest performing
in the region, and it is a significant part of the pricing.`,
    suits: `Buyers at the top of the Colorado Springs market who want a foothills setting
and the D12 schools.`,
    check: `**Wildfire risk and insurance** at the foothills interface.

**Slope, drainage and access** on the mountain lots.

**HOA and covenant terms**, which are extensive in parts of the area.`,
  },

  {
    ...CS,
    slug: 'briargate',
    name: 'Briargate',
    title: 'Briargate, Colorado Springs — a neighborhood guide',
    summary:
      'North Colorado Springs: master-planned subdivisions, Academy District 20 schools, and the region’s most sought-after family housing.',
    answer:
      'Briargate is a large master-planned area in northern Colorado Springs, developed from the 1980s. It is served by Academy School District 20, the region’s most sought-after district, and contains predominantly post-1985 single-family housing.',
    tags: ['briargate', 'colorado-springs', 'schools', 'family', 'master-planned', 'd20'],
    bounds: 'North Colorado Springs, Briargate Parkway corridor east of I-25',
    housing: ['1985–present single-family subdivisions', 'Townhomes and apartments'],
    stats: ['Academy District 20', 'to downtown Springs - 20 min', 'newer housing'],
    parks: 'Cottonwood Creek Trail, Pine Creek open space',
    geo: { lat: 38.9536, lng: -104.7669 },
    links: [csCity, { label: 'Academy School District 20', url: 'https://www.asd20.org/' }],
    faq: [
      {
        q: 'Is Academy District 20 the best school district in Colorado Springs?',
        a: 'It is the most sought-after in the region and consistently among the top-performing districts in the state, which is the main reason north-side housing carries a premium.',
      },
      {
        q: 'Is Briargate expensive?',
        a: 'It runs above the Colorado Springs median of $499,900, driven by the schools and the newer housing stock, though it remains well below Denver metro pricing.',
      },
    ],
    sources: src,
    lede: `Briargate is where families move in Colorado Springs. Post-1985 subdivisions,
Academy District 20 schools, and enough retail and services that most errands
never require going south.`,
    sections: `## Where Briargate actually is

Northern Colorado Springs along the Briargate Parkway corridor east of I-25,
south of the Air Force Academy.

## The schools

**Academy School District 20** is the draw. It consistently ranks among the
strongest districts in Colorado, and the boundary is one of the sharpest price
lines in the region.

## The housing

1985 onward: conventional subdivisions, larger houses, HOAs, and a growing
amount of townhome and apartment product. Construction continues on the northern
and eastern edges.

## The trade-off

Very little walkable amenity beyond shopping centres, and a twenty-minute drive
to downtown. What you get is space, schools and newer systems.`,
    suits: `Families targeting D20 schools, military families at the Academy and
Peterson, and buyers who want new construction.`,
    check: `**Exact school assignment** — D20 boundaries do not follow neighborhood names.

**Metro district mill levies**, common in the newer subdivisions.

**Expansive soils**, an issue across the Colorado Springs area — get a
structural opinion on any foundation concern.`,
  },

  {
    ...CS,
    slug: 'downtown-colorado-springs',
    name: 'Downtown Colorado Springs',
    title: 'Downtown Colorado Springs — a neighborhood guide',
    summary:
      'General Palmer’s 1871 grid, with the grandest historic housing in the region and a downtown that has genuinely improved.',
    answer:
      'Downtown Colorado Springs is the original 1871 grid laid out by General William Jackson Palmer, containing the city’s commercial core and, in the surrounding Old North End, its grandest historic housing.',
    tags: [
      'downtown-colorado-springs',
      'colorado-springs',
      'historic',
      'walkable',
      'old-north-end',
    ],
    bounds: 'The downtown grid and the Old North End, north of Colorado Avenue',
    housing: ['1880s–1920s grand houses in the Old North End', 'Downtown lofts and apartments'],
    stats: ['founded 1871', 'Old North End historic district', 'walkable core'],
    parks: 'Acacia Park, Monument Valley Park, America the Beautiful Park',
    geo: { lat: 38.8339, lng: -104.8214 },
    links: [
      csCity,
      { label: 'Downtown Partnership of Colorado Springs', url: 'https://downtowncs.com/' },
      { label: 'Colorado Springs School District 11', url: 'https://www.d11.org/' },
    ],
    faq: [
      {
        q: 'What is the Old North End in Colorado Springs?',
        a: 'A historic district immediately north of downtown with the city’s grandest late-nineteenth and early-twentieth-century houses, built by the mining and railroad wealth of the Cripple Creek era. It is a designated historic district with design review.',
      },
      {
        q: 'Has downtown Colorado Springs improved?',
        a: 'Substantially over the last decade — new restaurants, the US Olympic and Paralympic Museum, Weidner Field, and considerable residential development. It is the most-changed part of the city.',
      },
    ],
    sources: src,
    lede: `General Palmer laid out Colorado Springs in 1871 as a planned, teetotal resort
town, and the grid he drew is still the downtown. The Old North End behind it
holds the grandest houses in southern Colorado.`,
    sections: `## Where downtown actually is

The original grid between Monument Creek and Nevada Avenue, with the **Old North
End** extending north of Colorado College.

## The Old North End

A designated historic district containing the houses built on Cripple Creek gold
and railroad money — large, varied, and unusually well preserved. Design review
applies.

## Downtown itself

Genuinely improved: the **US Olympic and Paralympic Museum**, **Weidner Field**,
a growing restaurant scene, and substantial new apartment development. Acacia
Park and Monument Valley Park provide the green space.

## Colorado College

The private liberal arts college sits between downtown and the Old North End and
shapes the surrounding blocks.`,
    suits: `Buyers who want a grand historic house in the Old North End, and renters or
condo buyers who want walkable downtown living at well below Denver prices.`,
    check: `**Historic district review** in the Old North End.

**Pre-1930 systems** — these are large old houses.

**Student rental proximity** near Colorado College.`,
  },

  // ---------------------------------------------------- Aurora
  {
    ...AU,
    slug: 'havana-district',
    name: 'Havana District',
    featured: true,
    title: 'Havana District, Aurora — a neighborhood guide',
    summary:
      'The best eating in Colorado: a three-mile corridor of Korean, Ethiopian, Vietnamese, Mexican and East African restaurants, with solid 1960s housing behind it.',
    answer:
      'The Havana District is a central Aurora corridor along Havana Street, home to the densest concentration of immigrant-owned restaurants and businesses in Colorado. The surrounding housing is predominantly 1960s–70s and priced below the Aurora median of $515,000.',
    tags: ['havana-district', 'aurora', 'food', 'diversity', 'value', 'mid-century'],
    bounds: 'The Havana Street corridor, roughly Colfax to Mississippi Avenue',
    housing: ['1960s–1970s ranches and brick', 'Apartments along the corridor'],
    stats: ['best food in Colorado', 'to downtown Denver - 20 min', 'value - below Aurora median'],
    parks: 'Del Mar Park, Utah Park',
    geo: { lat: 39.71, lng: -104.8664 },
    links: [
      auroraCity,
      { label: 'On Havana Street business district', url: 'https://onhavanastreet.com/' },
      { label: 'Aurora Public Schools', url: 'https://aurorak12.org/' },
    ],
    faq: [
      {
        q: 'What is the Havana District in Aurora known for?',
        a: 'Food. It holds one of the densest concentrations of Korean, Ethiopian, Vietnamese, Mexican, Salvadoran and East African restaurants in the Mountain West, most of them family-owned, within about three miles.',
      },
      {
        q: 'Is the Havana District a good place to buy?',
        a: 'It offers solid 1960s and 70s housing below the Aurora median of $515,000, twenty minutes from downtown Denver, with the best food access in the state. The trade-offs are arterial noise and a housing stock that often needs updating.',
      },
    ],
    sources: src,
    lede: `Havana Street is the best eating in Colorado and it is not close. Three miles
of Korean barbecue, Ethiopian injera, Vietnamese phở, Mexican from half a dozen
regions and East African cafés — with unremarkable, affordable 1960s housing on
the streets behind it.`,
    sections: `## Where the Havana District actually is

Central Aurora along Havana Street, roughly Colfax down to Mississippi, west of
[Denver's East Colfax](/neighborhoods/denver/east-colfax/).

## The food

This is the reason to know the neighborhood. Korean barbecue and grocery stores,
Ethiopian restaurants and coffee houses, Vietnamese phở and bánh mì, regional
Mexican, Salvadoran pupuserías, and East African cafés — overwhelmingly
family-owned.

The **On Havana Street** business improvement district organises the corridor
and is a good starting point for finding places.

## The housing

1960s–70s brick ranches and small houses on standard lots, plus apartment stock
along the arterials. Prices sit below the Aurora median of $515,000.

## Schools

Most of the area is Aurora Public Schools rather than Cherry Creek. The
boundary between the two is one of the biggest price factors in Aurora — verify
it for any address.`,
    suits: `Value buyers and investors, and anyone who wants to eat extremely well without
paying Denver prices.`,
    check: `**School district boundary** — Aurora Public Schools vs. Cherry Creek.

**Arterial noise** on Havana itself.

**1960s–70s systems** and any unpermitted work.`,
  },

  {
    ...AU,
    slug: 'southlands',
    name: 'Southlands',
    title: 'Southlands, Aurora — a neighborhood guide',
    summary:
      'Far south-east Aurora: new master-planned subdivisions, Cherry Creek schools, and the longest commutes in the metro.',
    answer:
      'Southlands is a master-planned area in far south-east Aurora around the Southlands shopping centre, developed since the 2000s. It is served by the Cherry Creek School District and contains the newest housing in the city.',
    tags: ['southlands', 'aurora', 'new-construction', 'cherry-creek-schools', 'family'],
    bounds: 'Far south-east Aurora around E-470 and Smoky Hill Road',
    housing: ['2000s–present single-family subdivisions', 'Townhomes'],
    stats: ['Cherry Creek School District', 'to downtown Denver - 35 min', 'newest Aurora housing'],
    parks: 'Aurora Reservoir, Southlands trails',
    geo: { lat: 39.6203, lng: -104.6969 },
    links: [
      auroraCity,
      cherryCreek,
      { label: 'Aurora Reservoir', url: 'https://www.auroragov.org/things_to_do/aurora_reservoir' },
    ],
    faq: [
      {
        q: 'Is Southlands in the Cherry Creek School District?',
        a: 'Yes — south-east Aurora is largely Cherry Creek School District, which is a substantial part of why housing there prices above the rest of the city.',
      },
      {
        q: 'How long is the commute from Southlands to downtown Denver?',
        a: 'Roughly 35 minutes midday and considerably longer at peak. It is a long way out, which is the trade for the newer housing and the school district.',
      },
    ],
    sources: src,
    lede: `Southlands is Aurora's newest edge — post-2000 subdivisions around a large
outdoor shopping centre, in the Cherry Creek School District, with the Aurora
Reservoir nearby and a long drive to anywhere central.`,
    sections: `## Where Southlands actually is

Far south-east Aurora around E-470 and Smoky Hill Road, near the Arapahoe County
line.

## The schools

Cherry Creek School District, which is the primary reason for the pricing
premium over the rest of Aurora.

## The reservoir

**Aurora Reservoir** is nearby with swimming, boating and a paved loop — one of
the better water amenities in the metro.

## The housing

2000s onward: conventional subdivisions, larger houses, HOAs and metro districts
throughout.`,
    suits: `Families who want new construction and Cherry Creek schools at below Douglas
County pricing, and who accept the commute.`,
    check: `**Metro district mill levy**, which is common and material here.

**Commute driven at rush hour**, not estimated.

**HOA terms.**`,
  },

  // ---------------------------------------------------- Lakewood
  {
    ...LW,
    slug: 'belmar',
    name: 'Belmar',
    title: 'Belmar, Lakewood — a neighborhood guide',
    summary:
      'A downtown built from scratch on a demolished mall site, and the most walkable place in Lakewood.',
    answer:
      'Belmar is a mixed-use district in central Lakewood built in the 2000s on the site of the demolished Villa Italia mall. It combines retail, restaurants, apartments and offices in a walkable street grid, functioning as Lakewood’s de facto downtown.',
    tags: ['belmar', 'lakewood', 'walkable', 'mixed-use', 'redevelopment'],
    bounds: 'Wadsworth Boulevard to Teller Street, Alameda to Virginia Avenue',
    housing: ['2000s–present apartments, condos and townhomes'],
    stats: ['Lakewood’s downtown', 'to Denver - 20 min', 'walkable'],
    parks: 'Belmar Park, Kountze Lake',
    geo: { lat: 39.7089, lng: -105.0806 },
    links: [
      { label: 'City of Lakewood', url: 'https://www.lakewood.org/' },
      { label: 'Belmar', url: 'https://belmarcolorado.com/' },
      jeffco,
    ],
    faq: [
      {
        q: 'What was Belmar before?',
        a: 'The Villa Italia shopping mall, once one of the largest in the region, which was demolished in the early 2000s and replaced with a walkable mixed-use street grid.',
      },
      {
        q: 'Is Belmar a real downtown?',
        a: 'It functions as one — streets, ground-floor retail, restaurants, a cinema, apartments above and offices — and it is the most walkable place in Lakewood. It is new rather than historic, which some people mind.',
      },
    ],
    sources: src,
    lede: `Belmar is a downtown that did not exist twenty-five years ago. The Villa Italia
mall was demolished and replaced with actual streets, and the result is the most
walkable place in Lakewood.`,
    sections: `## Where Belmar actually is

Central Lakewood between Wadsworth and Teller, Alameda to Virginia, about twenty
minutes from downtown Denver.

## What is there

A walkable grid of retail, restaurants, a cinema, offices and residential
above — plus **Belmar Park** and Kountze Lake immediately south, which is a
genuine 130-acre park with a heron rookery.

## The housing

Entirely post-2000: apartments, condos and townhomes. There is no detached
single-family stock within Belmar proper.

## The context

Lakewood's 2019 voter-approved growth cap limits new residential construction to
about 1% of stock annually, which affects how much more housing can be added
here.`,
    suits: `Renters and condo buyers who want walkability in Jefferson County, and
downsizers who want lock-and-leave near a park.`,
    check: `**HOA terms and reserves** on condo product.

**Which building** — quality varies across Belmar's construction phases.

**Noise** from the retail and cinema on the nearest units.`,
  },

  {
    ...LW,
    slug: 'green-mountain',
    name: 'Green Mountain',
    title: 'Green Mountain, Lakewood — a neighborhood guide',
    summary:
      'West Lakewood on the slopes below a 2,400-acre open space park, with mid-century houses and trails at the end of the street.',
    answer:
      'Green Mountain is a west Lakewood neighborhood on the slopes below William Frederick Hayden Park, a 2,400-acre open space. It has predominantly 1960s–70s housing with mountain views and direct trail access.',
    tags: ['green-mountain', 'lakewood', 'open-space', 'trails', 'mid-century', 'views'],
    bounds: 'West Lakewood between Alameda and Morrison Road, west of Union Boulevard',
    housing: ['1960s–1970s ranches, tri-levels and split-levels'],
    stats: ['2,400-acre park', 'to Denver - 25 min', 'foothills - 10 min'],
    parks: 'William Frederick Hayden Park on Green Mountain, Bear Creek Lake Park',
    geo: { lat: 39.7028, lng: -105.1361 },
    links: [
      { label: 'City of Lakewood', url: 'https://www.lakewood.org/' },
      {
        label: 'William Frederick Hayden Park',
        url: 'https://www.lakewood.org/Government/Departments/Community-Resources/Parks-Forestry-and-Open-Space',
      },
      jeffco,
    ],
    faq: [
      {
        q: 'Can you hike on Green Mountain in Lakewood?',
        a: 'Yes — William Frederick Hayden Park covers about 2,400 acres of the mountain with a substantial trail network open to hikers, runners, cyclists and horses. It is one of the largest open spaces inside a Front Range suburb.',
      },
      {
        q: 'Is Green Mountain a good neighborhood?',
        a: 'It is one of the better mid-century options in Jefferson County, with real open space at the door, mountain views and quick access to both Denver and the foothills.',
      },
    ],
    sources: src,
    lede: `Green Mountain is a 1960s and 70s neighborhood on the slopes below 2,400 acres
of open space, with the Front Range out the window and trails at the end of the
street.`,
    sections: `## Where Green Mountain actually is

West Lakewood between Alameda and Morrison Road, west of Union Boulevard, on and
below the mountain itself.

## The park

**William Frederick Hayden Park** covers about 2,400 acres of Green Mountain with
an extensive trail network. It is among the largest open spaces contained inside
a Front Range suburb, and it is the neighborhood's defining feature.

**Bear Creek Lake Park** is a short drive south.

## The housing

1960s–70s ranches, tri-levels and split-levels, many with mountain views. Solid
construction, generally well maintained, and priced around or below the Denver
metro median.`,
    suits: `Hikers and runners, families who want open space at the door, and anyone
splitting time between Denver and the mountains.`,
    check: `**Wildfire exposure** on the upper slopes — this is grassland interface.

**Slope, drainage and retaining walls** on hillside lots.

**1970s systems** approaching replacement.`,
  },

  // ---------------------------------------------------- Arvada
  {
    ...AR,
    slug: 'olde-town-arvada',
    name: 'Olde Town Arvada',
    featured: true,
    title: 'Olde Town Arvada — a neighborhood guide',
    summary:
      'A real town square with a commuter train attached, and the streets around it that made Arvada the metro’s best answer for a bikeable childhood.',
    answer:
      'Olde Town Arvada is the historic centre of Arvada, a preserved late-1800s commercial square with an RTD G Line commuter rail station. The surrounding residential grid is pre-war and 1950s housing with streets that dead-end into schools rather than arterials.',
    tags: ['olde-town-arvada', 'arvada', 'walkable', 'g-line', 'biking', 'historic'],
    bounds: 'Around Olde Wadsworth Boulevard and Grandview Avenue',
    housing: ['1900s–1950s bungalows and brick', 'Recent transit-oriented infill'],
    stats: ['G Line - 28 min to Union Station', 'school walk - 6 min typical', 'town square'],
    transit: 'RTD G Line at Olde Town Arvada station, every 15 minutes most of the day',
    parks: 'Ralston Creek Trail, Memorial Park',
    geo: { lat: 39.8028, lng: -105.0875 },
    links: [
      { label: 'City of Arvada', url: 'https://arvadaco.gov/' },
      { label: 'Olde Town Arvada', url: 'https://oldetownarvada.org/' },
      { label: 'RTD G Line', url: 'https://www.rtd-denver.com/' },
      jeffco,
    ],
    faq: [
      {
        q: 'Can you take a train from Olde Town Arvada to Denver?',
        a: 'Yes — the RTD G Line runs from Olde Town Arvada to Denver Union Station in under half an hour. RTD increased frequency to every 15 minutes for most of the day in 2026.',
      },
      {
        q: 'Why is Arvada good for kids biking to school?',
        a: 'The older grid around Olde Town dead-ends into schools rather than arterials, and the Ralston Creek Trail runs through. The result is genuinely heavy scooter and bike traffic at 3pm — the clearest evidence a neighborhood works for children.',
      },
    ],
    sources: src,
    lede: `Olde Town Arvada is the thing most Denver suburbs are missing: a real square,
with real nineteenth-century buildings, a farmers market, bars people actually
go to, and a commuter train that reaches Union Station in under half an hour.`,
    sections: `## Where Olde Town actually is

The historic centre of Arvada around Olde Wadsworth Boulevard and Grandview
Avenue, about twenty-eight minutes from Denver Union Station on the G Line.

## The square

Arvada was founded in 1870 and Olde Town is the surviving core — a compact
square of late-1800s brick buildings, carefully rather than destructively
redeveloped, with the rail station at its edge.

## The G Line

RTD's G Line connects Olde Town to Union Station. Service improved to every 15
minutes for most of the day in 2026, which materially changed the commuting
proposition.

## The bike thing

The older grid dead-ends into schools rather than arterials, and the **Ralston
Creek Trail** runs east–west through the city. We use Arvada as one of our three
examples in [where can my kid actually ride a bike to
school?](/answers/kid-bike-to-school/)

## The housing

1900s–1950s bungalows and brick houses closest to the square, with recent
transit-oriented apartment and townhome infill nearer the station.`,
    suits: `Families who want walkability and a bikeable school route, and commuters who
want rail. One of our most frequent recommendations in the metro.`,
    check: `**Proximity to the rail line** for noise.

**Sewer scope** on pre-1955 houses.

**Parking**, which is tight near the square.`,
  },

  // ---------------------------------------------------- Golden
  {
    ...GO,
    slug: 'downtown-golden',
    name: 'Downtown Golden',
    title: 'Downtown Golden — a neighborhood guide',
    summary:
      'Washington Avenue, Clear Creek running through the middle, and the old territorial capitol — the most walkable small downtown on the Front Range.',
    answer:
      'Downtown Golden is the historic core of Golden along Washington Avenue, containing the former Colorado territorial capitol and a walkable commercial district with Clear Creek running through it. Housing nearby is predominantly late-1800s to mid-century.',
    tags: ['downtown-golden', 'golden', 'historic', 'walkable', 'clear-creek'],
    bounds: 'Washington Avenue corridor along Clear Creek',
    housing: ['1870s–1950s houses', 'Limited infill'],
    stats: ['territorial capitol 1862–67', 'Clear Creek through downtown', 'W Line nearby'],
    parks: 'Clear Creek Trail, Lions Park, North and South Table Mountain',
    geo: { lat: 39.7555, lng: -105.2211 },
    links: [
      { label: 'City of Golden', url: 'https://www.cityofgolden.net/' },
      { label: 'Visit Golden', url: 'https://www.visitgolden.com/' },
      jeffco,
    ],
    faq: [
      {
        q: 'Was Golden the capital of Colorado?',
        a: 'Yes, from 1862 to 1867 Golden was the capital of Colorado Territory. The old territorial capitol building still stands on Washington Avenue.',
      },
      {
        q: 'Can you tube through downtown Golden?',
        a: 'Yes. Clear Creek runs through the middle of downtown with a whitewater park, and tubing is a defining summer activity — busy enough to be a local traffic issue.',
      },
    ],
    sources: src,
    lede: `Downtown Golden has a creek running through the middle of it, a nineteenth-
century capitol on the main street, and mountains starting immediately west. For
a town of twenty thousand it is remarkably complete.`,
    sections: `## Where downtown Golden actually is

The Washington Avenue corridor along Clear Creek, between North and South Table
Mountain at the mouth of Clear Creek Canyon.

## The creek

Clear Creek runs through downtown with a whitewater park and a paved trail.
Tubing in July is heavy enough to constitute a local traffic problem, which
tells you how central it is to the town.

## The history

Golden was the capital of Colorado Territory from 1862 to 1867 before it moved
to Denver, and the old capitol building survives on Washington Avenue.

## Constrained supply

Golden is hemmed in by two mesas, a canyon and open space. It cannot expand, and
with Colorado School of Mines, NREL and Coors employment locally, that is why
prices hold up.`,
    suits: `Buyers who want a genuinely walkable small downtown with mountain access, and
Mines or NREL employees.`,
    check: `**Flood mapping** along Clear Creek.

**Historic designation** on older properties.

**Summer tourist traffic** on the downtown blocks.`,
  },

  // ---------------------------------------------------- Littleton
  {
    ...LT,
    slug: 'downtown-littleton',
    name: 'Downtown Littleton',
    title: 'Downtown Littleton — a neighborhood guide',
    summary:
      'The best-preserved main street in the south metro, with a light rail station at the end of it.',
    answer:
      'Downtown Littleton is the historic core along Main Street, with preserved late-1800s and early-1900s brick commercial buildings and an RTD light rail station. Surrounding housing is predominantly early-twentieth-century.',
    tags: ['downtown-littleton', 'littleton', 'historic', 'walkable', 'light-rail', 'main-street'],
    bounds: 'Main Street corridor near the Littleton-Downtown light rail station',
    housing: ['1890s–1940s houses', 'Recent infill and townhomes'],
    stats: ['light rail at the end of Main Street', 'to Denver - 25 min', 'historic main street'],
    transit: 'RTD C and D lines at Littleton-Downtown',
    parks: 'South Platte Trail, Ketring Park, Hudson Gardens',
    geo: { lat: 39.6133, lng: -105.0166 },
    links: [
      { label: 'City of Littleton', url: 'https://www.littletonco.gov/' },
      { label: 'Historic Downtown Littleton', url: 'https://downtownlittleton.com/' },
      { label: 'Littleton Public Schools', url: 'https://littletonpublicschools.net/' },
    ],
    faq: [
      {
        q: 'Is downtown Littleton walkable?',
        a: 'Yes — Main Street is a compact, intact commercial run with independent shops and restaurants, and the Littleton-Downtown light rail station sits at its edge with a direct ride into Denver.',
      },
      {
        q: 'Is a Littleton mailing address the same as the city of Littleton?',
        a: 'No, and this catches people constantly. Large areas of unincorporated Jefferson and Douglas County carry a Littleton postal address but are outside the city, in different school districts, with different taxes and services.',
      },
    ],
    sources: src,
    lede: `Downtown Littleton has the most intact main street in the south metro and a
light rail station at the end of it. It is the closest the southern suburbs come
to Olde Town Arvada.`,
    sections: `## Where downtown Littleton actually is

The Main Street corridor near the South Platte, with the Littleton-Downtown
light rail station on its edge, twenty-five minutes from Denver.

## The main street

Brick storefronts, independent restaurants and shops, the town hall, and a
farmers market. It has survived largely intact.

## The postal address trap

"Littleton, CO" as a mailing address covers a vast area of unincorporated
Jefferson and Douglas County well beyond the city limits — different schools,
taxes, services and police. Confirm the actual jurisdiction before you assume
anything about a listing.

## Nearby

**Hudson Gardens**, the **South Platte Trail** and **Chatfield State Park** are all
close, which gives the area unusually good open space access.`,
    suits: `Buyers who want a walkable historic downtown with rail in the south metro, and
families using Littleton Public Schools.`,
    check: `**Actual jurisdiction and school district** for the parcel.

**Flood mapping** near the South Platte.

**Pre-1940 systems** on the older houses.`,
  },

  // ---------------------------------------------------- Westminster
  {
    ...WM,
    slug: 'standley-lake',
    name: 'Standley Lake',
    title: 'Standley Lake, Westminster — a neighborhood guide',
    summary:
      'West Westminster around a large reservoir and regional park, with mountain views and the best open space in the north metro.',
    answer:
      'The Standley Lake area is western Westminster around Standley Lake Regional Park, a large reservoir with trails and a heron rookery. Housing is predominantly 1970s–1990s with mountain views, priced around the Adams County median of $520,000.',
    tags: ['standley-lake', 'westminster', 'parks', 'views', 'family'],
    bounds: 'West Westminster around Standley Lake, west of Wadsworth Boulevard',
    housing: ['1970s–1990s houses', 'Some newer infill'],
    stats: ['Standley Lake Regional Park', 'to Denver - 25 min', 'to Boulder - 27 min'],
    parks: 'Standley Lake Regional Park, Big Dry Creek Trail',
    geo: { lat: 39.8672, lng: -105.1 },
    links: [
      { label: 'City of Westminster', url: 'https://www.cityofwestminster.us/' },
      {
        label: 'Standley Lake Regional Park',
        url: 'https://www.cityofwestminster.us/ParksRecreation/ParksTrailsOpenSpace/StandleyLake',
      },
      { label: 'Adams 12 Five Star Schools', url: 'https://www.adams12.org/' },
    ],
    faq: [
      {
        q: 'Can you swim in Standley Lake?',
        a: 'No — swimming is prohibited because the lake is a drinking water supply. Boating, fishing, camping and trail use are permitted, and there is a bald eagle and heron nesting area with seasonal closures.',
      },
      {
        q: 'Is west Westminster a good place to live?',
        a: 'It has the best open space in the north metro, mountain views, and the dual-commute advantage Westminster is known for — about 25 minutes to Denver and 27 to Boulder.',
      },
    ],
    sources: src,
    lede: `The Standley Lake side of Westminster has what the rest of the north metro
mostly does not: a large reservoir with real open space around it, mountain
views, and a commute that works to both Denver and Boulder.`,
    sections: `## Where it actually is

Western Westminster around Standley Lake, west of Wadsworth Boulevard, with
[Arvada](/places/arvada/) to the south.

## The park

**Standley Lake Regional Park** covers the reservoir and surrounding land with
trails, camping, boating and fishing. Swimming is not permitted — it is a
drinking water supply. There is a nesting area for bald eagles and a heron
rookery with seasonal closures.

## The dual commute

This is Westminster's structural advantage: roughly 25 minutes to downtown
Denver and 27 to Boulder. Very few Front Range addresses put both inside half an
hour.

## The housing

1970s–90s detached houses with mountain views on the western slopes, plus newer
infill. Note that Westminster straddles the Adams–Jefferson county line, which
changes the tax picture street by street.`,
    suits: `Two-city commuters, families who want open space and views, and buyers who
want a detached house near the metro median.`,
    check: `**Which county** the parcel is in — Adams and Jefferson set different mill
levies.

**Which school district** — Westminster contains three.

**1980s systems** approaching replacement.`,
  },

  // ---------------------------------------------------- Pueblo
  {
    ...PU,
    slug: 'pueblo-north-side',
    name: 'The North Side',
    title: 'The North Side, Pueblo — a neighborhood guide',
    summary:
      'Pueblo’s grandest historic housing: steel-money mansions and brick foursquares at prices that would be inconceivable in Denver.',
    answer:
      'The North Side is Pueblo’s historic residential district north of downtown, containing the city’s largest and best-preserved late-nineteenth and early-twentieth-century houses. Pueblo County’s June 2026 median was $324,000, roughly half the Denver metro figure.',
    tags: ['pueblo-north-side', 'pueblo', 'historic', 'value', 'mansions'],
    bounds: 'North of downtown Pueblo, around the Union Avenue and Mesa Junction areas',
    housing: ['1890s–1930s mansions, foursquares and bungalows'],
    stats: ['county median - $324K', 'historic housing', 'days on market - 96'],
    parks: 'Mineral Palace Park, Historic Arkansas Riverwalk',
    geo: { lat: 38.2761, lng: -104.6091 },
    links: [
      { label: 'City of Pueblo', url: 'https://www.pueblo.us/' },
      { label: 'Historic Arkansas Riverwalk of Pueblo', url: 'https://www.puebloharp.com/' },
      { label: 'Pueblo City Schools District 60', url: 'https://www.pueblocityschools.us/' },
    ],
    faq: [
      {
        q: 'Can you buy a historic mansion cheaply in Pueblo?',
        a: 'Relative to the rest of Colorado, yes. Pueblo County’s median sale price was $324,000 in June 2026 — about half the Denver metro figure — and the North Side holds genuinely grand steel-era houses. Many need substantial work.',
      },
      {
        q: 'Is Pueblo’s housing market slow?',
        a: 'Yes. June 2026 showed 96 days on market and 5.1 months of inventory, against 39 days in Denver metro. Buyers have time; sellers should expect to wait.',
      },
    ],
    sources: src,
    lede: `Pueblo's North Side holds the houses that steel built — 1890s to 1930s
mansions and brick foursquares, at prices that would not buy a condo in central
Denver.`,
    sections: `## Where the North Side actually is

North of downtown Pueblo, taking in the Mesa Junction area and the historic
residential streets above the Arkansas River.

## The housing

Late-nineteenth and early-twentieth-century: substantial mansions built on
Colorado Fuel and Iron money, brick foursquares, and bungalows. Several historic
districts cover parts of the area.

Condition varies enormously. Some are beautifully kept; many carry decades of
deferred maintenance. The purchase price is rarely the whole cost.

## The market reality

Pueblo County's June 2026 median was **$324,000** with **96 days on market** and
**5.1 months of inventory**. This is a slow market with cheap houses — good for a
patient buyer, hard for a seller in a hurry. See
[buy in Longmont or in Pueblo?](/investing/longmont-vs-pueblo/) for the
investment framing.

## Nearby

The **Historic Arkansas Riverwalk** downtown and **Mineral Palace Park** are the
main civic amenities.`,
    suits: `Buyers who want a genuinely grand historic house on a modest budget and have
priced the renovation honestly, and patient investors.`,
    check: `**Full systems survey** — these are old houses with old everything.

**Knob-and-tube, galvanised supply and asbestos** are all plausible.

**Insurance availability** on unrenovated historic properties.

**Realistic resale timeline** given 96 days on market.`,
  },

  {
    ...PU,
    slug: 'bessemer',
    name: 'Bessemer',
    title: 'Bessemer, Pueblo — a neighborhood guide',
    summary:
      'The old mill neighborhood: closest to the steelworks, deepest immigrant history, and the cheapest housing on the Front Range.',
    answer:
      'Bessemer is a historic working-class neighborhood in southern Pueblo, built around the Colorado Fuel and Iron steelworks. It holds the city’s deepest Italian, Slovenian and Mexican immigrant history and among the lowest housing prices in Colorado.',
    tags: ['bessemer', 'pueblo', 'industrial', 'history', 'affordable', 'immigrant-history'],
    bounds: 'Southern Pueblo around Northern Avenue, near the steel mill',
    housing: ['1890s–1940s cottages and small brick houses'],
    stats: ['county median - $324K', 'lowest prices on the Front Range', 'steel mill history'],
    parks: 'Bessemer Park, Runyon Field',
    geo: { lat: 38.2439, lng: -104.6236 },
    links: [
      { label: 'City of Pueblo', url: 'https://www.pueblo.us/' },
      { label: 'Steelworks Center of the West', url: 'https://www.steelworks.us/' },
      { label: 'Pueblo City Schools District 60', url: 'https://www.pueblocityschools.us/' },
    ],
    faq: [
      {
        q: 'What is the history of Bessemer in Pueblo?',
        a: 'It grew as the company neighborhood for the Colorado Fuel and Iron steelworks from the 1880s, settled by Italian, Slovenian, Croatian, Mexican and other immigrant families who worked the mill. The Steelworks Center of the West museum documents it.',
      },
      {
        q: 'Is Bessemer cheap?',
        a: 'It is among the least expensive neighborhoods on the entire Front Range. Pueblo County’s median was $324,000 in June 2026, and Bessemer runs well below that.',
      },
    ],
    sources: src,
    lede: `Bessemer is the neighborhood the steel mill built — company housing from the
1880s onward, filled with Italian, Slovenian, Croatian and Mexican families, and
still the cheapest housing on the Front Range.`,
    sections: `## Where Bessemer actually is

Southern Pueblo around Northern Avenue, adjoining the steelworks site.

## The mill

Colorado Fuel and Iron built the largest steel mill west of the Mississippi
here, and Bessemer was its neighborhood. The mill still operates as Evraz Rocky
Mountain Steel at a fraction of its former employment.

The **Steelworks Center of the West**, in the old CF&I dispensary building,
holds the company archive and is genuinely worth visiting.

## The housing

1890s–1940s cottages and small brick houses on narrow lots. Modest, and
frequently in need of work.

## The honest part

This is a low-income neighborhood adjoining heavy industry, with the air quality
and environmental history that implies. It also has a strong community identity
and some of the best Mexican and Italian food in southern Colorado.`,
    suits: `Investors seeking the highest yields on the Front Range, and buyers who want
the lowest possible entry price and understand the trade-offs.`,
    check: `**Environmental and industrial adjacency** — ask about soil and air quality.

**Full systems survey** on pre-1940 housing.

**Insurance availability.**

**Realistic exit timeline** — Pueblo runs 96 days on market.`,
  },
]
