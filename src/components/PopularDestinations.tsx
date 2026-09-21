import React, { useState } from 'react';
import { Destination, DestinationCategory } from '../types';
import { MapPin, Star, Heart, Calendar, ArrowRight, Eye, Utensils, IndianRupee } from 'lucide-react';

interface PopularDestinationsProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  activeFilterTab: string;
  onFilterTabChange: (tab: string) => void;
  onResetFilters?: () => void;
}

const TABS = [
  { id: 'all', label: 'All Destinations' },
  { id: 'popular', label: 'Most Popular' },
  { id: 'Heritage & Forts', label: 'Heritage & Forts' },
  { id: 'Mountains & Valleys', label: 'Himalayas & Hills' },
  { id: 'Spiritual & Sacred', label: 'Spiritual & Sacred' },
  { id: 'Coastal & Backwaters', label: 'Coastal & Backwaters' },
  { id: 'Wildlife & Eco', label: 'Eco & Wildlife' },
];

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  destinations,
  onSelectDestination,
  favorites,
  onToggleFavorite,
  activeFilterTab,
  onFilterTabChange,
  onResetFilters,
}) => {
  return (
    <section id="destinations" className="py-20 bg-[#F4EFE6]/60 border-t border-b border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E25822]/10 border border-[#E25822]/20 text-[#C84614] text-xs font-bold uppercase tracking-wider mb-2.5">
              Handpicked Indian Journeys
            </div>
            <h2
              id="popular-destinations-heading"
              className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#113D2F] tracking-tight"
            >
              Popular Indian Destinations
            </h2>
            <p className="text-sm sm:text-base text-[#475E54] mt-2 max-w-2xl">
              Explore timeless monuments, serene backwaters, holy riverbanks, and high-altitude marvels curated with verified safety insights.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#185240] bg-white px-4 py-2 rounded-2xl border border-[#EAE2D5] shadow-sm">
            <span>Verified Ministry of Tourism Guides</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {TABS.map((tab) => {
            const isActive = activeFilterTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`destination-tab-${tab.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => onFilterTabChange(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#185240] text-white shadow-md shadow-[#185240]/20'
                    : 'bg-white text-[#475E54] hover:text-[#113D2F] hover:bg-[#FAF7F2] border border-[#EAE2D5]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Destinations Grid */}
        {destinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {destinations.map((destination) => {
              const isFav = favorites.includes(destination.id);

              return (
                <div
                  key={destination.id}
                  id={`destination-card-${destination.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#EAE2D5] hover:border-[#185240]/50 shadow-sm hover:shadow-2xl hover:shadow-[#0B2B20]/15 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#EAE2D5]">
                    <img
                      src={destination.image}
                      alt={`${destination.name}, ${destination.state}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B20]/90 via-[#0B2B20]/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0B2B20]/80 text-[#FAF7F2] backdrop-blur-md border border-white/20">
                        <MapPin className="w-3.5 h-3.5 text-[#E25822]" />
                        <span>{destination.state}</span>
                      </span>

                      {/* Favorite Button */}
                      <button
                        id={`favorite-btn-${destination.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(destination.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                          isFav
                            ? 'bg-[#E25822] text-white shadow-lg'
                            : 'bg-[#0B2B20]/60 text-white hover:bg-[#E25822] hover:text-white'
                        }`}
                        aria-label={isFav ? 'Remove from saved' : 'Save destination'}
                        title={isFav ? 'Remove from saved' : 'Save destination'}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    {/* Rating & Season in Image Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#FFB26B] block">
                          {destination.category}
                        </span>
                        <h3 className="font-serif-title text-2xl font-bold leading-tight drop-shadow-sm">
                          {destination.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 bg-[#0B2B20]/80 px-2.5 py-1 rounded-xl backdrop-blur-md border border-white/10 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 text-[#FFB26B] fill-[#FFB26B]" />
                        <span>{destination.rating}</span>
                        <span className="text-[#A7C2B5] font-normal text-[10px]">
                          ({(destination.reviewsCount / 1000).toFixed(1)}k)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Tagline */}
                      <p className="text-xs font-semibold text-[#856404] tracking-wide mb-2.5">
                        {destination.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-[#475E54] line-clamp-2 leading-relaxed mb-4">
                        {destination.description}
                      </p>

                      {/* Meta Tags (Season, Duration, Budget) */}
                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-[#2C4137] bg-[#FAF7F2] p-3 rounded-2xl border border-[#EAE2D5]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#185240] flex-shrink-0" />
                          <span className="truncate">{destination.bestSeason}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <IndianRupee className="w-3.5 h-3.5 text-[#E25822] flex-shrink-0" />
                          <span className="truncate">{destination.averageCostPerDay} / day</span>
                        </div>
                      </div>

                      {/* Must-Try Cuisine Tag */}
                      <div className="flex items-center gap-1.5 text-xs text-[#475E54] mb-5">
                        <Utensils className="w-3.5 h-3.5 text-[#E25822] flex-shrink-0" />
                        <span className="text-[#647C72] font-medium">Try:</span>
                        <span className="font-semibold text-[#185240] truncate">
                          {destination.mustTryFood.slice(0, 2).join(' · ')}
                        </span>
                      </div>
                    </div>

                    {/* View Guide Button */}
                    <button
                      id={`view-guide-btn-${destination.id}`}
                      onClick={() => onSelectDestination(destination)}
                      className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#185240] hover:bg-[#113D2F] flex items-center justify-center gap-2 shadow-sm transition-all group-hover:bg-[#E25822] cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Explore Destination Guide</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-3xl p-12 text-center border border-[#EAE2D5] max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] flex items-center justify-center mx-auto mb-4 border border-[#EAE2D5]">
              <MapPin className="w-8 h-8 text-[#E25822]" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#113D2F] mb-2">
              No Destinations Found
            </h3>
            <p className="text-sm text-[#475E54] mb-6">
              We couldn't find any destinations matching your exact filter criteria. Try clearing the search query or selecting a different Indian state.
            </p>
            {onResetFilters && (
              <button
                onClick={onResetFilters}
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#185240] hover:bg-[#113D2F] text-white transition-all cursor-pointer"
              >
                Reset Search Filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
