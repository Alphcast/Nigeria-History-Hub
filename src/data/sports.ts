export interface SportsAchievement {
  competition: string;
  year: number | string;
  medal?: 'Gold' | 'Silver' | 'Bronze' | 'Record' | 'Champion' | 'Honour';
  event?: string;
  description: string;
}

export interface AthleteProfileData {
  id: string;
  name: string;
  sport: string;
  category: string;
  primaryEventOrPosition: string;
  era: string;
  birthDate?: string;
  deathDate?: string;
  photoUrl: string;
  nationality: string;
  isAtlanta96?: boolean;
  clubAtTime?: string;
  olympicRole?: string;
  tagline: string;
  biography: string;
  achievements: SportsAchievement[];
  internationalRecord: string[];
  nationalTeamRecord?: string;
  awards: string[];
  sportingImpact: string;
  whereAreTheyNow?: string;
  sources: string[];
}

export interface MatchTimelineEvent {
  stage: string;
  date: string;
  opponent: string;
  score: string;
  venue: string;
  headline: string;
  description: string;
  keyScorers: string[];
  isGoldMatch?: boolean;
}

export interface MilestoneEvent {
  year: number;
  title: string;
  sport: string;
  summary: string;
  impact: string;
}

// 1. SPORTS CATEGORIES
export const SPORTS_CATEGORIES = [
  { id: 'all', label: 'All Legends', icon: '🏆' },
  { id: 'football', label: 'Football', icon: '⚽' },
  { id: 'athletics', label: 'Athletics', icon: '🏃' },
  { id: 'atlanta96', label: "Atlanta '96", icon: '🥇' },
  { id: 'boxing', label: 'Boxing', icon: '🥊' },
  { id: 'basketball', label: 'Basketball', icon: '🏀' },
  { id: 'paralympic', label: 'Paralympic Sports', icon: '♿' },
  { id: 'women-sport', label: "Women's Pioneers", icon: '👑' },
  { id: 'modern', label: 'Modern Football Icons', icon: '🌟' },
  { id: 'weightlifting', label: 'Weightlifting & Wrestling', icon: '🏋️' },
  { id: 'racket', label: 'Table Tennis & Tennis', icon: '🏓' },
  { id: 'olympic-history', label: 'Olympic History', icon: '🌍' },
];

// 2. ATLANTA '96 MATCH TIMELINE
export const ATLANTA_96_MATCHES: MatchTimelineEvent[] = [
  {
    stage: 'Group D · Match 1',
    date: 'July 21, 1996',
    opponent: 'Hungary',
    score: 'Nigeria 1–0 Hungary',
    venue: 'Citrus Bowl, Orlando',
    headline: 'Nwankwo Kanu seals opening group victory',
    description:
      'Nigeria opened their Olympic campaign with tactical discipline. Captain Nwankwo Kanu scored the decisive winner in the 44th minute, setting the tone for the campaign.',
    keyScorers: ['Nwankwo Kanu (44\')'],
  },
  {
    stage: 'Group D · Match 2',
    date: 'July 23, 1996',
    opponent: 'Japan',
    score: 'Nigeria 2–0 Japan',
    venue: 'Citrus Bowl, Orlando',
    headline: 'Tijani Babangida & Jay-Jay Okocha secure progression',
    description:
      'A resilient second-half performance saw Tijani Babangida capitalize in the 82nd minute before Jay-Jay Okocha dispatched a stoppage-time penalty to clinch qualification.',
    keyScorers: ['Tijani Babangida (82\')', 'Jay-Jay Okocha (90+4\' pen)'],
  },
  {
    stage: 'Group D · Match 3',
    date: 'July 25, 1996',
    opponent: 'Brazil',
    score: 'Brazil 1–0 Nigeria',
    venue: 'Orange Bowl, Miami',
    headline: 'Narrow group defeat against star-studded Seleção',
    description:
      'In a prelude to their legendary semifinal rematch, a Ronaldo goal in the 30th minute gave Brazil the victory, but Nigeria advanced safely as runners-up of Group D.',
    keyScorers: ['Ronaldo (30\')'],
  },
  {
    stage: 'Quarter-Final',
    date: 'July 28, 1996',
    opponent: 'Mexico',
    score: 'Nigeria 2–0 Mexico',
    venue: 'Legion Field, Birmingham, Alabama',
    headline: 'Okocha & Babayaro send Nigeria to the semifinals',
    description:
      'Jay-Jay Okocha opened the scoring with a thunderous strike from distance in the 20th minute. Celestine Babayaro sealed the 2–0 win in the 84th minute to book a semifinal clash with Brazil.',
    keyScorers: ['Jay-Jay Okocha (20\')', 'Celestine Babayaro (84\')'],
  },
  {
    stage: 'Semi-Final · The Comeback of the Century',
    date: 'July 31, 1996',
    opponent: 'Brazil',
    score: 'Nigeria 4–3 Brazil (A.E.T. / Golden Goal)',
    venue: 'Sanford Stadium, Athens, Georgia',
    headline: 'Kanu\'s golden goal produces one of football\'s greatest comebacks',
    description:
      'Trailing 3–1 at half-time to a Brazilian team featuring Bebeto, Rivaldo, and Roberto Carlos, Nigeria mounted an astonishing comeback. Victor Ikpeba pulled one back in the 78th minute. In the 90th minute, Nwankwo Kanu scooped the equalizer under pressure to force extra time. In the 94th minute of extra time, Kanu curled the historic sudden-death golden goal into the net to complete a miraculous 4–3 victory.',
    keyScorers: ['Roberto Carlos (o.g. 20\')', 'Victor Ikpeba (78\')', 'Nwankwo Kanu (90\', 94\' Golden Goal)'],
  },
  {
    stage: 'Olympic Final · Gold Medal Match',
    date: 'August 3, 1996',
    opponent: 'Argentina',
    score: 'Nigeria 3–2 Argentina',
    venue: 'Sanford Stadium, Athens, Georgia',
    headline: 'Nigeria claims Africa\'s first Olympic Football Gold',
    description:
      'Before 86,117 spectators at Sanford Stadium, Nigeria faced an Argentina side featuring Hernán Crespo, Ariel Ortega, and Javier Zanetti. Trailing 2–1 in the second half, Daniel Amokachi leveled with an exquisite lob in the 74th minute. In the 90th minute, Emmanuel Amuneke sprung the offside trap to volley home the winning goal, securing a historic 3–2 victory and making Nigeria the first African nation in Olympic history to win the Football Gold Medal.',
    keyScorers: ['Celestine Babayaro (28\')', 'Daniel Amokachi (74\')', 'Emmanuel Amuneke (90\')'],
    isGoldMatch: true,
  },
];

// 3. COMPLETE ATHLETES DATABASE
export const ALL_SPORTS_LEGENDS: AthleteProfileData[] = [
  // --- ATLANTA '96 GOLDEN GENERATION ---
  {
    id: 'nwankwo-kanu-sport',
    name: 'Nwankwo Kanu',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Forward / Team Captain',
    era: '1990s–2010s',
    birthDate: 'August 1, 1976',
    photoUrl: '/images/sports/nwankwo-kanu.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'AFC Ajax (Netherlands)',
    olympicRole: 'Captain & Golden Goal Hero',
    tagline: 'Olympic Gold Captain, Two-time African Footballer of the Year & Philanthropist',
    biography:
      'Nwankwo Kanu is one of the most decorated and beloved figures in African sports history. Born in Owerri, Imo State, he burst onto the global scene as captain of the Nigeria U-17 team that won the 1993 FIFA U-17 World Championship in Japan. In 1995, at just 18, he won the UEFA Champions League with Ajax. At the 1996 Atlanta Olympics, he captained the "Dream Team" to historic Gold, scoring twice in the dramatic 4–3 semifinal comeback against Brazil, including the iconic golden goal. Following life-saving heart surgery in 1996, he staged an extraordinary comeback, starring for Arsenal as an "Invincible" (2003–04) and winning the FA Cup with Portsmouth in 2008.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Captained Nigeria to Africa\'s first Olympic football gold medal; scored iconic semifinal golden goal vs Brazil.' },
      { competition: 'UEFA Champions League', year: 1995, medal: 'Champion', description: 'Won Europe\'s premier club competition with AFC Ajax.' },
      { competition: 'African Footballer of the Year', year: '1996, 1999', medal: 'Honour', description: 'Named Africa\'s finest player twice by CAF.' },
      { competition: 'English Premier League', year: '2002, 2004', medal: 'Champion', description: 'Won two Premier League titles with Arsenal, including the historic unbeaten "Invincibles" season.' },
      { competition: 'FIFA U-17 World Cup', year: 1993, medal: 'Champion', description: 'Captained the Golden Eaglets to World Cup victory in Japan.' },
    ],
    internationalRecord: [
      '87 senior appearances for the Super Eagles of Nigeria',
      'Represented Nigeria at 3 FIFA World Cups (1998, 2002, 2010)',
      'Scored 12 senior international goals',
    ],
    nationalTeamRecord: 'Captain (2000–2010); 87 Caps; 1996 Olympic Gold Captain',
    awards: [
      'CAF African Footballer of the Year (1996, 1999)',
      'BBC African Footballer of the Year (1997, 1999)',
      'Member of the Order of the Niger (MON)',
      'Officer of the Order of the Niger (OON)',
    ],
    sportingImpact:
      'Kanu proved that African footballers could conquer world football at the highest club and international levels while demonstrating extraordinary personal courage. His Kanu Heart Foundation has funded open-heart surgeries for over 560 underprivileged children across Nigeria and Africa.',
    whereAreTheyNow: 'Chairman of Enyimba International FC; Founder and Chairman of the Kanu Heart Foundation; UNICEF Goodwill Ambassador.',
    sources: [
      'International Olympic Committee (IOC) Atlanta 1996 Official Tournament Records',
      'FIFA World Cup Archives & CAF Player Records',
      'Kanu Heart Foundation Official Registry',
    ],
  },
  {
    id: 'chioma-ajunwa-sport',
    name: 'Chioma Ajunwa-Opara',
    sport: 'Athletics & Football',
    category: 'athletics',
    primaryEventOrPosition: "Women's Long Jump / Former Super Falcons Forward",
    era: '1990s',
    birthDate: 'December 25, 1970',
    photoUrl: '/images/sports/chioma-ajunwa.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    olympicRole: "Women's Long Jump Gold Medalist (7.12m)",
    tagline: 'Nigeria\'s First Individual Olympic Gold Medalist & Dual-Sport Legend',
    biography:
      'Chioma Ajunwa-Opara MON is a historic trailblazer in African sports history. Born in Umuehihim, Imo State, she possesses the unique distinction of competing at both the FIFA Women\'s World Cup as a footballer (1991 in China with the Super Falcons) and at the Olympic Games as an elite track and field athlete. On August 2, 1996, inside the Olympic Stadium in Atlanta, Ajunwa leapt a monumental 7.12 meters on her very first attempt in the long jump final—a leap that secured Nigeria\'s first-ever individual Olympic gold medal and made her the first Black African woman in history to win an Olympic track-and-field gold.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Women's Long Jump", description: 'Won Nigeria\'s first individual Olympic gold medal with a jump of 7.12m in Atlanta.' },
      { competition: 'All-Africa Games', year: 1991, medal: 'Gold', event: "Women's Long Jump", description: 'African champion in Cairo, Egypt.' },
      { competition: 'World Indoor Championships', year: 1997, medal: 'Silver', event: "Women's Long Jump", description: 'Silver medalist in Paris with a 6.97m indoor mark.' },
      { competition: 'FIFA Women\'s World Cup', year: 1991, medal: 'Record', description: 'Member of Nigeria\'s inaugural Women\'s World Cup squad in China.' },
    ],
    internationalRecord: [
      'Personal Best Long Jump: 7.12m (Atlanta, 1996) — Nigerian national record',
      'Personal Best 100m: 10.84s (1992)',
      'Olympic Gold medalist in Atlanta 1996',
    ],
    nationalTeamRecord: 'Dual-sport international: Nigeria Women\'s National Football Team (1991) and Athletics National Team (1989–2002).',
    awards: [
      'Member of the Order of the Niger (MON) conferred in 1996',
      'African Athletics Hall of Fame inductee',
      'Assistant Commissioner of Police (ACP) in the Nigeria Police Force',
    ],
    sportingImpact:
      'Ajunwa shattered gender and continental barriers by proving that an African woman could win individual gold in an Olympic field event. She has since served as an Assistant Commissioner of Police and created the Chioma Ajunwa Foundation to mentor girls in sports.',
    whereAreTheyNow: 'Assistant Commissioner of Police (ACP) in the Nigeria Police Force; Founder, Chioma Ajunwa Foundation for youth empowerment and anti-drug sports development.',
    sources: [
      'International Olympic Committee (IOC) Historical Database: Atlanta 1996 Long Jump',
      'World Athletics Athlete Profile (7.12m Record)',
      'Nigeria Olympic Committee (NOC) Official Records',
    ],
  },
  {
    id: 'jay-jay-okocha-sport',
    name: 'Augustine "Jay-Jay" Okocha',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Attacking Midfielder',
    era: '1990s–2000s',
    birthDate: 'August 14, 1973',
    photoUrl: '/images/sports/jay-jay-okocha.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'Eintracht Frankfurt (Germany) / Fenerbahçe (Turkey)',
    olympicRole: 'Playmaker & Key Scorer (Quarterfinal & Group Stage)',
    tagline: 'Football Virtuoso, Olympic Gold Medalist & Premier League Icon',
    biography:
      'Augustine Azuka "Jay-Jay" Okocha is universally celebrated as one of the most naturally gifted dribblers and entertainers in football history. Born in Enugu, he made his international breakthrough at the 1994 Africa Cup of Nations, helping Nigeria lift the trophy in Tunisia. At Atlanta 1996, wearing the famous number 10 shirt, his extraordinary vision, dead-ball precision, and poise under pressure drove the Dream Team to Olympic Gold. He went on to star for Paris Saint-Germain (where he mentored a young Ronaldinho) and Bolton Wanderers in the English Premier League, where his audacious skill captured global admiration.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Playmaker of the Olympic Gold-winning Dream Team; scored in group stage and quarterfinal.' },
      { competition: 'Africa Cup of Nations', year: 1994, medal: 'Champion', description: 'Winner of AFCON 1994 in Tunisia.' },
      { competition: 'Africa Cup of Nations', year: 2004, medal: 'Record', description: 'Player of the Tournament and Golden Boot winner with 4 goals in Tunisia.' },
      { competition: 'FIFA World Cup', year: '1994, 1998, 2002', medal: 'Record', description: 'Represented Nigeria in 3 World Cups; named in the 1998 FIFA World Cup All-Star Reserve Team.' },
    ],
    internationalRecord: [
      '73 senior appearances for Nigeria (1993–2006)',
      '14 international goals',
      'Super Eagles Captain from 2002 to 2006',
    ],
    nationalTeamRecord: '73 Caps, 14 Goals; 1994 AFCON Winner, 1996 Olympic Gold, 2000 AFCON Finalist',
    awards: [
      'BBC African Footballer of the Year (2003, 2004)',
      'AFCON Most Valuable Player (2004)',
      'FIFA 100 — Pelé\'s list of the greatest living footballers (2004)',
      'Member of the Order of the Niger (MON)',
    ],
    sportingImpact:
      'Okocha popularized expressive, joyful football globally. The phrase "so good they named him twice" became a cultural anthem among Bolton and Premier League fans, inspiring generations of African creative midfielders.',
    whereAreTheyNow: 'Television football analyst for SuperSport; sports entrepreneur, youth academy patron, and corporate brand ambassador.',
    sources: [
      'FIFA Technical Report 1994, 1998 & 2002 World Cups',
      'Confederation of African Football (CAF) Player Records',
      'Premier League Historical Archives (Bolton Wanderers)',
    ],
  },
  {
    id: 'celestine-babayaro-sport',
    name: 'Celestine Babayaro',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Left Back',
    era: '1990s–2000s',
    birthDate: 'August 29, 1978',
    photoUrl: '/images/sports/celestine-babayaro.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'R.S.C. Anderlecht (Belgium)',
    olympicRole: 'Starting Left-Back & Final Scorer',
    tagline: 'Youngest Champions League Debutant of His Era & Olympic Gold Hero',
    biography:
      'Celestine Hycieth Babayaro is an Olympic Gold medalist and pioneering defender. Born in Kaduna, Babayaro rose to prominence with Nigeria\'s U-17 World Championship team in 1993. At Anderlecht in November 1994, aged just 16 years and 86 days, he set the record as the youngest player ever to feature in a UEFA Champions League match (a record that stood for over 26 years). At the 1996 Atlanta Olympics, Babayaro was Nigeria\'s starting left-back, scoring in the 2–0 quarterfinal win over Mexico and netting Nigeria\'s opening goal in the 3–2 Final victory against Argentina. He later spent eight seasons at Chelsea, winning the FA Cup, UEFA Cup Winners\' Cup, and UEFA Super Cup.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Scored in the quarterfinal and final; celebrated with iconic backflip.' },
      { competition: 'FIFA U-17 World Cup', year: 1993, medal: 'Champion', description: 'World champion in Japan with the Golden Eaglets.' },
      { competition: 'English FA Cup', year: 2000, medal: 'Champion', description: 'Won the FA Cup with Chelsea FC at Wembley.' },
      { competition: 'UEFA Cup Winners\' Cup', year: 1998, medal: 'Champion', description: 'European continental trophy with Chelsea FC.' },
    ],
    internationalRecord: [
      '27 senior caps for the Super Eagles of Nigeria',
      'Represented Nigeria at the 1998 and 2002 FIFA World Cups',
      'Starting defender at Atlanta 1996 Olympic tournament',
    ],
    nationalTeamRecord: '27 Caps; 1996 Olympic Gold; 1998 & 2002 World Cup squads',
    awards: [
      'Ebony Shoe Award for Best African player in the Belgian Pro League (1996)',
      'Member of the Order of the Niger (MON)',
    ],
    sportingImpact:
      'Babayaro opened doors for teenage African defenders in elite European leagues and popularized energetic full-back play, celebrated by fans for his trademark acrobatic backflip goal celebrations.',
    whereAreTheyNow: 'Football scout, ambassador, and media personality residing in the UK and Nigeria.',
    sources: [
      'IOC Atlanta 1996 Football Final Official Match Sheet',
      'UEFA Champions League Historical Records (Youngest Players)',
      'Chelsea FC Player Archive',
    ],
  },
  {
    id: 'daniel-amokachi-sport',
    name: 'Daniel Amokachi',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Forward ("The Bull")',
    era: '1990s',
    birthDate: 'December 30, 1972',
    photoUrl: '/images/sports/daniel-amokachi.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'Everton FC (England)',
    olympicRole: 'Forward & Scorer of Equalizer in Final (74\')',
    tagline: 'Olympic Gold Medalist, First Champions League Scorer & FA Cup Champion',
    biography:
      'Daniel Owefin Amokachi, famously nicknamed "The Bull" for his relentless power, speed, and aggressive running, was an indispensable engine of Nigeria\'s golden football era. On November 25, 1992, playing for Club Brugge against CSKA Moscow, Amokachi scored the very first goal in the rebranded format of the UEFA Champions League. At the 1994 World Cup, his thunderous goals against Bulgaria and Greece announced him globally. In 1995 he won the English FA Cup with Everton, scoring twice in the semifinal against Tottenham. In the 1996 Olympic Final against Argentina, with Nigeria trailing 2–1, Amokachi delivered a deft 74th-minute lob over goalkeeper Pablo Cavallero to draw Nigeria level.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Scored vital 74th-minute equalizer in the 3–2 Final triumph over Argentina.' },
      { competition: 'UEFA Champions League', year: 1992, medal: 'Record', description: 'Scored the first goal in UEFA Champions League group stage history (Club Brugge 1–0 CSKA Moscow).' },
      { competition: 'English FA Cup', year: 1995, medal: 'Champion', description: 'Won the FA Cup with Everton at Wembley.' },
      { competition: 'Africa Cup of Nations', year: 1994, medal: 'Champion', description: 'Winner of AFCON 1994 in Tunisia.' },
    ],
    internationalRecord: [
      '44 senior appearances and 13 goals for the Super Eagles',
      'Scored 2 goals at the 1994 FIFA World Cup (vs Bulgaria, Greece)',
      '1996 Olympic Gold medalist',
    ],
    nationalTeamRecord: '44 Caps, 13 Goals; 1994 AFCON Champion; 1996 Olympic Champion',
    awards: [
      'Third place, African Footballer of the Year (1994, 1995, 1996)',
      'Ebony Shoe Award in Belgium (1992, 1994)',
      'Member of the Order of the Niger (MON)',
    ],
    sportingImpact:
      'A powerful cultural figure in Nigerian sports whose physicality redefined modern African forward play. He popularized the "Amo-dance" goal celebration worldwide.',
    whereAreTheyNow: 'Special Assistant on Sports to the President of Nigeria; former Super Eagles Assistant Coach; technical director and television pundit.',
    sources: [
      'UEFA Official Champions League Historical Archive',
      'IOC Olympic Final Report 1996',
      'Everton FC Heritage Records (1995 FA Cup)',
    ],
  },
  {
    id: 'emmanuel-amuneke-sport',
    name: 'Emmanuel Amuneke',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Winger / Forward',
    era: '1990s',
    birthDate: 'December 25, 1970',
    photoUrl: '/images/sports/emmanuel-amuneke.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'Sporting CP (Portugal)',
    olympicRole: 'Match-Winner in 1996 Olympic Final (90\')',
    tagline: '1994 African Footballer of the Year & Olympic Final Golden Match-Winner',
    biography:
      'Emmanuel Amuneke is one of Nigeria\'s ultimate big-game performers. Born in Eziobodo, Imo State, Amuneke scored both goals in Nigeria\'s 2–1 victory over Zambia in the 1994 Africa Cup of Nations Final in Tunis. Later that summer, he scored memorable goals against Bulgaria and Italy at the 1994 FIFA World Cup. His crowning moment arrived on August 3, 1996 in the Olympic Final: coming off the bench with the score locked at 2–2 against Argentina, Amuneke beat the Argentine offside trap in the 90th minute to volley home Wilson Oruma\'s free-kick, clinching Olympic Gold. He subsequently transferred to FC Barcelona.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Scored 90th-minute winning goal in the 3–2 final against Argentina.' },
      { competition: 'African Footballer of the Year', year: 1994, medal: 'Honour', description: 'Awarded CAF\'s highest individual prize.' },
      { competition: 'Africa Cup of Nations', year: 1994, medal: 'Champion', description: 'Scored both goals in the 2–1 final victory over Zambia in Tunis.' },
      { competition: 'FIFA U-17 World Cup', year: 2015, medal: 'Champion', description: 'Coached Nigeria to victory as manager at the U-17 World Cup in Chile.' },
    ],
    internationalRecord: [
      '27 senior caps and 9 international goals for Nigeria',
      'Scored in AFCON Final (1994), World Cup Round of 16 (1994), and Olympic Final (1996)',
    ],
    nationalTeamRecord: '27 Caps, 9 Goals; 1994 AFCON Winner, 1996 Olympic Champion',
    awards: [
      'CAF African Footballer of the Year (1994)',
      'BBC African Footballer of the Year (1996)',
      'Member of the Order of the Niger (MON)',
    ],
    sportingImpact:
      'Known for unyielding mental toughness in finals. As a coach, he led Nigeria to the 2015 FIFA U-17 World Cup title in Chile (developing Victor Osimhen) and guided Tanzania to AFCON 2019 after a 39-year drought.',
    whereAreTheyNow: 'Head Coach of Heartland FC; former Tanzania National Team Manager; FIFA & CAF Technical Study Group member.',
    sources: [
      'CAF African Player of the Year Archive (1994)',
      'IOC 1996 Atlanta Final Documentation',
      'FC Barcelona Historical Player Database',
    ],
  },
  {
    id: 'sunday-oliseh-sport',
    name: 'Sunday Oliseh',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Defensive Midfielder',
    era: '1990s–2000s',
    birthDate: 'September 14, 1974',
    photoUrl: '/images/sports/sunday-oliseh.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: '1. FC Köln (Germany)',
    olympicRole: 'Midfield Anchor & Tactical General',
    tagline: 'Olympic Gold Midfield Anchor, Bundesliga Champion & Tactical Strategist',
    biography:
      'Sunday Ogochukwu Oliseh was the cerebral tactical linchpin of Nigeria\'s midfield for over a decade. Possessing immaculate passing range, positional awareness, and a fearsome long-range shot, Oliseh anchored the engine room at Atlanta 1996, playing every minute of Nigeria\'s tournament run. At the 1998 FIFA World Cup in France, he scored one of football\'s most iconic World Cup goals—a 25-yard thunderbolt against Spain that secured a 3–2 upset. His club career took him to European giants including Ajax (winning the Dutch double), Juventus, and Borussia Dortmund (winning the German Bundesliga in 2002).',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Full-time midfield anchor in Nigeria\'s historic Olympic Gold run.' },
      { competition: 'Africa Cup of Nations', year: 1994, medal: 'Champion', description: 'Member of the AFCON championship squad in Tunisia.' },
      { competition: 'German Bundesliga', year: 2002, medal: 'Champion', description: 'Bundesliga champion with Borussia Dortmund.' },
      { competition: 'Dutch Eredivisie', year: 1998, medal: 'Champion', description: 'League and KNVB Cup double with AFC Ajax.' },
    ],
    internationalRecord: [
      '54 senior caps and 2 international goals for Nigeria',
      'Super Eagles Captain (2000–2002)',
      'Scored famous 25-yard winner vs Spain at France 1998 World Cup',
    ],
    nationalTeamRecord: '54 Caps; 1994 AFCON Winner, 1996 Olympic Gold, 2000 AFCON Finalist',
    awards: [
      'Member of the Order of the Niger (MON)',
      'FIFA Technical Study Group Expert (2022 World Cup in Qatar)',
    ],
    sportingImpact:
      'Elevated the standard of the deep-lying playmaker ("regista") in African football and published "Bold: The Sunday Oliseh Story", documenting the institutional realities and triumphs of Nigerian sports.',
    whereAreTheyNow: 'FIFA Technical Study Group Analyst; global television pundit; UEFA Pro-licensed football manager.',
    sources: [
      'FIFA World Cup Technical Reports 1994 & 1998',
      'IOC 1996 Atlanta Football Tournament Squad Lists',
      'Bundesliga Archive (Borussia Dortmund 2001–02)',
    ],
  },
  {
    id: 'taribo-west-sport',
    name: 'Taribo West',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Central Defender',
    era: '1990s–2000s',
    birthDate: 'March 26, 1974',
    photoUrl: '/images/sports/taribo-west.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'AJ Auxerre (France)',
    olympicRole: 'Rock-Solid Central Defender',
    tagline: 'Olympic Gold Defender, UEFA Cup Champion & Cult Football Icon',
    biography:
      'Taribo West is globally famous for both his immovable, fierce defensive tackling and his iconic bright green braided hair. Born in Port Harcourt, Rivers State, West won the French Ligue 1 and Coupe de France double with Auxerre in 1996 before anchoring Nigeria\'s defense throughout the Atlanta Olympic campaign. His combative physical duels against Brazil\'s Bebeto and Argentina\'s Hernán Crespo were central to Nigeria\'s Olympic triumph. He subsequently joined Inter Milan, winning the 1998 UEFA Cup alongside Brazilian legend Ronaldo, before later crossing the city divide to AC Milan.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Started every match in central defense during Nigeria\'s gold-winning campaign.' },
      { competition: 'UEFA Cup', year: 1998, medal: 'Champion', description: 'Won European silverware with Inter Milan in Paris.' },
      { competition: 'French Ligue 1', year: 1996, medal: 'Champion', description: 'Historic league title with AJ Auxerre.' },
    ],
    internationalRecord: [
      '42 senior appearances for Nigeria (1994–2005)',
      'Played in 1998 and 2002 FIFA World Cups',
      '1996 Olympic Gold medalist',
    ],
    nationalTeamRecord: '42 Caps; 1996 Olympic Gold; 2000 & 2002 AFCON Medalist',
    awards: [
      'Member of the Order of the Niger (MON)',
      'Ligue 1 Team of the Year (1995–96)',
    ],
    sportingImpact:
      'A fearless defender whose unyielding spirit defined Nigeria\'s defensive grit in the 1990s. Beyond football, he founded Shelter Prize to aid homeless children in Lagos.',
    whereAreTheyNow: 'Christian minister and founder of Shelter in the Storm Ministries in Lagos; youth development advocate.',
    sources: [
      'IOC Olympic Football Atlanta 1996 Match Records',
      'Inter Milan Official Archive (1997–1999)',
      'Ligue 1 Historical Data (Auxerre 1996)',
    ],
  },
  {
    id: 'victor-ikpeba-sport',
    name: 'Victor Ikpeba',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Forward ("The Prince of Monaco")',
    era: '1990s',
    birthDate: 'June 12, 1973',
    photoUrl: '/images/sports/victor-ikpeba.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'AS Monaco (France)',
    olympicRole: 'Supersub & 78th-Minute Scorer vs Brazil',
    tagline: '1997 African Footballer of the Year & Olympic Semifinal Catalyst',
    biography:
      'Victor Nosa Ikpeba, affectionately known across Europe as "The Prince of Monaco", was a lethal, elegant striker. Born in Benin City, Ikpeba first shone as a 16-year-old at the 1989 FIFA U-17 World Cup in Scotland. Under Arsène Wenger and Jean Tigana at AS Monaco, he became one of the French league\'s deadliest goalscorers. In the 1996 Olympic semifinal against Brazil, with Nigeria down 3–1, Ikpeba was introduced and struck a clinical low shot into the bottom corner in the 78th minute to reignite Nigeria\'s historic comeback. In 1997, he was crowned CAF African Footballer of the Year after firing Monaco to the Ligue 1 title.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Scored vital 78th-minute goal against Brazil to launch the historic semifinal comeback.' },
      { competition: 'African Footballer of the Year', year: 1997, medal: 'Honour', description: 'Voted Africa\'s top player by CAF.' },
      { competition: 'French Ligue 1', year: 1997, medal: 'Champion', description: 'French champion with AS Monaco, scoring 13 league goals.' },
      { competition: 'Africa Cup of Nations', year: 1994, medal: 'Champion', description: 'Winner of AFCON 1994 in Tunisia.' },
    ],
    internationalRecord: [
      '31 senior appearances and 7 goals for Nigeria',
      'Scored winner against Bulgaria at 1998 FIFA World Cup',
      '1996 Olympic Gold medalist',
    ],
    nationalTeamRecord: '31 Caps, 7 Goals; 1994 AFCON Winner, 1996 Olympic Gold',
    awards: [
      'CAF African Footballer of the Year (1997)',
      'ESM Team of the Year (1996–97)',
      'Member of the Order of the Niger (MON)',
    ],
    sportingImpact:
      'Proved that Nigerian forwards could thrive at the highest tactical levels of European domestic leagues with technical elegance and lethal finishing.',
    whereAreTheyNow: 'Resident analyst on SuperSport\'s "Monday Night Football"; member of the NFF Technical Committee.',
    sources: [
      'CAF African Footballer of the Year Registry (1997)',
      'IOC 1996 Atlanta Semifinal Match Report vs Brazil',
      'Ligue de Football Professionnel (LFP) Historical Archive',
    ],
  },
  {
    id: 'uche-okechukwu-sport',
    name: 'Uche Okechukwu',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Central Defender ("The Gentle Giant")',
    era: '1990s',
    birthDate: 'September 27, 1967',
    photoUrl: '/images/sports/uche-okechukwu.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'Fenerbahçe (Turkey)',
    olympicRole: 'Senior Over-Age Central Defender & Defensive Anchor',
    tagline: 'Olympic Gold Over-Age Anchor & Turkish Super Lig Legend',
    biography:
      'Uche Alozie Okechukwu, celebrated throughout his career as "The Gentle Giant" for his calm composure, immense strength, and lack of bookings, was selected as one of Nigeria\'s over-age leaders for Atlanta 1996. Born in Lagos, Okechukwu spent nearly a decade at Turkish giants Fenerbahçe, becoming a beloved club icon and winning two Turkish Süper Lig titles. In Atlanta, his calm defensive organization alongside Taribo West thwarted world-class forward lines from Mexico, Brazil, and Argentina.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Senior defensive anchor playing all knockout matches to Olympic Gold.' },
      { competition: 'Africa Cup of Nations', year: 1994, medal: 'Champion', description: 'Starting center-back in Nigeria\'s AFCON triumph in Tunisia.' },
      { competition: 'Turkish Süper Lig', year: '1996, 2001', medal: 'Champion', description: 'Won two league titles with Fenerbahçe SK.' },
    ],
    internationalRecord: [
      '47 senior appearances and 2 goals for Nigeria',
      'Represented Nigeria at 1994 and 1998 World Cups',
      'Captained Nigeria at the 1998 FIFA World Cup in France',
    ],
    nationalTeamRecord: '47 Caps; 1994 AFCON Winner, 1996 Olympic Gold, 1998 World Cup Captain',
    awards: [
      'Fenerbahçe All-Time Foreign Players Hall of Fame',
      'Member of the Order of the Niger (MON)',
    ],
    sportingImpact:
      'Set an exemplary standard for sportsmanship and defensive dignity, rarely committing fouls while nullifying elite world forwards.',
    whereAreTheyNow: 'Professional football mentor and real estate investor based in Abia State and Turkey.',
    sources: [
      'Turkish Football Federation (TFF) Player Records',
      'IOC Atlanta 1996 Official Team Rosters',
      'FIFA World Cup 1994 & 1998 Match Logs',
    ],
  },
  {
    id: 'joseph-dosu-sport',
    name: 'Joseph Dosu',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Goalkeeper',
    era: '1990s',
    birthDate: 'June 19, 1973',
    photoUrl: '/images/sports/joseph-dosu.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'Julius Berger FC (Nigeria)',
    olympicRole: 'Starting Goalkeeper in all 6 Matches',
    tagline: 'Home-Based Hero & Olympic Gold Winning Goalkeeper',
    biography:
      'Joseph Dosu was the only home-based player in Nigeria\'s starting lineup at Atlanta 1996. Playing for Julius Berger in Lagos, Dosu won the trust of coach Jo Bonfrere and produced vital point-blank saves throughout the tournament, especially in the breathless closing stages against Brazil and Argentina. Tragically, in 1997, just after signing for Reggiana in Italy, a devastating car crash in Lagos ended his playing career, but his courage and dedication have inspired generations of domestic Nigerian footballers.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Started all 6 matches in goal, conceding only to world-class finishes while making crucial saves.' },
      { competition: 'Nigerian FA Cup', year: 1996, medal: 'Champion', description: 'Won the domestic double with Julius Berger FC.' },
    ],
    internationalRecord: [
      'Starting goalkeeper at Atlanta 1996 Olympic Tournament (6 matches)',
      'Senior Nigeria international cap vs Kenya in 1998 World Cup qualifier',
    ],
    nationalTeamRecord: '1996 Olympic Gold Goalkeeper; Senior Cap 1997',
    awards: ['Member of the Order of the Niger (MON) conferred in 1996'],
    sportingImpact:
      'Proved that players competing in Nigeria\'s domestic league could compete toe-to-toe with the world\'s greatest footballing superpowers.',
    whereAreTheyNow: 'CEO of Dosu Joseph Football Academy in Lagos, discovering and mentoring young Nigerian prospects.',
    sources: [
      'IOC Atlanta 1996 Official Tournament Goalkeeper Statistics',
      'Nigeria Football Federation (NFF) Archives',
    ],
  },
  {
    id: 'mobi-oparaku-sport',
    name: 'Mobi Oparaku',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Right Back',
    era: '1990s',
    birthDate: 'December 1, 1976',
    photoUrl: '/images/sports/mobi-oparaku.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'R.S.C. Anderlecht (Belgium) / Iwuanyanwu Nationale',
    olympicRole: 'Starting Right-Back',
    tagline: 'Tenacious Olympic Gold Right-Back & U-17 World Champion',
    biography:
      'Mobi Oparaku was the relentless, tough-tackling right-back of Nigeria\'s Atlanta 1996 Dream Team. After winning the 1993 FIFA U-17 World Championship alongside Kanu and Babayaro, Oparaku marshaled the right side of defense in Atlanta, shutting down dangerous opposition wingers throughout the group and knockout stages.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Starting right-back in the Olympic Gold medal victory.' },
      { competition: 'FIFA U-17 World Cup', year: 1993, medal: 'Champion', description: 'World champion in Japan with the Golden Eaglets.' },
    ],
    internationalRecord: [
      'Represented Nigeria at 1996 Olympics and 1998 FIFA World Cup',
      '8 senior caps for the Super Eagles',
    ],
    nationalTeamRecord: '8 Caps; 1996 Olympic Gold; 1998 World Cup Squad',
    awards: ['Member of the Order of the Niger (MON)'],
    sportingImpact: 'Key part of the U-17-to-Olympic transition that demonstrated the strength of Nigeria\'s youth development pipeline.',
    whereAreTheyNow: 'Team Manager of Heartland FC (formerly Iwuanyanwu Nationale) in Owerri, Imo State.',
    sources: ['IOC 1996 Atlanta Football Tournament Squad Lists', 'FIFA U-17 1993 Technical Report'],
  },
  {
    id: 'wilson-oruma-sport',
    name: 'Wilson Oruma',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Central Midfielder',
    era: '1990s–2000s',
    birthDate: 'December 30, 1976',
    photoUrl: '/images/sports/wilson-oruma.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'RC Lens (France)',
    olympicRole: 'Impact Midfielder & Final Free-Kick Assist (90\')',
    tagline: '1993 U-17 Golden Boot Winner, Olympic Gold & French Champion',
    biography:
      'Wilson Oruma was the captain and top scorer of the Golden Eaglets that won the 1993 FIFA U-17 World Championship in Japan, winning the Golden Boot with 6 goals. In the Atlanta 1996 Olympic Final, Oruma came off the bench and swung in the curling 90th-minute free kick that Emmanuel Amuneke converted for the historic 3–2 winning goal. He went on to enjoy an illustrious career in France, winning Ligue 1 with Lens and Coupe de France with Sochaux and Guingamp.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Delivered the title-winning 90th-minute assist in the final vs Argentina.' },
      { competition: 'FIFA U-17 World Cup', year: 1993, medal: 'Champion', description: 'Captained Nigeria to the title; won the Golden Boot (6 goals).' },
      { competition: 'French Ligue 1', year: 1998, medal: 'Champion', description: 'League champion with RC Lens.' },
    ],
    internationalRecord: ['19 senior caps and 3 international goals for Nigeria', 'Scored against Paraguay at 1998 FIFA World Cup'],
    nationalTeamRecord: '19 Caps, 3 Goals; 1996 Olympic Gold; 2002 & 2006 AFCON Bronze',
    awards: ['FIFA U-17 Golden Boot (1993)', 'Member of the Order of the Niger (MON)'],
    sportingImpact: 'Exemplified precision passing and technical dead-ball mastery on the biggest international stages.',
    whereAreTheyNow: 'Christian minister and football development mentor based in Delta State and Lagos.',
    sources: ['FIFA 1993 U-17 World Championship Technical Report', 'IOC 1996 Final Match Log'],
  },

  // --- RASHIDI YEKINI FEATURE ---
  {
    id: 'rashidi-yekini-sport',
    name: 'Rashidi Yekini',
    sport: 'Football',
    category: 'football',
    primaryEventOrPosition: 'Striker ("Goalsfather")',
    era: '1980s–1990s',
    birthDate: 'October 23, 1963',
    deathDate: 'May 4, 2012',
    photoUrl: '/images/sports/rashidi-yekini.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Nigeria\'s All-Time Top Goalscorer (37 Goals) & 1993 African Footballer of the Year',
    biography:
      'Rashidi Yekini is universally regarded as Nigeria\'s most iconic goal poacher. Born in Kaduna of Kwara heritage, Yekini\'s devastating combination of blistering pace, aerial prowess, and clinical finishing made him the ultimate striking predator. He fired Nigeria to victory at the 1994 Africa Cup of Nations in Tunisia, finishing as top scorer and Best Player of the Tournament. At the 1994 FIFA World Cup in the United States, on June 21 against Bulgaria in Dallas, Yekini scored Nigeria\'s first-ever World Cup goal—rushing into the net, clutching the mesh with both hands in tears of joy and screaming to the heavens, an image that remains one of the most famous and emotionally resonant celebrations in World Cup history. At Vitória de Setúbal in Portugal, he scored 91 goals in 114 matches, winning the Bola de Prata as Portugal\'s top scorer.',
    achievements: [
      { competition: 'FIFA World Cup', year: 1994, medal: 'Record', description: 'Scored Nigeria\'s first-ever World Cup goal vs Bulgaria; celebrated with iconic goal-net celebration.' },
      { competition: 'African Footballer of the Year', year: 1993, medal: 'Honour', description: 'First Nigerian in history to be named African Footballer of the Year by CAF.' },
      { competition: 'Africa Cup of Nations', year: 1994, medal: 'Champion', description: 'Top scorer (5 goals) and Best Player as Nigeria won its second AFCON title in Tunis.' },
      { competition: 'Portuguese Primeira Liga', year: 1994, medal: 'Record', description: 'Top scorer in Portugal with 21 goals for Vitória de Setúbal (Bola de Prata).' },
    ],
    internationalRecord: [
      '37 goals in 58 international appearances — All-time record for Nigeria',
      'Goal ratio of 0.64 goals per game for the Super Eagles',
      'Scored across 4 Africa Cup of Nations tournaments (1988, 1990, 1992, 1994)',
    ],
    nationalTeamRecord: '58 Caps, 37 Goals (Unbeaten National Record); 1994 AFCON Winner & Golden Boot',
    awards: [
      'CAF African Footballer of the Year (1993)',
      'AFCON Golden Boot (1992, 1994)',
      'Member of the Order of the Niger (MON)',
    ],
    sportingImpact:
      'His 37-goal international record has stood unchallenged for over three decades. His passionate Dallas goal celebration came to symbolize the arrival of African football on the world stage.',
    whereAreTheyNow: 'Passed away in Ibadan in May 2012 at age 48. Posthumously honored nationwide; his memory is preserved across Nigerian stadiums and football academies.',
    sources: [
      'FIFA World Cup 1994 Official Match Archives (Nigeria vs Bulgaria)',
      'CAF African Player of the Year Registry (1993)',
      'Portuguese Football Federation (FPF) Primeira Liga Archive',
    ],
  },

  // --- MODERN FOOTBALL GENERATION ---
  {
    id: 'victor-osimhen-sport',
    name: 'Victor Osimhen',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Striker',
    era: '2015–Present',
    birthDate: 'December 29, 1998',
    photoUrl: '/images/sports/victor-osimhen.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: false,
    tagline: '2023 African Footballer of the Year, Serie A Capocannoniere & Scudetto Champion',
    biography:
      'Victor James Osimhen MFR is Nigeria\'s premier modern football icon. Born in Olusosun, Lagos, on December 29, 1998 (two years after the Atlanta Olympics), Osimhen overcame humble beginnings selling bottled water in Lagos traffic to become one of the most feared strikers on earth. He first exploded globally at the 2015 FIFA U-17 World Cup in Chile, scoring a record-breaking 10 goals to win the Golden Boot and Golden Ball. In the 2022–23 season with SSC Napoli, Osimhen scored 26 league goals—becoming the first African player in history to win the Capocannoniere (Serie A Golden Boot) and firing Napoli to their first Italian Scudetto in 33 years. In December 2023, he was crowned CAF African Footballer of the Year, ending Nigeria\'s 24-year drought since Kanu in 1999.',
    achievements: [
      { competition: 'African Footballer of the Year', year: 2023, medal: 'Honour', description: 'Crowned CAF African Player of the Year in Marrakech.' },
      { competition: 'Italian Serie A', year: 2023, medal: 'Champion', description: 'Scudetto champion with Napoli; won Capocannoniere (26 goals).' },
      { competition: 'FIFA U-17 World Cup', year: 2015, medal: 'Champion', description: 'All-time tournament record of 10 goals in Chile; won Golden Boot and Silver Ball.' },
      { competition: 'Ballon d\'Or', year: 2023, medal: 'Record', description: 'Finished 8th in the global Ballon d\'Or vote, the highest finish by an African since 1995.' },
      { competition: 'Africa Cup of Nations', year: 2023, medal: 'Silver', description: 'Silver medalist with the Super Eagles in Ivory Coast.' },
    ],
    internationalRecord: [
      '21 goals in 35 appearances for the Super Eagles',
      'Top scorer in 2023 AFCON Qualifiers (10 goals)',
      '2015 FIFA U-17 World Cup Champion (10 goals record)',
    ],
    nationalTeamRecord: '35 Caps, 21 Goals (3rd highest in Nigerian history); AFCON 2023 Finalist',
    awards: [
      'CAF African Footballer of the Year (2023)',
      'Serie A Footballer of the Year (AIC) 2023',
      'Serie A Best Striker (2022–23)',
      'Member of the Federal Republic (MFR)',
    ],
    sportingImpact:
      'Proved that modern Nigerian talent can lead top-five European leagues in scoring while inspiring millions of youth with his journey from the streets of Olusosun to global stardom.',
    whereAreTheyNow: 'Active striker for Galatasaray / Napoli and the Nigeria Super Eagles.',
    sources: [
      'Lega Serie A Official Statistics & Awards (2022–23)',
      'CAF African Player of the Year Official Records (2023)',
      'FIFA U-17 World Cup Chile 2015 Technical Report',
    ],
  },
  {
    id: 'ahmed-musa-sport',
    name: 'Ahmed Musa',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Winger / Forward',
    era: '2010–Present',
    birthDate: 'October 14, 1992',
    photoUrl: '/images/sports/ahmed-musa.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Most Capped Super Eagle (110 Caps) & Nigeria\'s Top World Cup Scorer (4 Goals)',
    biography:
      'Ahmed Musa MON is the most capped player in the history of the Nigerian national team. Born in Jos, Plateau State, Musa won the 2013 Africa Cup of Nations under Stephen Keshi. He holds the record for the most goals scored by a Nigerian player at the FIFA World Cup (4 goals), courtesy of his historic braces against Argentina in 2014 in Porto Alegre and Iceland in 2018 in Volgograd. In 2021, he surpassed Joseph Yobo and Vincent Enyeama to reach a century of caps.',
    achievements: [
      { competition: 'Africa Cup of Nations', year: 2013, medal: 'Champion', description: 'AFCON winner with Nigeria in South Africa.' },
      { competition: 'FIFA World Cup Braces', year: '2014, 2018', medal: 'Record', description: 'Only Nigerian to score twice in two separate World Cup matches (vs Argentina 2014, vs Iceland 2018).' },
      { competition: 'Russian Premier League', year: '2013, 2014, 2016', medal: 'Champion', description: 'Three league titles with CSKA Moscow.' },
      { competition: 'Saudi Pro League', year: 2019, medal: 'Champion', description: 'League champion with Al-Nassr.' },
    ],
    internationalRecord: [
      '110 caps for the Super Eagles of Nigeria (All-time national record)',
      '16 international goals',
      '4 goals at FIFA World Cups (Nigerian record)',
    ],
    nationalTeamRecord: 'Most capped player in Nigerian history (110 Caps); Super Eagles Captain',
    awards: ['Member of the Order of the Niger (MON)'],
    sportingImpact:
      'Renowned for his philanthropic investments in Nigeria, building sports and fitness centres in Kano and Kaduna to nurture northern sports talent.',
    whereAreTheyNow: 'Active professional footballer (Kano Pillars); philanthropist and investor.',
    sources: ['FIFA World Cup Official Player Records', 'NFF National Caps Registry'],
  },
  {
    id: 'william-troost-ekong-sport',
    name: 'William Troost-Ekong',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Central Defender / Super Eagles Captain',
    era: '2015–Present',
    birthDate: 'September 1, 1993',
    photoUrl: '/images/sports/william-troost-ekong.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'AFCON 2023 Player of the Tournament & Olympic Bronze Medalist',
    biography:
      'William Paul Troost-Ekong MON is the heroic captain of the modern Super Eagles. Born in the Netherlands to a Nigerian father and Dutch mother, he chose to represent Nigeria at senior level. In 2016, he won the Olympic Bronze medal in Rio de Janeiro. At the 2023 Africa Cup of Nations in Ivory Coast, Troost-Ekong delivered one of the greatest individual defensive and leadership performances in tournament history, scoring three goals from center-back (including one in the final) and winning the official Player of the Tournament award.',
    achievements: [
      { competition: 'Africa Cup of Nations', year: 2023, medal: 'Silver', event: "Player of the Tournament", description: 'Named Best Player of AFCON 2023; scored 3 goals including in the final.' },
      { competition: 'Olympic Games', year: 2016, medal: 'Bronze', event: "Men's Football", description: 'Won bronze in Rio de Janeiro as starting center-back.' },
      { competition: 'Greek Super League', year: 2024, medal: 'Champion', description: 'Won the Greek league title with PAOK.' },
    ],
    internationalRecord: ['73 appearances and 7 goals for Nigeria', 'Captained Nigeria to AFCON 2023 final'],
    nationalTeamRecord: '73 Caps; Super Eagles Captain; 2016 Olympic Bronze; 2019 AFCON Bronze; 2023 AFCON Silver',
    awards: ['AFCON Best Player / Player of the Tournament (2023)', 'Member of the Order of the Niger (MON)'],
    sportingImpact: 'Exemplifies diaspora commitment and passionate national leadership on and off the pitch.',
    whereAreTheyNow: 'Active player for Al-Kholood (Saudi Pro League) and Captain of the Nigeria Super Eagles.',
    sources: ['CAF AFCON 2023 Official Tournament Technical Report', 'IOC Rio 2016 Football Records'],
  },
  {
    id: 'ademola-lookman-sport',
    name: 'Ademola Lookman',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Forward / Winger',
    era: '2022–Present',
    birthDate: 'October 20, 1997',
    photoUrl: '/images/sports/ademola-lookman.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Europa League Final Hat-Trick Hero & AFCON 2023 Standout',
    biography:
      'Ademola Olajide Lookman is one of the brightest attacking talents of the modern generation. Born in Wandsworth, London, Lookman switched international allegiance to Nigeria in 2022. At AFCON 2023, his three knockout-stage goals propelled Nigeria to the final. On May 22, 2024 in Dublin, Lookman etched his name into European football folklore by scoring a sensational hat-trick for Atalanta in the UEFA Europa League final against Bayer Leverkusen—becoming the first player in modern Europa League history to score three goals in a final.',
    achievements: [
      { competition: 'UEFA Europa League', year: 2024, medal: 'Champion', description: 'Scored historic hat-trick in the 3–0 final win over Bayer Leverkusen; named Player of the Match.' },
      { competition: 'Africa Cup of Nations', year: 2023, medal: 'Silver', description: 'Named in the AFCON 2023 Team of the Tournament; scored 3 goals.' },
      { competition: 'Ballon d\'Or', year: 2024, medal: 'Record', description: 'Nominated for the 2024 Ballon d\'Or award.' },
    ],
    internationalRecord: ['23 appearances and 6 goals for Nigeria', 'Scored both goals in 2–0 win vs Cameroon at AFCON 2023'],
    nationalTeamRecord: '23 Caps, 6 Goals; AFCON 2023 Team of the Tournament',
    awards: ['UEFA Europa League Final Player of the Match (2024)', 'Atalanta Player of the Season (2022–23, 2023–24)'],
    sportingImpact: 'His Dublin hat-trick shattered a 49-year European final record and brought immense pride to Nigerian football.',
    whereAreTheyNow: 'Active forward for Atalanta BC in Serie A and the Nigeria Super Eagles.',
    sources: ['UEFA Europa League 2024 Official Final Match Report', 'CAF AFCON 2023 Technical Report'],
  },

  // --- WOMEN'S FOOTBALL LEGENDS ---
  {
    id: 'asisat-oshoala-sport',
    name: 'Asisat Oshoala',
    sport: 'Football',
    category: 'women-sport',
    primaryEventOrPosition: 'Striker ("Agba Baller")',
    era: '2014–Present',
    birthDate: 'October 9, 1994',
    photoUrl: '/images/sports/asisat-oshoala.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Record 6-Time African Women\'s Footballer of the Year & 2-Time Champions League Winner',
    biography:
      'Asisat Lamina Oshoala MON is arguably the most accomplished African female footballer in history. Born in Ikorodu, Lagos, Oshoala dominated the 2014 FIFA U-20 Women\'s World Cup in Canada, winning both Golden Boot (7 goals) and Golden Ball. With the Super Falcons, she has lifted three Women\'s Africa Cup of Nations titles (2014, 2016, 2018). At FC Barcelona Femení, she won two UEFA Women\'s Champions Leagues and the Pichichi trophy as the top scorer in the Spanish Primera División (2021–22). In 2023, she won her sixth CAF African Women\'s Player of the Year award, surpassing Perpetua Nkwocha\'s record.',
    achievements: [
      { competition: 'African Women\'s Footballer of the Year', year: '2014, 2016, 2017, 2019, 2022, 2023', medal: 'Honour', description: 'Record 6-time winner of CAF\'s highest honor.' },
      { competition: 'UEFA Women\'s Champions League', year: '2021, 2023', medal: 'Champion', description: 'Two-time European champion with FC Barcelona.' },
      { competition: 'Women\'s Africa Cup of Nations', year: '2014, 2016, 2018', medal: 'Champion', description: 'Three-time African champion with the Super Falcons.' },
      { competition: 'Spanish Primera División (Pichichi)', year: 2022, medal: 'Record', description: 'Top scorer in Spain with 20 goals in 19 matches.' },
      { competition: 'FIFA Women\'s World Cup', year: '2015, 2019, 2023', medal: 'Record', description: 'Scored in three separate World Cups, including the famous winner vs Australia in 2023.' },
    ],
    internationalRecord: ['37 international goals in over 60 caps for Nigeria', 'Scored across three FIFA Women\'s World Cups'],
    nationalTeamRecord: 'Over 60 Caps, 37 Goals; 3x WAFCON Champion',
    awards: [
      'CAF African Women\'s Footballer of the Year (6 times)',
      'BBC Women\'s Footballer of the Year (2015)',
      'Member of the Order of the Niger (MON)',
      'Ballon d\'Or Féminin nominee (2022, 2023)',
    ],
    sportingImpact:
      'Through her Asisat Oshoala Academy, she provides football training and academic scholarships to young girls in Lagos, breaking socio-cultural barriers against female sports participation.',
    whereAreTheyNow: 'Active striker for Bay FC in the NWSL (USA) and the Nigeria Super Falcons; founder of the Asisat Oshoala Foundation.',
    sources: ['CAF Women\'s Football Archives', 'UEFA Women\'s Champions League Archive', 'FIFA Women\'s World Cup Records'],
  },
  {
    id: 'perpetua-nkwocha-sport',
    name: 'Perpetua Nkwocha',
    sport: 'Football',
    category: 'women-sport',
    primaryEventOrPosition: 'Attacking Midfielder / Forward',
    era: '1999–2015',
    birthDate: 'January 3, 1976',
    photoUrl: '/images/sports/perpetua-nkwocha.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: '5-Time WAFCON Champion, 4-Time African Women\'s Footballer of the Year',
    biography:
      'Perpetua Ijeoma Nkwocha is an immortal giant of African women\'s football. Born in Amankwu Umuhu, Imo State, Nkwocha won an astounding five Women\'s Africa Cup of Nations titles with Nigeria (2002, 2004, 2006, 2010, 2014). In the 2004 final against Cameroon, she scored all four goals in a 5–0 victory. At Swedish club Sunnanå SK, she scored over 140 goals across a decade. She represented Nigeria at four FIFA Women\'s World Cups and three Olympic Games.',
    achievements: [
      { competition: 'Women\'s Africa Cup of Nations', year: '2002, 2004, 2006, 2010, 2014', medal: 'Champion', description: 'Five-time African continental champion.' },
      { competition: 'African Women\'s Footballer of the Year', year: '2004, 2005, 2010, 2011', medal: 'Honour', description: 'Four-time CAF African Player of the Year.' },
      { competition: 'WAFCON Golden Boot', year: '2004, 2006, 2010', medal: 'Record', description: 'Top scorer at three separate African championships.' },
    ],
    internationalRecord: ['99 appearances and 80 goals for Nigeria (National Women\'s Record)', 'Represented Nigeria in 4 World Cups and 3 Olympics'],
    nationalTeamRecord: '99 Caps, 80 Goals (All-time top scorer in Nigerian women\'s history)',
    awards: ['CAF African Women\'s Player of the Year (4 times)', 'Member of the Order of the Niger (MON)'],
    sportingImpact: 'Set the gold standard for clinical finishing and technical mastery in African women\'s sports across two decades.',
    whereAreTheyNow: 'Head coach of Clemensnäs IF in Sweden; former Super Eagles Women assistant coach.',
    sources: ['CAF Women\'s Championship Historical Reports', 'FIFA Women\'s Olympic Tournaments 2000, 2004, 2008'],
  },

  // --- ATHLETICS LEGENDS ---
  {
    id: 'tobi-amusan-sport',
    name: 'Tobi Amusan',
    sport: 'Athletics',
    category: 'athletics',
    primaryEventOrPosition: '100m Hurdles',
    era: '2018–Present',
    birthDate: 'April 23, 1997',
    photoUrl: '/images/sports/tobi-amusan.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'World Record Holder (12.12s) & 2022 World Athletics Champion',
    biography:
      'Oluwatobiloba "Tobi" Ayomide Amusan OON is Nigeria\'s first-ever World Athletics Champion and World Record Holder. Born in Ijebu Ode, Ogun State, Amusan established herself as a continental force by winning consecutive African and Commonwealth titles. On July 24, 2022, in the semifinals of the World Athletics Championships in Eugene, Oregon, Amusan shocked the world by clocking 12.12 seconds in the 100-meter hurdles—shattering the world record of 12.20s set by Kendra Harrison. Later that evening in the final, she ran a wind-aided 12.06s to claim Nigeria\'s first World Championships Gold. She also won three consecutive Diamond League trophies (2021, 2022, 2023).',
    achievements: [
      { competition: 'World Athletics Championships', year: 2022, medal: 'Gold', event: '100m Hurdles', description: 'World Champion in Oregon; broke world record with 12.12s in semifinal.' },
      { competition: 'World Record', year: 2022, medal: 'Record', event: '100m Hurdles (12.12s)', description: 'First Nigerian athlete to hold a global outdoor track world record.' },
      { competition: 'Diamond League Trophy', year: '2021, 2022, 2023', medal: 'Champion', description: 'Three-time consecutive Diamond League trophy winner.' },
      { competition: 'Commonwealth Games', year: '2018, 2022', medal: 'Gold', event: '100m Hurdles', description: 'Back-to-back Commonwealth Games Gold medalist.' },
      { competition: 'African Championships', year: '2018, 2022, 2024', medal: 'Gold', description: 'Triple African continental champion.' },
    ],
    internationalRecord: [
      '100m Hurdles World Record: 12.12 seconds (Eugene, Oregon 2022)',
      '2022 World Athletics Champion',
      'Three-time Diamond League Champion',
    ],
    nationalTeamRecord: 'Nigerian, African, and World Record Holder in 100m Hurdles',
    awards: [
      'Officer of the Order of the Niger (OON) conferred in 2022',
      'World Athletics Female Athlete of the Year finalist (2022)',
      'African Female Athlete of the Year',
    ],
    sportingImpact:
      'Amusan proved that a Nigerian athlete trained in local school sports can reach the pinnacle of world athletics and hold an outright global world record.',
    whereAreTheyNow: 'Active elite world athlete preparing for global championships.',
    sources: ['World Athletics Official World Records Registry (100mH 12.12s)', 'Oregon 2022 World Championships Results'],
  },
  {
    id: 'ese-brume-sport',
    name: 'Ese Brume',
    sport: 'Athletics',
    category: 'athletics',
    primaryEventOrPosition: "Women's Long Jump",
    era: '2014–Present',
    birthDate: 'January 20, 1996',
    photoUrl: '/images/sports/ese-brume.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Olympic Bronze Medalist, World Silver Medalist & African Record Holder (7.17m)',
    biography:
      'Ese Brume MON is Africa\'s reigning long-jump queen. Born in Ughelli, Delta State, Brume burst onto the international scene by winning Commonwealth Gold in Glasgow at just 18 years old in 2014. In May 2021 in Chula Vista, California, Brume leaped 7.17 meters, breaking Chioma Ajunwa\'s 25-year-old African record. She backed this up on the grandest stage by winning Olympic Bronze at Tokyo 2020 (held in 2021) with a jump of 6.97m, followed by World Championships Silver in Eugene 2022 (7.02m) and World Bronze in Doha 2019.',
    achievements: [
      { competition: 'Olympic Games', year: 2020, medal: 'Bronze', event: "Women's Long Jump", description: 'Won bronze in Tokyo with a 6.97m mark, Nigeria\'s first athletics medal since 2008.' },
      { competition: 'World Athletics Championships', year: 2022, medal: 'Silver', event: "Women's Long Jump", description: 'Silver medalist in Oregon with a 7.02m leap.' },
      { competition: 'African Record', year: 2021, medal: 'Record', event: "Women's Long Jump (7.17m)", description: 'Broke the 25-year-old African continental record in California.' },
      { competition: 'Commonwealth Games', year: '2014, 2022', medal: 'Gold', event: "Women's Long Jump", description: 'Two-time Commonwealth Gold medalist.' },
      { competition: 'African Championships', year: '2014, 2016, 2018, 2024', medal: 'Gold', description: 'Four-time African champion.' },
    ],
    internationalRecord: [
      'African Record Holder: 7.17m (2021)',
      'Medalist at Olympics (Bronze 2020) and World Championships (Silver 2022, Bronze 2019)',
    ],
    nationalTeamRecord: 'African Record Holder; Olympic & World Championship Medalist',
    awards: ['Member of the Order of the Niger (MON) conferred in 2022'],
    sportingImpact:
      'Carried the torch of Nigerian horizontal jumps with unmatched consistency, delivering podium finishes in every major championship for a decade.',
    whereAreTheyNow: 'Active world elite long jumper preparing for Olympic and global titles.',
    sources: ['World Athletics African Continental Records', 'IOC Tokyo 2020 Official Long Jump Results'],
  },
  {
    id: 'falilat-ogunkoya-sport',
    name: 'Falilat Ogunkoya',
    sport: 'Athletics',
    category: 'athletics',
    primaryEventOrPosition: "400m / 4x400m Relay",
    era: '1980s–1990s',
    birthDate: 'December 5, 1968',
    photoUrl: '/images/sports/falilat-ogunkoya.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    olympicRole: 'Double Olympic Medalist (Bronze 400m, Silver 4x400m Relay)',
    tagline: 'Double Olympic Medalist at Atlanta 1996 & African 400m Record Holder',
    biography:
      'Falilat Ogunkoya MON is one of the most decorated track athletes in African history. Born in Ode Lemo, Ogun State, Ogunkoya achieved the extraordinary double at Atlanta 1996: on July 29, she took Olympic Bronze in the women\'s 400m with a breathtaking African record of 49.10 seconds (behind Marie-José Pérec and Cathy Freeman). Five days later, she anchored Nigeria\'s 4x400m relay quartet (Bisi Afolabi, Fatima Yusuf, Charity Opara, and Ogunkoya) to Olympic Silver in an African record time of 3:21.04. In 1998, she was ranked the world number one 400m runner, winning the IAAF World Cup and Grand Prix Final.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Bronze', event: "Women's 400m", description: 'Set an African record of 49.10s to win bronze in Atlanta.' },
      { competition: 'Olympic Games', year: 1996, medal: 'Silver', event: "Women's 4x400m Relay", description: 'Anchored Nigerian quartet to silver medal in 3:21.04.' },
      { competition: 'IAAF Grand Prix Final', year: 1998, medal: 'Gold', event: "Women's 400m", description: 'Ranked #1 in the world in 1998; won the Grand Prix in Moscow.' },
      { competition: 'All-Africa Games', year: '1987, 1995', medal: 'Gold', description: 'Multiple-time continental champion.' },
    ],
    internationalRecord: [
      'African 400m Record: 49.10s (Atlanta 1996) — Stood for over 25 years',
      'Double Olympic Medalist in Atlanta 1996',
    ],
    nationalTeamRecord: 'Double Olympic Medalist; African Record Holder; World #1 (1998)',
    awards: ['Member of the Order of the Niger (MON)', 'World Athletics 400m Ranking #1 (1998)'],
    sportingImpact:
      'Proved that Nigerian sprinters could conquer the grueling 400m at world and Olympic level, inspiring a generation of female quarter-milers.',
    whereAreTheyNow: 'President of the Athletics Federation of Nigeria (AFN) South-West Zone; youth sports developer and mentor.',
    sources: ['IOC Atlanta 1996 Athletics Official Results', 'World Athletics All-Time 400m Top Lists'],
  },
  {
    id: 'mary-onyali-sport',
    name: 'Mary Onyali-Omagbemi',
    sport: 'Athletics',
    category: 'athletics',
    primaryEventOrPosition: '100m / 200m / 4x100m Relay',
    era: '1980s–2000s',
    birthDate: 'February 3, 1968',
    photoUrl: '/images/sports/mary-onyali.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Two-Time Olympic Bronze Medalist & Five-Time Olympian',
    biography:
      'Chief Mary Onyali-Omagbemi MFR is the grand dame of Nigerian sprinting. Born in Gongola State (now Adamawa), Onyali competed at five consecutive Olympic Games from 1988 to 2004—the first Nigerian athlete to achieve this feat. She won Olympic Bronze in the 4x100m relay at Barcelona 1992 and individual Olympic Bronze in the 200m at Atlanta 1996. Over her career she won seven individual All-Africa Games gold medals, dominating African sprinting for nearly two decades.',
    achievements: [
      { competition: 'Olympic Games', year: 1996, medal: 'Bronze', event: "Women's 200m", description: 'Won individual bronze in Atlanta behind Marie-José Pérec and Merlene Ottey.' },
      { competition: 'Olympic Games', year: 1992, medal: 'Bronze', event: "Women's 4x100m Relay", description: 'Won bronze in Barcelona with Beatrice Utondu, Christy Opara-Thompson, and Faith Idehen.' },
      { competition: 'Commonwealth Games', year: 1994, medal: 'Gold', event: "Women's 100m", description: 'Commonwealth Champion in Victoria, Canada.' },
    ],
    internationalRecord: ['5-time Olympian (1988, 1992, 1996, 2000, 2004)', 'Two Olympic Bronze medals (1992, 1996)'],
    nationalTeamRecord: 'First Nigerian 5-Time Olympian; 7x All-Africa Games Champion',
    awards: ['Member of the Federal Republic (MFR)', 'African Athletics Hall of Fame'],
    sportingImpact:
      'Anchored Nigeria\'s golden sprinting era and now mentors elite athletes through the Clean Athletics Foundation and government sports advisory roles.',
    whereAreTheyNow: 'Special Adviser to the Minister of Sports Development; CEO of Yali-Yali sports apparel.',
    sources: ['IOC Historical Athlete Database', 'World Athletics 100m & 200m Historical Records'],
  },

  // --- BOXING LEGENDS ---
  {
    id: 'dick-tiger-sport',
    name: 'Dick Tiger (Richard Ihetu)',
    sport: 'Boxing',
    category: 'boxing',
    primaryEventOrPosition: 'Middleweight & Light Heavyweight',
    era: '1950s–1960s',
    birthDate: 'August 14, 1929',
    deathDate: 'December 14, 1971',
    photoUrl: '/images/sports/dick-tiger.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Two-Division Undisputed World Champion & International Boxing Hall of Famer',
    biography:
      'Dick Tiger (born Richard Ihetu CBE) is revered as one of the greatest pound-for-pound boxers of the 20th century. Born in Amaigbo, Imo State, Tiger learned to box in Aba before traveling to Liverpool and New York. On October 23, 1962, at Candlestick Park in San Francisco, Tiger defeated Gene Fullmer to become the Undisputed World Middleweight Champion. On August 10, 1963, at Liberty Stadium in Ibadan—the first world championship boxing match held in West Africa—Tiger defended his title before a home crowd of 40,000 citizens. In 1966, he moved up in weight to dethrone José Torres and win the World Light Heavyweight Championship. He was inducted into the International Boxing Hall of Fame in 1991.',
    achievements: [
      { competition: 'World Boxing Championship', year: 1962, medal: 'Champion', event: 'Undisputed Middleweight', description: 'Defeated Gene Fullmer in San Francisco to win world title.' },
      { competition: 'World Boxing Championship', year: 1963, medal: 'Champion', event: 'Liberty Stadium Defense', description: 'Defended world middleweight title at Liberty Stadium in Ibadan, Nigeria.' },
      { competition: 'World Boxing Championship', year: 1966, medal: 'Champion', event: 'Light Heavyweight', description: 'Defeated José Torres at Madison Square Garden to become a two-division world champion.' },
    ],
    internationalRecord: [
      'Professional record: 60 wins (27 KOs), 19 losses, 3 draws',
      'The Ring Fighter of the Year (1962, 1965)',
      'Inducted into International Boxing Hall of Fame (1991)',
    ],
    nationalTeamRecord: 'Undisputed World Champion; Commander of the Order of the British Empire (CBE)',
    awards: [
      'The Ring Fighter of the Year (1962, 1965)',
      'International Boxing Hall of Fame (IBHOF) Charter Member',
      'Commander of the Order of the British Empire (CBE) 1963',
    ],
    sportingImpact:
      'Tiger brought world boxing supremacy to post-independence Nigeria, putting the new nation on the global sports map through his sheer grit, integrity, and humility.',
    whereAreTheyNow: 'Passed away in December 1971 in Aba. Immortalized in the International Boxing Hall of Fame in Canastota, New York.',
    sources: [
      'International Boxing Hall of Fame (IBHOF) Official Biography',
      'The Ring Magazine Archives (1962, 1963, 1965, 1966)',
      'National Archives of Nigeria (Ibadan Liberty Stadium 1963 bout)',
    ],
  },
  {
    id: 'hogan-bassey-sport',
    name: 'Hogan "Kid" Bassey',
    sport: 'Boxing',
    category: 'boxing',
    primaryEventOrPosition: 'Featherweight',
    era: '1940s–1950s',
    birthDate: 'June 3, 1932',
    deathDate: 'January 26, 1998',
    photoUrl: '/images/sports/hogan-bassey.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Nigeria\'s First-Ever World Boxing Champion (1957)',
    biography:
      'Hogan "Kid" Bassey MBE (born Okon Asuquo Bassey) was a trailblazer who gave Nigeria its very first world sporting championship. Born in Creek Town, Cross River State, Bassey became Empire Featherweight Champion in 1955. On June 24, 1957, at the Palais des Sports in Paris, Bassey defeated French-Algerian Cherif Hamia by TKO in the 10th round to win the vacant World Featherweight Championship. In 1958, Queen Elizabeth II awarded him the MBE. Following his retirement, he served as Nigeria\'s National Boxing Coach, mentoring dozens of champions.',
    achievements: [
      { competition: 'World Featherweight Championship', year: 1957, medal: 'Champion', description: 'Defeated Cherif Hamia in Paris to become Nigeria\'s first world champion in any sport.' },
      { competition: 'British Empire Featherweight Title', year: 1955, medal: 'Champion', description: 'Won the British Empire title in Belfast.' },
    ],
    internationalRecord: ['Professional record: 59 wins (21 KOs), 13 losses, 2 draws', 'World Featherweight Champion (1957–1959)'],
    nationalTeamRecord: 'Nigeria\'s First World Champion; National Boxing Coach (1960–1980)',
    awards: ['Member of the Order of the British Empire (MBE) 1958', 'Officer of the Order of the Niger (OON)'],
    sportingImpact:
      'Showed generations of colonial and pre-independence Nigerians that an indigenous boy from Calabar could defeat the world\'s finest athletes in Paris, London, and New York.',
    whereAreTheyNow: 'Passed away in January 1998 in Lagos. Memorialized with monuments in Calabar and the National Stadium Lagos.',
    sources: ['World Boxing Association (WBA) Historical Championship Logs', 'The Ring Magazine (1957 World Featherweight Title)'],
  },
  {
    id: 'samuel-peter-sport',
    name: 'Samuel Peter',
    sport: 'Boxing',
    category: 'boxing',
    primaryEventOrPosition: 'Heavyweight ("The Nigerian Nightmare")',
    era: '2000s–2010s',
    birthDate: 'September 6, 1980',
    photoUrl: '/images/sports/samuel-peter.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'WBC World Heavyweight Champion',
    biography:
      'Samuel Okon Peter, known worldwide as "The Nigerian Nightmare" for his devastating punch power, achieved the pinnacle of the heavyweight division. Born in Akwa Ibom State, Peter represented Nigeria at the 2000 Sydney Olympics. Turning professional, he racked up knockouts across the United States. On March 8, 2008, in Cancún, Mexico, Peter knocked out Oleg Maskaev in the sixth round to win the WBC World Heavyweight Championship, bringing the heavyweight crown to Nigeria.',
    achievements: [
      { competition: 'WBC World Heavyweight Championship', year: 2008, medal: 'Champion', description: 'Knocked out Oleg Maskaev in round 6 to win the green WBC belt.' },
      { competition: 'NABF Heavyweight Championship', year: 2005, medal: 'Champion', description: 'Won multiple North American titles.' },
    ],
    internationalRecord: ['Professional record: 38 wins (31 KOs), 9 losses', 'WBC World Heavyweight Champion (2008)'],
    nationalTeamRecord: '2000 Sydney Olympian for Nigeria; World Heavyweight Champion',
    awards: ['WBC World Heavyweight Champion belt'],
    sportingImpact: 'Proved Nigerian strength at the summit of world heavyweight boxing.',
    whereAreTheyNow: 'Retired from active boxing; resides in Las Vegas and Nigeria, conducting youth boxing workshops.',
    sources: ['WBC Official Heavyweight Championship Records (2008)', 'BoxRec Verified Fighter Records'],
  },

  // --- BASKETBALL LEGENDS ---
  {
    id: 'hakeem-olajuwon-sport',
    name: 'Hakeem Olajuwon',
    sport: 'Basketball',
    category: 'basketball',
    primaryEventOrPosition: 'Center ("The Dream")',
    era: '1980s–2000s',
    birthDate: 'January 21, 1963',
    photoUrl: '/images/sports/hakeem-olajuwon.jpg',
    nationality: 'Nigeria / United States 🇳🇬🇺🇸',
    tagline: 'NBA Hall of Famer, 2-Time NBA Champion & Finals MVP (Born in Lagos)',
    biography:
      'Hakeem Abdul Olajuwon, widely regarded as one of the greatest basketball players in history, was born and raised in Lagos, Nigeria. He did not touch a basketball until age 15 at Muslim Teachers College in Lagos, having previously played football as a goalkeeper and handball—sports that gave him his legendary footwork and agility. Moving to the University of Houston, he led "Phi Slama Jama" before being drafted #1 overall by the Houston Rockets in the famous 1984 NBA Draft (ahead of Michael Jordan). Olajuwon led the Rockets to back-to-back NBA Championships in 1994 and 1995, winning regular season MVP, Finals MVP, and Defensive Player of the Year in 1994. Note on sporting nationality: Olajuwon grew up in Nigeria and represented Nigeria in youth tournaments, later becoming a naturalized U.S. citizen in 1993 and winning Olympic Gold with USA Team at Atlanta 1996.',
    achievements: [
      { competition: 'NBA Championship', year: '1994, 1995', medal: 'Champion', description: 'Back-to-back NBA champion with the Houston Rockets; named Finals MVP both years.' },
      { competition: 'NBA Most Valuable Player', year: 1994, medal: 'Honour', description: 'First foreign-born player to win the NBA MVP award.' },
      { competition: 'NBA Defensive Player of the Year', year: '1993, 1994', medal: 'Honour', description: 'Two-time NBA Defensive Player of the Year.' },
      { competition: 'Naismith Memorial Basketball Hall of Fame', year: 2008, medal: 'Record', description: 'Enshrined in the Basketball Hall of Fame.' },
    ],
    internationalRecord: [
      'NBA All-Time Leader in blocked shots (3,830 blocks)',
      '12-time NBA All-Star; 6-time All-NBA First Team',
      'Selected to the NBA 50th & 75th Anniversary All-Time Teams',
    ],
    nationalTeamRecord: 'Born in Lagos; Nigerian youth sports product; 1996 Olympic Gold medalist with USA Basketball.',
    awards: ['NBA MVP (1994)', 'NBA Finals MVP (1994, 1995)', 'NBA 75th Anniversary Team'],
    sportingImpact:
      'His signature "Dream Shake" move remains the gold standard of basketball footwork, teaching generations of modern NBA superstars (Kobe Bryant, LeBron James, Giannis Antetokounmpo) his proprietary moves.',
    whereAreTheyNow: 'Member of the NBA Hall of Fame; private skills coach to elite NBA players; divides time between Houston, London, and Lagos.',
    sources: ['NBA Official Historical Statistics and Honors', 'Naismith Memorial Basketball Hall of Fame Registry (2008)'],
  },
  {
    id: 'nneka-ogwumike-sport',
    name: 'Nneka Ogwumike',
    sport: 'Basketball',
    category: 'basketball',
    primaryEventOrPosition: 'Forward',
    era: '2012–Present',
    birthDate: 'July 2, 1990',
    photoUrl: '/images/sports/nneka-ogwumike.jpg',
    nationality: 'Nigeria / United States 🇳🇬🇺🇸',
    tagline: 'WNBA MVP, WNBA Champion & WNBA Players Association President',
    biography:
      'Nnemkadi "Nneka" Ogwumike is an elite basketball forward born to Nigerian parents from Imo State. The #1 overall pick in the 2012 WNBA Draft, Ogwumike won the 2016 WNBA Championship with the Los Angeles Sparks and was named WNBA Most Valuable Player. As President of the WNBPA, she led historic negotiations for female player compensation and parental leave. Deeply connected to her Nigerian heritage, Ogwumike sought to represent Nigeria\'s D\'Tigress at the Tokyo Olympics, advocating passionately for African basketball development.',
    achievements: [
      { competition: 'WNBA Championship', year: 2016, medal: 'Champion', description: 'Champion with Los Angeles Sparks; hit the title-winning shot in Game 5.' },
      { competition: 'WNBA Most Valuable Player', year: 2016, medal: 'Honour', description: 'Voted league MVP after a historic 66.5% shooting season.' },
      { competition: 'WNBA 25th Anniversary Team', year: 2021, medal: 'Record', description: 'Named one of the top 25 players in WNBA history.' },
    ],
    internationalRecord: ['8-time WNBA All-Star; 5-time All-WNBA Selection', 'President of the WNBPA (2016–Present)'],
    nationalTeamRecord: 'Proud Nigerian heritage; champion of African basketball empowerment.',
    awards: ['WNBA MVP (2016)', 'WNBA Kim Perrot Sportsmanship Award (3 times)'],
    sportingImpact: 'Pioneered labor leadership and historic pay equity for female athletes worldwide while celebrating Nigerian cultural roots.',
    whereAreTheyNow: 'Active forward for Seattle Storm in the WNBA and President of the WNBPA.',
    sources: ['WNBA Official Player Records & Awards', 'WNBPA Official Documentation'],
  },


// --- ATLANTA '96 LEGENDS (ADDITIONAL SQUAD MEMBERS) ---
  {
    id: 'tijani-babangida-sport',
    name: 'Tijani Babangida',
    sport: 'Football',
    category: 'atlanta96',
    primaryEventOrPosition: 'Right Winger ("TJ")',
    era: '1994–2004',
    birthDate: 'September 25, 1973',
    photoUrl: '/images/sports/tijani-babangida.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'Roda JC / AFC Ajax (Netherlands)',
    olympicRole: 'Gold-medal winning explosive winger; scored vs Japan and assisted in knockout rounds',
    tagline: 'Atlanta \'96 Olympic Gold Medalist & Blistering Super Eagles Winger',
    biography:
      'Tijani Babangida MON, famed throughout world football for his lightning speed and direct wing play, was a crucial weapon in Nigeria\'s 1996 Olympic gold-medal triumph in Atlanta. Born in Kaduna, Babangida scored the vital second goal against Japan in the group stage and repeatedly terrorized opposition fullbacks throughout the tournament. He spent six successful seasons with Dutch powerhouses AFC Ajax, winning the Eredivisie title and KNVB Cup, and represented Nigeria at the 1998 FIFA World Cup in France, scoring a memorable consolation goal against Denmark.',
    achievements: [
      { competition: 'Olympic Games (Atlanta 1996)', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Scored in 2–0 win vs Japan and featured in the famous semifinal and final victories.' },
      { competition: 'Dutch Eredivisie', year: 1998, medal: 'Champion', description: 'Won Dutch league championship with AFC Ajax.' },
      { competition: 'KNVB Cup', year: '1998, 1999', medal: 'Champion', description: 'Two-time Dutch Cup winner with Ajax.' },
      { competition: 'Africa Cup of Nations', year: 2000, medal: 'Silver', description: 'AFCON 2000 runner-up; scored twice in semifinal vs South Africa.' },
    ],
    internationalRecord: ['36 appearances and 5 goals for Nigeria', 'Scored at 1998 FIFA World Cup vs Denmark in Round of 16'],
    nationalTeamRecord: '36 Caps, 5 Goals; Atlanta \'96 Gold Medallist',
    awards: ['Member of the Order of the Niger (MON)'],
    sportingImpact: 'His blistering speed on the right flank defined the classic era of 1990s Nigerian attacking football.',
    whereAreTheyNow: 'President of the National Association of Nigeria Professional Footballers (NANPF) and football administrator.',
    sources: ['IOC Atlanta 1996 Official Football Technical Report', 'AFC Ajax Historical Player Registry'],
  },
  {
    id: 'garba-lawal-sport',
    name: 'Garba Lawal',
    sport: 'Football',
    category: 'atlanta96',
    primaryEventOrPosition: 'Utility Midfielder / Left Midfield',
    era: '1995–2006',
    birthDate: 'May 22, 1974',
    photoUrl: '/images/sports/garba-lawal.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: true,
    clubAtTime: 'Espérance de Tunis (Tunisia)',
    olympicRole: 'Starting utility workhorse in midfield; played key minutes across all tournament matches',
    tagline: 'Atlanta \'96 Olympic Gold Medalist & World Cup Match Winner vs Spain',
    biography:
      'Garba Lawal MON is widely regarded as one of the most dedicated, tactically disciplined, and versatile footballers ever to don the green and white jersey of Nigeria. In Atlanta \'96, Lawal\'s tireless engine, defensive positioning, and tactical awareness provided the essential defensive stability that allowed Okocha, Babangida, and Kanu to flourish. In the 1998 FIFA World Cup in France, Lawal famously scored the equalizing goal against Spain from a seemingly impossible angle that sparked Nigeria\'s historic 3–2 victory over Andoni Zubizarreta and the Spanish.',
    achievements: [
      { competition: 'Olympic Games (Atlanta 1996)', year: 1996, medal: 'Gold', event: "Men's Football", description: 'Pivotal starting midfielder in Nigeria\'s Olympic gold medal triumph.' },
      { competition: 'FIFA World Cup', year: 1998, medal: 'Record', description: 'Scored famous winning angle goal in 3–2 victory over Spain in Nantes.' },
      { competition: 'Africa Cup of Nations', year: '2000, 2002, 2004, 2006', medal: 'Bronze', description: 'Won 1 silver and 3 bronze medals across four consecutive AFCON tournaments.' },
      { competition: 'Bulgarian Cup', year: 2003, medal: 'Champion', description: 'Won Bulgarian Cup with Levski Sofia.' },
    ],
    internationalRecord: ['57 appearances and 6 goals for Nigeria', 'Competed in two FIFA World Cups (1998, 2002) and four AFCONs'],
    nationalTeamRecord: '57 Caps, 6 Goals; Atlanta \'96 Gold Medallist',
    awards: ['Member of the Order of the Niger (MON)'],
    sportingImpact: 'The gold standard of tactical discipline and selfless commitment in Nigerian sports history.',
    whereAreTheyNow: 'Football coach, scout, and executive board member of Kaduna United.',
    sources: ['IOC Atlanta 1996 Football Official Statistics', 'FIFA World Cup 1998 Historical Archive'],
  },

  // --- MODERN NIGERIAN FOOTBALL ICONS (INCLUDING MIKEL OBI) ---
  {
    id: 'mikel-obi-sport',
    name: 'John Obi Mikel (Mikel Obi)',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Defensive Midfielder / Super Eagles Captain',
    era: '2005–2019',
    birthDate: 'April 22, 1987',
    photoUrl: '/images/sports/mikel-obi.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: false,
    tagline: 'AFCON 2013 Champion, 2016 Olympic Bronze Medalist & UEFA Champions League Winner',
    biography:
      'John Michael Nchekwube Obinna, universally revered as John Obi Mikel, is one of the most decorated and respected captains in African sports history. Born in Jos, Plateau State, Mikel announced his generational talent at the 2005 FIFA World Youth Championship in the Netherlands, capturing the Silver Ball behind Lionel Messi. Joining Chelsea FC in 2006, he spent 11 trophy-laden seasons in London, winning the UEFA Champions League (2012), UEFA Europa League (2013), two Premier League titles, three FA Cups, and a League Cup in 372 appearances. On the international stage, Mikel was the indomitable heartbeat of Stephen Keshi\'s 2013 Africa Cup of Nations winning squad in South Africa. In 2016, Mikel displayed unparalleled patriotism by personally funding Nigeria\'s Olympic football squad in Rio when logistical funding failed, captaining the Dream Team VI to an Olympic Bronze medal. He captained Nigeria at the 2014 and 2018 FIFA World Cups, retiring with 91 caps as a national sporting hero.',
    achievements: [
      { competition: 'Africa Cup of Nations', year: 2013, medal: 'Champion', description: 'Midfield maestro of Nigeria\'s 3rd AFCON title in South Africa; named to CAF Team of the Tournament.' },
      { competition: 'Olympic Games (Rio 2016)', year: 2016, medal: 'Bronze', event: "Men's Football", description: 'Captained Nigeria to Olympic Bronze; personally financed squad logistics.' },
      { competition: 'UEFA Champions League', year: 2012, medal: 'Champion', description: 'Played full 120 minutes in midfield as Chelsea defeated Bayern Munich in Munich.' },
      { competition: 'UEFA Europa League', year: 2013, medal: 'Champion', description: 'European champion with Chelsea in Amsterdam.' },
      { competition: 'English Premier League', year: '2009–10, 2014–15', medal: 'Champion', description: 'Two-time Premier League champion with Chelsea.' },
      { competition: 'English FA Cup', year: '2007, 2009, 2012', medal: 'Champion', description: 'Three-time FA Cup winner at Wembley Stadium.' },
      { competition: 'FIFA World Youth Championship', year: 2005, medal: 'Silver', description: 'Silver Ball winner as 2nd best player in tournament behind Lionel Messi.' },
    ],
    internationalRecord: [
      '91 caps and 6 goals for the Super Eagles of Nigeria',
      'AFCON 2013 Champion; Bronze in 2006, 2010, 2019',
      '2016 Rio Olympic Bronze Medalist (Team Captain)',
      'Played in 2014 and 2018 FIFA World Cups',
    ],
    nationalTeamRecord: '91 Caps, 6 Goals; Long-standing Super Eagles Captain & 2016 Olympic Team Captain',
    awards: [
      'CAF Most Promising African Player (2005)',
      'FIFA World Youth Championship Silver Ball (2005)',
      'Chelsea Young Player of the Year (2007, 2008)',
      'African Footballer of the Year Runner-Up (2013)',
      'Officer of the Order of the Niger (OON)',
    ],
    sportingImpact:
      'Celebrated for tactical mastery, calmness in possession, and supreme selflessness—famously stepping up to financially secure Nigeria\'s Olympic campaign in 2016 to deliver Olympic Bronze.',
    whereAreTheyNow: 'Host of the globally acclaimed "The Obi One Podcast"; grassroots sports philanthropist and UEFA ambassador.',
    sources: [
      'CAF AFCON 2013 Official Technical Report',
      'IOC Rio 2016 Olympic Games Football Archive',
      'Chelsea FC Official Historical Registry (372 Appearances)',
      'FIFA U-20 World Championship 2005 Official Records',
    ],
  },
  {
    id: 'victor-moses-sport',
    name: 'Victor Moses',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Winger / Wing-Back',
    era: '2012–2018',
    birthDate: 'December 12, 1990',
    photoUrl: '/images/sports/victor-moses.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: false,
    tagline: 'AFCON 2013 Champion & Premier League Winner with Chelsea',
    biography:
      'Victor Moses is an electric winger who overcame severe childhood tragedy in Kaduna to reach the summit of world football. Representing Nigeria at senior level, Moses was the breakout star of Nigeria\'s AFCON 2013 victory in South Africa, winning the Fair Play Award and scoring crucial goals against Ethiopia. Under Antonio Conte at Chelsea, Moses reinvented himself as a world-class right wing-back, playing 34 Premier League matches to win the 2016–17 title. He scored for Nigeria at the 2018 FIFA World Cup in Russia against Argentina.',
    achievements: [
      { competition: 'Africa Cup of Nations', year: 2013, medal: 'Champion', description: 'Key protagonist in South Africa; named in AFCON Team of the Tournament.' },
      { competition: 'English Premier League', year: 2017, medal: 'Champion', description: 'Transformed into champion right wing-back for Chelsea FC.' },
      { competition: 'UEFA Europa League', year: '2013, 2019', medal: 'Champion', description: 'Two-time Europa League winner with Chelsea.' },
      { competition: 'English FA Cup', year: 2018, medal: 'Champion', description: 'FA Cup winner at Wembley Stadium.' },
    ],
    internationalRecord: ['38 appearances and 12 goals for Nigeria', 'Scored against Argentina at the 2018 FIFA World Cup'],
    nationalTeamRecord: '38 Caps, 12 Goals; 2013 AFCON Champion; 2014 & 2018 World Cup',
    awards: ['AFCON 2013 Samsung Fair Play Player of the Tournament', 'Chelsea Players\' Player of the Year nominee'],
    sportingImpact: 'A symbol of resilience and supreme tactical versatility on the world stage.',
    whereAreTheyNow: 'Active professional footballer (Luton Town FC).',
    sources: ['CAF AFCON 2013 Tournament Report', 'Premier League Official Player Archive'],
  },
  {
    id: 'alex-iwobi-sport',
    name: 'Alex Iwobi',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Central Midfielder / Playmaker',
    era: '2015–Present',
    birthDate: 'May 3, 1996',
    photoUrl: '/images/sports/alex-iwobi.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: false,
    tagline: 'World Cup Qualification Hero & Premier League Playmaking Workhorse',
    biography:
      'Alexander Chuka Iwobi is the nephew of Nigerian football royalty Jay-Jay Okocha. Born in Lagos and raised in London, Iwobi chose to represent Nigeria over England at senior level. In October 2017, Iwobi scored the famous solitary goal in Uyo against Zambia to seal Nigeria\'s qualification for the 2018 FIFA World Cup. He scored for Arsenal in the 2019 UEFA Europa League final and has accumulated over 270 Premier League appearances for Arsenal, Everton, and Fulham, while serving as the creative engine of the Super Eagles in their run to the AFCON 2023 final.',
    achievements: [
      { competition: 'Africa Cup of Nations', year: 2023, medal: 'Silver', description: 'Started every match as Nigeria reached the AFCON final in Abidjan.' },
      { competition: 'English FA Cup', year: 2017, medal: 'Champion', description: 'FA Cup champion with Arsenal.' },
      { competition: 'FIFA World Cup Qualifier', year: 2017, medal: 'Record', description: 'Scored decisive winner against Zambia to send Nigeria to Russia 2018.' },
    ],
    internationalRecord: ['80+ caps and 10 goals for Nigeria', 'Represented Nigeria at 2018 FIFA World Cup and three AFCON tournaments'],
    nationalTeamRecord: '80+ Caps, 10 Goals; AFCON 2019 Bronze, AFCON 2023 Silver',
    awards: ['CAF Youth Player of the Year (2016)', 'Fulham Players\' Key Contributor'],
    sportingImpact: 'Carries on the proud legacy of creative Nigerian midfield football into the modern era.',
    whereAreTheyNow: 'Active Premier League midfield starter for Fulham FC and Nigeria Super Eagles.',
    sources: ['FIFA World Cup Archives', 'Premier League Official Player Stats'],
  },
  {
    id: 'wilfred-ndidi-sport',
    name: 'Wilfred Ndidi',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Defensive Midfielder',
    era: '2015–Present',
    birthDate: 'December 16, 1996',
    photoUrl: '/images/sports/wilfred-ndidi.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: false,
    tagline: 'FA Cup Winner & Europe\'s Premier Tackling and Interception Master',
    biography:
      'Onyinye Wilfred Ndidi is widely recognized as one of the most effective ball-winning defensive midfielders in contemporary world football. Born in Lagos and developed at Nath Boys Academy, Ndidi moved from Genk to Leicester City in 2017. For three consecutive Premier League seasons, Ndidi ranked #1 or #2 across all of European football in total successful tackles and interceptions. He lifted the English FA Cup in 2021 with Leicester City and has earned over 58 caps for the Super Eagles.',
    achievements: [
      { competition: 'English FA Cup', year: 2021, medal: 'Champion', description: 'Won FA Cup with Leicester City against Chelsea at Wembley.' },
      { competition: 'FA Community Shield', year: 2021, medal: 'Champion', description: 'Defeated Manchester City at Wembley.' },
      { competition: 'Premier League Stat Leader', year: '2018, 2019, 2020', medal: 'Record', description: 'Topped Premier League tackle charts with 143+ tackles per season.' },
    ],
    internationalRecord: ['58 caps for Nigeria', 'Represented Nigeria at 2018 FIFA World Cup and AFCON 2019 (Bronze)'],
    nationalTeamRecord: '58 Caps; Key defensive anchor for the Super Eagles',
    awards: ['Leicester City Young Player of the Year (2017, 2018)'],
    sportingImpact: 'Redefined defensive midfield metrics in England while pursuing a degree in business management at De Montfort University.',
    whereAreTheyNow: 'Active midfielder for Leicester City in the Premier League and the Nigeria Super Eagles.',
    sources: ['Premier League Official Stats Archive', 'CAF Super Eagles Registry'],
  },
  {
    id: 'samuel-chukwueze-sport',
    name: 'Samuel Chukwueze',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Right Winger',
    era: '2015–Present',
    birthDate: 'May 22, 1999',
    photoUrl: '/images/sports/samuel-chukwueze.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: false,
    tagline: 'UEFA Europa League Winner & AC Milan Winger',
    biography:
      'Samuel Chimerenka Chukwueze MON is an elusive, rapid right-winger developed at Diamond Football Academy in Umuahia. Chukwueze first dazzled on the international stage at the 2015 FIFA U-17 World Cup in Chile, winning the Bronze Boot. Moving to Villarreal CF in Spain, he won the 2021 UEFA Europa League title against Manchester United and scored iconic goals at the Santiago Bernabéu and Allianz Arena. In 2023, he completed a high-profile move to Italian giants AC Milan.',
    achievements: [
      { competition: 'UEFA Europa League', year: 2021, medal: 'Champion', description: 'Defeated Manchester United in Gdansk with Villarreal CF.' },
      { competition: 'FIFA U-17 World Cup', year: 2015, medal: 'Champion', description: 'World champion in Chile; Bronze Boot winner (3 goals, 3 assists).' },
      { competition: 'Africa Cup of Nations', year: 2023, medal: 'Silver', description: 'AFCON finalist with Nigeria in Ivory Coast.' },
    ],
    internationalRecord: ['38 caps and 5 goals for Nigeria', 'Scored vs South Africa in AFCON 2019 quarter-final'],
    nationalTeamRecord: '38 Caps, 5 Goals; AFCON 2019 Bronze, AFCON 2023 Silver',
    awards: ['LaLiga African MVP (2022–23)', 'Member of the Order of the Niger (MON)'],
    sportingImpact: 'A master of 1v1 dribbling and explosive cut-inside finishes at elite European level.',
    whereAreTheyNow: 'Active winger for AC Milan in Serie A and the Nigeria Super Eagles.',
    sources: ['UEFA Europa League Archives', 'La Liga Official Player Stats'],
  },
  {
    id: 'kelechi-iheanacho-sport',
    name: 'Kelechi Iheanacho',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Forward ("Senior Man Kelz")',
    era: '2013–Present',
    birthDate: 'October 3, 1996',
    photoUrl: '/images/sports/kelechi-iheanacho.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: false,
    tagline: 'FIFA U-17 Golden Ball Winner & FA Cup Champion',
    biography:
      'Kelechi Promise Iheanacho is a clinical forward born in Imo State. At the 2013 FIFA U-17 World Cup in the UAE, Iheanacho produced one of the most dominant youth performances ever seen, scoring 6 goals and providing 7 assists to win the tournament Golden Ball and Silver Boot as Nigeria won the title. He developed at Manchester City, where he recorded the best minutes-per-goal ratio in Premier League history for players with 10+ goals. Moving to Leicester City, he became the highest-scoring African player in FA Cup history and won the 2021 FA Cup.',
    achievements: [
      { competition: 'FIFA U-17 World Cup', year: 2013, medal: 'Champion', description: 'Golden Ball winner as Best Player of the tournament in UAE (6 goals, 7 assists).' },
      { competition: 'English FA Cup', year: 2021, medal: 'Champion', description: 'Scored 4 goals in Leicester City\'s FA Cup winning campaign.' },
      { competition: 'English League Cup', year: 2016, medal: 'Champion', description: 'Won with Manchester City.' },
      { competition: 'FA Cup All-Time Scoring', year: 2023, medal: 'Record', description: 'Most FA Cup goals by an African player (18 goals).' },
    ],
    internationalRecord: ['55 caps and 15 goals for Nigeria', 'Scored winning penalty in AFCON 2023 semifinal shootout vs South Africa'],
    nationalTeamRecord: '55 Caps, 15 Goals; AFCON 2019 Bronze, AFCON 2023 Silver',
    awards: ['FIFA U-17 World Cup Golden Ball (2013)', 'Premier League Player of the Month (March 2021)', 'CAF Most Promising Talent (2013, 2016)'],
    sportingImpact: 'Beloved nationwide for his clutch finishing and vibrant cultural personality.',
    whereAreTheyNow: 'Active striker for Sevilla FC in La Liga and the Nigeria Super Eagles.',
    sources: ['FIFA U-17 World Cup 2013 Technical Report', 'The FA Cup Official Records'],
  },
  {
    id: 'taiwo-awoniyi-sport',
    name: 'Taiwo Awoniyi',
    sport: 'Football',
    category: 'modern',
    primaryEventOrPosition: 'Center Forward',
    era: '2013–Present',
    birthDate: 'August 12, 1997',
    photoUrl: '/images/sports/taiwo-awoniyi.jpg',
    nationality: 'Nigeria 🇳🇬',
    isAtlanta96: false,
    tagline: 'FIFA U-17 World Champion & Premier League Record Breaker',
    biography:
      'Taiwo Micheal Awoniyi is a powerhouse center forward born in Ilorin, Kwara State. He announced himself at the 2013 FIFA U-17 World Cup in the UAE, scoring 4 goals to help Nigeria capture the trophy. After productive stints in the German Bundesliga with Union Berlin (where he scored 20 goals in a single season), Awoniyi joined Nottingham Forest in the English Premier League, where he became the first Forest player in 28 years to score in seven consecutive Premier League matches.',
    achievements: [
      { competition: 'FIFA U-17 World Cup', year: 2013, medal: 'Champion', description: 'World champion in UAE; scored 4 tournament goals.' },
      { competition: 'English Premier League Record', year: 2023, medal: 'Record', description: 'Scored in 7 consecutive Premier League appearances for Nottingham Forest.' },
      { competition: 'German Bundesliga', year: 2022, medal: 'Record', description: 'Scored 15 Bundesliga goals for Union Berlin to qualify them for Europe.' },
    ],
    internationalRecord: ['8 caps and 2 goals for Nigeria', 'Scored vs Sudan at AFCON 2021'],
    nationalTeamRecord: '8 Caps, 2 Goals; Super Eagles Striker',
    awards: ['Nottingham Forest Player of the Month'],
    sportingImpact: 'A powerful target man embodying humility, determination, and community development in Kwara State.',
    whereAreTheyNow: 'Active Premier League striker for Nottingham Forest and Nigeria Super Eagles.',
    sources: ['Premier League Official Records', 'FIFA U-17 World Cup Archive'],
  },

  // --- ADDITIONAL WOMEN'S FOOTBALL PIONEERS ---
  {
    id: 'mercy-akide-sport',
    name: 'Mercy Akide-Udoh',
    sport: 'Football',
    category: 'women-sport',
    primaryEventOrPosition: 'Striker / Forward',
    era: '1990–2004',
    birthDate: 'August 26, 1975',
    photoUrl: '/images/sports/mercy-akide.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Inaugural African Women\'s Footballer of the Year & Super Falcons Legend',
    biography:
      'Mercy Akide-Udoh is the trailblazing pioneer of African women\'s football. Born in Port Harcourt, Rivers State, Akide made history in 2001 by becoming the first-ever recipient of the CAF African Women\'s Footballer of the Year award. She represented Nigeria in three FIFA Women\'s World Cups (1995, 1999, 2003) and two Olympic Games (Sydney 2000, Athens 2004). At the 1999 World Cup in the United States, Akide was named to the FIFA All-Star Team as Nigeria reached the quarterfinals, scoring in famous victories over North Korea and Denmark.',
    achievements: [
      { competition: 'African Women\'s Footballer of the Year', year: 2001, medal: 'Honour', description: 'Inaugural winner of CAF\'s Women\'s Footballer of the Year award.' },
      { competition: 'Women\'s Africa Cup of Nations', year: '1998, 2000, 2002', medal: 'Champion', description: 'Three-time African champion with the Super Falcons; top scorer in 1998 and 2000.' },
      { competition: 'FIFA Women\'s World Cup Quarterfinal', year: 1999, medal: 'Record', description: 'Named to FIFA World Cup All-Star Team.' },
    ],
    internationalRecord: ['Over 30 international goals for Nigeria', 'Played in three World Cups and two Olympic Games'],
    nationalTeamRecord: 'Pioneering Super Falcons Striker; 3x WAFCON Champion',
    awards: ['First CAF African Women\'s Footballer of the Year (2001)', 'FIFA All-Star Selection (1999, 2004)'],
    sportingImpact: 'Paved the path for generations of African women footballers to play professionally in Europe and the United States.',
    whereAreTheyNow: 'Elite youth football coach and FIFA technical ambassador based in Virginia, USA.',
    sources: ['FIFA Women\'s World Cup 1999 Official Technical Report', 'CAF Historical Registry'],
  },
  {
    id: 'florence-omagbemi-sport',
    name: 'Florence Omagbemi',
    sport: 'Football',
    category: 'women-sport',
    primaryEventOrPosition: 'Central Midfielder / Legendary Captain',
    era: '1991–2004',
    birthDate: 'February 2, 1975',
    photoUrl: '/images/sports/florence-omagbemi.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Historic Super Falcons Captain & WAFCON Winner as Player and Coach',
    biography:
      'Florence Omagbemi is one of the most authoritative and iconic captains in the history of African sport. Born in Warri, Delta State, Omagbemi captained the Super Falcons for over a decade, leading them to four consecutive Women\'s Africa Cup of Nations championships (1998, 2000, 2002, 2004). She captained Nigeria at four FIFA Women\'s World Cups (1991, 1995, 1999, 2003) and the 2000 Sydney Olympics. In 2016, she made history by coaching the Super Falcons to the WAFCON title in Cameroon—becoming the first woman ever to win the championship as both player and coach.',
    achievements: [
      { competition: 'Women\'s Africa Cup of Nations (Player)', year: '1998, 2000, 2002, 2004', medal: 'Champion', description: 'Captained Super Falcons to four consecutive African titles.' },
      { competition: 'Women\'s Africa Cup of Nations (Coach)', year: 2016, medal: 'Champion', description: 'First woman in African football history to win WAFCON as both player and coach.' },
      { competition: 'FIFA Women\'s World Cup', year: '1991, 1995, 1999, 2003', medal: 'Record', description: 'Captained Nigeria across four consecutive World Cups.' },
    ],
    internationalRecord: ['Captained Nigeria in over 80 matches across 14 years', 'Four World Cups and Sydney 2000 Olympics'],
    nationalTeamRecord: 'Iconic Super Falcons Captain; 4x WAFCON Champion as Player, 1x as Coach',
    awards: ['CAF Women\'s Coach of the Year Nominee (2016)'],
    sportingImpact: 'A towering matriarch of African sports leadership who proved female tactical mastery at national team level.',
    whereAreTheyNow: 'FIFA and CAF technical development instructor and international football consultant.',
    sources: ['FIFA Women\'s Football Leadership Archive', 'CAF Technical Study Group 2016'],
  },
  {
    id: 'onome-ebi-sport',
    name: 'Onome Ebi',
    sport: 'Football',
    category: 'women-sport',
    primaryEventOrPosition: 'Central Defender',
    era: '2003–Present',
    birthDate: 'May 8, 1983',
    photoUrl: '/images/sports/onome-ebi.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Record 6 FIFA Women\'s World Cup Tournaments & 4x WAFCON Champion',
    biography:
      'Onome Ebi is a living legend of world football endurance. Born in Lagos, Ebi made history at the 2023 FIFA Women\'s World Cup in Australia and New Zealand by becoming the first African footballer (male or female) to compete in six FIFA World Cups (2003, 2007, 2011, 2015, 2019, 2023). A bedrock of defensive steel for over two decades, she has won four Women\'s Africa Cup of Nations titles with the Super Falcons (2010, 2014, 2016, 2018).',
    achievements: [
      { competition: 'FIFA Women\'s World Cup Record', year: '2003, 2007, 2011, 2015, 2019, 2023', medal: 'Record', description: 'First African footballer in history to play in six FIFA World Cup tournaments.' },
      { competition: 'Women\'s Africa Cup of Nations', year: '2010, 2014, 2016, 2018', medal: 'Champion', description: 'Four-time African champion with the Super Falcons.' },
      { competition: 'Chinese Women\'s League', year: 2018, medal: 'Champion', description: 'Won Chinese League title with Henan Jianye.' },
    ],
    internationalRecord: ['Over 100 caps for the Super Eagles / Super Falcons', 'Six FIFA World Cup appearances spanning 20 years'],
    nationalTeamRecord: 'Over 100 Caps; 4x WAFCON Champion; 6x World Cup Player',
    awards: ['NFF Player of the Year', 'CAF Legend Award'],
    sportingImpact: 'Her 20-year international longevity shattered all African athletic endurance records.',
    whereAreTheyNow: 'Active veteran player (Naija Ratels) and youth football mentor.',
    sources: ['FIFA Women\'s World Cup Official Records', 'CAF Super Falcons Archives'],
  },
  {
    id: 'desire-oparanozie-sport',
    name: 'Desire Oparanozie',
    sport: 'Football',
    category: 'women-sport',
    primaryEventOrPosition: 'Striker / Forward',
    era: '2010–2023',
    birthDate: 'December 17, 1993',
    photoUrl: '/images/sports/desire-oparanozie.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: '4x WAFCON Champion & Two-Time Tournament Final Match-Winner',
    biography:
      'Ugochi Desire Oparanozie is one of the most clutch and physically dominant strikers in Nigerian football history. Born in Owerri, Imo State, Oparanozie was the ultimate big-game player, scoring the only and decisive goal in the 2014 WAFCON final against Cameroon in Windhoek, and repeating the heroics by scoring the 84th-minute winner against Cameroon before 40,000 hostile fans in Yaoundé in the 2016 final. She won four WAFCON titles (2010, 2014, 2016, 2018), captained the Super Falcons at the 2019 World Cup, and spent six prolific seasons in France with Guingamp.',
    achievements: [
      { competition: 'Women\'s Africa Cup of Nations', year: '2010, 2014, 2016, 2018', medal: 'Champion', description: 'Four-time African champion; Golden Boot winner in 2014.' },
      { competition: 'WAFCON Final Match-Winner', year: '2014, 2016', medal: 'Record', description: 'Only player in history to score the solitary winning goal in two separate WAFCON finals.' },
      { competition: 'FIFA Women\'s World Cup', year: '2011, 2015, 2019, 2023', medal: 'Record', description: 'Competed across four FIFA World Cups; captained squad in 2019.' },
    ],
    internationalRecord: ['35 international goals for Nigeria', 'Competed in four FIFA Women\'s World Cups'],
    nationalTeamRecord: 'Over 60 Caps, 35 Goals; 4x WAFCON Champion',
    awards: ['WAFCON Golden Boot (2014)', 'Guingamp Player of the Season'],
    sportingImpact: 'Fearless advocate for gender equality and equal allowances for female footballers in Nigeria.',
    whereAreTheyNow: 'Retired from active football following the 2023 World Cup; women\'s sports advocate and commentator.',
    sources: ['CAF Women\'s Africa Cup of Nations Archives', 'FIFA Women\'s World Cup Records'],
  },

  // --- ADDITIONAL ATHLETICS HEROES ---
  {
    id: 'blessing-okagbare-sport',
    name: 'Blessing Okagbare',
    sport: 'Athletics',
    category: 'athletics',
    primaryEventOrPosition: 'Long Jump & 100m / 200m Sprints',
    era: '2007–2021',
    birthDate: 'October 9, 1988',
    photoUrl: '/images/sports/blessing-okagbare.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Olympic Silver Medalist & Commonwealth Games Double Sprint Champion',
    biography:
      'Blessing Okagbare is one of the most naturally gifted multi-event track and field athletes in African history. Born in Sapele, Delta State, Okagbare won the Olympic silver medal in the long jump at the 2008 Beijing Olympics at just 19 years old (leaping 6.91m). At the 2013 World Athletics Championships in Moscow, she became the first African athlete to medal in both a sprint and a jump at the same World Championships (silver in long jump with 6.99m, bronze in 200m with 22.32s). At the 2014 Commonwealth Games in Glasgow, she captured double sprint gold in the 100m and 200m.',
    achievements: [
      { competition: 'Olympic Games (Beijing 2008)', year: 2008, medal: 'Silver', event: "Women's Long Jump", description: 'Olympic silver medalist with a leap of 6.91m in Beijing.' },
      { competition: 'World Athletics Championships (Moscow 2013)', year: 2013, medal: 'Silver', event: "Long Jump & 200m", description: 'Silver in long jump (6.99m) and Bronze in 200m (22.32s).' },
      { competition: 'Commonwealth Games (Glasgow 2014)', year: 2014, medal: 'Gold', event: "100m & 200m", description: 'Double sprint gold medalist; broke Commonwealth 100m record with 10.85s.' },
      { competition: 'African Championships', year: '2010, 2014', medal: 'Gold', event: "Sprints & Long Jump", description: 'Multiple African gold medalist.' },
    ],
    internationalRecord: ['Personal Bests: 100m - 10.79s; 200m - 22.04s; Long Jump - 7.00m', 'Olympic and World Championship double medalist'],
    nationalTeamRecord: 'Olympic Silver Medallist; Multiple World Championship Medallist',
    awards: ['Guinness World Record for most Diamond League appearances (67)'],
    sportingImpact: 'Dominated African sprint and horizontal jump events for over a decade.',
    whereAreTheyNow: 'Retired track and field athlete and sports mentor.',
    sources: ['World Athletics Official Athlete Profile', 'IOC Beijing 2008 Official Track and Field Results'],
  },
  {
    id: 'divine-oduduru-sport',
    name: 'Divine Oduduru',
    sport: 'Athletics',
    category: 'athletics',
    primaryEventOrPosition: '100m & 200m Sprints ("I Never Expect Am")',
    era: '2014–Present',
    birthDate: 'October 7, 1996',
    photoUrl: '/images/sports/divine-oduduru.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'Sub-10s & Sub-20s Collegiate Record Breaker & African Champion',
    biography:
      'Ejowvokoghene Divine Oduduru is a charismatic sprint prodigy born in Ughelli, Delta State. He captured global internet fame in 2016 with his viral "I never expect am" post-race interview. At Texas Tech University in 2019, Oduduru accomplished the rare collegiate sprint double, clocking 9.86s in the 100m and 19.73s in the 200m on the same day—making him the second-fastest African 200m sprinter in history. He won the 200m gold at the 2019 African Games in Rabat.',
    achievements: [
      { competition: 'NCAA Division I Championships', year: 2019, medal: 'Gold', event: "100m & 200m", description: 'Blazed 9.86s (100m) and 19.73s (200m) to win double collegiate national titles.' },
      { competition: 'African Games (Rabat 2019)', year: 2019, medal: 'Gold', event: "200m", description: 'Gold medalist in the men\'s 200m.' },
      { competition: 'World Junior Championships (Eugene 2014)', year: 2014, medal: 'Silver', event: "200m", description: 'Silver medalist with 20.25s.' },
    ],
    internationalRecord: ['Personal Bests: 100m - 9.86s; 200m - 19.73s (One of Africa\'s fastest in history)'],
    nationalTeamRecord: 'Sub-10s 100m sprinter; African Games 200m Champion',
    awards: ['The Bowerman Award Finalist (2019)'],
    sportingImpact: 'Brought youthful vibrance, national pride, and world-class sprint times to Nigerian athletics.',
    whereAreTheyNow: 'Professional track athlete.',
    sources: ['World Athletics Official Records', 'NCAA Track and Field Archives 2019'],
  },
  {
    id: 'francis-obikwelu-sport',
    name: 'Francis Obikwelu',
    sport: 'Athletics',
    category: 'athletics',
    primaryEventOrPosition: '100m & 200m Sprints',
    era: '1994–2008',
    birthDate: 'November 22, 1978',
    photoUrl: '/images/sports/francis-obikwelu.jpg',
    nationality: 'Nigeria 🇳🇬 / Portugal 🇵🇹',
    tagline: 'Olympic Silver Medalist & World Junior Double Champion for Nigeria',
    biography:
      'Francis Obiorah Obikwelu is one of the most explosive sprinters in track and field history. Born in Onitsha, Anambra State, Obikwelu won double gold for Nigeria at the 1996 World Junior Championships in Sydney (100m in 10.21s and 200m in 20.47s), and won bronze for Nigeria in the 200m at the 1999 World Athletics Championships in Seville (setting an African record of 19.84s). After naturalizing to Portugal due to medical neglect following an injury at the Sydney 2000 Olympics while representing Nigeria, Obikwelu won the Olympic silver medal in the 100m at Athens 2004 in 9.86s, setting a European record that stood for nearly two decades.',
    achievements: [
      { competition: 'Olympic Games (Athens 2004)', year: 2004, medal: 'Silver', event: "Men's 100m", description: 'Olympic silver medalist in 9.86s, setting European and former African area records.' },
      { competition: 'World Athletics Championships (Seville 1999)', year: 1999, medal: 'Bronze', event: "Men's 200m (Representing Nigeria)", description: 'Won bronze for Nigeria, clocking 19.84s in the semifinal.' },
      { competition: 'World Junior Championships (Sydney 1996)', year: 1996, medal: 'Gold', event: "100m & 200m (Representing Nigeria)", description: 'Historic double sprint gold for Nigeria.' },
      { competition: 'European Championships (Gothenburg 2006)', year: 2006, medal: 'Gold', event: "100m & 200m", description: 'Double sprint European champion.' },
    ],
    internationalRecord: ['Personal Bests: 100m - 9.86s; 200m - 19.84s', 'Olympic 100m Silver Medalist'],
    nationalTeamRecord: 'World Junior Double Champion for Nigeria; Seville 1999 World Bronze for Nigeria',
    awards: ['European Athlete of the Year (2006)'],
    sportingImpact: 'His career sparked critical national reforms in Nigerian sports medicine and athlete welfare.',
    whereAreTheyNow: 'Sprint coach and international athletics ambassador.',
    sources: ['World Athletics Official Records', 'IOC Athens 2004 Track and Field Results'],
  },

  // --- ADDITIONAL BASKETBALL LEGENDS ---
  {
    id: 'josh-okogie-sport',
    name: 'Josh Okogie',
    sport: 'Basketball',
    category: 'basketball',
    primaryEventOrPosition: 'Shooting Guard / Small Forward (D\'Tigers)',
    era: '2018–Present',
    birthDate: 'September 1, 1998',
    photoUrl: '/images/sports/josh-okogie.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'NBA Defensive Stopper & D\'Tigers Olympic Leader',
    biography:
      'Joshua Aloiye Okogie is an elite NBA defensive guard and core leader of the Nigerian men\'s national basketball team (D\'Tigers). Born in Lagos, Okogie was selected 20th overall in the 2018 NBA Draft. At the 2019 FIBA Basketball World Cup in China, Okogie starred for D\'Tigers, leading them to direct qualification for the Tokyo 2020 Olympics as Africa\'s highest-ranked nation. In July 2021 in Las Vegas, Okogie helped orchestrate Nigeria\'s historic 90–87 exhibition upset over Team USA—the first time an African nation ever defeated the United States in men\'s basketball.',
    achievements: [
      { competition: 'Exhibition vs Team USA', year: 2021, medal: 'Record', description: 'Helped D\'Tigers defeat USA Basketball 90–87 in Las Vegas; first African victory over USA in history.' },
      { competition: 'FIBA Basketball World Cup', year: 2019, medal: 'Record', description: 'Qualified Nigeria directly to Tokyo 2020 Olympics as Africa\'s top team.' },
      { competition: 'NBA Draft', year: 2018, medal: 'Honour', description: 'Selected in the 1st round (20th overall).' },
    ],
    internationalRecord: ['Core leader of Nigeria D\'Tigers at FIBA World Cup and Tokyo Olympics', 'Over 370 NBA regular-season games played'],
    nationalTeamRecord: 'D\'Tigers Olympic Starter; 2019 World Cup Top Scorer for Nigeria',
    awards: ['NBA Rising Stars Challenge (2019)'],
    sportingImpact: 'A relentless perimeter defender who proudly represents Nigeria across the NBA and global tournaments.',
    whereAreTheyNow: 'Active NBA player for the Phoenix Suns / Charlotte Hornets and Nigeria D\'Tigers.',
    sources: ['NBA Official Player Statistics', 'FIBA World Cup 2019 Official Records'],
  },
  {
    id: 'al-farouq-aminu-sport',
    name: 'Al-Farouq Aminu',
    sport: 'Basketball',
    category: 'basketball',
    primaryEventOrPosition: 'Forward ("The Chief" / D\'Tigers Captain)',
    era: '2010–2022',
    birthDate: 'September 21, 1990',
    photoUrl: '/images/sports/al-farouq-aminu.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: 'AfroBasket 2015 Champion & 2x Olympian for Nigeria',
    biography:
      'Al-Farouq Ajadi Aminu, affectionately known as "The Chief" due to his descent from Nigerian royalty, is a towering pillar of Nigerian basketball. Drafted 8th overall in the 2010 NBA Draft, Aminu spent 12 distinguished seasons in the NBA, playing over 700 games. In 2015 in Radès, Tunisia, Aminu captained D\'Tigers to their first-ever FIBA AfroBasket championship, defeating Angola 74–65 in the final to seal qualification for the 2016 Rio Olympics. He represented Nigeria at two Olympic Games (London 2012, Rio 2016).',
    achievements: [
      { competition: 'FIBA AfroBasket Championship', year: 2015, medal: 'Champion', description: 'Captained Nigeria to its first-ever African continental basketball championship in Tunisia.' },
      { competition: 'Olympic Games (London 2012, Rio 2016)', year: '2012, 2016', medal: 'Honour', description: 'Two-time Olympic competitor representing Nigeria.' },
      { competition: 'NBA Career', year: '2010–2022', medal: 'Record', description: 'Played 711 regular-season NBA games across 12 seasons.' },
    ],
    internationalRecord: ['711 NBA regular-season games; 2x Olympian for Nigeria', 'AfroBasket 2015 All-Star Five selection'],
    nationalTeamRecord: 'AfroBasket 2015 Champion & All-Star; 2x Olympian for Nigeria',
    awards: ['AfroBasket 2015 All-Star Five', 'NBA 8th Overall Pick (2010)'],
    sportingImpact: 'With his brother Alade, founded the Aminu Good Works Foundation to build basketball courts and schools across Nigeria.',
    whereAreTheyNow: 'NBA veteran, philanthropist, and founder of youth sports initiatives across southwestern Nigeria.',
    sources: ['FIBA AfroBasket 2015 Tournament Archive', 'NBA Official Historical Player Registry'],
  },

  // --- PARALYMPIC CHAMPIONS ---
  {
    id: 'lucy-ejike-sport',
    name: 'Lucy Ejike',
    sport: 'Paralympic Powerlifting',
    category: 'paralympic',
    primaryEventOrPosition: 'Women\'s Powerlifting (-44kg, -48kg, -52kg, -56kg, -61kg)',
    era: '2000–Present',
    birthDate: 'October 16, 1977',
    photoUrl: '/images/sports/lucy-ejike.jpg',
    nationality: 'Nigeria 🇳🇬',
    tagline: '3-Time Paralympic Gold Medalist Across 6 Consecutive Paralympic Games (2000–2020)',
    biography:
      'Lucy Ogechukwu Ejike MON is one of the most decorated Paralympians in global history. Born in Enugu, Ejike contracted polio at age one and uses a wheelchair. Taking up powerlifting in her late teens, she made her Paralympic debut at Sydney 2000, winning silver. Over the next two decades, Ejike competed at six consecutive Paralympic Games, winning medals at every single one: 3 Golds (Athens 2004, Beijing 2008, Rio 2016), 2 Silvers (Sydney 2000, London 2012), and 1 Bronze (Tokyo 2020). At Rio 2016, she broke the Paralympic and World record three consecutive times in the same competition, lifting 142 kg at a bodyweight of 61 kg.',
    achievements: [
      { competition: 'Paralympic Games', year: '2004, 2008, 2016', medal: 'Gold', event: "Women's Powerlifting", description: 'Three Paralympic Gold medals in Athens, Beijing, and Rio.' },
      { competition: 'Paralympic Games', year: '2000, 2012', medal: 'Silver', event: "Women's Powerlifting", description: 'Silver medalist in Sydney and London.' },
      { competition: 'Paralympic Games', year: 2020, medal: 'Bronze', event: "Women's Powerlifting", description: 'Bronze in Tokyo, completing medals across 6 consecutive Games.' },
      { competition: 'World Para Powerlifting Record', year: 2016, medal: 'Record', description: 'Broke world record three times in Rio, lifting 142 kg.' },
    ],
    internationalRecord: [
      '6 consecutive Paralympic Games medals (3 Gold, 2 Silver, 1 Bronze)',
      'Multiple World Para Powerlifting Championships Gold medalist',
    ],
    nationalTeamRecord: 'Flagbearer for Team Nigeria at the Rio 2016 Paralympics; 6x Paralympic Medalist',
    awards: ['Member of the Order of the Niger (MON)', 'International Paralympic Committee Athlete of the Month'],
    sportingImpact:
      'Ejike proved that Nigerian athletes with disabilities are among the most dominant power athletes on planet Earth, inspiring disability rights and sports inclusion across West Africa.',
    whereAreTheyNow: 'Paralympic sports administrator and youth disability sports mentor based in Enugu.',
    sources: ['International Paralympic Committee (IPC) Athlete Profile: Lucy Ejike', 'World Para Powerlifting Championship Records'],
  },
];

// 4. VERIFIED NATIONAL MEDAL WALL TOTALS
export const NIGERIA_MEDAL_WALL = {
  olympics: {
    gold: 3, // 1996 Football, 1996 Long Jump (Ajunwa), 2000 4x400m Men (awarded gold)
    silver: 10,
    bronze: 12,
    total: 25,
    firstParticipation: 1952,
    firstMedalYear: 1964, // Nojim Maiyegun (Boxing Bronze)
  },
  paralympics: {
    gold: 40,
    silver: 20,
    bronze: 22,
    total: 82,
    firstParticipation: 1992,
    strongestSport: 'Para-Powerlifting (Over 50+ Medals)',
  },
  afcon: {
    titles: 3, // 1980, 1994, 2013
    runnersUp: 5, // 1984, 1988, 1990, 2000, 2023
    thirdPlace: 8,
    totalPodiums: 16,
  },
  worldCup: {
    appearances: 6, // 1994, 1998, 2002, 2010, 2014, 2018
    bestFinish: 'Round of 16 (1994, 1998, 2014)',
    allTimeTopScorer: 'Ahmed Musa (4 Goals)',
    firstGoalscorer: 'Rashidi Yekini (1994 vs Bulgaria)',
  },
};

// 5. GREAT MOMENTS IN NIGERIAN SPORT TIMELINE
export const SPORTS_MOMENTS_TIMELINE: MilestoneEvent[] = [
  {
    year: 1957,
    title: 'Hogan "Kid" Bassey Becomes Nigeria\'s First World Champion',
    sport: 'Boxing',
    summary:
      'Okon Asuquo Bassey defeats Cherif Hamia at the Palais des Sports in Paris by 10th-round TKO to win the World Featherweight Championship, establishing Nigeria on the international sports map.',
    impact: 'First Nigerian in history to hold an undisputed world championship title in any sport.',
  },
  {
    year: 1962,
    title: 'Dick Tiger Wins World Middleweight Championship',
    sport: 'Boxing',
    summary:
      'Dick Tiger defeats Gene Fullmer in San Francisco, later defending the crown before 40,000 citizens at Liberty Stadium in Ibadan in 1963.',
    impact: 'First world championship boxing bout hosted on West African soil.',
  },
  {
    year: 1964,
    title: 'Nojim Maiyegun Wins Nigeria\'s Inaugural Olympic Medal',
    sport: 'Boxing / Olympics',
    summary:
      'At the 1964 Tokyo Summer Olympics, light middleweight boxer Nojim Maiyegun secures bronze, winning Nigeria\'s first-ever Olympic medal.',
    impact: 'Broke the Olympic barrier for independent Nigeria.',
  },
  {
    year: 1980,
    title: 'Green Eagles Win Nigeria\'s First Africa Cup of Nations',
    sport: 'Football',
    summary:
      'Coached by Otto Glória and led by Christian Chukwu and Segun Odegbami, Nigeria defeats Algeria 3–0 at the National Stadium in Surulere, Lagos, before 85,000 ecstatic fans.',
    impact: 'Catalyzed modern football passion across all ethnic and regional boundaries.',
  },
  {
    year: 1985,
    title: 'Golden Eaglets Win Inaugural FIFA U-16 World Championship',
    sport: 'Football',
    summary:
      'In Beijing, China, Nigeria\'s U-16 squad defeats West Germany 2–0 in the final, inaugurating Nigeria\'s reign as the world\'s most successful youth football nation.',
    impact: 'First global FIFA title won by any African nation.',
  },
  {
    year: 1994,
    title: 'Super Eagles Golden Year: AFCON Glory & World Cup Debut',
    sport: 'Football',
    summary:
      'Nigeria wins the 1994 AFCON in Tunisia, reaches #5 in the FIFA World Rankings, and makes a spellbinding debut at USA \'94 with Rashidi Yekini\'s unforgettable net celebration.',
    impact: 'The birth of the legendary "Super Eagles" global identity.',
  },
  {
    year: 1996,
    title: 'The Atlanta Double: Olympic Football Gold & Ajunwa\'s 7.12m Leap',
    sport: 'Olympics',
    summary:
      'Chioma Ajunwa wins Nigeria\'s first individual Olympic gold in the long jump (7.12m), and the Men\'s Olympic Football Team defeats Brazil (4–3) and Argentina (3–2) to win Africa\'s first Football Gold.',
    impact: 'The greatest week in Nigerian sports history, uniting the entire country in euphoric celebration.',
  },
  {
    year: 2013,
    title: 'Stephen Keshi Leads Super Eagles to Third AFCON Crown',
    sport: 'Football',
    summary:
      'Stephen Keshi becomes only the second person in history to win AFCON as both player (1994) and coach (2013), as Sunday Mba\'s wonder strike seals a 1–0 final win over Burkina Faso in Johannesburg.',
    impact: 'Cemented indigenous coaching capability at the highest level of African sports.',
  },
  {
    year: 2022,
    title: 'Tobi Amusan Shocks the World with 12.12s 100mH World Record',
    sport: 'Athletics',
    summary:
      'In Eugene, Oregon, Tobi Amusan runs 12.12s to smash the 100m hurdles world record before winning gold in the final, becoming Nigeria\'s first-ever outdoor track world champion and world record holder.',
    impact: 'Nigeria\'s first global track and field world record.',
  },
  {
    year: 2023,
    title: 'Victor Osimhen Wins African Footballer of the Year After Scudetto Triumph',
    sport: 'Football',
    summary:
      'Victor Osimhen wins the Italian Serie A title with Napoli, taking the Capocannoniere top-scorer crown with 26 goals and ending Nigeria\'s 24-year wait for the CAF African Player of the Year award.',
    impact: 'Modern resurgence of Nigerian football stardom on the global stage.',
  },
];
