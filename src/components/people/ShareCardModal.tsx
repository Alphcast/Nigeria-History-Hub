import React, { useState } from 'react';
import { Person } from '../../types';
import { X, Copy, Check, MessageSquare, Twitter, Facebook, Linkedin } from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';

interface ShareCardModalProps {
  person: Person | null;
  onClose: () => void;
}

export const ShareCardModal: React.FC<ShareCardModalProps> = ({ person, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!person) return null;

  const currentUrl = window.location.href;
  const shareText = `Discover the story of ${person.name} on Nigeria History Hub (Nigeria @ 66) 🇳🇬`;

  const copyLink = () => {
    navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${currentUrl}`)}`, '_blank');
  };

  const shareX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a2e21]/80 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#165e47] p-6 shadow-2xl text-stone-100">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="font-display text-sm font-semibold text-emerald-400">
            Create Share Card
          </span>
          <button onClick={onClose} className="text-stone-400 hover:text-white" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Visual Share Card Mockup */}
        <div className="mt-5 overflow-hidden rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-[#062417] via-[#04120b] to-[#0d3d2e] p-6 shadow-xl relative">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-emerald-400 mb-6">
            <div className="flex items-center gap-2">
              <NigeriaEmblem size="sm" />
              <span className="font-display font-bold text-white tracking-wider">NIGERIA HISTORY HUB</span>
            </div>
            <span>NIGERIA @ 66</span>
          </div>

          <div className="my-6">
            <h3 className="font-display text-2xl font-bold text-white tracking-wide">
              {person.name}
            </h3>
            <p className="text-xs text-emerald-300/90 font-medium mt-1">
              {person.positions[0]?.title || person.profession.join(' · ')}
            </p>
            <p className="text-xs text-stone-300 font-editorial italic mt-4 border-l border-emerald-500/40 pl-3">
              "A defining chapter in Nigeria’s 66-year journey."
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
            <span>October 1, 1960 — October 1, 2026</span>
            <span className="text-emerald-400 font-medium">{person.state} State</span>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="mt-6 grid grid-cols-4 gap-2">
          <button
            onClick={shareWhatsApp}
            className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3 text-xs text-emerald-400 hover:bg-[#008751]/20 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="text-[10px]">WhatsApp</span>
          </button>
          <button
            onClick={shareX}
            className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3 text-xs text-stone-300 hover:bg-white/10 transition-colors"
          >
            <Twitter className="h-4 w-4" />
            <span className="text-[10px]">X (Twitter)</span>
          </button>
          <button
            onClick={shareFacebook}
            className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3 text-xs text-stone-300 hover:bg-white/10 transition-colors"
          >
            <Facebook className="h-4 w-4" />
            <span className="text-[10px]">Facebook</span>
          </button>
          <button
            onClick={shareLinkedIn}
            className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3 text-xs text-stone-300 hover:bg-white/10 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span className="text-[10px]">LinkedIn</span>
          </button>
        </div>

        {/* Copy Link Button */}
        <button
          onClick={copyLink}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 py-2.5 text-xs font-semibold text-stone-200 hover:bg-white/20 transition-colors"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          <span>{copied ? 'Link Copied to Clipboard!' : 'Copy Shareable Link'}</span>
        </button>
      </div>
    </div>
  );
};
