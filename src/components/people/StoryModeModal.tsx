import React, { useState } from 'react';
import { Person } from '../../types';
import { X, ChevronLeft, ChevronRight, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface StoryModeModalProps {
  person: Person | null;
  onClose: () => void;
}

export const StoryModeModal: React.FC<StoryModeModalProps> = ({ person, onClose }) => {
  if (!person) return null;

  // Compile timeline slides
  const slides = [
    {
      title: person.name,
      subtitle: person.positions[0]?.title || person.profession.join(' · '),
      body: person.whyTheyMatter,
      year: person.birthDate ? `Born ${person.birthDate}` : 'Origin',
      type: 'intro',
    },
    ...person.timeline.map((step) => ({
      title: step.event,
      subtitle: step.year,
      body: step.description,
      year: step.year,
      type: 'milestone',
    })),
    {
      title: 'Enduring Legacy',
      subtitle: `${person.state} State · Federal Republic of Nigeria`,
      body: person.legacy || person.biography.slice(0, 300) + '...',
      year: 'Legacy',
      type: 'legacy',
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [ambientAudioOn, setAmbientAudioOn] = useState(false);

  const current = slides[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d3d2e] text-stone-100 overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-radial from-emerald-900/30 via-stone-900/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Top Floating Header */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-display text-xs uppercase tracking-widest text-emerald-400">
            Cinematic Story Mode · {person.name}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Ambient Tone toggle */}
          <button
            onClick={() => setAmbientAudioOn(!ambientAudioOn)}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-stone-400 hover:text-white transition-colors"
            title="Audio ambience toggle"
          >
            {ambientAudioOn ? <Volume2 className="h-3.5 w-3.5 text-emerald-400" /> : <VolumeX className="h-3.5 w-3.5" />}
            <span className="text-[11px]">{ambientAudioOn ? 'Ambience Active' : 'Muted'}</span>
          </button>

          {/* Close Story Mode */}
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-stone-300 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Exit Story Mode"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Year Flag Marker */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-6 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span className="tracking-widest uppercase">{current.year}</span>
        </div>

        {/* Milestone Title */}
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide leading-tight mb-4">
          {current.title}
        </h2>

        {/* Subtitle */}
        <p className="font-editorial text-lg sm:text-xl text-emerald-300/90 italic mb-8">
          {current.subtitle}
        </p>

        {/* Narrative Prose */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#0a2e21]/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-editorial">
            {current.body}
          </p>
        </div>

        {/* Progress Bar Indicator */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlideIndex
                  ? 'w-10 bg-emerald-400'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Floating Navigation Controls */}
      <div className="absolute bottom-8 inset-x-0 z-20 flex items-center justify-between max-w-md mx-auto px-6">
        <button
          onClick={handlePrev}
          disabled={currentSlideIndex === 0}
          className={`flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold backdrop-blur-md transition-all ${
            currentSlideIndex === 0
              ? 'opacity-30 cursor-not-allowed text-stone-600'
              : 'text-stone-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>

        <span className="text-xs text-stone-500 tabular-nums font-mono">
          {currentSlideIndex + 1} / {slides.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentSlideIndex === slides.length - 1}
          className={`flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold backdrop-blur-md transition-all ${
            currentSlideIndex === slides.length - 1
              ? 'opacity-30 cursor-not-allowed text-stone-600'
              : 'text-stone-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
