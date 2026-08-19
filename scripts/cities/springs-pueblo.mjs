import { SOURCES } from './_template.mjs'

const census = { ...SOURCES.census, retrieved: '2026-08-19' }

export const springsPueblo = [
  // ------------------------------------------------------------ Colorado Springs
  {
    slug: 'colorado-springs',
    priceLadder: [
      { label: 'Denver metro', value: 650000 },
      { label: 'Colorado statewide', value: 606500 },
      { label: 'Colorado Springs', value: 499900, self: true },
      { label: 'Pueblo County', value: 324000 },
    ],
    name: 'Colorado Springs',
    region: 'the-springs',
    county: 'El Paso County',
    featured: true,
    title: 'Colorado Springs, Colorado — the complete guide to living here',
    summary:
      'Colorado’s second-largest city, at the foot of Pikes Peak: five military installations, a $499,900 median, and the most affordable major city on the Front Range.',
    answer:
      'Colorado Springs is Colorado’s second-largest city, population about 478,961, at 6,035 feet below Pikes Peak. Its June 2026 single-family median was $499,900 — about $150,000 below Denver metro — and its economy is dominated by five military installations, including the US Air Force Academy and Fort Carson.',
    tags: ['colorado-springs', 'the-springs', 'el-paso-county', 'military', 'pikes-peak', 'value'],
    geo: { lat: 38.8339, lng: -104.8214 },
    stats: [
      'median - $499,900',
      'population - 478,961',
      'elevation - 6,035 ft',
      'months inventory - 3.3',
    ],
    civic: {
      population: 478961,
      elevation: 6035,
      incorporated: 1886,
      countySeat: true,
      area: 195.0,
      schoolDistricts: [
        'Colorado Springs School District 11',
        'Academy School District 20',
        'Harrison School District 2',
        'Falcon School District 49',
      ],
      employers: [
        'Fort Carson',
        'Peterson Space Force Base',
        'Schriever Space Force Base',
        'US Air Force Academy',
        'UCHealth Memorial Hospital',
        'Centura Penrose-St. Francis',
      ],
      transit: [
        'Mountain Metropolitan Transit city bus',
        'Bustang South Line to Denver and Pueblo',
        'Colorado Connector passenger rail — planned Phase 2 stop, targeted within five years of funding',
      ],
      drive: { denver: 70, dia: 95, springs: 0 },
      median: 499900,
      medianBasis: 'single-family, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Colorado Springs', url: 'https://coloradosprings.gov/' },
      { label: 'Academy School District 20', url: 'https://www.asd20.org/' },
      { label: 'Colorado Springs School District 11', url: 'https://www.d11.org/' },
      { label: 'Garden of the Gods', url: 'https://gardenofgods.com/' },
      { label: 'Pikes Peak — America’s Mountain', url: 'https://www.pikespeakcolorado.com/' },
    ],
    faq: [
      {
        q: 'How much does a house cost in Colorado Springs?',
        a: 'The single-family median was $499,900 in June 2026, flat year over year, with an average of $577,638. Homes took about 45 days to sell and inventory sat at 3.3 months — the most balanced major market on the Front Range.',
      },
      {
        q: 'Is Colorado Springs cheaper than Denver?',
        a: 'Substantially. The June 2026 median was $499,900 against $650,000 for the seven-county Denver metro — roughly a $150,000 difference, which is the single biggest reason people move south.',
      },
      {
        q: 'Did Space Command leave Colorado Springs?',
        a: 'Yes. In September 2025 the headquarters was ordered moved from Peterson Space Force Base to Redstone Arsenal in Huntsville, Alabama, affecting roughly 1,400 of about 1,700 positions. About half of headquarters personnel are expected to be in Alabama by the end of 2028. The city’s four other installations are unaffected.',
      },
      {
        q: 'What are the school districts in Colorado Springs?',
        a: 'Several, and they differ substantially. Academy District 20 in the north is the most sought after; District 11 covers the older central city; Harrison D2 serves the south-east and Falcon D49 the fast-growing east. The district boundary is one of the strongest price signals in the city.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Colorado Springs', url: 'https://coloradosprings.gov/' },
      {
        label: 'US Space Command headquarters relocation coverage',
        url: 'https://www.militarytimes.com/news/your-military/2026/03/27/us-space-command-provides-update-on-phased-headquarters-relocation-to-alabama/',
        retrieved: '2026-08-19',
      },
    ],
    lede: `Colorado Springs is the second-largest city in the state, sits a thousand feet
higher than Denver, and costs about $150,000 less for a house. It is a military
town, a tourist town and an evangelical headquarters town simultaneously, spread
across nearly 200 square miles at the foot of a fourteen-thousand-foot mountain.`,
    money: `The June 2026 single-family median was **$499,900**, flat year over year,
with an average of $577,638 — up 1.2%. Sales rose 2.7%, active listings were
4,039, and inventory stood at **3.3 months** with 45 days on market.

That inventory figure is the important one. Three months is close to a balanced
market — considerably more supply than Denver metro, which was down 18.6% year
over year. Buyers here have choice in a way buyers in Denver do not.

The gap to Denver metro's $650,000 is the whole story of why people move south,
and why the Springs has grown the way it has.`,
    sections: `## Where Colorado Springs actually is

Seventy miles south of Denver on I-25, at 6,035 feet — about 750 feet above
Denver — directly beneath Pikes Peak. The city sprawls across nearly 200 square
miles, from the Garden of the Gods on the west to the plains and Schriever on
the east.

The elevation matters more than people expect. Winters are comparable to
Denver's but the city is more exposed, and the western neighbourhoods against
the foothills sit higher still.

## The military is the economy

Five installations, and they define the city:

- **Fort Carson** — a large Army post south of the city, home to the 4th
  Infantry Division.
- **Peterson Space Force Base** — east of the city, adjacent to the airport.
- **Schriever Space Force Base** — further east on the plains, satellite
  operations.
- **Cheyenne Mountain Space Force Station** — the complex inside the mountain.
- **US Air Force Academy** — north of the city, a major institution and one of
  the most visited sites in Colorado.

**The Space Command change:** in September 2025 the US Space Command
headquarters was ordered to relocate from Peterson to Redstone Arsenal in
Huntsville, Alabama, reversing a 2023 decision to keep it in Colorado. The move
affects roughly 1,400 of about 1,700 positions, phased over several years, with
about half of headquarters personnel expected in Alabama by the end of 2028.
Colorado's congressional delegation objected and raised the possibility of legal
challenge.

For a buyer, the practical read: this is a real economic headwind for a specific
slice of the local market, not a threat to the city's overall military base. The
other four installations are unaffected and much larger in aggregate.

## The parts of the city

**Old Colorado City and the west side** is the oldest part — 1880s–1920s
housing, a walkable commercial strip, and the closest access to Garden of the
Gods.

**Downtown and the Near North End** has the grandest historic housing, and
downtown has genuinely improved over the last decade.

**Broadmoor and the south-west** is the top of the market: the resort, the
foothills, and the most expensive addresses in the region.

**Briargate and the north (District 20)** is the newer, more affluent suburban
growth with the most sought-after schools.

**Fountain Valley and the south-east** is the most affordable, closest to Fort
Carson, and where a lot of military families buy.

**Falcon and the eastern plains (District 49)** is the fastest-growing and the
cheapest per square foot, with the longest commutes and the least tree cover.

## Water, wind and wildfire

Colorado Springs is drier and windier than Denver, and the wildland-urban
interface on the west side is a genuine risk area. The Waldo Canyon Fire in 2012
destroyed 346 homes and the Black Forest Fire in 2013 destroyed more than 500 —
both within the metro area.

Ask about insurance availability and cost before contracting on anything on the
west side or in Black Forest.

## Short-term rentals

The city permits short-term rentals under licence, but non-owner-occupied units
face density limits by zone and a separation requirement. We wrote it up in
detail: [is a short-term rental still legal in Colorado
Springs?](/investing/short-term-rental-colorado-springs/)

## Who Colorado Springs is right for

Military families and contractors, remote workers who want a major city at a
lower price, retirees, and anyone whose priority is mountain access with a
functioning urban economy attached. The value against Denver is real.

It is a weaker fit for anyone who needs to be in Denver regularly — seventy
miles is a genuine barrier — or who wants the density and transit of a larger
city. Colorado Springs is spread out and car-dependent.`,
  },

  // ------------------------------------------------------------ Monument
  {
    slug: 'monument',
    name: 'Monument',
    region: 'the-springs',
    county: 'El Paso County',
    title: 'Monument, Colorado — the complete guide to living here',
    summary:
      'A town on the Palmer Divide at nearly 7,000 feet, with the region’s most sought-after small school district and the snowiest commute on the Front Range.',
    answer:
      'Monument is an El Paso County town of about 10,399 at 6,982 feet on the Palmer Divide, between Colorado Springs and Castle Rock. It is served by the well-regarded Lewis-Palmer School District 38 and receives notably more snow than either city because of its elevation.',
    tags: ['monument', 'the-springs', 'el-paso-county', 'schools', 'palmer-divide'],
    geo: { lat: 39.0917, lng: -104.8722 },
    stats: [
      'population - 10,399',
      'elevation - 6,982 ft',
      'incorporated - 1879',
      'to the Springs - 25 min',
    ],
    civic: {
      population: 10399,
      elevation: 6982,
      incorporated: 1879,
      area: 6.86,
      schoolDistricts: ['Lewis-Palmer School District 38'],
      transit: ['I-25 corridor; no fixed-route transit'],
      drive: { denver: 50, dia: 70, springs: 25 },
    },
    links: [
      { label: 'Town of Monument', url: 'https://www.townofmonument.org/' },
      { label: 'Lewis-Palmer School District 38', url: 'https://www.lewispalmer.org/' },
    ],
    faq: [
      {
        q: 'Why does Monument get so much snow?',
        a: 'It sits on the Palmer Divide at nearly 7,000 feet — the ridge between the South Platte and Arkansas river basins. Upslope storms drop substantially more snow here than in either Denver or Colorado Springs, and I-25 over the divide is regularly the worst stretch on the corridor.',
      },
      {
        q: 'Is Lewis-Palmer a good school district?',
        a: 'It is among the most sought-after districts in the Colorado Springs region and a primary reason families choose Monument over closer-in alternatives.',
      },
    ],
    sources: [census, { label: 'Town of Monument', url: 'https://www.townofmonument.org/' }],
    lede: `Monument sits on top of the Palmer Divide at nearly 7,000 feet, which gives it
two defining characteristics: an excellent small school district that families
move for, and considerably more snow than anywhere else on the I-25 corridor.`,
    money: `Monument prices above the Colorado Springs median of $499,900, driven by the
Lewis-Palmer school district and larger lots. Much of the surrounding area is
unincorporated El Paso County on wells and septic — verify water supply and
system condition on anything outside town limits.`,
    sections: `## Where Monument actually is

On I-25 at the top of the Palmer Divide, twenty-five minutes north of Colorado
Springs and about fifty minutes south of Denver, at 6,982 feet.

## The Palmer Divide

The divide is the ridge separating the South Platte and Arkansas watersheds, and
it makes its own weather. Upslope storms stall against it, and Monument
regularly records far more snow than Denver or Colorado Springs from the same
system. The I-25 stretch over the divide — the "Monument Hill" grade — is the
most frequently closed section of the corridor in winter.

If you commute over it, buy for that reality: winter tyres, and a job that
tolerates the occasional impossible morning.

## Who Monument is right for

Families targeting Lewis-Palmer schools, buyers who want pines and space with
Colorado Springs access, and people who genuinely like snow. It is a weaker fit
if the winter commute would be a daily obligation you resent.`,
  },

  // ------------------------------------------------------------ Fountain
  {
    slug: 'fountain',
    name: 'Fountain',
    region: 'the-springs',
    county: 'El Paso County',
    title: 'Fountain, Colorado — the complete guide to living here',
    summary:
      'Colorado Springs’ southern neighbour, next to Fort Carson, and the most affordable incorporated city in the Pikes Peak region.',
    answer:
      'Fountain is an El Paso County city of about 29,802 immediately south of Colorado Springs and adjacent to Fort Carson. It is among the most affordable incorporated cities in the region and has a large military population, served by Fountain-Fort Carson School District 8.',
    tags: ['fountain', 'the-springs', 'el-paso-county', 'military', 'affordable'],
    geo: { lat: 38.6822, lng: -104.7005 },
    stats: [
      'population - 29,802',
      'region median - $499,900',
      'incorporated - 1903',
      'to the Springs - 20 min',
    ],
    civic: {
      population: 29802,
      incorporated: 1903,
      schoolDistricts: ['Fountain-Fort Carson School District 8'],
      employers: ['Fort Carson', 'Logistics and distribution'],
      transit: ['Mountain Metropolitan Transit connections'],
      drive: { denver: 85, dia: 105, springs: 20 },
    },
    links: [
      { label: 'City of Fountain', url: 'https://www.fountaincolorado.org/' },
      { label: 'Fountain-Fort Carson School District 8', url: 'https://www.ffc8.org/' },
    ],
    faq: [
      {
        q: 'Is Fountain a good place for military families?',
        a: 'It is the closest incorporated city to Fort Carson and has a large military population, with housing priced well below the regional median and a school district accustomed to high family turnover.',
      },
      {
        q: 'What should I know about water in Fountain?',
        a: 'Fountain and the surrounding Security-Widefield area had PFAS contamination in groundwater linked to firefighting foam used at Peterson Space Force Base. Utilities have installed treatment, but it is worth asking your water provider directly about current testing.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'City of Fountain', url: 'https://www.fountaincolorado.org/' },
    ],
    lede: `Fountain sits immediately south of Colorado Springs next to Fort Carson, and
it is where a great many soldiers and their families buy their first house. It
is the most affordable incorporated city in the Pikes Peak region.`,
    money: `Well below the Colorado Springs median of $499,900. Turnover is high because
of the military population, which means steady rental demand and a reliable
supply of transactions — investors pay attention to this market for that reason.`,
    sections: `## Where Fountain actually is

Twenty minutes south of Colorado Springs on I-25 and US-85, adjacent to Fort
Carson.

## The PFAS issue

Groundwater in the Fountain, Security and Widefield area was contaminated with
PFAS chemicals traced to firefighting foam used at Peterson. Water providers
have installed treatment systems and switched sources, but this is a documented
issue with an ongoing monitoring history. Ask your specific provider about
current results rather than relying on general reassurance.

## Who Fountain is right for

Military families, first-time buyers, and investors seeking yield near a large
and stable employer. It is a weaker fit for anyone wanting proximity to the
mountains or the amenity of the Springs' west side.`,
  },

  // ------------------------------------------------------------ Security-Widefield
  {
    slug: 'security-widefield',
    name: 'Security-Widefield',
    region: 'the-springs',
    county: 'El Paso County',
    title: 'Security-Widefield, Colorado — the complete guide to living here',
    summary:
      'An unincorporated community of nearly 39,000 between Colorado Springs and Fountain, built around Fort Carson and among the region’s most affordable.',
    answer:
      'Security-Widefield is an unincorporated El Paso County community of about 38,639 between Colorado Springs and Fountain. It has a large military population tied to Fort Carson, is served by Widefield School District 3, and offers some of the lowest housing costs in the Pikes Peak region.',
    tags: ['security-widefield', 'the-springs', 'el-paso-county', 'military', 'affordable'],
    geo: { lat: 38.7486, lng: -104.7141 },
    stats: [
      'population - 38,639',
      'elevation - 5,847 ft',
      'unincorporated',
      'to the Springs - 15 min',
    ],
    civic: {
      population: 38639,
      elevation: 5847,
      area: 12.99,
      schoolDistricts: ['Widefield School District 3'],
      employers: ['Fort Carson', 'Peterson Space Force Base'],
      transit: ['Mountain Metropolitan Transit connections'],
      drive: { denver: 80, dia: 100, springs: 15 },
    },
    links: [
      { label: 'El Paso County', url: 'https://www.elpasoco.com/' },
      { label: 'Widefield School District 3', url: 'https://www.wsd3.org/' },
    ],
    faq: [
      {
        q: 'Is Security-Widefield a city?',
        a: 'No — it is an unincorporated census-designated place governed by El Paso County, made up of the adjacent Security and Widefield communities.',
      },
      {
        q: 'Was Security-Widefield affected by PFAS contamination?',
        a: 'Yes. It was one of the communities where PFAS was found in groundwater, traced to firefighting foam used at Peterson Space Force Base. Treatment has been installed; ask the water district for current testing data.',
      },
    ],
    sources: [census, { label: 'El Paso County', url: 'https://www.elpasoco.com/' }],
    lede: `Security and Widefield are two adjacent unincorporated communities that
function as one place of nearly forty thousand people, built largely around Fort
Carson employment, and among the least expensive housing in the region.`,
    money: `Among the lowest prices in the Pikes Peak region, well under the Colorado
Springs median of $499,900. Strong rental demand from the military population.
Do the PFAS due diligence with the specific water district.`,
    sections: `## Where Security-Widefield actually is

Between Colorado Springs and Fountain along US-85 and I-25, fifteen minutes from
central Colorado Springs.

## Who it is right for

Military families and value buyers, and investors looking for the strongest
rent-to-price ratios in the region. It is a weaker fit for anyone prioritising
schools or amenity over price.`,
  },

  // ------------------------------------------------------------ Manitou Springs
  {
    slug: 'manitou-springs',
    name: 'Manitou Springs',
    region: 'the-springs',
    county: 'El Paso County',
    title: 'Manitou Springs, Colorado — the complete guide to living here',
    summary:
      'A Victorian spa town in a narrow canyon at the foot of Pikes Peak, with mineral springs, the Incline, and a tourism economy that never really pauses.',
    answer:
      'Manitou Springs is an El Paso County town of about 4,858 at 6,306 feet in a canyon at the base of Pikes Peak. Founded as a Victorian mineral springs resort, it retains a historic district, free public mineral springs, and hosts the Manitou Incline and the Pikes Peak Cog Railway.',
    tags: ['manitou-springs', 'the-springs', 'el-paso-county', 'tourism', 'historic', 'pikes-peak'],
    geo: { lat: 38.8597, lng: -104.9172 },
    stats: [
      'population - 4,858',
      'elevation - 6,306 ft',
      'incorporated - 1888',
      'to the Springs - 10 min',
    ],
    civic: {
      population: 4858,
      elevation: 6306,
      incorporated: 1888,
      area: 3.15,
      schoolDistricts: ['Manitou Springs School District 14'],
      employers: ['Tourism and hospitality', 'Pikes Peak Cog Railway'],
      transit: ['Mountain Metropolitan Transit; seasonal Incline shuttle'],
      drive: { denver: 80, dia: 100, springs: 10 },
    },
    links: [
      { label: 'City of Manitou Springs', url: 'https://www.manitouspringsgov.com/' },
      { label: 'Manitou Springs School District 14', url: 'https://www.mssd14.org/' },
      { label: 'Pikes Peak Cog Railway', url: 'https://www.cograilway.com/' },
    ],
    faq: [
      {
        q: 'What is the Manitou Incline?',
        a: 'A former cable railway bed converted to a public trail, rising roughly 2,000 feet in under a mile on old railroad ties. It is one of the most popular and punishing hikes in Colorado, and requires a free reservation.',
      },
      {
        q: 'Are the mineral springs free?',
        a: 'Yes. Manitou has a series of public mineral springs fountains around town, free to drink from, each with a different mineral profile. They are the reason the town exists.',
      },
      {
        q: 'What are the risks of buying in Manitou Springs?',
        a: 'Flash flooding and wildfire. The town sits in a narrow canyon and the 2012 Waldo Canyon Fire burn scar above it caused serious debris flows and flash floods in 2013. Check flood mapping and mitigation history for any address.',
      },
    ],
    sources: [
      census,
      { label: 'City of Manitou Springs', url: 'https://www.manitouspringsgov.com/' },
    ],
    lede: `Manitou Springs is a Victorian spa town squeezed into a canyon at the foot of
Pikes Peak, with free mineral springs on the street corners, a cog railway to
the summit, and about five thousand residents hosting several million visitors a
year.`,
    money: `Limited inventory, historic housing on steep lots, and short-term rental
demand competing with owner-occupiers. Manitou regulates short-term rentals, so
verify current rules and whether a licence transfers before underwriting rental
income.

Flood and wildfire are the material risks. The Waldo Canyon burn scar above town
produced destructive debris flows in 2013, and mitigation work has been ongoing
since.`,
    sections: `## Where Manitou Springs actually is

In Fountain Creek canyon immediately west of Colorado Springs at 6,306 feet, at
the base of Pikes Peak. Central Colorado Springs is ten minutes east.

## The springs, the Incline and the cog

The **mineral springs** are free, public, and scattered through town. The **Manitou
Incline** climbs about 2,000 feet in under a mile on the bed of a former cable
railway and requires a reservation. The **Pikes Peak Cog Railway** runs from town
to the 14,115-foot summit.

Together they mean Manitou is busy, essentially always. That is the amenity and
the cost of living there.

## Who Manitou Springs is right for

People who want a genuinely historic walkable town at the base of a fourteener
and who are unbothered by tourists. It is a weaker fit for anyone who wants
quiet, parking, or a straightforward flood and fire risk profile.`,
  },

  // ------------------------------------------------------------ Palmer Lake
  {
    slug: 'palmer-lake',
    name: 'Palmer Lake',
    region: 'the-springs',
    county: 'El Paso County',
    title: 'Palmer Lake, Colorado — the complete guide to living here',
    summary:
      'A small town at the top of the Palmer Divide with a lake, a hillside star, and the Lewis-Palmer school district.',
    answer:
      'Palmer Lake is a small El Paso County town at the crest of the Palmer Divide, north of Monument. It is known for its namesake lake, a large illuminated hillside star, and access to the Santa Fe Regional Trail, and is served by Lewis-Palmer School District 38.',
    tags: ['palmer-lake', 'the-springs', 'el-paso-county', 'small-town', 'palmer-divide'],
    geo: { lat: 39.1219, lng: -104.9169 },
    stats: [
      'incorporated - 1889',
      'Lewis-Palmer schools',
      'to the Springs - 30 min',
      'to Denver - 45 min',
    ],
    civic: {
      incorporated: 1889,
      schoolDistricts: ['Lewis-Palmer School District 38'],
      transit: ['I-25 corridor; no fixed-route transit'],
      drive: { denver: 45, dia: 65, springs: 30 },
    },
    links: [
      { label: 'Town of Palmer Lake', url: 'https://www.townofpalmerlake.com/' },
      { label: 'Lewis-Palmer School District 38', url: 'https://www.lewispalmer.org/' },
    ],
    faq: [
      {
        q: 'What is the Palmer Lake star?',
        a: 'A large illuminated star on the hillside above town, lit each winter since the 1930s and visible from I-25 for miles. It is the town’s defining landmark.',
      },
    ],
    sources: [census, { label: 'Town of Palmer Lake', url: 'https://www.townofpalmerlake.com/' }],
    lede: `Palmer Lake is a small town at the very top of the Palmer Divide with a lake,
a hillside star that has been lit each winter since the 1930s, and the same
well-regarded school district as Monument next door.`,
    money: `Small inventory and limited turnover. Like Monument, it sits high enough that
snow and winter access are genuine considerations, and much of the surrounding
area is unincorporated county on wells and septic.`,
    sections: `## Where Palmer Lake actually is

At the crest of the Palmer Divide just north of [Monument](/places/monument/),
about thirty minutes from Colorado Springs and forty-five from Denver.

## Who Palmer Lake is right for

Buyers who want a small mountain-adjacent town with Lewis-Palmer schools and do
not need a wide housing selection. The Santa Fe Regional Trail and the reservoir
trails are immediately accessible.`,
  },

  // ------------------------------------------------------------ Woodland Park
  {
    slug: 'woodland-park',
    name: 'Woodland Park',
    region: 'the-springs',
    county: 'Teller County',
    title: 'Woodland Park, Colorado — the complete guide to living here',
    summary:
      'The "City Above the Clouds" at 8,481 feet, half an hour up Ute Pass from Colorado Springs, and the most practical genuine mountain town in the region.',
    answer:
      'Woodland Park is a Teller County city of about 7,920 at 8,481 feet, roughly 30 minutes west of Colorado Springs up Ute Pass. It is the most accessible mountain town in the Pikes Peak region, with its own school district and full services.',
    tags: ['woodland-park', 'teller-county', 'mountain-town', 'altitude', 'pikes-peak'],
    geo: { lat: 39.0028, lng: -105.0569 },
    stats: [
      'population - 7,920',
      'elevation - 8,481 ft',
      'incorporated - 1891',
      'to the Springs - 30 min',
    ],
    civic: {
      population: 7920,
      elevation: 8481,
      incorporated: 1891,
      area: 6.61,
      schoolDistricts: ['Woodland Park School District RE-2'],
      employers: ['Tourism and hospitality', 'Teller County government', 'Local services'],
      transit: ['US-24 over Ute Pass; no fixed-route transit'],
      drive: { denver: 90, dia: 110, springs: 30 },
    },
    links: [
      { label: 'City of Woodland Park', url: 'https://www.city-woodlandpark.org/' },
      { label: 'Woodland Park School District RE-2', url: 'https://www.wpsdk12.org/' },
      { label: 'Teller County', url: 'https://www.tellercountyco.gov/' },
    ],
    faq: [
      {
        q: 'Can you commute from Woodland Park to Colorado Springs?',
        a: 'Yes — about 30 minutes down US-24 through Ute Pass in good conditions, and many residents do. Winter storms and the occasional closure are the trade-off, and the descent is steep.',
      },
      {
        q: 'How does living at 8,481 feet compare to Denver?',
        a: 'It is more than 3,000 feet higher. Expect longer winters, a much shorter growing season, more snow, and a genuine adjustment period for new arrivals — considerably more than Denver’s mile.',
      },
    ],
    sources: [
      census,
      { label: 'City of Woodland Park', url: 'https://www.city-woodlandpark.org/' },
    ],
    lede: `Woodland Park calls itself the City Above the Clouds and at 8,481 feet it has
a reasonable claim. It sits half an hour up Ute Pass from Colorado Springs, which
makes it the most practical genuine mountain town on the southern Front Range —
full services, its own school district, and a real commute.`,
    money: `Mountain pricing with proper town services, generally around or below the
Colorado Springs median depending on the property. The specific due diligence is
mountain due diligence: wildfire insurance availability, well and septic
condition, road access and plowing, and the age of the heating system.`,
    sections: `## Where Woodland Park actually is

Thirty minutes west of Colorado Springs up US-24 through Ute Pass, at 8,481
feet, on the north-west side of Pikes Peak in Teller County.

## What 8,481 feet means

This is real altitude — more than 3,000 feet above Denver. Winter runs from
October into May, the growing season is very short, and newcomers take longer to
adjust than they would in the metro. Snow tyres are not optional.

## Who Woodland Park is right for

People who want genuine mountain living with a functioning town attached and a
commutable drive to a real city. It is one of the few places that offers all
three.

It is a weaker fit for anyone who has not lived at altitude, or who would find
the pass drive in winter a recurring problem.`,
  },

  // ------------------------------------------------------------ Pueblo
  {
    slug: 'pueblo',
    priceLadder: [
      { label: 'Denver metro', value: 650000 },
      { label: 'Colorado statewide', value: 606500 },
      { label: 'Colorado Springs', value: 499900 },
      { label: 'Pueblo County', value: 324000, self: true },
    ],
    name: 'Pueblo',
    region: 'pueblo',
    county: 'Pueblo County',
    featured: true,
    title: 'Pueblo, Colorado — the complete guide to living here',
    summary:
      'The steel city at the southern end of the corridor, with the cheapest housing on the Front Range, the best green chile argument in the state, and a genuinely different feel.',
    answer:
      'Pueblo is a Pueblo County city of about 111,876 at the southern end of the Front Range corridor, historically built on steel. Pueblo County’s June 2026 median sale price was $324,000 — by far the lowest on the Front Range — with 5.1 months of inventory and 96 days on market.',
    tags: ['pueblo', 'affordable', 'steel', 'green-chile', 'southern-colorado', 'investing'],
    geo: { lat: 38.2545, lng: -104.6091 },
    stats: [
      'county median - $324K',
      'population - 111,876',
      'elevation - 4,692 ft',
      'months inventory - 5.1',
    ],
    civic: {
      population: 111876,
      elevation: 4692,
      incorporated: 1885,
      countySeat: true,
      area: 54.0,
      schoolDistricts: ['Pueblo City Schools District 60', 'Pueblo County School District 70'],
      employers: [
        'Evraz Rocky Mountain Steel',
        'Colorado State University Pueblo',
        'Parkview Health System',
        'Vestas wind tower manufacturing',
      ],
      transit: [
        'Pueblo Transit city bus',
        'Bustang South Line to Colorado Springs and Denver',
        'Colorado Connector passenger rail — planned southern terminus, targeted by 2032',
      ],
      drive: { denver: 110, dia: 130, springs: 45 },
      median: 324000,
      medianBasis: 'Pueblo County, June 2026 (CAR)',
    },
    links: [
      { label: 'City of Pueblo', url: 'https://www.pueblo.us/' },
      { label: 'Pueblo City Schools District 60', url: 'https://www.pueblocityschools.us/' },
      { label: 'Colorado State University Pueblo', url: 'https://www.csupueblo.edu/' },
      { label: 'Historic Arkansas Riverwalk of Pueblo', url: 'https://www.puebloharp.com/' },
    ],
    faq: [
      {
        q: 'How much does a house cost in Pueblo?',
        a: 'Pueblo County’s median sale price was $324,000 in June 2026, up 1.3% year over year, with an average of $333,140. That is roughly half the Denver metro median and the lowest of any sizeable market on the Front Range.',
      },
      {
        q: 'Is Pueblo a good investment market?',
        a: 'The gross yields are the highest on the Front Range, but so is the risk: 96 days on market, 5.1 months of inventory, and new listings down 19.9% year over year. Underwrite it for cash flow and a slow exit, not for appreciation. We compared it directly with Longmont.',
      },
      {
        q: 'What is Pueblo chile?',
        a: 'The Mirasol pepper, grown in the Arkansas Valley around Pueblo. It is thicker-walled and hotter than the New Mexico varieties grown around Hatch, and the rivalry between the two is a genuine and unresolved regional argument.',
      },
      {
        q: 'How far is Pueblo from Denver?',
        a: 'About 110 miles, roughly a two-hour drive down I-25, with Colorado Springs 45 minutes north. Pueblo is planned as the southern terminus of the Colorado Connector passenger rail, targeted for full service by 2032.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      SOURCES.connector,
      { label: 'City of Pueblo', url: 'https://www.pueblo.us/' },
    ],
    lede: `Pueblo is the southern anchor of the Front Range corridor and the only city on
it that feels genuinely like somewhere else — older, hotter, more Hispanic, more
industrial, and about half the price of everything to the north. It was built on
steel and it has spent forty years working out what comes after.`,
    money: `Pueblo County's median sale price was **$324,000** in June 2026, up 1.3% year
over year, with an average of $333,140. That is roughly **half** the Denver metro
median of $650,000.

The rest of the June figures explain why. Days on market: **96**. Months of
inventory: **5.1**. Sellers received 97.6% of list. New listings were down 19.9%
and sold listings down 7.7% year over year.

This is a slow market with cheap houses. For an owner-occupier that means time to
think and room to negotiate. For an investor it means the highest gross yields on
the Front Range paired with a genuinely slow exit — which is exactly the trade we
laid out in [buy in Longmont or in
Pueblo?](/investing/longmont-vs-pueblo/)`,
    sections: `## Where Pueblo actually is

At the confluence of the Arkansas River and Fountain Creek, 110 miles south of
Denver and 45 south of Colorado Springs, at 4,692 feet — the lowest elevation of
any major Front Range city. It is hotter in summer and milder in winter than
anywhere to the north.

## The steel city

Colorado Fuel and Iron built the largest steel mill west of the Mississippi
here, and at its peak it employed tens of thousands. The mill still operates as
Evraz Rocky Mountain Steel, producing rail and seamless pipe, and a large new
rail mill was built in recent years. But the employment base is a fraction of
what it was, and the century-long adjustment defines the city's economics,
politics and housing stock.

## What that means for houses

Pueblo has a large stock of solid, early-twentieth-century working-class
housing — brick bungalows, foursquares, and some genuinely grand Victorian
housing on the north side — at prices that would be inconceivable in Denver.

It also has deferred maintenance, older systems, and neighbourhoods where values
have not moved much in a long time. The variance between blocks is wider here
than anywhere else on the corridor.

## The neighbourhoods

**The North Side and Mesa Junction** hold the historic housing and the best of
the architecture.

**Downtown and the Riverwalk** — the Historic Arkansas Riverwalk of Pueblo
reopened a channel of the river through downtown and is the centre of the city's
revitalisation effort.

**Bessemer**, south and east, is the old mill neighbourhood — closest to the
plant, cheapest, and where the city's Italian, Slovenian and Mexican immigrant
history is most visible.

**Belmont and the university area** is mid-century and convenient to CSU Pueblo.

**[Pueblo West](/places/pueblo-west/)** is the large unincorporated community to
the west, which is a different market entirely.

## The chile

Pueblo chile is the Mirasol, grown in the Arkansas Valley, and it is a different
pepper from the New Mexico varieties grown in Hatch — thicker-walled, and not
shy. September is roasting season and the whole city smells like it.

We ranked it, carefully: [best green chile, no
debate?](/answers/best-green-chile/)

## Who Pueblo is right for

Buyers who want an actual house for under $350,000, retirees, remote workers
willing to be two hours from Denver, and cash-flow investors who have priced the
slow exit honestly. CSU Pueblo and Parkview provide a stable employment floor.

It is a weaker fit if you need Denver regularly, if you are underwriting for
appreciation, or if you want the amenity density of the northern corridor.`,
  },

  // ------------------------------------------------------------ Pueblo West
  {
    slug: 'pueblo-west',
    name: 'Pueblo West',
    region: 'pueblo',
    county: 'Pueblo County',
    title: 'Pueblo West, Colorado — the complete guide to living here',
    summary:
      'A 50-square-mile unincorporated community west of Pueblo, built on large lots with a different school district and a very different feel from the city.',
    answer:
      'Pueblo West is an unincorporated Pueblo County community of about 33,086 covering nearly 50 square miles west of Pueblo. It is characterised by large lots and low density, served by Pueblo County School District 70, and is generally newer and more expensive than the city of Pueblo.',
    tags: ['pueblo-west', 'pueblo', 'large-lots', 'unincorporated', 'affordable'],
    geo: { lat: 38.3494, lng: -104.7222 },
    stats: ['population - 33,086', 'elevation - 5,033 ft', 'area - 49.7 sq mi', 'unincorporated'],
    civic: {
      population: 33086,
      elevation: 5033,
      area: 49.69,
      schoolDistricts: ['Pueblo County School District 70'],
      transit: ['No fixed-route transit; driving community'],
      drive: { denver: 115, dia: 135, springs: 45 },
      median: 324000,
      medianBasis: 'Pueblo County, June 2026 (CAR)',
    },
    links: [
      { label: 'Pueblo West Metropolitan District', url: 'https://www.pueblowestmetro.com/' },
      { label: 'Pueblo County School District 70', url: 'https://www.district70.org/' },
      {
        label: 'Lake Pueblo State Park',
        url: 'https://cpw.state.co.us/placestogo/parks/LakePueblo',
      },
    ],
    faq: [
      {
        q: 'Is Pueblo West part of Pueblo?',
        a: 'No. It is a separate unincorporated community governed by Pueblo County and the Pueblo West Metropolitan District, with its own school district — District 70 rather than the city’s District 60.',
      },
      {
        q: 'Why are the lots so big in Pueblo West?',
        a: 'It was platted in the 1960s as a large-lot development on former ranch land, and the low-density pattern was never redeveloped. One-acre and larger parcels are common.',
      },
    ],
    sources: [
      census,
      SOURCES.car,
      { label: 'Pueblo West Metropolitan District', url: 'https://www.pueblowestmetro.com/' },
    ],
    lede: `Pueblo West is nearly fifty square miles of large-lot development west of
Pueblo, laid out in the 1960s and never densified. It has its own school
district, its own metro district, and about as much in common with the city of
Pueblo as any suburb has with its city — which is to say, less than the name
suggests.`,
    money: `Generally above the city of Pueblo but still well below the Front Range
average, with Pueblo County's June 2026 median at $324,000. What the money buys
here is land — an acre is unremarkable.

Verify water and septic. Much of Pueblo West is on district water but septic
systems are common, and lot size means well and septic questions come up often.`,
    sections: `## Where Pueblo West actually is

Immediately west of Pueblo along US-50, next to Lake Pueblo State Park, at 5,033
feet. Colorado Springs is forty-five minutes north.

## Lake Pueblo

Lake Pueblo State Park is on the doorstep — one of Colorado's largest reservoirs,
with boating, fishing and a long season thanks to the mild southern climate. It
is the single biggest amenity in the area.

## Who Pueblo West is right for

Buyers who want acreage, a garage or shop, and District 70 schools at a price
that does not exist further north. Retirees and remote workers do well here.

It is a weaker fit for anyone who wants walkability or short commutes — Pueblo
West is spread out and entirely car-dependent.`,
  },
]
