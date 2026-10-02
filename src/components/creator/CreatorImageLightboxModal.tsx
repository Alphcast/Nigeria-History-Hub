import React, { useState, useEffect } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  ShieldCheck,
  Mail,
  Camera,
} from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';
import { getCreatorPhoto } from '../../services/creatorPhoto';

interface CreatorImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
}

export const CreatorImageLightboxModal: React.FC<CreatorImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [currentPhoto, setCurrentPhoto] = useState<string>(imageUrl || getCreatorPhoto());

  useEffect(() => {
    setCurrentPhoto(imageUrl || getCreatorPhoto());
    setZoomLevel(1);
  }, [imageUrl, isOpen]);

  useEffect(() => {
    const handleUpdate = () => {
      setCurrentPhoto(getCreatorPhoto());
    };
    window.addEventListener('creator-photo-updated', handleUpdate);
    return () => window.removeEventListener('creator-photo-updated', handleUpdate);
  }, []);

  // Keyboard navigation: Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.35, 2.5));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.35, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-2xl transition-all select-none"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0d3d2e] border border-emerald-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[96vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-emerald-500/30 bg-[#104a37]">
          <div className="flex items-center gap-3">
            <NigeriaEmblem size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Oladepo Rokeeb Olayinka
                </h3>
                <span className="text-[10px] bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 px-2 py-0.5 rounded-full font-bold">
                  🇳🇬 NYSC OS/26B/3050
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-medium">
                  Official Photograph
                </span>
              </div>
              <p className="text-[11px] text-emerald-300 font-medium">
                National Youth Service Corps (NYSC) · Lead Software Architect & CEO Alphcast Technologies
              </p>
            </div>
          </div>

          {/* Action buttons: Zoom controls & Close */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-black/30 rounded-xl p-1 border border-white/10 mr-1">
              <button
                type="button"
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="text-[10px] text-stone-300 px-1 font-mono">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              {zoomLevel !== 1 && (
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-amber-300 hover:text-amber-200 transition-colors"
                  title="Fit View"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-stone-300 hover:text-white transition-colors border border-white/10"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 overflow-hidden bg-stone-950 flex items-center justify-center p-3 sm:p-6 min-h-[380px] max-h-[70vh]">
          {/* Photo Display with smooth zoom */}
          <div className="relative max-h-full max-w-full flex items-center justify-center overflow-auto">
            {currentPhoto ? (
              <img
                src={currentPhoto}
                alt="Oladepo Rokeeb Olayinka in official NYSC Uniform"
                style={{ transform: `scale(${zoomLevel})` }}
                className="max-h-[66vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/15 transition-transform duration-200"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center space-y-3">
                <div className="h-20 w-20 rounded-full bg-emerald-900/60 border-2 border-emerald-400 flex items-center justify-center text-emerald-300">
                  <Camera className="h-10 w-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base">Oladepo Rokeeb Olayinka</h4>
                  <p className="text-xs text-stone-400 max-w-sm">
                    NYSC State Code: OS/26B/3050 · Founder & Chief Executive Officer, Alphcast Technologies
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bar with Details & Contact */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-emerald-500/30 bg-[#104a37] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-center sm:text-left space-y-0.5 max-w-xl">
            <span className="text-white font-bold block text-xs sm:text-sm">
              Oladepo Rokeeb Olayinka · CEO, Alphcast Technologies
            </span>
            <p className="text-[11px] text-stone-300 leading-snug">
              Official National Youth Service Corps (NYSC) Uniform · State Code: <span className="font-mono text-amber-300 font-semibold">OS/26B/3050</span>. Verified platform creator and lead software architect for Nigeria History Hub. Genuine photographic record.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {currentPhoto && (
              <a
                href={currentPhoto}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-[#165e47] hover:bg-emerald-600 text-white font-medium text-xs flex items-center gap-1.5 transition-colors border border-emerald-400/30"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Open Full File</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white text-xs transition-colors shadow"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
