import { SOURCES } from './_template.mjs'

const census = { ...SOURCES.census, retrieved: '2026-08-19' }

export const northern = [
  // ------------------------------------------------------------ Fort Collins
  {
    slug: 'fort-collins',
    priceLadder: [
      { label: 'Fort Collins', value: 650000, self: true },
      { label: 'Denver metro', value: 650000 },
      { label: 'Colorado statewide', value: 606500 },
      { label: 'Weld County', value: 499000 },
    ],
    name: 'Fort Collins',
    region: 'northern-colorado',
    county: 'Larimer County',
    featured: true,
    title: 'Fort Collins, Colorado — the complete guide to living here',
    summary:
      'A university town that grew into Northern Colorado’s economic centre without losing its Old Town. The most bike-normal city in the state, and the priciest address north of Boulder County.',
    answer:
      'Fort Collins is a Larimer County city of about 170,000, home to Colorado State University and an Old Town commercial core that anchors Northern Colorado. Single-family homes had a June 2026 median of $650,000 — level with Denver metro — and it is the most cycling-oriented city in Colorado.',
    tags: ['fort-collins', 'northern-colorado', 'larimer-county', 'biking', 'college-town'],
    geo: { lat: 40.5853, lng: -105.0844 },
    stats: [
      'median - $650K',
      'population - 169,810',
      'elevation - 5,003 ft',
      'commute to Denver - 65 min',
    ],
    civic: {
      population: 169810,
      elevation: 5003,
      incorporated: 1873,
      countySeat: true,
      area: 57.2,
      schoolDistricts: ['Poudre School District (PSD)'],
      employers: [
        'Colorado State University',
        'UCHealth Poudre Valley Hospital',
        'Woodward, Inc.',
        'Broadcom',
        'Otter Products (OtterBox)',
        'Anheuser-Busch Fort Collins brewery',
      ],
      transit: [
        'Transfort city bus, plus the MAX bus rapid transit line down Mason Street',
        'Bustang North Line to Denver',
        'Colorado Connector passenger rail — northern terminus, starter service targeted for 2029',
      ],
      drive: { denver: 65, boulder: 50, dia: 75 },
      median: 650000,
      medianBasis: 'single-family, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Fort Collins', url: 'https://www.fcgov.com/' },
      { label: 'Poudre School District', url: 'https://www.psdschools.org/' },
      { label: 'Colorado State University', url: 'https://www.colostate.edu/' },
      { label: 'Transfort & MAX transit', url: 'https://www.ridetransfort.com/' },
      { label: 'Colorado Connector passenger rail', url: 'https://coloradoconnector.com/' },
    ],
    faq: [
      {
        q: 'Is Fort Collins a good place to live?',
        a: 'It consistently ranks among the most liveable mid-sized cities in the country, and the reasons are concrete: a real downtown, a major university, an unusually complete bike network, and a job base that is not solely the university. The trade-off is price — it is the most expensive city in Northern Colorado.',
      },
      {
        q: 'How far is Fort Collins from Denver?',
        a: 'About 65 miles down I-25, roughly 65 minutes in normal midday traffic and 90 or more in a weekday evening rush. It is a commutable distance a few days a week, not a daily one most people enjoy.',
      },
      {
        q: 'How much does a house cost in Fort Collins?',
        a: 'The single-family median was $650,000 in June 2026, with condos and townhomes at about $422,915. That puts Fort Collins level with the Denver metro median and well above the Weld County figure next door.',
      },
      {
        q: 'Will passenger rail actually reach Fort Collins?',
        a: 'It is further along than it has ever been. An April 2026 agreement with BNSF cleared the Denver–Fort Collins corridor, and starter service of three daily round trips is targeted for 2029. Treat it as likely but not bankable when choosing a house.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      SOURCES.connector,
      { label: 'City of Fort Collins', url: 'https://www.fcgov.com/' },
    ],
    lede: `Fort Collins is what happens when a land-grant university town gets forty years
of steady growth and manages, mostly, not to wreck the thing people came for.
It has a genuine downtown, a river, a brewery industry it invented before that
was a category, and more people riding bicycles in February than any other city
in Colorado.`,
    money: `The June 2026 single-family median was **$650,000** — the highest reading of
2026 and dead level with the seven-county Denver metro. Condos and townhomes
sat at $422,915. Homes took about 62 days to sell and closed at 99.7% of list,
which is the profile of a market that is neither hot nor soft: buyers have time
to think, sellers are not discounting.

The number that matters more than the median is the gap to Weld County next
door, where the single-family median was $499,000. That $150,000 spread is the
price of the Fort Collins address, and it is why Windsor, Severance and
Timnath have grown the way they have.`,
    sections: `## Where Fort Collins actually is

Sixty-five miles north of Denver and about fifteen miles south of the Wyoming
line, on the Cache la Poudre River where it leaves the foothills. That river is
the reason the city exists — it was an army post in 1864 guarding the Overland
Trail — and it is still the organising feature. The Poudre Trail runs the length
of town, and the canyon behind it is the closest thing on the northern Front
Range to instant wilderness.

The city sits at 5,003 feet, slightly *below* Denver. People are routinely
surprised by this. The mountains look closer here because the foothills rise
abruptly at Horsetooth, not because the town is higher.

## The five parts of town

Fort Collins is not one housing market, and the differences are stark enough
that "the Fort Collins median" is nearly useless on its own.

**Old Town** is the 1880s–1920s core north of Mountain Avenue: brick bungalows,
alleys, mature street trees, and the highest price per square foot in Northern
Colorado. Old Town West, in particular, is where you find kids riding bikes to
school in winter.

**Campus West** wraps CSU. It is dense, it is loud on football Saturdays, and a
meaningful share of the single-family stock has been converted to rentals. Good
yields, mixed neighbours.

**Midtown** runs down College Avenue from Prospect to Harmony — 1960s and 70s
ranches, the MAX bus line, and the ongoing redevelopment of the old Foothills
Mall site. This is where the value is if you want to be central without Old Town
pricing.

**Harmony corridor and the southeast** is the newer city: 1990s onward,
larger houses, HOAs, and where most of the tech and medical employment actually
sits. Good schools, less character, easier garages.

**Northeast and Mulberry** is the least expensive quadrant and the one changing
fastest, with older stock, some industrial edges, and the airport corridor
toward Timnath.

## The bike thing is not marketing

Fort Collins has a Platinum-level bicycle-friendly designation and, more
tellingly, kids ride here in the winter. That only happens where a city plows
bike infrastructure on the same schedule as the roads, which is a budget
decision rather than a geography one. The Spring Creek and Poudre trails form a
spine that lets you cross most of the city without a significant road crossing.

If a bikeable school route is your actual requirement, this is one of three
places on the Front Range we would point you to — see [where can my kid actually
ride a bike to school?](/answers/kid-bike-to-school/)

## Work, and whether you will commute

Fort Collins is not a bedroom community, which is the single most important
economic fact about it. Colorado State University is the anchor, but Woodward,
Broadcom, OtterBox, UCHealth and the Anheuser-Busch brewery mean there is a
private-sector base that does not depend on enrolment.

That matters because the Denver commute is genuinely unpleasant. I-25 between
Fort Collins and the north metro has been under near-continuous widening, and a
7:30am departure regularly runs 90 minutes. People do it a few days a week. Very
few do it daily for long.

The [Colorado Connector](https://coloradoconnector.com/) would change this. A
BNSF agreement signed in April 2026 cleared the Denver–Fort Collins segment, and
starter service — three daily round trips — is targeted for 2029. We would not
buy a house on that promise, but we would not ignore it either.

## Weather, water, and the things that damage houses

Two specifics worth knowing before you write an offer.

**Hail.** Northern Colorado sits in a corridor that gets damaging hail every few
summers. Ask for the roof's age and whether the last replacement was an
insurance claim; ask what the deductible structure is on the policy you are
being quoted, because percentage-of-value wind-and-hail deductibles are now
common here.

**Water and the Poudre.** The 2013 flood reshaped a lot of assumptions about
where water goes on this side of the state. Pull the current FEMA flood map for
any address near the river, Spring Creek, or Boxelder Creek, and do not rely on
a seller's recollection.

## Who Fort Collins is right for

People who want a real city rather than a suburb, who will actually use the
downtown and the trails, and whose work is either here or remote. Families do
very well here — Poudre School District is strong across the board, which is not
true everywhere on the Range.

It is a poor fit if your job is in Denver five days a week, or if your budget
tops out around $500,000 and you want a detached house with a yard. In that
case look east and south: [Windsor](/places/windsor/),
[Severance](/places/severance/), [Johnstown](/places/johnstown/) and
[Greeley](/places/greeley/) all buy considerably more house per dollar.`,
  },

  // ------------------------------------------------------------ Greeley
  {
    slug: 'greeley',
    priceLadder: [
      { label: 'Denver metro', value: 650000 },
      { label: 'Colorado statewide', value: 606500 },
      { label: 'Weld County (incl. Greeley)', value: 499000, self: true },
      { label: 'Pueblo County', value: 324000 },
    ],
    name: 'Greeley',
    region: 'northern-colorado',
    county: 'Weld County',
    title: 'Greeley, Colorado — the complete guide to living here',
    summary:
      'The most misjudged city on the Front Range. An agricultural and energy capital with a university, a genuinely walkable core, and the best price-per-square-foot in Northern Colorado.',
    answer:
      'Greeley is the Weld County seat, population about 108,795, built on agriculture, meatpacking and oil and gas, and home to the University of Northern Colorado. Weld County’s single-family median was $499,000 in June 2026 — roughly $150,000 below Fort Collins — making Greeley the value end of Northern Colorado.',
    tags: ['greeley', 'northern-colorado', 'weld-county', 'value', 'college-town'],
    geo: { lat: 40.4233, lng: -104.7091 },
    stats: [
      'county median - $499K',
      'population - 108,795',
      'elevation - 4,675 ft',
      'commute to Denver - 60 min',
    ],
    civic: {
      population: 108795,
      elevation: 4675,
      incorporated: 1886,
      countySeat: true,
      schoolDistricts: ['Greeley-Evans School District 6'],
      employers: [
        'JBS USA (beef processing)',
        'University of Northern Colorado',
        'Banner Health / North Colorado Medical Center',
        'Weld County government',
        'State Farm regional operations',
      ],
      transit: ['Greeley-Evans Transit', 'Bustang to Denver and Fort Collins'],
      drive: { denver: 60, boulder: 55, dia: 55 },
      median: 499000,
      medianBasis: 'Weld County single-family, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Greeley', url: 'https://greeleygov.com/' },
      { label: 'Greeley-Evans School District 6', url: 'https://www.greeleyschools.org/' },
      { label: 'University of Northern Colorado', url: 'https://www.unco.edu/' },
      { label: 'Weld County government', url: 'https://www.weld.gov/' },
    ],
    faq: [
      {
        q: 'Is Greeley a good place to live?',
        a: 'For the money, yes — it has a university, a hospital system, a real downtown and the lowest housing costs of any major Northern Colorado city. The honest caveats are the smell from the feedlots on some wind directions, and a school district that has historically underperformed Poudre and Thompson.',
      },
      {
        q: 'Does Greeley still smell?',
        a: 'Sometimes, and it depends entirely on the wind. The meatpacking and feedlot operations are real, the effect is intermittent rather than constant, and it is much less noticeable in the west and south of the city than near the plants.',
      },
      {
        q: 'How much cheaper is Greeley than Fort Collins?',
        a: 'Weld County’s June 2026 single-family median was $499,000 against Fort Collins at $650,000 — about a $150,000 gap for broadly comparable houses, and often more once you compare lot sizes.',
      },
    ],
    sources: [census, SOURCES.car, { label: 'City of Greeley', url: 'https://greeleygov.com/' }],
    lede: `Greeley is the city on the northern Front Range that people dismiss without
visiting, usually on the basis of a smell they encountered once on US-34. It is
also a county seat with a university, a hospital system, a genuinely handsome
downtown, and housing that costs about a third less than Fort Collins
twenty-five miles away.`,
    money: `Weld County's single-family median was **$499,000** in June 2026, with
condos and townhomes at $359,950 — slightly down year over year while the state
edged up. Greeley itself typically runs below the county figure, because the
county number includes the fast-growing and more expensive southwest Weld towns
like Erie, Firestone and Windsor.

The comparison that matters: Fort Collins at $650,000, twenty-five miles north.
If your work is anywhere in Northern Colorado and you are not attached to the
Fort Collins address, Greeley is the most house per dollar on this end of the
corridor.`,
    sections: `## Where Greeley actually is

Fifty miles north-north-east of Denver, out on the plains east of I-25 at the
confluence of the Cache la Poudre and South Platte rivers. It is the only major
Front Range city that is not tucked against the foothills, and it feels
different for it — bigger sky, more wind, longer views, and the mountains as a
distant west wall rather than a backdrop.

At 4,675 feet it is the lowest sizeable city on the northern Front Range, about
600 feet below Denver. Winters are marginally milder and the growing season is
slightly longer, which is not an accident: this is farm country and always was.

## Founded as a utopian experiment

Greeley began in 1870 as the Union Colony, an agricultural cooperative
organised by Nathan Meeker of the *New-York Tribune* and named for the paper's
editor, Horace Greeley. It was planned, teetotal, and irrigation-obsessed. Two
of those three left a mark: the street grid is unusually rational for a Colorado
city, and the irrigation ditches that made the colony viable still run through
town.

## The economy is the story

Three things carry Greeley, and they are unusually legible:

**Agriculture and meatpacking.** JBS USA runs one of the largest beef processing
operations in the country here. It is the single biggest private employer and
the source of the smell people complain about.

**Oil and gas.** Weld County produces the overwhelming majority of Colorado's
oil. That means well-paid field jobs, a boom-bust rhythm in the local economy,
and active drilling within sight of some neighbourhoods. If that matters to
you, check the state's permit map for any address before you buy.

**The university.** The University of Northern Colorado is the state's teacher
college by origin and still its largest producer of educators, with about 9,000
students. It gives Greeley a downtown music scene and a bookshop, which is not
nothing in a farm town.

## The neighbourhoods

**West Greeley** — 20th Street west toward the 47th Avenue corridor — is the
newest and priciest part of town: 1990s-onward subdivisions, the better-regarded
schools, and the shortest drive to I-25. It is also furthest from the plants.

**Downtown and the university district** has the 1900–1930 housing: brick
bungalows and foursquares, some beautifully kept, some carved into student
rentals. The best value in the city per square foot, and the best walking.

**North Greeley** is the older working-class side, closest to the industrial
uses. Cheapest entry point, and the place to be most careful about what is
upwind.

**East and Evans** blend into [Evans](/places/evans/) to the south, which is a
separate municipality that most people experience as continuous with Greeley.

## The school question, honestly

Greeley-Evans District 6 has historically tested below Poudre in Fort Collins
and Thompson in Loveland. It also serves a much higher share of students who
qualify for free and reduced lunch and a large multilingual population, which is
most of the explanation. There are strong individual schools and a well-regarded
IB programme. If schools are your deciding variable, look at the specific
school rather than the district average — and look at west Greeley first.

## Who Greeley is right for

People who want the most house for the money in Northern Colorado, who work in
agriculture, energy, healthcare or education, and who are not going to be
bothered by an occasional feedlot day. It is a genuinely good bet for investors:
[rents cover carry here more comfortably](/investing/longmont-vs-pueblo/) than
almost anywhere north of Denver.

It is a poor fit if you want the foothills at your back door, or if you have
absorbed the idea that Fort Collins is the only acceptable address in Northern
Colorado. Twenty-five miles is not far, and the price gap is real money.`,
  },

  // ------------------------------------------------------------ Loveland
  {
    slug: 'loveland',
    name: 'Loveland',
    region: 'northern-colorado',
    county: 'Larimer County',
    title: 'Loveland, Colorado — the complete guide to living here',
    summary:
      'The sculpture town at the mouth of the Big Thompson canyon. Cheaper than Fort Collins, closer to the mountains than Greeley, and the northern Front Range’s most underrated compromise.',
    answer:
      'Loveland is a Larimer County city of about 76,378 at the mouth of the Big Thompson Canyon, known for its bronze foundries and public sculpture. It sits between Fort Collins and the Denver metro, typically pricing below Fort Collins while offering the fastest foothills and Rocky Mountain National Park access in Northern Colorado.',
    tags: ['loveland', 'northern-colorado', 'larimer-county', 'arts', 'foothills'],
    geo: { lat: 40.3978, lng: -105.075 },
    stats: [
      'population - 76,378',
      'elevation - 4,982 ft',
      'commute to Denver - 55 min',
      'to Estes Park - 35 min',
    ],
    civic: {
      population: 76378,
      elevation: 4982,
      incorporated: 1881,
      area: 36.0,
      schoolDistricts: ['Thompson School District R2-J'],
      employers: [
        'UCHealth Medical Center of the Rockies',
        'Hach Company',
        'Northern Colorado Regional Airport',
        'Centerra medical and retail corridor',
      ],
      transit: ['COLT city bus', 'Bustang North Line', 'Northern Colorado Regional Airport'],
      drive: { denver: 55, boulder: 40, dia: 70 },
    },
    links: [
      { label: 'City of Loveland', url: 'https://www.lovgov.org/' },
      { label: 'Thompson School District R2-J', url: 'https://www.tsd.org/' },
      { label: 'Rocky Mountain National Park', url: 'https://www.nps.gov/romo/index.htm' },
    ],
    faq: [
      {
        q: 'Is Loveland cheaper than Fort Collins?',
        a: 'Generally yes — Loveland typically runs below the Fort Collins single-family median of $650,000 for comparable houses, while sitting ten miles closer to Denver and considerably closer to the mountains.',
      },
      {
        q: 'Why is Loveland known for sculpture?',
        a: 'It has been a bronze casting centre since the 1970s, with several major art foundries. The result is a downtown and civic landscape with an unusual density of public sculpture, and one of the largest outdoor sculpture shows in the country each August.',
      },
      {
        q: 'How far is Loveland from Rocky Mountain National Park?',
        a: 'About 35 minutes to Estes Park up the Big Thompson Canyon on US-34, and the park entrance just beyond. It is the fastest park access of any sizeable Front Range city.',
      },
    ],
    sources: [census, SOURCES.car, { label: 'City of Loveland', url: 'https://www.lovgov.org/' }],
    lede: `Loveland gets overshadowed by Fort Collins ten miles north and misread as a
bedroom community, which it is not. It is a working town with bronze foundries,
a hospital corridor, an airport, and the shortest drive to Rocky Mountain
National Park of any city its size on the Front Range.`,
    money: `Loveland typically prices below Fort Collins for comparable houses while
sitting closer to both Denver and the mountains, which is the whole argument for
it. Larimer County as a whole tracks the Fort Collins figures more closely than
Weld does, so expect the gap to Fort Collins to be tens of thousands rather than
the $150,000 you get by crossing into Weld.

Where Loveland gets expensive is west of Wilson Avenue and up toward the canyon
mouth, where lot sizes grow and the foothills views start.`,
    sections: `## Where Loveland actually is

At the mouth of the Big Thompson Canyon, ten miles south of Fort Collins and
about fifty-five miles north of Denver. The canyon is the defining feature: US-34
runs west from town up to Estes Park and the eastern entrance of Rocky Mountain
National Park, which puts a genuine alpine park inside an hour of the front door.

That same canyon produced the 1976 Big Thompson flood, which killed 144 people
and remains the deadliest natural disaster in Colorado history, and it flooded
again in 2013. Anything near the river deserves a current FEMA map and a
conversation about insurance.

## The art is real, not a slogan

Loveland has been a bronze casting centre since the 1970s. Several major
foundries operate here, the city has accumulated a genuinely large public
sculpture collection, and Sculpture in the Park each August is one of the
largest outdoor shows in the United States. Benson Sculpture Garden is the place
to see the result without paying for anything.

The valentine remailing programme — the reason for the name — is a nice bit of
civic theatre, but the foundries are the substantive version of the same
identity.

## The two Lovelands

**Old Loveland**, roughly downtown and west, is 1900s–1950s stock on a grid, with
the Foote Lagoon, the sculpture parks and the walkable core. It is the part of
town with character, and where prices climb as you go west toward the canyon.

**Centerra and east Loveland** is the newer half, built out from the 1990s
around the I-25 and US-34 interchange: the Medical Center of the Rockies, the
Promenade Shops, big-box retail and subdivisions. It is where most of the job
growth has gone and where the commuting is easiest, and it looks like anywhere.

## The airport nobody expects

Northern Colorado Regional Airport sits between Loveland and Fort Collins. It
has had intermittent commercial service and functions mostly as general
aviation, but it is a genuine convenience for private and business flying and a
reason some businesses site here rather than further north.

## Who Loveland is right for

People who want the mountains genuinely accessible on a weeknight, who like the
idea of Fort Collins but not the price, and who do not need a downtown as busy
as Old Town. Families do well — Thompson R2-J is solid — and the commute south
to the north metro or Boulder is meaningfully shorter than from Fort Collins.

It is a weaker fit if you want an urban core with real density, or if you are
buying near the river and are not prepared to think hard about water.`,
  },

  // ------------------------------------------------------------ Windsor
  {
    slug: 'windsor',
    name: 'Windsor',
    region: 'northern-colorado',
    county: 'Larimer & Weld Counties',
    title: 'Windsor, Colorado — the complete guide to living here',
    summary:
      'The town that grew up in the triangle between Fort Collins, Loveland and Greeley, and now sits at the centre of Northern Colorado’s commute rather than the edge of it.',
    answer:
      'Windsor is a Northern Colorado town of about 32,716 straddling the Larimer–Weld county line, roughly equidistant from Fort Collins, Loveland and Greeley. It has grown rapidly since 2000 by offering newer housing at Weld County prices with Larimer County access, and sits on Weld RE-4 schools.',
    tags: ['windsor', 'northern-colorado', 'weld-county', 'larimer-county', 'growth'],
    geo: { lat: 40.4775, lng: -104.9014 },
    stats: [
      'population - 32,716',
      'elevation - 4,797 ft',
      'incorporated - 1890',
      'area - 25.1 sq mi',
    ],
    civic: {
      population: 32716,
      elevation: 4797,
      incorporated: 1890,
      area: 25.08,
      schoolDistricts: ['Weld RE-4 School District'],
      employers: ['Vestas Blades America', 'Windsor Mill', 'Poudre Valley REA'],
      transit: ['Limited local service; effectively a driving town'],
      drive: { denver: 60, boulder: 50, dia: 60 },
    },
    links: [
      { label: 'Town of Windsor', url: 'https://www.windsorgov.com/' },
      { label: 'Weld RE-4 School District', url: 'https://www.weldre4.org/' },
    ],
    faq: [
      {
        q: 'Is Windsor in Larimer or Weld County?',
        a: 'Both. The town straddles the county line, which means two different property tax pictures and occasionally two different answers about services depending on which side of town an address falls on.',
      },
      {
        q: 'Why has Windsor grown so fast?',
        a: 'It offers newer housing at Weld County prices within a 20-minute drive of Fort Collins, Loveland and Greeley simultaneously. For a two-income household with jobs in different Northern Colorado cities, it is often the only address that works for both.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'Town of Windsor', url: 'https://www.windsorgov.com/' },
    ],
    lede: `Windsor spent a century as a sugar beet town of a few thousand people and then
roughly quadrupled after 2000. The reason is geometric: it sits in the middle of
the triangle formed by Fort Collins, Loveland and Greeley, which makes it the
answer for households whose two jobs are in two different Northern Colorado
cities.`,
    money: `Windsor prices between Greeley and Fort Collins, closer to the middle than to
either end, and the housing is markedly newer than both — most of the town was
built after 2000. Weld County's June 2026 single-family median was $499,000, and
Windsor generally sits above that because of the newer stock and the Larimer
County side of town.

The county line is a real financial variable here, not a trivia point. Larimer
and Weld set different mill levies, so two similar houses on opposite sides of
the line carry different tax bills. Check the parcel.`,
    sections: `## Where Windsor actually is

East of I-25 between Fort Collins and Greeley, on the Cache la Poudre River,
with Windsor Lake at the centre of the old town. It is about twenty minutes to
each of Fort Collins, Loveland and Greeley — which is the entire point of the
place.

## What it was, and what it became

Windsor was a Great Western Sugar company town: beets in, sugar out, a mill at
the centre of it. The mill still stands and has been partly redeveloped. What
changed was the 2000s, when Larimer County prices pushed households east and
Windsor had land, water and a willing government.

The result is a town where the historic core around Windsor Lake is a few
walkable blocks of genuine 1900s brick, ringed by twenty-five square miles of
subdivisions built since. Both parts are real; they just have nothing to do with
each other architecturally.

## The tornado

On 22 May 2008 an EF3 tornado tracked through Windsor, killing one person and
damaging or destroying hundreds of buildings. It is the reason a noticeable share
of the older housing stock has post-2008 roofs and rebuilt sections, and it is
worth asking about on any house that predates it.

## Who Windsor is right for

Two-income households split across Northern Colorado cities, and anyone who
wants newer construction without Fort Collins pricing. Weld RE-4 is well
regarded, which is a meaningful part of the draw compared with Greeley-Evans D6.

It is a weaker fit if you want walkability beyond the few blocks around the lake,
or if you dislike the sameness of post-2000 subdivision building — most of
Windsor is exactly that.`,
  },

  // ------------------------------------------------------------ Berthoud
  {
    slug: 'berthoud',
    name: 'Berthoud',
    region: 'northern-colorado',
    county: 'Larimer County',
    title: 'Berthoud, Colorado — the complete guide to living here',
    summary:
      'The "Garden Spot of Colorado" — a small town between Loveland and Longmont that has kept a real main street while growing around it.',
    answer:
      'Berthoud is a Larimer County town of about 10,332 between Loveland and Longmont, historically nicknamed the Garden Spot of Colorado. It offers small-town scale with mountain views, Thompson R2-J schools, and quick I-25 access roughly midway between Denver and Fort Collins.',
    tags: ['berthoud', 'northern-colorado', 'larimer-county', 'small-town'],
    geo: { lat: 40.3083, lng: -105.0811 },
    stats: ['population - 10,332', 'elevation - 5,033 ft', 'incorporated - 1888'],
    civic: {
      population: 10332,
      elevation: 5033,
      incorporated: 1888,
      schoolDistricts: ['Thompson School District R2-J'],
      transit: ['No fixed-route transit; I-25 access at CO-56'],
      drive: { denver: 50, boulder: 35, dia: 65 },
    },
    links: [
      { label: 'Town of Berthoud', url: 'https://www.berthoud.org/' },
      { label: 'Thompson School District R2-J', url: 'https://www.tsd.org/' },
    ],
    faq: [
      {
        q: 'Why is Berthoud called the Garden Spot of Colorado?',
        a: 'The nickname dates to the town’s agricultural heyday, when the combination of irrigation water, soil and a slightly sheltered position produced unusually good yields. The slogan stuck and still appears on town signage.',
      },
      {
        q: 'Is Berthoud a good commute to Denver?',
        a: 'It is about 50 minutes midday, and it splits the difference between Denver and Fort Collins better than almost anywhere. Boulder is closer still at roughly 35 minutes, which is the commute most Berthoud residents actually make.',
      },
    ],
    sources: [census, { label: 'Town of Berthoud', url: 'https://www.berthoud.org/' }],
    lede: `Berthoud is a small town that has managed the trick most Front Range small
towns have failed: growing substantially while keeping a main street that people
actually use. It sits at the midpoint between Denver and Fort Collins, which
turns out to be a genuinely useful place to be.`,
    money: `Berthoud sits in Larimer County, so it carries Larimer's tax picture and
generally Larimer-adjacent pricing, though below Loveland and well below Fort
Collins. The town has added a lot of newer subdivision housing on its
edges — particularly toward I-25 — while the older core near Mountain Avenue
holds the character stock.`,
    sections: `## Where Berthoud actually is

Between Loveland and Longmont, just west of I-25 at the CO-56 interchange, with
Carter Lake in the foothills directly west. It is roughly fifty minutes to
Denver, thirty-five to Boulder, and twenty-five to Fort Collins — the most
genuinely central position on the northern Front Range.

## What is actually there

A compact old downtown on Mountain Avenue with a handful of businesses that are
not chains, Fickel Park at the centre, and Berthoud's own school system within
Thompson R2-J. Carter Lake and Pinewood Reservoir are ten to twenty minutes west
into the foothills, which is unusually good water access for a plains town.

## Who Berthoud is right for

People who want small-town scale but need to reach Boulder or Loveland reliably,
and who would rather have a main street than a town centre development. It works
particularly well for households where one person commutes south to Boulder and
the other north to Loveland or Fort Collins.

It is a weaker fit if you want restaurants and nightlife within walking
distance — Berthoud is quiet by design, and stays that way after eight.`,
  },

  // ------------------------------------------------------------ Timnath
  {
    slug: 'timnath',
    name: 'Timnath',
    region: 'northern-colorado',
    county: 'Larimer County',
    title: 'Timnath, Colorado — the complete guide to living here',
    summary:
      'A village of a few hundred people in 2000 that annexed aggressively and became one of Northern Colorado’s fastest-growing addresses, with Poudre schools and a Costco.',
    answer:
      'Timnath is a Larimer County town of about 6,487 immediately east of Fort Collins, which grew more than tenfold after 2000 through annexation and new construction. It combines Poudre School District enrolment with newer housing and direct I-25 access at Harmony Road.',
    tags: ['timnath', 'northern-colorado', 'larimer-county', 'growth', 'new-construction'],
    geo: { lat: 40.5297, lng: -104.9872 },
    stats: ['population - 6,487', 'elevation - 4,869 ft', 'incorporated - 1920'],
    civic: {
      population: 6487,
      elevation: 4869,
      incorporated: 1920,
      area: 7.31,
      schoolDistricts: ['Poudre School District (PSD)'],
      transit: ['Driving town; I-25 at Harmony Road'],
      drive: { denver: 60, boulder: 50, dia: 65 },
    },
    links: [
      { label: 'Town of Timnath', url: 'https://www.timnathgov.com/' },
      { label: 'Poudre School District', url: 'https://www.psdschools.org/' },
    ],
    faq: [
      {
        q: 'Is Timnath part of Fort Collins?',
        a: 'No. It is a separate incorporated town in Larimer County with its own government, immediately east of Fort Collins, though most residents shop, work and socialise in Fort Collins.',
      },
      {
        q: 'Why did Timnath grow so quickly?',
        a: 'It annexed aggressively in the 2000s, had developable land and water when Fort Collins was running short of both, and could offer Poudre School District enrolment — which is the specific thing many buyers were after.',
      },
    ],
    sources: [census, { label: 'Town of Timnath', url: 'https://www.timnathgov.com/' }],
    lede: `Timnath had a few hundred residents at the 2000 census. It now has around six
and a half thousand, a Costco, and a great deal of new construction, having
annexed its way from village to town in about fifteen years.`,
    money: `Timnath is almost entirely new housing, which sets the pricing: expect newer
construction premiums, metro district fees, and HOAs on most of the inventory.
It is in Larimer County and Poudre School District, both of which support value
relative to comparable new stock across the line in Weld.

Watch the metropolitan district debt on any Timnath purchase. Fast-growing
Colorado towns fund infrastructure this way, and the resulting mill levy can add
substantially to a tax bill in ways that are easy to miss on a listing.`,
    sections: `## Where Timnath actually is

Immediately east of Fort Collins at the I-25 and Harmony Road interchange, on
the Cache la Poudre River. Functionally it is east Fort Collins with a different
town hall — most residents work, shop and eat in Fort Collins, and the town's
own commercial core is the retail cluster at the interstate.

## What you are actually buying

Newer subdivisions, larger houses, HOA governance, and Poudre School District
enrolment without a Fort Collins price on the older stock. The historic village
core still exists on Main Street and is about two blocks long.

## Who Timnath is right for

Families who want Poudre schools and new construction, and who value a garage
and a warranty over a mature neighbourhood. The I-25 access is the best in
Northern Colorado for a Denver-direction commute.

It is a weaker fit if you want character housing, walkability, or a town with an
independent identity — Timnath's is still being assembled.`,
  },

  // ------------------------------------------------------------ Wellington
  {
    slug: 'wellington',
    name: 'Wellington',
    region: 'northern-colorado',
    county: 'Larimer County',
    title: 'Wellington, Colorado — the complete guide to living here',
    summary:
      'The last Front Range town before Wyoming. The most affordable Poudre School District address, and a genuine commuter town for Fort Collins.',
    answer:
      'Wellington is a Larimer County town of about 11,047 roughly fifteen minutes north of Fort Collins on I-25, and the northernmost sizeable town on Colorado’s Front Range. It offers Poudre School District enrolment at the lowest prices in the district’s boundary.',
    tags: ['wellington', 'northern-colorado', 'larimer-county', 'commuter', 'affordable'],
    geo: { lat: 40.7033, lng: -105.0086 },
    stats: ['population - 11,047', 'elevation - 5,194 ft', 'incorporated - 1905'],
    civic: {
      population: 11047,
      elevation: 5194,
      incorporated: 1905,
      area: 3.63,
      schoolDistricts: ['Poudre School District (PSD)'],
      transit: ['I-25 commuter corridor; no fixed-route transit'],
      drive: { denver: 80, boulder: 65, dia: 85 },
    },
    links: [
      { label: 'Town of Wellington', url: 'https://www.townofwellington.com/' },
      { label: 'Poudre School District', url: 'https://www.psdschools.org/' },
    ],
    faq: [
      {
        q: 'Is Wellington a good commute to Fort Collins?',
        a: 'Yes — about fifteen minutes straight down I-25, which is one of the easiest commutes on the northern Front Range. Denver is a different matter at roughly eighty minutes.',
      },
      {
        q: 'Is Wellington the cheapest Poudre School District address?',
        a: 'Generally yes. It is inside PSD boundaries while pricing well below Fort Collins and Timnath, which is the main reason families move there.',
      },
    ],
    sources: [census, { label: 'Town of Wellington', url: 'https://www.townofwellington.com/' }],
    lede: `Wellington is the last town on the Colorado Front Range before the Wyoming
line, and it exists in its current form because Fort Collins got expensive. It
is a fifteen-minute commute to a city fifteen times its size, in the same school
district, for meaningfully less money.`,
    money: `Wellington is the affordability play within Poudre School District. Expect
predominantly post-2000 subdivision stock, some older core housing, and prices
well below Fort Collins and Timnath.

The town has had well-documented water infrastructure constraints, which have
periodically affected building approvals and water taps. Ask specifically about
water service and any tap fees on new construction.`,
    sections: `## Where Wellington actually is

Fifteen minutes north of Fort Collins on I-25, at 5,194 feet — the highest of
the Northern Colorado plains towns, and noticeably windier for it. North of here
the towns stop until Cheyenne.

## What it is

A commuter town, honestly. There is a small old core, a growing set of
subdivisions, a brewery or two, and not much else — most shopping and eating
happens in Fort Collins. What Wellington sells is a Poudre School District
address and a short drive, at a price Fort Collins cannot match.

## Who Wellington is right for

Families priced out of Fort Collins who will not compromise on the school
district, and anyone whose work is in north Fort Collins. It is also one of the
few Front Range towns where a first-time buyer can still find a detached house
with a yard without going east into Weld.

It is a weaker fit if you commute to Denver, or if wind bothers you. It is a
genuinely windy town.`,
  },

  // ------------------------------------------------------------ Johnstown
  {
    slug: 'johnstown',
    name: 'Johnstown',
    region: 'northern-colorado',
    county: 'Larimer & Weld Counties',
    title: 'Johnstown, Colorado — the complete guide to living here',
    summary:
      'A fast-growing town on the I-25 corridor between Loveland and Longmont, straddling two counties and two school districts.',
    answer:
      'Johnstown is a Northern Colorado town of about 17,303 straddling the Larimer–Weld county line on the I-25 corridor. It has grown rapidly with new subdivision construction, and is split between Weld RE-5J and Thompson R2-J school districts depending on address.',
    tags: ['johnstown', 'northern-colorado', 'weld-county', 'growth', 'i-25'],
    geo: { lat: 40.3369, lng: -104.9122 },
    stats: ['population - 17,303', 'elevation - 4,994 ft', 'incorporated - 1907'],
    civic: {
      population: 17303,
      elevation: 4994,
      incorporated: 1907,
      area: 13.75,
      schoolDistricts: ['Weld RE-5J School District', 'Thompson R2-J (northwest portion)'],
      transit: ['I-25 corridor; no fixed-route transit'],
      drive: { denver: 48, boulder: 38, dia: 55 },
    },
    links: [
      { label: 'Town of Johnstown', url: 'https://www.johnstownco.gov/' },
      { label: 'Weld RE-5J School District', url: 'https://www.weldre5j.org/' },
    ],
    faq: [
      {
        q: 'What school district is Johnstown in?',
        a: 'Most of the town is Weld RE-5J; the north-western section falls in Thompson R2-J. Because the two districts test differently and boundaries follow neither the town line nor the county line, verify the assigned school for the exact address.',
      },
    ],
    sources: [census, { label: 'Town of Johnstown', url: 'https://www.johnstownco.gov/' }],
    lede: `Johnstown is one of the clearest examples of what the I-25 corridor has been
doing for twenty years: a farm town of a couple of thousand people that has
become a subdivision town of seventeen thousand, sitting almost exactly halfway
between Denver and Fort Collins.`,
    money: `Mostly Weld County, so mostly Weld County pricing — the June 2026 county
single-family median was $499,000 — with newer construction carrying the usual
premium and, frequently, metropolitan district mill levies on top of the base
tax. The 2534 development around the I-25 interchange is where much of the
commercial and newer residential growth has concentrated.`,
    sections: `## Where Johnstown actually is

On I-25 between Loveland and Longmont, straddling the Larimer–Weld line, with
Milliken immediately east. The interstate frontage is the town's economic
engine and the reason for its growth.

## The two-district problem

Johnstown is split between Weld RE-5J and Thompson R2-J. The districts perform
differently and the boundary follows neither the county line nor the town limits.
This is the single most common thing buyers get wrong here — confirm the assigned
elementary, middle and high school for the specific parcel, not the town.

## Who Johnstown is right for

Commuters who want to be genuinely central to the whole northern corridor, and
buyers who want new construction at Weld prices. It is a poor fit if you want an
established neighbourhood — most of Johnstown is younger than twenty years.`,
  },

  // ------------------------------------------------------------ Evans
  {
    slug: 'evans',
    name: 'Evans',
    region: 'northern-colorado',
    county: 'Weld County',
    title: 'Evans, Colorado — the complete guide to living here',
    summary:
      'Greeley’s southern neighbour, functionally continuous with it, and one of the most affordable entry points in Northern Colorado.',
    answer:
      'Evans is a Weld County city of about 22,165 immediately south of Greeley, with which it shares the Greeley-Evans School District 6. It is among the least expensive places to buy in Northern Colorado, and was significantly affected by the 2013 South Platte flood.',
    tags: ['evans', 'northern-colorado', 'weld-county', 'affordable'],
    geo: { lat: 40.3766, lng: -104.6919 },
    stats: ['population - 22,165', 'elevation - 4,747 ft', 'incorporated - 1869'],
    civic: {
      population: 22165,
      elevation: 4747,
      incorporated: 1869,
      schoolDistricts: ['Greeley-Evans School District 6'],
      transit: ['Greeley-Evans Transit'],
      drive: { denver: 58, boulder: 55, dia: 55 },
    },
    links: [
      { label: 'City of Evans', url: 'https://www.evanscolorado.gov/' },
      { label: 'Greeley-Evans School District 6', url: 'https://www.greeleyschools.org/' },
    ],
    faq: [
      {
        q: 'Is Evans the same as Greeley?',
        a: 'No — Evans is a separate city with its own government, though the two are physically continuous and share a school district. Most people experience the boundary as invisible.',
      },
      {
        q: 'Did the 2013 flood affect Evans?',
        a: 'Substantially. The South Platte flooding in September 2013 damaged or destroyed a significant number of homes in Evans, particularly in mobile home parks near the river. Check current FEMA mapping for any address in the low-lying south and east of the city.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Evans', url: 'https://www.evanscolorado.gov/' },
    ],
    lede: `Evans is where Greeley continues south without telling you. It is a separate
city with its own government and its own budget problems, sharing a school
district and a street grid with its much larger neighbour, and it is one of the
cheapest places to buy a house on the northern Front Range.`,
    money: `Evans consistently prices below Greeley, which itself prices below the Weld
County median of $499,000. This is the low end of Northern Colorado, and the
rental math works accordingly.

The flood history is the thing to underwrite carefully. The September 2013 South
Platte flood hit Evans hard, and both insurance availability and cost near the
river reflect it.`,
    sections: `## Where Evans actually is

Directly south of Greeley on US-85, at the lower end of the Greeley urban area
where the Cache la Poudre meets the South Platte. At 4,747 feet it is one of the
lowest points on the Colorado Front Range.

## The 2013 flood

In September 2013 the South Platte overtopped through Evans, destroying homes
and displacing hundreds of residents, with mobile home parks near the river worst
affected. The city's wastewater treatment plant was also destroyed. Recovery has
been slow and uneven, and it remains the dominant recent fact about the city.

Pull current FEMA mapping for anything in the south or east of Evans, and get a
flood insurance quote before you are emotionally committed to a house.

## Who Evans is right for

Buyers and investors who want the lowest entry price in Northern Colorado and
who will do the flood-zone homework properly. It is a weaker fit for anyone
wanting amenity, walkability or a school district with strong test scores.`,
  },

  // ------------------------------------------------------------ Milliken
  {
    slug: 'milliken',
    name: 'Milliken',
    region: 'northern-colorado',
    county: 'Weld County',
    title: 'Milliken, Colorado — the complete guide to living here',
    summary:
      'A small Weld County town on the Big Thompson that has grown steadily as the I-25 corridor filled in around it.',
    answer:
      'Milliken is a Weld County town of about 8,386 on the Big Thompson River between Johnstown and Greeley. It offers some of the lowest prices in Northern Colorado within reach of the I-25 corridor, on Weld RE-5J schools.',
    tags: ['milliken', 'northern-colorado', 'weld-county', 'affordable', 'small-town'],
    geo: { lat: 40.3286, lng: -104.8552 },
    stats: ['population - 8,386', 'elevation - 4,810 ft', 'incorporated - 1910'],
    civic: {
      population: 8386,
      elevation: 4810,
      incorporated: 1910,
      area: 12.81,
      schoolDistricts: ['Weld RE-5J School District'],
      transit: ['Driving town'],
      drive: { denver: 52, boulder: 45, dia: 55 },
    },
    links: [
      { label: 'Town of Milliken', url: 'https://www.millikenco.gov/' },
      { label: 'Weld RE-5J School District', url: 'https://www.weldre5j.org/' },
    ],
    faq: [
      {
        q: 'Is Milliken a good value in Northern Colorado?',
        a: 'It is among the least expensive incorporated towns within reasonable reach of the I-25 corridor, which is its main appeal. The trade-off is very limited local amenity — most errands happen in Johnstown, Greeley or Loveland.',
      },
    ],
    sources: [census, { label: 'Town of Milliken', url: 'https://www.millikenco.gov/' }],
    lede: `Milliken is a small Weld County farm town that has grown quietly alongside
Johnstown next door, adding subdivisions without acquiring much in the way of
commercial core. It is cheap, it is close enough to everything in Northern
Colorado, and it asks you to drive for most things.`,
    money: `Milliken is at the low end of the Weld County range — the county single-family
median was $499,000 in June 2026, and Milliken typically sits well beneath it.
For buyers who need a detached house with a yard and a sub-$450,000 number in
Northern Colorado, this is one of the short list of places to look.`,
    sections: `## Where Milliken actually is

On the Big Thompson River in southern Weld County, immediately east of
[Johnstown](/places/johnstown/) and about fifteen minutes from I-25. Greeley is
twenty minutes north-east, Loveland twenty-five minutes north-west.

## What is there

A modest old core, newer subdivisions on the edges, and a Weld RE-5J school
presence. Commercial amenity is thin — this is a town where the grocery run is a
drive.

## Who Milliken is right for

Value buyers and investors who want a yard and a garage in Northern Colorado
without a Larimer County price, and who are comfortable driving for everything
else.`,
  },

  // ------------------------------------------------------------ Severance
  {
    slug: 'severance',
    name: 'Severance',
    region: 'northern-colorado',
    county: 'Weld County',
    title: 'Severance, Colorado — the complete guide to living here',
    summary:
      'A tiny Weld County town that became a subdivision destination, best known for a sign about Rocky Mountain oysters and a genuinely fast growth rate.',
    answer:
      'Severance is a Weld County town of about 7,683 north-east of Windsor, which grew from a few hundred residents in 2000 through new subdivision construction. It sits in the Weld RE-4 school district alongside Windsor.',
    tags: ['severance', 'northern-colorado', 'weld-county', 'growth', 'new-construction'],
    geo: { lat: 40.5261, lng: -104.8516 },
    stats: ['population - 7,683', 'elevation - 4,876 ft', 'incorporated - 1920'],
    civic: {
      population: 7683,
      elevation: 4876,
      incorporated: 1920,
      area: 9.07,
      schoolDistricts: ['Weld RE-4 School District'],
      transit: ['Driving town'],
      drive: { denver: 65, boulder: 55, dia: 60 },
    },
    links: [
      { label: 'Town of Severance', url: 'https://www.townofseverance.org/' },
      { label: 'Weld RE-4 School District', url: 'https://www.weldre4.org/' },
    ],
    faq: [
      {
        q: 'What is Severance known for?',
        a: 'Historically, a town sign reading "Where the Geese Fly and the Bulls Cry" and a bar famous for Rocky Mountain oysters. More recently, for being one of the fastest-growing small towns in Weld County.',
      },
    ],
    sources: [census, { label: 'Town of Severance', url: 'https://www.townofseverance.org/' }],
    lede: `Severance had a few hundred people at the turn of the century and now has
nearly eight thousand, almost all of them in houses built since. It shares the
Weld RE-4 school district with [Windsor](/places/windsor/) next door, which is
most of the reason people choose it.`,
    money: `Almost entirely newer construction, priced below Windsor for comparable
houses, in the same well-regarded school district. Check for metropolitan
district mill levies — they are common in growth towns like this and can add
materially to the annual tax bill.`,
    sections: `## Where Severance actually is

North-east of Windsor in southern Weld County, about twenty-five minutes from
Fort Collins and twenty from Greeley. It is farm country giving way to
subdivisions, and the transition is still visibly in progress.

## Who Severance is right for

Families who want Weld RE-4 schools and new construction at a lower number than
Windsor, and who do not mind that the town's amenities are still mostly
theoretical. Everything beyond the basics is a drive to Windsor, Fort Collins or
Greeley.`,
  },

  // ------------------------------------------------------------ Eaton
  {
    slug: 'eaton',
    name: 'Eaton',
    region: 'northern-colorado',
    county: 'Weld County',
    title: 'Eaton, Colorado — the complete guide to living here',
    summary:
      'A genuine agricultural town north of Greeley with a strong small school district and almost no pretension.',
    answer:
      'Eaton is a Weld County town of about 5,802 north of Greeley, still primarily agricultural in character. It is known regionally for the Eaton RE-2 school district and offers small-town living at low Northern Colorado prices.',
    tags: ['eaton', 'northern-colorado', 'weld-county', 'small-town', 'agriculture'],
    geo: { lat: 40.5297, lng: -104.7119 },
    stats: ['population - 5,802', 'elevation - 4,839 ft', 'incorporated - 1892'],
    civic: {
      population: 5802,
      elevation: 4839,
      incorporated: 1892,
      schoolDistricts: ['Eaton School District RE-2'],
      transit: ['Driving town'],
      drive: { denver: 70, boulder: 65, dia: 60 },
    },
    links: [
      { label: 'Town of Eaton', url: 'https://www.eatonco.org/' },
      { label: 'Eaton School District RE-2', url: 'https://www.eaton.k12.co.us/' },
    ],
    faq: [
      {
        q: 'Why do families move to Eaton?',
        a: 'Almost always the school district. Eaton RE-2 is small, well regarded, and the alternative for families who want out of Greeley-Evans District 6 without paying Windsor or Fort Collins prices.',
      },
    ],
    sources: [census, { label: 'Town of Eaton', url: 'https://www.eatonco.org/' }],
    lede: `Eaton is a farm town ten minutes north of Greeley that has stayed a farm town,
and its main draw for buyers is a small school district with a strong local
reputation.`,
    money: `Low, by Northern Colorado standards — Eaton prices below Greeley for
comparable stock. The housing is a mix of genuine early-1900s town housing and
modest newer subdivisions on the edges.`,
    sections: `## Where Eaton actually is

Ten minutes north of Greeley on US-85, in the middle of irrigated farm country.
Fort Collins is thirty minutes west, Denver is over an hour.

## Who Eaton is right for

Families who want the Eaton RE-2 district and small-town scale, and buyers who
want the lowest prices in Northern Colorado outside of Greeley and Evans.

It is a weaker fit for anyone commuting to Denver or Boulder, and for anyone who
wants amenities within walking distance. This is agriculture first.`,
  },

  // ------------------------------------------------------------ Estes Park
  {
    slug: 'estes-park',
    name: 'Estes Park',
    region: 'northern-colorado',
    county: 'Larimer County',
    title: 'Estes Park, Colorado — the complete guide to living here',
    summary:
      'The eastern gateway to Rocky Mountain National Park. Spectacular, seasonal, and a genuinely difficult place to live year-round.',
    answer:
      'Estes Park is a Larimer County town of about 5,904 at 7,522 feet, serving as the eastern gateway to Rocky Mountain National Park. Its economy is dominated by tourism, housing costs are high relative to local wages, and winter access depends on canyon roads.',
    tags: ['estes-park', 'northern-colorado', 'larimer-county', 'mountain-town', 'tourism'],
    geo: { lat: 40.3772, lng: -105.5217 },
    stats: ['population - 5,904', 'elevation - 7,522 ft', 'to RMNP - 5 min'],
    civic: {
      population: 5904,
      elevation: 7522,
      incorporated: 1917,
      schoolDistricts: ['Estes Park School District R-3'],
      employers: ['Rocky Mountain National Park', 'The Stanley Hotel', 'Tourism and hospitality'],
      transit: ['Estes Transit (seasonal free shuttle)', 'Bustang to Estes seasonal service'],
      drive: { denver: 95, boulder: 65, dia: 110 },
    },
    links: [
      { label: 'Town of Estes Park', url: 'https://estespark.colorado.gov/' },
      { label: 'Rocky Mountain National Park', url: 'https://www.nps.gov/romo/index.htm' },
      { label: 'Estes Park School District R-3', url: 'https://www.estesschools.org/' },
    ],
    faq: [
      {
        q: 'Can you live in Estes Park year-round?',
        a: 'Yes, and about six thousand people do. The realities are a tourism economy with seasonal employment, limited healthcare, a single grocery store, and canyon roads that can close in winter storms or after flooding.',
      },
      {
        q: 'Do you need a reservation to enter Rocky Mountain National Park?',
        a: 'The park has operated timed-entry reservation systems during peak season in recent years. Check the National Park Service page for the current year’s system before planning around it.',
      },
    ],
    sources: [
      census,
      { label: 'Town of Estes Park', url: 'https://estespark.colorado.gov/' },
      { label: 'Rocky Mountain National Park', url: 'https://www.nps.gov/romo/index.htm' },
    ],
    lede: `Estes Park is the eastern door to Rocky Mountain National Park, and living
there is a genuinely different proposition from visiting. It is beautiful in a
way that does not wear off, and it is a small, seasonal, expensive town with one
grocery store and two roads out.`,
    money: `Estes Park prices are driven by second homes and short-term rental demand
rather than local wages, which produces the standard mountain-town squeeze: high
prices, limited inventory, and a workforce that struggles to live where it works.
Short-term rental licensing is capped and actively regulated — verify the current
rules and whether a licence conveys before underwriting any rental income.`,
    sections: `## Where Estes Park actually is

At 7,522 feet in a mountain valley, reached from Loveland up the Big Thompson
Canyon on US-34 or from Lyons on US-36. Both are canyon roads. Both have closed
in the past — the 2013 floods severed access entirely for a period, and the 1976
Big Thompson flood killed 144 people in the canyon below town.

## The seasonal reality

Summer brings enormous visitation to the national park, and the town's
population effectively multiplies. Winter is quiet, cold, and the elk are in
town. Employment follows the same curve, and a lot of local work is seasonal.

## What is genuinely difficult

One grocery store. Limited medical services, with anything serious meaning a
drive to Loveland or Longmont. Winter driving on canyon roads. And a housing
market that competes with buyers who do not need local income.

## Who Estes Park is right for

Retirees, remote workers with stable income, and people who will genuinely use
the park several times a week. It is a poor fit for anyone who needs a career
ladder locally, or who underestimates what a canyon commute is like in February.

If you want the mountains accessible but the practicalities easier, look at
[Loveland](/places/loveland/) or [Lyons](/places/lyons/) instead.`,
  },
]
