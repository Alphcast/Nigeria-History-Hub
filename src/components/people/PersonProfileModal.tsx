import React, { useState } from 'react';
import { Person } from '../../types';
import { X, Bookmark, Share2, Play, AlertCircle, ExternalLink, Calendar, CheckCircle2, Award, Landmark, BookOpen } from 'lucide-react';

interface PersonProfileModalProps {
  person: Person | null;
  onClose: () => void;
  onEnterStoryMode: (person: Person) => void;
  onOpenShareCard: (person: Person) => void;
  onOpenCorrection: (person: Person) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const PersonProfileModal: React.FC<PersonProfileModalProps> = ({
  person,
  onClose,
  onEnterStoryMode,
  onOpenShareCard,
  onOpenCorrection,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [imgError, setImgError] = useState(false);
  const [activeTab, setActiveTab] = useState<'story' | 'contributions' | 'timeline' | 'sources'>('story');

  if (!person) return null;

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `🇳🇬 Discover the inspiring story and national legacy of ${person.name} on Nigeria History Hub (Nigeria @ 66): ${window.location.origin}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0a2e21]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl border border-white/10 bg-[#165e47] text-stone-100 shadow-2xl overflow-hidden my-auto">
        {/* Top Floating Control Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#165e47] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-medium">
              National Archive Biography
            </span>
            <span className="text-stone-500">/</span>
            <span className="text-xs text-stone-400 capitalize">{person.categories[0]?.replace('-', ' ')}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Enter Story Mode CTA */}
            <button
              onClick={() => onEnterStoryMode(person)}
              className="flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-950/60 px-3 py-1.5 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-900/80"
              title="Enter full-screen cinematic storytelling"
            >
              <Play className="h-3 w-3 fill-current" />
              <span className="hidden sm:inline">Story Mode</span>
            </button>

            {/* Share Card Modal CTA */}
            <button
              onClick={() => onOpenShareCard(person)}
              className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              title="Create Social Share Card"
              aria-label="Create Social Share Card"
            >
              <Share2 className="h-4 w-4" />
            </button>

            {/* Bookmark button */}
            <button
              onClick={(e) => onToggleBookmark(person.id, e)}
              className={`p-1.5 rounded-lg transition-colors ${
                isBookmarked ? 'text-amber-400' : 'text-stone-300 hover:text-white'
              }`}
              title="Bookmark Profile"
              aria-label="Bookmark Profile"
            >
              <Bookmark className="h-4 w-4 fill-current" />
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero Banner Grid: Left Portrait / Right Core Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 bg-gradient-to-b from-[#0a1710] to-[#165e47] border-b border-white/5">
            {/* Left Portrait Column (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="relative aspect-[3/4] w-full max-w-[280px] rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-stone-900">
                {!imgError ? (
                  <img
                    src={person.portraitUrl}
                    alt={person.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-stone-900 p-6 text-center">
                    <span className="text-5xl mb-2">🇳🇬</span>
                    <span className="font-display font-semibold text-stone-200">{person.name}</span>
                    <span className="text-xs text-emerald-400 mt-2">National Hero</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d2e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] text-emerald-300 tracking-wider uppercase font-medium">
                    State of Origin: {person.state} State
                  </span>
                </div>
              </div>

              {/* Action Buttons underneath portrait */}
              <div className="mt-4 w-full max-w-[280px] flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppShare}
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-[#008751]/20 py-2.5 text-xs font-semibold text-emerald-300 transition-all hover:bg-[#008751]/30"
                >
                  <span>Share on WhatsApp</span>
                </button>
                <button
                  onClick={() => onOpenCorrection(person)}
                  className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 hover:text-stone-200 py-1 transition-colors"
                >
                  <AlertCircle className="h-3 w-3" />
                  <span>Report a Correction</span>
                </button>
              </div>
            </div>

            {/* Right Overview Column (8 cols) */}
            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                {/* Honorific & Verified Tag */}
                <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                  {person.honorific && (
                    <span className="text-amber-400 font-semibold">{person.honorific}</span>
                  )}
                  {person.verified && (
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 text-[10px] text-emerald-300">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      Verified Historical Record
                    </span>
                  )}
                  {person.editorialTier === '66-cohort' && (
                    <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 text-[10px] text-amber-300 font-medium">
                      <Award className="h-3 w-3 text-amber-400" />
                      66 Nigerians Cohort
                    </span>
                  )}
                </div>

                {/* Primary Name */}
                <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                  {person.name}
                </h1>

                {/* Primary Offices & Lifespan */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-stone-300 mt-2">
                  <span className="font-medium text-emerald-400">
                    {person.positions && person.positions.length > 0
                      ? person.positions[0].title
                      : person.profession.join(' · ')}
                  </span>
                  {(person.birthDate || person.deathDate) && (
                    <>
                      <span aria-hidden="true" className="text-stone-500">·</span>
                      <span className="text-stone-400">
                        {person.birthDate} — {person.deathDate || 'Present'}
                      </span>
                    </>
                  )}
                </div>

                {/* Section 10: "WHY THIS PERSON MATTERS" */}
                <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-950/30 p-4">
                  <div className="text-[11px] uppercase tracking-widest text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5" />
                    Why This Person Matters
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-editorial italic">
                    "{person.whyTheyMatter}"
                  </p>
                </div>

                {/* Quote if available */}
                {person.quote && (
                  <blockquote className="mt-4 border-l-2 border-amber-500/60 pl-3 py-0.5 text-xs text-amber-200/90 italic">
                    "{person.quote}"
                  </blockquote>
                )}
              </div>

              {/* Positions / Roles Pill strip */}
              {person.positions && person.positions.length > 0 && (
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-medium">
                    Office / Constitutional Roles
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {person.positions.map((pos, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-black/40 border border-white/10 px-3 py-1.5 text-xs text-stone-300"
                      >
                        <span className="font-semibold text-white">{pos.title}</span>
                        {(pos.startDate || pos.endDate) && (
                          <span className="text-emerald-400 ml-1.5 text-[11px]">
                            ({pos.startDate}–{pos.endDate || 'Present'})
                          </span>
                        )}
                        {pos.era && (
                          <span className="text-stone-400 ml-1.5 text-[10px]">[{pos.era}]</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Profile Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#145742] px-6 py-2 sticky top-0 z-20">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors ${
                activeTab === 'story'
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Biography & Independence Role
            </button>
            <button
              onClick={() => setActiveTab('contributions')}
              className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors ${
                activeTab === 'contributions'
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Contributions ({person.contributions.length})
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors ${
                activeTab === 'timeline'
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Timeline ({person.timeline.length})
            </button>
            <button
              onClick={() => setActiveTab('sources')}
              className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors ${
                activeTab === 'sources'
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Historical Sources ({person.sources.length})
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Tab: Story & Biography */}
            {activeTab === 'story' && (
              <div className="space-y-8">
                {/* Biography Section */}
                <section>
                  <h3 className="font-display text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-emerald-400" />
                    Who Was He / She?
                  </h3>
                  <div className="prose prose-invert max-w-none text-stone-300 text-sm sm:text-base leading-relaxed">
                    <p className="first-letter:text-4xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-emerald-400">
                      {person.biography}
                    </p>
                  </div>
                </section>

                {/* Section 2: Important Historical Principle (Role in Independence) */}
                {person.independenceRole && (
                  <section className="rounded-2xl border border-white/10 bg-[#165e47] p-5 sm:p-6">
                    <h3 className="font-display text-base font-bold text-emerald-300 mb-2 flex items-center gap-2">
                      <Landmark className="h-4 w-4 text-emerald-400" />
                      Role in Nigeria's Independence & Sovereignty
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {person.independenceRole}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-3 pt-3 border-t border-white/5 italic">
                      Historical note: Nigerian independence was achieved through the collective contributions of diverse nationalist political movements, trade unions, market women, youth coalitions, and constitutional delegations, rather than any individual single-handedly.
                    </p>
                  </section>
                )}

                {/* Legacy */}
                {person.legacy && (
                  <section>
                    <h3 className="font-display text-base font-bold text-white mb-2">
                      Enduring National Legacy
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {person.legacy}
                    </p>
                  </section>
                )}
              </div>
            )}

            {/* Tab: Contributions */}
            {activeTab === 'contributions' && (
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-4">
                  Documented Major Contributions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {person.contributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-[#165e47] p-4 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-emerald-400 font-medium mb-1">
                          <span>{item.category || 'National Contribution'}</span>
                          {item.year && <span className="text-stone-400">{item.year}</span>}
                        </div>
                        <h4 className="font-display text-sm font-semibold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Timeline */}
            {activeTab === 'timeline' && (
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-6">
                  Chronological Journey & Milestones
                </h3>
                <div className="relative border-l border-emerald-500/30 ml-4 pl-6 space-y-6">
                  {person.timeline.map((item, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-emerald-400 bg-[#0d3d2e]" />
                      <div className="text-xs font-bold text-emerald-400">{item.year}</div>
                      <div className="font-display text-sm font-semibold text-white mt-0.5">
                        {item.event}
                      </div>
                      <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Historical Sources */}
            {activeTab === 'sources' && (
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Documented Historical Sources & Archives
                </h3>
                <p className="text-xs text-stone-400 mb-6">
                  Every biographical record on Nigeria History Hub follows strict historiographical verification standards prioritizing official records, national archives, and academic research.
                </p>
                <div className="space-y-3">
                  {person.sources.map((src, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-[#165e47] p-3.5 flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="text-xs font-semibold text-stone-100">{src.title}</div>
                        <div className="text-[11px] text-emerald-400 mt-0.5">{src.publisher}</div>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 px-2 py-0.5 rounded bg-black/40 border border-white/5 whitespace-nowrap">
                        Verified Citation
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="border-t border-white/10 bg-[#145742] px-6 py-3 flex items-center justify-between text-xs text-stone-400">
          <span>Nigeria History Hub · Nigeria @ 66 Digital Heritage Platform</span>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white underline underline-offset-4"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
