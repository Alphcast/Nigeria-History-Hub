import React from 'react';
import { Person } from '../../types';
import { Award, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';

interface SixtySixCohortSectionProps {
  people: Person[];
  onSelectPerson: (person: Person) => void;
}

export const SixtySixCohortSection: React.FC<SixtySixCohortSectionProps> = ({
  people,
  onSelectPerson,
}) => {
  // Focus on cohort figures
  const cohort = people.filter((p) => p.editorialTier === '66-cohort' || p.featured);

  return (
    <section id="sixty-six" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-[#121c15] via-[#07100b] to-[#0d3d2e] p-6 sm:p-10 md:p-12 relative overflow-hidden">
        {/* Subtle Ambient Gold Radiance */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-radial from-amber-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-3.5 py-1 text-xs text-amber-300 mb-4">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <span className="font-semibold uppercase tracking-wider">Curated Independence Feature</span>
            </div>

            <div className="flex items-center gap-3">
              <NigeriaEmblem size="md" />
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                66 Nigerians Who Shaped Nigeria
              </h2>
            </div>

            {/* Transparent Editorial Statement (Mandatory requirement from specification) */}
            <blockquote className="mt-4 border-l-2 border-amber-400/80 pl-4 py-1 text-sm sm:text-base text-amber-100/90 font-editorial italic leading-relaxed">
              "66 Nigerians whose documented contributions represent important chapters in Nigeria's story."
            </blockquote>

            <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
              Transparent Editorial Note: This selection does not imply an exclusive hierarchy of "the greatest." Rather, it curates 66 individuals across state origins, genders, eras, and disciplines whose verified breakthroughs, sacrifices, and institutions established the foundations of modern Nigeria.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cohort.slice(0, 12).map((person, idx) => (
              <div
                key={person.id}
                onClick={() => onSelectPerson(person)}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-black/40 p-4 transition-all duration-300 hover:border-amber-500/40 hover:bg-[#0a2e21]/60 flex items-start gap-4"
              >
                {/* Cohort Number */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-300 tabular-nums">
                  #{String(idx + 1).padStart(2, '0')}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                    <span>{person.state} State</span>
                    <span>·</span>
                    <span className="text-emerald-400 truncate">{person.categories[0]}</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {person.name}
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2 leading-relaxed">
                    {person.whyTheyMatter}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-amber-400 group-hover:text-amber-300">
                    <span>Read verified record</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Verified by Nigeria History Hub National Archival Standards
            </span>
            <span className="font-mono text-stone-300">66 Cohort · 1960–2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
