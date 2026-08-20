import { SRC } from './_template.mjs'

const base = { city: 'denver', cityName: 'Denver', sector: 'West Denver' }
const src = [SRC.denverNbhd, SRC.car]

const denverLink = { label: 'City and County of Denver', url: 'https://www.denvergov.org/' }
const dpsLink = { label: 'Denver Public Schools', url: 'https://www.dpsk12.org/' }

export const denverWest = [
  {
    ...base,
    slug: 'athmar-park',
    name: 'Athmar Park',
    featured: true,
    title: 'Athmar Park, Denver — a neighborhood guide',
    summary:
      'The cheapest yard this close to downtown. Alameda has everything you’d want to eat and nothing you’d want to look at, and the river trail starts at the end of the block.',
    answer:
      'Athmar Park is a south-west Denver neighborhood between Alameda Avenue and the South Platte River. It is one of the least expensive places in the city to buy a detached house with a yard within fifteen minutes of downtown, with predominantly 1950s brick ranches.',
    tags: ['athmar-park', 'denver', 'yards', 'value', 'river-trail', 'first-time-buyer'],
    bounds: 'Federal Boulevard to the South Platte, Alameda Avenue to Mississippi Avenue',
    housing: ['1948–1962 brick ranches', 'Scattered bungalows and newer infill'],
    stats: [
      'commute downtown - 12 min',
      'lot size - 6,250 sq ft typical',
      'river trail - end of the block',
    ],
    parks: 'Huston Lake Park, South Platte Trail, Ruby Hill nearby',
    geo: { lat: 39.7017, lng: -105.0122 },
    links: [
      denverLink,
      {
        label: 'South Platte River Trail',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'Is Athmar Park a good first-time buy in Denver?',
        a: 'It is one of the few Denver neighborhoods where a first-time buyer can still get a detached house with a yard and a garage within fifteen minutes of downtown. The housing is modest 1950s brick and much of it is unrenovated, which is exactly why the numbers work.',
      },
      {
        q: 'Is Athmar Park safe?',
        a: 'It is a working-class residential neighborhood with the property crime profile of most of west Denver. The interior residential streets are quiet; the arterials — Alameda and Federal — are busier and noisier. Walk the specific block.',
      },
      {
        q: 'What is there to eat in Athmar Park?',
        a: 'Alameda Avenue is the answer, and it is a genuinely good one — a long run of Mexican, Vietnamese and Salvadoran restaurants, taquerias and markets, most of them family-run and none of them expensive.',
      },
    ],
    sources: src,
    lede: `Athmar Park is the answer for people who want a Denver address, a yard, and a
number that starts with a four. It is not pretty from the arterial and it is
very pleasant six houses in.`,
    sections: `## Where Athmar Park actually is

South-west Denver between Federal Boulevard and the South Platte, from Alameda
down to Mississippi. Downtown is about twelve minutes by car — closer than most
of the neighborhoods that cost twice as much.

## What got built here

Overwhelmingly 1948 to 1962: single-storey brick ranches on 6,250-square-foot
lots, most with detached garages off an alley. The construction is solid and
plain, and a large share has never been substantially updated.

That is the opportunity. A Denver brick ranch with original systems is a
predictable renovation, and the lot is the part you cannot add later.

## Alameda Avenue

The commercial spine, and one of the best eating streets in Denver if you do not
require it to be attractive. Mexican, Vietnamese and Salvadoran restaurants,
panaderías, carnicerías and taquerias, most family-run.

It is a strip in the literal sense — parking lots, signage, traffic. The food is
worth it.

## The river

The South Platte trail runs along the eastern edge. From most of the
neighborhood you are on car-free paved trail within four minutes and downtown
within twenty on a bike. **Huston Lake Park** sits in the middle of the
neighborhood, and **Ruby Hill** — with the sledding hill and the bike park — is
just south.

## The honest part

Athmar Park is bounded by two arterials and a river, and it has industrial
neighbours to the east across the water. Air quality in the wider south-west
Denver area has been a documented concern, and the Burnham rail yard sits nearby.

None of that makes it a bad buy. It makes it a buy where you should walk the
specific block, at the hours you would actually be home.`,
    suits: `First-time buyers who need a detached house with a yard inside Denver, investors
who want workable rent-to-price ratios this close in, and anyone who will
genuinely use the river trail.

It is a weaker fit for buyers who want walkable retail beyond Alameda, or a
house that needs nothing.`,
    check: `**Sewer scope.** Clay laterals from the 1950s, mature trees. Non-negotiable.

**Roof age and hail history.** West Denver takes hail. Read the wind-and-hail
deductible on any insurance quote.

**Permits on basement finishes and garage conversions**, both of which are
common here and frequently unpermitted.

**Flood mapping** on the blocks nearest the South Platte.`,
  },

  {
    ...base,
    slug: 'west-colfax',
    name: 'West Colfax',
    title: 'West Colfax, Denver — a neighborhood guide',
    summary:
      'A rapidly redeveloping strip west of downtown with light rail, the old Jewish Denver history, and some of the best green chile in the city.',
    answer:
      'West Colfax is a west Denver neighborhood along Colfax Avenue between Federal Boulevard and Sheridan. Historically the centre of Jewish Denver, it now has significant new townhome and apartment development around the RTD W Line light rail stations.',
    tags: ['west-colfax', 'denver', 'light-rail', 'redevelopment', 'green-chile', 'value'],
    bounds: 'Federal Boulevard to Sheridan, Colfax Avenue to 17th Avenue',
    housing: ['1900s–1950s cottages and brick', '2015–present townhomes and apartments'],
    stats: ['W Line light rail', 'to downtown - 10 min', 'tenure - mixed'],
    transit: 'RTD W Line at Perry, Knox and Sheridan stations',
    parks: 'Paco Sanchez Park, Lakewood Gulch Trail',
    geo: { lat: 39.7403, lng: -105.0361 },
    links: [denverLink, { label: 'RTD W Line', url: 'https://www.rtd-denver.com/' }, dpsLink],
    faq: [
      {
        q: 'Is West Colfax a good place to buy in Denver?',
        a: 'It has been one of the stronger appreciation stories in west Denver, driven by the W Line light rail and heavy townhome development. It remains cheaper than the Highlands across I-25 and is closer to downtown than most of Lakewood.',
      },
      {
        q: 'What is the history of West Colfax?',
        a: 'It was the centre of Jewish Denver from the early twentieth century through roughly the 1960s, with synagogues, delis and the Jewish Consumptives’ Relief Society sanatorium nearby. Several buildings from that era survive.',
      },
    ],
    sources: src,
    lede: `West Colfax runs from the edge of downtown out to Sheridan, and it has changed
faster than almost any west-side neighborhood — light rail arrived, townhomes
followed, and the prices moved. Underneath is a much older story about Jewish
Denver and, more recently, some of the best green chile in the city.`,
    sections: `## Where West Colfax actually is

West of I-25 along Colfax between Federal and Sheridan, north of
[Barnum](/neighborhoods/denver/barnum/) and south of
[Sloan Lake](/neighborhoods/denver/sloan-lake/).

## The W Line

RTD's W Line runs through the neighborhood with stations at Perry, Knox and
Sheridan, giving a direct light rail ride to downtown in about ten minutes and
out to [Golden](/places/golden/) the other way. It is the engine of the
redevelopment.

## The history

From roughly 1900 to the 1960s this was the heart of Jewish Denver — synagogues,
delis, and the sanatoria that drew tuberculosis patients to Colorado's dry air.
The community largely moved east and south over subsequent decades, but the
built traces remain.

## The food

The Colfax corridor here holds an exceptional concentration of Mexican food, and
it is the source of our first pick in
[best green chile, no debate?](/answers/best-green-chile/) — thin, pork-forward,
and hot enough to matter.

## The redevelopment

Since the W Line opened, townhome and apartment development has been heavy,
particularly on the blocks nearest the stations. The result is a neighborhood
where a 1920s cottage and a 2022 four-storey apartment block are often on the
same street.`,
    suits: `Buyers who want light rail and downtown proximity below Highlands pricing,
investors, and anyone who will use the transit daily.`,
    check: `**Colfax noise** — it is a major arterial and the corridor is being rebuilt for
bus rapid transit further east.

**New-build quality** on the recent townhome stock.

**Older-home systems** on anything pre-1950.`,
  },

  {
    ...base,
    slug: 'villa-park',
    name: 'Villa Park',
    title: 'Villa Park, Denver — a neighborhood guide',
    summary:
      'A small west Denver neighborhood on the Lakewood Gulch, with light rail, a large park and prices well below the city median.',
    answer:
      'Villa Park is a west Denver neighborhood between Federal Boulevard and Sheridan, south of West Colfax. It is served by the RTD W Line, contains Paco Sanchez Park, and is among the more affordable neighborhoods within fifteen minutes of downtown.',
    tags: ['villa-park', 'denver', 'affordable', 'light-rail', 'parks'],
    bounds: 'Federal Boulevard to Sheridan, 10th Avenue to Colfax',
    housing: ['1900s–1950s cottages and brick ranches'],
    stats: ['W Line light rail', 'to downtown - 12 min', 'value - below city median'],
    transit: 'RTD W Line',
    parks: 'Paco Sanchez Park, Lakewood Gulch Trail',
    geo: { lat: 39.7325, lng: -105.0361 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Villa Park affordable?',
        a: 'Yes — it is among the least expensive Denver neighborhoods with light rail access and a twelve-minute drive downtown, which is an unusual combination.',
      },
    ],
    sources: src,
    lede: `Villa Park is a small west Denver neighborhood along the Lakewood Gulch with
light rail, a large rebuilt park and prices that have not yet followed West
Colfax next door.`,
    sections: `## Where Villa Park actually is

Between Federal and Sheridan, from 10th Avenue up to Colfax, south of
[West Colfax](/neighborhoods/denver/west-colfax/).

## Paco Sanchez Park

A large park along the gulch, substantially rebuilt in recent years with an
unusual music-themed playground. It is the neighborhood's main amenity, along
with the Lakewood Gulch Trail that runs through it and connects toward the
South Platte.

## The housing

Modest 1900s–1950s cottages and brick ranches. Less redevelopment than West
Colfax so far, which is where the value sits.`,
    suits: `Value buyers and investors who want light rail and proximity at the lowest
available price in west Denver.`,
    check: `**Block-level variation**, which is significant here.

**Flood and drainage** along the gulch.

**Older systems** on pre-1950 housing.`,
  },

  {
    ...base,
    slug: 'barnum',
    name: 'Barnum',
    title: 'Barnum, Denver — a neighborhood guide',
    summary:
      'Named for the circus showman who once owned it, a modest west Denver neighborhood with big lots and low prices.',
    answer:
      'Barnum is a west Denver neighborhood originally owned by circus showman P.T. Barnum, who bought the land in 1878. It is predominantly modest early- and mid-twentieth-century housing and remains among the more affordable parts of the city.',
    tags: ['barnum', 'denver', 'affordable', 'history', 'yards'],
    bounds: 'Federal Boulevard to Sheridan, 1st Avenue to 10th Avenue',
    housing: ['1900s–1960s cottages, bungalows and ranches'],
    stats: ['to downtown - 12 min', 'value - below city median', 'lot size - varied, some large'],
    parks: 'Barnum Park, Weir Gulch Trail',
    geo: { lat: 39.7208, lng: -105.0322 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Barnum in Denver named after P.T. Barnum?',
        a: 'Yes. The circus showman P.T. Barnum bought the land in 1878 and it was developed as a town bearing his name before Denver annexed it. Barnum Park still carries the name.',
      },
      {
        q: 'Is Barnum a good value?',
        a: 'It is one of the more affordable Denver neighborhoods with detached housing and yards, twelve minutes from downtown. The trade-offs are limited walkable amenity and a housing stock that often needs work.',
      },
    ],
    sources: src,
    lede: `Barnum was bought by P.T. Barnum in 1878 — the circus one — and platted as its
own town before Denver absorbed it. Today it is a quiet, modest west Denver
neighborhood with some genuinely large lots and some of the lowest prices in the
city.`,
    sections: `## Where Barnum actually is

West Denver between Federal and Sheridan, from 1st Avenue to 10th, south of
[Villa Park](/neighborhoods/denver/villa-park/) and west of
[Valverde](/neighborhoods/denver/valverde/).

## The history

Barnum bought roughly 760 acres here in 1878, reportedly sight unseen, and used
part of it to winter circus animals. The town of Barnum was incorporated
separately and annexed by Denver in 1896.

## The housing

Mixed 1900s through 1960s — cottages, bungalows and brick ranches. Lot sizes
vary more than in most Denver neighborhoods, and some parcels are unusually
large for the price.

**Barnum Park** and the Weir Gulch trail run through the northern half.`,
    suits: `Value buyers who want a detached house and a yard close in, and anyone
prepared to renovate.`,
    check: `**Lot and zoning**, which vary more here than elsewhere — confirm what a
parcel actually permits.

**Deferred maintenance**, common in this stock.

**Gulch drainage** on the properties backing Weir Gulch.`,
  },

  {
    ...base,
    slug: 'barnum-west',
    name: 'Barnum West',
    title: 'Barnum West, Denver — a neighborhood guide',
    summary:
      'The quieter western half of Barnum, up against Sheridan, with post-war housing and Denver’s lowest entry prices.',
    answer:
      'Barnum West is a small west Denver neighborhood adjoining Barnum, extending to Sheridan Boulevard. It is predominantly post-war housing and among the least expensive detached housing markets in the City and County of Denver.',
    tags: ['barnum-west', 'denver', 'affordable', 'post-war', 'quiet'],
    bounds: 'Sheridan Boulevard east to Barnum, 1st Avenue to 10th Avenue',
    housing: ['1940s–1960s brick ranches and cottages'],
    stats: ['to downtown - 14 min', 'value - among Denver’s lowest', 'tenure - mixed'],
    parks: 'Barnum Park nearby',
    geo: { lat: 39.7208, lng: -105.0431 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'What is the difference between Barnum and Barnum West?',
        a: 'They are adjacent official neighborhoods on the same historic land. Barnum West is the smaller western portion nearer Sheridan, slightly newer on average and slightly quieter.',
      },
    ],
    sources: src,
    lede: `Barnum West is the western continuation of Barnum, running up to Sheridan. It
is small, quiet, almost entirely residential, and about as inexpensive as
detached housing gets inside Denver city limits.`,
    sections: `## Where Barnum West actually is

Between Sheridan Boulevard and [Barnum](/neighborhoods/denver/barnum/), from
1st to 10th Avenue. [Lakewood](/places/lakewood/) begins immediately west across
Sheridan.

## The housing

Predominantly 1940s–60s brick ranches and cottages on standard lots. Very little
new construction and limited redevelopment pressure so far.`,
    suits: `First-time buyers and investors who want the lowest detached entry price in
Denver and are comfortable with a neighborhood that has almost no commercial
amenity of its own.`,
    check: `**Sheridan traffic** on the western blocks.

**Post-war systems** and any unpermitted work.`,
  },

  {
    ...base,
    slug: 'westwood',
    name: 'Westwood',
    title: 'Westwood, Denver — a neighborhood guide',
    summary:
      'Denver’s most densely Latino neighborhood, with Morrison Road as its spine and a cultural district that is genuinely its own.',
    answer:
      'Westwood is a south-west Denver neighborhood and the city’s most heavily Latino, centred on the Morrison Road corridor. It is predominantly modest post-war housing, has among the lowest incomes and housing costs in the city, and hosts a designated creative district.',
    tags: ['westwood', 'denver', 'latino', 'morrison-road', 'affordable', 'food'],
    bounds: 'Sheridan to Federal Boulevard, Alameda to Mississippi Avenue',
    housing: ['1940s–1960s cottages and ranches', 'Some earlier cottages'],
    stats: ['to downtown - 15 min', 'value - among Denver’s lowest', 'Morrison Road corridor'],
    parks: 'Westwood Park, Garfield Lake Park, Weir Gulch',
    geo: { lat: 39.7033, lng: -105.0361 },
    links: [
      denverLink,
      { label: 'Westwood Creative District', url: 'https://www.bdcdenver.org/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is Morrison Road in Denver known for?',
        a: 'It is the diagonal commercial spine of Westwood and the heart of one of Denver’s most concentrated Latino business districts — taquerias, panaderías, markets, and the birria that we rate among the best in the city.',
      },
      {
        q: 'Is Westwood affordable?',
        a: 'It has historically been among the least expensive neighborhoods in Denver, though it has appreciated substantially. Housing is modest and much of it needs work.',
      },
    ],
    sources: src,
    lede: `Westwood is the most densely Latino neighborhood in Denver, and Morrison Road
running diagonally through it is one of the genuinely distinctive commercial
streets in Colorado. It is also among the city's least expensive places to buy a
house.`,
    sections: `## Where Westwood actually is

South-west Denver between Sheridan and Federal, from Alameda down to
Mississippi, west of [Athmar Park](/neighborhoods/denver/athmar-park/).

## Morrison Road

The diagonal cuts across the street grid and functions as the neighborhood's
main street. Taquerias, panaderías, carnicerías, markets, and the birria stand
we wrote up in [the Taco Report](/columns/taco-report/morrison-road-birria/).

The **Westwood Creative District** designation has supported public art and
streetscape work along the corridor, led substantially by local organisations
rather than imposed from outside.

## The housing

Modest 1940s–60s cottages and ranches, plus some earlier stock. Lot sizes are
standard and detached garages common. A significant share needs work, and
owner-occupancy is high relative to price.

## The honest part

Westwood has historically had less park space per resident, more diesel traffic,
and worse air quality than most of Denver, and it has been the focus of
sustained community organising on exactly those points. Garfield Lake and
Westwood Park have both seen recent investment.`,
    suits: `Buyers who want the lowest prices in Denver with a genuine neighborhood
culture attached, investors, and anyone who wants to eat extremely well within
walking distance.`,
    check: `**Air quality and traffic** on the arterials.

**Unpermitted work**, which is common in this stock.

**Sewer and roof** on anything pre-1965.`,
  },

  {
    ...base,
    slug: 'mar-lee',
    name: 'Mar Lee',
    title: 'Mar Lee, Denver — a neighborhood guide',
    summary:
      'A quiet post-war neighborhood in south-west Denver with modest brick houses, real yards and steady value.',
    answer:
      'Mar Lee is a south-west Denver neighborhood of predominantly 1950s brick ranches, between Federal Boulevard and Sheridan south of Alameda. It is largely residential, owner-occupied, and priced below the Denver median.',
    tags: ['mar-lee', 'denver', 'post-war', 'affordable', 'yards'],
    bounds: 'Federal Boulevard to Sheridan, Mississippi to Jewell Avenue',
    housing: ['1950s brick ranches', 'Some 1960s split-levels'],
    stats: ['to downtown - 15 min', 'tenure - majority owner', 'lot size - 6,250 sq ft typical'],
    parks: 'Garfield Lake Park, Huston Lake nearby',
    geo: { lat: 39.6939, lng: -105.0322 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Mar Lee a good neighborhood in Denver?',
        a: 'It is a quiet, largely owner-occupied post-war neighborhood with yards and garages at below-median Denver prices. It has little walkable amenity of its own, which is the main trade-off.',
      },
    ],
    sources: src,
    lede: `Mar Lee is a few dozen blocks of 1950s brick in south-west Denver — quiet,
owner-occupied, unremarkable in the way that makes a neighborhood pleasant to
live in and difficult to write about.`,
    sections: `## Where Mar Lee actually is

South-west Denver between Federal and Sheridan, from Mississippi down to Jewell,
south of [Westwood](/neighborhoods/denver/westwood/).

## The housing

Almost entirely 1950s brick ranches with detached garages on standard lots, plus
some 1960s split-levels. Solid construction, plain design, and a lot of it
unrenovated.

## What is nearby

**Garfield Lake Park** on the western side. Most shopping happens on Federal or
Alameda. This is a drive-for-errands neighborhood.`,
    suits: `Families and first-time buyers who want a detached house with a yard and a
garage at below-median Denver pricing, and who do not need walkable retail.`,
    check: `**Sewer scope** and **roof age** — the standard 1950s Denver checks.

**Permits on additions and basement finishes.**`,
  },

  {
    ...base,
    slug: 'ruby-hill',
    name: 'Ruby Hill',
    title: 'Ruby Hill, Denver — a neighborhood guide',
    summary:
      'Named for the park on the bluff above the South Platte — the best sledding hill in Denver, a bike park, and a neighborhood catching up to both.',
    answer:
      'Ruby Hill is a south-west Denver neighborhood on a bluff above the South Platte River, named for Ruby Hill Park. The park contains Denver’s best-known sledding hill and a public bike park, and the surrounding housing is predominantly post-war and modestly priced.',
    tags: ['ruby-hill', 'denver', 'parks', 'sledding', 'bike-park', 'value'],
    bounds: 'Federal Boulevard to the South Platte, Jewell to Evans Avenue',
    housing: ['1940s–1960s brick ranches and cottages'],
    stats: ['Ruby Hill Park', 'to downtown - 15 min', 'value - below city median'],
    parks: 'Ruby Hill Park, Levitt Pavilion, South Platte Trail',
    geo: { lat: 39.6828, lng: -105.0083 },
    links: [
      denverLink,
      { label: 'Levitt Pavilion Denver', url: 'https://levittdenver.org/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'Where is the best sledding hill in Denver?',
        a: 'Ruby Hill Park, without much argument. The city grooms it in winter and adds a rail yard for skiers and snowboarders. It is also the best free view of the downtown skyline from the south-west.',
      },
      {
        q: 'What is the Levitt Pavilion?',
        a: 'An outdoor amphitheatre in Ruby Hill Park that hosts a season of free concerts each summer. It is one of the better free amenities in the city.',
      },
    ],
    sources: src,
    lede: `Ruby Hill is a bluff above the South Platte with the best sledding in Denver on
one side and a free concert amphitheatre on the other. The neighborhood below it
is modest post-war housing that has appreciated as the park has improved.`,
    sections: `## Where Ruby Hill actually is

South-west Denver between Federal Boulevard and the South Platte, from Jewell
down to Evans, south of [Athmar Park](/neighborhoods/denver/athmar-park/).

## The park

**Ruby Hill Park** sits on the bluff and is genuinely one of Denver's best:

- The **sledding hill**, groomed in winter with a snowboard and ski rail yard
- The **Levitt Pavilion**, hosting a free summer concert season
- A **public bike park** with dirt jumps and a pump track
- A skyline view that rivals anything on the west side

## The housing

1940s–60s brick ranches and cottages, modest, on standard lots. Prices remain
below the city median though the park investment has pulled them up.`,
    suits: `Families who will use the park constantly, cyclists, value buyers who want a
detached house close in, and anyone who wants free live music in walking
distance all summer.`,
    check: `**Slope and drainage** on the bluff-adjacent parcels.

**Concert noise** in summer if you are close to the pavilion.

**Post-war systems** and sewer.`,
  },

  {
    ...base,
    slug: 'valverde',
    name: 'Valverde',
    title: 'Valverde, Denver — a neighborhood guide',
    summary:
      'A small, mixed industrial and residential pocket west of the South Platte, cheap and close in.',
    answer:
      'Valverde is a small west Denver neighborhood between Alameda Avenue and the South Platte River, mixing modest residential blocks with light industrial uses. It is among the least expensive neighborhoods in the city and is very close to downtown.',
    tags: ['valverde', 'denver', 'affordable', 'industrial', 'close-in'],
    bounds: 'Federal Boulevard to the South Platte, 6th Avenue to Alameda',
    housing: ['1900s–1950s cottages and small brick houses'],
    stats: ['to downtown - 10 min', 'value - among Denver’s lowest', 'mixed industrial'],
    parks: 'South Platte Trail, Weir Gulch',
    geo: { lat: 39.7139, lng: -105.0122 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Valverde residential?',
        a: 'Partly. It is a genuinely mixed neighborhood — residential blocks interleaved with light industrial and commercial uses, which is why it is inexpensive despite being ten minutes from downtown.',
      },
    ],
    sources: src,
    lede: `Valverde is ten minutes from downtown and among the cheapest addresses in
Denver, for the straightforward reason that it shares its blocks with light
industry.`,
    sections: `## Where Valverde actually is

West of the South Platte between Federal Boulevard and the river, from 6th
Avenue down to Alameda, north of [Athmar Park](/neighborhoods/denver/athmar-park/).

## The mix

Residential streets sit directly alongside warehouses, small manufacturing and
commercial yards. That proximity is the whole pricing story.

## The trail

The South Platte Trail runs the eastern edge, which gives genuinely good
car-free access to downtown and south toward Ruby Hill.`,
    suits: `Investors and value-first buyers comfortable with industrial adjacency, and
anyone who wants to be extremely close to downtown at the lowest possible price.`,
    check: `**Environmental history** on and near any parcel — this is a former and
current industrial area, and a Phase I assessment is a reasonable ask.

**Truck traffic and noise** at the hours you would be home.

**Flood mapping** near the river.`,
  },

  {
    ...base,
    slug: 'sun-valley',
    name: 'Sun Valley',
    title: 'Sun Valley, Denver — a neighborhood guide',
    summary:
      'Denver’s smallest and lowest-income neighborhood, next to the stadium, in the middle of a large-scale public housing redevelopment.',
    answer:
      'Sun Valley is a small west Denver neighborhood beside Empower Field at Mile High, historically dominated by public housing and among the lowest-income areas in the city. It is the subject of a large ongoing redevelopment led by the Denver Housing Authority.',
    tags: ['sun-valley', 'denver', 'public-housing', 'redevelopment', 'stadium'],
    bounds: 'The South Platte to Federal Boulevard, Colfax to 8th Avenue',
    housing: ['Public housing', 'New mixed-income redevelopment'],
    stats: ['to downtown - 8 min', 'stadium - adjacent', 'redevelopment - ongoing'],
    parks: 'South Platte Trail, Weir Gulch',
    geo: { lat: 39.7314, lng: -105.0161 },
    links: [
      denverLink,
      { label: 'Denver Housing Authority — Sun Valley', url: 'https://www.denverhousing.org/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is happening in Sun Valley Denver?',
        a: 'The Denver Housing Authority is carrying out a large redevelopment replacing ageing public housing with mixed-income housing, along with new parks, a food hall and infrastructure. It is one of the largest such projects in the city’s history.',
      },
    ],
    sources: src,
    lede: `Sun Valley is Denver's smallest neighborhood by population and historically its
lowest-income, sitting between the stadium and the river eight minutes from
downtown. It is in the middle of a redevelopment that will change it
substantially.`,
    sections: `## Where Sun Valley actually is

Between the South Platte and Federal Boulevard, from Colfax down to 8th Avenue,
immediately west of Empower Field at Mile High.

## The redevelopment

The Denver Housing Authority's Sun Valley transformation is replacing
mid-century public housing with mixed-income development, adding parks, a food
hall and new infrastructure. It has been under way for years and will continue
for years more.

Whether it succeeds on its own terms — rehousing existing residents rather than
displacing them — is the live question, and it is one worth reading the primary
documents on.

## Practical notes

Very little of the housing here is currently for sale on the open market;
inventory is dominated by the housing authority's stock and the new mixed-income
units. Stadium event days affect access as they do in
[Jefferson Park](/neighborhoods/denver/jefferson-park/).`,
    suits: `This is not primarily an open-market purchase neighborhood at present. It is
worth understanding for anyone buying nearby, and worth watching as the
redevelopment completes.`,
    check: `**Redevelopment phasing** — what is built, what is planned, and when.

**Stadium event impact.**

**Flood mapping** near the South Platte.`,
  },
]
