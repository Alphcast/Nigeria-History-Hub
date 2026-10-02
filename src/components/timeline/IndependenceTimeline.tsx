import React, { useState } from 'react';
import { NIGERIA_TIMELINE } from '../../data/timeline';
import { TimelineEvent } from '../../types';
import { Calendar, Users, BookOpen, Quote, Sparkles } from 'lucide-react';

export const IndependenceTimeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(
    NIGERIA_TIMELINE.find((e) => e.year === 1960) || NIGERIA_TIMELINE[0]
  );

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs text-emerald-300 mb-3">
          <Calendar className="h-3.5 w-3.5 text-emerald-400" />
          <span className="font-semibold uppercase tracking-wider">Interactive National Timeline</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Nigeria's Journey to Independence & Beyond
        </h2>
        <p className="text-sm text-stone-400 mt-3 leading-relaxed">
          From the 1914 Amalgamation to October 1, 1960, and 66 years of sovereign democracy: explore the milestones that defined our nation.
        </p>
      </div>

      {/* Horizontal Milestone Rail */}
      <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
        <div className="flex items-center gap-3 min-w-max px-2">
          {NIGERIA_TIMELINE.map((evt) => {
            const isSelected = selectedEvent.id === evt.id;
            const is1960 = evt.year === 1960;
            return (
              <button
                key={evt.id}
                onClick={() => setSelectedEvent(evt)}
                className={`group relative flex flex-col items-center rounded-2xl border px-5 py-3 transition-all ${
                  isSelected
                    ? is1960
                      ? 'border-amber-400 bg-amber-950/60 shadow-lg shadow-amber-950/50 scale-105'
                      : 'border-emerald-500 bg-emerald-950/60 shadow-lg shadow-emerald-950/50 scale-105'
                    : 'border-white/10 bg-[#165e47] hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <span
                  className={`text-xs font-mono font-bold ${
                    isSelected ? (is1960 ? 'text-amber-300' : 'text-emerald-400') : 'text-stone-400'
                  }`}
                >
                  {evt.year}
                </span>
                <span className="text-[11px] font-semibold text-stone-200 mt-1 max-w-[120px] truncate text-center">
                  {evt.era}
                </span>
                {is1960 && (
                  <span className="absolute -top-2 rounded-full bg-amber-500 px-2 py-0.2 text-[9px] font-black uppercase text-stone-950">
                    Independence
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Event Spotlight Feature */}
      <div className="rounded-3xl border border-white/10 bg-[#165e47] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 md:p-12 items-center">
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-stone-900">
              {selectedEvent.imageUrl ? (
                <img
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-stone-900 text-stone-400">
                  <span>National Archival Record</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d2e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="text-emerald-300 font-mono">{selectedEvent.dateStr}</span>
                <span className="text-stone-300 text-[11px]">{selectedEvent.era}</span>
              </div>
            </div>

            {/* People Involved */}
            {selectedEvent.peopleInvolved && selectedEvent.peopleInvolved.length > 0 && (
              <div className="mt-4 w-full rounded-xl border border-white/5 bg-black/40 p-3">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                  <Users className="h-3.5 w-3.5" />
                  <span>Key Figures Involved</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedEvent.peopleInvolved.map((p, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-stone-300 border border-white/5"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Historical Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
                <span>{selectedEvent.dateStr}</span>
                <span>·</span>
                <span>{selectedEvent.era}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide mb-4">
                {selectedEvent.title}
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-editorial">
                {selectedEvent.description}
              </p>

              {/* Speech excerpt if available (e.g. Balewa's October 1, 1960 address) */}
              {selectedEvent.speechExcerpt && (
                <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-2">
                    <Quote className="h-4 w-4 text-amber-400" />
                    <span>Archival Address Transcript Excerpt</span>
                  </div>
                  <p className="font-editorial text-sm sm:text-base text-amber-100/90 italic leading-relaxed">
                    {selectedEvent.speechExcerpt}
                  </p>
                  <span className="block text-[11px] text-amber-400/80 mt-2 font-mono">
                    — National Library of Nigeria Archival Recording
                  </span>
                </div>
              )}
            </div>

            {/* Sources at base */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
                Source: {selectedEvent.sources[0]?.title} ({selectedEvent.sources[0]?.publisher})
              </span>
              <span className="text-[11px] text-emerald-400">National Archive Item #{selectedEvent.id}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
