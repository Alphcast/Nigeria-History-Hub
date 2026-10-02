import React, { useState } from 'react';
import { ARCHIVE_GALLERY } from '../../data/gallery';
import { ArchivalItem } from '../../types';
import { Image as ImageIcon, ShieldCheck, X, Maximize2, BookOpen } from 'lucide-react';

export const ArchiveGallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<ArchivalItem | null>(null);

  const filters = ['All', 'Independence', 'Political History', 'Culture', 'Sports', 'Education', 'Technology & Innovation'];

  const filteredItems = selectedFilter === 'All'
    ? ARCHIVE_GALLERY
    : ARCHIVE_GALLERY.filter((item) => item.category.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            <ImageIcon className="h-3.5 w-3.5" />
            <span>Nigeria Digital Archive</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The Historical Visual Archive
          </h2>
          <p className="text-sm text-stone-400 mt-2 max-w-2xl">
            Archival photographs, documents, speeches, and moments documenting the collective journey to independence and 66 years of sovereign nationhood.
          </p>
        </div>

        {/* Copyright notice */}
        <div className="text-[11px] text-stone-400 max-w-xs bg-[#165e47] p-3 rounded-xl border border-white/10">
          <span className="text-emerald-400 font-semibold block mb-0.5">Strict Image Verification:</span>
          All archive assets cataloged with copyright license metadata (Public Domain, National Archives, Editorial Use).
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        {filters.map((fil) => (
          <button
            key={fil}
            onClick={() => setSelectedFilter(fil)}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
              selectedFilter === fil
                ? 'bg-emerald-500 text-stone-950 font-semibold shadow-sm'
                : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {fil}
          </button>
        ))}
      </div>

      {/* Masonry-Style Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#165e47] hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                <img
                  src={item.url}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d2e]/80 via-transparent to-transparent" />
                <div className="absolute top-2.5 right-2.5">
                  <span className="rounded bg-[#0a2e21]/60 backdrop-blur-md px-2 py-0.5 text-[9px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
                    {item.license}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 text-xs text-stone-300 font-mono">
                  {item.date}
                </div>
              </div>

              <div className="p-4">
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>

            <div className="p-4 pt-0 text-[10px] text-stone-500 border-t border-white/5 flex items-center justify-between">
              <span className="truncate max-w-[180px]">{item.source}</span>
              <Maximize2 className="h-3 w-3 text-stone-400 group-hover:text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Archival Preview Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#165e47] overflow-hidden text-stone-100 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#165e47]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">
                  {activeModalItem.category} · {activeModalItem.date}
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-stone-400 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeModalItem.url}
                alt={activeModalItem.title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="p-6">
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-editorial">
                {activeModalItem.caption}
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-stone-400 gap-2">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
                  Primary Repository: {activeModalItem.source}
                </span>
                <span className="rounded bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 text-[11px] text-emerald-300">
                  Usage License: {activeModalItem.license}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
