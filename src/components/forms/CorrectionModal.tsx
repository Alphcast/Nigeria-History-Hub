import React, { useState } from 'react';
import { Person } from '../../types';
import { saveCorrectionReport } from '../../services/store';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';

interface CorrectionModalProps {
  person: Person | null;
  onClose: () => void;
}

export const CorrectionModal: React.FC<CorrectionModalProps> = ({ person, onClose }) => {
  const [fieldError, setFieldError] = useState('');
  const [suggestedCorrection, setSuggestedCorrection] = useState('');
  const [sourceEvidence, setSourceEvidence] = useState('');
  const [submitterEmail, setSubmitterEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!person) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestedCorrection || !sourceEvidence) return;

    saveCorrectionReport({
      personId: person.id,
      personName: person.name,
      fieldError: fieldError || 'General biographical detail',
      suggestedCorrection,
      sourceEvidence,
      submitterEmail,
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a2e21]/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#165e47] p-6 shadow-2xl text-stone-100">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <span className="font-display text-sm font-semibold text-white">
              Report a Correction · {person.name}
            </span>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-white" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-emerald-400 mb-3" />
            <h3 className="font-display text-lg font-bold text-white">Thank You for Your Report</h3>
            <p className="text-xs text-stone-300 mt-2 max-w-md mx-auto leading-relaxed">
              Your suggested historical correction has been submitted to the Nigeria History Hub editorial board for archival verification against primary records.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-emerald-600 px-6 py-2 text-xs font-semibold text-white hover:bg-emerald-500"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <p className="text-xs text-stone-400 leading-relaxed">
              Our editorial standards require authoritative sources (National Archives, State House, National Library, academic monographs) before any biographical record is amended.
            </p>

            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1">
                What item or claim requires review?
              </label>
              <input
                type="text"
                value={fieldError}
                onChange={(e) => setFieldError(e.target.value)}
                placeholder="e.g. Date of appointment, title, timeline event"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1">
                Suggested Historical Correction *
              </label>
              <textarea
                required
                rows={3}
                value={suggestedCorrection}
                onChange={(e) => setSuggestedCorrection(e.target.value)}
                placeholder="Provide the accurate historical fact or revision..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1">
                Authoritative Evidence / Citation *
              </label>
              <input
                type="text"
                required
                value={sourceEvidence}
                onChange={(e) => setSourceEvidence(e.target.value)}
                placeholder="e.g. National Archives Ibadan Series Vol. 4, Gazette No. 22"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1">
                Your Email (Optional, for editorial follow-up)
              </label>
              <input
                type="email"
                value={submitterEmail}
                onChange={(e) => setSubmitterEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl px-4 py-2 text-xs text-stone-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-[#008751] px-5 py-2 text-xs font-semibold text-white hover:bg-[#009b5d] transition-colors"
              >
                Submit for Editorial Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
