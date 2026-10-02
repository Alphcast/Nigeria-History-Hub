import React, { useState, useEffect } from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';
import { getCreatorPhoto } from '../../services/creatorPhoto';
import { CreatorImageLightboxModal } from '../creator/CreatorImageLightboxModal';

interface FooterProps {
  onOpenNominate: () => void;
  onOpenAdmin: () => void;
  onOpenAI: () => void;
  setActiveSection: (sec: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenNominate,
  onOpenAdmin,
  onOpenAI,
  setActiveSection,
}) => {
  const [creatorPhoto, setCreatorPhotoState] = useState<string>(getCreatorPhoto());
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleUpdate = () => setCreatorPhotoState(getCreatorPhoto());
    window.addEventListener('creator-photo-updated', handleUpdate);
    return () => window.removeEventListener('creator-photo-updated', handleUpdate);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#0d3d2e] text-stone-300 pt-16 pb-12 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <NigeriaEmblem size="lg" className="shrink-0" />
              <div>
                <span className="font-display block text-lg font-bold text-white tracking-wider">
                  NIGERIA HISTORY HUB
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-emerald-400">
                  Federal Republic of Nigeria · @ 66
                </span>
              </div>
            </div>

            <p className="font-editorial text-sm text-stone-300 italic max-w-sm leading-relaxed">
              "Celebrating the People. Preserving the Stories. Recording the Legacy."
            </p>

            <p className="text-xs text-stone-300 max-w-sm leading-relaxed">
              <strong className="text-emerald-300 font-semibold">Nigeria History Hub</strong> is Nigeria's definitive digital heritage archive and living historiography platform, preserving 66+ years of national heritage, sovereign milestones, national heroes, cultural titans, and verified records from independence (1960) to the present day.
            </p>

            {/* Required Historical Project Note */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-[11px] text-stone-400 leading-relaxed max-w-sm">
              <span className="text-emerald-400 font-semibold block mb-0.5">Historical Notice:</span>
              Nigeria History Hub is an educational and digital archive project documenting Nigeria's people, institutions, achievements, and national development. Historical information is presented using reliable sources and verified with strict historiographical context.
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-stone-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Grounded in National Archives & Primary Historiography</span>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-white font-bold mb-4">
              Explore Archive
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollTo('heroes')} className="hover:text-emerald-400 transition-colors">
                  Nigerian Icons & Heroes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('timeline')} className="hover:text-emerald-400 transition-colors">
                  Independence Timeline
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('regional-history')} className="hover:text-emerald-400 transition-colors font-medium text-emerald-400">
                  Regional Development History
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('leaders')} className="hover:text-emerald-400 transition-colors">
                  Presidents & Heads of State
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('records')} className="hover:text-emerald-400 transition-colors">
                  National Records & Firsts
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('map')} className="hover:text-emerald-400 transition-colors">
                  36 States & FCT Cartography
                </button>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-white font-bold mb-4">
              Special Archives
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollTo('women')} className="hover:text-emerald-400 transition-colors">
                  Women of Nigeria
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('gallery')} className="hover:text-emerald-400 transition-colors">
                  Archival Visual Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('learn')} className="hover:text-emerald-400 transition-colors">
                  Learn Nigeria & Quiz Mode
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('on-this-day')} className="hover:text-emerald-400 transition-colors">
                  Today in Nigerian History
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('sixty-six')} className="hover:text-emerald-400 transition-colors">
                  66 Nigerians Cohort
                </button>
              </li>
            </ul>
          </div>

          {/* Community & Interactive */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-white font-bold mb-4">
              Participation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenNominate} className="text-emerald-400 hover:text-emerald-300 font-semibold">
                  + Nominate a Nigerian Hero
                </button>
              </li>
              <li>
                <button onClick={onOpenAI} className="text-amber-400 hover:text-amber-300 font-semibold">
                  Ask Nigeria History AI
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="text-stone-400 hover:text-white transition-colors">
                  Editorial Admin CMS
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="flex items-center gap-2">
            <NigeriaEmblem size="sm" />
            <span>Built with reverence for Nigerian history & people</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-stone-400">
            <span>October 1, 1960 — October 1, 2026</span>
            <span>·</span>
            <span>66 Years of Independence</span>
          </div>
        </div>

        {/* Creator Attribution Banner */}
        <div className="mt-6 pt-6 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-300 gap-4 bg-[#114a38]/60 p-4 rounded-2xl border border-emerald-500/30">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="h-10 w-10 rounded-xl overflow-hidden border border-emerald-400 shadow shrink-0 bg-stone-900 cursor-pointer hover:opacity-90 hover:scale-105 transition-all"
              title="Click to view full photo"
            >
              <img
                src={creatorPhoto}
                alt="Oladepo Rokeeb Olayinka"
                className="h-full w-full object-cover object-top"
              />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold block text-sm">Oladepo Rokeeb Olayinka</span>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-mono font-semibold">
                  NYSC: OS/26B/3050
                </span>
              </div>
              <span className="text-stone-300 text-[11px] block">
                Platform Creator & Lead Architect · Software & AI Engineer · CEO, Alphcast Technologies
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400">Direct Inquiries:</span>
            <a
              href="mailto:oladeporokeeb203@gmail.com"
              className="font-mono text-emerald-300 font-bold hover:underline hover:text-white transition-colors"
            >
              oladeporokeeb203@gmail.com
            </a>
          </div>
        </div>

        {/* Lightbox / Full Photo Viewer */}
        <CreatorImageLightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          imageUrl={creatorPhoto}
        />
      </div>
    </footer>
  );
};
