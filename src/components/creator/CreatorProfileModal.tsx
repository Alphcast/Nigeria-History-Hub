import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Mail,
  Copy,
  Check,
  Cpu,
  Code,
  Sparkles,
  MapPin,
  GraduationCap,
  Briefcase,
  ExternalLink,
  ShieldCheck,
  ZoomIn,
  Camera,
} from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';
import { CreatorImageLightboxModal } from './CreatorImageLightboxModal';
import { CreatorImageGallery } from './CreatorImageGallery';
import { getCreatorPhoto, handleCreatorPhotoUpload } from '../../services/creatorPhoto';

interface CreatorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatorProfileModal: React.FC<CreatorProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string>(getCreatorPhoto());

  useEffect(() => {
    setPhotoUrl(getCreatorPhoto());
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => setPhotoUrl(getCreatorPhoto());
    window.addEventListener('creator-photo-updated', handleUpdate);
    return () => window.removeEventListener('creator-photo-updated', handleUpdate);
  }, []);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const dataUrl = await handleCreatorPhotoUpload(file);
        setPhotoUrl(dataUrl);
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
        setPhotoUrl(dataUrl);
      } catch (err) {
        console.error('Failed to upload dropped photo:', err);
      }
    }
  };

  if (!isOpen) return null;

  const email = 'oladeporokeeb203@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skills = [
    'Software Engineering',
    'Full-Stack Web Development',
    'Artificial Intelligence & AI Engineering',
    'Hardware Engineering',
    'Mathematics & Analytical Modeling',
    'Educational Technology (EdTech)',
    'Research Technology',
    'Digital Innovation',
    'Technology Entrepreneurship',
    'AI-Powered Applications',
    'Web Application Development',
    'Mathematics Education',
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0a2e21]/80 backdrop-blur-md overflow-y-auto">
        <div className="relative w-full max-w-3xl rounded-3xl border border-emerald-500/30 bg-[#0d3d2e] shadow-2xl text-stone-100 overflow-hidden my-8">
          {/* Top Header Banner */}
          <div className="relative bg-gradient-to-r from-[#104a37] via-[#165e47] to-[#104a37] p-6 sm:p-8 border-b border-emerald-500/30">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-stone-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Creator Photo in NYSC Uniform - Click to display full photo */}
              <div
                className="flex flex-col items-center gap-1.5 shrink-0"
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

                <div className="relative group">
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="block rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    title="Click to view full photo in lightbox"
                  >
                    <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-xl bg-stone-900 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center relative">
                      <span className="font-display text-2xl font-bold text-emerald-300 absolute inset-0 flex items-center justify-center bg-stone-900">
                        ORO
                      </span>
                      {photoUrl && (
                        <img
                          src={photoUrl}
                          alt="Oladepo Rokeeb Olayinka in NYSC Uniform"
                          className="h-full w-full object-cover object-top relative z-10"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      )}
                    </div>

                    <span className="absolute bottom-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md border border-white/20">
                      🇳🇬 NYSC
                    </span>

                    {/* Hover Overlay with Zoom Icon */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity text-xs font-semibold gap-1 backdrop-blur-[2px]">
                      <ZoomIn className="h-6 w-6 text-emerald-300 animate-pulse" />
                      <span className="text-[11px] font-bold">View Lightbox</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="absolute -top-1.5 -right-1.5 h-7 w-7 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg border border-white/50 transition-all hover:scale-110 z-10"
                    title="Click to select original photo file"
                    aria-label="Upload photo file"
                  >
                    <Camera className="h-3.5 w-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="text-[11px] text-emerald-300 hover:text-white font-medium flex items-center gap-1 transition-colors pt-0.5"
                >
                  <ZoomIn className="h-3 w-3" />
                  <span>Click to expand full size</span>
                </button>
              </div>

              {/* Title & Core Identity */}
              <div className="text-center sm:text-left space-y-2 flex-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  <span>Creator & Lead Software Architect</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  OLADEPO ROKEEB OLAYINKA
                </h2>

                <p className="text-xs sm:text-sm text-emerald-200 font-medium">
                  CEO, Alphcast Technologies · Software, Hardware & AI Engineer · Mathematician
                </p>

                {/* Quick Metadata Chips */}
                <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-stone-300">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#114a38] border border-emerald-500/20">
                    <MapPin className="h-3 w-3 text-emerald-400" />
                    <span>Ibadan, Oyo State</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#114a38] border border-emerald-500/20">
                    <GraduationCap className="h-3 w-3 text-emerald-400" />
                    <span>B.Sc. Mathematics, TASUED</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#114a38] border border-emerald-500/20">
                    <ShieldCheck className="h-3 w-3 text-amber-400" />
                    <span>NYSC: OS/26B/3050</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Contact & Email Highlight Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#114a38] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-300 block">
                    Official Contact & Collaboration Email
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="font-mono text-sm sm:text-base font-bold text-white hover:text-emerald-300 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#165e47] hover:bg-emerald-600 text-xs font-semibold text-white transition-all shadow"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4 text-white" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-xs font-bold text-white transition-all shadow"
                >
                  <span>Send Message</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Archival Image Gallery Component */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f4333] border border-emerald-500/30">
              <CreatorImageGallery onOpenLightbox={() => setLightboxOpen(true)} />
            </div>

            {/* Biography & Mission */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>About the Creator & Platform Architect</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Oladepo Rokeeb Olayinka is a Nigerian technology entrepreneur, software engineer, hardware engineer, artificial intelligence engineer, mathematics graduate, and passionate educator with a strong interest in using technology, mathematics, and artificial intelligence to solve real-world problems.
              </p>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                He is the <strong>Chief Executive Officer of Alphcast Technologies</strong>, a technology-driven company focused on developing innovative digital solutions, software applications, artificial intelligence systems, educational technologies, and other technology-based solutions designed to address practical challenges in Nigeria and beyond.
              </p>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Born in <strong>Ibadan, Oyo State, Nigeria</strong>, Oladepo developed an early fascination with mathematics and engineering. He graduated in Mathematics from <strong>Tai Solarin University of Education (TASUED), Ogun State</strong>, blending rigorous analytical reasoning with modern full-stack web and artificial intelligence engineering.
              </p>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Currently serving his fatherland as an active <strong>National Youth Service Corps (NYSC) member</strong> with state code <strong>OS/26B/3050</strong>, Oladepo engineered the <strong>Nigeria History Hub</strong> platform to digitally preserve, verify, and celebrate the remarkable history, heritage, records, and heroes of Nigeria from independence in 1960 to 2026.
              </p>
            </div>

            {/* Areas of Expertise and Interest */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                <span>Areas of Expertise & Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#114a38] border border-emerald-500/20 text-xs font-medium text-stone-200"
                  >
                    <Code className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Credentials Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#104a37] via-[#145742] to-[#104a37] border border-emerald-500/30 space-y-2 text-xs">
              <span className="font-bold text-emerald-300 uppercase tracking-wider block">
                Professional Credentials
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-300">
                <div><strong>Company:</strong> Alphcast Technologies</div>
                <div><strong>Role:</strong> Chief Executive Officer & Lead Architect</div>
                <div><strong>Nationality:</strong> Nigerian 🇳🇬</div>
                <div><strong>Place of Birth:</strong> Ibadan, Oyo State</div>
                <div><strong>University:</strong> TASUED, Ogun State</div>
                <div><strong>Discipline:</strong> Mathematics</div>
                <div><strong>NYSC State Code:</strong> OS/26B/3050</div>
                <div><strong>Email:</strong> {email}</div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 bg-[#104a37] border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <NigeriaEmblem size="sm" />
              <span>Dedicated to Nigerian Innovation & Youth Excellence · 1960–2026</span>
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white transition-colors"
            >
              Close Profile
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox / Full Photo Viewer */}
      <CreatorImageLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageUrl={photoUrl}
      />
    </>
  );
};
