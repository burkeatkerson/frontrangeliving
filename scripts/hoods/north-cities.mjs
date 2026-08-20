import { SRC } from './_template.mjs'

const src = [SRC.car, SRC.census]

const B = { city: 'boulder', cityName: 'Boulder', sector: 'Boulder' }
const FC = { city: 'fort-collins', cityName: 'Fort Collins', sector: 'Fort Collins' }
const LG = { city: 'longmont', cityName: 'Longmont', sector: 'Longmont' }
const LV = { city: 'loveland', cityName: 'Loveland', sector: 'Loveland' }
const GR = { city: 'greeley', cityName: 'Greeley', sector: 'Greeley' }

const bvsd = { label: 'Boulder Valley School District', url: 'https://www.bvsd.org/' }
const psd = { label: 'Poudre School District', url: 'https://www.psdschools.org/' }
const svvsd = { label: 'St. Vrain Valley School District', url: 'https://www.svvsd.org/' }
const boulderCity = { label: 'City of Boulder', url: 'https://bouldercolorado.gov/' }
const fcCity = { label: 'City of Fort Collins', url: 'https://www.fcgov.com/' }

export const northCityHoods = [
  // ---------------------------------------------------------------- Boulder
  {
    ...B,
    slug: 'newlands',
    name: 'Newlands',
    featured: true,
    title: 'Newlands, Boulder — a neighborhood guide',
    summary:
      'North-west Boulder at the foot of Mount Sanitas, where you can genuinely walk to a trailhead — and pay accordingly.',
    answer:
      'Newlands is a north-west Boulder neighborhood at the base of Mount Sanitas, with walking access to trailheads and Boulder’s open space. It has varied mid-century and later housing and is among the most expensive neighborhoods in Colorado.',
    tags: ['newlands', 'boulder', 'trailhead', 'expensive', 'open-space'],
    bounds: 'Broadway west to the mountain front, north of Mapleton Avenue',
    housing: ['1940s–1970s houses', 'Substantial rebuilds and custom homes'],
    stats: ['trailhead - 8 min walk', 'to downtown Boulder - 10 min', 'top of the market'],
    parks: 'Mount Sanitas, Sanitas Valley, Wonderland Lake',
    geo: { lat: 40.0333, lng: -105.2853 },
    links: [
      boulderCity,
      {
        label: 'Boulder Open Space and Mountain Parks',
        url: 'https://bouldercolorado.gov/services/open-space-and-mountain-parks',
      },
      bvsd,
    ],
    faq: [
      {
        q: 'Can you walk to trails from Newlands?',
        a: 'Yes, and that is the entire point of the neighborhood. Mount Sanitas and the Sanitas Valley trailhead are a short walk from most of it, and Wonderland Lake sits at the northern end.',
      },
      {
        q: 'Why is Newlands so expensive?',
        a: 'It offers what almost nothing else in Colorado does — genuine walk-out-the-door mountain trail access from a residential street ten minutes from a downtown. Supply is fixed by open space on three sides.',
      },
    ],
    sources: src,
    lede: `Newlands is where the Boulder premium is actually justified. If you will walk
to a trailhead four days a week, this is the neighborhood that lets you, and the
price is the price.`,
    sections: `## Where Newlands actually is

North-west Boulder, west of Broadway and north of Mapleton Hill, running up to
the mountain front. Downtown Boulder is about ten minutes on foot or bike.

## The trails

**Mount Sanitas** and the **Sanitas Valley Trail** start at the neighborhood's
edge — a steep, popular climb with a view over the whole city. **Wonderland Lake**
sits at the northern end with a flat loop.

This access is why the neighborhood exists in its current form and why it prices
the way it does. See [is Boulder worth it?](/answers/is-boulder-worth-it/) for
the honest comparison against the coal towns twenty minutes east.

## The housing

Mid-century originals — modest ranches, some genuinely small — layered with
decades of rebuilds, pop-tops and custom houses. Lot value dominates.`,
    suits: `Buyers who will use the mountains on foot, constantly, and for whom price is
not the deciding variable.`,
    check: `**Wildfire insurance** — availability and cost at the wildland interface.

**Rebuild potential and Boulder's review process**, which is more demanding than
most Colorado municipalities.

**Slope and drainage** on the upper lots.`,
  },

  {
    ...B,
    slug: 'mapleton-hill',
    name: 'Mapleton Hill',
    title: 'Mapleton Hill, Boulder — a neighborhood guide',
    summary:
      'Boulder’s grandest historic district: 1890s houses under enormous street trees, a short walk from Pearl Street.',
    answer:
      'Mapleton Hill is a historic Boulder neighborhood immediately north-west of downtown, designated as a historic district. It contains the city’s best-preserved late-nineteenth and early-twentieth-century houses and is within walking distance of Pearl Street.',
    tags: ['mapleton-hill', 'boulder', 'historic', 'walkable', 'expensive'],
    bounds: 'Broadway west to Fourth Street, north of Pearl Street',
    housing: ['1880s–1920s Victorian and period revival', 'Historic district protected'],
    stats: ['historic district - yes', 'Pearl Street - 5 min walk', 'top of the market'],
    parks: 'Mount Sanitas trailhead nearby',
    geo: { lat: 40.0217, lng: -105.2856 },
    links: [
      boulderCity,
      {
        label: 'Boulder historic preservation',
        url: 'https://bouldercolorado.gov/services/historic-preservation',
      },
      bvsd,
    ],
    faq: [
      {
        q: 'Is Mapleton Hill a historic district?',
        a: 'Yes — it is a designated Boulder historic district, which means exterior alterations visible from the street go through design review. That protection is why the streetscape has survived intact.',
      },
    ],
    sources: src,
    lede: `Mapleton Hill is the oldest and grandest part of Boulder — silver and mining
money houses from the 1890s, under a canopy of street trees that has been
growing for a century, five minutes on foot from Pearl Street.`,
    sections: `## Where Mapleton Hill actually is

Immediately north-west of downtown Boulder, west of Broadway above Pearl Street,
below [Newlands](/neighborhoods/boulder/newlands/).

## The housing

1880s to 1920s: Victorians, Queen Annes, Foursquares and period revivals, most
of them well preserved. Mapleton Avenue itself, with its central tree median, is
the showpiece street.

## The historic district

Designation means design review on exterior changes. It constrains what owners
can do and it is the reason the neighborhood still looks like this.`,
    suits: `Buyers who want a preserved period house within walking distance of a genuine
downtown, and who accept design review.`,
    check: `**Design review scope** before planning any change.

**Systems** — these are 100-plus-year-old houses.

**Tree maintenance costs** on mature canopy.`,
  },

  {
    ...B,
    slug: 'chautauqua',
    name: 'Chautauqua',
    title: 'Chautauqua, Boulder — a neighborhood guide',
    summary:
      'Directly beneath the Flatirons, around a National Historic Landmark park with cottages, a dining hall and the best-known trailhead in Colorado.',
    answer:
      'Chautauqua is a south-west Boulder neighborhood around Chautauqua Park, a National Historic Landmark established in 1898. It sits directly beneath the Flatirons and offers the most iconic trail access in Boulder.',
    tags: ['chautauqua', 'boulder', 'flatirons', 'historic', 'trailhead'],
    bounds: 'Baseline Road to the mountain front, west of Ninth Street',
    housing: ['1900s–1950s houses', 'Historic Chautauqua cottages'],
    stats: ['Flatirons trailhead', 'National Historic Landmark', 'top of the market'],
    parks: 'Chautauqua Park, Flatirons trails',
    geo: { lat: 39.9989, lng: -105.2811 },
    links: [
      boulderCity,
      { label: 'Colorado Chautauqua Association', url: 'https://www.chautauqua.com/' },
      bvsd,
    ],
    faq: [
      {
        q: 'What is Boulder Chautauqua?',
        a: 'A Chautauqua assembly established in 1898, one of the few still operating in the United States and a National Historic Landmark. It includes an auditorium, a dining hall, and cottages available to rent, at the base of the Flatirons.',
      },
      {
        q: 'Is parking difficult at Chautauqua?',
        a: 'Very, in summer. The city runs a seasonal parking management programme with a free shuttle because demand at the trailhead far exceeds capacity. Residents deal with the overflow.',
      },
    ],
    sources: src,
    lede: `Chautauqua sits directly under the Flatirons around a 128-year-old assembly
ground that is still operating — auditorium, dining hall, cottages — and the
most photographed trailhead in Colorado.`,
    sections: `## Where Chautauqua actually is

South-west Boulder below the Flatirons, along Baseline Road west of Ninth
Street.

## The park

**Colorado Chautauqua** was founded in 1898 and is a National Historic Landmark —
one of the few surviving Chautauqua assemblies in the country. The auditorium
still hosts concerts, the dining hall still serves, and the cottages are rented
year-round.

The **Chautauqua Trailhead** is the main access to the Flatirons and the busiest
in the city.

## The trade-off

Living here means living beside the trailhead. Summer weekends bring heavy
visitor traffic, and the city runs seasonal parking management and a shuttle in
response.`,
    suits: `Buyers who want the most dramatic setting in Boulder and will tolerate the
visitor traffic that comes with it.`,
    check: `**Seasonal traffic and parking** — visit on a July Saturday.

**Wildfire exposure** at the mountain interface.

**Historic and open space constraints** on any alteration.`,
  },

  {
    ...B,
    slug: 'table-mesa',
    name: 'Table Mesa',
    title: 'Table Mesa, Boulder — a neighborhood guide',
    summary:
      'South Boulder’s mid-century neighborhood: ranches, good schools, NCAR up the hill, and the most conventional housing in the city.',
    answer:
      'Table Mesa is a south Boulder neighborhood of predominantly 1950s–70s houses, below the National Center for Atmospheric Research. It offers Boulder’s more conventional suburban housing with strong trail and school access, generally below the west-side price levels.',
    tags: ['table-mesa', 'boulder', 'mid-century', 'family', 'trails', 'ncar'],
    bounds: 'Broadway to Foothills Parkway, south of Baseline Road',
    housing: ['1950s–1970s ranches and split-levels', 'Rebuilds and additions'],
    stats: ['NCAR trailhead', 'to downtown Boulder - 10 min', 'value - below west Boulder'],
    parks: 'NCAR trails, Bear Canyon, Viele Lake',
    geo: { lat: 39.9822, lng: -105.2417 },
    links: [
      boulderCity,
      { label: 'NCAR Mesa Laboratory', url: 'https://scied.ucar.edu/visit' },
      bvsd,
    ],
    faq: [
      {
        q: 'Is Table Mesa cheaper than west Boulder?',
        a: 'Generally yes. It has more conventional mid-century housing and sits further from downtown and the Flatirons trailheads, which puts it below Newlands, Mapleton Hill and Chautauqua.',
      },
      {
        q: 'What is NCAR?',
        a: 'The National Center for Atmospheric Research, whose I.M. Pei-designed Mesa Laboratory sits on the mesa above Table Mesa. It has a free visitor centre and a popular trailhead.',
      },
    ],
    sources: src,
    lede: `Table Mesa is the most conventional part of Boulder — 1960s ranches on curving
streets, good schools, a shopping centre — with the Mesa Lab on the hill above
and trails at the end of the street.`,
    sections: `## Where Table Mesa actually is

South Boulder between Broadway and Foothills Parkway, south of Baseline Road,
below the NCAR mesa.

## NCAR

The **National Center for Atmospheric Research** Mesa Laboratory, designed by I.M.
Pei, sits above the neighborhood. It has a free visitor centre and the NCAR
trailhead, which connects into Bear Canyon and the wider south Boulder trail
network.

## The housing

1950s–70s ranches and split-levels on curving suburban streets — the least
Boulder-looking housing in Boulder, and the reason families who want space
choose it.

## Transit

The Table Mesa park-and-ride is the southern terminus of the Flatiron Flyer bus
rapid transit to Denver, which makes it the best Boulder address for a Denver
commute.`,
    suits: `Families who want space, schools and trails, and Denver commuters who will use
the Flatiron Flyer.`,
    check: `**Wildfire exposure** on the western blocks nearer the mesa.

**1960s systems** — panels, sewer, windows.

**Flood mapping** near Bear Creek and the drainages.`,
  },

  {
    ...B,
    slug: 'north-boulder',
    name: 'North Boulder (NoBo)',
    title: 'North Boulder (NoBo) — a neighborhood guide',
    summary:
      'Boulder’s growth area: an art district on Broadway, newer infill housing, and the best value per square foot in the city.',
    answer:
      'North Boulder, locally called NoBo, is the northern section of Boulder along Broadway, containing the NoBo Art District. It has seen the most new residential construction in the city and generally offers better value per square foot than west Boulder.',
    tags: ['north-boulder', 'nobo', 'boulder', 'arts', 'new-construction', 'value'],
    bounds: 'Broadway corridor north of Alpine Avenue to the city limits',
    housing: ['1950s–70s originals', '2000s–present infill and townhomes'],
    stats: ['NoBo Art District', 'to downtown Boulder - 8 min', 'value - best in Boulder'],
    parks: 'Wonderland Lake, Foothills Trail, Dakota Ridge',
    geo: { lat: 40.0433, lng: -105.2811 },
    links: [boulderCity, { label: 'NoBo Art District', url: 'https://noboartdistrict.org/' }, bvsd],
    faq: [
      {
        q: 'Is North Boulder cheaper than the rest of Boulder?',
        a: 'Generally, on a per-square-foot basis, yes — it has the newest housing stock and is further from downtown and the Flatirons. It remains expensive by any standard outside Boulder.',
      },
      {
        q: 'What is the NoBo Art District?',
        a: 'A concentration of studios and galleries along north Broadway with a First Friday art walk. It is Boulder’s main visual arts district.',
      },
    ],
    sources: src,
    lede: `North Boulder is where Boulder has actually been building. New infill along
Broadway, an art district, and the closest the city comes to reasonable value —
with Wonderland Lake and the Foothills Trail at the western edge.`,
    sections: `## Where NoBo actually is

Along the Broadway corridor north of Alpine Avenue to the city limits, north of
[Newlands](/neighborhoods/boulder/newlands/).

## The art district

Studios and galleries concentrated along north Broadway, with a First Friday
walk. It is the most active visual arts scene in the city.

## The housing

Original 1950s–70s stock plus a substantial amount of post-2000 infill —
townhomes, small apartment buildings, and mixed-use along Broadway. Boulder's
height limit and open space boundary mean this is where most new supply has
gone.

## The trails

Wonderland Lake, the Foothills Trail and Dakota Ridge give NoBo genuine open
space access without Newlands pricing.`,
    suits: `Buyers who want Boulder with newer construction and the best available value,
and anyone who will use the art district.`,
    check: `**HOA terms** on townhome and condo product.

**Build quality** on 2000s infill, which varies.

**Broadway traffic noise** on the corridor.`,
  },

  {
    ...B,
    slug: 'gunbarrel',
    name: 'Gunbarrel',
    title: 'Gunbarrel, Boulder — a neighborhood guide',
    summary:
      'Boulder’s detached eastern satellite: cheaper, quieter, with a brewery cluster and an easier commute to Longmont than to Pearl Street.',
    answer:
      'Gunbarrel is a mostly residential area in eastern Boulder, physically separate from the rest of the city near the Boulder Reservoir. It is the most affordable Boulder address, with 1970s–1990s housing and a notable concentration of breweries.',
    tags: ['gunbarrel', 'boulder', 'value', 'breweries', 'reservoir'],
    bounds: 'East Boulder near the Boulder Reservoir, along Lookout Road',
    housing: ['1970s–1990s houses and townhomes', 'Recent infill'],
    stats: [
      'value - lowest Boulder address',
      'to downtown Boulder - 15 min',
      'to Longmont - 12 min',
    ],
    parks: 'Boulder Reservoir, LoBo Trail',
    geo: { lat: 40.0631, lng: -105.1719 },
    links: [
      boulderCity,
      {
        label: 'Boulder Reservoir',
        url: 'https://bouldercolorado.gov/locations/boulder-reservoir',
      },
      bvsd,
    ],
    faq: [
      {
        q: 'Is Gunbarrel part of Boulder?',
        a: 'Partly. Some of Gunbarrel is inside Boulder city limits and some is unincorporated Boulder County, which affects taxes and services. Confirm the jurisdiction for a specific address.',
      },
      {
        q: 'Why is Gunbarrel cheaper than Boulder?',
        a: 'It is physically separated from the rest of the city by open space, has newer and more conventional housing, and lacks walking access to downtown or the Flatirons.',
      },
    ],
    sources: src,
    lede: `Gunbarrel is Boulder's eastern outpost, separated from the rest of the city by
open space, with newer housing, a genuine brewery cluster, and the lowest prices
of any Boulder address.`,
    sections: `## Where Gunbarrel actually is

East Boulder near the Boulder Reservoir, along Lookout Road, closer to
[Longmont](/places/longmont/) than to downtown Boulder in practical terms.

## Jurisdiction

Part of Gunbarrel is inside Boulder city limits; part is unincorporated Boulder
County. That affects mill levy, services and rules. Check the parcel.

## What is there

A brewery cluster that punches well above the area's size, the Boulder
Reservoir for swimming and boating, and the LoBo Trail running toward Longmont.

## The housing

1970s–90s detached houses and townhomes, plus recent infill. Conventional
suburban product at Boulder-adjacent prices.`,
    suits: `Buyers who want a Boulder Valley school district address at the lowest
available price, and anyone commuting to Longmont or east Boulder tech
employers.`,
    check: `**City vs. county jurisdiction** for the parcel.

**Commute reality** into Boulder proper, which is longer than the map suggests.

**HOA** on townhome product.`,
  },

  // ---------------------------------------------------------------- Fort Collins
  {
    ...FC,
    slug: 'old-town-fort-collins',
    name: 'Old Town',
    featured: true,
    title: 'Old Town, Fort Collins — a neighborhood guide',
    summary:
      'The 1880s core that inspired Disneyland’s Main Street: brick bungalows, alleys, mature trees, and the best downtown in Northern Colorado.',
    answer:
      'Old Town is the historic core of Fort Collins, with 1880s–1920s brick housing surrounding a preserved commercial district. It has the highest price per square foot in Northern Colorado and is the most walkable neighborhood in the region.',
    tags: ['old-town-fort-collins', 'fort-collins', 'historic', 'walkable', 'bungalows'],
    bounds: 'College Avenue west to Shields Street, north of Mulberry',
    housing: ['1880s–1930s brick bungalows and Victorians', 'Some student rentals'],
    stats: ['highest $/sq ft in Northern Colorado', 'walkable downtown', 'CSU - 10 min'],
    parks: 'Library Park, City Park, Poudre Trail',
    geo: { lat: 40.5886, lng: -105.0764 },
    links: [
      fcCity,
      { label: 'Downtown Fort Collins', url: 'https://downtownfortcollins.com/' },
      psd,
    ],
    faq: [
      {
        q: 'Did Disneyland copy Old Town Fort Collins?',
        a: 'Partly. Harper Goff, a Disney designer who grew up in Fort Collins, drew on his hometown’s downtown for Main Street USA at Disneyland. The resemblance is real and locals will tell you about it.',
      },
      {
        q: 'Is Old Town Fort Collins expensive?',
        a: 'It carries the highest price per square foot in Northern Colorado. Fort Collins’ single-family median was $650,000 in June 2026, and Old Town runs above that for comparable size.',
      },
    ],
    sources: src,
    lede: `Old Town Fort Collins is the best-preserved downtown in Northern Colorado and
the residential grid around it is the region's most desirable — brick bungalows,
alleys, enormous street trees, and everything within walking distance.`,
    sections: `## Where Old Town actually is

The historic core of Fort Collins, roughly west of College Avenue to Shields
and north of Mulberry, wrapping the downtown commercial district.

## The Disney connection

Harper Goff, one of Walt Disney's designers, grew up in Fort Collins and drew on
its downtown when designing Main Street USA at Disneyland. The resemblance
between Old Town Square and the park's Main Street is not a coincidence.

## The housing

1880s to 1930s: brick bungalows, Victorians and Craftsman houses on an alley
grid with mature canopy. **Old Town West** in particular is where you find
children biking to school in winter — see [where can my kid actually ride a bike
to school?](/answers/kid-bike-to-school/)

Proximity to CSU means some of the stock has been converted to student rentals,
which varies block by block.

## The downtown

Restaurants, breweries, independent shops and a genuinely busy Old Town Square.
It is the reason the surrounding blocks command what they do.`,
    suits: `Buyers who want walkability and period housing and will pay the premium, and
anyone who wants a real downtown at the end of the street.`,
    check: `**Student rental concentration** on the specific block.

**Sewer, knob-and-tube and galvanised supply** on unrenovated houses.

**Historic designation** on some properties.`,
  },

  {
    ...FC,
    slug: 'campus-west',
    name: 'Campus West',
    title: 'Campus West, Fort Collins — a neighborhood guide',
    summary:
      'The dense, loud, rental-heavy area west of Colorado State University, and the best yields in Fort Collins.',
    answer:
      'Campus West is the Fort Collins area immediately west of Colorado State University, dominated by student rental housing and apartments. It has the highest rental concentration in the city and correspondingly strong investment yields.',
    tags: ['campus-west', 'fort-collins', 'student-housing', 'rentals', 'csu', 'investing'],
    bounds: 'Shields Street west to Taft Hill, around Elizabeth Street',
    housing: ['1960s–70s houses converted to rentals', 'Purpose-built student apartments'],
    stats: ['CSU - adjacent', 'tenure - overwhelmingly renter', 'yields - highest in the city'],
    parks: 'City Park, Rolland Moore Park',
    geo: { lat: 40.5731, lng: -105.0947 },
    links: [fcCity, { label: 'Colorado State University', url: 'https://www.colostate.edu/' }, psd],
    faq: [
      {
        q: 'Is Campus West a good investment in Fort Collins?',
        a: 'It has the strongest rental demand in the city from CSU’s 33,000-plus students, and correspondingly good yields. Fort Collins regulates occupancy — the "U+2" rule limits unrelated occupants — so verify compliance before underwriting a per-bedroom model.',
      },
      {
        q: 'What is the U+2 rule in Fort Collins?',
        a: 'A city occupancy ordinance limiting most dwellings to a family plus two additional unrelated occupants. It materially affects rental strategies near campus and is actively enforced.',
      },
    ],
    sources: src,
    lede: `Campus West is CSU's housing. It is dense, it is loud on football Saturdays,
and it produces the best rental yields in Fort Collins — with an occupancy
ordinance that catches out-of-town investors.`,
    sections: `## Where Campus West actually is

Immediately west of the CSU campus, roughly Shields Street to Taft Hill around
Elizabeth Street.

## The U+2 rule

Fort Collins limits most dwellings to a family plus two unrelated occupants. It
is enforced, and it directly constrains the per-bedroom rental model that
investors often assume near a large university.

**Verify occupancy compliance before you underwrite anything here.**

## The housing

1960s–70s single-family houses, a large share converted to rentals, plus
purpose-built student apartment complexes.`,
    suits: `Investors who understand the occupancy rules, and students and staff who want
to walk to campus.`,
    check: `**U+2 compliance** on any existing rental.

**Rental licensing and inspection** requirements.

**Condition** on long-term rentals, which is frequently deferred.`,
  },

  {
    ...FC,
    slug: 'midtown-fort-collins',
    name: 'Midtown',
    title: 'Midtown, Fort Collins — a neighborhood guide',
    summary:
      'The College Avenue corridor between Prospect and Harmony: 1960s and 70s ranches, the MAX line, and the best value in central Fort Collins.',
    answer:
      'Midtown is the central Fort Collins corridor along College Avenue between Prospect and Harmony Roads, with predominantly 1960s–70s housing. It is served by the MAX bus rapid transit line and offers better value than Old Town.',
    tags: ['midtown-fort-collins', 'fort-collins', 'value', 'max-brt', 'mid-century'],
    bounds: 'College Avenue corridor, Prospect Road to Harmony Road',
    housing: ['1960s–1970s ranches', 'Apartments along the corridor'],
    stats: ['MAX bus rapid transit', 'value - below Old Town', 'central location'],
    transit: 'MAX BRT along the Mason Corridor',
    parks: 'Spring Creek Trail, Rolland Moore Park',
    geo: { lat: 40.5544, lng: -105.0764 },
    links: [fcCity, { label: 'Transfort and MAX', url: 'https://www.ridetransfort.com/' }, psd],
    faq: [
      {
        q: 'What is the MAX in Fort Collins?',
        a: 'A bus rapid transit line running down the Mason Corridor parallel to College Avenue, connecting downtown, CSU and south Fort Collins in dedicated lanes. It is the backbone of the city’s transit system.',
      },
      {
        q: 'Is Midtown Fort Collins a good value?',
        a: 'Yes — it is central, served by MAX, and priced well below Old Town, with solid 1960s and 70s houses on decent lots.',
      },
    ],
    sources: src,
    lede: `Midtown is the middle of Fort Collins in every sense — the College Avenue
corridor between Prospect and Harmony, 1960s ranches on real lots, the MAX line
running through it, and prices well below Old Town.`,
    sections: `## Where Midtown actually is

The central corridor along College Avenue from Prospect Road down to Harmony,
south of [Old Town](/neighborhoods/fort-collins/old-town-fort-collins/).

## MAX

The MAX bus rapid transit runs in dedicated lanes down the Mason Corridor,
connecting downtown, CSU and the south of the city. Proximity to a MAX station
is a genuine value factor here.

## The redevelopment

The former Foothills Mall site has been redeveloped, and the corridor has seen
sustained investment. Midtown is the part of Fort Collins most actively
changing.

## The housing

1960s–70s ranches on standard lots, plus a growing amount of apartment
development along the corridor.`,
    suits: `Buyers who want central Fort Collins at a workable price, and anyone who will
use MAX.`,
    check: `**College Avenue noise** on the corridor blocks.

**1970s systems** — panels, sewer, windows.

**Redevelopment plans** near the corridor.`,
  },

  {
    ...FC,
    slug: 'harmony-corridor',
    name: 'Harmony Corridor',
    title: 'Harmony Corridor, Fort Collins — a neighborhood guide',
    summary:
      'South-east Fort Collins: newer subdivisions, most of the city’s tech and medical employment, and the easiest I-25 access.',
    answer:
      'The Harmony Corridor is the south-eastern area of Fort Collins along Harmony Road, containing much of the city’s technology and medical employment alongside post-1990 residential subdivisions. It has the best I-25 access in the city.',
    tags: ['harmony-corridor', 'fort-collins', 'new-construction', 'employment', 'family'],
    bounds: 'Harmony Road corridor, College Avenue east to I-25',
    housing: ['1990s–present subdivisions', 'Townhomes and apartments'],
    stats: ['I-25 access - best in the city', 'employment corridor', 'newer housing'],
    parks: 'Fossil Creek Trail, Twin Silo Park',
    geo: { lat: 40.5253, lng: -105.05 },
    links: [fcCity, psd],
    faq: [
      {
        q: 'Where do people work in Fort Collins?',
        a: 'A substantial share of the city’s private employment — Broadcom, Otter Products, medical facilities and others — sits along or near the Harmony Corridor in the south-east, which is why so much of the newer housing is there.',
      },
    ],
    sources: src,
    lede: `The Harmony Corridor is the newer half of Fort Collins: post-1990
subdivisions, the tech and medical employers, and the shortest run to I-25.`,
    sections: `## Where the Harmony Corridor actually is

South-east Fort Collins along Harmony Road from College Avenue east to I-25.

## The employment

Much of the city's private-sector employment sits here — semiconductor,
consumer products and medical facilities — which makes it the shortest commute
for a large share of Fort Collins workers.

## The housing

1990s onward: conventional subdivisions, townhomes and apartments, larger houses
and HOAs. Good schools within Poudre School District.

## The trade-off

Almost no walkable amenity beyond shopping centres, and none of Old Town's
character. What you get is space, newer systems and an easy commute.`,
    suits: `Families who want new construction and good schools, and anyone working in the
corridor or commuting toward Denver.`,
    check: `**Metro district mill levies** in newer subdivisions.

**HOA terms.**

**Build era**, which spans thirty years of varying quality.`,
  },

  // ---------------------------------------------------------------- Longmont
  {
    ...LG,
    slug: 'old-town-longmont',
    name: 'Old Town',
    title: 'Old Town Longmont — a neighborhood guide',
    summary:
      'The 1870s grid around Main Street: the widest, most usable downtown in Boulder County, with period housing around it.',
    answer:
      'Old Town Longmont is the historic core around Main Street, platted in 1871 by the Chicago-Colorado Colony. It has 1890s–1930s housing on an alley grid and the most walkable commercial district in Boulder County outside Boulder itself.',
    tags: ['old-town-longmont', 'longmont', 'historic', 'walkable', 'main-street'],
    bounds: 'Main Street corridor, roughly 3rd to 9th Avenue',
    housing: ['1890s–1930s brick and frame houses', 'Some infill'],
    stats: ['Main Street', 'NextLight fibre', 'to Boulder - 25 min'],
    parks: 'Roosevelt Park, St. Vrain Greenway',
    geo: { lat: 40.1672, lng: -105.1019 },
    links: [
      { label: 'City of Longmont', url: 'https://www.longmontcolorado.gov/' },
      { label: 'NextLight municipal broadband', url: 'https://mynextlight.com/' },
      svvsd,
    ],
    faq: [
      {
        q: 'Is Old Town Longmont walkable?',
        a: 'Yes — Main Street has a genuinely busy commercial run and the surrounding grid is compact with alleys and mature trees. It is the most walkable downtown in Boulder County outside Boulder.',
      },
      {
        q: 'Does Old Town Longmont have municipal fibre?',
        a: 'Yes. NextLight, the city-owned fibre utility, serves Longmont with symmetrical gigabit service and consistently ranks among the fastest ISPs in the country.',
      },
    ],
    sources: src,
    lede: `Old Town Longmont is the 1871 grid around Main Street — the widest and most
usable commercial street in Boulder County — with period housing behind it and
municipal gigabit fibre under it.`,
    sections: `## Where Old Town actually is

The historic core of Longmont around Main Street, roughly 3rd to 9th Avenue.

## Main Street

Platted wide by the Chicago-Colorado Colony in 1871 and still the town's centre:
restaurants, breweries, independent shops, and enough activity to sustain them.

## The housing

1890s–1930s brick and frame houses on an alley grid with mature trees. Prices
sit well below comparable Boulder stock — the largest value gap in the county.

## The flood

The St. Vrain overtopped through Longmont in September 2013. The Resilient St.
Vrain project has since rebuilt the channel. Check current FEMA mapping near the
creek and ask which phase of the work covers a given property.`,
    suits: `Buyers who want a walkable historic downtown at a fraction of Boulder pricing,
and remote workers who care about bandwidth.`,
    check: `**Flood mapping** near the St. Vrain.

**Pre-1935 systems** — sewer, wiring, supply.

**NextLight availability** at the specific address.`,
  },

  {
    ...LG,
    slug: 'prospect-new-town',
    name: 'Prospect New Town',
    title: 'Prospect New Town, Longmont — a neighborhood guide',
    summary:
      'A 1990s new-urbanist development that looks like nothing else in Colorado — narrow streets, alleys, bold colours and a dedicated following.',
    answer:
      'Prospect New Town is a new-urbanist neighborhood in south Longmont, designed in the 1990s by Duany Plater-Zyberk. It features narrow walkable streets, alley-loaded garages, mixed housing types and distinctive contemporary architecture.',
    tags: ['prospect-new-town', 'longmont', 'new-urbanism', 'architecture', 'walkable'],
    bounds: 'South Longmont, off South Main Street',
    housing: ['1990s–present new-urbanist houses, rowhouses and live-work units'],
    stats: ['new-urbanist plan', 'to Boulder - 20 min', 'distinctive architecture'],
    parks: 'Neighborhood greens, St. Vrain Greenway nearby',
    geo: { lat: 40.1447, lng: -105.1019 },
    links: [{ label: 'City of Longmont', url: 'https://www.longmontcolorado.gov/' }, svvsd],
    faq: [
      {
        q: 'What is Prospect New Town?',
        a: 'A new-urbanist neighborhood in Longmont planned by Duany Plater-Zyberk, the firm behind Seaside, Florida. It uses narrow streets, alley garages, mixed housing types and a small commercial core, with architecture that is deliberately contemporary and colourful.',
      },
      {
        q: 'Is Prospect a good place to live?',
        a: 'It has a devoted following among people who want genuine walkability and design-forward housing. It is small, HOA-governed, and the architecture divides opinion sharply — which is worth knowing before you fall for the photographs.',
      },
    ],
    sources: src,
    lede: `Prospect New Town is a few hundred houses in south Longmont that look like
nothing else in Colorado — bold colours, narrow streets, alley garages and a
plan by the firm that designed Seaside, Florida.`,
    sections: `## Where Prospect actually is

South Longmont off South Main Street, a few minutes from
[Old Town](/neighborhoods/longmont/old-town-longmont/).

## The plan

Designed by Duany Plater-Zyberk on new-urbanist principles: narrow streets to
slow traffic, alley-loaded garages so cars do not front the street, mixed
housing types on the same block, small greens, and live-work units.

It works. The streets are genuinely walkable in a way almost no other Colorado
subdivision manages.

## The architecture

Deliberately contemporary and often brightly coloured, with design guidelines
enforced by the HOA. People either love it or find it relentless. Visit before
deciding.`,
    suits: `Buyers who want real walkability and contemporary design, and who are
comfortable with strong design covenants.`,
    check: `**HOA design guidelines** and what they permit.

**Resale profile** — the architecture narrows the buyer pool.

**Unit type**, which varies widely within a small area.`,
  },

  // ---------------------------------------------------------------- Loveland
  {
    ...LV,
    slug: 'downtown-loveland',
    name: 'Downtown Loveland',
    title: 'Downtown Loveland — a neighborhood guide',
    summary:
      'The old grid around 4th Street, with the sculpture collection, a revived main street and the best walkability in Loveland.',
    answer:
      'Downtown Loveland is the historic core around 4th Street, with 1900s–1950s housing, a revitalised commercial district and a significant public sculpture collection. It is the most walkable part of the city.',
    tags: ['downtown-loveland', 'loveland', 'historic', 'arts', 'walkable'],
    bounds: 'The 4th Street corridor and surrounding grid, west of Lincoln Avenue',
    housing: ['1900s–1950s bungalows and brick', 'Some infill'],
    stats: ['sculpture collection', 'to the canyon - 10 min', 'walkable core'],
    parks: 'Foote Lagoon, Benson Sculpture Garden, Big Thompson corridor',
    geo: { lat: 40.3978, lng: -105.075 },
    links: [
      { label: 'City of Loveland', url: 'https://www.lovgov.org/' },
      { label: 'Benson Sculpture Garden', url: 'https://www.sculptureinthepark.org/' },
      { label: 'Thompson School District R2-J', url: 'https://www.tsd.org/' },
    ],
    faq: [
      {
        q: 'Is downtown Loveland worth living in?',
        a: 'It has a revived 4th Street with independent restaurants and shops, walkable period housing, and the sculpture collection nearby. It is meaningfully cheaper than downtown Fort Collins for a similar proposition.',
      },
    ],
    sources: src,
    lede: `Downtown Loveland has spent two decades reviving 4th Street, and it worked. The
old grid around it holds walkable period housing at prices well below downtown
Fort Collins.`,
    sections: `## Where downtown Loveland actually is

The 4th Street corridor and the grid around it, west of Lincoln Avenue, ten
minutes from the mouth of the Big Thompson Canyon.

## The sculpture

Loveland has been a bronze casting centre since the 1970s, and the result is an
unusual density of public sculpture. **Benson Sculpture Garden** holds the main
collection, and **Sculpture in the Park** each August is one of the largest
outdoor shows in the country.

## The housing

1900s–1950s bungalows and brick houses on a walkable grid. Prices climb heading
west toward the canyon mouth.`,
    suits: `Buyers who want a walkable downtown and quick mountain access at Loveland
rather than Fort Collins prices.`,
    check: `**Flood mapping** near the Big Thompson — the 1976 and 2013 floods both hit
this corridor.

**Pre-1955 systems.**`,
  },

  // ---------------------------------------------------------------- Greeley
  {
    ...GR,
    slug: 'west-greeley',
    name: 'West Greeley',
    title: 'West Greeley — a neighborhood guide',
    summary:
      'The newer, more affluent side of Greeley: post-1990 subdivisions, the better-regarded schools, and the shortest run to I-25.',
    answer:
      'West Greeley is the newer western section of the city along the 20th Street and 47th Avenue corridors, with predominantly post-1990 subdivision housing. It has the city’s most sought-after schools and the shortest access to I-25.',
    tags: ['west-greeley', 'greeley', 'new-construction', 'family', 'schools'],
    bounds: 'West of 35th Avenue, along the 20th Street corridor',
    housing: ['1990s–present subdivisions', 'Townhomes and apartments'],
    stats: ['I-25 - 15 min', 'newer housing', 'furthest from the plants'],
    parks: 'Poudre River Trail, Sanborn Park',
    geo: { lat: 40.4133, lng: -104.75 },
    links: [
      { label: 'City of Greeley', url: 'https://greeleygov.com/' },
      { label: 'Greeley-Evans School District 6', url: 'https://www.greeleyschools.org/' },
    ],
    faq: [
      {
        q: 'Is west Greeley better than the rest of the city?',
        a: 'It is the newest and most expensive part, with the schools that test best and the greatest distance from the feedlot and meatpacking operations. Whether that makes it "better" depends on whether you want new construction or period housing.',
      },
      {
        q: 'Does west Greeley smell?',
        a: 'Much less than areas nearer the plants. The odour is wind-dependent and intermittent, and west Greeley is the part of the city least affected.',
      },
    ],
    sources: src,
    lede: `West Greeley is the newer, more expensive half of the city — post-1990
subdivisions, the schools that test best, and the part of town furthest from the
feedlots.`,
    sections: `## Where west Greeley actually is

West of about 35th Avenue along the 20th Street and 47th Avenue corridors,
running toward I-25.

## The housing

Almost entirely post-1990: conventional subdivisions, larger houses, HOAs and
metro districts. Prices sit above the rest of Greeley and still well below
[Fort Collins](/places/fort-collins/) and [Windsor](/places/windsor/).

## The schools

Greeley-Evans District 6 tests below Poudre and Thompson district-wide, but the
west-side schools are the strongest in the district. Look at the specific school
rather than the district average.`,
    suits: `Families who want new construction and the best Greeley schools, and
commuters heading to I-25.`,
    check: `**Metro district mill levies** on newer subdivisions.

**Specific school assignment and performance.**

**Oil and gas permits** — Weld County is heavily drilled; check the state map.`,
  },

  {
    ...GR,
    slug: 'downtown-greeley',
    name: 'Downtown Greeley',
    title: 'Downtown Greeley — a neighborhood guide',
    summary:
      'The 1870 Union Colony grid: brick bungalows, the university, and the best value per square foot in Northern Colorado.',
    answer:
      'Downtown Greeley is the historic core laid out by the Union Colony in 1870, containing early-twentieth-century housing, the University of Northern Colorado nearby, and the city’s walkable commercial district. It offers the lowest price per square foot of any Northern Colorado downtown.',
    tags: ['downtown-greeley', 'greeley', 'historic', 'value', 'university'],
    bounds: 'The 8th and 9th Street corridors, around Lincoln Park',
    housing: ['1900s–1930s brick bungalows and foursquares', 'Student rentals near UNC'],
    stats: ['best $/sq ft in Northern Colorado', 'UNC nearby', 'walkable core'],
    parks: 'Lincoln Park, Poudre River Trail',
    geo: { lat: 40.4233, lng: -104.7091 },
    links: [
      { label: 'City of Greeley', url: 'https://greeleygov.com/' },
      { label: 'University of Northern Colorado', url: 'https://www.unco.edu/' },
      { label: 'Greeley-Evans School District 6', url: 'https://www.greeleyschools.org/' },
    ],
    faq: [
      {
        q: 'Is downtown Greeley being revitalised?',
        a: 'Yes — sustained investment around the 8th and 9th Street corridors and Lincoln Park has brought restaurants, a hotel and events. It is the most changed part of the city over the last decade.',
      },
      {
        q: 'Is downtown Greeley a good value?',
        a: 'It offers the lowest price per square foot of any walkable downtown in Northern Colorado, with genuine 1900s–1930s brick housing. That gap against Fort Collins and Loveland is the whole argument.',
      },
    ],
    sources: src,
    lede: `Downtown Greeley is the original 1870 Union Colony grid — rational streets,
irrigation ditches, brick bungalows — with a university beside it and the best
value per square foot of any downtown on the northern Front Range.`,
    sections: `## Where downtown Greeley actually is

The historic core around the 8th and 9th Street corridors and Lincoln Park, with
the University of Northern Colorado immediately south.

## The Union Colony

Greeley was founded in 1870 as a planned agricultural cooperative organised by
Nathan Meeker of the *New-York Tribune* and named for its editor, Horace
Greeley. It was teetotal, irrigation-obsessed and rigorously planned — which is
why the grid is unusually rational for a Colorado city.

## The housing

1900s–1930s brick bungalows and foursquares, some beautifully kept, some
converted to student rentals near UNC.

## The revitalisation

Sustained investment around Lincoln Park and the 8th Street corridor has brought
restaurants, events and a hotel. It is the fastest-changing part of Greeley.`,
    suits: `Value buyers who want period housing and walkability at Northern Colorado's
lowest prices, and investors serving UNC.`,
    check: `**Student rental concentration** on the specific block.

**Pre-1935 systems** — sewer, wiring, supply lines.

**Rental licensing** if buying an existing rental.`,
  },
]
