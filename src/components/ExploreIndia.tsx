import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Compass,
  Filter,
  Landmark,
  Sparkles,
  Shield,
  Layers
} from 'lucide-react';
import { INDIA_REGIONS } from '../data/regionsData';
import { IndiaRegion, RegionType } from '../types';

interface ExploreIndiaProps {
  onBackToHome: () => void;
  onSelectRegion: (region: IndiaRegion) => void;
  onOpenSafetyModal: () => void;
  onOpenTripPlanner: () => void;
}

export const ExploreIndia: React.FC<ExploreIndiaProps> = ({
  onBackToHome,
  onSelectRegion,
  onOpenSafetyModal,
  onOpenTripPlanner,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<'All' | RegionType>('All');
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const statesCount = useMemo(() => INDIA_REGIONS.filter(r => r.type === 'State').length, []);
  const utCount = useMemo(() => INDIA_REGIONS.filter(r => r.type === 'Union Territory').length, []);

  const filteredRegions = useMemo(() => {
    return INDIA_REGIONS.filter((region) => {
      // Type Filter
      if (selectedType !== 'All' && region.type !== selectedType) {
        return false;
      }

      // Zone Filter
      if (selectedZone !== 'All') {
        const normZone = (z: string) => z.toLowerCase().replace(/[^a-z]/g, '');
        if (normZone(region.zone) !== normZone(selectedZone)) {
          return false;
        }
      }

      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = region.name.toLowerCase().includes(q);
        const matchesCapital = region.capital.toLowerCase().includes(q);
        const matchesTagline = region.tagline.toLowerCase().includes(q);
        const matchesDescription = region.description.toLowerCase().includes(q);
        const matchesPlaces = region.touristPlaces.some(p => p.name.toLowerCase().includes(q));
        const matchesFood = region.food.dishes.some(d => d.toLowerCase().includes(q));

        if (!matchesName && !matchesCapital && !matchesTagline && !matchesDescription && !matchesPlaces && !matchesFood) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedZone]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
    setSelectedZone('All');
  };

  return (
    <div id="explore-india-page" className="min-h-screen bg-[#FAF7F2] text-[#13221B] pt-24 pb-20">
      {/* Top Breadcrumb & Back Navigation Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5DFD5]">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5C7065]">
            <button
              onClick={onBackToHome}
              className="hover:text-[#E25822] transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span className="text-[#C5D0CA]">/</span>
            <span className="font-semibold text-[#185240]">Explore India</span>
          </div>

          <button
            id="back-to-home-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#185240] bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] hover:border-[#185240] shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#E25822]" />
            <span>Back to Homepage</span>
          </button>
        </div>
      </div>

      {/* Hero Header for Explore Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B2B20] via-[#113D2F] to-[#185240] p-8 sm:p-12 text-white shadow-xl">
          {/* Decorative subtle texture & saffron radial glow */}
          <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-[#E25822]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-80 h-80 bg-[#236B54]/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#185240]/80 border border-[#2B7A60]/60 text-xs text-[#E2EBE6] font-medium backdrop-blur-sm">
              <Compass className="w-3.5 h-3.5 text-[#E25822]" />
              <span>Comprehensive National Tourism Directory</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Explore All <span className="text-[#FF9E68]">28 States</span> &{' '}
              <span className="text-[#FFB26B]">8 Union Territories</span>
            </h1>

            <p className="text-sm sm:text-base text-[#D0DFD7] leading-relaxed max-w-2xl font-normal">
              Dive into the distinct soul of every Indian region — from majestic Himalayan frontiers and desert citadels to tropical palm backwaters and turquoise island atolls.
            </p>

            {/* Quick Metrics Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#0B2B20]/60 border border-[#236B54]/70 font-semibold text-[#FAF7F2]">
                <strong className="text-[#FF9E68] font-bold text-sm">28</strong> States
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#0B2B20]/60 border border-[#236B54]/70 font-semibold text-[#FAF7F2]">
                <strong className="text-[#FF9E68] font-bold text-sm">8</strong> Union Territories
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#0B2B20]/60 border border-[#236B54]/70 font-semibold text-[#FAF7F2]">
                <strong className="text-[#FF9E68] font-bold text-sm">42</strong> UNESCO World Heritage Sites
              </span>
              <button
                onClick={onOpenSafetyModal}
                className="px-3.5 py-1.5 rounded-xl bg-[#E25822]/20 hover:bg-[#E25822]/30 border border-[#E25822]/40 text-[#FFB26B] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>24×7 Safety Line: 1363</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Search & Simple Region Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sticky top-20 z-30">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg shadow-[#13221B]/5 border border-[#E3DDD3]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#85998E]" />
              <input
                id="region-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search state, union territory, capital, or top place (e.g. Rajasthan, Leh, Kerala, Goa)..."
                className="w-full pl-12 pr-10 py-3 bg-[#FAF7F2] border border-[#D5DDD8] focus:border-[#E25822] rounded-xl text-sm font-medium text-[#13221B] placeholder-[#85998E] outline-none transition-all shadow-inner focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#85998E] hover:text-[#13221B] cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Simple Region Filters: All, States, Union Territories */}
            <div className="flex items-center gap-1.5 p-1 bg-[#FAF7F2] rounded-xl border border-[#D5DDD8] self-start md:self-auto overflow-x-auto max-w-full">
              <button
                id="filter-all-regions"
                onClick={() => setSelectedType('All')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedType === 'All'
                    ? 'bg-[#185240] text-white shadow-sm'
                    : 'text-[#5C7065] hover:text-[#13221B] hover:bg-white/60'
                }`}
              >
                All Regions ({INDIA_REGIONS.length})
              </button>

              <button
                id="filter-states-only"
                onClick={() => setSelectedType('State')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedType === 'State'
                    ? 'bg-[#185240] text-white shadow-sm'
                    : 'text-[#5C7065] hover:text-[#13221B] hover:bg-white/60'
                }`}
              >
                States ({statesCount})
              </button>

              <button
                id="filter-ut-only"
                onClick={() => setSelectedType('Union Territory')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedType === 'Union Territory'
                    ? 'bg-[#E25822] text-white shadow-sm'
                    : 'text-[#5C7065] hover:text-[#13221B] hover:bg-white/60'
                }`}
              >
                Union Territories ({utCount})
              </button>
            </div>
          </div>

          {/* Quick Zone Chips & Results Status */}
          <div className="mt-3.5 pt-3 border-t border-[#EDE8E0] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto py-0.5">
              <span className="text-[#7A8E82] font-medium flex items-center gap-1">
                <Filter className="w-3 h-3" /> Zone:
              </span>
              {['All', 'North', 'South', 'West', 'East', 'Central', 'North-East', 'Islands'].map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer font-medium ${
                    selectedZone === zone
                      ? 'bg-[#E25822]/15 text-[#E25822] font-semibold'
                      : 'text-[#5C7065] hover:text-[#185240] hover:bg-[#F3EFEA]'
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>

            <div className="text-[#5C7065] font-medium">
              Showing <span className="font-bold text-[#185240]">{filteredRegions.length}</span> of {INDIA_REGIONS.length} regions
            </div>
          </div>
        </div>
      </section>

      {/* Regions Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredRegions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRegions.map((region) => (
              <div
                key={region.id}
                id={`region-card-${region.id}`}
                onClick={() => onSelectRegion(region)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E5DFD5] hover:border-[#E25822]/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Region Image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#0B2B20]">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Type Badge: State or UT */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-full backdrop-blur-md shadow-md ${
                        region.type === 'State'
                          ? 'bg-[#185240]/90 text-white border border-[#2B7A60]'
                          : 'bg-[#E25822]/90 text-white border border-[#F97316]'
                      }`}
                    >
                      {region.type === 'State' ? 'State' : 'Union Territory'}
                    </span>
                  </div>

                  {/* Zone Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-semibold text-white/90 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                      {region.zone}
                    </span>
                  </div>

                  {/* Capital Display on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5 text-xs font-medium drop-shadow">
                      <MapPin className="w-3.5 h-3.5 text-[#FF9E68] shrink-0" />
                      <span>Capital: <strong>{region.capital}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif-title text-xl font-bold text-[#13221B] group-hover:text-[#E25822] transition-colors leading-snug">
                      {region.name}
                    </h3>
                    <p className="text-xs text-[#6B8074] mt-1 line-clamp-2 leading-relaxed">
                      {region.tagline}
                    </p>
                  </div>

                  {/* Tourist Highlights preview */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F0EBE3]">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A9C92] block">
                      Top Destinations:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {region.touristPlaces.slice(0, 2).map((place, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#185240] text-[11px] font-medium border border-[#E5DFD5]"
                        >
                          {place.name.split('(')[0].trim()}
                        </span>
                      ))}
                      {region.touristPlaces.length > 2 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-[#FAF7F2] text-[#8A9C92] text-[10px] font-semibold">
                          +{region.touristPlaces.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#185240] group-hover:text-[#E25822] transition-colors">
                    <span>View Destination Guide</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#E5DFD5] shadow-sm max-w-xl mx-auto my-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#FAF7F2] flex items-center justify-center text-[#85998E]">
              <Search className="w-8 h-8 text-[#E25822]" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#13221B] mb-2">
              No regions found
            </h3>
            <p className="text-sm text-[#5C7065] mb-6 max-w-md mx-auto leading-relaxed">
              We couldn't find any state or union territory matching "<strong>{searchQuery}</strong>". Try searching for names like "Kerala", "Ladakh", "Rajasthan", or "Delhi".
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#185240] text-white hover:bg-[#0B2B20] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Quick Explore Bottom Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-white border border-[#E3DDD3] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#13221B]">
              Need a personalized travel itinerary?
            </h3>
            <p className="text-sm text-[#5C7065] max-w-xl">
              Use our smart multi-state trip planner to generate verified day-wise schedules, budget estimates, and transport routes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenTripPlanner}
              className="px-6 py-3 rounded-full text-sm font-bold bg-[#E25822] hover:bg-[#C84614] text-white shadow-md shadow-[#E25822]/20 transition-all cursor-pointer"
            >
              Custom Itinerary Builder
            </button>
            <button
              onClick={onBackToHome}
              className="px-5 py-3 rounded-full text-sm font-semibold bg-[#FAF7F2] hover:bg-[#EDE8E0] text-[#185240] border border-[#D5DDD8] transition-all cursor-pointer"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
