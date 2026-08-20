import { SRC } from './_template.mjs'

const se = { city: 'denver', cityName: 'Denver', sector: 'Southeast Denver' }
const sw = { city: 'denver', cityName: 'Denver', sector: 'Southwest Denver' }
const ne = { city: 'denver', cityName: 'Denver', sector: 'Northeast Denver' }
const src = [SRC.denverNbhd, SRC.car]

const denverLink = { label: 'City and County of Denver', url: 'https://www.denvergov.org/' }
const dpsLink = { label: 'Denver Public Schools', url: 'https://www.dpsk12.org/' }
const canal = { label: 'Highline Canal Conservancy', url: 'https://highlinecanal.org/' }

export const denverEdges = [
  // ------------------------------------------------------------ Southeast
  {
    ...ne,
    slug: 'central-park',
    name: 'Central Park',
    featured: true,
    title: 'Central Park (formerly Stapleton), Denver — a neighborhood guide',
    summary:
      'A 4,700-acre master-planned community on the old Stapleton airport site — Denver’s biggest twenty-first-century neighborhood, renamed in 2020.',
    answer:
      'Central Park is a large master-planned Denver neighborhood built on the site of the former Stapleton International Airport, which closed in 1995. Developed from 2001 onward, it contains thousands of homes, extensive parks and its own town centres. It was renamed from Stapleton in 2020.',
    tags: ['central-park', 'stapleton', 'denver', 'master-planned', 'new-construction', 'family'],
    bounds: 'Quebec Street to Havana Street, Martin Luther King Boulevard to I-70',
    housing: ['2001–present houses, townhomes and apartments'],
    stats: ['former Stapleton airport', 'to downtown - 20 min', 'A Line rail'],
    transit: 'RTD A Line at Central Park station',
    parks: 'Central Park, Westerly Creek, Sand Creek Greenway, Bluff Lake',
    geo: { lat: 39.7658, lng: -104.8889 },
    links: [
      denverLink,
      { label: 'Bluff Lake Nature Center', url: 'https://blufflake.org/' },
      { label: 'RTD A Line', url: 'https://www.rtd-denver.com/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'Why was Stapleton renamed Central Park?',
        a: 'The neighborhood was named after the former airport, itself named for Benjamin Stapleton, a Denver mayor who had been a member of the Ku Klux Klan. After sustained community pressure and the 2020 protests, residents voted to rename it Central Park.',
      },
      {
        q: 'Is Central Park a good place for families in Denver?',
        a: 'It is one of the strongest family options in the city — new housing, dozens of parks and pools, new schools, and an A Line station with a 20-minute ride downtown and 20 minutes to the airport. The trade-offs are HOA and metro district fees and a uniform architectural character.',
      },
      {
        q: 'Was Central Park built on the old Denver airport?',
        a: 'Yes. Stapleton International Airport operated until 1995, when Denver International Airport opened. The 4,700-acre site was redeveloped from 2001, reusing the runway concrete as aggregate in the new streets.',
      },
    ],
    sources: src,
    lede: `Stapleton International Airport closed in 1995 and left 4,700 acres inside
Denver's city limits. What was built there over the following twenty-five years
is the largest new neighborhood in the city's modern history — and, since a 2020
vote, it is called Central Park.`,
    sections: `## Where Central Park actually is

North-east Denver between Quebec and Havana, from Martin Luther King Boulevard
up to I-70, west of [Aurora](/places/aurora/) and north of
[Lowry](/neighborhoods/denver/lowry/).

## The airport, and the name

Stapleton served Denver from 1929 to 1995. When DIA opened, the site became the
largest urban redevelopment opportunity in the country. Construction began in
2001 and continues.

The neighborhood carried the Stapleton name until 2020. Benjamin Stapleton, the
mayor it honoured, had been a member of the Ku Klux Klan — a fact that drove
years of community campaigning and, following the 2020 protests, a residents'
vote to rename it Central Park.

Traces of the airport remain: the control tower stands at the Eastbridge town
centre, and runway concrete was crushed and reused as road base throughout.

## The parks

This is the strongest argument for the neighborhood. Dozens of parks, several
pools, and three substantial natural areas:

- **Central Park** itself, the 80-acre namesake
- **Westerly Creek**, a restored drainage running through the neighborhood
- **Sand Creek Greenway** and **Bluff Lake Nature Center** on the northern edge,
  the latter a genuine wildlife preserve

## The housing

Everything from 2001 onward, in deliberately varied types — detached houses,
rowhouses, townhomes, apartments and some affordable units — arranged on a
walkable grid with alley-loaded garages. The architecture is coherent, which
some buyers value and others find monotonous.

## Transit

The **A Line** stops at Central Park station: about 20 minutes to Union Station
and 20 minutes the other way to DIA.

## The costs people miss

Most of Central Park carries both an HOA and a metropolitan district mill levy.
Together they are a meaningful monthly figure. Ask for both before you compare
it to an older Denver neighborhood.`,
    suits: `Families who want new construction, parks, new schools and rail access inside
Denver, and frequent flyers who value the A Line.

It is a weaker fit for buyers who want architectural variety, a large lot, or no
HOA.`,
    check: `**Total of HOA plus metro district levy** — this is the single most common
surprise.

**Build phase.** Central Park spans 25 years of construction; early and late
phases differ in layout and quality.

**Airport-era environmental records** on specific parcels if that concerns you.`,
  },

  {
    ...ne,
    slug: 'montbello',
    name: 'Montbello',
    title: 'Montbello, Denver — a neighborhood guide',
    summary:
      'A large far north-east Denver neighborhood of 1970s houses, historically underserved and now the focus of significant investment.',
    answer:
      'Montbello is a large far north-east Denver neighborhood developed from the 1960s and 70s, with predominantly single-family houses of that era. It has a majority Latino and Black population, historically limited retail access, and is the subject of substantial recent city investment.',
    tags: ['montbello', 'denver', 'affordable', 'northeast', 'community'],
    bounds: 'Peoria Street to Chambers Road, I-70 to 56th Avenue',
    housing: ['1960s–1980s single-family houses', 'Some apartments'],
    stats: ['to downtown - 25 min', 'value - among Denver’s lowest', 'A Line nearby'],
    transit: 'RTD A Line at Peoria and 40th & Airport stations nearby',
    parks: 'Montbello Open Space, Parkfield Lake Park',
    geo: { lat: 39.7833, lng: -104.8389 },
    links: [
      denverLink,
      { label: 'Montbello Organizing Committee', url: 'https://www.montbelloorganizing.org/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'Is Montbello a good place to buy in Denver?',
        a: 'It has the most affordable detached single-family housing in the city with real yards and garages, and it has seen sustained community organising and city investment. The trade-offs are a long commute to downtown, historically limited retail, and distance from the amenities of central Denver.',
      },
      {
        q: 'Why did Montbello lack a grocery store?',
        a: 'The neighborhood was without a full-service grocery for years after its supermarket closed, a widely covered example of a food desert in a major American city. Community organising has driven efforts to restore full grocery access.',
      },
    ],
    sources: src,
    lede: `Montbello is a large neighborhood of 1970s houses in far north-east Denver, and
it is where you find the most detached single-family housing per dollar in the
city. It also has one of the strongest community organising traditions in
Colorado, built out of decades of having to fight for basic services.`,
    sections: `## Where Montbello actually is

Far north-east Denver between Peoria and Chambers, from I-70 up to 56th Avenue,
east of [Central Park](/neighborhoods/denver/central-park/) and north of
[Aurora](/places/aurora/).

## What got built here

Montbello was developed from the 1960s as a planned community, and the housing
is overwhelmingly 1960s–80s detached single-family — ranches and two-storeys on
standard suburban lots with attached garages. It is suburban in form despite
being inside Denver.

## The service gap

For years Montbello had no full-service grocery store, and the resulting food
desert became a widely cited example nationally. Retail access more generally
has lagged the rest of the city.

The **Montbello Organizing Committee** and related groups have been the driving
force behind efforts to change that, including a community-led grocery and
housing development. It is a genuinely notable example of neighborhood-led
development.

## Transit

The A Line runs along the southern side with stations at Peoria and 40th &
Airport, which gives a rail connection downtown and to DIA — though from most of
Montbello you drive to the station.`,
    suits: `Buyers who want the most detached house and yard per dollar in Denver, and who
are fine with a longer commute and a car-dependent layout. First-time buyers do
well here on price.`,
    check: `**Commute reality** — drive it at rush hour before deciding.

**Retail and grocery access** from the specific address.

**1970s systems** — panels, furnaces and roofs of that vintage.`,
  },

  {
    ...ne,
    slug: 'gateway-green-valley-ranch',
    name: 'Gateway / Green Valley Ranch',
    title: 'Gateway / Green Valley Ranch, Denver — a neighborhood guide',
    summary:
      'Denver’s far north-east frontier by the airport: the newest housing in the city, the most space per dollar, and a long way from everything else.',
    answer:
      'Gateway / Green Valley Ranch is Denver’s far north-eastern neighborhood, between Montbello and Denver International Airport. It contains much of the city’s newest single-family construction, is served by two A Line stations, and offers the most space per dollar in Denver.',
    tags: ['green-valley-ranch', 'gateway', 'denver', 'new-construction', 'affordable', 'airport'],
    bounds: 'Chambers Road east to the airport, I-70 to 56th Avenue and beyond',
    housing: ['1990s–present single-family houses and townhomes'],
    stats: ['A Line - two stations', 'to DIA - 15 min', 'newest housing in Denver'],
    transit: 'RTD A Line at 61st & Peña and Peoria stations',
    parks: 'Green Valley Ranch Golf Club, First Creek Trail',
    geo: { lat: 39.7833, lng: -104.7833 },
    links: [
      denverLink,
      { label: 'Denver International Airport', url: 'https://www.flydenver.com/' },
      { label: 'RTD A Line', url: 'https://www.rtd-denver.com/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'Is Green Valley Ranch a good place to buy?',
        a: 'It offers the newest detached housing in Denver at the lowest price per square foot, with two A Line stations and fifteen minutes to the airport. The trade-off is distance — downtown is 25 to 30 minutes and central Denver amenities are a drive.',
      },
      {
        q: 'Is there aircraft noise in Green Valley Ranch?',
        a: 'It varies by location and runway use. DIA was deliberately sited far from populated areas, and much of the neighborhood is outside the highest noise contours, but this is worth checking for a specific address.',
      },
    ],
    sources: src,
    lede: `Green Valley Ranch is where Denver runs out. It holds the newest housing in the
city, the most square footage per dollar, two commuter rail stations and a
fifteen-minute drive to the airport — and it is a long way from everything else
Denver has.`,
    sections: `## Where it actually is

Denver's far north-east corner, east of Chambers Road toward DIA, north of I-70.
The city limits extend as a corridor out to the airport, which is why Denver's
map has that distinctive tail.

## What got built here

Post-1990 subdivisions: detached houses, townhomes and some apartments, mostly
conventional suburban product with attached garages. Construction continues.

Gateway, the eastern portion, includes newer development and the areas closest to
the airport.

## Transit

Two **A Line** stations — 61st & Peña and Peoria — put Union Station about 25
minutes away and DIA about 10. For airport and airline workers this is the
practical reason to live here.

## The airport economy

DIA is the dominant employer in the area, and a significant share of residents
work there or in related logistics and hospitality. That makes the local
employment base unusually concentrated.`,
    suits: `Airport and airline workers, first-time buyers who want new construction and
space, and families who value square footage over proximity.

It is a weaker fit for anyone who needs central Denver regularly.`,
    check: `**Aircraft noise contours** for the specific address.

**Metro district mill levies**, which are common in the newer subdivisions.

**Commute time** driven at rush hour, not estimated.`,
  },

  // ------------------------------------------------------------ Southeast
  {
    ...se,
    slug: 'hampden',
    name: 'Hampden',
    title: 'Hampden, Denver — a neighborhood guide',
    summary:
      'A south-east Denver neighborhood of apartments and mid-century houses around Bible Park and the Highline Canal.',
    answer:
      'Hampden is a south-east Denver neighborhood along Hampden Avenue, combining mid-century single-family housing with a large stock of apartments and condominiums. It borders Bible Park and the Highline Canal Trail.',
    tags: ['hampden', 'denver', 'apartments', 'value', 'highline-canal'],
    bounds: 'Colorado Boulevard to Quebec Street, Yale to Hampden Avenue',
    housing: ['1960s–1980s apartments and condos', '1950s–60s ranches'],
    stats: ['Bible Park', 'Highline Canal Trail', 'value - below city median'],
    parks: 'Bible Park, Highline Canal Trail',
    geo: { lat: 39.6567, lng: -104.9264 },
    links: [denverLink, canal, dpsLink],
    faq: [
      {
        q: 'Is Hampden in Denver a good value?',
        a: 'It is one of the more affordable parts of south-east Denver, particularly for condos and townhomes, with good park and trail access via Bible Park and the Highline Canal.',
      },
    ],
    sources: src,
    lede: `Hampden is a south-east Denver neighborhood built around Bible Park and the
Highline Canal, with a large share of apartments and condos and some of the more
affordable ownership options in the sector.`,
    sections: `## Where Hampden actually is

South-east Denver between Colorado Boulevard and Quebec, from Yale down to
Hampden Avenue, near [University Hills](/neighborhoods/denver/university-hills/).

## Bible Park and the canal

**Bible Park** is a large neighborhood park with playing fields and trail
connections, and the **Highline Canal Trail** runs alongside — shaded, flat and
continuous for miles.

## The housing

A substantial stock of 1960s–80s apartments and condominiums alongside 1950s–60s
ranches. The condo market here is among the more affordable in south-east
Denver.`,
    suits: `First-time condo buyers, renters and investors who want park access at below-
median pricing.`,
    check: `**HOA reserves and assessment history** on older condo buildings.

**Hampden Avenue traffic noise** on the southern blocks.`,
  },

  {
    ...se,
    slug: 'hampden-south',
    name: 'Hampden South',
    title: 'Hampden South, Denver — a neighborhood guide',
    summary:
      'The southern edge of Denver near the Tech Center, dense with apartments and condos and popular with south-corridor commuters.',
    answer:
      'Hampden South is a south-east Denver neighborhood at the city’s southern boundary, near the Denver Tech Center. It is dominated by apartment and condominium housing and is popular with commuters to the south corridor employment centres.',
    tags: ['hampden-south', 'denver', 'apartments', 'tech-center', 'commuter'],
    bounds: 'Colorado Boulevard to Quebec Street, Hampden Avenue to the city limits',
    housing: ['1970s–1990s apartments and condos', 'Some townhomes'],
    stats: ['Tech Center - 10 min', 'light rail nearby', 'tenure - majority renter'],
    transit: 'RTD light rail at Southmoor station',
    parks: 'Highline Canal Trail, Rosamond Park',
    geo: { lat: 39.6489, lng: -104.9264 },
    links: [denverLink, canal, dpsLink],
    faq: [
      {
        q: 'Is Hampden South good for Tech Center commuters?',
        a: 'Yes — it is about ten minutes from the Denver Tech Center with light rail at Southmoor, while remaining inside Denver city limits and generally cheaper than Greenwood Village or Centennial.',
      },
    ],
    sources: src,
    lede: `Hampden South is the last strip of Denver before the county line, dense with
apartments and condos, and about ten minutes from the Tech Center. It is a
commuter neighborhood and makes no pretence otherwise.`,
    sections: `## Where it actually is

The southern edge of Denver between Colorado Boulevard and Quebec, south of
Hampden Avenue to the city limits, adjoining
[Greenwood Village](/places/greenwood-village/).

## The housing

Predominantly 1970s–90s apartments, condos and townhomes. Detached single-family
inventory is limited.

## Transit and commuting

**Southmoor station** on the light rail gives a direct ride to the Tech Center
and downtown, and I-25 access is immediate.`,
    suits: `Tech Center workers, renters, and condo buyers who want a Denver address at
south-suburban convenience.`,
    check: `**HOA health** on 1970s and 80s buildings.

**I-25 and Hampden noise.**

**Rental licence status** if buying an existing rental.`,
  },

  {
    ...se,
    slug: 'southmoor-park',
    name: 'Southmoor Park',
    title: 'Southmoor Park, Denver — a neighborhood guide',
    summary:
      'A quiet south-east Denver neighborhood with mid-century houses, a light rail station and Highline Canal frontage.',
    answer:
      'Southmoor Park is a south-east Denver neighborhood near the city’s southern boundary, with mid-century single-family housing and a light rail station. It borders the Highline Canal Trail and offers quick access to the Denver Tech Center.',
    tags: ['southmoor-park', 'denver', 'mid-century', 'light-rail', 'quiet'],
    bounds: 'Quebec Street to Ulster, Hampden Avenue to the city limits',
    housing: ['1960s–70s ranches and two-storeys', 'Some condos'],
    stats: ['light rail - Southmoor', 'Tech Center - 10 min', 'Highline Canal'],
    transit: 'RTD light rail at Southmoor station',
    parks: 'Southmoor Park, Highline Canal Trail',
    geo: { lat: 39.6489, lng: -104.9083 },
    links: [denverLink, canal, dpsLink],
    faq: [
      {
        q: 'Does Southmoor Park have light rail?',
        a: 'Yes — Southmoor station sits at the neighborhood’s edge, giving a direct ride to the Denver Tech Center and downtown.',
      },
    ],
    sources: src,
    lede: `Southmoor Park is a quiet pocket of 1960s and 70s houses at Denver's southern
edge, with a light rail station, canal trail frontage and a ten-minute run to
the Tech Center.`,
    sections: `## Where it actually is

South-east Denver near the city limits, between Quebec and Ulster, south of
Hampden Avenue.

## The housing

1960s–70s ranches and two-storeys on standard suburban lots, plus some condo
development. Quieter and more owner-occupied than
[Hampden South](/neighborhoods/denver/hampden-south/) next door.

## Transit

Southmoor station is the practical draw, along with immediate I-25 access.`,
    suits: `Tech Center commuters who want a detached house and rail, and buyers who want
quiet at the city edge.`,
    check: `**I-25 noise** on the western blocks.

**1970s systems** — panels, furnaces, roofs.`,
  },

  {
    ...se,
    slug: 'goldsmith',
    name: 'Goldsmith',
    title: 'Goldsmith, Denver — a neighborhood guide',
    summary:
      'A small south-east Denver neighborhood of mid-century houses and apartments near the Highline Canal.',
    answer:
      'Goldsmith is a small south-east Denver neighborhood with a mix of mid-century single-family housing and multifamily development, near the Highline Canal and the Denver Tech Center corridor.',
    tags: ['goldsmith', 'denver', 'mid-century', 'value', 'highline-canal'],
    bounds: 'Colorado Boulevard to Quebec Street, Yale to Hampden Avenue',
    housing: ['1950s–70s ranches', 'Apartments and condos'],
    stats: ['Highline Canal', 'Tech Center - 12 min', 'value - below city median'],
    parks: 'Highline Canal Trail, James A. Bible Park nearby',
    geo: { lat: 39.66, lng: -104.9167 },
    links: [denverLink, canal, dpsLink],
    faq: [
      {
        q: 'Where is Goldsmith in Denver?',
        a: 'A small neighborhood in south-east Denver between Colorado Boulevard and Quebec Street, roughly between Yale and Hampden Avenues, adjoining the Highline Canal.',
      },
    ],
    sources: src,
    lede: `Goldsmith is a small, quiet south-east Denver neighborhood of mid-century
houses and apartments, notable mainly for its Highline Canal frontage and its
convenience to the south corridor.`,
    sections: `## Where Goldsmith actually is

South-east Denver between Colorado Boulevard and Quebec, roughly Yale to
Hampden, adjoining [Hampden](/neighborhoods/denver/hampden/).

## The canal

The Highline Canal Trail runs through, which is the neighborhood's principal
amenity.

## The housing

1950s–70s ranches with a meaningful multifamily component.`,
    suits: `Value buyers and renters who want trail access and Tech Center proximity.`,
    check: `**Mid-century systems.**

**Arterial noise** on Colorado Boulevard and Hampden.`,
  },

  {
    ...se,
    slug: 'kennedy',
    name: 'Kennedy',
    title: 'Kennedy, Denver — a neighborhood guide',
    summary:
      'A small south-east Denver neighborhood around the Kennedy golf course, quiet and largely residential.',
    answer:
      'Kennedy is a small south-east Denver neighborhood adjoining the John F. Kennedy Golf Course, with predominantly mid-century and later housing. It is quiet, residential, and close to the Cherry Creek reservoir area.',
    tags: ['kennedy', 'denver', 'golf', 'quiet', 'residential'],
    bounds: 'Quebec Street to Havana Street, Hampden Avenue to the city limits',
    housing: ['1960s–1980s houses and townhomes'],
    stats: ['Kennedy Golf Course', 'to Tech Center - 15 min', 'quiet'],
    parks: 'John F. Kennedy Golf Course, Highline Canal Trail',
    geo: { lat: 39.6567, lng: -104.8833 },
    links: [
      denverLink,
      {
        label: 'Denver Golf',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation/Golf',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is the Kennedy Golf Course?',
        a: 'A large municipal golf complex in south-east Denver with 27 holes plus a par-3 course and a driving range. It gives the surrounding neighborhood its name.',
      },
    ],
    sources: src,
    lede: `Kennedy is a quiet south-east corner of Denver wrapped around a large municipal
golf complex, with houses and townhomes from the 1960s onward.`,
    sections: `## Where Kennedy actually is

South-east Denver between Quebec and Havana, south of Hampden Avenue to the city
limits, near the Aurora boundary.

## The golf course

The John F. Kennedy Golf Course is a 27-hole municipal complex with a par-3
course and driving range — a substantial piece of open space and the
neighborhood's defining feature.

## The housing

1960s–80s detached houses and townhomes on suburban lots.`,
    suits: `Golfers and buyers who want quiet suburban housing inside Denver city limits.`,
    check: `**Golf course adjacency** on affected lots.

**1970s systems.**`,
  },

  // ------------------------------------------------------------ Southwest
  {
    ...sw,
    slug: 'bear-valley',
    name: 'Bear Valley',
    title: 'Bear Valley, Denver — a neighborhood guide',
    summary:
      'A quiet south-west Denver neighborhood of mid-century houses with good access to Bear Creek and the foothills.',
    answer:
      'Bear Valley is a south-west Denver neighborhood of predominantly 1960s–70s housing, near Bear Creek and the Jefferson County line. It offers quick access to the foothills and prices below the Denver median.',
    tags: ['bear-valley', 'denver', 'mid-century', 'foothills-access', 'value'],
    bounds: 'Sheridan to Federal Boulevard, Jewell to Hampden Avenue',
    housing: ['1960s–70s ranches and split-levels', 'Some condos and townhomes'],
    stats: ['to downtown - 20 min', 'foothills - 15 min', 'value - below city median'],
    parks: 'Bear Creek Trail, Bear Valley Park',
    geo: { lat: 39.6656, lng: -105.0431 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Bear Valley close to the mountains?',
        a: 'It is one of the closest Denver neighborhoods to the foothills — about fifteen minutes to Morrison and the start of Bear Creek Canyon, which is a genuine advantage for anyone heading west regularly.',
      },
    ],
    sources: src,
    lede: `Bear Valley sits at Denver's south-west corner, closer to the foothills than
almost anywhere else in the city, with mid-century houses and prices below the
median.`,
    sections: `## Where Bear Valley actually is

South-west Denver between Sheridan and Federal, from Jewell down to Hampden,
adjoining [Lakewood](/places/lakewood/).

## The foothills advantage

Bear Creek Canyon and [Morrison](/places/morrison/) are about fifteen minutes
west, and the Bear Creek Trail runs through the neighborhood. For anyone hiking
or climbing regularly, that access is the reason to be here.

## The housing

1960s–70s ranches and split-levels on suburban lots, plus some condo and
townhome development.`,
    suits: `Buyers who head to the mountains often, and value buyers who want a detached
mid-century house with a yard.`,
    check: `**Flood mapping** near Bear Creek.

**1970s systems** and original windows.`,
  },

  {
    ...sw,
    slug: 'harvey-park',
    name: 'Harvey Park',
    title: 'Harvey Park, Denver — a neighborhood guide',
    summary:
      'A south-west Denver neighborhood with a lake, a genuine collection of mid-century modern houses, and steadily rising interest.',
    answer:
      'Harvey Park is a south-west Denver neighborhood developed in the 1950s, notable for a concentration of mid-century modern houses including Cliff May-designed homes. It surrounds Harvey Park and its lake and prices below the Denver median.',
    tags: ['harvey-park', 'denver', 'mid-century-modern', 'cliff-may', 'value', 'lake'],
    bounds: 'Sheridan to Federal Boulevard, Evans to Jewell Avenue',
    housing: ['1950s ranches', 'Cliff May mid-century modern homes'],
    stats: ['Harvey Park lake', 'to downtown - 18 min', 'value - below city median'],
    parks: 'Harvey Park and lake',
    geo: { lat: 39.6739, lng: -105.0361 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Are there Cliff May houses in Denver?',
        a: 'Yes — Harvey Park contains a concentration of homes based on designs by Cliff May, the California architect often credited with popularising the post-war ranch house. They are among the more sought-after mid-century houses in the city.',
      },
      {
        q: 'Is Harvey Park a good value?',
        a: 'It has been one of the better value south-west Denver neighborhoods, though the mid-century modern stock now commands a premium over the standard ranches around it.',
      },
    ],
    sources: src,
    lede: `Harvey Park is a 1950s neighborhood around a small lake in south-west Denver,
and it holds something unexpected: a genuine collection of Cliff May houses, the
California architect whose designs defined the American ranch.`,
    sections: `## Where Harvey Park actually is

South-west Denver between Sheridan and Federal, from Evans down to Jewell.

## The Cliff May houses

Harvey Park contains a cluster of homes built to Cliff May designs — low, open,
post-and-beam ranches with glass walls and courtyards, very different from the
standard Denver brick ranch. They are the reason the neighborhood appears in
architectural guides, and they trade well above the surrounding stock.

## The park and lake

Harvey Park and its lake sit at the centre, with a recreation centre and open
space.

## The rest of the housing

Standard 1950s brick ranches, solid and generally affordable.`,
    suits: `Mid-century enthusiasts, and value buyers who want a detached house with a
yard below the Denver median.`,
    check: `**Original vs. altered** on any Cliff May house — alterations affect value
substantially.

**Flat roofs**, common on the modern houses and a maintenance item.

**1950s systems** and sewer.`,
  },

  {
    ...sw,
    slug: 'harvey-park-south',
    name: 'Harvey Park South',
    title: 'Harvey Park South, Denver — a neighborhood guide',
    summary:
      'The southern extension of Harvey Park, slightly newer and quieter, with the same mid-century value.',
    answer:
      'Harvey Park South is a south-west Denver neighborhood adjoining Harvey Park, with predominantly 1950s–60s ranch housing. It is quiet, largely owner-occupied and priced below the Denver median.',
    tags: ['harvey-park-south', 'denver', 'mid-century', 'value', 'quiet'],
    bounds: 'Sheridan to Federal Boulevard, Jewell to Yale Avenue',
    housing: ['1950s–60s brick ranches'],
    stats: ['to downtown - 20 min', 'value - below city median', 'tenure - majority owner'],
    parks: 'Harvey Park nearby, Bear Creek Trail',
    geo: { lat: 39.6656, lng: -105.0361 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'How is Harvey Park South different from Harvey Park?',
        a: 'It is the adjoining southern neighborhood, slightly newer on average, without the lake or the concentration of Cliff May houses. Prices are generally a little lower.',
      },
    ],
    sources: src,
    lede: `Harvey Park South is the quieter continuation of Harvey Park — the same 1950s
and 60s brick ranches without the lake or the architectural pedigree, at a
slightly lower number.`,
    sections: `## Where it actually is

South-west Denver between Sheridan and Federal, from Jewell down to Yale, south
of [Harvey Park](/neighborhoods/denver/harvey-park/).

## The housing

1950s–60s brick ranches on standard lots, largely owner-occupied and generally
well maintained.`,
    suits: `First-time buyers and families who want a detached house with a yard below the
Denver median.`,
    check: `**Sewer scope** and **electrical capacity**.

**Roof age.**`,
  },

  {
    ...sw,
    slug: 'marston',
    name: 'Marston',
    title: 'Marston, Denver — a neighborhood guide',
    summary:
      'Denver’s south-western corner around Marston Reservoir, with newer housing than most of the city and quick foothills access.',
    answer:
      'Marston is a south-west Denver neighborhood around Marston Reservoir, with predominantly 1970s–1990s housing. It is among the newer parts of Denver outside the north-east and offers quick access to the foothills and to Lakewood.',
    tags: ['marston', 'denver', 'newer-housing', 'reservoir', 'foothills-access'],
    bounds: 'Sheridan to Federal Boulevard, Yale to the city limits',
    housing: ['1970s–1990s houses and townhomes'],
    stats: ['Marston Reservoir', 'to downtown - 22 min', 'foothills - 15 min'],
    parks: 'Marston Lake, Bear Creek Trail, Harriman Lake nearby',
    geo: { lat: 39.6489, lng: -105.0431 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Can you use Marston Reservoir?',
        a: 'No. Marston Reservoir is a Denver Water drinking water facility and is closed to public recreation. Nearby Harriman Lake and Bear Creek Lake offer public access instead.',
      },
      {
        q: 'Is Marston a newer part of Denver?',
        a: 'Yes — most of its housing dates from the 1970s to 1990s, which makes it newer than nearly all of Denver outside the far north-east.',
      },
    ],
    sources: src,
    lede: `Marston is Denver's south-west corner, built mostly between the 1970s and
1990s around a reservoir you cannot swim in. It has newer houses than almost
anywhere else in the city and quick access to the foothills.`,
    sections: `## Where Marston actually is

South-west Denver between Sheridan and Federal, from Yale south to the city
limits, adjoining [Lakewood](/places/lakewood/) and Littleton.

## The reservoir

Marston Reservoir is a Denver Water drinking-water facility and is **not open for
recreation**. Buyers sometimes assume otherwise. Harriman Lake and Bear Creek
Lake Park nearby provide the public water access.

## The housing

1970s–90s detached houses and townhomes on suburban lots — larger and newer than
most Denver stock, with attached garages and conventional layouts.`,
    suits: `Buyers who want newer housing inside Denver, families who want space, and
anyone heading to the mountains regularly.`,
    check: `**Reservoir access assumptions** — confirm what is actually usable.

**HOA** on townhome developments.

**1980s systems** approaching replacement.`,
  },

  {
    ...sw,
    slug: 'fort-logan',
    name: 'Fort Logan',
    title: 'Fort Logan, Denver — a neighborhood guide',
    summary:
      'A south-west Denver neighborhood around a historic army post and national cemetery, with mixed housing and low prices.',
    answer:
      'Fort Logan is a south-west Denver neighborhood surrounding the historic Fort Logan military post and Fort Logan National Cemetery. It has mixed mid-century and later housing and prices below the Denver median.',
    tags: ['fort-logan', 'denver', 'history', 'military', 'value'],
    bounds: 'Sheridan to Federal Boulevard, Hampden to the city limits',
    housing: ['1950s–1980s houses and townhomes', 'Some historic post buildings'],
    stats: ['Fort Logan National Cemetery', 'to downtown - 22 min', 'value - below city median'],
    parks: 'Bear Creek Trail, Fort Logan grounds',
    geo: { lat: 39.6489, lng: -105.03 },
    links: [
      denverLink,
      {
        label: 'Fort Logan National Cemetery',
        url: 'https://www.cem.va.gov/cems/nchp/ftlogan.asp',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is Fort Logan?',
        a: 'A US Army post established in 1887 in what is now south-west Denver. Part of the site is Fort Logan National Cemetery, a Department of Veterans Affairs cemetery; other portions house a state mental health facility and preserved historic buildings.',
      },
    ],
    sources: src,
    lede: `Fort Logan is a south-west Denver neighborhood built around an 1887 army post,
part of which is now a national cemetery. It is quiet, historically distinctive,
and among the more affordable corners of the city.`,
    sections: `## Where Fort Logan actually is

South-west Denver between Sheridan and Federal, south of Hampden toward the city
limits, adjoining Sheridan and Littleton.

## The post

Fort Logan was established in 1887 and operated as an army post for decades.
Today the site contains **Fort Logan National Cemetery**, a state mental health
campus, and a number of preserved historic buildings including the officers'
quarters.

## The housing

Mixed 1950s–80s houses and townhomes, generally modest and priced below the
Denver median.`,
    suits: `Value buyers who want a quiet corner of Denver with genuine history and easy
foothills access.`,
    check: `**Institutional adjacency** — the cemetery and mental health campus are
significant land uses.

**Mid-century systems.**`,
  },
]
