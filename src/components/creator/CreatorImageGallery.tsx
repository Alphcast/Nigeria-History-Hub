import React, { useState, useEffect } from 'react';
import {
  ZoomIn,
  Maximize2,
  ShieldCheck,
  Sparkles,
  Camera,
} from 'lucide-react';
import { getCreatorPhoto } from '../../services/creatorPhoto';

interface CreatorImageGalleryProps {
  onOpenLightbox: () => void;
}

export const CreatorImageGallery: React.FC<CreatorImageGalleryProps> = ({ onOpenLightbox }) => {
  const [photo, setPhoto] = useState<string>(getCreatorPhoto());

  useEffect(() => {
    const handleUpdate = () => {
      setPhoto(getCreatorPhoto());
    };
    window.addEventListener('creator-photo-updated', handleUpdate);
    return () => window.removeEventListener('creator-photo-updated', handleUpdate);
  }, []);

  return (
    <div className="space-y-4 pt-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
          <Camera className="h-4 w-4 text-emerald-400" />
          <span>Official Photographic Record</span>
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-bold">
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            <span>NYSC OS/26B/3050</span>
          </span>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-medium">
            Parade Uniform
          </span>
        </div>
      </div>

      <p className="text-xs text-stone-300 leading-relaxed">
        Official photograph of <strong>Oladepo Rokeeb Olayinka</strong> in the green National Youth Service Corps (NYSC) uniform on the parade ground. Click the photograph below to open the interactive full-screen view.
      </p>

      {/* Main Photo Showcase Card */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 bg-[#092b20] shadow-xl group">
        <div
          onClick={onOpenLightbox}
          className="relative max-h-96 w-full overflow-hidden bg-stone-950 flex items-center justify-center cursor-pointer p-2"
        >
          {photo ? (
            <img
              src={photo}
              alt="Oladepo Rokeeb Olayinka in official NYSC Uniform"
              className="max-h-80 sm:max-h-96 w-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-2">
              <Camera className="h-12 w-12 text-emerald-400" />
              <span className="text-sm font-bold text-white">Oladepo Rokeeb Olayinka</span>
              <span className="text-xs text-stone-400">NYSC State Code: OS/26B/3050</span>
            </div>
          )}

          {/* Top Left Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-black/70 backdrop-blur-md text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5 shadow-lg">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>NYSC OS/26B/3050 · Parade Dress</span>
            </span>
          </div>

          {/* Hover Overlay with Zoom Button */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 backdrop-blur-[2px]">
            <div className="h-11 w-11 rounded-full bg-emerald-500/90 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
              <ZoomIn className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold tracking-wide bg-black/60 px-3 py-1 rounded-full border border-white/20">
              Click to Open Full-Screen Lightbox
            </span>
          </div>
        </div>

        {/* Caption & Controls Bar */}
        <div className="p-4 bg-[#104a37] border-t border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="space-y-0.5 text-center sm:text-left">
            <h4 className="font-display text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <span>Oladepo Rokeeb Olayinka</span>
              <span className="text-emerald-400 text-xs font-normal">· Creator & Lead Architect</span>
            </h4>
            <p className="text-xs text-stone-300">
              National Youth Service Corps (NYSC) Uniform, peaked cap & boots.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenLightbox}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              <span>Expand Lightbox</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
