import { SRC } from './_template.mjs'

const base = { city: 'denver', cityName: 'Denver', sector: 'North Denver' }
const src = [SRC.denverNbhd, SRC.car]

const denverLink = { label: 'City and County of Denver', url: 'https://www.denvergov.org/' }
const dpsLink = { label: 'Denver Public Schools', url: 'https://www.dpsk12.org/' }

export const denverNorth = [
  {
    ...base,
    slug: 'five-points',
    name: 'Five Points',
    featured: true,
    title: 'Five Points, Denver — a neighborhood guide',
    summary:
      'The historic heart of Black Denver and the birthplace of its jazz scene, now containing RiNo — the most heavily redeveloped district in the city.',
    answer:
      'Five Points is a Denver neighborhood immediately north-east of downtown, historically the centre of the city’s Black community and jazz scene, once known as the "Harlem of the West". It now contains the River North Art District (RiNo) and is among the most heavily redeveloped areas in Denver.',
    tags: ['five-points', 'rino', 'denver', 'historic', 'jazz', 'redevelopment', 'arts'],
    bounds: 'Broadway to Downing, 20th Street to the rail corridor',
    housing: ['1880s–1900s Victorian and brick', '2010–present apartments, lofts and townhomes'],
    stats: ['to downtown - 10 min walk', 'RiNo art district', 'Welton Street corridor'],
    transit: 'RTD L Line along Welton Street; A and B lines at 38th & Blake',
    parks: 'Curtis Park, Mestizo-Curtis Park, South Platte Trail',
    geo: { lat: 39.7561, lng: -104.9781 },
    links: [
      denverLink,
      { label: 'RiNo Art District', url: 'https://rinoartdistrict.org/' },
      {
        label: 'Blair-Caldwell African American Research Library',
        url: 'https://history.denverlibrary.org/blair',
      },
      { label: 'Five Points Business District', url: 'https://fivepointsbid.com/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'Why was Five Points called the Harlem of the West?',
        a: 'From the 1920s through the 1950s it was the centre of Black cultural life in the Mountain West, with more than fifty bars and clubs along Welton Street. Duke Ellington, Billie Holiday, Miles Davis and Count Basie all played here, often because segregation barred them from downtown hotels.',
      },
      {
        q: 'Is RiNo part of Five Points?',
        a: 'Largely, yes. The River North Art District is a business and arts district that overlaps the northern and western portions of the Five Points statistical neighborhood. RiNo is a branding and business designation; Five Points is the official neighborhood.',
      },
      {
        q: 'Has Five Points gentrified?',
        a: 'Substantially and rapidly. It is one of the most-cited examples of displacement in Denver — the Black population share fell sharply as redevelopment accelerated from the 2000s onward. That history is central to any honest description of the neighborhood.',
      },
    ],
    sources: src,
    lede: `Five Points was the centre of Black Denver for most of the twentieth century
and the reason the city had a jazz scene at all. It is now also RiNo — murals,
breweries, converted warehouses and the highest concentration of new
construction in Denver. Both things are true at once, and the tension between
them is the neighborhood's defining feature.`,
    sections: `## Where Five Points actually is

Immediately north-east of downtown, from Broadway out to Downing, running up to
the rail corridor along the South Platte. The name comes from the five-way
intersection of Welton, 27th, Washington and 26th.

## The history

From roughly 1920 to 1960, Welton Street was the heart of Black cultural life in
the Mountain West. The Rossonian Hotel at the Points was the anchor venue, and
because segregation kept Black performers out of downtown hotels, the biggest
names in American music played and stayed here. Duke Ellington, Billie Holiday,
Miles Davis, Count Basie.

The **Blair-Caldwell African American Research Library** on Welton documents it
properly and is worth a visit before you form an opinion about the
neighborhood.

Urban renewal, highway construction and disinvestment hollowed the district out
from the 1960s. Redevelopment since the 2000s has been rapid, and the Black
population share has fallen sharply. Displacement here is not an abstraction and
it is actively discussed by people who live there.

## RiNo

The River North Art District covers the industrial blocks toward the river —
former warehouses and manufacturing converted into galleries, breweries,
restaurants, offices and a great deal of new apartment construction. The murals
are the visible signature, refreshed annually during a large street-art
festival.

It is genuinely lively. It is also the sharpest illustration in Denver of what
redevelopment does to a place.

## Curtis Park

The south-eastern portion contains **Curtis Park**, Denver's oldest surviving
residential neighborhood, with an intact stock of 1870s–1890s Victorians and a
historic district protecting them. It is one of the best-preserved
nineteenth-century streetscapes in the state.

## Transit

The **L Line** runs along Welton Street. The **A Line** to the airport and the
**B and G lines** stop at 38th & Blake on the northern edge, which is the busiest
transit-oriented development node in the city outside Union Station.`,
    suits: `Buyers and renters who want new construction with walkability and transit, and
who will engage with the neighborhood as it actually is rather than as a
marketing brochure. Curtis Park suits buyers who want a genuine Victorian.`,
    check: `**Which part.** Curtis Park, the Welton corridor and RiNo are very different
propositions in age, price and character.

**Historic district review** if you are buying in Curtis Park.

**Industrial history** on RiNo parcels — many were manufacturing sites.

**Noise.** RiNo is a nightlife district and the rail corridor runs through it.`,
  },

  {
    ...base,
    slug: 'cole',
    name: 'Cole',
    title: 'Cole, Denver — a neighborhood guide',
    summary:
      'A small, historically working-class north Denver neighborhood of brick cottages, now one of the last relatively affordable areas this close to downtown.',
    answer:
      'Cole is a north Denver neighborhood east of Five Points, characterised by 1890s–1920s brick cottages and Denver Squares. It has seen significant recent investment and remains less expensive than neighbouring Five Points and Whittier.',
    tags: ['cole', 'denver', 'historic', 'value', 'close-in'],
    bounds: 'Downing to Colorado Boulevard, 32nd to 40th Avenue',
    housing: ['1890–1925 brick cottages and Denver Squares', 'Recent infill'],
    stats: ['to downtown - 10 min', 'value - below Five Points', 'tenure - mixed'],
    parks: 'Mestizo-Curtis Park nearby, Cole Park',
    geo: { lat: 39.7686, lng: -104.9639 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Cole a good investment neighborhood in Denver?',
        a: 'It has been one of the stronger appreciation areas in north Denver, sharing the historic housing stock and downtown proximity of Five Points and Whittier at a lower entry price. Much of the stock still needs work.',
      },
    ],
    sources: src,
    lede: `Cole is a small grid of brick cottages ten minutes from downtown, historically
working-class, and one of the last north Denver neighborhoods where the entry
price still reflects the condition of the houses rather than the location.`,
    sections: `## Where Cole actually is

North-east of downtown between Downing and Colorado Boulevard, from 32nd up to
40th Avenue, east of [Five Points](/neighborhoods/denver/five-points/) and north
of [Whittier](/neighborhoods/denver/whittier/).

## What got built here

1890s–1920s brick — cottages, small Denver Squares, and two-unit brick duplexes.
The scale is modest and the streets are narrow, which gives the neighborhood a
tighter feel than the areas east of it.

## The 38th & Blake corridor

The northern edge sits near the 38th & Blake station area, which has drawn
substantial transit-oriented development. That has pulled prices up on Cole's
northern blocks faster than the south.

## Flooding history

Parts of north-east Denver, Cole included, have a history of stormwater
flooding. The Platte to Park Hill drainage project — including the detention
work at City Park Golf Course — was built specifically to address it. Ask about
any given property's history.`,
    suits: `Value buyers who want pre-1925 brick within ten minutes of downtown, and
renovators.`,
    check: `**Stormwater and basement flooding history.**

**Sewer scope and knob-and-tube wiring** on unrenovated houses.

**Foundation** on the older cottages.`,
  },

  {
    ...base,
    slug: 'whittier',
    name: 'Whittier',
    title: 'Whittier, Denver — a neighborhood guide',
    summary:
      'Denver Squares and shade trees on a quiet grid between Five Points and City Park, with deep roots in Black Denver.',
    answer:
      'Whittier is a north Denver neighborhood between Five Points and City Park, with well-preserved 1890s–1920s Denver Squares and brick housing. It has a significant history as part of Black Denver and has appreciated substantially in recent years.',
    tags: ['whittier', 'denver', 'denver-square', 'historic', 'walkable'],
    bounds: 'Downing to York Street, 23rd to 32nd Avenue',
    housing: ['1890–1925 Denver Squares and brick cottages'],
    stats: ['to downtown - 12 min', 'City Park - adjacent', 'tenure - mixed'],
    parks: 'City Park, Whittier neighborhood parks',
    geo: { lat: 39.7561, lng: -104.9636 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Whittier a good neighborhood in Denver?',
        a: 'It has excellent bones — Denver Squares, mature trees, a quiet grid — and sits between Five Points and City Park, ten to twelve minutes from downtown. It has appreciated sharply, and like Five Points it has a displacement history worth understanding.',
      },
    ],
    sources: src,
    lede: `Whittier is a quiet grid of Denver Squares and brick cottages between Five
Points and City Park. It has some of the best-preserved turn-of-the-century
housing in north Denver and, like its neighbours, a history that includes both
being redlined and being rapidly gentrified.`,
    sections: `## Where Whittier actually is

Between Downing and York, from 23rd up to 32nd Avenue, west of
[City Park](/neighborhoods/denver/city-park/) and east of
[Five Points](/neighborhoods/denver/five-points/).

## The housing

1890s–1920s, predominantly brick: Denver Squares with full-width porches,
cottages, and two-unit duplexes. Mature street trees and alleys throughout. It
is a textbook example of the pre-war Denver grid.

## The history

Whittier was part of the area where Black Denverites could buy homes during the
period of restrictive covenants and redlining, and it remained a substantially
Black neighborhood through the twentieth century. Its demographic change since
2000 has been among the fastest in the city.

## The park

City Park is on the eastern edge, which means the zoo, the museum and 330 acres
of open space within walking distance.`,
    suits: `Buyers who want a Denver Square on a quiet street with park access, and who
want to be closer in than Congress Park at a somewhat lower price.`,
    check: `**Sewer, wiring and supply lines** on anything unrenovated.

**Foundation and drainage.**

**Pop-top and addition permits** on renovated houses.`,
  },

  {
    ...base,
    slug: 'clayton',
    name: 'Clayton',
    title: 'Clayton, Denver — a neighborhood guide',
    summary:
      'A small north-east Denver neighborhood of modest brick housing, quiet and still comparatively affordable.',
    answer:
      'Clayton is a small north-east Denver neighborhood between Colorado Boulevard and York Street, with predominantly early- and mid-twentieth-century housing. It is quieter and less expensive than the neighbourhoods closer to downtown.',
    tags: ['clayton', 'denver', 'affordable', 'quiet', 'north-denver'],
    bounds: 'York Street to Colorado Boulevard, 32nd to 40th Avenue',
    housing: ['1900s–1950s brick cottages, bungalows and ranches'],
    stats: ['to downtown - 15 min', 'value - below Park Hill', 'tenure - mixed'],
    parks: 'Clayton neighborhood parks, City Park nearby',
    geo: { lat: 39.7686, lng: -104.9494 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Clayton in Denver a good value?',
        a: 'It is one of the better value pockets in north-east Denver, sitting between Cole and Park Hill with similar housing to both and prices below Park Hill.',
      },
    ],
    sources: src,
    lede: `Clayton is a modest, quiet grid in north-east Denver that sits between the
rapidly redeveloping neighborhoods to the west and the established Park Hill
blocks to the east — and prices below both.`,
    sections: `## Where Clayton actually is

Between York Street and Colorado Boulevard, from 32nd up to 40th Avenue, east of
[Cole](/neighborhoods/denver/cole/) and west of
[North Park Hill](/neighborhoods/denver/north-park-hill/).

## The housing

A mix of 1900s–1950s brick: cottages and bungalows on the older blocks, ranches
on the newer ones. Standard lots, alleys, detached garages.

## The name

The neighborhood takes its name from the Clayton Trust and the George W. Clayton
College campus, established under the will of a Denver merchant to educate
orphaned boys. The campus land remains a significant landholding in the area.`,
    suits: `Value buyers who want north-east Denver bones below Park Hill pricing, and
first-time buyers who need a detached house with a yard.`,
    check: `**Sewer scope** and **roof age**.

**Block-level variation**, which is meaningful here.`,
  },

  {
    ...base,
    slug: 'skyland',
    name: 'Skyland',
    title: 'Skyland, Denver — a neighborhood guide',
    summary:
      'A small neighborhood on City Park’s northern edge, with golf course frontage and quiet brick streets.',
    answer:
      'Skyland is a small north Denver neighborhood on the northern edge of City Park and the City Park Golf Course. It has predominantly early- and mid-twentieth-century brick housing and direct access to one of Denver’s largest open spaces.',
    tags: ['skyland', 'denver', 'city-park', 'golf', 'quiet'],
    bounds: 'York Street to Colorado Boulevard, 26th to 32nd Avenue',
    housing: ['1900s–1950s brick bungalows and squares'],
    stats: ['City Park Golf Course - adjacent', 'to downtown - 13 min', 'tenure - mixed'],
    parks: 'City Park, City Park Golf Course',
    geo: { lat: 39.7592, lng: -104.9494 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Where is Skyland in Denver?',
        a: 'On the northern edge of City Park and the City Park Golf Course, between York Street and Colorado Boulevard, roughly 26th to 32nd Avenue.',
      },
    ],
    sources: src,
    lede: `Skyland is a handful of quiet brick blocks wrapped around the northern edge of
City Park Golf Course — small, easy to miss, and with better open space access
than its price suggests.`,
    sections: `## Where Skyland actually is

North of [City Park](/neighborhoods/denver/city-park/) between York and Colorado
Boulevard, from 26th to 32nd Avenue, south of
[Clayton](/neighborhoods/denver/clayton/).

## The golf course

City Park Golf Course was rebuilt in recent years alongside major stormwater
detention work for the Platte to Park Hill drainage project. The result is a
better course and a large piece of engineered open space on the neighborhood's
doorstep.

## The housing

1900s–1950s brick — bungalows, squares and some ranches on the later blocks.`,
    suits: `Golfers, park users, and buyers who want City Park adjacency without Park Hill
or Congress Park pricing.`,
    check: `**Stormwater history** — this area was part of the drainage problem the
detention project was built to solve.

**Pre-1955 systems.**`,
  },

  {
    ...base,
    slug: 'globeville',
    name: 'Globeville',
    title: 'Globeville, Denver — a neighborhood guide',
    summary:
      'A historic smelter neighborhood cut apart by two interstates, with deep Eastern European roots and a long environmental history.',
    answer:
      'Globeville is a north Denver neighborhood named for the Globe Smelting and Refining Company, historically settled by Eastern European immigrants. It is bisected by I-25 and I-70, has a documented history of heavy-metal soil contamination and Superfund remediation, and is among the least expensive parts of the city.',
    tags: ['globeville', 'denver', 'industrial', 'history', 'affordable', 'environment'],
    bounds: 'The South Platte to Washington Street, I-70 to 38th Avenue',
    housing: ['1890s–1940s cottages and small brick houses', 'Recent infill'],
    stats: ['to downtown - 8 min', 'value - among Denver’s lowest', 'N Line rail nearby'],
    transit: 'RTD N Line at 41st & Fox nearby',
    parks: 'Globeville Landing Park, South Platte Trail',
    geo: { lat: 39.7833, lng: -104.9861 },
    links: [
      denverLink,
      {
        label: 'EPA — Vasquez Boulevard / I-70 Superfund site',
        url: 'https://www.epa.gov/superfund',
      },
      {
        label: 'Denver GES neighborhood planning',
        url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'Is the soil contaminated in Globeville?',
        a: 'Historically yes. Smelter operations left arsenic and lead in residential soils across parts of Globeville, Elyria and Swansea, and the area was addressed under the Vasquez Boulevard / I-70 Superfund site with extensive residential soil remediation. Ask for the remediation status of a specific parcel.',
      },
      {
        q: 'Why is Globeville split up by highways?',
        a: 'I-25 and I-70 were both routed through it in the mid-twentieth century, cutting the neighborhood into pieces and severing street connections. It is one of the clearest examples in Colorado of highway construction dividing a working-class immigrant community.',
      },
    ],
    sources: src,
    lede: `Globeville grew up around a smelter in the 1880s, filled with Polish, Slovenian,
Croatian and Russian immigrant families, and was then cut into pieces by two
interstates. It is eight minutes from downtown, among the cheapest addresses in
Denver, and it carries an environmental history that any buyer needs to
understand properly.`,
    sections: `## Where Globeville actually is

North Denver between the South Platte and Washington Street, from I-70 down
toward 38th Avenue. I-25 and I-70 both cross it, and the interchange sits at its
edge.

## The smelter history

The Globe Smelting and Refining Company gave the neighborhood its name and its
population — Eastern European immigrant families who worked the plant from the
1880s. The churches from that era still stand and are among the more striking
buildings in north Denver.

The plant also left heavy metals in the soil. Parts of Globeville, along with
[Elyria-Swansea](/neighborhoods/denver/elyria-swansea/), fall within the
**Vasquez Boulevard / I-70 Superfund site**, and the EPA conducted extensive
residential soil sampling and replacement.

This is not a reason to rule the neighborhood out — remediation was substantial
and documented. It is a reason to ask for the specific parcel's sampling and
remediation record rather than accepting a general reassurance.

## The highways

I-25 and I-70 severed the street grid and separated Globeville from the rest of
north Denver. The I-70 Central project rebuilt the highway through the corridor,
lowering it below grade with a park cover over part of it in Elyria-Swansea.

## What is changing

The National Western Center redevelopment on the neighborhood's eastern edge is
a large, long-term public investment in the stockyards area, and the 41st & Fox
N Line station sits nearby. Both are pulling investment into an area that had
little for decades.`,
    suits: `Value-first buyers and investors who will do the environmental due diligence
properly, and anyone who wants to be extremely close to downtown at a low price.`,
    check: `**Soil remediation records** for the specific parcel — this is the single most
important check here.

**Highway noise and air quality**, which vary sharply with distance from I-70
and I-25.

**Flood mapping** near the South Platte.`,
  },

  {
    ...base,
    slug: 'elyria-swansea',
    name: 'Elyria-Swansea',
    title: 'Elyria-Swansea, Denver — a neighborhood guide',
    summary:
      'Two joined north Denver neighborhoods carrying the stockyards, the I-70 rebuild, and the National Western Center redevelopment.',
    answer:
      'Elyria-Swansea is a north-east Denver neighborhood historically shaped by rail, stockyards and industry. It sits within the Vasquez Boulevard / I-70 Superfund area, was directly affected by the I-70 Central highway reconstruction, and borders the National Western Center redevelopment.',
    tags: ['elyria-swansea', 'denver', 'industrial', 'i-70', 'affordable', 'environment'],
    bounds: 'The South Platte to Colorado Boulevard, I-70 corridor to 47th Avenue',
    housing: ['1890s–1950s cottages and small houses'],
    stats: ['to downtown - 10 min', 'value - among Denver’s lowest', 'National Western Center'],
    parks: 'Swansea Park, the I-70 park cover',
    geo: { lat: 39.7833, lng: -104.9639 },
    links: [
      denverLink,
      { label: 'National Western Center', url: 'https://nationalwesterncenter.com/' },
      { label: 'CDOT Central 70 project', url: 'https://www.codot.gov/projects/i70east' },
      dpsLink,
    ],
    faq: [
      {
        q: 'What happened with I-70 in Elyria-Swansea?',
        a: 'The Central 70 project removed the ageing elevated viaduct, lowered the highway below grade, and built a four-acre park cover over a section next to Swansea Elementary. It was highly contentious — homes were acquired and demolished — and it fundamentally reshaped the neighborhood.',
      },
      {
        q: 'What is the National Western Center?',
        a: 'A large redevelopment of the National Western Stock Show campus on the neighborhood’s western edge, combining event facilities with a Colorado State University campus and public spaces. It is one of Denver’s largest ongoing public projects.',
      },
    ],
    sources: src,
    lede: `Elyria and Swansea are two adjoining north Denver neighborhoods that have
absorbed more infrastructure than any other part of the city — rail yards, the
stockyards, a smelter legacy, and an interstate rebuilt straight through the
middle of them.`,
    sections: `## Where Elyria-Swansea actually is

North-east Denver between the South Platte and Colorado Boulevard, along the
I-70 corridor up to about 47th Avenue, east of
[Globeville](/neighborhoods/denver/globeville/).

## The I-70 rebuild

Central 70 removed the deteriorating elevated viaduct that had run over the
neighborhood since 1964, lowered the highway below grade, and capped a section
with a four-acre park next to Swansea Elementary School.

Getting there required acquiring and demolishing homes, and the project was
opposed by many residents. The outcome is a highway that is quieter and less
visually dominant, in a neighborhood that paid for it directly.

## The environmental history

Like Globeville, parts of Elyria-Swansea fall within the **Vasquez Boulevard /
I-70 Superfund site**, with residential soil remediation for arsenic and lead
from historic smelter operations. Get the parcel-specific record.

## The National Western Center

The stock show campus on the western edge is being redeveloped into a
year-round facility with a CSU presence. It is a major long-term investment and
the principal reason for optimism about the area's trajectory — and, for
long-time residents, the principal reason for concern about displacement.`,
    suits: `Value-first buyers and investors with the appetite to do environmental due
diligence, and people who want to be very close to downtown cheaply.`,
    check: `**Soil sampling and remediation records** — essential here.

**Air quality and noise** relative to I-70 and the rail corridor.

**Ongoing construction** around the National Western Center.`,
  },

  {
    ...base,
    slug: 'north-park-hill',
    name: 'North Park Hill',
    title: 'North Park Hill, Denver — a neighborhood guide',
    summary:
      'The northern third of Park Hill: brick bungalows and ranches on a wide grid, with more space and lower prices than the blocks south of Montview.',
    answer:
      'North Park Hill is the northern section of Denver’s Park Hill area, between 26th and 38th Avenues. It has predominantly 1920s–1950s brick housing on generous lots and prices below South Park Hill.',
    tags: ['north-park-hill', 'denver', 'park-hill', 'bungalows', 'value', 'family'],
    bounds: 'Colorado Boulevard to Quebec Street, 26th to 38th Avenue',
    housing: ['1920s–1950s brick bungalows and ranches'],
    stats: ['to downtown - 15 min', 'value - below South Park Hill', 'lot size - generous'],
    parks: 'Skyland and City Park nearby, neighborhood parks',
    geo: { lat: 39.7686, lng: -104.9264 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'What is the difference between North, South and Northeast Park Hill?',
        a: 'They are three separate official neighborhoods in the wider Park Hill area. South Park Hill, below Montview, has the largest and most expensive houses; North Park Hill is more modest 1920s–50s stock; Northeast Park Hill is further north-east and the least expensive of the three.',
      },
      {
        q: 'Is North Park Hill a good value?',
        a: 'Yes — it shares Park Hill’s wide streets, mature trees and brick housing at prices meaningfully below the blocks south of Montview.',
      },
    ],
    sources: src,
    lede: `Park Hill is really three neighborhoods, and North Park Hill is the middle one
by both geography and price. It has the same wide streets and mature elms as its
southern neighbour, in more modest brick houses, for less money.`,
    sections: `## Where North Park Hill actually is

Between Colorado Boulevard and Quebec Street, from 26th up to 38th Avenue, north
of [South Park Hill](/neighborhoods/denver/south-park-hill/) and west of
[Northeast Park Hill](/neighborhoods/denver/northeast-park-hill/).

## The housing

1920s through 1950s brick — bungalows on the older southern blocks, ranches
further north. Lots are generous by Denver standards and the streets are wide,
which is a Park Hill hallmark throughout.

## The integration history

Park Hill as a whole is significant in Denver's civil rights history as one of
the few areas that pursued deliberate racial integration in the 1960s rather
than resegregating. Community organisations here were central to that effort,
and the neighborhood retains an unusually strong civic culture.`,
    suits: `Families who want Park Hill's streets and trees without South Park Hill's
prices, and buyers who want a solid brick house on a real lot.`,
    check: `**Sewer scope** — mature elms and clay laterals.

**Roof and hail history.**

**Basement finishes and permits.**`,
  },

  {
    ...base,
    slug: 'south-park-hill',
    name: 'South Park Hill',
    featured: true,
    title: 'South Park Hill, Denver — a neighborhood guide',
    summary:
      'Wide streets, enormous elms, and the most consistently handsome brick housing in east Denver, next to City Park.',
    answer:
      'South Park Hill is an east Denver neighborhood between Colorado Boulevard and Quebec Street, south of Montview. It is known for wide tree-lined streets, large 1900s–1940s brick houses, and proximity to City Park and the Denver Museum of Nature & Science.',
    tags: ['south-park-hill', 'denver', 'park-hill', 'family', 'historic', 'city-park'],
    bounds: 'Colorado Boulevard to Quebec Street, 23rd Avenue to Montview Boulevard',
    housing: ['1900s–1940s brick Tudors, bungalows and Denver Squares'],
    stats: ['to downtown - 15 min', 'City Park - adjacent', 'tenure - majority owner'],
    parks: 'City Park, Denver Museum of Nature & Science',
    geo: { lat: 39.7433, lng: -104.9264 },
    links: [
      denverLink,
      { label: 'Greater Park Hill Community', url: 'https://greaterparkhill.org/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'Is South Park Hill a good place to live in Denver?',
        a: 'It is one of the most consistently recommended family neighborhoods in the city — wide streets, huge trees, solid brick houses, City Park at the western edge, and a strong civic culture. It is priced accordingly.',
      },
      {
        q: 'What is Montview Boulevard?',
        a: 'The wide, tree-lined parkway that forms the boundary between South and North Park Hill and carries some of the largest houses in the area. It is part of Denver’s historic parkway system.',
      },
    ],
    sources: src,
    lede: `South Park Hill is the closest Denver gets to an East Coast streetcar suburb:
wide parkways, enormous elms meeting overhead, and block after block of
substantial brick houses built between 1900 and 1940. City Park is at the
western edge.`,
    sections: `## Where South Park Hill actually is

Between Colorado Boulevard and Quebec Street, from 23rd Avenue up to Montview,
east of [City Park](/neighborhoods/denver/city-park/) and south of
[North Park Hill](/neighborhoods/denver/north-park-hill/).

## The housing

Brick, 1900 to 1940, and larger than most of Denver's pre-war stock: Tudors,
Denver Squares, substantial bungalows, and a run of genuinely grand houses along
Montview and 17th Avenue Parkway.

The parkways are part of Denver's historic boulevard system, which is why they
are wide, planted and protected.

## The trees

Park Hill has one of the best surviving elm canopies in the city. It is the
neighborhood's defining physical feature and it is a maintenance liability —
mature tree work is expensive and it is the owner's cost.

## The civil rights history

Park Hill was one of the few Denver neighborhoods to pursue deliberate racial
integration in the 1960s rather than resegregating as Black families moved in.
Greater Park Hill Community, founded in that era, remains an unusually active
registered neighborhood organisation.

## The museums

The Denver Museum of Nature & Science sits at the western edge in City Park, and
the zoo is beside it.`,
    suits: `Families who want a large pre-war brick house on a tree-lined street with a
park and museums in walking distance, and who will pay for it.`,
    check: `**Sewer scope.** Elm roots and clay laterals are a guaranteed combination
here.

**Tree health and removal costs** on mature elms.

**Knob-and-tube and galvanised supply** in unrenovated houses.

**Roof age**, given hail exposure.`,
  },
]
