import React from 'react';
import { Person } from '../../types';
import { Sparkles, ArrowRight, HeartHandshake } from 'lucide-react';

interface WomenSectionProps {
  people: Person[];
  onSelectPerson: (person: Person) => void;
}

export const WomenSection: React.FC<WomenSectionProps> = ({ people, onSelectPerson }) => {
  const womenHeroes = people.filter((p) => p.categories.includes('women'));

  return (
    <section id="women" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Distinctive Visual Header */}
      <div className="relative rounded-3xl overflow-hidden border border-rose-500/20 bg-gradient-to-br from-[#1b0d14] via-[#0f090d] to-[#0d3d2e] p-8 sm:p-12 mb-10">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-radial from-rose-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/40 px-3.5 py-1 text-xs text-rose-300 mb-4">
            <HeartHandshake className="h-3.5 w-3.5 text-rose-400" />
            <span className="font-semibold uppercase tracking-wider">HER STORY IS NIGERIA'S STORY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Women Who Shaped Nigeria
          </h2>

          <p className="font-editorial text-lg text-rose-200/90 italic mt-3">
            From anti-colonial tax revolts and Olympic podiums to global trade leadership and life-saving medical vigilance.
          </p>

          <p className="text-xs sm:text-sm text-stone-300 mt-4 leading-relaxed">
            Nigerian women have led revolutions, broken world athletics records, engineered cities, and directed the highest multilateral trade institutions on earth. This archive documents their enduring courage and brilliance.
          </p>
        </div>
      </div>

      {/* Grid of Women Trailblazers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {womenHeroes.map((person) => (
          <div
            key={person.id}
            onClick={() => onSelectPerson(person)}
            className="group cursor-pointer rounded-2xl border border-white/10 bg-[#165e47] overflow-hidden transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-950/20 flex flex-col justify-between"
          >
            <div>
              {/* Image banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                <img
                  src={person.portraitUrl}
                  alt={person.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#165e47] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-rose-400 font-medium">{person.state} State</span>
                  <span className="text-stone-300 text-[11px]">{person.birthDate}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="text-[11px] uppercase tracking-wider text-rose-300 font-medium mb-1">
                  {person.profession.slice(0, 2).join(' · ')}
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                  {person.name}
                </h3>
                <p className="text-xs text-stone-300 mt-2 line-clamp-3 leading-relaxed">
                  {person.whyTheyMatter}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between text-xs font-semibold text-rose-400 group-hover:text-rose-300">
              <span>Read Her Story</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
