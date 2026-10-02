import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Shield,
  ChevronDown,
  BookOpen,
  Calendar,
  Image as ImageIcon,
  Crown,
  MapPin,
  Sun,
  Moon,
  Trophy,
  Search,
  Building2,
  Sparkles,
  PlusCircle,
  UserCheck,
} from 'lucide-react';
import { NigeriaEmblem } from '../common/NigeriaLogo';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenNominate?: () => void;
  onOpenAdmin: () => void;
  onOpenAI?: () => void;
  onOpenCreator?: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  bookmarksCount?: number;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenNominate,
  onOpenAdmin,
  onOpenAI,
  onOpenCreator,
  activeSection,
  setActiveSection,
  bookmarksCount = 0,
  mobileMenuOpen: controlledMobileMenuOpen,
  setMobileMenuOpen: controlledSetMobileMenuOpen,
}) => {
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const isMenuOpen = controlledMobileMenuOpen !== undefined ? controlledMobileMenuOpen : internalMobileMenuOpen;
  const setMenuOpen = (open: boolean) => {
    if (controlledSetMobileMenuOpen) {
      controlledSetMobileMenuOpen(open);
    } else {
      setInternalMobileMenuOpen(open);
    }
  };

  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    setExploreDropdownOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close explore dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExploreDropdownOpen(false);
      }
    };
    if (exploreDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [exploreDropdownOpen]);

  // Primary top links shown directly on desktop
  const primaryLinks = [
    { label: 'Heroes', id: 'heroes' },
    { label: 'Independence', id: 'timeline' },
    { label: 'Regions', id: 'regional-history' },
    { label: 'Leaders', id: 'leaders' },
    { label: 'Sports', id: 'sports-legends' },
    { label: '66 Cohort', id: 'sixty-six' },
    { label: 'Records', id: 'records' },
  ];

  // Secondary items in the "Explore" dropdown
  const exploreLinks = [
    {
      label: '30 Corporate Titans (Advert Archive)',
      subtext: 'Pillars of industry & enterprise (1960–2026)',
      id: 'corporate-titans',
      icon: Building2,
    },
    {
      label: 'Sports Legends & Records',
      subtext: 'Olympic champions, football & athletics',
      id: 'sports-legends',
      icon: Trophy,
    },
    {
      label: '36 States Cartography',
      subtext: 'State-by-state heritage and pioneers',
      id: 'map',
      icon: MapPin,
    },
    {
      label: 'Women of Nigeria',
      subtext: "Her Story Is Nigeria's Story",
      id: 'women',
      icon: Crown,
    },
    {
      label: 'Archival Photo Gallery',
      subtext: 'Historical artifacts & photographs',
      id: 'gallery',
      icon: ImageIcon,
    },
    {
      label: 'Today in History',
      subtext: 'Daily Nigerian milestones & 66-day challenge',
      id: 'on-this-day',
      icon: Calendar,
    },
    {
      label: 'Learn Nigeria',
      subtext: 'Interactive quizzes, flashcards & syllabus',
      id: 'learn',
      icon: BookOpen,
    },
  ];

  const isExploreActive = exploreLinks.some((l) => l.id === activeSection);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-emerald-500/20 bg-[#0d3d2e]/95 backdrop-blur-2xl transition-all shadow-md">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          
          {/* Zone 1: Brand Wordmark with Official Nigeria Logo */}
          <div className="flex shrink-0 items-center min-w-0">
            <button
              onClick={() => scrollTo('hero')}
              className="group flex items-center gap-2 sm:gap-3 text-left focus:outline-none min-w-0"
              aria-label="Nigeria History Hub Home"
            >
              {/* Authentic Nigeria Coat of Arms Emblem */}
              <NigeriaEmblem size="md" className="shrink-0 scale-90 sm:scale-100" />

              {/* Title & Subtitle */}
              <div className="flex flex-col min-w-0 truncate">
                <span className="font-display text-xs sm:text-base font-extrabold tracking-wider text-white transition-colors group-hover:text-emerald-400 truncate">
                  NIGERIA HISTORY HUB
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-emerald-400/90 truncate">
                  Nigeria @ 66 Archive
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-emerald-400" />
                  )}
                </button>
              );
            })}

            {/* Explore Dropdown for secondary collections */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setExploreDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  isExploreActive || exploreDropdownOpen
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={exploreDropdownOpen}
              >
                <span>Explore</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    exploreDropdownOpen ? 'rotate-180 text-emerald-400' : 'text-stone-400'
                  }`}
                />
              </button>

              {/* Floating Glass Dropdown Menu */}
              {exploreDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-white/10 bg-[#114a38]/95 p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-black/50 z-50">
                  <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400/80 border-b border-white/5">
                    Special Archives & Learning
                  </div>
                  <div className="mt-1 space-y-1">
                    {exploreLinks.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className={`flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition-colors ${
                            isActive
                              ? 'bg-emerald-950/60 text-emerald-300'
                              : 'text-stone-200 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold leading-snug">{item.label}</div>
                            <div className="text-[10px] text-stone-400 leading-snug mt-0.5">
                              {item.subtext}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Actions & Utilities */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            {/* Search & My Collection Button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 h-8 sm:h-9 rounded-xl border border-emerald-400/40 bg-[#145742] text-white hover:bg-emerald-600 transition-all text-xs font-semibold shadow-sm group active:scale-95"
                title="Search archive or open My Collection (Cmd+K)"
                aria-label="Search archive or open My Collection"
              >
                <Search className="h-3.5 w-3.5 text-emerald-300 group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline">Search</span>
                {bookmarksCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-400 text-stone-900 shadow">
                    {bookmarksCount}
                  </span>
                )}
                <kbd className="hidden xl:inline text-[10px] bg-black/25 text-emerald-200 px-1.5 py-0.5 rounded font-mono">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* AI Assistant Quick Pill (Visible on tablet/desktop) */}
            {onOpenAI && (
              <button
                onClick={onOpenAI}
                className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 h-8 sm:h-9 rounded-xl border border-amber-400/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition-all text-xs font-semibold active:scale-95"
                title="Ask Nigeria History AI"
                aria-label="Ask Nigeria History AI"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span className="hidden md:inline">History AI</span>
              </button>
            )}

            {/* Theme Toggle (Dark / Light Mode) */}
            <button
              onClick={toggleTheme}
              className="flex shrink-0 items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-xl border border-emerald-500/25 bg-[#145742]/70 text-stone-200 transition-colors hover:bg-emerald-600 hover:text-white active:scale-95"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Royal Emerald'} Mode`}
              aria-label="Toggle dark/light theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-300 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="h-4 w-4 text-emerald-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Editorial Admin CMS Access (hidden on tiny screens to avoid crowding; accessible in drawer) */}
            <button
              onClick={onOpenAdmin}
              className="hidden sm:flex shrink-0 items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-xl border border-emerald-500/25 bg-[#145742]/70 text-stone-300 transition-colors hover:bg-emerald-600 hover:text-white active:scale-95"
              title="Editorial Admin CMS"
              aria-label="Editorial Admin CMS"
            >
              <Shield className="h-4 w-4" />
            </button>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="flex shrink-0 items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-xl border border-emerald-500/25 bg-[#145742]/70 text-stone-200 lg:hidden hover:bg-emerald-600 hover:text-white active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Modal Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-20 z-40 bg-[#0a2e21]/85 backdrop-blur-md lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute inset-x-0 top-0 max-h-[82vh] overflow-y-auto border-b border-emerald-500/30 bg-[#0d3d2e] p-4 sm:p-6 shadow-2xl pb-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header info in drawer with Nigeria Emblem */}
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <NigeriaEmblem size="sm" />
                <div>
                  <span className="font-display text-xs font-bold text-white block">
                    NIGERIA HISTORY HUB
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400">
                    Nigeria @ 66 Heritage Archive
                  </span>
                </div>
              </div>
              
              {/* Theme Toggle in Mobile Drawer */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-stone-300"
              >
                {theme === 'dark' ? <Sun className="h-3.5 w-3.5 text-amber-300" /> : <Moon className="h-3.5 w-3.5 text-emerald-500" />}
                <span className="text-[11px] capitalize">{theme}</span>
              </button>
            </div>

            {/* Quick Action Buttons on Mobile */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {onOpenNominate && (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenNominate();
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-[#008751] px-3 py-2.5 text-xs font-bold text-white shadow"
                >
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span>Nominate Hero</span>
                </button>
              )}

              {onOpenAI && (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenAI();
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-2.5 text-xs font-bold text-amber-300"
                >
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  <span>History AI</span>
                </button>
              )}
            </div>

            {/* Primary Navigation Grid */}
            <div className="mb-5">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                Core Sections
              </div>
              <div className="grid grid-cols-2 gap-2">
                {primaryLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-2 rounded-xl p-3 text-left text-xs font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-500/30'
                        : 'bg-white/5 text-stone-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Special Collections */}
            <div className="mb-5">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                Special Archives & Learning
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {exploreLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`flex items-center gap-3 rounded-xl p-3 text-left text-xs transition-all ${
                        activeSection === item.id
                          ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-500/30'
                          : 'bg-white/5 text-stone-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-[10px] text-stone-400">{item.subtext}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Secondary actions in mobile drawer */}
            <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
              {onOpenCreator && (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenCreator();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-xs font-medium text-emerald-300 hover:bg-white/10"
                >
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>Meet Platform Creator (NYSC OS/26B/3050)</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenAdmin();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-xs text-stone-300 hover:bg-white/10 hover:text-white"
              >
                <Shield className="h-3.5 w-3.5 text-emerald-400" />
                <span>Editorial Admin CMS</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
