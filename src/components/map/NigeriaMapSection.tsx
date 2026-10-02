import React, { useState } from 'react';
import { NIGERIA_STATES_DATA } from '../../data/states';
import { StateHeritage } from '../../types';
import { MapPin, Users, Landmark, Award, BookOpen, Sparkles } from 'lucide-react';

export const NigeriaMapSection: React.FC = () => {
  const [selectedStateCode, setSelectedStateCode] = useState<string>('LA'); // Default to Lagos

  const currentState = NIGERIA_STATES_DATA.find((s) => s.code === selectedStateCode) || NIGERIA_STATES_DATA[0];

  return (
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>Interactive Cartography of Heritage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Nigeria by State: 36 States & FCT
          </h2>
          <p className="text-sm text-stone-400 mt-2 max-w-2xl">
            Click any state across the six geopolitical zones to explore native heroes, historical contributions, landmarks, and recorded achievements.
          </p>
        </div>

        {/* State Quick Dropdown */}
        <div className="flex items-center gap-2 bg-[#165e47] p-2.5 rounded-2xl border border-white/10">
          <span className="text-xs text-stone-400">Select State:</span>
          <select
            value={selectedStateCode}
            onChange={(e) => setSelectedStateCode(e.target.value)}
            className="bg-[#0a2e21]/60 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-emerald-400 font-semibold focus:outline-none"
          >
            {NIGERIA_STATES_DATA.map((st) => (
              <option key={st.code} value={st.code}>
                {st.name} State ({st.capital})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Interactive Map Grid Selector */}
        <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#165e47] p-4 sm:p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-3 sm:mb-4">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              State Grid Navigator
            </span>
            <span className="text-xs text-stone-400">36 States + FCT</span>
          </div>

          {/* Clean 6-zone interactive buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5 sm:gap-2 max-h-[420px] sm:max-h-[460px] overflow-y-auto pr-1">
            {NIGERIA_STATES_DATA.map((st) => {
              const active = st.code === selectedStateCode;
              return (
                <button
                  key={st.code}
                  onClick={() => setSelectedStateCode(st.code)}
                  className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl border text-center transition-all active:scale-95 ${
                    active
                      ? 'border-emerald-400 bg-emerald-950/80 text-white shadow-md shadow-emerald-950/60 scale-102'
                      : 'border-white/5 bg-black/40 text-stone-300 hover:bg-white/5 hover:border-white/20'
                  }`}
                >
                  <span className={`text-[11px] sm:text-xs font-bold leading-tight ${active ? 'text-emerald-300' : 'text-white'} truncate w-full`}>
                    {st.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-stone-400 mt-0.5 truncate w-full">
                    {st.capital}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-stone-400">
            <span>Tap any state to inspect</span>
            <span className="text-emerald-400 font-mono">Zone: {currentState.zone}</span>
          </div>
        </div>

        {/* Right Column: Selected State Heritage Dossier */}
        <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-[#145742] p-4 sm:p-8 shadow-2xl">
          <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">
                {currentState.zone} Geopolitical Zone
              </span>
              <h3 className="font-display text-3xl font-bold text-white mt-1">
                {currentState.name} State
              </h3>
              <p className="text-xs text-stone-300 mt-0.5">Capital: {currentState.capital}</p>
            </div>
            <span className="rounded-xl bg-[#008751]/20 border border-[#008751]/40 px-3 py-1.5 font-display text-sm font-bold text-emerald-300">
              {currentState.code}
            </span>
          </div>

          {/* Historical Highlights */}
          <div className="mb-6">
            <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Historical Highlights</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-editorial bg-black/40 p-4 rounded-xl border border-white/5">
              {currentState.historicalHighlights}
            </p>
          </div>

          {/* Notable Personalities */}
          <div className="mb-6">
            <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-stone-300 font-semibold mb-2">
              <Users className="h-3.5 w-3.5 text-emerald-400" />
              <span>Documented Pioneers & Icons</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentState.famousPeople.map((person, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 text-xs text-emerald-200 font-medium"
                >
                  {person}
                </span>
              ))}
            </div>
          </div>

          {/* Cultural Contributions */}
          <div className="mb-6">
            <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-stone-300 font-semibold mb-2">
              <Landmark className="h-3.5 w-3.5 text-amber-400" />
              <span>Cultural & Civilizational Heritage</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-300">
              {currentState.culturalContributions.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notable Institutions & Records */}
          <div className="pt-4 border-t border-white/10">
            <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-stone-300 font-semibold mb-2">
              <Award className="h-3.5 w-3.5 text-emerald-400" />
              <span>Notable Records & Institutions</span>
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              {currentState.records.map((rec, i) => (
                <div key={i} className="rounded-lg bg-white/5 p-2.5 border border-white/5 font-editorial">
                  {rec}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
