import React, { useState, useMemo } from 'react';
import { Person, TimelineEvent, NationalRecord } from '../../types';
import { NIGERIA_TIMELINE } from '../../data/timeline';
import { NATIONAL_RECORDS } from '../../data/records';
import { ALL_SPORTS_LEGENDS, AthleteProfileData } from '../../data/sports';
import {
  Search,
  X,
  User,
  Calendar,
  Award,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Trophy,
  History,
  Sparkles,
  Layers,
  Trash2,
  ExternalLink,
  ChevronRight,
  PlusCircle,
} from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  people: Person[];
  onSelectPerson: (person: Person) => void;
  bookmarks?: string[];
  onToggleBookmark?: (id: string, e: React.MouseEvent) => void;
  initialTab?: 'search' | 'collection';
}

type CollectionTheme = 'all' | 'heroes' | 'sports' | 'history';

interface CollectionItem {
  id: string;
  theme: 'heroes' | 'sports' | 'history';
  title: string;
  subtitle: string;
  detail: string;
  imageUrl?: string;
  personRef?: Person;
  athleteRef?: AthleteProfileData;
  timelineRef?: TimelineEvent;
  recordRef?: NationalRecord;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  people,
  onSelectPerson,
  bookmarks = [],
  onToggleBookmark,
  initialTab = 'search',
}) => {
  const [activeTab, setActiveTab] = useState<'search' | 'collection'>(initialTab);
  const [query, setQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<CollectionTheme>('all');

  if (!isOpen) return null;

  // Search results
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return { people: [], sports: [], timeline: [], records: [] };
    }

    const matchedPeople = people.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.biography.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q) ||
        p.profession.some((pr) => pr.toLowerCase().includes(q)) ||
        p.categories.some((c) => c.toLowerCase().includes(q)) ||
        (p.birthDate && p.birthDate.toLowerCase().includes(q))
    );

    const matchedSports = ALL_SPORTS_LEGENDS.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.sport.toLowerCase().includes(q) ||
        s.primaryEventOrPosition.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.biography.toLowerCase().includes(q)
    );

    const matchedTimeline = NIGERIA_TIMELINE.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        String(t.year).includes(q) ||
        t.peopleInvolved.some((p) => p.toLowerCase().includes(q))
    );

    const matchedRecords = NATIONAL_RECORDS.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.recordHolder.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q) ||
        r.year.toLowerCase().includes(q)
    );

    return {
      people: matchedPeople,
      sports: matchedSports,
      timeline: matchedTimeline,
      records: matchedRecords,
    };
  }, [query, people]);

  const hasResults =
    results.people.length > 0 ||
    results.sports.length > 0 ||
    results.timeline.length > 0 ||
    results.records.length > 0;

  // Categorize Bookmarked Collection Items by Theme
  const collectionItems: CollectionItem[] = useMemo(() => {
    const items: CollectionItem[] = [];

    // Map bookmarked people
    for (const id of bookmarks) {
      // 1. Check in people
      const person = people.find((p) => p.id === id);
      if (person) {
        const isSport =
          person.categories.includes('sports') ||
          person.profession.some((pr) => pr.toLowerCase().includes('football') || pr.toLowerCase().includes('athlete') || pr.toLowerCase().includes('sport'));

        if (isSport) {
          items.push({
            id: person.id,
            theme: 'sports',
            title: person.name,
            subtitle: person.positions[0]?.title || person.profession.join(' · '),
            detail: `${person.state} State · ${person.birthDate || 'Nigeria'}`,
            imageUrl: person.portraitUrl,
            personRef: person,
          });
        } else {
          items.push({
            id: person.id,
            theme: 'heroes',
            title: person.name,
            subtitle: person.positions[0]?.title || person.profession.join(' · '),
            detail: `${person.state} State · ${person.categories[0] || 'National Icon'}`,
            imageUrl: person.portraitUrl,
            personRef: person,
          });
        }
        continue;
      }

      // 2. Check in sports legends
      const athlete = ALL_SPORTS_LEGENDS.find((a) => a.id === id);
      if (athlete) {
        items.push({
          id: athlete.id,
          theme: 'sports',
          title: athlete.name,
          subtitle: `${athlete.sport} · ${athlete.primaryEventOrPosition}`,
          detail: athlete.tagline,
          imageUrl: athlete.photoUrl,
          athleteRef: athlete,
        });
        continue;
      }

      // 3. Check in timeline
      const event = NIGERIA_TIMELINE.find((t) => t.id === id);
      if (event) {
        items.push({
          id: event.id,
          theme: 'history',
          title: event.title,
          subtitle: `Year ${event.year} · ${event.era}`,
          detail: event.description,
          timelineRef: event,
        });
        continue;
      }

      // 4. Check in national records
      const record = NATIONAL_RECORDS.find((r) => r.id === id);
      if (record) {
        items.push({
          id: record.id,
          theme: 'history',
          title: record.title,
          subtitle: `${record.recordHolder} · ${record.category}`,
          detail: `${record.location} (${record.year})`,
          recordRef: record,
        });
      }
    }

    return items;
  }, [bookmarks, people]);

  // Counts per theme
  const heroesCount = collectionItems.filter((i) => i.theme === 'heroes').length;
  const sportsCount = collectionItems.filter((i) => i.theme === 'sports').length;
  const historyCount = collectionItems.filter((i) => i.theme === 'history').length;

  const filteredCollection = useMemo(() => {
    if (selectedTheme === 'all') return collectionItems;
    return collectionItems.filter((i) => i.theme === selectedTheme);
  }, [collectionItems, selectedTheme]);

  // Suggested landmark items for empty collection state
  const sampleSuggestions = [
    {
      id: 'mikel-obi',
      theme: 'sports' as const,
      title: 'John Obi Mikel (Mikel Obi)',
      subtitle: 'Football Legend & AFCON 2013 Champion',
      imageUrl: '/images/sports/mikel-obi.jpg',
    },
    {
      id: 'abubakar-tafawa-balewa',
      theme: 'heroes' as const,
      title: 'Sir Abubakar Tafawa Balewa',
      subtitle: 'First Prime Minister of Nigeria',
      imageUrl: '/images/people/abubakar-tafawa-balewa.jpg',
    },
    {
      id: 'funmilayo-ransome-kuti',
      theme: 'heroes' as const,
      title: 'Chief Funmilayo Ransome-Kuti',
      subtitle: 'Lioness of Lisabi & Independence Leader',
      imageUrl: '/images/people/funmilayo-ransome-kuti.png',
    },
    {
      id: 'chioma-ajunwa',
      theme: 'sports' as const,
      title: 'Chioma Ajunwa (MON)',
      subtitle: 'First Individual Olympic Gold Medalist',
      imageUrl: '/images/people/chioma-ajunwa.jpg',
    },
    {
      id: 'evt-ind-1960',
      theme: 'history' as const,
      title: 'Independence Day (October 1, 1960)',
      subtitle: 'Lowering of the Union Jack & Birth of Nigeria',
      imageUrl: undefined,
    },
  ];

  const handleAddSampleStarterPack = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onToggleBookmark) return;
    for (const item of sampleSuggestions) {
      if (!bookmarks.includes(item.id)) {
        onToggleBookmark(item.id, e);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 pt-3 sm:pt-16 bg-[#0a2e21]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl max-h-[92dvh] flex flex-col rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-[#0d3d2e] shadow-2xl text-stone-100 overflow-hidden my-auto sm:my-0">
        {/* Top Header Mode Switcher (Search vs My Collection) */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-emerald-500/20 bg-[#104a37] shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab('search')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'search'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-emerald-900/40'
              }`}
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search</span>
            </button>

            <button
              onClick={() => setActiveTab('collection')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'collection'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-emerald-900/40'
              }`}
            >
              <Bookmark className="h-3.5 w-3.5" />
              <span>My Collection</span>
              <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-white/20 text-white">
                {bookmarks.length}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-emerald-900/50 transition-colors flex items-center gap-1"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
              <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded font-mono hidden sm:inline">ESC</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: SEARCH ARCHIVE */}
        {activeTab === 'search' && (
          <>
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-emerald-500/20 bg-[#12543e]">
              <Search className="h-5 w-5 text-emerald-300 mr-3 shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search figures, athletes, records, years (e.g. 'Mikel', 'Balewa', '1960')..."
                className="flex-1 bg-transparent text-sm text-stone-100 placeholder-stone-400 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-stone-400 hover:text-white mr-2"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Results Area */}
            <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto space-y-6">
              {!query.trim() ? (
                <div className="py-8 text-center space-y-3">
                  <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    <Search className="h-6 w-6" />
                  </div>
                  <p className="text-xs text-stone-300 font-medium">
                    Type a name (e.g. "Mikel", "Balewa", "Soyinka"), an era ("1960", "First Republic"), or a category.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs text-stone-300">
                    <span className="text-stone-400 text-[11px]">Popular:</span>
                    {['Mikel Obi', 'Tafawa Balewa', 'Awolowo', 'Atlanta 96', '1960', 'Tobi Amusan'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="px-2.5 py-1 rounded-md bg-[#165e47] hover:bg-emerald-600 text-stone-200 hover:text-white transition-colors text-[11px]"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              ) : !hasResults ? (
                <div className="py-12 text-center">
                  <NigeriaEmblem size="md" className="mx-auto mb-3" />
                  <p className="text-sm font-semibold text-stone-200">
                    We couldn't find a record for "{query}"
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    Try searching by surname, sport, year (e.g. "1960"), or state.
                  </p>
                </div>
              ) : (
                <>
                  {/* Historical Figures */}
                  {results.people.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-300 font-bold mb-3">
                        <User className="h-3.5 w-3.5" />
                        <span>Historical Figures & Pioneers ({results.people.length})</span>
                      </div>
                      <div className="space-y-2">
                        {results.people.map((person) => {
                          const isBookmarked = bookmarks.includes(person.id);
                          return (
                            <div
                              key={person.id}
                              onClick={() => {
                                onClose();
                                onSelectPerson(person);
                              }}
                              className="group flex items-center justify-between p-3 rounded-xl border border-emerald-500/20 bg-[#114a38] hover:border-emerald-400 hover:bg-[#165e47] cursor-pointer transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg overflow-hidden bg-stone-900 shrink-0 border border-emerald-500/30">
                                  <img
                                    src={person.portraitUrl}
                                    alt={person.name}
                                    className="h-full w-full object-cover object-top"
                                  />
                                </div>
                                <div>
                                  <div className="font-display text-sm font-bold text-white group-hover:text-emerald-200">
                                    {person.name}
                                  </div>
                                  <div className="text-xs text-stone-300">
                                    {person.positions[0]?.title || person.profession.join(' · ')} · {person.state} State
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {onToggleBookmark && (
                                  <button
                                    onClick={(e) => onToggleBookmark(person.id, e)}
                                    title={isBookmarked ? 'Remove from Collection' : 'Save to Collection'}
                                    className={`p-1.5 rounded-lg transition-colors ${
                                      isBookmarked
                                        ? 'text-amber-400 bg-amber-400/10'
                                        : 'text-stone-400 hover:text-white hover:bg-white/10'
                                    }`}
                                  >
                                    <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                                  </button>
                                )}
                                <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Sports Legends */}
                  {results.sports.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-300 font-bold mb-3">
                        <Trophy className="h-3.5 w-3.5" />
                        <span>Sporting Legends ({results.sports.length})</span>
                      </div>
                      <div className="space-y-2">
                        {results.sports.map((athlete) => {
                          const isBookmarked = bookmarks.includes(athlete.id);
                          return (
                            <div
                              key={athlete.id}
                              onClick={() => {
                                onClose();
                                // Try finding in people if exists, otherwise scroll to sports section
                                const matched = people.find((p) => p.id === athlete.id || p.slug === athlete.id);
                                if (matched) {
                                  onSelectPerson(matched);
                                } else {
                                  const el = document.getElementById('sports-legends');
                                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                              className="group flex items-center justify-between p-3 rounded-xl border border-emerald-500/20 bg-[#114a38] hover:border-emerald-400 hover:bg-[#165e47] cursor-pointer transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg overflow-hidden bg-stone-900 shrink-0 border border-emerald-500/30">
                                  <img
                                    src={athlete.photoUrl}
                                    alt={athlete.name}
                                    className="h-full w-full object-cover object-top"
                                  />
                                </div>
                                <div>
                                  <div className="font-display text-sm font-bold text-white group-hover:text-emerald-200">
                                    {athlete.name}
                                  </div>
                                  <div className="text-xs text-stone-300 truncate max-w-sm">
                                    {athlete.sport} · {athlete.primaryEventOrPosition}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {onToggleBookmark && (
                                  <button
                                    onClick={(e) => onToggleBookmark(athlete.id, e)}
                                    title={isBookmarked ? 'Remove from Collection' : 'Save to Collection'}
                                    className={`p-1.5 rounded-lg transition-colors ${
                                      isBookmarked
                                        ? 'text-amber-400 bg-amber-400/10'
                                        : 'text-stone-400 hover:text-white hover:bg-white/10'
                                    }`}
                                  >
                                    <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                                  </button>
                                )}
                                <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Timeline Events */}
                  {results.timeline.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-300 font-bold mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Timeline Events ({results.timeline.length})</span>
                      </div>
                      <div className="space-y-2">
                        {results.timeline.map((evt) => {
                          const isBookmarked = bookmarks.includes(evt.id);
                          return (
                            <div
                              key={evt.id}
                              className="p-3 rounded-xl border border-emerald-500/20 bg-[#114a38] flex items-start justify-between gap-3"
                            >
                              <div>
                                <div className="flex items-center gap-2 text-xs mb-1">
                                  <span className="font-mono text-emerald-300 font-bold">{evt.year}</span>
                                  <span className="text-[10px] text-stone-400 uppercase">{evt.era}</span>
                                </div>
                                <div className="font-display text-sm font-semibold text-white">
                                  {evt.title}
                                </div>
                                <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                                  {evt.description}
                                </p>
                              </div>
                              {onToggleBookmark && (
                                <button
                                  onClick={(e) => onToggleBookmark(evt.id, e)}
                                  title={isBookmarked ? 'Remove from Collection' : 'Save to Collection'}
                                  className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                                    isBookmarked
                                      ? 'text-amber-400 bg-amber-400/10'
                                      : 'text-stone-400 hover:text-white hover:bg-white/10'
                                  }`}
                                >
                                  <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* National Records */}
                  {results.records.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-300 font-bold mb-3">
                        <Award className="h-3.5 w-3.5" />
                        <span>National Records ({results.records.length})</span>
                      </div>
                      <div className="space-y-2">
                        {results.records.map((rec) => {
                          const isBookmarked = bookmarks.includes(rec.id);
                          return (
                            <div
                              key={rec.id}
                              className="p-3 rounded-xl border border-emerald-500/20 bg-[#114a38] flex items-start justify-between gap-3"
                            >
                              <div>
                                <div className="flex items-center gap-2 text-xs mb-1">
                                  <span className="text-emerald-300 font-medium uppercase text-[10px]">
                                    {rec.category}
                                  </span>
                                  <span className="font-mono text-stone-300 text-xs">{rec.year}</span>
                                </div>
                                <div className="font-display text-sm font-semibold text-white">
                                  {rec.title}
                                </div>
                                <div className="text-xs text-emerald-200 font-medium mt-0.5">
                                  {rec.recordHolder} · {rec.location}
                                </div>
                              </div>
                              {onToggleBookmark && (
                                <button
                                  onClick={(e) => onToggleBookmark(rec.id, e)}
                                  title={isBookmarked ? 'Remove from Collection' : 'Save to Collection'}
                                  className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                                    isBookmarked
                                      ? 'text-amber-400 bg-amber-400/10'
                                      : 'text-stone-400 hover:text-white hover:bg-white/10'
                                  }`}
                                >
                                  <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}

        {/* VIEW 2: MY COLLECTION (CATEGORIZED BY THEMES) */}
        {activeTab === 'collection' && (
          <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto space-y-6">
            {/* Collection Header Summary */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#114a38] via-[#145742] to-[#114a38] border border-emerald-500/30">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    <BookmarkCheck className="h-4 w-4 text-emerald-300" />
                    <span>Your Curated Heritage Vault</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Personal Nigeria @ 66 Archive
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Organize and review bookmarked national icons, sporting triumphs, and historical milestones.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display text-2xl font-extrabold text-emerald-300">
                    {bookmarks.length}
                  </span>
                  <span className="block text-[10px] text-stone-400 uppercase font-semibold">
                    Saved Items
                  </span>
                </div>
              </div>
            </div>

            {/* Theme Filter Navigation Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-emerald-500/20">
              <button
                onClick={() => setSelectedTheme('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  selectedTheme === 'all'
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-[#114a38] text-stone-300 hover:text-white hover:bg-[#165e47]'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>All Items ({collectionItems.length})</span>
              </button>

              <button
                onClick={() => setSelectedTheme('heroes')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  selectedTheme === 'heroes'
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-[#114a38] text-stone-300 hover:text-white hover:bg-[#165e47]'
                }`}
              >
                <User className="h-3.5 w-3.5 text-emerald-300" />
                <span>Heroes & Pioneers ({heroesCount})</span>
              </button>

              <button
                onClick={() => setSelectedTheme('sports')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  selectedTheme === 'sports'
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-[#114a38] text-stone-300 hover:text-white hover:bg-[#165e47]'
                }`}
              >
                <Trophy className="h-3.5 w-3.5 text-amber-300" />
                <span>Sporting Legends ({sportsCount})</span>
              </button>

              <button
                onClick={() => setSelectedTheme('history')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  selectedTheme === 'history'
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-[#114a38] text-stone-300 hover:text-white hover:bg-[#165e47]'
                }`}
              >
                <History className="h-3.5 w-3.5 text-sky-300" />
                <span>History & Milestones ({historyCount})</span>
              </button>
            </div>

            {/* List of Filtered Items */}
            {filteredCollection.length > 0 ? (
              <div className="space-y-2.5">
                {filteredCollection.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (item.personRef) {
                        onClose();
                        onSelectPerson(item.personRef);
                      } else if (item.athleteRef) {
                        onClose();
                        const matched = people.find((p) => p.id === item.athleteRef?.id);
                        if (matched) {
                          onSelectPerson(matched);
                        } else {
                          const el = document.getElementById('sports-legends');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        onClose();
                        const el = document.getElementById('timeline');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group flex items-center justify-between p-3.5 rounded-2xl border border-emerald-500/25 bg-[#114a38] hover:border-emerald-400 hover:bg-[#165e47] cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {item.imageUrl ? (
                        <div className="h-12 w-12 rounded-xl overflow-hidden bg-stone-900 shrink-0 border border-emerald-500/30">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 shrink-0">
                          {item.theme === 'sports' ? (
                            <Trophy className="h-5 w-5" />
                          ) : item.theme === 'history' ? (
                            <History className="h-5 w-5" />
                          ) : (
                            <User className="h-5 w-5" />
                          )}
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase ${
                              item.theme === 'sports'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : item.theme === 'history'
                                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            }`}
                          >
                            {item.theme}
                          </span>
                        </div>
                        <h4 className="font-display text-sm font-bold text-white group-hover:text-emerald-200 mt-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-stone-300 truncate max-w-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {onToggleBookmark && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleBookmark(item.id, e);
                          }}
                          title="Remove from bookmarks"
                          className="p-2 text-stone-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                        >
                          <BookmarkCheck className="h-4 w-4 text-emerald-300 group-hover:hidden" />
                          <Trash2 className="h-4 w-4 hidden group-hover:block text-rose-400" />
                        </button>
                      )}
                      <ChevronRight className="h-4 w-4 text-stone-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center p-6 rounded-2xl border border-dashed border-emerald-500/30 bg-[#104a37]">
                <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-2">
                  <Bookmark className="h-6 w-6" />
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  No items in {selectedTheme === 'all' ? 'your collection' : `${selectedTheme} theme`} yet
                </h4>
                <p className="text-xs text-stone-300 mt-1 max-w-sm mx-auto">
                  Click the bookmark icon on any Nigerian hero, sports legend, or historical record to save it here for fast access.
                </p>

                {/* Suggested starter pack */}
                <div className="mt-6 pt-5 border-t border-emerald-500/20 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Recommended Starter Vault</span>
                    </span>
                    {onToggleBookmark && (
                      <button
                        onClick={handleAddSampleStarterPack}
                        className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1"
                      >
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span>Add All Recommendations</span>
                      </button>
                    )}
                  </div>

                  <div className="space-y-2">
                    {sampleSuggestions.map((sug) => {
                      const isAdded = bookmarks.includes(sug.id);
                      return (
                        <div
                          key={sug.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-[#145742] border border-emerald-500/20 text-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            {sug.imageUrl ? (
                              <img
                                src={sug.imageUrl}
                                alt={sug.title}
                                className="h-8 w-8 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="h-8 w-8 rounded-lg bg-emerald-900/60 flex items-center justify-center text-emerald-300">
                                🇳🇬
                              </div>
                            )}
                            <div>
                              <div className="font-bold text-white">{sug.title}</div>
                              <div className="text-[11px] text-stone-300">{sug.subtitle}</div>
                            </div>
                          </div>
                          {onToggleBookmark && (
                            <button
                              onClick={(e) => onToggleBookmark(sug.id, e)}
                              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                                isAdded
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
                              }`}
                            >
                              {isAdded ? 'Saved ✓' : '+ Save'}
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
