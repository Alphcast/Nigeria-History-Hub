import React, { useState } from 'react';
import {
  PRESIDENTS_AND_LEADERS,
  LeaderRecord,
  DID_YOU_KNOW_FACTS,
  NATIONAL_MILESTONES,
} from '../../data/presidents';
import {
  Landmark,
  Calendar,
  Shield,
  ExternalLink,
  Filter,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  Repeat,
  Compass,
  Building,
  GraduationCap,
  Truck,
  TrendingUp,
  Award,
} from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';

export const PresidentsSection: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderRecord | null>(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState<'All' | 'Presidents' | 'Heads of State' | 'Other Leadership'>('All');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFactIndex, setActiveFactIndex] = useState<number>(0);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  const topicFilters = [
    'All',
    'Civilian Governments',
    'Military Governments',
    'Infrastructure',
    'Education',
    'Economy',
    'Agriculture',
    'Democracy',
    'Constitutional History',
    'Foreign Policy',
    'Technology',
    'Security',
  ];

  // Filtering leaders
  const filteredLeaders = PRESIDENTS_AND_LEADERS.filter((leader) => {
    // 1. Office Category Tab
    if (activeCategoryTab === 'Presidents' && leader.office !== 'President') return false;
    if (activeCategoryTab === 'Heads of State' && leader.office !== 'Head of State') return false;
    if (activeCategoryTab === 'Other Leadership' && leader.office !== 'Prime Minister' && leader.office !== 'Head of Interim National Government') return false;

    // 2. Topic Filter
    if (selectedTopicFilter !== 'All') {
      if (selectedTopicFilter === 'Civilian Governments' && leader.governmentType !== 'Civilian') return false;
      if (selectedTopicFilter === 'Military Governments' && leader.governmentType !== 'Military') return false;
      if (
        selectedTopicFilter !== 'Civilian Governments' &&
        selectedTopicFilter !== 'Military Governments' &&
        !leader.impactCategories.includes(selectedTopicFilter)
      ) {
        return false;
      }
    }

    // 3. Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = leader.name.toLowerCase().includes(q);
      const matchOffice = leader.office.toLowerCase().includes(q);
      const matchState = leader.state.toLowerCase().includes(q);
      const matchEra = leader.era.toLowerCase().includes(q);
      const matchParty = leader.politicalPartyOrBranch.toLowerCase().includes(q);
      if (!matchName && !matchOffice && !matchState && !matchEra && !matchParty) {
        return false;
      }
    }

    return true;
  });

  return (
    <section id="leaders" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* 1. SECTION HEADER */}
      <div className="mb-10 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
          <Landmark className="h-4 w-4" />
          <span>National Executive Leadership (1960 – 2026)</span>
        </div>
        <div className="flex items-center gap-3">
          <NigeriaEmblem size="md" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            NIGERIA'S PRESIDENTS & HEADS OF STATE
          </h2>
        </div>
        <h3 className="font-editorial text-lg sm:text-xl text-emerald-300 italic mt-1">
          “Leadership, History, Milestones & National Impact”
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mt-4 max-w-3xl">
          From independence in 1960 to the present day, Nigeria has been led by presidents, prime ministers, military heads of state and an interim head of state. This section preserves a factual historical record of the people who have occupied Nigeria's highest national offices and highlights major developments associated with their periods in office.
        </p>

        {/* Small Historical Note */}
        <div className="mt-4 rounded-2xl bg-[#145742] border border-white/10 p-3.5 text-xs text-stone-400 flex items-start gap-3">
          <AlertCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-300">Constitutional Note:</strong> Nigeria's political leadership has changed through civilian governments, military administrations and democratic transitions. The constitutional title and role of the national leader differed across these periods.
          </div>
        </div>
      </div>

      {/* 2. HISTORICAL OFFICE EXPLAINER: "WHAT WAS THE DIFFERENCE?" */}
      <div className="mb-14 rounded-3xl border border-white/10 bg-[#165e47] p-6 sm:p-8">
        <div className="mb-4">
          <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">
            Constitutional Foundations
          </span>
          <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
            WHAT WAS THE DIFFERENCE?
          </h4>
          <p className="text-xs text-stone-400 mt-1">
            Why Nigeria had Presidents, Prime Ministers and Heads of State across different constitutional dispensations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* President */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              PRESIDENT
            </span>
            <div className="text-xs font-semibold text-white mb-2">Constitutional Republics</div>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              In 1963, the President was a ceremonial Head of State under parliamentary rules. In 1979 and 1999 (Second & Fourth Republics), the President became the executive Head of State and Government, Commander-in-Chief directly elected by citizens.
            </p>
          </div>

          {/* Prime Minister */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              PRIME MINISTER
            </span>
            <div className="text-xs font-semibold text-white mb-2">First Republic (1960–1966)</div>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Nigeria operated a Westminster parliamentary system. Sir Abubakar Tafawa Balewa was the executive Prime Minister leading cabinet government from Parliament, while the Head of State remained ceremonial.
            </p>
          </div>

          {/* Head of State */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              HEAD OF STATE
            </span>
            <div className="text-xs font-semibold text-white mb-2">Military Administrations</div>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Used during military governments (1966–1979 and 1983–1999). Military leaders derived authority through military decrees and presided over governing bodies like the Supreme Military Council or AFRC.
            </p>
          </div>

          {/* Interim Head of State */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              INTERIM HEAD OF STATE
            </span>
            <div className="text-xs font-semibold text-white mb-2">1993 Transition Context</div>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Chief Ernest Shonekan led the 83-day Interim National Government (ING) following the annulled June 12 presidential election, acting as a non-elected civilian transitional head alongside military service chiefs.
            </p>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE TIMELINE: "FROM INDEPENDENCE TO TODAY" */}
      <div className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
              Chronological Leadership Lineage
            </span>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
              FROM INDEPENDENCE TO TODAY (1960 – 2026)
            </h4>
          </div>
          <span className="text-xs text-stone-400">Click any leader to open their full impact record</span>
        </div>

        {/* Horizontal Timeline Track */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin">
          {PRESIDENTS_AND_LEADERS.map((leader) => (
            <button
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="flex shrink-0 flex-col items-start rounded-2xl border border-white/10 bg-[#165e47] p-3 text-left transition-all hover:border-emerald-500/50 hover:bg-emerald-950/20 group w-44"
            >
              <div className="flex items-center justify-between w-full text-[10px] mb-1.5 font-mono text-emerald-400">
                <span>{leader.term}</span>
                <span className="rounded bg-white/5 px-1 py-0.5 text-[9px] text-stone-400">
                  {leader.governmentType}
                </span>
              </div>
              <div className="font-display text-xs font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                {leader.name}
              </div>
              <div className="text-[10px] text-stone-400 truncate w-full mt-0.5">
                {leader.office}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 4. LEADERS WHO SERVED IN MULTIPLE GOVERNMENTS HIGHLIGHT */}
      <div className="mb-14 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-[#06150d] via-[#051109] to-[#06150d] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <Repeat className="h-5 w-5 text-emerald-400" />
          <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
            🔄 LEADERS WHO SERVED IN MULTIPLE GOVERNMENTS
          </h4>
        </div>
        <p className="text-xs text-stone-300 max-w-2xl mb-6">
          Two statesmen in Nigerian political history occupied the nation’s highest executive office in two completely different constitutional eras — first as military Heads of State, and subsequently as elected civilian Presidents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Obasanjo */}
          <div className="rounded-2xl bg-[#0a2e21]/50 border border-white/10 p-5">
            <h5 className="font-display text-base font-bold text-white mb-2">
              Chief Olusegun Obasanjo
            </h5>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-emerald-400 font-bold block">1976 – 1979: Military Head of State</span>
                <span className="text-stone-300 text-[11px]">
                  Governed via Supreme Military Council following Murtala Mohammed; voluntary transition to 1979 civilian democracy.
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-emerald-400 font-bold block">1999 – 2007: Elected Civilian President</span>
                <span className="text-stone-300 text-[11px]">
                  Two-term Fourth Republic president; Paris Club debt relief, GSM mobile auction, banking consolidation.
                </span>
              </div>
            </div>
          </div>

          {/* Buhari */}
          <div className="rounded-2xl bg-[#0a2e21]/50 border border-white/10 p-5">
            <h5 className="font-display text-base font-bold text-white mb-2">
              Muhammadu Buhari
            </h5>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-emerald-400 font-bold block">1983 – 1985: Military Head of State</span>
                <span className="text-stone-300 text-[11px]">
                  War Against Indiscipline (WAI), strict austerity, counter-trade arrangements, currency redesign.
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-emerald-400 font-bold block">2015 – 2023: Elected Civilian President</span>
                <span className="text-stone-300 text-[11px]">
                  Two-term Fourth Republic president; Second Niger Bridge, Lagos-Ibadan standard rail, Petroleum Industry Act.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. SEARCH & CATEGORY FILTERS */}
      <div className="mb-8 space-y-4">
        {/* Search input + Office segmentation */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Office Category Segmentation Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {(['All', 'Presidents', 'Heads of State', 'Other Leadership'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategoryTab(tab)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategoryTab === tab
                    ? 'bg-emerald-500 text-stone-950 shadow-md shadow-emerald-500/20'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Nigerian Leader (e.g. Buhari, Obasanjo, Azikiwe)..."
              className="w-full rounded-xl border border-white/10 bg-[#165e47] pl-10 pr-4 py-2 text-xs text-white placeholder-stone-500 focus:border-emerald-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Topic Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
          <span className="text-[10px] uppercase font-bold text-stone-500 mr-1 shrink-0">Filter Topic:</span>
          {topicFilters.map((flt) => (
            <button
              key={flt}
              onClick={() => setSelectedTopicFilter(flt)}
              className={`rounded-lg px-3 py-1.5 text-[11px] font-medium whitespace-nowrap transition-all ${
                selectedTopicFilter === flt
                  ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40'
                  : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-stone-200 border border-white/5'
              }`}
            >
              {flt}
            </button>
          ))}
        </div>
      </div>

      {/* 6. LEADERS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredLeaders.map((leader) => (
          <div
            key={leader.id}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#165e47] p-5 hover:border-emerald-500/40 transition-all shadow-lg"
          >
            <div>
              {/* Header Office & Term */}
              <div className="flex items-center justify-between text-[11px] mb-3">
                <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                  {leader.office}
                </span>
                <span className="font-mono text-stone-400">{leader.term}</span>
              </div>

              {/* Special Badge if present */}
              {leader.specialBadge && (
                <div className="mb-2">
                  <span className="inline-block rounded-md bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-[10px] font-bold text-amber-300">
                    {leader.specialBadge}
                  </span>
                </div>
              )}

              {/* Leader Photo & Name */}
              <div className="flex items-center gap-3.5 mb-3">
                <img
                  src={leader.photoUrl}
                  alt={leader.name}
                  className="h-16 w-16 rounded-2xl object-cover border border-white/10 shrink-0"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-display text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {leader.name}
                  </h4>
                  <div className="text-[11px] text-stone-400 flex items-center gap-1.5 mt-0.5">
                    <span>{leader.state} State</span>
                    <span>·</span>
                    <span className="rounded bg-white/5 px-1.5 py-0.2 text-[10px] text-stone-300">
                      {leader.era}
                    </span>
                  </div>
                </div>
              </div>

              {/* Short Summary */}
              <p className="text-xs text-stone-300 leading-relaxed font-editorial italic bg-black/40 p-3 rounded-xl border border-white/5 mb-3 line-clamp-3">
                "{leader.summary}"
              </p>

              {/* Documented Milestones Preview */}
              <div className="space-y-1 mb-3">
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block">
                  Documented Milestones:
                </span>
                {leader.majorEvents.slice(0, 2).map((evt, idx) => (
                  <div key={idx} className="text-xs text-stone-300 flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">·</span>
                    <span className="line-clamp-1">{evt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* View Impact Button */}
            <div className="pt-3 border-t border-white/10 mt-2">
              <button
                onClick={() => setSelectedLeader(leader)}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 py-2.5 text-xs font-semibold text-stone-200 transition-all hover:bg-emerald-500 hover:text-stone-950 hover:border-emerald-500"
              >
                <span>{leader.isCurrentAdmin ? 'VIEW IMPACT TO DATE' : 'VIEW IMPACT'}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 7. "DID YOU KNOW?" ROTATING CARDS */}
      <div className="mb-14 rounded-3xl border border-amber-500/20 bg-[#145742] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-amber-400" />
            <h4 className="font-display text-xl font-bold text-amber-300">
              🇳🇬 DID YOU KNOW?
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveFactIndex((prev) => (prev > 0 ? prev - 1 : DID_YOU_KNOW_FACTS.length - 1))}
              className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-stone-300 hover:text-white"
              aria-label="Previous fact"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-stone-400 font-mono">
              {activeFactIndex + 1} / {DID_YOU_KNOW_FACTS.length}
            </span>
            <button
              onClick={() => setActiveFactIndex((prev) => (prev < DID_YOU_KNOW_FACTS.length - 1 ? prev + 1 : 0))}
              className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-stone-300 hover:text-white"
              aria-label="Next fact"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="min-h-[70px] flex flex-col justify-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 mb-1">
            {DID_YOU_KNOW_FACTS[activeFactIndex].tag}
          </span>
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-editorial italic">
            "{DID_YOU_KNOW_FACTS[activeFactIndex].fact}"
          </p>
        </div>
      </div>

      {/* 8. NATIONAL ACHIEVEMENT TIMELINE */}
      <div className="mb-6 rounded-3xl border border-white/10 bg-[#165e47] p-6 sm:p-8">
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
            National Continuity
          </span>
          <h4 className="font-display text-2xl font-bold text-white">
            🇳🇬 MAJOR NATIONAL MILESTONES
          </h4>
          <p className="text-xs text-stone-400 mt-1">
            Foundational dates and institutional turning points in Nigerian constitutional history.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NATIONAL_MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-black/40 border border-white/5 p-4 hover:border-emerald-500/30 transition-all"
            >
              <span className="rounded font-mono text-xs font-bold text-emerald-400 block mb-1">
                {item.year}
              </span>
              <h5 className="font-display text-sm font-bold text-white mb-1.5">
                {item.title}
              </h5>
              <p className="text-xs text-stone-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 9. DETAILED "VIEW IMPACT" MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#114a38] p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-stone-400 hover:text-white z-10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Leader Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-white/10 mb-6">
              <img
                src={selectedLeader.photoUrl}
                alt={selectedLeader.name}
                className="h-24 w-24 rounded-2xl object-cover border border-emerald-500/30 shadow-md shrink-0"
              />
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-0.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {selectedLeader.office}
                  </span>
                  <span className="font-mono text-xs text-stone-400">
                    {selectedLeader.term} ({selectedLeader.periodStart} – {selectedLeader.periodEnd})
                  </span>
                  {selectedLeader.isCurrentAdmin && (
                    <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-[10px] font-bold text-amber-300">
                      {selectedLeader.lastUpdated}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedLeader.name}
                </h3>
                <div className="text-xs text-stone-400 mt-1 flex items-center gap-2">
                  <span>State of Origin: {selectedLeader.state}</span>
                  <span>·</span>
                  <span>Era: {selectedLeader.era} ({selectedLeader.governmentType})</span>
                  <span>·</span>
                  <span>Affiliation: {selectedLeader.politicalPartyOrBranch}</span>
                </div>
              </div>
            </div>

            {/* Section 1: Their Era */}
            <div className="mb-6 rounded-2xl bg-black/40 border border-white/10 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                1. Their Era & National Circumstances
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-editorial italic mb-3">
                "{selectedLeader.summary}"
              </p>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Major Historical Events During Administration:
                </span>
                {selectedLeader.majorEvents.map((evt, idx) => (
                  <div key={idx} className="text-xs text-stone-300 flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{evt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Major Policies & Initiatives */}
            <div className="mb-6 rounded-2xl bg-black/40 border border-white/10 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                2. Major Policies & Initiatives
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-200">
                {selectedLeader.documentedPolicies.map((pol, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{pol}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 & 4: Infrastructure & Economic History */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Infrastructure */}
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                  <Building className="h-3.5 w-3.5" />
                  <span>3. Infrastructure & Development</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {selectedLeader.infrastructure.map((inf, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 mt-0.5">·</span>
                      <span>{inf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Economic History */}
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>4. Economic History</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {selectedLeader.economy.map((ec, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 mt-0.5">·</span>
                      <span>{ec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 5: Democratic / Constitutional History */}
            <div className="mb-6 rounded-2xl bg-black/40 border border-white/10 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                5. Democratic & Constitutional History
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {selectedLeader.democraticConstitutional.map((dc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{dc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 6: Historical Impact */}
            <div className="mb-6 rounded-2xl bg-[#145742] border border-emerald-500/30 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                6. {selectedLeader.isCurrentAdmin ? 'Impact to Date' : 'Historical Impact'}
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-200">
                {selectedLeader.historicalImpact.map((hi, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hi}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7: Historical Debates & Criticism */}
            <div className="mb-6 rounded-2xl bg-[#0a2e21]/50 border border-white/10 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                7. Historical Debates & Criticism
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {selectedLeader.debates.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">·</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-[10px] text-stone-500">
                Recorded for academic neutrality: Documented criticisms and debates are distinguished from accepted factual events.
              </div>
            </div>

            {/* Section 8: Sources & Historical References */}
            <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  8. Sources & Historical References
                </h4>
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                  Verified Records
                </span>
              </div>
              <ul className="space-y-2 text-xs text-stone-300 mb-4">
                {selectedLeader.sources.map((src, idx) => (
                  <li key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                    <div>
                      <span className="font-semibold text-white">{src.title}</span>
                      <span className="text-[10px] text-stone-400 block">{src.sourceType}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">Archived</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
