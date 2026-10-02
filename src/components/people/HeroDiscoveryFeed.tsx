import React, { useState, useMemo } from 'react';
import { Person, CategoryType } from '../../types';
import { PersonCard } from './PersonCard';
import { Search, Filter, Sparkles, X } from 'lucide-react';

interface HeroDiscoveryFeedProps {
  people: Person[];
  onSelectPerson: (person: Person) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

const CATEGORIES: { id: CategoryType | 'all' | 'bookmarked'; label: string }[] = [
  { id: 'all', label: 'All Icons' },
  { id: 'independence', label: 'Independence Heroes' },
  { id: 'leadership', label: 'National Leaders' },
  { id: 'women', label: 'Women of Nigeria' },
  { id: 'science-tech', label: 'Science & Tech' },
  { id: 'business', label: 'Business' },
  { id: 'sports', label: 'Sports' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'literature', label: 'Literature' },
  { id: 'education', label: 'Education' },
  { id: 'culture', label: 'Culture' },
  { id: 'activists', label: 'Activists' },
  { id: 'innovators', label: 'Innovators' },
  { id: 'youth-emerging', label: 'Youth & Emerging' },
  { id: 'bookmarked', label: 'My Saved' },
];

export const HeroDiscoveryFeed: React.FC<HeroDiscoveryFeedProps> = ({
  people,
  onSelectPerson,
  bookmarks,
  onToggleBookmark,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all' | 'bookmarked'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');

  // Extract unique states for filter
  const allStates = useMemo(() => {
    const states = Array.from(new Set(people.map((p) => p.state).filter(Boolean)));
    return states.sort();
  }, [people]);

  const filteredPeople = useMemo(() => {
    return people.filter((p) => {
      // Category filter
      if (selectedCategory === 'bookmarked') {
        if (!bookmarks.includes(p.id)) return false;
      } else if (selectedCategory !== 'all') {
        if (!p.categories.includes(selectedCategory)) return false;
      }

      // State filter
      if (selectedState !== 'all' && p.state !== selectedState) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBio = p.biography.toLowerCase().includes(q);
        const matchesProf = p.profession.some((pr) => pr.toLowerCase().includes(q));
        const matchesPos = p.positions.some((pos) => pos.title.toLowerCase().includes(q));
        const matchesState = p.state.toLowerCase().includes(q);
        if (!matchesName && !matchesBio && !matchesProf && !matchesPos && !matchesState) {
          return false;
        }
      }

      return true;
    });
  }, [people, selectedCategory, selectedState, searchQuery, bookmarks]);

  return (
    <section id="heroes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Discover Nigerian Heritage Icons</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The Pioneers, Leaders & Builders
          </h2>
          <p className="text-sm text-stone-400 mt-2 max-w-2xl">
            Explore verified biographies and documented legacies across 66 years of independence.
          </p>
        </div>

        {/* Counter indicator */}
        <div className="text-right">
          <span className="font-display text-2xl font-bold text-emerald-400 tabular-nums">
            {filteredPeople.length}
          </span>
          <span className="block text-xs uppercase tracking-wider text-stone-400">
            Profiles Found
          </span>
        </div>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="mb-8 space-y-4">
        {/* Search Input & State Selector */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, profession, contribution, or state..."
              className="w-full rounded-xl border border-white/10 bg-[#165e47] pl-10 pr-10 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:border-emerald-500 focus:outline-none"
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

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-stone-400 shrink-0" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#165e47] px-3 py-2.5 text-xs text-stone-200 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">All States of Nigeria</option>
              {allStates.map((st) => (
                <option key={st} value={st}>
                  {st} State
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Horizontal Segmented Controls (Buttons with click handlers as allowed by constitution) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
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
              {cat.id === 'bookmarked' && bookmarks.length > 0 && ` (${bookmarks.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Discovery Feed Grid: 2 columns mobile, 3-4 columns desktop */}
      {filteredPeople.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPeople.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              onSelect={onSelectPerson}
              isBookmarked={bookmarks.includes(person.id)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-[#165e47] py-16 text-center">
          <div className="text-3xl mb-2">🇳🇬</div>
          <h3 className="font-display text-base font-bold text-stone-200">
            We couldn't find matching records
          </h3>
          <p className="text-xs text-stone-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search criteria or explore other categories.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedState('all');
              setSearchQuery('');
            }}
            className="mt-4 rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};
