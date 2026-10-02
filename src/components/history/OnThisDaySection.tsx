import React, { useState } from 'react';
import { ON_THIS_DAY_DATABASE, SIXTY_SIX_DAYS_CHALLENGE } from '../../data/historyDays';
import { Calendar, History, Sparkles, ChevronRight, BookOpen, Clock } from 'lucide-react';

export const OnThisDaySection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMonth, setSelectedMonth] = useState<number>(10); // October 1 default

  const months = [
    { value: 1, label: 'January' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
  ];

  const matchedEvents = ON_THIS_DAY_DATABASE.filter(
    (e) => e.day === selectedDay && e.month === selectedMonth
  );

  return (
    <section id="on-this-day" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: On This Day (Section 15) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              <History className="h-3.5 w-3.5" />
              <span>Today in Nigerian History</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              On This Day
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Explore historical events that took place across Nigerian history on any calendar day.
            </p>

            {/* Date Selector */}
            <div className="mt-6 flex items-center gap-3 bg-[#165e47] p-3 rounded-2xl border border-white/10 max-w-sm">
              <Calendar className="h-4 w-4 text-emerald-400 shrink-0" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="bg-[#0a2e21]/50 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
              >
                {months.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(Number(e.target.value))}
                className="bg-[#0a2e21]/50 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>
                    Day {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Event Display */}
            <div className="mt-6 space-y-4">
              {matchedEvents.length > 0 ? (
                matchedEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-emerald-500/30 bg-[#165e47] p-5 shadow-lg"
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-emerald-400 font-bold">{evt.year}</span>
                      <span className="text-stone-400 uppercase text-[10px] tracking-wider">{evt.category}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2">
                      {evt.title}
                    </h3>

                    <p className="text-xs text-stone-300 leading-relaxed font-editorial">
                      {evt.summary}
                    </p>

                    {evt.people && evt.people.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {evt.people.map((p, i) => (
                          <span
                            key={i}
                            className="rounded bg-white/5 border border-white/5 px-2 py-0.5 text-[10px] text-stone-300"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 pt-2.5 border-t border-white/5 text-[10px] text-stone-500 flex items-center gap-1.5">
                      <BookOpen className="h-3 w-3 text-stone-400" />
                      <span>Source: {evt.source}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-[#165e47] p-6 text-center">
                  <Clock className="mx-auto h-8 w-8 text-stone-500 mb-2" />
                  <span className="text-xs text-stone-300 block font-medium">
                    No verified milestones logged yet for this exact calendar day
                  </span>
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    Try October 1 (Independence Day) or June 12 (Democracy Day)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: 66 Days of Nigerian History Challenge (Section 38) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>National Anniversary Campaign</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              66 Days of Nigerian History
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Leading up to October 1, 2026: a daily digital celebration revealing 66 defining moments, pioneers, and national records.
            </p>

            <div className="mt-6 space-y-3 max-h-[460px] overflow-y-auto pr-2 scrollbar-none">
              {SIXTY_SIX_DAYS_CHALLENGE.map((item) => (
                <div
                  key={item.day}
                  className="rounded-xl border border-white/10 bg-[#145742] p-4 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="rounded bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                      Day {item.day} of 66
                    </span>
                    <span className="text-[10px] text-emerald-400 uppercase tracking-wider">{item.category}</span>
                  </div>

                  <h4 className="font-display text-sm font-bold text-white mt-2">
                    {item.title}
                  </h4>

                  <div className="text-xs text-amber-200/90 font-medium mt-0.5">
                    {item.personOrRecord}
                  </div>

                  <p className="text-xs text-stone-300 mt-1.5 leading-relaxed font-editorial">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
