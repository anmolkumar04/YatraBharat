import React, { useState, useMemo } from 'react';
import {
  Utensils,
  Sparkles,
  Calendar,
  Palette,
  Clock,
  Compass,
  Check,
  CheckCircle2,
  Info,
  Flame,
  Leaf,
  Music,
  HeartHandshake,
  Layers,
  ChevronRight
} from 'lucide-react';
import { IndiaRegion, RegionalDishItem } from '../types';
import { getEnrichedCultureAndFood } from '../data/cultureFoodData';

interface LocalCultureAndFoodProps {
  region: IndiaRegion;
  onPlanTrip: (region: IndiaRegion) => void;
}

type FilterCategory = 'All' | 'Food' | 'Festivals' | 'Arts & Attire' | 'Traditions' | 'Experiences';
type FoodDietFilter = 'All' | 'Veg' | 'NonVeg';

export const LocalCultureAndFood: React.FC<LocalCultureAndFoodProps> = ({
  region,
  onPlanTrip
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [foodDietFilter, setFoodDietFilter] = useState<FoodDietFilter>('All');
  const [savedExperienceIds, setSavedExperienceIds] = useState<string[]>([]);
  const [selectedDish, setSelectedDish] = useState<RegionalDishItem | null>(null);

  // Compute enriched culture & food data for this state or union territory
  const cultureFoodData = useMemo(() => {
    return getEnrichedCultureAndFood(region);
  }, [region]);

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    if (foodDietFilter === 'Veg') {
      return cultureFoodData.dishes.filter((d) => d.isVegetarian);
    }
    if (foodDietFilter === 'NonVeg') {
      return cultureFoodData.dishes.filter((d) => !d.isVegetarian);
    }
    return cultureFoodData.dishes;
  }, [cultureFoodData.dishes, foodDietFilter]);

  const toggleExperience = (expId: string) => {
    setSavedExperienceIds((prev) =>
      prev.includes(expId) ? prev.filter((id) => id !== expId) : [...prev, expId]
    );
  };

  const vegCount = cultureFoodData.dishes.filter((d) => d.isVegetarian).length;
  const nonVegCount = cultureFoodData.dishes.filter((d) => !d.isVegetarian).length;

  return (
    <div id="section-culture-food" className="space-y-10">
      {/* Main Container */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DFD5] shadow-sm">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#EDE8E0]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E25822] uppercase tracking-wider mb-1">
              <Utensils className="w-3.5 h-3.5" />
              <span>Heritage, Flavors & Living Traditions</span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#13221B]">
              Local Culture & Authentic Food of {region.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C7065] mt-1 max-w-2xl leading-relaxed">
              Explore indigenous culinary delicacies, vibrant harvest festivals, traditional handloom attire, and centuries-old folk arts.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center">
            <span className="text-xs text-[#185240] font-bold bg-[#FAF7F2] px-3.5 py-2 rounded-full border border-[#D5DDD8] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E25822]" />
              <span>Living Heritage</span>
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          <button
            id="culture-filter-all"
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'All'
                ? 'bg-[#185240] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Highlights</span>
          </button>

          <button
            id="culture-filter-food"
            onClick={() => setActiveCategory('Food')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'Food'
                ? 'bg-[#185240] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
            }`}
          >
            <Utensils className="w-3.5 h-3.5 text-[#FFB26B]" />
            <span>Regional Food ({cultureFoodData.dishes.length})</span>
          </button>

          <button
            id="culture-filter-festivals"
            onClick={() => setActiveCategory('Festivals')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'Festivals'
                ? 'bg-[#185240] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#FF9E68]" />
            <span>Festivals ({cultureFoodData.festivals.length})</span>
          </button>

          <button
            id="culture-filter-arts"
            onClick={() => setActiveCategory('Arts & Attire')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'Arts & Attire'
                ? 'bg-[#185240] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-[#FFB26B]" />
            <span>Arts & Traditional Attire</span>
          </button>

          <button
            id="culture-filter-traditions"
            onClick={() => setActiveCategory('Traditions')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'Traditions'
                ? 'bg-[#185240] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5 text-[#E25822]" />
            <span>Customs & Etiquette</span>
          </button>

          <button
            id="culture-filter-experiences"
            onClick={() => setActiveCategory('Experiences')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'Experiences'
                ? 'bg-[#E25822] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#485B50] hover:bg-[#EDE8E0] border border-[#E5DFD5]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD6A5]" />
            <span>Local Experiences ({cultureFoodData.experiences.length})</span>
          </button>
        </div>

        {/* ---------------- 1. FOOD & REGIONAL DISHES ---------------- */}
        {(activeCategory === 'All' || activeCategory === 'Food') && (
          <div className="space-y-6 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EDE8E0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#E25822]/10 text-[#E25822] flex items-center justify-center font-bold">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#13221B]">
                    Signature Regional Delicacies
                  </h3>
                  <p className="text-xs text-[#5C7065]">
                    {region.food.specialty}
                  </p>
                </div>
              </div>

              {/* Diet Sub-Filter (All, Veg, Non-Veg) */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto bg-[#FAF7F2] p-1 rounded-xl border border-[#E5DFD5]">
                <button
                  onClick={() => setFoodDietFilter('All')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    foodDietFilter === 'All'
                      ? 'bg-white text-[#13221B] shadow-sm'
                      : 'text-[#5C7065] hover:text-[#13221B]'
                  }`}
                >
                  All ({cultureFoodData.dishes.length})
                </button>
                <button
                  onClick={() => setFoodDietFilter('Veg')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    foodDietFilter === 'Veg'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-sm'
                      : 'text-[#5C7065] hover:text-emerald-700'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-sm border border-emerald-600 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  </span>
                  <span>Pure Veg ({vegCount})</span>
                </button>
                {nonVegCount > 0 && (
                  <button
                    onClick={() => setFoodDietFilter('NonVeg')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                      foodDietFilter === 'NonVeg'
                        ? 'bg-red-50 text-red-800 border border-red-300 shadow-sm'
                        : 'text-[#5C7065] hover:text-red-700'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-sm border border-red-600 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    </span>
                    <span>Non-Veg ({nonVegCount})</span>
                  </button>
                )}
              </div>
            </div>

            {/* Dishes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  onClick={() => setSelectedDish(dish)}
                  className="group bg-[#FAF7F2] rounded-2xl border border-[#E5DFD5] hover:border-[#185240]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Dish Imagery */}
                  <div className="relative h-44 w-full overflow-hidden bg-[#0B2B20]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      {/* Veg / Non-Veg Indicator Badge */}
                      <span
                        className={`px-2.5 py-1 rounded-md text-[11px] font-bold shadow-md flex items-center gap-1.5 backdrop-blur-md ${
                          dish.isVegetarian
                            ? 'bg-white/95 text-emerald-800 border border-emerald-300'
                            : 'bg-white/95 text-red-800 border border-red-300'
                        }`}
                      >
                        {/* Indian Standard Veg/Non-Veg Symbol */}
                        <span
                          className={`w-3.5 h-3.5 rounded-sm border-2 flex items-center justify-center ${
                            dish.isVegetarian ? 'border-emerald-600' : 'border-red-600'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              dish.isVegetarian ? 'bg-emerald-600' : 'bg-red-600'
                            }`}
                          />
                        </span>
                        <span>{dish.isVegetarian ? 'Vegetarian' : 'Non-Veg'}</span>
                      </span>

                      {/* Dish Type Badge */}
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-sm border border-white/20">
                        {dish.dishType}
                      </span>
                    </div>

                    {/* Bottom Taste Profile Overlay */}
                    {dish.tasteProfile && (
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/95 bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-sm truncate max-w-full">
                          <Flame className="w-3 h-3 text-[#FFB26B]" />
                          <span>{dish.tasteProfile}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Dish Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="font-serif-title text-base sm:text-lg font-bold text-[#13221B] group-hover:text-[#E25822] transition-colors leading-snug">
                        {dish.name}
                      </h4>
                      <p className="text-xs text-[#5C7065] mt-1.5 leading-relaxed line-clamp-2">
                        {dish.description}
                      </p>
                    </div>

                    {/* Serving Tradition & Recipe Insight */}
                    <div className="pt-3 border-t border-[#E5DFD5]/80 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[#7A8E82] truncate max-w-[200px]">
                        {dish.servingTradition || 'Local culinary specialty'}
                      </span>
                      <span className="text-[#185240] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 shrink-0">
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature Beverage & Dessert Highlight Strip */}
            {region.food.beverageOrDessert && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2] border border-[#E5DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E25822]/15 text-[#E25822] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A9C92] block">
                      Regional Sips & Sweets
                    </span>
                    <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                      {region.food.beverageOrDessert}
                    </h4>
                  </div>
                </div>

                <div className="text-xs text-[#5C7065] sm:text-right max-w-sm">
                  Handcrafted using native dairy, fresh spices, and slow cooking methods cherished across generations.
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---------------- 2. FESTIVALS OF THE REGION ---------------- */}
        {(activeCategory === 'All' || activeCategory === 'Festivals') && (
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between pb-3 border-b border-[#EDE8E0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#185240]/10 text-[#185240] flex items-center justify-center font-bold">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#13221B]">
                    Celebrated Festivals & Fairs
                  </h3>
                  <p className="text-xs text-[#5C7065]">
                    Times of joy, sacred rituals, and community pageantry in {region.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultureFoodData.festivals.map((fest) => (
                <div
                  key={fest.id}
                  className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] hover:border-[#185240]/50 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E25822] bg-[#E25822]/10 px-2.5 py-0.5 rounded-full">
                        <Calendar className="w-3 h-3" />
                        <span>{fest.timing}</span>
                      </span>
                    </div>

                    <h4 className="font-serif-title text-lg font-bold text-[#13221B]">
                      {fest.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5C7065] leading-relaxed">
                      {fest.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5DFD5] text-xs">
                    <span className="font-bold text-[#185240] block mb-0.5">
                      Key Highlight:
                    </span>
                    <span className="text-[#5C7065]">{fest.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- 3. TRADITIONAL ATTIRE & PERFORMING ARTS ---------------- */}
        {(activeCategory === 'All' || activeCategory === 'Arts & Attire') && (
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between pb-3 border-b border-[#EDE8E0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#B45309]/10 text-[#B45309] flex items-center justify-center font-bold">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#13221B]">
                    Traditional Clothing, Folk Dances & Handloom Weaves
                  </h3>
                  <p className="text-xs text-[#5C7065]">
                    The visual and artistic tapestry of {region.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Traditional Clothing Showcase Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-[#F3EFEA] border border-[#E5DFD5] space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#185240] text-white">
                  Traditional Attire (Veshbhusha)
                </span>
                <span className="text-xs text-[#7A8E82]">
                  Centuries-old dressing heritage & indigenous textiles
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Men's Traditional Wear */}
                <div className="p-5 rounded-xl bg-white border border-[#E5DFD5] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E25822]">
                    <span>Men&apos;s Traditional Attire</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#13221B] leading-relaxed">
                    {cultureFoodData.attire.mens}
                  </p>
                </div>

                {/* Women's Traditional Wear */}
                <div className="p-5 rounded-xl bg-white border border-[#E5DFD5] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#185240]">
                    <span>Women&apos;s Traditional Attire</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#13221B] leading-relaxed">
                    {cultureFoodData.attire.womens}
                  </p>
                </div>
              </div>

              {/* Handloom & Ornaments Footer */}
              <div className="pt-4 border-t border-[#E5DFD5] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5C7065]">
                <div>
                  <strong className="text-[#13221B] block mb-1">Famous Handlooms & Fabrics:</strong>
                  <span>{cultureFoodData.attire.textiles}</span>
                </div>
                {cultureFoodData.attire.accessories && (
                  <div>
                    <strong className="text-[#13221B] block mb-1">Traditional Ornaments & Details:</strong>
                    <span>{cultureFoodData.attire.accessories}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Performing Arts & GI Crafts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultureFoodData.artsAndCrafts.map((art) => (
                <div
                  key={art.id}
                  className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] hover:border-[#185240]/50 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#185240]/10 text-[#185240]">
                        {art.category}
                      </span>
                      {art.giTagOrOrigin && (
                        <span className="text-[10px] font-semibold text-[#8A9C92] truncate max-w-[150px]">
                          {art.giTagOrOrigin}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                      {art.name}
                    </h4>

                    <p className="text-xs text-[#5C7065] leading-relaxed">
                      {art.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E5DFD5]/70 text-[11px] text-[#185240] font-medium flex items-center gap-1">
                    <Music className="w-3 h-3 text-[#E25822]" />
                    <span>Living Cultural Legacy</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- 4. LOCAL CUSTOMS & ETIQUETTE ---------------- */}
        {(activeCategory === 'All' || activeCategory === 'Traditions') && (
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between pb-3 border-b border-[#EDE8E0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#E25822]/10 text-[#E25822] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#13221B]">
                    Local Customs, Etiquette & Reverence
                  </h3>
                  <p className="text-xs text-[#5C7065]">
                    Thoughtful practices to help you travel with respect, harmony, and gratitude
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cultureFoodData.customs.map((custom, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-[#185240]/10 text-[#185240] flex items-center justify-center font-bold text-xs">
                      0{idx + 1}
                    </div>

                    <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                      {custom.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5C7065] leading-relaxed">
                      {custom.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#E5DFD5] text-xs text-[#185240] flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#E25822] shrink-0 mt-0.5" />
                    <span>
                      <strong>Traveler Tip:</strong> {custom.etiquetteTip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- 5. LOCAL EXPERIENCES ---------------- */}
        {(activeCategory === 'All' || activeCategory === 'Experiences') && (
          <div className="space-y-6 pt-4 border-t border-[#EDE8E0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EDE8E0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#185240] text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4 text-[#FFB26B]" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#13221B]">
                    Curated Local Experiences
                  </h3>
                  <p className="text-xs text-[#5C7065]">
                    Immersive hands-on workshops, culinary trails, and village cultural encounters
                  </p>
                </div>
              </div>

              <span className="text-xs text-[#185240] font-semibold bg-[#FAF7F2] px-3 py-1.5 rounded-full border border-[#D5DDD8] self-start sm:self-auto">
                {savedExperienceIds.length > 0 ? `${savedExperienceIds.length} Saved in Session` : 'Authentic Encounters'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cultureFoodData.experiences.map((exp) => {
                const isSaved = savedExperienceIds.includes(exp.id);

                return (
                  <div
                    key={exp.id}
                    className="p-6 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#185240] hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2.5 py-0.5 rounded-full font-bold bg-[#FAF7F2] text-[#185240] border border-[#D5DDD8]">
                          {exp.category}
                        </span>
                        <span className="flex items-center gap-1 text-[#7A8E82] font-medium">
                          <Clock className="w-3 h-3 text-[#E25822]" />
                          <span>{exp.duration}</span>
                        </span>
                      </div>

                      <h4 className="font-serif-title text-base sm:text-lg font-bold text-[#13221B]">
                        {exp.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#5C7065] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-[#EDE8E0]">
                      <div className="text-xs text-[#185240] font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E25822] shrink-0" />
                        <span className="truncate">{exp.highlight}</span>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => toggleExperience(exp.id)}
                          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            isSaved
                              ? 'bg-[#185240] text-white'
                              : 'bg-[#FAF7F2] text-[#13221B] hover:bg-[#EDE8E0] border border-[#D5DDD8]'
                          }`}
                        >
                          {isSaved ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#FFB26B]" />
                              <span>Experience Saved</span>
                            </>
                          ) : (
                            <>
                              <span>Save Experience +</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => onPlanTrip(region)}
                          className="py-2 px-3 rounded-xl text-xs font-bold bg-[#E25822] hover:bg-[#C84614] text-white transition-colors cursor-pointer"
                        >
                          Plan
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Dish Quick Details Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#D5DDD8] animate-in zoom-in-95 duration-200">
            <div className="relative h-56 w-full overflow-hidden bg-black">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                      selectedDish.isVegetarian
                        ? 'bg-emerald-600 text-white'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {selectedDish.isVegetarian ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/20 backdrop-blur-sm">
                    {selectedDish.dishType}
                  </span>
                </div>
                <h3 className="font-serif-title text-2xl font-bold">
                  {selectedDish.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-[#5C7065] leading-relaxed">
                {selectedDish.description}
              </p>

              {selectedDish.tasteProfile && (
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DFD5] text-xs">
                  <strong className="text-[#13221B] block mb-1">Taste Profile:</strong>
                  <span className="text-[#5C7065]">{selectedDish.tasteProfile}</span>
                </div>
              )}

              {selectedDish.servingTradition && (
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DFD5] text-xs">
                  <strong className="text-[#13221B] block mb-1">Serving Tradition:</strong>
                  <span className="text-[#5C7065]">{selectedDish.servingTradition}</span>
                </div>
              )}

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedDish(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#5C7065] hover:text-[#13221B] cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedDish(null);
                    onPlanTrip(region);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#E25822] hover:bg-[#C84614] shadow-md transition-colors cursor-pointer"
                >
                  Add Culinary Stop to Itinerary →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
