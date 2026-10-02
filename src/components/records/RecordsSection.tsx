import React, { useState, useMemo } from 'react';
import { NATIONAL_RECORDS } from '../../data/records';
import { NationalRecord } from '../../types';
import { Award, CheckCircle2, Search, MapPin, Calendar, BookOpen } from 'lucide-react';

export const RecordsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Records' },
    { id: 'firsts', label: 'Firsts' },
    { id: 'national', label: 'National Achievements' },
    { id: 'sports', label: 'Sports' },
    { id: 'science', label: 'Science' },
    { id: 'technology', label: 'Technology' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'business', label: 'Business' },
    { id: 'education', label: 'Education' },
  ];

  const filteredRecords = useMemo(() => {
    return NATIONAL_RECORDS.filter((rec) => {
      if (selectedCategory !== 'all' && rec.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = rec.title.toLowerCase().includes(q);
        const matchesHolder = rec.recordHolder.toLowerCase().includes(q);
        const matchesDesc = rec.description.toLowerCase().includes(q);
        const matchesLoc = rec.location.toLowerCase().includes(q);
        if (!matchesTitle && !matchesHolder && !matchesDesc && !matchesLoc) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="records" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            <Award className="h-3.5 w-3.5" />
            <span>Digital Book of Records</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Nigeria's National Records & Firsts
          </h2>
          <p className="text-sm text-stone-400 mt-2 max-w-2xl">
            Never publish an unverified claim. Every record cataloged below has been rigorously authenticated through historical gazettes and primary repositories.
          </p>
        </div>

        {/* Total Verified Records Count */}
        <div className="text-right">
          <span className="font-display text-2xl font-bold text-emerald-400 tabular-nums">
            {filteredRecords.length}
          </span>
          <span className="block text-xs uppercase tracking-wider text-stone-400">
            Verified Records
          </span>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search records, holders, or locations..."
            className="w-full rounded-xl border border-white/10 bg-[#165e47] pl-10 pr-4 py-2 text-xs text-stone-100 placeholder-stone-500 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-stone-950 font-semibold shadow-sm'
                  : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Records Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecords.map((rec) => (
          <div
            key={rec.id}
            className="rounded-2xl border border-white/10 bg-[#165e47] p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
          >
            <div>
              {/* Category & Verified tag */}
              <div className="flex items-center justify-between text-[11px] font-medium mb-3">
                <span className="text-emerald-400 uppercase tracking-wider font-semibold">
                  {rec.category}
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  Verified Record
                </span>
              </div>

              {/* Record Title */}
              <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                {rec.title}
              </h3>

              {/* Record Holder */}
              <div className="rounded-xl border border-white/5 bg-black/40 p-3 mb-3">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block mb-0.5">
                  Record Holder / Institution
                </span>
                <span className="font-semibold text-emerald-300 text-sm">
                  {rec.recordHolder}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-stone-300 leading-relaxed font-editorial">
                {rec.description}
              </p>

              {/* Year & Location */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{rec.year}</span>
                </span>
                <span className="flex items-center gap-1 text-stone-300">
                  <MapPin className="h-3.5 w-3.5 text-stone-400" />
                  <span className="truncate max-w-[150px]">{rec.location}</span>
                </span>
              </div>
            </div>

            {/* Source Reference */}
            <div className="mt-4 pt-2.5 border-t border-white/5 text-[10px] text-stone-500 flex items-center gap-1.5">
              <BookOpen className="h-3 w-3 text-stone-400 shrink-0" />
              <span className="truncate">Source: {rec.source}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
