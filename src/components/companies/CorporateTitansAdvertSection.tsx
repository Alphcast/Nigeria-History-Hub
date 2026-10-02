import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  Award,
} from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';
import { CORPORATE_TITANS, CorporateTitan } from '../../data/corporateTitans';

export const CorporateTitansAdvertSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showAllGrid, setShowAllGrid] = useState(false);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const SLIDE_DURATION = 4500; // 4.5 seconds per advert slide
  const TICK_INTERVAL = 50;

  const currentCompany: CorporateTitan = CORPORATE_TITANS[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CORPORATE_TITANS.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CORPORATE_TITANS.length) % CORPORATE_TITANS.length);
    setProgress(0);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }
    touchStartXRef.current = null;
  };

  const handleSelectCompany = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    setIsPlaying(false); // Pause so user can inspect
  };

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const step = (TICK_INTERVAL / SLIDE_DURATION) * 100;
    progressTimerRef.current = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          handleNext();
          return 0;
        }
        return old + step;
      });
    }, TICK_INTERVAL);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying, handleNext]);

  const filteredTitans = filterCategory === 'all'
    ? CORPORATE_TITANS
    : CORPORATE_TITANS.filter((c) => c.category === filterCategory);

  return (
    <section id="corporate-titans" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#061e16] via-[#092b20] to-[#0a251b] border-y border-emerald-500/20 overflow-hidden text-stone-100">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* National Motto & Jubilee Commemorative Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md">
            <NigeriaEmblem size="sm" />
            <span>UNITY AND FAITH, PEACE AND PROGRESS</span>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight font-display drop-shadow">
              66
            </span>
            <div className="text-left border-l-2 border-emerald-400/40 pl-3">
              <span className="block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-200">
                NIGERIA @ 66 JUBILEE ARCHIVE
              </span>
              <span className="block text-[11px] sm:text-xs font-mono text-stone-400">
                October 1, 1960 → October 1, 2026
              </span>
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Pillars of National Industry & Enterprise Titans
          </h2>

          <p className="text-sm sm:text-base text-stone-300 max-w-3xl mx-auto leading-relaxed">
            The 30 frontline indigenous conglomerates, financial institutions, energy titans, and consumer corporations that engineered Nigeria's economic growth, infrastructure, and industrial sovereignty throughout 66 years of nationhood.
          </p>
        </div>

        {/* ONE-BY-ONE ADVERT SHOWCASE BILLBOARD WITH TOUCH SWIPE */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative mx-auto max-w-5xl rounded-2xl sm:rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-[#0c392c] via-[#104a37] to-[#0c392c] shadow-2xl overflow-hidden p-4 sm:p-10 mb-10 select-none"
        >
          {/* Top Progress countdown bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-black/40">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Advert Card Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left: Official Logo Stage */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-[16/9] max-w-md bg-white rounded-2xl p-6 shadow-2xl flex items-center justify-center border-4 border-emerald-400/30 group hover:border-emerald-400 transition-all">
                <img
                  src={currentCompany.logoUrl}
                  alt={`${currentCompany.name} Official Logo`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />

                <span className="absolute top-3 right-3 bg-stone-900/90 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-white/20">
                  #{currentCompany.id} / 30
                </span>

                <span className="absolute bottom-2 left-2 text-[9px] font-mono text-stone-500 uppercase tracking-wider">
                  Verified Brand Mark
                </span>
              </div>

              {/* Logo Quick Select Bar (prev / play / next) */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-black/40 hover:bg-emerald-600 text-white transition-all border border-white/10 hover:scale-105"
                  title="Previous Company"
                  aria-label="Previous Company"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow flex items-center gap-1.5"
                  title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5" />
                      <span>Pause Advert</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" />
                      <span>Play Advert</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-black/40 hover:bg-emerald-600 text-white transition-all border border-white/10 hover:scale-105"
                  title="Next Company"
                  aria-label="Next Company"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right: Company Profile & Milestone Details */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full flex items-center gap-1">
                  <Award className="h-3.5 w-3.5" />
                  <span>Titan #{currentCompany.id} of 30</span>
                </span>
                <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 px-3 py-1 rounded-full">
                  {currentCompany.sector}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentCompany.name}
                </h3>
                <div className="flex items-center gap-4 text-xs text-stone-300 pt-1.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Est. {currentCompany.foundingYear}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{currentCompany.headquarters}</span>
                  </span>
                </div>
              </div>

              {/* Jubilee Milestone */}
              <div className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-1.5">
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-300 block">
                  66-Year Jubilee Milestone (1960–2026)
                </span>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                  {currentCompany.milestone}
                </p>
              </div>

              {/* Economic Scale Highlight */}
              <div className="flex items-start gap-2.5 text-xs text-emerald-200">
                <TrendingUp className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{currentCompany.keyHighlight}</span>
              </div>

              {/* Footer action */}
              {currentCompany.website && (
                <div className="pt-2">
                  <a
                    href={currentCompany.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition-colors"
                  >
                    <span>Visit Official Corporate Portal</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 30-COMPANY INTERACTIVE THUMBNAIL LOGO STRIP */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
              <Layers className="h-4 w-4" />
              <span>Click Any Logo to Display in One-by-One Spotlight ({CORPORATE_TITANS.length} Titans)</span>
            </span>

            <button
              type="button"
              onClick={() => setShowAllGrid(!showAllGrid)}
              className="text-xs text-amber-300 hover:text-white font-semibold transition-colors flex items-center gap-1"
            >
              <span>{showAllGrid ? 'Collapse Directory' : 'View Full Directory'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Quick Filter Tabs */}
          {showAllGrid && (
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
              {[
                { id: 'all', label: 'All 30 Companies' },
                { id: 'banking', label: 'Banking (8)' },
                { id: 'energy', label: 'Oil, Gas & Power (7)' },
                { id: 'telecom', label: 'Telecoms (3)' },
                { id: 'conglomerate', label: 'Conglomerates & Cement (5)' },
                { id: 'consumer', label: 'Food & Consumer (7)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    filterCategory === tab.id
                      ? 'bg-emerald-500 text-white shadow'
                      : 'bg-[#114a38] text-stone-300 hover:bg-[#165e47] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Logos Display Strip or Grid */}
          <div
            className={
              showAllGrid
                ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3'
                : 'flex items-center gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-500/30'
            }
          >
            {filteredTitans.map((company, index) => {
              const originalIndex = CORPORATE_TITANS.findIndex((c) => c.id === company.id);
              const isActive = originalIndex === currentIndex;

              return (
                <button
                  key={company.id}
                  type="button"
                  onClick={() => handleSelectCompany(originalIndex)}
                  className={`group relative rounded-2xl p-2.5 transition-all text-left flex flex-col items-center shrink-0 ${
                    showAllGrid ? 'w-full' : 'w-36 sm:w-40'
                  } ${
                    isActive
                      ? 'bg-emerald-400/20 border-2 border-emerald-400 ring-2 ring-emerald-400/50 scale-105 shadow-xl'
                      : 'bg-white/10 hover:bg-white/20 border border-white/10 hover:border-emerald-400/50'
                  }`}
                >
                  {/* Logo stage */}
                  <div className="h-16 w-full bg-white rounded-xl p-2 flex items-center justify-center shadow">
                    <img
                      src={company.logoUrl}
                      alt={company.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="w-full pt-2 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-[10px] font-mono font-bold text-amber-300">
                        #{company.id}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-white block truncate">
                      {company.name}
                    </span>
                    <span className="text-[9px] text-stone-300 block truncate">
                      {company.sector}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
