export interface RegionalLeader {
  id: string;
  name: string;
  position: string;
  region: 'Western Region' | 'Northern Region' | 'Eastern Region';
  period: string;
  photoUrl: string;
  contributions: string[];
  historicalRole: string;
  sources: string[];
}

export interface LandmarkAchievement {
  id: string;
  title: string;
  year: string;
  location: string;
  region: 'Western Region' | 'Northern Region' | 'Eastern Region';
  description: string;
  category: 'Education' | 'Industry' | 'Infrastructure' | 'Broadcasting' | 'Agriculture' | 'Finance';
  significance: string;
  sources: string[];
}

export interface RegionalTimelineEvent {
  year: string;
  title: string;
  region: 'National' | 'Western Region' | 'Northern Region' | 'Eastern Region';
  description: string;
  sources: string[];
}

export interface RegionData {
  id: 'west' | 'north' | 'east';
  name: string;
  period: string;
  badge: string;
  description: string;
  leaders: string[];
  achievements: string[];
  keyInstitutions: string[];
  featuredProject: {
    title: string;
    location: string;
    dates: string;
    description: string;
    details: string[];
    sourceAttribution: string;
  };
  sources: string[];
}

export const REGIONS_DATA: RegionData[] = [
  {
    id: 'west',
    name: 'Western Region',
    period: '1939–1967',
    badge: 'Education & Enterprise Pioneer',
    description:
      'The Western Region became associated with major developments in education, broadcasting, agriculture, housing, infrastructure and regional enterprise.',
    leaders: [
      'Chief Obafemi Awolowo',
      'Chief Samuel Ladoke Akintola',
      'Chief Anthony Enahoro',
      'Chief A.M.A. Akinloye',
      'Sir Adesoji Aderemi',
      'Simeon Adebo',
      'Hezekiah Oluwasanmi',
    ],
    achievements: [
      'Free Universal Primary Education (1955)',
      'Western Nigeria Television (WNTV, 1959)',
      'Liberty Stadium (Ibadan, 1960)',
      'Cocoa House (Ibadan, 1964/1965)',
      'Ikeja Industrial Estate',
      'Bodija Housing Estate',
      'Farm settlements and institutes',
      'Western Nigeria Development Corporation (WNDC)',
      'University of Ife (1961/1962)',
      'Cooperative Marketing & Credit Societies',
      'Healthcare programmes and rural clinics',
      'Extensive asphalt road networks',
    ],
    keyInstitutions: [
      'Western Nigeria Development Corporation (WNDC)',
      'Western Nigeria Television (WNTV)',
      'University of Ife (now Obafemi Awolowo University)',
      'Cooperative Bank of Western Nigeria',
      'Western Nigeria Housing Corporation',
      'Western Nigeria Printing Corporation',
    ],
    featuredProject: {
      title: 'Cocoa House',
      location: 'Ibadan',
      dates: 'Completed 1964 · Commissioned 1965',
      description:
        "Cocoa House was developed as part of the Western Region's economic programme. Its development originated during the earlier Awolowo administration, construction was completed in 1964, and it was commissioned in 1965 during the administration of Samuel Ladoke Akintola.",
      details: [
        '26-storey architectural landmark, built entirely from regional cocoa export earnings',
        'Commissioned during the administration of Premier Samuel Ladoke Akintola in July 1965',
        'Stood as the tallest building in tropical Africa at its commissioning',
        'Headquarters of the Western Nigeria Development Corporation and agricultural cooperatives',
      ],
      sourceAttribution:
        'National Archives of Nigeria; Western Nigeria Ministry of Information Records (1964–1965); Western Nigeria Development Corporation Reports.',
    },
    sources: [
      'National Archives of Nigeria (Ibadan Branch)',
      'Western Region Government White Papers (1954–1966)',
      'Path to Nigerian Freedom (Obafemi Awolowo)',
      'Development of Education in Western Nigeria (Prof. Babs Fafunwa)',
    ],
  },
  {
    id: 'north',
    name: 'Northern Region',
    period: '1954–1966',
    badge: 'Agrarian & Administrative Pillar',
    description:
      'The Northern Region pursued programmes in education, agriculture, livestock, infrastructure, healthcare, literacy, administration and regional economic development.',
    leaders: [
      'Sir Ahmadu Bello',
      'Sir Kashim Ibrahim',
      'Sir Abubakar Tafawa Balewa',
      'Abubakar Imam',
      'Aminu Kano',
      'Other documented contributors',
    ],
    achievements: [
      'Expansion of primary and secondary education',
      'Agricultural development (Groundnut pyramids & cotton)',
      'Livestock development and veterinary corridors',
      'Irrigation and water basin infrastructure',
      'Rural development programmes',
      'Regional road networks and bridges',
      'Clean water supply expansion',
      'Healthcare centres and dispensaries',
      'Yaki da Jahilci mass adult literacy campaigns',
      'Bank of the North (1959)',
      'Northern Nigeria Development Corporation (NNDC)',
      'Northern Nigeria Investments Limited (NNIL)',
      'Regional broadcasting (Radio Television Kaduna)',
      'Ahmadu Bello University (1961/1962)',
    ],
    keyInstitutions: [
      'Ahmadu Bello University (ABU Zaria)',
      'Bank of the North Limited',
      'Northern Nigeria Development Corporation (NNDC)',
      'Northern Nigeria Investments Limited (NNIL)',
      'Broadcasting Company of Northern Nigeria (BCNN)',
      'Institute of Administration, Zaria',
    ],
    featuredProject: {
      title: 'Ahmadu Bello University',
      location: 'Zaria',
      dates: '1961 Legislation · 1962 Opened',
      description:
        'The Northern Region government established the university through legislation in 1961, and it opened in 1962.',
      details: [
        'Established by statutory enactment of the Northern Regional Assembly in 1961',
        'Formally opened in October 1962 with four constituent faculties and research institutes',
        'Incorporated the School of Agriculture in Samaru and the Institute of Administration in Zaria',
        'Pioneered veterinary medicine, agricultural research, civil engineering, and public administration training',
      ],
      sourceAttribution:
        'Northern Region House of Assembly Hansard (1961); Ashby Commission Report on Post-School Certificate and Higher Education (1960); ABU Historical Archives.',
    },
    sources: [
      'National Archives of Nigeria (Kaduna Branch)',
      'Northern Nigeria Development Corporation Historical Records',
      'My Life: An Autobiography (Sir Ahmadu Bello)',
      'Ashby Commission Report (1960)',
    ],
  },
  {
    id: 'east',
    name: 'Eastern Region',
    period: '1939–1967',
    badge: 'Industrialisation & Enterprise Hub',
    description:
      'The Eastern Region became associated with education, agriculture, farm settlements, industrialisation, manufacturing, healthcare and regional enterprise.',
    leaders: [
      'Dr. Nnamdi Azikiwe',
      'Dr. Michael Okpara',
      'Dr. Akanu Ibiam',
      'Alvan Ikoku',
      'Other documented contributors',
    ],
    achievements: [
      'University of Nigeria, Nsukka (1955/1960)',
      'Eastern Nigeria Development Corporation (ENDC)',
      'African Continental Bank (ACB)',
      'Extensive farm settlements (Ulonna, Ohaji, Igbariam, Boki)',
      'Agricultural development (Palm oil, rubber, cocoa, rice)',
      'Trans-Amadi Industrial Area (Port Harcourt)',
      'Nkalagu Cement Company (Nigercem)',
      'Michelin Tire Factory (Port Harcourt)',
      'Golden Guinea Brewery (Umuahia)',
      'Aba and Onitsha textile manufacturing',
      'Modern shoe manufacturing',
      'Hotel Presidential (Enugu & Port Harcourt)',
      'Gas-related industrial development (Afam power)',
      'Healthcare and cottage hospital expansion',
      'Roads and deep-water port infrastructure',
    ],
    keyInstitutions: [
      'University of Nigeria, Nsukka (UNN)',
      'Eastern Nigeria Development Corporation (ENDC)',
      'African Continental Bank (ACB)',
      'Eastern Nigeria Marketing Board',
      'Eastern Nigeria Information Service',
      'Hotel Presidential Corporation',
    ],
    featuredProject: {
      title: 'University of Nigeria, Nsukka',
      location: 'Nsukka',
      dates: '1955 Legislation · 1960 Opened',
      description:
        'The Eastern Region government passed legislation establishing the university in 1955, and the institution opened at Nsukka in 1960.',
      details: [
        'Enacted into law by the Eastern House of Assembly on May 18, 1955',
        'Formally dedicated on October 7, 1960 during Nigeria’s independence celebrations',
        'First indigenous, autonomous degree-granting Nigerian university',
        'Conceived on the American land-grant philosophy linking higher education directly to agricultural, scientific, and vocational industry',
      ],
      sourceAttribution:
        'Eastern House of Assembly Official Reports (1955); UNN Foundation Archives; University of Nigeria Law No. 6 of 1955.',
    },
    sources: [
      'National Archives of Nigeria (Enugu Branch)',
      'Eastern Nigeria Development Corporation Official Gazettes (1955–1966)',
      'Economic Survey of the Eastern Region of Nigeria',
      'The Story of the University of Nigeria (Chuka Okonkwo)',
    ],
  },
];

export const REGIONAL_TIMELINE: RegionalTimelineEvent[] = [
  {
    year: '1939',
    title: 'Creation of Western & Eastern Regions',
    region: 'National',
    description:
      'Colonial administrative restructuring formally divides the former Southern Provinces of Nigeria into the Western Region and the Eastern Region, laying the foundation for Nigeria’s tripartite regional federalism.',
    sources: ['Colonial Office Administrative Orders (1939)', 'National Archives of Nigeria'],
  },
  {
    year: '1954',
    title: 'Sir Ahmadu Bello becomes Premier of Northern Region',
    region: 'Northern Region',
    description:
      'Following the introduction of the Lyttelton Constitution that institutionalized genuine regional autonomy, Sir Ahmadu Bello assumes office as the first Premier of the Northern Region.',
    sources: ['Northern House of Assembly Debates (1954)', 'State House Archives'],
  },
  {
    year: '1955',
    title: 'University of Nigeria Law Enacted',
    region: 'Eastern Region',
    description:
      'The Eastern Region House of Assembly passes legislation establishing the University of Nigeria, pioneering an autonomous degree-granting institution model.',
    sources: ['Eastern Region Law No. 6 of 1955', 'UNN Archives'],
  },
  {
    year: '1955',
    title: 'Free Universal Primary Education Implemented',
    region: 'Western Region',
    description:
      'Western Region implements Africa’s first comprehensive Free Universal Primary Education (UPE) programme, resulting in massive school enrolment expansions.',
    sources: ['Western Region Ministry of Education White Paper (1955)', 'Fafunwa Educational History'],
  },
  {
    year: '1959',
    title: 'Western Nigeria Television (WNTV) Begins Broadcasting',
    region: 'Western Region',
    description:
      'WNTV launches in Ibadan as the first television broadcast service in tropical Africa, preceding television in several European nations.',
    sources: ['WNTV Broadcast Corporation Historical Papers', 'Federal Ministry of Information'],
  },
  {
    year: '1959',
    title: 'Dr. Michael Okpara Becomes Premier of Eastern Region',
    region: 'Eastern Region',
    description:
      'Dr. Michael Okpara succeeds Dr. Nnamdi Azikiwe as Premier of Eastern Region, initiating the comprehensive agricultural farm settlement and industrialization program.',
    sources: ['Eastern Region Gazettes (1959)', 'Eastern Nigeria Development Corporation Records'],
  },
  {
    year: '1960',
    title: 'Nigeria Gains Independence',
    region: 'National',
    description:
      'The Federation of Nigeria formally achieves full sovereign independence on October 1, 1960, operating under a regional federal structure with regional parliaments and premiers.',
    sources: ['Nigeria Independence Constitution 1960', 'National Archives'],
  },
  {
    year: '1960',
    title: 'University of Nigeria Formally Opens',
    region: 'Eastern Region',
    description:
      'University of Nigeria opens at Nsukka with inaugural classes and dedicated faculties, timed to coincide with Nigeria’s sovereign independence festivities.',
    sources: ['UNN Foundation Gazette (1960)', 'Federal Ministry of Education'],
  },
  {
    year: '1961',
    title: 'University of Ife Established',
    region: 'Western Region',
    description:
      'The Western Region government enacts the University of Ife provisional council decree to meet the growing need for specialized higher technical, agricultural and legal education.',
    sources: ['Western Nigeria Law No. 27 of 1961', 'OAU Ife Archives'],
  },
  {
    year: '1961',
    title: 'Northern Region Legislation Establishes ABU',
    region: 'Northern Region',
    description:
      'Northern Region Assembly passes statutory enactment authorizing the creation of a major regional university in Zaria.',
    sources: ['Northern Regional Legislature Hansard (1961)', 'ABU Foundation Records'],
  },
  {
    year: '1962',
    title: 'Ahmadu Bello University Formally Opens',
    region: 'Northern Region',
    description:
      'Ahmadu Bello University opens in Zaria with specialized institutes in public administration, veterinary medicine, and tropical agriculture.',
    sources: ['ABU Historical Archive', 'National Universities Commission Records'],
  },
  {
    year: '1963',
    title: 'Major Eastern Industrial Projects Expand',
    region: 'Eastern Region',
    description:
      'The Trans-Amadi Industrial Layout in Port Harcourt, Nigercem at Nkalagu, and the Golden Guinea Brewery in Umuahia undergo major commercial expansions.',
    sources: ['ENDC Annual Report 1963', 'Eastern Ministry of Commerce and Industry'],
  },
  {
    year: '1964',
    title: 'Cocoa House Construction Completed',
    region: 'Western Region',
    description:
      'Construction of the 26-storey Cocoa House skyscraper in Ibadan is completed, symbolizing the economic viability of regional agricultural revenue.',
    sources: ['Western Nigeria Development Corporation Annual Report (1964)'],
  },
  {
    year: '1965',
    title: 'Cocoa House Formally Commissioned',
    region: 'Western Region',
    description:
      'Cocoa House is commissioned during the administration of Premier Samuel Ladoke Akintola in Ibadan, serving as the commercial epicenter of the Western Region.',
    sources: ['Western Region Ministry of Information Press Release (July 1965)'],
  },
  {
    year: '1966',
    title: 'First Republic Regional Governments Terminated',
    region: 'National',
    description:
      'The January 15, 1966 military coup and subsequent political crisis bring the civilian regional premiers and parliamentary structures to an abrupt close.',
    sources: ['Supreme Military Council Decree No. 1 (1966)', 'State House Archive'],
  },
  {
    year: '1967',
    title: 'Regional System Replaced by 12-State Structure',
    region: 'National',
    description:
      'Decree No. 14 of 1967 dissolves the former regions and establishes a twelve-state administrative federation, ending Nigeria’s historical regional era.',
    sources: ['Federal Military Government Decree No. 14 (May 1967)', 'National Archives'],
  },
];

export const REGIONAL_LEADERS: RegionalLeader[] = [
  // Western
  {
    id: 'awolowo-reg',
    name: 'Chief Obafemi Awolowo',
    position: 'Premier of Western Region (1954–1959)',
    region: 'Western Region',
    period: '1954–1959',
    photoUrl: '/images/people/obafemi-awolowo.jpg',
    contributions: [
      'Introduced Free Universal Primary Education (1955)',
      'Established Western Nigeria Television (WNTV) in 1959',
      'Created agricultural farm settlements and marketing cooperatives',
      'Initiated the planning of Cocoa House and industrial estates in Ikeja',
    ],
    historicalRole:
      'Leader of the Action Group (AG) and visionary administrator whose regional five-year development plans laid the framework for modern education, health, and enterprise in Western Nigeria.',
    sources: ['National Archives Ibadan', 'Path to Nigerian Freedom', 'Western Nigeria White Papers'],
  },
  {
    id: 'akintola-reg',
    name: 'Chief Samuel Ladoke Akintola',
    position: 'Premier of Western Region (1960–1966)',
    region: 'Western Region',
    period: '1960–1966',
    photoUrl: '/images/people/ladoke-akintola.jpg',
    contributions: [
      'Commissioned Cocoa House in 1965 during his administration',
      'Co-founded the University of Ife (1961/1962)',
      'Expanded regional agricultural credit and industrial partnerships',
      'Established regional technical schools and healthcare facilities',
    ],
    historicalRole:
      'Accomplished orator, lawyer, and statesman who served as Federal Minister of Communications and Aviation before serving as Premier of the Western Region through independence.',
    sources: ['Western Region Hansard (1960–1966)', 'S.L. Akintola: His Life and Times (Akinjide Osuntokun)'],
  },
  {
    id: 'enahoro-reg',
    name: 'Chief Anthony Enahoro',
    position: 'Minister of Home Affairs & Information, Western Region',
    region: 'Western Region',
    period: '1954–1959',
    photoUrl: '/images/people/anthony-enahoro.png',
    contributions: [
      'Moved the historic 1953 federal motion for Nigeria’s self-government in 1956',
      'Supervised the regional information strategy and expansion of WNTV',
      'Championed legislative reform and constitutional progressivism',
    ],
    historicalRole:
      'Pioneering journalist and political strategist who spearheaded the communication of regional government accomplishments to citizens across the federation.',
    sources: ['Fugitive Offender (Anthony Enahoro)', 'National Archives of Nigeria'],
  },
  {
    id: 'akinloye-reg',
    name: 'Chief A.M.A. Akinloye',
    position: 'Minister of Agriculture & Natural Resources, Western Region',
    region: 'Western Region',
    period: '1952–1956',
    photoUrl: '/images/people/ama-akinloye.jpg',
    contributions: [
      'Formulated regional agricultural mechanization initiatives',
      'Strengthened cocoa crop disease control and chemical spraying subsidies',
      'Encouraged formation of farmers’ cooperative produce marketing unions',
    ],
    historicalRole:
      'Key executive in the early regional cabinet responsible for expanding Western Nigeria’s cocoa yield, providing the fiscal capital for education and public infrastructure.',
    sources: ['Western Region Ministry of Agriculture Gazettes (1952–1956)'],
  },
  {
    id: 'aderemi-reg',
    name: 'Sir Adesoji Aderemi',
    position: 'Ooni of Ife & Governor of Western Region',
    region: 'Western Region',
    period: '1960–1962',
    photoUrl: '/images/people/adesoji-aderemi.jpg',
    contributions: [
      'First indigenous African governor in the British Commonwealth (1960)',
      'Allocated ancestral royal land in Ile-Ife for the establishment of University of Ife',
      'Facilitated traditional and parliamentary balance during transition to independence',
    ],
    historicalRole:
      'Traditional ruler and statesman who bridged traditional institutions with modern democratic federalism, serving as ceremonial Governor of the Western Region.',
    sources: ['Western Nigeria Gazette (1960)', 'The Ooni of Ife: Royal Biography'],
  },

  // Northern
  {
    id: 'ahmadu-bello-reg',
    name: 'Sir Ahmadu Bello (Sardauna of Sokoto)',
    position: 'Premier of Northern Region (1954–1966)',
    region: 'Northern Region',
    period: '1954–1966',
    photoUrl: '/images/people/ahmadu-bello.jpg',
    contributions: [
      'Established Ahmadu Bello University (ABU Zaria) in 1961/1962',
      'Founded Bank of the North and Northern Nigeria Development Corporation (NNDC)',
      'Implemented extensive agricultural and livestock irrigation schemes',
      'Launched Northernisation policy prioritizing regional public service training',
    ],
    historicalRole:
      'Sardauna of Sokoto and foremost political leader of the Northern Region who unified diverse provincial emirates and communities under a coherent development mission.',
    sources: ['My Life (Sir Ahmadu Bello)', 'Kaduna National Archives', 'NNDC Archives'],
  },
  {
    id: 'kashim-ibrahim-reg',
    name: 'Sir Kashim Ibrahim',
    position: 'Governor of Northern Region (1962–1966)',
    region: 'Northern Region',
    period: '1962–1966',
    photoUrl: '/images/people/kashim-ibrahim.jpg',
    contributions: [
      'First indigenous Governor of Northern Nigeria',
      'Pioneered primary and secondary educational expansion across Borno and the North',
      'Served as Minister of Social Services and Education before becoming Governor',
      'Maintained institutional integrity during early regional transition challenges',
    ],
    historicalRole:
      'Distinguished educator and statesman from Borno who dedicated over three decades to building teacher training colleges, secondary schools, and civil service standards.',
    sources: ['Sir Kashim Ibrahim: A Biography', 'Northern Region Gazettes (1962–1966)'],
  },
  {
    id: 'tafawa-balewa-reg',
    name: 'Sir Abubakar Tafawa Balewa',
    position: 'Federal Prime Minister & Northern Statesman',
    region: 'Northern Region',
    period: '1954–1966',
    photoUrl: '/images/people/abubakar-tafawa-balewa.jpg',
    contributions: [
      'Represented Northern Region in early constitutional conferences',
      'Advocated federal railway expansion and Kainji Dam hydro-development',
      'Championed education as Northern Minister of Works and later Prime Minister',
    ],
    historicalRole:
      'Respected orator from Bauchi who provided steady national leadership while preserving strong institutional collaboration with Northern regional leaders.',
    sources: ['A Right Honourable Gentleman (Trevor Clark)', 'National Archives of Nigeria'],
  },
  {
    id: 'abubakar-imam-reg',
    name: 'Mallam Abubakar Imam',
    position: 'Author, Editor of Gaskiya Ta Fi Kwabo & Public Service Leader',
    region: 'Northern Region',
    period: '1939–1966',
    photoUrl: '/images/people/abubakar-imam.jpg',
    contributions: [
      'Pioneered mass literacy publishing in Hausa (Magana Jari Ce)',
      'Edited the influential regional newspaper Gaskiya Ta Fi Kwabo',
      'Served on the Northern Region Public Service Commission',
    ],
    historicalRole:
      'Literary giant and public intellectual whose publications fostered political literacy, civic participation, and educational enlightenment throughout the Northern provinces.',
    sources: ['Abubakar Imam: Memoirs and Works', 'Northern Literature Bureau Records'],
  },
  {
    id: 'aminu-kano-reg',
    name: 'Mallam Aminu Kano',
    position: 'Leader of Northern Elements Progressive Union (NEPU)',
    region: 'Northern Region',
    period: '1950–1966',
    photoUrl: '/images/people/aminu-kano.jpg',
    contributions: [
      'Championed commoners’ rights (Talakawa) and democratic franchise',
      'Promoted grassroots literacy, gender inclusion, and labor cooperatives',
      'Advocated judicial reform and transparency in local authority administration',
    ],
    historicalRole:
      'Philosopher-politician and social reformer whose progressive grassroots activism broadened democratic participation and human rights in Northern Nigeria.',
    sources: ['Politics of a Populist: Aminu Kano (Feinstein)', 'National Archives'],
  },

  // Eastern
  {
    id: 'azikiwe-reg',
    name: 'Dr. Nnamdi Azikiwe',
    position: 'Premier of Eastern Region (1954–1959)',
    region: 'Eastern Region',
    period: '1954–1959',
    photoUrl: '/images/people/nnamdi-azikiwe.webp',
    contributions: [
      'Spearheaded the 1955 legislation founding the University of Nigeria, Nsukka',
      'Established the African Continental Bank (ACB) to fund indigenous business',
      'Structured the Eastern Nigeria Development Corporation (ENDC)',
      'Expanded primary and secondary scholarships across the region',
    ],
    historicalRole:
      'Zik of Africa, preeminent nationalist leader and Premier who introduced the land-grant university concept to Nigeria and pioneered indigenous commercial banking.',
    sources: ['My Odyssey (Nnamdi Azikiwe)', 'Eastern Region Hansard (1954–1959)', 'UNN Archives'],
  },
  {
    id: 'okpara-reg',
    name: 'Dr. Michael Iheonukara Okpara',
    position: 'Premier of Eastern Region (1959–1966)',
    region: 'Eastern Region',
    period: '1959–1966',
    photoUrl: '/images/people/michael-okpara.jpg',
    contributions: [
      'Led the acclaimed Eastern agricultural & industrial revolution',
      'Established comprehensive farm settlements in Ulonna, Ohaji, and Boki',
      'Built Trans-Amadi Industrial Layout in Port Harcourt',
      'Expanded Nigercem Nkalagu, Golden Guinea Brewery, and Hotel Presidential',
    ],
    historicalRole:
      'Medical doctor turned transformative administrator whose economic policies made the Eastern Region one of the fastest-growing agrarian-industrial economies in the developing world in the early 1960s.',
    sources: ['Eastern Nigeria Development Corporation Records', 'Dr. M.I. Okpara: Architect of Regional Enterprise'],
  },
  {
    id: 'ibiam-reg',
    name: 'Sir Francis Akanu Ibiam',
    position: 'Governor of Eastern Region (1960–1966)',
    region: 'Eastern Region',
    period: '1960–1966',
    photoUrl: '/images/people/akanu-ibiam.jpg',
    contributions: [
      'First indigenous Governor of Eastern Nigeria upon independence in 1960',
      'Pioneered mission hospital medicine and rural leprosy eradication',
      'Served as principal of Hope Waddell Training Institution in Calabar',
      'Promoted inter-denominational unity and civil service integrity',
    ],
    historicalRole:
      'Eminent physician and statesman from Unwana who combined Christian medical philanthropy with exemplary constitutional leadership as Eastern Governor.',
    sources: ['Akanu Ibiam: A Legend of Our Time', 'Eastern Nigeria Official Gazettes (1960–1966)'],
  },
  {
    id: 'ikoku-reg',
    name: 'Alvan Azinna Ikoku',
    position: 'President, Nigerian Union of Teachers & Eastern Legislator',
    region: 'Eastern Region',
    period: '1939–1966',
    photoUrl: '/images/people/alvan-ikoku.jpg',
    contributions: [
      'Founded Aggrey Memorial College in Arochukwu (1932)',
      'Led the Nigerian Union of Teachers (NUT) for over two decades',
      'Formulated legislative policy on free primary education and teacher pensions',
      'Served on the Eastern House of Assembly and regional education committees',
    ],
    historicalRole:
      'Dean of Nigerian educators whose relentless advocacy established professional teacher standards, school inspection protocols, and student rights across the Eastern Region.',
    sources: ['History of the Nigerian Union of Teachers', 'National Archives of Nigeria (Enugu)'],
  },
];

export const LANDMARK_ACHIEVEMENTS: LandmarkAchievement[] = [
  {
    id: 'ach-cocoa-house',
    title: 'Cocoa House',
    year: '1964/1965',
    location: 'Ibadan',
    region: 'Western Region',
    category: 'Infrastructure',
    description:
      "Cocoa House was developed as part of the Western Region's economic programme. Its development originated during the earlier Awolowo administration, construction was completed in 1964, and it was commissioned in 1965 during the administration of Samuel Ladoke Akintola.",
    significance: '26-storey pioneer skyscraper built entirely from regional agricultural export revenue.',
    sources: ['WNDC Annual Reports 1964–1965', 'National Archives Ibadan'],
  },
  {
    id: 'ach-wntv',
    title: 'Western Nigeria Television (WNTV)',
    year: '1959',
    location: 'Ibadan',
    region: 'Western Region',
    category: 'Broadcasting',
    description:
      'First television broadcasting station in tropical Africa, launched under the motto "First in Africa" to provide educational programming, public news, and cultural enlightenment.',
    significance: 'Preceded national television in several industrialized European and Asian nations.',
    sources: ['WNTV Official Archives', 'Ministry of Home Affairs Records 1959'],
  },
  {
    id: 'ach-liberty-stadium',
    title: 'Liberty Stadium',
    year: '1960',
    location: 'Ibadan',
    region: 'Western Region',
    category: 'Infrastructure',
    description:
      'First modern Olympic-standard sports facility in Nigeria and tropical Africa, hosting historic national tournaments and international world title boxing bouts.',
    significance: 'Pioneered civic sporting infrastructure and youth athletic development.',
    sources: ['Western Region Ministry of Works Records 1960'],
  },
  {
    id: 'ach-uni-ife',
    title: 'University of Ife',
    year: '1961/1962',
    location: 'Ile-Ife',
    region: 'Western Region',
    category: 'Education',
    description:
      'Established by the Western Regional Government to ensure autonomous regional provision for faculties of agriculture, law, technology, and pharmacy.',
    significance: 'Globally celebrated for its modernist campus architecture and indigenous intellectual traditions.',
    sources: ['Western Nigeria Law No. 27 of 1961', 'OAU Archives'],
  },
  {
    id: 'ach-abu',
    title: 'Ahmadu Bello University',
    year: '1961/1962',
    location: 'Zaria',
    region: 'Northern Region',
    category: 'Education',
    description:
      'The Northern Region government established the university through legislation in 1961, and it opened in 1962. Grew into the largest university in Sub-Saharan Africa.',
    significance: 'Critical hub for agricultural science, veterinary medicine, public administration, and engineering.',
    sources: ['Northern Regional Legislature Hansard (1961)', 'ABU Archives'],
  },
  {
    id: 'ach-unn',
    title: 'University of Nigeria, Nsukka',
    year: '1955/1960',
    location: 'Nsukka',
    region: 'Eastern Region',
    category: 'Education',
    description:
      'The Eastern Region government passed legislation establishing the university in 1955, and the institution opened at Nsukka in 1960, dedicated to restoring human dignity.',
    significance: 'First fully indigenous, autonomous degree-granting university in Nigeria.',
    sources: ['Eastern Region Law No. 6 of 1955', 'UNN Foundation Records'],
  },
  {
    id: 'ach-trans-amadi',
    title: 'Trans-Amadi Industrial Area',
    year: '1960–1964',
    location: 'Port Harcourt',
    region: 'Eastern Region',
    category: 'Industry',
    description:
      'Planned 2,500-acre modern industrial layout built with deep-water port access, dedicated rail sidings, and integrated power to host heavy manufacturing plants.',
    significance: 'Transformed Port Harcourt into the industrial powerhouse of Eastern Nigeria.',
    sources: ['ENDC Development Bulletins 1962–1964'],
  },
  {
    id: 'ach-nkalagu',
    title: 'Nkalagu Cement Company (Nigercem)',
    year: '1957–1962',
    location: 'Nkalagu (Ebonyi)',
    region: 'Eastern Region',
    category: 'Industry',
    description:
      'Pioneering regional cement manufacturing enterprise established by the Eastern Region Government with federal and foreign technical partners.',
    significance: 'Supplied high-grade cement that fueled post-independence bridges, ports, and housing.',
    sources: ['Eastern Nigeria Ministry of Commerce Records 1957'],
  },
  {
    id: 'ach-bank-of-north',
    title: 'Bank of the North',
    year: '1959',
    location: 'Kano / Kaduna',
    region: 'Northern Region',
    category: 'Finance',
    description:
      'Formed by the Northern Regional Government in 1959 to provide commercial credit, commodity financing, and capital mobilization for regional traders and farmers.',
    significance: 'Financed the groundnut pyramids, cotton trades, and Northern industrial ventures.',
    sources: ['Bank of the North Incorporation Records 1959', 'Central Bank of Nigeria'],
  },
  {
    id: 'ach-nndc',
    title: 'Northern Nigeria Development Corporation (NNDC)',
    year: '1956',
    location: 'Kaduna',
    region: 'Northern Region',
    category: 'Finance',
    description:
      'Statutory regional investment corporation that deployed agricultural marketing board surpluses into manufacturing, hotels, textiles, and mining assets.',
    significance: 'Largest regional developmental holding company in Sub-Saharan Africa.',
    sources: ['NNDC Historical Compendium', 'Northern House of Assembly Acts'],
  },
  {
    id: 'ach-endc',
    title: 'Eastern Nigeria Development Corporation (ENDC)',
    year: '1955',
    location: 'Enugu',
    region: 'Eastern Region',
    category: 'Finance',
    description:
      'Investment vehicle of the Eastern Region responsible for establishing agro-industrial plantations, farm settlements, brewery plants, and tourist hotels.',
    significance: 'Pioneered state-backed regional capitalist industrialization.',
    sources: ['ENDC Official Gazettes 1955–1965'],
  },
  {
    id: 'ach-farm-settlements',
    title: 'Regional Farm Settlements Network',
    year: '1959–1965',
    location: 'Across Regions (Ibadan, Ilesa, Ulonna, Ohaji, Samaru)',
    region: 'Western Region',
    category: 'Agriculture',
    description:
      'System of cooperative farm settlements modeled on modern cooperative farming to attract educated school leavers to mechanized cash crop and food cultivation.',
    significance: 'Drove massive food production, youth employment, and high-yield export crops.',
    sources: ['Regional Ministries of Agriculture Reports (1959–1965)'],
  },
  {
    id: 'ach-regional-healthcare',
    title: 'Comprehensive Regional Healthcare Schemes',
    year: '1955–1965',
    location: 'Across Western, Northern & Eastern Regions',
    region: 'Northern Region',
    category: 'Infrastructure',
    description:
      'Decentralized regional networks of rural cottage hospitals, mobile maternal healthcare units, and infectious disease vaccination programmes.',
    significance: 'Dramatically reduced infant mortality and expanded life expectancy in regional towns.',
    sources: ['Joint Regional Health Directors’ Annual Reports (1960–1965)'],
  },
  {
    id: 'ach-roads-infrastructure',
    title: 'Regional Trunk Road & Bridge Networks',
    year: '1954–1966',
    location: 'Federation-wide',
    region: 'Western Region',
    category: 'Infrastructure',
    description:
      'Extensive asphalt road programmes linking agricultural farm settlements, river ports, railway stations, and provincial capital cities across each region.',
    significance: 'Integrated domestic markets and fostered inter-regional commerce.',
    sources: ['Public Works Department Historical Compendium 1966'],
  },
];
