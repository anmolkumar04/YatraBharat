import React, { useState, useEffect, useMemo } from 'react';
import { POPULAR_DESTINATIONS } from '../data/destinations';
import { Destination, TravelStyle, SavedItinerary } from '../types';
import {
  X,
  Calendar,
  MapPin,
  Sparkles,
  Check,
  IndianRupee,
  Clock,
  Users,
  ShieldCheck,
  Copy,
  Plus,
  Trash2,
  ExternalLink,
  CloudSun,
  Navigation,
  Hotel,
  Utensils,
  Train,
  Ticket,
  BookmarkCheck,
  Bookmark,
  Info,
  Droplets,
  Wind,
  Thermometer,
  RotateCcw
} from 'lucide-react';
import {
  getDestinationWeather,
  getGoogleMapsPlaceUrl,
  getGoogleMapsRouteUrl,
  getRouteTransitLegs,
  calculateTripBudget,
  generateDayWiseItinerary,
  getSavedItineraries,
  saveItineraryToStorage,
  deleteSavedItineraryFromStorage,
  SUGGESTED_CIRCUITS
} from '../data/plannerData';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDestination?: Destination | null;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  preselectedDestination,
}) => {
  // Navigation Tabs: 'itinerary' | 'weather-route' | 'budget' | 'saved'
  const [activeTab, setActiveTab] = useState<'itinerary' | 'weather-route' | 'budget' | 'saved'>('itinerary');

  // Selected Destinations list (supports multi-destination circuits)
  const [selectedDestinations, setSelectedDestinations] = useState<Destination[]>(() => {
    if (preselectedDestination) return [preselectedDestination];
    return [POPULAR_DESTINATIONS[0]]; // Varanasi
  });

  // When preselectedDestination prop updates
  useEffect(() => {
    if (preselectedDestination) {
      setSelectedDestinations([preselectedDestination]);
    }
  }, [preselectedDestination]);

  // Destination Search / Add State
  const [isAddDestOpen, setIsAddDestOpen] = useState(false);
  const [searchAddQuery, setSearchAddQuery] = useState('');

  // Dates state (default starting next week)
  const defaultStartDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  }, []);

  const [startDate, setStartDate] = useState<string>(defaultStartDate);
  const [durationDays, setDurationDays] = useState<number>(4);

  // Auto calculate end date
  const endDate = useMemo(() => {
    const start = new Date(startDate || defaultStartDate);
    start.setDate(start.getDate() + (durationDays - 1));
    return start.toISOString().split('T')[0];
  }, [startDate, durationDays, defaultStartDate]);

  // Travelers count
  const [travelersCount, setTravelersCount] = useState<number>(2);

  // Travel style: 'Budget' | 'Mid-range' | 'Luxury'
  const [travelStyle, setTravelStyle] = useState<TravelStyle>('Mid-range');

  // Feedback notifications
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [notice, setNotice] = useState<{ message: string; type: 'success' | 'warning' | 'info' } | null>(null);

  const showNotice = (message: string, type: 'success' | 'warning' | 'info' = 'info') => {
    setNotice({ message, type });
    setTimeout(() => {
      setNotice((curr) => (curr?.message === message ? null : curr));
    }, 3500);
  };

  // Saved itineraries list
  const [savedItineraries, setSavedItineraries] = useState<SavedItinerary[]>(() => getSavedItineraries());

  // Available destinations to add (excluding already selected)
  const availableToAdd = useMemo(() => {
    const selectedIds = new Set(selectedDestinations.map((d) => d.id));
    return POPULAR_DESTINATIONS.filter((d) => !selectedIds.has(d.id));
  }, [selectedDestinations]);

  const filteredAvailableToAdd = useMemo(() => {
    if (!searchAddQuery.trim()) return availableToAdd;
    const q = searchAddQuery.toLowerCase();
    return availableToAdd.filter(
      (d) => d.name.toLowerCase().includes(q) || d.state.toLowerCase().includes(q)
    );
  }, [availableToAdd, searchAddQuery]);

  // Calculated budget breakdown
  const budget = useMemo(() => {
    return calculateTripBudget(
      durationDays,
      travelersCount,
      travelStyle,
      selectedDestinations.length
    );
  }, [durationDays, travelersCount, travelStyle, selectedDestinations.length]);

  // Dynamic Day-wise Itinerary
  const itinerary = useMemo(() => {
    return generateDayWiseItinerary(selectedDestinations, durationDays);
  }, [selectedDestinations, durationDays]);

  // Weather data for all selected destinations
  const weatherList = useMemo(() => {
    return selectedDestinations.map((d) => getDestinationWeather(d));
  }, [selectedDestinations]);

  // Route transit legs between destinations
  const transitLegs = useMemo(() => {
    return getRouteTransitLegs(selectedDestinations);
  }, [selectedDestinations]);

  // Handlers for Add/Remove Destinations
  const handleAddDestination = (dest: Destination) => {
    if (selectedDestinations.length >= 5) {
      showNotice('You can select up to 5 destinations in a single circuit.', 'warning');
      return;
    }
    setSelectedDestinations((prev) => [...prev, dest]);
    setIsAddDestOpen(false);
    setSearchAddQuery('');
    showNotice(`Added ${dest.name} to circuit.`, 'success');
  };

  const handleRemoveDestination = (destId: string) => {
    if (selectedDestinations.length <= 1) {
      showNotice('At least one destination must be selected for your trip.', 'warning');
      return;
    }
    const removedDest = selectedDestinations.find((d) => d.id === destId);
    setSelectedDestinations((prev) => prev.filter((d) => d.id !== destId));
    if (removedDest) {
      showNotice(`Removed ${removedDest.name} from circuit.`, 'info');
    }
  };

  // Load a suggested circuit
  const handleLoadCircuit = (circuitDestIds: string[], days: number) => {
    const matched = circuitDestIds
      .map((id) => POPULAR_DESTINATIONS.find((d) => d.id === id))
      .filter((d): d is Destination => Boolean(d));

    if (matched.length > 0) {
      setSelectedDestinations(matched);
      setDurationDays(days);
    }
  };

  // Handle End Date change manually
  const handleEndDateChange = (newEndDateStr: string) => {
    if (!newEndDateStr || !startDate) return;
    const start = new Date(startDate);
    const end = new Date(newEndDateStr);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    if (diffDays >= 1 && diffDays <= 21) {
      setDurationDays(diffDays);
    }
  };

  // Copy Full Itinerary to Clipboard
  const handleCopyPlan = () => {
    const destNames = selectedDestinations.map((d) => `${d.name} (${d.state})`).join(' -> ');
    const mapsLink = getGoogleMapsRouteUrl(selectedDestinations);

    const text = `========================================================
🇮🇳 YATRABHARAT — SMART TRIP PLANNER
========================================================
Trip: ${destNames}
Dates: ${startDate} to ${endDate} (${durationDays} Days)
Travelers: ${travelersCount} | Style: ${travelStyle}
Total Estimated Cost: ₹${budget.totalCost.toLocaleString('en-IN')} INR
Per-Person Cost: ₹${budget.perPersonCost.toLocaleString('en-IN')} INR

--------------------------------------------------------
💰 BUDGET BREAKDOWN (INR)
--------------------------------------------------------
• Accommodation: ₹${budget.accommodation.toLocaleString('en-IN')}
• Food & Dining: ₹${budget.food.toLocaleString('en-IN')}
• Local Sightseeing & Transit: ₹${budget.localTravel.toLocaleString('en-IN')}
• Inter-city Travel: ₹${budget.intercityTransport.toLocaleString('en-IN')}
• Monument & Attraction Tickets: ₹${budget.attractionTickets.toLocaleString('en-IN')}

--------------------------------------------------------
🌤️ DESTINATION CLIMATE & RECOMMENDED SEASON
--------------------------------------------------------
${weatherList
  .map(
    (w) =>
      `• ${w.destinationName}: ${w.temperatureDay}°C / ${w.temperatureNight}°C | ${w.condition} | Best Season: ${w.recommendedSeason}`
  )
  .join('\n')}

--------------------------------------------------------
🗺️ GOOGLE MAPS ROUTE DIRECTIONS
--------------------------------------------------------
${mapsLink}

--------------------------------------------------------
📅 DAY-BY-DAY ITINERARY
--------------------------------------------------------
${itinerary
  .map(
    (d) => `Day ${d.dayNumber} [${d.destinationName}, ${d.state}] — ${d.theme}:
  - Morning (${d.morning.timing}): ${d.morning.activity}
  - Afternoon (${d.afternoon.timing}): ${d.afternoon.activity} (${d.afternoon.foodTip})
  - Evening (${d.evening.timing}): ${d.evening.activity}
  - Est. Tickets: ${d.ticketEstimate} | Tip: ${d.practicalTip}
`
  )
  .join('\n')}
========================================================
Helplines: 24×7 Tourist Helpline 1363 | National Emergency 112
Generated via YatraBharat (Incredible India)`;

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  // Save Itinerary to Storage
  const handleSaveItinerary = () => {
    const title =
      selectedDestinations.length === 1
        ? `${selectedDestinations[0].name} Journey`
        : `${selectedDestinations[0].name} & ${selectedDestinations[selectedDestinations.length - 1].name} Circuit`;

    saveItineraryToStorage({
      title,
      destinations: selectedDestinations,
      startDate,
      endDate,
      durationDays,
      travelersCount,
      travelStyle,
      totalCostINR: budget.totalCost,
      perPersonCostINR: budget.perPersonCost
    });

    setSavedItineraries(getSavedItineraries());
    showNotice('Trip itinerary saved securely to your browser!', 'success');
  };

  // Delete Saved Itinerary
  const handleDeleteSaved = (id: string) => {
    const updated = deleteSavedItineraryFromStorage(id);
    setSavedItineraries(updated);
    showNotice('Saved trip removed.', 'info');
  };

  // Load Saved Itinerary back into planner
  const handleLoadSavedItinerary = (saved: SavedItinerary) => {
    setSelectedDestinations(saved.destinations);
    setStartDate(saved.startDate);
    setDurationDays(saved.durationDays);
    setTravelersCount(saved.travelersCount);
    setTravelStyle(saved.travelStyle);
    setActiveTab('itinerary');
    showNotice(`Loaded "${saved.title}" into itinerary planner!`, 'success');
  };

  if (!isOpen) return null;

  return (
    <div
      id="trip-planner-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-[#D5DDD8] my-4 sm:my-8 flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= MODAL HEADER ================= */}
        <div className="bg-[#0B2B20] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#185240] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E25822] flex items-center justify-center text-white shadow-sm">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#A7C2B5] font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB26B]" />
                <span>YatraBharat · Weather, Route & Budget Planner</span>
              </div>
              <h2 className="font-serif-title text-xl sm:text-2xl md:text-3xl font-bold text-white">
                India Journey Planner
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= CONTROLS BAR: DESTINATIONS, DATES, TRAVELERS & STYLE ================= */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#D5DDD8] space-y-4 shrink-0 shadow-xs">
          {/* Row 1: Selected Destinations Pill Bar + Quick Suggested Circuits */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-[#13221B] uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Destinations in Circuit ({selectedDestinations.length}/5)</span>
              </label>

              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-[#7A8E82] hidden sm:inline">Popular Circuits:</span>
                {SUGGESTED_CIRCUITS.slice(0, 2).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleLoadCircuit(c.destinationIds, c.recommendedDays)}
                    className="text-[11px] font-bold text-[#185240] hover:text-[#E25822] bg-[#FAF7F2] hover:bg-[#F0EBE1] px-2.5 py-1 rounded-lg border border-[#D5DDD8] transition-colors cursor-pointer"
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Destinations list */}
            <div className="flex flex-wrap items-center gap-2">
              {selectedDestinations.map((dest, idx) => (
                <div
                  key={dest.id}
                  className="flex items-center gap-2 bg-[#FAF7F2] border border-[#185240]/40 rounded-xl px-3 py-1.5 shadow-xs"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-6 h-6 rounded-md object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-xs">
                    <strong className="text-[#13221B]">{dest.name}</strong>
                    <span className="text-[#7A8E82] text-[10px] ml-1">({dest.state})</span>
                  </div>

                  {selectedDestinations.length > 1 && (
                    <button
                      onClick={() => handleRemoveDestination(dest.id)}
                      className="text-[#7A8E82] hover:text-red-600 transition-colors p-0.5 cursor-pointer"
                      title="Remove from trip"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}

              {/* Add Destination Button & Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsAddDestOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-dashed border-[#185240] text-[#185240] hover:bg-[#FAF7F2] text-xs font-bold transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Stop</span>
                </button>

                {isAddDestOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-[#D5DDD8] p-3 z-30 space-y-2 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center justify-between pb-1 border-b border-[#EDE8E0]">
                      <span className="text-xs font-bold text-[#13221B]">Select Indian Destination</span>
                      <button
                        onClick={() => setIsAddDestOpen(false)}
                        className="text-[#7A8E82] hover:text-[#13221B] p-0.5 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={searchAddQuery}
                      onChange={(e) => setSearchAddQuery(e.target.value)}
                      placeholder="Search destination or state..."
                      className="w-full px-3 py-1.5 text-xs bg-[#FAF7F2] border border-[#D5DDD8] rounded-lg outline-none focus:border-[#185240]"
                      autoFocus
                    />

                    <div className="max-h-52 overflow-y-auto space-y-1">
                      {filteredAvailableToAdd.map((d) => (
                        <div
                          key={d.id}
                          onClick={() => handleAddDestination(d)}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-[#FAF7F2] cursor-pointer text-xs transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={d.image}
                              alt={d.name}
                              className="w-8 h-8 rounded-lg object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <div className="font-bold text-[#13221B]">{d.name}</div>
                              <div className="text-[10px] text-[#7A8E82]">{d.state}</div>
                            </div>
                          </div>
                          <span className="text-[11px] font-bold text-[#185240] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            + Add
                          </span>
                        </div>
                      ))}
                      {filteredAvailableToAdd.length === 0 && (
                        <div className="p-3 text-center text-xs text-[#7A8E82]">
                          No remaining destinations match
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Row 2: Travel Dates, Duration, Travelers & Style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Travel Dates */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#13221B] uppercase tracking-wider block">
                Travel Dates ({durationDays} Days)
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <div>
                  <span className="text-[10px] text-[#7A8E82] block">Start Date</span>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#FAF7F2] border border-[#D5DDD8] rounded-xl text-xs font-semibold text-[#13221B] focus:border-[#185240] outline-none"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-[#7A8E82] block">End Date</span>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => handleEndDateChange(e.target.value)}
                    min={startDate}
                    className="w-full px-2.5 py-1.5 bg-[#FAF7F2] border border-[#D5DDD8] rounded-xl text-xs font-semibold text-[#13221B] focus:border-[#185240] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Quick Duration Preset */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#13221B] uppercase tracking-wider block">
                Duration Presets
              </label>
              <div className="grid grid-cols-4 gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#D5DDD8]">
                {[3, 5, 7, 10].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDurationDays(d)}
                    className={`py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      durationDays === d
                        ? 'bg-[#185240] text-white shadow-xs'
                        : 'text-[#5C7065] hover:bg-white'
                    }`}
                  >
                    {d}D
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-[#7A8E82] block truncate">
                {selectedDestinations.length > 1
                  ? `~${(durationDays / selectedDestinations.length).toFixed(1)} days per city`
                  : 'Full stay in single hub'}
              </span>
            </div>

            {/* Number of Travelers */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#13221B] uppercase tracking-wider block">
                Travelers Count
              </label>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center bg-[#FAF7F2] border border-[#D5DDD8] rounded-xl p-1 w-full justify-between">
                  <button
                    type="button"
                    onClick={() => setTravelersCount((prev) => Math.max(1, prev - 1))}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-[#EDE8E0] text-xs font-bold text-[#13221B] flex items-center justify-center cursor-pointer border border-[#D5DDD8]"
                  >
                    -
                  </button>
                  <div className="text-xs font-bold text-[#13221B] flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#185240]" />
                    <span>
                      {travelersCount} {travelersCount === 1 ? 'Traveler' : 'Travelers'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setTravelersCount((prev) => Math.min(20, prev + 1))}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-[#EDE8E0] text-xs font-bold text-[#13221B] flex items-center justify-center cursor-pointer border border-[#D5DDD8]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-[#7A8E82]">
                {[1, 2, 4].map((c) => (
                  <button
                    key={c}
                    onClick={() => setTravelersCount(c)}
                    className="underline hover:text-[#185240] cursor-pointer"
                  >
                    {c === 1 ? 'Solo' : c === 2 ? 'Couple' : 'Family (4)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Style: Budget, Mid-range, Luxury */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#13221B] uppercase tracking-wider block">
                Travel Style
              </label>
              <div className="grid grid-cols-3 gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#D5DDD8]">
                {(['Budget', 'Mid-range', 'Luxury'] as const).map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setTravelStyle(style)}
                    className={`py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      travelStyle === style
                        ? 'bg-[#E25822] text-white shadow-xs'
                        : 'text-[#5C7065] hover:bg-white'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-[#7A8E82] block truncate">
                {travelStyle === 'Budget'
                  ? 'Hostels & 3AC/Express'
                  : travelStyle === 'Mid-range'
                  ? '3★ Boutique & 2AC/Cabs'
                  : '5★ Palaces & Flights'}
              </span>
            </div>
          </div>

          {/* Quick Metrics Bar: Total Cost, Per Person, Google Maps Directions & Action Links */}
          <div className="p-3 sm:p-4 rounded-2xl bg-[#FAF7F2] border border-[#D5DDD8] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#7A8E82] block">
                  Total Estimated Budget
                </span>
                <div className="text-lg sm:text-xl font-black text-[#185240] flex items-center">
                  <span>₹{budget.totalCost.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-medium text-[#7A8E82] ml-1">INR</span>
                </div>
              </div>

              <div className="h-7 w-px bg-[#D5DDD8] hidden sm:block" />

              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#7A8E82] block">
                  Cost Per Person
                </span>
                <div className="text-base sm:text-lg font-bold text-[#E25822] flex items-center">
                  <span>₹{budget.perPersonCost.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-medium text-[#7A8E82] ml-1">/ person</span>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-2">
              <a
                href={getGoogleMapsRouteUrl(selectedDestinations)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] text-xs font-bold text-[#185240] flex items-center gap-1.5 shadow-xs transition-colors"
                title="Open route directions in Google Maps"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Maps Route</span>
                <ExternalLink className="w-3 h-3 text-[#7A8E82]" />
              </a>

              <button
                type="button"
                onClick={handleSaveItinerary}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] text-xs font-bold text-[#185240] flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5 text-[#185240]" />
                <span>Save</span>
              </button>

              <button
                type="button"
                onClick={handleCopyPlan}
                className="px-3 py-1.5 rounded-xl bg-[#185240] hover:bg-[#0B2B20] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? 'Copied!' : 'Copy Plan'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= TOAST NOTIFICATION BANNER ================= */}
        {notice && (
          <div
            className={`mx-4 sm:mx-6 mt-3 p-3 rounded-xl border text-xs font-semibold flex items-center justify-between shadow-xs transition-all ${
              notice.type === 'success'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : notice.type === 'warning'
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : 'bg-blue-50 border-blue-300 text-blue-900'
            }`}
          >
            <span className="flex items-center gap-2">
              {notice.type === 'success' && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
              {notice.type === 'warning' && <Info className="w-4 h-4 text-amber-600 shrink-0" />}
              {notice.type === 'info' && <Info className="w-4 h-4 text-blue-600 shrink-0" />}
              <span>{notice.message}</span>
            </span>
            <button
              onClick={() => setNotice(null)}
              className="p-1 rounded-md hover:bg-black/5 cursor-pointer ml-2"
              aria-label="Dismiss notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* ================= NAVIGATION TABS ================= */}
        <div className="px-6 pt-3 bg-[#FAF7F2] border-b border-[#D5DDD8] flex items-center justify-between overflow-x-auto scrollbar-none shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'itinerary'
                  ? 'border-[#185240] text-[#185240]'
                  : 'border-transparent text-[#7A8E82] hover:text-[#13221B]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day-Wise Itinerary ({itinerary.length} Days)</span>
            </button>

            <button
              onClick={() => setActiveTab('weather-route')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'weather-route'
                  ? 'border-[#185240] text-[#185240]'
                  : 'border-transparent text-[#7A8E82] hover:text-[#13221B]'
              }`}
            >
              <CloudSun className="w-3.5 h-3.5" />
              <span>Weather & Route Directions</span>
            </button>

            <button
              onClick={() => setActiveTab('budget')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'budget'
                  ? 'border-[#185240] text-[#185240]'
                  : 'border-transparent text-[#7A8E82] hover:text-[#13221B]'
              }`}
            >
              <IndianRupee className="w-3.5 h-3.5" />
              <span>Budget Breakdown (₹{budget.totalCost.toLocaleString('en-IN')})</span>
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'saved'
                  ? 'border-[#185240] text-[#185240]'
                  : 'border-transparent text-[#7A8E82] hover:text-[#13221B]'
              }`}
            >
              <BookmarkCheck className="w-3.5 h-3.5" />
              <span>Saved Trips ({savedItineraries.length})</span>
            </button>
          </div>
        </div>

        {/* ================= TAB CONTENTS (SCROLLABLE) ================= */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* ---------------- TAB 1: DAY-WISE ITINERARY ---------------- */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#EDE8E0]">
                <div>
                  <h3 className="font-serif-title text-lg font-bold text-[#13221B] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#E25822]" />
                    <span>
                      Personalized Itinerary for{' '}
                      {selectedDestinations.map((d) => d.name).join(' & ')}
                    </span>
                  </h3>
                  <p className="text-xs text-[#5C7065]">
                    Paced across {durationDays} days for {travelersCount} travelers in{' '}
                    <strong>{travelStyle}</strong> style.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#7A8E82]">Need updates?</span>
                  <button
                    onClick={handleCopyPlan}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-[#D5DDD8] hover:bg-[#FAF7F2] text-[#185240] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied' : 'Copy Schedule'}</span>
                  </button>
                </div>
              </div>

              {/* Day cards */}
              <div className="space-y-4">
                {itinerary.map((day) => (
                  <div
                    key={day.dayNumber}
                    className="bg-white rounded-2xl border border-[#D5DDD8] p-4 sm:p-5 space-y-3 shadow-xs hover:border-[#185240] transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F4EFE6] pb-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full bg-[#185240] text-white text-xs font-bold">
                          Day {day.dayNumber}
                        </span>
                        <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                          {day.theme}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#FAF7F2] text-[#185240] border border-[#D5DDD8]">
                          {day.destinationName} ({day.state})
                        </span>
                        <a
                          href={getGoogleMapsPlaceUrl(day.destinationName, day.state)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7A8E82] hover:text-[#E25822] p-1 cursor-pointer"
                          title="View on Google Maps"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Morning, Afternoon, Evening Blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {/* Morning */}
                      <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EDE8E0] space-y-1.5">
                        <div className="flex items-center justify-between font-bold text-[#185240]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#185240]" />
                            Morning
                          </span>
                          <span className="text-[10px] text-[#7A8E82]">{day.morning.timing}</span>
                        </div>
                        <p className="text-[#405247] leading-relaxed">{day.morning.activity}</p>
                        <div className="text-[10px] text-[#185240] font-semibold pt-1 border-t border-[#E5DFD5]">
                          ✨ {day.morning.highlight}
                        </div>
                      </div>

                      {/* Afternoon */}
                      <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EDE8E0] space-y-1.5">
                        <div className="flex items-center justify-between font-bold text-[#E25822]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#E25822]" />
                            Afternoon
                          </span>
                          <span className="text-[10px] text-[#7A8E82]">{day.afternoon.timing}</span>
                        </div>
                        <p className="text-[#405247] leading-relaxed">{day.afternoon.activity}</p>
                        <div className="text-[10px] text-[#E25822] font-semibold pt-1 border-t border-[#E5DFD5] flex items-center gap-1">
                          <Utensils className="w-3 h-3" />
                          <span>{day.afternoon.foodTip}</span>
                        </div>
                      </div>

                      {/* Evening */}
                      <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EDE8E0] space-y-1.5">
                        <div className="flex items-center justify-between font-bold text-[#13221B]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#13221B]" />
                            Evening
                          </span>
                          <span className="text-[10px] text-[#7A8E82]">{day.evening.timing}</span>
                        </div>
                        <p className="text-[#405247] leading-relaxed">{day.evening.activity}</p>
                        <div className="text-[10px] text-[#13221B] font-semibold pt-1 border-t border-[#E5DFD5]">
                          🌆 {day.evening.scenicTip}
                        </div>
                      </div>
                    </div>

                    {/* Day practical footer */}
                    <div className="pt-2 border-t border-[#EDE8E0] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#7A8E82]">
                      <span className="flex items-center gap-1 font-semibold text-[#185240]">
                        <Ticket className="w-3 h-3 text-[#E25822]" />
                        <span>Attraction Tickets: {day.ticketEstimate}</span>
                      </span>
                      <span>💡 <strong>Tip:</strong> {day.practicalTip}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---------------- TAB 2: WEATHER & ROUTE DIRECTIONS ---------------- */}
          {activeTab === 'weather-route' && (
            <div className="space-y-6">
              {/* Weather section header with prominent demo data banner */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CloudSun className="w-5 h-5 text-[#E25822]" />
                    <h3 className="font-serif-title text-lg font-bold text-[#13221B]">
                      Destination Weather & Recommended Visiting Seasons
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    Demo Weather Data
                  </span>
                </div>
                <p className="text-xs text-[#5C7065]">
                  Seasonal climate profiles and packing guidance based on historical meteorological trends across selected destinations.
                </p>
              </div>

              {/* Weather Cards Grid for Selected Destinations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {weatherList.map((weather) => (
                  <div
                    key={weather.destinationId}
                    className="p-5 rounded-2xl bg-white border border-[#D5DDD8] hover:border-[#185240] transition-all space-y-4 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A8E82]">
                          Regional Climate
                        </span>
                        <h4 className="font-serif-title text-lg font-bold text-[#13221B]">
                          {weather.destinationName}
                        </h4>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-[#185240] flex items-center justify-end gap-1">
                          <Thermometer className="w-5 h-5 text-[#E25822]" />
                          <span>{weather.temperatureDay}°C</span>
                        </div>
                        <span className="text-[11px] text-[#7A8E82]">
                          Night low: {weather.temperatureNight}°C
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EDE8E0] space-y-2 text-xs">
                      <div className="flex items-center justify-between font-semibold text-[#185240]">
                        <span>{weather.condition}</span>
                        <span className="text-[11px] text-[#5C7065]">{weather.airQualityIndex}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5C7065] pt-1 border-t border-[#E5DFD5]">
                        <span className="flex items-center gap-1">
                          <Droplets className="w-3 h-3 text-blue-500" />
                          <span>Humidity: {weather.humidity}%</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Wind className="w-3 h-3 text-teal-600" />
                          <span>Rain Risk: {weather.precipitationChance}%</span>
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="text-[#185240] font-bold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#E25822]" />
                        <span>Recommended Season: {weather.recommendedSeason}</span>
                      </div>
                      <p className="text-[#5C7065] text-[11px] leading-relaxed">
                        {weather.seasonSummary}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-[11px] text-emerald-950">
                      <strong>Packing Advisory:</strong> {weather.packingAdvice}
                    </div>
                  </div>
                ))}
              </div>

              {/* ---------------- INTERACTIVE ROUTE & GOOGLE MAPS DIRECTIONS ---------------- */}
              <div className="pt-4 border-t border-[#D5DDD8] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-[#185240]" />
                    <h3 className="font-serif-title text-lg font-bold text-[#13221B]">
                      Route Circuit & Google Maps Navigation
                    </h3>
                  </div>

                  <a
                    href={getGoogleMapsRouteUrl(selectedDestinations)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-auto px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#185240] hover:bg-[#0B2B20] transition-colors shadow-xs flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFB26B]" />
                    <span>Open Complete Route in Google Maps</span>
                  </a>
                </div>

                {/* Circuit Route Visualization */}
                <div className="p-5 rounded-2xl bg-white border border-[#D5DDD8] space-y-4 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#185240]">
                    <span className="w-2 h-2 rounded-full bg-[#E25822]" />
                    <span>
                      Proposed Travel Waypoints ({selectedDestinations.length} Stops)
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 overflow-x-auto pb-2">
                    {selectedDestinations.map((d, index) => (
                      <React.Fragment key={d.id}>
                        <div className="flex items-center gap-2 bg-[#FAF7F2] p-2.5 rounded-xl border border-[#D5DDD8] shrink-0">
                          <span className="w-5 h-5 rounded-full bg-[#185240] text-white text-[10px] font-bold flex items-center justify-center">
                            {index + 1}
                          </span>
                          <div className="text-xs">
                            <strong className="text-[#13221B]">{d.name}</strong>
                            <span className="text-[10px] text-[#7A8E82] block">{d.state}</span>
                          </div>
                          <a
                            href={getGoogleMapsPlaceUrl(d.name, d.state)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-[#7A8E82] hover:text-[#E25822] cursor-pointer"
                            title={`Open ${d.name} on Google Maps`}
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                        {index < selectedDestinations.length - 1 && (
                          <div className="text-[#7A8E82] hidden sm:block">
                            →
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Inter-city Transit legs */}
                  {transitLegs.length > 0 ? (
                    <div className="space-y-2 pt-3 border-t border-[#EDE8E0]">
                      <h5 className="text-xs font-bold text-[#13221B] uppercase tracking-wider">
                        Inter-City Transit Legs
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {transitLegs.map((leg, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EDE8E0] space-y-1.5 text-xs"
                          >
                            <div className="flex items-center justify-between font-bold text-[#185240]">
                              <span>
                                {leg.from} ➔ {leg.to}
                              </span>
                              <span className="text-[11px] text-[#E25822] font-semibold">
                                {leg.durationEst} (~{leg.approxDistanceKm} km)
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-[#13221B] font-medium">
                              <Train className="w-3.5 h-3.5 text-[#185240]" />
                              <span>Recommended: {leg.recommendedMode}</span>
                            </div>
                            <p className="text-[11px] text-[#5C7065] leading-snug">
                              {leg.routeHighlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-[#FAF7F2] text-xs text-[#5C7065] flex items-center gap-2">
                      <Info className="w-4 h-4 text-[#185240] shrink-0" />
                      <span>
                        Single destination trip. You can click <strong>"+ Add Stop"</strong> above to plan a multi-city circuit (e.g. Jaipur + Udaipur).
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ---------------- TAB 3: BUDGET BREAKDOWN ---------------- */}
          {activeTab === 'budget' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#EDE8E0]">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif-title text-lg font-bold text-[#13221B]">
                      Comprehensive Budget Calculation
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      Estimated Budget (Demo Rates)
                    </span>
                  </div>
                  <p className="text-xs text-[#5C7065] mt-0.5">
                    Estimated costs for {travelersCount} travelers over {durationDays} days in{' '}
                    <strong>{travelStyle}</strong> style.
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#7A8E82] block uppercase font-bold">
                    Per-Person Average
                  </span>
                  <span className="text-lg font-black text-[#E25822]">
                    ₹{budget.perPersonCost.toLocaleString('en-IN')} INR
                  </span>
                </div>
              </div>

              {/* Budget Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. Accommodation */}
                <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#13221B] flex items-center gap-1.5">
                      <Hotel className="w-4 h-4 text-[#185240]" />
                      Accommodation
                    </span>
                    <span className="text-xs font-bold text-[#185240]">
                      ₹{budget.accommodation.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C7065] leading-relaxed">
                    {Math.max(1, durationDays - 1)} Nights @ ~₹{budget.accommodationPerNight.toLocaleString('en-IN')} / night ({Math.ceil(travelersCount / 2)} rooms)
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FAF7F2] text-[#185240]">
                    {travelStyle === 'Budget' ? 'Hostels & Dharamshalas' : travelStyle === 'Mid-range' ? '3★ Heritage Boutique' : '5★ Luxury Palace / Resort'}
                  </span>
                </div>

                {/* 2. Food & Dining */}
                <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#13221B] flex items-center gap-1.5">
                      <Utensils className="w-4 h-4 text-[#E25822]" />
                      Food & Dining
                    </span>
                    <span className="text-xs font-bold text-[#E25822]">
                      ₹{budget.food.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C7065] leading-relaxed">
                    {durationDays} Days @ ~₹{budget.foodPerDay.toLocaleString('en-IN')} / person / day
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FAF7F2] text-[#E25822]">
                    {travelStyle === 'Budget' ? 'Local Dhabas & Thalis' : travelStyle === 'Mid-range' ? 'Specialty Dining & Cafes' : 'Royal Banquets & Fine Dining'}
                  </span>
                </div>

                {/* 3. Local Travel */}
                <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#13221B] flex items-center gap-1.5">
                      <Navigation className="w-4 h-4 text-[#185240]" />
                      Local Sightseeing
                    </span>
                    <span className="text-xs font-bold text-[#185240]">
                      ₹{budget.localTravel.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C7065] leading-relaxed">
                    {durationDays} Days @ ~₹{budget.localTravelPerDay.toLocaleString('en-IN')} / person / day
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FAF7F2] text-[#185240]">
                    {travelStyle === 'Budget' ? 'E-rickshaws & Metro' : travelStyle === 'Mid-range' ? 'Dedicated App Cabs' : 'Chauffeur AC Sedan/SUV'}
                  </span>
                </div>

                {/* 4. Inter-city Transport */}
                <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#13221B] flex items-center gap-1.5">
                      <Train className="w-4 h-4 text-[#185240]" />
                      Inter-City Transit
                    </span>
                    <span className="text-xs font-bold text-[#185240]">
                      ₹{budget.intercityTransport.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C7065] leading-relaxed">
                    {selectedDestinations.length} Hubs Transit for {travelersCount} travelers
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FAF7F2] text-[#185240]">
                    {travelStyle === 'Budget' ? 'Sleeper / 3AC / State Bus' : travelStyle === 'Mid-range' ? '2AC / Vande Bharat Express' : 'Domestic Flights / Chauffeur'}
                  </span>
                </div>

                {/* 5. Attraction Tickets */}
                <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#13221B] flex items-center gap-1.5">
                      <Ticket className="w-4 h-4 text-[#E25822]" />
                      Monuments & Tickets
                    </span>
                    <span className="text-xs font-bold text-[#E25822]">
                      ₹{budget.attractionTickets.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C7065] leading-relaxed">
                    {durationDays} Days @ ~₹{budget.ticketsPerDay.toLocaleString('en-IN')} / person / day
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FAF7F2] text-[#E25822]">
                    {travelStyle === 'Budget' ? 'ASI Standard Monuments' : travelStyle === 'Mid-range' ? 'Composite Passes & Boat Rides' : 'VIP Darshan & Private Guides'}
                  </span>
                </div>

                {/* Total Summary Card */}
                <div className="p-4 rounded-2xl bg-[#0B2B20] text-white space-y-2 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#A7C2B5] uppercase tracking-wider block">
                      Total Estimated Outlay
                    </span>
                    <div className="text-2xl font-black text-white mt-1">
                      ₹{budget.totalCost.toLocaleString('en-IN')}
                      <span className="text-xs font-normal text-[#A7C2B5] ml-1">INR</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#185240] text-[11px] text-[#A7C2B5] flex items-center justify-between">
                    <span>{travelersCount} Travelers · {durationDays} Days</span>
                    <strong className="text-[#FFB26B]">₹{budget.perPersonCost.toLocaleString('en-IN')}/p</strong>
                  </div>
                </div>
              </div>

              {/* Practical Money-Saving Tips */}
              <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#185240]">
                  <ShieldCheck className="w-4 h-4 text-[#E25822]" />
                  <span>YatraBharat Budget Optimization Advice</span>
                </div>
                <ul className="text-xs text-[#5C7065] space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#185240] mt-1.5 shrink-0" />
                    <span><strong>ASI Online Ticketing:</strong> Purchasing ASI tickets via official portal (asi.payumoney.com) saves ₹5 to ₹10 per ticket compared to physical counter rates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#185240] mt-1.5 shrink-0" />
                    <span><strong>Advance Rail Bookings:</strong> Book Vande Bharat / Express trains 30-60 days ahead on IRCTC to secure confirmed lower-tier fares.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#185240] mt-1.5 shrink-0" />
                    <span><strong>Prepaid Auto / Taxi Counters:</strong> At airports and railway stations, always opt for prepaid police counters or certified ride apps to avoid tout surcharges.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* ---------------- TAB 4: SAVED TRIPS ---------------- */}
          {activeTab === 'saved' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#EDE8E0]">
                <div>
                  <h3 className="font-serif-title text-lg font-bold text-[#13221B]">
                    Saved Trip Plans ({savedItineraries.length})
                  </h3>
                  <p className="text-xs text-[#5C7065]">
                    Previously generated itineraries stored locally in this browser.
                  </p>
                </div>
              </div>

              {savedItineraries.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#D5DDD8] p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-[#7A8E82] mx-auto flex items-center justify-center">
                    <Bookmark className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[#13221B] text-sm">No Saved Itineraries Yet</h4>
                  <p className="text-xs text-[#7A8E82] max-w-sm mx-auto">
                    Customize your destinations, dates, and budget, then click <strong>"Save"</strong> to store your plan here for future access.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedItineraries.map((saved) => (
                    <div
                      key={saved.id}
                      className="p-5 rounded-2xl bg-white border border-[#D5DDD8] hover:border-[#185240] transition-all space-y-3 shadow-xs flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2.5 py-0.5 rounded-full font-bold bg-[#FAF7F2] text-[#185240] border border-[#D5DDD8]">
                            {saved.travelStyle} Style
                          </span>
                          <span className="text-[10px] text-[#7A8E82]">{saved.savedAt}</span>
                        </div>

                        <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                          {saved.title}
                        </h4>

                        <div className="text-xs text-[#5C7065] space-y-1">
                          <div>
                            <strong>Destinations:</strong>{' '}
                            {saved.destinations.map((d) => d.name).join(' → ')}
                          </div>
                          <div>
                            <strong>Dates:</strong> {saved.startDate} to {saved.endDate} ({saved.durationDays} Days)
                          </div>
                          <div>
                            <strong>Travelers:</strong> {saved.travelersCount}
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#EDE8E0] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase text-[#7A8E82] block font-bold">
                            Total Budget
                          </span>
                          <span className="text-sm font-bold text-[#185240]">
                            ₹{saved.totalCostINR.toLocaleString('en-IN')} INR
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleDeleteSaved(saved.id)}
                            className="p-1.5 rounded-lg text-[#7A8E82] hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                            title="Delete saved plan"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleLoadSavedItinerary(saved)}
                            className="px-3 py-1.5 rounded-xl bg-[#185240] hover:bg-[#0B2B20] text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Load</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ================= MODAL FOOTER ================= */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#D5DDD8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#5C7065] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#185240]" />
            <span>
              Helplines: <strong>1363</strong> (Ministry of Tourism) & <strong>112</strong> (National Emergency)
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleCopyPlan}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold text-[#185240] bg-[#FAF7F2] hover:bg-[#EDE8E0] border border-[#D5DDD8] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Copied' : 'Copy Itinerary'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-2 rounded-xl text-xs font-bold text-white bg-[#185240] hover:bg-[#0B2B20] transition-colors cursor-pointer shadow-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
