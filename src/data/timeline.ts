import { TimelineEvent } from '../types';

export const NIGERIA_TIMELINE: TimelineEvent[] = [
  {
    id: '1914-amalgamation',
    year: 1914,
    dateStr: 'January 1, 1914',
    title: 'The Amalgamation of Northern and Southern Nigeria',
    description:
      'Lord Frederick Lugard formally amalgamates the Northern and Southern Nigeria Protectorates with the Colony of Lagos into a single administrative territory known as the Colony and Protectorate of Nigeria, establishing the administrative borders of the modern Nigerian nation-state.',
    era: 'Colonial Era',
    peopleInvolved: ['Lord Frederick Lugard', 'Flora Shaw'],
    imageUrl: '/images/people/herbert-macaulay.jpg',
    sources: [
      { title: 'The Amalgamation Report of 1914', publisher: 'Colonial Office, London / National Archives of Nigeria' },
    ],
  },
  {
    id: '1922-clifford-constitution',
    year: 1922,
    dateStr: '1922',
    title: 'The Clifford Constitution & The Elective Principle',
    description:
      'Governor Sir Hugh Clifford introduces the 1922 Constitution, which creates the Legislative Council and introduces the historic "elective principle"—allowing four elected indigenous African members (three from Lagos, one from Calabar). This sparks modern political parties, leading Herbert Macaulay to establish the Nigerian National Democratic Party (NNDP) in 1923.',
    era: 'Colonial Era',
    peopleInvolved: ['Herbert Macaulay', 'Sir Hugh Clifford'],
    imageUrl: '/images/people/herbert-macaulay.jpg',
    sources: [
      { title: 'Constitutional History of Nigeria', publisher: 'B.O. Nwabueze' },
    ],
  },
  {
    id: '1944-ncnc-foundation',
    year: 1944,
    dateStr: 'August 26, 1944',
    title: 'Formation of the National Council of Nigeria and the Cameroons (NCNC)',
    description:
      'Nationalist leaders, trade unions, student groups, and literary societies convene at Glover Memorial Hall in Lagos to establish the NCNC. Herbert Macaulay is elected first President, and Dr. Nnamdi Azikiwe becomes General Secretary, initiating the mass nationalist mobilization that challenges the British empire nationwide.',
    era: 'Nationalist Mass Movement',
    peopleInvolved: ['Herbert Macaulay', 'Dr. Nnamdi Azikiwe', 'Michael Imoudu'],
    imageUrl: '/images/people/nnamdi-azikiwe.webp',
    sources: [
      { title: 'Zik: A Selection from the Speeches of Nnamdi Azikiwe', publisher: 'Cambridge University Press' },
    ],
  },
  {
    id: '1949-enugu-colliery-strike',
    year: 1949,
    dateStr: 'November 18, 1949',
    title: 'The Iva Valley Coal Miners’ Massacre in Enugu',
    description:
      'Colonial police fire upon striking Nigerian coal miners at the Iva Valley colliery in Enugu demanding fair wages, killing 21 miners and wounding 51. The tragedy galvanizes nationwide outrage across ethnic lines, uniting the Zikist Movement, Margaret Ekpo, and trade unions into an unbreakable anti-colonial resistance.',
    era: 'Anti-Colonial Agitation',
    peopleInvolved: ['Margaret Ekpo', 'Nnamdi Azikiwe', 'Obafemi Awolowo'],
    imageUrl: '/images/people/margaret-ekpo.jpg',
    sources: [
      { title: 'Report of the Commission of Enquiry into the Disorders in the Eastern Provinces of Nigeria', publisher: 'Fitzgerald Commission 1950' },
    ],
  },
  {
    id: '1953-self-gov-motion',
    year: 1953,
    dateStr: 'March 31, 1953',
    title: 'Chief Anthony Enahoro Moves the Motion for Self-Government',
    description:
      'Chief Anthony Enahoro, representing Ishan Division for the Action Group, takes the floor of the Federal House of Representatives in Lagos to move that "this House accepts as a primary objective the attainment of self-government for Nigeria in 1956." The historic motion breaks colonial procrastination and sets a permanent decolonization clock in motion.',
    era: 'Constitutional Decolonization',
    peopleInvolved: ['Chief Anthony Enahoro', 'Chief Obafemi Awolowo', 'Sir Ahmadu Bello'],
    imageUrl: '/images/people/anthony-enahoro.png',
    sources: [
      { title: 'House of Representatives Hansard Debates (March 31, 1953)', publisher: 'National Archives of Nigeria' },
    ],
  },
  {
    id: '1954-lyttelton-constitution',
    year: 1954,
    dateStr: 'October 1, 1954',
    title: 'The Lyttelton Constitution: Foundation of Nigerian Federalism',
    description:
      'The Oliver Lyttelton Constitution formally transforms Nigeria into a genuine federal federation with three autonomous regions (Northern, Eastern, and Western) alongside the Federal Capital of Lagos and Southern Cameroons. It establishes regional premierships, regional civil services, and regional judicial structures.',
    era: 'Federal System Genesis',
    peopleInvolved: ['Sir Ahmadu Bello', 'Chief Obafemi Awolowo', 'Dr. Nnamdi Azikiwe'],
    imageUrl: '/images/people/obafemi-awolowo.jpg',
    sources: [
      { title: 'The Making of the 1954 Constitution', publisher: 'Kalu Ezera' },
    ],
  },
  {
    id: '1957-self-governance',
    year: 1957,
    dateStr: 'August 1957',
    title: 'Eastern & Western Regions Attain Self-Government; First Prime Minister Appointed',
    description:
      'Following the 1957 London Constitutional Conference, Western and Eastern Nigeria attain internal self-government on August 8, 1957 (with Northern Nigeria following in 1959). On August 30, 1957, Sir Abubakar Tafawa Balewa is appointed as Nigeria\'s very first federal Prime Minister, creating an all-party national unity government.',
    era: 'Transition to Sovereignty',
    peopleInvolved: ['Sir Abubakar Tafawa Balewa', 'Dr. Nnamdi Azikiwe', 'Chief Obafemi Awolowo', 'Margaret Ekpo'],
    imageUrl: '/images/people/abubakar-tafawa-balewa.jpg',
    sources: [
      { title: 'Report of the Nigeria Constitutional Conference held in London, May and June 1957', publisher: 'Her Majesty\'s Stationery Office' },
    ],
  },
  {
    id: '1960-independence-day',
    year: 1960,
    dateStr: 'October 1, 1960',
    title: 'NIGERIA BECOMES INDEPENDENT: Birth of a Sovereign Nation',
    description:
      'At midnight between September 30 and October 1, 1960, at Tafawa Balewa Square (formerly Racecourse) in Lagos before a crowd of several hundred thousand citizens, the British Union Jack is lowered and the green-white-green flag designed by Taiwo Akinkunmi is hoisted to thunderous cheers. Princess Alexandra presents the constitutional instruments of sovereignty to Prime Minister Sir Abubakar Tafawa Balewa. Nigeria officially takes its place as a free and sovereign nation.',
    era: 'Independence',
    peopleInvolved: ['Sir Abubakar Tafawa Balewa', 'Dr. Nnamdi Azikiwe', 'Princess Alexandra', 'Sir James Robertson', 'Chief Obafemi Awolowo', 'Sir Ahmadu Bello'],
    imageUrl: '/src/assets/images/independence_1960_celebration_1790782954017.jpg',
    speechExcerpt:
      '"At last, our great day has arrived, and Nigeria stands as a sovereign nation... We are called upon to take our rightful place among the nations of the world, with confidence and dignity. We have acquired our independence without bitterness and without bloodshed. Let us go forward united as one people."',
    sources: [
      { title: 'Independence Day Commemorative Gazette', publisher: 'Federal Government Printer, Lagos, Oct 1, 1960' },
      { title: 'The Golden Voice of Africa: Selected Speeches of Abubakar Tafawa Balewa', publisher: 'National Library of Nigeria Archives' },
    ],
  },
  {
    id: '1963-republican-constitution',
    year: 1963,
    dateStr: 'October 1, 1963',
    title: 'First Republic Proclaimed: Nigeria Becomes a Republic',
    description:
      'Three years to the day after independence, Nigeria enacts the Republican Constitution, severing all institutional allegiance to the British Crown and replacing Queen Elizabeth II as ceremonial monarch with Dr. Nnamdi Azikiwe as Nigeria\'s first President. The Supreme Court of Nigeria replaces the British Privy Council as the apex court of appeal.',
    era: 'First Republic',
    peopleInvolved: ['Dr. Nnamdi Azikiwe', 'Sir Abubakar Tafawa Balewa', 'Justice Adetokunbo Ademola'],
    imageUrl: '/images/people/nnamdi-azikiwe.webp',
    sources: [
      { title: 'The Republican Constitution of Nigeria (1963)', publisher: 'Federal Ministry of Information, Lagos' },
    ],
  },
  {
    id: '1966-military-coups',
    year: 1966,
    dateStr: 'January 15 & July 29, 1966',
    title: 'Collapse of the First Republic & Military Intervention',
    description:
      'Major Chukwuma Nzeogwu leads Nigeria\'s first military coup on January 15, 1966, assassinating key leaders including Prime Minister Balewa, Premier Ahmadu Bello, Premier Akintola, and Finance Minister Festus Okotie-Eboh. Major-General J.T.U. Aguiyi-Ironsi takes power and issues Unification Decree 34. On July 29, 1966, a counter-coup overthrows Ironsi, bringing Lt. Col. Yakubu Gowon to power.',
    era: 'Military Era',
    peopleInvolved: ['Major Chukwuma Nzeogwu', 'Major-General J.T.U. Aguiyi-Ironsi', 'Lt. Col. Yakubu Gowon'],
    imageUrl: '/images/people/aguiyi-ironsi.jpg',
    sources: [
      { title: 'The Nigerian Military and Politics 1966–1979', publisher: 'Robin Luckham, Cambridge University Press' },
    ],
  },
  {
    id: '1967-civil-war',
    year: 1967,
    dateStr: 'July 6, 1967 – January 15, 1970',
    title: 'The Nigerian Civil War & The "No Victor, No Vanquished" Reconciliation',
    description:
      'Following inter-communal massacres and political failure to implement the Aburi Accord, the Eastern Region under Lt. Col. Chukwuemeka Odumegwu Ojukwu declares the Republic of Biafra on May 30, 1967. A bitter 30-month civil war ensues, causing immense human suffering and displacement. On January 15, 1970, Biafran forces surrender, and General Yakubu Gowon declares the conflict settled with "No Victor, No Vanquished", launching the 3Rs program (Reconciliation, Reconstruction, Rehabilitation).',
    era: 'Civil War & Reconstruction',
    peopleInvolved: ['General Yakubu Gowon', 'Lt. Col. Chukwuemeka Odumegwu Ojukwu', 'General Philip Effiong', 'Chief Obafemi Awolowo'],
    imageUrl: '/images/people/yakubu-gowon.jpg',
    sources: [
      { title: 'The Nigerian Civil War', publisher: 'John de St. Jorre, Hodder and Stoughton' },
      { title: 'There Was a Country', publisher: 'Chinua Achebe, Penguin Books' },
    ],
  },
  {
    id: '1977-festac',
    year: 1977,
    dateStr: 'January 15 – February 12, 1977',
    title: 'FESTAC 77: The Global Black & African Cultural Renaissance',
    description:
      'Nigeria hosts the 2nd World Black and African Festival of Arts and Culture (FESTAC 77) in Lagos and Kaduna. Over 16,000 artists, performers, writers, and dignitaries from 56 nations gather in the newly built National Arts Theatre, Iganmu, making Nigeria the epicentre of global African arts, thought, and civilizational dignity.',
    era: 'Post-War Cultural Renaissance',
    peopleInvolved: ['General Olusegun Obasanjo', 'Chief Anthony Enahoro', 'Stevie Wonder', 'Miriam Makeba'],
    imageUrl: '/src/assets/images/nigeria_records_monument_1790782977407.jpg',
    sources: [
      { title: 'FESTAC 77 Colloquium Papers & Official Catalogue', publisher: 'Centre for Black and African Arts and Civilization (CBAAC)' },
    ],
  },
  {
    id: '1979-second-republic',
    year: 1979,
    dateStr: 'October 1, 1979',
    title: 'Inauguration of the Second Republic & Presidential Handover',
    description:
      'In a historic event for African governance, General Olusegun Obasanjo voluntarily transfers executive authority to democratically elected President Alhaji Shehu Shagari at Tafawa Balewa Square, inaugurating the Second Republic under Nigeria\'s first American-style executive presidential constitution.',
    era: 'Second Republic',
    peopleInvolved: ['Alhaji Shehu Shagari', 'General Olusegun Obasanjo', 'Dr. Alex Ekwueme'],
    imageUrl: '/images/people/shehu-shagari.jpg',
    sources: [
      { title: 'The 1979 Constitution of the Federal Republic of Nigeria', publisher: 'Federal Government Printer' },
    ],
  },
  {
    id: '1993-june-12',
    year: 1993,
    dateStr: 'June 12, 1993',
    title: 'The June 12 Presidential Election: Watershed of Democratic Will',
    description:
      'Nigeria conducts what international and domestic observers widely validate as the freest and fairest election in national history. Chief Moshood Kashimawo Olawale (M.K.O.) Abiola wins broad across-the-board support across regional, religious, and ethnic divides. The subsequent military annulment by General Babangida unleashes five years of relentless pro-democracy agitation led by NADECO, civil society, and labor unions.',
    era: 'Pro-Democracy Resistance',
    peopleInvolved: ['Chief M.K.O. Abiola', 'General Ibrahim Babangida', 'Chief Anthony Enahoro', 'Prof. Wole Soyinka', 'Kudirat Abiola'],
    imageUrl: '/images/people/ibrahim-babangida.jpg',
    sources: [
      { title: 'The Story of June 12 and the Abiola Mandate', publisher: 'CDHR & NADECO Historical Documentation' },
    ],
  },
  {
    id: '1999-fourth-republic',
    year: 1999,
    dateStr: 'May 29, 1999',
    title: 'The Return to Enduring Democracy: Birth of the Fourth Republic',
    description:
      'General Abdulsalami Abubakar hands over power to retired General Olusegun Obasanjo, swearing in a democratic civilian government under the 1999 Constitution. This begins the Fourth Republic, the longest unbroken era of democratic civilian constitutional rule in Nigerian history, enduring continuously past a quarter-century.',
    era: 'Fourth Republic',
    peopleInvolved: ['General Abdulsalami Abubakar', 'Chief Olusegun Obasanjo', 'Atiku Abubakar'],
    imageUrl: '/images/people/abdulsalami-abubakar.jpg',
    sources: [
      { title: 'The 1999 Constitution of the Federal Republic of Nigeria', publisher: 'Supreme Court of Nigeria' },
    ],
  },
  {
    id: '2010-constitutional-transition',
    year: 2010,
    dateStr: 'February 9 – May 6, 2010',
    title: 'The "Doctrine of Necessity" and Democratic Continuity',
    description:
      'Faced with a constitutional impasse due to the medical incapacitation of President Umaru Musa Yar\'Adua, the National Assembly enacts the historic "Doctrine of Necessity" to empower Vice President Goodluck Jonathan as Acting President. Following Yar\'Adua\'s passing on May 5, Jonathan is sworn in as President, proving the institutional resilience of the Fourth Republic.',
    era: 'Fourth Republic',
    peopleInvolved: ['Alhaji Umaru Musa Yar\'Adua', 'Dr. Goodluck Jonathan', 'David Mark', 'Prof. Dora Akunyili'],
    imageUrl: '/images/people/umaru-yaradua.jpg',
    sources: [
      { title: 'National Assembly Senate Proceedings (February 9, 2010)', publisher: 'Hansard Abuja' },
    ],
  },
  {
    id: '2015-democratic-transition',
    year: 2015,
    dateStr: 'March 31 – May 29, 2015',
    title: 'First Opposition Victory & Peaceful Presidential Transition',
    description:
      'In a watershed moment for modern African democracy, incumbent President Goodluck Jonathan makes a historic concession phone call to opposition challenger Muhammadu Buhari of the APC before final election results are announced. On May 29, 2015, power is peacefully transferred between opposing political parties for the first time in Nigeria\'s history.',
    era: 'Fourth Republic',
    peopleInvolved: ['Dr. Goodluck Jonathan', 'Muhammadu Buhari', 'Prof. Attahiru Jega'],
    imageUrl: '/images/people/goodluck-jonathan.jpg',
    sources: [
      { title: 'INEC 2015 Presidential Election Report', publisher: 'Independent National Electoral Commission, Abuja' },
    ],
  },
  {
    id: '2023-electoral-transition',
    year: 2023,
    dateStr: 'May 29, 2023',
    title: 'Inauguration of the 16th President of Nigeria',
    description:
      'Asiwaju Bola Ahmed Tinubu is inaugurated as the 16th President of the Federal Republic of Nigeria at Eagle Square in Abuja, marking 24 unbroken years of Fourth Republic democratic continuity and launching economic restructuring programs.',
    era: 'Fourth Republic',
    peopleInvolved: ['Bola Ahmed Tinubu', 'Kashim Shettima', 'Muhammadu Buhari'],
    imageUrl: '/images/people/bola-ahmed-tinubu.jpg',
    sources: [
      { title: 'State House Inaugural Gazette', publisher: 'Federal Government of Nigeria, May 2023' },
    ],
  },
  {
    id: '2026-nigeria-at-66',
    year: 2026,
    dateStr: 'October 1, 2026',
    title: 'NIGERIA @ 66: 66 Years of Independence & Digital Heritage Jubilee',
    description:
      'Nigeria celebrates its 66th Independence Anniversary. Six and a half decades since the lower of the Union Jack at Racecourse Lagos, Nigeria History Hub creates the permanent national digital archive celebrating the collective struggle, millions of everyday heroes, trailblazers, and the unstoppable creative resilience of over 220 million citizens.',
    era: 'Diamond Era / Jubilee',
    peopleInvolved: ['The People of the Federal Republic of Nigeria'],
    imageUrl: '/src/assets/images/hero_cinematic_nigeria_1790782943750.jpg',
    speechExcerpt:
      '"66 Years of History. 66 Years of People. 66 Years of Ideas. 66 Years of Nigeria. Celebrating the People. Preserving the Stories. Recording the Legacy."',
    sources: [
      { title: 'Nigeria History Hub National Heritage Compendium', publisher: 'October 1, 2026' },
    ],
  },
];
