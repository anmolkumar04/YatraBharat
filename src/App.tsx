import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { FeatureCards } from './components/FeatureCards';
import { PopularDestinations } from './components/PopularDestinations';
import { Footer } from './components/Footer';
import { DestinationModal } from './components/DestinationModal';
import { TripPlannerModal } from './components/TripPlannerModal';
import { SafetyGuideModal } from './components/SafetyGuideModal';
import { CultureFoodModal } from './components/CultureFoodModal';
import { FavoritesModal } from './components/FavoritesModal';
import { VoiceTranslatorModal } from './components/VoiceTranslatorModal';
import { ExploreIndia } from './components/ExploreIndia';
import { RegionDetails } from './components/RegionDetails';
import { POPULAR_DESTINATIONS } from './data/destinations';
import { INDIA_REGIONS } from './data/regionsData';
import { Destination, DestinationCategory, IndiaRegion } from './types';

export default function App() {
  // Navigation View State
  const [currentView, setCurrentView] = useState<'home' | 'explore' | 'region-details'>('home');
  const [selectedRegion, setSelectedRegion] = useState<IndiaRegion | null>(null);

  // Search & Filtering State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>('All');
  const [selectedState, setSelectedState] = useState<string>('');
  const [activeFilterTab, setActiveFilterTab] = useState<string>('all');

  // Favorites / Saved Destinations (persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('yatra_setu_favorites');
      return saved ? JSON.parse(saved) : ['varanasi-up', 'jaipur-rj', 'alleppey-kl'];
    } catch {
      return ['varanasi-up', 'jaipur-rj', 'alleppey-kl'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('yatra_setu_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Modals State
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState<boolean>(false);
  const [preselectedTripDest, setPreselectedTripDest] = useState<Destination | null>(null);
  const [isSafetyModalOpen, setIsSafetyModalOpen] = useState<boolean>(false);
  const [isCultureModalOpen, setIsCultureModalOpen] = useState<boolean>(false);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState<boolean>(false);
  const [isVoiceTranslatorOpen, setIsVoiceTranslatorOpen] = useState<boolean>(false);

  // URL Hash-based routing & dynamic title synchronization for production website readiness
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();

      if (!hash || hash === 'home') {
        setCurrentView('home');
        document.title = 'YatraBharat | Discover India, Your Way';
      } else if (hash === 'explore') {
        setCurrentView('explore');
        document.title = 'YatraBharat | Explore All 28 States & 8 UTs of India';
      } else if (hash.startsWith('region-') || hash.startsWith('region/')) {
        const regionId = hash.replace(/^region[-/]/, '');
        const found = INDIA_REGIONS.find((r) => r.id.toLowerCase() === regionId.toLowerCase());
        if (found) {
          setSelectedRegion(found);
          setCurrentView('region-details');
          document.title = `YatraBharat | ${found.name} Travel Guide`;
        }
      } else if (hash === 'translator') {
        setIsVoiceTranslatorOpen(true);
      } else if (hash === 'planner') {
        setIsTripPlannerOpen(true);
      } else if (hash === 'safety') {
        setIsSafetyModalOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Filtered Destinations Logic
  const filteredDestinations = useMemo(() => {
    return POPULAR_DESTINATIONS.filter((dest) => {
      // 1. Search Query filter (checks name, state, description, attractions, foods)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = dest.name.toLowerCase().includes(q);
        const matchesState = dest.state.toLowerCase().includes(q);
        const matchesTagline = dest.tagline.toLowerCase().includes(q);
        const matchesAttraction = dest.attractions.some((a) => a.toLowerCase().includes(q));
        const matchesFood = dest.mustTryFood.some((f) => f.toLowerCase().includes(q));
        const matchesRegion = dest.region.toLowerCase().includes(q);

        if (!matchesName && !matchesState && !matchesTagline && !matchesAttraction && !matchesFood && !matchesRegion) {
          return false;
        }
      }

      // 2. Selected State filter
      if (selectedState && dest.state !== selectedState) {
        return false;
      }

      // 3. Category filter (from search bar pills)
      if (selectedCategory !== 'All' && dest.category !== selectedCategory) {
        return false;
      }

      // 4. Tab filter (from destinations section)
      if (activeFilterTab !== 'all') {
        if (activeFilterTab === 'popular') {
          return dest.isPopular === true;
        }
        return dest.category === activeFilterTab;
      }

      return true;
    });
  }, [searchQuery, selectedState, selectedCategory, activeFilterTab]);

  // Saved destinations list
  const savedDestinationsList = useMemo(() => {
    return POPULAR_DESTINATIONS.filter((d) => favorites.includes(d.id));
  }, [favorites]);

  // Navigation Handlers
  const handleOpenExplorePage = () => {
    setCurrentView('explore');
    window.location.hash = 'explore';
    document.title = 'YatraBharat | Explore All 28 States & 8 UTs of India';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.location.hash = 'home';
    document.title = 'YatraBharat | Discover India, Your Way';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRegion = (region: IndiaRegion) => {
    setSelectedRegion(region);
    setCurrentView('region-details');
    window.location.hash = `region-${region.id}`;
    document.title = `YatraBharat | ${region.name} Travel Guide`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExplore = () => {
    setCurrentView('explore');
    window.location.hash = 'explore';
    document.title = 'YatraBharat | Explore All 28 States & 8 UTs of India';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanTripForRegion = (region: IndiaRegion) => {
    // Find matching destination or generate tailored destination for this state/UT
    const matchingDest = POPULAR_DESTINATIONS.find(
      (d) =>
        d.state.toLowerCase() === region.name.toLowerCase() ||
        region.name.toLowerCase().includes(d.state.toLowerCase()) ||
        (region.capital && d.name.toLowerCase().includes(region.capital.toLowerCase()))
    );

    if (matchingDest) {
      setPreselectedTripDest(matchingDest);
    } else {
      const dynamicDest: Destination = {
        id: `region-${region.id}`,
        name: region.capital || region.name,
        state: region.name,
        region: (region.zone as any) || 'North',
        category: 'Heritage & Forts',
        image: region.image,
        rating: 4.85,
        reviewsCount: 4800,
        bestSeason: region.bestSeason,
        tagline: region.tagline,
        description: region.description,
        attractions: region.touristPlaces.map((p) => p.name).slice(0, 5),
        mustTryFood: [region.food.specialty, region.food.beverageOrDessert].filter(Boolean),
        safetyTips: region.safety.tips.slice(0, 3),
        nearestHub: region.travelInfo.nearestAirports[0] || `${region.name} Transit Hub`,
        idealDuration: region.travelInfo.idealStayDuration,
        averageCostPerDay: '₹2,500 - ₹5,000',
        isPopular: true
      };
      setPreselectedTripDest(dynamicDest);
    }
    setIsTripPlannerOpen(true);
  };

  const handleOpenTripPlannerWithDest = (dest: Destination) => {
    setPreselectedTripDest(dest);
    setIsTripPlannerOpen(true);
  };

  const handleOpenGeneralTripPlanner = () => {
    setPreselectedTripDest(null);
    setIsTripPlannerOpen(true);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedState('');
    setActiveFilterTab('all');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#13221B] font-sans selection:bg-[#E25822]/20 selection:text-[#E25822]">
      {/* 1. Responsive Navbar with View state */}
      <Navbar
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesModalOpen(true)}
        onOpenTripPlanner={handleOpenGeneralTripPlanner}
        onOpenSafetyModal={() => setIsSafetyModalOpen(true)}
        onOpenVoiceTranslator={() => setIsVoiceTranslatorOpen(true)}
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateExplore={handleOpenExplorePage}
      />

      <main className="flex-1">
        {/* VIEW 1: Full Homepage */}
        {currentView === 'home' && (
          <>
            {/* Hero Section with "Discover India, Your Way" */}
            <Hero
              onExploreClick={handleOpenExplorePage}
              onPlanTripClick={handleOpenGeneralTripPlanner}
              onOpenSafetyClick={() => setIsSafetyModalOpen(true)}
            />

            {/* Interactive Search Bar for States and Destinations */}
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                if (cat !== 'All') {
                  setActiveFilterTab(cat);
                } else {
                  setActiveFilterTab('all');
                }
              }}
              selectedState={selectedState}
              onSelectState={setSelectedState}
              totalResults={filteredDestinations.length}
            />

            {/* Core Feature Cards (Explore Places, Local Culture & Food, Travel Safety, Plan Your Trip) */}
            <FeatureCards
              onOpenExploreCircuit={handleOpenExplorePage}
              onOpenCultureFood={() => setIsCultureModalOpen(true)}
              onOpenSafetyModal={() => setIsSafetyModalOpen(true)}
              onOpenTripPlanner={handleOpenGeneralTripPlanner}
              onOpenVoiceTranslator={() => setIsVoiceTranslatorOpen(true)}
            />

            {/* Popular Indian Destinations Showcase */}
            <PopularDestinations
              destinations={filteredDestinations}
              onSelectDestination={(dest) => setSelectedDestination(dest)}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              activeFilterTab={activeFilterTab}
              onFilterTabChange={(tab) => {
                setActiveFilterTab(tab);
                if (tab !== 'all' && tab !== 'popular') {
                  setSelectedCategory(tab as DestinationCategory);
                } else {
                  setSelectedCategory('All');
                }
              }}
              onResetFilters={handleResetFilters}
            />
          </>
        )}

        {/* VIEW 2: Explore India Directory (All 28 States & 8 Union Territories) */}
        {currentView === 'explore' && (
          <ExploreIndia
            onBackToHome={handleNavigateHome}
            onSelectRegion={handleSelectRegion}
            onOpenSafetyModal={() => setIsSafetyModalOpen(true)}
            onOpenTripPlanner={handleOpenGeneralTripPlanner}
          />
        )}

        {/* VIEW 3: Dedicated Region / Destination Details Page */}
        {currentView === 'region-details' && selectedRegion && (
          <RegionDetails
            region={selectedRegion}
            onBackToExplore={handleBackToExplore}
            onPlanTrip={handlePlanTripForRegion}
            onOpenSafetyModal={() => setIsSafetyModalOpen(true)}
          />
        )}
      </main>

      {/* 7. Footer with Ministry links, Navigation, and Emergency Helplines */}
      <Footer
        onOpenSafetyModal={() => setIsSafetyModalOpen(true)}
        onOpenTripPlanner={handleOpenGeneralTripPlanner}
        onOpenVoiceTranslator={() => setIsVoiceTranslatorOpen(true)}
        onNavigateHome={handleNavigateHome}
        onNavigateExplore={handleOpenExplorePage}
      />

      {/* Modals & Dialogs */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        isFavorite={selectedDestination ? favorites.includes(selectedDestination.id) : false}
        onToggleFavorite={toggleFavorite}
        onPlanTripForDestination={handleOpenTripPlannerWithDest}
      />

      <TripPlannerModal
        isOpen={isTripPlannerOpen}
        onClose={() => setIsTripPlannerOpen(false)}
        preselectedDestination={preselectedTripDest}
      />

      <SafetyGuideModal
        isOpen={isSafetyModalOpen}
        onClose={() => setIsSafetyModalOpen(false)}
      />

      <CultureFoodModal
        isOpen={isCultureModalOpen}
        onClose={() => setIsCultureModalOpen(false)}
      />

      <VoiceTranslatorModal
        isOpen={isVoiceTranslatorOpen}
        onClose={() => setIsVoiceTranslatorOpen(false)}
      />

      <FavoritesModal
        isOpen={isFavoritesModalOpen}
        onClose={() => setIsFavoritesModalOpen(false)}
        favorites={savedDestinationsList}
        onRemoveFavorite={toggleFavorite}
        onSelectDestination={(dest) => {
          setIsFavoritesModalOpen(false);
          setSelectedDestination(dest);
        }}
        onPlanTrip={(dest) => {
          setIsFavoritesModalOpen(false);
          handleOpenTripPlannerWithDest(dest);
        }}
      />
    </div>
  );
}
