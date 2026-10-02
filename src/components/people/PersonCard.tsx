import React, { useState } from 'react';
import { Person } from '../../types';
import { Bookmark, ArrowUpRight, Award, CheckCircle } from 'lucide-react';

interface PersonCardProps {
  person: Person;
  onSelect: (person: Person) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  person,
  onSelect,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [imgError, setImgError] = useState(false);

  const primaryPosition = person.positions && person.positions.length > 0 ? person.positions[0] : null;
  const primaryContribution = person.contributions && person.contributions.length > 0 ? person.contributions[0] : null;

  return (
    <article
      onClick={() => onSelect(person)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#165e47] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/30 flex flex-col justify-between"
    >
      {/* Image Container with measured scrim */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-900">
        {!imgError ? (
          <img
            src={person.portraitUrl}
            alt={person.name}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-emerald-950 via-stone-900 to-[#0d3d2e] p-6 text-center">
            <span className="text-4xl mb-2">🇳🇬</span>
            <span className="font-display text-sm font-semibold text-stone-200">{person.name}</span>
            <span className="text-xs text-emerald-400/80 mt-1">National Archive Heritage</span>
          </div>
        )}

        {/* Ambient Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#165e47] via-[#114a38]/20 to-transparent" />

        {/* Top Floating Controls */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          {/* Verified Badge */}
          {person.verified && (
            <span className="inline-flex items-center gap-1 rounded bg-[#0a2e21]/60 px-2 py-1 text-[10px] font-medium text-emerald-400 backdrop-blur-md border border-emerald-500/20">
              <CheckCircle className="h-3 w-3 text-emerald-400" />
              Verified Record
            </span>
          )}

          {/* Bookmark Button */}
          <button
            onClick={(e) => onToggleBookmark(person.id, e)}
            className={`rounded-full p-2 backdrop-blur-md transition-colors ${
              isBookmarked
                ? 'bg-amber-500 text-stone-950'
                : 'bg-[#0a2e21]/50 text-stone-300 hover:bg-[#0a2e21]/80 hover:text-white'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark hero'}
            aria-label="Bookmark hero"
          >
            <Bookmark className="h-3.5 w-3.5 fill-current" />
          </button>
        </div>

        {/* State & Era Tag on bottom of image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-stone-300 z-10">
          <span className="text-emerald-400 font-medium">{person.state} State</span>
          {primaryPosition?.era && (
            <span className="text-stone-400 truncate max-w-[140px]">{primaryPosition.era}</span>
          )}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata (Zero-Pill discipline) */}
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 uppercase tracking-wider font-medium mb-1">
            <span>{person.categories[0]?.replace('-', ' ')}</span>
            {person.birthDate && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-stone-400 lowercase">{person.birthDate.split(',')[0]}</span>
              </>
            )}
          </div>

          {/* Name */}
          <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
            {person.name}
          </h3>

          {/* Office / Profession */}
          <p className="text-xs text-stone-300 font-medium mt-0.5 line-clamp-1">
            {primaryPosition?.title || person.profession.join(' · ')}
          </p>

          {/* Contribution teaser */}
          {primaryContribution && (
            <p className="text-xs text-stone-400 mt-2.5 line-clamp-2 leading-relaxed">
              {primaryContribution.description}
            </p>
          )}
        </div>

        {/* Card Footer Callout */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-medium text-emerald-400 group-hover:text-emerald-300">
          <span>Read Story</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
};
