import { SRC } from './_template.mjs'

const base = { city: 'denver', cityName: 'Denver', sector: 'East Denver' }
const ne = { city: 'denver', cityName: 'Denver', sector: 'Northeast Denver' }
const src = [SRC.denverNbhd, SRC.car]

const denverLink = { label: 'City and County of Denver', url: 'https://www.denvergov.org/' }
const dpsLink = { label: 'Denver Public Schools', url: 'https://www.dpsk12.org/' }

export const denverEast = [
  {
    ...base,
    slug: 'park-hill',
    name: 'Park Hill',
    title: 'Park Hill, Denver — a neighborhood guide',
    summary:
      'The central section of Denver’s best-known east-side area, and the one that gives its name to all four Park Hill neighborhoods.',
    answer:
      'Park Hill is a Denver neighborhood on the city’s east side, and one of four official neighborhoods carrying the name alongside North, Northeast and South Park Hill. It is characterised by 1920s–1950s brick housing on wide, tree-lined streets.',
    tags: ['park-hill', 'denver', 'family', 'brick', 'trees'],
    bounds: 'Colorado Boulevard to Quebec Street, between North and South Park Hill',
    housing: ['1920s–1950s brick bungalows, Tudors and ranches'],
    stats: ['to downtown - 15 min', 'wide parkway streets', 'tenure - majority owner'],
    parks: 'City Park nearby, neighborhood parks',
    geo: { lat: 39.7561, lng: -104.9264 },
    links: [
      denverLink,
      { label: 'Greater Park Hill Community', url: 'https://greaterparkhill.org/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'How many Park Hill neighborhoods are there in Denver?',
        a: 'Four official ones: Park Hill, North Park Hill, Northeast Park Hill and South Park Hill. Locals usually just say "Park Hill" for the whole area, which is why the distinction confuses buyers.',
      },
      {
        q: 'Which Park Hill is the most expensive?',
        a: 'South Park Hill, generally — it has the largest houses and the closest City Park access. Prices step down heading north and north-east.',
      },
    ],
    sources: src,
    lede: `Park Hill is the middle of the four neighborhoods that share the name, and in
practice most people use "Park Hill" for all of them. Wide streets, mature
trees, brick houses, and a civic culture that is unusually strong for a Denver
neighborhood.`,
    sections: `## The four Park Hills

This trips up nearly every buyer. Denver has four official neighborhoods with
Park Hill in the name:

- **[South Park Hill](/neighborhoods/denver/south-park-hill/)** — largest houses,
  closest to City Park, most expensive
- **Park Hill** — this one, the central section
- **[North Park Hill](/neighborhoods/denver/north-park-hill/)** — more modest
  1920s–50s stock, better value
- **[Northeast Park Hill](/neighborhoods/denver/northeast-park-hill/)** — the
  least expensive of the four

When a listing says "Park Hill", confirm which.

## What got built here

1920s through 1950s brick — bungalows and Tudors on the earlier blocks, ranches
later. Wide streets and mature street trees throughout, part of what makes the
whole Park Hill area feel distinct from the rest of east Denver.

## The civic culture

Greater Park Hill Community is one of the oldest and most active registered
neighborhood organisations in Denver, rooted in the area's deliberate
integration efforts in the 1960s.`,
    suits: `Families who want the Park Hill streetscape at a lower price than the blocks
south of Montview.`,
    check: `**Which Park Hill** the parcel is actually in.

**Sewer scope**, given the tree canopy.

**Roof age and hail history.**`,
  },

  {
    ...ne,
    slug: 'northeast-park-hill',
    name: 'Northeast Park Hill',
    title: 'Northeast Park Hill, Denver — a neighborhood guide',
    summary:
      'The least expensive of the four Park Hills, with a strong Black community history and significant recent change around the former golf course.',
    answer:
      'Northeast Park Hill is a Denver neighborhood north-east of the wider Park Hill area, historically a centre of Denver’s Black community. It is the least expensive of the four Park Hill neighborhoods and borders the former Park Hill Golf Course site.',
    tags: ['northeast-park-hill', 'denver', 'park-hill', 'affordable', 'history'],
    bounds: 'Colorado Boulevard to Quebec Street, north of 38th Avenue',
    housing: ['1940s–1960s brick ranches and bungalows'],
    stats: ['to downtown - 18 min', 'value - lowest of the Park Hills', 'tenure - mixed'],
    parks: 'Former Park Hill Golf Course site, neighborhood parks',
    geo: { lat: 39.7789, lng: -104.9264 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'What is happening with the Park Hill Golf Course?',
        a: 'The 155-acre former golf course next to the neighborhood has been the subject of a long and contentious fight over a conservation easement and proposed redevelopment. Denver voters rejected a development plan in 2023. Its future remains a live local issue and directly affects the neighborhood.',
      },
      {
        q: 'Is Northeast Park Hill affordable?',
        a: 'It is the least expensive of the four Park Hill neighborhoods and among the better value areas in east Denver, with detached brick housing on standard lots.',
      },
    ],
    sources: src,
    lede: `Northeast Park Hill is the least expensive of the four Park Hills and the one
with the strongest continuous Black community history in Denver. It also sits
next to 155 acres whose future the city has been arguing about for years.`,
    sections: `## Where Northeast Park Hill actually is

North-east of the wider Park Hill area, roughly north of 38th Avenue between
Colorado Boulevard and Quebec Street.

## The golf course fight

The former Park Hill Golf Course — 155 acres adjoining the neighborhood — has
been the focus of a prolonged dispute over a conservation easement and a
proposed large mixed-use redevelopment. Denver voters rejected the development
plan in a 2023 ballot measure.

Whatever eventually happens there will materially affect this neighborhood, and
anyone buying nearby should understand the current state of it.

## The housing

Predominantly 1940s–60s brick ranches and bungalows on standard lots with
alleys. Solid stock, much of it unrenovated.`,
    suits: `Value buyers who want detached east-side housing at the lowest Park Hill
pricing, and investors.`,
    check: `**Golf course site status** and what is currently proposed.

**Sewer and post-war systems.**

**Block-level variation.**`,
  },

  {
    ...base,
    slug: 'hilltop',
    name: 'Hilltop',
    featured: true,
    title: 'Hilltop, Denver — a neighborhood guide',
    summary:
      'Large houses on large lots around Cranmer Park, with the best mountain-panorama view in east Denver and prices to match.',
    answer:
      'Hilltop is an affluent east Denver neighborhood between Colorado Boulevard and Holly Street, centred on Cranmer Park. It has large 1920s–1950s houses on generous lots and is among the most expensive neighborhoods in the city.',
    tags: ['hilltop', 'denver', 'affluent', 'large-lots', 'views', 'family'],
    bounds: 'Colorado Boulevard to Holly Street, 1st Avenue to 6th Avenue',
    housing: ['1920s–1950s Tudors, ranches and period revivals', 'Substantial scrape-and-replace'],
    stats: ['Cranmer Park panorama', 'to downtown - 15 min', 'lot size - large'],
    parks: 'Cranmer Park, Robinson Park',
    geo: { lat: 39.7203, lng: -104.9333 },
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
        q: 'What is the sundial at Cranmer Park?',
        a: 'A large sandstone sundial and terrazzo mountain panorama at the top of Cranmer Park, identifying the peaks visible on the horizon. It was restored in recent years and the view west from it is the best in east Denver.',
      },
      {
        q: 'Is Hilltop expensive?',
        a: 'Yes — it is consistently among Denver’s most expensive neighborhoods, alongside Country Club, Cherry Creek and Belcaro, driven by large lots and heavy new construction.',
      },
    ],
    sources: src,
    lede: `Hilltop sits on the high ground east of Colorado Boulevard, and the terrazzo
panorama at the top of Cranmer Park tells you which mountains you are looking
at. It has the biggest lots in east Denver, and over the last two decades a
large share of its original houses have been replaced with much larger ones.`,
    sections: `## Where Hilltop actually is

Between Colorado Boulevard and Holly Street, from 1st Avenue to 6th, east of
[Cherry Creek](/neighborhoods/denver/cherry-creek/) and north of
[Belcaro](/neighborhoods/denver/belcaro/).

## Cranmer Park

The park sits on the neighborhood's high point and holds a restored sandstone
sundial and a terrazzo mountain panorama naming the peaks. The view west across
the city to the Front Range is the best in east Denver and the reason the
surrounding blocks price the way they do.

## The housing

Originally 1920s–1950s: Tudors, period revivals and substantial ranches on lots
considerably larger than the Denver standard. A great deal of scrape-and-replace
has happened since 2000, so the streetscape now mixes original houses with much
larger new construction.

## Schools

Denver Public Schools operates on choice enrolment, and the east-side schools
serving Hilltop are among the more sought-after in the district. Verify the
assignment and the enrolment position for a specific address.`,
    suits: `Buyers at the top of the Denver market who want a large lot and a large house
on the east side, and families targeting the east-side schools.`,
    check: `**New-construction quality** on scrape-and-replace houses, which varies.

**Tree preservation and setbacks** if you plan to build.

**Systems in original 1930s–50s houses**, which are frequently unmodernised.`,
  },

  {
    ...base,
    slug: 'montclair',
    name: 'Montclair',
    title: 'Montclair, Denver — a neighborhood guide',
    summary:
      'An early streetcar suburb with a genuine castle, wide parkways and an unusually intact mix of period housing.',
    answer:
      'Montclair is an east Denver neighborhood originally platted in 1885 as a separate town, annexed by Denver in 1902. It has wide parkways, varied 1900s–1950s housing and the Richthofen Castle, built by the nephew of the Red Baron’s family.',
    tags: ['montclair', 'denver', 'historic', 'parkways', 'family'],
    bounds: 'Holly Street to Quebec Street, 6th Avenue to Colfax',
    housing: ['1900s–1950s mixed period housing', 'Some grand early houses'],
    stats: ['to downtown - 18 min', 'Richthofen Castle', 'wide parkways'],
    parks: 'Montclair Park, Lowry nearby',
    geo: { lat: 39.7333, lng: -104.9167 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is there a castle in Denver?',
        a: 'Yes — Richthofen Castle in Montclair, built in 1887 by Baron Walter von Richthofen, an uncle of the First World War pilot Manfred von Richthofen. It is a private residence and one of the more unexpected buildings in the city.',
      },
      {
        q: 'Was Montclair a separate town?',
        a: 'Yes. It was platted in 1885 as its own town, developed as a health resort and streetcar suburb, and annexed by Denver in 1902.',
      },
    ],
    sources: src,
    lede: `Montclair was its own town before Denver annexed it, developed in the 1880s as
a health resort with wide boulevards and a castle at the centre. Both the
boulevards and the castle are still there.`,
    sections: `## Where Montclair actually is

East Denver between Holly and Quebec, from 6th Avenue up to Colfax, west of
[Lowry](/neighborhoods/denver/lowry/) and east of
[Hilltop](/neighborhoods/denver/hilltop/).

## The history

Baron Walter von Richthofen platted Montclair in 1885 and promoted it as a
health resort, building **Richthofen Castle** in 1887 as his own residence. The
town was annexed by Denver in 1902.

The wide parkways — Richthofen Place and the surrounding streets — date from that
original plan and are why Montclair feels more spacious than its neighbours.

## The housing

Unusually varied for Denver: grand early houses from the resort era, 1900s–1920s
bungalows and squares, and post-war ranches filling in later. That mix keeps
prices more accessible than Hilltop next door.`,
    suits: `Buyers who want period character and wide streets without Hilltop pricing, and
families who want proximity to Lowry's amenities.`,
    check: `**Systems**, which vary enormously across the housing eras here.

**Historic status** on the older houses.

**Sewer scope** on anything pre-1940.`,
  },

  {
    ...base,
    slug: 'lowry',
    name: 'Lowry',
    featured: true,
    title: 'Lowry, Denver — a neighborhood guide',
    summary:
      'A former Air Force base rebuilt as one of the most successful master-planned communities in the country, inside Denver city limits.',
    answer:
      'Lowry is an east Denver neighborhood built on the site of the former Lowry Air Force Base, which closed in 1994. Redeveloped from the late 1990s, it combines new housing of varied types with preserved base buildings, extensive parks and its own town centre.',
    tags: ['lowry', 'denver', 'master-planned', 'new-construction', 'parks', 'family'],
    bounds: 'Quebec Street to Havana Street, 1st Avenue to 11th Avenue',
    housing: ['1998–present houses, townhomes and apartments', 'Converted base buildings'],
    stats: ['former Air Force base', 'to downtown - 20 min', 'parks - extensive'],
    parks: 'Lowry Sports Park, Great Lawn Park, Crescent Park',
    geo: { lat: 39.7208, lng: -104.8944 },
    links: [
      denverLink,
      { label: 'Wings Over the Rockies Air & Space Museum', url: 'https://wingsmuseum.org/' },
      {
        label: 'Denver Botanic Gardens at Chatfield and Lowry',
        url: 'https://www.botanicgardens.org/',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'Was Lowry an Air Force base?',
        a: 'Yes. Lowry Air Force Base operated from 1938 until 1994, training aircrew and technicians. After closure the site was redeveloped as a mixed residential and commercial community, and several base buildings including a hangar were preserved.',
      },
      {
        q: 'Is Lowry a good place for families?',
        a: 'It is one of the strongest family options inside Denver city limits — new housing, extensive parks and playing fields, a town centre with shops and restaurants, and a coherent street plan with good pedestrian connections.',
      },
      {
        q: 'What is Wings Over the Rockies?',
        a: 'An air and space museum in a preserved Lowry hangar, holding a substantial aircraft collection. It is one of the most-visited attractions in east Denver.',
      },
    ],
    sources: src,
    lede: `Lowry Air Force Base closed in 1994 and the 1,800-acre site became one of the
better base redevelopments in the United States: a full neighborhood with houses,
apartments, parks, schools, a town centre and an air museum in the old hangar,
inside Denver city limits.`,
    sections: `## Where Lowry actually is

East Denver between Quebec and Havana, from 1st Avenue up to 11th, east of
[Montclair](/neighborhoods/denver/montclair/) and inside the city limits, with
[Aurora](/places/aurora/) beginning just east.

## The base

Lowry operated from 1938 to 1994 as a technical training base. When it closed
under base realignment, the Lowry Redevelopment Authority planned and executed
the conversion over the following two decades.

Several base structures were preserved, most visibly the hangar now housing the
**Wings Over the Rockies Air & Space Museum**. The Eisenhower Chapel and a
number of brick base buildings also survive, repurposed.

## The housing

Everything from 1998 onward, and deliberately mixed: detached houses,
townhomes, apartments, and a substantial amount of housing at varied price
points. That mix was a design goal and it distinguishes Lowry from most
master-planned communities.

## The parks

Extensive, and a genuine draw: **Lowry Sports Park** with its playing fields, the
**Great Lawn**, **Crescent Park**, and connected trails throughout. The Denver
Botanic Gardens operates a location here.

## The environmental note

As a former military installation, portions of the site required environmental
remediation before redevelopment. That work is documented; ask about the record
for a specific parcel if it matters to you.`,
    suits: `Families who want new construction, parks and schools without leaving Denver,
and buyers who want a coherent planned neighborhood rather than a scattered
grid.

It is a weaker fit for anyone wanting historic character or a short downtown
commute.`,
    check: `**HOA and metro district fees**, which apply across most of Lowry.

**Remediation records** on the parcel if former base uses concern you.

**Build era**, since Lowry spans nearly thirty years of construction quality.`,
  },

  {
    ...base,
    slug: 'hale',
    name: 'Hale',
    title: 'Hale, Denver — a neighborhood guide',
    summary:
      'A small east Denver neighborhood wrapped around a major hospital campus, with tidy brick housing and a very short commute.',
    answer:
      'Hale is a small east Denver neighborhood centred on the Rose Medical Center campus, between Colorado Boulevard and Holly Street. It has predominantly 1940s–1950s brick housing and is popular with healthcare workers.',
    tags: ['hale', 'denver', 'medical', 'brick', 'central-east'],
    bounds: 'Colorado Boulevard to Holly Street, 6th Avenue to Colfax',
    housing: ['1940s–1950s brick bungalows and ranches'],
    stats: ['Rose Medical Center', 'to downtown - 15 min', 'tenure - mixed'],
    parks: 'Mayfair Park nearby, Hale Parkway',
    geo: { lat: 39.7333, lng: -104.9333 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Hale a good neighborhood in Denver?',
        a: 'It is a quiet, well-kept pocket of post-war brick with a hospital campus at its centre and quick access to Colorado Boulevard and 6th Avenue. Healthcare workers make up a meaningful share of residents.',
      },
    ],
    sources: src,
    lede: `Hale is a small, tidy east Denver neighborhood built around Rose Medical
Center, with post-war brick housing and one of the shorter commutes in the
sector.`,
    sections: `## Where Hale actually is

Between Colorado Boulevard and Holly, from 6th Avenue up to Colfax, north of
[Hilltop](/neighborhoods/denver/hilltop/) and west of
[Montclair](/neighborhoods/denver/montclair/).

## The hospital

Rose Medical Center anchors the neighborhood. It brings employment, ambulance
traffic on the immediate blocks, and steady rental demand from staff.

## The housing

1940s–50s brick bungalows and ranches on standard lots, generally well kept.
Hale Parkway runs through with a landscaped median.`,
    suits: `Healthcare workers, and buyers who want solid post-war brick with easy access
to Colorado Boulevard and 6th Avenue.`,
    check: `**Ambulance and hospital traffic** on the nearest blocks.

**Post-war systems** and sewer.`,
  },

  {
    ...base,
    slug: 'belcaro',
    name: 'Belcaro',
    title: 'Belcaro, Denver — a neighborhood guide',
    summary:
      'A small, affluent south-east Denver neighborhood around the Phipps mansion, with large lots and quiet curving streets.',
    answer:
      'Belcaro is a small affluent Denver neighborhood south of Cherry Creek, developed around the Belcaro estate of former mayor and senator Lawrence Phipps. It has large lots, substantial mid-century and later housing, and is among the city’s most expensive areas.',
    tags: ['belcaro', 'denver', 'affluent', 'large-lots', 'quiet'],
    bounds: 'University Boulevard to Colorado Boulevard, Alameda to Mississippi',
    housing: ['1940s–1960s ranches and later custom houses', 'Substantial rebuilds'],
    stats: ['to downtown - 15 min', 'lot size - large', 'tenure - majority owner'],
    parks: 'Bonnie Brae and Wash Park nearby, Cherry Creek Trail',
    geo: { lat: 39.7028, lng: -104.9531 },
    links: [
      denverLink,
      { label: 'Phipps House, University of Denver', url: 'https://www.du.edu/' },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is the Phipps mansion in Belcaro?',
        a: 'The Belcaro estate built by Lawrence C. Phipps, a US senator from Colorado, completed in 1933. The house gave the neighborhood its name and is now owned by the University of Denver and used as an events venue.',
      },
    ],
    sources: src,
    lede: `Belcaro is a small pocket of large lots and quiet curving streets between Wash
Park and Cherry Creek, developed around the estate of a former US senator whose
mansion still stands at its centre.`,
    sections: `## Where Belcaro actually is

South-east Denver between University and Colorado Boulevard, from Alameda down
to Mississippi, east of [Washington Park](/neighborhoods/denver/washington-park/)
and south of [Cherry Creek](/neighborhoods/denver/cherry-creek/).

## The estate

Senator Lawrence C. Phipps completed the Belcaro mansion in 1933. The house
passed to the University of Denver and operates as an events venue. The
surrounding subdivision took the name.

## The housing

Mid-century ranches on unusually large lots, plus a substantial number of later
custom houses and rebuilds. Lot size is the defining characteristic and the main
driver of value.`,
    suits: `Buyers who want a large lot in central-south Denver and are at the top of the
market.`,
    check: `**Lot coverage and zoning** if you intend to rebuild.

**Systems in original 1950s houses.**

**Tree health** on mature lots.`,
  },

  {
    ...base,
    slug: 'cory-merrill',
    name: 'Cory-Merrill',
    title: 'Cory-Merrill, Denver — a neighborhood guide',
    summary:
      'A quiet south Denver neighborhood named for its two schools, popular with families for exactly that reason.',
    answer:
      'Cory-Merrill is a south Denver neighborhood named for Cory Elementary and Merrill Middle School. It has predominantly 1940s–1950s brick housing with substantial recent rebuilding, and is a sought-after family area.',
    tags: ['cory-merrill', 'denver', 'schools', 'family', 'brick'],
    bounds: 'University Boulevard to Colorado Boulevard, Mississippi to Evans Avenue',
    housing: ['1940s–1950s brick ranches and bungalows', 'Substantial scrape-and-replace'],
    stats: ['named for its schools', 'to downtown - 18 min', 'tenure - majority owner'],
    parks: 'Cory-Merrill Park, Washington Park nearby',
    geo: { lat: 39.6903, lng: -104.9531 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Why is it called Cory-Merrill?',
        a: 'After the two Denver Public Schools campuses in the neighborhood — Cory Elementary and Merrill Middle School. The schools are also the main reason families move here.',
      },
    ],
    sources: src,
    lede: `Cory-Merrill is named after its schools, which tells you most of what you need
to know about why people move here. Quiet streets, post-war brick, and a steady
stream of families trading up from smaller houses closer in.`,
    sections: `## Where Cory-Merrill actually is

South Denver between University and Colorado Boulevard, from Mississippi down to
Evans, east of [Washington Park](/neighborhoods/denver/washington-park/).

## The housing

1940s–50s brick ranches and bungalows on standard lots. A great deal of
scrape-and-replace and pop-top activity over the last fifteen years, so
expect a mix of original and much larger new construction.

## The schools

Denver Public Schools runs choice enrolment, so a neighborhood address does not
guarantee a place. Verify current boundaries and enrolment position rather than
assuming.`,
    suits: `Families trading up who want space and schools without leaving central-south
Denver.`,
    check: `**Enrolment position**, not just the boundary.

**Quality of pop-tops and additions** — permits and structural review.

**Sewer scope** on original houses.`,
  },

  {
    ...base,
    slug: 'virginia-village',
    name: 'Virginia Village',
    title: 'Virginia Village, Denver — a neighborhood guide',
    summary:
      'A large post-war neighborhood of mid-century ranches, and one of the best remaining sources of affordable detached housing in south-east Denver.',
    answer:
      'Virginia Village is a south-east Denver neighborhood developed largely in the 1950s, characterised by mid-century brick ranches on standard lots. It offers comparatively affordable detached housing and has seen growing interest for its mid-century architecture.',
    tags: ['virginia-village', 'denver', 'mid-century', 'affordable', 'ranches'],
    bounds: 'Colorado Boulevard to Holly Street, Mississippi to Evans Avenue',
    housing: ['1950s brick ranches', 'Some mid-century modern'],
    stats: ['to downtown - 20 min', 'value - below city median', 'tenure - majority owner'],
    parks: 'Cook Park, Garland Park, Cherry Creek Trail',
    geo: { lat: 39.6903, lng: -104.9333 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Virginia Village a good value in Denver?',
        a: 'It is one of the better remaining sources of detached mid-century housing at below-median prices inside Denver, with good park access via Cook Park and the Cherry Creek Trail.',
      },
      {
        q: 'Is there mid-century modern architecture in Virginia Village?',
        a: 'Yes. Alongside the standard 1950s brick ranches there are pockets of genuine mid-century modern, including work by Denver builders of the period, which has drawn increasing interest from buyers.',
      },
    ],
    sources: src,
    lede: `Virginia Village is several thousand mid-century brick ranches in south-east
Denver, built fast in the 1950s and largely intact since. It has become a
destination for buyers who want mid-century houses and a price below the city
median.`,
    sections: `## Where Virginia Village actually is

South-east Denver between Colorado Boulevard and Holly, from Mississippi to
Evans, north of [University Hills](/neighborhoods/denver/university-hills/).

## The housing

Overwhelmingly 1950s: brick ranches on standard lots with attached or detached
garages. Within that, there are genuine mid-century modern pockets that trade at
a premium to the standard stock.

## The parks

**Cook Park** has a recreation centre and pool; **Garland Park** and the Cherry
Creek Trail run along the northern side, giving a car-free route into downtown
and out toward Aurora.`,
    suits: `Buyers who want a detached house with a yard below the Denver median, and
mid-century enthusiasts.`,
    check: `**Sewer scope** and **electrical panel capacity** — 1950s service is often
inadequate for modern loads.

**Original windows and insulation**, which are common and costly to address.`,
  },

  {
    ...base,
    slug: 'washington-virginia-vale',
    name: 'Washington Virginia Vale',
    title: 'Washington Virginia Vale, Denver — a neighborhood guide',
    summary:
      'A large south-east Denver neighborhood along Cherry Creek, mixing mid-century ranches with a substantial amount of apartment housing.',
    answer:
      'Washington Virginia Vale is a south-east Denver neighborhood along the Cherry Creek corridor, combining 1950s–60s ranches with significant multifamily housing. It offers Cherry Creek Trail access and prices below the city median.',
    tags: ['washington-virginia-vale', 'denver', 'cherry-creek-trail', 'apartments', 'value'],
    bounds: 'Colorado Boulevard to Quebec Street, Alameda to Mississippi',
    housing: ['1950s–60s ranches', 'Substantial apartment and condo stock'],
    stats: ['Cherry Creek Trail', 'to downtown - 18 min', 'tenure - mixed'],
    parks: 'Garland Park, Cherry Creek Trail, Burns Park',
    geo: { lat: 39.7028, lng: -104.9264 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Washington Virginia Vale a good place to rent?',
        a: 'It has one of the larger concentrations of apartment housing in south-east Denver at below-average rents, with Cherry Creek Trail access — a reasonable combination for renters who want space and a bike commute.',
      },
    ],
    sources: src,
    lede: `Washington Virginia Vale runs along the Cherry Creek corridor in south-east
Denver, mixing 1950s ranches with a large stock of apartments. It is one of the
better value corners of the city for both renters and buyers.`,
    sections: `## Where it actually is

Between Colorado Boulevard and Quebec, from Alameda down to Mississippi, along
the Cherry Creek channel.

## The trail

The Cherry Creek Trail runs through, grade-separated, giving a continuous
car-free route into downtown one way and out to Aurora and the reservoir the
other. For cyclists this is the neighborhood's best feature.

## Burns Park

A small park on the western side notable for holding a collection of large
outdoor sculptures installed in the 1960s — an unexpected piece of public art in
a residential area.`,
    suits: `Cyclists, renters who want space, and buyers who want a mid-century house
below the Denver median.`,
    check: `**Flood mapping** along the Cherry Creek channel.

**Condo HOA health** on the multifamily stock, some of which is ageing.

**Arterial noise** on Colorado Boulevard and Leetsdale.`,
  },

  {
    ...base,
    slug: 'east-colfax',
    name: 'East Colfax',
    title: 'East Colfax, Denver — a neighborhood guide',
    summary:
      'The far eastern end of Colfax at the Aurora line: diverse, inexpensive, and about to be reshaped by bus rapid transit.',
    answer:
      'East Colfax is a Denver neighborhood at the eastern edge of the city along Colfax Avenue, bordering Aurora. It is among the city’s most ethnically diverse and least expensive neighborhoods, and is the focus of the Colfax Bus Rapid Transit project.',
    tags: ['east-colfax', 'denver', 'diversity', 'affordable', 'brt', 'transit'],
    bounds: 'Quebec Street to Yosemite Street, Colfax Avenue to 17th Avenue',
    housing: ['1940s–1960s cottages, ranches and small apartment blocks'],
    stats: ['to downtown - 20 min', 'value - among Denver’s lowest', 'Colfax BRT'],
    parks: 'Verbena Park, Lowry parks nearby',
    geo: { lat: 39.7403, lng: -104.8889 },
    links: [
      denverLink,
      {
        label: 'Colfax Bus Rapid Transit project',
        url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Department-of-Transportation-and-Infrastructure',
      },
      dpsLink,
    ],
    faq: [
      {
        q: 'What is the Colfax BRT?',
        a: 'A bus rapid transit project running centre-lane buses along East Colfax between downtown Denver and Aurora, with dedicated lanes and station platforms. It is the largest transit investment on Denver’s east side in decades.',
      },
      {
        q: 'Is East Colfax affordable?',
        a: 'It is among the least expensive neighborhoods in Denver, and it also has one of the city’s most diverse populations, with substantial East African and other immigrant communities.',
      },
    ],
    sources: src,
    lede: `East Colfax is the last stretch of Denver before Aurora, and it is one of the
most diverse and least expensive parts of the city. It is also where the largest
east-side transit investment in decades is being built.`,
    sections: `## Where East Colfax actually is

The eastern edge of Denver between Quebec and Yosemite, along Colfax Avenue up
to 17th, with [Aurora](/places/aurora/) beginning immediately east and
[Lowry](/neighborhoods/denver/lowry/) to the south.

## The BRT

The Colfax Bus Rapid Transit project runs centre-running buses in dedicated
lanes along the corridor between downtown and Aurora. It is a substantial
upgrade to the busiest bus route in the state, and it is likely to be the main
driver of change here over the next decade — including on prices.

## The community

East Colfax has one of the largest East African populations in Colorado, along
with substantial Latino and other immigrant communities. The commercial strip
reflects it, and the food is a genuine reason to visit.

## The honest part

This is a low-income neighborhood with older motel stock along Colfax, some of
it used as transitional housing, and visible poverty. It is also a neighborhood
with strong community organisations and a lot of investment arriving. Walk it
before you form a view.`,
    suits: `Value buyers and investors positioning ahead of the BRT, and anyone who wants
Denver's cheapest entry point with a transit story attached.`,
    check: `**BRT construction timing** and how it affects a specific block.

**Motel and transitional housing proximity**, which varies considerably along
the corridor.

**Older systems** on post-war stock.`,
  },

  {
    ...base,
    slug: 'indian-creek',
    name: 'Indian Creek',
    title: 'Indian Creek, Denver — a neighborhood guide',
    summary:
      'A small south-east Denver pocket of apartments and townhomes near the Cherry Creek corridor, and one of the city’s more affordable rental markets.',
    answer:
      'Indian Creek is a small south-east Denver neighborhood near the Cherry Creek corridor, dominated by apartment and townhome housing. It is among the more affordable rental markets within the city limits.',
    tags: ['indian-creek', 'denver', 'apartments', 'affordable', 'rentals'],
    bounds: 'Holly Street to Quebec Street, Evans to Yale Avenue',
    housing: ['1960s–1980s apartments and townhomes'],
    stats: ['to downtown - 20 min', 'tenure - majority renter', 'value - below city median'],
    parks: 'Cherry Creek Trail nearby, Bible Park',
    geo: { lat: 39.6739, lng: -104.9264 },
    links: [denverLink, dpsLink],
    faq: [
      {
        q: 'Is Indian Creek a residential neighborhood?',
        a: 'Yes, though predominantly multifamily — apartments and townhomes rather than detached houses. It is one of the more affordable rental areas inside Denver.',
      },
    ],
    sources: src,
    lede: `Indian Creek is a small, mostly multifamily pocket in south-east Denver, close
to the Cherry Creek corridor and priced well below the city average.`,
    sections: `## Where Indian Creek actually is

South-east Denver between Holly and Quebec, from Evans down to Yale, near
[Bible Park](/neighborhoods/denver/hampden/) and the Cherry Creek Trail.

## The housing

Predominantly 1960s–80s apartments and townhomes. Detached single-family
inventory is limited.`,
    suits: `Renters and investors looking for below-average pricing inside Denver with
trail and park access.`,
    check: `**HOA health** on older condo and townhome buildings.

**Building systems** on 1970s multifamily stock.`,
  },

  {
    ...base,
    slug: 'windsor',
    name: 'Windsor',
    title: 'Windsor, Denver — a neighborhood guide',
    summary:
      'A small south-east Denver neighborhood around Windsor Gardens, Colorado’s largest active-adult condominium community.',
    answer:
      'Windsor is a south-east Denver neighborhood dominated by Windsor Gardens, a large age-restricted condominium community established in the 1960s. It is one of the most affordable ownership options in Denver for buyers aged 55 and over.',
    tags: ['windsor-denver', 'denver', 'active-adult', '55-plus', 'condos', 'affordable'],
    bounds: 'Quebec Street to Havana Street, Alameda to Mississippi',
    housing: ['1960s–70s age-restricted condominiums', 'Some conventional housing'],
    stats: ['Windsor Gardens - 55+ community', 'to downtown - 20 min', 'value - low for Denver'],
    parks: 'Windsor Gardens golf course, Cherry Creek Trail nearby',
    geo: { lat: 39.7028, lng: -104.8889 },
    links: [
      denverLink,
      { label: 'Windsor Gardens Association', url: 'https://windsorgardensdenver.org/' },
    ],
    faq: [
      {
        q: 'What is Windsor Gardens in Denver?',
        a: 'A large age-restricted (55+) condominium community built from the 1960s, with its own golf course, recreation centre and association. It is Colorado’s largest active-adult community and is contained within the Windsor neighborhood.',
      },
      {
        q: 'Is Windsor Gardens affordable?',
        a: 'It is among the least expensive ownership housing in Denver, though buyers should read the HOA fee carefully — it is high relative to the purchase price and covers taxes, insurance and utilities in a way most Colorado HOAs do not.',
      },
    ],
    sources: src,
    lede: `The Windsor neighborhood is largely Windsor Gardens — a 55-and-over
condominium community of several thousand units with its own golf course, built
from the 1960s. It is the most affordable ownership housing of any scale in
Denver, with an unusual fee structure attached.`,
    sections: `## Where Windsor actually is

South-east Denver between Quebec and Havana, from Alameda down to Mississippi,
near the Cherry Creek corridor.

## Windsor Gardens

Colorado's largest active-adult community: several thousand condominium units,
a nine-hole golf course, a recreation centre, and an association that operates
at a scale closer to a small municipality than a typical HOA.

The **fee structure is the thing to understand**. The monthly assessment is high
relative to purchase price, but it bundles property taxes, insurance, water,
heat and amenities. Compare it on a total-monthly-cost basis, not against a
conventional HOA fee.

## Age restriction

At least one occupant must generally be 55 or over. Confirm the current rules
with the association before making any plan.`,
    suits: `Buyers over 55 who want the lowest-cost ownership in Denver with amenities
attached, and who have compared the total monthly cost properly.`,
    check: `**What the monthly fee actually covers** and how it has escalated.

**Reserve study and any pending assessments.**

**Age-restriction rules** for your household.`,
  },
]
