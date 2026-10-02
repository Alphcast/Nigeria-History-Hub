export interface LeaderSource {
  title: string;
  sourceType: string;
  url?: string;
}

export interface LeaderRecord {
  id: string;
  name: string;
  office: 'Prime Minister' | 'President' | 'Head of State' | 'Head of Interim National Government';
  term: string;
  periodStart: string;
  periodEnd: string;
  era: 'First Republic' | 'Military Era' | 'Second Republic' | 'Interim Government' | 'Third Republic Transition' | 'Fourth Republic';
  governmentType: 'Civilian' | 'Military' | 'Interim';
  photoUrl: string;
  state: string;
  politicalPartyOrBranch: string;
  specialBadge?: string;
  summary: string;
  majorEvents: string[];
  documentedPolicies: string[];
  infrastructure: string[];
  economy: string[];
  educationAndSocial: string[];
  democraticConstitutional: string[];
  historicalImpact: string[];
  debates: string[];
  historicalNotes: string;
  impactCategories: string[];
  sources: LeaderSource[];
  isCurrentAdmin?: boolean;
  lastUpdated?: string;
}

export const PRESIDENTS_AND_LEADERS: LeaderRecord[] = [
  // 1. SIR ABUBAKAR TAFAWA BALEWA (Prime Minister)
  {
    id: 'abubakar-balewa-lead',
    name: 'Sir Abubakar Tafawa Balewa',
    office: 'Prime Minister',
    term: '1960 – 1966',
    periodStart: 'October 1, 1960',
    periodEnd: 'January 15, 1966',
    era: 'First Republic',
    governmentType: 'Civilian',
    photoUrl: '/images/people/abubakar-tafawa-balewa.jpg',
    state: 'Bauchi',
    politicalPartyOrBranch: 'Northern People\'s Congress (NPC)',
    specialBadge: 'FIRST PRIME MINISTER OF INDEPENDENT NIGERIA',
    summary:
      'Served as executive Head of Government during Nigeria\'s transition from British rule to sovereign independence under a Westminster parliamentary constitution.',
    majorEvents: [
      'Admission of Nigeria as 99th member state of the United Nations (October 7, 1960)',
      'Establishment of the Organization of African Unity (OAU) in Addis Ababa (1963)',
      'Creation of the Mid-Western Region in 1963 following a constitutional referendum',
      'Convening of the historic Commonwealth Prime Ministers\' Conference on Rhodesia in Lagos (January 1966)',
    ],
    documentedPolicies: [
      'First National Development Plan (1962–1968) promoting agricultural import substitution',
      'Ashby Commission implementation on Higher Education expansion',
      'Non-aligned foreign policy with sovereign Commonwealth ties',
    ],
    infrastructure: [
      'Initiation and construction of the Kainji Dam Hydroelectric Project on the Niger River',
      'Expansion of the Nigerian Railway Corporation Bornu Extension line to Maiduguri',
      'Development of national telecommunications trunk links and federal trunk roads',
    ],
    economy: [
      'Establishment of the Central Bank of Nigeria exchange controls following independence',
      'Export promotion of cash crops (groundnuts, cocoa, palm kernels, and cotton)',
      'Initial crude oil extraction and refinery planning in Alesa Eleme near Port Harcourt',
    ],
    educationAndSocial: [
      'Establishment of federal scholarships and support for regional universities',
      'Implementation of early national health campaigns against smallpox and malaria',
    ],
    democraticConstitutional: [
      'Westminster parliamentary system with a ceremonial Head of State and executive Prime Minister',
      'Management of the disputed 1962/63 National Census and contentious 1964 Federal Elections',
    ],
    historicalImpact: [
      'Set early standards for Nigerian multilateral diplomacy and peace mediation in Africa (Congo UN mission)',
      'Constructed foundational federal infrastructure like the Kainji Dam that still supplies national grid electricity',
    ],
    debates: [
      'Historians debate the handling of the 1964 federal election crisis and the 1965 Western Region political violence (Operation Wetie), which preceded the January 1966 military coup.',
    ],
    historicalNotes:
      'Sir Abubakar Tafawa Balewa was the Prime Minister and head of government, NOT President. Nigeria operated a parliamentary system where executive authority resided in the cabinet.',
    impactCategories: ['Civilian', 'Foreign Policy', 'Infrastructure', 'Constitutional History', 'Economy'],
    sources: [
      { title: 'A Right Honourable Gentleman: The Life of Sir Abubakar Tafawa Balewa (Trevor Clark)', sourceType: 'Academic Biography' },
      { title: 'State House Historical Leadership Archive', sourceType: 'Government Record' },
      { title: 'First National Development Plan (1962–1968)', sourceType: 'Federal Ministry Publication' },
    ],
  },

  // 2. DR. NNAMDI AZIKIWE (President)
  {
    id: 'nnamdi-azikiwe-lead',
    name: 'Dr. Nnamdi Azikiwe',
    office: 'President',
    term: '1963 – 1966',
    periodStart: 'October 1, 1963',
    periodEnd: 'January 15, 1966',
    era: 'First Republic',
    governmentType: 'Civilian',
    photoUrl: '/images/people/nnamdi-azikiwe.webp',
    state: 'Anambra',
    politicalPartyOrBranch: 'NCNC / Republican Constitution',
    summary:
      'Nigeria\'s foremost anti-colonial nationalist, first indigenous Governor-General (1960–1963), and first President under the 1963 Republican Constitution.',
    majorEvents: [
      'Promulgation of the 1963 Republican Constitution terminating appeals to the British Privy Council',
      'Abolition of Queen Elizabeth II as Head of State, establishing Nigeria as a sovereign Federal Republic',
      'Constitutional standoff following the disputed 1964 federal general elections',
    ],
    documentedPolicies: [
      'Constitutional ceremonial presidency embodying national sovereignty and federal unity',
      'Advocacy of Pan-African solidarity, decolonization of Southern Africa, and continental economic integration',
    ],
    infrastructure: [
      'Supported establishment of the University of Nigeria, Nsukka and federal university campuses',
      'Championed civic national symbols, national archives, and diplomatic missions across Africa',
    ],
    economy: [
      'Promotion of indigenous commerce, commercial banking diversification, and educational investments',
    ],
    educationAndSocial: [
      'Advocate for mass higher education, literacy, and vocational self-reliance across the federation',
    ],
    democraticConstitutional: [
      'Head of State under the 1963 Republican Constitution, while executive powers resided with Prime Minister Balewa',
      'Mediated the dangerous constitutional impasse of January 1965 leading to a broad-based national government',
    ],
    historicalImpact: [
      'Revered as "Zik of Africa," his journalism (West African Pilot) and political mobilization formed the bedrock of Nigerian independence nationalism.',
    ],
    debates: [
      'Scholars discuss the limits of constitutional powers granted to the 1963 ceremonial presidency during times of acute federal electoral conflict.',
    ],
    historicalNotes:
      'Became President on October 1, 1963 when Nigeria severed dominion ties with the British Crown and declared a Republic. Avoid attributing executive governance decisions personally to Azikiwe.',
    impactCategories: ['Civilian', 'Constitutional History', 'Education', 'Democracy', 'Foreign Policy'],
    sources: [
      { title: 'My Odyssey: An Autobiography (Nnamdi Azikiwe)', sourceType: 'Historical Memoir' },
      { title: 'Constitutional History of Nigeria (Prof. B.O. Nwabueze)', sourceType: 'Legal Treatise' },
      { title: 'National Archives of Nigeria (Enugu Branch)', sourceType: 'Archival Collection' },
    ],
  },

  // 3. MAJOR-GENERAL J.T.U. AGUIYI-IRONSI (Head of State)
  {
    id: 'aguiyi-ironsi',
    name: 'Major-General Johnson T.U. Aguiyi-Ironsi',
    office: 'Head of State',
    term: 'January 1966 – July 1966',
    periodStart: 'January 16, 1966',
    periodEnd: 'July 29, 1966',
    era: 'Military Era',
    governmentType: 'Military',
    photoUrl: '/images/people/aguiyi-ironsi.jpg',
    state: 'Abia',
    politicalPartyOrBranch: 'Nigerian Armed Forces (Supreme Military Council)',
    summary:
      'First military Head of State of Nigeria, assuming authority following the breakdown of the First Republic in the January 1966 coup.',
    majorEvents: [
      'Assumption of power and formation of the Supreme Military Council (January 16, 1966)',
      'Promulgation of Decree No. 34 of 1966 (The Unification Decree)',
      'Establishment of the Francis Nwokedi Commission on civil service unification',
      'Assassination during the July 29, 1966 counter-coup in Ibadan',
    ],
    documentedPolicies: [
      'Suspension of regional constitutions and federal parliamentary bodies',
      'Decree No. 34 attempting to substitute the federal structure with a unitary system of provinces',
    ],
    infrastructure: [
      'Short 194-day tenure focused primarily on security stabilization and military command realignment',
    ],
    economy: [
      'Continuance of civil service salaries and maintenance of basic macroeconomic controls amidst civil unrest',
    ],
    educationAndSocial: [
      'Appointment of study groups on education, judiciary, and national planning to evaluate unified standards',
    ],
    democraticConstitutional: [
      'Inauguration of military rule in Nigeria, introducing governance by military decrees rather than parliamentary acts',
    ],
    historicalImpact: [
      'Marked the tragic turning point where the military entered Nigerian political governance, reshaping the federal-state relationship.',
    ],
    debates: [
      'Historians critically debate whether Decree No. 34 was an administrative attempt at national efficiency or a constitutional overreach that intensified regional ethnic anxieties.',
    ],
    historicalNotes:
      'His title was Head of the Federal Military Government and Supreme Commander of the Armed Forces. He was NOT an elected President.',
    impactCategories: ['Military Governments', 'Constitutional History', 'Security'],
    sources: [
      { title: 'The Nigerian Military: A Sociological Analysis (N.J. Miners)', sourceType: 'Academic Study' },
      { title: 'Official Gazette of the Federal Military Government (1966)', sourceType: 'Statutory Gazette' },
      { title: 'State House Historical Leadership Archive', sourceType: 'Government Record' },
    ],
  },

  // 4. GENERAL YAKUBU GOWON (Head of State)
  {
    id: 'yakubu-gowon',
    name: 'General Yakubu Gowon',
    office: 'Head of State',
    term: '1966 – 1975',
    periodStart: 'August 1, 1966',
    periodEnd: 'July 29, 1975',
    era: 'Military Era',
    governmentType: 'Military',
    photoUrl: '/images/people/yakubu-gowon.jpg',
    state: 'Plateau',
    politicalPartyOrBranch: 'Nigerian Armed Forces (Supreme Military Council)',
    summary:
      'Longest continuously serving military Head of State (nearly 9 years). Oversaw federal preservation during the Civil War, created the 12-state structure, and established the NYSC.',
    majorEvents: [
      'Creation of 12 States in May 1967 dismantling the former regional structure',
      'The Nigerian Civil War (July 6, 1967 – January 15, 1970)',
      'Declaration of "No Victor, No Vanquished" and the 3Rs (Reconciliation, Reconstruction, Rehabilitation)',
      'Launch of the National Youth Service Corps (NYSC) in 1973',
      'Co-founding the Economic Community of West African States (ECOWAS) in May 1975',
    ],
    documentedPolicies: [
      'Second National Development Plan (1970–1974) post-war reconstruction',
      'Indigenization Decrees of 1972 and 1974 transferring equity in foreign businesses to Nigerians',
      'Udoji Civil Service Commission wage harmonization (1974)',
    ],
    infrastructure: [
      'Extensive construction of Lagos flyovers, Eko Bridge expansion, and national expressway networks',
      'Construction of the National Theatre in Iganmu, Lagos in preparation for FESTAC',
      'Development of Warri and Port Harcourt port infrastructure and airport upgrades',
    ],
    economy: [
      'First Nigerian oil boom (1973–74) generating unprecedented petroleum export revenues',
      'Creation of the Nigerian National Oil Corporation (NNOC, precursor to NNPC)',
      'Monetary decimalization transitioning the currency from Nigerian Pounds to Naira and Kobo in 1973',
    ],
    educationAndSocial: [
      'Establishment of the National Youth Service Corps (NYSC) to foster inter-ethnic national unity',
      'Expansion of federal universities (Jos, Calabar, Maiduguri) and polytechnics',
    ],
    democraticConstitutional: [
      'Creation of 12 states broke the hegemony of large regions and elevated minority nationalities',
    ],
    historicalImpact: [
      'Successfully preserved Nigerian territorial unity during the Civil War and created enduring national institutions like the NYSC and ECOWAS.',
    ],
    debates: [
      'Historical critiques focus on the conduct of the Civil War blockade, the post-war monetization of petroleum revenues, and the indefinite postponement of the return to civilian democracy announced in 1974.',
    ],
    historicalNotes:
      'Military Head of State who ruled during one of the most perilous crises in modern African history, ending with a voluntary posture of post-war national reconciliation.',
    impactCategories: ['Military Governments', 'Infrastructure', 'Economy', 'Foreign Policy', 'Security'],
    sources: [
      { title: 'General Yakubu Gowon: The Making of a Statesman (J. Isawa Elaigwu)', sourceType: 'Biographical Treatise' },
      { title: 'Second National Development Plan (1970–1974)', sourceType: 'Federal Ministry Publication' },
      { title: 'State House Historical Leadership Archive', sourceType: 'Government Record' },
    ],
  },

  // 5. GENERAL MURTALA MOHAMMED (Head of State)
  {
    id: 'murtala-muhammed-lead',
    name: 'General Murtala Ramat Muhammed',
    office: 'Head of State',
    term: '1975 – 1976',
    periodStart: 'July 29, 1975',
    periodEnd: 'February 13, 1976',
    era: 'Military Era',
    governmentType: 'Military',
    photoUrl: '/images/people/murtala-muhammed.jpg',
    state: 'Kano',
    politicalPartyOrBranch: 'Nigerian Armed Forces (Supreme Military Council)',
    summary:
      'Dynamic 200-day military administration noted for decisive administrative reforms, anti-corruption purges, creating 7 new states, and initiating the relocation to Abuja.',
    majorEvents: [
      'Creation of seven new states in February 1976, bringing national total to 19',
      'Decision to relocate the Federal Capital from congested Lagos to a central Federal Capital Territory (Abuja)',
      'Historic OAU Summit speech in Addis Ababa ("Africa Has Come of Age") championing Angolan MPLA independence',
      'Assassination in an abortive military ambush led by Lt. Col. Buka Suka Dimka on February 13, 1976',
    ],
    documentedPolicies: [
      'Comprehensive reform and retirement purge of 10,000 public civil servants to combat bureaucratic inertia',
      'Justice Akinola Aguda Panel on the Federal Capital Territory',
      'Establishment of the Constitution Drafting Committee chaired by Chief Rotimi Williams',
      'Strict commitment to a transition timetable returning power to civilian government by October 1979',
    ],
    infrastructure: [
      'Initiated the master planning and land acquisition for the Federal Capital Territory (Abuja)',
      'Decongested the chaotic Lagos ports (clearing the massive "cement armada" deadlock)',
      'Expanded federal trunk roads and oil pipeline distribution grids',
    ],
    economy: [
      'Rationalized national petroleum distribution, commissioning emergency storage depots nationwide',
    ],
    educationAndSocial: [
      'Federal takeover of regional universities (ABU, Ife, UNN, UNILAG) to ensure uniform national funding standards',
      'Expansion of Universal Primary Education planning nationwide',
    ],
    democraticConstitutional: [
      'Set the clear structural roadmap that led to the 1979 Second Republic Constitution',
    ],
    historicalImpact: [
      'Set an enduring cultural benchmark in Nigeria for administrative speed, anti-imperialist foreign diplomacy, and uncompromising institutional discipline.',
    ],
    debates: [
      'Scholars acknowledge his decisive anti-corruption ethos while noting that the mass civil service purges carried out without full due process weakened security of tenure in the federal bureaucracy.',
    ],
    historicalNotes:
      'The Abuja/FCT section must clearly explain that the decision to relocate the federal capital was made during Murtala Mohammed\'s government, while the actual physical construction continued under subsequent administrations.',
    impactCategories: ['Military Governments', 'Infrastructure', 'Foreign Policy', 'Constitutional History', 'Security'],
    sources: [
      { title: 'The Nigerian Military: 1966–1979 (Robin Luckham)', sourceType: 'Academic Study' },
      { title: 'Aguda Panel Report on the Relocation of the Federal Capital (1975)', sourceType: 'Commission Report' },
      { title: 'National Archives of Nigeria (Kaduna & Lagos)', sourceType: 'Archival Records' },
    ],
  },

  // 6. GENERAL OLUSEGUN OBASANJO (First Entry: Military Head of State 1976–1979)
  {
    id: 'olusegun-obasanjo-mil',
    name: 'General Olusegun Obasanjo',
    office: 'Head of State',
    term: '1976 – 1979',
    periodStart: 'February 14, 1976',
    periodEnd: 'October 1, 1979',
    era: 'Military Era',
    governmentType: 'Military',
    photoUrl: '/images/people/olusegun-obasanjo.jpg',
    state: 'Ogun',
    politicalPartyOrBranch: 'Nigerian Armed Forces (Supreme Military Council)',
    summary:
      'Military Head of State who faithfully completed Murtala Mohammed\'s transition program, introducing the 1979 Constitution and voluntarily surrendering power to an elected civilian president.',
    majorEvents: [
      'Hosting of FESTAC 77 (2nd World Black and African Festival of Arts and Culture) in Lagos',
      'Promulgation of the Land Use Decree of 1978 vesting state lands in governors in trust for citizens',
      'Deliberation and enactment of the 1979 Constitution introducing the American-style presidential system',
      'Voluntary handover of power to democratically elected President Shehu Shagari on October 1, 1979',
    ],
    documentedPolicies: [
      'Operation Feed the Nation (OFN) promoting domestic agricultural self-reliance',
      'Nationalization of British Petroleum assets and Barclays Bank equity in solidarity with Southern African liberation',
      'Establishment of the Joint Admissions and Matriculation Board (JAMB) in 1978',
    ],
    infrastructure: [
      'Commissioning of Murtala Muhammed International Airport (MMA) in Ikeja, Lagos (1979)',
      'Construction of Kaduna and Warri oil refineries and national pipeline network',
      'Continued development of Abuja master plan and the Third Mainland Bridge first phase',
    ],
    economy: [
      'Establishment of the Nigerian National Petroleum Corporation (NNPC) in 1977',
      'Introduction of indigenization phase II requiring 60% Nigerian ownership in strategic industrial sectors',
    ],
    educationAndSocial: [
      'Creation of the Joint Admissions and Matriculation Board (JAMB) to standardize university access',
      'Expansion of federal polytechnics and colleges of education across new states',
    ],
    democraticConstitutional: [
      'Supervised the Constituent Assembly and peaceful 1979 general elections',
      'First military ruler in African history to voluntarily surrender power to a civilian democracy according to schedule',
    ],
    historicalImpact: [
      'Established the historic precedent for military disengagement from governance and the institutional adoption of executive presidential federalism.',
    ],
    debates: [
      'Debates surrounded the Land Use Act of 1978 regarding ancestral land rights, as well as the Supreme Court\'s resolution of the "twelve two-thirds" electoral formula in the 1979 presidential election.',
    ],
    historicalNotes:
      'First of two distinct leadership eras for Olusegun Obasanjo. This was his period as military Head of State; his 1999–2007 civilian presidency is documented separately.',
    impactCategories: ['Military Governments', 'Constitutional History', 'Infrastructure', 'Agriculture', 'Education'],
    sources: [
      { title: 'Not My Will (Olusegun Obasanjo)', sourceType: 'Historical Memoir' },
      { title: 'The 1979 Constitution of the Federal Republic of Nigeria', sourceType: 'Legal Document' },
      { title: 'State House Leadership Archive', sourceType: 'Government Record' },
    ],
  },

  // 7. ALHAJI SHEHU SHAGARI (President, Second Republic)
  {
    id: 'shehu-shagari',
    name: 'Alhaji Shehu Shagari',
    office: 'President',
    term: '1979 – 1983',
    periodStart: 'October 1, 1979',
    periodEnd: 'December 31, 1983',
    era: 'Second Republic',
    governmentType: 'Civilian',
    photoUrl: '/images/people/shehu-shagari.jpg',
    state: 'Sokoto',
    politicalPartyOrBranch: 'National Party of Nigeria (NPN)',
    summary:
      'First executive President of the Federal Republic of Nigeria, inaugurating the Second Republic under an American-style constitutional democracy.',
    majorEvents: [
      'Inauguration of the Second Republic under the 1979 Executive Presidential Constitution',
      'Launch of the Green Revolution agricultural development programme',
      'Widespread construction of low-cost housing schemes ("Shagari Housing Estates") in all 19 states',
      'Economic Stabilization Act of 1982 passed in response to the sharp collapse of global crude oil prices',
      'Termination of the administration by a military coup on December 31, 1983',
    ],
    documentedPolicies: [
      'Green Revolution programme aiming for food self-sufficiency and grain buffer stocks',
      'Heavy industrialization push through steel rolling mills and automotive assembly plants',
      'Expansion of low-cost urban and rural housing developments',
    ],
    infrastructure: [
      'Construction and initial operation of the Ajaokuta Steel Plant and Delta Steel Complex, Aladja',
      'Establishment of inland steel rolling mills in Oshogbo, Jos, and Katsina',
      'Substantial foundational civil engineering works in the new Federal Capital Territory, Abuja',
    ],
    economy: [
      'Faced severe global oil glut shock in 1981–1983, prompting import austerity and foreign exchange rationing',
      'Expansion of commercial banks into rural branches to mobilize domestic savings',
    ],
    educationAndSocial: [
      'Establishment of seven Federal Universities of Technology (FUTs) across geopolitical zones',
      'Introduction of National Open University legislation to broaden adult tertiary learning',
    ],
    democraticConstitutional: [
      'First test of Nigeria\'s separation of powers between an executive President, bicameral National Assembly, and independent judiciary',
    ],
    historicalImpact: [
      'Demonstrated the operational mechanics of multi-party executive presidentialism, federal character principles, and national housing development.',
    ],
    debates: [
      'Historical critiques address macroeconomic vulnerability to oil revenue collapse, public debt accumulation, and allegations of electoral irregularities in the 1983 general elections.',
    ],
    historicalNotes:
      'Elected under the 1979 Constitution with Chief Alex Ekwueme as Vice President. Kept a courtly, consensus-oriented political style during intense multi-party contestation.',
    impactCategories: ['Civilian', 'Agriculture', 'Infrastructure', 'Constitutional History', 'Education'],
    sources: [
      { title: 'Beckoned to Serve: An Autobiography (Shehu Shagari)', sourceType: 'Historical Autobiography' },
      { title: 'The Nigerian Second Republic: Politics and Economy (Toyin Falola & Julius Ihonvbere)', sourceType: 'Academic Analysis' },
      { title: 'National Archives of Nigeria', sourceType: 'Archival Collection' },
    ],
  },

  // 8. MAJOR-GENERAL MUHAMMADU BUHARI (First Entry: Military Head of State 1983–1985)
  {
    id: 'muhammadu-buhari-mil',
    name: 'Major-General Muhammadu Buhari',
    office: 'Head of State',
    term: '1983 – 1985',
    periodStart: 'December 31, 1983',
    periodEnd: 'August 27, 1985',
    era: 'Military Era',
    governmentType: 'Military',
    photoUrl: '/images/people/muhammadu-buhari.jpg',
    state: 'Katsina',
    politicalPartyOrBranch: 'Nigerian Armed Forces (Supreme Military Council)',
    summary:
      'Military Head of State who initiated the "War Against Indiscipline" (WAI), enforced strict austerity fiscal controls, and conducted anti-corruption tribunals following the Second Republic collapse.',
    majorEvents: [
      'Assumption of power following the military coup of December 31, 1983',
      'Launch of the "War Against Indiscipline" (WAI) campaign in March 1984',
      'Currency redesign and exchange exercise in April 1984 to nullify smuggled cash hoards',
      'Promulgation of Decree No. 4 of 1984 (Protection Against False Accusations Decree)',
      'Ousting in an internal military coup led by Major-General Ibrahim Babangida on August 27, 1985',
    ],
    documentedPolicies: [
      'Refusal of International Monetary Fund (IMF) loan conditionality regarding currency devaluation',
      'Counter-trade agreements bartering crude petroleum directly for machinery and raw materials',
      'Severe public expenditure cutbacks and strict debt servicing allocation (up to 44% of export revenue)',
    ],
    infrastructure: [
      'Prioritized maintenance of existing federal assets over new mega-projects',
      'Resumed construction works on petroleum petrochemical plants and fertilizer facilities',
    ],
    economy: [
      'Aggressive anti-smuggling border crackdowns and stringent import licensing regime',
      'Prompt payment of public sector salaries combined with public sector payroll rationalization',
    ],
    educationAndSocial: [
      'Reintroduction of school fees in state institutions to curb fiscal deficits',
      'Strict enforcement of civil order, environmental sanitation Saturdays, and public queuing culture',
    ],
    democraticConstitutional: [
      'Abolished the 1979 Constitution, disbanded political parties, and governed through the Supreme Military Council',
    ],
    historicalImpact: [
      'Instituted a culture of public queuing, punctuality, and environmental sanitation that survived across subsequent decades.',
    ],
    debates: [
      'Historical debates center on human rights concerns, detention of political figures without trial under Decree No. 2, and media restrictions under Decree No. 4.',
    ],
    historicalNotes:
      'First of two distinct leadership periods for Muhammadu Buhari. This entry covers his 20-month military administration; his 2015–2023 civilian presidency is documented separately.',
    impactCategories: ['Military Governments', 'Economy', 'Security', 'Constitutional History'],
    sources: [
      { title: 'The Fall of the Second Republic (Ladipo Adamolekun)', sourceType: 'Academic Study' },
      { title: 'Federal Military Government Gazettes (1984–1985)', sourceType: 'Official Publication' },
      { title: 'State House Historical Leadership Archive', sourceType: 'Government Record' },
    ],
  },

  // 9. GENERAL IBRAHIM BABANGIDA (Head of State)
  {
    id: 'ibrahim-babangida',
    name: 'General Ibrahim Badamasi Babangida',
    office: 'Head of State',
    term: '1985 – 1993',
    periodStart: 'August 27, 1985',
    periodEnd: 'August 26, 1993',
    era: 'Military Era',
    governmentType: 'Military',
    photoUrl: '/images/people/ibrahim-babangida.jpg',
    state: 'Niger',
    politicalPartyOrBranch: 'Armed Forces Ruling Council (AFRC)',
    summary:
      'Styled "Military President" who introduced the Structural Adjustment Programme (SAP), relocated the federal capital seat to Abuja, and oversaw the transition program that culminated in the June 12, 1993 election crisis.',
    majorEvents: [
      'Introduction of the Structural Adjustment Programme (SAP) in 1986',
      'Establishment of the Directorate of Food, Roads and Rural Infrastructure (DFRRI)',
      'Creation of 11 new states (bringing total to 30 states by 1991)',
      'Formal relocation of the Federal Capital seat of government to Abuja on December 12, 1991',
      'Conduct and annulment of the June 12, 1993 presidential election, leading to nationwide constitutional crisis',
      'Stepped aside on August 26, 1993, installing the Interim National Government',
    ],
    documentedPolicies: [
      'Deregulation of banking, telecommunications, and private broadcasting (creation of NBC)',
      'Establishment of regulatory institutions: NDIC, FRSC, FEAP, and NERFUND',
      'Two-party grassroots political transition program (NRC and SDP)',
    ],
    infrastructure: [
      'Completion of the 11.8km Third Mainland Bridge in Lagos (1990)',
      'Massive construction of Aso Rock Presidential Villa, International Conference Centre, and federal ministries in Abuja',
      'Shiroro Hydroelectric Power Station and rural electrification across thousands of villages via DFRRI',
    ],
    economy: [
      'Liberalization of foreign exchange through the Second-tier Foreign Exchange Market (SFEM)',
      'Privatization and commercialization of state-owned enterprises (TCPC)',
      'Expansion of merchant and commercial banking licences nationwide',
    ],
    educationAndSocial: [
      'Establishment of the National Primary Education Commission (NPEC)',
      'Launch of the Better Life for Rural Women Programme led by First Lady Maryam Babangida',
    ],
    democraticConstitutional: [
      'Promulgation of the 1989 Constitution (largely unoperated) and Option A4 open-ballot voting system',
    ],
    historicalImpact: [
      'Permanent transformation of Abuja into the operational capital of Nigeria and liberalization of the private financial, aviation, and media sectors.',
    ],
    debates: [
      'The annulment of the June 12, 1993 presidential election (widely acknowledged as won by Chief M.K.O. Abiola) remains one of the most consequential controversies in Nigeria\'s political history, alongside the socioeconomic hardships under SAP.',
    ],
    historicalNotes:
      'Adopted the unprecedented title of "President and Commander-in-Chief" while ruling by military decree as head of the Armed Forces Ruling Council.',
    impactCategories: ['Military Governments', 'Infrastructure', 'Economy', 'Constitutional History', 'Technology'],
    sources: [
      { title: 'Governance and Politics in Nigeria: The IBB Era (Bjorn Beckman)', sourceType: 'Academic Volume' },
      { title: 'The Structural Adjustment Programme in Nigeria: Results and Prospects (CBN/NISER)', sourceType: 'Economic Assessment' },
      { title: 'State House Historical Leadership Archive', sourceType: 'Government Record' },
    ],
  },

  // 10. CHIEF ERNEST SHONEKAN (Head of Interim National Government)
  {
    id: 'ernest-shonekan',
    name: 'Chief Ernest Shonekan',
    office: 'Head of Interim National Government',
    term: 'August 1993 – November 1993',
    periodStart: 'August 26, 1993',
    periodEnd: 'November 17, 1993',
    era: 'Interim Government',
    governmentType: 'Interim',
    photoUrl: '/images/people/ernest-shonekan.jpg',
    state: 'Ogun',
    politicalPartyOrBranch: 'Interim National Government (ING)',
    summary:
      'Respected corporate executive and former UAC CEO who headed the 83-day civilian Interim National Government during the acute political crisis following the June 12 annulment.',
    majorEvents: [
      'Installation as Head of the Interim National Government on August 26, 1993',
      'Management of nationwide civil disobedience, strikes by labor unions (NUPENG/PENGASSAN), and pro-democracy agitation',
      'High Court of Lagos ruling by Justice Dolapo Akinsanya declaring the ING decree unconstitutional (November 10, 1993)',
      'Forced resignation following military intervention led by Defence Secretary General Sani Abacha on November 17, 1993',
    ],
    documentedPolicies: [
      'Efforts to audit public expenditures and prepare a schedule for fresh presidential elections in February 1994',
      'Attempted removal of fuel subsidies that exacerbated urban labor strikes',
      'Release of detained political activists to de-escalate civil strife',
    ],
    infrastructure: [
      'Short 83-day tenure prevented execution of major capital infrastructure programs',
    ],
    economy: [
      'Focus on fiscal stabilization and restoration of relations with international creditors',
    ],
    educationAndSocial: [
      'Addressed chronic university closures caused by Academic Staff Union of Universities (ASUU) strikes',
    ],
    democraticConstitutional: [
      'Unique constitutional hybrid: a civilian head of government working alongside military service chiefs in a non-elected transition regime',
    ],
    historicalImpact: [
      'Represented an unprecedented constitutional experiment in conflict-resolution that proved unsustainable in the face of military ambitions and public demands for June 12 mandate validation.',
    ],
    debates: [
      'Debates center on the constitutional legitimacy of Decree No. 61 of 1993 establishing the ING and the political dilemma of accepting appointment amidst the disputed annulment of democratic elections.',
    ],
    historicalNotes:
      'Chief Ernest Shonekan was Head of the Interim National Government, NOT an elected President. He stepped down under pressure on November 17, 1993.',
    impactCategories: ['Civilian', 'Constitutional History', 'Economy'],
    sources: [
      { title: 'Supreme Court and High Court Records on the Interim National Government (1993)', sourceType: 'Judicial Proceedings' },
      { title: 'The Nigerian Transition Crisis (Prof. Oyeleye Oyediran)', sourceType: 'Political Science Review' },
      { title: 'State House Historical Leadership Archive', sourceType: 'Government Record' },
    ],
  },

  // 11. GENERAL SANI ABACHA (Head of State)
  {
    id: 'sani-abacha',
    name: 'General Sani Abacha',
    office: 'Head of State',
    term: '1993 – 1998',
    periodStart: 'November 17, 1993',
    periodEnd: 'June 8, 1998',
    era: 'Military Era',
    governmentType: 'Military',
    photoUrl: '/images/people/sani-abacha.jpg',
    state: 'Kano',
    politicalPartyOrBranch: 'Provisional Ruling Council (PRC)',
    summary:
      'Military Head of State who established the Petroleum (Special) Trust Fund (PTF), stabilized foreign exchange reserves, created 6 new states (bringing total to 36), and governed through acute domestic confrontation and international sanctions.',
    majorEvents: [
      'Dissolution of all remaining democratic structures and formation of the Provisional Ruling Council (1993)',
      'Arrest of Chief M.K.O. Abiola following the Epetedo declaration of his June 12 mandate (June 1994)',
      'Execution of environmental activist Ken Saro-Wiwa and the Ogoni 9 (November 1995), causing Commonwealth suspension',
      'Creation of six additional states on October 1, 1996, establishing Nigeria\'s 36-state structure',
      'Decisive military intervention in Liberia and Sierra Leone under ECOMOG restoring civilian democracy',
      'Sudden passing while in office in the presidential villa on June 8, 1998',
    ],
    documentedPolicies: [
      'Establishment of the Petroleum (Special) Trust Fund (PTF) dedicated to infrastructure rehabilitation',
      'Stabilization of the official Naira exchange rate at N22 to $1 and accumulation of foreign reserves from $494M to over $9B',
      'Failed Banks (Recovery of Debts) and Financial Malpractices Tribunal Decree',
      'Convening of the 1994–1995 National Constitutional Conference introducing the 6 geopolitical zones concept',
    ],
    infrastructure: [
      'Rehabilitation of thousands of kilometres of federal highways nationwide via the PTF',
      'Supply of medical equipment and essential revolving pharmaceuticals to public tertiary and secondary hospitals',
      'Construction of the National Assembly Complex Phase 1 in Abuja',
    ],
    economy: [
      'Strict fiscal discipline eliminating internal central bank deficit financing',
      'Establishment of the Nigerian Investment Promotion Commission (NIPC) Decree',
    ],
    educationAndSocial: [
      'PTF interventions in public educational institutions, publishing subsidized school textbooks and laboratory kits',
    ],
    democraticConstitutional: [
      'Transition program involving five recognized political parties (criticized by Chief Bola Ige as "five fingers of a leprous hand")',
    ],
    historicalImpact: [
      'Created Nigeria\'s current 36-state map and geopolitical structure, while posthumous discoveries of illicit state funds ("Abacha loot") became subject to decades of global asset recovery.',
    ],
    debates: [
      'Marked by severe confrontations with civil society (NADECO), detention of political dissidents, and international isolation, juxtaposed against macroeconomic stability and PTF road rehabilitations.',
    ],
    historicalNotes:
      'Governed with absolute decree powers under the Provisional Ruling Council. Neutral historical analysis distinguishes between documented fiscal stabilization and documented human rights controversies.',
    impactCategories: ['Military Governments', 'Infrastructure', 'Economy', 'Security', 'Foreign Policy'],
    sources: [
      { title: 'National Archives of Nigeria (Abuja & Kaduna)', sourceType: 'Archival Records' },
      { title: 'Petroleum (Special) Trust Fund Operational Reports (1995–1998)', sourceType: 'Agency Compendium' },
      { title: 'Commonwealth Secretariat Sanctions Declarations (1995–1998)', sourceType: 'International Diplomatic Records' },
    ],
  },

  // 12. GENERAL ABDULSALAMI ABUBAKAR (Head of State)
  {
    id: 'abdulsalami-abubakar',
    name: 'General Abdulsalami Abubakar',
    office: 'Head of State',
    term: '1998 – 1999',
    periodStart: 'June 9, 1998',
    periodEnd: 'May 29, 1999',
    era: 'Military Era',
    governmentType: 'Military',
    photoUrl: '/images/people/abdulsalami-abubakar.jpg',
    state: 'Niger',
    politicalPartyOrBranch: 'Provisional Ruling Council (PRC)',
    specialBadge: '1999 — RETURN TO DEMOCRATIC GOVERNMENT',
    summary:
      'Military Head of State who executed a swift, credible 11-month democratic transition program, promulgated the 1999 Constitution, and transferred power to civilian government on May 29, 1999.',
    majorEvents: [
      'Assumption of office following the death of General Abacha on June 9, 1998',
      'Unconditional release of political detainees and amnesty for exiled pro-democracy figures',
      'Dissolution of Abacha-era political parties and establishment of an independent electoral commission (INEC)',
      'Promulgation of the 1999 Constitution of the Federal Republic of Nigeria (Decree No. 24 of 1999)',
      'Historic handover of executive power to elected President Olusegun Obasanjo on May 29, 1999',
    ],
    documentedPolicies: [
      'Rapid, time-bound disengagement of the military from Nigerian politics',
      'Establishment of the Independent National Electoral Commission (INEC) chaired by Justice Ephraim Akpata',
      'Restoration of Nigeria\'s full diplomatic status in the Commonwealth, EU, and United Nations',
    ],
    infrastructure: [
      'Focus on transition logistics and handover facilities in the Federal Capital Territory, Abuja',
    ],
    economy: [
      'Abolition of the dual exchange rate system, liberalizing the official foreign exchange regime',
      'Restoration of multilateral technical engagement with the World Bank and IMF',
    ],
    educationAndSocial: [
      'De-escalation of university union disputes and stabilization of academic calendars',
    ],
    democraticConstitutional: [
      'Enacted the 1999 Constitution which remains the supreme legal foundation of Nigeria\'s Fourth Republic',
      'Conducted multi-tiered local, state, legislative, and presidential elections in late 1998 and early 1999',
    ],
    historicalImpact: [
      'Strictly honored his solemn pledge to return power to civilian democracy within one year, inaugurating Nigeria\'s longest continuous democratic dispensation (Fourth Republic).',
    ],
    debates: [
      'Debates surround the rapid drafting of the 1999 Constitution without an elected constituent assembly, and questions regarding foreign reserve drawdown during the brief transition period.',
    ],
    historicalNotes:
      'Lauded globally for military statesmanship and adherence to transition commitments, ending 15 consecutive years of military governance in Nigeria.',
    impactCategories: ['Military Governments', 'Constitutional History', 'Democracy', 'Foreign Policy'],
    sources: [
      { title: 'The 1999 Constitution of the Federal Republic of Nigeria', sourceType: 'Legal Enactment' },
      { title: 'INEC Transition Election Reports (1998–1999)', sourceType: 'Official Electoral Record' },
      { title: 'Commonwealth Observer Group Report (1999)', sourceType: 'Diplomatic Assessment' },
    ],
  },

  // 13. CHIEF OLUSEGUN OBASANJO (Second Entry: President, Fourth Republic 1999–2007)
  {
    id: 'olusegun-obasanjo-civ',
    name: 'Chief Olusegun Obasanjo',
    office: 'President',
    term: '1999 – 2007',
    periodStart: 'May 29, 1999',
    periodEnd: 'May 29, 2007',
    era: 'Fourth Republic',
    governmentType: 'Civilian',
    photoUrl: '/images/people/olusegun-obasanjo.jpg',
    state: 'Ogun',
    politicalPartyOrBranch: 'People\'s Democratic Party (PDP)',
    summary:
      'First civilian president of the Fourth Republic. Oversaw the GSM telecommunications revolution, historic $18B Paris Club external debt relief, banking consolidation, and the creation of anti-corruption agencies (EFCC/ICPC).',
    majorEvents: [
      'Inauguration of the Fourth Republic on May 29, 1999 ending military rule',
      'GSM Mobile Telecommunications auction (2001) sparking Africa\'s largest telecoms expansion',
      'Successful negotiation and settlement of $18B Paris Club sovereign debt (2005)',
      'Establishment of the Economic and Financial Crimes Commission (EFCC) and ICPC',
      'Peaceful ceding of the Bakassi Peninsula to Cameroon complying with the ICJ ruling via the Green Tree Agreement (2006)',
    ],
    documentedPolicies: [
      'National Economic Empowerment and Development Strategy (NEEDS)',
      'Central Bank banking consolidation (2004–2005) reducing 89 fragile banks to 25 capitalized institutions',
      'Pensions Reform Act of 2004 establishing the Contributory Pension Scheme and PenCom',
      'Power Sector Reform Act of 2005 unbundling NEPA into PHCN generation, transmission, and distribution companies',
    ],
    infrastructure: [
      'National Integrated Power Project (NIPP) gas-fired power plants',
      'Rehabilitation of nationwide airport runways and early standard gauge rail planning',
      'Construction of the National Stadium Abuja for the 8th All Africa Games (2003)',
    ],
    economy: [
      'Accumulation of foreign reserves from $3.7B in 1999 to over $43B in 2007, plus $12B in the Excess Crude Account',
      'Establishment of the Debt Management Office (DMO) and privatization of state telecoms and petrochemical enterprises',
    ],
    educationAndSocial: [
      'Universal Basic Education (UBE) Act of 2004 providing statutory counterpart funding for primary education',
      'Licensing of pioneer private universities (Babcock, Igbinedion, Covenant, etc.) expanding higher education capacity',
    ],
    democraticConstitutional: [
      'Restored constitutional civil supremacy over the military, retiring political military officers',
      'Handed over power in 2007 in Nigeria\'s first civilian-to-civilian constitutional succession',
    ],
    historicalImpact: [
      'Modernized Nigeria\'s macroeconomic architecture, opened the digital economy through mobile telecom licensing, and relieved the nation of crippling external sovereign debt.',
    ],
    debates: [
      'Major political debates included the failed 2006 constitutional third-term amendment, military actions in Odi (1999) and Zaki Biam (2001), and allegations of political weaponization of the EFCC against opponents.',
    ],
    historicalNotes:
      'Second of two distinct leadership eras for Olusegun Obasanjo. Served two full terms as elected civilian president (1999–2007) after previously serving as military head of state (1976–1979).',
    impactCategories: ['Civilian', 'Technology', 'Economy', 'Infrastructure', 'Foreign Policy', 'Democracy'],
    sources: [
      { title: 'My Watch: Memoirs of Olusegun Obasanjo (3 Volumes)', sourceType: 'Autobiographical Archive' },
      { title: 'Reforming the Unreformable: Lessons from Nigeria (Ngozi Okonjo-Iweala)', sourceType: 'Economic Memoir' },
      { title: 'Central Bank of Nigeria Banking Consolidation Reviews (2004–2007)', sourceType: 'Central Bank Record' },
    ],
  },

  // 14. ALHAJI UMARU MUSA YAR'ADUA (President)
  {
    id: 'umaru-yaradua',
    name: 'Alhaji Umaru Musa Yar\'Adua',
    office: 'President',
    term: '2007 – 2010',
    periodStart: 'May 29, 2007',
    periodEnd: 'May 5, 2010',
    era: 'Fourth Republic',
    governmentType: 'Civilian',
    photoUrl: '/images/people/umaru-yaradua.jpg',
    state: 'Katsina',
    politicalPartyOrBranch: 'People\'s Democratic Party (PDP)',
    summary:
      'Elected civilian president revered for his commitment to the constitutional Rule of Law, public asset declaration, and the landmark 2009 Niger Delta Presidential Amnesty Programme.',
    majorEvents: [
      'First civilian-to-civilian presidential handover of power in Nigerian history (May 29, 2007)',
      'Historic proclamation of the Niger Delta Presidential Amnesty Programme (June 2009), disarming militants and restoring crude output',
      'Public declaration of personal assets upon taking the oath of office',
      'Admission of electoral flaws in his own election and creation of the Uwais Electoral Reform Committee',
      'Untimely passing while in office in Abuja on May 5, 2010, leading to constitutional succession by Goodluck Jonathan',
    ],
    documentedPolicies: [
      'Seven-Point Agenda focusing on power, agriculture, transport, security, and land tenure reform',
      'Unwavering adherence to the Rule of Law and reversal of controversial state-asset sales deemed lacking transparency',
      'Establishment of the Ministry of Niger Delta Affairs',
    ],
    infrastructure: [
      'Dredging of the Lower Niger River from Warri to Baro to improve inland water transport',
      'Continuation of the Abuja-Kaduna standard-gauge railway construction and Kano-Maiduguri expressway dualization',
    ],
    economy: [
      'Creation of the Sovereign Wealth Fund concept (later enact as NSIA)',
      'Banking sector sanity audit following the 2008 global financial meltdown (Sanusi Lamido Sanusi CBN reforms)',
    ],
    educationAndSocial: [
      'Implementation of the Niger Delta Presidential Amnesty disarmament, rehabilitation, and overseas educational scholarships',
    ],
    democraticConstitutional: [
      'Justice Muhammadu Uwais Electoral Reform Committee recommending independent appointment of the INEC chairman',
      'The "Doctrine of Necessity" invoked by the National Assembly during his medical absence to swear in Vice President Jonathan as Acting President',
    ],
    historicalImpact: [
      'The Niger Delta Amnesty Programme transformed a violent insurgency into economic stability and peace, while his respect for judicial rulings elevated constitutional fidelity in Nigeria.',
    ],
    debates: [
      'Debates focused on the administration\'s initial slow pace of policy implementation (dubbed "Baba Go-Slow") and the constitutional opacity surrounding his medical evacuation to Saudi Arabia in late 2009.',
    ],
    historicalNotes:
      'For the Niger Delta Amnesty Programme, the historical context and purpose of peaceful disarmament are presented factually without making an independent verdict on long-term outcomes.',
    impactCategories: ['Civilian', 'Security', 'Constitutional History', 'Economy', 'Democracy'],
    sources: [
      { title: 'Report of the Electoral Reform Committee (Justice Muhammadu Uwais, 2008)', sourceType: 'Presidential Committee Report' },
      { title: 'Presidential Amnesty Programme Official Records (2009–2010)', sourceType: 'Federal Archive' },
      { title: 'State House Historical Leadership Archive', sourceType: 'Government Record' },
    ],
  },

  // 15. DR. GOODLUCK EBELE JONATHAN (President)
  {
    id: 'goodluck-jonathan',
    name: 'Dr. Goodluck Ebele Jonathan',
    office: 'President',
    term: '2010 – 2015',
    periodStart: 'May 6, 2010',
    periodEnd: 'May 29, 2015',
    era: 'Fourth Republic',
    governmentType: 'Civilian',
    photoUrl: '/images/people/goodluck-jonathan.jpg',
    state: 'Bayelsa',
    politicalPartyOrBranch: 'People\'s Democratic Party (PDP)',
    summary:
      'First president from the Niger Delta minority region. Oversaw the Agricultural Transformation Agenda, 2014 GDP rebasing, expansion of federal universities, and made the historic concession call in 2015.',
    majorEvents: [
      'Assumption of presidency via the Doctrine of Necessity and subsequent victory in the 2011 general elections',
      'Establishment of 12 new Federal Universities across geopolitical zones to expand university access',
      'Statistical GDP Rebasing exercise in 2014, establishing Nigeria as Africa\'s largest economy ($510B GDP)',
      'Convening of the 2014 National Political Conference on constitutional restructuring',
      'Historic concession phone call to opposition challenger Muhammadu Buhari on March 31, 2015',
    ],
    documentedPolicies: [
      'Transformation Agenda focused on agriculture, rail revival, and power privatization',
      'Agricultural Transformation Agenda (ATA) introducing electronic-wallet fertilizer direct subsidies to farmers',
      'Nigerian Oil and Gas Industry Content Development Act (Local Content Act, 2010)',
      'Establishment of the Nigeria Sovereign Investment Authority (NSIA) in 2011',
    ],
    infrastructure: [
      'Completion of the 187km Abuja-Kaduna standard-gauge railway track works',
      'Extensive remodelling of 22 federal international and domestic airport terminals',
      'Commissioning of the privatized generation and distribution companies unbundled from PHCN (2013)',
    ],
    economy: [
      'Record inward Foreign Direct Investment (FDI) inflows and rapid expansion of the telecommunications and fintech sectors',
      'Launch of the Youth Enterprise with Innovation in Nigeria (YouWiN!) grant funding scheme',
    ],
    educationAndSocial: [
      'Founding of 12 new Federal Universities (Oye-Ekiti, Dutse, Lafia, Lokoja, Kashere, Wukari, etc.)',
      'Almajiri Integrated Model School programme across Northern Nigeria',
    ],
    democraticConstitutional: [
      'Enacted the Freedom of Information (FOI) Act in 2011',
      'Conceded the 2015 presidential election before official final tally conclusion, declaring "My ambition is not worth the blood of any Nigerian"',
    ],
    historicalImpact: [
      'His peaceful transfer of power to an opposition party in 2015 established a historic democratic benchmark across Africa for presidential succession.',
    ],
    debates: [
      'Controversies included the handling of the Boko Haram insurgency and the 2014 Chibok schoolgirls kidnapping, fiscal petroleum subsidy debates in January 2012 (Occupy Nigeria), and corruption investigations.',
    ],
    historicalNotes:
      'First sitting Nigerian president in history to concede defeat to an opposition candidate, establishing an enduring precedent for peaceful democratic transfers across the continent.',
    impactCategories: ['Civilian', 'Democracy', 'Agriculture', 'Technology', 'Education', 'Economy'],
    sources: [
      { title: 'My Transition Hours (Goodluck Ebele Jonathan)', sourceType: 'Presidential Memoir' },
      { title: 'National Bureau of Statistics GDP Rebasing Report (2014)', sourceType: 'Official Statistical Record' },
      { title: 'State House Historical Leadership Archive', sourceType: 'Government Record' },
    ],
  },

  // 16. MUHAMMADU BUHARI (Second Entry: President, Fourth Republic 2015–2023)
  {
    id: 'muhammadu-buhari-civ',
    name: 'Muhammadu Buhari',
    office: 'President',
    term: '2015 – 2023',
    periodStart: 'May 29, 2015',
    periodEnd: 'May 29, 2023',
    era: 'Fourth Republic',
    governmentType: 'Civilian',
    photoUrl: '/images/people/muhammadu-buhari.jpg',
    state: 'Katsina',
    politicalPartyOrBranch: 'All Progressives Congress (APC)',
    summary:
      'Two-term civilian president who focused on heavy standard-gauge rail transport, bridges, domestic rice self-sufficiency, social investment programs, and enacted the landmark Petroleum Industry Act (PIA).',
    majorEvents: [
      'Historic 2015 election marking the first democratic defeat of an incumbent ruling party in Nigeria',
      'Completion and commissioning of the iconic 1.6km Second Niger Bridge connecting Onitsha and Asaba (2022)',
      'Signing of the Petroleum Industry Act (PIA) in August 2021 ending two decades of legislative gridlock',
      'Declaration of June 12 as National Democracy Day and posthumous conferment of GCFR on Chief M.K.O. Abiola (2018)',
      'Management of the global COVID-19 pandemic response and subsequent economic recoveries',
    ],
    documentedPolicies: [
      'Economic Recovery and Growth Plan (ERGP) followed by National Development Plan (2021–2025)',
      'Treasury Single Account (TSA) enforcement across all Ministries, Departments, and Agencies (MDAs)',
      'Anchor Borrowers\' Programme (ABP) providing direct input credit to millions of smallholder rice and grain farmers',
      'Executive Order 10 on financial autonomy for state judiciaries and legislatures',
    ],
    infrastructure: [
      'Lagos-Ibadan Standard Gauge Railway line (156km) and modern terminal complexes',
      'Abuja Light Rail Metro system and completion of the Abuja-Kaduna and Itakpe-Warri rail corridors',
      'Construction and commissioning of the $1.5B Lekki Deep Sea Port in Lagos State',
      'Reconstruction of the 375km Abuja-Kaduna-Zaria-Kano expressway and Bodo-Bonny road bridge',
    ],
    economy: [
      'Expansion of non-oil tax revenues via annual Finance Acts and Federal Inland Revenue Service (FIRS) modernization',
      'Land border closures (2019–2020) to stimulate local agricultural processing and curb rice smuggling',
    ],
    educationAndSocial: [
      'National Social Investment Programme (NSIP): National Home Grown School Feeding, N-Power, and Conditional Cash Transfers',
      'Establishment of specialized federal universities of transportation, health sciences, and agriculture',
    ],
    democraticConstitutional: [
      'Enactment of the Electoral Act Amendment 2022 authorizing electronic transmission of polling unit results (IReV)',
      'Signing of the "Not Too Young to Run" constitutional amendment lowering age limits for elective office',
    ],
    historicalImpact: [
      'Built more heavy standard-gauge railway tracks and arterial national bridges than any administration since independence; resolved the 20-year Petroleum Industry Act deadlock.',
    ],
    debates: [
      'Controversies included nationwide public debt accumulation, persistent inflation, foreign exchange rationing, the 2020 EndSARS protests, and security challenges across the North-West and North-East.',
    ],
    historicalNotes:
      'Second of two distinct leadership eras for Muhammadu Buhari. Served two full terms as elected civilian president (2015–2023) after previously serving as military head of state (1983–1985).',
    impactCategories: ['Civilian', 'Infrastructure', 'Agriculture', 'Economy', 'Security', 'Constitutional History'],
    sources: [
      { title: 'Federal Ministry of Works and Housing Infrastructure Compendium (2015–2023)', sourceType: 'Ministry Documentation' },
      { title: 'Petroleum Industry Act (PIA) 2021', sourceType: 'Statutory Act of the National Assembly' },
      { title: 'State House Historical Leadership Archive', sourceType: 'Government Record' },
    ],
  },

  // 17. ASIWAJU BOLA AHMED TINUBU (President, Fourth Republic 2023–Present)
  {
    id: 'bola-ahmed-tinubu',
    name: 'Asiwaju Bola Ahmed Tinubu',
    office: 'President',
    term: '2023 – Present',
    periodStart: 'May 29, 2023',
    periodEnd: 'Present (2026)',
    era: 'Fourth Republic',
    governmentType: 'Civilian',
    photoUrl: '/images/people/bola-ahmed-tinubu.jpg',
    state: 'Lagos',
    politicalPartyOrBranch: 'All Progressives Congress (APC)',
    isCurrentAdmin: true,
    lastUpdated: 'Updated: October 1, 2026',
    summary:
      'Sixteenth President of Nigeria. Initiated fundamental macroeconomic structural reforms on inauguration day including fuel subsidy removal and foreign exchange market unification under the Renewed Hope Agenda.',
    majorEvents: [
      'Inauguration as 16th President of the Federal Republic of Nigeria on May 29, 2023',
      'Announcement of fuel subsidy termination during inaugural address on May 29, 2023',
      'Harmonization and unification of multiple foreign exchange market tiers into a market-determined system',
      'Creation of the Ministry of Marine and Blue Economy and the Ministry of Livestock Development',
      'Presiding over Nigeria @ 66 National Independence Jubilee festivities (October 1, 2026)',
    ],
    documentedPolicies: [
      'Renewed Hope Agenda focused on macroeconomic stabilization, domestic investment, and social safety nets',
      'Enactment of the Access to Higher Education Act (Student Loan Scheme) establishing NELFUND',
      'Presidential Fiscal Policy and Tax Reforms Committee headed by Taiwo Oyedele',
      'Supreme Court local government financial autonomy landmark judgment enforcement',
    ],
    infrastructure: [
      'Commencement and construction of the 700km 10-lane Lagos-Calabar Coastal Highway project',
      'Initiation of the 1,068km Sokoto-Badagry Superhighway national transit corridor',
      'Expansion of Abuja rail mass transit operations and federal arterial road repairs',
    ],
    economy: [
      'Central Bank monetary policy orthodox interest rate management to tame inflationary pressure',
      'Record federal and sub-national FAAC revenue distributions resulting from subsidy cessation and FX revaluation',
      'Launch of the Presidential Compressed Natural Gas (CNG) initiative to reduce commercial transport costs',
    ],
    educationAndSocial: [
      'Full operationalization of the Nigerian Education Loan Fund (NELFUND) disbursing tuition loans and living upkeep',
      'Expansion of the National Social Register for targeted conditional cash distributions',
    ],
    democraticConstitutional: [
      'Consolidation of local government direct statutory allocation following the landmark Supreme Court ruling',
      'Active leadership as Chairman of the ECOWAS Authority of Heads of State and Government',
    ],
    historicalImpact: [
      'Undertook the most consequential structural overhaul of Nigeria’s macroeconomic fiscal and monetary regime in nearly four decades. As an ongoing administration, long-term historical legacy remains to be determined by future historians.',
    ],
    debates: [
      'Widespread public discussions focus on short-term cost-of-living adjustments, food inflation, transport costs, and foreign exchange volatility following the swift removal of fuel subsidies and currency floating.',
    ],
    historicalNotes:
      'Because this is a current administration, documented developments are strictly presented under "Impact to Date" rather than "Final Legacy" or "Historical Verdict". Updated: October 1, 2026.',
    impactCategories: ['Civilian', 'Economy', 'Infrastructure', 'Education', 'Constitutional History', 'Foreign Policy'],
    sources: [
      { title: 'Official Gazette of the Federal Republic of Nigeria (2023–2026)', sourceType: 'Statutory Gazette' },
      { title: 'Central Bank of Nigeria Monetary Policy Communiqués (2023–2026)', sourceType: 'Monetary Authority Record' },
      { title: 'State House Leadership Archive', sourceType: 'Government Record' },
    ],
  },
];

export const DID_YOU_KNOW_FACTS = [
  {
    fact: 'Sir Abubakar Tafawa Balewa was Prime Minister, not President. In Nigeria\'s First Republic, the Prime Minister was the executive Head of Government, while the President was the constitutional Head of State.',
    tag: 'Constitutional History',
  },
  {
    fact: 'Dr. Nnamdi Azikiwe became Nigeria\'s first President under the 1963 Republican Constitution, which severed constitutional ties with the British Monarchy.',
    tag: 'First Republic',
  },
  {
    fact: 'Two leaders in Nigerian history have served both as military Heads of State and later as democratically elected civilian Presidents: Olusegun Obasanjo (1976–79 & 1999–2007) and Muhammadu Buhari (1983–85 & 2015–23).',
    tag: 'Leadership Milestones',
  },
  {
    fact: 'The decision to relocate Nigeria\'s Federal Capital from Lagos to Abuja was initiated by General Murtala Mohammed in 1976, while the formal relocation of the seat of government was completed under General Ibrahim Babangida in 1991.',
    tag: 'Abuja History',
  },
  {
    fact: 'Chief Ernest Shonekan served as Head of the Interim National Government for 83 days in 1993, making it the shortest civilian administration in modern Nigerian history.',
    tag: 'Interim Government',
  },
  {
    fact: 'General Abdulsalami Abubakar supervised an 11-month transition program that culminated in the May 29, 1999 handover, inaugurating the Fourth Republic — Nigeria\'s longest continuous democracy.',
    tag: 'Fourth Republic',
  },
  {
    fact: 'In 2015, President Goodluck Jonathan became the first sitting Nigerian president to concede an election to an opposition candidate, establishing an enduring African democratic standard.',
    tag: 'Democratic Precedent',
  },
];

export const NATIONAL_MILESTONES = [
  {
    year: '1960',
    title: '🇳🇬 Independence',
    description: 'Nigeria gains full sovereign independence from Great Britain on October 1, 1960 under Prime Minister Sir Abubakar Tafawa Balewa.',
  },
  {
    year: '1963',
    title: '🇳🇬 Nigeria Becomes a Republic',
    description: 'Promulgation of the 1963 Republican Constitution abolishes Queen Elizabeth II as Head of State; Dr. Nnamdi Azikiwe sworn in as first President.',
  },
  {
    year: '1966',
    title: '🇳🇬 First Military Government',
    description: 'January 15 military coup ends the First Republic; Major-General J.T.U. Aguiyi-Ironsi assumes office as first military Head of State.',
  },
  {
    year: '1976',
    title: '🇳🇬 Abuja / FCT Development Begins',
    description: 'Following the Justice Akinola Aguda panel, General Murtala Mohammed promulgates the decree establishing the Federal Capital Territory.',
  },
  {
    year: '1979',
    title: '🇳🇬 Second Republic Inauguration',
    description: 'Military Head of State Olusegun Obasanjo voluntarily transfers power to elected civilian President Shehu Shagari under an executive presidential system.',
  },
  {
    year: '1983',
    title: '🇳🇬 Military Government Returns',
    description: 'Military intervention terminates the Second Republic on December 31, 1983; Major-General Muhammadu Buhari becomes Head of State.',
  },
  {
    year: '1993',
    title: '🇳🇬 June 12 Election & Transition Crisis',
    description: 'Presidential election held on June 12 is annulled by the military government, leading to widespread civic resistance and the 83-day Interim National Government.',
  },
  {
    year: '1998',
    title: '🇳🇬 Transition Toward Democratic Governance',
    description: 'General Abdulsalami Abubakar initiates an 11-month transition program, releases political prisoners, and prepares the 1999 Constitution.',
  },
  {
    year: '1999',
    title: '🇳🇬 Fourth Republic Begins',
    description: 'Transfer of power to elected President Olusegun Obasanjo on May 29, 1999 commences Nigeria\'s longest continuous democratic dispensation.',
  },
  {
    year: '2000s',
    title: '📡 Telecommunications Revolution',
    description: 'Auctioning of GSM mobile telecommunication spectrum licenses transforms digital access, banking, and nationwide commerce.',
  },
  {
    year: '2010s',
    title: '🚆 Modern Transport & Rail Expansion',
    description: 'Modern standard-gauge railways (Abuja-Kaduna, Lagos-Ibadan) and airport terminal expansions link national economic corridors.',
  },
  {
    year: '2020s',
    title: '💻 Digital Economy & Macroeconomic Reforms',
    description: 'Expansion of fintech innovation, Petroleum Industry Act implementation, and structural macroeconomic adjustments as Nigeria marks 66 years of independence.',
  },
];
