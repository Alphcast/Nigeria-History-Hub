import React from 'react';
import { Home, Users, Calendar, Search, Sparkles, Menu } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenAI: () => void;
  onOpenMenu: () => void;
  bookmarksCount?: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
  onOpenAI,
  onOpenMenu,
  bookmarksCount = 0,
}) => {
  return (
    <nav
      aria-label="Mobile Bottom App Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0d3d2e]/95 backdrop-blur-2xl border-t border-emerald-500/25 shadow-[0_-8px_24px_rgba(0,0,0,0.4)] pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-1.5"
    >
      <div className="mx-auto flex max-w-md items-center justify-around px-2">
        {/* 1. Home */}
        <button
          onClick={() => onNavigate('hero')}
          className={`flex min-w-[56px] flex-col items-center justify-center py-1 transition-all active:scale-95 ${
            activeSection === 'hero' ? 'text-emerald-400 font-bold' : 'text-stone-300 hover:text-white'
          }`}
          aria-label="Go to Home"
        >
          <div className="relative">
            <Home className="h-5 w-5" />
            {activeSection === 'hero' && (
              <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-400" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1">Home</span>
        </button>

        {/* 2. Heroes */}
        <button
          onClick={() => onNavigate('heroes')}
          className={`flex min-w-[56px] flex-col items-center justify-center py-1 transition-all active:scale-95 ${
            activeSection === 'heroes' ? 'text-emerald-400 font-bold' : 'text-stone-300 hover:text-white'
          }`}
          aria-label="Go to Nigerian Heroes"
        >
          <div className="relative">
            <Users className="h-5 w-5" />
            {activeSection === 'heroes' && (
              <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-400" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1">Heroes</span>
        </button>

        {/* 3. Timeline */}
        <button
          onClick={() => onNavigate('timeline')}
          className={`flex min-w-[56px] flex-col items-center justify-center py-1 transition-all active:scale-95 ${
            activeSection === 'timeline' ? 'text-emerald-400 font-bold' : 'text-stone-300 hover:text-white'
          }`}
          aria-label="Go to Independence Timeline"
        >
          <div className="relative">
            <Calendar className="h-5 w-5" />
            {activeSection === 'timeline' && (
              <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-400" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1">Timeline</span>
        </button>

        {/* 4. Search & Saved Collection */}
        <button
          onClick={onOpenSearch}
          className="relative flex min-w-[56px] flex-col items-center justify-center py-1 text-stone-300 hover:text-white transition-all active:scale-95"
          aria-label="Search and Saved Collection"
        >
          <div className="relative">
            <Search className="h-5 w-5" />
            {bookmarksCount > 0 && (
              <span className="absolute -top-1 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-[9px] font-extrabold text-stone-950 shadow">
                {bookmarksCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1">Search</span>
        </button>

        {/* 5. Nigeria History AI */}
        <button
          onClick={onOpenAI}
          className="flex min-w-[56px] flex-col items-center justify-center py-1 text-amber-300 hover:text-amber-200 transition-all active:scale-95"
          aria-label="Ask Nigeria History AI"
        >
          <div className="relative">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/50">
              <Sparkles className="h-3 w-3" />
            </span>
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-1 text-amber-300">History AI</span>
        </button>

        {/* 6. All Menu / Sections Drawer */}
        <button
          onClick={onOpenMenu}
          className="flex min-w-[48px] flex-col items-center justify-center py-1 text-stone-300 hover:text-white transition-all active:scale-95"
          aria-label="Open Full Sections Menu"
        >
          <Menu className="h-5 w-5" />
          <span className="text-[10px] tracking-tight mt-1">Menu</span>
        </button>
      </div>
    </nav>
  );
};
