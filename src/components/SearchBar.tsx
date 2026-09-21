import React from 'react';
import { Search, X, MapPin, SlidersHorizontal, Sparkles } from 'lucide-react';
import { DestinationCategory } from '../types';
import { INDIAN_STATES } from '../data/destinations';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: DestinationCategory;
  onSelectCategory: (category: DestinationCategory) => void;
  selectedState: string;
  onSelectState: (state: string) => void;
  totalResults: number;
}

const CATEGORIES: DestinationCategory[] = [
  'All',
  'Heritage & Forts',
  'Mountains & Valleys',
  'Spiritual & Sacred',
  'Coastal & Backwaters',
  'Wildlife & Eco',
];

const POPULAR_SEARCH_CHIPS = [
  'Varanasi Ghats',
  'Jaipur Forts',
  'Kerala Backwaters',
  'Leh & Ladakh',
  'Hampi Chariot',
  'Rishikesh Ganga',
  'Meghalaya Living Roots',
];

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedState,
  onSelectState,
  totalResults,
}) => {
  const handleClear = () => {
    onSearchChange('');
    onSelectState('');
    onSelectCategory('All');
  };

  const isFiltered = searchQuery !== '' || selectedCategory !== 'All' || selectedState !== '';

  return (
    <section id="explore" className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Container Card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-[#0B2B20]/10 border border-[#EAE2D5] p-5 sm:p-7 backdrop-blur-md">
        {/* Main Search Row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3 sm:gap-4">
          {/* Destination / Keyword Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#185240]">
              <Search className="w-5 h-5 text-[#E25822]" />
            </div>
            <input
              type="text"
              id="destination-search-input"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by destination, state (e.g. Rajasthan, Varanasi, Kerala, Ladakh)..."
              className="w-full pl-12 pr-10 py-3.5 sm:py-4 bg-[#FAF7F2] hover:bg-[#F4EFE6]/70 focus:bg-white text-[#13221B] placeholder-[#647C72] text-sm sm:text-base rounded-2xl border border-[#EAE2D5] focus:border-[#E25822] focus:ring-2 focus:ring-[#E25822]/20 transition-all outline-none font-medium"
            />
            {searchQuery && (
              <button
                id="clear-search-query-btn"
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#647C72] hover:text-[#13221B] cursor-pointer"
                aria-label="Clear search input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* State Filter Selector */}
          <div className="relative w-full lg:w-64">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#185240]">
              <MapPin className="w-4 h-4 text-[#185240]" />
            </div>
            <select
              id="state-filter-select"
              value={selectedState}
              onChange={(e) => onSelectState(e.target.value)}
              className="w-full pl-11 pr-8 py-3.5 sm:py-4 bg-[#FAF7F2] hover:bg-[#F4EFE6]/70 focus:bg-white text-[#13221B] text-sm sm:text-base rounded-2xl border border-[#EAE2D5] focus:border-[#E25822] focus:ring-2 focus:ring-[#E25822]/20 transition-all outline-none font-medium cursor-pointer appearance-none"
            >
              <option value="">All Indian States & UTs</option>
              {INDIAN_STATES.map((st) => (
                <option key={st.name} value={st.name}>
                  {st.name} ({st.famousFor.split(',')[0]})
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#647C72]">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>

          {/* Reset button if filtered */}
          {isFiltered && (
            <button
              id="reset-all-filters-btn"
              onClick={handleClear}
              className="flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#B53B0B] bg-[#FFF5F0] hover:bg-[#FFEAE0] border border-[#E25822]/30 rounded-2xl transition-all cursor-pointer whitespace-nowrap"
            >
              <X className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="mt-4 pt-4 border-t border-[#F0EAE0] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-[#647C72] uppercase tracking-wider whitespace-nowrap pl-1 pr-2 hidden sm:inline-block">
            Categories:
          </span>
          <div className="flex items-center gap-2">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`category-pill-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => onSelectCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#185240] text-[#FAF7F2] shadow-sm shadow-[#185240]/40 ring-2 ring-[#185240]/20'
                      : 'bg-[#FAF7F2] text-[#475E54] hover:bg-[#F4EFE6] hover:text-[#13221B] border border-[#EAE2D5]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Search Chips & Live Result Status */}
        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[#647C72] font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E25822]" />
              Popular:
            </span>
            {POPULAR_SEARCH_CHIPS.map((chip) => (
              <button
                key={chip}
                id={`popular-chip-${chip.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => onSearchChange(chip.split(' ')[0])}
                className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE2D5] text-[#185240] font-medium transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          <div id="search-results-counter" className="text-right text-[#475E54] font-medium ml-auto">
            Showing <span className="font-bold text-[#185240]">{totalResults}</span> {totalResults === 1 ? 'destination' : 'destinations'}
            {isFiltered && <span className="text-[#E25822] ml-1">(Filtered)</span>}
          </div>
        </div>
      </div>
    </section>
  );
};
