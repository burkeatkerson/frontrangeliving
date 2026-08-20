import { SRC } from './_template.mjs'

const base = { city: 'denver', cityName: 'Denver', sector: 'Northwest Denver' }
const src = [SRC.denverNbhd, SRC.car]

const denverLink = { label: 'City and County of Denver', url: 'https://www.denvergov.org/' }
const dpsLink = { label: 'Denver Public Schools', url: 'https://www.dpsk12.org/' }

export const denverNorthwest = [
  {
    ...base,
    slug: 'highland',
    name: 'Highland',
    featured: true,
    title: 'Highland (LoHi), Denver — a neighborhood guide',
    summary:
      'The epicentre of Denver’s last twenty years of change: Victorian cottages, scrape-and-replace duplexes, and the densest run of good restaurants in the city.',
    answer:
      'Highland is a north-west Denver neighborhood across I-25 from downtown, including the area known as LoHi. Originally a working-class Italian and Hispanic district of 1880s–1920s cottages, it has been extensively redeveloped since 2000 into a dense mix of modern duplexes, townhomes and restaurants.',
    tags: ['highland', 'lohi', 'denver', 'restaurants', 'redevelopment', 'walkable'],
    bounds: 'I-25 to Federal Boulevard, 38th Avenue to Speer Boulevard',
    housing: [
      '1880–1925 Victorian cottages and brick',
      '2000s–present scrape-and-replace duplexes and townhomes',
    ],
    stats: [
      'to downtown - 15 min walk',
      'restaurants - highest density outside downtown',
      'tenure - mixed',
    ],
    parks: 'Highland Park, Confluence Park, South Platte Trail',
    geo: { lat: 39.7614, lng: -105.0106 },
    links: [
      denverLink,
      {
        label: 'Highland pedestrian bridge and Confluence Park',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is the difference between Highland, LoHi and the Highlands?',
        a: 'Highland is the official neighborhood across I-25 from downtown. LoHi — Lower Highland — is the south-eastern corner of it nearest the river and the pedestrian bridge. "The Highlands" is used loosely for the wider area including West Highland and Berkeley, which are separate official neighborhoods.',
      },
      {
        q: 'Why did Highland change so much?',
        a: 'Proximity. It is a fifteen-minute walk from downtown across the Highland pedestrian bridge, and it had small, inexpensive, ageing houses on standard lots. From about 2000 onward those were bought, scraped and replaced with two-unit duplexes at far higher value, which reset the whole market.',
      },
      {
        q: 'Is Highland walkable?',
        a: 'Yes, unusually so. The 32nd and Lowell junction, the 15th Street corridor and the LoHi blocks each have dense, walkable commercial clusters, and the pedestrian bridge connects directly to Union Station.',
      },
    ],
    sources: src,
    lede: `Highland is the single clearest illustration of what happened to Denver after
2000. A working-class neighborhood of small brick cottages, fifteen minutes on
foot from downtown, became the most sought-after real estate in the city — and
the scrape-and-replace duplex became its defining building type.`,
    sections: `## Where Highland actually is

Across I-25 and the South Platte from downtown, between Federal Boulevard and
the interstate, from 38th Avenue down to Speer. The **Highland pedestrian
bridge** crosses from the LoHi corner directly to
[Union Station](/neighborhoods/denver/union-station/), which is the single
piece of infrastructure most responsible for the neighborhood's transformation.

## The three sub-areas

**LoHi (Lower Highland)** is the south-eastern corner nearest the bridge and the
river. It is the densest and newest, with the tallest buildings and most of the
restaurants.

**Highland Square**, around 32nd and Lowell, is the traditional commercial heart
— a walkable junction of restaurants, bars and shops that predates the boom and
survived it.

**The residential blocks** between them still hold a substantial number of the
original cottages, especially north of 32nd.

## What got built here, and what got removed

Highland was settled in the 1870s and 80s, and for most of the twentieth century
was a working-class Italian and then Mexican-American neighborhood. Our Lady of
Mount Carmel and the surrounding blocks were the Italian core; the area around
Navajo Street was central to Chicano Denver.

From about 2000, the small houses were bought and scraped. What replaced them is
overwhelmingly the **half-duplex** — two attached units on a single old lot, each
selling for multiples of what the original house did. It is efficient, it is
generally well built, and it is why the streetscape now alternates between 1900
and 2015 with nothing in between.

The displacement that came with it is a real and much-discussed part of the
neighborhood's recent history.

## The food

Highland has the highest concentration of good restaurants in Denver outside
downtown, spread across LoHi, Highland Square and the 15th Street corridor. It
is the main reason people who could live anywhere choose here.

## The parks

**Confluence Park**, where Cherry Creek meets the South Platte, is at the
neighborhood's foot — a whitewater park, the trail junction, and the literal
founding site of Denver.`,
    suits: `Buyers who want walkability and restaurants and are buying new or nearly-new
attached product. Renters who want to be near downtown without living in it.
Professionals who will use the pedestrian bridge to commute on foot.

It is a weaker fit for buyers who want a yard, a garage or a detached house at a
reasonable price — those are increasingly scarce here.`,
    check: `**Party wall agreements** on duplex product. Understand what is shared,
who insures what, and how disputes get resolved.

**Build quality on 2000s-era duplexes**, which varies widely. Some are excellent;
some were built fast.

**Parking.** Many new units have one space or none, and street parking is
congested.

**Slope and drainage** on the blocks falling toward the river.`,
  },

  {
    ...base,
    slug: 'west-highland',
    name: 'West Highland',
    featured: true,
    title: 'West Highland, Denver — a neighborhood guide',
    summary:
      'The quieter, leafier, more intact half of the Highlands: bungalows and Denver Squares on a calm grid, with Tennyson Street on the far side.',
    answer:
      'West Highland is a north-west Denver neighborhood west of Federal Boulevard, characterised by well-preserved 1900s–1930s bungalows and Denver Squares on a quiet grid. It is more owner-occupied and less redeveloped than neighbouring Highland.',
    tags: ['west-highland', 'denver', 'bungalows', 'family', 'walkable', 'tennyson'],
    bounds: 'Federal Boulevard to Sheridan, 29th Avenue to 38th Avenue',
    housing: ['1900–1935 bungalows and Denver Squares', 'Selective pop-tops and infill'],
    stats: [
      'tenure - majority owner',
      'to downtown - 15 min',
      'Highlands Square and Tennyson nearby',
    ],
    parks: 'Sloan Lake nearby, Highland Park',
    geo: { lat: 39.7625, lng: -105.0389 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is West Highland better than Highland?',
        a: 'Different rather than better. West Highland is quieter, leafier, has more intact original housing and more owner-occupiers; Highland has more restaurants, more density and a shorter walk downtown. Families tend to prefer West Highland.',
      },
      {
        q: 'What is there to do in West Highland?',
        a: 'Highlands Square at 32nd and Lowell is on the eastern edge, and Tennyson Street in Berkeley is a few blocks west — between them you get a good run of restaurants, bars, a cinema and shops without leaving the area on foot.',
      },
    ],
    sources: src,
    lede: `West Highland is what people hoped Highland would stay. The grid is quiet, the
street trees are mature, and most of the original 1920s bungalows and Denver
Squares are still standing and still houses. It is family Denver at its most
characteristic.`,
    sections: `## Where West Highland actually is

West of Federal Boulevard out to Sheridan, between 29th and 38th Avenues, with
[Highland](/neighborhoods/denver/highland/) to the east,
[Berkeley](/neighborhoods/denver/berkeley/) to the north and
[Sloan Lake](/neighborhoods/denver/sloan-lake/) to the south.

## What got built here

Almost entirely 1900 to 1935: brick bungalows, Denver Squares, and a scattering
of Tudor Revival. Lots are standard 6,250 square feet with alleys, which means
detached garages and, increasingly, accessory dwelling units.

Redevelopment here has taken the form of pop-tops and additions more than
scrapes, so the streetscape has retained its scale in a way Highland's has not.

## The two commercial edges

**Highlands Square** at 32nd and Lowell sits on the eastern boundary — the
best walkable junction in north-west Denver.

**Tennyson Street** a few blocks west in [Berkeley](/neighborhoods/denver/berkeley/)
has the cinema, the galleries and a strong restaurant run.

Between the two, most West Highland addresses have genuine walkable amenity.`,
    suits: `Families who want a period house on a quiet street within fifteen minutes of
downtown, and buyers who want the Highlands without buying a duplex. This is one
of the most consistently recommended family neighborhoods in Denver.`,
    check: `**Sewer scope** — mature trees and clay laterals.

**Pop-top quality.** Additions vary; check permits and get a structural opinion
on anything ambitious.

**Foundation and drainage**, particularly on the blocks that slope toward Sloan
Lake.`,
  },

  {
    ...base,
    slug: 'berkeley',
    name: 'Berkeley',
    featured: true,
    title: 'Berkeley, Denver — a neighborhood guide',
    summary:
      'Tennyson Street, Berkeley Lake, and a bungalow grid that has become one of north-west Denver’s most desirable addresses without losing its shape.',
    answer:
      'Berkeley is a north-west Denver neighborhood centred on Tennyson Street and Berkeley Lake Park. Its housing is predominantly 1900s–1940s bungalows and cottages, and Tennyson Street is one of the city’s better independent commercial strips.',
    tags: ['berkeley', 'denver', 'tennyson', 'bungalows', 'walkable', 'parks'],
    bounds: 'Sheridan to Federal Boulevard, 38th Avenue to I-70',
    housing: ['1900–1945 bungalows and cottages', 'Newer infill and pop-tops'],
    stats: ['Tennyson Street', 'Berkeley Lake Park', 'to downtown - 18 min'],
    parks: 'Berkeley Lake Park, Rocky Mountain Lake Park, Willis Case Golf Course',
    geo: { lat: 39.7808, lng: -105.0431 },
    links: [
      denverLink,
      {
        label: 'Denver Parks and Recreation',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is Tennyson Street known for?',
        a: 'A walkable strip of independent restaurants, bars, galleries and shops between roughly 38th and 46th, with a monthly art walk and a restored cinema. It is the commercial heart of Berkeley and one of the best small commercial streets in Denver.',
      },
      {
        q: 'Is Berkeley a good neighborhood for families?',
        a: 'Yes — two lake parks, a golf course, a walkable main street and a bungalow grid with alleys. It has become expensive, which is the main constraint.',
      },
    ],
    sources: src,
    lede: `Berkeley has two lakes, a golf course, and Tennyson Street — a genuinely good
independent commercial strip that anchors the neighborhood without overwhelming
it. The housing is bungalows, mostly intact, on an alley grid.`,
    sections: `## Where Berkeley actually is

North-west Denver between Sheridan and Federal, from 38th Avenue up to I-70,
north of [West Highland](/neighborhoods/denver/west-highland/) and west of
[Sunnyside](/neighborhoods/denver/sunnyside/).

## Tennyson Street

The commercial spine runs roughly 38th to 46th. Independent restaurants,
breweries, galleries, the restored Oriental Theater, and a monthly art walk. It
has gentrified but it has stayed independent, which is not true of every Denver
commercial strip.

## The parks

**Berkeley Lake Park** and **Rocky Mountain Lake Park** are both substantial, both
have real lakes, and **Willis Case Golf Course** sits between Berkeley and the
I-70 edge with genuinely good mountain views.

That is a lot of open space for one neighborhood, and it is a large part of why
Berkeley prices the way it does.

## The I-70 question

The northern edge abuts I-70, and the noise and air quality nearer the highway
are materially worse than a few blocks south. It is the clearest price gradient
in the neighborhood and it is worth walking before you decide.`,
    suits: `Families and buyers who want a bungalow, a walkable main street and real parks
within twenty minutes of downtown.`,
    check: `**Distance from I-70** — noise and air quality improve substantially a few
blocks south.

**Sewer scope and pre-1945 systems.**

**ADU potential** if that matters to you; the alley grid supports it and Denver
zoning has been expanding where it is permitted.`,
  },

  {
    ...base,
    slug: 'sloan-lake',
    name: 'Sloan Lake',
    featured: true,
    title: 'Sloan Lake, Denver — a neighborhood guide',
    summary:
      'Denver’s largest lake with the downtown skyline behind it, ringed by bungalows, new townhomes and the redeveloped St. Anthony hospital site.',
    answer:
      'Sloan Lake is a north-west Denver neighborhood around the city’s largest lake, roughly four miles west of downtown. It combines 1900s–1950s bungalows with substantial new development, including the redeveloped former St. Anthony Hospital site.',
    tags: ['sloan-lake', 'denver', 'lake', 'parks', 'redevelopment', 'views'],
    bounds: 'Sheridan to Federal Boulevard, 17th Avenue to 29th Avenue',
    housing: ['1900–1955 bungalows and brick', '2015–present townhomes and apartments'],
    stats: ['lake - 177 acres', 'to downtown - 12 min', 'skyline views from the east shore'],
    parks: 'Sloan Lake Park, Edgewater trails',
    geo: { lat: 39.7508, lng: -105.045 },
    links: [
      denverLink,
      {
        label: 'Sloan’s Lake Park, Denver Parks and Recreation',
        url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'Is it Sloan Lake or Sloan’s Lake?',
        a: 'Both are used. The official Denver neighborhood is Sloan Lake; the park is commonly signed and referred to as Sloan’s Lake Park. Locals use them interchangeably.',
      },
      {
        q: 'What happened to St. Anthony Hospital in Sloan Lake?',
        a: 'It closed and relocated to Lakewood, and the large site was redeveloped into a mixed-use district with apartments, townhomes, retail and offices. It substantially changed the density on the lake’s eastern side.',
      },
      {
        q: 'Can you swim in Sloan Lake?',
        a: 'No. Swimming is not permitted. The lake is used for non-motorised boating, and the 2.6-mile loop path around it is one of the most popular running and walking routes in Denver.',
      },
    ],
    sources: src,
    lede: `Sloan Lake is 177 acres of water four miles west of downtown, and the view
east across it — the skyline, and the plains light behind it — is one of the
best in Denver. The neighborhood around it has changed faster than almost
anywhere in the city.`,
    sections: `## Where Sloan Lake actually is

Between Sheridan and Federal, from 17th up to 29th Avenue, west of
[Jefferson Park](/neighborhoods/denver/jefferson-park/) and south of
[West Highland](/neighborhoods/denver/west-highland/).
[Edgewater](/places/edgewater/) — a separate city — is immediately west across
Sheridan.

## The lake

The park loop is 2.6 miles, flat and paved, and heavily used. Non-motorised
boating is allowed; swimming is not. The Dragon Boat Festival each summer is the
neighborhood's big event.

## The St. Anthony redevelopment

St. Anthony Central Hospital occupied a large site on the lake's eastern side
until it relocated to Lakewood. The site was redeveloped into a dense mixed-use
district — apartments, townhomes, retail and offices — which added a great deal
of housing and considerably more traffic.

It is the single biggest change to the neighborhood in fifty years and opinion
locally remains divided.

## The housing

Original stock is 1900s–1950s bungalows and brick, much of it modest. Layered
onto it is the new development on the hospital site plus scattered townhome
infill, particularly on the blocks facing the lake where the views justify the
density.`,
    suits: `Runners, walkers and anyone who will use the loop daily. Buyers who want a
skyline view. Renters who want new construction with a park at the door.`,
    check: `**Which side of the lake.** The east side is denser, newer and has the views;
the west and north are quieter and more original.

**New-build quality** on the recent townhome product.

**Traffic on Sheridan and 17th**, both of which carry real volume.`,
  },

  {
    ...base,
    slug: 'sunnyside',
    name: 'Sunnyside',
    title: 'Sunnyside, Denver — a neighborhood guide',
    summary:
      'The most affordable of the north-west Denver bungalow neighborhoods, and the one still visibly in transition.',
    answer:
      'Sunnyside is a north-west Denver neighborhood north of Highland, characterised by 1900s–1950s bungalows and a mix of residential and light industrial uses. It is generally less expensive than neighbouring Highland and Berkeley and has seen substantial recent infill.',
    tags: ['sunnyside', 'denver', 'bungalows', 'value', 'transition'],
    bounds: 'Federal Boulevard to the rail corridor, 38th Avenue to 46th Avenue',
    housing: ['1900–1955 bungalows and cottages', 'Recent townhome and duplex infill'],
    stats: ['to downtown - 15 min', 'tenure - mixed', 'value - below Highland and Berkeley'],
    parks: 'Chaffee Park, Aztlan Park nearby',
    geo: { lat: 39.7717, lng: -105.0186 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Sunnyside a good investment in Denver?',
        a: 'It has been one of the better appreciation stories in north-west Denver, precisely because it started cheaper than Highland and Berkeley and shares their bones — bungalows, alleys, proximity to downtown. That gap has narrowed but not closed.',
      },
      {
        q: 'Is Sunnyside safe?',
        a: 'It is a mixed residential and light-industrial neighborhood in transition, and conditions vary block by block more than in West Highland or Berkeley. Walk the specific street at different times rather than judging the neighborhood as a whole.',
      },
    ],
    sources: src,
    lede: `Sunnyside is the north-west Denver neighborhood that has not finished
changing. It has the same bungalow bones as Berkeley and West Highland, the same
proximity to downtown, and prices that still reflect the industrial edges and
the arterials rather than the housing.`,
    sections: `## Where Sunnyside actually is

North of [Highland](/neighborhoods/denver/highland/) between Federal Boulevard
and the rail corridor, from 38th up to 46th Avenue, east of
[Berkeley](/neighborhoods/denver/berkeley/).

## What got built here

1900s–1950s bungalows and small brick houses on standard lots with alleys, mixed
with light industrial along the rail corridor on the eastern side. Since about
2012 a great deal of townhome and duplex infill has gone in, particularly near
the 41st and Fox commuter rail station.

## The station

The 41st & Fox station on the RTD B and G lines sits at the eastern edge, and
the city has planned significant density around it. That is the neighborhood's
principal long-term catalyst.`,
    suits: `Value buyers who want Highland-adjacent bones at a lower number, investors,
and first-time buyers who can still occasionally find a detached bungalow here
when they cannot two blocks west.`,
    check: `**Industrial adjacency and environmental history** on the eastern parcels.

**Block-level variation**, which is wider here than in the neighbouring areas.

**Sewer and pre-1955 systems.**`,
  },

  {
    ...base,
    slug: 'jefferson-park',
    name: 'Jefferson Park',
    title: 'Jefferson Park, Denver — a neighborhood guide',
    summary:
      'The small neighborhood between the stadium and the river, transformed from bungalows to townhomes in about a decade.',
    answer:
      'Jefferson Park is a small north-west Denver neighborhood between Empower Field at Mile High and Sloan Lake. Once predominantly modest bungalows, it has been extensively redeveloped into townhomes and apartments, and has among the best downtown skyline views in the city.',
    tags: ['jefferson-park', 'denver', 'townhomes', 'stadium', 'views', 'redevelopment'],
    bounds: 'I-25 to Federal Boulevard, 20th Avenue to Speer Boulevard',
    housing: ['2010–present townhomes and apartments', 'Remaining 1900s–1940s bungalows'],
    stats: ['to downtown - 10 min', 'stadium - adjacent', 'skyline views'],
    parks: 'Jefferson Park, South Platte Trail',
    geo: { lat: 39.7508, lng: -105.0189 },
    links: [
      denverLink,
      { label: 'Empower Field at Mile High', url: 'https://www.empowerfieldatmilehigh.com/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is it like living near Empower Field?',
        a: 'On the roughly ten home game days a year plus concerts, traffic and parking are genuinely difficult and the neighborhood fills with people. The rest of the year it is quiet. Many residents rent out parking spaces on game days.',
      },
      {
        q: 'Why did Jefferson Park redevelop so quickly?',
        a: 'It is small, it is ten minutes from downtown, it had inexpensive ageing housing, and it has skyline views. Zoning changes made townhome development straightforward, and the neighborhood turned over faster than almost anywhere in Denver.',
      },
    ],
    sources: src,
    lede: `Jefferson Park is a small triangle between the football stadium, I-25 and
Sloan Lake, and it went from modest bungalows to modern townhomes in roughly a
decade. It has some of the best skyline views in Denver and a genuinely unusual
relationship with football Sundays.`,
    sections: `## Where Jefferson Park actually is

Between I-25 and Federal Boulevard, from 20th Avenue down to Speer, immediately
north of Empower Field at Mile High and east of
[Sloan Lake](/neighborhoods/denver/sloan-lake/).

## The stadium

Empower Field is on the doorstep. That means:

- **Game days** — heavy traffic, street closures, and a neighborhood full of
  people. Some residents love it; some leave town.
- **Parking income** — renting driveway and yard space on game days is a genuine
  local economy.
- **Concerts and events** through the summer.

Anyone considering Jefferson Park should visit on a game day before deciding.

## The redevelopment

Rezoning in the 2000s allowed substantially more density, and the neighborhood
rebuilt itself with townhomes and small apartment buildings, most with rooftop
decks oriented at the skyline. Very few original bungalows remain.

## The views

The combination of elevation, the river valley and the angle on downtown gives
Jefferson Park the best rooftop views in the city. It is the main thing people
pay for.`,
    suits: `Buyers who want new construction, a rooftop deck and a ten-minute commute, and
who are genuinely fine with stadium days.`,
    check: `**Game and event schedule** against your tolerance.

**Party wall and HOA terms** on townhome product.

**I-25 noise** on the eastern blocks.`,
  },

  {
    ...base,
    slug: 'regis',
    name: 'Regis',
    title: 'Regis, Denver — a neighborhood guide',
    summary:
      'A quiet residential pocket in far north-west Denver built around Regis University, with bungalows and some of the city’s better value.',
    answer:
      'Regis is a north-west Denver neighborhood built around Regis University, north of Berkeley. It is quiet and predominantly residential, with 1900s–1950s housing and prices generally below the neighbouring Berkeley and West Highland markets.',
    tags: ['regis', 'denver', 'university', 'value', 'quiet'],
    bounds: 'Sheridan to Federal Boulevard, I-70 to 52nd Avenue',
    housing: ['1900–1955 bungalows and brick', 'Post-war ranches'],
    stats: ['Regis University', 'to downtown - 20 min', 'value - below Berkeley'],
    parks: 'Willis Case Golf Course, Berkeley Lake nearby',
    geo: { lat: 39.7897, lng: -105.0367 },
    links: [denverLink, { label: 'Regis University', url: 'https://www.regis.edu/' }, dpsLink],
    faq: [
      {
        q: 'Is Regis a good value neighborhood in Denver?',
        a: 'It is among the better value pockets in north-west Denver — similar housing stock to Berkeley just to the south, at lower prices, with the trade-off of being further from the Tennyson commercial strip and closer to I-70.',
      },
    ],
    sources: src,
    lede: `Regis is a quiet residential neighborhood wrapped around Regis University in
far north-west Denver. It has the same bungalow bones as Berkeley next door and
prices that have not caught up.`,
    sections: `## Where Regis actually is

Between Sheridan and Federal north of I-70, up to 52nd Avenue, above
[Berkeley](/neighborhoods/denver/berkeley/).

## The university

Regis University is a Jesuit institution founded in 1877, and its campus is the
neighborhood's anchor and its largest open space. It brings some student rental
demand but not at the scale that reshapes a neighborhood.

## The housing

1900s–1950s bungalows and post-war ranches on standard lots. Less redevelopment
pressure than Berkeley, so more of the original stock is intact and unrenovated
— which is where the value is if you are prepared to do work.`,
    suits: `Value buyers who want north-west Denver bones at a lower number, and anyone
connected to the university.`,
    check: `**I-70 proximity** on the southern blocks — noise and air quality.

**Deferred maintenance**, which is more common here than in the pricier
neighborhoods nearby.`,
  },

  {
    ...base,
    slug: 'chaffee-park',
    name: 'Chaffee Park',
    title: 'Chaffee Park, Denver — a neighborhood guide',
    summary:
      'A small, quiet post-war pocket in north Denver, one of the last places in the area with genuinely modest prices.',
    answer:
      'Chaffee Park is a small north Denver neighborhood of predominantly post-war housing, bordered by I-70 and the rail corridor. It is among the more affordable neighborhoods in north-west Denver and is largely owner-occupied.',
    tags: ['chaffee-park', 'denver', 'affordable', 'post-war', 'quiet'],
    bounds: 'Federal Boulevard to the rail corridor, 46th Avenue to I-70',
    housing: ['1940s–1960s brick ranches and bungalows'],
    stats: [
      'to downtown - 15 min',
      'value - among north Denver’s lowest',
      'tenure - majority owner',
    ],
    parks: 'Chaffee Park',
    geo: { lat: 39.7861, lng: -105.0208 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Chaffee Park affordable?',
        a: 'It is one of the more affordable owner-occupied pockets in north-west Denver, largely because it is small, hemmed in by I-70 and the rail corridor, and has no commercial strip of its own.',
      },
    ],
    sources: src,
    lede: `Chaffee Park is a few dozen quiet blocks of post-war brick between Federal
Boulevard and the rail corridor. It has no commercial strip, no landmark, and
some of the last genuinely modest prices in north-west Denver.`,
    sections: `## Where Chaffee Park actually is

North Denver between Federal and the rail line, from 46th Avenue to I-70,
east of [Regis](/neighborhoods/denver/regis/) and north of
[Sunnyside](/neighborhoods/denver/sunnyside/).

## What is here

Modest 1940s–60s brick ranches and bungalows on standard lots, a small park, and
very little else. Residents shop on Federal or in Berkeley.

## The edges

I-70 to the north and the rail corridor to the east are the reasons prices are
what they are. Both are real and both are worth assessing in person.`,
    suits: `First-time buyers and investors who want a detached house with a yard in north
Denver at the lowest price available, and who are unbothered by highway
adjacency.`,
    check: `**I-70 noise and air quality**, particularly on the northern blocks.

**Rail noise** on the eastern edge.

**Post-war systems** — many houses here have never been substantially updated.`,
  },
]
