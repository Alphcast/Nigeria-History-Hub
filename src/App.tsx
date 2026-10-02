import React, { useState, useEffect } from 'react';
import { ALL_PEOPLE, getBookmarks, toggleBookmark } from './services/store';
import { Person } from './types';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { HeroDiscoveryFeed } from './components/people/HeroDiscoveryFeed';
import { SixtySixCohortSection } from './components/people/SixtySixCohortSection';
import { PresidentsSection } from './components/people/PresidentsSection';
import { RegionalDevelopmentSection } from './components/history/RegionalDevelopmentSection';
import { WomenSection } from './components/people/WomenSection';
import { SportsSection } from './components/sports/SportsSection';
import { IndependenceTimeline } from './components/timeline/IndependenceTimeline';
import { RecordsSection } from './components/records/RecordsSection';
import { OnThisDaySection } from './components/history/OnThisDaySection';
import { NigeriaMapSection } from './components/map/NigeriaMapSection';
import { ArchiveGallerySection } from './components/gallery/ArchiveGallerySection';
import { LearnNigeriaSection } from './components/education/LearnNigeriaSection';
import { CorporateTitansAdvertSection } from './components/companies/CorporateTitansAdvertSection';
import { Footer } from './components/layout/Footer';

// Modals
import { PersonProfileModal } from './components/people/PersonProfileModal';
import { StoryModeModal } from './components/people/StoryModeModal';
import { ShareCardModal } from './components/people/ShareCardModal';
import { CorrectionModal } from './components/forms/CorrectionModal';
import { NominateModal } from './components/forms/NominateModal';
import { AdminDashboardModal } from './components/admin/AdminDashboardModal';
import { HistoryAIAssistantModal } from './components/ai/HistoryAIAssistantModal';
import { GlobalSearchModal } from './components/search/GlobalSearchModal';
import { CreatorProfileModal } from './components/creator/CreatorProfileModal';
import { MobileBottomNav } from './components/navigation/MobileBottomNav';

import { Sparkles, Compass, PlusCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [storyModePerson, setStoryModePerson] = useState<Person | null>(null);
  const [shareCardPerson, setShareCardPerson] = useState<Person | null>(null);
  const [correctionPerson, setCorrectionPerson] = useState<Person | null>(null);

  const [nominateOpen, setNominateOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [creatorOpen, setCreatorOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('hero');
  const [bookmarks, setBookmarks] = useState<string[]>(getBookmarks());

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = toggleBookmark(id);
    setBookmarks(updated);
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d3d2e] text-stone-100 flex flex-col font-sans selection:bg-[#008751] selection:text-white">
      {/* Sticky Responsive Top Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenNominate={() => setNominateOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenAI={() => setAiAssistantOpen(true)}
        onOpenCreator={() => setCreatorOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        bookmarksCount={bookmarks.length}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-1 pb-20 lg:pb-0">
        {/* 1. Hero & Live Countdown Section */}
        <Hero
          onExploreIcons={() => scrollTo('heroes')}
          onExploreTimeline={() => scrollTo('timeline')}
          onSubmitHero={() => setNominateOpen(true)}
          onOpenCreator={() => setCreatorOpen(true)}
        />

        {/* Jubilee Corporate Titans & Advert Logos (Display One by One) */}
        <CorporateTitansAdvertSection />

        {/* 2. Featured Discovery Feed & Category Architecture */}
        <HeroDiscoveryFeed
          people={ALL_PEOPLE}
          onSelectPerson={setSelectedPerson}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* 3. 66 Nigerians Who Shaped Nigeria (Transparent Editorial Cohort) */}
        <SixtySixCohortSection
          people={ALL_PEOPLE}
          onSelectPerson={setSelectedPerson}
        />

        {/* 4. Interactive Nigeria Independence Timeline */}
        <IndependenceTimeline />

        {/* 5. Nigeria's Regional Development History (1939–1967) */}
        <RegionalDevelopmentSection />

        {/* 6. Presidents & Heads of State Section (Politically Neutral) */}
        <PresidentsSection />

        {/* 6. Women of Nigeria: "Her Story Is Nigeria's Story" */}
        <WomenSection
          people={ALL_PEOPLE}
          onSelectPerson={setSelectedPerson}
        />

        {/* 7. Nigerian Sporting Legends & Sports Records */}
        <SportsSection />

        {/* 8. National Records & Verified Firsts */}
        <RecordsSection />

        {/* 8. Nigeria by State: 36 States & FCT Cartography */}
        <NigeriaMapSection />

        {/* 9. Today in Nigerian History & 66-Days Challenge */}
        <OnThisDaySection />

        {/* 10. Archival Visual Gallery & Digital Archive */}
        <ArchiveGallerySection />

        {/* 11. Learn Nigeria: Education Mode & Quizzes */}
        <LearnNigeriaSection />

        {/* 12. Call to Action Banner before footer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
          <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-r from-[#0f4a38] via-[#114a38] to-[#0f4a38] p-8 sm:p-12 text-center shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-3xl block">🇳🇬</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Nigeria's Story is Still Being Written
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed font-editorial italic">
                "66 Years of Independence. Thousands of Stories. One Nigeria."
              </p>
              <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed">
                Know an unsung Nigerian innovator, public servant, scientist, or trailblazer? Help preserve their legacy in the permanent national archive.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setNominateOpen(true)}
                  className="flex items-center gap-2 rounded-xl bg-[#008751] px-6 py-3 text-xs font-bold text-white shadow-lg hover:bg-[#009b5d] hover:scale-105 transition-all"
                >
                  <PlusCircle className="h-4 w-4" />
                  <span>Nominate a Nigerian Hero</span>
                </button>
                <button
                  onClick={() => setAiAssistantOpen(true)}
                  className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-6 py-3 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-all"
                >
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span>Ask Nigeria History AI</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onOpenNominate={() => setNominateOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenAI={() => setAiAssistantOpen(true)}
        setActiveSection={setActiveSection}
      />

      {/* Native Mobile Bottom Navigation App Bar (lg:hidden) */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={scrollTo}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAI={() => setAiAssistantOpen(true)}
        onOpenMenu={() => setMobileMenuOpen(true)}
        bookmarksCount={bookmarks.length}
      />

      {/* Global Modals */}
      {selectedPerson && (
        <PersonProfileModal
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
          onEnterStoryMode={(p) => {
            setSelectedPerson(null);
            setStoryModePerson(p);
          }}
          onOpenShareCard={(p) => setShareCardPerson(p)}
          onOpenCorrection={(p) => setCorrectionPerson(p)}
          isBookmarked={bookmarks.includes(selectedPerson.id)}
          onToggleBookmark={handleToggleBookmark}
        />
      )}

      {storyModePerson && (
        <StoryModeModal
          person={storyModePerson}
          onClose={() => setStoryModePerson(null)}
        />
      )}

      {shareCardPerson && (
        <ShareCardModal
          person={shareCardPerson}
          onClose={() => setShareCardPerson(null)}
        />
      )}

      {correctionPerson && (
        <CorrectionModal
          person={correctionPerson}
          onClose={() => setCorrectionPerson(null)}
        />
      )}

      <NominateModal
        isOpen={nominateOpen}
        onClose={() => setNominateOpen(false)}
      />

      <AdminDashboardModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        people={ALL_PEOPLE}
      />

      <HistoryAIAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        people={ALL_PEOPLE}
      />

      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        people={ALL_PEOPLE}
        onSelectPerson={setSelectedPerson}
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
      />

      <CreatorProfileModal
        isOpen={creatorOpen}
        onClose={() => setCreatorOpen(false)}
      />

      {/* Production Analytics and Speed Insights for Vercel */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
