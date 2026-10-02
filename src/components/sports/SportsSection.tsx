import React, { useState, useMemo } from 'react';
import {
  SPORTS_CATEGORIES,
  ALL_SPORTS_LEGENDS,
  ATLANTA_96_MATCHES,
  NIGERIA_MEDAL_WALL,
  SPORTS_MOMENTS_TIMELINE,
  AthleteProfileData,
  MatchTimelineEvent,
} from '../../data/sports';
import { AthleteProfileModal } from './AthleteProfileModal';
import {
  Search,
  Filter,
  Trophy,
  Medal,
  Calendar,
  ExternalLink,
  ChevronRight,
  Flame,
  Award,
  Users,
  Target,
  Clock,
  Sparkles,
  ArrowRight,
  Activity,
  Layers,
} from 'lucide-react';

export const SportsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAthlete, setSelectedAthlete] = useState<AthleteProfileData | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<MatchTimelineEvent | null>(ATLANTA_96_MATCHES[4]);
  const [activeTab, setActiveTab] = useState<'legends' | 'atlanta96' | 'records' | 'timeline'>('legends');

  // Filter athletes
  const filteredAthletes = useMemo(() => {
    return ALL_SPORTS_LEGENDS.filter((athlete) => {
      // Category match
      if (selectedCategory === 'football') {
        const isFootball = athlete.sport.toLowerCase().includes('football') || athlete.category === 'football' || athlete.category === 'modern';
        if (!isFootball) return false;
      } else if (selectedCategory === 'athletics') {
        const isAthletics = athlete.sport.toLowerCase().includes('athletics') || athlete.category === 'athletics';
        if (!isAthletics) return false;
      } else if (selectedCategory === 'boxing') {
        const isBoxing = athlete.sport.toLowerCase().includes('boxing') || athlete.category === 'boxing';
        if (!isBoxing) return false;
      } else if (selectedCategory === 'basketball') {
        const isBasketball = athlete.sport.toLowerCase().includes('basketball') || athlete.category === 'basketball';
        if (!isBasketball) return false;
      } else if (selectedCategory === 'paralympic') {
        const isParalympic = athlete.sport.toLowerCase().includes('paralympic') || athlete.category === 'paralympic';
        if (!isParalympic) return false;
      } else if (selectedCategory === 'atlanta96') {
        if (!athlete.isAtlanta96 && !athlete.tagline.toLowerCase().includes('atlanta')) return false;
      } else if (selectedCategory === 'modern') {
        if (athlete.category !== 'modern' && !athlete.id.includes('mikel') && !athlete.era.includes('Present')) return false;
      } else if (selectedCategory === 'women-sport') {
        const isWoman = athlete.category === 'women-sport' || [
          'chioma-ajunwa-sport',
          'tobi-amusan-sport',
          'ese-brume-sport',
          'falilat-ogunkoya-sport',
          'mary-onyali-sport',
          'blessing-okagbare-sport',
          'nneka-ogwumike-sport',
          'lucy-ejike-sport',
        ].includes(athlete.id);
        if (!isWoman) return false;
      } else if (selectedCategory !== 'all') {
        if (athlete.category !== selectedCategory && !athlete.sport.toLowerCase().includes(selectedCategory)) {
          return false;
        }
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = athlete.name.toLowerCase().includes(query);
        const matchesSport = athlete.sport.toLowerCase().includes(query);
        const matchesRole = athlete.primaryEventOrPosition.toLowerCase().includes(query);
        const matchesTagline = athlete.tagline.toLowerCase().includes(query);
        return matchesName || matchesSport || matchesRole || matchesTagline;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Featured Key Figures
  const ajunwa = ALL_SPORTS_LEGENDS.find((a) => a.id === 'chioma-ajunwa-sport');
  const yekini = ALL_SPORTS_LEGENDS.find((a) => a.id === 'rashidi-yekini-sport');
  const mikel = ALL_SPORTS_LEGENDS.find((a) => a.id === 'mikel-obi-sport');
  const amusan = ALL_SPORTS_LEGENDS.find((a) => a.id === 'tobi-amusan-sport');
  const osimhen = ALL_SPORTS_LEGENDS.find((a) => a.id === 'victor-osimhen-sport');

  return (
    <section
      id="sports-legends"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#17352A] dark:text-stone-100 transition-colors"
    >
      {/* 1. Header & Introduction */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#006B3C] dark:text-emerald-400">
          <Trophy className="w-4 h-4 text-[#008751]" />
          <span>Nigeria Sports Heritage Archive</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17352A] dark:text-white">
          🇳🇬 NIGERIAN SPORTING LEGENDS
        </h2>

        <p className="font-editorial text-lg sm:text-xl text-[#006B3C] dark:text-emerald-300 italic">
          “Celebrating the athletes, footballers and sporting heroes who carried Nigeria's name to the world.”
        </p>

        <p className="text-sm sm:text-base text-[#5F746A] dark:text-stone-300 leading-relaxed max-w-3xl mx-auto">
          From Olympic victories to football championships and world-class individual performances, Nigerian athletes
          have created some of the country's most memorable sporting moments. This section preserves their stories,
          achievements, records and contributions to Nigerian sport.
        </p>

        {/* Section View Tabs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab('legends')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'legends'
                ? 'bg-[#006B3C] text-white'
                : 'bg-white dark:bg-stone-900 border border-[#D8E9DE] dark:border-emerald-950 text-[#17352A] dark:text-stone-300 hover:bg-[#EAF7EF]'
            }`}
          >
            🏆 All Sporting Legends
          </button>
          <button
            onClick={() => setActiveTab('atlanta96')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'atlanta96'
                ? 'bg-[#006B3C] text-white'
                : 'bg-white dark:bg-stone-900 border border-[#D8E9DE] dark:border-emerald-950 text-[#17352A] dark:text-stone-300 hover:bg-[#EAF7EF]'
            }`}
          >
            🥇 Atlanta '96 Golden Era
          </button>
          <button
            onClick={() => setActiveTab('records')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'records'
                ? 'bg-[#006B3C] text-white'
                : 'bg-white dark:bg-stone-900 border border-[#D8E9DE] dark:border-emerald-950 text-[#17352A] dark:text-stone-300 hover:bg-[#EAF7EF]'
            }`}
          >
            📊 National Medal Wall
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'timeline'
                ? 'bg-[#006B3C] text-white'
                : 'bg-white dark:bg-stone-900 border border-[#D8E9DE] dark:border-emerald-950 text-[#17352A] dark:text-stone-300 hover:bg-[#EAF7EF]'
            }`}
          >
            ⏳ Moments Timeline
          </button>
        </div>
      </div>

      {/* 2. Hero Feature: Atlanta '96 — The Golden Generation */}
      <div className="mb-16 rounded-2xl overflow-hidden border border-[#D8E9DE] dark:border-emerald-900/40 bg-gradient-to-br from-[#EAF7EF] via-white to-[#F4FBF6] dark:from-[#114a38] dark:via-[#0d3d2e] dark:to-[#041a10] shadow-sm">
        <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006B3C] dark:text-emerald-400">
              <span className="p-1 rounded bg-[#008751] text-white text-[10px]">HISTORIC GOLD</span>
              <span>Atlanta, United States · 1996</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17352A] dark:text-white">
              🇳🇬 ATLANTA '96 — THE GOLDEN GENERATION
            </h3>

            <p className="text-base sm:text-lg font-semibold text-[#006B3C] dark:text-emerald-300">
              Nigeria's Olympic Football Gold · First in African History
            </p>

            <blockquote className="border-l-3 border-[#008751] pl-4 text-xs sm:text-sm text-[#274538] dark:text-stone-300 font-editorial italic leading-relaxed">
              "Nigeria's men's football team won the gold medal at the 1996 Olympic Games in Atlanta, defeating Argentina
              3–2 in the final after previously defeating Brazil 4–3 in a famous semifinal."
            </blockquote>

            <p className="text-xs sm:text-sm text-[#5F746A] dark:text-stone-300 leading-relaxed">
              Before 86,000 spectators at Sanford Stadium in Athens, Georgia, coach Jo Bonfrere's squad stunned the
              world with fearless, poetic football—overcoming a 3–1 deficit against Ronaldo, Bebeto, and Rivaldo's Brazil
              via Nwankwo Kanu's 94th-minute golden goal, before Emmanuel Amuneke's 90th-minute volley secured the Gold against
              Argentina.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setActiveTab('atlanta96');
                  setSelectedCategory('atlanta96');
                }}
                className="btn-nigeria-primary px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm"
              >
                <span>EXPLORE ATLANTA '96</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  const kanu = ALL_SPORTS_LEGENDS.find((a) => a.id === 'nwankwo-kanu-sport');
                  if (kanu) setSelectedAthlete(kanu);
                }}
                className="btn-nigeria-secondary px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2"
              >
                <span>View Captain Nwankwo Kanu</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#008751]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-5 rounded-xl bg-white dark:bg-[#145742] border border-[#D8E9DE] dark:border-emerald-900/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#006B3C] dark:text-emerald-400">
                <span>FINAL SCORELINE</span>
                <span className="text-amber-700 dark:text-amber-400 font-bold">🥇 GOLD MEDAL</span>
              </div>
              <div className="text-center py-2 border-y border-[#D8E9DE] dark:border-emerald-950">
                <div className="text-2xl font-bold font-display text-[#17352A] dark:text-white">
                  Nigeria 3 – 2 Argentina
                </div>
                <div className="text-[11px] text-[#5F746A] dark:text-stone-400 mt-1">
                  Babayaro (28') · Amokachi (74') · Amuneke (90')
                </div>
              </div>
              <div className="text-xs text-[#5F746A] dark:text-stone-400 flex items-center justify-between">
                <span>Semifinal Comeback:</span>
                <span className="font-semibold text-[#17352A] dark:text-white">Nigeria 4 – 3 Brazil (AET)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F4FBF6] dark:bg-emerald-950/20 border border-[#D8E9DE] dark:border-emerald-900/20 text-xs text-[#5F746A] dark:text-stone-300">
              <span className="font-bold text-[#006B3C] dark:text-emerald-300">Historical Significance: </span>
              First African football team to win Olympic Gold; named African Team of the Year 1996 by CAF.
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Major Historical Spotlights */}
      <div className="mb-16 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold font-display text-[#17352A] dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#008751]" />
            <span>Landmark Legends in Profile</span>
          </h3>
          <span className="text-xs text-[#5F746A] dark:text-stone-400">Verified Historical Achievements</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Spotlight 1: John Obi Mikel */}
          {mikel && (
            <div
              onClick={() => setSelectedAthlete(mikel)}
              className="group cursor-pointer rounded-xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] p-4 sm:p-5 flex flex-col justify-between hover:border-[#008751] hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={mikel.photoUrl}
                    alt={mikel.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-[#006B3C] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    AFCON & UCL CHAMPION
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#008751] dark:text-emerald-400">
                    Football · Super Eagles Captain
                  </span>
                  <h4 className="font-display font-bold text-base text-[#17352A] dark:text-white mt-0.5">
                    {mikel.name}
                  </h4>
                  <p className="text-xs text-[#5F746A] dark:text-stone-400 mt-1 line-clamp-2">
                    AFCON 2013 winner, 2016 Olympic captain (personally funded squad), and UEFA Champions League champion.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D8E9DE] dark:border-emerald-950 flex items-center justify-between text-xs font-semibold text-[#006B3C] dark:text-emerald-400">
                <span>View Full Profile</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )}

          {/* Spotlight 2: Chioma Ajunwa */}
          {ajunwa && (
            <div
              onClick={() => setSelectedAthlete(ajunwa)}
              className="group cursor-pointer rounded-xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] p-4 sm:p-5 flex flex-col justify-between hover:border-[#008751] hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={ajunwa.photoUrl}
                    alt={ajunwa.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-[#006B3C] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    FIRST INDIVIDUAL GOLD
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#008751] dark:text-emerald-400">
                    Athletics · Women's Long Jump
                  </span>
                  <h4 className="font-display font-bold text-base text-[#17352A] dark:text-white mt-0.5">
                    {ajunwa.name}
                  </h4>
                  <p className="text-xs text-[#5F746A] dark:text-stone-400 mt-1 line-clamp-2">
                    7.12m Olympic Gold in Atlanta 1996 — First Black African woman to win an Olympic track-and-field gold.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D8E9DE] dark:border-emerald-950 flex items-center justify-between text-xs font-semibold text-[#006B3C] dark:text-emerald-400">
                <span>View Full Profile</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )}

          {/* Spotlight 3: Rashidi Yekini */}
          {yekini && (
            <div
              onClick={() => setSelectedAthlete(yekini)}
              className="group cursor-pointer rounded-xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] p-4 sm:p-5 flex flex-col justify-between hover:border-[#008751] hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={yekini.photoUrl}
                    alt={yekini.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-[#006B3C] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    ICONIC STRIKER
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#008751] dark:text-emerald-400">
                    Football · All-Time Top Scorer
                  </span>
                  <h4 className="font-display font-bold text-base text-[#17352A] dark:text-white mt-0.5">
                    {yekini.name}
                  </h4>
                  <p className="text-xs text-[#5F746A] dark:text-stone-400 mt-1 line-clamp-2">
                    37 goals in 58 caps; scored Nigeria's first-ever World Cup goal at USA '94 with legendary net celebration.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D8E9DE] dark:border-emerald-950 flex items-center justify-between text-xs font-semibold text-[#006B3C] dark:text-emerald-400">
                <span>View Full Profile</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )}

          {/* Spotlight 4: Tobi Amusan */}
          {amusan && (
            <div
              onClick={() => setSelectedAthlete(amusan)}
              className="group cursor-pointer rounded-xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] p-4 sm:p-5 flex flex-col justify-between hover:border-[#008751] hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={amusan.photoUrl}
                    alt={amusan.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-[#006B3C] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    WORLD RECORD HOLDER
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#008751] dark:text-emerald-400">
                    Athletics · 100m Hurdles (12.12s)
                  </span>
                  <h4 className="font-display font-bold text-base text-[#17352A] dark:text-white mt-0.5">
                    {amusan.name}
                  </h4>
                  <p className="text-xs text-[#5F746A] dark:text-stone-400 mt-1 line-clamp-2">
                    2022 World Champion; broke world record in Oregon with 12.12s; three-time Diamond League trophy winner.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D8E9DE] dark:border-emerald-950 flex items-center justify-between text-xs font-semibold text-[#006B3C] dark:text-emerald-400">
                <span>View Full Profile</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )}

          {/* Spotlight 5: Victor Osimhen */}
          {osimhen && (
            <div
              onClick={() => setSelectedAthlete(osimhen)}
              className="group cursor-pointer rounded-xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] p-4 sm:p-5 flex flex-col justify-between hover:border-[#008751] hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={osimhen.photoUrl}
                    alt={osimhen.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-[#006B3C] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    MODERN FOOTBALL ICON
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#008751] dark:text-emerald-400">
                    Football · Born 1998 (Post-Atlanta)
                  </span>
                  <h4 className="font-display font-bold text-base text-[#17352A] dark:text-white mt-0.5">
                    {osimhen.name}
                  </h4>
                  <p className="text-xs text-[#5F746A] dark:text-stone-400 mt-1 line-clamp-2">
                    2023 African Footballer of the Year; Serie A Capocannoniere top-scorer and Scudetto champion with Napoli.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D8E9DE] dark:border-emerald-950 flex items-center justify-between text-xs font-semibold text-[#006B3C] dark:text-emerald-400">
                <span>View Full Profile</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. Tab 1: ATLANTA '96 DEDICATED SECTION */}
      {activeTab === 'atlanta96' && (
        <div className="space-y-12 mb-16">
          <div className="p-6 rounded-2xl bg-[#F4FBF6] dark:bg-[#114a38] border border-[#D8E9DE] dark:border-emerald-900/40">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17352A] dark:text-white mb-2">
              ⚽ THE ATLANTA '96 DREAM TEAM SQUAD & MATCH CHRONOLOGY
            </h3>
            <p className="text-xs sm:text-sm text-[#5F746A] dark:text-stone-300 leading-relaxed">
              Explore the complete 16-man gold-winning football squad and the match-by-match chronology from Orlando to
              the Sanford Stadium final in Athens, Georgia.
            </p>
          </div>

          {/* Interactive Match Timeline */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-[#17352A] dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#008751]" />
                <span>Atlanta '96 Football Tournament Chronology (Click to Inspect)</span>
              </h4>
              <span className="text-xs text-[#5F746A] dark:text-stone-400">July 21 – August 3, 1996</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ATLANTA_96_MATCHES.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMatch(m)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedMatch?.stage === m.stage
                      ? 'border-[#008751] bg-[#EAF7EF] dark:bg-emerald-950/40 shadow-sm ring-1 ring-[#008751]'
                      : 'border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] hover:border-emerald-600'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#006B3C] dark:text-emerald-400">{m.stage}</span>
                    <span className="text-stone-400 text-[11px]">{m.date}</span>
                  </div>
                  <div className="font-display font-bold text-sm text-[#17352A] dark:text-white">{m.score}</div>
                  <div className="text-[11px] text-[#5F746A] dark:text-stone-400 mt-1 truncate">{m.headline}</div>
                  {m.isGoldMatch && (
                    <div className="mt-2 text-[10px] font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                      <span>🥇</span>
                      <span>GOLD MEDAL DECIDER</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Selected Match Detailed Inspector */}
            {selectedMatch && (
              <div className="p-6 rounded-xl border border-[#D8E9DE] dark:border-emerald-900/40 bg-white dark:bg-[#145742] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8E9DE] dark:border-emerald-950 pb-3">
                  <div>
                    <span className="text-xs font-bold text-[#006B3C] dark:text-emerald-400">
                      {selectedMatch.stage} · {selectedMatch.venue}
                    </span>
                    <h5 className="font-display text-xl font-bold text-[#17352A] dark:text-white">
                      {selectedMatch.score}
                    </h5>
                  </div>
                  <div className="text-xs text-[#5F746A] dark:text-stone-400">
                    <span className="font-semibold text-[#17352A] dark:text-stone-300">Goal Scorers: </span>
                    {selectedMatch.keyScorers.join(', ')}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#274538] dark:text-stone-300 leading-relaxed font-editorial">
                  {selectedMatch.description}
                </p>
              </div>
            )}
          </div>

          {/* Atlanta '96 Squad Cards Grid */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#17352A] dark:text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-[#008751]" />
              <span>Documented Atlanta '96 Gold Medal Squad</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {ALL_SPORTS_LEGENDS.filter((a) => a.isAtlanta96).map((player) => (
                <div
                  key={player.id}
                  onClick={() => setSelectedAthlete(player)}
                  className="group cursor-pointer rounded-xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] p-4 flex flex-col justify-between hover:border-[#008751] hover:shadow-sm transition-all"
                >
                  <div className="space-y-3">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800">
                      <img
                        src={player.photoUrl}
                        alt={player.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute bottom-2 left-2 bg-[#006B3C] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        🥇 1996 GOLD
                      </span>
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-sm text-[#17352A] dark:text-white">{player.name}</h5>
                      <p className="text-[11px] text-[#006B3C] dark:text-emerald-400 font-medium">
                        {player.primaryEventOrPosition}
                      </p>
                      {player.clubAtTime && (
                        <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 truncate">
                          Club: {player.clubAtTime}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#D8E9DE] dark:border-emerald-950 flex items-center justify-between text-xs font-semibold text-[#006B3C] dark:text-emerald-400">
                    <span>View Record</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. Tab 2: ALL SPORTING LEGENDS & SEARCH */}
      {activeTab === 'legends' && (
        <div className="space-y-8 mb-16">
          {/* Search and Filters Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#145742] border border-[#D8E9DE] dark:border-emerald-900/30 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sporting legends by name (e.g. Yekini, Osimhen, Ajunwa, Okocha)..."
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D8E9DE] dark:border-emerald-900/40 bg-[#F4FBF6] dark:bg-[#114a38] text-[#17352A] dark:text-white focus:outline-none focus:border-[#008751] transition-colors"
                />
              </div>

              {/* Active Results Count */}
              <div className="text-xs text-[#5F746A] dark:text-stone-400 whitespace-nowrap self-center">
                Showing <strong className="text-[#006B3C] dark:text-emerald-400">{filteredAthletes.length}</strong> verified records
              </div>
            </div>

            {/* Category Filter Pills (Functional Buttons) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {SPORTS_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-[#006B3C] text-white'
                      : 'bg-[#F4FBF6] dark:bg-stone-900 border border-[#D8E9DE] dark:border-emerald-950 text-[#17352A] dark:text-stone-300 hover:bg-[#EAF7EF]'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Athletes Grid: 2 cols on mobile, up to 4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredAthletes.map((athlete) => (
              <div
                key={athlete.id}
                onClick={() => setSelectedAthlete(athlete)}
                className="group cursor-pointer rounded-xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] p-3 sm:p-5 flex flex-col justify-between hover:border-[#008751] hover:shadow-md transition-all"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800">
                    <img
                      src={athlete.photoUrl}
                      alt={athlete.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-bold bg-white/90 dark:bg-[#0a2e21]/80 text-[#17352A] dark:text-white shadow-sm border border-stone-200 dark:border-stone-800">
                      {athlete.sport}
                    </div>
                  </div>

                  <div>
                    <div className="text-[9px] sm:text-[11px] font-semibold text-[#006B3C] dark:text-emerald-400 truncate">
                      {athlete.primaryEventOrPosition}
                    </div>
                    <h4 className="font-display font-bold text-xs sm:text-base text-[#17352A] dark:text-white mt-0.5 line-clamp-1 sm:line-clamp-none">
                      {athlete.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#5F746A] dark:text-stone-400 mt-1 line-clamp-2 hidden xs:block">
                      {athlete.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-[#D8E9DE] dark:border-emerald-950 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-[#006B3C] dark:text-emerald-400">
                  <span>Profile</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filteredAthletes.length === 0 && (
            <div className="text-center py-12 p-8 rounded-2xl border border-dashed border-[#D8E9DE] dark:border-emerald-900/30">
              <p className="text-sm text-[#5F746A] dark:text-stone-400">No sporting legend matches your search.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-bold text-[#008751] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* 6. Tab 3: VERIFIED NATIONAL MEDAL WALL */}
      {activeTab === 'records' && (
        <div className="space-y-8 mb-16">
          <div className="p-6 rounded-2xl bg-[#F4FBF6] dark:bg-[#114a38] border border-[#D8E9DE] dark:border-emerald-900/40">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17352A] dark:text-white mb-2">
              🥇 NIGERIA'S NATIONAL MEDAL WALL & CHAMPIONSHIP ARCHIVE
            </h3>
            <p className="text-xs sm:text-sm text-[#5F746A] dark:text-stone-300 leading-relaxed">
              Official historical tally of Nigeria's podium achievements across the Olympic Games, Paralympic Games,
              Africa Cup of Nations, and the FIFA World Cup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Olympics */}
            <div className="p-6 rounded-2xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-[#006B3C] dark:text-emerald-400">
                  Olympic Games
                </span>
                <span className="text-xs text-stone-400">Since 1952</span>
              </div>
              <div className="text-3xl font-display font-bold text-[#17352A] dark:text-white">
                {NIGERIA_MEDAL_WALL.olympics.total} <span className="text-sm font-normal text-stone-500">Medals</span>
              </div>
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#D8E9DE] dark:border-emerald-950 text-center">
                <div>
                  <div className="text-lg font-bold text-amber-600 dark:text-amber-400">{NIGERIA_MEDAL_WALL.olympics.gold}</div>
                  <div className="text-[10px] text-stone-400 uppercase">🥇 Gold</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-500 dark:text-slate-300">{NIGERIA_MEDAL_WALL.olympics.silver}</div>
                  <div className="text-[10px] text-stone-400 uppercase">🥈 Silver</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-amber-800 dark:text-amber-600">{NIGERIA_MEDAL_WALL.olympics.bronze}</div>
                  <div className="text-[10px] text-stone-400 uppercase">🥉 Bronze</div>
                </div>
              </div>
              <div className="text-[11px] text-[#5F746A] dark:text-stone-400">
                First medal won by Nojim Maiyegun in boxing (Tokyo 1964).
              </div>
            </div>

            {/* Paralympics */}
            <div className="p-6 rounded-2xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-[#006B3C] dark:text-emerald-400">
                  Paralympic Games
                </span>
                <span className="text-xs text-stone-400">Since 1992</span>
              </div>
              <div className="text-3xl font-display font-bold text-[#17352A] dark:text-white">
                {NIGERIA_MEDAL_WALL.paralympics.total}+ <span className="text-sm font-normal text-stone-500">Medals</span>
              </div>
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#D8E9DE] dark:border-emerald-950 text-center">
                <div>
                  <div className="text-lg font-bold text-amber-600 dark:text-amber-400">{NIGERIA_MEDAL_WALL.paralympics.gold}</div>
                  <div className="text-[10px] text-stone-400 uppercase">🥇 Gold</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-500 dark:text-slate-300">{NIGERIA_MEDAL_WALL.paralympics.silver}</div>
                  <div className="text-[10px] text-stone-400 uppercase">🥈 Silver</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-amber-800 dark:text-amber-600">{NIGERIA_MEDAL_WALL.paralympics.bronze}</div>
                  <div className="text-[10px] text-stone-400 uppercase">🥉 Bronze</div>
                </div>
              </div>
              <div className="text-[11px] text-[#5F746A] dark:text-stone-400">
                Pioneering powerlifting powerhouse in global Paralympic history.
              </div>
            </div>

            {/* AFCON */}
            <div className="p-6 rounded-2xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-[#006B3C] dark:text-emerald-400">
                  Africa Cup of Nations
                </span>
                <span className="text-xs text-stone-400">CAF</span>
              </div>
              <div className="text-3xl font-display font-bold text-[#17352A] dark:text-white">
                {NIGERIA_MEDAL_WALL.afcon.titles} <span className="text-sm font-normal text-stone-500">Titles</span>
              </div>
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#D8E9DE] dark:border-emerald-950 text-center">
                <div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">1980</div>
                  <div className="text-[10px] text-stone-400 uppercase">Lagos</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">1994</div>
                  <div className="text-[10px] text-stone-400 uppercase">Tunis</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">2013</div>
                  <div className="text-[10px] text-stone-400 uppercase">Johannesburg</div>
                </div>
              </div>
              <div className="text-[11px] text-[#5F746A] dark:text-stone-400">
                16 total tournament podium finishes (5 Silver, 8 Bronze).
              </div>
            </div>

            {/* FIFA World Cup */}
            <div className="p-6 rounded-2xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-[#006B3C] dark:text-emerald-400">
                  FIFA World Cup
                </span>
                <span className="text-xs text-stone-400">FIFA</span>
              </div>
              <div className="text-3xl font-display font-bold text-[#17352A] dark:text-white">
                {NIGERIA_MEDAL_WALL.worldCup.appearances} <span className="text-sm font-normal text-stone-500">Appearances</span>
              </div>
              <div className="py-3 border-y border-[#D8E9DE] dark:border-emerald-950 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-400">Best Finish:</span>
                  <span className="font-semibold text-[#17352A] dark:text-stone-200">Round of 16 (x3)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Top Scorer:</span>
                  <span className="font-semibold text-[#17352A] dark:text-stone-200">Ahmed Musa (4)</span>
                </div>
              </div>
              <div className="text-[11px] text-[#5F746A] dark:text-stone-400">
                First goal scored by Rashidi Yekini on June 21, 1994 vs Bulgaria.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Tab 4: GREAT MOMENTS TIMELINE */}
      {activeTab === 'timeline' && (
        <div className="space-y-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#F4FBF6] dark:bg-[#114a38] border border-[#D8E9DE] dark:border-emerald-900/40">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17352A] dark:text-white mb-2">
              ⏳ GREAT MOMENTS IN NIGERIAN SPORT (1957–TODAY)
            </h3>
            <p className="text-xs sm:text-sm text-[#5F746A] dark:text-stone-300 leading-relaxed">
              Historical milestones that defined Nigerian national pride, from world boxing belts in Paris to track
              records in Oregon.
            </p>
          </div>

          <div className="relative border-l-2 border-[#D8E9DE] dark:border-emerald-900/40 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
            {SPORTS_MOMENTS_TIMELINE.map((evt, idx) => (
              <div key={idx} className="relative group">
                {/* Node pin */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#008751] border-2 border-white dark:border-[#114a38] shadow" />

                <div className="p-5 rounded-xl border border-[#D8E9DE] dark:border-emerald-900/30 bg-white dark:bg-[#145742] space-y-2 hover:border-[#008751] transition-colors">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-[#EAF7EF] dark:bg-emerald-950 font-bold text-[#006B3C] dark:text-emerald-400">
                      {evt.year}
                    </span>
                    <span className="text-stone-400">·</span>
                    <span className="text-stone-500 font-medium">{evt.sport}</span>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-[#17352A] dark:text-white">
                    {evt.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#274538] dark:text-stone-300 leading-relaxed font-editorial">
                    {evt.summary}
                  </p>

                  <div className="pt-2 text-xs text-[#006B3C] dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" />
                    <span>Impact: {evt.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Profile Modal */}
      <AthleteProfileModal athlete={selectedAthlete} onClose={() => setSelectedAthlete(null)} />
    </section>
  );
};
