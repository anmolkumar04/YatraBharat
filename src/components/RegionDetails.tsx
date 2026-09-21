import React, { useEffect, useState, useMemo } from 'react';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Compass,
  Utensils,
  Landmark,
  Shield,
  Plane,
  Train,
  Car,
  AlertTriangle,
  Heart,
  Share2,
  Sparkles,
  Phone,
  FileCheck,
  CheckCircle2,
  ExternalLink,
  Search,
  Star,
  Filter,
  Check,
  Plus,
  Eye,
  Navigation,
  X,
  Clock,
  Info
} from 'lucide-react';
import { IndiaRegion, TouristPlace } from '../types';
import { getEnrichedPlacesForRegion } from '../data/placesData';
import { PlaceDetailsModal } from './PlaceDetailsModal';
import { LocalCultureAndFood } from './LocalCultureAndFood';
import { TouristSafetyAndScamAwareness } from './TouristSafetyAndScamAwareness';

interface RegionDetailsProps {
  region: IndiaRegion;
  onBackToExplore: () => void;
  onPlanTrip: (region: IndiaRegion) => void;
  onOpenSafetyModal: () => void;
}

export const RegionDetails: React.FC<RegionDetailsProps> = ({
  region,
  onBackToExplore,
  onPlanTrip,
  onOpenSafetyModal,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [region]);

  // Places Filtering & Modal State
  const [activePlacesFilter, setActivePlacesFilter] = useState<
    'All' | 'Famous' | 'Hidden' | 'Nature' | 'Heritage' | 'Spiritual'
  >('All');
  const [placesSearchQuery, setPlacesSearchQuery] = useState<string>('');
  const [selectedModalPlace, setSelectedModalPlace] = useState<TouristPlace | null>(null);
  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState<boolean>(false);
  const [itineraryPlaceIds, setItineraryPlaceIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<{ text: string; placeName?: string } | null>(null);

  // Load enriched places for this region
  const allRegionPlaces = useMemo(() => {
    return getEnrichedPlacesForRegion(region);
  }, [region]);

  // Toast dismissal helper
  const triggerToast = (text: string, placeName?: string) => {
    setToastMessage({ text, placeName });
    setTimeout(() => {
      setToastMessage((current) => (current?.text === text ? null : current));
    }, 4500);
  };

  // Filter calculations
  const filteredPlaces = useMemo(() => {
    return allRegionPlaces.filter((place) => {
      // Filter by Tab
      if (activePlacesFilter === 'Famous' && !place.isFamous) return false;
      if (activePlacesFilter === 'Hidden' && !place.isHiddenGem) return false;
      if (
        activePlacesFilter === 'Nature' &&
        place.category !== 'Nature' &&
        !place.tag?.toLowerCase().includes('nature') &&
        !place.tag?.toLowerCase().includes('wildlife') &&
        !place.tag?.toLowerCase().includes('scenic')
      ) {
        return false;
      }
      if (
        activePlacesFilter === 'Heritage' &&
        place.category !== 'Heritage' &&
        !place.tag?.toLowerCase().includes('heritage') &&
        !place.tag?.toLowerCase().includes('historic')
      ) {
        return false;
      }
      if (
        activePlacesFilter === 'Spiritual' &&
        place.category !== 'Spiritual' &&
        !place.tag?.toLowerCase().includes('spiritual') &&
        !place.tag?.toLowerCase().includes('temple') &&
        !place.tag?.toLowerCase().includes('shrine')
      ) {
        return false;
      }

      // Filter by Live Search
      if (placesSearchQuery.trim()) {
        const q = placesSearchQuery.toLowerCase().trim();
        const matchName = place.name.toLowerCase().includes(q);
        const matchLoc = (place.location || '').toLowerCase().includes(q);
        const matchDesc = place.description.toLowerCase().includes(q);
        const matchTag = (place.tag || '').toLowerCase().includes(q);
        const matchCat = (place.category || '').toLowerCase().includes(q);

        if (!matchName && !matchLoc && !matchDesc && !matchTag && !matchCat) {
          return false;
        }
      }

      return true;
    });
  }, [allRegionPlaces, activePlacesFilter, placesSearchQuery]);

  // Filter count metrics
  const filterCounts = useMemo(() => {
    return {
      all: allRegionPlaces.length,
      famous: allRegionPlaces.filter((p) => p.isFamous).length,
      hidden: allRegionPlaces.filter((p) => p.isHiddenGem).length,
      nature: allRegionPlaces.filter(
        (p) =>
          p.category === 'Nature' ||
          p.tag?.toLowerCase().includes('nature') ||
          p.tag?.toLowerCase().includes('wildlife') ||
          p.tag?.toLowerCase().includes('scenic')
      ).length,
      heritage: allRegionPlaces.filter(
        (p) =>
          p.category === 'Heritage' ||
          p.tag?.toLowerCase().includes('heritage') ||
          p.tag?.toLowerCase().includes('historic')
      ).length,
      spiritual: allRegionPlaces.filter(
        (p) =>
          p.category === 'Spiritual' ||
          p.tag?.toLowerCase().includes('spiritual') ||
          p.tag?.toLowerCase().includes('temple') ||
          p.tag?.toLowerCase().includes('shrine')
      ).length,
    };
  }, [allRegionPlaces]);

  // Actions
  const handleOpenPlaceDetails = (place: TouristPlace) => {
    setSelectedModalPlace(place);
    setIsPlaceModalOpen(true);
  };

  const handleViewOnMap = (place: TouristPlace, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const mapQuery = encodeURIComponent(
      `${place.name}, ${place.location || region.name}, India`
    );
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
    const link = document.createElement('a');
    link.href = mapUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleToggleItinerary = (place: TouristPlace, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const placeKey = place.id || place.name;
    const isAdded = itineraryPlaceIds.includes(placeKey);

    if (isAdded) {
      setItineraryPlaceIds((prev) => prev.filter((id) => id !== placeKey));
      triggerToast(`Removed "${place.name}" from your itinerary.`, place.name);
    } else {
      setItineraryPlaceIds((prev) => [...prev, placeKey]);
      triggerToast(`Added "${place.name}" to your ${region.name} itinerary!`, place.name);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${region.name} - YatraBharat`,
        text: region.tagline,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      triggerToast(`Link to ${region.name} guide copied to clipboard!`);
    }
  };

  return (
    <div id="region-details-page" className="min-h-screen bg-[#FAF7F2] text-[#13221B] pt-24 pb-20">
      {/* Top Breadcrumbs & Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5DFD5]">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5C7065]">
            <button
              onClick={onBackToExplore}
              className="hover:text-[#E25822] transition-colors cursor-pointer"
            >
              Explore India
            </button>
            <span className="text-[#C5D0CA]">/</span>
            <span className="text-[#7A8E82]">{region.type === 'State' ? 'State' : 'Union Territory'}</span>
            <span className="text-[#C5D0CA]">/</span>
            <span className="font-semibold text-[#185240]">{region.name}</span>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              id="back-to-explore-btn"
              onClick={onBackToExplore}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#185240] bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] hover:border-[#185240] shadow-sm transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#E25822]" />
              <span>Back to Explore India</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] text-[#5C7065] hover:text-[#185240] transition-colors cursor-pointer"
              title="Share destination"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner with Rich Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0B2B20]">
          {/* Main Background Imagery */}
          <div className="relative h-[380px] sm:h-[450px] w-full">
            <img
              src={region.image}
              alt={region.name}
              className="w-full h-full object-cover object-center"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B20] via-[#0B2B20]/75 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B20]/90 via-[#0B2B20]/50 to-transparent" />
          </div>

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 p-6 sm:p-10 md:p-12 flex flex-col justify-between text-white">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md shadow-md ${
                  region.type === 'State'
                    ? 'bg-[#185240]/90 text-white border border-[#2B7A60]'
                    : 'bg-[#E25822]/90 text-white border border-[#F97316]'
                }`}
              >
                {region.type === 'State' ? 'Indian State' : 'Union Territory'}
              </span>

              <span className="px-3 py-1 text-xs font-semibold text-white/90 bg-white/15 backdrop-blur-md rounded-full border border-white/20">
                Zone: {region.zone}
              </span>

              {region.travelInfo.permitRequired && (
                <span className="px-3 py-1 text-xs font-semibold text-[#FFD79E] bg-[#E25822]/40 backdrop-blur-md rounded-full border border-[#E25822]">
                  Permit Required
                </span>
              )}
            </div>

            {/* Main Title & Descriptive Tagline */}
            <div className="space-y-3 max-w-3xl">
              <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                {region.name}
              </h1>

              <p className="text-base sm:text-xl text-[#FFB26B] font-medium leading-snug">
                {region.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#D0DFD7] max-w-2xl leading-relaxed line-clamp-3 sm:line-clamp-none font-normal">
                {region.description}
              </p>

              {/* Fast Facts Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#E2EBE6]">
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl backdrop-blur-sm border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#E25822]" />
                  <span>Capital: <strong className="text-white">{region.capital}</strong></span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl backdrop-blur-sm border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-[#FF9E68]" />
                  <span>Best Season: <strong className="text-white">{region.bestSeason}</strong></span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl backdrop-blur-sm border border-white/10">
                  <Compass className="w-3.5 h-3.5 text-[#A7C2B5]" />
                  <span>Ideal Stay: <strong className="text-white">{region.travelInfo.idealStayDuration}</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                id="plan-trip-to-region-btn"
                onClick={() => onPlanTrip(region)}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E25822] hover:bg-[#C84614] shadow-lg shadow-[#E25822]/40 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Plan Trip to {region.name}</span>
              </button>

              <button
                onClick={onOpenSafetyModal}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#FAF7F2] bg-[#113D2F]/80 hover:bg-[#185240] border border-[#236B54] backdrop-blur-md transition-all cursor-pointer"
              >
                <Shield className="w-4 h-4 text-[#FF9E68]" />
                <span>Safety Advisory ({region.safety.emergencyHelpline})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Jump In-Page Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <a
            href="#section-places"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] hover:border-[#185240] text-xs font-bold text-[#185240] transition-colors whitespace-nowrap shadow-xs"
          >
            <Landmark className="w-3.5 h-3.5 text-[#E25822]" />
            <span>Tourist Attractions</span>
          </a>
          <a
            href="#section-culture-food"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] hover:border-[#185240] text-xs font-bold text-[#185240] transition-colors whitespace-nowrap shadow-xs"
          >
            <Utensils className="w-3.5 h-3.5 text-[#E25822]" />
            <span>Local Culture & Food</span>
          </a>
          <a
            href="#section-safety"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] hover:border-[#185240] text-xs font-bold text-[#185240] transition-colors whitespace-nowrap shadow-xs"
          >
            <Shield className="w-3.5 h-3.5 text-[#E25822]" />
            <span>Safety & Scam Awareness</span>
          </a>
          <a
            href="#section-travel-info"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] hover:border-[#185240] text-xs font-bold text-[#185240] transition-colors whitespace-nowrap shadow-xs"
          >
            <Compass className="w-3.5 h-3.5 text-[#E25822]" />
            <span>Transit & Connectivity</span>
          </a>
        </div>
      </div>

      {/* Main Multi-Tab / Structured Details Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ================= 1. TOURIST PLACES & LOCAL DISCOVERY ================= */}
        <section id="section-places" className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DFD5] shadow-sm">
          {/* Section Heading & Itinerary Status Strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#EDE8E0]">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E25822] uppercase tracking-wider mb-1">
                <Landmark className="w-3.5 h-3.5" />
                <span>Tourist Attractions & Hidden Gems</span>
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#13221B]">
                Discover Places in {region.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#5C7065] mt-1">
                Iconic heritage landmarks, breathtaking natural escapes, and secluded offbeat treasures.
              </p>
            </div>

            {/* Itinerary Counter Badge */}
            <div className="flex items-center gap-2 self-start md:self-center">
              {itineraryPlaceIds.length > 0 && (
                <button
                  onClick={() => onPlanTrip(region)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#185240] text-white hover:bg-[#0B2B20] transition-colors cursor-pointer shadow-sm"
                >
                  <Check className="w-3.5 h-3.5 text-[#FFB26B]" />
                  <span>{itineraryPlaceIds.length} in Itinerary</span>
                  <span className="underline ml-1">Open Plan →</span>
                </button>
              )}
              <span className="text-xs text-[#5C7065] font-medium bg-[#FAF7F2] px-3.5 py-2 rounded-full border border-[#D5DDD8]">
                {filteredPlaces.length} Destinations
              </span>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
            {/* Filter Tabs: Famous Places, Hidden Gems, Nature, Heritage, Spiritual */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <button
                id="places-filter-all-btn"
                onClick={() => setActivePlacesFilter('All')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activePlacesFilter === 'All'
                    ? 'bg-[#185240] text-white shadow-md'
                    : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
                }`}
              >
                <span>All Places</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activePlacesFilter === 'All' ? 'bg-white/25 text-white' : 'bg-[#D5DDD8] text-[#13221B]'
                  }`}
                >
                  {filterCounts.all}
                </span>
              </button>

              <button
                id="places-filter-famous-btn"
                onClick={() => setActivePlacesFilter('Famous')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activePlacesFilter === 'Famous'
                    ? 'bg-[#185240] text-white shadow-md'
                    : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
                }`}
              >
                <Star className="w-3 h-3 text-[#FF9E68] fill-[#FF9E68]" />
                <span>Famous Places</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activePlacesFilter === 'Famous' ? 'bg-white/25 text-white' : 'bg-[#D5DDD8] text-[#13221B]'
                  }`}
                >
                  {filterCounts.famous}
                </span>
              </button>

              <button
                id="places-filter-hidden-btn"
                onClick={() => setActivePlacesFilter('Hidden')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activePlacesFilter === 'Hidden'
                    ? 'bg-[#E25822] text-white shadow-md'
                    : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#FFD6A5]" />
                <span>Hidden Gems</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activePlacesFilter === 'Hidden' ? 'bg-white/25 text-white' : 'bg-[#D5DDD8] text-[#13221B]'
                  }`}
                >
                  {filterCounts.hidden}
                </span>
              </button>

              <button
                id="places-filter-nature-btn"
                onClick={() => setActivePlacesFilter('Nature')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activePlacesFilter === 'Nature'
                    ? 'bg-[#185240] text-white shadow-md'
                    : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
                }`}
              >
                <span>Nature</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activePlacesFilter === 'Nature' ? 'bg-white/25 text-white' : 'bg-[#D5DDD8] text-[#13221B]'
                  }`}
                >
                  {filterCounts.nature}
                </span>
              </button>

              <button
                id="places-filter-heritage-btn"
                onClick={() => setActivePlacesFilter('Heritage')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activePlacesFilter === 'Heritage'
                    ? 'bg-[#185240] text-white shadow-md'
                    : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
                }`}
              >
                <span>Heritage</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activePlacesFilter === 'Heritage' ? 'bg-white/25 text-white' : 'bg-[#D5DDD8] text-[#13221B]'
                  }`}
                >
                  {filterCounts.heritage}
                </span>
              </button>

              <button
                id="places-filter-spiritual-btn"
                onClick={() => setActivePlacesFilter('Spiritual')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activePlacesFilter === 'Spiritual'
                    ? 'bg-[#185240] text-white shadow-md'
                    : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
                }`}
              >
                <span>Spiritual</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activePlacesFilter === 'Spiritual' ? 'bg-white/25 text-white' : 'bg-[#D5DDD8] text-[#13221B]'
                  }`}
                >
                  {filterCounts.spiritual}
                </span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-[#7A8E82] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={placesSearchQuery}
                onChange={(e) => setPlacesSearchQuery(e.target.value)}
                placeholder="Search attraction or city..."
                className="w-full pl-9 pr-8 py-2 bg-[#FAF7F2] border border-[#D5DDD8] rounded-xl text-xs sm:text-sm text-[#13221B] placeholder-[#85998E] focus:outline-none focus:ring-2 focus:ring-[#185240] focus:border-transparent transition-all"
              />
              {placesSearchQuery && (
                <button
                  onClick={() => setPlacesSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#7A8E82] hover:text-[#13221B]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Places Cards Grid */}
          {filteredPlaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map((place, idx) => {
                const placeKey = place.id || place.name;
                const isAdded = itineraryPlaceIds.includes(placeKey);

                return (
                  <div
                    key={place.id || idx}
                    onClick={() => handleOpenPlaceDetails(place)}
                    className="group bg-[#FAF7F2] rounded-2xl border border-[#E5DFD5] hover:border-[#185240]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    {/* Card Media Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-[#0B2B20]">
                      <img
                        src={place.image || region.image}
                        alt={place.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                        {place.isHiddenGem ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E25822] text-white shadow flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Hidden Gem</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#185240] text-white shadow flex items-center gap-1">
                            <Star className="w-3 h-3 fill-[#FF9E68] text-[#FF9E68]" />
                            <span>Famous Place</span>
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/40 text-white backdrop-blur-sm border border-white/20">
                          {place.category || place.tag || 'Attraction'}
                        </span>
                      </div>

                      {/* Best Time to Visit Overlay */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                        <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
                          <Calendar className="w-3 h-3 text-[#FF9E68]" />
                          <span className="truncate max-w-[180px]">
                            {place.bestTimeToVisit || region.bestSeason}
                          </span>
                        </span>

                        <span className="text-[11px] font-bold text-[#FFB26B] bg-black/40 px-2 py-0.5 rounded-md">
                          ★ {place.rating || '4.8'}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#13221B] group-hover:text-[#E25822] transition-colors leading-snug line-clamp-1">
                            {place.name}
                          </h3>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1 text-xs text-[#E25822] font-semibold mb-2">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">
                            {place.location || `${region.name}, India`}
                          </span>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-[#5C7065] leading-relaxed line-clamp-2">
                          {place.description}
                        </p>
                      </div>

                      {/* Card Action Buttons (View on Map & Add to Itinerary) */}
                      <div className="pt-3 border-t border-[#E5DFD5] flex items-center justify-between gap-2 mt-auto">
                        {/* View on Map Button */}
                        <button
                          type="button"
                          onClick={(e) => handleViewOnMap(place, e)}
                          title="View location on Google Maps"
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#185240] bg-white hover:bg-[#EDE8E0] border border-[#D5DDD8] hover:border-[#185240] transition-colors cursor-pointer"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[#E25822]" />
                          <span>Map</span>
                        </button>

                        {/* Add to Itinerary Button */}
                        <button
                          type="button"
                          onClick={(e) => handleToggleItinerary(place, e)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm ${
                            isAdded
                              ? 'bg-[#185240] text-white hover:bg-[#0B2B20]'
                              : 'bg-[#E25822] text-white hover:bg-[#C84614]'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#FFB26B]" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Itinerary +</span>
                            </>
                          )}
                        </button>

                        {/* Details Prompt */}
                        <button
                          type="button"
                          onClick={() => handleOpenPlaceDetails(place)}
                          className="text-xs font-semibold text-[#5C7065] hover:text-[#13221B] px-1 py-1"
                        >
                          Details →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 px-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5]">
              <Landmark className="w-10 h-10 text-[#7A8E82] mx-auto mb-3 opacity-60" />
              <h3 className="font-serif-title text-lg font-bold text-[#13221B] mb-1">
                No matching places found
              </h3>
              <p className="text-xs text-[#5C7065] max-w-md mx-auto mb-4">
                No destinations matched &ldquo;{placesSearchQuery}&rdquo; in the current filter.
              </p>
              <button
                onClick={() => {
                  setPlacesSearchQuery('');
                  setActivePlacesFilter('All');
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#185240] hover:bg-[#0B2B20] transition-colors cursor-pointer"
              >
                Reset Places Filters
              </button>
            </div>
          )}
        </section>

        {/* ================= 2. LOCAL CULTURE & AUTHENTIC FOOD ================= */}
        <LocalCultureAndFood region={region} onPlanTrip={onPlanTrip} />

        {/* ================= 3. TOURIST SAFETY & SCAM AWARENESS ================= */}
        <TouristSafetyAndScamAwareness region={region} />

        {/* ================= 5. TRAVEL INFORMATION & CONNECTIVITY ================= */}
        <section id="section-travel-info" className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DFD5] shadow-sm">
          <div className="mb-8 pb-4 border-b border-[#EDE8E0]">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E25822] uppercase tracking-wider mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Connectivity & Logistics</span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#13221B]">
              Travel Information & Getting There
            </h2>
            <p className="text-xs sm:text-sm text-[#5C7065] mt-1">
              Airports, railways, road connectivity, and official permit guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Air Connectivity */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#185240]/10 text-[#185240] flex items-center justify-center">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#13221B]">
                Airports
              </h3>
              <ul className="space-y-1.5 text-xs text-[#5C7065]">
                {region.travelInfo.nearestAirports.map((airport, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#E25822] font-bold">•</span>
                    <span>{airport}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Railway Connectivity */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#185240]/10 text-[#185240] flex items-center justify-center">
                <Train className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#13221B]">
                Railways
              </h3>
              <p className="text-xs text-[#5C7065] leading-relaxed">
                {region.travelInfo.railwayConnectivity}
              </p>
            </div>

            {/* Road & Highway */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#185240]/10 text-[#185240] flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#13221B]">
                Road & Highways
              </h3>
              <p className="text-xs text-[#5C7065] leading-relaxed">
                {region.travelInfo.roadConnectivity}
              </p>
            </div>
          </div>

          {/* Permit notice if required */}
          {region.travelInfo.permitRequired && (
            <div className="mt-6 p-4 rounded-2xl bg-[#E25822]/10 border border-[#E25822]/30 flex items-start gap-3 text-xs sm:text-sm text-[#872D0B]">
              <FileCheck className="w-5 h-5 text-[#E25822] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">Special Permit Requirement:</strong>
                <span>{region.travelInfo.permitRequired}</span>
              </div>
            </div>
          )}
        </section>

        {/* Bottom CTA Block */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B2B20] via-[#113D2F] to-[#185240] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF9E68]">
              Ready to embark?
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white">
              Create Your Dream {region.name} Itinerary
            </h3>
            <p className="text-xs sm:text-sm text-[#D0DFD7] max-w-xl">
              Get an instant day-wise itinerary with budget calculator, recommended hotels, and transit routes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onPlanTrip(region)}
              className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#E25822] hover:bg-[#C84614] text-white shadow-lg shadow-[#E25822]/40 transition-all cursor-pointer"
            >
              Plan Trip to {region.name}
            </button>
            <button
              onClick={onBackToExplore}
              className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full transition-all cursor-pointer"
            >
              Explore Other Regions
            </button>
          </div>
        </div>
      </div>

      {/* Place Details Modal with Travel Tips & Nearby Attractions */}
      <PlaceDetailsModal
        place={selectedModalPlace}
        region={region}
        isOpen={isPlaceModalOpen}
        onClose={() => {
          setIsPlaceModalOpen(false);
          setSelectedModalPlace(null);
        }}
        onToggleItinerary={handleToggleItinerary}
        isAddedToItinerary={
          selectedModalPlace
            ? itineraryPlaceIds.includes(selectedModalPlace.id || selectedModalPlace.name)
            : false
        }
        onViewOnMap={(p) => handleViewOnMap(p)}
      />

      {/* Floating Itinerary Feedback Notification Toast */}
      {toastMessage && (
        <div
          id="itinerary-toast-notification"
          className="fixed bottom-6 right-6 z-50 max-w-md bg-[#0B2B20] text-white p-4 rounded-2xl shadow-2xl border border-[#236B54] flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#185240] text-[#FFB26B] flex items-center justify-center shrink-0 border border-[#2B7A60]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white leading-tight">
                {toastMessage.text}
              </p>
              <p className="text-[11px] text-[#A3B8AD] mt-0.5">
                {itineraryPlaceIds.length} place{itineraryPlaceIds.length > 1 ? 's' : ''} currently saved in your plan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onPlanTrip(region)}
              className="px-3 py-1.5 rounded-xl bg-[#E25822] hover:bg-[#C84614] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Plan Trip
            </button>
            <button
              onClick={() => setToastMessage(null)}
              className="p-1 rounded-lg text-[#A3B8AD] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
