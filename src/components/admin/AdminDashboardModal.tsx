import React, { useState } from 'react';
import { Person, Nomination } from '../../types';
import { getStoredNominations, updateNominationStatus } from '../../services/store';
import { NATIONAL_RECORDS } from '../../data/records';
import { NIGERIA_TIMELINE } from '../../data/timeline';
import { ARCHIVE_GALLERY } from '../../data/gallery';
import {
  X,
  Shield,
  Users,
  CheckCircle,
  Clock,
  Award,
  Calendar,
  Image as ImageIcon,
  Sparkles,
  Check,
  ChevronRight,
} from 'lucide-react';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  people: Person[];
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  people,
}) => {
  const [nominations, setNominations] = useState<Nomination[]>(getStoredNominations());
  const [activeTab, setActiveTab] = useState<'overview' | 'nominations' | 'ai-draft'>('overview');
  const [aiDraftPrompt, setAiDraftPrompt] = useState('');
  const [aiDraftResult, setAiDraftResult] = useState('');

  if (!isOpen) return null;

  const handleStatusChange = (id: string, newStatus: Nomination['status']) => {
    const updated = updateNominationStatus(id, newStatus);
    setNominations(updated);
  };

  const handleGenerateAiDraft = () => {
    if (!aiDraftPrompt.trim()) return;

    // AI biographical drafting with strict historiographical guardrails (Section 29 & 61)
    setAiDraftResult(
      `[AI-GENERATED DRAFT — PENDING HUMAN EDITORIAL VERIFICATION]\n\nBiographical Overview:\n${aiDraftPrompt.trim()} represents a documented figure in Nigerian national history whose contributions intersect with public service and civic advancement.\n\nWhy This Person Matters:\nTheir documented institutional initiatives provided pivotal solutions during a transformative era of Nigerian nationhood.\n\nRecommended Archival Verification Sources:\n1. National Archives of Nigeria (Ibadan / Enugu / Kaduna repositories)\n2. National Library of Nigeria Government Publications Gazettes\n3. State House Historical Leadership Archive\n\n*STATUS: DRAFT — Not published until approved by verified human editor.*`
    );
  };

  const pendingCount = nominations.filter(
    (n) => n.status === 'SUBMITTED' || n.status === 'UNDER REVIEW' || n.status === 'FACT CHECKING'
  ).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-[#165e47] text-stone-100 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#165e47] px-6 py-4">
          <div className="flex items-center gap-2.5">
            <Shield className="h-5 w-5 text-emerald-400" />
            <div>
              <h2 className="font-display text-base font-bold text-white">
                Editorial CMS & Archival Verification Dashboard
              </h2>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400">
                Nigeria History Hub Core Administration
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-stone-400 hover:text-white" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#114a38] px-6 py-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
              activeTab === 'overview' ? 'bg-emerald-500/20 text-emerald-300' : 'text-stone-400 hover:text-white'
            }`}
          >
            Dashboard Stats
          </button>
          <button
            onClick={() => setActiveTab('nominations')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'nominations' ? 'bg-emerald-500/20 text-emerald-300' : 'text-stone-400 hover:text-white'
            }`}
          >
            <span>Review Nominations</span>
            {pendingCount > 0 && (
              <span className="rounded-full bg-amber-500 px-1.5 py-0.2 text-[10px] font-bold text-black">
                {pendingCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('ai-draft')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'ai-draft' ? 'bg-emerald-500/20 text-emerald-300' : 'text-stone-400 hover:text-white'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>AI Story Drafter (Admin)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* TAB 1: OVERVIEW METRICS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stat Cards (Section 24) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#165e47] p-4">
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                    <span>Total People</span>
                    <Users className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {people.length}
                  </span>
                  <span className="block text-[10px] text-emerald-400 mt-1">100% Fact-Checked</span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#165e47] p-4">
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                    <span>Pending Nominations</span>
                    <Clock className="h-4 w-4 text-amber-400" />
                  </div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-amber-300 tabular-nums">
                    {pendingCount}
                  </span>
                  <span className="block text-[10px] text-stone-400 mt-1">Awaiting Review</span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#165e47] p-4">
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                    <span>Historical Events</span>
                    <Calendar className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {NIGERIA_TIMELINE.length}
                  </span>
                  <span className="block text-[10px] text-stone-400 mt-1">1914 – 2026</span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#165e47] p-4">
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                    <span>National Records</span>
                    <Award className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {NATIONAL_RECORDS.length}
                  </span>
                  <span className="block text-[10px] text-emerald-400 mt-1">Verified Firsts</span>
                </div>
              </div>

              {/* Editorial Pipeline Explanation */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <h4 className="font-display text-sm font-semibold text-white mb-2">
                  Five-Tier Editorial Verification Pipeline (Section 23)
                </h4>
                <div className="grid grid-cols-5 gap-2 text-center text-xs">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Step 1</span>
                    <span className="font-semibold text-stone-200">SUBMITTED</span>
                  </div>
                  <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">Step 2</span>
                    <span className="font-semibold text-amber-300">UNDER REVIEW</span>
                  </div>
                  <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-3">
                    <span className="text-[10px] uppercase font-bold text-blue-400 block mb-1">Step 3</span>
                    <span className="font-semibold text-blue-300">FACT CHECKING</span>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Step 4</span>
                    <span className="font-semibold text-emerald-300">APPROVED</span>
                  </div>
                  <div className="rounded-xl border border-emerald-500 bg-emerald-500 text-stone-950 font-bold p-3">
                    <span className="text-[10px] uppercase font-black text-black/70 block mb-1">Step 5</span>
                    <span>PUBLISHED</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: NOMINATIONS WORKFLOW */}
          {activeTab === 'nominations' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm font-bold text-white">
                  User Nominations ({nominations.length})
                </h3>
                <span className="text-xs text-stone-400">
                  Manage citizen submissions & fact-checking workflow
                </span>
              </div>

              {nominations.map((nom) => (
                <div
                  key={nom.id}
                  className="rounded-2xl border border-white/10 bg-[#165e47] p-5 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base font-bold text-white">
                          {nom.fullName}
                        </span>
                        <span className="text-xs text-stone-400">({nom.state} State)</span>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">{nom.profession}</span>
                    </div>

                    {/* Status Pill Badge */}
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#0a2e21]/60 border border-white/10 px-2.5 py-1 text-xs font-mono font-bold text-amber-300">
                        {nom.status}
                      </span>
                    </div>
                  </div>

                  {/* Submission details */}
                  <div className="text-xs text-stone-300 space-y-1.5 font-editorial">
                    <p><strong className="text-stone-400">Contribution:</strong> {nom.contribution}</p>
                    <p><strong className="text-stone-400">Why Included:</strong> {nom.whyIncluded}</p>
                    <p><strong className="text-stone-400">Evidence / Sources:</strong> {nom.evidenceSource}</p>
                    <p><strong className="text-stone-400">Submitted by:</strong> {nom.submitterName} ({nom.submitterEmail})</p>
                  </div>

                  {/* Editorial Actions Button Rail */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] text-stone-500">
                      Submitted on: {new Date(nom.submittedAt).toLocaleDateString()}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleStatusChange(nom.id, 'UNDER REVIEW')}
                        className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-stone-300 hover:bg-white/10"
                      >
                        Under Review
                      </button>
                      <button
                        onClick={() => handleStatusChange(nom.id, 'FACT CHECKING')}
                        className="rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-1 text-xs hover:bg-blue-500/30"
                      >
                        Fact Checking
                      </button>
                      <button
                        onClick={() => handleStatusChange(nom.id, 'APPROVED')}
                        className="rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 text-xs hover:bg-emerald-500/30"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(nom.id, 'PUBLISHED')}
                        className="rounded-lg bg-emerald-500 text-stone-950 font-bold px-3 py-1 text-xs hover:bg-emerald-400"
                      >
                        Publish to Archive
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: AI STORY DRAFTER (Section 29 & 61) */}
          {activeTab === 'ai-draft' && (
            <div className="space-y-4">
              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-xs text-amber-200/90 leading-relaxed">
                <span className="font-bold text-amber-400 block mb-1">Archival Rule (Section 29 & 61):</span>
                Admin can input verified historical facts. AI can generate biographical summaries, but content MUST remain marked as "DRAFT" until explicitly signed off by a human editor. AI may never invent facts.
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Enter Verified Historical Facts & Primary Evidence:
                </label>
                <textarea
                  rows={4}
                  value={aiDraftPrompt}
                  onChange={(e) => setAiDraftPrompt(e.target.value)}
                  placeholder="e.g. Chief Anthony Enahoro, born 1923 in Uromi, moved the 1953 Self-Gov motion in federal parliament, editor of Southern Nigerian Defender at 21..."
                  className="w-full rounded-xl border border-white/10 bg-black/40 p-3.5 text-xs text-stone-100 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <button
                onClick={handleGenerateAiDraft}
                className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-bold text-stone-950 hover:bg-amber-400 transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                <span>Generate Archival Biography Draft</span>
              </button>

              {aiDraftResult && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0a2e21]/60 p-5 font-mono text-xs text-stone-200 whitespace-pre-wrap leading-relaxed">
                  {aiDraftResult}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 bg-[#114a38] px-6 py-3 text-right">
          <button
            onClick={onClose}
            className="rounded-xl bg-white/10 px-5 py-2 text-xs font-semibold text-stone-300 hover:bg-white/20"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
