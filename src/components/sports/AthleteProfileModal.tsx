import React, { useEffect } from 'react';
import { X, Award, Globe, Shield, Calendar, MapPin, ExternalLink, Activity } from 'lucide-react';
import { AthleteProfileData } from '../../data/sports';

interface AthleteProfileModalProps {
  athlete: AthleteProfileData | null;
  onClose: () => void;
}

export const AthleteProfileModal: React.FC<AthleteProfileModalProps> = ({ athlete, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (athlete) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [athlete, onClose]);

  if (!athlete) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="athlete-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0d3d2e]/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#114a38] border border-[#D8E9DE] dark:border-emerald-800/40 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-[#17352A] dark:text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-[#F4FBF6] dark:bg-[#0d3d2e] border-b border-[#D8E9DE] dark:border-emerald-800/40 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
          <div className="flex items-start sm:items-center gap-5">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-[#008751] shadow-md flex-shrink-0 bg-stone-100 dark:bg-[#165e47]">
              <img
                src={athlete.photoUrl}
                alt={athlete.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#006B3C] dark:text-emerald-400 mb-1">
                <span>{athlete.sport}</span>
                <span aria-hidden="true">·</span>
                <span>{athlete.nationality}</span>
                {athlete.isAtlanta96 && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-700 dark:text-amber-400 font-bold">Atlanta '96 Gold</span>
                  </>
                )}
              </div>
              <h2 id="athlete-modal-title" className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#17352A] dark:text-white">
                {athlete.name}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[#5F746A] dark:text-stone-300 mt-1">
                {athlete.primaryEventOrPosition} {athlete.clubAtTime ? `(${athlete.clubAtTime})` : ''}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#5F746A] dark:text-stone-400 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#008751]" />
                  <span>Era: {athlete.era}</span>
                </span>
                {athlete.birthDate && (
                  <span className="flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-[#008751]" />
                    <span>Born: {athlete.birthDate}</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-stone-500 hover:text-stone-900 dark:hover:text-white bg-white/80 dark:bg-[#165e47] border border-stone-200 dark:border-emerald-800/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Tagline Banner */}
          <div className="p-4 rounded-xl bg-[#EAF7EF] dark:bg-emerald-950/40 border border-[#D8E9DE] dark:border-emerald-800/40 text-sm font-medium text-[#006B3C] dark:text-emerald-300">
            {athlete.tagline}
          </div>

          {/* Biography */}
          <section className="space-y-3">
            <h3 className="text-base font-bold tracking-tight text-[#17352A] dark:text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#008751]" />
              <span>Career & Biography</span>
            </h3>
            <p className="text-sm leading-relaxed text-[#274538] dark:text-stone-300 font-editorial">
              {athlete.biography}
            </p>
          </section>

          {/* Major Achievements */}
          <section className="space-y-3">
            <h3 className="text-base font-bold tracking-tight text-[#17352A] dark:text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-[#008751]" />
              <span>Documented Achievements</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {athlete.achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-[#D8E9DE] dark:border-emerald-800/30 bg-[#F4FBF6] dark:bg-[#145742] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#006B3C] dark:text-emerald-400">{ach.competition}</span>
                    <span className="text-stone-500 dark:text-stone-400">{ach.year}</span>
                  </div>
                  <p className="text-xs text-[#274538] dark:text-stone-300 leading-normal">{ach.description}</p>
                  {ach.medal && (
                    <div className="mt-2 pt-2 border-t border-[#D8E9DE]/60 dark:border-emerald-900/20 text-[11px] font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                      <span>🏅</span>
                      <span>{ach.medal}</span>
                      {ach.event && <span>· {ach.event}</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* International Record & National Team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <section className="space-y-3">
              <h3 className="text-base font-bold tracking-tight text-[#17352A] dark:text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#008751]" />
                <span>International Record</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#274538] dark:text-stone-300">
                {athlete.internationalRecord.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#008751] font-bold mt-0.5">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
              {athlete.nationalTeamRecord && (
                <div className="text-xs text-[#5F746A] dark:text-stone-400 pt-2 border-t border-[#D8E9DE] dark:border-emerald-900/40">
                  <span className="font-bold text-[#17352A] dark:text-stone-200">National Team: </span>
                  {athlete.nationalTeamRecord}
                </div>
              )}
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold tracking-tight text-[#17352A] dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-[#008751]" />
                <span>Honours & National Awards</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#274538] dark:text-stone-300">
                {athlete.awards.map((awd, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#008751] font-bold mt-0.5">✓</span>
                    <span>{awd}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sporting Impact */}
          <section className="p-4 rounded-xl bg-white dark:bg-[#145742] border border-[#D8E9DE] dark:border-emerald-800/40 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#006B3C] dark:text-emerald-400">
              National Sporting Impact & Legacy
            </h4>
            <p className="text-xs sm:text-sm text-[#274538] dark:text-stone-300 leading-relaxed">
              {athlete.sportingImpact}
            </p>
          </section>

          {/* Where Are They Now? */}
          {athlete.whereAreTheyNow && (
            <section className="p-4 rounded-xl bg-[#F4FBF6] dark:bg-[#145742] border border-[#D8E9DE] dark:border-emerald-800/30 space-y-1">
              <h4 className="text-xs font-bold text-[#17352A] dark:text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#008751]" />
                <span>Where Are They Now?</span>
              </h4>
              <p className="text-xs text-[#5F746A] dark:text-stone-300 leading-relaxed">
                {athlete.whereAreTheyNow}
              </p>
            </section>
          )}

          {/* Verified Sources */}
          <section className="pt-4 border-t border-[#D8E9DE] dark:border-emerald-800/30 space-y-2 text-xs text-[#5F746A] dark:text-stone-400">
            <div className="font-bold text-[#17352A] dark:text-stone-300 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-[#008751]" />
              <span>Verified Archival & Tournament Sources</span>
            </div>
            <ul className="space-y-1 text-[11px] list-disc list-inside">
              {athlete.sources.map((src, idx) => (
                <li key={idx}>{src}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F4FBF6] dark:bg-[#0d3d2e] border-t border-[#D8E9DE] dark:border-emerald-800/40 flex items-center justify-between">
          <span className="text-xs text-[#5F746A] dark:text-stone-400">
            Nigeria History Hub · Official Sports Digital Archive
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#006B3C] text-white hover:bg-[#064E3B] transition-colors"
          >
            Close Record
          </button>
        </div>
      </div>
    </div>
  );
};
