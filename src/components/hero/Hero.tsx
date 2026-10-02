import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass, Calendar, PlusCircle, CheckCircle2, Sparkles, Mail, User, ZoomIn, Camera } from 'lucide-react';
import { NigeriaCoatOfArms, NigeriaEmblem } from '../common/NigeriaLogo';
import { getCreatorPhoto, handleCreatorPhotoUpload, hasCustomCreatorPhoto } from '../../services/creatorPhoto';
import { CreatorImageLightboxModal } from '../creator/CreatorImageLightboxModal';

interface HeroProps {
  onExploreIcons: () => void;
  onExploreTimeline: () => void;
  onSubmitHero: () => void;
  onOpenCreator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreIcons,
  onExploreTimeline,
  onSubmitHero,
  onOpenCreator,
}) => {
  // Target: October 1, 2026 00:00:00 WAT (West Africa Time, UTC+1)
  const targetDate = new Date('2026-10-01T00:00:00+01:00').getTime();

  const [creatorPhoto, setCreatorPhotoState] = useState<string>(getCreatorPhoto());
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const dataUrl = await handleCreatorPhotoUpload(file);
        setCreatorPhotoState(dataUrl);
      } catch (err) {
        console.error('Failed to upload creator photo:', err);
      }
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      try {
        const dataUrl = await handleCreatorPhotoUpload(file);
        setCreatorPhotoState(dataUrl);
      } catch (err) {
        console.error('Failed to upload dropped photo:', err);
      }
    }
  };

  useEffect(() => {
    const handleUpdate = () => setCreatorPhotoState(getCreatorPhoto());
    window.addEventListener('creator-photo-updated', handleUpdate);
    return () => window.removeEventListener('creator-photo-updated', handleUpdate);
  }, []);

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0d3d2e] pt-12 pb-20">
      {/* Background Ambience: Flag-inspired subtle green & gold gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Green Ribbon */}
        <div className="absolute -left-20 top-0 h-full w-1/3 bg-radial from-[#008751]/20 via-[#008751]/5 to-transparent blur-3xl opacity-60" />
        {/* Right Green Ribbon */}
        <div className="absolute -right-20 top-0 h-full w-1/3 bg-radial from-[#008751]/20 via-[#008751]/5 to-transparent blur-3xl opacity-60" />
        {/* Center Golden Jubilee Radiance */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-radial from-amber-500/10 via-emerald-600/5 to-transparent blur-3xl" />
        {/* Archival Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* National Anniversary Header Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-1.5 text-xs text-emerald-300 backdrop-blur-md mb-6">
          <NigeriaEmblem size="sm" />
          <span className="font-semibold tracking-wider uppercase">NIGERIA @ 66 JUBILEE ARCHIVE</span>
          <span className="text-emerald-500">·</span>
          <span className="text-stone-300">October 1, 1960 → October 1, 2026</span>
        </div>

        {/* Official Coat of Arms Display */}
        <div className="flex justify-center mb-4">
          <NigeriaCoatOfArms className="h-16 w-16 sm:h-20 sm:w-20 transition-transform hover:scale-105" />
        </div>

        {/* Main Display Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          <span className="flex items-center justify-center gap-3 text-stone-300 text-2xl sm:text-3xl lg:text-4xl font-normal tracking-widest uppercase mb-2">
            <span>NIGERIA HISTORY HUB</span>
          </span>
          <span className="bg-gradient-to-r from-emerald-400 via-white to-emerald-400 bg-clip-text text-transparent">
            66 Years of Nigeria
          </span>
        </h1>

        {/* Core Rhythmic Tagline & Platform Definition */}
        <div className="mx-auto max-w-3xl mb-8 space-y-2">
          <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-emerald-200/90 italic font-medium">
            "66 Years of History · 66 Years of People · 66 Years of Ideas"
          </p>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-4">
            <strong className="text-emerald-300 font-semibold">Nigeria History Hub</strong> is the definitive national digital repository celebrating 66 years of sovereign nationhood (1960–2026). Preserving our heritage, documenting iconic pioneers, heroes, and verified historical milestones that define Africa's giant.
          </p>
        </div>

        {/* 3 Call-To-Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onExploreIcons}
            className="group flex items-center gap-2.5 rounded-lg border border-emerald-500/50 bg-[#008751] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/60 transition-all hover:bg-[#009b5d] hover:scale-[1.02]"
          >
            <Compass className="h-4 w-4 transition-transform group-hover:rotate-45" />
            <span>Explore Nigerian Icons</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreTimeline}
            className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-stone-200 backdrop-blur-md transition-all hover:bg-white/10 hover:border-emerald-500/40 hover:text-white"
          >
            <Calendar className="h-4 w-4 text-emerald-400" />
            <span>Explore Nigeria's Timeline</span>
          </button>

          {/* Platform Creator & Lead Architect (Inserted right before Submit a Nigerian Hero) */}
          <button
            onClick={onOpenCreator}
            className="group flex items-center gap-2.5 rounded-lg border border-emerald-400/40 bg-gradient-to-r from-emerald-600/30 via-emerald-500/25 to-emerald-600/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-emerald-600/40 hover:border-emerald-300 hover:scale-[1.02] shadow-lg shadow-emerald-950/40"
          >
            <div className="h-6 w-6 rounded-full overflow-hidden border border-emerald-300 shrink-0 bg-emerald-900 flex items-center justify-center text-[10px] font-bold text-emerald-200 relative">
              <span className="absolute inset-0 flex items-center justify-center font-bold text-[10px] text-emerald-200">
                OR
              </span>
              {creatorPhoto && (
                <img
                  src={creatorPhoto}
                  alt="Oladepo Rokeeb Olayinka"
                  className="h-full w-full object-cover object-top relative z-10"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              )}
            </div>
            <span>Meet the Creator (NYSC)</span>
            <Sparkles className="h-4 w-4 text-amber-300 group-hover:rotate-12 transition-transform" />
          </button>

          <button
            onClick={onSubmitHero}
            className="flex items-center gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-6 py-3.5 text-sm font-medium text-amber-200 backdrop-blur-md transition-all hover:bg-amber-500/20 hover:border-amber-400"
          >
            <PlusCircle className="h-4 w-4 text-amber-400" />
            <span>Submit a Nigerian Hero</span>
          </button>
        </div>

        {/* Creator Highlight Card with Email */}
        <div className="mx-auto max-w-2xl mb-12 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-[#114a38]/90 via-[#165e47]/95 to-[#114a38]/90 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4">
            <div
              className="relative shrink-0 group cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="block rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400"
                title="Click to expand full size, or click camera badge to select original photo"
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-md bg-stone-900 transition-transform group-hover:scale-105 flex items-center justify-center relative">
                  <span className="font-display text-xl font-bold text-emerald-300 absolute inset-0 flex items-center justify-center bg-stone-900">
                    ORO
                  </span>
                  {creatorPhoto && (
                    <img
                      src={creatorPhoto}
                      alt="Oladepo Rokeeb Olayinka"
                      className="h-full w-full object-cover object-top relative z-10"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg border border-white/50 transition-all hover:scale-110 z-10"
                title="Click to choose original photo (WhatsApp Image)"
                aria-label="Upload photo"
              >
                <Camera className="h-3 w-3" />
              </button>

              <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full border border-white/20 pointer-events-none">
                NYSC
              </span>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  Platform Creator & Lead Architect
                </span>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-mono font-semibold">
                  OS/26B/3050
                </span>
              </div>
              <h4 className="font-display text-base font-bold text-white">
                Oladepo Rokeeb Olayinka
              </h4>
              <p className="text-xs text-stone-200">
                Software & AI Engineer · Mathematician · CEO, Alphcast Technologies
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-xs text-emerald-300">
                <Mail className="h-3.5 w-3.5 text-emerald-400" />
                <a
                  href="mailto:oladeporokeeb203@gmail.com"
                  className="font-mono text-[11px] font-bold underline hover:text-white transition-colors"
                >
                  oladeporokeeb203@gmail.com
                </a>
              </div>

              {!hasCustomCreatorPhoto() && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/25 hover:bg-emerald-500/40 text-emerald-100 border border-emerald-400/40 text-[11px] font-semibold transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
                  title="Click to select your WhatsApp photo file once so it saves directly to the repository and server"
                >
                  <Camera className="h-3.5 w-3.5 text-amber-300" />
                  <span>Attach WhatsApp Photo for Vercel</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setLightboxOpen(true)}
              className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-emerald-200 transition-all flex items-center justify-center gap-1.5"
            >
              <ZoomIn className="h-3.5 w-3.5 text-emerald-400" />
              <span>View Photo</span>
            </button>
            <button
              onClick={onOpenCreator}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-xs font-bold text-white transition-all shadow flex items-center justify-center gap-1.5"
            >
              <span>Full Profile</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Live Countdown Area */}
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#165e47]/80 p-5 sm:p-6 backdrop-blur-xl shadow-2xl">
          {timeLeft.isPast ? (
            <div className="py-2 text-center">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-display text-lg sm:text-2xl font-bold">
                <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                Happy 66th Independence Anniversary, Nigeria! 🇳🇬
              </div>
              <p className="text-xs sm:text-sm text-stone-400 mt-2">
                1960 – 2026: Celebrating 66 years of unbroken sovereign nationhood.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-medium">
                  Countdown to Independence Day 2026
                </span>
                <span className="text-xs text-stone-400">October 1, 2026</span>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="rounded-lg bg-black/40 p-2.5 sm:p-3 border border-white/5">
                  <span className="block font-display text-2xl sm:text-4xl font-bold text-white tabular-nums">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400">Days</span>
                </div>
                <div className="rounded-lg bg-black/40 p-2.5 sm:p-3 border border-white/5">
                  <span className="block font-display text-2xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400">Hours</span>
                </div>
                <div className="rounded-lg bg-black/40 p-2.5 sm:p-3 border border-white/5">
                  <span className="block font-display text-2xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400">Minutes</span>
                </div>
                <div className="rounded-lg bg-black/40 p-2.5 sm:p-3 border border-white/5">
                  <span className="block font-display text-2xl sm:text-4xl font-bold text-emerald-400 tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400">Seconds</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 🏆 Homepage Sports Feature Card */}
        <div className="mt-8 max-w-xl mx-auto p-4 sm:p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/30 backdrop-blur-md text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <span className="text-base">🏆</span>
              <span className="tracking-wide">NIGERIAN SPORTING LEGENDS</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-editorial italic">
              Discover the athletes and footballers who made Nigerian sporting history.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('sports-legends');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-nigeria-primary px-4 py-2.5 text-xs font-bold rounded-lg whitespace-nowrap shadow-md flex items-center gap-1.5 self-stretch sm:self-auto justify-center"
          >
            <span>EXPLORE SPORTS HISTORY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Lightbox / Full Photo Viewer */}
        <CreatorImageLightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          imageUrl={creatorPhoto}
        />
      </div>
    </section>
  );
};
