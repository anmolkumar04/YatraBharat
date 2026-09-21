import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Heart, Shield, MapPin, ArrowRight, Languages, Mic } from 'lucide-react';

interface NavbarProps {
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenTripPlanner: () => void;
  onOpenSafetyModal: () => void;
  onOpenVoiceTranslator: () => void;
  currentView?: 'home' | 'explore' | 'region-details';
  onNavigateHome?: () => void;
  onNavigateExplore?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoritesCount,
  onOpenFavorites,
  onOpenTripPlanner,
  onOpenSafetyModal,
  onOpenVoiceTranslator,
  currentView = 'home',
  onNavigateHome,
  onNavigateExplore,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentView === 'home') {
        const sections = ['home', 'explore', 'destinations', 'features', 'about'];
        const current = sections.find((section) => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (current) {
          setActiveSection(current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Explore India', href: '#explore-page', id: 'explore' },
    { label: 'Destinations', href: '#destinations', id: 'destinations' },
    { label: 'Pillars', href: '#features', id: 'features' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setMobileMenuOpen(false);

    if (id === 'explore') {
      if (onNavigateExplore) {
        onNavigateExplore();
      }
      return;
    }

    if (id === 'home') {
      if (currentView !== 'home' && onNavigateHome) {
        onNavigateHome();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // For other anchor links (destinations, features, about)
    if (currentView !== 'home' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isExploreActive = currentView === 'explore' || currentView === 'region-details';

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B2B20]/95 backdrop-blur-md shadow-lg shadow-[#0B2B20]/20 py-3 border-b border-[#185240]/40'
          : 'bg-gradient-to-b from-[#0B2B20]/90 via-[#0B2B20]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home', '#home')}
            id="brand-logo"
            className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-[#E25822] rounded-lg cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E25822] via-[#F97316] to-[#185240] p-0.5 shadow-md shadow-[#E25822]/20 flex items-center justify-center">
              <div className="w-full h-full bg-[#0B2B20] rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#E25822] group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Yatra <span className="text-[#E25822]">Bharat</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-[#E25822]/20 text-[#FF9E68] border border-[#E25822]/40 rounded-full">
                  Incredible India
                </span>
              </div>
              <p className="text-[11px] text-[#A7C2B5] font-medium tracking-wide">
                India Tourism Platform
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#113D2F]/80 px-4 py-1.5 rounded-full border border-[#236B54]/40 shadow-inner">
            {navLinks.map((link) => {
              const isActive =
                link.id === 'explore'
                  ? isExploreActive
                  : currentView === 'home' && activeSection === link.id;

              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#E25822] text-white shadow-sm shadow-[#E25822]/40'
                      : 'text-[#E2EBE6] hover:text-white hover:bg-[#185240]/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Voice Translator clearly visible button */}
            <button
              id="navbar-voice-translator-btn"
              onClick={onOpenVoiceTranslator}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#185240] hover:bg-[#236B54] border border-[#2B7A60] rounded-full transition-all shadow-sm hover:shadow cursor-pointer"
              title="Voice Translator for 14 Indian Languages"
            >
              <Languages className="w-3.5 h-3.5 text-[#FF9E68]" />
              <span>Voice Translator</span>
            </button>

            {/* Safety Helpline quick trigger */}
            <button
              id="navbar-safety-btn"
              onClick={onOpenSafetyModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#A7C2B5] hover:text-white bg-[#113D2F]/70 hover:bg-[#185240] border border-[#236B54]/50 rounded-full transition-all cursor-pointer"
              title="24x7 Tourist Helpline: 1363 & 112"
            >
              <Shield className="w-3.5 h-3.5 text-[#E25822]" />
              <span>Safety 1363</span>
            </button>

            {/* Saved Destinations counter */}
            <button
              id="navbar-favorites-btn"
              onClick={onOpenFavorites}
              className="relative p-2 text-[#E2EBE6] hover:text-white bg-[#113D2F]/70 hover:bg-[#185240] border border-[#236B54]/50 rounded-full transition-all cursor-pointer"
              title="Saved destinations"
              aria-label="View saved destinations"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-[#E25822] fill-[#E25822]' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E25822] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Plan Trip CTA */}
            <button
              id="navbar-plan-trip-btn"
              onClick={onOpenTripPlanner}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#E25822] to-[#D95B16] hover:from-[#C84614] hover:to-[#B53B0B] rounded-full shadow-md shadow-[#E25822]/30 hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Quick Mobile Voice Translator button */}
            <button
              id="mobile-voice-btn"
              onClick={onOpenVoiceTranslator}
              className="p-2 text-white bg-[#185240] hover:bg-[#236B54] rounded-lg border border-[#2B7A60] cursor-pointer"
              title="Voice Translator"
              aria-label="Open Voice Translator"
            >
              <Languages className="w-4 h-4 text-[#FF9E68]" />
            </button>

            <button
              id="mobile-favorites-btn"
              onClick={onOpenFavorites}
              className="relative p-2 text-white bg-[#113D2F] rounded-lg border border-[#236B54]"
              aria-label="Saved destinations"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-[#E25822] fill-[#E25822]' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#E25822] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF7F2] bg-[#113D2F] hover:bg-[#185240] border border-[#236B54] rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#0B2B20] border-b border-[#185240] px-4 pt-3 pb-6 mt-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.id === 'explore'
                  ? isExploreActive
                  : currentView === 'home' && activeSection === link.id;

              return (
                <button
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#E25822] text-white'
                      : 'text-[#E2EBE6] hover:bg-[#113D2F] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-4 border-t border-[#185240] flex flex-col gap-2.5">
            {/* Mobile Voice Translator Drawer CTA */}
            <button
              id="mobile-voice-drawer-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVoiceTranslator();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-[#185240] hover:bg-[#236B54] border border-[#2B7A60] rounded-xl shadow-sm cursor-pointer"
            >
              <Languages className="w-4 h-4 text-[#FF9E68]" />
              <span>Voice Translator (14 Indian Languages)</span>
            </button>

            <button
              id="mobile-safety-drawer-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSafetyModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-[#E2EBE6] bg-[#113D2F] border border-[#236B54] rounded-xl cursor-pointer"
            >
              <Shield className="w-4 h-4 text-[#E25822]" />
              <span>Travel Safety & Helplines (1363 / 112)</span>
            </button>

            <button
              id="mobile-plan-drawer-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTripPlanner();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#E25822] to-[#D95B16] rounded-xl shadow-md shadow-[#E25822]/30 cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>Plan Your Trip</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
