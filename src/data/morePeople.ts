import { Person } from '../types';

export const MORE_HEROES_DATA: Person[] = [
  {
    id: 'michael-okpara',
    name: 'Dr. Michael Iheonukara Okpara',
    slug: 'michael-okpara',
    honorific: 'Dr.',
    birthDate: 'December 25, 1920',
    deathDate: 'December 17, 1984',
    nationality: 'Nigerian',
    state: 'Abia',
    profession: ['Medical Doctor', 'Premier of Eastern Nigeria', 'Agrarian Reformer'],
    categories: ['independence', 'leadership', 'business'],
    positions: [
      {
        title: 'Premier of Eastern Nigeria',
        organization: 'Eastern Region Government',
        startDate: '1959',
        endDate: '1966',
        era: 'First Republic',
      },
    ],
    biography:
      'Dr. Michael Okpara was born in Ohuhu, Umuahia, Abia State. A medical doctor trained at Yaba Higher College, he succeeded Nnamdi Azikiwe as Premier of Eastern Nigeria at age 39. Okpara led an agrarian economic transformation that made Eastern Nigeria one of the fastest-growing regional economies in the developing world in the early 1960s, establishing vast rubber, cocoa, palm oil, and cashew plantations, alongside industries like the Golden Guinea Breweries, Nigersteel, and Hotel Presidential.',
    independenceRole:
      'As a top NCNC strategist and delegate to the constitutional conferences, Okpara worked tirelessly to build an economically self-sustaining post-independence federation, demonstrating that agriculture could fund industrialization.',
    whyTheyMatter:
      'His "Pragmatic Socialism" and plantation economy model proved that strategic government agro-industrialization could generate massive prosperity without oil dependence.',
    contributions: [
      {
        title: 'Eastern Nigeria Agrarian Revolution',
        description: 'Established the Farm Settlement Scheme and massive state-owned agro-allied plantations across Eastern Nigeria.',
        year: '1960–1965',
        category: 'Agriculture',
      },
      {
        title: 'Industrial Infrastructure Development',
        description: 'Founded the Trans-Amadi Industrial Layout in Port Harcourt, Nigergas, and Nigercem expansion.',
        year: '1961–1965',
        category: 'Industry',
      },
    ],
    achievements: [
      {
        title: 'Knight of the Order of St. Sylvester',
        year: '1963',
        significance: 'International recognition of ethical leadership.',
      },
    ],
    timeline: [
      { year: '1920', event: 'Birth in Umuahia', description: 'Born in Umuegwu Okpuala.' },
      { year: '1959', event: 'Appointed Premier', description: 'Became youngest premier in the federation.' },
      { year: '1984', event: 'Passing in Umuahia', description: 'Passed away at age 63.' },
    ],
    legacy:
      'Michael Okpara University of Agriculture (MOUAU) in Umudike and the Michael Okpara Leadership Prize honor his visionary legacy.',
    portraitUrl: '/images/people/michael-okpara.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'First we must feed our people from our own soil; then we can build factories from our own harvests.',
    sources: [
      {
        title: 'Power and Governance in Eastern Nigeria: The Okpara Era',
        publisher: 'H.O. Anyiam, Fourth Dimension Publishers',
      },
    ],
  },
  {
    id: 'ladoke-akintola',
    name: 'Chief Samuel Ladoke Akintola',
    slug: 'ladoke-akintola',
    honorific: 'Chief',
    birthDate: 'July 6, 1910',
    deathDate: 'January 15, 1966',
    nationality: 'Nigerian',
    state: 'Oyo',
    profession: ['Lawyer', 'Orator', 'Premier of Western Region'],
    categories: ['independence', 'leadership', 'education'],
    positions: [
      {
        title: 'Premier of Western Nigeria',
        organization: 'Western Region Government',
        startDate: '1959',
        endDate: '1966',
        era: 'First Republic',
      },
      {
        title: 'Federal Minister of Communications & Aviation',
        organization: 'Federal Government',
        startDate: '1954',
        endDate: '1957',
        era: 'Transition Era',
      },
    ],
    biography:
      'Chief Samuel Ladoke Akintola was born in Ogbomoso, Oyo State. A master linguist fluent in Yoruba, Hausa, and English, he was a teacher, railway worker, and editor of the Daily Service before qualifying as a barrister in London. A founding stalwart of the Action Group and later founder of the Nigerian National Democratic Party (NNDP), he was Deputy Leader of the Action Group and succeeded Awolowo as Premier of Western Nigeria in 1959. He was central to the establishment of the University of Ife (now Obafemi Awolowo University).',
    independenceRole:
      'Akintola was a formidable parliamentary orator during the constitutional debates, leading federal ministries in telecom and transport that unified regional networks ahead of October 1, 1960.',
    whyTheyMatter:
      'An exceptional parliamentary speaker and administrator whose political career embodied the intense democratic rivalries and coalition politics of Nigeria\'s First Republic.',
    contributions: [
      {
        title: 'Co-Founded the University of Ife',
        description: 'Signed the statutory instruments establishing the University of Ife in 1961 as regional premier.',
        year: '1961',
        category: 'Higher Education',
      },
      {
        title: 'Modernized Nigeria Telecoms as Federal Minister',
        description: 'Expanded VHF communications links between Lagos, Enugu, Kaduna, and Ibadan.',
        year: '1954–1957',
        category: 'Telecommunications',
      },
    ],
    achievements: [
      {
        title: 'Aare Ona Kakanfo of Yorubaland',
        year: '1964',
        significance: 'Conferred traditional supreme generalissimo title.',
      },
    ],
    timeline: [
      { year: '1910', event: 'Birth in Ogbomoso', description: 'Raised in northern and western Nigeria.' },
      { year: '1959', event: 'Premier of Western Nigeria', description: 'Assumed premiership of the region.' },
      { year: '1966', event: 'Passing in Ibadan', description: 'Died on January 15, 1966.' },
    ],
    legacy:
      'Ladoke Akintola University of Technology (LAUTECH) in Ogbomoso stands in lasting tribute to his intellectual dedication.',
    portraitUrl: '/images/people/ladoke-akintola.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'In public life, intellectual conviction must always be balanced with the capacity to compromise for the peace of the commonwealth.',
    sources: [
      {
        title: 'Samuel Ladoke Akintola: In the Eyes of History',
        publisher: 'Femi Kehinde, Bookcraft Nigeria',
      },
    ],
  },
  {
    id: 'queen-amina',
    name: 'Queen Amina of Zazzau',
    slug: 'queen-amina',
    honorific: 'Queen',
    birthDate: 'c. 1533',
    deathDate: 'c. 1610',
    nationality: 'Nigerian',
    state: 'Kaduna',
    profession: ['Warrior Queen', 'Military Engineer', 'Monarch of Zazzau'],
    categories: ['women', 'leadership', 'culture', 'innovators'],
    positions: [
      {
        title: 'Queen of Zazzau (Zaria)',
        organization: 'Zazzau Kingdom',
        startDate: '1576',
        endDate: '1610',
        era: 'Pre-Colonial Hausa Kingdoms',
      },
    ],
    biography:
      'Queen Amina was the eldest daughter of Queen Bakwa Turunku, founder of Zazzau kingdom in present-day Kaduna State. Renowned as a fearless cavalry commander and military strategist, she assumed the throne around 1576 and ruled for 34 years. She transformed Zazzau into the dominant trading hub of the central Sahel, expanding her territory to the River Niger and Benue. She pioneered the construction of massive earthen fortification walls ("Ganuwar Amina" or Amina\'s Walls) around Hausa cities, which protected civilizations for centuries.',
    whyTheyMatter:
      'She is Africa\'s legendary warrior queen, demonstrating that female military command and monumental engineering flourished in pre-colonial Nigeria centuries before European contact.',
    contributions: [
      {
        title: 'Constructed Amina\'s Defensive Earth Walls (Ganuwar Amina)',
        description: 'Engineered hundreds of kilometers of fortified mud walls protecting Sahelian cities against invading cavalry.',
        year: 'c. 1580',
        category: 'Military Engineering',
      },
      {
        title: 'Dominated Trans-Saharan Trade Routes',
        description: 'Secured trade corridors bringing kola nuts, horses, and metalwork to central Nigeria.',
        year: '1576–1610',
        category: 'Commerce',
      },
    ],
    achievements: [
      {
        title: 'Sovereign Ruler of Zazzau for Over Three Decades',
        year: '1576',
        significance: 'Legendary military ruler in Islamic West African historiography.',
      },
    ],
    timeline: [
      { year: '1533', event: 'Birth in Zazzau', description: 'Trained from youth in horseback archery.' },
      { year: '1576', event: 'Ascension to the Throne', description: 'Crowned Queen following the death of brother Karama.' },
      { year: '1610', event: 'Passing in Atagara', description: 'Passed away on a military expedition in the Benue valley.' },
    ],
    legacy:
      'Her equestrian bronze statue greets visitors at the National Arts Theatre in Lagos, and her legendary life inspired the film "Amina" and the global cartoon character "Xena: Warrior Princess".',
    portraitUrl: '/images/people/queen-amina.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'A ruler does not protect her people from behind palace walls; she rides at the vanguard of the shield.',
    sources: [
      {
        title: 'The Kano Chronicle',
        publisher: 'Translated by H.R. Palmer, Royal Anthropological Institute',
      },
      {
        title: 'A History of the Hausa States',
        publisher: 'S.J. Hogben and A.H.M. Kirk-Greene, Oxford University Press',
      },
    ],
  },
  {
    id: 'dora-akunyili',
    name: 'Prof. Dora Akunyili',
    slug: 'dora-akunyili',
    honorific: 'Prof. (OFR)',
    birthDate: 'July 14, 1954',
    deathDate: 'June 7, 2014',
    nationality: 'Nigerian',
    state: 'Anambra',
    profession: ['Pharmacologist', 'Director-General NAFDAC', 'Minister of Information'],
    categories: ['science-tech', 'women', 'leadership', 'activists'],
    positions: [
      {
        title: 'Director-General, National Agency for Food and Drug Administration and Control (NAFDAC)',
        organization: 'Federal Government of Nigeria',
        startDate: '2001',
        endDate: '2008',
        era: 'Public Health Revolution',
      },
      {
        title: 'Federal Minister of Information and Communications',
        organization: 'Federal Government of Nigeria',
        startDate: '2008',
        endDate: '2010',
        era: 'National Rebranding Era',
      },
    ],
    biography:
      'Prof. Dora Nkem Akunyili was born in Makurdi, Benue State, to parents from Nanka, Anambra State. A first-class graduate in pharmacology from the University of Nigeria, Nsukka, she lost her sister to fake diabetes medication, igniting her lifelong crusade. Appointed Director-General of NAFDAC in 2001, she waged an incorruptible war against powerful counterfeit drug cartels. Despite surviving assassination attempts, her fearless enforcement reduced fake drugs circulating in Nigeria from over 68% in 2001 to under 16% by 2006, saving millions of lives and becoming a global model for regulatory integrity.',
    whyTheyMatter:
      'She transformed a comatose regulatory agency into a world-class watchdog and demonstrated to the world that integrity, courage, and scientific rigour can defeat organized criminal syndicates.',
    contributions: [
      {
        title: 'Crushed Counterfeit Drug Cartels in Nigeria',
        description: 'Destroyed over $140 million worth of counterfeit drugs and closed illegal manufacturing labs nationwide.',
        year: '2001–2008',
        category: 'Public Health',
      },
      {
        title: 'Global Drug Safety Model',
        description: 'Conferred over 400 international and national awards, advising WHO on pharmaceutical supply chain security.',
        year: '2002–2010',
        category: 'Global Health Policy',
      },
      {
        title: 'Doctrine of Necessity Memo',
        description: 'Authored the historic cabinet memo during the 2010 Yar\'Adua health crisis enabling Goodluck Jonathan to assume acting presidency under the constitution.',
        year: '2010',
        category: 'Constitutional Statesmanship',
      },
    ],
    achievements: [
      {
        title: 'Transparency International Integrity Award',
        year: '2003',
        significance: 'Global recognition for incorruptible public service.',
      },
      {
        title: 'Officer of the Federal Republic (OFR)',
        year: '2002',
        significance: 'Conferred for meritorious national service.',
      },
    ],
    timeline: [
      { year: '1954', event: 'Birth in Makurdi', description: 'Excelled academically at Queen of the Rosary College, Nsukka.' },
      { year: '2001', event: 'Appointed Head of NAFDAC', description: 'Launched unsparing crackdown on fake drug markets.' },
      { year: '2003', event: 'Surviving Assassination Attempt', description: 'Bullet grazed her head in Anambra; refused to back down.' },
      { year: '2014', event: 'Passing in India', description: 'Died from cancer on June 7, 2014, celebrated as a national heroine.' },
    ],
    legacy:
      'Dora Akunyili is revered as an incorruptible saint of public service whose bravery saved millions of families from poisoned medicines.',
    portraitUrl: '/images/people/dora-akunyili.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'If I die in this cause, let it be known that I died so that Nigerian children could live without fear of fake medicine.',
    sources: [
      {
        title: 'The War Against Counterfeit Medicine',
        publisher: 'Dora Akunyili, Safari Books',
      },
    ],
  },
  {
    id: 'ladi-kwali',
    name: 'Dr. Ladi Kwali',
    slug: 'ladi-kwali',
    honorific: 'Dr. (MBE, OON)',
    birthDate: 'c. 1925',
    deathDate: 'August 12, 1984',
    nationality: 'Nigerian',
    state: 'Niger',
    profession: ['Master Potter', 'Ceramicist', 'Sculptor'],
    categories: ['culture', 'women', 'innovators', 'education'],
    positions: [
      {
        title: 'Senior Master Potter & Instructor',
        organization: 'Abuja Pottery Training Centre (Suleja)',
        startDate: '1954',
        endDate: '1984',
        era: 'Modern Indigenous Artistry',
      },
    ],
    biography:
      'Dr. Ladi Dosei Kwali was born in the village of Kwali in present-day Federal Capital Territory. She learned the traditional Gwari art of coil pottery from her aunt, mastering intricate incised animal and geometric motifs (crocodiles, lizards, fish, and scorpions). In 1954, British studio potter Michael Cardew established the Abuja Pottery Centre and was mesmerized by Kwali\'s genius. She mastered high-temperature stoneware glazing while preserving traditional hand-built techniques. Her pottery was exhibited across London, Paris, and New York, earning international master status. She is the only woman commemorated on a Nigerian banknote (the ₦20 note).',
    whyTheyMatter:
      'She elevated indigenous Nigerian pottery into global high art, proving that traditional African women artisans possessed aesthetic mastery that rivaled the finest ceramicists in world history.',
    contributions: [
      {
        title: 'Pioneered Modern Indigenous Stoneware Art',
        description: 'Fused ancient Gwari coiled pottery with modern high-temperature kiln firing, inventing a celebrated hybrid ceramic tradition.',
        year: '1954–1975',
        category: 'Visual Arts',
      },
      {
        title: 'International Exhibitions and Demonstrations',
        description: 'Conducted live masterclasses at the Royal College of Art in London and universities across the United States.',
        year: '1958–1972',
        category: 'Cultural Diplomacy',
      },
    ],
    achievements: [
      {
        title: 'Commemorated on the ₦20 National Banknote',
        year: '2006',
        significance: 'The only woman featured on Nigerian currency.',
      },
      {
        title: 'Member of the Order of the British Empire (MBE)',
        year: '1962',
        significance: 'Honored for artistic mastery.',
      },
      {
        title: 'Honorary Doctorate from Ahmadu Bello University',
        year: '1977',
        significance: 'Honored despite having no formal western education.',
      },
    ],
    timeline: [
      { year: '1925', event: 'Birth in Kwali', description: 'Learned coil pottery as a traditional craft.' },
      { year: '1954', event: 'Joined Abuja Pottery Centre', description: 'Collaborated with Michael Cardew.' },
      { year: '1962', event: 'Awarded MBE', description: 'Exhibited at Berkeley Galleries, London.' },
      { year: '1984', event: 'Passing in Minna', description: 'Passed away on August 12, 1984.' },
    ],
    legacy:
      'Ladi Kwali Way in Abuja, the Sheraton Ladi Kwali Conference Centre, and the ₦20 note celebrate her timeless hands of clay.',
    portraitUrl: '/images/people/ladi-kwali.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'The clay speaks the language of our ancestors; my fingers only listen and shape what the clay desires.',
    sources: [
      {
        title: 'Michael Cardew: A Pioneer Potter',
        publisher: 'Collins, London',
      },
      {
        title: 'National Gallery of Art Nigeria Monographs',
        publisher: 'Abuja, Nigeria',
      },
    ],
  },
  {
    id: 'philip-emeagwali',
    name: 'Dr. Philip Emeagwali',
    slug: 'philip-emeagwali',
    honorific: 'Dr.',
    birthDate: 'August 23, 1954',
    nationality: 'Nigerian',
    state: 'Anambra',
    profession: ['Computer Scientist', 'Mathematician', 'Gordon Bell Prize Winner'],
    categories: ['science-tech', 'innovators', 'education'],
    positions: [
      {
        title: 'Supercomputing Researcher',
        organization: 'Independent Scientific Research',
        startDate: '1987',
        endDate: 'Present',
        era: 'Parallel Processing & Supercomputing',
      },
    ],
    biography:
      'Philip Emeagwali was born in Akure, Ondo State, to parents from Onitsha, Anambra State. His schooling was interrupted by the Nigerian Civil War, during which he served as a teenage refugee. Demonstrating extraordinary self-taught mathematical ability, he earned a scholarship to the United States. In 1989, inspired by the honeycomb construction of bees, Emeagwali used 65,536 processors to execute 3.1 billion calculations per second on the Connection Machine supercomputer to simulate petroleum reservoirs. He was awarded the 1989 Gordon Bell Prize by the Institute of Electrical and Electronics Engineers (IEEE), hailed by President Bill Clinton as one of the great minds of the Information Age.',
    whyTheyMatter:
      'His breakthrough in massively parallel computing demonstrated the power of bio-inspired algorithms in computational supercomputing.',
    contributions: [
      {
        title: '1989 Gordon Bell Prize for Supercomputing',
        description: 'Achieved 3.1 Gflops parallel computation simulating oil reservoir fluid dynamics across 65,536 processors.',
        year: '1989',
        category: 'Supercomputing',
      },
    ],
    achievements: [
      {
        title: 'Gordon Bell Prize (IEEE)',
        year: '1989',
        significance: 'Preeminent annual award in high-performance computing.',
      },
    ],
    timeline: [
      { year: '1954', event: 'Birth in Akure', description: 'Discovered early aptitude for mental arithmetic.' },
      { year: '1989', event: 'Gordon Bell Prize Win', description: 'Recognized for parallel processing simulation.' },
    ],
    legacy:
      'Philip Emeagwali inspired a generation of young Nigerians to pursue advanced computer science, mathematics, and software engineering.',
    portraitUrl: '/images/people/philip-emeagwali.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'Science is a continuous human search; an African child has just as much right to uncover the universe\'s code as anyone else.',
    sources: [
      {
        title: 'IEEE Computer Society Archive: Gordon Bell Prize Winners',
        publisher: 'IEEE Computer, 1989',
      },
    ],
  },
  {
    id: 'murtala-muhammed',
    name: 'General Murtala Ramat Muhammed',
    slug: 'murtala-muhammed',
    honorific: 'General',
    birthDate: 'November 8, 1938',
    deathDate: 'February 13, 1976',
    nationality: 'Nigerian',
    state: 'Kano',
    profession: ['Military Officer', 'Head of State of Nigeria', 'Pan-African Patriot'],
    categories: ['leadership', 'independence', 'activists'],
    positions: [
      {
        title: 'Head of the Federal Military Government of Nigeria',
        organization: 'Supreme Military Council',
        startDate: 'July 29, 1975',
        endDate: 'February 13, 1976',
        era: 'Military Transition to Democracy',
      },
      {
        title: 'Federal Commissioner for Communications',
        organization: 'Federal Government',
        startDate: '1974',
        endDate: '1975',
        era: 'Communications Expansion',
      },
    ],
    biography:
      'General Murtala Ramat Muhammed was born in Kano. Educated at Barewa College and the Royal Military Academy Sandhurst, he became Head of State on July 29, 1975. During his electrifying 200 days in office, he transformed Nigerian governance with breathtaking speed. He initiated the relocation of the Federal Capital from congested Lagos to Abuja, created seven new states, instituted a decisive transition timetable to return Nigeria to civilian democratic rule by 1979, and purged thousands of corrupt officials. At the January 1976 OAU Summit in Addis Ababa, he delivered his historic "Africa Has Come of Age" speech, boldly recognizing the MPLA in Angola and resisting American imperial intimidation. He was assassinated on February 13, 1976, riding without an armored motorcade through Lagos traffic.',
    whyTheyMatter:
      'His 200-day administration became the legendary gold standard of decisiveness, accountability, and bold African sovereign foreign policy in Nigerian history.',
    contributions: [
      {
        title: 'Created the Master Plan for Abuja as New Federal Capital',
        description: 'Appointed the Justice Akinola Aguda panel that selected and established the Federal Capital Territory (Abuja) in the geographical heart of Nigeria.',
        year: '1975–1976',
        category: 'Urban Planning & Nation Building',
      },
      {
        title: 'Historic "Africa Has Come of Age" Speech',
        description: 'Defied US President Gerald Ford at the 1976 OAU Summit in Addis Ababa, rallying Africa behind Angolan self-determination and the eradication of apartheid.',
        year: '1976',
        category: 'Pan-African Diplomacy',
      },
      {
        title: 'Transition to Civilian Democracy Program',
        description: 'Formulated the constitutional drafting process that culminated in the return to democratic civilian rule in 1979.',
        year: '1975',
        category: 'Democratic Transition',
      },
    ],
    achievements: [
      {
        title: 'Grand Commander of the Federal Republic (GCFR)',
        year: 'Posthumous',
        significance: 'Highest national award of Nigeria.',
      },
    ],
    timeline: [
      { year: '1938', event: 'Birth in Kano', description: 'Born in Kurawa quarters, Kano.' },
      { year: '1975, July 29', event: 'Became Head of State', description: 'Assumed leadership with popular national acclaim.' },
      { year: '1976, January 11', event: 'Africa Has Come of Age', description: 'Delivered legendary anti-imperialist speech in Addis Ababa.' },
      { year: '1976, February 13', event: 'Assassination in Ikoyi', description: 'Killed in an abortive coup led by Lt. Col. Dimka.' },
    ],
    legacy:
      'General Murtala Muhammed\'s portrait appears on the ₦20 banknote. The Murtala Muhammed International Airport (MMIA) in Lagos and Murtala Muhammed Highway in Calabar memorialize his heroic sacrifice.',
    portraitUrl: '/images/people/murtala-muhammed.jpg',
    featured: true,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'Africa has come of age. It is no longer under the orbit of any extra-continental power. It should no longer take orders from any country, however powerful.',
    sources: [
      {
        title: 'Murtala Muhammed: A Leader Betrayed',
        publisher: 'S.O. Othman, Heinemann Educational',
      },
      {
        title: 'State House Historical Leadership Archive',
        publisher: 'Abuja, Nigeria',
      },
    ],
  },
  {
    id: 'tobi-amusan',
    name: 'Tobi Amusan',
    slug: 'tobi-amusan',
    honorific: 'OON',
    birthDate: 'April 23, 1997',
    nationality: 'Nigerian',
    state: 'Ogun',
    profession: ['World Champion Hurdler', 'World Record Holder', 'Olympian'],
    categories: ['sports', 'women', 'youth-emerging'],
    positions: [
      {
        title: 'World Record Holder, Women\'s 100m Hurdles',
        organization: 'World Athletics',
        startDate: 'July 24, 2022',
        endDate: 'Present',
        era: 'Modern Global Athletics',
      },
    ],
    biography:
      'Oluwatobiloba Ayomide Amusan was born in Ijebu Ode, Ogun State, to schoolteacher parents. After excelling at the African and Commonwealth Games, she made history on July 24, 2022, at the World Athletics Championships in Eugene, Oregon. In the semi-finals of the 100-meter hurdles, she clocked an astonishing 12.12 seconds, shattering the world record, before winning the Gold medal in the final (12.06s wind-assisted). She became the very first Nigerian athlete in history to set an official World Athletics world record and the first Nigerian World Champion in track and field.',
    whyTheyMatter:
      'She etched Nigeria\'s name into the all-time world record books of track and field, proving the peerless speed and discipline of Nigerian youth on the world stage.',
    contributions: [
      {
        title: 'World Athletics Record (12.12s)',
        description: 'Shattered Kendra Harrison\'s world record in the 100m hurdles at the World Championships in Oregon.',
        year: '2022',
        category: 'Athletics Record',
      },
      {
        title: 'First Nigerian World Champion',
        description: 'Won Nigeria\'s first ever World Athletics Championship Gold medal.',
        year: '2022',
        category: 'Athletics Championship',
      },
    ],
    achievements: [
      {
        title: 'World Athletics World Record Holder',
        year: '2022',
        significance: 'Current reigning fastest time in human history for 100m hurdles.',
      },
      {
        title: 'Officer of the Order of the Niger (OON)',
        year: '2022',
        significance: 'Conferred by the President of Nigeria.',
      },
    ],
    timeline: [
      { year: '1997', event: 'Birth in Ijebu Ode', description: 'Began racing barefoot in school competitions.' },
      { year: '2022, July 24', event: 'World Record 12.12s', description: 'Stunned the world in Eugene, Oregon.' },
    ],
    legacy:
      'Tobi Amusan is a global symbol of athletic perfection and Nigerian resilience.',
    portraitUrl: '/images/people/tobi-amusan.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'Trust the process. When your time comes, not even the clock can stand in your way.',
    sources: [
      {
        title: 'World Athletics Official Record Book',
        publisher: 'World Athletics, Monaco',
      },
    ],
  },
  {
    id: 'kanu-nwankwo',
    name: 'Nwankwo Kanu',
    slug: 'kanu-nwankwo',
    honorific: 'OON (Papilo)',
    birthDate: 'August 1, 1976',
    nationality: 'Nigerian',
    state: 'Abia',
    profession: ['Football Legend', 'Olympic Champion', 'Philanthropist'],
    categories: ['sports', 'innovators', 'youth-emerging'],
    positions: [
      {
        title: 'Captain, Nigeria Olympic Football Team (Dream Team I)',
        organization: 'Nigeria Football Federation',
        startDate: '1996',
        endDate: '1996',
        era: 'Olympic Glory',
      },
      {
        title: 'Founder, Kanu Heart Foundation (KHF)',
        organization: 'KHF Non-Profit',
        startDate: '2000',
        endDate: 'Present',
        era: 'Philanthropic Healthcare',
      },
    ],
    biography:
      'Nwankwo Kanu, affectionately known worldwide as "Papilo," was born in Owerri, Imo State, with roots in Abia State. He won the 1993 FIFA U-17 World Cup with Nigeria before joining Ajax Amsterdam, winning the UEFA Champions League at age 18. At the 1996 Atlanta Olympics, he captained the Nigerian "Dream Team" to historic Gold, famously scoring two unforgettable late goals against Brazil in the semi-final. After overcoming a career-threatening heart valve defect, he joined Arsenal FC, becoming an indispensable member of the historic "Invincibles" (2003–04). In 2000, he founded the Kanu Heart Foundation, which has successfully funded over 600 open-heart surgeries for underprivileged African children.',
    whyTheyMatter:
      'He is a continental football icon who transformed his personal brush with cardiovascular illness into a life-saving philanthropic crusade that has saved hundreds of young lives.',
    contributions: [
      {
        title: 'Captained Dream Team to 1996 Olympic Gold',
        description: 'Led Nigeria to become the first African nation to win Olympic Gold in football in Atlanta 1996.',
        year: '1996',
        category: 'Sports Triumph',
      },
      {
        title: 'Founded Kanu Heart Foundation',
        description: 'Personally funded and facilitated over 600 open-heart surgeries for underprivileged children across Africa.',
        year: '2000–Present',
        category: 'Philanthropy',
      },
    ],
    achievements: [
      {
        title: 'Two-Time African Footballer of the Year',
        year: '1996, 1999',
        significance: 'Recognized as Africa\'s finest footballer.',
      },
      {
        title: 'Officer of the Order of the Niger (OON)',
        year: '2000',
        significance: 'Conferred by the Federal Government.',
      },
    ],
    timeline: [
      { year: '1976', event: 'Birth in Owerri', description: 'Began with Iwuanyanwu Nationale.' },
      { year: '1996', event: 'Atlanta Gold & Heart Surgery', description: 'Won Olympic Gold then underwent aortic valve surgery in Cleveland.' },
      { year: '2000', event: 'Kanu Heart Foundation Launch', description: 'Inaugurated medical charity in Lagos.' },
    ],
    legacy:
      'Nwankwo Kanu is beloved worldwide as an ambassador of hope and sportsmanship.',
    portraitUrl: '/images/people/kanu-nwankwo.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'Heart problems can happen to anyone. But if God saved my life on the pitch, my life must be dedicated to saving other children\'s hearts.',
    sources: [
      {
        title: 'Kanu: Born to Win',
        publisher: 'Sports Publications International',
      },
    ],
  },
  {
    id: 'king-sunny-ade',
    name: 'King Sunny Ade',
    slug: 'king-sunny-ade',
    honorific: 'Chief Sunday Adeniyi Adegeye (MFR)',
    birthDate: 'September 22, 1946',
    nationality: 'Nigerian',
    state: 'Ondo',
    profession: ['Juju Music King', 'Composer', 'Multi-Instrumentalist', 'Cultural Ambassador'],
    categories: ['entertainment', 'culture', 'innovators'],
    positions: [
      {
        title: 'King of Juju Music',
        organization: 'African Beats Orchestra',
        startDate: '1966',
        endDate: 'Present',
        era: 'Global African World Music',
      },
    ],
    biography:
      'Chief Sunday Adeniyi Adegeye, universally crowned "King Sunny Ade" (KSA), was born into a royal house in Osogbo to parents from Ondo town. He modernized Juju music by introducing the talking drum (gangan), pedal steel guitar, and Hawaiian electric guitar into polyrhythmic West African ensembles. In the early 1980s, signed to Island Records, his albums "Juju Music" and "Syncro System" became global sensations. "Syncro System" in 1983 earned him Nigeria\'s first-ever Grammy Award nomination. He served as President of the Musical Copyright Society of Nigeria (MCSN) and has released over 120 albums across a six-decade career.',
    whyTheyMatter:
      'He carried the philosophical poetry, praise poetry (oriki), and rhythmic complexity of Yoruba civilization to the world\'s greatest concert stages.',
    contributions: [
      {
        title: 'First Nigerian Nominated for a Grammy Award',
        description: 'Nominated in 1983 for Best Ethnic or Traditional Folk Recording for "Syncro System".',
        year: '1983',
        category: 'Music History',
      },
      {
        title: 'Modernized African Juju Orchestration',
        description: 'Introduced the pedal steel guitar and synths into West African percussion ensembles.',
        year: '1968–1985',
        category: 'Artistic Innovation',
      },
    ],
    achievements: [
      {
        title: 'Member of the Order of the Federal Republic (MFR)',
        year: '1999',
        significance: 'National honor for lifetime cultural enrichment.',
      },
      {
        title: 'Hard Rock Cafe Memorabilia Induction',
        year: '2016',
        significance: 'First African musician inducted into Hard Rock Hall of Fame.',
      },
    ],
    timeline: [
      { year: '1946', event: 'Birth in Osogbo', description: 'Born into Ondo royalty.' },
      { year: '1966', event: 'Formed African Beats', description: 'Launched independent musical career.' },
      { year: '1983', event: 'Grammy Nomination', description: 'International tour with Island Records.' },
    ],
    legacy:
      'King Sunny Ade remains the peerless monarch of African dance rhythms.',
    portraitUrl: '/images/people/king-sunny-ade.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'Music is like a river; you can drink from it, you can bathe in it, but you can never stop its flow.',
    sources: [
      {
        title: 'Juju: A Social History and Ethnography of an African Popular Music',
        publisher: 'Christopher Alan Waterman, University of Chicago Press',
      },
    ],
  },
  {
    id: 'flora-nwapa',
    name: 'Flora Nwapa',
    slug: 'flora-nwapa',
    honorific: 'Prof. (OON)',
    birthDate: 'January 13, 1931',
    deathDate: 'October 16, 1993',
    nationality: 'Nigerian',
    state: 'Imo',
    profession: ['Novelist', 'First Female African Publisher', 'Minister'],
    categories: ['literature', 'women', 'education'],
    positions: [
      {
        title: 'Founder, Tana Press',
        organization: 'Tana Press Limited',
        startDate: '1974',
        endDate: '1993',
        era: 'Indigenous African Publishing',
      },
      {
        title: 'East Central State Commissioner for Health and Social Welfare',
        organization: 'East Central State Government',
        startDate: '1970',
        endDate: '1975',
        era: 'Post-Civil War Reconstruction',
      },
    ],
    biography:
      'Florence Nwanzuruahu Nkiru Nwapa was born in Oguta, Imo State. Educated at University College, Ibadan, and the University of Edinburgh, she made global history in 1966 when Heinemann published her debut novel, "Efuru". This made Flora Nwapa the very first internationally published Black African female novelist in the English language. In 1974, frustrated by foreign publishers\' neglect of women writers, she founded Tana Press in Enugu—the first indigenous publishing house owned and run by a Black African woman. She also played a pivotal humanitarian role as Commissioner rehabilitating thousands of orphans after the Nigerian Civil War.',
    whyTheyMatter:
      'She broke the male monopoly of early African literature, centering African women as independent, complex, and economically autonomous protagonists.',
    contributions: [
      {
        title: 'Published "Efuru" (1966)',
        description: 'The first internationally published novel by a Black African woman in English, breaking global literary barriers.',
        year: '1966',
        category: 'Literature',
      },
      {
        title: 'Founded Tana Press (1974)',
        description: 'First Black African woman-owned commercial publishing company in Africa.',
        year: '1974',
        category: 'Publishing',
      },
    ],
    achievements: [
      {
        title: 'Officer of the Order of the Niger (OON)',
        year: '1983',
        significance: 'Conferred by the Federal Government for literary innovation.',
      },
    ],
    timeline: [
      { year: '1931', event: 'Birth in Oguta', description: 'Born to Christopher Ijeoma and Martha Nwapa.' },
      { year: '1966', event: 'Publication of Efuru', description: 'Historic milestone in world literature.' },
      { year: '1974', event: 'Founded Tana Press', description: 'Championed African children\'s literature.' },
      { year: '1993', event: 'Passing in Enugu', description: 'Passed away on October 16, 1993.' },
    ],
    legacy:
      'Flora Nwapa opened the gates for Buchi Emecheta, Chimamanda Ngozi Adichie, and generations of African women authors.',
    portraitUrl: '/images/people/flora-nwapa.jpg',
    featured: false,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'I wanted to show that our women have always had dignity, wealth, and spiritual independence.',
    sources: [
      {
        title: 'Flora Nwapa: A Pioneer of African Literature',
        publisher: 'Marie Umeh, Africa World Press',
      },
    ],
  },
  {
    id: 'mikel-obi',
    name: 'John Obi Mikel (Mikel Obi)',
    slug: 'mikel-obi',
    honorific: 'OON',
    birthDate: 'April 22, 1987',
    nationality: 'Nigerian',
    state: 'Plateau',
    profession: ['Football Legend', 'Super Eagles Captain', 'Olympic Bronze Medalist', 'Champions League Winner'],
    categories: ['sports', 'youth-emerging', 'innovators'],
    positions: [
      {
        title: 'Captain, Nigeria National Men\'s Football Team (Super Eagles)',
        organization: 'Nigeria Football Federation',
        startDate: '2016',
        endDate: '2019',
        era: 'Continental Stardom',
      },
      {
        title: 'Captain, Nigeria Olympic Football Team (Rio 2016)',
        organization: 'Nigeria Olympic Committee',
        startDate: '2016',
        endDate: '2016',
        era: 'Olympic Bronze Triumph',
      },
      {
        title: 'Midfielder, Chelsea Football Club',
        organization: 'Chelsea FC',
        startDate: '2006',
        endDate: '2017',
        era: 'European Champion',
      },
    ],
    biography:
      'John Michael Nchekwube Obinna, universally known as John Obi Mikel, is one of the most decorated and celebrated football leaders in Nigerian and African history. Born in Jos, Plateau State, Mikel burst onto the world stage at the 2005 FIFA World Youth Championship in the Netherlands, winning the Silver Ball behind Lionel Messi. He joined Chelsea FC in 2006 and anchored the midfield for 11 distinguished seasons in London, winning the UEFA Champions League (2012), UEFA Europa League (2013), two Premier League titles, three FA Cups, and a League Cup in 372 appearances. In 2013, Mikel was the indomitable linchpin of Stephen Keshi\'s Super Eagles squad that triumphed at the Africa Cup of Nations in South Africa. In 2016, demonstrating unparalleled national devotion, Mikel personally provided financial support for the Nigerian Olympic squad in Rio de Janeiro, leading the team as captain to capture the Olympic Bronze medal. He captained Nigeria at the 2014 and 2018 FIFA World Cups, earning 91 caps as a beloved national hero.',
    whyTheyMatter:
      'A supreme tactical midfield maestro and selfless national captain who financed Nigeria\'s 2016 Olympic campaign out of personal patriotism, delivered AFCON gold, and conquered Europe\'s summit with Chelsea FC.',
    contributions: [
      {
        title: 'Champion of Africa (AFCON 2013)',
        description: 'Commanded the midfield as Nigeria captured its third Africa Cup of Nations crown in South Africa.',
        year: '2013',
        category: 'Sports Triumph',
      },
      {
        title: 'Personally Financed and Captained Rio 2016 Olympic Bronze',
        description: 'Covered team travel, food, and lodging logistics out of pocket when funding stalled, leading Nigeria to Olympic Bronze.',
        year: '2016',
        category: 'National Service & Sports',
      },
      {
        title: 'UEFA Champions League & Europa League Champion',
        description: 'Played full 120 minutes in Munich to win the 2012 UEFA Champions League and 2013 Europa League with Chelsea.',
        year: '2012, 2013',
        category: 'Global Club Honors',
      },
    ],
    achievements: [
      {
        title: 'Officer of the Order of the Niger (OON)',
        year: '2013',
        significance: 'Conferred by President Goodluck Jonathan following AFCON victory.',
      },
      {
        title: 'FIFA World Youth Championship Silver Ball',
        year: '2005',
        significance: 'Voted 2nd best young player in the world behind Lionel Messi.',
      },
      {
        title: '91 International Caps for Nigeria',
        year: '2005–2019',
        significance: 'One of Nigeria\'s longest-serving and most successful captains.',
      },
    ],
    timeline: [
      { year: '1987', event: 'Birth in Jos', description: 'Born in Jos, Plateau State, discovered at Pepsi Football Academy.' },
      { year: '2005', event: 'World Youth Championship', description: 'Won Silver Ball in the Netherlands.' },
      { year: '2012', event: 'UEFA Champions League Triumph', description: 'Champions of Europe with Chelsea in Munich.' },
      { year: '2013', event: 'AFCON Championship', description: 'Crowned champions of Africa in Johannesburg.' },
      { year: '2016', event: 'Rio Olympic Bronze Medal', description: 'Captained Nigeria to Olympic podium.' },
    ],
    legacy:
      'Mikel Obi represents supreme composure under pressure, defensive elegance, and unyielding selflessness in service to Nigeria.',
    portraitUrl: '/images/sports/mikel-obi.jpg',
    featured: true,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'Playing for Nigeria was never about the money; it was always about putting on that green shirt and giving everything for 200 million people.',
    sources: [
      {
        title: 'Confederation of African Football AFCON 2013 Official Technical Report',
        publisher: 'CAF Cairo',
      },
      {
        title: 'IOC Olympic Football Tournament Rio 2016 Report',
        publisher: 'International Olympic Committee',
      },
      {
        title: 'Chelsea Football Club Historical Player Register (372 Appearances)',
        publisher: 'Chelsea FC London',
      },
    ],
  },
  {
    id: 'oladepo-rokeeb-olayinka',
    name: 'Oladepo Rokeeb Olayinka',
    slug: 'oladepo-rokeeb-olayinka',
    honorific: 'Software & AI Engineer · NYSC',
    birthDate: 'Ibadan, Oyo State',
    nationality: 'Nigerian',
    state: 'Oyo',
    profession: [
      'Software Engineer',
      'Hardware Engineer',
      'AI Engineer',
      'Mathematics Graduate',
      'Technology Entrepreneur',
      'CEO, Alphcast Technologies',
    ],
    categories: ['innovators', 'youth-emerging', 'science-tech'],
    positions: [
      {
        title: 'Chief Executive Officer',
        organization: 'Alphcast Technologies',
        startDate: '2023',
        endDate: 'Present',
        era: 'Digital Transformation',
      },
      {
        title: 'Lead Software Architect & Creator',
        organization: 'Nigeria History Hub Platform',
        startDate: '2024',
        endDate: 'Present',
        era: 'National Digital Heritage Preservation',
      },
      {
        title: 'National Youth Service Corps (NYSC) Member',
        organization: 'NYSC Nigeria (State Code: OS/26B/3050)',
        startDate: '2025',
        endDate: 'Present',
        era: 'National Service',
      },
    ],
    biography:
      'Oladepo Rokeeb Olayinka is a Nigerian technology entrepreneur, software engineer, hardware engineer, artificial intelligence engineer, mathematics graduate, and passionate educator with a strong interest in using technology, mathematics, and artificial intelligence to solve real-world problems. He is the Chief Executive Officer of Alphcast Technologies, a technology-driven company focused on developing innovative digital solutions, software applications, artificial intelligence systems, educational technologies, and other technology-based solutions designed to address practical challenges in Nigeria and beyond. Born in Ibadan, Oyo State, Nigeria, one of Africa\'s major and most historically significant cities, Oladepo developed an early interest in mathematics, technology, problem-solving, and innovation. His background in mathematics from Tai Solarin University of Education (TASUED), Ogun State, has played an important role in shaping his analytical approach to software development, AI, engineering, and technology entrepreneurship. Serving as a dedicated NYSC member (State Code: OS/26B/3050), Oladepo spearheaded the design, engineering, and development of the Nigeria History Hub website to celebrate Nigerian achievement, history, and heritage from 1960 to 2026.',
    whyTheyMatter:
      'A brilliant young Nigerian software engineer, mathematician, and NYSC corps member who engineered the Nigeria History Hub platform and leads Alphcast Technologies to empower national digital innovation.',
    contributions: [
      {
        title: 'Created the Nigeria History Hub Digital Heritage Platform',
        description: 'Architected and built the comprehensive national archive preserving 66 years of Nigerian independence, heroes, and verified records.',
        year: '2024–2026',
        category: 'Technology & National Heritage',
      },
      {
        title: 'Founded Alphcast Technologies',
        description: 'Established technology company delivering AI-powered software, digital learning tools, and modern software applications.',
        year: '2023–Present',
        category: 'Technology Entrepreneurship',
      },
    ],
    achievements: [
      {
        title: 'B.Sc. Mathematics Graduate',
        year: '2024',
        significance: 'Graduated from Tai Solarin University of Education (TASUED), Ogun State.',
      },
      {
        title: 'National Youth Service Corps (NYSC)',
        year: '2025–2026',
        significance: 'State Code: OS/26B/3050, serving the Nigerian nation through technological development.',
      },
    ],
    timeline: [
      { year: 'Ibadan', event: 'Roots in Oyo State', description: 'Born in Ibadan, developing passion for mathematics and programming.' },
      { year: 'TASUED', event: 'Mathematics Degree', description: 'Studied mathematics and analytical problem-solving at TASUED.' },
      { year: 'Alphcast', event: 'Founded Alphcast Technologies', description: 'Inaugurated software, AI, and hardware development enterprise.' },
      { year: 'NYSC', event: 'Corps Member (OS/26B/3050)', description: 'Serving Nigeria and building national digital heritage solutions.' },
    ],
    legacy:
      'Oladepo Rokeeb demonstrates how young Nigerian corps members and mathematicians can leverage coding and AI to preserve history and build practical solutions for national development.',
    portraitUrl: '/images/creator/oladepo-rokeeb.jpg',
    featured: true,
    verified: true,
    editorialTier: '66-cohort',
    quote: 'Mathematics is not only an academic discipline but the foundation of reasoning, computer science, and artificial intelligence to solve real challenges in our country.',
    sources: [
      {
        title: 'Alphcast Technologies Corporate Registry',
        publisher: 'Alphcast Technologies',
      },
      {
        title: 'Tai Solarin University of Education Academic Registry',
        publisher: 'TASUED Ogun State',
      },
      {
        title: 'National Youth Service Corps Official State Documentation (OS/26B/3050)',
        publisher: 'NYSC Directorate Headquarters',
      },
    ],
  },
];
