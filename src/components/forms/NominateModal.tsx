import React, { useState } from 'react';
import { CategoryType } from '../../types';
import { saveNomination } from '../../services/store';
import { NIGERIA_STATES_DATA } from '../../data/states';
import { X, CheckCircle, PlusCircle, AlertCircle } from 'lucide-react';

interface NominateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: 'independence', label: 'Independence Heroes' },
  { id: 'leadership', label: 'National Leaders' },
  { id: 'women', label: 'Women of Nigeria' },
  { id: 'science-tech', label: 'Science & Technology' },
  { id: 'business', label: 'Business & Industry' },
  { id: 'sports', label: 'Sports Pioneers' },
  { id: 'entertainment', label: 'Entertainment & Music' },
  { id: 'literature', label: 'Literature & Letters' },
  { id: 'education', label: 'Education & Academia' },
  { id: 'culture', label: 'Culture & Arts' },
  { id: 'activists', label: 'Activists & Human Rights' },
  { id: 'innovators', label: 'Innovators & Inventors' },
  { id: 'youth-emerging', label: 'Youth & Emerging Heroes' },
];

export const NominateModal: React.FC<NominateModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [category, setCategory] = useState<CategoryType>('innovators');
  const [state, setState] = useState('Lagos');
  const [profession, setProfession] = useState('');
  const [contribution, setContribution] = useState('');
  const [whyIncluded, setWhyIncluded] = useState('');
  const [evidenceSource, setEvidenceSource] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [websiteSocial, setWebsiteSocial] = useState('');
  const [submitterName, setSubmitterName] = useState('');
  const [submitterEmail, setSubmitterEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !profession || !contribution || !whyIncluded || !evidenceSource) return;

    saveNomination({
      fullName,
      category,
      state,
      profession,
      contribution,
      whyIncluded,
      evidenceSource,
      photoUrl: photoUrl || undefined,
      websiteSocial: websiteSocial || undefined,
      submitterName: submitterName || 'Anonymous Citizen',
      submitterEmail: submitterEmail || 'citizen@heritage.ng',
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setProfession('');
    setContribution('');
    setWhyIncluded('');
    setEvidenceSource('');
    setPhotoUrl('');
    setWebsiteSocial('');
    setSubmitterName('');
    setSubmitterEmail('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0a2e21]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#165e47] p-6 sm:p-8 shadow-2xl text-stone-100 my-8">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5 text-emerald-400" />
            <h2 className="font-display text-lg sm:text-xl font-bold text-white">
              Nominate a Nigerian Hero
            </h2>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-white" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-emerald-400 mb-4" />
            <h3 className="font-display text-2xl font-bold text-white">
              Nomination Successfully Received
            </h3>
            <p className="text-sm text-stone-300 mt-2 max-w-md mx-auto leading-relaxed">
              Thank you. Your nomination has been received and will be reviewed by our editorial team.
            </p>
            <p className="text-xs text-stone-400 mt-3 max-w-md mx-auto font-editorial italic">
              In accordance with Section 23 of our editorial policy, nominations undergo five-stage verification (Submitted → Under Review → Fact Checking → Approved → Published) before public archival listing.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 rounded-xl bg-[#008751] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#009b5d] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/30 p-3.5 text-xs text-stone-300 leading-relaxed">
              <span className="font-semibold text-emerald-400 block mb-0.5">Editorial Standards:</span>
              Nominate a Nigerian (living or historical) whose documented contributions, innovations, or service represent a notable chapter in Nigeria's heritage. All submissions require third-party evidence.
            </div>

            {/* Full Name & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Full Name of Nominee *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Chief Margaret Ekpo, Dr. Philip Emeagwali"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  State of Origin *
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
                >
                  {NIGERIA_STATES_DATA.map((st) => (
                    <option key={st.code} value={st.name}>
                      {st.name} State
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category & Profession */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as CategoryType)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Profession / Office *
                </label>
                <input
                  type="text"
                  required
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  placeholder="e.g. Bio-medical Inventor, Agronomist, Jurist"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Contribution */}
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1">
                Major Documented Contribution *
              </label>
              <textarea
                required
                rows={2}
                value={contribution}
                onChange={(e) => setContribution(e.target.value)}
                placeholder="What did this person build, discover, lead, or pioneer for Nigeria?"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            {/* Why Included */}
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1">
                Why should this person be included in Nigeria History Hub? *
              </label>
              <textarea
                required
                rows={3}
                value={whyIncluded}
                onChange={(e) => setWhyIncluded(e.target.value)}
                placeholder="Explain the enduring historical, cultural, or scientific significance..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            {/* Evidence / Source */}
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1">
                Evidence / Authoritative Sources *
              </label>
              <input
                type="text"
                required
                value={evidenceSource}
                onChange={(e) => setEvidenceSource(e.target.value)}
                placeholder="e.g. National Library catalog, patent record, newspaper publication, academic journal"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            {/* Photo & Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Portrait / Photo Link (Optional)
                </label>
                <input
                  type="url"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Website or Profile Link (Optional)
                </label>
                <input
                  type="url"
                  value={websiteSocial}
                  onChange={(e) => setWebsiteSocial(e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Submitter Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={submitterName}
                  onChange={(e) => setSubmitterName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={submitterEmail}
                  onChange={(e) => setSubmitterEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl px-4 py-2 text-xs text-stone-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-[#008751] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#009b5d] transition-colors"
              >
                Submit Nomination
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
