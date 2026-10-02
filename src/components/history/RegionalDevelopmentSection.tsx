import React, { useState } from 'react';
import {
  REGIONS_DATA,
  REGIONAL_TIMELINE,
  REGIONAL_LEADERS,
  LANDMARK_ACHIEVEMENTS,
  RegionData,
  RegionalLeader,
  LandmarkAchievement,
  RegionalTimelineEvent,
} from '../../data/regionalHistory';
import {
  Landmark,
  Building,
  GraduationCap,
  Calendar,
  Layers,
  MapPin,
  ExternalLink,
  ChevronRight,
  Shield,
  Award,
  Sparkles,
  BookOpen,
  X,
  Compass,
  ArrowRight,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';

export const RegionalDevelopmentSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [selectedLeader, setSelectedLeader] = useState<RegionalLeader | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<LandmarkAchievement | null>(null);
  const [activeTimelineEvent, setActiveTimelineEvent] = useState<RegionalTimelineEvent>(REGIONAL_TIMELINE[0]);
  const [activeLeaderTab, setActiveLeaderTab] = useState<'All' | 'Western Region' | 'Northern Region' | 'Eastern Region'>('All');
  const [activeAchievementCategory, setActiveAchievementCategory] = useState<string>('All');

  const filteredLeaders = activeLeaderTab === 'All'
    ? REGIONAL_LEADERS
    : REGIONAL_LEADERS.filter((l) => l.region === activeLeaderTab);

  const achievementCategories = ['All', 'Education', 'Infrastructure', 'Industry', 'Broadcasting', 'Finance', 'Agriculture'];

  const filteredAchievements = activeAchievementCategory === 'All'
    ? LANDMARK_ACHIEVEMENTS
    : LANDMARK_ACHIEVEMENTS.filter((a) => a.category === activeAchievementCategory);

  return (
    <section id="regional-history" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* 1. SECTION HEADER */}
      <div className="mb-12 pb-8 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
          <Layers className="h-4 w-4" />
          <span>Regional Federalism & National Foundations (1939–1967)</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <NigeriaEmblem size="md" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            NIGERIA'S REGIONAL DEVELOPMENT HISTORY
          </h2>
        </div>
        <p className="font-editorial text-lg sm:text-xl text-emerald-300/90 italic mt-2">
          "Discover the leaders, institutions, ideas and achievements that shaped Nigeria before and around independence."
        </p>
        <p className="text-sm text-stone-300 leading-relaxed mt-4 max-w-3xl">
          Nigeria's regional system played an important role in the country's political, educational, agricultural and industrial development before the military restructuring of the regions. Between 1939 and 1967, the Western, Northern, and Eastern Regions developed distinctive development blueprints that catalyzed foundational institutions, public corporations, agricultural estates, and industrial hubs across the federation.
        </p>
      </div>

      {/* 2. THREE MAIN REGION CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {REGIONS_DATA.map((region) => (
          <div
            key={region.id}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-[#165e47] to-[#0d3d2e] p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/30"
          >
            <div>
              {/* Region Pill & Period */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                  {region.period}
                </span>
                <span className="text-[10px] text-stone-400 font-mono">First Republic Era</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {region.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-6">
                {region.description}
              </p>

              {/* Major Leaders */}
              <div className="mb-5 rounded-2xl bg-black/40 p-4 border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                  Featured Regional Leaders:
                </span>
                <ul className="space-y-1">
                  {region.leaders.slice(0, 5).map((ldr, idx) => (
                    <li key={idx} className="text-xs text-stone-300 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{ldr}</span>
                    </li>
                  ))}
                  {region.leaders.length > 5 && (
                    <li className="text-[11px] text-stone-400 italic pl-3.5">
                      + {region.leaders.length - 5} other documented leaders
                    </li>
                  )}
                </ul>
              </div>

              {/* Major Achievements Preview */}
              <div className="mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-2">
                  Key Achievements & Institutions:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {region.achievements.slice(0, 5).map((ach, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1 text-[11px] text-stone-300"
                    >
                      {ach}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Explore History Action */}
            <div className="pt-4 border-t border-white/10 mt-2">
              <button
                onClick={() => setSelectedRegion(region)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-2.5 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500 hover:text-stone-950"
              >
                <span>Explore {region.name} History</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. SOUTHERN NIGERIA BEFORE 1939 CONTEXT CARD */}
      <div className="mb-16 rounded-3xl border border-amber-500/20 bg-[#145742] p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Info className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display text-lg font-bold text-amber-300">
                SOUTHERN NIGERIA BEFORE 1939
              </h3>
              <span className="text-[10px] uppercase tracking-wider rounded bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-amber-400 font-semibold">
                Historical Administrative Context
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mt-2">
              Before the creation of the Western and Eastern Regions in 1939, southern Nigeria was administered through the <strong>Southern Provinces</strong>. This context is included to help visitors understand the historical transition from colonial administrative structures to Nigeria's regional system. 
            </p>
            <div className="mt-3 p-3 rounded-xl bg-black/40 border border-amber-500/15 text-xs text-stone-400">
              <strong className="text-amber-300">Important Constitutional Note:</strong> "Southern Nigeria" refers to an earlier administrative period and should <strong>not</strong> be treated as a fourth First Republic region alongside North, West, and East.
            </div>
          </div>
        </div>
      </div>

      {/* 4. FEATURED PROJECTS: COCOA HOUSE, AHMADU BELLO UNIVERSITY, UNN */}
      <div className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
              Flagship Regional Landmarks
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Pinnacle Regional Projects
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1: Cocoa House */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#114a38] p-6 hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                  Western Region
                </span>
                <span className="text-stone-400 font-mono">Completed 1964 · Commissioned 1965</span>
              </div>
              <h4 className="font-display text-xl font-bold text-white mb-1">
                COCOA HOUSE
              </h4>
              <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-3">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>Ibadan, Western Nigeria</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/5 mb-4">
                <strong>Historical Record:</strong> "Cocoa House was developed as part of the Western Region's economic programme. Its development originated during the earlier Awolowo administration, construction was completed in 1964, and it was commissioned in 1965 during the administration of Samuel Ladoke Akintola."
              </p>
              <div className="text-[11px] text-stone-400 space-y-1 mb-4">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>26-storey landmark built from regional cocoa revenue</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Tallest skyscraper in tropical Africa at commissioning</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedRegion(REGIONS_DATA[0])}
              className="w-full rounded-xl bg-white/5 border border-white/10 py-2.5 text-xs font-semibold text-stone-200 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 transition-all"
            >
              Read Full Record
            </button>
          </div>

          {/* Project 2: Ahmadu Bello University */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#114a38] p-6 hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                  Northern Region
                </span>
                <span className="text-stone-400 font-mono">1961 Enacted · 1962 Opened</span>
              </div>
              <h4 className="font-display text-xl font-bold text-white mb-1">
                AHMADU BELLO UNIVERSITY
              </h4>
              <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-3">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>Zaria, Northern Nigeria</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/5 mb-4">
                <strong>Historical Record:</strong> "The Northern Region government established the university through legislation in 1961, and it opened in 1962."
              </p>
              <div className="text-[11px] text-stone-400 space-y-1 mb-4">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Major higher-education institution supporting professional education</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Comprehensive faculties of agriculture, medicine, engineering & administration</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedRegion(REGIONS_DATA[1])}
              className="w-full rounded-xl bg-white/5 border border-white/10 py-2.5 text-xs font-semibold text-stone-200 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 transition-all"
            >
              Read Full Record
            </button>
          </div>

          {/* Project 3: University of Nigeria, Nsukka */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#114a38] p-6 hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                  Eastern Region
                </span>
                <span className="text-stone-400 font-mono">1955 Enacted · 1960 Opened</span>
              </div>
              <h4 className="font-display text-xl font-bold text-white mb-1">
                UNIVERSITY OF NIGERIA, NSUKKA
              </h4>
              <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-3">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>Nsukka, Eastern Nigeria</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/5 mb-4">
                <strong>Historical Record:</strong> "The Eastern Region government passed legislation establishing the university in 1955, and the institution opened at Nsukka in 1960."
              </p>
              <div className="text-[11px] text-stone-400 space-y-1 mb-4">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>First autonomous degree-granting indigenous university in Nigeria</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Conceived to restore human dignity through science, arts & vocations</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedRegion(REGIONS_DATA[2])}
              className="w-full rounded-xl bg-white/5 border border-white/10 py-2.5 text-xs font-semibold text-stone-200 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 transition-all"
            >
              Read Full Record
            </button>
          </div>
        </div>
      </div>

      {/* 5. MICHAEL OKPARA DEVELOPMENT ERA SUBSECTION */}
      <div className="mb-16 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#06150d] via-[#040c07] to-[#0d3d2e] p-7 sm:p-9 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
              <Sparkles className="h-4 w-4" />
              <span>Special Feature: Eastern Regional Industrialization</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              THE MICHAEL OKPARA DEVELOPMENT ERA
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Period: <strong>1959–1966</strong> · Rapid agricultural expansion, cooperative farm settlements, and industrial diversification
            </p>
          </div>
          <span className="shrink-0 rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1.5 text-xs font-bold text-emerald-300">
            Agrarian-Industrial Growth Model
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Agriculture */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Agriculture</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-200">
              <li className="flex items-center gap-2">· Farm settlements (Ulonna, Ohaji, Boki, Igbariam)</li>
              <li className="flex items-center gap-2">· Palm production & modern processing mills</li>
              <li className="flex items-center gap-2">· High-yield rubber plantations (Cross River)</li>
              <li className="flex items-center gap-2">· Commercial cocoa expansion in Ikom</li>
              <li className="flex items-center gap-2">· Abakaliki rice cultivation & cooperatives</li>
              <li className="flex items-center gap-2">· Livestock breeding schemes (Obudu Cattle Ranch)</li>
            </ul>
          </div>

          {/* Industry */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Industry & Manufacturing</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-200">
              <li className="flex items-center gap-2">· Trans-Amadi Industrial Area (Port Harcourt)</li>
              <li className="flex items-center gap-2">· Nkalagu Cement Company (Nigercem)</li>
              <li className="flex items-center gap-2">· Michelin Tire Manufacturing Plant</li>
              <li className="flex items-center gap-2">· Aba & Onitsha textile manufacturing</li>
              <li className="flex items-center gap-2">· Golden Guinea Brewery in Umuahia</li>
              <li className="flex items-center gap-2">· Regional shoe & ceramics manufacturing</li>
              <li className="flex items-center gap-2">· Gas-related industries & Afam power</li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Infrastructure & Urban Development</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-200">
              <li className="flex items-center gap-2">· Inter-provincial paved asphalt road grid</li>
              <li className="flex items-center gap-2">· Regional clean pipe-borne water supply</li>
              <li className="flex items-center gap-2">· Network of community cottage hospitals</li>
              <li className="flex items-center gap-2">· Deep-water Port Harcourt port expansion</li>
              <li className="flex items-center gap-2">· Urban planning in Enugu, Aba, and Port Harcourt</li>
              <li className="flex items-center gap-2">· Hotel Presidential (Enugu & Port Harcourt)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 6. NEUTRAL REGIONAL COMPARISON */}
      <div className="mb-16 rounded-3xl border border-white/10 bg-[#145742] p-7 sm:p-9">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
            <Compass className="h-4 w-4" />
            <span>Comparative Historical Analysis</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            THREE REGIONS — DIFFERENT DEVELOPMENT PRIORITIES
          </h3>
          <p className="text-xs text-stone-400 mt-1 max-w-2xl">
            Each region tailored its development priorities to its unique geography, resources, and social objectives.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* West */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              WESTERN REGION
            </span>
            <div className="font-display text-sm font-semibold text-white mb-3">
              Education • Cocoa • Broadcasting • Housing • Regional Enterprise
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Prioritized universal literacy, pioneering public broadcasting, commercial cocoa marketing surpluses, and planned urban housing schemes.
            </p>
          </div>

          {/* North */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              NORTHERN REGION
            </span>
            <div className="font-display text-sm font-semibold text-white mb-3">
              Education • Agriculture • Livestock • Administration • Infrastructure
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Focused on extensive groundnut and cotton commodity cultivation, livestock immunization, administrative training, and mass adult literacy.
            </p>
          </div>

          {/* East */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              EASTERN REGION
            </span>
            <div className="font-display text-sm font-semibold text-white mb-3">
              Education • Agriculture • Industry • Manufacturing • Regional Enterprise
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Emphasized palm produce modernization, farm settlement cooperatives, heavy manufacturing at Trans-Amadi, and autonomous tertiary education.
            </p>
          </div>
        </div>

        {/* Neutrality Disclaimer */}
        <div className="rounded-xl bg-[#0a2e21]/50 border border-white/5 p-3 text-[11px] text-stone-400 flex items-center gap-2.5">
          <Shield className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Neutrality Principle:</strong> This presentation illustrates documented historical differences in developmental strategy. It is not a ranking, score, or assessment of regional superiority.
          </span>
        </div>
      </div>

      {/* 7. INTERACTIVE REGIONAL TIMELINE */}
      <div className="mb-16">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
              Historical Milestones
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Regional Development Timeline (1939–1967)
            </h3>
          </div>
          <span className="text-xs text-stone-400">Click any milestone to inspect verified details</span>
        </div>

        {/* Scrollable Timeline Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin">
          {REGIONAL_TIMELINE.map((item, idx) => {
            const isSelected = activeTimelineEvent.year === item.year && activeTimelineEvent.title === item.title;
            return (
              <button
                key={idx}
                onClick={() => setActiveTimelineEvent(item)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-emerald-500 text-stone-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>{item.year}</span>
                <span className="opacity-60 text-[10px]">· {item.region}</span>
              </button>
            );
          })}
        </div>

        {/* Active Timeline Event Detail Card */}
        <div className="rounded-3xl border border-emerald-500/30 bg-[#145742] p-6 sm:p-8 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 font-mono text-sm font-bold text-emerald-400">
                {activeTimelineEvent.year}
              </span>
              <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                {activeTimelineEvent.region}
              </span>
            </div>
            <span className="text-[11px] text-stone-500">Verified Historical Archive</span>
          </div>

          <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            {activeTimelineEvent.title}
          </h4>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
            {activeTimelineEvent.description}
          </p>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-[11px] text-stone-400">
            <span className="font-semibold text-emerald-400">Documented Sources:</span>
            {activeTimelineEvent.sources.map((src, i) => (
              <span key={i} className="rounded bg-black/40 px-2 py-0.5 border border-white/5">
                {src}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 8. LEADERS OF THE REGIONAL ERA MINI-CARDS */}
      <div className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
              Historical Statesmen & Architects
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Leaders of the Regional Era
            </h3>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {(['All', 'Western Region', 'Northern Region', 'Eastern Region'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveLeaderTab(tab)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeLeaderTab === tab
                    ? 'bg-emerald-500 text-stone-950'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeaders.map((ldr) => (
            <div
              key={ldr.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#165e47] p-5 hover:border-emerald-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-3">
                  <span className="text-emerald-400 uppercase tracking-wider font-semibold">
                    {ldr.region}
                  </span>
                  <span className="text-stone-400 font-mono">{ldr.period}</span>
                </div>

                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={ldr.photoUrl}
                    alt={ldr.name}
                    className="h-14 w-14 rounded-2xl object-cover border border-white/10 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-display text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {ldr.name}
                    </h4>
                    <span className="text-[11px] text-stone-400 block line-clamp-1">
                      {ldr.position}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed font-editorial italic bg-black/40 p-3 rounded-xl border border-white/5 mb-4 line-clamp-2">
                  "{ldr.historicalRole}"
                </p>

                {/* 2-4 Documented Contributions */}
                <div className="space-y-1 mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block">
                    Documented Contributions:
                  </span>
                  {ldr.contributions.slice(0, 3).map((c, i) => (
                    <div key={i} className="text-xs text-stone-300 flex items-start gap-1.5">
                      <span className="text-emerald-500 mt-1">·</span>
                      <span className="line-clamp-1">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedLeader(ldr)}
                className="w-full rounded-xl bg-white/5 border border-white/10 py-2 text-xs font-semibold text-stone-300 hover:bg-emerald-500 hover:text-stone-950 transition-all mt-2"
              >
                View Record
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 9. LANDMARK ACHIEVEMENTS MINI-CARDS GRID */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
              Historic Enduring Legacies
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Landmark Achievements Grid
            </h3>
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {achievementCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveAchievementCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeAchievementCategory === cat
                    ? 'bg-emerald-500 text-stone-950'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((ach) => (
            <div
              key={ach.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#165e47] p-5 hover:border-emerald-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="text-emerald-400 uppercase tracking-wider font-semibold">
                    {ach.region}
                  </span>
                  <span className="text-stone-400 font-mono">{ach.year}</span>
                </div>

                <h4 className="font-display text-base font-bold text-white mb-1">
                  {ach.title}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-3">
                  <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{ach.location}</span>
                  <span>·</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-stone-300">
                    {ach.category}
                  </span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  {ach.description}
                </p>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-stone-400 mb-3">
                  <span className="text-emerald-400 font-semibold block mb-0.5">Historical Significance:</span>
                  {ach.significance}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 text-[10px] text-stone-500 truncate">
                Sources: {ach.sources.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REGION DETAIL MODAL */}
      {selectedRegion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a2e21]/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#114a38] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedRegion(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-stone-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-semibold text-emerald-400 uppercase">
                {selectedRegion.period}
              </span>
              <span className="text-xs text-stone-400">{selectedRegion.badge}</span>
            </div>

            <h3 className="font-display text-3xl font-extrabold text-white mb-2">
              {selectedRegion.name}
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed mb-6">
              {selectedRegion.description}
            </p>

            {/* Featured Project */}
            <div className="mb-6 rounded-2xl bg-[#0a2e21]/50 border border-emerald-500/30 p-5">
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                Featured Flagship Project
              </span>
              <h4 className="font-display text-xl font-bold text-white mb-1">
                {selectedRegion.featuredProject.title}
              </h4>
              <div className="text-xs text-stone-400 mb-2">
                {selectedRegion.featuredProject.location} · {selectedRegion.featuredProject.dates}
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mb-3">
                {selectedRegion.featuredProject.description}
              </p>
              <ul className="space-y-1 text-xs text-stone-400">
                {selectedRegion.featuredProject.details.map((dt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{dt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-white/10 text-[10px] text-stone-500">
                Attribution Source: {selectedRegion.featuredProject.sourceAttribution}
              </div>
            </div>

            {/* Key Institutions */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Key Regional Institutions Founded
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedRegion.keyInstitutions.map((inst, i) => (
                  <div key={i} className="rounded-xl bg-white/5 border border-white/5 p-3 text-xs text-stone-200 flex items-center gap-2">
                    <Building className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{inst}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Sources */}
            <div className="pt-4 border-t border-white/10 text-xs text-stone-400">
              <span className="font-bold text-emerald-400 block mb-1">Verified Historical Sources:</span>
              <ul className="list-disc pl-5 space-y-0.5 text-[11px] text-stone-400">
                {selectedRegion.sources.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* LEADER DETAIL MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a2e21]/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#114a38] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-stone-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedLeader.photoUrl}
                alt={selectedLeader.name}
                className="h-20 w-20 rounded-2xl object-cover border border-emerald-500/30 shrink-0"
              />
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block">
                  {selectedLeader.region} · {selectedLeader.period}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {selectedLeader.name}
                </h3>
                <span className="text-xs text-stone-300 font-medium">
                  {selectedLeader.position}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/5 mb-4">
              {selectedLeader.historicalRole}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Documented Achievements & Contributions:
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-200">
                {selectedLeader.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-stone-400">
              <span className="font-bold text-white block mb-1">Archival Citations:</span>
              <span>{selectedLeader.sources.join(' · ')}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
